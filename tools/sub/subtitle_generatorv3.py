import os
import whisper
import torch
import warnings
import threading
import multiprocessing
from concurrent.futures import ThreadPoolExecutor, as_completed
from tkinter import Tk, filedialog
from tqdm import tqdm
import gc
import time

# Ẩn cảnh báo FP16 CPU
warnings.filterwarnings("ignore", message="FP16 is not supported on CPU")
warnings.filterwarnings("ignore", category=UserWarning)

# Cấu hình tối ưu cho CPU Intel i7 8700
def optimize_for_cpu():
    """Tối ưu cấu hình cho CPU Intel i7 8700"""
    # Sử dụng tất cả cores có sẵn (i7 8700 có 6 cores, 12 threads)
    torch.set_num_threads(multiprocessing.cpu_count())
    
    # Tối ưu memory allocation
    torch.backends.cudnn.benchmark = False
    torch.backends.cudnn.deterministic = True
    
    # Giảm memory fragmentation
    if hasattr(torch, 'set_memory_fraction'):
        torch.set_memory_fraction(0.8)
    
    print(f"🔧 Tối ưu cho CPU: {multiprocessing.cpu_count()} cores/threads")

# Hộp thoại chọn thư mục
root = Tk()
root.withdraw()
folder_path = filedialog.askdirectory(title="Chọn thư mục chứa video")

if not folder_path:
    print("❌ Bạn chưa chọn thư mục nào.")
    exit()

# Liệt kê video
video_extensions = (".mp4", ".mkv", ".avi", ".mov")
video_files = [f for f in os.listdir(folder_path) if f.lower().endswith(video_extensions)]

if not video_files:
    print("❌ Không tìm thấy video trong thư mục.")
    exit()

print(f"📂 Thư mục: {folder_path}")
print(f"🎞️ Tìm thấy {len(video_files)} video:")
for idx, v in enumerate(video_files, 1):
    print(f"   {idx}. {v}")

# Tối ưu cho CPU
optimize_for_cpu()

# Check GPU/CPU với tối ưu cho i7 8700
if torch.cuda.is_available():
    device = "cuda"
    fp16 = True
    print("\n⚡ Phát hiện GPU CUDA → FP16.")
elif getattr(torch.backends, "mps", None) and torch.backends.mps.is_available():
    device = "mps"
    fp16 = False
    print("\n🍎 Phát hiện Apple Silicon (MPS) → FP32.")
else:
    device = "cpu"
    fp16 = False
    print("\n🐢 CPU Intel i7 8700 → FP32 với tối ưu đa luồng.")

# Load model Whisper với tối ưu
print("📥 Đang tải model Whisper (medium)...")
model = whisper.load_model("medium", device=device)

# Cache model để tránh reload
_model_cache = {}

def get_cached_model():
    """Lấy model từ cache hoặc tạo mới"""
    if device not in _model_cache:
        _model_cache[device] = model
    return _model_cache[device]

def format_time(t):
    h, m = divmod(t, 3600)
    m, s = divmod(m, 60)
    ms = (s - int(s)) * 1000
    return f"{int(h):02}:{int(m):02}:{int(s):02},{int(ms):03}"

def estimate_duration(video_path):
    """Ước lượng thời lượng video nhanh hơn"""
    try:
        # Sử dụng whisper với chunk size nhỏ để ước lượng nhanh
        temp_model = whisper.load_model("tiny", device=device)
        result = temp_model.transcribe(
            video_path, 
            fp16=fp16, 
            verbose=False, 
            task="transcribe",
            condition_on_previous_text=False,
            temperature=0.0
        )
        duration = result["segments"][-1]["end"] if result["segments"] else 0
        del temp_model
        gc.collect()
        return duration
    except Exception as e:
        print(f"⚠️ Không thể ước lượng {os.path.basename(video_path)}: {e}")
        return 0

def generate_subtitles(video_path, output_srt, output_txt, batch_pbar):
    """Sinh phụ đề + TXT với progress bar + ETA được tối ưu"""
    try:
        # Tối ưu transcribe cho CPU
        result = model.transcribe(
            video_path, 
            fp16=fp16, 
            verbose=False, 
            task="transcribe",
            condition_on_previous_text=False,  # Tăng tốc độ
            temperature=0.0,  # Kết quả ổn định hơn
            compression_ratio_threshold=2.4,  # Tối ưu cho CPU
            logprob_threshold=-1.0,  # Giảm threshold
            no_speech_threshold=0.6  # Tăng threshold
        )

        if not result["segments"]:
            print(f"⚠️ Không có audio được phát hiện trong {os.path.basename(video_path)}")
            return

        total_duration = result["segments"][-1]["end"]

        with open(output_srt, "w", encoding="utf-8") as f_srt, \
             open(output_txt, "w", encoding="utf-8") as f_txt, \
             tqdm(total=total_duration,
                  desc=f"⏳ {os.path.basename(video_path)}",
                  ncols=100,
                  dynamic_ncols=True,
                  smoothing=0.1,
                  unit="sec",
                  leave=False) as pbar:

            for i, segment in enumerate(result["segments"], start=1):
                start = segment["start"]
                end = segment["end"]
                text = segment["text"].strip()

                # Update progress bar của file
                pbar.update(end - start)

                # Update progress bar tổng batch
                if batch_pbar:
                    batch_pbar.update(end - start)

                # Ghi SRT
                f_srt.write(f"{i}\n{format_time(start)} --> {format_time(end)}\n{text}\n\n")

                # Ghi TXT
                f_txt.write(text + "\n")

        # Giải phóng memory
        del result
        gc.collect()

    except Exception as e:
        print(f"❌ Lỗi khi xử lý {os.path.basename(video_path)}: {e}")
        raise

def process_video_batch(video_batch, folder_path, batch_pbar):
    """Xử lý batch video với threading"""
    results = []
    
    def process_single_video(video_info):
        idx, video = video_info
        video_path = os.path.join(folder_path, video)
        output_srt = os.path.splitext(video_path)[0] + ".srt"
        output_txt = os.path.splitext(video_path)[0] + ".txt"

        print(f"\n🔄 [{idx}/{len(video_files)}] Đang xử lý: {video} ...")
        try:
            generate_subtitles(video_path, output_srt, output_txt, batch_pbar)
            print(f"✅ Hoàn thành: {output_srt}, {output_txt}")
            return True
        except Exception as e:
            print(f"❌ Lỗi với {video}: {e}")
            return False

    # Sử dụng ThreadPoolExecutor cho CPU-bound tasks
    max_workers = min(2, len(video_batch))  # Giới hạn 2 threads cho CPU
    with ThreadPoolExecutor(max_workers=max_workers) as executor:
        futures = [executor.submit(process_single_video, (idx, video)) 
                  for idx, video in enumerate(video_batch, 1)]
        
        for future in as_completed(futures):
            results.append(future.result())

    return results

# --------------------------------------------------
# ƯỚC LƯỢNG TỔNG THỜI LƯỢNG TOÀN BỘ VIDEO (Tối ưu)
# --------------------------------------------------
print("\n📏 Đang ước lượng tổng thời lượng video...")

total_duration_all = 0
durations = {}

# Sử dụng threading để ước lượng song song
def estimate_video_duration(video):
    video_path = os.path.join(folder_path, video)
    duration = estimate_duration(video_path)
    return video, duration

# Ước lượng song song với ThreadPoolExecutor
with ThreadPoolExecutor(max_workers=min(3, len(video_files))) as executor:
    future_to_video = {executor.submit(estimate_video_duration, video): video 
                      for video in video_files}
    
    for future in tqdm(as_completed(future_to_video), 
                      total=len(video_files), 
                      desc="📏 Ước lượng thời lượng"):
        video, duration = future.result()
        durations[video] = duration
        total_duration_all += duration

print(f"🕒 Tổng thời lượng: {int(total_duration_all)} giây (~ {total_duration_all/60:.1f} phút)")

# --------------------------------------------------
# TIẾN TRÌNH CHÍNH (batch ETA với tối ưu)
# --------------------------------------------------
print("\n🚀 Bắt đầu xử lý với tối ưu cho CPU Intel i7 8700...")

with tqdm(total=total_duration_all,
          desc="📊 Tổng tiến trình",
          ncols=100,
          dynamic_ncols=True,
          smoothing=0.1,
          unit="sec") as batch_pbar:

    # Xử lý từng video một cách tuần tự để tối ưu memory
    for idx, video in enumerate(video_files, 1):
        video_path = os.path.join(folder_path, video)
        output_srt = os.path.splitext(video_path)[0] + ".srt"
        output_txt = os.path.splitext(video_path)[0] + ".txt"

        print(f"\n🔄 [{idx}/{len(video_files)}] Đang xử lý: {video} ...")
        try:
            generate_subtitles(video_path, output_srt, output_txt, batch_pbar)
            print(f"✅ Hoàn thành: {output_srt}, {output_txt}")
        except Exception as e:
            print(f"❌ Lỗi với {video}: {e}")
        
        # Giải phóng memory sau mỗi video
        gc.collect()

print("\n🎉 Xong toàn bộ!")
print("💡 Tips: Để tăng tốc hơn nữa, hãy:")
print("   - Sử dụng model 'small' thay vì 'medium'")
print("   - Giảm độ phân giải video")
print("   - Đóng các ứng dụng khác để giải phóng CPU")

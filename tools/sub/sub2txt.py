import os
import re

def srt_to_txt_file(srt_path, txt_path):
    output_lines = []
    with open(srt_path, "r", encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if not line:
                continue
            # bỏ số thứ tự
            if re.match(r"^\d+$", line):
                continue
            # bỏ dòng thời gian
            if re.match(r"^\d{2}:\d{2}:\d{2},\d{3}\s+-->\s+\d{2}:\d{2}:\d{2},\d{3}$", line):
                continue
            output_lines.append(line)

    os.makedirs(os.path.dirname(txt_path), exist_ok=True)
    with open(txt_path, "w", encoding="utf-8") as f:
        f.write("\n".join(output_lines))
    print(f"✅ Đã lưu: {txt_path}")

def convert_srt_folder(root_dir):
    for root, dirs, files in os.walk(root_dir):
        for file in files:
            if file.lower().endswith(".srt"):
                srt_path = os.path.join(root, file)
                txt_path = os.path.join(root, file[:-4] + ".txt")
                srt_to_txt_file(srt_path, txt_path)

if __name__ == "__main__":
    folder = input("Nhập đường dẫn thư mục chứa file .srt: ").strip()
    # loại bỏ dấu nháy nếu có
    folder = folder.strip("'\"")
    if os.path.exists(folder):
        convert_srt_folder(folder)
        print("✅ Hoàn tất convert tất cả file .srt trong thư mục và subfolder.")
    else:
        print("❌ Thư mục không tồn tại!")
#!/usr/bin/env python3
"""
📚 OCR + Ollama Refine (MacBook Pro M2 Optimized)
- Hỗ trợ PDF, PNG, JPG, HEIC
- Bước 1: OCR -> file .raw.txt
- Bước 2: Refine file .raw.txt -> file .txt hoàn chỉnh bằng Ollama
- Hiển thị progress bar, memory usage
"""

import os
import sys
import time
import gc
import psutil
import re
from pathlib import Path
from tqdm import tqdm
import pytesseract
from pdf2image import convert_from_path
from PyPDF2 import PdfReader
import requests
from PIL import Image
from pillow_heif import register_heif_opener

register_heif_opener()

# Cấu hình Ollama
OLLAMA_URL = "http://localhost:11434/api/generate"
OLLAMA_MODEL = "llama3.2-vision:latest"
CHUNK_SIZE = 3000  # ký tự mỗi chunk refine

POPPLER_PATH = "/opt/homebrew/bin"  # Poppler cho PDF

class MemoryMonitor:
    def __init__(self):
        self.process = psutil.Process()

    def check(self):
        mem = self.process.memory_info().rss / 1024 / 1024
        percent = self.process.memory_percent()
        print(f"💾 Memory: {mem:.1f}MB ({percent:.1f}%)")
        if percent > 80:
            print("⚠️ Memory usage cao, nên theo dõi!")

def detect_math_expressions(text: str) -> str:
    pattern = r"([A-Za-z0-9\s\+\-\*/=^_√∑∫]+)"
    results = re.findall(pattern, text)
    converted = text
    for expr in results:
        if any(op in expr for op in ["=", "+", "-", "*", "/", "^", "_", "√", "∑", "∫"]):
            converted = converted.replace(expr, f"$$ {expr.strip()} $$")
    return converted

class OCRRefinePipeline:
    def __init__(self):
        self.memory_monitor = MemoryMonitor()

    def ocr_pdf(self, pdf_path: Path):
        raw_txt_path = pdf_path.with_name(pdf_path.stem + ".raw.txt")
        if raw_txt_path.exists():
            print(f"⏩ Bỏ qua OCR (đã có): {raw_txt_path.name}")
            return raw_txt_path

        print(f"\n📄 OCR PDF: {pdf_path.name}")
        start = time.time()
        text_content = ""
        try:
            reader = PdfReader(str(pdf_path))
            for page in reader.pages:
                text_content += page.extract_text() or ""
            if not text_content.strip():
                print("🔎 Không có text layer -> OCR từng trang...")
                images = convert_from_path(str(pdf_path), poppler_path=POPPLER_PATH)
                for i, img in enumerate(tqdm(images, desc="OCR", unit="page")):
                    raw_text = pytesseract.image_to_string(img, lang="eng+vie")
                    processed_text = detect_math_expressions(raw_text)
                    text_content += f"\n\n--- Page {i+1} ---\n{processed_text}"
            with open(raw_txt_path, "w", encoding="utf-8") as f:
                f.write(text_content)
            elapsed = time.time() - start
            print(f"✅ OCR hoàn thành: {pdf_path.name} ({elapsed:.2f}s)")
            self.memory_monitor.check()
        except Exception as e:
            print(f"❌ Lỗi OCR {pdf_path.name}: {e}")
        finally:
            gc.collect()
        return raw_txt_path

    def ocr_image(self, img_path: Path):
        raw_txt_path = img_path.with_name(img_path.stem + ".raw.txt")
        if raw_txt_path.exists():
            print(f"⏩ Bỏ qua OCR (đã có): {raw_txt_path.name}")
            return raw_txt_path
        print(f"\n📄 OCR Image: {img_path.name}")
        start = time.time()
        text_content = ""
        try:
            img = Image.open(img_path)
            raw_text = pytesseract.image_to_string(img, lang="eng+vie")
            text_content = detect_math_expressions(raw_text)
            with open(raw_txt_path, "w", encoding="utf-8") as f:
                f.write(text_content)
            elapsed = time.time() - start
            print(f"✅ OCR hoàn thành: {img_path.name} ({elapsed:.2f}s)")
            self.memory_monitor.check()
        except Exception as e:
            print(f"❌ Lỗi mở ảnh {img_path.name}: {e}")
        finally:
            gc.collect()
        return raw_txt_path

    def refine_txt_file(self, raw_txt_path: Path):
        refined_path = raw_txt_path.with_name(raw_txt_path.stem.replace(".raw","") + ".txt")
        if refined_path.exists():
            print(f"⏩ Bỏ qua refine (đã có): {raw_txt_path.name}")
            return refined_path

        print(f"📝 Refine với Ollama: {raw_txt_path.name}")
        try:
            with open(raw_txt_path, "r", encoding="utf-8") as f:
                raw_text = f.read()
            raw_text = raw_text.replace('\x0b','').replace('\x0c','')

            refined_text = ""
            chunks = [raw_text[i:i+CHUNK_SIZE] for i in range(0, len(raw_text), CHUNK_SIZE)]

            for i, chunk in enumerate(tqdm(chunks, desc="Refine", unit="chunk")):
                payload = {
                    "model": OLLAMA_MODEL,
                    "prompt": f"Refine nội dung sau, sửa chính tả và ngữ cảnh: {chunk}",
                    "max_tokens": 4000
                }
                try:
                    r = requests.post(OLLAMA_URL, json=payload)
                    r.raise_for_status()
                    res = r.json()
                    if "results" in res and res["results"]:
                        refined_chunk = res["results"][0].get("content","")
                        refined_text += refined_chunk + "\n"
                except Exception as e:
                    print(f"❌ Lỗi refine chunk {i+1}: {e}")

            with open(refined_path, "w", encoding="utf-8") as f:
                f.write(refined_text.strip())
            if not refined_text.strip():
                print(f"❌ Ollama refine trả về trống: {raw_txt_path.name}")
            else:
                print(f"✅ Refine hoàn tất: {refined_path.name}")
            self.memory_monitor.check()
        except Exception as e:
            print(f"❌ Lỗi refine {raw_txt_path.name}: {e}")
        finally:
            gc.collect()
        return refined_path

    def scan_folder(self, folder_path):
        folder = Path(folder_path.strip().strip("'\""))
        if not folder.is_dir():
            print(f"❌ Thư mục không tồn tại: {folder}")
            return

        files = list(folder.rglob("*"))
        pdf_files = [f for f in files if f.suffix.lower()==".pdf"]
        img_files = [f for f in files if f.suffix.lower() in [".png",".jpg",".jpeg",".heic"]]

        all_files = pdf_files + img_files
        if not all_files:
            print("⚠️ Không tìm thấy file PDF hoặc ảnh nào")
            return

        print(f"📂 Tìm thấy {len(all_files)} file trong {folder}")

        for i, fpath in enumerate(all_files,1):
            print(f"\n📊 Tiến trình: {i}/{len(all_files)} ({(i/len(all_files))*100:.1f}%)")
            raw_txt = None
            if fpath.suffix.lower()==".pdf":
                raw_txt = self.ocr_pdf(fpath)
            else:
                raw_txt = self.ocr_image(fpath)

            if raw_txt:
                self.refine_txt_file(raw_txt)

def main():
    print("=== 📚 OCR + Ollama Refine (MacBook Pro M2 Optimized) ===")
    folder = input("👉 Nhập đường dẫn thư mục gốc: ").strip()
    if not folder:
        print("❌ Bạn chưa nhập thư mục")
        sys.exit(1)

    pipeline = OCRRefinePipeline()
    start = time.time()
    pipeline.scan_folder(folder)
    total = time.time() - start
    print("\n🎉 Hoàn tất toàn bộ pipeline!")
    print(f"⏱️ Tổng thời gian: {total:.2f}s")

if __name__ == "__main__":
    main()

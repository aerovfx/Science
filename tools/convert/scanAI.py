#!/usr/bin/env python3
"""
📚 PDF/Image Scanner with OCR + Math to LaTeX (MacBook Pro M2 Optimized, HEIC supported)
- Quét toàn bộ thư mục và thư mục con để tìm file PDF & ảnh (JPG, PNG, HEIC, ...)
- Nếu PDF có text layer → trích xuất trực tiếp
- Nếu không có text layer hoặc ảnh → OCR bằng Tesseract
- Công thức toán học được phát hiện và bọc lại thành LaTeX: $$ ... $$
- Lưu file .txt cùng tên và cùng thư mục với file gốc
- Hiển thị tiến trình, % hoàn thành, memory usage
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
from PIL import Image
import pillow_heif  # để đọc file HEIC

# Đăng ký HEIF plugin cho Pillow
pillow_heif.register_heif_opener()

# MacBook Pro (M1/M2) thường cài Poppler qua Homebrew
POPPLER_PATH = "/opt/homebrew/bin"

SUPPORTED_IMG_EXTS = [".png", ".jpg", ".jpeg", ".heic", ".tif", ".tiff", ".bmp"]

class MemoryMonitor:
    """Theo dõi memory usage"""
    def __init__(self):
        self.process = psutil.Process()

    def check(self):
        mem = self.process.memory_info().rss / 1024 / 1024
        percent = self.process.memory_percent()
        print(f"💾 Memory: {mem:.1f}MB ({percent:.1f}%)")
        if percent > 80:
            print("⚠️ Memory usage cao, nên theo dõi!")

def detect_math_expressions(text: str) -> str:
    """
    Phát hiện công thức toán học đơn giản và bọc lại thành LaTeX ($$ ... $$)
    """
    pattern = r"([A-Za-z0-9\s\+\-\*/=^_√∑∫]+)"
    results = re.findall(pattern, text)

    converted = text
    for expr in results:
        if any(op in expr for op in ["=", "+", "-", "*", "/", "^", "_", "√", "∑", "∫"]):
            converted = converted.replace(expr, f"$$ {expr.strip()} $$")

    return converted

def save_text(file_path: Path, content: str):
    """Lưu text ra file .txt cùng thư mục"""
    txt_path = file_path.with_suffix(".txt")
    with open(txt_path, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"💾 Đã lưu: {txt_path}")

class PDFImageScanner:
    def __init__(self, ocr_only=False):
        self.ocr_only = ocr_only
        self.memory_monitor = MemoryMonitor()

    def extract_from_pdf(self, pdf_path: Path):
        """Xử lý file PDF"""
        print(f"\n📄 Đang xử lý PDF: {pdf_path.name}")
        start_time = time.time()
        text_content = ""

        try:
            # 1. Thử đọc text layer
            if not self.ocr_only:
                reader = PdfReader(str(pdf_path))
                for page in reader.pages:
                    text_content += page.extract_text() or ""

            # 2. Nếu không có text → OCR
            if not text_content.strip():
                print("🔎 Không có text layer → OCR từng trang...")
                images = convert_from_path(str(pdf_path), poppler_path=POPPLER_PATH)

                for i, img in enumerate(tqdm(images, desc="OCR", unit="page")):
                    raw_text = pytesseract.image_to_string(img, lang="eng+vie")
                    processed_text = detect_math_expressions(raw_text)
                    text_content += f"\n\n--- Page {i+1} ---\n{processed_text}"

            # 3. Lưu file txt
            save_text(pdf_path, text_content)

            elapsed = time.time() - start_time
            print(f"✅ Hoàn thành PDF: {pdf_path.name} ({elapsed:.2f}s)")
            self.memory_monitor.check()

        except Exception as e:
            print(f"❌ Lỗi khi xử lý {pdf_path.name}: {e}")

        finally:
            gc.collect()

    def extract_from_image(self, img_path: Path):
        """Xử lý file ảnh (JPG, PNG, HEIC, ...)"""
        print(f"\n🖼️ Đang xử lý ảnh: {img_path.name}")
        start_time = time.time()

        try:
            img = Image.open(img_path).convert("RGB")  # HEIC sẽ load được nhờ pillow-heif
            raw_text = pytesseract.image_to_string(img, lang="eng+vie")
            processed_text = detect_math_expressions(raw_text)

            save_text(img_path, processed_text)

            elapsed = time.time() - start_time
            print(f"✅ Hoàn thành ảnh: {img_path.name} ({elapsed:.2f}s)")
            self.memory_monitor.check()

        except Exception as e:
            print(f"❌ Lỗi khi xử lý {img_path.name}: {e}")

        finally:
            gc.collect()

    def scan_folder(self, folder_path: str):
        """Quét toàn bộ thư mục và thư mục con"""
        folder = Path(folder_path.strip().strip("'\""))
        if not folder.is_dir():
            print(f"❌ Thư mục không tồn tại: {folder}")
            return

        files = [f for f in folder.rglob("*") if f.suffix.lower() in [".pdf"] + SUPPORTED_IMG_EXTS]

        if not files:
            print("⚠️ Không tìm thấy file PDF hoặc ảnh nào")
            return

        print(f"📂 Tìm thấy {len(files)} file trong {folder}")
        for i, f in enumerate(files, 1):
            print(f"\n📊 Tiến trình: {i}/{len(files)} ({(i/len(files))*100:.1f}%)")
            if f.suffix.lower() == ".pdf":
                self.extract_from_pdf(f)
            else:
                self.extract_from_image(f)

def main():
    print("=== 📚 PDF/Image Scanner with OCR + Math to LaTeX (MacBook Pro M2, HEIC supported) ===")
    folder = input("👉 Nhập đường dẫn thư mục gốc: ").strip()

    if not folder:
        print("❌ Bạn chưa nhập thư mục")
        sys.exit(1)

    scanner = PDFImageScanner(ocr_only=False)
    start = time.time()
    scanner.scan_folder(folder)
    total = time.time() - start

    print("\n🎉 Hoàn tất quét!")
    print(f"⏱️ Tổng thời gian: {total:.2f}s")

if __name__ == "__main__":
    main()

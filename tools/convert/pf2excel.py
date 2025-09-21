import pdfplumber
import pandas as pd
import os

def pdf2excel(pdf_file):
    # Lấy thư mục và tên file gốc
    base, ext = os.path.splitext(pdf_file)
    excel_file = base + ".xlsx"   # đổi đuôi thành .xlsx
    
    data = []
    with pdfplumber.open(pdf_file) as pdf:
        for page in pdf.pages:
            tables = page.extract_tables()
            for table in tables:
                for row in table:
                    data.append(row)

    # Xuất ra Excel cùng thư mục
    df = pd.DataFrame(data)
    df.to_excel(excel_file, index=False, header=False)

    print(f"✅ Đã chuyển {pdf_file} sang {excel_file}")

if __name__ == "__main__":
    pdf_path = input("Nhập đường dẫn file PDF: ").strip().strip("'").strip('"')
    pdf2excel(pdf_path)

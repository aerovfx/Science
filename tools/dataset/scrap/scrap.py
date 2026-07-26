import requests
from bs4 import BeautifulSoup
import json
import re
import os
from urllib.parse import urlparse

def scrape_quiz_from_url(url):
    res = requests.get(url)
    res.encoding = "utf-8"
    soup = BeautifulSoup(res.text, "html.parser")
    
    full_text = soup.get_text("\n", strip=False)
    m = re.search(r"Câu\s+1:(.*?)(Xem đáp án|$)", full_text, re.DOTALL)
    if not m:
        print("⚠️ Không tìm thấy phần quiz trong nội dung text.")
        return []
    
    quiz_part = m.group(1)
    question_splits = re.split(r"(Câu\s+\d+:)", quiz_part)

    questions = []
    for i in range(1, len(question_splits), 2):
        ques_number = question_splits[i].strip()
        content = question_splits[i+1].strip()

        lines = [l.strip() for l in content.splitlines() if l.strip()]

        question_text = ""
        choices = []
        correct = None

        for line in lines:
            if line.startswith("*"):
                opt = line.lstrip("*").strip()
                if opt.startswith("######"):
                    clean = opt.replace("######", "", 1).strip()
                    correct = clean
                    choices.append(clean)
                else:
                    choices.append(opt)
            else:
                if not question_text:
                    question_text = line

        questions.append({
            "number": ques_number,
            "question": question_text,
            "choices": choices,
            "answer": correct
        })

    return questions

def main():
    url = input("Nhập URL trang trắc nghiệm: ").strip()
    if not url:
        print("⚠️ URL không được để trống.")
        return
    
    print(f"👉 Đang tải dữ liệu từ: {url}")
    qs = scrape_quiz_from_url(url)
    if not qs:
        print("⚠️ Không tìm được câu hỏi nào.")
    else:
        # Phân tích cấu trúc URL
        parsed = urlparse(url)
        path_parts = [p for p in parsed.path.split("/") if p]

        # Tạo thư mục theo domain + các phần path (trừ phần cuối)
        save_dir = os.path.join(os.getcwd(), parsed.netloc, *path_parts[:-1])
        os.makedirs(save_dir, exist_ok=True)

        # Tên file = phần cuối của URL + .json
        filename = path_parts[-1] + ".json"
        filepath = os.path.join(save_dir, filename)

        with open(filepath, "w", encoding="utf-8") as f:
            json.dump(qs, f, ensure_ascii=False, indent=2)

        print(f"✅ Đã lưu {len(qs)} câu hỏi vào {filepath}")
        print("📌 Ví dụ 3 câu đầu:")
        for item in qs[:3]:
            print(json.dumps(item, ensure_ascii=False, indent=2))

if __name__ == "__main__":
    main()
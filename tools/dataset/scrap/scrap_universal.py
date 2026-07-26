import os
import re
import json
import requests
from bs4 import BeautifulSoup
from urllib.parse import urlparse

def scrap_quiz_page(url):
    """Scrap 1 trang quiz (trắc nghiệm hoặc tự luận)"""
    res = requests.get(url)
    res.encoding = "utf-8"
    soup = BeautifulSoup(res.text, "html.parser")

    questions = []

    # --- Trường hợp 1: Có question-box (quiz có label, nút chọn)
    q_boxes = soup.find_all("div", class_="question-box")
    if q_boxes:
        for q in q_boxes:
            q_text = q.find("div", class_="question-content")
            question_text = q_text.get_text(" ", strip=True) if q_text else ""

            choices = []
            correct = None
            for opt in q.find_all("label"):
                raw_text = opt.get_text(" ", strip=True)
                if "######" in opt.text or "correct" in opt.get("class", []):
                    correct = raw_text.replace("######", "").strip()
                choices.append(raw_text)

            questions.append({
                "question": question_text,
                "choices": choices,
                "answer": correct
            })
        return questions

    # --- Trường hợp 2: Quiz viết thẳng trong field-item (Câu 1: ...)
    content = soup.select_one("div.field-item")
    if content:
        lines = content.get_text("\n", strip=True).splitlines()
        current_q = None
        for line in lines:
            line = line.strip()
            if not line:
                continue
            if line.startswith("Câu"):
                if current_q:
                    questions.append(current_q)
                current_q = {"question": line, "choices": [], "answer": None}
            elif "Đáp án:" in line:
                if current_q:
                    current_q["answer"] = line.replace("Đáp án:", "").strip()
            else:
                if current_q:
                    # Nếu có dạng A. B. C. D.
                    if re.match(r"^[A-D]\.", line):
                        current_q["choices"].append(line)
                    else:
                        # Nếu không phải ABCD thì coi là phần giải thích (tự luận)
                        if current_q["answer"]:
                            current_q["answer"] += " " + line
                        else:
                            current_q["answer"] = line
        if current_q:
            questions.append(current_q)

    return questions


def scrap_url(url):
    """Kiểm tra URL là index hay quiz trực tiếp"""
    res = requests.get(url)
    res.encoding = "utf-8"
    soup = BeautifulSoup(res.text, "html.parser")

    # Tìm link con nếu có (index page)
    sub_links = [
        a["href"] for a in soup.find_all("a", href=True)
        if "trac-nghiem" in a["href"]
    ]
    if sub_links:
        print(f"👉 Phát hiện {len(sub_links)} link con, tiến hành scrap...")
        all_data = {}
        for link in sub_links:
            if not link.startswith("http"):
                link = "https://tech12h.com" + link
            data = scrap_quiz_page(link)
            all_data[link] = data
        return all_data
    else:
        print("👉 Trang là quiz trực tiếp, scrap luôn...")
        return {url: scrap_quiz_page(url)}


def save_json(data, url):
    """Lưu JSON theo cấu trúc thư mục từ URL"""
    parsed = urlparse(url)
    parts = parsed.path.strip("/").split("/")
    folder = os.path.join("data", *parts[:-1])
    os.makedirs(folder, exist_ok=True)

    filename = parts[-1]
    if not filename.endswith(".json"):
        filename = filename.replace(".html", "") + ".json"

    path = os.path.join(folder, filename)
    with open(path, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

    print(f"✅ Đã lưu dữ liệu vào {path}")


if __name__ == "__main__":
    url = input("Nhập URL trang trắc nghiệm: ").strip()
    print(f"👉 Đang tải dữ liệu từ: {url}")
    data = scrap_url(url)
    save_json(data, url)
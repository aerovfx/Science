import os
import json
import time
import random
import requests
from bs4 import BeautifulSoup
from urllib.parse import urlparse, urljoin
import cloudscraper
import re

# --- tải HTML chống chặn ---
def fetch_html(url):
    headers = {
        "User-Agent": random.choice([
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
            "(KHTML, like Gecko) Chrome/121.0 Safari/537.36",
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
            "AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15",
            "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 "
            "(KHTML, like Gecko) Chrome/120.0 Safari/537.36"
        ])
    }
    try:
        resp = requests.get(url, headers=headers, timeout=15)
        if resp.status_code == 200 and len(resp.text) > 1000:
            return resp.text
        else:
            print(f"⚠️ Requests trả về {resp.status_code}, thử cloudscraper...")
            scraper = cloudscraper.create_scraper()
            return scraper.get(url, headers=headers).text
    except Exception as e:
        print(f"❌ Lỗi khi tải {url}: {e}")
        return None

# --- tìm link con ---
def get_sub_links(url):
    html = fetch_html(url)
    if not html:
        return []
    
    soup = BeautifulSoup(html, "html.parser")
    links = []
    
    for a in soup.find_all("a", href=True):
        href = a["href"]
        full_url = urljoin(url, href)
        
        # Chấp nhận cả trac-nghiem và các link khác trong tech12h
        if full_url.startswith("https://tech12h.com") and full_url != url:
            # Loại bỏ các link không cần thiết
            skip_patterns = ['#', 'javascript:', 'mailto:', '.jpg', '.png', '.gif', '.pdf']
            if not any(pattern in full_url.lower() for pattern in skip_patterns):
                links.append(full_url)
    
    return sorted(set(links))

# --- phát hiện quiz và extract câu hỏi/đáp án ---
def extract_quiz_questions(soup):
    """Trích xuất câu hỏi quiz với đáp án"""
    questions = []
    
    # Các selector phổ biến cho quiz
    quiz_selectors = [
        ".quiz-block", ".quiz_question", ".question", ".quiz-item",
        ".mcq-question", ".multiple-choice", "[class*='quiz']", 
        "[class*='question']", ".wp-quiz", ".qsm_quiz"
    ]
    
    quiz_found = False
    
    for selector in quiz_selectors:
        quiz_blocks = soup.select(selector)
        if quiz_blocks:
            quiz_found = True
            print(f"   🎯 Phát hiện quiz với selector: {selector}")
            
            for i, block in enumerate(quiz_blocks):
                question_text = ""
                answer = None
                options = []
                
                # Tìm câu hỏi
                question_elem = block.select_one("h3, h4, h5, .question-text, .quiz-question, p:first-child")
                if question_elem:
                    question_text = question_elem.get_text(strip=True)
                else:
                    # Fallback: lấy text đầu tiên
                    question_text = block.get_text(" ", strip=True).split('\n')[0][:200]
                
                # Tìm các lựa chọn
                choice_selectors = [
                    "input[type='radio'] + label", "input[type='checkbox'] + label",
                    ".option", ".choice", ".answer-option", "li", ".wp-quiz-answer"
                ]
                
                for choice_sel in choice_selectors:
                    choices = block.select(choice_sel)
                    if choices:
                        for choice in choices:
                            opt_text = choice.get_text(strip=True)
                            if opt_text and len(opt_text) > 1:
                                options.append(opt_text)
                        break
                
                # Tìm đáp án đúng
                correct_selectors = [
                    "input[checked] + label", ".correct", ".answer", "[data-answer]",
                    ".wp-quiz-answer.correct", ".right-answer", ".correct-answer"
                ]
                
                for correct_sel in correct_selectors:
                    correct_elem = block.select_one(correct_sel)
                    if correct_elem:
                        answer = correct_elem.get_text(strip=True)
                        break
                
                # Nếu không tìm được đáp án, thử tìm trong thuộc tính
                if not answer:
                    for elem in block.select("*"):
                        if elem.get("data-correct") or elem.get("data-answer"):
                            answer = elem.get("data-correct") or elem.get("data-answer")
                            break
                
                if question_text:
                    questions.append({
                        "question": question_text,
                        "options": options if options else None,
                        "answer": answer,
                        "type": "quiz"
                    })
    
    return questions, quiz_found

# --- tạo Q&A tự luận từ văn bản ---
def create_text_qa(soup):
    """Tạo Q&A tự luận từ nội dung văn bản"""
    questions = []
    
    # Lấy nội dung chính
    main_content = soup.select_one(".entry-content, .post-content, .content, main, article")
    if not main_content:
        main_content = soup
    
    # Tìm các đoạn văn có ý nghĩa
    paragraphs = main_content.select("p, div")
    content_blocks = []
    
    for p in paragraphs:
        text = p.get_text(strip=True)
        # Lọc đoạn văn có ý nghĩa (ít nhất 50 ký tự)
        if len(text) > 50 and not re.match(r'^(Chia sẻ|Tags|Từ khóa|Nguồn)', text):
            content_blocks.append(text)
    
    # Nhóm nội dung thành các Q&A
    if content_blocks:
        # Nếu có nhiều đoạn, tạo nhiều câu hỏi
        if len(content_blocks) > 3:
            for i, block in enumerate(content_blocks[:10]):  # Giới hạn 10 câu
                # Tạo câu hỏi dựa trên nội dung
                if len(block) > 100:
                    # Câu hỏi giải thích
                    question = f"Hãy giải thích về nội dung sau: {block[:100]}..."
                else:
                    question = f"Nội dung này nói về điều gì?"
                
                questions.append({
                    "question": question,
                    "answer": block,
                    "type": "text_qa"
                })
        else:
            # Nếu ít đoạn, gộp thành 1 câu hỏi tổng quan
            combined_content = "\n\n".join(content_blocks)
            questions.append({
                "question": "Tóm tắt nội dung chính của bài viết này.",
                "answer": combined_content,
                "type": "text_qa"
            })
    
    return questions

# --- scrape trang với phân loại tự động ---
def scrape_page(url):
    html = fetch_html(url)
    if not html:
        return None
    
    soup = BeautifulSoup(html, "html.parser")
    
    # Lấy tiêu đề
    title_elem = soup.select_one("h1, .entry-title, .post-title, title")
    title = title_elem.get_text(strip=True) if title_elem else "untitled"
    
    print(f"   📖 Đang xử lý: {title}")
    
    # Bước 1: Thử tìm quiz trước
    questions, has_quiz = extract_quiz_questions(soup)
    
    if has_quiz and questions:
        print(f"   ✅ Tìm thấy {len(questions)} câu hỏi quiz")
        content_type = "quiz"
    else:
        # Bước 2: Tạo Q&A tự luận từ văn bản
        print(f"   📝 Không có quiz, tạo Q&A tự luận...")
        questions = create_text_qa(soup)
        content_type = "text_qa"
        print(f"   ✅ Tạo được {len(questions)} câu Q&A tự luận")
    
    return {
        "title": title,
        "url": url,
        "content_type": content_type,
        "questions": questions,
        "total_questions": len(questions)
    }

# --- tạo cấu trúc thư mục theo URL ---
def save_to_file(data, url):
    parsed = urlparse(url)
    path_parts = [p for p in parsed.path.strip("/").split("/") if p]
    
    # Tạo thư mục theo cấu trúc URL
    if len(path_parts) > 1:
        folder_path = os.path.join("output", *path_parts[:-1])
        file_name = path_parts[-1]
    else:
        folder_path = "output"
        file_name = path_parts[0] if path_parts else "index"
    
    # Tạo thư mục
    os.makedirs(folder_path, exist_ok=True)
    
    # Tạo tên file JSON
    clean_filename = re.sub(r'[^\w\-_.]', '_', file_name)
    if not clean_filename.endswith('.json'):
        clean_filename += '.json'
    
    full_path = os.path.join(folder_path, clean_filename)
    
    # Lưu file
    with open(full_path, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    
    print(f"   💾 Đã lưu: {full_path}")
    return full_path

# --- thống kê kết quả ---
def print_summary(results):
    print("\n" + "="*60)
    print("📊 THỐNG KÊ KẾT QUả")
    print("="*60)
    
    total_pages = len(results)
    quiz_pages = len([r for r in results if r.get('content_type') == 'quiz'])
    text_pages = len([r for r in results if r.get('content_type') == 'text_qa'])
    total_questions = sum(r.get('total_questions', 0) for r in results)
    
    print(f"📄 Tổng số trang đã scrape: {total_pages}")
    print(f"🎯 Trang có quiz: {quiz_pages}")
    print(f"📝 Trang Q&A tự luận: {text_pages}")
    print(f"❓ Tổng số câu hỏi: {total_questions}")
    print("="*60)

# --- MAIN ---
if __name__ == "__main__":
    print("🚀 Tech12h Enhanced Scraper - Quiz & Q&A Detection")
    print("-" * 50)
    
    parent_url = input("Nhập URL thư mục cha: ").strip()
    
    print(f"🔍 Đang tìm link con từ: {parent_url}")
    sub_links = get_sub_links(parent_url)
    
    if not sub_links:
        print("⚠️ Không tìm thấy link con nào.")
    else:
        print(f"👉 Tìm thấy {len(sub_links)} link con. Bắt đầu scrape...")
        print("-" * 50)
        
        results = []
        
        for i, link in enumerate(sub_links, 1):
            print(f"\n[{i}/{len(sub_links)}] 🔎 {link}")
            
            data = scrape_page(link)
            if data:
                file_path = save_to_file(data, link)
                results.append(data)
            else:
                print(f"   ❌ Không thể scrape được")
            
            # Nghỉ ngẫu nhiên tránh bị chặn
            sleep_time = random.uniform(1.5, 3.5)
            print(f"   ⏰ Nghỉ {sleep_time:.1f}s...")
            time.sleep(sleep_time)
        
        # In thống kê cuối
        print_summary(results)
        print("✨ Hoàn thành!")
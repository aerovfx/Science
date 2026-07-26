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
    
    # Kiểm tra xem có phải trang trắc nghiệm không
    page_title = soup.select_one("h1, title")
    is_quiz_page = False
    
    if page_title:
        title_text = page_title.get_text(strip=True).lower()
        if any(keyword in title_text for keyword in ['trắc nghiệm', 'quiz', 'test', 'câu hỏi', 'đáp án']):
            is_quiz_page = True
            print(f"   🎯 Phát hiện trang trắc nghiệm: {title_text}")
    
    if not is_quiz_page:
        return questions, False
    
    # Các selector phổ biến cho quiz
    quiz_selectors = [
        ".quiz-block", ".quiz_question", ".question", ".quiz-item",
        ".mcq-question", ".multiple-choice", "[class*='quiz']", 
        "[class*='question']", ".wp-quiz", ".qsm_quiz", ".quiz-container",
        "form .question", ".test-question", "ol li", "ul li"
    ]
    
    quiz_found = False
    
    for selector in quiz_selectors:
        quiz_blocks = soup.select(selector)
        if quiz_blocks and len(quiz_blocks) > 2:  # Phải có ít nhất 3 câu hỏi
            quiz_found = True
            print(f"   🎯 Tìm thấy {len(quiz_blocks)} câu hỏi với selector: {selector}")
            
            for i, block in enumerate(quiz_blocks[:20]):  # Giới hạn 20 câu
                question_text = ""
                answer = None
                options = []
                
                # Tìm câu hỏi
                question_elem = block.select_one("h3, h4, h5, .question-text, .quiz-question, strong, b")
                if question_elem:
                    question_text = question_elem.get_text(strip=True)
                else:
                    # Fallback: lấy text đầu tiên
                    full_text = block.get_text(" ", strip=True)
                    # Tách câu hỏi (thường kết thúc bằng dấu ?)
                    if '?' in full_text:
                        question_text = full_text.split('?')[0] + '?'
                    else:
                        question_text = full_text[:150] + "..."
                
                # Tìm các lựa chọn
                choice_selectors = [
                    "input[type='radio'] + label", "input[type='checkbox'] + label",
                    ".option", ".choice", ".answer-option", "li", ".wp-quiz-answer",
                    "label", "span"
                ]
                
                for choice_sel in choice_selectors:
                    choices = block.select(choice_sel)
                    if choices:
                        for choice in choices:
                            opt_text = choice.get_text(strip=True)
                            if (opt_text and 
                                len(opt_text) > 1 and 
                                len(opt_text) < 200 and
                                opt_text not in options):
                                options.append(opt_text)
                        if options:
                            break
                
                # Tìm đáp án đúng
                correct_selectors = [
                    "input[checked] + label", ".correct", ".answer", "[data-answer]",
                    ".wp-quiz-answer.correct", ".right-answer", ".correct-answer",
                    ".selected", ".active"
                ]
                
                for correct_sel in correct_selectors:
                    correct_elem = block.select_one(correct_sel)
                    if correct_elem:
                        answer = correct_elem.get_text(strip=True)
                        break
                
                # Nếu không tìm được đáp án, thử tìm trong thuộc tính
                if not answer:
                    for elem in block.select("*"):
                        if elem.get("data-correct") or elem.get("data-answer") or elem.get("value"):
                            answer = elem.get("data-correct") or elem.get("data-answer") or elem.get("value")
                            if answer:
                                break
                
                if question_text and len(question_text) > 10:
                    questions.append({
                        "question": question_text,
                        "options": options if len(options) > 1 else None,
                        "answer": answer,
                        "type": "quiz"
                    })
            
            break  # Đã tìm thấy quiz, không cần thử selector khác
    
    return questions, quiz_found

# --- tạo Q&A tự luận từ văn bản ---
def create_text_qa(soup):
    """Tạo Q&A tự luận từ nội dung văn bản"""
    questions = []
    
    # 1. Tìm nội dung chính với nhiều selector - ưu tiên cụ thể hơn
    main_selectors = [
        ".entry-content", ".post-content", ".content", ".main-content", 
        ".page-content", ".single-content", ".post-body", "#main", 
        "#content", "main", "article", ".container .row .col",
        ".post", ".single", ".entry", "body"  # Thêm body làm fallback
    ]
    
    main_content = None
    for selector in main_selectors:
        main_content = soup.select_one(selector)
        if main_content:
            print(f"   📍 Tìm thấy nội dung với selector: {selector}")
            break
    
    if not main_content:
        print("   ⚠️ Không tìm thấy main content, dùng toàn bộ soup")
        main_content = soup
    
    # 2. Loại bỏ các phần không cần thiết nhưng giữ lại nội dung chính
    unwanted_selectors = [
        "script", "style", "noscript", ".advertisement", ".ads", 
        ".sidebar:not(:contains('Bài'))", ".footer:not(:contains('Bài'))", 
        ".header:not(:contains('Bài'))", ".nav:not(:contains('Bài'))",
        ".menu:not(:contains('Bài'))", ".social", "iframe"
    ]
    
    for selector in unwanted_selectors:
        for element in main_content.select(selector):
            element.decompose()
    
    # 3. Phương pháp trích xuất nội dung đặc biệt cho trang giáo dục
    content_blocks = []
    seen_texts = set()
    
    print("   🔍 Đang phân tích nội dung giáo dục...")
    
    # Cách 1: Tìm các phần bài tập cụ thể (cho trang toán, lý, hóa...)
    exercise_patterns = [
        r'Bài\s*\d+[.:]',  # Bài 1:, Bài 1.1:
        r'PHẦN\s*[IVX\d]+',  # PHẦN I, PHẦN II
        r'Câu\s*\d+[.:]',   # Câu 1:, Câu 2.
        r'[a-d]\)',         # a), b), c), d)
        r'Bài tập\s*\d+'    # Bài tập 1
    ]
    
    # Lấy toàn bộ text và phân tích
    full_text = main_content.get_text(separator="\n", strip=True)
    lines = [line.strip() for line in full_text.split('\n') if line.strip()]
    
    current_section = ""
    section_title = ""
    
    for i, line in enumerate(lines):
        if len(line) < 5:
            continue
            
        # Kiểm tra xem có phải là tiêu đề bài tập không
        is_exercise_title = any(re.match(pattern, line, re.IGNORECASE) for pattern in exercise_patterns)
        is_main_heading = (
            line.isupper() and len(line) > 10 or
            re.match(r'^[IVX\d]+\.', line) or
            'PHẦN' in line.upper() or
            'BÀI' in line.upper() and ':' in line
        )
        
        if is_main_heading:
            # Lưu section trước đó
            if current_section and len(current_section) > 100:
                content_blocks.append({
                    'title': section_title,
                    'content': current_section.strip()
                })
            
            # Bắt đầu section mới
            section_title = line
            current_section = line + "\n"
            
        elif is_exercise_title:
            # Nếu là tiêu đề bài tập nhỏ, thêm vào section hiện tại
            current_section += "\n" + line + "\n"
            
            # Lấy thêm một vài dòng tiếp theo (thường là đề bài)
            for j in range(i+1, min(i+5, len(lines))):
                next_line = lines[j]
                if len(next_line) > 10 and not any(re.match(p, next_line, re.IGNORECASE) for p in exercise_patterns):
                    current_section += next_line + "\n"
                else:
                    break
        else:
            # Thêm vào section hiện tại
            current_section += line + "\n"
    
    # Thêm section cuối cùng
    if current_section and len(current_section) > 100:
        content_blocks.append({
            'title': section_title,
            'content': current_section.strip()
        })
    
    print(f"   📚 Tìm thấy {len(content_blocks)} phần nội dung có cấu trúc")
    
    # Cách 2: Nếu không tìm được cấu trúc, dùng phương pháp cũ
    if len(content_blocks) < 2:
        print("   🔄 Fallback: Sử dụng phương pháp trích xuất thông thường...")
        
        # Tìm các section/div có nhiều nội dung
        main_sections = main_content.select("div, section, p, td, li")
        
        for section in main_sections:
            text = section.get_text(strip=True)
            if (len(text) > 80 and 
                text not in seen_texts and
                not re.match(r'^(Nội dung quan tâm|Thêm kiến thức|Giải bài tập|Trang chủ)', text, re.IGNORECASE)):
                
                # Kiểm tra có phải là nội dung hữu ích không
                useful_keywords = ['bài', 'tính', 'tìm', 'chứng minh', 'giải', '=', ':', 'phương', 'công thức']
                if any(keyword in text.lower() for keyword in useful_keywords):
                    content_blocks.append({
                        'title': text[:50] + "..." if len(text) > 50 else text,
                        'content': text
                    })
                    seen_texts.add(text)
    
    print(f"   📊 Tổng cộng có {len(content_blocks)} đoạn nội dung để tạo Q&A")
    
    # 4. Tạo Q&A từ nội dung
    if content_blocks:
        # Lọc và sắp xếp theo độ dài
        valid_blocks = [block for block in content_blocks if len(block['content']) > 80]
        valid_blocks.sort(key=lambda x: len(x['content']), reverse=True)
        
        if len(valid_blocks) <= 2:
            # Ít nội dung - tạo câu hỏi tổng quan
            combined_content = "\n\n---\n\n".join([block['content'] for block in valid_blocks])
            questions.append({
                "question": "Tóm tắt và giải thích toàn bộ nội dung bài học này.",
                "answer": combined_content,
                "type": "text_qa"
            })
        else:
            # Nhiều nội dung - tạo câu hỏi cho từng phần
            question_templates = [
                "Giải thích chi tiết về ",
                "Hướng dẫn giải bài tập về ",
                "Trình bày lý thuyết và bài tập về ", 
                "Phân tích và giải chi tiết ",
                "Tóm tắt kiến thức về ",
                "Hướng dẫn từng bước giải ",
                "Lý thuyết và ứng dụng của "
            ]
            
            for i, block in enumerate(valid_blocks[:10]):  # Tối đa 10 câu
                template = question_templates[i % len(question_templates)]
                
                # Tạo câu hỏi từ tiêu đề hoặc dòng đầu
                if block['title'] and len(block['title']) > 10:
                    question_title = block['title']
                else:
                    first_line = block['content'].split('\n')[0].strip()
                    question_title = first_line[:80] + "..." if len(first_line) > 80 else first_line
                
                questions.append({
                    "question": template + question_title,
                    "answer": block['content'],
                    "type": "text_qa"
                })
    
    # 5. Nếu vẫn không có câu hỏi, tạo từ toàn bộ text
    if not questions:
        print("   💪 Phương pháp cuối: Tạo Q&A từ toàn bộ nội dung...")
        all_useful_text = []
        
        # Lấy tất cả text và lọc
        for element in main_content.find_all(text=True):
            text = element.strip()
            if (len(text) > 30 and 
                not re.match(r'^(javascript|function|var |return)', text.lower()) and
                any(char.isalnum() for char in text)):
                all_useful_text.append(text)
        
        if all_useful_text:
            # Ghép và tạo câu hỏi
            combined_text = " ".join(all_useful_text[:20])  # Giới hạn để tránh quá dài
            
            questions.append({
                "question": "Tóm tắt và giải thích nội dung chính của bài học này.",
                "answer": combined_text,
                "type": "text_qa"
            })
    
    return questions

# --- debug HTML structure ---
def debug_html_structure(soup, url):
    """Debug để hiểu cấu trúc HTML của trang"""
    print(f"\n🔍 DEBUGGING HTML STRUCTURE: {url}")
    print("-" * 60)
    
    # Kiểm tra title
    title = soup.select_one("h1, .title, .entry-title")
    if title:
        print(f"📝 Title: {title.get_text(strip=True)[:100]}...")
    
    # Kiểm tra toàn bộ content length
    body = soup.find('body')
    if body:
        total_text = body.get_text(strip=True)
        print(f"📏 Tổng độ dài text: {len(total_text)} ký tự")
        print(f"🔤 100 ký tự đầu: {total_text[:100]}...")
    
    # Liệt kê các class chính
    print("\n📊 CÁC CLASS CHÍNH TRONG TRANG:")
    main_divs = soup.find_all("div", class_=True)[:15]
    for div in main_divs:
        classes = div.get("class")
        if classes and len(div.get_text(strip=True)) > 50:
            text_length = len(div.get_text(strip=True))
            print(f"   - .{' '.join(classes[:2])}: {text_length} ký tự")
    
    # Kiểm tra các ID chính
    print("\n🆔 CÁC ID CHÍNH:")
    elements_with_id = soup.find_all(id=True)[:8]
    for elem in elements_with_id:
        text_length = len(elem.get_text(strip=True))
        print(f"   - #{elem.get('id')} ({elem.name}): {text_length} ký tự")
    
    # Kiểm tra cấu trúc content
    print("\n📄 CẤU TRÚC NỘI DUNG:")
    content_candidates = [
        ".entry-content", ".post-content", ".content", ".main-content",
        "#content", "#main", "main", "article", "body"
    ]
    
    for selector in content_candidates:
        element = soup.select_one(selector)
        if element:
            text_length = len(element.get_text(strip=True))
            print(f"   ✅ {selector}: {text_length} ký tự")
            if text_length > 100:
                preview = element.get_text(strip=True)[:150] + "..."
                print(f"      Preview: {preview}")
        else:
            print(f"   ❌ {selector}: không tìm thấy")
    
    # Đếm các thẻ quan trọng
    print("\n📈 THỐNG KÊ CÁC THẺ:")
    tags_to_count = ["h1", "h2", "h3", "h4", "p", "div", "section", "article", "li", "td"]
    for tag in tags_to_count:
        count = len(soup.find_all(tag))
        if count > 0:
            # Đếm số thẻ có nội dung
            with_content = len([t for t in soup.find_all(tag) if len(t.get_text(strip=True)) > 20])
            print(f"   - {tag}: {count} thẻ ({with_content} có nội dung)")
    
    # Tìm các pattern đặc biệt cho trang giáo dục
    print("\n🎓 PHÂN TÍCH NỘI DUNG GIÁO DỤC:")
    education_keywords = ['Bài ', 'PHẦN ', 'Câu ', 'tập ', 'giải', 'tính', 'chứng minh']
    for keyword in education_keywords:
        elements = soup.find_all(text=lambda text: text and keyword in text)
        if elements:
            print(f"   - '{keyword}': {len(elements)} lần xuất hiện")
    
    print("-" * 60)

# --- scrape trang với phân loại tự động ---
def scrape_page(url, debug=False):
    html = fetch_html(url)
    if not html:
        return None
    
    soup = BeautifulSoup(html, "html.parser")
    
    # Debug nếu cần
    if debug:
        debug_html_structure(soup, url)
    
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
    
    # Tùy chọn debug
    debug_choice = input("Bật debug mode để xem cấu trúc HTML? (y/N): ").strip().lower()
    debug_mode = debug_choice in ['y', 'yes']
    
    print(f"🔍 Đang tìm link con từ: {parent_url}")
    sub_links = get_sub_links(parent_url)
    
    if not sub_links:
        print("⚠️ Không tìm thấy link con nào.")
        # Thử scrape trực tiếp URL đó
        print("🔄 Thử scrape trực tiếp URL này...")
        data = scrape_page(parent_url, debug=debug_mode)
        if data:
            save_to_file(data, parent_url)
            print("✅ Đã scrape xong!")
        else:
            print("❌ Không thể scrape được.")
    else:
        print(f"👉 Tìm thấy {len(sub_links)} link con. Bắt đầu scrape...")
        print("-" * 50)
        
        results = []
        
        for i, link in enumerate(sub_links, 1):
            print(f"\n[{i}/{len(sub_links)}] 🔎 {link}")
            
            # Chỉ debug trang đầu tiên để không spam log
            debug_this_page = debug_mode and i == 1
            
            data = scrape_page(link, debug=debug_this_page)
            if data:
                file_path = save_to_file(data, link)
                results.append(data)
            else:
                print(f"   ❌ Không thể scrape được")
            
            # Nghỉ ngẫu nhiên tránh bị chặn
            if i < len(sub_links):  # Không cần nghỉ ở lần cuối
                sleep_time = random.uniform(1.5, 3.5)
                print(f"   ⏰ Nghỉ {sleep_time:.1f}s...")
                time.sleep(sleep_time)
        
        # In thống kê cuối
        print_summary(results)
        print("✨ Hoàn thành!")
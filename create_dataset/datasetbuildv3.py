import os
import json
import time
import random
import requests
from bs4 import BeautifulSoup, NavigableString, Comment
from urllib.parse import urlparse, urljoin
import cloudscraper
import re
from collections import defaultdict
import hashlib
from typing import List, Dict, Any
from datasets import Dataset
from huggingface_hub import login

# --- Cải tiến tải HTML ---
def fetch_html(url, retry=3):
    headers = {
        "User-Agent": random.choice([
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
            "(KHTML, like Gecko) Chrome/121.0 Safari/537.36",
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
            "AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15",
            "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 "
            "(KHTML, like Gecko) Chrome/120.0 Safari/537.36"
        ]),
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "vi-VN,vi;q=0.9,en;q=0.8",
        "Accept-Encoding": "gzip, deflate",
        "Connection": "keep-alive",
        "Upgrade-Insecure-Requests": "1",
    }
    
    for attempt in range(retry):
        try:
            session = requests.Session()
            resp = session.get(url, headers=headers, timeout=20)
            
            if resp.status_code == 200 and len(resp.text) > 500:
                return resp.text
            else:
                print(f"   ⚠️ Attempt {attempt+1}: Status {resp.status_code}, trying cloudscraper...")
                scraper = cloudscraper.create_scraper()
                resp = scraper.get(url, headers=headers, timeout=20)
                if resp.status_code == 200:
                    return resp.text
        except Exception as e:
            print(f"   ❌ Attempt {attempt+1} failed: {e}")
            if attempt < retry - 1:
                time.sleep(2 ** attempt)  # Exponential backoff
    
    return None

# --- Thay thế hình ảnh công thức bằng LaTeX ---
def replace_math_images(element):
    """Thay thế các hình ảnh công thức toán học bằng mã LaTeX từ alt text"""
    math_symbols = ['=', '+', '-', '*', '/', '^', '∫', '∑', '√', 'π', 'θ']
    for img in element.find_all('img'):
        alt = img.get('alt', '').strip()
        title = img.get('title', '').strip()
        src_lower = img.get('src', '').lower()
        
        # Kiểm tra nếu là hình ảnh công thức
        if (('math' in src_lower or 'formula' in src_lower or 'equation' in src_lower or
             any(sym in alt for sym in math_symbols) or any(sym in title for sym in math_symbols))):
            
            # Sử dụng alt hoặc title làm LaTeX, wrap trong \[ \]
            latex_content = alt if alt else title
            if latex_content:
                # Cải thiện LaTeX đơn giản
                latex_content = re.sub(r'(\w+)\^(\d+)', r'\1^{\2}', latex_content)
                latex_content = re.sub(r'(\d+(?:\.\d+)?)/(\d+(?:\.\d+)?)', r'\\frac{\1}{\2}', latex_content)
                replacement = NavigableString(f"\\[ {latex_content} \\]")
                img.replace_with(replacement)
    
    return element

# --- Xử lý văn bản để thêm math mode ---
def process_math_content(text):
    """Xử lý văn bản để wrap các phần có thể là công thức vào math mode"""
    # Tìm các chuỗi có vẻ là công thức (có toán tử)
    math_pattern = r'([a-zA-Z0-9θπ]+\s*[+\-*/=^√∫∑]+\s*[a-zA-Z0-9θπ]+)'
    def replace_math(match):
        expr = match.group(1).strip()
        # Cải thiện LaTeX
        expr = re.sub(r'(\w+)\^(\d+)', r'\1^{\2}', expr)
        expr = re.sub(r'(\d+(?:\.\d+)?)/(\d+(?:\.\d+)?)', r'\\frac{\1}{\2}', expr)
        return f"${expr}$"
    
    text = re.sub(math_pattern, replace_math, text)
    return text

# --- Tìm và phân loại links ---
def get_categorized_links(url):
    html = fetch_html(url)
    if not html:
        return {}
    
    soup = BeautifulSoup(html, "html.parser")
    links = defaultdict(list)
    seen_urls = set()
    
    print("   🔍 Phân tích và phân loại tất cả links...")
    
    for a in soup.find_all("a", href=True):
        href = a.get("href", "").strip()
        if not href:
            continue
            
        full_url = urljoin(url, href)
        
        # Chỉ lấy links trong domain
        if not full_url.startswith("https://tech12h.com") or full_url == url:
            continue
            
        # Loại bỏ các patterns không mong muốn
        skip_patterns = [
            '#', 'javascript:', 'mailto:', '.jpg', '.png', '.gif', '.pdf', 
            '.zip', '.rar', 'facebook.com', 'twitter.com', 'youtube.com',
            '/wp-admin', '/wp-content/uploads', '?replytocom=', '?share='
        ]
        
        if any(pattern in full_url.lower() for pattern in skip_patterns):
            continue
            
        if full_url in seen_urls:
            continue
        seen_urls.add(full_url)
        
        # Phân loại links - tập trung vào quiz/test
        link_text = a.get_text(strip=True).lower()
        url_lower = full_url.lower()
        
        if any(keyword in url_lower for keyword in ['trac-nghiem', 'quiz', 'test', 'kiem-tra', 'de-thi']):
            links['quiz'].append(full_url)
        elif any(keyword in url_lower for keyword in ['5-phut-giai', 'giai-bai', 'loi-giai']):
            links['solution'].append(full_url)
        elif any(keyword in url_lower for keyword in ['bai-hoc', 'chuong', 'bai-']):
            links['lesson'].append(full_url)
        elif any(keyword in url_lower for keyword in ['sbt', 'sgk', 'workbook']):
            links['textbook'].append(full_url)
        else:
            links['other'].append(full_url)
    
    # Hiển thị thống kê
    total = sum(len(urls) for urls in links.values())
    print(f"   📊 Phân loại {total} links:")
    for category, urls in links.items():
        if urls:
            print(f"      - {category}: {len(urls)} links")
    
    return dict(links)

# --- Crawl đệ quy để lấy tất cả quiz links ---
def get_all_quiz_links(start_url, visited=None, max_depth=3, current_depth=0):
    if visited is None:
        visited = set()
    
    if current_depth > max_depth or start_url in visited:
        return []
    
    visited.add(start_url)
    print(f"   🕸️  Crawling depth {current_depth}: {start_url}")
    
    categorized = get_categorized_links(start_url)
    quiz_links = categorized.get('quiz', [])
    all_quiz_links = quiz_links.copy()
    
    # Recurse vào các trang lesson/other có thể chứa quiz sub-links (giới hạn để tránh loop)
    potential_category_links = categorized.get('lesson', [])[:5] + categorized.get('other', [])[:5]
    for link in potential_category_links:
        if link not in visited:
            sub_quiz = get_all_quiz_links(link, visited, max_depth, current_depth + 1)
            all_quiz_links.extend(sub_quiz)
    
    return all_quiz_links

# --- Trích xuất trắc nghiệm nâng cao với LaTeX ---
def extract_advanced_quiz(soup):
    questions = []
    
    # Kiểm tra indicators của trang quiz
    quiz_indicators = [
        'trắc nghiệm', 'quiz', 'test', 'multiple choice', 'câu hỏi',
        'lựa chọn', 'đáp án', 'chọn đáp án đúng'
    ]
    
    page_text = soup.get_text().lower()
    is_quiz_page = any(indicator in page_text for indicator in quiz_indicators)
    
    if not is_quiz_page:
        return questions, False
    
    print("   🎯 Phát hiện trang trắc nghiệm, bắt đầu phân tích...")
    
    # Áp dụng thay thế math images
    replace_math_images(soup)
    
    # Tìm các patterns trắc nghiệm
    quiz_patterns = [
        # Pattern 1: Câu hỏi được đánh số
        r'(?:Câu|Question)\s*(\d+)[.:\s]+(.+?)(?=(?:Câu|Question)\s*\d+|$)',
        # Pattern 2: Dạng A. B. C. D.
        r'([ABCD][\.\)]\s*.+?)(?=[ABCD][\.\)]|$)'
    ]
    
    full_text = soup.get_text(separator='\n', strip=True)
    
    # Method 1: Regex patterns
    for pattern in quiz_patterns:
        matches = re.findall(pattern, full_text, re.DOTALL | re.IGNORECASE)
        if matches:
            print(f"   📝 Tìm thấy {len(matches)} matches với pattern")
            for match in matches[:20]:  # Limit to 20
                if isinstance(match, tuple) and len(match) >= 2:
                    q_num, q_text = match[0], match[1]
                    q_text = process_math_content(q_text.strip()[:200])
                    questions.append({
                        "question": f"Câu {q_num}: {q_text}",
                        "answer": None,
                        "type": "quiz_extracted",
                        "extraction_method": "regex"
                    })
    
    # Method 2: HTML structure analysis - cải tiến với selectors cho site
    quiz_containers = soup.select(
        'div[class*="quiz"], div[class*="question"], div[class*="mcq"], '
        'form[class*="quiz"], ol li, ul li, .test-item, .exam-item, '
        '.entry-content li, article p, .post-content ol, .post-content ul'
    )
    
    for container in quiz_containers:
        # Thay thế math trong container
        replace_math_images(container)
        text = container.get_text(strip=True)
        if len(text) > 20 and len(text) < 1000:  # Reasonable question length
            
            # Xử lý math trong text
            text = process_math_content(text)
            
            # Tìm options (A, B, C, D)
            options = []
            option_pattern = r'([ABCD][\.\)]\s*.+?)(?=[ABCD][\.\)]|$)'
            option_matches = re.findall(option_pattern, text, re.DOTALL | re.IGNORECASE)
            
            if option_matches:
                options = [process_math_content(opt.strip()) for opt in option_matches]
            
            # Tìm đáp án đúng
            answer = None
            answer_indicators = container.select('.correct, .answer, [data-correct="true"], .dap-an')
            if answer_indicators:
                answer_elem = answer_indicators[0]
                replace_math_images(answer_elem)
                answer = process_math_content(answer_elem.get_text(strip=True))
            
            questions.append({
                "question": text[:300] + "..." if len(text) > 300 else text,
                "options": options if options else None,
                "answer": answer,
                "type": "quiz_structured",
                "extraction_method": "html_analysis"
            })
    
    # Method 3: Table-based quizzes
    tables = soup.find_all('table')
    for table in tables:
        replace_math_images(table)
        rows = table.find_all('tr')
        if len(rows) > 1:  # Has header and content
            for row in rows[1:]:  # Skip header
                cells = row.find_all(['td', 'th'])
                if len(cells) >= 2:
                    question_cell = cells[0]
                    replace_math_images(question_cell)
                    question_text = process_math_content(question_cell.get_text(strip=True))
                    
                    answer_cell = cells[-1] if len(cells) > 1 else None
                    answer = None
                    if answer_cell:
                        replace_math_images(answer_cell)
                        answer = process_math_content(answer_cell.get_text(strip=True))
                    
                    if len(question_text) > 10:
                        questions.append({
                            "question": question_text,
                            "answer": answer,
                            "type": "quiz_table",
                            "extraction_method": "table_analysis"
                        })
    
    print(f"   ✅ Trích xuất được {len(questions)} câu hỏi trắc nghiệm")
    return questions, len(questions) > 0

# --- Trích xuất Q&A tự luận nâng cao với LaTeX ---
def extract_advanced_text_qa(soup):
    questions = []
    
    print("   📝 Phân tích nội dung để tạo Q&A tự luận...")
    
    # Làm sạch HTML
    for element in soup(['script', 'style', 'nav', 'header', 'footer', 'aside']):
        element.decompose()
    
    # Thay thế math images toàn bộ
    replace_math_images(soup)
    
    # Tìm nội dung chính
    main_content = None
    main_selectors = [
        '.entry-content', '.post-content', '.content', '.main-content',
        'main', 'article', '#main', '#content', 'body'
    ]
    
    for selector in main_selectors:
        main_content = soup.select_one(selector)
        if main_content and len(main_content.get_text(strip=True)) > 200:
            print(f"   📍 Sử dụng selector: {selector}")
            break
    
    if not main_content:
        main_content = soup
    
    # Phân tích cấu trúc nội dung
    content_sections = analyze_content_structure(main_content)
    
    # Tạo Q&A từ các sections
    for section in content_sections:
        section_type = section['type']
        content = section['content']
        title = section['title']
        
        if len(content) < 50:  # Skip too short content
            continue
        
        # Xử lý math trong title và content
        title = process_math_content(title)
        content = process_math_content(content)
        
        # Tạo câu hỏi phù hợp với từng loại
        question_templates = {
            'heading': "Giải thích chi tiết về chủ đề: ",
            'exercise': "Hướng dẫn giải bài tập: ",
            'theory': "Trình bày lý thuyết về: ",
            'example': "Phân tích ví dụ: ",
            'definition': "Định nghĩa và giải thích: ",
            'formula': "Giải thích công thức và cách áp dụng: ",
            'procedure': "Mô tả quy trình thực hiện: ",
            'general': "Tóm tắt nội dung: "
        }
        
        template = question_templates.get(section_type, question_templates['general'])
        question = template + (title if title else content[:80] + "...")
        
        questions.append({
            "question": question,
            "answer": content,
            "type": "text_qa",
            "content_type": section_type,
            "extraction_method": "structure_analysis"
        })
    
    print(f"   ✅ Tạo được {len(questions)} câu Q&A tự luận")
    return questions

def analyze_content_structure(element):
    """Phân tích cấu trúc nội dung để tạo Q&A chất lượng"""
    sections = []
    
    # Tìm các headings và nội dung liên quan
    headings = element.find_all(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])
    
    for i, heading in enumerate(headings):
        title = heading.get_text(strip=True)
        
        # Thu thập nội dung sau heading cho đến heading tiếp theo
        content_parts = []
        current = heading.next_sibling
        next_heading = headings[i+1] if i+1 < len(headings) else None
        
        while current and current != next_heading:
            if hasattr(current, 'get_text'):
                text = current.get_text(strip=True)
                if text:
                    content_parts.append(text)
            current = current.next_sibling
        
        content = '\n'.join(content_parts)
        
        if content and len(content) > 30:
            # Phân loại loại nội dung
            content_type = classify_content(title, content)
            
            sections.append({
                'title': title,
                'content': content,
                'type': content_type
            })
    
    # Nếu không có headings, phân tích paragraphs
    if not sections:
        paragraphs = element.find_all('p')
        for p in paragraphs:
            text = p.get_text(strip=True)
            if len(text) > 50:
                content_type = classify_content("", text)
                sections.append({
                    'title': text[:50] + "..." if len(text) > 50 else text,
                    'content': text,
                    'type': content_type
                })
    
    return sections

def classify_content(title, content):
    """Phân loại nội dung dựa vào từ khóa"""
    text = (title + " " + content).lower()
    
    if any(keyword in text for keyword in ['bài tập', 'exercise', 'problem', 'tính', 'tìm', 'giải']):
        return 'exercise'
    elif any(keyword in text for keyword in ['định nghĩa', 'khái niệm', 'definition', 'concept']):
        return 'definition'
    elif any(keyword in text for keyword in ['công thức', 'formula', '=', 'phương trình']):
        return 'formula'
    elif any(keyword in text for keyword in ['ví dụ', 'example', 'minh họa']):
        return 'example'
    elif any(keyword in text for keyword in ['quy trình', 'steps', 'cách làm', 'thực hiện']):
        return 'procedure'
    elif any(keyword in text for keyword in ['lý thuyết', 'theory', 'nguyên lý', 'principle']):
        return 'theory'
    elif title:  # Has heading
        return 'heading'
    else:
        return 'general'

# --- Scraper chính với phân tích sâu ---
def deep_scrape_page(url, debug=False):
    print(f"\n🔍 DEEP SCRAPING: {url}")
    
    html = fetch_html(url)
    if not html:
        return []
    
    soup = BeautifulSoup(html, "html.parser")
    
    # Debug mode
    if debug:
        debug_page_structure(soup, url)
    
    # Lấy metadata
    title_elem = soup.select_one("h1, .entry-title, .post-title, title")
    title = title_elem.get_text(strip=True) if title_elem else "untitled"
    
    # Xác định loại trang
    page_type = determine_page_type(soup, url)
    print(f"   📋 Loại trang: {page_type}")
    
    questions = []
    
    # Trích xuất dựa trên loại trang
    if page_type in ['quiz', 'test', 'exam']:
        quiz_questions, has_quiz = extract_advanced_quiz(soup)
        if has_quiz:
            questions.extend(quiz_questions)
            content_type = "quiz"
        else:
            # Fallback to text QA
            questions.extend(extract_advanced_text_qa(soup))
            content_type = "text_qa"
    else:
        # Text-based content
        questions.extend(extract_advanced_text_qa(soup))
        content_type = "text_qa"
        
        # Cũng thử tìm quiz trong trang text
        quiz_questions, has_quiz = extract_advanced_quiz(soup)
        if has_quiz:
            questions.extend(quiz_questions)
            content_type = "mixed"
    
    # Loại bỏ duplicate và filter chất lượng
    questions = filter_and_deduplicate_questions(questions)
    
    print(f"   ✅ Trích xuất {len(questions)} questions từ trang này")
    return questions

def determine_page_type(soup, url):
    """Xác định loại trang web"""
    url_indicators = {
        'quiz': ['trac-nghiem', 'quiz', 'test'],
        'exam': ['de-thi', 'de-kiem-tra', 'kiem-tra'],
        'lesson': ['bai-hoc', 'lesson', 'chuong'],
        'solution': ['giai-bai', 'loi-giai', '5-phut-giai'],
        'textbook': ['sbt', 'sgk', 'workbook']
    }
    
    title_text = soup.get_text()[:1000].lower()  # First 1000 chars
    url_lower = url.lower()
    
    for page_type, indicators in url_indicators.items():
        if any(indicator in url_lower or indicator in title_text for indicator in indicators):
            return page_type
    
    return 'general'

def filter_and_deduplicate_questions(questions):
    """Lọc và loại bỏ câu hỏi trùng lặp"""
    seen_hashes = set()
    filtered = []
    
    for q in questions:
        # Tạo hash cho content
        content_hash = hashlib.md5(
            (q.get('question', '') + str(q.get('answer', ''))).encode()
        ).hexdigest()
        
        if content_hash not in seen_hashes:
            # Kiểm tra chất lượng
            if (len(q.get('question', '')) > 10 and 
                len(q.get('question', '')) < 2000 and
                not is_low_quality_content(q.get('question', ''))):
                
                seen_hashes.add(content_hash)
                filtered.append(q)
    
    return filtered

def is_low_quality_content(text):
    """Kiểm tra nội dung chất lượng thấp"""
    low_quality_indicators = [
        'click here', 'read more', 'xem thêm', 'đọc tiếp',
        'facebook', 'twitter', 'social', 'advertisement',
        'cookie', 'privacy policy', 'terms'
    ]
    
    text_lower = text.lower()
    return any(indicator in text_lower for indicator in low_quality_indicators)

def debug_page_structure(soup, url):
    """Debug chi tiết cấu trúc trang"""
    print(f"\n🔬 DEBUGGING PAGE STRUCTURE: {url}")
    print("-" * 80)
    
    # Basic info
    title = soup.select_one('title')
    if title:
        print(f"📖 Title: {title.get_text(strip=True)}")
    
    # Content analysis
    body = soup.find('body')
    if body:
        total_text = body.get_text(strip=True)
        print(f"📏 Total text length: {len(total_text)} chars")
        print(f"🔤 First 200 chars: {total_text[:200]}...")
    
    # Structure analysis
    print("\n🏗️ STRUCTURE ANALYSIS:")
    important_tags = ['h1', 'h2', 'h3', 'h4', 'p', 'div', 'table', 'form', 'ol', 'ul']
    for tag in important_tags:
        count = len(soup.find_all(tag))
        with_content = len([t for t in soup.find_all(tag) if len(t.get_text(strip=True)) > 20])
        if count > 0:
            print(f"   {tag}: {count} total ({with_content} with content)")
    
    # Class analysis
    print("\n📊 TOP CLASSES:")
    class_counts = defaultdict(int)
    for elem in soup.find_all(class_=True):
        for cls in elem.get('class', []):
            class_counts[cls] += 1
    
    for cls, count in sorted(class_counts.items(), key=lambda x: x[1], reverse=True)[:10]:
        print(f"   .{cls}: {count} elements")
    
    print("-" * 80)

# --- Chuẩn hóa question ---
def normalize_question(q: Dict[str, Any]) -> Dict[str, Any]:
    """
    Chuẩn hóa một câu hỏi để có schema thống nhất.
    """
    normalized = {
        "question": str(q.get("question", "")).strip(),
        "answer": str(q.get("answer", "")) if q.get("answer") is not None else None,
        "options": q.get("options", None),  # Giữ nguyên list hoặc None
        "type": q.get("type", "unknown"),
        "extraction_method": q.get("extraction_method", "unknown"),
        "content_type": q.get("content_type", None)
    }
    
    # Loại bỏ các field rỗng hoặc không mong muốn
    if not normalized["question"]:
        return None  # Skip nếu không có question
    
    # Đảm bảo options là list
    if normalized["options"] is not None and not isinstance(normalized["options"], list):
        normalized["options"] = []
    
    return normalized

# --- Validation question nâng cao với LaTeX ---
def validate_question(q: Dict[str, Any]) -> bool:
    """
    Validate một câu hỏi sau khi chuẩn hóa, với kiểm tra LaTeX nâng cao.
    Trả về True nếu hợp lệ, False nếu không.
    """
    errors = []
    
    # 1. Question phải có độ dài hợp lý
    q_len = len(q["question"])
    if q_len < 10 or q_len > 1000:
        errors.append(f"Question length invalid: {q_len}")
    
    # 2. Answer nếu có phải không rỗng
    if q["answer"] is not None:
        if not q["answer"].strip():
            errors.append("Answer is empty")
        elif len(q["answer"]) > 5000:
            errors.append("Answer too long")
    
    # 3. Options nếu có phải là list với ít nhất 2 phần tử cho quiz
    if q["options"] is not None:
        if not isinstance(q["options"], list):
            errors.append("Options not a list")
        elif len(q["options"]) < 2:
            if q["type"] in ["quiz_extracted", "quiz_structured", "quiz_table"]:
                errors.append("Quiz options too few")
        else:
            # Kiểm tra mỗi option không rỗng
            empty_opts = [opt for opt in q["options"] if not str(opt).strip()]
            if empty_opts:
                errors.append(f"Empty options: {len(empty_opts)}")
    
    # 4. Kiểm tra LaTeX cơ bản (không có \[ không đóng, nhưng đơn giản)
    for field in ["question", "answer"]:
        if q.get(field):
            content = q[field]
            if "\\[" in content and content.count("\\[") != content.count("\\]"):
                errors.append(f"Unbalanced display math in {field}")
            if "$" in content and content.count("$") % 2 != 0:
                errors.append(f"Unbalanced inline math in {field}")
    
    # 5. Type phải hợp lệ
    valid_types = ["quiz_extracted", "quiz_structured", "quiz_table", "text_qa", "unknown"]
    if q["type"] not in valid_types:
        errors.append(f"Invalid type: {q['type']}")
    
    # 6. Validation LaTeX nâng cao cho math mode
    def validate_latex_math(content: str) -> List[str]:
        math_errors = []
        
        # Kiểm tra ellipsis: nên dùng \dots thay vì ...
        if "..." in content and "\\dots" not in content:
            math_errors.append("Use \\dots instead of ... for ellipsis")
        
        # Kiểm tra multiplication: không dùng * trong math, dùng \cdot
        if r"\cdot" not in content and "*" in content and any(sym in content for sym in ["$", "\\["]):
            math_errors.append("Use \\cdot for multiplication instead of *")
        
        # Kiểm tra angle brackets: dùng \langle \rangle thay vì < >
        if "<" in content or ">" in content:
            if "\\langle" not in content or "\\rangle" not in content:
                math_errors.append("Use \\langle and \\rangle for angle brackets")
        
        # Kiểm tra mid: dùng \mid thay vì |
        if "|" in content and "\\mid" not in content and any(sym in content for sym in ["$", "\\["]):
            math_errors.append("Use \\mid for set builder or conditional instead of |")
        
        # Kiểm tra functions: kiểm tra sin, cos, etc. có \ trước không
        math_functions = ["sin", "cos", "tan", "log", "exp"]
        for func in math_functions:
            if func in content and f"\\{func}" not in content and any(sym in content for sym in ["$", "\\["]):
                math_errors.append(f"Use \\{func} for math function")
        
        # Kiểm tra delimiters: kiểm tra \left \right cân bằng đơn giản
        left_count = content.count(r"\left")
        right_count = content.count(r"\right")
        if left_count != right_count:
            math_errors.append("Unbalanced \\left and \\right delimiters")
        
        # Kiểm tra spacing in math: cảnh báo nếu có comma trong math mà không space đúng
        if ", " not in content and "," in content and any(sym in content for sym in ["$", "\\["]):
            math_errors.append("Check spacing after comma in math mode")
        
        return math_errors
    
    for field in ["question", "answer"]:
        if q.get(field):
            latex_errors = validate_latex_math(q[field])
            errors.extend([f"LaTeX error in {field}: {err}" for err in latex_errors])
    
    if errors:
        print(f"   ❌ Validation failed: {', '.join(errors[:3])}")  # Log first 3 errors
        return False
    
    return True

# --- Validate và filter questions ---
def validate_questions(questions: List[Dict[str, Any]]) -> List[Dict[str, Any]]:
    """
    Validate tất cả questions và trả về list hợp lệ.
    """
    valid_questions = []
    invalid_count = 0
    
    for q in questions:
        if validate_question(q):
            valid_questions.append(q)
        else:
            invalid_count += 1
    
    print(f"   ✅ Validation: {len(valid_questions)} valid, {invalid_count} invalid")
    return valid_questions

# --- Tạo JSONL ---
def create_jsonl(questions: List[Dict[str, Any]], output_file: str = "normalized_dataset.jsonl"):
    """
    Tạo file JSONL từ list questions.
    """
    with open(output_file, 'w', encoding='utf-8') as f:
        for q in questions:
            f.write(json.dumps(q, ensure_ascii=False) + '\n')
    
    print(f"Đã tạo file JSONL: {output_file}")
    return output_file

# --- Push lên Hugging Face ---
def push_to_huggingface(jsonl_file: str, repo_name: str, hf_token: str = None):
    """
    Push dataset lên Hugging Face Hub.
    """
    if hf_token:
        login(token=hf_token)
    
    # Tạo Dataset từ JSONL
    dataset = Dataset.from_json(jsonl_file)
    
    # Push lên Hub
    dataset.push_to_hub(repo_name)
    print(f"Đã push dataset lên: https://huggingface.co/datasets/{repo_name}")

# --- Main execution ---
def run_integrated_scraping_and_dataset():
    print("🚀 INTEGRATED SCRAPER & DATASET CREATOR - Tech12h Quiz Extraction")
    print("🎯 Scrape → Normalize → Validate (Advanced LaTeX) → JSONL → Push HF")
    print("-" * 60)
    
    parent_url = input("Nhập URL cần scrape (mặc định https://tech12h.com): ").strip()
    if not parent_url:
        parent_url = "https://tech12h.com"
    
    debug_mode = input("Debug mode? (y/N): ").strip().lower() == 'y'
    max_depth = input("Độ sâu crawl (mặc định 3): ").strip()
    max_depth = int(max_depth) if max_depth.isdigit() else 3
    
    repo_name = input("Nhập tên repo Hugging Face (e.g., username/my-dataset): ").strip()
    if not repo_name:
        print("Tên repo không hợp lệ! Thoát.")
        return
    
    hf_token = input("Nhập Hugging Face token (nếu chưa login, optional): ").strip()
    
    print(f"\n🔍 Analyzing: {parent_url}")
    
    # Lấy tất cả quiz links đệ quy
    all_links = get_all_quiz_links(parent_url, max_depth=max_depth)
    
    if not all_links:
        print("⚠️ No quiz links found, scraping main URL...")
        questions_from_page = deep_scrape_page(parent_url, debug=debug_mode)
        all_questions = questions_from_page
    else:
        print(f"\n📦 Starting deep scrape of {len(all_links)} quiz/test pages...")
        
        all_questions = []
        errors = []
        
        for i, link in enumerate(all_links, 1):
            print(f"\n[{i:4d}/{len(all_links)}] {link}")
            
            try:
                debug_this = debug_mode and i == 1
                questions_from_page = deep_scrape_page(link, debug=debug_this)
                
                if questions_from_page:
                    all_questions.extend(questions_from_page)
                    print(f"   ✅ Added {len(questions_from_page)} questions")
                else:
                    print(f"   ⚠️ No content extracted")
                    errors.append(f"No content: {link}")
            
            except Exception as e:
                print(f"   ❌ Error: {e}")
                errors.append(f"Error: {link} - {str(e)}")
            
            # Progress report every 20 pages
            if i % 20 == 0:
                print(f"\n📊 Progress: {i}/{len(all_links)} "
                      f"({len(errors)} errors)")
            
            # Rate limiting
            time.sleep(random.uniform(1, 3))
        
        print(f"\n✅ Tổng questions thô: {len(all_questions)}")
    
    # Bước 1: Chuẩn hóa questions
    normalized_questions = []
    for q in all_questions:
        norm_q = normalize_question(q)
        if norm_q:
            normalized_questions.append(norm_q)
    
    print(f"✅ Sau chuẩn hóa: {len(normalized_questions)} questions")
    
    if not normalized_questions:
        print("❌ Không có dữ liệu để xử lý!")
        return
    
    # Bước mới: Validation nâng cao
    validated_questions = validate_questions(normalized_questions)
    
    if not validated_questions:
        print("❌ Không có dữ liệu hợp lệ sau validation!")
        return
    
    # Bước 2: Tạo JSONL
    jsonl_file = create_jsonl(validated_questions)
    
    # Bước 3: Push lên HF
    push_to_huggingface(jsonl_file, repo_name, hf_token if hf_token else None)
    
    # Summary
    print("\n" + "="*80)
    print("📊 FINAL SUMMARY")
    print("="*80)
    print(f"🎯 Total questions: {len(validated_questions)}")
    print(f"📁 JSONL file: {jsonl_file}")
    print(f"🌐 HF Repo: https://huggingface.co/datasets/{repo_name}")
    print(f"❌ Errors: {len(errors) if 'errors' in locals() else 0}")
    print("="*80)

if __name__ == "__main__":
    try:
        run_integrated_scraping_and_dataset()
    except KeyboardInterrupt:
        print("\n⚠️ Process interrupted by user")
    except Exception as e:
        print(f"\n❌ Unexpected error: {e}")
        import traceback
        traceback.print_exc()
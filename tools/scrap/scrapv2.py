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
        r'([ABCD][\.\)]\s*.+?)(?=[ABCD][\.\)]|$)',
        # Pattern 3: Các thẻ HTML có class quiz
        None  # Sẽ xử lý riêng
    ]
    
    full_text = soup.get_text(separator='\n', strip=True)
    
    # Method 1: Regex patterns
    for pattern in quiz_patterns[:2]:  # Skip None
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
        return None
    
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
    
    return {
        "title": title,
        "url": url,
        "page_type": page_type,
        "content_type": content_type,
        "questions": questions,
        "total_questions": len(questions),
        "extraction_timestamp": time.time(),
        "quality_score": calculate_quality_score(questions)
    }

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

def calculate_quality_score(questions):
    """Tính điểm chất lượng cho bộ câu hỏi"""
    if not questions:
        return 0
    
    total_score = 0
    for q in questions:
        score = 0
        
        # Điểm dựa trên độ dài câu hỏi
        q_len = len(q.get('question', ''))
        if 20 <= q_len <= 200:
            score += 3
        elif 10 <= q_len <= 500:
            score += 2
        else:
            score += 1
        
        # Điểm có đáp án
        if q.get('answer'):
            score += 2
        
        # Điểm có options (quiz)
        if q.get('options'):
            score += 1
        
        # Điểm method trích xuất
        method = q.get('extraction_method', '')
        if method in ['html_analysis', 'structure_analysis']:
            score += 1
        
        total_score += score
    
    return total_score / len(questions)

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

# --- Lưu file với metadata ---
def save_enhanced_file(data, url):
    parsed = urlparse(url)
    path_parts = [p for p in parsed.path.strip("/").split("/") if p]
    
    # Tạo cấu trúc thư mục
    if len(path_parts) > 1:
        folder_path = os.path.join("output", *path_parts[:-1])
        file_name = path_parts[-1]
    else:
        folder_path = "output"
        file_name = path_parts[0] if path_parts else "index"
    
    os.makedirs(folder_path, exist_ok=True)
    
    # Clean filename
    clean_filename = re.sub(r'[^\w\-_.]', '_', file_name)
    if not clean_filename.endswith('.json'):
        clean_filename += '.json'
    
    full_path = os.path.join(folder_path, clean_filename)
    
    # Add metadata
    data['extraction_metadata'] = {
        'extraction_time': time.strftime('%Y-%m-%d %H:%M:%S'),
        'scraper_version': '2.1',  # Updated version
        'file_path': full_path,
        'url_hash': hashlib.md5(url.encode()).hexdigest()
    }
    
    # Save
    with open(full_path, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    
    print(f"   💾 Saved: {full_path} (Quality: {data.get('quality_score', 0):.2f})")
    return full_path

# --- Main execution ---
def run_deep_scraping():
    print("🚀 DEEP WEB SCRAPER - Enhanced Q&A Extraction for Tech12h")
    print("🎯 Tập trung scrape tất cả bài trắc nghiệm/kiểm tra với LaTeX support")
    print("-" * 60)
    
    parent_url = input("Nhập URL cần scrape (mặc định https://tech12h.com): ").strip()
    if not parent_url:
        parent_url = "https://tech12h.com"
    
    debug_mode = input("Debug mode? (y/N): ").strip().lower() == 'y'
    max_depth = input("Độ sâu crawl (mặc định 3): ").strip()
    max_depth = int(max_depth) if max_depth.isdigit() else 3
    
    print(f"\n🔍 Analyzing: {parent_url}")
    
    # Lấy tất cả quiz links đệ quy
    all_links = get_all_quiz_links(parent_url, max_depth=max_depth)
    
    if not all_links:
        print("⚠️ No quiz links found, scraping main URL...")
        data = deep_scrape_page(parent_url, debug=debug_mode)
        if data:
            save_enhanced_file(data, parent_url)
        return
    
    print(f"\n📦 Starting deep scrape of {len(all_links)} quiz/test pages...")
    
    results = []
    errors = []
    
    for i, link in enumerate(all_links, 1):
        print(f"\n[{i:4d}/{len(all_links)}] {link}")
        
        try:
            debug_this = debug_mode and i == 1
            data = deep_scrape_page(link, debug=debug_this)
            
            if data and data['questions']:
                save_enhanced_file(data, link)
                results.append(data)
                print(f"   ✅ Success: {data['total_questions']} questions "
                      f"(Quality: {data['quality_score']:.2f})")
            else:
                print(f"   ⚠️ No content extracted")
                errors.append(f"No content: {link}")
        
        except Exception as e:
            print(f"   ❌ Error: {e}")
            errors.append(f"Error: {link} - {str(e)}")
        
        # Progress report every 20 pages
        if i % 20 == 0:
            avg_quality = sum(r['quality_score'] for r in results) / len(results) if results else 0
            print(f"\n📊 Progress: {i}/{len(all_links)} "
                  f"({len(results)} success, {len(errors)} errors, "
                  f"avg quality: {avg_quality:.2f})")
        
        # Rate limiting
        time.sleep(random.uniform(1, 3))
    
    # Final summary
    print_enhanced_summary(results, errors, parent_url)

def print_enhanced_summary(results, errors, parent_url):
    print("\n" + "="*80)
    print("📊 ENHANCED SCRAPING SUMMARY")
    print("="*80)
    
    if results:
        total_questions = sum(r['total_questions'] for r in results)
        avg_quality = sum(r['quality_score'] for r in results) / len(results)
        
        # Breakdown by content type
        type_counts = defaultdict(int)
        for r in results:
            type_counts[r['content_type']] += 1
        
        print(f"🎯 Total pages scraped: {len(results)}")
        print(f"❓ Total questions extracted: {total_questions}")
        print(f"⭐ Average quality score: {avg_quality:.2f}/10")
        print(f"❌ Errors: {len(errors)}")
        
        print("\n📋 Content type breakdown:")
        for content_type, count in type_counts.items():
            percentage = (count / len(results)) * 100
            print(f"   - {content_type}: {count} pages ({percentage:.1f}%)")
        
        # Quality distribution
        quality_ranges = [(0, 3), (3, 6), (6, 8), (8, 10)]
        print(f"\n⭐ Quality distribution:")
        for low, high in quality_ranges:
            count = sum(1 for r in results if low <= r['quality_score'] < high)
            if count > 0:
                print(f"   - {low}-{high}: {count} pages")
    
    print("="*80)
    
    # Save summary
    summary_file = "output/deep_scraping_summary.json"
    os.makedirs("output", exist_ok=True)
    
    type_counts = defaultdict(int)
    for r in results:
        type_counts[r['content_type']] += 1
    
    summary_data = {
        "parent_url": parent_url,
        "timestamp": time.strftime('%Y-%m-%d %H:%M:%S'),
        "total_pages": len(results),
        "total_questions": sum(r['total_questions'] for r in results) if results else 0,
        "average_quality": sum(r['quality_score'] for r in results) / len(results) if results else 0,
        "content_type_breakdown": dict(type_counts),
        "error_count": len(errors),
        "success_rate": len(results) / (len(results) + len(errors)) * 100 if (len(results) + len(errors)) > 0 else 0
    }
    
    with open(summary_file, "w", encoding="utf-8") as f:
        json.dump(summary_data, f, ensure_ascii=False, indent=2)
    print(f"📋 Summary saved: {summary_file}")

if __name__ == "__main__":
    try:
        run_deep_scraping()
    except KeyboardInterrupt:
        print("\n⚠️ Scraping interrupted by user")
    except Exception as e:
        print(f"\n❌ Unexpected error: {e}")
        import traceback
        traceback.print_exc()
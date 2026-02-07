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
from concurrent.futures import ThreadPoolExecutor, as_completed
import threading
from lxml import html

# Lock cho print để tránh race condition
print_lock = threading.Lock()

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
                with print_lock:
                    print(f"   ⚠️ Attempt {attempt+1}: Status {resp.status_code}, trying cloudscraper...")
                scraper = cloudscraper.create_scraper()
                resp = scraper.get(url, headers=headers, timeout=20)
                if resp.status_code == 200:
                    return resp.text
        except Exception as e:
            with print_lock:
                print(f"   ❌ Attempt {attempt+1} failed: {e}")
            if attempt < retry - 1:
                time.sleep(2 ** attempt)  # Exponential backoff
    
    return None

# --- Thay thế hình ảnh công thức bằng LaTeX ---
def replace_math_images(element):
    """Thay thế các hình ảnh công thức toán học bằng mã LaTeX từ alt text"""
    math_symbols = ['=', '+', '-', '*', '/', '^', '∫', '∑', '√', 'π', 'θ']
    for img in element.xpath('.//img'):
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
                img.getparent().replace(img, replacement)
    
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

# --- Tìm và phân loại links (tối ưu chỉ quiz và lesson) ---
def get_categorized_links(url):
    html_content = fetch_html(url)
    if not html_content:
        return {}
    
    tree = html.fromstring(html_content)
    links = defaultdict(list)
    seen_urls = set()
    
    with print_lock:
        print("   🔍 Phân tích và phân loại links (chỉ quiz và lesson)...")
    
    # XPath để tìm tất cả a tags
    a_tags = tree.xpath('//a[@href]')
    for a in a_tags:
        href = a.get('href', '').strip()
        if not href:
            continue
            
        full_url = urljoin(url, href)
        
        # Chỉ lấy links trong domain
        if not full_url.startswith("https://tech12h.com") or full_url == url:
            continue
            
        # Loại bỏ các patterns không mong muốn (tiêu đề, danh mục, etc.)
        skip_patterns = [
            '#', 'javascript:', 'mailto:', '.jpg', '.png', '.gif', '.pdf', 
            '.zip', '.rar', 'facebook.com', 'twitter.com', 'youtube.com',
            '/wp-admin', '/wp-content/uploads', '?replytocom=', '?share=',
            '/category/', '/tag/', '/author/', '/page/'  # Bỏ qua danh mục, trang
        ]
        
        if any(pattern in full_url.lower() for pattern in skip_patterns):
            continue
            
        if full_url in seen_urls:
            continue
        seen_urls.add(full_url)
        
        # Phân loại tối ưu: Chỉ quiz (trắc nghiệm) và lesson (có thể chứa quiz/tự luận)
        url_lower = full_url.lower()
        
        if any(keyword in url_lower for keyword in ['trac-nghiem', 'quiz', 'test', 'kiem-tra', 'de-thi']):
            links['quiz'].append(full_url)
        elif any(keyword in url_lower for keyword in ['bai-hoc', 'chuong', 'bai-', 'lop-', 'mon-']):
            links['lesson'].append(full_url)
        else:
            continue  # Bỏ qua other để tối ưu
    
    # Hiển thị thống kê
    total = sum(len(urls) for urls in links.values())
    with print_lock:
        print(f"   📊 Phân loại {total} links (quiz + lesson):")
        for category, urls in links.items():
            if urls:
                print(f"      - {category}: {len(urls)} links")
    
    return dict(links)

# --- Crawl đệ quy tối ưu chỉ quiz và lesson chứa quiz ---
def get_all_quiz_links(start_url, visited=None, max_depth=3, current_depth=0):
    if visited is None:
        visited = set()
    
    if current_depth > max_depth or start_url in visited:
        return []
    
    visited.add(start_url)
    with print_lock:
        print(f"   🕸️  Crawling depth {current_depth}: {start_url}")
    
    categorized = get_categorized_links(start_url)
    quiz_links = categorized.get('quiz', [])
    all_quiz_links = quiz_links.copy()
    
    # Recurse chỉ vào lesson (giới hạn để tránh loop, ưu tiên quiz)
    lesson_links = categorized.get('lesson', [])[:10]  # Giới hạn 10 lesson per level
    for link in lesson_links:
        if link not in visited:
            sub_quiz = get_all_quiz_links(link, visited, max_depth, current_depth + 1)
            all_quiz_links.extend(sub_quiz)
    
    return all_quiz_links

# --- Trích xuất trắc nghiệm (quiz) tối ưu với XPath ---
def extract_advanced_quiz(tree):
    questions = []
    
    # Kiểm tra indicators của trang quiz
    page_text = tree.xpath('string()').lower()
    quiz_indicators = [
        'trắc nghiệm', 'quiz', 'test', 'multiple choice', 'câu hỏi',
        'lựa chọn', 'đáp án', 'chọn đáp án đúng'
    ]
    
    is_quiz_page = any(indicator in page_text for indicator in quiz_indicators)
    
    if not is_quiz_page:
        return questions, False
    
    with print_lock:
        print("   🎯 Phát hiện trang trắc nghiệm, bắt đầu phân tích...")
    
    # Áp dụng thay thế math images
    replace_math_images(tree)
    
    # Tìm các patterns trắc nghiệm tối ưu
    quiz_patterns = [
        # Pattern 1: Câu hỏi được đánh số
        r'(?:Câu|Question)\s*(\d+)[.:\s]+(.+?)(?=(?:Câu|Question)\s*\d+|$)',
        # Pattern 2: Dạng A. B. C. D.
        r'([ABCD][\.\)]\s*.+?)(?=[ABCD][\.\)]|$)'
    ]
    
    full_text = tree.xpath('string()')
    
    # Method 1: Regex patterns (tập trung câu hỏi + đáp án)
    for pattern in quiz_patterns:
        matches = re.findall(pattern, full_text, re.DOTALL | re.IGNORECASE)
        if matches:
            with print_lock:
                print(f"   📝 Tìm thấy {len(matches)} matches với pattern")
            for match in matches[:50]:  # Tăng limit nếu cần
                if isinstance(match, tuple) and len(match) >= 2:
                    q_num, q_text = match[0], match[1]
                    q_text = process_math_content(q_text.strip()[:300])
                    # Tìm đáp án gần đó
                    answer_match = re.search(r'(?:Đáp án|Answer):\s*([ABCD])', full_text, re.IGNORECASE)
                    answer = answer_match.group(1) if answer_match else None
                    questions.append({
                        "question": f"Câu {q_num}: {q_text}",
                        "answer": answer,
                        "type": "quiz_extracted",
                        "extraction_method": "regex"
                    })
    
    # Method 2: XPath structure analysis (tập trung quiz containers, bỏ tiêu đề)
    # XPath tương đương: //div[contains(@class, "quiz")] | //div[contains(@class, "question")] | etc.
    quiz_containers_xpath = (
        '//div[contains(@class, "quiz")] | //div[contains(@class, "question")] | //div[contains(@class, "mcq")] | '
        '//form[contains(@class, "quiz")] | //ol/li | //ul/li | //*[contains(@class, "test-item")] | //*[contains(@class, "exam-item")] | '
        '//.//div[contains(@class, "entry-content")]//li | //article//p[strong] | //.//div[contains(@class, "post-content")]//ol | //.//div[contains(@class, "post-content")]//ul'
    )
    quiz_containers = tree.xpath(quiz_containers_xpath)
    
    for container in quiz_containers:
        # Bỏ qua nếu container là tiêu đề (ngắn, có h1-h6)
        if container.tag in ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] or len(container.text_content().strip()) < 20:
            continue
            
        # Thay thế math trong container
        replace_math_images(container)
        text = container.text_content().strip()
        if len(text) > 20 and len(text) < 1000:  # Reasonable question length
            
            # Xử lý math trong text
            text = process_math_content(text)
            
            # Tìm options (A, B, C, D)
            options = []
            option_pattern = r'([ABCD][\.\)]\s*.+?)(?=[ABCD][\.\)]|$)'
            option_matches = re.findall(option_pattern, text, re.DOTALL | re.IGNORECASE)
            
            if option_matches:
                options = [process_math_content(opt.strip()) for opt in option_matches]
            
            # Tìm đáp án đúng (XPath: //.correct | //.answer | etc., và //strong[contains(text(), "Đáp án")])
            answer = None
            answer_indicators_xpath = './/.correct | .//.answer | .//*[@data-correct="true"] | .//.dap-an'
            answer_indicators = container.xpath(answer_indicators_xpath)
            if answer_indicators:
                answer_elem = answer_indicators[0]
                replace_math_images(answer_elem)
                answer = process_math_content(answer_elem.text_content().strip())
            else:
                # Fallback: tìm strong chứa "Đáp án"
                strong_xpath = './/strong[contains(text(), "Đáp án")]'
                strongs = container.xpath(strong_xpath)
                if strongs:
                    strong = strongs[0]
                    replace_math_images(strong)
                    answer = process_math_content(strong.text_content().strip())
            
            questions.append({
                "question": text[:300] + "..." if len(text) > 300 else text,
                "options": options if options else None,
                "answer": answer,
                "type": "quiz_structured",
                "extraction_method": "xpath_analysis"
            })
    
    # Method 3: Table-based quizzes (XPath: //table)
    tables_xpath = '//table'
    tables = tree.xpath(tables_xpath)
    for table in tables:
        replace_math_images(table)
        rows = table.xpath('.//tr')
        if len(rows) > 1:  # Has header and content
            # Skip header nếu là tiêu đề
            header_row = rows[0]
            header_cells = header_row.xpath('.//th | .//td')
            if any('câu hỏi' not in cell.text_content().lower() for cell in header_cells):
                for row in rows[1:]:  # Skip header
                    cells = row.xpath('.//td | .//th')
                    if len(cells) >= 2:
                        question_cell = cells[0]
                        replace_math_images(question_cell)
                        question_text = process_math_content(question_cell.text_content().strip())
                        
                        answer_cell = cells[-1] if len(cells) > 1 else None
                        answer = None
                        if answer_cell:
                            replace_math_images(answer_cell)
                            answer = process_math_content(answer_cell.text_content().strip())
                        
                        if len(question_text) > 10:
                            questions.append({
                                "question": question_text,
                                "answer": answer,
                                "type": "quiz_table",
                                "extraction_method": "xpath_table_analysis"
                            })
    
    with print_lock:
        print(f"   ✅ Trích xuất được {len(questions)} câu hỏi trắc nghiệm")
    return questions, len(questions) > 0

# --- Trích xuất tự luận (text QA) tối ưu với XPath, bỏ tiêu đề/danh mục ---
def extract_advanced_text_qa(tree):
    questions = []
    
    with print_lock:
        print("   📝 Phân tích nội dung tự luận (bỏ tiêu đề/danh mục)...")
    
    # Làm sạch HTML (XPath để remove elements)
    remove_xpaths = [
        '//script', '//style', '//nav', '//header', '//footer', '//aside',
        '//*[@class="sidebar"]', '//*[@class="menu"]'
    ]
    for xpath in remove_xpaths:
        elements = tree.xpath(xpath)
        for elem in elements:
            elem.getparent().remove(elem)
    
    # Thay thế math images toàn bộ
    replace_math_images(tree)
    
    # Tìm nội dung chính (XPath cho main content)
    main_selectors_xpath = [
        '//*[@class="entry-content"]', '//*[@class="post-content"]', '//*[@class="content"]', '//*[@class="main-content"]',
        '//main//article', '//*[@id="main"]', '//*[@id="content"]', '//body'
    ]
    
    main_content = None
    for selector in main_selectors_xpath:
        candidates = tree.xpath(selector)
        if candidates and len(candidates[0].text_content().strip()) > 200:
            main_content = candidates[0]
            with print_lock:
                print(f"   📍 Sử dụng selector: {selector}")
            break
    
    if not main_content:
        main_content = tree
    
    # Phân tích cấu trúc nội dung, bỏ headings chỉ là tiêu đề/danh mục
    content_sections = analyze_content_structure_optimized(main_content)
    
    # Tạo Q&A từ các sections (chỉ câu hỏi và trả lời)
    for section in content_sections:
        section_type = section['type']
        content = section['content']
        title = section['title']
        
        if len(content) < 50:  # Skip too short content
            continue
        
        # Xử lý math trong title và content
        title = process_math_content(title)
        content = process_math_content(content)
        
        # Tạo câu hỏi phù hợp (tập trung tự luận)
        question_templates = {
            'exercise': "Giải bài tập: ",
            'theory': "Trình bày lý thuyết: ",
            'example': "Phân tích ví dụ: ",
            'definition': "Định nghĩa: ",
            'formula': "Giải thích công thức: ",
            'procedure': "Mô tả quy trình: ",
            'general': "Tóm tắt: "
        }
        
        template = question_templates.get(section_type, question_templates['general'])
        question = template + (title if title and len(title) > 10 else content[:80] + "...")  # Bỏ title ngắn
        
        questions.append({
            "question": question,
            "answer": content,
            "type": "text_qa",
            "content_type": section_type,
            "extraction_method": "xpath_structure_analysis"
        })
    
    with print_lock:
        print(f"   ✅ Tạo được {len(questions)} câu Q&A tự luận")
    return questions

def analyze_content_structure_optimized(element):
    """Phân tích cấu trúc nội dung tối ưu với XPath, bỏ tiêu đề/danh mục"""
    sections = []
    
    # Tìm các headings với XPath
    headings_xpath = './/h1 | .//h2 | .//h3 | .//h4 | .//h5 | .//h6'
    headings = element.xpath(headings_xpath)
    
    skip_heading_patterns = ['danh mục', 'category', 'menu', 'navigation', 'giới thiệu']  # Bỏ tiêu đề không liên quan
    
    for i, heading in enumerate(headings):
        title = heading.text_content().strip().lower()
        if any(pattern in title for pattern in skip_heading_patterns) or len(title) < 5:
            continue  # Bỏ tiêu đề/danh mục
        
        # Thu thập nội dung sau heading cho đến heading tiếp theo (XPath following-sibling)
        next_heading_xpath = f'following-sibling::*[self::h1 or self::h2 or self::h3 or self::h4 or self::h5 or self::h6][1]'
        next_heading = heading.xpath(next_heading_xpath, namespaces={'self': 'http://www.w3.org/1999/xhtml'})
        next_heading = next_heading[0] if next_heading else None
        
        content_parts = []
        siblings = heading.xpath('following-sibling::*[not(self::h1 or self::h2 or self::h3 or self::h4 or self::h5 or self::h6)]')
        for sibling in siblings:
            if next_heading is not None and sibling == next_heading:
                break
            text = sibling.text_content().strip()
            if text and len(text) > 20:  # Chỉ nội dung có ý nghĩa
                content_parts.append(text)
        
        content = '\n'.join(content_parts)
        
        if content and len(content) > 50:  # Tăng threshold
            # Phân loại loại nội dung
            content_type = classify_content(heading.text_content().strip(), content)
            
            sections.append({
                'title': heading.text_content().strip(),
                'content': content,
                'type': content_type
            })
    
    # Nếu không có headings hợp lệ, phân tích paragraphs với XPath
    if not sections:
        paragraphs_xpath = './/p'
        paragraphs = element.xpath(paragraphs_xpath)
        for p in paragraphs:
            text = p.text_content().strip()
            if len(text) > 100:  # Tăng threshold cho tự luận
                content_type = classify_content("", text)
                sections.append({
                    'title': text[:50] + "...",
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
    else:
        return 'general'

# --- Scraper chính tối ưu với XPath (chỉ quiz và text QA) ---
def deep_scrape_page(url, debug=False):
    with print_lock:
        print(f"\n🔍 DEEP SCRAPING: {url}")
    
    html_content = fetch_html(url)
    if not html_content:
        return []
    
    tree = html.fromstring(html_content)
    
    # Debug mode
    if debug:
        debug_page_structure(tree, url)
    
    # Xác định loại trang
    page_type = determine_page_type(tree, url)
    with print_lock:
        print(f"   📋 Loại trang: {page_type}")
    
    questions = []
    
    # Ưu tiên trắc nghiệm, fallback tự luận
    if page_type in ['quiz', 'test', 'exam']:
        quiz_questions, has_quiz = extract_advanced_quiz(tree)
        if has_quiz:
            questions.extend(quiz_questions)
    else:
        # Text-based: tự luận
        questions.extend(extract_advanced_text_qa(tree))
    
    # Loại bỏ duplicate và filter chất lượng
    questions = filter_and_deduplicate_questions(questions)
    
    with print_lock:
        print(f"   ✅ Trích xuất {len(questions)} questions từ trang này")
    return questions

def determine_page_type(tree, url):
    """Xác định loại trang web (tối ưu quiz/lesson) với XPath"""
    url_indicators = {
        'quiz': ['trac-nghiem', 'quiz', 'test', 'de-thi', 'kiem-tra'],
        'lesson': ['bai-hoc', 'lesson', 'chuong', 'bai-', 'lop-']
    }
    
    title_text = tree.xpath('string()')[:1000].lower()
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

def debug_page_structure(tree, url):
    """Debug chi tiết cấu trúc trang với XPath"""
    with print_lock:
        print(f"\n🔬 DEBUGGING PAGE STRUCTURE: {url}")
        print("-" * 80)
    
    # Basic info
    title = tree.xpath('//title/text()')
    if title:
        with print_lock:
            print(f"📖 Title: {title[0].strip()}")
    
    # Content analysis
    total_text = tree.xpath('string()')
    with print_lock:
        print(f"📏 Total text length: {len(total_text)} chars")
        print(f"🔤 First 200 chars: {total_text[:200]}...")
    
    # Structure analysis
    with print_lock:
        print("\n🏗️ STRUCTURE ANALYSIS:")
    important_tags = ['h1', 'h2', 'h3', 'h4', 'p', 'div', 'table', 'form', 'ol', 'ul']
    for tag in important_tags:
        count_xpath = f'count(//{tag})'
        count = len(tree.xpath(f'//{tag}'))
        with_content = len([t for t in tree.xpath(f'//{tag}') if len(t.text_content().strip()) > 20])
        if count > 0:
            with print_lock:
                print(f"   {tag}: {count} total ({with_content} with content)")
    
    # Class analysis (top classes)
    with print_lock:
        print("\n📊 TOP CLASSES:")
    class_elements = tree.xpath('//*[@class]')
    class_counts = defaultdict(int)
    for elem in class_elements:
        cls = elem.get('class', '')
        if cls:
            for c in cls.split():
                class_counts[c] += 1
    
    for cls, count in sorted(class_counts.items(), key=lambda x: x[1], reverse=True)[:10]:
        with print_lock:
            print(f"   .{cls}: {count} elements")
    
    with print_lock:
        print("-" * 80)

# --- Chuẩn hóa question ---
def normalize_question(q: Dict[str, Any]) -> Dict[str, Any]:
    """
    Chuẩn hóa một câu hỏi để có schema thống nhất (chỉ question và answer/options).
    """
    normalized = {
        "question": str(q.get("question", "")).strip(),
        "answer": str(q.get("answer", "")) if q.get("answer") is not None else None,
        "options": q.get("options", None),  # Giữ nguyên list hoặc None
        "type": q.get("type", "unknown"),
        "extraction_method": q.get("extraction_method", "unknown")
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
    
    # 4. Kiểm tra LaTeX cơ bản
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
        with print_lock:
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
    
    with print_lock:
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
    
    with print_lock:
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
    with print_lock:
        print(f"Đã push dataset lên: https://huggingface.co/datasets/{repo_name}")

# --- Main execution ---
def run_integrated_scraping_and_dataset():
    print("🚀 OPTIMIZED SCRAPER - Quiz & Text QA Extraction from Tech12h")
    print("🎯 Auto-crawl quiz/lesson → Extract Q&A only (XPath) → Validate → JSONL → Push HF")
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
    
    max_workers = input("Số threads song song (mặc định 5): ").strip()
    max_workers = int(max_workers) if max_workers.isdigit() else 5
    
    print(f"\n🔍 Analyzing: {parent_url}")
    
    # Lấy tất cả quiz links đệ quy tối ưu
    all_links = get_all_quiz_links(parent_url, max_depth=max_depth)
    
    if not all_links:
        print("⚠️ No quiz/lesson links found, scraping main URL...")
        questions_from_page = deep_scrape_page(parent_url, debug=debug_mode)
        all_questions = questions_from_page
    else:
        print(f"\n📦 Starting parallel deep scrape of {len(all_links)} quiz/lesson pages (max_workers={max_workers})...")
        
        all_questions = []
        errors = []
        
        with ThreadPoolExecutor(max_workers=max_workers) as executor:
            # Submit all tasks
            future_to_url = {executor.submit(deep_scrape_page, link, debug_mode and i == 0): link for i, link in enumerate(all_links)}
            
            # Collect results as completed
            for future in as_completed(future_to_url):
                link = future_to_url[future]
                try:
                    questions_from_page = future.result()
                    if questions_from_page:
                        all_questions.extend(questions_from_page)
                        with print_lock:
                            print(f"   ✅ Added {len(questions_from_page)} questions from {link}")
                    else:
                        with print_lock:
                            print(f"   ⚠️ No content extracted from {link}")
                        errors.append(f"No content: {link}")
                except Exception as e:
                    with print_lock:
                        print(f"   ❌ Error scraping {link}: {e}")
                    errors.append(f"Error: {link} - {str(e)}")
                
                # Rate limiting per thread (thêm delay nhỏ)
                time.sleep(random.uniform(0.5, 1.5))
        
        with print_lock:
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
    
    # Bước: Validation nâng cao
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
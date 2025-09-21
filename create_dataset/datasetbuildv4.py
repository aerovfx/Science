import os
import json
import time
import random
import requests
from bs4 import BeautifulSoup, NavigableString
from urllib.parse import urljoin
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
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0 Safari/537.36",
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15",
            "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36"
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
                scraper = cloudscraper.create_scraper()
                resp = scraper.get(url, headers=headers, timeout=20)
                if resp.status_code == 200:
                    return resp.text
        except Exception as e:
            if attempt < retry - 1:
                time.sleep(2 ** attempt)
    
    return None

# --- Thay thế hình ảnh công thức bằng LaTeX ---
def replace_math_images(element):
    math_symbols = ['=', '+', '-', '*', '/', '^', '∫', '∑', '√', 'π', 'θ']
    for img in element.find_all('img'):
        alt = img.get('alt', '').strip()
        title = img.get('title', '').strip()
        src_lower = img.get('src', '').lower()
        
        if (('math' in src_lower or 'formula' in src_lower or 'equation' in src_lower or
             any(sym in alt for sym in math_symbols) or any(sym in title for sym in math_symbols))):
            
            latex_content = alt if alt else title
            if latex_content:
                latex_content = re.sub(r'(\w+)\^(\d+)', r'\1^{\2}', latex_content)
                latex_content = re.sub(r'(\d+(?:\.\d+)?)/(\d+(?:\.\d+)?)', r'\\frac{\1}{\2}', latex_content)
                replacement = NavigableString(f"\\[ {latex_content} \\]")
                img.replace_with(replacement)
    
    return element

# --- Xử lý văn bản để thêm math mode ---
def process_math_content(text):
    math_pattern = r'([a-zA-Z0-9θπ]+\s*[+\-*/=^√∫∑]+\s*[a-zA-Z0-9θπ]+)'
    def replace_math(match):
        expr = match.group(1).strip()
        expr = re.sub(r'(\w+)\^(\d+)', r'\1^{\2}', expr)
        expr = re.sub(r'(\d+(?:\.\d+)?)/(\d+(?:\.\d+)?)', r'\\frac{\1}{\2}', expr)
        return f"${expr}$"
    
    text = re.sub(math_pattern, replace_math, text)
    return text

# --- Tìm và phân loại links (tối ưu chỉ tập trung vào quiz và tự luận) ---
def get_categorized_links(url):
    html = fetch_html(url)
    if not html:
        return {}
    
    soup = BeautifulSoup(html, "html.parser")
    links = defaultdict(list)
    seen_urls = set()
    
    for a in soup.find_all("a", href=True):
        href = a.get("href", "").strip()
        if not href:
            continue
            
        full_url = urljoin(url, href)
        
        if not full_url.startswith("https://tech12h.com") or full_url == url:
            continue
            
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
        
        url_lower = full_url.lower()
        
        if any(keyword in url_lower for keyword in ['trac-nghiem', 'quiz', 'test', 'kiem-tra', 'de-thi']):
            links['quiz'].append(full_url)
        elif any(keyword in url_lower for keyword in ['bai-hoc', 'giai-bai', 'loi-giai', 'bai-tap']):
            links['text_qa'].append(full_url)
    
    return dict(links)

# --- Crawl đệ quy tối ưu (tự động đến cấp phù hợp, giới hạn độ sâu) ---
def get_all_relevant_links(start_url, visited=None, max_depth=2, current_depth=0):
    if visited is None:
        visited = set()
    
    if current_depth > max_depth or start_url in visited:
        return []
    
    visited.add(start_url)
    
    categorized = get_categorized_links(start_url)
    relevant_links = categorized.get('quiz', []) + categorized.get('text_qa', [])
    all_links = relevant_links.copy()
    
    # Recurse chỉ vào các trang có tiềm năng chứa nội dung
    potential_links = categorized.get('text_qa', [])[:3]  # Giới hạn để tránh crawl quá rộng
    for link in potential_links:
        if link not in visited:
            sub_links = get_all_relevant_links(link, visited, max_depth, current_depth + 1)
            all_links.extend(sub_links)
    
    return all_links

# --- Trích xuất trắc nghiệm (bỏ qua tiêu đề, danh mục) ---
def extract_quiz(soup):
    questions = []
    replace_math_images(soup)
    
    # Bỏ qua tiêu đề, header, footer, nav
    for element in soup(['script', 'style', 'nav', 'header', 'footer', 'aside', 'h1', 'h2']):
        element.decompose()
    
    # Tìm container chính
    main_content = soup.select_one('.entry-content, .post-content, article, #main') or soup
    
    # Regex cho câu hỏi
    full_text = main_content.get_text(separator='\n', strip=True)
    quiz_pattern = r'(?:Câu|Question)\s*(\d+)[.:\s]+(.+?)(?=(?:Câu|Question)\s*\d+|$)'
    matches = re.findall(quiz_pattern, full_text, re.DOTALL | re.IGNORECASE)
    
    for q_num, q_text in matches:
        q_text = process_math_content(q_text.strip())
        # Tìm options và answer
        options_pattern = r'([ABCD][\.\)]\s*.+?)(?=[ABCD][\.\)]|$)'
        options = [process_math_content(opt.strip()) for opt in re.findall(options_pattern, q_text, re.DOTALL | re.IGNORECASE)]
        answer = re.search(r'(?:Đáp án|Answer):\s*([ABCD])', q_text, re.IGNORECASE)
        answer = answer.group(1) if answer else None
        
        if options:
            questions.append({
                "question": f"Câu {q_num}: {q_text.split('A.')[0].strip()}",  # Chỉ lấy phần câu hỏi
                "options": options,
                "answer": answer,
                "type": "quiz"
            })
    
    # HTML analysis cho quiz
    quiz_containers = main_content.select('div[class*="quiz"], div[class*="question"], ol li, ul li')
    for container in quiz_containers:
        text = process_math_content(container.get_text(strip=True))
        if len(text) > 20:
            options = re.findall(r'([ABCD][\.\)]\s*.+?)(?=[ABCD][\.\)]|$)', text, re.DOTALL | re.IGNORECASE)
            answer_elem = container.select_one('.correct, .answer')
            answer = process_math_content(answer_elem.get_text(strip=True)) if answer_elem else None
            questions.append({
                "question": text.split('A.')[0].strip() if 'A.' in text else text,
                "options": [opt.strip() for opt in options],
                "answer": answer,
                "type": "quiz"
            })
    
    return questions

# --- Trích xuất tự luận (bỏ qua tiêu đề, danh mục) ---
def extract_text_qa(soup):
    questions = []
    replace_math_images(soup)
    
    # Bỏ qua tiêu đề, header, etc.
    for element in soup(['script', 'style', 'nav', 'header', 'footer', 'aside', 'h1', 'h2']):
        element.decompose()
    
    # Tìm sections
    main_content = soup.select_one('.entry-content, .post-content, article, #main') or soup
    paragraphs = main_content.find_all('p')
    
    current_question = None
    current_answer = []
    
    for p in paragraphs:
        text = process_math_content(p.get_text(strip=True))
        if len(text) < 50:
            continue
        
        if text.startswith(('Câu ', 'Bài ', 'Hỏi:', 'Question:')):
            if current_question and current_answer:
                questions.append({
                    "question": current_question,
                    "answer": ' '.join(current_answer),
                    "type": "text_qa"
                })
            current_question = text
            current_answer = []
        else:
            current_answer.append(text)
    
    if current_question and current_answer:
        questions.append({
            "question": current_question,
            "answer": ' '.join(current_answer),
            "type": "text_qa"
        })
    
    return questions

# --- Scraper chính tối ưu ---
def scrape_page(url):
    html = fetch_html(url)
    if not html:
        return []
    
    soup = BeautifulSoup(html, "html.parser")
    questions = extract_quiz(soup) + extract_text_qa(soup)
    questions = filter_and_deduplicate_questions(questions)
    return questions

def filter_and_deduplicate_questions(questions):
    seen_hashes = set()
    filtered = []
    
    for q in questions:
        content_hash = hashlib.md5(json.dumps(q, sort_keys=True).encode()).hexdigest()
        if content_hash not in seen_hashes and len(q["question"]) > 10:
            seen_hashes.add(content_hash)
            filtered.append(q)
    
    return filtered

# --- Main execution tối ưu ---
def run_optimized_scraping():
    parent_url = input("Nhập URL cần scrape (mặc định https://tech12h.com): ").strip() or "https://tech12h.com"
    max_depth = int(input("Độ sâu crawl (mặc định 2): ").strip() or 2)
    repo_name = input("Nhập tên repo Hugging Face: ").strip()
    hf_token = input("Nhập Hugging Face token (optional): ").strip()
    
    all_links = get_all_relevant_links(parent_url, max_depth=max_depth)
    
    all_questions = []
    for link in all_links:
        questions = scrape_page(link)
        all_questions.extend(questions)
        time.sleep(random.uniform(1, 3))
    
    normalized_questions = [q for q in all_questions if validate_question(q)]
    
    if not normalized_questions:
        print("Không có dữ liệu hợp lệ!")
        return
    
    jsonl_file = "optimized_dataset.jsonl"
    with open(jsonl_file, 'w', encoding='utf-8') as f:
        for q in normalized_questions:
            f.write(json.dumps(q, ensure_ascii=False) + '\n')
    
    if hf_token:
        login(token=hf_token)
    dataset = Dataset.from_json(jsonl_file)
    dataset.push_to_hub(repo_name)
    
    print(f"Hoàn thành: {len(normalized_questions)} câu hỏi, repo: {repo_name}")

# --- Validation question ---
def validate_question(q: Dict[str, Any]) -> bool:
    if len(q["question"]) < 10 or len(q["question"]) > 1000:
        return False
    if q.get("answer") and not q["answer"].strip():
        return False
    if q.get("options") and len(q["options"]) < 2:
        return False
    return True

if __name__ == "__main__":
    run_optimized_scraping()
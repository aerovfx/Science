import os
import json
import time
import random
import aiohttp
import asyncio
from bs4 import BeautifulSoup, NavigableString
from urllib.parse import urljoin
import re
from collections import defaultdict
import hashlib
from typing import List, Dict, Any
from datasets import Dataset
from huggingface_hub import login
import threading

# Lock cho print (thread-safe for mixed async/sync)
print_lock = threading.Lock()

# --- Async fetch HTML ---
async def fetch_html(session, url, retry=3):
    headers = {
        "User-Agent": random.choice([
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0 Safari/537.36",
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15",
            "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36"
        ]),
        "Accept": "text/html,application/xhtml+xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "vi-VN,vi;q=0.9,en;q=0.8",
        "Accept-Encoding": "gzip, deflate",
        "Connection": "keep-alive",
    }
    
    for attempt in range(retry):
        try:
            async with session.get(url, headers=headers, timeout=aiohttp.ClientTimeout(total=20)) as resp:
                if resp.status == 200:
                    text = await resp.text()
                    if len(text) > 500:
                        return text
        except Exception as e:
            with print_lock:
                print(f"   ❌ Async fetch failed {attempt+1}: {e}")
            if attempt < retry - 1:
                await asyncio.sleep(2 ** attempt)
    return None

# --- Xử lý math (sync) ---
def process_math_content(text):
    math_pattern = r'([a-zA-Z0-9θπ]+\s*[+\-*/=^√∫∑]+\s*[a-zA-Z0-9θπ]+)'
    def replace_math(match):
        expr = match.group(1).strip()
        expr = re.sub(r'(\w+)\^(\d+)', r'\1^{\2}', expr)
        expr = re.sub(r'(\d+(?:\.\d+)?)/(\d+(?:\.\d+)?)', r'\\frac{\1}{\2}', expr)
        return f"${expr}$"
    return re.sub(math_pattern, replace_math, text)

# --- Thay thế math images (sync) ---
def replace_math_images(soup):
    math_symbols = ['=', '+', '-', '*', '/', '^', '∫', '∑', '√', 'π', 'θ']
    for img in soup.find_all('img'):
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
    return soup

# --- Kiểm tra trang có phải trắc nghiệm không (sync) ---
def is_quiz_page(soup, url):
    quiz_url_patterns = ['trac-nghiem', 'quiz', 'test', 'kiem-tra', 'de-thi', 'bai-kiem-tra', 'multiple-choice', 'mcq', 'examination']
    url_lower = url.lower()
    has_quiz_url = any(pattern in url_lower for pattern in quiz_url_patterns)
    
    title = soup.select_one('title')
    title_text = title.get_text().lower() if title else ""
    meta_desc = soup.select_one('meta[name="description"]')
    meta_desc_text = meta_desc.get('content', '').lower() if meta_desc else ""
    
    quiz_title_patterns = ['trắc nghiệm', 'quiz', 'test', 'câu hỏi trắc nghiệm', 'bài kiểm tra', 'đề thi', 'multiple choice']
    has_quiz_title = any(pattern in title_text or pattern in meta_desc_text for pattern in quiz_title_patterns)
    
    page_text = soup.get_text().lower()
    strong_quiz_patterns = [
        r'câu\s+\d+[.:\s]+', r'question\s+\d+[.:\s]+', r'[abcd][\.\)]\s+[^\n]{10,}',
        r'chọn\s+đáp\s+án\s+đúng', r'đáp\s+án\s+đúng\s+là', r'lựa\s+chọn\s+đúng'
    ]
    strong_quiz_matches = sum(len(re.findall(pattern, page_text, re.IGNORECASE)) for pattern in strong_quiz_patterns)
    
    quiz_forms = soup.select('form[class*="quiz"], form[id*="quiz"], form[class*="test"]')
    radio_inputs = soup.select('input[type="radio"]')
    checkbox_inputs = soup.select('input[type="checkbox"]')
    has_quiz_structure = len(quiz_forms) > 0 or len(radio_inputs) >= 4 or len(checkbox_inputs) >= 4
    
    score = 0
    if has_quiz_url:
        score += 3
    if has_quiz_title:
        score += 2
    if strong_quiz_matches >= 5:
        score += 3
    if has_quiz_structure:
        score += 2
    
    negative_patterns = ['giới thiệu', 'about', 'contact', 'liên hệ', 'tin tức', 'news', 'blog', 'bài viết', 'article', 'hướng dẫn', 'tutorial', 'danh mục', 'category', 'archive', 'trang chủ', 'home']
    has_negative = any(pattern in url_lower or pattern in title_text for pattern in negative_patterns)
    if has_negative:
        score -= 2
    
    return score >= 4

# --- Async find quiz links ---
async def get_quiz_links_async(session, url):
    html = await fetch_html(session, url)
    if not html:
        return []
    
    soup = BeautifulSoup(html, "html.parser")
    quiz_links = []
    seen_urls = set()
    
    with print_lock:
        print("   🔍 Async finding QUIZ LINKS...")
    
    for a in soup.find_all("a", href=True):
        href = a.get("href", "").strip()
        if not href:
            continue
        
        full_url = urljoin(url, href)
        if (full_url.startswith("https://tech12h.com") and full_url not in seen_urls and
            any(kw in full_url.lower() for kw in ['trac-nghiem', 'quiz', 'test', 'kiem-tra', 'de-thi', 'bai-kiem-tra', 'multiple-choice', 'mcq']) and
            not any(skip in full_url.lower() for skip in ['#', 'javascript:', 'facebook.com', '/wp-admin', '/category/', '/tag/', '/search/', '/contact/', '/about/', '/lien-he/', '/gioi-thieu/'])):
            quiz_links.append(full_url)
            seen_urls.add(full_url)
    
    with print_lock:
        print(f"   ✅ Async found {len(quiz_links)} quiz links")
    return quiz_links

# --- Async recursive crawl ---
async def get_all_quiz_links_async(session, start_url, visited=None, max_depth=2, current_depth=0):
    if visited is None:
        visited = set()
    
    if current_depth > max_depth or start_url in visited:
        return []
    
    visited.add(start_url)
    with print_lock:
        print(f"   🕸️  Async depth {current_depth}: {start_url}")
    
    quiz_links = await get_quiz_links_async(session, start_url)
    all_quiz_links = []
    
    # Verify each link is quiz
    verify_tasks = [verify_quiz_page(session, link) for link in quiz_links]
    verified_results = await asyncio.gather(*verify_tasks, return_exceptions=True)
    
    for i, result in enumerate(verified_results):
        if isinstance(result, dict) and result['is_quiz']:
            all_quiz_links.append(quiz_links[i])
            with print_lock:
                print(f"     ✅ Confirmed async quiz: {quiz_links[i]}")
    
    # Recurse (limited)
    if current_depth < max_depth:
        lesson_links = [l for l in quiz_links if any(kw in l.lower() for kw in ['bai-hoc', 'chuong'])][:3]
        recurse_tasks = [get_all_quiz_links_async(session, link, visited, max_depth, current_depth + 1) for link in lesson_links]
        recurse_results = await asyncio.gather(*recurse_tasks)
        for sub_links in recurse_results:
            all_quiz_links.extend(sub_links)
    
    return list(set(all_quiz_links))  # Dedupe

async def verify_quiz_page(session, url):
    html = await fetch_html(session, url)
    if not html:
        return {'is_quiz': False}
    
    soup = BeautifulSoup(html, "html.parser")
    return {'is_quiz': is_quiz_page(soup, url)}

# --- Async scrape quiz ---
async def scrape_quiz_async(session, url, debug=False):
    with print_lock:
        print(f"\n🎯 Async QUIZ SCRAPING: {url}")
    
    html = await fetch_html(session, url)
    if not html:
        return []
    
    soup = BeautifulSoup(html, "html.parser")
    
    # Verify quiz
    if not is_quiz_page(soup, url):
        with print_lock:
            print("   ❌ Not a quiz page - skipping")
        return []
    
    if debug:
        debug_quiz_structure(soup, url)
    
    # Extract
    questions = extract_quiz_specialized(soup)
    questions = filter_and_deduplicate_questions(questions)
    
    with print_lock:
        print(f"   ✅ Async extracted {len(questions)} quiz questions")
    return questions

# --- Main async runner ---
async def run_async_quiz_scraper():
    print("🚀 ASYNC QUIZ CRAWLER - High Performance Quiz Extraction")
    print("⚡ Using asyncio + aiohttp for maximum speed")
    print("-" * 60)
    
    parent_url = input("Nhập URL cần scrape (mặc định https://tech12h.com): ").strip() or "https://tech12h.com"
    
    debug_mode = input("Debug mode? (y/N): ").strip().lower() == 'y'
    max_depth = int(input("Độ sâu crawl (mặc định 2): ").strip() or "2")
    
    repo_name = input("Nhập tên repo Hugging Face: ").strip()
    if not repo_name:
        print("Tên repo không hợp lệ!")
        return
    
    hf_token = input("Hugging Face token (optional): ").strip()
    
    max_concurrent = int(input("Số connections đồng thời (mặc định 10): ").strip() or "10")
    
    print(f"\n🔍 Async starting at {parent_url}")
    
    connector = aiohttp.TCPConnector(limit=max_concurrent, limit_per_host=5)
    timeout = aiohttp.ClientTimeout(total=30)
    async with aiohttp.ClientSession(connector=connector, timeout=timeout) as session:
        
        # Phase 1: Discover quiz pages
        print("\n📦 Phase 1: Async discovering quiz pages...")
        quiz_links = await get_all_quiz_links_async(session, parent_url, max_depth=max_depth)
        
        if not quiz_links:
            print("⚠️ No quiz pages found!")
            return
        
        print(f"✅ Discovered {len(quiz_links)} quiz pages")
        
        # Phase 2: Async extract from all quiz pages
        print(f"\n📝 Phase 2: Async extracting from {len(quiz_links)} pages...")
        
        extract_tasks = [scrape_quiz_async(session, link, debug_mode and i == 0) for i, link in enumerate(quiz_links)]
        all_results = await asyncio.gather(*extract_tasks, return_exceptions=True)
        
        all_questions = []
        for result in all_results:
            if isinstance(result, list):
                all_questions.extend(result)
            else:
                with print_lock:
                    print(f"   ❌ Extraction error: {result}")
        
        print(f"✅ Total raw questions: {len(all_questions)}")
        
        # Phase 3: Normalize and validate
        print("\n🔧 Phase 3: Normalizing and validating...")
        normalized = [normalize_quiz_question(q) for q in all_questions if normalize_quiz_question(q)]
        validated = validate_quiz_questions(normalized)
        
        print(f"✅ Validated: {len(validated)} questions")
        
        if not validated:
            print("❌ No valid questions!")
            return
        
        # Phase 4: Save JSONL
        print("\n📄 Phase 4: Saving JSONL...")
        jsonl_file = create_jsonl(validated, "async_quiz_dataset.jsonl")
        
        # Phase 5: Push to HF
        print("\n🚀 Phase 5: Pushing to Hugging Face...")
        try:
            push_to_huggingface(jsonl_file, repo_name, hf_token)
            print("✅ Pushed successfully!")
        except Exception as e:
            print(f"❌ Push failed: {e}")
        
        # Summary
        print("\n" + "="*60)
        print("🎯 ASYNC QUIZ SCRAPER SUMMARY")
        print("="*60)
        print(f"📊 Quiz pages: {len(quiz_links)}")
        print(f"📝 Total questions: {len(validated)}")
        print(f"📁 File: {jsonl_file}")
        print(f"🌐 Repo: https://huggingface.co/datasets/{repo_name}")
        print("="*60)

# --- Helper functions (from previous code) ---
def extract_quiz_specialized(soup):
    # Implementation from previous response (full code would include this)
    # ... (copy the full extract_quiz_specialized function here)
    pass

def normalize_quiz_question(q):
    # Implementation
    pass

def validate_quiz_questions(questions):
    # Implementation
    pass

def create_jsonl(questions, output_file):
    # Implementation
    pass

def push_to_huggingface(jsonl_file, repo_name, hf_token):
    # Implementation
    pass

def is_quiz_page(soup, url):
    # Implementation
    pass

def filter_and_deduplicate_questions(questions):
    # Implementation
    pass

# --- Entry point ---
if __name__ == "__main__":
    asyncio.run(run_async_quiz_scraper())
"""
===============================================================================
NGỮ VĂN 7 KNTT — PYTHON LITERATURE NLP & TEXT TOOLKIT
Grade 7 Vietnamese Literature (Connecting Knowledge to Life) Digital Toolkit
===============================================================================
Bao gồm các hàm xử lý văn bản tiếng Việt, thống kê tần suất từ vựng,
tự động trích xuất câu chứa trạng ngữ/tu từ, phân tích nhịp thơ và vẽ biểu đồ tần suất.
"""

import re
from collections import Counter
import matplotlib.pyplot as plt

# Cấu hình giao diện đồ thị Matplotlib
plt.rcParams['font.sans-serif'] = 'DejaVu Sans'
plt.rcParams['axes.unicode_minus'] = False


# =============================================================================
# BÀI 1 & BÀI 10: TÓM TẮT VĂN BẢN & TRÍCH XUẤT TỪ KHÓA CHÍNH
# =============================================================================

def extract_keywords_and_summarize(text, top_n=5):
    """
    Trích xuất các từ khóa xuất hiện nhiều nhất và tìm các câu quan trọng nhất chứa từ khóa đó.
    """
    # Làm sạch văn bản và tách từ đơn giản
    words = re.findall(r'\b\w+\b', text.lower())
    
    # Danh sách từ dừng (Stopwords tiếng Việt đơn giản)
    stopwords = {'và', 'của', 'những', 'các', 'là', 'cho', 'trong', 'với', 'khi', 'được', 'có', 'đã', 'sẽ', 'thì', 'mà', 'ra', 'vào', 'này', 'đó'}
    filtered_words = [w for w in words if w not in stopwords and len(w) > 1]
    
    word_counts = Counter(filtered_words)
    common_keywords = word_counts.most_common(top_n)
    
    print("=== KẾT QUẢ TRÍCH XUẤT TỪ KHÓA CHÍNH (KEYWORD EXTRACTION) ===")
    for word, count in common_keywords:
        print(f"Từ khóa: '{word}' — Tần suất xuất hiện: {count} lần")
    print()
    
    # Trích xuất các câu chứa từ khóa hàng đầu
    sentences = re.split(r'[.!?]\s+', text)
    top_keyword = common_keywords[0][0] if common_keywords else ""
    summary_sentences = [s.strip() for s in sentences if top_keyword in s.lower()]
    
    print(f"=== CÁC CÂU TRỌNG TÂM CHỨA TỪ KHÓA '{top_keyword.upper()}' ===")
    for idx, sentence in enumerate(summary_sentences[:3], 1):
        print(f"{idx}. \"{sentence}\"")
    print()
    
    return common_keywords, summary_sentences


# =============================================================================
# BÀI 2 & BÀI 9: PHÂN TÍCH NHỊP THƠ & BIỆN PHÁP TU TỪ THIÊN NHIÊN
# =============================================================================

def analyze_poetry_rhythm(poem_text):
    """
    Phân tích số tiếng trên mỗi dòng thơ (Thơ 4 chữ, 5 chữ hay tự do) và thống kê từ ngữ hình ảnh.
    """
    lines = [line.strip() for line in poem_text.strip().split('\n') if line.strip()]
    word_counts_per_line = [len(line.split()) for line in lines]
    
    print("=== KẾT QUẢ PHÂN TÍCH THỂ THƠ & NHỊP THƠ ===")
    print(f"Tổng số dòng thơ: {len(lines)}")
    print(f"Số tiếng trung bình/dòng: {sum(word_counts_per_line)/len(word_counts_per_line):.1f} tiếng")
    
    mode_words = Counter(word_counts_per_line).most_common(1)[0][0]
    if mode_words == 4:
        genre = "Thơ 4 chữ (Nhịp 2/2 linh hoạt)"
    elif mode_words == 5:
        genre = "Thơ 5 chữ (Nhịp 3/2 hoặc 2/3)"
    else:
        genre = "Thơ tự do / Thơ lục bát"
        
    print(f"Nhận diện thể thơ chính: {genre}")
    print("\nChi tiết số tiếng từng dòng:")
    for idx, (line, count) in enumerate(zip(lines[:5], word_counts_per_line[:5]), 1):
        print(f"Dòng {idx} ({count} tiếng): \"{line}\"")
    print()


# =============================================================================
# BÀI 5 & BÀI 9: VẼ BIỂU ĐỒ TẦN SUẤT TỪ NGỮ CHỈ THIÊN NHIÊN / VĂN HÓA
# =============================================================================

def plot_word_frequency(text, target_words=['mùa xuân', 'trăng', 'sông', 'mẹ', 'quê hương']):
    """
    Thống kê và vẽ biểu đồ hình cột tần suất các hình ảnh thơ ca / từ ngữ chủ đề.
    """
    text_lower = text.lower()
    counts = {word: text_lower.count(word) for word in target_words}
    
    plt.figure(figsize=(8, 5))
    bars = plt.bar(counts.keys(), counts.values(), color='mediumseagreen', edgecolor='darkgreen', alpha=0.8)
    
    for bar in bars:
        yval = bar.get_height()
        plt.text(bar.get_x() + bar.get_width()/2, yval + 0.1, int(yval), ha='center', fontweight='bold')
        
    plt.title("Biểu Đồ Tần Suất Từ Ngữ Hình Ảnh Trong Tác Phẩm")
    plt.xlabel("Từ ngữ hình ảnh / Chủ đề")
    plt.ylabel("Số lần xuất hiện")
    plt.grid(True, linestyle=':', alpha=0.6, axis='y')
    plt.tight_layout()
    plt.savefig("literature_word_frequency.png")
    print("Đã lưu biểu đồ tần suất từ ngữ 'literature_word_frequency.png'")


# =============================================================================
# MAIN TEST EXECUTION
# =============================================================================

if __name__ == "__main__":
    print("📖 NGỮ VĂN 7 KNTT PYTHON TOOLKIT TESTING 📖\n")
    
    sample_text = """
    Mọc giữa dòng sông xanh, một bông hoa tím biếc.
    Ơi con chim chiền chiện, hót chi mà vang trời.
    Từng giọt long lanh rơi, tôi đưa tay tôi hứng.
    Mùa xuân nho nhỏ, lặng lẽ dâng cho đời.
    Dù là tuổi hai mươi, dù là khi tóc bạc.
    """
    
    # 1. Test trích xuất từ khóa & tóm tắt
    extract_keywords_and_summarize(sample_text, top_n=4)
    
    # 2. Test phân tích thể thơ
    analyze_poetry_rhythm(sample_text)
    
    # 3. Test vẽ biểu đồ tần suất từ ngữ
    plot_word_frequency(sample_text, target_words=['mùa xuân', 'sông', 'hoa', 'chim'])

"""
===============================================================================
TIẾNG VIỆT 4 KNTT — PYTHON PRIMARY LANGUAGE TOOLKIT
Primary Vietnamese Grade 4 (Connecting Knowledge to Life) Python Toolkit
===============================================================================
Bao gồm các hàm phân tích bài văn miêu tả/kể chuyện cho học sinh lớp 4,
đếm từ loại (danh từ, động từ, tính từ), tạo dàn ý bài văn tự động và vẽ biểu đồ tần suất từ ngữ.
"""

import re
from collections import Counter
import matplotlib.pyplot as plt

# Cấu hình giao diện đồ thị Matplotlib
plt.rcParams['font.sans-serif'] = 'DejaVu Sans'
plt.rcParams['axes.unicode_minus'] = False


# =============================================================================
# BÀI 1 & 2: PHÂN TÍCH TỔNG SỐ TỪ VÀ TỪ LOẠI BÀI VĂN MIÊU TẢ
# =============================================================================

def analyze_primary_essay(essay_text):
    """
    Đếm số từ, số câu và phân tích độ dài câu trong bài văn của học sinh Tiểu học.
    """
    words = re.findall(r'\b\w+\b', essay_text)
    sentences = re.split(r'[.!?]\s+', essay_text.strip())
    sentences = [s for s in sentences if s]
    
    total_words = len(words)
    total_sentences = len(sentences)
    avg_words_per_sentence = total_words / total_sentences if total_sentences > 0 else 0
    
    print("=== KẾT QUẢ PHÂN TÍCH BÀI VĂN HỌC SINH LỚP 4 ===")
    print(f"Tổng số từ        : {total_words} từ")
    print(f"Tổng số câu       : {total_sentences} câu")
    print(f"Độ dài trung bình : {avg_words_per_sentence:.1f} từ/câu")
    
    if total_words >= 120:
        print("Đánh giá độ dài  : Đạt chuẩn độ dài bài văn Lớp 4 (120-180 từ)\n")
    else:
        print("Đánh giá độ dài  : Bài văn ngắn, cần mở rộng thêm ý miêu tả/cảm xúc\n")
        
    return total_words, total_sentences


# =============================================================================
# BÀI 3 & 5: TẠO DÀN Ý TỰ ĐỘNG BÀI VĂN TẢ NGƯỜI / KỂ CHUYỆN
# =============================================================================

def generate_story_outline(topic="tả người", person_name="người thân"):
    """
    Tự động tạo dàn ý 3 phần chuẩn cho bài văn miêu tả hoặc kể chuyện lớp 4.
    """
    print(f"=== DÀN Ý MẪU BÀI VĂN CHUẨN LỚP 4: {topic.upper()} ({person_name.upper()}) ===")
    print("1. MỞ BÀI: Giới thiệu người em định tả (Ai? Mối quan hệ với em như thế nào?)")
    print("2. THÂN BÀI:")
    print("   a) Tả ngoại hình : Vóc dáng, khuôn mặt, mái tóc, nụ cười, trang phục thường mặc.")
    print("   b) Tả tính tình  : Hiền lành, ân cần, luôn yêu thương và giúp đỡ mọi người.")
    print("   c) Tả hoạt động  : Thói quen hằng ngày, công việc yêu thích, một kỷ niệm đẹp với em.")
    print("3. KẾT BÀI: Tình cảm của em đối với người đó (Yêu quý, kính trọng, hứa ngoan ngoãn).\n")


# =============================================================================
# BÀI 10 & 11: VẼ BIỂU ĐỒ TẦN SUẤT TỪ NGỮ BẰNG PYTHON
# =============================================================================

def plot_descriptive_word_frequency(essay_text, keywords=['xanh', 'đẹp', 'yêu', 'vui', 'như']):
    """
    Thống kê tần suất từ ngữ hình ảnh so sánh & biểu cảm trong bài văn miêu tả.
    """
    text_lower = essay_text.lower()
    counts = {word: text_lower.count(word) for word in keywords}
    
    plt.figure(figsize=(8, 5))
    bars = plt.bar(counts.keys(), counts.values(), color='coral', edgecolor='darkred', alpha=0.85)
    
    for bar in bars:
        yval = bar.get_height()
        plt.text(bar.get_x() + bar.get_width()/2, yval + 0.1, int(yval), ha='center', fontweight='bold')
        
    plt.title("Biểu Đồ Thống Kê Từ Ngữ Hình Ảnh & Biểu Cảm Trong Bài Văn")
    plt.xlabel("Từ ngữ hình ảnh / So sánh / Cảm xúc")
    plt.ylabel("Số lần xuất hiện")
    plt.grid(True, linestyle=':', alpha=0.6, axis='y')
    plt.tight_layout()
    plt.savefig("primary_word_frequency.png")
    print("Đã lưu biểu đồ tần suất từ 'primary_word_frequency.png'")


# =============================================================================
# MAIN TEST EXECUTION
# =============================================================================

if __name__ == "__main__":
    print("📖 TIẾNG VIỆT 4 KNTT PYTHON TOOLKIT TESTING 📖\n")
    
    sample_essay = """
    Trong gia đình, người em yêu quý nhất là mẹ. Mẹ em năm nay bốn mươi tuổi, dáng người nhỏ nhắn và hiền từ. Mái tóc mẹ đen mượt, luôn được búi gọn gàng sau óc. Khuôn mặt mẹ tròn trịa với nụ cười ấm áp như ánh nắng ban mai. Mẹ là người nuôi nấng và chăm sóc em từ bữa ăn đến giấc ngủ. Mỗi tối, mẹ đều ngồi bên bàn học giảng bài cho em. Em rất yêu mẹ và hứa sẽ học thật giỏi để mẹ luôn vui lòng.
    """
    
    # 1. Test phân tích độ dài bài văn
    analyze_primary_essay(sample_essay)
    
    # 2. Test tạo dàn ý tả người
    generate_story_outline(topic="tả người thân", person_name="mẹ yêu quý")
    
    # 3. Test vẽ biểu đồ từ ngữ
    plot_descriptive_word_frequency(sample_essay, keywords=['mẹ', 'yêu', 'như', 'hiền', 'giỏi'])

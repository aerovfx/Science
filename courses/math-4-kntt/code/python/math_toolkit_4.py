"""
===============================================================================
TOÁN 4 KNTT — PYTHON PRIMARY MATH TOOLKIT & GAME ENGINE
Primary Math Grade 4 (Connecting Knowledge to Life) Python Toolkit
===============================================================================
Bao gồm các hàm đọc phân tích số lớp triệu, giải bài toán Tổng - Hiệu,
rút gọn & thực hiện 4 phép tính phân số, tính diện tích hình bình hành, hình thoi và vẽ biểu đồ cột.
"""

from fractions import Fraction
import random
import matplotlib.pyplot as plt

# Cấu hình giao diện đồ thị Matplotlib
plt.rcParams['font.sans-serif'] = 'DejaVu Sans'
plt.rcParams['axes.unicode_minus'] = False


# =============================================================================
# CHỦ ĐỀ 2: PHÂN TÍCH SỐ ĐẾN LỚP TRIỆU (PLACE VALUE DECOMPOSER)
# =============================================================================

def decompose_million_number(number_int):
    """
    Phân tích một số tự nhiên thành Lớp triệu, Lớp nghìn và Lớp đơn vị.
    """
    s = f"{number_int:,}"
    parts = s.split(',')
    
    print(f"=== PHÂN TÍCH SỐ TỰ NHIÊN: {number_int:,} ===")
    if len(parts) == 3:
        print(f"Lớp triệu  : {parts[0]} triệu")
        print(f"Lớp nghìn   : {parts[1]} nghìn")
        print(f"Lớp đơn vị : {parts[2]} đơn vị\n")
    elif len(parts) == 2:
        print(f"Lớp nghìn   : {parts[0]} nghìn")
        print(f"Lớp đơn vị : {parts[1]} đơn vị\n")


# =============================================================================
# CHỦ ĐỀ 4: DẠNG TOÁN TÌM HAI SỐ KHI BIẾT TỔNG VÀ HIỆU
# =============================================================================

def solve_sum_difference_problem(total, diff):
    """
    Giải bài toán Tìm hai số khi biết Tổng và Hiệu.
    Công thức:
      Số lớn = (Tổng + Hiệu) / 2
      Số bé  = (Tổng - Hiệu) / 2
    """
    big_num = (total + diff) // 2
    small_num = (total - diff) // 2
    
    print(f"=== GIẢI BÀI TOÁN TỔNG - HIỆU (TỔNG = {total}, HIỆU = {diff}) ===")
    print(f"Số lớn = ({total} + {diff}) : 2 = {big_num}")
    print(f"Số bé  = ({total} - {diff}) : 2 = {small_num}")
    print(f"Thử lại: {big_num} + {small_num} = {big_num + small_num} | {big_num} - {small_num} = {big_num - small_num}\n")
    return big_num, small_num


# =============================================================================
# CHỦ ĐỀ 5 & 6: CÁC PHÉP TÍNH VỚI PHÂN SỐ (FRACTION CALCULATOR)
# =============================================================================

def fraction_operations(num1, den1, num2, den2):
    """
    Tính tổng, hiệu, tích, thương của 2 phân số và rút gọn về phân số tối giản.
    """
    f1 = Fraction(num1, den1)
    f2 = Fraction(num2, den2)
    
    print(f"=== THỰC HIỆN PHÉP TÍNH PHÂN SỐ: {f1} VÀ {f2} ===")
    print(f"Phép cộng : {f1} + {f2} = {f1 + f2}")
    print(f"Phép trừ  : {f1} - {f2} = {f1 - f2}")
    print(f"Phép nhân : {f1} x {f2} = {f1 * f2}")
    print(f"Phép chia : {f1} : {f2} = {f1 / f2}\n")


# =============================================================================
# CHỦ ĐỀ 8: TÍNH DIỆN TÍCH HÌNH BÌNH HÀNH & HÌNH THOI
# =============================================================================

def calculate_area(shape_type="parallelogram", **kwargs):
    """
    Tính diện tích hình bình hành (a x h) hoặc hình thoi (m x n / 2).
    """
    if shape_type == "parallelogram":
        a = kwargs.get('a', 0)
        h = kwargs.get('h', 0)
        area = a * h
        print(f"=== DIỆN TÍCH HÌNH BÌNH HÀNH (Đáy a = {a}cm, Chiều cao h = {h}cm) ===")
        print(f"Diện tích S = {a} x {h} = {area} cm²\n")
        return area
    elif shape_type == "rhombus":
        m = kwargs.get('m', 0)
        n = kwargs.get('n', 0)
        area = (m * n) / 2
        print(f"=== DIỆN TÍCH HÌNH THOI (Đường chéo m = {m}cm, n = {n}cm) ===")
        print(f"Diện tích S = ({m} x {n}) : 2 = {area} cm²\n")
        return area


# =============================================================================
# CHỦ ĐỀ 9: VẼ BIỂU ĐỒ CỘT THỐNG KÊ LỚP HỌC
# =============================================================================

def plot_classroom_bar_chart():
    """
    Vẽ biểu đồ cột thống kê trái cây yêu thích của học sinh lớp 4.
    """
    fruits = ['Táo', 'Cam', 'Xoài', 'Dưa hấu', 'Nho']
    counts = [8, 12, 6, 10, 4]
    
    plt.figure(figsize=(8, 5))
    bars = plt.bar(fruits, counts, color='orange', edgecolor='darkorange', alpha=0.85)
    
    for bar in bars:
        yval = bar.get_height()
        plt.text(bar.get_x() + bar.get_width()/2, yval + 0.3, f"{yval} HS", ha='center', fontweight='bold')
        
    plt.title("Biểu Đồ Cột Khảo Sát Trái Cây Yêu Thích Của Lớp 4A")
    plt.xlabel("Loại trái cây")
    plt.ylabel("Số lượng học sinh")
    plt.ylim(0, 15)
    plt.grid(True, linestyle=':', alpha=0.6, axis='y')
    plt.tight_layout()
    plt.savefig("primary_bar_chart.png")
    print("Đã lưu biểu đồ cột 'primary_bar_chart.png'")


# =============================================================================
# MAIN TEST EXECUTION
# =============================================================================

if __name__ == "__main__":
    print("📐 TOÁN 4 KNTT PYTHON TOOLKIT TESTING 📐\n")
    
    # 1. Test phân tích số lớp triệu
    decompose_million_number(35240800)
    
    # 2. Test bài toán Tổng - Hiệu
    solve_sum_difference_problem(total=48, diff=12)
    
    # 3. Test phép tính phân số
    fraction_operations(3, 4, 1, 2)
    
    # 4. Test diện tích hình bình hành & hình thoi
    calculate_area("parallelogram", a=12, h=8)
    calculate_area("rhombus", m=10, n=6)
    
    # 5. Test biểu đồ cột
    plot_classroom_bar_chart()

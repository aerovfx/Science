"""
===============================================================================
TOÁN 7 KNTT — PYTHON MATH TOOLKIT & SIMULATOR
Lower Secondary Math Grade 7 (Connecting Knowledge to Life) Python Toolkit
===============================================================================
Bao gồm các hàm tính toán phân số hữu tỉ, đại số đa thức 1 biến SymPy,
vẽ biểu đồ thống kê dân số, tỉ lệ thức và mô phỏng xác suất Monte Carlo cho SGK Toán 7.
"""

import sympy as sp
import numpy as np
import matplotlib.pyplot as plt
import pandas as pd

# Cấu hình giao diện đồ thị Matplotlib
plt.rcParams['font.sans-serif'] = 'DejaVu Sans'
plt.rcParams['axes.unicode_minus'] = False


# =============================================================================
# CHƯƠNG I: TÍNH TOÁN PHÂN SỐ HỮU TỈ CHÍNH XÁC (RATIONAL ARITHMETIC)
# =============================================================================

def rational_calculator(num1, den1, num2, den2, op='+'):
    """
    Thực hiện phép tính cộng, trừ, nhân, chia 2 số hữu tỉ dưới dạng phân số tối giản.
    """
    q1 = sp.Rational(num1, den1)
    q2 = sp.Rational(num2, den2)
    
    if op == '+': result = q1 + q2
    elif op == '-': result = q1 - q2
    elif op == '*': result = q1 * q2
    elif op == '/': result = q1 / q2
    else: raise ValueError("Phép tính không hợp lệ")
    
    print(f"=== PHÉP TÍNH SỐ HỮU TỈ: {q1} {op} {q2} ===")
    print(f"Kết quả phân số tối giản: {result}")
    print(f"Giá trị số thập phân   : {float(result):.6f}\n")
    return result


# =============================================================================
# CHƯƠNG V: VẼ BIỂU ĐỒ THỐNG KÊ DÂN SỐ VIỆT NAM (POPULATION GRAPH)
# =============================================================================

def plot_vietnam_population():
    """
    Vẽ biểu đồ đoạn thẳng thể hiện sự tăng trưởng dân số Việt Nam qua các thập kỷ.
    """
    years = [1979, 1989, 1999, 2009, 2019, 2024]
    pop_millions = [52.7, 64.4, 76.3, 86.0, 96.2, 100.3]
    
    plt.figure(figsize=(9, 5))
    plt.plot(years, pop_millions, 'r-o', linewidth=2.5, markersize=8, label='Dân số (Triệu người)')
    
    for y, p in zip(years, pop_millions):
        plt.annotate(f"{p}M", (y, p), textcoords="offset points", xytext=(0,10), ha='center', fontweight='bold')
        
    plt.title("Biểu Đồ Đoạn Thẳng Tăng Trưởng Dân Số Việt Nam (1979 - 2024)")
    plt.xlabel("Năm")
    plt.ylabel("Dân số (Triệu người)")
    plt.ylim(40, 115)
    plt.grid(True, linestyle=':', alpha=0.6)
    plt.legend()
    plt.tight_layout()
    plt.savefig("vietnam_population.png")
    print("Đã lưu biểu đồ dân số 'vietnam_population.png'")


# =============================================================================
# CHƯƠNG VII: ĐẠI SỐ ĐA THỨC MỘT BIẾN SYMPY (POLYNOMIAL ALGEBRA)
# =============================================================================

def polynomial_algebra():
    """
    Thực hiện phép cộng, trừ, nhân, chia đa thức 1 biến và tìm nghiệm bằng SymPy.
    """
    x = sp.Symbol('x')
    P = 2*x**3 - 5*x**2 + 4*x - 1
    Q = x**2 - 3*x + 2
    
    P_plus_Q = sp.expand(P + Q)
    P_minus_Q = sp.expand(P - Q)
    P_times_Q = sp.expand(P * Q)
    quotient, remainder = sp.div(P, Q, domain='QQ')
    roots_P = sp.solve(P, x)
    
    print("=== ĐẠI SỐ ĐA THỨC MỘT BIẾN SYMPY ===")
    print(f"Đa thức P(x) = {P}")
    print(f"Đa thức Q(x) = {Q}")
    print(f"P(x) + Q(x)  = {P_plus_Q}")
    print(f"P(x) - Q(x)  = {P_minus_Q}")
    print(f"P(x) * Q(x)  = {P_times_Q}")
    print(f"P(x) / Q(x)  = Thương: {quotient}, Dư: {remainder}")
    print(f"Nghiệm P(x)=0: x = {roots_P}\n")


# =============================================================================
# CHƯƠNG VIII: MÔ PHỎNG XÁC SUẤT MONTE CARLO (PROBABILITY SIMULATION)
# =============================================================================

def simulate_dice_probability(num_trials=10000):
    """
    Mô phỏng 10.000 lần gieo xí ngầu 6 mặt và tính tần số tương đối của các mặt.
    """
    rolls = np.random.randint(1, 7, size=num_trials)
    counts = np.bincount(rolls)[1:]  # Số lần xuất hiện mặt 1 đến 6
    probabilities = counts / num_trials
    
    plt.figure(figsize=(8, 5))
    bars = plt.bar(range(1, 7), probabilities, color='skyblue', edgecolor='navy', alpha=0.8, label='Tần số thực nghiệm')
    plt.axhline(1/6, color='red', linestyle='--', linewidth=2, label='Xác suất lý thuyết (1/6 ≈ 16.67%)')
    
    for bar, p in zip(bars, probabilities):
        plt.text(bar.get_x() + bar.get_width()/2, p + 0.005, f"{p*100:.1f}%", ha='center', fontsize=9)
        
    plt.title(f"Mô Phỏng Xác Suất Monte Carlo Gieo Xí Ngầu ({num_trials:,} Lần)")
    plt.xlabel("Mặt xí ngầu (1 đến 6)")
    plt.ylabel("Tần số tương đối (Xác suất)")
    plt.ylim(0, 0.25)
    plt.grid(True, linestyle=':', alpha=0.6, axis='y')
    plt.legend()
    plt.tight_layout()
    plt.savefig("dice_probability.png")
    print("Đã lưu biểu đồ xác suất Monte Carlo 'dice_probability.png'")


# =============================================================================
# MAIN TEST EXECUTION
# =============================================================================

if __name__ == "__main__":
    print("📐 TOÁN 7 KNTT PYTHON TOOLKIT TESTING 📐\n")
    
    # 1. Test tính phân số bài 1-2
    rational_calculator(3, 4, 5, 6, op='+')
    rational_calculator(7, 3, 2, 5, op='*')
    
    # 2. Test biểu đồ dân số bài 19 & Trải nghiệm
    plot_vietnam_population()
    
    # 3. Test đa thức 1 biến bài 25-28
    polynomial_algebra()
    
    # 4. Test xác suất Monte Carlo bài 29-30
    simulate_dice_probability(num_trials=10000)

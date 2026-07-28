"""
===============================================================================
VẬT LÍ 10 KNTT — PYTHON PHYSICS TOOLKIT & SIMULATOR
High School Physics Grade 10 (Connecting Knowledge to Life) Python Toolkit
===============================================================================
Bao gồm các hàm xử lý dữ liệu thí nghiệm, tính sai số, mô phỏng chuyển động
và vẽ đồ thị cho toàn bộ 7 Chương SGK Vật lí 10.
"""

import numpy as np
import matplotlib.pyplot as plt
from scipy.integrate import solve_ivp

# Cấu hình giao diện đồ thị Matplotlib
plt.rcParams['font.sans-serif'] = 'DejaVu Sans'
plt.rcParams['axes.unicode_minus'] = False


# =============================================================================
# CHƯƠNG I: PHÉP ĐO SAI SỐ (ERROR ANALYSIS)
# =============================================================================

def calculate_measurement_error(data, instrument_error=0.01):
    """
    Tính giá trị trung bình, sai số tuyệt đối trung bình và sai số toàn phần.
    
    Parameters:
        data (list/array): Các giá trị đo n lần [A1, A2, ..., An]
        instrument_error (float): Sai số dụng cụ (thường là nửa hoặc một độ chia nhỏ nhất)
        
    Returns:
        mean (float): Giá trị trung bình
        total_error (float): Sai số tuyệt đối toàn phần (sai số ngẫu nhiên + sai số dụng cụ)
        relative_error (float): Sai số tương đối (%)
    """
    n = len(data)
    mean = np.mean(data)
    random_errors = np.abs(data - mean)
    mean_random_error = np.mean(random_errors)
    
    total_error = mean_random_error + instrument_error
    relative_error = (total_error / mean) * 100
    
    print("=== KẾT QUẢ XỬ LÝ SAI SỐ PHÉP ĐO ===")
    print(f"Số lần đo n = {n}")
    print(f"Giá trị trung bình A_bar = {mean:.4f}")
    print(f"Sai số ngẫu nhiên Delta A_bar = {mean_random_error:.4f}")
    print(f"Sai số dụng cụ Delta A_dc = {instrument_error:.4f}")
    print(f"Sai số tuyệt đối toàn phần Delta A = {total_error:.4f}")
    print(f"KẾT QUẢ ĐO: A = {mean:.4f} +/- {total_error:.4f}")
    print(f"Sai số tương đối: delta A = {relative_error:.2f}%\n")
    
    return mean, total_error, relative_error


# =============================================================================
# CHƯƠNG II & III: MÔ PHỎNG NÉM XIÊN 2D CÓ LỰC CẢN KHÔNG KHÍ (PROJECTILE 2D)
# =============================================================================

def simulate_projectile(v0, angle_deg, m=0.1, C_d=0.47, radius=0.03, g=9.81):
    """
    Mô phỏng chuyển động ném xiên 2D có và không có lực cản không khí.
    
    Parameters:
        v0 (float): Vận tốc ban đầu (m/s)
        angle_deg (float): Góc ném so với phương ngang (độ)
        m (float): Khối lượng vật ném (kg)
        C_d (float): Hệ số cản khí động học (0.47 cho quả cầu)
        radius (float): Bán kính vật ném (m)
        g (float): Gia tốc trọng trường (m/s^2)
    """
    alpha = np.radians(angle_deg)
    vx0 = v0 * np.cos(alpha)
    vy0 = v0 * np.sin(alpha)
    
    # 1. Quỹ đạo lý thuyết (Không lực cản)
    t_flight_ideal = 2 * vy0 / g
    t_ideal = np.linspace(0, t_flight_ideal, 200)
    x_ideal = vx0 * t_ideal
    y_ideal = vy0 * t_ideal - 0.5 * g * t_ideal**2
    
    # 2. Quỹ đạo thực tế (Có lực cản F_d = 0.5 * rho * C_d * A * v^2)
    rho_air = 1.225  # Khối lượng riêng không khí (kg/m^3)
    A = np.pi * radius**2
    k = 0.5 * rho_air * C_d * A
    
    def derivatives(t, state):
        x, y, vx, vy = state
        v = np.hypot(vx, vy)
        ax = -(k / m) * v * vx
        ay = -g - (k / m) * v * vy
        return [vx, vy, ax, ay]
    
    def hit_ground(t, state):
        return state[1]  # y = 0
    hit_ground.terminal = True
    hit_ground.direction = -1
    
    sol = solve_ivp(derivatives, [0, 100], [0, 0, vx0, vy0], events=hit_ground, max_step=0.01)
    
    # Vẽ đồ thị so sánh
    plt.figure(figsize=(10, 5))
    plt.plot(x_ideal, y_ideal, 'r--', label='Không lực cản (Ideal)')
    plt.plot(sol.y[0], sol.y[1], 'b-', linewidth=2, label='Có lực cản không khí (Real)')
    plt.title(f"Quỹ Đạo Chuyển Động Ném Xiên ($v_0 = {v0}m/s, \\alpha = {angle_deg}^\\circ$)")
    plt.xlabel("Khoảng cách x (m)")
    plt.ylabel("Độ cao y (m)")
    plt.ylim(bottom=0)
    plt.grid(True, linestyle=':', alpha=0.6)
    plt.legend()
    plt.tight_layout()
    plt.savefig("projectile_simulation.png")
    print("Đã lưu hình ảnh mô phỏng 'projectile_simulation.png'")


# =============================================================================
# CHƯƠNG V: MÔ PHỎNG VA CHẠM 1D (ELASTIC & INELASTIC COLLISIONS)
# =============================================================================

def simulate_collision(m1, m2, v1i, v2i, elastic=True):
    """
    Tính vận tốc sau va chạm và kiểm tra định luật bảo toàn động lượng & cơ năng.
    """
    p_initial = m1 * v1i + m2 * v2i
    E_initial = 0.5 * m1 * v1i**2 + 0.5 * m2 * v2i**2
    
    if elastic:
        # Va chạm đàn hồi hoàn toàn
        v1f = ((m1 - m2) * v1i + 2 * m2 * v2i) / (m1 + m2)
        v2f = ((m2 - m1) * v2i + 2 * m1 * v1i) / (m1 + m2)
        collision_type = "Đàn Hồi (Elastic)"
    else:
        # Va chạm mềm (Inelastic - 2 vật dính vào nhau)
        v1f = p_initial / (m1 + m2)
        v2f = v1f
        collision_type = "Mềm (Inelastic)"
        
    p_final = m1 * v1f + m2 * v2f
    E_final = 0.5 * m1 * v1f**2 + 0.5 * m2 * v2f**2
    
    print(f"=== KẾT QUẢ MÔ PHỎNG VA CHẠM {collision_type.upper()} ===")
    print(f"Xe 1: m1 = {m1}kg, v1_trước = {v1i}m/s --> v1_sau = {v1f:.2f}m/s")
    print(f"Xe 2: m2 = {m2}kg, v2_trước = {v2i}m/s --> v2_sau = {v2f:.2f}m/s")
    print(f"Động lượng trước va chạm: p_in = {p_initial:.3f} kg.m/s")
    print(f"Động lượng sau va chạm  : p_out = {p_final:.3f} kg.m/s")
    print(f"Động năng trước va chạm : E_in = {E_initial:.3f} J")
    print(f"Động năng sau va chạm   : E_out = {E_final:.3f} J (Độ hao hụt Delta E = {E_initial - E_final:.3f} J)\n")


# =============================================================================
# CHƯƠNG VII: ĐỒ THỊ TRẠNG THÁI KHÍ LÝ TƯỞNG (IDEAL GAS P-V DIAGRAM)
# =============================================================================

def plot_ideal_gas_isotherm(T_celsius_list=[0, 100, 300]):
    """
    Vẽ họ đường đẳng nhiệt trong hệ tọa độ p-V.
    """
    R = 8.31  # Hằng số khí lý tưởng J/(mol.K)
    n = 1.0   # 1 mol khí
    V = np.linspace(0.005, 0.05, 200)  # Thể tích m^3
    
    plt.figure(figsize=(8, 6))
    for T_C in T_celsius_list:
        T_K = T_C + 273.15
        p = (n * R * T_K) / V  # Pa
        plt.plot(V * 1000, p / 1000, label=f'T = {T_C}°C ({T_K}K)')
        
    plt.title("Họ Đường Đẳng Nhiệt Của Khí Lý Tưởng (Định luật Boyle-Mariotte)")
    plt.xlabel("Thể tích V (Lít)")
    plt.ylabel("Áp suất p (kPa)")
    plt.grid(True, linestyle='--', alpha=0.7)
    plt.legend()
    plt.tight_layout()
    plt.savefig("ideal_gas_isotherm.png")
    print("Đã lưu đồ thị đẳng nhiệt 'ideal_gas_isotherm.png'")


# =============================================================================
# MAIN TEST EXECUTION
# =============================================================================

if __name__ == "__main__":
    print("🔭 VẬT LÍ 10 KNTT PYTHON TOOLKIT TESTING 🔭\n")
    
    # 1. Test sai số bài 3
    sample_data = np.array([12.42, 12.45, 12.39, 12.41, 12.43])
    calculate_measurement_error(sample_data, instrument_error=0.01)
    
    # 2. Test ném xiên bài 12
    simulate_projectile(v0=20.0, angle_deg=45.0)
    
    # 3. Test va chạm bài 27
    simulate_collision(m1=0.5, m2=0.3, v1i=2.0, v2i=0.0, elastic=True)
    simulate_collision(m1=0.5, m2=0.3, v1i=2.0, v2i=0.0, elastic=False)
    
    # 4. Test chất khí bài 32
    plot_ideal_gas_isotherm()

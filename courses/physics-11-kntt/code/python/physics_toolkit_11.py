"""
===============================================================================
VẬT LÍ 11 KNTT — PYTHON PHYSICS TOOLKIT & SIMULATOR
High School Physics Grade 11 (Connecting Knowledge to Life) Python Toolkit
===============================================================================
Bao gồm các hàm xử lý dữ liệu thí nghiệm, biến đổi Fourier FFT phân tích âm thanh,
mô phỏng giao thoa sóng, điện trường 2D và mạch nạp tụ điện RC cho SGK Vật lí 11.
"""

import numpy as np
import matplotlib.pyplot as plt
from scipy.integrate import solve_ivp
from scipy.signal import find_peaks

# Cấu hình giao diện đồ thị Matplotlib
plt.rcParams['font.sans-serif'] = 'DejaVu Sans'
plt.rcParams['axes.unicode_minus'] = False


# =============================================================================
# CHƯƠNG I: MÔ PHỎNG DAO ĐỘNG ĐIỀU HÒA & NĂNG LƯỢNG (SHM & ENERGY)
# =============================================================================

def simulate_shm(A=0.1, f=2.0, phi_deg=0, m=0.2):
    """
    Mô phỏng ly độ, vận tốc, gia tốc và bảo toàn cơ năng trong dao động điều hòa.
    
    Parameters:
        A (float): Biên độ (m)
        f (float): Tần số (Hz)
        phi_deg (float): Pha ban đầu (độ)
        m (float): Khối lượng con lắc (kg)
    """
    omega = 2 * np.pi * f
    phi = np.radians(phi_deg)
    T = 1.0 / f
    
    t = np.linspace(0, 3 * T, 500)
    x = A * np.cos(omega * t + phi)
    v = -A * omega * np.sin(omega * t + phi)
    a = -A * omega**2 * np.cos(omega * t + phi)
    
    k = m * omega**2
    W_d = 0.5 * m * v**2
    W_t = 0.5 * k * x**2
    W_total = W_d + W_t
    
    fig, axes = plt.subplots(2, 1, figsize=(10, 7), sharex=True)
    
    # Đồ thị ly độ, vận tốc, gia tốc
    axes[0].plot(t, x * 100, 'b-', label='Ly độ x (cm)')
    axes[0].plot(t, v, 'g--', label='Vận tốc v (m/s)')
    axes[0].plot(t, a / 10, 'r:', label='Gia tốc a/10 (m/s²)')
    axes[0].set_title(f"Dao Động Điều Hòa ($A = {A*100}cm, f = {f}Hz$)")
    axes[0].set_ylabel("Giá trị")
    axes[0].grid(True, linestyle=':', alpha=0.6)
    axes[0].legend(loc='upper right')
    
    # Đồ thị Năng lượng
    axes[1].plot(t, W_d * 1000, 'r-', label='Động năng W_d (mJ)')
    axes[1].plot(t, W_t * 1000, 'b-', label='Thế năng W_t (mJ)')
    axes[1].plot(t, W_total * 1000, 'k--', label='Cơ năng W (mJ)')
    axes[1].set_title("Sự Biến Đổi & Bảo Toàn Cơ Năng")
    axes[1].set_xlabel("Thời gian t (s)")
    axes[1].set_ylabel("Năng lượng (mJ)")
    axes[1].grid(True, linestyle=':', alpha=0.6)
    axes[1].legend(loc='upper right')
    
    plt.tight_layout()
    plt.savefig("shm_simulation.png")
    print("Đã lưu đồ thị mô phỏng SHM 'shm_simulation.png'")


# =============================================================================
# CHƯƠNG II: MÔ PHỎNG GIAO THOA SÓNG 2D (2D WAVE INTERFERENCE)
# =============================================================================

def simulate_wave_interference(wavelength=0.04, d=0.12):
    """
    Vẽ hình ảnh giao thoa 2D của 2 nguồn sóng nước đồng pha.
    
    Parameters:
        wavelength (float): Bước sóng lambda (m)
        d (float): Khoảng cách giữa 2 nguồn S1S2 (m)
    """
    k = 2 * np.pi / wavelength
    
    x = np.linspace(-0.15, 0.15, 300)
    y = np.linspace(-0.15, 0.15, 300)
    X, Y = np.meshgrid(x, y)
    
    # Tọa độ 2 nguồn S1(-d/2, 0), S2(d/2, 0)
    r1 = np.hypot(X + d/2, Y)
    r2 = np.hypot(X - d/2, Y)
    
    # Biên độ tổng hợp u = A cos(omega t - k r1) + A cos(omega t - k r2)
    # Tại t=0: Z = cos(k r1) + cos(k r2)
    Z = np.cos(-k * r1) + np.cos(-k * r2)
    
    plt.figure(figsize=(8, 7))
    plt.contourf(X * 100, Y * 100, Z, 50, cmap='seismic')
    plt.colorbar(label='Biên độ dao động tổng hợp')
    plt.scatter([-d/2*100, d/2*100], [0, 0], color='yellow', s=100, zorder=5, label='Nguồn S1, S2')
    plt.title(f"Hình Ảnh Giao Thoa Sóng Mặt Nước (\\lambda = {wavelength*100}cm, S1S2 = {d*100}cm)")
    plt.xlabel("x (cm)")
    plt.ylabel("y (cm)")
    plt.legend(loc='upper right')
    plt.tight_layout()
    plt.savefig("wave_interference.png")
    print("Đã lưu đồ thị giao thoa sóng 'wave_interference.png'")


# =============================================================================
# CHƯƠNG III: ĐIỆN TRƯỜNG 2D (ELECTRIC FIELD OF TWO POINT CHARGES)
# =============================================================================

def simulate_electric_field(q1=1e-9, q2=-1e-9, pos1=(-0.05, 0), pos2=(0.05, 0)):
    """
    Vẽ các đường sức điện trường và đường đẳng thế của 2 điện tích điểm.
    """
    k_e = 8.99e9  # N.m^2/C^2
    x = np.linspace(-0.15, 0.15, 200)
    y = np.linspace(-0.15, 0.15, 200)
    X, Y = np.meshgrid(x, y)
    
    R1 = np.hypot(X - pos1[0], Y - pos1[1])
    R2 = np.hypot(X - pos2[0], Y - pos2[1])
    
    # Tránh chia cho 0 tại vị trí đặt điện tích
    R1[R1 < 0.005] = 0.005
    R2[R2 < 0.005] = 0.005
    
    # Thành phần Cường độ điện trường E_x, E_y
    Ex = k_e * q1 * (X - pos1[0]) / R1**3 + k_e * q2 * (X - pos2[0]) / R2**3
    Ey = k_e * q1 * (Y - pos1[1]) / R1**3 + k_e * q2 * (Y - pos2[1]) / R2**3
    
    # Điện thế V
    V = k_e * q1 / R1 + k_e * q2 / R2
    
    plt.figure(figsize=(8, 7))
    plt.streamplot(X * 100, Y * 100, Ex, Ey, color='gray', density=1.4, linewidth=1, arrowsize=1)
    CS = plt.contour(X * 100, Y * 100, V, levels=20, cmap='RdBu', alpha=0.7)
    plt.clabel(CS, inline=1, fontsize=8)
    
    plt.scatter([pos1[0]*100], [pos1[1]*100], color='red', s=150, zorder=5, label=f'q1 = {q1*1e9:.1f}nC')
    plt.scatter([pos2[0]*100], [pos2[1]*100], color='blue', s=150, zorder=5, label=f'q2 = {q2*1e9:.1f}nC')
    
    plt.title("Đường Sức Điện Trường & Đường Đẳng Thế 2 Điện Tích Điểm")
    plt.xlabel("x (cm)")
    plt.ylabel("y (cm)")
    plt.legend(loc='upper right')
    plt.tight_layout()
    plt.savefig("electric_field.png")
    print("Đã lưu sơ đồ điện trường 'electric_field.png'")


# =============================================================================
# CHƯƠNG IV: ĐƯỜNG CONG NẠP/XẢ TỤ ĐIỆN RC & TRÍCH XUẤT EMF (RC CIRCUIT & EMF)
# =============================================================================

def simulate_rc_circuit(R=10000, C=470e-6, V0=9.0):
    """
    Mô phỏng đường cong điện áp nạp và xả của tụ điện RC V(t).
    """
    tau = R * C  # Hằng số thời gian (s)
    t = np.linspace(0, 5 * tau, 500)
    
    V_charge = V0 * (1 - np.exp(-t / tau))
    V_discharge = V0 * np.exp(-t / tau)
    
    plt.figure(figsize=(9, 5))
    plt.plot(t, V_charge, 'b-', linewidth=2, label='Quá trình Nạp (Charging)')
    plt.plot(t, V_discharge, 'r--', linewidth=2, label='Quá trình Xả (Discharging)')
    plt.axvline(tau, color='green', linestyle=':', label=f'Hằng số thời gian \\tau = RC = {tau:.2f}s')
    plt.axhline(V0 * 0.632, color='gray', linestyle='--', alpha=0.5, label='63.2% V0 (khi nạp)')
    
    plt.title(f"Quá Trình Nạp & Xả Tụ Điện RC ($R = {R/1000}k\\Omega, C = {C*1e6:.0f}\\mu F$)")
    plt.xlabel("Thời gian t (s)")
    plt.ylabel("Điện áp tụ điện V (Volts)")
    plt.grid(True, linestyle=':', alpha=0.6)
    plt.legend()
    plt.tight_layout()
    plt.savefig("rc_circuit.png")
    print("Đã lưu đồ thị tụ điện RC 'rc_circuit.png'")


# =============================================================================
# MAIN TEST EXECUTION
# =============================================================================

if __name__ == "__main__":
    print("🌊 VẬT LÍ 11 KNTT PYTHON TOOLKIT TESTING 🌊\n")
    
    # 1. Test mô phỏng SHM bài 1-3
    simulate_shm(A=0.05, f=1.5, phi_deg=0)
    
    # 2. Test giao thoa sóng bài 10
    simulate_wave_interference(wavelength=0.04, d=0.12)
    
    # 3. Test điện trường 2D bài 16
    simulate_electric_field(q1=2e-9, q2=-2e-9)
    
    # 4. Test tụ điện RC bài 18-19
    simulate_rc_circuit(R=10000, C=470e-6, V0=9.0)

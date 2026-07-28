"""
===============================================================================
VẬT LÍ 12 KNTT — PYTHON PHYSICS TOOLKIT & SIMULATOR
High School Physics Grade 12 (Connecting Knowledge to Life) Python Toolkit
===============================================================================
Bao gồm các hàm xử lý dữ liệu thí nghiệm, mô phỏng chu trình khí lý tưởng,
phân bố Maxwell-Boltzmann, phân rã phóng xạ, suy giảm tia X y tế và quang phổ.
"""

import numpy as np
import matplotlib.pyplot as plt
from scipy.integrate import solve_ivp

# Cấu hình giao diện đồ thị Matplotlib
plt.rcParams['font.sans-serif'] = 'DejaVu Sans'
plt.rcParams['axes.unicode_minus'] = False


# =============================================================================
# CHƯƠNG I & II: KHÍ LÝ TƯỞNG & PHÂN BỐ MAXWELL-BOLTZMANN
# =============================================================================

def simulate_maxwell_boltzmann(T_celsius_list=[0, 300, 1000], M_g_mol=28.0):
    """
    Vẽ đường cong phân bố vận tốc phân tử Maxwell-Boltzmann ở các nhiệt độ khác nhau.
    
    Parameters:
        T_celsius_list (list): Danh sách nhiệt độ (Celsius)
        M_g_mol (float): Khối lượng mol của khí (g/mol, mặc định N2 = 28)
    """
    R = 8.314  # J/(mol.K)
    M = M_g_mol * 1e-3  # kg/mol
    v = np.linspace(0, 2500, 500)  # m/s
    
    plt.figure(figsize=(9, 5))
    
    for T_C in T_celsius_list:
        T = T_C + 273.15
        # Phân bố Maxwell-Boltzmann f(v)
        f_v = 4 * np.pi * (M / (2 * np.pi * R * T))**(1.5) * (v**2) * np.exp(-M * v**2 / (2 * R * T))
        v_rms = np.sqrt(3 * R * T / M)
        plt.plot(v, f_v, label=f'T = {T_C}°C ({T}K) | v_rms = {v_rms:.0f} m/s')
        
    plt.title(f"Mô Hình Phân Bố Vận Tốc Phân Tử Maxwell-Boltzmann (Khí N2)")
    plt.xlabel("Vận tốc phân tử v (m/s)")
    plt.ylabel("Xác suất phân bố f(v)")
    plt.grid(True, linestyle=':', alpha=0.6)
    plt.legend()
    plt.tight_layout()
    plt.savefig("maxwell_boltzmann.png")
    print("Đã lưu đồ thị Maxwell-Boltzmann 'maxwell_boltzmann.png'")


# =============================================================================
# CHƯƠNG IV: ĐỒ THỊ PHÂN RÃ PHÓNG XẠ & ĐỘ PHÓNG XẠ (RADIOACTIVE DECAY)
# =============================================================================

def simulate_radioactive_decay(N0=1e6, T_half=5.73, isotope_name="Carbon-14"):
    """
    Mô phỏng quy luật phân rã phóng xạ N(t) và độ phóng xạ A(t).
    
    Parameters:
        N0 (float): Số hạt nhân ban đầu
        T_half (float): Chu kỳ bán rã (năm hoặc giây)
        isotope_name (str): Tên đồng vị phóng xạ
    """
    t = np.linspace(0, 5 * T_half, 300)
    lam = np.log(2) / T_half
    
    N_t = N0 * 0.5**(t / T_half)
    A_t = lam * N_t
    
    fig, axes = plt.subplots(1, 2, figsize=(12, 5))
    
    # Đồ thị Số hạt N(t)
    axes[0].plot(t, N_t / 1e6, 'b-', linewidth=2, label='Số hạt N(t)')
    axes[0].axvline(T_half, color='red', linestyle='--', label=f'T_1/2 = {T_half} năm (N0/2)')
    axes[0].axvline(2 * T_half, color='orange', linestyle=':', label='2T (N0/4)')
    axes[0].set_title(f"Định Luật Phân Rã Phóng Xạ ({isotope_name})")
    axes[0].set_xlabel("Thời gian t (Năm)")
    axes[0].set_ylabel("Số hạt nhân N(t) (x10^6)")
    axes[0].grid(True, linestyle=':', alpha=0.6)
    axes[0].legend()
    
    # Đồ thị logarit ln(N) vs t (Tuyến tính hóa)
    axes[1].plot(t, np.log(N_t), 'r-', linewidth=2, label='ln(N) vs t')
    axes[1].set_title("Tuyến Tính Hóa Đường Phân Rã: ln(N) = ln(N0) - \\lambda t")
    axes[1].set_xlabel("Thời gian t (Năm)")
    axes[1].set_ylabel("ln(N)")
    axes[1].grid(True, linestyle=':', alpha=0.6)
    axes[1].legend()
    
    plt.tight_layout()
    plt.savefig("radioactive_decay.png")
    print("Đã lưu đồ thị phân rã phóng xạ 'radioactive_decay.png'")


# =============================================================================
# CHUYÊN ĐỀ 2 & 3: SUY GIẢM TIA X Y TẾ & QUANG PHỔ NGUYÊN TỬ HYDRO
# =============================================================================

def simulate_xray_attenuation():
    """
    Mô phỏng sự suy giảm cường độ tia X qua xương và mô mềm (Định luật Beer-Lambert).
    """
    x = np.linspace(0, 0.1, 200)  # Độ dày (m) - 0 đến 10cm
    I0 = 100.0  # Cường độ ban đầu (%)
    
    mu_bone = 50.0  # Hệ số suy giảm của xương (m^-1)
    mu_tissue = 15.0  # Hệ số suy giảm của mô mềm (m^-1)
    
    I_bone = I0 * np.exp(-mu_bone * x)
    I_tissue = I0 * np.exp(-mu_tissue * x)
    
    plt.figure(figsize=(8, 5))
    plt.plot(x * 100, I_bone, 'r-', linewidth=2, label='Xương (Bone: \\mu = 50 m^-1)')
    plt.plot(x * 100, I_tissue, 'b--', linewidth=2, label='Mô mềm (Soft tissue: \\mu = 15 m^-1)')
    
    plt.title("Sự Hấp Thụ & Suy Giảm Tia X Qua Các Mô Y Học ($I = I_0 e^{-\\mu x}$)")
    plt.xlabel("Độ dày mô x (cm)")
    plt.ylabel("Cường độ tia X còn lại I (%)")
    plt.grid(True, linestyle=':', alpha=0.6)
    plt.legend()
    plt.tight_layout()
    plt.savefig("xray_attenuation.png")
    print("Đã lưu đồ thị suy giảm tia X 'xray_attenuation.png'")


def simulate_hydrogen_spectrum():
    """
    Tính bước sóng các vạch quang phổ nguyên tử Hydro theo công thức Rydberg / Bohr.
    """
    R_H = 1.09737e7  # Hằng số Rydberg (m^-1)
    c = 3e8          # m/s
    h = 6.626e-34    # J.s
    eV = 1.602e-19
    
    print("=== CÁC BƯỚC SÓNG QUANG PHỔ HYDRO (DÃY BALMER - VÙNG ÁNH SÁNG NHÌN THẤY) ===")
    n1 = 2  # Dãy Balmer
    colors = ['H-alpha (Đỏ)', 'H-beta (Lam)', 'H-gamma (Chàm)', 'H-delta (Tím)']
    
    for idx, n2 in enumerate([3, 4, 5, 6]):
        inv_lambda = R_H * (1.0/n1**2 - 1.0/n2**2)
        wavelength_nm = (1.0 / inv_lambda) * 1e9
        E_photon_eV = (h * c / (wavelength_nm * 1e-9)) / eV
        print(f"Vạch {colors[idx]}: n= {n2} -> 2 | Lambda = {wavelength_nm:.2f} nm | E = {E_photon_eV:.2f} eV")
    print()


# =============================================================================
# MAIN TEST EXECUTION
# =============================================================================

if __name__ == "__main__":
    print("⚛️ VẬT LÍ 12 KNTT PYTHON TOOLKIT TESTING ⚛️\n")
    
    # 1. Test Maxwell-Boltzmann bài 12
    simulate_maxwell_boltzmann()
    
    # 2. Test phóng xạ bài 23
    simulate_radioactive_decay(N0=1e6, T_half=5.73)
    
    # 3. Test tia X chuyên đề 2
    simulate_xray_attenuation()
    
    # 4. Test quang phổ Hydro chuyên đề 3
    simulate_hydrogen_spectrum()

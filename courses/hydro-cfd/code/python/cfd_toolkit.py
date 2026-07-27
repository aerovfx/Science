#!/usr/bin/env python3
"""
================================================================
CFD POST-PROCESSING TOOLKIT — Python
Bộ Công Cụ Hậu Xử Lý CFD

Khoá học Khí Động Học CFD — Tuần 6-10
Hydro-CFD Course — Week 6-10

Reads OpenFOAM output and generates publication-quality plots
Đọc kết quả OpenFOAM và tạo đồ thị chất lượng ấn phẩm
================================================================
"""

import numpy as np
import matplotlib.pyplot as plt
import matplotlib.gridspec as gridspec
from scipy.fft import fft, fftfreq
from scipy.signal import savgol_filter
import pandas as pd
import os, glob
from pathlib import Path

plt.rcParams.update({
    'font.family': 'DejaVu Sans',
    'font.size': 11,
    'axes.labelsize': 12,
    'axes.titlesize': 13,
    'figure.dpi': 150,
    'lines.linewidth': 2.0,
})


# ══════════════════════════════════════════════════════════════
# WATER PROPERTIES / TÍNH CHẤT NƯỚC
# ══════════════════════════════════════════════════════════════

def water_properties(T_celsius: float) -> dict:
    """
    Tính chất vật lý của nước theo nhiệt độ (0–100°C)
    Physical properties of water vs temperature
    
    Returns dict with: rho, mu, nu, sigma, pv
    """
    T = float(T_celsius)
    # Density (UNESCO formula) / Mật độ
    rho = (999.842594 + 6.793952e-2*T - 9.095290e-3*T**2
           + 1.001685e-4*T**3 - 1.120083e-6*T**4 + 6.536332e-9*T**5)
    # Dynamic viscosity (Vogel) / Độ nhớt động lực
    mu  = 2.414e-5 * 10**(247.8 / (T + 133.15))
    nu  = mu / rho                           # Kinematic viscosity (m²/s)
    sigma = 0.0728 * (1 - 0.00221*(T-20))   # Surface tension (N/m)
    # Vapor pressure (Antoine equation approx) / Áp suất hơi bão hòa
    pv  = 1000 * np.exp(17.27*T/(T+237.3) - 9.7) * 611.2 / 611.2
    return {'rho': rho, 'mu': mu, 'nu': nu, 'sigma': sigma, 'pv': pv, 'T': T}


# ══════════════════════════════════════════════════════════════
# DIMENSIONLESS NUMBERS / SỐ VÔ THỨ NGUYÊN
# ══════════════════════════════════════════════════════════════

def reynolds(V: float, L: float, T: float = 20.0) -> float:
    """Re = VL/ν"""
    props = water_properties(T)
    return V * L / props['nu']

def froude(V: float, L: float, g: float = 9.81) -> float:
    """Fr = V/√(gL)  — surface waves / free surface"""
    return V / np.sqrt(g * L)

def strouhal(f: float, D: float, V: float) -> float:
    """St = fD/V  — vortex shedding"""
    return f * D / V

def cavitation_number(p: float, pv: float, rho: float, V: float) -> float:
    """Ca = (p - pv) / (½ρV²)  — cavitation risk"""
    return (p - pv) / (0.5 * rho * V**2)


# ══════════════════════════════════════════════════════════════
# DRAG & LIFT / LỰC CẢN & NÂNG
# ══════════════════════════════════════════════════════════════

def cd_sphere(Re: float) -> float:
    """
    CD của cầu theo Re / Sphere drag coefficient (Clift-Grace-Weber)
    """
    if Re < 0.5:     return 24/Re
    elif Re < 1000:  return 24/Re * (1 + 0.15*Re**0.687)
    elif Re < 2e5:   return 0.44
    else:            return 0.09

def cd_cylinder(Re: float) -> float:
    """CD của trụ tròn 2D / 2D circular cylinder drag coefficient"""
    if Re < 1:       return 8*np.pi / (Re*(0.5 - 0.5772 - np.log(Re/8)))
    elif Re < 5:     return 12/Re
    elif Re < 1000:  return 1.2
    elif Re < 5e5:   return 1.0
    else:            return 0.35

def drag_force(V: float, D: float, shape: str = 'sphere',
               L: float = 1.0, T: float = 20.0) -> dict:
    """
    Tính lực cản trong nước / Calculate drag force in water
    D: characteristic dimension (diameter for sphere/cylinder, chord for foil)
    L: span length (for cylinder per-unit-length, use L=1)
    """
    props = water_properties(T)
    Re = V * D / props['nu']
    
    if shape == 'sphere':
        CD = cd_sphere(Re)
        A  = np.pi * (D/2)**2
    elif shape == 'cylinder':
        CD = cd_cylinder(Re)
        A  = D * L
    else:
        CD = 0.5  # generic
        A  = D * L
    
    FD = 0.5 * props['rho'] * V**2 * CD * A
    return {'Re': Re, 'CD': CD, 'FD': FD, 'rho': props['rho']}


# ══════════════════════════════════════════════════════════════
# BOUNDARY LAYER / LỚP BIÊN
# ══════════════════════════════════════════════════════════════

def boundary_layer(x: float, U_inf: float, T: float = 20.0,
                   mode: str = 'turbulent') -> dict:
    """
    Lớp biên tấm phẳng / Flat plate boundary layer
    x: distance from leading edge (m)
    Returns: BL thickness, skin friction, y+ info
    """
    props = water_properties(T)
    nu  = props['nu']
    rho = props['rho']
    Rex = U_inf * x / nu
    
    if mode == 'laminar':
        delta = 5.0 * x / np.sqrt(Rex)
        Cf    = 0.664 / np.sqrt(Rex)
    else:  # turbulent (1/7-power law)
        delta = 0.37 * x / Rex**0.2
        Cf    = 0.0592 / Rex**0.2
    
    tau_w = Cf * 0.5 * rho * U_inf**2
    u_tau = np.sqrt(tau_w / rho)
    
    return {
        'Rex':          Rex,
        'delta_mm':     delta * 1000,
        'Cf':           Cf,
        'tau_w_Pa':     tau_w,
        'u_tau_ms':     u_tau,
        'dy_yp1_mm':    nu / u_tau * 1000,   # First cell for y+ = 1
        'dy_yp30_mm':   30 * nu / u_tau * 1000,  # First cell for y+ = 30
    }


# ══════════════════════════════════════════════════════════════
# OPENFOAM POST-PROCESSING / HẬU XỬ LÝ OPENFOAM
# ══════════════════════════════════════════════════════════════

class OpenFOAMReader:
    """
    Đọc và phân tích kết quả OpenFOAM / Read and analyze OpenFOAM results
    """
    
    def __init__(self, case_dir: str):
        self.case_dir = Path(case_dir)
        if not self.case_dir.exists():
            raise FileNotFoundError(f"Case directory not found: {case_dir}")
    
    def read_force_coefficients(self) -> pd.DataFrame:
        """
        Đọc force coefficients từ postProcessing/
        Read force coefficients from OpenFOAM postProcessing
        """
        pattern = str(self.case_dir / 'postProcessing' / 'forceCoeffs' / '*' / 'coefficient.dat')
        files = sorted(glob.glob(pattern))
        if not files:
            raise FileNotFoundError("No forceCoeffs output found. Check controlDict functions.")
        
        dfs = []
        for f in files:
            df = pd.read_csv(f, sep=r'\s+', comment='#',
                             names=['time', 'Cm', 'Cd', 'Cl', 'Cd_f', 'Cd_r'])
            dfs.append(df)
        return pd.concat(dfs).sort_values('time').reset_index(drop=True)
    
    def read_residuals(self) -> pd.DataFrame:
        """
        Đọc residuals từ log file / Read solver residuals
        """
        log_files = list(self.case_dir.glob('log.*'))
        if not log_files:
            raise FileNotFoundError("No log file found")
        
        times, res_U, res_p = [], [], []
        with open(log_files[0]) as f:
            for line in f:
                if 'Time =' in line and 'ExecutionTime' not in line:
                    try: times.append(float(line.split('=')[1]))
                    except: pass
                if 'Solving for Ux' in line:
                    try: res_U.append(float(line.split('Initial residual =')[1].split(',')[0]))
                    except: pass
                if 'Solving for p,' in line:
                    try: res_p.append(float(line.split('Initial residual =')[1].split(',')[0]))
                    except: pass
        
        n = min(len(times), len(res_U), len(res_p))
        return pd.DataFrame({'time': times[:n], 'res_U': res_U[:n], 'res_p': res_p[:n]})
    
    def analyze_vortex_shedding(self, column: str = 'Cl') -> dict:
        """
        Phân tích xoáy Von Kármán / Von Kármán vortex shedding analysis via FFT
        """
        df = self.read_force_coefficients()
        
        # Take only developed portion (last 50%)
        n_skip = len(df) // 2
        t  = df['time'].values[n_skip:]
        CL = df[column].values[n_skip:]
        
        dt = np.mean(np.diff(t))
        N  = len(t)
        freqs = fftfreq(N, dt)
        CL_fft = np.abs(fft(CL))
        
        pos = freqs > 0
        f_dominant = freqs[pos][np.argmax(CL_fft[pos])]
        
        return {
            'f_Hz':     f_dominant,
            'CL_mean':  np.mean(CL),
            'CL_amp':   (np.max(CL) - np.min(CL)) / 2,
            'CD_mean':  np.mean(df['Cd'].values[n_skip:]),
        }
    
    def plot_convergence(self, save: bool = True):
        """Vẽ đồ thị hội tụ residuals / Plot convergence residuals"""
        try:
            df = self.read_residuals()
        except FileNotFoundError:
            print("⚠️ No log file found for residuals plot")
            return
        
        fig, ax = plt.subplots(figsize=(10, 5))
        ax.semilogy(df['time'], df['res_U'], 'b-', label='U residual', linewidth=1.5)
        ax.semilogy(df['time'], df['res_p'], 'r-', label='p residual', linewidth=1.5)
        ax.axhline(1e-4, color='k', linestyle='--', alpha=0.5, label='Target: 1e-4')
        ax.set(xlabel='Thời gian (s)', ylabel='Residual', title='Hội tụ / Convergence')
        ax.legend(); ax.grid(True, which='both', alpha=0.3)
        if save: plt.savefig(str(self.case_dir / 'convergence.png'), dpi=150)
        plt.show()
    
    def plot_force_history(self, save: bool = True):
        """Vẽ lịch sử lực / Plot force coefficient history"""
        df = self.read_force_coefficients()
        
        fig, axes = plt.subplots(2, 1, figsize=(10, 7), sharex=True)
        axes[0].plot(df['time'], df['Cd'], 'r-', linewidth=1.5)
        axes[0].set(ylabel='Hệ số cản CD', title='Lịch sử lực / Force History')
        axes[0].grid(alpha=0.3)
        
        axes[1].plot(df['time'], df['Cl'], 'b-', linewidth=1.5)
        axes[1].set(xlabel='Thời gian (s)', ylabel='Hệ số nâng CL')
        axes[1].grid(alpha=0.3)
        
        plt.tight_layout()
        if save: plt.savefig(str(self.case_dir / 'force_history.png'), dpi=150)
        plt.show()


# ══════════════════════════════════════════════════════════════
# NACA HYDROFOIL / HYDROFOIL NACA
# ══════════════════════════════════════════════════════════════

def naca_4digit(code: str, n: int = 200) -> dict:
    """
    Tọa độ NACA 4 chữ số / NACA 4-digit airfoil coordinates
    code: e.g. '0012', '4412', '6412'
    Returns: dict with x_upper, y_upper, x_lower, y_lower
    """
    m = int(code[0]) / 100   # Max camber
    p = int(code[1]) / 10    # Position of max camber
    t = int(code[2:]) / 100  # Max thickness
    
    x = np.linspace(0, 1, n)
    
    # Thickness (half-thickness)
    yt = 5*t*(0.2969*np.sqrt(x) - 0.1260*x - 0.3516*x**2
              + 0.2843*x**3 - 0.1015*x**4)  # NACA closed TE
    
    # Camber line
    if m == 0:
        yc = np.zeros_like(x)
        dyc_dx = np.zeros_like(x)
    else:
        yc = np.where(x < p,
                      m/p**2 * (2*p*x - x**2),
                      m/(1-p)**2 * ((1-2*p) + 2*p*x - x**2))
        dyc_dx = np.where(x < p,
                          2*m/p**2 * (p-x),
                          2*m/(1-p)**2 * (p-x))
    
    theta = np.arctan(dyc_dx)
    return {
        'x_upper': x - yt*np.sin(theta),
        'y_upper': yc + yt*np.cos(theta),
        'x_lower': x + yt*np.sin(theta),
        'y_lower': yc - yt*np.cos(theta),
        'x_camber': x, 'y_camber': yc,
        'code': code
    }

def plot_hydrofoil(code: str, alpha_deg: float = 5.0):
    """Vẽ hình dạng hydrofoil / Plot hydrofoil shape"""
    foil = naca_4digit(code)
    alpha = np.radians(alpha_deg)
    
    fig, ax = plt.subplots(figsize=(10, 4))
    ax.fill_between(
        np.concatenate([foil['x_upper'], foil['x_lower'][::-1]]),
        np.concatenate([foil['y_upper'], foil['y_lower'][::-1]]),
        color='steelblue', alpha=0.7, label=f'NACA {code}'
    )
    ax.plot(foil['x_camber'], foil['y_camber'], 'r--', linewidth=1.5, alpha=0.7, label='Đường cong nâng')
    ax.set_aspect('equal')
    ax.set(xlabel='x/c', ylabel='y/c',
           title=f'NACA {code} Hydrofoil (α={alpha_deg}°)')
    ax.legend(); ax.grid(alpha=0.3)
    plt.tight_layout()
    plt.savefig(f'naca_{code}_foil.png', dpi=150)
    return foil


# ══════════════════════════════════════════════════════════════
# WAVE THEORY / LÝ THUYẾT SÓNG
# ══════════════════════════════════════════════════════════════

def airy_wave(A: float, T: float, d: float, g: float = 9.81) -> dict:
    """
    Lý thuyết sóng Airy (tuyến tính) / Airy linear wave theory
    A: amplitude (m), T: period (s), d: depth (m)
    """
    omega = 2*np.pi / T
    # Dispersion relation (Newton-Raphson) / Quan hệ tán sắc
    k = omega**2 / g  # Deep water initial guess
    for _ in range(20):
        k = omega**2 / (g * np.tanh(k * d))
    
    L = 2*np.pi / k       # Wavelength (m)
    c = omega / k         # Phase speed (m/s)
    Cg = c/2 * (1 + 2*k*d/np.sinh(2*k*d))  # Group velocity
    
    return {'k': k, 'L': L, 'c': c, 'Cg': Cg, 'omega': omega,
            'kd': k*d, 'deep_water': k*d > np.pi}

def plot_wave_profile(A: float, T: float, d: float, n_periods: int = 3):
    """Vẽ hồ sơ sóng / Plot wave profile"""
    wave = airy_wave(A, T, d)
    x = np.linspace(0, n_periods * wave['L'], 500)
    eta = A * np.cos(wave['k'] * x)
    
    fig, ax = plt.subplots(figsize=(12, 4))
    ax.fill_between(x, eta, -d, alpha=0.15, color='steelblue')
    ax.fill_between(x, eta, eta.max()+0.1, alpha=0.1, color='lightblue')
    ax.plot(x, eta, 'b-', linewidth=2.5)
    ax.axhline(0, color='k', linestyle='--', alpha=0.3, linewidth=1)
    ax.set(xlabel='x (m)', ylabel='Độ cao mặt sóng η (m)',
           title=f'Sóng Airy: A={A}m, T={T}s, d={d}m | λ={wave["L"]:.2f}m, c={wave["c"]:.2f}m/s')
    ax.set_ylim(-d*0.3, d*0.3)
    plt.tight_layout()
    plt.savefig('wave_profile.png', dpi=150)
    print(f"Wavelength: {wave['L']:.2f} m | Speed: {wave['c']:.2f} m/s | kd={wave['kd']:.2f}")


# ══════════════════════════════════════════════════════════════
# MAIN / CHẠY THỬ
# ══════════════════════════════════════════════════════════════
if __name__ == '__main__':
    print("🌊 CFD POST-PROCESSING TOOLKIT")
    print("="*50)
    
    # 1. Water properties / Tính chất nước
    props = water_properties(20)
    print(f"\nNước 20°C: ρ={props['rho']:.1f} kg/m³, ν={props['nu']:.2e} m²/s")
    
    # 2. Reynolds number examples / Ví dụ số Reynolds
    scenarios = [
        ("Cá ngừ bơi 2 m/s, L=0.5m", 2.0, 0.5),
        ("Tàu ngầm mini 1 m/s, L=0.3m", 1.0, 0.3),
        ("Hydrofoil 5 m/s, c=0.15m", 5.0, 0.15),
        ("Ống nước D=25mm, V=2 m/s", 2.0, 0.025),
    ]
    print("\nSố Reynolds:")
    for name, V, L in scenarios:
        Re = reynolds(V, L)
        print(f"  {name}: Re = {Re:,.0f}")
    
    # 3. Boundary layer design / Thiết kế lưới lớp biên
    print("\nThiết kế lưới lớp biên (tàu ngầm L=0.3m, V=1 m/s):")
    bl = boundary_layer(0.3, 1.0, mode='turbulent')
    print(f"  BL thickness: {bl['delta_mm']:.1f} mm")
    print(f"  First cell (y+=1):  Δy = {bl['dy_yp1_mm']:.4f} mm")
    print(f"  First cell (y+=30): Δy = {bl['dy_yp30_mm']:.3f} mm")
    
    # 4. NACA hydrofoil / Hydrofoil
    print("\nVẽ NACA 4412 hydrofoil...")
    plot_hydrofoil('4412', alpha_deg=5.0)
    
    # 5. Wave theory / Lý thuyết sóng
    print("\nSóng Airy: A=0.5m, T=5s, d=10m")
    plot_wave_profile(A=0.5, T=5.0, d=10.0)

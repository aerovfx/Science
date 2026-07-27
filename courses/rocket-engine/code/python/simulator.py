#!/usr/bin/env python3
"""
================================================================
ROCKET TRAJECTORY SIMULATOR — Python
Bộ Mô Phỏng Quỹ Đạo Tên Lửa

Khoá học Động Cơ Tên Lửa DIY — Tuần 6
DIY Rocket Engine Course — Week 6

Features / Tính năng:
- 1D trajectory with variable mass / Quỹ đạo 1D với khối lượng thay đổi
- ISA Standard Atmosphere / Khí quyển ISA chuẩn
- RK4 numerical integration / Tích phân số RK4
- Thrust curve from CSV / Đường cong lực đẩy từ CSV
- Complete plots / Đồ thị đầy đủ
================================================================
"""

import numpy as np
import matplotlib.pyplot as plt
import matplotlib.gridspec as gridspec
from scipy.integrate import solve_ivp
from scipy.interpolate import interp1d
import csv, os

# ══════════════════════════════════════════════════════════════
# CONSTANTS / HẰNG SỐ
# ══════════════════════════════════════════════════════════════
G0  = 9.81      # Gravitational acceleration / Gia tốc trọng trường (m/s²)
R   = 287.05    # Specific gas constant for air / Hằng số khí riêng (J/kg·K)
T0  = 288.15    # ISA sea-level temperature / Nhiệt độ mực nước biển ISA (K)
P0  = 101325.0  # ISA sea-level pressure / Áp suất mực nước biển ISA (Pa)
RHO0 = 1.225    # ISA sea-level air density / Mật độ không khí mực nước biển (kg/m³)


# ══════════════════════════════════════════════════════════════
# ATMOSPHERE MODEL / MÔ HÌNH KHÍ QUYỂN
# ══════════════════════════════════════════════════════════════
def isa_atmosphere(altitude_m: float) -> tuple[float, float, float]:
    """
    ISA Standard Atmosphere (troposphere 0–11km)
    Khí quyển ISA chuẩn (tầng đối lưu 0–11km)
    
    Returns: (density, temperature, pressure) / (mật độ, nhiệt độ, áp suất)
    """
    h = max(0.0, min(altitude_m, 11000.0))
    T   = T0 - 0.0065 * h                    # K
    P   = P0 * (T / T0) ** 5.2561            # Pa
    rho = P / (R * T)                         # kg/m³
    return rho, T, P

def altitude_from_pressure(P: float) -> float:
    """
    Barometric formula: altitude from pressure
    Công thức khí áp: độ cao từ áp suất
    """
    return 44330.0 * (1.0 - (P / P0) ** 0.1903)


# ══════════════════════════════════════════════════════════════
# MOTOR CLASS / LỚP ĐỘNG CƠ
# ══════════════════════════════════════════════════════════════
class RocketMotor:
    """
    Model rocket motor from thrust curve data
    Động cơ tên lửa mô hình từ dữ liệu đường cong lực đẩy
    """
    
    # Built-in motor data (Estes) / Dữ liệu động cơ có sẵn (Estes)
    BUILTIN_MOTORS = {
        'A8-3': {
            'time':    [0, 0.02, 0.1, 0.3, 0.5, 0.6],
            'thrust':  [0, 8.0, 8.0, 7.5, 4.0, 0.0],
            'total_impulse': 2.5, 'propellant_mass': 0.003,
            'class': 'A', 'avg_thrust': 8.0, 'delay': 3
        },
        'B6-4': {
            'time':    [0, 0.04, 0.15, 0.5, 0.85, 0.9],
            'thrust':  [0, 12.0, 12.0, 9.0, 5.0, 0.0],
            'total_impulse': 5.0, 'propellant_mass': 0.006,
            'class': 'B', 'avg_thrust': 6.0, 'delay': 4
        },
        'C6-5': {
            'time':    [0, 0.05, 0.2, 0.8, 1.6, 1.9],
            'thrust':  [0, 14.0, 13.5, 11.0, 7.0, 0.0],
            'total_impulse': 10.0, 'propellant_mass': 0.011,
            'class': 'C', 'avg_thrust': 6.0, 'delay': 5
        },
        'D12-5': {
            'time':    [0, 0.05, 0.3, 1.0, 1.6, 1.7],
            'thrust':  [0, 29.0, 27.0, 20.0, 12.0, 0.0],
            'total_impulse': 20.0, 'propellant_mass': 0.020,
            'class': 'D', 'avg_thrust': 12.0, 'delay': 5
        },
    }
    
    def __init__(self, motor_name: str = 'C6-5', csv_file: str = None):
        """
        Khởi tạo từ tên motor hoặc file CSV
        Initialize from motor name or CSV thrust curve file
        """
        if csv_file and os.path.exists(csv_file):
            self._load_from_csv(csv_file)
            self.name = os.path.basename(csv_file).replace('.csv', '')
        elif motor_name in self.BUILTIN_MOTORS:
            data = self.BUILTIN_MOTORS[motor_name]
            self.time_arr   = np.array(data['time'])
            self.thrust_arr = np.array(data['thrust'])
            self.total_impulse   = data['total_impulse']
            self.propellant_mass = data['propellant_mass']
            self.name = motor_name
        else:
            raise ValueError(f"Motor '{motor_name}' not found. Available: {list(self.BUILTIN_MOTORS.keys())}")
        
        self.burn_time  = self.time_arr[-1]
        self._thrust_fn = interp1d(self.time_arr, self.thrust_arr, 
                                    kind='linear', bounds_error=False, fill_value=0.0)
        
        # Calculate Isp / Tính Isp
        self.Isp = self.total_impulse / (self.propellant_mass * G0)
        print(f"✅ Motor loaded: {self.name}")
        print(f"   Total impulse: {self.total_impulse:.1f} Ns | Isp: {self.Isp:.0f}s | Burn: {self.burn_time:.1f}s")
    
    def _load_from_csv(self, filepath: str):
        """Tải đường cong lực đẩy từ CSV / Load thrust curve from CSV"""
        times, thrusts = [], []
        with open(filepath) as f:
            reader = csv.reader(f)
            next(reader)  # Skip header
            for row in reader:
                times.append(float(row[0]))
                thrusts.append(float(row[1]))
        self.time_arr   = np.array(times)
        self.thrust_arr = np.array(thrusts)
        self.total_impulse   = np.trapz(thrusts, times)
        self.propellant_mass = 0.020  # Default, update manually
    
    def thrust(self, t: float) -> float:
        """Lực đẩy tại thời điểm t / Thrust at time t (N)"""
        return float(self._thrust_fn(t))
    
    def mass_flow(self, t: float) -> float:
        """Lưu lượng khối lượng / Mass flow rate (kg/s)"""
        if t >= self.burn_time:
            return 0.0
        return self.propellant_mass / self.burn_time  # Simplified constant
    
    def propellant_remaining(self, t: float) -> float:
        """Nhiên liệu còn lại / Propellant remaining (kg)"""
        if t >= self.burn_time:
            return 0.0
        return self.propellant_mass * (1.0 - t / self.burn_time)


# ══════════════════════════════════════════════════════════════
# ROCKET CLASS / LỚP TÊN LỬA
# ══════════════════════════════════════════════════════════════
class ModelRocket:
    """
    Model rocket with physics simulation
    Tên lửa mô hình với mô phỏng vật lý
    """
    
    def __init__(self, motor: RocketMotor, dry_mass: float, 
                 diameter: float, Cd: float = 0.5):
        """
        motor:     RocketMotor object
        dry_mass:  Khối lượng khi hết nhiên liệu (kg)
        diameter:  Đường kính thân tên lửa (m)
        Cd:        Hệ số cản khí động học
        """
        self.motor    = motor
        self.dry_mass = dry_mass
        self.diameter = diameter
        self.Cd       = Cd
        self.area     = np.pi * (diameter / 2) ** 2  # m²
        
        # Report stability margin reminder
        print(f"   Rocket: dry={dry_mass*1000:.0f}g | dia={diameter*1000:.0f}mm | Cd={Cd}")
    
    def total_mass(self, t: float) -> float:
        """Tổng khối lượng tại t / Total mass at time t (kg)"""
        return self.dry_mass + self.motor.propellant_remaining(t)
    
    def drag_force(self, v: float, altitude: float) -> float:
        """Lực cản / Drag force (N) — acts opposite to velocity"""
        rho, _, _ = isa_atmosphere(altitude)
        return 0.5 * rho * v * abs(v) * self.Cd * self.area  # sign preserved
    
    def equations_of_motion(self, t: float, state: list) -> list:
        """
        Phương trình chuyển động 1D / 1D equations of motion
        state = [altitude (m), velocity (m/s)]
        """
        h, v = state
        
        if h < 0 and v < 0:  # Chạm đất / Ground hit
            return [0.0, 0.0]
        
        mass   = self.total_mass(t)
        thrust = self.motor.thrust(t)
        drag   = self.drag_force(v, h)
        
        # Net acceleration / Gia tốc tổng
        a = (thrust - drag) / mass - G0
        
        return [v, a]  # [dh/dt, dv/dt]


# ══════════════════════════════════════════════════════════════
# SIMULATOR / BỘ MÔ PHỎNG
# ══════════════════════════════════════════════════════════════
class TrajectorySimulator:
    """
    Full trajectory simulator with analysis and plots
    Bộ mô phỏng quỹ đạo đầy đủ với phân tích và đồ thị
    """
    
    def __init__(self, rocket: ModelRocket):
        self.rocket  = rocket
        self.results = None
    
    def simulate(self, t_max: float = 120.0, dt_max: float = 0.005) -> dict:
        """
        Chạy mô phỏng / Run simulation
        Sử dụng RK45 (Runge-Kutta 4(5)) / Uses RK45 adaptive integration
        """
        print("\n🚀 Running trajectory simulation...")
        
        # Sự kiện dừng khi chạm đất / Ground hit terminal event
        def ground_event(t, y):
            return y[0]   # Zero when altitude = 0
        ground_event.terminal  = True
        ground_event.direction = -1  # Decreasing through zero
        
        sol = solve_ivp(
            fun   = self.rocket.equations_of_motion,
            t_span = [0.0, t_max],
            y0    = [0.0, 0.0],  # Start at rest on ground
            method = 'RK45',
            max_step = dt_max,
            events   = ground_event,
            dense_output = True
        )
        
        t = sol.t
        h = sol.y[0]  # Altitude (m)
        v = sol.y[1]  # Velocity (m/s)
        
        # Derived quantities / Đại lượng tính toán
        a   = np.gradient(v, t)                             # Acceleration (m/s²)
        g_load = a / G0                                     # G-load
        mass = np.array([self.rocket.total_mass(ti) for ti in t])
        
        # Key events / Sự kiện chính
        apogee_idx = np.argmax(h)
        
        results = {
            'time':       t,
            'altitude':   h,
            'velocity':   v,
            'accel':      a,
            'g_load':     g_load,
            'mass':       mass,
            # Key metrics / Chỉ số chính
            'apogee_m':     float(np.max(h)),
            't_apogee_s':   float(t[apogee_idx]),
            'max_vel_ms':   float(np.max(v)),
            'max_vel_mach': float(np.max(v) / 343),
            'max_g':        float(np.max(g_load)),
            'flight_time':  float(t[-1]),
        }
        
        self.results = results
        self._print_summary(results)
        return results
    
    def _print_summary(self, r: dict):
        """In tóm tắt kết quả / Print results summary"""
        print("\n" + "="*50)
        print("📊 KẾT QUẢ MÔ PHỎNG / SIMULATION RESULTS")
        print("="*50)
        print(f"  🏔️  Apogee:           {r['apogee_m']:.1f} m")
        print(f"  ⏱️  Time to apogee:   {r['t_apogee_s']:.1f} s")
        print(f"  💨  Max velocity:     {r['max_vel_ms']:.1f} m/s  (Mach {r['max_vel_mach']:.3f})")
        print(f"  💥  Max acceleration: {r['max_g']:.1f} g")
        print(f"  🏁  Total flight:     {r['flight_time']:.1f} s")
    
    def plot(self, save_path: str = None):
        """Vẽ đồ thị kết quả / Plot simulation results"""
        if self.results is None:
            print("❌ Run simulate() first!")
            return
        
        r  = self.results
        t, h, v, a, g = r['time'], r['altitude'], r['velocity'], r['accel'], r['g_load']
        
        fig = plt.figure(figsize=(14, 9))
        fig.suptitle(f'🚀 Mô Phỏng Quỹ Đạo — Motor: {self.rocket.motor.name}',
                     fontsize=14, fontweight='bold')
        
        gs = gridspec.GridSpec(2, 3, figure=fig, hspace=0.4, wspace=0.35)
        
        # 1. Altitude / Độ cao
        ax1 = fig.add_subplot(gs[0, :2])
        ax1.fill_between(t, h, alpha=0.2, color='steelblue')
        ax1.plot(t, h, color='steelblue', linewidth=2.5)
        ax1.axhline(r['apogee_m'], color='red', linestyle='--', alpha=0.7,
                    label=f'Apogee: {r["apogee_m"]:.0f} m')
        ax1.axvline(r['t_apogee_s'], color='orange', linestyle=':', alpha=0.7)
        ax1.set_xlabel('Thời gian / Time (s)')
        ax1.set_ylabel('Độ cao / Altitude (m)')
        ax1.set_title('Quỹ đạo / Trajectory')
        ax1.legend(); ax1.grid(alpha=0.3)
        
        # 2. Thrust curve / Đường cong lực đẩy
        ax2 = fig.add_subplot(gs[0, 2])
        t_motor = np.linspace(0, self.rocket.motor.burn_time, 200)
        F_motor = [self.rocket.motor.thrust(ti) for ti in t_motor]
        ax2.fill_between(t_motor, F_motor, alpha=0.4, color='red')
        ax2.plot(t_motor, F_motor, 'r-', linewidth=2)
        ax2.set_xlabel('Thời gian (s)')
        ax2.set_ylabel('Lực đẩy / Thrust (N)')
        ax2.set_title('Đường cong lực đẩy\nThrust Curve')
        ax2.grid(alpha=0.3)
        
        # 3. Velocity / Vận tốc
        ax3 = fig.add_subplot(gs[1, 0])
        ax3.plot(t, v, color='green', linewidth=2)
        ax3.axhline(0, color='k', alpha=0.3)
        ax3.axhline(r['max_vel_ms'], color='green', linestyle='--', alpha=0.5,
                    label=f'Max: {r["max_vel_ms"]:.1f} m/s')
        ax3.fill_between(t, v, where=(np.array(v) > 0), alpha=0.2, color='green')
        ax3.set_xlabel('Thời gian (s)')
        ax3.set_ylabel('Vận tốc / Velocity (m/s)')
        ax3.set_title('Vận tốc / Velocity')
        ax3.legend(); ax3.grid(alpha=0.3)
        
        # 4. G-load / Tải trọng G
        ax4 = fig.add_subplot(gs[1, 1])
        ax4.plot(t, g, color='purple', linewidth=2)
        ax4.axhline(0, color='k', alpha=0.3)
        ax4.axhline(-1, color='orange', linestyle='--', alpha=0.5, label='Freefall (-1g)')
        ax4.fill_between(t, g, 0, where=(np.array(g) > 0), alpha=0.2, color='purple')
        ax4.set_xlabel('Thời gian (s)')
        ax4.set_ylabel('Tải G / G-load')
        ax4.set_title('Gia tốc / Acceleration')
        ax4.legend(); ax4.grid(alpha=0.3)
        
        # 5. Phase diagram / Sơ đồ pha
        ax5 = fig.add_subplot(gs[1, 2])
        sc = ax5.scatter(v, h, c=t, cmap='plasma', s=3)
        plt.colorbar(sc, ax=ax5, label='Time (s)')
        ax5.set_xlabel('Vận tốc (m/s)')
        ax5.set_ylabel('Độ cao (m)')
        ax5.set_title('Sơ đồ pha\nPhase Space')
        ax5.grid(alpha=0.3)
        
        if save_path:
            plt.savefig(save_path, dpi=150, bbox_inches='tight')
            print(f"✅ Plot saved to {save_path}")
        plt.show()
        return fig


# ══════════════════════════════════════════════════════════════
# MAIN / CHƯƠNG TRÌNH CHÍNH
# ══════════════════════════════════════════════════════════════
if __name__ == '__main__':
    print("🚀 ROCKET TRAJECTORY SIMULATOR")
    print("   Bộ Mô Phỏng Quỹ Đạo Tên Lửa")
    print("="*50)
    
    # Tạo động cơ / Create motor
    motor = RocketMotor('C6-5')
    
    # Tạo tên lửa / Create rocket
    rocket = ModelRocket(
        motor    = motor,
        dry_mass = 0.110,    # 110g dry mass (Estes Alpha III ~ 100-120g)
        diameter = 0.024,    # 24mm diameter (BT-20 tube)
        Cd       = 0.52      # Typical for a 3-fin model rocket
    )
    
    # Chạy mô phỏng / Run simulation
    sim = TrajectorySimulator(rocket)
    results = sim.simulate(t_max=60.0)
    
    # Vẽ đồ thị / Plot results
    sim.plot(save_path='trajectory_C6-5.png')
    
    # So sánh các motor / Compare motors
    print("\n📊 So sánh motor / Motor comparison:")
    print(f"{'Motor':<10} {'Apogee (m)':<15} {'MaxV (m/s)':<15} {'Flight (s)':<12}")
    print("-"*52)
    
    for motor_name in ['B6-4', 'C6-5', 'D12-5']:
        m = RocketMotor(motor_name)
        r = ModelRocket(m, dry_mass=0.110, diameter=0.024)
        s = TrajectorySimulator(r)
        res = s.simulate(t_max=60.0)
        print(f"{motor_name:<10} {res['apogee_m']:<15.1f} {res['max_vel_ms']:<15.1f} {res['flight_time']:<12.1f}")

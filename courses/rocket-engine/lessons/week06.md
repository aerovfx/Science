# Tuần 6: Mô Phỏng Quỹ Đạo với Python / Week 6: Trajectory Simulation with Python

## 1. Mục Tiêu / Objectives

Trong tuần này, sinh viên sẽ học cách mô phỏng quỹ đạo bay của tên lửa mô hình bằng ngôn ngữ lập trình Python. Chúng ta sẽ áp dụng các định luật vật lý đã học ở các tuần trước vào một mô hình số (numerical model) để dự đoán chính xác độ cao cực đại (apogee), thời gian bay, và vận tốc lớn nhất.

In this week, students will learn how to simulate the flight trajectory of a model rocket using the Python programming language. We will apply the physics laws learned in previous weeks into a numerical model to accurately predict the maximum altitude (apogee), flight time, and maximum velocity.

### Mục tiêu cụ thể / Specific objectives:
1. **Hiểu và thiết lập / Understand and set up**: Phương trình chuyển động 1 chiều (1D) với khối lượng thay đổi (Variable mass).
2. **Lập trình / Programming**: Xây dựng bộ mô phỏng bằng Python sử dụng thư viện `SciPy` (phương pháp Runge-Kutta).
3. **Phân tích khí động học / Aerodynamic analysis**: Tích hợp mô hình lực cản (drag model) và mô hình khí quyển chuẩn (Standard Atmosphere).
4. **Trực quan hoá / Visualization**: Sử dụng `Matplotlib` để vẽ đồ thị quỹ đạo, vận tốc, lực đẩy và gia tốc.

---

## 2. Phần Mềm & Công Cụ / Software & Tools

| Công cụ / Tool | Phiên bản / Version | Chức năng / Function | Link tải / Download Link |
| --- | --- | --- | --- |
| **Python** | 3.9+ | Ngôn ngữ lập trình chính / Main programming language | [python.org](https://www.python.org/) |
| **NumPy** | 1.21+ | Xử lý mảng và toán học / Array processing & Math | `pip install numpy` |
| **SciPy** | 1.7+ | Giải phương trình vi phân / ODE solver | `pip install scipy` |
| **Matplotlib** | 3.4+ | Vẽ đồ thị / Plotting graphs | `pip install matplotlib` |
| **VS Code** | Latest | Trình soạn thảo mã / Code Editor | [code.visualstudio.com](https://code.visualstudio.com/) |

---

## 3. Lý Thuyết / Theory

### 3.1 Phương Trình Chuyển Động 1D (1D Equations of Motion)

Khi tên lửa bay thẳng đứng (1D), có ba lực chính tác dụng lên nó: Lực đẩy (Thrust - $F_T$), Trọng lực (Gravity - $F_g$), và Lực cản không khí (Aerodynamic Drag - $F_D$).
Theo định luật II Newton, tổng lực tác dụng bằng khối lượng nhân với gia tốc. Tuy nhiên, khối lượng của tên lửa thay đổi theo thời gian do nhiên liệu bị đốt cháy.

**Phương trình vi phân chuyển động (Differential equation of motion):**
$$ \frac{dv}{dt} = \frac{F_T(t) - F_D(v) - F_g}{m(t)} $$

Trong đó (Where):
* $v$ là vận tốc (velocity), $\frac{dv}{dt}$ là gia tốc (acceleration - $a$).
* $F_T(t)$ là lực đẩy tại thời điểm $t$ (Thrust at time $t$).
* $F_D(v)$ là lực cản phụ thuộc vào vận tốc $v$.
* $m(t)$ là khối lượng của tên lửa tại thời điểm $t$ (Rocket mass at time $t$).

### 3.2 Khối Lượng Thay Đổi (Variable Mass)

Khối lượng thay đổi theo tốc độ tiêu hao nhiên liệu (mass flow rate - $\dot{m}$).
$$ \frac{dm}{dt} = -\dot{m} $$
Trong mô hình đơn giản, chúng ta có thể giả sử tốc độ tiêu hao nhiên liệu tỷ lệ thuận với lực đẩy, hoặc giảm tuyến tính theo thời gian cháy (burn time).

$$ m(t) = m_{dry} + m_{propellant} \cdot \left(1 - \frac{t}{t_{burn}}\right) \quad \text{for} \quad t \le t_{burn} $$

### 3.3 Lực Cản Không Khí (Aerodynamic Drag)

Lực cản không khí được tính bằng công thức:
$$ F_D = \frac{1}{2} \rho v^2 C_d A $$

Trong đó (Where):
* $\rho$ là mật độ không khí (air density).
* $v$ là vận tốc tên lửa (rocket velocity).
* $C_d$ là hệ số cản (drag coefficient).
* $A$ là diện tích mặt cắt ngang lớn nhất (frontal area).

Ở vận tốc cận âm (subsonic) và siêu âm (supersonic), hệ số cản $C_d$ không phải là hằng số mà phụ thuộc vào số Mach ($M = \frac{v}{a}$, với $a$ là tốc độ âm thanh). Trong mô phỏng này, chúng ta giả sử $C_d$ là hằng số để đơn giản hoá.

### 3.4 Mô Hình Khí Quyển ISA (International Standard Atmosphere)

Mật độ không khí thay đổi theo độ cao $h$. Mô hình ISA cho tầng đối lưu (Troposphere, từ 0 đến 11km):
$$ T = 288.15 - 0.0065 \cdot h $$
$$ P = 101325 \cdot \left(\frac{T}{288.15}\right)^{5.2561} $$
$$ \rho = \frac{P}{287.05 \cdot T} $$
(Trong đó $T$ là nhiệt độ tính bằng Kelvin, $P$ là áp suất tĩnh tính bằng Pascal, $\rho$ là mật độ tính bằng $kg/m^3$).

### 3.5 Các Giai Đoạn Chuyến Bay (Flight Phases)

1. **Boost Phase (Giai đoạn tăng tốc):** Động cơ đang hoạt động, lực đẩy $F_T > 0$.
2. **Coast Phase (Giai đoạn trớn):** Động cơ đã tắt, tên lửa tiếp tục bay lên nhờ động lượng.
3. **Apogee (Đỉnh quỹ đạo):** Điểm cao nhất, vận tốc $v = 0$.
4. **Descent Phase (Giai đoạn hạ cánh):** Dù được bung ra, tên lửa rơi xuống với vận tốc ổn định (terminal velocity).

### 3.6 Phương pháp tích phân số (Numerical Integration)

Để giải phương trình vi phân $\frac{dv}{dt}$ và $\frac{dh}{dt} = v$, chúng bản chúng ta dùng phương pháp số.
- **Phương pháp Euler (Euler Method):** Đơn giản nhất nhưng kém chính xác. $y_{n+1} = y_n + h \cdot f(t_n, y_n)$.
- **Phương pháp Runge-Kutta bậc 4 (RK4):** Phức tạp hơn nhưng cực kỳ chính xác. `scipy.integrate.solve_ivp` mặc định sử dụng họ phương pháp này (như RK45).

---

## 4. Code Python / Python Code

Dưới đây là mã nguồn mô phỏng hoàn chỉnh. Bạn cần tạo một tệp `thrust_curve.csv` trước khi chạy (xem hướng dẫn ở phần sau).
*Below is the complete simulation source code. You need to create a `thrust_curve.csv` file before running (see instructions later).*

### Cài đặt thư viện / Install libraries
Mở terminal và chạy lệnh sau / Open terminal and run:
```bash
pip install numpy scipy matplotlib pandas
```

### Mã nguồn `sim.py` / Source code `sim.py`
```python
import numpy as np
import matplotlib.pyplot as plt
from scipy.integrate import solve_ivp
import os

# ==================================================
# CÁC THÔNG SỐ TÊN LỬA / ROCKET PARAMETERS
# ==================================================
class RocketSimulator:
    def __init__(self, motor_file, rocket_params):
        """
        Khởi tạo bộ mô phỏng tên lửa / Initialize rocket simulator
        motor_file: CSV file với [time, thrust] / CSV with thrust curve
        rocket_params: dict với mass, diameter, Cd, etc.
        """
        self.p = rocket_params
        
        # Load thrust data from CSV
        # Format: time(s), thrust(N)
        if not os.path.exists(motor_file):
            raise FileNotFoundError(f"Motor file {motor_file} not found!")
            
        data = np.loadtxt(motor_file, delimiter=',', skiprows=1)
        self.thrust_time   = data[:, 0]  # Thời gian (s)
        self.thrust_values = data[:, 1]  # Lực đẩy (N)
        
        # Calculate propellant mass based on Total Impulse and Isp
        # Total Impulse = Isp * g0 * Propellant_Mass
        self.prop_mass = self.p['total_impulse'] / (self.p['Isp'] * 9.81)  # Khối lượng nhiên liệu (kg)
        self.burn_time = self.thrust_time[-1]
        
        print(f"Loaded motor data. Burn time: {self.burn_time:.2f}s, Propellant mass: {self.prop_mass:.3f}kg")
    
    def get_thrust(self, t):
        """Nội suy lực đẩy tại thời điểm t / Interpolate thrust at time t"""
        if t > self.burn_time or t < 0: 
            return 0.0
        return float(np.interp(t, self.thrust_time, self.thrust_values))
    
    def get_mass(self, t):
        """Khối lượng tên lửa tại thời điểm t / Rocket mass at time t"""
        if t >= self.burn_time:
            return self.p['dry_mass']
        # Giả sử nhiên liệu cháy đều theo thời gian
        # Assume linear propellant burn rate
        frac_burned = t / self.burn_time
        return self.p['dry_mass'] + self.prop_mass * (1 - frac_burned)
    
    def atmosphere(self, h):
        """Mô hình khí quyển ISA / ISA standard atmosphere model"""
        if h < 0: h = 0
        T = 288.15 - 0.0065 * min(h, 11000)  # Temperature (K)
        P = 101325 * (T / 288.15) ** 5.2561  # Pressure (Pa)
        rho = P / (287.05 * T)                # Density (kg/m³)
        return rho, T
    
    def equations_of_motion(self, t, state):
        """
        Phương trình vi phân chuyển động 1D / 1D equations of motion
        state = [altitude (m), velocity (m/s)]
        """
        h, v = state
        rho, _ = self.atmosphere(h)
        
        # Các lực tác dụng / Forces
        thrust = self.get_thrust(t)
        mass   = self.get_mass(t)
        
        # Lực cản = 1/2 * rho * v^2 * Cd * Area
        # Sử dụng np.sign(v) để đảm bảo lực cản luôn ngược hướng với vector vận tốc
        drag   = 0.5 * rho * (v**2) * self.p['Cd'] * self.p['area'] * np.sign(v)
        weight = mass * 9.81
        
        # Gia tốc a = F_total / mass
        accel = (thrust - drag - weight) / mass
        
        # Điều kiện dừng: Không thể đi xuống dưới mặt đất
        # Prevent rocket from digging into the ground before launch or after landing
        if h <= 0 and v <= 0 and accel <= 0:
            return [0, 0]
            
        return [v, accel]
    
    def simulate(self, t_max=60):
        """Chạy mô phỏng đầy đủ / Run full simulation"""
        print("\nStarting simulation...")
        state0 = [0.0, 0.0]  # [altitude, velocity]
        
        # Định nghĩa sự kiện (Event): chạm đất / Event: ground hit
        # Quá trình giải ODE sẽ dừng khi hàm này trả về 0
        def ground_hit(t, y): 
            return y[0]
        ground_hit.terminal  = True
        ground_hit.direction = -1  # Chỉ kích hoạt khi độ cao đang giảm qua 0 (rơi xuống)
        
        # Giải phương trình vi phân bằng solve_ivp (mặc định là RK45)
        sol = solve_ivp(self.equations_of_motion, [0, t_max], state0,
                        max_step=0.01, events=ground_hit, dense_output=True)
        
        t = sol.t
        h = sol.y[0]  # Mảng chứa Độ cao / Altitude array
        v = sol.y[1]  # Mảng chứa Vận tốc / Velocity array
        
        # Tính toán các giá trị cực đại / Calculate peak values
        apogee     = np.max(h)
        max_vel    = np.max(v)
        t_apogee   = t[np.argmax(h)]
        t_land     = t[-1]
        
        # Tính gia tốc / Calculate acceleration
        accel = np.zeros_like(v)
        for i in range(len(t)-1):
            dt = t[i+1] - t[i]
            if dt > 0:
                accel[i] = (v[i+1] - v[i]) / dt
        accel[-1] = accel[-2]  # Fill last value
        max_accel  = np.max(accel) / 9.81  # Đổi ra đơn vị g (g-force)
        
        print("\n" + "="*40)
        print("KẾT QUẢ MÔ PHỎNG / SIMULATION RESULTS")
        print("="*40)
        print(f'🚀 Độ cao cực đại (Apogee):        {apogee:.1f} m')
        print(f'🎯 Vận tốc cực đại (Max velocity):  {max_vel:.1f} m/s ({max_vel/340:.2f} Mach)')
        print(f'⏱️  Thời gian lên đỉnh (To apogee): {t_apogee:.1f} s')
        print(f'🏁 Tổng thời gian bay (Flight time):{t_land:.1f} s')
        print(f'💥 Gia tốc cực đại (Max accel):     {max_accel:.1f} g')
        print("="*40 + "\n")
        
        return t, h, v, accel
    
    def plot_results(self, t, h, v, accel):
        """Vẽ kết quả mô phỏng / Plot simulation results"""
        print("Generating plots...")
        fig, axes = plt.subplots(2, 2, figsize=(14, 10))
        fig.suptitle('Kết Quả Mô Phỏng Tên Lửa / Rocket Simulation Results', fontsize=16, fontweight='bold')
        
        # 1. Biểu đồ Quỹ đạo / Trajectory Plot
        axes[0,0].plot(t, h, 'b-', linewidth=2.5)
        axes[0,0].set_xlabel('Thời gian / Time (s)')
        axes[0,0].set_ylabel('Độ cao / Altitude (m)')
        axes[0,0].set_title('Quỹ đạo / Trajectory (Altitude vs Time)')
        axes[0,0].fill_between(t, h, alpha=0.2, color='blue')
        apogee_val = max(h)
        axes[0,0].axhline(apogee_val, color='r', linestyle='--', label=f'Apogee: {apogee_val:.1f}m')
        axes[0,0].grid(True, linestyle=':', alpha=0.6)
        axes[0,0].legend()
        
        # 2. Biểu đồ Vận tốc / Velocity Plot
        axes[0,1].plot(t, v, 'r-', linewidth=2.5)
        axes[0,1].set_xlabel('Thời gian / Time (s)')
        axes[0,1].set_ylabel('Vận tốc / Velocity (m/s)')
        axes[0,1].set_title('Vận tốc / Velocity vs Time')
        axes[0,1].axhline(0, color='k', linestyle='-', alpha=0.5)
        axes[0,1].grid(True, linestyle=':', alpha=0.6)
        max_vel = max(v)
        axes[0,1].axhline(max_vel, color='orange', linestyle='--', label=f'Max V: {max_vel:.1f} m/s')
        axes[0,1].legend()
        
        # 3. Biểu đồ Lực đẩy / Thrust Curve
        thrust_t = np.linspace(0, max(self.burn_time*1.5, 2.0), 200)
        thrust_v = [self.get_thrust(time_pt) for time_pt in thrust_t]
        axes[1,0].plot(thrust_t, thrust_v, 'darkorange', linewidth=2.5)
        axes[1,0].fill_between(thrust_t, thrust_v, alpha=0.5, color='orange')
        axes[1,0].set_xlabel('Thời gian / Time (s)')
        axes[1,0].set_ylabel('Lực đẩy / Thrust (N)')
        axes[1,0].set_title('Đường cong lực đẩy / Motor Thrust Curve')
        axes[1,0].grid(True, linestyle=':', alpha=0.6)
        
        # 4. Biểu đồ Gia tốc / Acceleration Plot
        accel_g = accel / 9.81
        axes[1,1].plot(t, accel_g, 'g-', linewidth=2.5)
        axes[1,1].set_xlabel('Thời gian / Time (s)')
        axes[1,1].set_ylabel('Gia tốc / Acceleration (g)')
        axes[1,1].set_title('Gia tốc / Acceleration vs Time')
        axes[1,1].axhline(-1, color='k', linestyle='--', alpha=0.5, label='1g (freefall)')
        axes[1,1].axhline(0, color='gray', linestyle='-', alpha=0.3)
        axes[1,1].grid(True, linestyle=':', alpha=0.6)
        axes[1,1].legend()
        
        plt.tight_layout()
        plt.subplots_adjust(top=0.9)
        
        save_path = 'simulation_results.png'
        plt.savefig(save_path, dpi=150)
        print(f"Plot saved to {save_path}")
        plt.show()

# ==================================================
# THỰC THI CHƯƠNG TRÌNH / MAIN EXECUTION
# ==================================================
if __name__ == "__main__":
    # Tạo một file thrust curve giả định (nếu chưa có) cho động cơ C6
    # Create a mock thrust curve file for C6 motor if not exists
    motor_file = 'C6_thrust.csv'
    if not os.path.exists(motor_file):
        print(f"Creating mock motor data file: {motor_file}")
        with open(motor_file, 'w') as f:
            f.write("Time(s),Thrust(N)\n")
            f.write("0.00, 0.0\n")
            f.write("0.10, 14.1\n") # Peak thrust
            f.write("0.20, 10.0\n")
            f.write("0.50, 4.5\n")
            f.write("1.00, 4.5\n")
            f.write("1.50, 4.5\n")
            f.write("1.80, 4.0\n")
            f.write("1.90, 0.0\n")
    
    # Định nghĩa cấu hình tên lửa / Define rocket parameters
    rocket_params = {
        'dry_mass':      0.120,                 # kg (Khối lượng không nhiên liệu / 120g dry mass)
        'total_impulse': 10.0,                  # Ns (Tổng xung lượng - động cơ loại C / C motor)
        'Isp':           130,                   # seconds (Xung lượng riêng / Specific Impulse)
        'Cd':            0.5,                   # drag coefficient (Hệ số cản)
        'area':          np.pi * (0.024/2)**2,  # m^2 (Diện tích mặt cắt ngang 24mm / 24mm diameter)
    }
    
    # Chạy mô phỏng / Run
    sim = RocketSimulator(motor_file, rocket_params)
    t, h, v, a = sim.simulate(t_max=60)
    sim.plot_results(t, h, v, a)
```

---

## 5. Hướng Dẫn Từng Bước / Step-by-Step Instructions

1. **Chuẩn bị môi trường / Environment Setup**:
   Tạo một thư mục mới mang tên `Tuần_6_Mô_Phỏng`. Mở thư mục này bằng VS Code. Tạo hai file: `sim.py` (chứa code bên trên) và mở terminal trong VS Code.
   *Create a new folder named `Week_6_Simulation`. Open it in VS Code. Create `sim.py` and open the terminal.*

2. **Kiểm tra thư viện / Check dependencies**:
   Chạy lệnh `pip show scipy matplotlib pandas` để đảm bảo các thư viện đã được cài đặt. Nếu chưa, dùng `pip install`.
   *Run `pip show scipy matplotlib pandas` to ensure libraries are installed. If not, install them.*

3. **Chạy thử lần đầu / First Run**:
   Chạy file python bằng lệnh `python sim.py`. Bạn sẽ thấy một file `C6_thrust.csv` được tạo ra tự động (nếu chưa có).
   Chương trình sẽ in ra các thông số cực đại (Apogee, Max Vel...) trên cửa sổ dòng lệnh và hiển thị một cửa sổ đồ thị với 4 biểu đồ.
   *Run `python sim.py`. It will auto-create the thrust CSV. It will print the peak values and display a window with 4 plots.*

4. **Phân tích kết quả / Analyze results**:
   Quan sát biểu đồ "Quỹ đạo" (Trajectory). Độ cao tăng dần, đạt đỉnh, sau đó giảm dần. Lưu ý phần giảm không có lực cản của dù (vì mô hình hiện tại chưa có bung dù - freefall parachute-less).
   *Look at the Trajectory plot. Altitude increases, peaks, and decreases. Note the descent doesn't include parachute drag yet.*

5. **Sửa đổi tham số / Modify parameters**:
   Mở file `sim.py`, đổi `dry_mass` từ `0.120` thành `0.200` (tăng khối lượng tên lửa). Chạy lại và ghi nhận sự thay đổi của Apogee.
   *Change `dry_mass` to 0.200kg and run again. Note the change in Apogee.*

---

## 6. ⚠️ Cảnh Báo An Toàn / Safety Warnings

*   **Không nhầm lẫn đơn vị (Unit confusion):** Một trong những lỗi nghiêm trọng nhất trong hàng không vũ trụ là nhầm lẫn đơn vị (VD: lbs và kg, feet và met). Mars Climate Orbiter của NASA từng bị phá huỷ vì lỗi này. Luôn sử dụng hệ đo lường SI (m, kg, s, N) trong mã code.
    *Always use SI units (m, kg, s, N) in calculations. The NASA Mars Climate Orbiter crashed due to a mix-up between metric and imperial units!*
*   **Mô phỏng không phải thực tế (Simulation is not reality):** Một mô phỏng chỉ tốt bằng các giả định của nó (Garbage in, Garbage out). Trong thực tế bay, có gió bão, lỗi động cơ, độ cong thân tên lửa có thể làm tên lửa bay sai quỹ đạo. Đừng mù quáng tin tưởng 100% vào mô phỏng khi quyết định khu vực phóng an toàn.
    *Simulations are only as good as their assumptions. Real-world flights involve wind and imperfections. Don't blindly trust simulations for safety setbacks.*

---

## 7. Câu Hỏi Thảo Luận / Discussion Questions

1. Điều gì xảy ra với vận tốc cực đại và độ cao cực đại nếu chúng ta giảm hệ số cản $C_d$ từ 0.5 xuống 0.3? Tại sao?
   *What happens to the max velocity and apogee if we reduce the drag coefficient $C_d$ from 0.5 to 0.3? Why?*
2. Nhìn vào biểu đồ Gia tốc (Acceleration), tại sao có một sự giảm đột ngột (drop) khi động cơ vừa cháy hết nhiên liệu (burnout)?
   *Looking at the Acceleration plot, why is there a sharp, sudden drop right when the motor burns out?*
3. Mã nguồn hiện tại chưa tính đến giai đoạn bung dù. Làm thế nào bạn có thể chỉnh sửa hàm `equations_of_motion` để tăng diện tích cản $A$ hoặc hệ số $C_d$ sau thời điểm đạt đỉnh (Apogee)?
   *The current code doesn't model parachute deployment. How could you modify `equations_of_motion` to increase area $A$ or $C_d$ after apogee?*
4. Phương pháp số `solve_ivp` tốt hơn phương pháp tính toán từng bước thủ công (như Excel) ở điểm nào?
   *Why is using a numerical solver like `solve_ivp` better than a simple step-by-step spreadsheet (Excel) calculation?*
5. Tại sao chúng ta cần mô hình khí quyển chuẩn (ISA) cho mật độ không khí $\rho$ thay vì dùng một hằng số $1.225 kg/m^3$? (Gợi ý: Nếu tên lửa bay cao 3000m thì sao?)
   *Why do we need the ISA atmosphere model for air density $\rho$ instead of a constant $1.225 kg/m^3$? (Hint: What if the rocket reaches 3000m?)*

---

## 8. Bài Về Nhà / Homework

1. **Thêm giai đoạn bung dù / Add Parachute Phase:**
   Sửa file `sim.py`. Thay đổi logic trong `equations_of_motion`. Nếu vận tốc $v < 0$ (đang rơi xuống), hãy tự động đổi hệ số cản $C_d$ thành 1.5 và diện tích cản $A$ thành diện tích của dù (đường kính dù 0.3m). Chạy lại và quan sát sự thay đổi trên biểu đồ Vận tốc ở giai đoạn đi xuống. Chụp lại đồ thị để nộp.
   *Modify `sim.py`. In `equations_of_motion`, if $v < 0$, change $C_d$ to 1.5 and area $A$ to match a 0.3m diameter parachute. Plot the new velocity curve and submit the screenshot.*

2. **So sánh Động Cơ / Motor Comparison:**
   Lên trang ThrustCurve.org, tìm dữ liệu cho động cơ `Estes D12`. Tạo một file CSV mới `D12_thrust.csv` dựa trên dữ liệu đó. Chạy mô phỏng cho cùng khối lượng tên lửa nhưng sử dụng động cơ D12. So sánh độ cao đạt được với động cơ C6.
   *Find thrust data for an `Estes D12` motor on ThrustCurve.org. Create a new CSV and run the simulation. Compare the apogee with the C6 motor.*

---

## 9. Tiêu Chí Đánh Giá / Assessment Rubric

| Tiêu chí / Criteria | Xuất sắc (9-10đ) / Excellent | Đạt (7-8đ) / Proficient | Cần cố gắng (<7đ) / Needs Improvement |
| --- | --- | --- | --- |
| **Hiểu code / Code Comprehension** | Hiểu rõ chức năng từng dòng lệnh, giải thích lưu loát các tham số vật lý. | Hiểu cấu trúc cơ bản, nhưng cần gợi ý để giải thích hàm `solve_ivp`. | Chạy được code nhưng không hiểu các biến số như $\rho, C_d$. |
| **Thực hành bài tập / Homework Task** | Thêm thành công mô phỏng dù, đồ thị rơi ổn định chính xác (terminal velocity rõ ràng). | Thêm được dù nhưng vận tốc rơi chưa ổn định hoặc có lỗi logic nhỏ. | Không tích hợp được chức năng rơi bằng dù vào mã nguồn. |
| **Phân tích dữ liệu / Data Analysis** | Phân tích sâu sắc đồ thị, chỉ ra mối liên hệ giữa các điểm ngoặt đồ thị và vật lý. | Trả lời đúng các câu hỏi cơ bản về độ cao cực đại và thời điểm cháy hết. | Trả lời sai các thông số cơ bản khi đọc biểu đồ. |
| **Báo cáo / Reporting** | Báo cáo rõ ràng, trình bày đồ thị đẹp, có kèm theo chú thích đầy đủ, song ngữ. | Báo cáo đủ thông tin, có ảnh chụp màn hình nhưng trình bày lộn xộn. | Thiếu ảnh chụp màn hình, không có giải thích kết quả. |

---
*Tài liệu nội bộ khoá học Rocket Engine & Model Rocketry. Vui lòng không phân phối khi chưa có sự cho phép.*
*Internal course material for Rocket Engine & Model Rocketry. Please do not distribute without permission.*

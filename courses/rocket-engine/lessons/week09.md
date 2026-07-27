# Tuần 9: Phân Tích Dữ Liệu Chuyến Bay & Cải Tiến / Week 9: Flight Data Analysis & Iteration

## 1. Mục Tiêu / Objectives

Sau khi phóng thử nghiệm, việc phân tích dữ liệu bay từ thẻ nhớ SD (Flight Data Analysis) là bước quan trọng nhất để tinh chỉnh thiết kế. Trong tuần này, sinh viên sẽ sử dụng Python để lọc nhiễu, so sánh dữ liệu thực tế với mô phỏng, và trích xuất các hệ số khí động học thực tế (như hệ số cản $C_d$) từ chuyến bay.

After a test flight, analyzing flight data from the SD card is the most crucial step to refine the design. In this week, students will use Python to filter noise, compare actual data with simulation, and extract real aerodynamic coefficients (such as the drag coefficient $C_d$) from the flight.

### Mục tiêu cụ thể / Specific objectives:
1. **Xử lý tín hiệu số / Digital Signal Processing**: Áp dụng bộ lọc Savitzky-Golay để làm mượt dữ liệu cảm biến thô.
2. **Nội suy và Vi phân / Interpolation & Differentiation**: Tính toán Vận tốc và Gia tốc từ dữ liệu Độ cao bằng đạo hàm bậc 1 và bậc 2.
3. **Phân tích Khí động học ngược / Inverse Aerodynamic Analysis**: Tính toán ngược lực cản $F_D$ và hệ số cản $C_d$ thực tế trong giai đoạn trớn (Coast Phase).
4. **Hiệu chỉnh cảm biến / Sensor Calibration**: Xử lý các sai số hệ thống (Bias drift) của cảm biến khí áp và gia tốc.

---

## 2. Phần Mềm & Công Cụ / Software & Tools

| Công cụ / Tool | Phiên bản / Version | Chức năng / Function | Link tải / Download Link |
| --- | --- | --- | --- |
| **Python** | 3.9+ | Ngôn ngữ phân tích / Analysis Language | [python.org](https://www.python.org/) |
| **Pandas** | 1.3+ | Xử lý dữ liệu CSV / CSV Data Parsing | `pip install pandas` |
| **SciPy** | 1.7+ | Bộ lọc tín hiệu số / Signal Filtering | `pip install scipy` |
| **NumPy & Matplotlib**| Latest | Toán học & Đồ thị / Math & Plots | `pip install numpy matplotlib` |
| **Jupyter Notebook** | Tùy chọn | Môi trường phân tích tương tác / Interactive IDE | `pip install notebook` |

---

## 3. Lý Thuyết / Theory

### 3.1 Xử Lý Nhiễu Cảm Biến (Sensor Noise Filtering)

Cảm biến BMP280 có nhiễu đo lường (measurement noise). Nếu ta đạo hàm trực tiếp độ cao thô để tìm vận tốc ($v = \frac{\Delta h}{\Delta t}$), nhiễu sẽ bị khuếch đại lên rất lớn (vi phân khuếch đại nhiễu cao tần).
Vì vậy, trước khi đạo hàm, ta phải làm mượt tín hiệu (Smoothing).
**Bộ lọc Savitzky-Golay (Savitzky-Golay Filter):**
Đây là bộ lọc phổ biến nhất trong phân tích quỹ đạo, nó dùng phương pháp bình phương tối thiểu để khớp một đa thức bậc thấp vào các điểm lân cận. Nó giúp giữ nguyên hình dáng đỉnh của dữ liệu (ví dụ điểm Apogee) tốt hơn bộ lọc trung bình động (Moving Average).

### 3.2 Phân Tích Động Lực Học Ngược (Inverse Dynamics)

Trong Tuần 6 (Mô phỏng), ta biết $C_d$ để tìm ra Độ cao. Ở Tuần 9, ta có Độ cao, ta muốn tìm lại $C_d$ thực tế của tên lửa. Quá trình này gọi là Inverse Simulation.

**Giai đoạn trớn (Coast Phase):**
Giai đoạn này xảy ra sau khi động cơ đã tắt ($F_T = 0$) nhưng tên lửa vẫn đang lao lên.
Phương trình chuyển động lúc này là:
$$ m \cdot a = - F_D - m \cdot g $$
Rút $F_D$ (Lực cản) ra:
$$ F_D = m \cdot (-a - g) $$
Mặt khác, công thức lực cản là:
$$ F_D = \frac{1}{2} \rho v^2 C_d A $$
Bằng cách đo gia tốc $a$ (từ đạo hàm bậc 2 của độ cao hoặc lấy trực tiếp từ IMU) và vận tốc $v$, ta có thể tính hệ số cản $C_d$ thực tế tại mỗi thời điểm:
$$ C_d = \frac{2 \cdot m \cdot (-a - g)}{\rho \cdot v^2 \cdot A} $$
*Lưu ý: Công thức này chỉ áp dụng khi $v > 0$ và đủ lớn để $F_D$ đáng kể.*

### 3.3 Hiệu Chuẩn Cảm Biến (Sensor Calibration & Bias)

*   **Barometer Drift (Trôi áp suất):** Áp suất không khí tại mặt đất thay đổi theo thời tiết trong ngày. Do đó, $P_0$ (baseline pressure) phải được cập nhật lại ngay trước giờ đếm ngược phóng tên lửa.
*   **Accelerometer Bias (Độ lệch gia tốc):** Dù đặt yên trên bàn phẳng, MPU6050 có thể không chỉ đúng $1.0G$ ở trục Z mà báo $1.02G$. Sai số tĩnh này ($+0.02G$) gọi là Bias.
    $$ a_{true} = a_{raw} - a_{bias} $$
    Bias này cần được lấy trung bình trong 5 giây lúc tên lửa nằm yên trên bệ phóng trước khi cất cánh.

---

## 4. Code Python / Python Code

Dưới đây là một Package hoàn chỉnh bằng Python dùng để đọc file CSV từ thẻ nhớ SD của Flight Computer (Tuần 8), làm sạch dữ liệu, và xuất báo cáo bay toàn diện.
*Below is a complete Python package to read the CSV from the SD card, clean the data, and generate a comprehensive flight report.*

### Cài đặt / Installation
```bash
pip install pandas numpy scipy matplotlib
```

### Mã nguồn `flight_analysis.py` / Source code
```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from scipy.signal import savgol_filter
import os

# ==================================================
# LỚP PHÂN TÍCH DỮ LIỆU BAY THỰC TẾ / REAL FLIGHT DATA ANALYZER
# ==================================================
class FlightDataAnalyzer:
    def __init__(self, csv_file, rocket_mass, rocket_area):
        """
        Khởi tạo và tải dữ liệu / Initialize and load data
        csv_file: File CSV lấy từ thẻ SD (có các cột time, alt, accel, state)
        rocket_mass: Khối lượng khô của tên lửa (kg)
        rocket_area: Diện tích mặt cắt ngang (m^2)
        """
        if not os.path.exists(csv_file):
            raise FileNotFoundError(f"Không tìm thấy file: {csv_file}")
            
        print(f"Đang tải dữ liệu từ {csv_file}...")
        self.df = pd.read_csv(csv_file)
        self.mass = rocket_mass
        self.area = rocket_area
        self.rho = 1.225 # Giả định mật độ không khí sát mặt đất (kg/m^3)
        
        # Đảm bảo dữ liệu được sắp xếp theo thời gian
        self.df = self.df.sort_values(by='time').reset_index(drop=True)
        
        # Gọi hàm tiền xử lý / Call preprocessor
        self._preprocess()
        
    def _preprocess(self):
        """Lọc và làm sạch dữ liệu / Filter and clean data"""
        print("Đang xử lý tín hiệu (Savitzky-Golay filtering)...")
        
        # 1. Bù trừ độ cao lúc khởi hành (Zero out initial altitude)
        # Lấy trung bình 10 mẫu đầu tiên làm mốc số 0
        initial_alt = self.df['alt'].head(10).mean()
        self.df['alt_zeroed'] = self.df['alt'] - initial_alt
        
        # 2. Làm mượt bằng Savitzky-Golay
        # window_length=11 (số lẻ), polyorder=3
        self.df['alt_smooth'] = savgol_filter(self.df['alt_zeroed'], window_length=15, polyorder=3)
        
        # 3. Tính toán Vận tốc (Đạo hàm bậc 1 của Độ cao)
        # Sử dụng gradient để tính đạo hàm chính xác hơn
        dt = np.gradient(self.df['time'])
        # Tránh chia cho 0
        dt[dt == 0] = 0.01 
        
        self.df['velocity_derived'] = np.gradient(self.df['alt_smooth']) / dt
        
        # Làm mượt vận tốc để tránh gai nhiễu (spikes)
        self.df['velocity_smooth'] = savgol_filter(self.df['velocity_derived'], 15, 3)
        
        # 4. Tính toán Gia tốc (Đạo hàm bậc 1 của Vận tốc)
        self.df['accel_derived'] = np.gradient(self.df['velocity_smooth']) / dt
        self.df['accel_derived_g'] = self.df['accel_derived'] / 9.81
        
        # Lưu biến để tiện truy xuất
        self.t = self.df['time'].values
        self.alt = self.df['alt_smooth'].values
        self.vel = self.df['velocity_smooth'].values
        self.acc = self.df['accel_derived'].values
        
        # Lấy dữ liệu cảm biến gia tốc thực tế từ IMU (nếu có)
        if 'accel' in self.df.columns:
            self.imu_acc = self.df['accel'].values # Đơn vị G
        else:
            self.imu_acc = self.df['accel_derived_g'].values
            
    def find_key_events(self):
        """Xác định các sự kiện chính trong chuyến bay / Find key flight events"""
        events = {}
        
        # Tìm Apogee
        apogee_idx = np.argmax(self.alt)
        events['Apogee_m'] = self.alt[apogee_idx]
        events['Time_to_Apogee_s'] = self.t[apogee_idx]
        
        # Tìm Max Velocity
        max_vel_idx = np.argmax(self.vel)
        events['Max_Velocity_ms'] = self.vel[max_vel_idx]
        events['Max_Mach'] = self.vel[max_vel_idx] / 340.0
        
        # Tìm Max Acceleration (Liftoff / Thrust peak)
        events['Max_Accel_g'] = np.max(self.imu_acc)
        
        # Thời gian bay
        events['Flight_Duration_s'] = self.t[-1] - self.t[0]
        
        self.events = events
        return events
        
    def extract_drag_coefficient(self):
        """Trích xuất Cd thực tế từ dữ liệu bay / Extract actual Cd"""
        print("Đang phân tích động lực học ngược để tìm Cd...")
        
        # Xác định giai đoạn Coast: Vận tốc > 15m/s (để F_drag đáng kể) và đang bay lên (sau burnout)
        # Giả sử burnout xảy ra khi gia tốc giảm mạnh qua 0
        burnout_mask = (self.acc < 0) & (self.vel > 15) & (self.alt > 5)
        coast_df = self.df[burnout_mask]
        
        Cd_values = []
        for idx, row in coast_df.iterrows():
            # a_derived là m/s^2. Tại coast phase, a âm.
            a = row['accel_derived']
            v = row['velocity_smooth']
            
            # F_drag = m * (-a - g)
            F_drag = self.mass * (-a - 9.81)
            
            if F_drag > 0 and v > 0:
                # Cd = 2 * F_drag / (rho * v^2 * A)
                Cd = 2 * F_drag / (self.rho * (v**2) * self.area)
                if 0.1 < Cd < 2.0: # Loại bỏ các giá trị phi lý
                    Cd_values.append(Cd)
                    
        if len(Cd_values) > 0:
            median_Cd = np.median(Cd_values)
            self.events['Estimated_Cd'] = median_Cd
            return median_Cd
        else:
            self.events['Estimated_Cd'] = 0.5 # Giá trị mặc định nếu không tính được
            return 0.5

    def full_report(self):
        """In Báo cáo đầy đủ / Full analysis report"""
        self.find_key_events()
        self.extract_drag_coefficient()
        
        print("\n" + "="*50)
        print("BÁO CÁO DỮ LIỆU BAY THỰC TẾ / REAL FLIGHT DATA REPORT")
        print("="*50)
        for k, v in self.events.items():
            print(f"  {k:25s}: {v:.3f}")
        print("="*50 + "\n")
        
    def plot_flight(self):
        """Vẽ biểu đồ toàn cảnh / Plot comprehensive charts"""
        fig, axes = plt.subplots(3, 1, figsize=(10, 12), sharex=True)
        fig.suptitle('Phân Tích Dữ Liệu Bay Thực Tế / Flight Data Analysis', fontsize=16)
        
        # 1. Altitude
        axes[0].plot(self.t, self.df['alt_zeroed'], 'gray', alpha=0.5, label='Raw Altitude')
        axes[0].plot(self.t, self.alt, 'b-', linewidth=2, label='Smoothed Altitude')
        axes[0].axhline(self.events['Apogee_m'], color='r', linestyle='--', label='Apogee')
        axes[0].set_ylabel('Độ cao / Altitude (m)')
        axes[0].legend()
        axes[0].grid(True, linestyle=':')
        
        # 2. Velocity
        axes[1].plot(self.t, self.vel, 'g-', linewidth=2, label='Derived Velocity')
        axes[1].axhline(0, color='k', linestyle='-')
        axes[1].set_ylabel('Vận tốc / Velocity (m/s)')
        axes[1].legend()
        axes[1].grid(True, linestyle=':')
        
        # 3. Acceleration
        axes[2].plot(self.t, self.imu_acc, 'orange', alpha=0.6, label='IMU Acceleration (G)')
        axes[2].plot(self.t, self.df['accel_derived_g'], 'r-', linewidth=2, label='Derived Accel (G)')
        axes[2].axhline(0, color='k', linestyle='-')
        axes[2].set_ylabel('Gia tốc / Accel (G)')
        axes[2].set_xlabel('Thời gian / Time (s)')
        axes[2].legend()
        axes[2].grid(True, linestyle=':')
        
        plt.tight_layout()
        plt.subplots_adjust(top=0.93)
        plt.savefig('flight_analysis.png', dpi=150)
        print("Biểu đồ đã lưu tại / Chart saved at: flight_analysis.png")
        plt.show()

# ==================================================
# THỰC THI CHƯƠNG TRÌNH / EXECUTION
# ==================================================
if __name__ == "__main__":
    # Tạo một file log giả lập từ thẻ SD / Create mock SD Card CSV log
    sd_file = 'flight_log_sd.csv'
    if not os.path.exists(sd_file):
        print(f"Creating mock flight log: {sd_file}")
        with open(sd_file, 'w') as f:
            f.write("time,alt,accel,state\n")
            # Giả lập 1 chuyến bay trong 15 giây
            for i in range(150):
                t = i * 0.1
                # Độ cao với một chút nhiễu
                alt = 100 * t - 4.9 * (t**2) + np.random.normal(0, 0.5) 
                if alt < 0: alt = 0
                
                # Gia tốc với nhiễu
                if t < 1.0:
                    accel = 5.0 + np.random.normal(0, 0.2) # Giai đoạn đẩy
                elif alt > 0:
                    accel = -1.0 + np.random.normal(0, 0.1) # Rơi tự do
                else:
                    accel = 0.0
                    
                state = 2 if alt > 0 else 5
                f.write(f"{t},{alt},{accel},{state}\n")
                
    # Thông số thiết kế (Từ OpenRocket)
    mass = 0.150 # kg
    area = np.pi * (0.024/2)**2 # m^2
    
    # Phân tích
    analyzer = FlightDataAnalyzer(sd_file, mass, area)
    analyzer.full_report()
    analyzer.plot_flight()
```

---

## 5. Hướng Dẫn Từng Bước / Step-by-Step Instructions

1. **Lấy dữ liệu từ thẻ nhớ SD / Retrieve SD Card Data**:
   *   Sau khi thu hồi tên lửa, tháo thẻ MicroSD từ Flight Computer.
   *   Cắm vào máy tính, copy file `flight.csv` (được tạo ở bài tuần 8) vào cùng thư mục với script Python này.

2. **Cài đặt thư viện phân tích / Install Analysis Libraries**:
   *   Mở terminal và chạy lệnh `pip install scipy pandas matplotlib numpy`.
   *   Khởi chạy VS Code hoặc Jupyter Notebook để phân tích.

3. **Làm sạch file dữ liệu (Data Cleaning)**:
   *   Mở file CSV bằng Excel/Notepad. Nếu thấy có các hàng bị "rác" (do lỏng dây I2C trong lúc bay tạo ký tự lạ), hãy xoá các hàng đó đi trước khi nạp vào Python. Đảm bảo dữ liệu chỉ có dạng số.

4. **Chạy Script Phân Tích / Run Analysis Script**:
   *   Thay đổi tên `csv_file` trong script thành tên file thật của bạn (VD: `'flight.csv'`).
   *   Chạy code. Terminal sẽ in ra Bảng Báo Cáo. Đối chiếu số Apogee thực tế với số Apogee mô phỏng trên OpenRocket.
   
5. **Cập nhật Thiết Kế / Iterate Design**:
   *   Nếu Hệ số cản thực tế (Estimated Cd) là 0.75, nhưng trong OpenRocket bạn đang để 0.4, hãy quay lại OpenRocket và điều chỉnh độ bóng bề mặt hoặc sửa kích thước cánh. Thiết kế lại chuyến bay mô phỏng và chuẩn bị cho lần phóng V2 (Phiên bản 2).

---

## 6. ⚠️ Cảnh Báo An Toàn / Safety Warnings

*   **Tĩnh điện và thẻ nhớ (Static discharge):** Khi tháo thẻ SD ở thực địa (sa mạc, bãi cỏ khô), tĩnh điện từ tay bạn có thể làm hỏng thẻ SD hoặc vi điều khiển. Hãy chạm tay vào một vật kim loại nối đất trước khi thao tác.
    *Static electricity can corrupt the SD card or fry the MCU. Ground yourself before touching the avionics bay.*
*   **Không bao giờ bay lại tên lửa hỏng (Never fly damaged rockets):** Phân tích dữ liệu là để cải tiến cho tên lửa tiếp theo. Đừng tái sử dụng một vỏ tên lửa đã nứt nẻ, gãy cánh, hoặc bung dù lỗi. Tính toàn vẹn cấu trúc (structural integrity) bị suy giảm sẽ gây thảm hoạ ở vận tốc cao.

---

## 7. Câu Hỏi Thảo Luận / Discussion Questions

1. Tại sao ta không thể dùng trực tiếp phương trình `v = d(alt)/dt` cho dữ liệu thô mà phải đi qua bộ lọc Savitzky-Golay?
   *Why can't we use simple differentiation `v = d(alt)/dt` on raw data, but must use a Savitzky-Golay filter instead?*
2. Giai đoạn trớn (Coast Phase) là lúc tốt nhất để tính hệ số cản $C_d$. Tại sao ta không tính $C_d$ lúc động cơ đang hoạt động (Boost Phase)?
   *Why is the Coast Phase the best time to calculate the drag coefficient $C_d$? Why not during the Boost Phase?*
3. Nếu đồ thị Gia tốc đo bằng IMU lệch (cao hơn) 0.1G so với Gia tốc tính từ đạo hàm Độ cao, nguyên nhân vật lý/phần cứng là gì?
   *If the IMU acceleration plot is consistently 0.1G higher than the derivative of altitude, what is the hardware/physical cause?*
4. Đồ thị "Derived Velocity" (Vận tốc nội suy) cắt trục 0 (chuyển từ âm sang dương) chính xác tại điểm nào của quỹ đạo?
   *At which exact point in the trajectory does the "Derived Velocity" cross the zero axis (from positive to negative)?*
5. Sự cố đứt cáp I2C giữa chừng sẽ ảnh hưởng tới dữ liệu ra sao, và thư viện Pandas xử lý file bị lỗi như thế nào?
   *How would a mid-flight I2C wire break affect the data, and how does Pandas handle corrupted files?*

---

## 8. Bài Về Nhà / Homework

1. **Hiệu chỉnh bộ lọc / Filter Tuning:**
   *   Sửa `window_length=15` thành `window_length=3` (rất ngắn) trong hàm `savgol_filter`.
   *   Chạy lại script và quan sát đồ thị Vận tốc (Velocity) và Gia tốc (Accel). Chụp lại sự khác biệt của "Nhiễu" so với lúc để bằng 15. Nộp hình ảnh so sánh và nhận xét.

2. **Inverse Simulation (Tính $C_d$ Nâng Cao):**
   *   Nếu một chuyến bay có $m_{dry} = 200g$, và tại thời điểm $t = 3s$ (Coast Phase), vận tốc là $v = 40m/s$, gia tốc đo được là $a = -15 m/s^2$.
   *   Sử dụng công thức trong mục 3.2 để tính hệ số $C_d$ bằng tay (bằng máy tính bỏ túi). (Giả sử $A = 0.001 m^2$ và $\rho = 1.225$). Ghi rõ từng bước giải.

---

## 9. Tiêu Chí Đánh Giá / Assessment Rubric

| Tiêu chí / Criteria | Xuất sắc (9-10đ) / Excellent | Đạt (7-8đ) / Proficient | Cần cố gắng (<7đ) / Needs Improvement |
| --- | --- | --- | --- |
| **Kiến thức Tín Hiệu (Signal Processing)** | Hiểu và giải thích được cơ chế làm mượt của Savitzky-Golay, phân biệt được với trung bình động (MA). | Có chạy filter nhưng chưa giải thích được tham số window_length. | Không hiểu lý do tại sao phải lọc nhiễu trước khi đạo hàm. |
| **Tính toán Khí động học (Aero Math)** | Giải thích phương trình Inverse dynamics, tính $C_d$ bài tập về nhà chính xác tuyệt đối. | Tính đúng hệ số $C_d$ bài tập về nhà nhưng trình bày thiếu các bước. | Tính sai hoặc không làm bài tính tay $C_d$. |
| **Thực hành Code (Python Execution)** | Thay đổi thông số bộ lọc, vẽ được hai đồ thị so sánh nhiễu và làm mượt rõ ràng. | Chạy thành công nhưng quên nộp ảnh màn hình so sánh. | Lỗi cú pháp khi thay đổi hàm savgol_filter. |
| **Phân tích lỗi (Failure Analysis)** | Chỉ ra được các lỗi hệ thống (bias) của cảm biến khi so sánh 2 đồ thị gia tốc. | Quan sát được hai đồ thị gia tốc khác nhau nhưng giải thích chưa sắc sảo. | Cho rằng cảm biến IMU là đúng tuyệt đối, không quan tâm sai số. |

---
*Tài liệu nội bộ khoá học Rocket Engine & Model Rocketry. Vui lòng không phân phối khi chưa có sự cho phép.*
*Internal course material for Rocket Engine & Model Rocketry. Please do not distribute without permission.*

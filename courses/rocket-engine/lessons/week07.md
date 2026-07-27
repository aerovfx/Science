# Tuần 7: OpenRocket — Thiết Kế & Mô Phỏng / Week 7: OpenRocket — Design & Simulation

## 1. Mục Tiêu / Objectives

Trong tuần này, sinh viên sẽ làm quen với OpenRocket - phần mềm mã nguồn mở phổ biến nhất dùng để thiết kế và mô phỏng tên lửa mô hình. Bên cạnh việc sử dụng phần mềm, chúng ta cũng sẽ học cách trích xuất dữ liệu mô phỏng từ OpenRocket và phân tích nâng cao bằng Python.

In this week, students will get familiar with OpenRocket - the most popular open-source software used for designing and simulating model rockets. Besides using the software, we will also learn how to extract simulation data from OpenRocket and perform advanced analysis using Python.

### Mục tiêu cụ thể / Specific objectives:
1. **Thiết kế CAD tên lửa / Rocket CAD Design**: Cấu trúc các thành phần cơ bản: Nosecone (chóp mũi), Body tube (thân), Fins (cánh), Motor mount (giá đỡ động cơ) và hệ thống dù (Recovery).
2. **Khái niệm ổn định / Stability concept**: Hiểu và tính toán Trọng tâm (CG - Center of Gravity) và Tâm áp lực (CP - Center of Pressure), Biên độ ổn định (Stability Margin).
3. **Mô phỏng 6DOF / 6DOF Simulation**: Chạy mô phỏng tính đến ảnh hưởng của gió chéo (crosswind) và phóng ngoài góc thẳng đứng (off-vertical launch).
4. **Phân tích dữ liệu bằng Python / Python Data Analysis**: Xuất file CSV từ OpenRocket và viết script Python để xử lý, vẽ đồ thị.

---

## 2. Phần Mềm & Công Cụ / Software & Tools

| Công cụ / Tool | Phiên bản / Version | Chức năng / Function | Link tải / Download Link |
| --- | --- | --- | --- |
| **OpenRocket** | 22.02+ | Thiết kế & Mô phỏng / Design & Sim | [openrocket.info](https://openrocket.info/) |
| **Java JRE** | 11+ | Nền tảng chạy OpenRocket / Runtime | [adoptium.net](https://adoptium.net/) |
| **ThrustCurve** | Web | Cơ sở dữ liệu động cơ / Motor DB | [thrustcurve.org](https://www.thrustcurve.org/) |
| **Python** | 3.9+ | Xử lý dữ liệu / Data Processing | [python.org](https://www.python.org/) |
| **Pandas** | 1.3+ | Phân tích dữ liệu bảng / Data analysis | `pip install pandas` |

---

## 3. Lý Thuyết / Theory

### 3.1 Khí Động Học & Sự Ổn Định (Aerodynamics & Stability)

Để một tên lửa bay thẳng (ổn định) mà không lộn vòng trên không, nó phải thoả mãn điều kiện về biên độ ổn định (Stability Margin). Có hai điểm quan trọng cần xác định:
To fly straight (stably) without tumbling in the air, a rocket must satisfy the stability margin condition. There are two critical points to determine:

1.  **Trọng tâm (CG - Center of Gravity):**
    Đây là điểm tập trung toàn bộ khối lượng của tên lửa.
    $$ CG = \frac{\sum m_i x_i}{\sum m_i} $$
    (Với $m_i$ là khối lượng thành phần thứ $i$, $x_i$ là khoảng cách từ mũi tên lửa đến CG của thành phần đó).
    *Khối lượng nhiên liệu giảm dần trong lúc bay, nên CG sẽ dịch chuyển dần lên trên.*

2.  **Tâm áp lực (CP - Center of Pressure):**
    Đây là điểm tập trung toàn bộ các lực khí động học (lift và drag) tác dụng lên tên lửa. CP được tính bằng phương pháp Barrowman (Barrowman Equations).
    $$ CP = \frac{\sum (C_N)_\alpha \cdot X_i}{(C_N)_{total}} $$
    (Với $(C_N)_\alpha$ là hệ số lực pháp tuyến đạo hàm theo góc tấn, $X_i$ là vị trí của thành phần).

### 3.2 Biên Độ Ổn Định (Stability Margin)

Biên độ ổn định (đơn vị: calibers - đường kính thân tên lửa lớn nhất) được định nghĩa là:
$$ Calibers = \frac{CP - CG}{D} $$
Trong đó $D$ là đường kính ống thân ngoài (Body Tube diameter).

**Quy tắc vàng (Golden Rule):**
*   **Bay an toàn (Safe flight):** $1.0 < Calibers < 2.0$
*   **Quá ổn định (Over-stable):** $Calibers > 2.0$. Tên lửa rất nhạy cảm với gió ngang (Weathercocking - cắm đầu vào gió).
*   **Không ổn định (Unstable):** $Calibers < 1.0$. Tên lửa có xu hướng lộn vòng (Tumbling), cực kỳ nguy hiểm!

### 3.3 Phương Trình Barrowman Rút Gọn (Simplified Barrowman Equations)

Đối với mũi tên lửa hình nón (Conical nosecone):
$$ (C_N)_{nose} = 2 $$
Vị trí CP của mũi: $X_{nose} = 0.666 \cdot L_{nose}$

Đối với cánh hình thang (Trapezoidal fins):
$$ (C_N)_{fins} = \left[1 + \frac{R}{S + R}\right] \cdot \left[ \frac{4 \cdot N \cdot (S / D)^2}{1 + \sqrt{1 + (2 L_m / (C_R + C_T))^2}} \right] $$
(Trong đó $N$ là số cánh, $R$ là bán kính thân, $S$ là sải cánh - span, $C_R$ là root chord, $C_T$ là tip chord, $L_m$ là mid-chord sweep length).

### 3.4 Mô Phỏng 6 Bậc Tự Do (6 Degrees of Freedom - 6DOF)

Mô phỏng ở tuần 6 là mô phỏng 1D. OpenRocket dùng mô hình 6DOF:
- 3 toạ độ tịnh tiến: X, Y, Z (Translation)
- 3 toạ độ xoay: Pitch, Yaw, Roll (Rotation)

OpenRocket cũng tính đến gió (Wind profile) và tác động xoay do lệch cánh hoặc do nhiễu loạn khí động học.

---

## 4. Code Python / Python Code

Sau khi thiết kế và chạy mô phỏng trên OpenRocket, bạn có thể "Export data" (Xuất dữ liệu) sang file `.csv`. Đoạn code Python dưới đây dùng để phân tích file đó và vẽ các biểu đồ phân tích chuyên sâu (ví dụ: Biểu đồ pha độ cao - vận tốc).
*After designing and simulating in OpenRocket, you can "Export data" to a `.csv` file. The Python code below analyzes that file and plots advanced charts (e.g., Altitude vs Velocity phase portrait).*

### Mã nguồn `analyze_openrocket.py` / Source code `analyze_openrocket.py`
```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import os

# ==================================================
# CLASS PHÂN TÍCH DỮ LIỆU OPENROCKET / OPENROCKET DATA ANALYZER
# ==================================================
class OpenRocketAnalyzer:
    def __init__(self, csv_file):
        """
        Khởi tạo và tải dữ liệu từ file CSV của OpenRocket
        Lưu ý: OpenRocket CSV thường có các dòng header giải thích.
        Cần bỏ qua các dòng bắt đầu bằng dấu '#' khi đọc bằng pandas.
        """
        self.filename = csv_file
        
        if not os.path.exists(csv_file):
            raise FileNotFoundError(f"Không tìm thấy file: {csv_file}")
            
        print(f"Loading data from {csv_file}...")
        # Đọc dữ liệu, bỏ qua các dòng comment có '#'
        self.df = pd.read_csv(csv_file, comment='#', names=[
            'Time', 'Altitude', 'Vertical_Velocity', 'Vertical_Acceleration',
            'Total_Velocity', 'Total_Acceleration', 'Mach_Number',
            'CG', 'CP', 'Stability_Margin', 'Mass', 'Thrust', 'Drag'
        ], skipinitialspace=True)
        
        # Chuyển đổi sang numpy arrays để tính toán nhanh hơn
        self.t = self.df['Time'].values
        self.alt = self.df['Altitude'].values
        self.v_vert = self.df['Vertical_Velocity'].values
        self.a_vert = self.df['Vertical_Acceleration'].values
        self.mach = self.df['Mach_Number'].values
        self.margin = self.df['Stability_Margin'].values
        self.thrust = self.df['Thrust'].values
        self.drag = self.df['Drag'].values
        
        self._analyze_events()
        
    def _analyze_events(self):
        """Phân tích các sự kiện bay (Flight events)"""
        # 1. Điểm cực đại / Peak values
        self.apogee_idx = np.argmax(self.alt)
        self.apogee = self.alt[self.apogee_idx]
        self.t_apogee = self.t[self.apogee_idx]
        
        self.max_v_idx = np.argmax(self.v_vert)
        self.max_v = self.v_vert[self.max_v_idx]
        self.max_mach = np.max(self.mach)
        
        # 2. Burnout (Động cơ tắt) / Motor Burnout
        # Tìm điểm đầu tiên lực đẩy giảm về 0 sau khi bay
        burnout_indices = np.where((self.thrust < 0.01) & (self.t > 0.1))[0]
        if len(burnout_indices) > 0:
            self.burnout_idx = burnout_indices[0]
            self.t_burnout = self.t[self.burnout_idx]
            self.alt_burnout = self.alt[self.burnout_idx]
        else:
            self.burnout_idx = 0
            self.t_burnout = 0
            self.alt_burnout = 0
            
    def print_summary(self):
        """In báo cáo tóm tắt / Print summary report"""
        print("\n" + "="*50)
        print("BÁO CÁO PHÂN TÍCH BAY OPENROCKET / OPENROCKET FLIGHT REPORT")
        print("="*50)
        print(f"🎯 Độ cao cực đại (Apogee):       {self.apogee:.2f} m")
        print(f"⏱️  Thời gian lên đỉnh (T-Apogee):  {self.t_apogee:.2f} s")
        print(f"🔥 Vận tốc tối đa (Max Velocity):   {self.max_v:.2f} m/s (Mach {self.max_mach:.2f})")
        print(f"🏁 Động cơ tắt lúc (Burnout time):  {self.t_burnout:.2f} s")
        print(f"📏 Độ cao khi tắt (Burnout Alt):    {self.alt_burnout:.2f} m")
        print(f"⚖️  Biên độ ổn định TB (Avg Margin): {np.mean(self.margin[:self.burnout_idx]):.2f} cal")
        print("="*50 + "\n")
        
    def plot_all(self):
        """Vẽ toàn bộ các biểu đồ phân tích / Plot all analytical charts"""
        fig, axes = plt.subplots(2, 2, figsize=(15, 10))
        fig.suptitle('Phân Tích Dữ Liệu Chuyến Bay OpenRocket / OpenRocket Flight Data Analysis', fontsize=16)
        
        # 1. Quỹ đạo và Vận tốc (Trục y kép) / Altitude & Velocity (Dual y-axis)
        ax1 = axes[0,0]
        color1 = 'tab:blue'
        ax1.set_xlabel('Thời gian / Time (s)')
        ax1.set_ylabel('Độ cao / Altitude (m)', color=color1)
        ax1.plot(self.t, self.alt, color=color1, linewidth=2, label='Altitude')
        ax1.tick_params(axis='y', labelcolor=color1)
        ax1.axvline(self.t_burnout, color='gray', linestyle='--', alpha=0.5, label='Burnout')
        
        ax2 = ax1.twinx()
        color2 = 'tab:red'
        ax2.set_ylabel('Vận tốc / Vertical Velocity (m/s)', color=color2)
        ax2.plot(self.t, self.v_vert, color=color2, linewidth=2, label='Velocity')
        ax2.tick_params(axis='y', labelcolor=color2)
        
        ax1.set_title('Quỹ Đạo & Vận Tốc / Altitude & Velocity')
        
        # 2. Lực Đẩy & Lực Cản / Thrust vs Drag
        ax3 = axes[0,1]
        ax3.plot(self.t, self.thrust, 'orange', linewidth=2, label='Lực đẩy / Thrust (N)')
        # Force Drag to be positive for comparison
        ax3.plot(self.t, np.abs(self.drag), 'purple', linewidth=2, label='Lực cản / Drag (N)')
        ax3.set_xlim(0, self.t_apogee)
        ax3.set_xlabel('Thời gian / Time (s)')
        ax3.set_ylabel('Lực / Force (N)')
        ax3.set_title('So Sánh Lực Đẩy & Lực Cản / Thrust vs Drag')
        ax3.legend()
        ax3.grid(True, linestyle=':', alpha=0.6)
        
        # 3. Phase Portrait: Vận tốc vs Độ cao / Phase Portrait: Velocity vs Altitude
        ax4 = axes[1,0]
        ax4.plot(self.alt, self.v_vert, 'darkgreen', linewidth=2)
        ax4.axhline(0, color='k', linestyle='--', alpha=0.5)
        ax4.scatter([0], [0], color='blue', zorder=5, label='Launch (0,0)')
        ax4.scatter([self.apogee], [0], color='red', zorder=5, label=f'Apogee ({self.apogee:.1f}m)')
        ax4.set_xlabel('Độ cao / Altitude (m)')
        ax4.set_ylabel('Vận tốc / Velocity (m/s)')
        ax4.set_title('Biểu Đồ Pha / Phase Portrait (Velocity vs Altitude)')
        ax4.legend()
        ax4.grid(True, linestyle=':', alpha=0.6)
        
        # 4. Biên độ Ổn định / Stability Margin
        ax5 = axes[1,1]
        ax5.plot(self.t, self.margin, 'brown', linewidth=2)
        ax5.axhspan(1.0, 2.0, alpha=0.2, color='green', label='An Toàn / Safe Zone (1.0-2.0)')
        ax5.axhspan(0, 1.0, alpha=0.2, color='red', label='Nguy Hiểm / Unstable (<1.0)')
        ax5.set_xlim(0, self.t_burnout * 2) # Chỉ quan tâm lúc đầu
        ax5.set_ylim(0, max(3, np.max(self.margin)+1))
        ax5.set_xlabel('Thời gian / Time (s)')
        ax5.set_ylabel('Biên độ ổn định / Stability Margin (Calibers)')
        ax5.set_title('Biến Thiên Ổn Định / Stability Margin Evolution')
        ax5.legend()
        ax5.grid(True, linestyle=':', alpha=0.6)
        
        plt.tight_layout()
        plt.subplots_adjust(top=0.92)
        plt.savefig('openrocket_analysis.png', dpi=150)
        print("Đã lưu biểu đồ vào / Saved chart to: openrocket_analysis.png")
        plt.show()

# ==================================================
# THỰC THI / EXECUTION
# ==================================================
if __name__ == "__main__":
    # GIẢ LẬP TẠO FILE CSV TỪ OPENROCKET / MOCKING OPENROCKET CSV FOR TESTING
    # Trong thực tế, bạn sẽ lấy file này từ nút "Export" của OpenRocket
    mock_csv = "OpenRocket_Export_Example.csv"
    if not os.path.exists(mock_csv):
        print(f"Creating mock OpenRocket CSV file: {mock_csv}")
        with open(mock_csv, 'w') as f:
            f.write("# Exported from OpenRocket\n")
            f.write("# Time, Altitude, Vertical_Velocity, Vertical_Acceleration, Total_Velocity, Total_Acceleration, Mach_Number, CG, CP, Stability_Margin, Mass, Thrust, Drag\n")
            t_vals = np.linspace(0, 10, 100)
            for t in t_vals:
                alt = 100 * t - 4.9 * t**2 # Parabola đơn giản
                v = 100 - 9.8 * t
                a = -9.8
                mach = abs(v) / 340.0
                thrust = 20.0 if t < 2.0 else 0.0
                drag = -0.5 * 1.225 * v**2 * 0.5 * 0.005 * np.sign(v)
                margin = 1.5 + (0.5 * t if t < 2.0 else 1.0)
                mass = 0.1
                cg = 0.3
                cp = 0.4
                f.write(f"{t},{alt},{v},{a},{abs(v)},{abs(a)},{mach},{cg},{cp},{margin},{mass},{thrust},{drag}\n")
    
    # Phân tích file CSV
    try:
        analyzer = OpenRocketAnalyzer(mock_csv)
        analyzer.print_summary()
        analyzer.plot_all()
    except Exception as e:
        print(f"Lỗi phân tích / Analysis error: {e}")
```

---

## 5. Hướng Dẫn Từng Bước / Step-by-Step Instructions

1. **Cài đặt OpenRocket / Install OpenRocket**:
   *   Tải Java (JRE) mới nhất và cài đặt (nếu máy chưa có Java).
   *   Tải file `.jar` của OpenRocket (bản 22.02).
   *   Mở file bằng cách click đúp hoặc chạy lệnh `java -jar OpenRocket-22.02.jar` trong terminal.

2. **Thiết kế tên lửa cơ bản / Design a basic rocket**:
   *   Bấm vào **Nose cone** (Mũi) -> Chọn hình Ogive, dài 15cm.
   *   Bấm vào thân (Body tube) -> Thêm một ống thân, dài 40cm, đường kính ngoài 3cm.
   *   Thêm **Trapezoidal fins** (Cánh hình thang) vào thân (Body tube).
   *   Thêm **Inner tube** (Giá gắn động cơ) vào đuôi thân.
   *   Thêm **Engine block** và **Parachute** (Dù).

3. **Chọn động cơ / Select Motor**:
   *   Chuyển sang tab **Motors & Configurations**.
   *   Bấm **New configuration**, chọn ống gắn động cơ (Inner tube).
   *   Bấm **Select motor**, tìm `Estes C6`, chọn delay `5` (C6-5).

4. **Chạy mô phỏng / Run Simulation**:
   *   Chuyển sang tab **Flight simulations**.
   *   Bấm **Run simulations**. Quan sát kết quả tóm tắt: Độ cao (Apogee), Vận tốc (Max vel).
   *   Đảm bảo biểu tượng chấm đỏ (CP) và xanh-đen (CG) ở tab thiết kế cho ra kết quả Calibers > 1.5.

5. **Trích xuất dữ liệu & Phân tích / Export Data & Analyze**:
   *   Bấm **Edit simulation** -> Chuyển sang tab **Export data**.
   *   Đánh dấu chọn tất cả các thông số như trong code Python yêu cầu (Time, Altitude, Velocity, Thrust, Drag, v.v.).
   *   Lưu thành file `flight_data.csv`.
   *   Bỏ file vào chung thư mục với script Python `analyze_openrocket.py` và chạy script.

---

## 6. ⚠️ Cảnh Báo An Toàn / Safety Warnings

*   **Weathercocking (Cắm đầu vào gió):** Nếu biên độ ổn định (Calibers) lớn hơn 2.5, tên lửa có thể rẽ mạnh về phía hướng có gió và bay ngang như một viên đạn bay song song mặt đất (ballistic trajectory). Luôn giữ calibers ở mức 1.5 - 2.0.
    *If Calibers > 2.5, the rocket may aggressively turn into the wind (weathercocking) and fly horizontally. Keep calibers between 1.5 - 2.0.*
*   **Dán cánh không thẳng / Misaligned fins:** OpenRocket giả định bạn dán cánh thẳng tuyệt đối 100%. Nếu cánh bị lệch, tên lửa sẽ quay tròn quanh trục (spin) làm tăng lực cản và giảm mạnh độ cao.
    *OpenRocket assumes perfectly aligned fins. Misaligned fins cause spin, increasing drag and drastically reducing apogee.*

---

## 7. Câu Hỏi Thảo Luận / Discussion Questions

1. Điều gì sẽ xảy ra nếu Trọng tâm (CG) nằm phía sau Tâm áp lực (CP) (tức là hướng về phía đuôi)?
   *What happens if the Center of Gravity (CG) is located behind the Center of Pressure (CP) (towards the tail)?*
2. Tại sao khối lượng nhiên liệu thay đổi trong quá trình cháy lại ảnh hưởng đến sự ổn định (Stability Margin)?
   *Why does the changing propellant mass during motor burn affect the Stability Margin?*
3. Nếu tên lửa của bạn quá dài, làm cách nào để tăng độ ổn định mà không thêm cánh? (Gợi ý: Trọng tâm CG).
   *If your rocket is too long, how can you increase stability without adding fins? (Hint: CG).*
4. Trong OpenRocket, thay đổi hình dáng mũi tên lửa (từ Ogive sang Conical) ảnh hưởng như thế nào đến Tâm áp lực (CP)?
   *In OpenRocket, how does changing the nose cone shape (from Ogive to Conical) affect the CP?*
5. Biểu đồ Pha (Phase Portrait - Velocity vs Altitude) do script Python vẽ cung cấp thông tin gì trực quan hơn biểu đồ thông thường?
   *What information does the Phase Portrait (Velocity vs Altitude) plotted by the Python script provide that is more intuitive than normal plots?*

---

## 8. Bài Về Nhà / Homework

1. **Thiết kế tối ưu cánh / Fin Optimization Design:**
   *   Mở OpenRocket. Thiết kế một tên lửa dùng động cơ Estes D12-5.
   *   Yêu cầu bắt buộc: **Apogee > 300m** và **Stability Margin đúng bằng 1.5**.
   *   Bạn phải tinh chỉnh kích thước cánh (Span, Root chord, Tip chord) để đạt được chính xác con số này.
   *   Chụp màn hình thiết kế 3D và kết quả mô phỏng.

2. **Chạy phân tích Python / Run Python Analysis:**
   *   Xuất (Export) dữ liệu mô phỏng từ bài tập 1 ra file `my_rocket_data.csv`.
   *   Chạy đoạn mã `analyze_openrocket.py` cho file CSV của bạn.
   *   Chụp lại biểu đồ tổng hợp (có 4 đồ thị con) nộp kèm mã nguồn.

---

## 9. Tiêu Chí Đánh Giá / Assessment Rubric

| Tiêu chí / Criteria | Xuất sắc (9-10đ) / Excellent | Đạt (7-8đ) / Proficient | Cần cố gắng (<7đ) / Needs Improvement |
| --- | --- | --- | --- |
| **Thiết kế OpenRocket (CAD)** | Thiết kế tỉ mỉ, đầy đủ linh kiện, chọn đúng vật liệu (balsa, carton). | Thiết kế đủ các bộ phận chính nhưng chưa gán vật liệu. | Thiếu các bộ phận quan trọng như giá động cơ, dù. |
| **Độ ổn định / Stability** | Calibers đạt chính xác 1.5, giải thích rõ cách tinh chỉnh cánh. | Calibers trong mức an toàn (1.0-2.0) nhưng chưa tối ưu Apogee. | Tên lửa không ổn định (Calibers < 1.0). |
| **Phân tích dữ liệu / Data** | Script Python chạy thành công với file CSV thực tế, giải thích đồ thị tốt. | Chạy được script mô phỏng mặc định, chưa biết cách import file mới. | Lỗi Python do chưa cài đủ thư viện hoặc không đọc được CSV. |
| **Tính sáng tạo / Creativity** | Ngoại hình tên lửa đẹp mắt (Sơn màu, decals), hình dạng cánh độc đáo. | Hình dạng cánh cơ bản (thang/vuông), màu sắc mặc định. | Không có sự chăm chút về mặt thẩm mỹ. |

---
*Tài liệu nội bộ khoá học Rocket Engine & Model Rocketry. Vui lòng không phân phối khi chưa có sự cho phép.*
*Internal course material for Rocket Engine & Model Rocketry. Please do not distribute without permission.*

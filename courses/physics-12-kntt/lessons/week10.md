# Tuần 10: Tổng Ôn Tập THPT, Hệ Thống Hóa & Capstone Project / Week 10: High School Physics Synthesis & Capstone STEM Project

---

## 1. Mục tiêu bài học (Learning Objectives)

### 1.1. Về kiến thức (Knowledge)
- **Tiếng Việt:**
  - Hệ thống hóa toàn bộ kiến thức Vật lí THPT (Lớp 10, 11, 12).
  - Nắm vững các công thức cốt lõi và chiến lược giải bài tập cho kỳ thi Tốt nghiệp THPT.
  - Vận dụng kiến thức tổng hợp để hoàn thiện và bảo vệ Capstone STEM Project.
  - Hiểu rõ ứng dụng của Vật lí trong các ngành nghề và định hướng nghề nghiệp tương lai.
- **English:**
  - Systematize all high school Physics knowledge (Grades 10, 11, 12).
  - Master core formulas and problem-solving strategies for the High School Graduation Exam.
  - Apply comprehensive knowledge to complete and defend the Capstone STEM Project.
  - Understand Physics applications in various fields and future career orientations.

### 1.2. Về kỹ năng (Skills)
- **Tiếng Việt:**
  - Kỹ năng tổng hợp, phân tích, và lập sơ đồ tư duy (mind mapping).
  - Kỹ năng giải bài tập trắc nghiệm nhanh, sử dụng máy tính cầm tay hiệu quả.
  - Kỹ năng làm việc nhóm, thuyết trình, và phản biện trong khoa học.
  - Kỹ năng lập trình Python ứng dụng vào mô phỏng Vật lí.
- **English:**
  - Skills in synthesizing, analyzing, and mind mapping.
  - Fast multiple-choice problem-solving skills, effective use of scientific calculators.
  - Teamwork, presentation, and scientific critical thinking skills.
  - Python programming skills applied to Physics simulations.

---

## 2. Thiết bị thực hành và Vật tư (Lab Equipment & Materials)

Bảng dưới đây liệt kê các vật tư cần thiết cho buổi triển lãm Capstone Project.
*(The table below lists the necessary materials for the Capstone Project exhibition.)*

| STT (No.) | Tên thiết bị (Equipment Name) | Số lượng (Qty) | Đơn giá ước tính (Est. Price VND) | Ghi chú (Notes) |
|---|---|---|---|---|
| 1 | Bảng mạch Arduino Uno R3 (Arduino Uno R3 Board) | 5 | 150,000 | Dành cho các dự án tự động hóa |
| 2 | Cảm biến nhiệt độ, áp suất (Temperature, Pressure Sensors) | 5 | 80,000 | Cho Track 1 (Thermal Engine) |
| 3 | Nam châm Neodymium siêu cường (Super strong Neodymium magnets) | 10 | 50,000 | Cho Track 2 (Generator) |
| 4 | Cuộn dây đồng tráng men (Enameled copper wire rolls) | 5 | 120,000 | Cho Track 2 (Generator) |
| 5 | Linh kiện điện tử cơ bản (Basic electronic components: resistors, LEDs, breadboards) | 10 sets | 200,000 | Cho tất cả các Tracks |
| 6 | Động cơ DC nhỏ (Small DC Motors) | 10 | 25,000 | Cho mô hình trực quan |
| 7 | Máy tính xách tay có cài sẵn Python (Laptop with Python installed) | 1/nhóm | 0 | Học sinh tự chuẩn bị |
| 8 | Vật liệu mô hình (Bìa carton, keo nến, kìm, kéo) (Modeling materials) | 5 sets | 100,000 | Xây dựng khung mô hình |
| 9 | Đồng hồ vạn năng (Multimeter) | 5 | 250,000 | Đo đạc thông số điện |
| 10 | Bộ dụng cụ bảo hộ (Kính, găng tay) (Safety gear: Goggles, gloves) | 15 | 50,000 | Đảm bảo an toàn |

**Tổng chi phí dự kiến cho một lớp 5 nhóm (Estimated total cost for a class of 5 groups):** ~ 5,000,000 VND

---

## 3. Lý thuyết chuyên sâu & Tổng hợp (Deep Theory & Summary)

### 3.1. Sơ đồ tư duy Vật lí THPT (Comprehensive Mind Map)

Dưới đây là cấu trúc sơ đồ tư duy tổng quát cho 3 năm học.
*(Below is the generalized mind map structure for the 3 years of study.)*

```ascii
                                +---------------------------+
                                | VẬT LÍ THPT (PHYSICS)     |
                                +-------------+-------------+
                                              |
          +-----------------------------------+-----------------------------------+
          |                                   |                                   |
+---------+---------+               +---------+---------+               +---------+---------+
|     LỚP 10        |               |     LỚP 11        |               |     LỚP 12        |
|  (GRADE 10)       |               |  (GRADE 11)       |               |  (GRADE 12)       |
+---------+---------+               +---------+---------+               +---------+---------+
          |                                   |                                   |
  +-------+-------+                   +-------+-------+                   +-------+-------+
  | Động học      |                   | Điện tích,    |                   | Dao động cơ   |
  | (Kinematics)  |                   | Điện trường   |                   | (Mechanical   |
  |               |                   | (Electrostat.)|                   | Oscillations) |
  +-------+-------+                   +-------+-------+                   +-------+-------+
          |                                   |                                   |
  +-------+-------+                   +-------+-------+                   +-------+-------+
  | Động lực học  |                   | Dòng điện     |                   | Sóng cơ học   |
  | (Dynamics)    |                   | không đổi     |                   | (Mechanical   |
  |               |                   | (DC Circuits) |                   | Waves)        |
  +-------+-------+                   +-------+-------+                   +-------+-------+
          |                                   |                                   |
  +-------+-------+                   +-------+-------+                   +-------+-------+
  | Năng lượng &  |                   | Từ trường     |                   | Dòng điện     |
  | Động lượng    |                   | (Magnetic     |                   | xoay chiều    |
  | (Energy &     |                   | Field)        |                   | (AC Circuits) |
  | Momentum)     |                   +-------+-------+                   +-------+-------+
  +-------+-------+                           |                                   |
          |                           +-------+-------+                   +-------+-------+
  +-------+-------+                   | Cảm ứng từ    |                   | Sóng ĐT &     |
  | Vật lí nhiệt &|                   | (Electromag.  |                   | Quang Hình    |
  | Khí lý tưởng  |                   | Induction)    |                   | (EM Waves &   |
  | (Thermal Phys)|                   +-------+-------+                   | Optics)       |
  +---------------+                                                       +-------+-------+
                                                                                  |
                                                                          +-------+-------+
                                                                          | Vật lí lượng  |
                                                                          | tử & Hạt nhân |
                                                                          | (Quantum &    |
                                                                          | Nuclear)      |
                                                                          +---------------+
```

### 3.2. Bảng tóm tắt công thức chủ chốt (Master Formula Summary)

**Cơ học (Mechanics):**
- Định luật II Newton: $\vec{F} = m\vec{a}$
- Bảo toàn động lượng: $\sum \vec{p}_{truoc} = \sum \vec{p}_{sau}$
- Bảo toàn cơ năng: $W = W_d + W_t = \frac{1}{2}mv^2 + mgh = \text{const}$ (trong trường trọng lực, không có lực cản)
- Dao động điều hòa: $x = A \cos(\omega t + \varphi)$, $\omega = \sqrt{\frac{k}{m}}$ (con lắc lò xo), $\omega = \sqrt{\frac{g}{l}}$ (con lắc đơn)

**Điện - Từ trường (Electromagnetism):**
- Định luật Coulomb: $F = k \frac{|q_1 q_2|}{\epsilon r^2}$
- Lực từ (Lorentz): $F = qvB \sin(\alpha)$
- Lực từ (Ampere): $F = BIl \sin(\alpha)$
- Cảm ứng điện từ (Faraday): $e_{cu} = - \frac{\Delta \Phi}{\Delta t}$
- Tổng trở mạch RLC: $Z = \sqrt{R^2 + (Z_L - Z_C)^2}$
- Công suất xoay chiều: $P = UI \cos(\varphi)$

**Quang học & Lượng tử (Optics & Quantum):**
- Khúc xạ ánh sáng: $n_1 \sin(i) = n_2 \sin(r)$
- Năng lượng photon: $\varepsilon = hf = \frac{hc}{\lambda}$
- Hệ thức Einstein về quang điện: $hf = A + \frac{1}{2}mv_{max}^2$
- Hệ thức Einstein về năng lượng nghỉ: $E = mc^2$
- Phóng xạ: $N(t) = N_0 e^{-\lambda t} = N_0 2^{-t/T}$

### 3.3. Chiến lược giải đề thi (Exam Problem Solving Strategies)

1.  **Đọc lướt và phân loại (Skim and Categorize):** Đọc lướt toàn bộ đề thi, đánh dấu các câu dễ làm trước (lý thuyết, công thức cơ bản).
2.  **Tóm tắt đề bài (Summarize the Problem):** Ghi nhanh các thông số đã cho và đại lượng cần tìm. Đổi đơn vị chuẩn (SI).
3.  **Vẽ hình/Sơ đồ (Draw Diagrams):** Rất quan trọng trong Cơ học, Quang hình, và Điện xoay chiều (giản đồ vector).
4.  **Kiểm tra thứ nguyên (Dimensional Analysis):** Dùng để loại trừ các đáp án trắc nghiệm không hợp lý.
5.  **Quản lý thời gian (Time Management):** Không dành quá 3 phút cho một câu khó nếu chưa có hướng giải. Đánh dấu và quay lại sau.

---

## 4. Chi tiết Capstone Project (Capstone Project Details)

Học sinh chọn 1 trong 3 hướng (Tracks) để thực hiện dự án cuối khóa.
*(Students choose 1 of 3 Tracks to implement their final project.)*

### Track 1: Mô phỏng Động cơ Nhiệt - Khí (Thermal-Gas Engine Simulator)
- **Mục tiêu:** Xây dựng mô hình vật lý hoặc phần mềm mô phỏng một chu trình nhiệt động lực học (ví dụ: chu trình Carnot, chu trình Otto).
- **Yêu cầu phần cứng/vật lý:** Thiết kế một xi-lanh - piston đơn giản sử dụng vật liệu tái chế, có gắn cảm biến áp suất và nhiệt độ kết nối Arduino.
- **Yêu cầu phần mềm:** Đọc dữ liệu từ Arduino lên Python, vẽ đồ thị P-V (Áp suất - Thể tích) theo thời gian thực và tính toán hiệu suất.
- **Tiêu chí đánh giá:** Mô hình hoạt động ổn định, đồ thị P-V thể hiện đúng nguyên lý, tính toán hiệu suất sát với lý thuyết.

### Track 2: Máy phát điện Điện từ Tự chế (DIY Electromagnetic Generator)
- **Mục tiêu:** Chế tạo một máy phát điện xoay chiều mini và nghiên cứu sự phụ thuộc của suất điện động vào tốc độ quay.
- **Yêu cầu phần cứng:** Sử dụng nam châm siêu cường, tự quấn cuộn dây, thiết kế trục quay, đo đạc đầu ra bằng đồng hồ vạn năng hoặc Oscilloscope mini.
- **Yêu cầu phần mềm:** Mô phỏng sự biến thiên từ thông và suất điện động cảm ứng bằng Python (vẽ đồ thị hình sin theo các tốc độ góc khác nhau).
- **Tiêu chí đánh giá:** Máy phát sáng được đèn LED, số liệu đo đạc khớp với mô phỏng phần mềm, thiết kế cơ khí chắc chắn.

### Track 3: Mô phỏng Vật lý Y khoa & Hạt nhân (Medical Physics & Nuclear Simulator)
- **Mục tiêu:** Tìm hiểu và mô phỏng nguyên lý của tia X, hoặc sự suy giảm phóng xạ dùng trong điều trị ung thư.
- **Yêu cầu:** Không yêu cầu phần cứng vật lý (do lý do an toàn). Hoàn toàn tập trung vào xây dựng phần mềm (Python/Pygame).
- **Yêu cầu phần mềm:** Mô phỏng quá trình bắn phá electron vào bia kim loại tạo tia X, hoặc mô phỏng trực quan theo nguyên lý Monte Carlo sự phân rã của một đám mây hạt nhân. Tính toán liều lượng bức xạ.
- **Tiêu chí đánh giá:** Giao diện trực quan, đẹp mắt. Giải thích rõ ràng nguyên lý vật lý lượng tử/hạt nhân đằng sau mô phỏng.

---

## 5. Thực hành Lab & Triển lãm (Hands-on Lab & Exhibition)

Buổi học hôm nay dành toàn bộ thời gian để các nhóm hoàn thiện, kiểm tra cuối cùng và bảo vệ dự án (Demo Day).

### 5.1. Quy trình thực hiện (Workflow)
1.  **30 phút đầu:** Các nhóm setup mô hình, chạy thử phần mềm, khắc phục lỗi phút chót.
2.  **60 phút tiếp theo:** Trình bày và Demo (15 phút / nhóm).
    - Thuyết trình về ý tưởng, nguyên lý vật lí.
    - Demo mô hình/phần mềm.
    - Phân tích số liệu và trả lời phản biện (Q&A).
3.  **30 phút cuối:** Giáo viên tổng kết, trao giải thưởng cho các nhóm xuất sắc và định hướng nghề nghiệp.

### 5.2. Cảnh báo an toàn (Safety Warnings)
- **Cảnh báo điện (Electrical Safety):** Khi kiểm tra máy phát điện (Track 2) hoặc sử dụng nguồn điện lưới, tuyệt đối không chạm tay ướt vào mạch. Dùng vôn kế đo trước khi chạm.
- **Cảnh báo nhiệt (Thermal Safety):** Các nhóm Track 1 nếu dùng nguồn nhiệt thực (nến, cồn) phải có khay cách nhiệt và bình chữa cháy mini bên cạnh.
- **Cảnh báo cơ học (Mechanical Safety):** Máy phát điện khi quay ở tốc độ cao cần được cố định chắc chắn, tránh văng nam châm hoặc phụ kiện. Luôn đeo kính bảo hộ.

---

## 6. Mã nguồn mô phỏng (Complete Python Simulation Code)

Dưới đây là một bộ mã nguồn Python sử dụng Tkinter và Matplotlib để tạo ra một **Comprehensive Physics Simulator GUI**. Nó bao gồm các công cụ mô phỏng cho cả 3 Track cơ bản.

Lưu tệp này dưới tên `physics_simulator_suite.py` và chạy bằng lệnh `python physics_simulator_suite.py`.

```python
import tkinter as tk
from tkinter import ttk, messagebox
import numpy as np
import matplotlib.pyplot as plt
from matplotlib.backends.backend_tkagg import FigureCanvasTkAgg
import math

class PhysicsSimulatorSuite:
    def __init__(self, root):
        self.root = root
        self.root.title("High School Physics Simulator Suite (Grade 10-11-12)")
        self.root.geometry("1000x700")

        # Tab Control
        self.tabControl = ttk.Notebook(root)
        
        self.tab1 = ttk.Frame(self.tabControl)
        self.tab2 = ttk.Frame(self.tabControl)
        self.tab3 = ttk.Frame(self.tabControl)
        
        self.tabControl.add(self.tab1, text='Track 1: Gas Thermodynamics')
        self.tabControl.add(self.tab2, text='Track 2: AC Generator')
        self.tabControl.add(self.tab3, text='Track 3: Radioactive Decay')
        self.tabControl.pack(expand=1, fill="both")

        self.setup_track1()
        self.setup_track2()
        self.setup_track3()

    # --- TRACK 1: Thermodynamics (Đẳng nhiệt, Đẳng tích, Đẳng áp) ---
    def setup_track1(self):
        control_frame = ttk.LabelFrame(self.tab1, text="Control Panel")
        control_frame.pack(side=tk.LEFT, fill=tk.Y, padx=10, pady=10)

        ttk.Label(control_frame, text="Initial Volume V1 (m^3):").pack(pady=5)
        self.v1_var = tk.DoubleVar(value=1.0)
        ttk.Entry(control_frame, textvariable=self.v1_var).pack()

        ttk.Label(control_frame, text="Initial Pressure P1 (atm):").pack(pady=5)
        self.p1_var = tk.DoubleVar(value=1.0)
        ttk.Entry(control_frame, textvariable=self.p1_var).pack()
        
        ttk.Label(control_frame, text="Process Type:").pack(pady=5)
        self.process_type = ttk.Combobox(control_frame, values=["Isothermal (T=const)", "Isobaric (P=const)", "Isochoric (V=const)"])
        self.process_type.current(0)
        self.process_type.pack()

        ttk.Button(control_frame, text="Plot P-V Graph", command=self.plot_track1).pack(pady=20)

        self.fig1, self.ax1 = plt.subplots(figsize=(6, 5))
        self.canvas1 = FigureCanvasTkAgg(self.fig1, master=self.tab1)
        self.canvas1.get_tk_widget().pack(side=tk.RIGHT, fill=tk.BOTH, expand=True)

    def plot_track1(self):
        self.ax1.clear()
        v1 = self.v1_var.get()
        p1 = self.p1_var.get()
        process = self.process_type.get()

        if v1 <= 0 or p1 <= 0:
            messagebox.showerror("Error", "Volume and Pressure must be positive.")
            return

        if "Isothermal" in process:
            # P = (P1*V1) / V
            V = np.linspace(v1*0.5, v1*2, 100)
            P = (p1 * v1) / V
            self.ax1.plot(V, P, 'b-', label='Isothermal')
            self.ax1.set_title("Isothermal Process (Boyle-Mariotte)")
        
        elif "Isobaric" in process:
            # P = const
            V = np.linspace(v1, v1*2, 100)
            P = np.full_like(V, p1)
            self.ax1.plot(V, P, 'r-', label='Isobaric')
            self.ax1.set_title("Isobaric Process")
            
        elif "Isochoric" in process:
            # V = const
            P = np.linspace(p1, p1*2, 100)
            V = np.full_like(P, v1)
            self.ax1.plot(V, P, 'g-', label='Isochoric')
            self.ax1.set_title("Isochoric Process (Charles)")

        self.ax1.set_xlabel("Volume V (m^3)")
        self.ax1.set_ylabel("Pressure P (atm)")
        self.ax1.grid(True)
        self.ax1.legend()
        self.canvas1.draw()

    # --- TRACK 2: AC Generator ---
    def setup_track2(self):
        control_frame = ttk.LabelFrame(self.tab2, text="Generator Parameters")
        control_frame.pack(side=tk.LEFT, fill=tk.Y, padx=10, pady=10)

        ttk.Label(control_frame, text="Magnetic Field B (Tesla):").pack(pady=5)
        self.B_var = tk.DoubleVar(value=0.5)
        ttk.Entry(control_frame, textvariable=self.B_var).pack()

        ttk.Label(control_frame, text="Area S (m^2):").pack(pady=5)
        self.S_var = tk.DoubleVar(value=0.1)
        ttk.Entry(control_frame, textvariable=self.S_var).pack()

        ttk.Label(control_frame, text="Number of Turns (N):").pack(pady=5)
        self.N_var = tk.IntVar(value=100)
        ttk.Entry(control_frame, textvariable=self.N_var).pack()

        ttk.Label(control_frame, text="Angular Velocity ω (rad/s):").pack(pady=5)
        self.w_var = tk.DoubleVar(value=10.0)
        ttk.Entry(control_frame, textvariable=self.w_var).pack()

        ttk.Button(control_frame, text="Simulate E.M.F", command=self.plot_track2).pack(pady=20)

        self.fig2, self.ax2 = plt.subplots(figsize=(6, 5))
        self.canvas2 = FigureCanvasTkAgg(self.fig2, master=self.tab2)
        self.canvas2.get_tk_widget().pack(side=tk.RIGHT, fill=tk.BOTH, expand=True)

    def plot_track2(self):
        self.ax2.clear()
        B = self.B_var.get()
        S = self.S_var.get()
        N = self.N_var.get()
        w = self.w_var.get()

        t = np.linspace(0, 2*math.pi/w * 3, 500) # Plot 3 periods
        # Phi = NBS * cos(wt)
        # e = -dPhi/dt = NBSw * sin(wt)
        E0 = N * B * S * w
        e = E0 * np.sin(w * t)

        self.ax2.plot(t, e, 'm-', linewidth=2)
        self.ax2.set_title(f"AC Generator EMF (E0 = {E0:.2f} V)")
        self.ax2.set_xlabel("Time t (s)")
        self.ax2.set_ylabel("Electromotive Force e (V)")
        self.ax2.grid(True)
        self.ax2.axhline(0, color='black', linewidth=1)
        self.canvas2.draw()

    # --- TRACK 3: Radioactive Decay ---
    def setup_track3(self):
        control_frame = ttk.LabelFrame(self.tab3, text="Decay Parameters")
        control_frame.pack(side=tk.LEFT, fill=tk.Y, padx=10, pady=10)

        ttk.Label(control_frame, text="Initial Nuclei N0:").pack(pady=5)
        self.N0_var = tk.IntVar(value=1000)
        ttk.Entry(control_frame, textvariable=self.N0_var).pack()

        ttk.Label(control_frame, text="Half-life T (days):").pack(pady=5)
        self.T_var = tk.DoubleVar(value=5.0)
        ttk.Entry(control_frame, textvariable=self.T_var).pack()

        ttk.Button(control_frame, text="Simulate Decay", command=self.plot_track3).pack(pady=20)

        self.fig3, self.ax3 = plt.subplots(figsize=(6, 5))
        self.canvas3 = FigureCanvasTkAgg(self.fig3, master=self.tab3)
        self.canvas3.get_tk_widget().pack(side=tk.RIGHT, fill=tk.BOTH, expand=True)

    def plot_track3(self):
        self.ax3.clear()
        N0 = self.N0_var.get()
        T = self.T_var.get()

        if T <= 0:
            messagebox.showerror("Error", "Half-life must be positive.")
            return

        lamda = math.log(2) / T
        t = np.linspace(0, T*5, 100) # Plot for 5 half-lives
        N = N0 * np.exp(-lamda * t)
        delta_N = N0 - N # Decayed nuclei

        self.ax3.plot(t, N, 'b-', label='Remaining Nuclei N(t)')
        self.ax3.plot(t, delta_N, 'r--', label='Decayed Nuclei ΔN(t)')
        
        self.ax3.set_title("Radioactive Decay Law")
        self.ax3.set_xlabel("Time t (days)")
        self.ax3.set_ylabel("Number of Nuclei")
        self.ax3.grid(True)
        self.ax3.legend()
        self.canvas3.draw()

if __name__ == "__main__":
    root = tk.Tk()
    app = PhysicsSimulatorSuite(root)
    root.mainloop()
```

---

## 7. Tổng kết khóa học & Hướng nghiệp (Course Completion & Career Guidance)

### 7.1. Lễ tổng kết (Completion Ceremony)
- Tuyên dương các nhóm hoàn thành xuất sắc Capstone Project.
- Cấp chứng nhận hoàn thành khóa học STEM Vật lí 12.
- Học sinh chia sẻ về những khó khăn, bài học kinh nghiệm (Lessons Learned) trong quá trình làm dự án.

### 7.2. Định hướng nghề nghiệp (Career Guidance)
Kiến thức Vật lí THPT là nền tảng vững chắc cho nhiều ngành nghề Khoa học, Công nghệ, Kỹ thuật và Toán học (STEM):
- **Kỹ thuật cơ điện tử, Ô tô:** Ứng dụng động học, động lực học, nhiệt học.
- **Kỹ thuật điện, Năng lượng tái tạo:** Ứng dụng điện từ trường, dòng điện xoay chiều.
- **Công nghệ thông tin, Khoa học dữ liệu:** Tư duy logic, thuật toán mô phỏng vật lý, phân tích số liệu thực nghiệm.
- **Vật lý Y khoa, Công nghệ Hạt nhân:** Ứng dụng vật lý lượng tử, phóng xạ trong điều trị bệnh, chẩn đoán hình ảnh (X-Quang, MRI).
- **Kỹ thuật Hàng không Vũ trụ:** Khí động học, cơ học thiên thể, vật liệu mới.

---

## 8. Câu hỏi thảo luận (Discussion Questions)

**Câu hỏi 1 (Q1):** Tại sao trong truyền tải điện năng đi xa, người ta phải dùng máy biến áp để tăng điện áp lên rất cao trước khi truyền tải?
> **Trả lời (Answer):** Công suất hao phí trên đường dây truyền tải là $\Delta P = \frac{P^2 R}{U^2 \cos^2\varphi}$. Nếu tăng điện áp $U$ lên $n$ lần, thì công suất hao phí $\Delta P$ sẽ giảm đi $n^2$ lần. Đây là phương pháp hiệu quả và kinh tế nhất để giảm hao phí điện năng.

**Câu hỏi 2 (Q2):** Phân biệt hiện tượng quang điện ngoài và quang điện trong. Ứng dụng thực tiễn của chúng là gì?
> **Trả lời (Answer):** 
> - Quang điện ngoài: Electron bị bật ra khỏi bề mặt kim loại khi bị chiếu sáng thích hợp. Ứng dụng: Tế bào quang điện, ống nhân quang điện.
> - Quang điện trong: Electron liên kết trong bán dẫn hấp thụ photon để trở thành electron dẫn, tạo ra lỗ trống, làm giảm điện trở của bán dẫn. Ứng dụng: Quang trở, Pin mặt trời (Solar cell).

**Câu hỏi 3 (Q3):** Nguyên lý hoạt động của lò vi sóng (Microwave oven) dựa trên hiện tượng vật lý nào?
> **Trả lời (Answer):** Lò vi sóng phát ra sóng điện từ có tần số (khoảng 2.45 GHz) trùng với tần số dao động riêng của các phân tử nước trong thức ăn. Gây ra hiện tượng cộng hưởng, làm các phân tử nước dao động mạnh, sinh ra nhiệt và làm nóng thức ăn từ bên trong.

**Câu hỏi 4 (Q4):** Trong Thuyết tương đối hẹp, năng lượng nghỉ của một vật được tính bằng công thức nào? Ý nghĩa của nó?
> **Trả lời (Answer):** Công thức $E = mc^2$. Ý nghĩa: Khối lượng và năng lượng có tính tương đương. Một vật dù đứng yên vẫn mang một năng lượng khổng lồ. Đây là cơ sở cho năng lượng hạt nhân (phân hạch, nhiệt hạch).

**Câu hỏi 5 (Q5):** Khi thiết kế mô hình máy phát điện xoay chiều (Track 2), làm thế nào để tăng suất điện động tạo ra mà không cần quay nhanh hơn?
> **Trả lời (Answer):** Theo công thức $E_0 = NBS\omega$. Nếu giữ nguyên $\omega$ (tốc độ quay), ta có thể tăng $E_0$ bằng cách: Tăng số vòng dây $N$, tăng cường độ từ trường $B$ (dùng nam châm mạnh hơn), hoặc tăng diện tích vòng dây $S$.

---

## 9. Bài tập thực hành & Ôn thi THPT (Homework & Practice Problems)

Phần này cung cấp các bài tập tổng hợp để ôn thi tốt nghiệp, kèm theo các bước giải chi tiết.

### Bài tập 1: Cơ học (Con lắc lò xo)
**Đề bài:** Một con lắc lò xo treo thẳng đứng gồm vật có khối lượng $m = 250g$ và lò xo có độ cứng $k = 100 N/m$. Kéo vật xuống dưới vị trí cân bằng 3 cm rồi truyền cho nó vận tốc $40 cm/s$ hướng xuống. Lấy $g = 10 m/s^2 = \pi^2$. Viết phương trình dao động của vật. Chọn gốc thời gian lúc truyền vận tốc, chiều dương hướng xuống.
**Hướng dẫn giải (Step-by-step solution):**
1.  **Tính $\omega$:** $\omega = \sqrt{\frac{k}{m}} = \sqrt{\frac{100}{0.25}} = \sqrt{400} = 20 \text{ rad/s}$.
2.  **Tính biên độ A:** Sử dụng hệ thức độc lập với thời gian: $A^2 = x^2 + \frac{v^2}{\omega^2}$.
    - $x = 3 \text{ cm}$
    - $v = 40 \text{ cm/s}$
    - $A^2 = 3^2 + \left(\frac{40}{20}\right)^2 = 9 + 4 = 13 \rightarrow A = \sqrt{13} \approx 3.6 \text{ cm}$.
3.  **Xác định pha ban đầu $\varphi$:** Tại $t = 0$:
    - $x = A \cos\varphi = 3 \text{ cm} > 0$
    - $v = -A\omega \sin\varphi > 0$ (vì vận tốc hướng xuống cùng chiều dương).
    - $\Rightarrow \cos\varphi = \frac{3}{\sqrt{13}}$ và $\sin\varphi < 0 \Rightarrow \varphi = -0.58 \text{ rad}$.
4.  **Kết luận:** $x = \sqrt{13} \cos(20t - 0.58) \text{ (cm)}$.

### Bài tập 2: Điện xoay chiều (Mạch RLC)
**Đề bài:** Cho mạch điện xoay chiều RLC nối tiếp. Đặt vào hai đầu đoạn mạch một điện áp xoay chiều $u = 220\sqrt{2} \cos(100\pi t) \text{ V}$. Biết $R = 50 \Omega$, cuộn cảm thuần có độ tự cảm $L = \frac{1}{\pi} \text{ H}$, tụ điện có điện dung $C = \frac{2.10^{-4}}{\pi} \text{ F}$. Tính công suất tiêu thụ của mạch.
**Hướng dẫn giải (Step-by-step solution):**
1.  **Tính cảm kháng $Z_L$:** $Z_L = L\omega = \frac{1}{\pi} \times 100\pi = 100 \Omega$.
2.  **Tính dung kháng $Z_C$:** $Z_C = \frac{1}{C\omega} = \frac{1}{\frac{2.10^{-4}}{\pi} \times 100\pi} = \frac{1}{2.10^{-2}} = 50 \Omega$.
3.  **Tính tổng trở $Z$:** $Z = \sqrt{R^2 + (Z_L - Z_C)^2} = \sqrt{50^2 + (100 - 50)^2} = \sqrt{50^2 + 50^2} = 50\sqrt{2} \Omega$.
4.  **Tính cường độ dòng điện hiệu dụng $I$:** $I = \frac{U}{Z} = \frac{220}{50\sqrt{2}} = \frac{4.4}{\sqrt{2}} = 2.2\sqrt{2} \text{ A}$.
5.  **Tính công suất $P$:** $P = I^2 R = (2.2\sqrt{2})^2 \times 50 = 9.68 \times 50 = 484 \text{ W}$.

### Bài tập 3: Sóng cơ học (Giao thoa sóng)
**Đề bài:** Hai nguồn kết hợp $S_1, S_2$ trên mặt nước dao động cùng pha với tần số $f = 50 \text{ Hz}$. Khoảng cách $S_1S_2 = 12 \text{ cm}$. Tốc độ truyền sóng trên mặt nước là $v = 1.5 \text{ m/s}$. Tính số điểm dao động với biên độ cực đại trên đoạn thẳng nối $S_1$ và $S_2$.
**Hướng dẫn giải (Step-by-step solution):**
1.  **Tính bước sóng $\lambda$:** $\lambda = \frac{v}{f} = \frac{1.5}{50} = 0.03 \text{ m} = 3 \text{ cm}$.
2.  **Điều kiện cực đại:** $\Delta d = d_2 - d_1 = k\lambda$ (do hai nguồn cùng pha).
3.  **Giới hạn khoảng cách:** Xét trên đoạn $S_1S_2$, ta có $-S_1S_2 \le \Delta d \le S_1S_2 \Rightarrow -12 \le k\lambda \le 12$.
4.  **Tìm số nguyên $k$:** $-12 \le 3k \le 12 \Rightarrow -4 \le k \le 4$.
5.  **Kết luận:** Có các giá trị $k = -4, -3, -2, -1, 0, 1, 2, 3, 4$. Vậy có $9$ điểm dao động với biên độ cực đại.

### Bài tập 4: Vật lí lượng tử (Quang điện)
**Đề bài:** Giới hạn quang điện của kẽm là $\lambda_0 = 0.35 \mu m$. Chiếu bức xạ có bước sóng $\lambda = 0.25 \mu m$ vào tấm kẽm. Cho $h = 6.625 \times 10^{-34} \text{ J.s}$, $c = 3 \times 10^8 \text{ m/s}$. Tính động năng ban đầu cực đại của electron quang điện.
**Hướng dẫn giải (Step-by-step solution):**
1.  **Tính công thoát $A$:** $A = \frac{hc}{\lambda_0} = \frac{6.625 \times 10^{-34} \times 3 \times 10^8}{0.35 \times 10^{-6}} \approx 5.678 \times 10^{-19} \text{ J}$.
2.  **Tính năng lượng photon kích thích $\varepsilon$:** $\varepsilon = \frac{hc}{\lambda} = \frac{6.625 \times 10^{-34} \times 3 \times 10^8}{0.25 \times 10^{-6}} = 7.95 \times 10^{-19} \text{ J}$.
3.  **Tính động năng cực đại $W_{dmax}$:** Sử dụng phương trình Einstein $W_{dmax} = \varepsilon - A = 7.95 \times 10^{-19} - 5.678 \times 10^{-19} = 2.272 \times 10^{-19} \text{ J}$.

### Bài tập 5: Vật lí Hạt nhân (Năng lượng liên kết)
**Đề bài:** Hạt nhân Hêli ($^4_2 He$) có khối lượng $m_{He} = 4.0015 \text{ u}$. Cho khối lượng proton $m_p = 1.0073 \text{ u}$, khối lượng nơtron $m_n = 1.0087 \text{ u}$, $1\text{u} = 931.5 \text{ MeV/c}^2$. Tính năng lượng liên kết riêng của hạt nhân Hêli.
**Hướng dẫn giải (Step-by-step solution):**
1.  **Cấu tạo hạt nhân:** $^4_2 He$ có $Z = 2$ proton và $N = A - Z = 4 - 2 = 2$ nơtron.
2.  **Tính độ hụt khối $\Delta m$:** $\Delta m = [Z \cdot m_p + (A-Z)m_n] - m_{He} = [2 \times 1.0073 + 2 \times 1.0087] - 4.0015 = 4.032 - 4.0015 = 0.0305 \text{ u}$.
3.  **Tính năng lượng liên kết $W_{lk}$:** $W_{lk} = \Delta m \cdot c^2 = 0.0305 \times 931.5 = 28.41075 \text{ MeV}$.
4.  **Tính năng lượng liên kết riêng $\varepsilon$:** $\varepsilon = \frac{W_{lk}}{A} = \frac{28.41075}{4} \approx 7.10 \text{ MeV/nuclon}$.

---

## 10. Bảng Đánh Giá Capstone Project (Assessment Rubric)

Thang điểm 100 được chia thành các hạng mục sau:

| Tiêu chí (Criteria) | Mức độ xuất sắc (Excellent) 85-100% | Mức độ Đạt (Proficient) 65-84% | Mức độ Cần cố gắng (Developing) <65% | Điểm tối đa (Max Points) |
|---|---|---|---|---|
| **1. Ý tưởng & Thiết kế (Concept & Design)** | Ý tưởng sáng tạo, thiết kế thông minh, sử dụng linh kiện/vật liệu hợp lý, có tính thẩm mỹ cao. | Ý tưởng rõ ràng, thiết kế cơ bản đạt yêu cầu chức năng, thẩm mỹ vừa đủ. | Ý tưởng chưa rõ ràng, thiết kế thiếu thực tế, không có thẩm mỹ. | 20 |
| **2. Áp dụng Vật lí (Physics Application)** | Hiểu rất sâu sắc nguyên lý vật lí, tính toán chính xác, tích hợp hoàn hảo vào mô hình/phần mềm. | Hiểu nguyên lý cơ bản, có tính toán nhưng đôi chỗ chưa chính xác tuyệt đối. | Không giải thích được nguyên lý vật lí đằng sau dự án. | 30 |
| **3. Mô phỏng & Lập trình (Simulation & Code)** | Mã nguồn (Python/Arduino) viết sạch, có bình luận, giao diện đẹp, chạy mượt mà, không lỗi. | Mã nguồn chạy được, thực hiện đúng chức năng cơ bản, giao diện đơn giản. | Mã nguồn lỗi nhiều, không chạy được tính năng chính, hoặc không có phần mềm. | 20 |
| **4. Thuyết trình & Phản biện (Presentation & Q&A)** | Trình bày tự tin, rõ ràng, song ngữ tốt. Trả lời xuất sắc và logic các câu hỏi phản biện. | Trình bày đủ nội dung, trả lời được các câu hỏi cơ bản của giáo viên. | Trình bày lúng túng, không trả lời được câu hỏi phản biện. | 20 |
| **5. Làm việc nhóm (Teamwork)** | Phân công nhiệm vụ rõ ràng, tất cả thành viên đều hiểu toàn bộ dự án, hợp tác tốt. | Có phân công nhưng một vài thành viên gánh vác phần lớn công việc. | Làm việc thiếu tổ chức, mâu thuẫn nội bộ. | 10 |

---
*Chúc các em hoàn thành tốt kỳ thi Tốt nghiệp THPT và đạt kết quả cao với Capstone Project!*
*Good luck on your High School Graduation Exam and Capstone Project!*

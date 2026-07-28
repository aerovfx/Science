# Tuần 10: Tổng Ôn Tập Cuối Năm & Dự Án Capstone STEM (Week 10: Year-End Comprehensive Review & STEM Capstone Project)

## 1. Mục Tiêu Bài Học (Learning Objectives)

### Tiếng Việt
- **Kiến thức**: Hệ thống hóa toàn bộ kiến thức Toán lớp 7 thuộc chương trình "Kết Nối Tri Thức Với Cuộc Sống" (Tập 1 và Tập 2) bao gồm: 
  - Số Hữu Tỉ, Số Thực.
  - Hình Học Trực Quan, Góc và Đường Thẳng Song Song.
  - Các trường hợp bằng nhau của tam giác, các đường đồng quy trong tam giác.
  - Thống Kê và Xác Suất.
  - Tỉ Lệ Thức và Đại Lượng Tỉ Lệ.
  - Biểu Thức Đại Số và Đa Thức Một Biến.
- **Kỹ năng**: Áp dụng các kiến thức đã học vào việc giải quyết các bài toán tổng hợp, chứng minh hình học logic phức tạp (vận dụng tổng hợp các trường hợp bằng nhau và đường đồng quy).
- **Thực hành STEM**: Lên ý tưởng, thiết kế, lập trình và thuyết trình một ứng dụng Toán học tương tác hoặc mô phỏng. Sử dụng GeoGebra và Python để giải quyết vấn đề thực tiễn.
- **Thái độ**: Trân trọng giá trị của Toán học trong thực tiễn, rèn luyện tư duy logic, phản biện và kỹ năng làm việc nhóm, kỹ năng thuyết trình dự án. Chuẩn bị tâm thế vững vàng cho chương trình Toán 8.

### English
- **Knowledge**: Systematize all Grade 7 Math concepts within the "Connecting Knowledge with Life" curriculum (Volumes 1 & 2) including: 
  - Rational Numbers, Real Numbers.
  - Visual Geometry, Angles & Parallel Lines.
  - Congruent Triangles, Concurrent lines in a triangle.
  - Statistics & Probability.
  - Proportions and Proportional quantities.
  - Algebraic Expressions & Univariate Polynomials.
- **Skills**: Apply acquired knowledge to solve comprehensive mathematical problems, execute complex logical geometry proofs (combining congruency and concurrency theorems).
- **STEM Practice**: Brainstorm, design, program, and present an interactive Mathematical application or simulation. Use GeoGebra and Python to solve real-world problems.
- **Attitude**: Appreciate the value of Mathematics in real life, develop logical and critical thinking, teamwork skills, and project presentation skills. Build a strong foundation for the Grade 8 Math curriculum.

## 2. Bài Học Liên Quan Trong Sách Giáo Khoa (Related Textbook Lessons)
Toàn bộ kiến thức bài học tuần này là sự chắt lọc và tổng hợp từ các chuyên đề đã được học:
- **Chương I & II (Đại Số)**: Số Hữu Tỉ & Số Thực (Rational & Real Numbers)
- **Chương III & IV (Hình Học)**: Góc, Đường thẳng song song, Hình học trực quan (Angles, Parallel Lines, Visual Geometry)
- **Chương V (Thống Kê)**: Thu thập và tổ chức dữ liệu (Data Collection & Organization)
- **Chương VI (Đại Số)**: Tỉ Lệ Thức & Đại lượng tỉ lệ thuận, nghịch (Proportions & Variations)
- **Chương VII (Đại Số)**: Biểu thức đại số và Đa thức một biến (Algebraic Expressions & Polynomials)
- **Chương VIII (Hình Học)**: Làm quen với biến cố và xác suất của biến cố (Events & Probability)
- **Chương IX (Hình Học)**: Quan hệ giữa các yếu tố trong một tam giác (Relations in Triangles)
- **Hoạt động thực hành và trải nghiệm**: Ôn tập cuối năm, dự án STEM toán học.

## 3. Bảng Phần Mềm & Công Cụ (Software & Tooling Table)

| Công Cụ / Software | Phiên Bản / Version | Mục Đích / Purpose | Hệ Điều Hành / OS |
| ------------------ | ------------------- | ------------------ | ----------------- |
| **Python**         | `3.10+`             | Lập trình GUI, tính toán, xử lý đa thức, vẽ đồ thị | Windows/macOS/Linux |
| **GeoGebra**       | `6.0 Classic`       | Xây dựng hình học động, mô phỏng trực quan tam giác | Web/Windows/macOS/App |
| **SymPy**          | `1.11+`             | Tính toán đại số máy tính, giải phương trình, đa thức | Windows/macOS/Linux |
| **Matplotlib**     | `3.7+`              | Trực quan hóa dữ liệu thống kê, biểu đồ, xác suất | Windows/macOS/Linux |
| **Tkinter**        | *Built-in*          | Xây dựng giao diện người dùng (GUI) cho ứng dụng | Windows/macOS/Linux |
| **Pygame**         | `2.5+`              | Xây dựng môi trường mô phỏng toán học tương tác 2D | Windows/macOS/Linux |
| **Markdown Editor**| *Any*               | Soạn thảo báo cáo dự án, viết tài liệu README | Windows/macOS/Linux |

## 4. Giải Thích Lý Thuyết Toán Học Chuyên Sâu (Deep Mathematical Theory Explanations)

Trong năm học Toán 7, chúng ta đã tiếp cận với nhiều khái niệm mới mang tính trừu tượng cao hơn lớp 6. Các kiến thức này đan xen và bổ trợ cho nhau.

### 4.1. Hệ Thống Hóa Các Tập Hợp Số & Tính Chất Số Thực (Number Systems)

Chúng ta đã mở rộng tập hợp số từ $\mathbb{Q}$ (Số Hữu Tỉ) sang $\mathbb{R}$ (Số Thực):
- **Số Hữu Tỉ $\mathbb{Q}$**: Bao gồm các số biểu diễn được dưới dạng phân số $\frac{a}{b}$ với $a, b \in \mathbb{Z}, b \neq 0$. Biểu diễn thập phân của số hữu tỉ luôn là hữu hạn hoặc vô hạn tuần hoàn.
  - Ví dụ: $\frac{1}{3} = 0.3333... = 0.(3)$
- **Số Vô Tỉ $\mathbb{I}$**: Là số thập phân vô hạn không tuần hoàn. Chúng không thể biểu diễn dưới dạng phân số tối giản của hai số nguyên.
  - Ví dụ: $\sqrt{2} \approx 1.41421356...$, $\pi \approx 3.14159265...$
- **Số Thực $\mathbb{R}$**: Hợp của tập số hữu tỉ và vô tỉ $\mathbb{R} = \mathbb{Q} \cup \mathbb{I}$. Mỗi số thực tương ứng với duy nhất một điểm trên trục số và ngược lại (trục số thực liên tục).

### 4.2. Tỉ Lệ Thức & Đại Lượng Tỉ Lệ (Proportions & Proportional Quantities)

**Tỉ lệ thức (Proportion):**
Đẳng thức của hai tỉ số $\frac{a}{b} = \frac{c}{d}$ (với $b \neq 0, d \neq 0$).
Tính chất cơ bản: $a \cdot d = b \cdot c$.
Tính chất dãy tỉ số bằng nhau mở rộng (Master Formula):
$$ \frac{a}{b} = \frac{c}{d} = \frac{e}{f} = \frac{k_1 a + k_2 c + k_3 e}{k_1 b + k_2 d + k_3 f} \quad (\text{với } k_1 b + k_2 d + k_3 f \neq 0) $$

**Đại lượng tỉ lệ (Variations):**
- **Tỉ lệ thuận (Direct)**: $y = kx$ ($k \neq 0$). Đồ thị của chúng (được học ở chương trình sau) là một đường thẳng đi qua gốc tọa độ.
- **Tỉ lệ nghịch (Inverse)**: $xy = a$ ($a \neq 0$) hay $y = \frac{a}{x}$. Đồ thị của chúng là đường Hyperbol.

### 4.3. Đa Thức Một Biến (Univariate Polynomials)

Đa thức một biến $P(x)$ đóng vai trò quan trọng trong việc biểu diễn mối quan hệ phụ thuộc đại số.
Định dạng tổng quát: $P(x) = a_n x^n + a_{n-1} x^{n-1} + ... + a_1 x + a_0$
- **Bậc (Degree)**: $n$ (nếu $a_n \neq 0$).
- **Hệ số (Coefficients)**: Các số thực $a_i$. Hệ số tự do là $a_0$.
- **Nghiệm (Root/Zero)**: Giá trị $x = c$ sao cho $P(c) = 0$.

Trong chương trình, học sinh phải thành thạo việc cộng, trừ hai đa thức và nhân đa thức với đơn thức. Khái niệm nghiệm cũng được liên kết với giá trị của biểu thức đại số.

### 4.4. Hình Học - Tam Giác & Các Đường Đồng Quy (Geometry - Triangles & Concurrent Lines)

Hình học lớp 7 đặt nền móng cho tư duy suy diễn logic (Logical Reasoning Proofs).
Các trường hợp bằng nhau của tam giác thường (Congruent Triangles):
1. **C-C-C (Cạnh - Cạnh - Cạnh)**: Ba cặp cạnh tương ứng bằng nhau.
2. **C-G-C (Cạnh - Góc - Cạnh)**: Hai cặp cạnh và góc xen giữa bằng nhau.
3. **G-C-G (Góc - Cạnh - Góc)**: Một cặp cạnh và hai góc kề cạnh đó bằng nhau.

Đặc biệt lưu ý các đường đồng quy trong tam giác:
- **Đường Trung Tuyến**: Giao điểm là **Trọng Tâm** (Centroid) $G$. Tính chất: Khoảng cách từ đỉnh đến trọng tâm bằng $\frac{2}{3}$ độ dài đường trung tuyến đi qua đỉnh đó.
- **Đường Cao**: Giao điểm là **Trực Tâm** (Orthocenter) $H$.
- **Đường Phân Giác**: Giao điểm là **Tâm Đường Tròn Nội Tiếp** (Incenter) $I$. $I$ cách đều 3 cạnh.
- **Đường Trung Trực**: Giao điểm là **Tâm Đường Tròn Ngoại Tiếp** (Circumcenter) $O$. $O$ cách đều 3 đỉnh.

### 4.5. Thống Kê & Xác Suất (Statistics & Probability)

Xác suất lớp 7 giới thiệu mô hình xác suất cơ bản đồng khả năng:
$$ P(A) = \frac{n(A)}{N} $$
Trong đó $n(A)$ là số kết quả thuận lợi cho biến cố $A$, và $N$ là tổng số kết quả có thể xảy ra.

## 5. Sơ Đồ Tóm Tắt (ASCII/Markdown Diagrams)

Sơ đồ sau đây tổng hợp luồng kiến thức Toán học 7:

```text
========================================================================
             MIND MAP TỔNG HỢP TOÁN 7 (GRADE 7 MATH MINDMAP)
========================================================================

                                 TOÁN 7
                                   |
         +-------------------------+-------------------------+
         |                         |                         |
      ĐẠI SỐ                    HÌNH HỌC              THỐNG KÊ & XÁC SUẤT
         |                         |                         |
 +-------+-------+         +-------+-------+         +-------+-------+
 | SỐ HỌC        |         | QUAN HỆ ĐƯỜNG |         | THU THẬP &    |
 | - Số Hữu Tỉ   |         | - Góc đối đỉnh|         | PHÂN TÍCH DỮ  |
 | - Số Thực     |         | - Song song   |         | LIỆU          |
 | - Căn bậc hai |         | - Vuông góc   |         | - Biểu đồ cột |
 +---------------+         +---------------+         | - Biểu đồ quạt|
 | ĐẠI LƯỢNG     |         | TAM GIÁC      |         +---------------+
 | TỈ LỆ         |         | - Bằng nhau   |         | XÁC SUẤT      |
 | - TL Thuận    |         | (c.c.c, c.g.c)|         | - Biến cố ngẫu|
 | - TL Nghịch   |         | (g.c.g)       |         |   nhiên       |
 +---------------+         +---------------+         | - Tính P(A)   |
 | ĐA THỨC       |         | ĐƯỜNG ĐỒNG QUY|         +---------------+
 | MỘT BIẾN      |         | - Trung tuyến |
 | - Cộng, Trừ   |         | - Cao, Phân   |
 | - Tìm Nghiệm  |         |   giác, Trực  |
 +---------------+         +---------------+
```

## 6. Các Bước Thực Hành & Thuyết Trình Capstone Project (Capstone Project Presentations)

Dự án Capstone: **"Thiết Kế & Xây Dựng Ứng Dụng Toán 7 STEM" (Design & Build a Math 7 STEM Application)**

Lớp được chia thành các nhóm (3-4 học sinh/nhóm). Mỗi nhóm chọn 1 trong 3 Track.

### Track 1: GeoGebra Dynamic Geometry Construction Suite
- **Nhiệm vụ**: Tạo một hệ thống mô phỏng hình học động để minh họa tính chất của Trọng tâm, Trực tâm, Tâm đường tròn nội tiếp, và ngoại tiếp của tam giác.
- **Yêu cầu kỹ thuật**:
  - Khi kéo các đỉnh của tam giác, các đường thẳng đồng quy vẫn phải giữ nguyên tính chất đồng quy.
  - Sử dụng Checkbox để ẩn/hiện các nhóm đường (ví dụ: chỉ hiện 3 đường cao).
  - Có các TextBox (nhãn dán) động hiển thị độ dài cạnh và số đo góc.

### Track 2: Vietnam Population & Economic Statistical Dashboard
- **Nhiệm vụ**: Xử lý bộ dữ liệu thực tế (Dataset) và trực quan hóa bằng Python (Matplotlib/Pandas).
- **Yêu cầu kỹ thuật**:
  - Dữ liệu đầu vào từ file CSV (Ví dụ: Dân số Việt Nam 10 năm gần nhất).
  - Vẽ tối thiểu 3 loại biểu đồ (Bar chart, Line chart, Pie chart).
  - Viết code tính toán Giá trị trung bình và phân tích sự biến đổi qua các năm.

### Track 3: Interactive Math 7 Solver Engine in Python
- **Nhiệm vụ**: Xây dựng một phần mềm GUI đa chức năng giúp học sinh lớp 7 giải bài tập và tự học.
- **Yêu cầu kỹ thuật**:
  - Tích hợp 3 module: (1) Tính toán Đa thức; (2) Trình mô phỏng Xác suất; (3) Giải tỉ lệ thức.
  - Xử lý lỗi khi người dùng nhập sai (Try-Except).
  - Sử dụng thư viện Tkinter hoặc Pygame để tạo giao diện người dùng tương tác.

### Quy Trình Thuyết Trình & Đánh Giá (Presentation & Evaluation Workflow)
1. **Khởi động (10 phút)**: Giáo viên giới thiệu hội đồng giám khảo và mục tiêu buổi lễ.
2. **Triển lãm dự án (40 phút)**: Các nhóm thay phiên nhau thuyết trình (10 phút/nhóm). Bao gồm:
   - Lý do chọn đề tài.
   - Các nguyên lý Toán học lớp 7 được ứng dụng.
   - Demo sản phẩm trực tiếp.
   - Trả lời câu hỏi phản biện từ giáo viên.
3. **Tổng kết (10 phút)**: Trao giải cho các dự án xuất sắc, phát chứng chỉ hoàn thành khóa học STEM Toán 7.

## 7. Mã Nguồn Python Mô Phỏng (Python Simulation Code)

Dưới đây là hệ thống code hoàn chỉnh cho nhóm chọn **Track 3: Interactive Math 7 Solver Engine**. Đoạn mã này sử dụng `tkinter` để vẽ giao diện đồ họa, `sympy` để hỗ trợ tính toán đại số máy tính tiên tiến, và `matplotlib` được tích hợp thẳng vào giao diện để trực quan hóa xác suất.

Tệp nguồn: `math7_gui_suite.py`

```python
import tkinter as tk
from tkinter import messagebox, ttk
import sympy as sp
import random
import matplotlib.pyplot as plt
from matplotlib.backends.backend_tkagg import FigureCanvasTkAgg

class Math7SuiteApp:
    def __init__(self, root):
        self.root = root
        self.root.title("Ứng Dụng Toán 7 Toàn Diện (Grade 7 Math Solver Engine)")
        self.root.geometry("850x650")
        
        # Cấu hình giao diện (Styles)
        style = ttk.Style()
        style.theme_use('clam')
        style.configure("TButton", font=("Helvetica", 11, "bold"), padding=5)
        style.configure("TLabel", font=("Helvetica", 11))
        style.configure("Header.TLabel", font=("Helvetica", 16, "bold"), foreground="#2C3E50")
        
        # Tiêu đề chính
        title_lbl = ttk.Label(root, text="HỆ THỐNG MÔ PHỎNG & GIẢI TOÁN LỚP 7", style="Header.TLabel")
        title_lbl.pack(pady=15)
        
        # Khởi tạo Notebook (Các Tabs chức năng)
        self.notebook = ttk.Notebook(root)
        self.notebook.pack(expand=True, fill='both', padx=15, pady=10)
        
        # --- Tab 1: Đa Thức Một Biến ---
        self.tab1 = ttk.Frame(self.notebook)
        self.notebook.add(self.tab1, text="Đa Thức (Polynomials)")
        self.setup_polynomial_tab()
        
        # --- Tab 2: Tỉ Lệ Thức ---
        self.tab2 = ttk.Frame(self.notebook)
        self.notebook.add(self.tab2, text="Tỉ Lệ Thức (Proportions)")
        self.setup_proportion_tab()
        
        # --- Tab 3: Xác Suất Đồng Khả Năng ---
        self.tab3 = ttk.Frame(self.notebook)
        self.notebook.add(self.tab3, text="Xác Suất & Biểu Đồ (Probability)")
        self.setup_probability_tab()

    def setup_polynomial_tab(self):
        main_frame = ttk.Frame(self.tab1, padding=20)
        main_frame.pack(fill='both', expand=True)
        
        instr_lbl = ttk.Label(main_frame, text="Nhập đa thức biến x (VD: 3*x**3 - 2*x**2 + x - 5):")
        instr_lbl.grid(row=0, column=0, columnspan=2, sticky='w', pady=(0, 10))
        
        # P(x)
        ttk.Label(main_frame, text="P(x) = ").grid(row=1, column=0, sticky='e', pady=5)
        self.entry_px = ttk.Entry(main_frame, width=50, font=("Consolas", 12))
        self.entry_px.grid(row=1, column=1, pady=5)
        self.entry_px.insert(0, "2*x**2 - 8")
        
        # Q(x)
        ttk.Label(main_frame, text="Q(x) = ").grid(row=2, column=0, sticky='e', pady=5)
        self.entry_qx = ttk.Entry(main_frame, width=50, font=("Consolas", 12))
        self.entry_qx.grid(row=2, column=1, pady=5)
        self.entry_qx.insert(0, "x**2 + 3*x - 4")
        
        # Các nút điều khiển
        btn_frame = ttk.Frame(main_frame)
        btn_frame.grid(row=3, column=0, columnspan=2, pady=20)
        
        ttk.Button(btn_frame, text="Tính P(x) + Q(x)", command=self.add_poly).grid(row=0, column=0, padx=10)
        ttk.Button(btn_frame, text="Tính P(x) - Q(x)", command=self.sub_poly).grid(row=0, column=1, padx=10)
        ttk.Button(btn_frame, text="Tìm Nghiệm P(x)", command=self.find_roots).grid(row=0, column=2, padx=10)
        
        # Khu vực hiển thị kết quả
        self.poly_result_var = tk.StringVar(value="Kết quả tính toán sẽ xuất hiện ở đây.")
        res_lbl = tk.Label(main_frame, textvariable=self.poly_result_var, font=("Consolas", 13, "bold"), fg="#C0392B", bg="#F4F6F7", relief="sunken", pady=10)
        res_lbl.grid(row=4, column=0, columnspan=2, sticky='we', pady=20)

    def setup_proportion_tab(self):
        main_frame = ttk.Frame(self.tab2, padding=20)
        main_frame.pack(fill='both', expand=True)
        
        instr_lbl = ttk.Label(main_frame, text="Giải bài toán tỉ lệ thức dạng a/b = c/d.\nNhập chữ 'x' vào ô chưa biết giá trị cần tìm.")
        instr_lbl.pack(pady=(0, 20))
        
        prop_frame = tk.Frame(main_frame)
        prop_frame.pack()
        
        font_entry = ("Helvetica", 14)
        
        self.e_a = tk.Entry(prop_frame, width=8, justify='center', font=font_entry)
        self.e_a.grid(row=0, column=0, padx=5, pady=5)
        tk.Frame(prop_frame, height=2, bg="black").grid(row=1, column=0, sticky="ew")
        self.e_b = tk.Entry(prop_frame, width=8, justify='center', font=font_entry)
        self.e_b.grid(row=2, column=0, padx=5, pady=5)
        
        tk.Label(prop_frame, text="  =  ", font=("Helvetica", 16, "bold")).grid(row=1, column=1)
        
        self.e_c = tk.Entry(prop_frame, width=8, justify='center', font=font_entry)
        self.e_c.grid(row=0, column=2, padx=5, pady=5)
        tk.Frame(prop_frame, height=2, bg="black").grid(row=1, column=2, sticky="ew")
        self.e_d = tk.Entry(prop_frame, width=8, justify='center', font=font_entry)
        self.e_d.grid(row=2, column=2, padx=5, pady=5)
        
        ttk.Button(main_frame, text="Tiến hành Giải", command=self.solve_proportion).pack(pady=30)
        
        self.prop_result_var = tk.StringVar(value="x = ...")
        res_lbl = tk.Label(main_frame, textvariable=self.prop_result_var, font=("Helvetica", 18, "bold"), fg="#27AE60")
        res_lbl.pack()

    def setup_probability_tab(self):
        main_frame = ttk.Frame(self.tab3, padding=10)
        main_frame.pack(fill='both', expand=True)
        
        ctrl_frame = ttk.Frame(main_frame)
        ctrl_frame.pack(fill='x', pady=5)
        
        ttk.Label(ctrl_frame, text="Số lần gieo xúc xắc: ").pack(side=tk.LEFT)
        self.e_rolls = ttk.Entry(ctrl_frame, width=15)
        self.e_rolls.pack(side=tk.LEFT, padx=5)
        self.e_rolls.insert(0, "1000")
        
        ttk.Button(ctrl_frame, text="Mô Phỏng & Vẽ Biểu Đồ", command=self.simulate_dice).pack(side=tk.LEFT, padx=20)
        
        self.chart_frame = tk.Frame(main_frame, bg="white", relief="sunken", borderwidth=1)
        self.chart_frame.pack(fill='both', expand=True, pady=10)

    # --- Backend Logic Handlers ---

    def get_polys(self):
        x = sp.Symbol('x')
        try:
            P_val = sp.sympify(self.entry_px.get()) if self.entry_px.get() else sp.sympify("0")
            Q_val = sp.sympify(self.entry_qx.get()) if self.entry_qx.get() else sp.sympify("0")
            return x, P_val, Q_val
        except Exception as e:
            messagebox.showerror("Syntax Error", f"Lỗi cú pháp đa thức. Hãy chắc chắn sử dụng x và dấu * cho phép nhân.\nChi tiết lỗi: {e}")
            return None, None, None

    def add_poly(self):
        x, P, Q = self.get_polys()
        if P is not None:
            res = sp.simplify(P + Q)
            self.poly_result_var.set(f"P(x) + Q(x) = {res}")

    def sub_poly(self):
        x, P, Q = self.get_polys()
        if P is not None:
            res = sp.simplify(P - Q)
            self.poly_result_var.set(f"P(x) - Q(x) = {res}")

    def find_roots(self):
        x, P, _ = self.get_polys()
        if P is not None:
            roots = sp.solve(P, x)
            if not roots:
                self.poly_result_var.set("P(x) vô nghiệm.")
            else:
                self.poly_result_var.set(f"Nghiệm của P(x) = 0 là: x = {roots}")

    def solve_proportion(self):
        vals = [self.e_a.get().strip(), self.e_b.get().strip(), self.e_c.get().strip(), self.e_d.get().strip()]
        if vals.count('x') != 1:
            messagebox.showerror("Error", "Đúng một trường phải là 'x', các trường khác là số.")
            return
            
        try:
            a, b, c, d = vals
            if a == 'x': res = (float(b) * float(c)) / float(d)
            elif b == 'x': res = (float(a) * float(d)) / float(c)
            elif c == 'x': res = (float(a) * float(d)) / float(b)
            elif d == 'x': res = (float(b) * float(c)) / float(a)
            self.prop_result_var.set(f"Kết quả: x = {res:.4g}")
        except ZeroDivisionError:
            messagebox.showerror("Math Error", "Mẫu số không được bằng 0!")
        except ValueError:
            messagebox.showerror("Input Error", "Chỉ nhập số hoặc ký tự 'x'!")

    def simulate_dice(self):
        try:
            n = int(self.e_rolls.get())
            if n <= 0 or n > 1000000: raise ValueError
        except ValueError:
            messagebox.showerror("Lỗi", "Số lần gieo n phải là số nguyên dương hợp lệ!")
            return
            
        # Mô phỏng Monte Carlo
        results = [random.randint(1, 6) for _ in range(n)]
        counts = [results.count(i) for i in range(1, 7)]
        
        # Xóa biểu đồ cũ nếu có
        for widget in self.chart_frame.winfo_children():
            widget.destroy()
            
        # Vẽ biểu đồ với Matplotlib
        fig, ax = plt.subplots(figsize=(6, 4), dpi=100)
        faces = ['1 chấm', '2 chấm', '3 chấm', '4 chấm', '5 chấm', '6 chấm']
        colors = ['#FF9999', '#66B2FF', '#99FF99', '#FFCC99', '#FFD700', '#DDA0DD']
        
        bars = ax.bar(faces, counts, color=colors, edgecolor='black')
        ax.set_ylabel('Số lần xuất hiện (Tần số)')
        ax.set_title(f'Biểu Đồ Cột: Mô Phỏng Gieo Xúc Xắc {n} Lần')
        
        # Thêm text tỉ lệ phần trăm trên đầu cột
        for bar, count in zip(bars, counts):
            height = bar.get_height()
            percentage = (count / n) * 100
            ax.text(bar.get_x() + bar.get_width()/2., height, f'{percentage:.1f}%', ha='center', va='bottom', fontsize=9)
            
        # Nhúng Matplotlib Figure vào Tkinter Canvas
        canvas = FigureCanvasTkAgg(fig, master=self.chart_frame)
        canvas.draw()
        canvas.get_tk_widget().pack(fill='both', expand=True)

if __name__ == "__main__":
    root = tk.Tk()
    app = Math7SuiteApp(root)
    root.mainloop()
```

## 8. Những Lỗi Sai Toán Học Thường Gặp & Cách Tránh (Common Mistakes & Misconceptions)

> ⚠️ **CẢNH BÁO QUAN TRỌNG KHI LÀM BÀI TOÁN LỚP 7**

1. **Lỗi dấu khi phá ngoặc đa thức**:
   - *Sai lầm*: $-(2x^2 - 3x + 1) = -2x^2 - 3x + 1$
   - *Sự thật (Khắc phục)*: Khi trước ngoặc là dấu trừ, bắt buộc phải đổi dấu **tất cả** các hạng tử bên trong ngoặc. Đúng phải là: $-2x^2 + 3x - 1$. Lỗi này chiếm 40% nguyên nhân dẫn đến sai đáp số bài kiểm tra cuối kỳ!
2. **Nhầm lẫn giữa tỉ lệ thuận và tỉ lệ nghịch**:
   - *Sai lầm*: Cho rằng số công nhân và thời gian hoàn thành công việc là tỉ lệ thuận.
   - *Sự thật (Khắc phục)*: Số công nhân tăng lên thì thời gian hoàn thành công việc phải giảm xuống. Tích của số công nhân và thời gian là không đổi ($xy=a$). Đây là bài toán tỉ lệ nghịch điển hình.
3. **Quên điều kiện chia cho 0 trong Tỉ lệ thức**:
   - Trong tỉ lệ thức $\frac{a}{b} = \frac{c}{d}$, phải luôn xác định tập xác định $b \neq 0, d \neq 0$. Việc rút gọn vội vàng có thể làm mất nghiệm hoặc tạo ra kết quả vô nghĩa.
4. **Nhầm lẫn các trường hợp bằng nhau của tam giác**:
   - *Sai lầm*: Áp dụng Góc - Góc - Góc (G-G-G) hoặc Cạnh - Cạnh - Góc (C-C-G không kề) để kết luận hai tam giác bằng nhau.
   - *Sự thật (Khắc phục)*: G-G-G chỉ cho biết hai tam giác đồng dạng (kích thước có thể khác nhau nhưng cùng hình dáng). Trường hợp Cạnh-Góc-Cạnh (C-G-C) bắt buộc góc phải xen giữa hai cạnh được xét.
5. **Cộng trừ đơn thức không đồng dạng**:
   - *Sai lầm*: $3x^2 + 2x = 5x^3$ hoặc $4x + 5y = 9xy$.
   - *Sự thật (Khắc phục)*: Chỉ có thể thực hiện phép tính trên các đơn thức đồng dạng (phần biến hoàn toàn giống nhau). Nếu không, biểu thức phải giữ nguyên.

## 9. Câu Hỏi Thảo Luận (Discussion Questions)

**Câu 1 (Q1)**: Tại sao tập hợp số hữu tỉ $\mathbb{Q}$ lại không đủ để biểu diễn các độ dài hình học, và sự cần thiết của số vô tỉ $\mathbb{I}$ (như $\sqrt{2}$) xuất hiện như thế nào?
- *Gợi ý/Đáp án*: Xét một hình vuông có cạnh độ dài 1 đơn vị. Dựa vào định lý Pythagore (vừa được hé lộ qua môn Toán 7), độ dài đường chéo $d$ thỏa mãn $d^2 = 1^2 + 1^2 = 2$. Tuy nhiên, không có bất kỳ phân số hữu tỉ $\frac{a}{b}$ nào bình phương lên bằng đúng 2. Sự "thiếu hụt" này trên trục số dẫn đến sự ra đời của tập hợp Số Vô Tỉ, làm đầy đặn trục Số Thực.

**Câu 2 (Q2)**: Giải thích sự khác biệt giữa "Đa thức một biến" và "Đa thức nhiều biến". Cho ví dụ minh họa. Tại sao Toán 7 lại dành phần lớn thời gian cho đa thức một biến?
- *Gợi ý/Đáp án*: Đa thức một biến chỉ phụ thuộc vào sự biến thiên của 1 đại lượng duy nhất ($x$). Đa thức nhiều biến chứa tương tác giữa nhiều đại lượng (Ví dụ: Công thức tính diện tích hình chữ nhật $S = x \cdot y$). Việc làm chủ đa thức một biến là viên gạch nền tảng để học lý thuyết về Hàm số $y=f(x)$ và phân tích đa thức thành nhân tử trong chương trình lớp 8 và 9.

**Câu 3 (Q3)**: Trong các định lý về đường đồng quy trong tam giác, điểm đồng quy nào có thể nằm bên ngoài tam giác? Hãy tưởng tượng và giải thích bằng hình học trực quan.
- *Gợi ý/Đáp án*: Trọng tâm $G$ và Tâm đường tròn nội tiếp $I$ luôn nằm hoàn toàn bên trong mọi tam giác. Trực tâm $H$ (giao đường cao) và Tâm đường tròn ngoại tiếp $O$ (giao trung trực) sẽ nằm BÊN NGOÀI tam giác nếu đó là một tam giác TÙ (có 1 góc > $90^\circ$). Nếu là tam giác vuông, $H$ nằm ngay tại đỉnh góc vuông, và $O$ nằm ngay tại trung điểm cạnh huyền.

**Câu 4 (Q4)**: Khi tung một đồng xu ngẫu nhiên 10 lần, ta có chắc chắn nhận được đúng 5 lần mặt sấp và 5 lần mặt ngửa không? Tại sao xác suất thực nghiệm lại khác với xác suất lý thuyết?
- *Gợi ý/Đáp án*: Chắc chắn là không. Xác suất lý thuyết $P=0.5$ chỉ là thước đo "khả năng". Trong thực tế, các biến cố diễn ra hoàn toàn ngẫu nhiên. Định luật số lớn (Law of Large Numbers) chứng minh rằng: Chỉ khi số lần thử $N$ tiến tới vô cùng lớn (ví dụ tung 100,000 lần), tỉ lệ mặt sấp thực nghiệm mới dần hội tụ chính xác về mức 50%.

**Câu 5 (Q5)**: Làm thế nào mà tính chất dãy tỉ số bằng nhau giúp chúng ta giải quyết các bài toán đời sống liên quan đến chia tỉ lệ (ví dụ: chia lãi suất kinh doanh)?
- *Gợi ý/Đáp án*: Tính chất $\frac{x}{a} = \frac{y}{b} = \frac{x+y}{a+b}$ cho phép ta đặt tổng lượng (như tổng lợi nhuận) lên tử số và tổng hệ số góp vốn lên mẫu số. Từ đó tìm ra hệ số tỉ lệ chung $k$. Dùng $k$ nhân ngược lại với vốn góp của từng cá nhân sẽ ra lợi nhuận công bằng tương ứng mà không cần giải hệ phương trình phức tạp.

## 10. Bài Tập Thực Hành Đánh Giá (Homework & Practice Problems)

**Bài 1: (Đại số - Tính toán tổng hợp Đa Thức)**
Cho hai đa thức một biến sau:
$A(x) = 2x^4 - x^3 + 5x^2 - 3x + 7$
$B(x) = -2x^4 + 3x^3 - x^2 + 3x - 2$
a) Tính $P(x) = A(x) + B(x)$. Sắp xếp $P(x)$ theo lũy thừa giảm dần của biến.
b) Tính $Q(x) = A(x) - B(x)$.
c) Tìm nghiệm của đa thức $P(x)$ (nếu có).

*Hướng dẫn giải (Step-by-step Solution Proofs):*
a) Thực hiện phép cộng theo cột dọc hoặc nhóm các hạng tử đồng dạng:
$P(x) = (2x^4 - 2x^4) + (-x^3 + 3x^3) + (5x^2 - x^2) + (-3x + 3x) + (7 - 2)$
$P(x) = 0 + 2x^3 + 4x^2 + 0 + 5$
Vậy $P(x) = 2x^3 + 4x^2 + 5$. Đa thức bậc 3.

b) Tương tự cho phép trừ (nhớ đổi dấu toàn bộ đa thức B):
$Q(x) = (2x^4 - (-2x^4)) + (-x^3 - 3x^3) + (5x^2 - (-x^2)) + (-3x - 3x) + (7 - (-2))$
$Q(x) = 4x^4 - 4x^3 + 6x^2 - 6x + 9$.

c) Tìm nghiệm $P(x) = 0 \Rightarrow 2x^3 + 4x^2 + 5 = 0$. Bằng phương pháp thử hoặc sử dụng máy tính, nhận thấy hàm liên tục thay đổi dấu tại một vị trí âm. Học sinh dùng Python (như trong bài Lab) để tính sẽ ra nghiệm thực duy nhất $x \approx -2.33$.

**Bài 2: (Hình học - Chứng minh Hình Học Suy Diễn Logic)**
Cho tam giác $ABC$ vuông tại $A$ ($AB < AC$). Kẻ đường phân giác $BD$ của góc $\widehat{ABC}$ ($D \in AC$). Kẻ $DE$ vuông góc với $BC$ tại $E$. Gọi $K$ là giao điểm của $AB$ và $ED$.
a) Chứng minh $\Delta ABD = \Delta EBD$.
b) Chứng minh $BD$ là đường trung trực của đoạn thẳng $AE$.
c) Chứng minh $\Delta DKC$ cân.

*Hướng dẫn giải (Step-by-step Solution Proofs):*
a) Xét hai tam giác vuông $\Delta ABD$ ($\widehat{A}=90^\circ$) và $\Delta EBD$ ($\widehat{E}=90^\circ$):
- Cạnh huyền $BD$ chung.
- $\widehat{ABD} = \widehat{EBD}$ (do $BD$ là đường phân giác của góc $B$).
$\Rightarrow \Delta ABD = \Delta EBD$ (Cạnh huyền - góc nhọn).

b) Vì $\Delta ABD = \Delta EBD$ (chứng minh ở a)
$\Rightarrow BA = BE$ (hai cạnh tương ứng) và $DA = DE$ (hai cạnh tương ứng).
Vì $BA = BE$ nên $B$ nằm trên đường trung trực của $AE$.
Vì $DA = DE$ nên $D$ nằm trên đường trung trực của $AE$.
$\Rightarrow BD$ chính là đường trung trực của đoạn thẳng $AE$. (Đpcm)

c) Xét $\Delta ADK$ và $\Delta EDC$ có:
- $\widehat{DAK} = \widehat{DEC} = 90^\circ$.
- $AD = ED$ (chứng minh ở a).
- $\widehat{ADK} = \widehat{EDC}$ (hai góc đối đỉnh).
$\Rightarrow \Delta ADK = \Delta EDC$ (g.c.g).
$\Rightarrow DK = DC$ (hai cạnh tương ứng).
Vậy tam giác $DKC$ cân tại $D$. (Đpcm)

**Bài 3: (Thống kê - Ứng Dụng Thực Tiễn)**
Nhà bạn An thu hoạch được 500kg trái cây gồm: Xoài, Ổi, Cam, Bưởi. Biết rằng số lượng khối lượng thu hoạch của 4 loại tỉ lệ thuận với các số 2; 3; 4; 1.
a) Tính khối lượng thu hoạch của mỗi loại trái cây.
b) Vẽ biểu đồ hình quạt tròn biểu diễn tỉ lệ phần trăm các loại trái cây.

*Hướng dẫn giải:*
a) Gọi khối lượng Xoài, Ổi, Cam, Bưởi lần lượt là $x, y, z, t$ (kg) ($x,y,z,t > 0$).
Theo bài ra ta có: $\frac{x}{2} = \frac{y}{3} = \frac{z}{4} = \frac{t}{1}$ và $x + y + z + t = 500$.
Áp dụng tính chất dãy tỉ số bằng nhau:
$\frac{x}{2} = \frac{y}{3} = \frac{z}{4} = \frac{t}{1} = \frac{x+y+z+t}{2+3+4+1} = \frac{500}{10} = 50$.
$\Rightarrow x = 50 \cdot 2 = 100$ kg (Xoài)
$\Rightarrow y = 50 \cdot 3 = 150$ kg (Ổi)
$\Rightarrow z = 50 \cdot 4 = 200$ kg (Cam)
$\Rightarrow t = 50 \cdot 1 = 50$ kg (Bưởi)

b) Tính tỉ lệ phần trăm để vẽ biểu đồ quạt:
Xoài: $\frac{100}{500} \cdot 100\% = 20\%$
Ổi: $\frac{150}{500} \cdot 100\% = 30\%$
Cam: $\frac{200}{500} \cdot 100\% = 40\%$
Bưởi: $\frac{50}{500} \cdot 100\% = 10\%$
(Học sinh tự dùng compa và thước đo độ để vẽ vòng tròn với các cung tương ứng).

## 12. Bảng Tiêu Chí Đánh Giá Capstone Project (Assessment Rubric Table)

Thang điểm: 100 điểm tổng (100-point scale). Giáo viên sử dụng Rubric này để chấm điểm dự án nhóm cuối khóa.

| Tiêu Chí (Criteria) | Xuất Sắc (Excellent - 100%) | Đạt Yêu Cầu (Proficient - 75%) | Cần Cố Gắng (Basic - 50%) | Điểm Nhóm |
| ------------------- | --------------------------- | ------------------------------ | ------------------------- | --------- |
| **1. Tính Chính Xác Toán Học (Mathematical Accuracy) - Hệ số 0.3** | Code/Mô hình giải quyết bài toán hoàn toàn chính xác, không có lỗi logic, hiển thị số liệu chuẩn. Ứng dụng đúng nguyên lý Toán 7. (30đ) | Giải quyết được đa số bài toán, còn một vài sai sót nhỏ về làm tròn số hoặc ngoại lệ biên (edge cases). (22.5đ) | Code giải sai kết quả toán học, không phản ánh đúng định lý Toán 7, mắc lỗi sai cơ bản. (15đ) | ___ / 30 |
| **2. Kỹ Thuật Lập Trình & Công Cụ (Technical Execution) - Hệ số 0.3** | Sử dụng xuất sắc Python/GeoGebra. Cấu trúc code sạch sẽ (clean code), có chú thích rõ ràng. Chương trình chạy mượt mà. (30đ) | Code chạy được nhưng chưa tối ưu về mặt thuật toán, có thể giật lag hoặc giao diện còn sơ sài thiếu các nút bấm cơ bản. (22.5đ) | Ứng dụng chạy bị lỗi (crash) khi nhập sai dữ liệu. Không đáp ứng đủ các tính năng tối thiểu yêu cầu trong Track. (15đ) | ___ / 30 |
| **3. Trực Quan Hóa & Thẩm Mỹ (UI/UX & Aesthetics) - Hệ số 0.2** | Giao diện đồ họa rất đẹp mắt, thân thiện với người dùng. Các biểu đồ dễ đọc, có phân tách màu sắc chuyên nghiệp. (20đ) | Giao diện cơ bản, đáp ứng đủ yêu cầu hiển thị. Chưa chăm chút nhiều cho trải nghiệm người dùng (UX). (15đ) | Giao diện lộn xộn, text tràn viền, khó sử dụng, gây nhầm lẫn cho người dùng. (10đ) | ___ / 20 |
| **4. Thuyết Trình & Phản Biện Nhóm (Presentation & Teamwork) - Hệ số 0.2**| Trình bày mạch lạc, tự tin, phong thái chuyên nghiệp. Tất cả thành viên đều tham gia tốt. Trả lời xuất sắc câu hỏi. (20đ) | Trình bày rõ ý chính nhưng đôi chỗ còn lúng túng. Có thành viên chưa tích cực. Trả lời được câu hỏi ở mức độ hiểu bài. (15đ)| Không nắm vững nội dung code do nhóm làm, đọc slide một cách máy móc, không trả lời được phản biện. (10đ) | ___ / 20 |
| **TỔNG CỘNG (TOTAL FINAL SCORE)** | | | | **___ / 100**|

---
**Lời kết (Closing Remarks):**
Tuần 10 khép lại một hành trình dài và thú vị của chương trình Toán 7 Kết Nối Tri Thức. Việc đưa công nghệ như Python và GeoGebra vào học Toán không chỉ biến những con số và định lý khô khan trở nên sinh động, mà còn rèn luyện khả năng tư duy giải quyết vấn đề (problem-solving) của một kỹ sư tương lai. Các em đã làm rất tốt. Hãy nghỉ ngơi, ôn tập kỹ và chuẩn bị tinh thần bước vào lớp 8 – nơi chúng ta sẽ khám phá Hằng Đẳng Thức Đáng Nhớ, Phân Thức Đại Số, Hàm Số Bậc Nhất và mở khóa sức mạnh của Định Lý Pythagore lừng danh. Chúc các em học sinh có một mùa hè thật vui và bổ ích!

# Tuần 6: Tỉ lệ thức và Đại lượng tỉ lệ (Week 6: Proportions and Proportional Quantities)

## 1. Mục Tiêu Khóa Học (Learning Objectives)

### Tiếng Việt
- Hiểu được định nghĩa tỉ lệ thức và các tính chất của nó.
- Vận dụng tính chất của dãy tỉ số bằng nhau để giải các bài toán thực tế.
- Phân biệt đại lượng tỉ lệ thuận và đại lượng tỉ lệ nghịch.
- Ứng dụng lập trình Python và công cụ GeoGebra để trực quan hóa và kiểm tra kết quả toán học.

### English
- Understand the definition of proportion and its properties.
- Apply the properties of a series of equal ratios to solve real-world problems.
- Distinguish between directly proportional and inversely proportional quantities.
- Apply Python programming and GeoGebra tools to visualize and verify mathematical results.

---

## 2. Các Bài Học Liên Quan Trong Sách Giáo Khoa (Related Textbook Lessons)
Khóa học này được thiết kế dựa trên Sách giáo khoa "Toán 7 - Kết Nối Tri Thức Với Cuộc Sống (Tập 2)". Các bài học liên quan bao gồm:
- **Bài 20**: Tỉ lệ thức (Proportions)
- **Bài 21**: Tính chất của dãy tỉ số bằng nhau (Properties of equal ratios)
- **Bài 22**: Đại lượng tỉ lệ thuận (Directly proportional quantities)
- **Bài 23**: Đại lượng tỉ lệ nghịch (Inversely proportional quantities)

---

## 3. Phần Mềm & Công Cụ (Software & Tooling)

| Công cụ (Tool) | Phiên bản (Version) | Mục đích sử dụng (Purpose) |
| --- | --- | --- |
| GeoGebra | 6.0+ | Trực quan hóa hình học, vẽ đồ thị hàm số |
| Python | 3.10+ | Lập trình tính toán tự động |
| SymPy | Mới nhất | Thư viện tính toán đại số (giải phương trình) |
| Matplotlib | Mới nhất | Vẽ đồ thị trực quan (Plotting graphs) |

---

## 4. Lý Thuyết Toán Học Chuyên Sâu (Deep Mathematical Theory)

### 4.1 Tỉ Lệ Thức (Proportions)
**Định nghĩa (Definition):**
Tỉ lệ thức là đẳng thức của hai tỉ số: $\frac{a}{b} = \frac{c}{d}$ (với $b, d \neq 0$).
A proportion is an equality of two ratios.

**Tính chất cơ bản (Fundamental property):**
Nếu $\frac{a}{b} = \frac{c}{d}$ thì $a \cdot d = b \cdot c$.
Ngược lại, nếu $ad = bc$ và $a, b, c, d \neq 0$ thì ta có thể lập được các tỉ lệ thức:
1. $\frac{a}{b} = \frac{c}{d}$
2. $\frac{a}{c} = \frac{b}{d}$
3. $\frac{d}{b} = \frac{c}{a}$
4. $\frac{d}{c} = \frac{b}{a}$

*Ví dụ (Example):*
Cho tỉ lệ thức $\frac{2}{3} = \frac{4}{6}$. Ta thấy $2 \cdot 6 = 3 \cdot 4 = 12$.

### 4.2 Tính chất của dãy tỉ số bằng nhau (Properties of a series of equal ratios)
Từ dãy tỉ số bằng nhau $\frac{a}{b} = \frac{c}{d} = \frac{e}{f}$, ta suy ra:
$$\frac{a}{b} = \frac{c}{d} = \frac{e}{f} = \frac{a + c + e}{b + d + f} = \frac{a - c + e}{b - d + f}$$
(Giả thiết các mẫu số đều khác 0).

*Bài toán ứng dụng (Application problem):*
Ba lớp 7A, 7B, 7C quyên góp được tổng cộng 120 cuốn sách. Số sách quyên góp của ba lớp tỉ lệ với 3, 4, 5. Tính số sách của mỗi lớp.
*Giải (Solution):*
Gọi số sách của ba lớp lần lượt là $x, y, z$. Ta có: $\frac{x}{3} = \frac{y}{4} = \frac{z}{5}$ và $x + y + z = 120$.
Áp dụng tính chất:
$\frac{x}{3} = \frac{y}{4} = \frac{z}{5} = \frac{x + y + z}{3 + 4 + 5} = \frac{120}{12} = 10$.
Từ đó, $x = 30, y = 40, z = 50$.

### 4.3 Đại lượng tỉ lệ thuận (Directly Proportional Quantities)
**Định nghĩa (Definition):**
Hai đại lượng $x$ và $y$ được gọi là tỉ lệ thuận với nhau nếu đại lượng này bằng đại lượng kia nhân với một hằng số khác 0.
Công thức (Formula): $y = k x$ ($k \neq 0$). ($k$ là hệ số tỉ lệ / constant of proportionality).

**Tính chất (Properties):**
- $\frac{y_1}{x_1} = \frac{y_2}{x_2} = ... = k$
- $\frac{x_1}{x_2} = \frac{y_1}{y_2}$

### 4.4 Đại lượng tỉ lệ nghịch (Inversely Proportional Quantities)
**Định nghĩa (Definition):**
Hai đại lượng $x$ và $y$ được gọi là tỉ lệ nghịch với nhau nếu đại lượng này tỉ lệ thuận với nghịch đảo của đại lượng kia, hoặc tích của chúng luôn bằng một hằng số khác 0.
Công thức (Formula): $y = \frac{a}{x}$ hay $xy = a$ ($a \neq 0$).

**Tính chất (Properties):**
- $x_1 y_1 = x_2 y_2 = ... = a$
- $\frac{x_1}{x_2} = \frac{y_2}{y_1}$

---

## 5. Sơ Đồ Biểu Diễn Trực Quan (ASCII/Markdown Diagrams)

### Biểu diễn cấu trúc Tỉ Lệ Thức (Proportion Structure)
```
      Numerator a           Numerator c
     -------------   =     -------------
     Denominator b         Denominator d

        (a)                  (c)
        ---        ==        ---
        (b)                  (d)

    Cross Multiplication (Nhân chéo):
         a * d  ====  b * c
```

### So sánh Tỉ Lệ Thuận và Tỉ Lệ Nghịch (Comparison)
```
[ Tỉ Lệ Thuận (Direct) ]           [ Tỉ Lệ Nghịch (Inverse) ]
       y = k * x                           y = a / x

       ^ y                                 ^ y
       |  /                                | |
       | /                                 |  \
       |/                                  |   \__
       +--------> x                        +--------> x
   (Đường thẳng qua gốc tọa độ)       (Đường cong Hyperbol)
```

---

## 6. Hoạt Động Thực Hành (Hands-on Activities)

### Hoạt Động 1: Cân Bằng Tỉ Số Bằng GeoGebra (Activity 1: Ratio Balance using GeoGebra)
1. Mở phần mềm GeoGebra Classic.
2. Tạo các thanh trượt (Sliders) cho các biến `a`, `b`, `c`.
3. Nhập vào thanh lệnh (Input bar): `d = (b * c) / a`.
4. Quan sát giá trị của `d` thay đổi khi bạn điều chỉnh `a, b, c`.
5. Tạo hai đoạn thẳng có độ dài là `a/b` và `c/d` để thấy chúng luôn bằng nhau.

### Hoạt Động 2: Giải Bài Toán Thực Tế (Activity 2: Solving Real-World Word Problems)
*Tình huống (Scenario):*
Một đội công nhân gồm 15 người hoàn thành một công việc trong 20 ngày. Nếu muốn hoàn thành công việc đó trong 12 ngày thì cần bao nhiêu công nhân? (Biết năng suất mỗi người như nhau).

*Phân tích (Analysis):*
Số công nhân và số ngày hoàn thành là hai đại lượng tỉ lệ nghịch.
Gọi số công nhân cần thiết là $x$. Ta có: $15 \cdot 20 = x \cdot 12 \Rightarrow 300 = 12x \Rightarrow x = 25$.
Vậy cần 25 công nhân.

---

## 7. Mã Nguồn Python Mô Phỏng (Python Simulation Code)

Sử dụng thư viện `sympy` để giải phương trình tỉ lệ thức và `matplotlib` để vẽ đồ thị hàm số tỉ lệ.

```python
# week06_simulation.py
# Yêu cầu cài đặt (Requirements): pip install sympy matplotlib numpy

import sympy as sp
import matplotlib.pyplot as plt
import numpy as np

def solve_proportion():
    print("--- Giải Tỉ Lệ Thức ---")
    print("Giải phương trình: 3 / x = 5 / (x + 4)")
    
    # Khai báo biến (Define variable)
    x = sp.Symbol('x')
    
    # Thiết lập phương trình (Set up equation) 3/x = 5/(x+4)
    # Tương đương (Equivalent to): 3*(x+4) = 5*x
    eq = sp.Eq(3 * (x + 4), 5 * x)
    
    # Giải phương trình (Solve)
    solution = sp.solve(eq, x)
    print(f"Nghiệm của phương trình là (Solution is): x = {solution[0]}")
    print()

def plot_proportions():
    print("--- Vẽ Đồ Thị Tỉ Lệ Thuận và Tỉ Lệ Nghịch ---")
    
    # Tạo dữ liệu x từ 1 đến 10 (Generate x data from 1 to 10)
    x_vals = np.linspace(1, 10, 100)
    
    # Tỉ lệ thuận: y = 2x (Direct proportion)
    y_direct = 2 * x_vals
    
    # Tỉ lệ nghịch: y = 12/x (Inverse proportion)
    y_inverse = 12 / x_vals
    
    # Tạo khung vẽ (Create figure)
    plt.figure(figsize=(10, 5))
    
    # Đồ thị Tỉ lệ thuận (Direct proportion plot)
    plt.subplot(1, 2, 1)
    plt.plot(x_vals, y_direct, 'b-', label='y = 2x')
    plt.title('Đại Lượng Tỉ Lệ Thuận (Direct Proportion)')
    plt.xlabel('x')
    plt.ylabel('y')
    plt.grid(True)
    plt.legend()
    
    # Đồ thị Tỉ lệ nghịch (Inverse proportion plot)
    plt.subplot(1, 2, 2)
    plt.plot(x_vals, y_inverse, 'r-', label='y = 12/x')
    plt.title('Đại Lượng Tỉ Lệ Nghịch (Inverse Proportion)')
    plt.xlabel('x')
    plt.ylabel('y')
    plt.grid(True)
    plt.legend()
    
    plt.tight_layout()
    plt.show()

if __name__ == "__main__":
    solve_proportion()
    plot_proportions()
```

---

## 8. Những Lỗi Thường Gặp Cần Tránh (Common Mistakes & Misconceptions)

⚠️ **Lỗi 1: Nhầm lẫn phép cộng ở mẫu và tử (Confusion with addition in ratios)**
- Sai lầm (Wrong): $\frac{a}{b} + \frac{c}{d} = \frac{a+c}{b+d}$
- Đúng (Right): Tính chất của dãy tỉ số bằng nhau là: Từ $\frac{a}{b} = \frac{c}{d}$, ta suy ra bằng $\frac{a+c}{b+d}$. Chú ý đây là **dấu bằng**, không phải phép cộng hai phân số!

⚠️ **Lỗi 2: Quên hằng số tỉ lệ (Forgetting the constant of proportionality)**
Khi giải bài toán: "Chia số 100 thành hai phần tỉ lệ với 2 và 3", học sinh thường chỉ viết $x = 2, y = 3$.
- Đúng (Right): Phải gọi $x = 2k, y = 3k$, sau đó tính $2k + 3k = 100 \Rightarrow 5k = 100 \Rightarrow k = 20$. Suy ra $x = 40, y = 60$.

⚠️ **Lỗi 3: Nhầm lẫn giữa tỉ lệ thuận và tỉ lệ nghịch (Confusing direct and inverse)**
- Nhớ kỹ: Cùng tăng, cùng giảm (theo một tỉ lệ) -> Tỉ lệ thuận.
- Một cái tăng, một cái giảm (theo một tỉ lệ) -> Tỉ lệ nghịch (Ví dụ: số công nhân và thời gian làm việc).

---

## 9. Câu Hỏi Thảo Luận (Discussion Questions)

**Câu 1:** Trong thực tế, vận tốc của xe ô tô và thời gian đi từ Hà Nội đến Hải Phòng là đại lượng tỉ lệ thuận hay tỉ lệ nghịch? Tại sao?
*Gợi ý (Hint):* Cùng một quãng đường, nếu đi càng nhanh (vận tốc tăng) thì thời gian đến nơi sẽ ra sao? Đây là tỉ lệ nghịch ($v \cdot t = s$).

**Câu 2:** Lấy ví dụ về hai đại lượng tỉ lệ thuận trong cuộc sống hàng ngày.
*Gợi ý (Hint):* Số lượng áo mua và tổng số tiền phải trả (giả sử giá mỗi áo là cố định).

**Câu 3:** Tính chất của dãy tỉ số bằng nhau có thể mở rộng cho bao nhiêu tỉ số?
*Gợi ý (Hint):* Có thể mở rộng cho $n$ tỉ số: $\frac{a_1}{b_1} = \frac{a_2}{b_2} = ... = \frac{a_n}{b_n} = \frac{a_1 + a_2 + ... + a_n}{b_1 + b_2 + ... + b_n}$.

**Câu 4:** Làm thế nào để kiểm tra nhanh 4 số $a, b, c, d$ có lập thành tỉ lệ thức không?
*Gợi ý (Hint):* Kiểm tra tích chéo $a \cdot d$ có bằng $b \cdot c$ hay không.

**Câu 5:** Khối lượng và thể tích của cùng một loại vật liệu (như nước tinh khiết) là tỉ lệ thuận hay tỉ lệ nghịch?
*Gợi ý (Hint):* Tỉ lệ thuận. $m = D \cdot V$ ($D$ là khối lượng riêng không đổi).

---

## 10. Bài Tập Về Nhà (Homework & Practice Problems)

**Bài 1 (Problem 1):** 
Tìm x trong các tỉ lệ thức sau:
a) $\frac{x}{5} = \frac{12}{15}$
b) $\frac{x-1}{3} = \frac{8}{6}$

*Giải (Solution):*
a) $x = \frac{5 \cdot 12}{15} = 4$.
b) $\frac{x-1}{3} = \frac{4}{3} \Rightarrow x - 1 = 4 \Rightarrow x = 5$.

**Bài 2 (Problem 2):**
Số đo ba góc của tam giác ABC tỉ lệ với 2, 3, 4. Tính số đo mỗi góc.

*Giải (Solution):*
Gọi số đo ba góc lần lượt là $A, B, C$. Ta có: $\frac{A}{2} = \frac{B}{3} = \frac{C}{4}$ và $A + B + C = 180^\circ$.
Áp dụng tính chất dãy tỉ số bằng nhau:
$\frac{A}{2} = \frac{B}{3} = \frac{C}{4} = \frac{A + B + C}{2 + 3 + 4} = \frac{180^\circ}{9} = 20^\circ$.
Vậy: $A = 40^\circ, B = 60^\circ, C = 80^\circ$.

**Bài 3 (Problem 3):**
Một nhóm 4 người thợ làm xong một công việc trong 15 giờ. Hỏi 6 người thợ (với cùng năng suất) sẽ làm xong công việc đó trong bao lâu?

*Giải (Solution):*
Số thợ và thời gian hoàn thành là hai đại lượng tỉ lệ nghịch.
Gọi thời gian 6 người hoàn thành là $t$.
Ta có: $4 \cdot 15 = 6 \cdot t \Rightarrow 60 = 6t \Rightarrow t = 10$.
Vậy 6 người làm xong trong 10 giờ.

**Bài 4 (Problem 4):**
(Lập trình Python). Hãy viết một đoạn code SymPy để giải hệ phương trình:
$x/2 = y/5$ và $x + y = 21$.

*Giải (Solution):*
```python
import sympy as sp
x, y = sp.symbols('x y')
eq1 = sp.Eq(x/2, y/5)
eq2 = sp.Eq(x + y, 21)
solution = sp.solve((eq1, eq2), (x, y))
print(solution) # Kết quả: {x: 6, y: 15}
```

**Bài 5 (Problem 5):**
Cho $\frac{a}{b} = \frac{c}{d}$. Chứng minh rằng: $\frac{a+b}{a-b} = \frac{c+d}{c-d}$ (giả sử các mẫu khác 0).

*Chứng minh (Proof):*
Đặt $\frac{a}{b} = \frac{c}{d} = k$.
Suy ra $a = bk$ và $c = dk$.
Xét vế trái: $VT = \frac{a+b}{a-b} = \frac{bk+b}{bk-b} = \frac{b(k+1)}{b(k-1)} = \frac{k+1}{k-1}$.
Xét vế phải: $VP = \frac{c+d}{c-d} = \frac{dk+d}{dk-d} = \frac{d(k+1)}{d(k-1)} = \frac{k+1}{k-1}$.
Vì $VT = VP$, nên ta có điều phải chứng minh.

---

## 11. Bảng Tiêu Chí Đánh Giá (Assessment Rubric)

Thang điểm 100 (100-point scale).

| Tiêu chí (Criteria) | Xuất sắc (Excellent) (90-100) | Khá (Good) (70-89) | Cần cố gắng (Needs Improvement) (<70) |
| --- | --- | --- | --- |
| **Lý thuyết (Theory - 30%)** | Giải thích chính xác, dùng đúng thuật ngữ, viết rõ công thức LaTeX. | Hiểu cơ bản nhưng còn sai sót nhỏ trong biểu diễn. | Chưa nắm rõ khái niệm, nhầm lẫn công thức. |
| **Thực hành Toán (Math Practice - 40%)** | Trình bày lời giải bài tập logic, rõ ràng, không sai số. | Lời giải đúng nhưng chưa giải thích rõ bước làm. | Tính toán sai hoặc sai phương pháp giải. |
| **Công cụ (Tooling - 20%)** | Viết code Python chạy không lỗi, dùng GeoGebra thành thạo. | Code chạy được nhưng chưa tối ưu, vẽ hình cơ bản. | Không chạy được code, không biết dùng GeoGebra. |
| **Thái độ & Trình bày (Attitude - 10%)** | Báo cáo đẹp, đủ song ngữ, nộp bài đúng hạn. | Trình bày khá gọn, thỉnh thoảng thiếu chú thích. | Báo cáo cẩu thả, nộp muộn. |

---

*Kết thúc bài học Tuần 6. Chúc các em học sinh nắm vững kiến thức về tỉ lệ thức và tự tin áp dụng vào thực tế! (End of Week 6. Good luck with your studies!)*

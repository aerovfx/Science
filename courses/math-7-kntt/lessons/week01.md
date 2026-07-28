# Tuần 1: Tập Hợp Số Hữu Tỉ $\mathbb{Q}$ & Các Phép Tính / Week 1: Set of Rational Numbers $\mathbb{Q}$ & Operations

## 1. Mục Tiêu Bài Học (Learning Objectives)
* **Vietnamese:** 
  - Nhận biết được số hữu tỉ và tập hợp các số hữu tỉ $\mathbb{Q}$.
  - Biểu diễn được số hữu tỉ trên trục số và nhận biết số đối.
  - Thực hiện thành thạo các phép tính cộng, trừ, nhân, chia số hữu tỉ.
  - Áp dụng các quy tắc lũy thừa với số mũ tự nhiên của một số hữu tỉ.
  - Vận dụng thứ tự thực hiện phép tính và quy tắc chuyển vế để giải các bài toán.
* **English:**
  - Recognize rational numbers and the set of rational numbers $\mathbb{Q}$.
  - Represent rational numbers on the number line and identify opposite numbers.
  - Proficiently perform addition, subtraction, multiplication, and division of rational numbers.
  - Apply exponentiation rules for rational numbers with natural exponents.
  - Apply the order of operations and transposition rule to solve mathematical problems.

## 2. Bài Học SGK Liên Quan (Related Textbook Lessons)
- SGK Kết nối tri thức Toán 7 Tập 1:
  - Bài 1: Tập hợp các số hữu tỉ.
  - Bài 2: Cộng, trừ, nhân, chia số hữu tỉ.
  - Bài 3: Lũy thừa với số mũ tự nhiên của một số hữu tỉ.
  - Bài 4: Thứ tự thực hiện các phép tính. Quy tắc chuyển vế.

## 3. Phần Mềm & Công Cụ (Software & Tooling)
| Software / Tool | Purpose |
|---|---|
| Python 3.10+ | Scientific computing, logic scripting, plotting. |
| SymPy | Symbolic mathematics, exact fraction representation. |
| Matplotlib | Plotting number lines and visualizing values. |
| GeoGebra 6.0 | Interactive number line visualization. |

## 4. Lý Thuyết Chuyên Sâu (Deep Mathematical Theory)

### Định Nghĩa Tập Số Hữu Tỉ $\mathbb{Q}$
Tập hợp số hữu tỉ được định nghĩa là:
$$ \mathbb{Q} = \left\{ \frac{a}{b} \mid a,b \in \mathbb{Z}, b \neq 0 \right\} $$

Mối quan hệ giữa các tập hợp số:
$$ \mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} $$

### Biểu Diễn Trục Số và Số Đối
Mọi số hữu tỉ đều có thể biểu diễn trên trục số.
Số đối của số hữu tỉ $x$ kí hiệu là $-x$.
Nếu $x = \frac{a}{b}$, thì số đối là $-\frac{a}{b} = \frac{-a}{b} = \frac{a}{-b}$.

### Các Phép Tính Cơ Bản
Cho $x = \frac{a}{m}$ và $y = \frac{b}{m}$ (với $m > 0$):
* Cộng: $x + y = \frac{a + b}{m}$
* Trừ: $x - y = \frac{a - b}{m}$
Cho $x = \frac{a}{b}$ và $y = \frac{c}{d}$:
* Nhân: $x \cdot y = \frac{a \cdot c}{b \cdot d}$
* Chia: $x : y = \frac{a \cdot d}{b \cdot c}$ (với $y \neq 0$)

### Quy Tắc Lũy Thừa
$$ x^m \cdot x^n = x^{m+n} $$
$$ (x^m)^n = x^{m \cdot n} $$
$$ (x \cdot y)^n = x^n \cdot y^n $$
$$ \left(\frac{x}{y}\right)^n = \frac{x^n}{y^n} $$

### Quy Tắc Chuyển Vế
Khi chuyển một số hạng từ vế này sang vế kia của một đẳng thức, ta phải đổi dấu số hạng đó.
$$ x + y = z \implies x = z - y $$










<!-- Extra spacing for layout considerations and printing margins -->










## 5. Sơ Đồ & Hình Ảnh (ASCII/Markdown Diagrams)
```text
Trục Số Hữu Tỉ (Rational Number Line)
      -1.5      -1      -0.5       0       0.5       1       1.5
<-------|--------|--------|--------|--------|--------|--------|------->
       -3/2             -1/2              1/2               3/2
```

## 6. Hoạt Động Thực Hành (Hands-on Activities)
**Hands-on Lab:** Fraction arithmetic trainer & order of operations solver.
- Bước 1: Liệt kê 5 số hữu tỉ bất kỳ dưới dạng phân số.
- Bước 2: Dùng GeoGebra để chấm 5 điểm này trên trục số.
- Bước 3: Đổi chỗ các dấu cộng, trừ, nhân, chia giữa chúng để tìm giá trị lớn nhất có thể.
- Bước 4: Kiểm tra lại bằng máy tính cầm tay (Casio/Vinacal).

## 7. Lập Trình Mô Phỏng (Python Lab)
**Python Lab:** SymPy exact rational fraction arithmetic calculator & number line plotter.

```python
import sympy as sp
import matplotlib.pyplot as plt

def exact_fraction_calc():
    a = sp.Rational(1, 3)
    b = sp.Rational(2, 5)
    print(f"Addition: {a} + {b} = {a + b}")
    print(f"Multiplication: {a} * {b} = {a * b}")

def plot_number_line():
    fig, ax = plt.subplots(figsize=(8, 2))
    points = [-1.5, -0.5, 0, 0.5, 1.5]
    labels = ['-3/2', '-1/2', '0', '1/2', '3/2']
    
    ax.scatter(points, [0]*len(points), color='red')
    for p, l in zip(points, labels):
        ax.annotate(l, (p, 0.1), ha='center')
        
    ax.axhline(0, color='black')
    ax.set_xlim(-2, 2)
    ax.set_ylim(-1, 1)
    ax.set_yticks([])
    plt.title("Rational Number Line")
    plt.show()

if __name__ == '__main__':
    exact_fraction_calc()
    plot_number_line()
```

## 8. Những Lỗi Thường Gặp (Common Mistakes & Misconceptions)
⚠️ **Lỗi sai:** Cộng tử với tử, mẫu với mẫu.
- Sai: $\frac{1}{2} + \frac{1}{3} = \frac{2}{5}$
- Đúng: Quy đồng mẫu số trước: $\frac{3}{6} + \frac{2}{6} = \frac{5}{6}$
⚠️ **Lỗi sai:** Nhầm dấu khi áp dụng quy tắc chuyển vế.
- Nếu $x - 5 = 2$, suy ra $x = 2 - 5$ (Sai), phải là $x = 2 + 5 = 7$.

## 9. Câu Hỏi Thảo Luận (Discussion Questions)
1. Tại sao mẫu số của một số hữu tỉ phải khác 0? (Hint: Phép chia cho 0 không xác định).
2. Số 0 có phải là số hữu tỉ không? Vì sao? (Hint: $0 = \frac{0}{1}$).
3. Lũy thừa bậc 0 của một số hữu tỉ bằng bao nhiêu? (Hint: Bằng 1 với cơ số khác 0).
4. Phân số $\frac{-3}{-4}$ có phải là số hữu tỉ dương không? (Hint: Có, bằng $\frac{3}{4}$).
5. Làm thế nào để tìm một số hữu tỉ nằm giữa $\frac{1}{3}$ và $\frac{1}{2}$? (Hint: Quy đồng hoặc lấy trung bình cộng).










<!-- Extra spacing for layout considerations and printing margins -->










## 10. Bài Tập (Homework & Practice Problems)
**Bài 1:** Tính giá trị biểu thức: $A = \left(\frac{1}{2} + \frac{1}{3}\right) \cdot \frac{6}{5}$
**Giải chi tiết:**
- Quy đồng trong ngoặc: $\frac{1}{2} = \frac{3}{6}$, $\frac{1}{3} = \frac{2}{6}$
- Tổng trong ngoặc: $\frac{3}{6} + \frac{2}{6} = \frac{5}{6}$
- Nhân với $\frac{6}{5}$: $A = \frac{5}{6} \cdot \frac{6}{5} = 1$

**Bài 2:** Tìm $x$, biết: $2x - \frac{1}{3} = \frac{5}{3}$
**Giải chi tiết:**
- Chuyển vế: $2x = \frac{5}{3} + \frac{1}{3} = \frac{6}{3} = 2$
- Tìm x: $x = 2 : 2 = 1$

## 12. Bảng Tiêu Chí Đánh Giá (Assessment Rubric) - Thang Điểm 100 (100-Point Scale)

| Tiêu chí / Criteria | Điểm / Points | Mô tả chi tiết / Detailed Description | Mức xuất sắc (90-100%) | Mức Khá (70-89%) | Mức Đạt (50-69%) | Cần cố gắng (<50%) |
|---------------------|---------------|-----------------------------------------|------------------------|------------------|------------------|--------------------|
| **Lý thuyết (Theory)** | 20 | Hiểu rõ các định nghĩa, khái niệm toán học cốt lõi trong bài học. / Demonstrates clear understanding of definitions and core mathematical concepts. | Hoàn hảo | Rất tốt | Đạt yêu cầu | Còn nhiều thiếu sót |
| **Thực hành (Hands-on)** | 20 | Thực hiện đầy đủ các bước thực hành Lab, báo cáo kết quả rõ ràng. / Completes all Hands-on Lab steps, reports results clearly. | Hoàn thành xuất sắc | Hoàn thành tốt | Hoàn thành cơ bản | Chưa hoàn thành |
| **Lập trình (Python)** | 20 | Code chạy không lỗi, kết quả chính xác, giải thích được logic. / Code runs without errors, produces correct results, logic is well-explained. | Tối ưu, sáng tạo | Đúng yêu cầu | Chạy được | Lỗi nhiều |
| **Bài tập (Homework)** | 30 | Hoàn thành tất cả bài tập, trình bày lời giải (chứng minh) chi tiết, chính xác. / Completes all exercises with detailed, accurate step-by-step proofs/solutions. | Không sai sót | Sai 1-2 lỗi nhỏ | Sai một số câu | Bỏ trống nhiều |
| **Thảo luận (Discussion)**| 10 | Tham gia trả lời câu hỏi mở, đưa ra lập luận chặt chẽ. / Participates in answering open questions with solid arguments. | Lập luận sắc bén | Trả lời đầy đủ | Trả lời sơ sài | Không tham gia |
























































































































































































































































































































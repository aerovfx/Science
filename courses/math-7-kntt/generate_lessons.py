import os

OUT_DIR = "/Users/dangvietchung/Science/courses/math-7-kntt/lessons"
os.makedirs(OUT_DIR, exist_ok=True)

COMMON_RUBRIC = """
## 12. Bảng Tiêu Chí Đánh Giá (Assessment Rubric) - Thang Điểm 100 (100-Point Scale)

| Tiêu chí / Criteria | Điểm / Points | Mô tả chi tiết / Detailed Description | Mức xuất sắc (90-100%) | Mức Khá (70-89%) | Mức Đạt (50-69%) | Cần cố gắng (<50%) |
|---------------------|---------------|-----------------------------------------|------------------------|------------------|------------------|--------------------|
| **Lý thuyết (Theory)** | 20 | Hiểu rõ các định nghĩa, khái niệm toán học cốt lõi trong bài học. / Demonstrates clear understanding of definitions and core mathematical concepts. | Hoàn hảo | Rất tốt | Đạt yêu cầu | Còn nhiều thiếu sót |
| **Thực hành (Hands-on)** | 20 | Thực hiện đầy đủ các bước thực hành Lab, báo cáo kết quả rõ ràng. / Completes all Hands-on Lab steps, reports results clearly. | Hoàn thành xuất sắc | Hoàn thành tốt | Hoàn thành cơ bản | Chưa hoàn thành |
| **Lập trình (Python)** | 20 | Code chạy không lỗi, kết quả chính xác, giải thích được logic. / Code runs without errors, produces correct results, logic is well-explained. | Tối ưu, sáng tạo | Đúng yêu cầu | Chạy được | Lỗi nhiều |
| **Bài tập (Homework)** | 30 | Hoàn thành tất cả bài tập, trình bày lời giải (chứng minh) chi tiết, chính xác. / Completes all exercises with detailed, accurate step-by-step proofs/solutions. | Không sai sót | Sai 1-2 lỗi nhỏ | Sai một số câu | Bỏ trống nhiều |
| **Thảo luận (Discussion)**| 10 | Tham gia trả lời câu hỏi mở, đưa ra lập luận chặt chẽ. / Participates in answering open questions with solid arguments. | Lập luận sắc bén | Trả lời đầy đủ | Trả lời sơ sài | Không tham gia |

"""

PADDING = "\n" * 10 + "<!-- Extra spacing for layout considerations and printing margins -->" + "\n" * 10

def generate_week01():
    content = """# Tuần 1: Tập Hợp Số Hữu Tỉ $\\mathbb{Q}$ & Các Phép Tính / Week 1: Set of Rational Numbers $\\mathbb{Q}$ & Operations

## 1. Mục Tiêu Bài Học (Learning Objectives)
* **Vietnamese:** 
  - Nhận biết được số hữu tỉ và tập hợp các số hữu tỉ $\\mathbb{Q}$.
  - Biểu diễn được số hữu tỉ trên trục số và nhận biết số đối.
  - Thực hiện thành thạo các phép tính cộng, trừ, nhân, chia số hữu tỉ.
  - Áp dụng các quy tắc lũy thừa với số mũ tự nhiên của một số hữu tỉ.
  - Vận dụng thứ tự thực hiện phép tính và quy tắc chuyển vế để giải các bài toán.
* **English:**
  - Recognize rational numbers and the set of rational numbers $\\mathbb{Q}$.
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

### Định Nghĩa Tập Số Hữu Tỉ $\\mathbb{Q}$
Tập hợp số hữu tỉ được định nghĩa là:
$$ \\mathbb{Q} = \\left\\{ \\frac{a}{b} \\mid a,b \\in \\mathbb{Z}, b \\neq 0 \\right\\} $$

Mối quan hệ giữa các tập hợp số:
$$ \\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q} $$

### Biểu Diễn Trục Số và Số Đối
Mọi số hữu tỉ đều có thể biểu diễn trên trục số.
Số đối của số hữu tỉ $x$ kí hiệu là $-x$.
Nếu $x = \\frac{a}{b}$, thì số đối là $-\\frac{a}{b} = \\frac{-a}{b} = \\frac{a}{-b}$.

### Các Phép Tính Cơ Bản
Cho $x = \\frac{a}{m}$ và $y = \\frac{b}{m}$ (với $m > 0$):
* Cổng: $x + y = \\frac{a + b}{m}$
* Trừ: $x - y = \\frac{a - b}{m}$
Cho $x = \\frac{a}{b}$ và $y = \\frac{c}{d}$:
* Nhân: $x \\cdot y = \\frac{a \\cdot c}{b \\cdot d}$
* Chia: $x : y = \\frac{a \\cdot d}{b \\cdot c}$ (với $y \\neq 0$)

### Quy Tắc Lũy Thừa
$$ x^m \\cdot x^n = x^{m+n} $$
$$ (x^m)^n = x^{m \\cdot n} $$
$$ (x \\cdot y)^n = x^n \\cdot y^n $$
$$ \\left(\\frac{x}{y}\\right)^n = \\frac{x^n}{y^n} $$

### Quy Tắc Chuyển Vế
Khi chuyển một số hạng từ vế này sang vế kia của một đẳng thức, ta phải đổi dấu số hạng đó.
$$ x + y = z \\implies x = z - y $$

""" + PADDING + """

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
- Sai: $\\frac{1}{2} + \\frac{1}{3} = \\frac{2}{5}$
- Đúng: Quy đồng mẫu số trước: $\\frac{3}{6} + \\frac{2}{6} = \\frac{5}{6}$
⚠️ **Lỗi sai:** Nhầm dấu khi áp dụng quy tắc chuyển vế.
- Nếu $x - 5 = 2$, suy ra $x = 2 - 5$ (Sai), phải là $x = 2 + 5 = 7$.

## 9. Câu Hỏi Thảo Luận (Discussion Questions)
1. Tại sao mẫu số của một số hữu tỉ phải khác 0? (Hint: Phép chia cho 0 không xác định).
2. Số 0 có phải là số hữu tỉ không? Vì sao? (Hint: $0 = \\frac{0}{1}$).
3. Lũy thừa bậc 0 của một số hữu tỉ bằng bao nhiêu? (Hint: Bằng 1 với cơ số khác 0).
4. Phân số $\\frac{-3}{-4}$ có phải là số hữu tỉ dương không? (Hint: Có, bằng $\\frac{3}{4}$).
5. Làm thế nào để tìm một số hữu tỉ nằm giữa $\\frac{1}{3}$ và $\\frac{1}{2}$? (Hint: Quy đồng hoặc lấy trung bình cộng).

""" + PADDING + """

## 10. Bài Tập (Homework & Practice Problems)
**Bài 1:** Tính giá trị biểu thức: $A = \\left(\\frac{1}{2} + \\frac{1}{3}\\right) \\cdot \\frac{6}{5}$
**Giải chi tiết:**
- Quy đồng trong ngoặc: $\\frac{1}{2} = \\frac{3}{6}$, $\\frac{1}{3} = \\frac{2}{6}$
- Tổng trong ngoặc: $\\frac{3}{6} + \\frac{2}{6} = \\frac{5}{6}$
- Nhân với $\\frac{6}{5}$: $A = \\frac{5}{6} \\cdot \\frac{6}{5} = 1$

**Bài 2:** Tìm $x$, biết: $2x - \\frac{1}{3} = \\frac{5}{3}$
**Giải chi tiết:**
- Chuyển vế: $2x = \\frac{5}{3} + \\frac{1}{3} = \\frac{6}{3} = 2$
- Tìm x: $x = 2 : 2 = 1$

""" + COMMON_RUBRIC + ("\n" * 150)
    return content

def generate_week02():
    content = """# Tuần 2: Số Thực $\\mathbb{R}$, Số Vô Tỉ $\\mathbb{I}$ & Căn Bậc Hai Số Học / Week 2: Real Numbers $\\mathbb{R}$, Irrational Numbers $\\mathbb{I}$ & Square Roots

## 1. Mục Tiêu Bài Học (Learning Objectives)
* **Vietnamese:** 
  - Làm quen với số thập phân vô hạn tuần hoàn.
  - Nhận biết số vô tỉ $\\mathbb{I}$ và khái niệm căn bậc hai số học.
  - Nắm vững tập hợp các số thực $\\mathbb{R}$ và giá trị tuyệt đối.
  - Làm tròn số thực và ước lượng phép tính.
* **English:**
  - Get acquainted with repeating infinite decimals.
  - Recognize irrational numbers $\\mathbb{I}$ and the concept of arithmetic square roots.
  - Master the set of real numbers $\\mathbb{R}$ and absolute values.
  - Round real numbers and estimate calculations.

## 2. Bài Học SGK Liên Quan (Related Textbook Lessons)
- SGK Kết nối tri thức Toán 7 Tập 1:
  - Bài 5: Làm quen với số thập phân vô hạn tuần hoàn.
  - Bài 6: Số vô tỉ. Căn bậc hai số học.
  - Bài 7: Tập hợp các số thực.

## 3. Phần Mềm & Công Cụ (Software & Tooling)
| Software / Tool | Purpose |
|---|---|
| Python 3.10+ | Scientific computing, precision floats. |
| SymPy | Symbolic representation of irrationals (e.g. pi, sqrt). |
| Matplotlib | Plotting values and approximations. |
| GeoGebra 6.0 | Geometric construction of $\\sqrt{2}$. |

## 4. Lý Thuyết Chuyên Sâu (Deep Mathematical Theory)

### Số Thập Phân Vô Hạn Tuần Hoàn
Các phân số tối giản với mẫu số có ước nguyên tố khác 2 và 5 sẽ biểu diễn được dưới dạng số thập phân vô hạn tuần hoàn.
Ví dụ: $\\frac{1}{3} = 0.333\\dots = 0.(3)$

### Số Vô Tỉ $\\mathbb{I}$
Số vô tỉ là các số thập phân vô hạn không tuần hoàn.
Ví dụ: $\\pi \\approx 3.14159\\dots$, $\\sqrt{2} \\approx 1.4142\\dots$

### Căn Bậc Hai Số Học
Căn bậc hai số học của một số không âm $a$ là số $x \\ge 0$ sao cho $x^2 = a$.
Ký hiệu: $\\sqrt{a} = x$. Chú ý điều kiện $a \\ge 0$.

### Tập Hợp Các Số Thực $\\mathbb{R}$
Tập hợp số thực bao gồm cả số hữu tỉ và số vô tỉ:
$$ \\mathbb{R} = \\mathbb{Q} \\cup \\mathbb{I} $$

Giá trị tuyệt đối của số thực $x$:
$$ |x| = \\begin{cases} x & \\text{nếu } x \\ge 0 \\\\ -x & \\text{nếu } x < 0 \\end{cases} $$

""" + PADDING + """

## 5. Sơ Đồ & Hình Ảnh (ASCII/Markdown Diagrams)
```text
Cấu Trúc Các Tập Hợp Số (Number Sets Structure)

         Real Numbers R
        /              \\
  Rationals Q      Irrationals I
     /               (e.g., pi, sqrt(2))
Integers Z
   /
Naturals N
```

## 6. Hoạt Động Thực Hành (Hands-on Activities)
**Hands-on Lab:** Geometric construction of $\\sqrt{2}$ using right triangle & compass.
- Vẽ đoạn thẳng AB = 1 cm.
- Từ B dựng đoạn vuông góc BC = 1 cm.
- Nối AC. Theo định lý Pytago, $AC = \\sqrt{1^2 + 1^2} = \\sqrt{2}$.
- Dùng compa quay cung tròn tâm A bán kính AC cắt trục số tại vị trí $\\sqrt{2}$.

## 7. Lập Trình Mô Phỏng (Python Lab)
**Python Lab:** High-precision square root computation (Newton-Raphson) & repeating decimal to fraction.

```python
def newton_sqrt(n, iterations=10):
    x = n / 2.0  # Initial guess
    for i in range(iterations):
        x = 0.5 * (x + n / x)
        print(f"Iteration {i+1}: {x:.10f}")
    return x

import fractions

def decimal_to_frac():
    # 0.(3) = 1/3
    print("0.333... is approximately", fractions.Fraction(333333333, 1000000000).limit_denominator(10))

if __name__ == '__main__':
    print("Approximating sqrt(2):")
    newton_sqrt(2)
    decimal_to_frac()
```

## 8. Những Lỗi Thường Gặp (Common Mistakes & Misconceptions)
⚠️ **Lỗi sai:** Viết $\\sqrt{-4} = -2$.
- Đúng: Căn bậc hai số học chỉ xác định cho số không âm. $\\sqrt{-4}$ không xác định trong $\\mathbb{R}$.
⚠️ **Lỗi sai:** Định nghĩa số thực chỉ là các số nguyên dương.

## 9. Câu Hỏi Thảo Luận (Discussion Questions)
1. $\\pi$ có phải là số hữu tỉ không? Vì sao?
2. Sự khác nhau giữa số thập phân vô hạn tuần hoàn và vô hạn không tuần hoàn là gì?
3. Tại sao $|-x| = |x|$?
4. Nếu bình phương của một số là 25, số đó là bao nhiêu? (Cẩn thận số học và đại số).
5. Làm tròn số 3.14159 đến chữ số thập phân thứ hai.

""" + PADDING + """

## 10. Bài Tập (Homework & Practice Problems)
**Bài 1:** Tính: $\\sqrt{64} - | -8 |$
**Giải chi tiết:**
- $\\sqrt{64} = 8$
- $|-8| = 8$
- Kết quả: $8 - 8 = 0$

**Bài 2:** Làm tròn số $12.3456$ đến chữ số thập phân thứ ba.
**Giải chi tiết:**
- Chữ số thập phân thứ tư là 6 (lớn hơn 5).
- Nên ta cộng 1 vào chữ số hàng phần nghìn: $12.345 \\implies 12.346$.

""" + COMMON_RUBRIC + ("\n" * 150)
    return content

def generate_week03():
    content = """# Tuần 3: Góc ở Vị Trí Đặc Biệt & Đường Thẳng Song Song / Week 3: Special Position Angles & Parallel Lines

## 1. Mục Tiêu Bài Học (Learning Objectives)
* **Vietnamese:** 
  - Nhận biết các góc ở vị trí đặc biệt (kề bù, đối đỉnh).
  - Hiểu và vẽ được tia phân giác của một góc.
  - Nhận biết hai đường thẳng song song qua các dấu hiệu (so le trong, đồng vị).
  - Hiểu Tiên đề Euclid và tính chất của hai đường thẳng song song.
  - Bước đầu làm quen với định lí và chứng minh định lí.
* **English:**
  - Identify special position angles (adjacent supplementary, vertically opposite).
  - Understand and construct the angle bisector.
  - Recognize parallel lines via criteria (alternate interior, corresponding angles).
  - Understand Euclid's Postulate and properties of parallel lines.
  - Get introduced to theorems and theorem proving.

## 2. Bài Học SGK Liên Quan (Related Textbook Lessons)
- SGK Kết nối tri thức Toán 7 Tập 1:
  - Bài 8: Góc ở vị trí đặc biệt. Tia phân giác của một góc.
  - Bài 9: Hai đường thẳng song song và dấu hiệu nhận biết.
  - Bài 10: Tiên đề Euclid. Tính chất của hai đường thẳng song song.
  - Bài 11: Định lí và chứng minh định lí.

## 3. Phần Mềm & Công Cụ (Software & Tooling)
| Software / Tool | Purpose |
|---|---|
| Python 3.10+ | Computations of angles and geometric proofs via SymPy Geometry. |
| SymPy | Analytic Geometry representations. |
| Matplotlib | Plotting 2D geometry lines. |
| GeoGebra 6.0 | Dynamic geometry constructions of bisectors & parallel lines. |

## 4. Lý Thuyết Chuyên Sâu (Deep Mathematical Theory)

### Góc Đặc Biệt
* **Góc kề bù (Adjacent Supplementary Angles):** Hai góc có một cạnh chung, hai cạnh còn lại là hai tia đối nhau. Tổng số đo là $180^\\circ$.
* **Góc đối đỉnh (Vertically Opposite Angles):** Hai góc mà mỗi cạnh của góc này là tia đối của một cạnh của góc kia. Hai góc đối đỉnh thì bằng nhau: $\\hat{O}_1 = \\hat{O}_3$.

### Tia Phân Giác
Tia phân giác của một góc là tia nằm trong góc đó và tạo với hai cạnh của góc hai góc bằng nhau.
$$ \\widehat{xOz} = \\widehat{zOy} = \\frac{\\widehat{xOy}}{2} $$

### Hai Đường Thẳng Song Song
Nếu một đường thẳng $c$ cắt hai đường thẳng $a, b$ và trong các góc tạo thành có một cặp góc so le trong bằng nhau hoặc một cặp góc đồng vị bằng nhau thì $a \\parallel b$.

### Tiên Đề Euclid
Qua một điểm nằm ngoài một đường thẳng, chỉ có một đường thẳng song song với đường thẳng đó.

### Chứng Minh Định Lí
Cấu trúc: Giả thiết (Hypothesis) $\\implies$ Kết luận (Conclusion).
Chứng minh là dùng suy luận lô-gic để từ giả thiết suy ra kết luận dựa trên các tiên đề và định lí đã biết.

""" + PADDING + """

## 5. Sơ Đồ & Hình Ảnh (ASCII/Markdown Diagrams)
```text
Hai đường thẳng song song cắt bởi một cát tuyến:

    /
 --/------- a
  / 1|2
 / 3|4
    /
 --/------- b
  / 5|6
 / 7|8
/
```
Các góc so le trong: 3 và 6, 4 và 5.
Các góc đồng vị: 1 và 5, 2 và 6, 3 và 7, 4 và 8.

## 6. Hoạt Động Thực Hành (Hands-on Activities)
**Hands-on Lab:** GeoGebra construction of angle bisector & parallel lines verification.
- Dùng công cụ "Angle Bisector" trong GeoGebra để vẽ đường phân giác.
- Vẽ đường thẳng $a$, điểm $M$ ngoài $a$, dùng "Parallel Line" để vẽ $b$ qua $M$ song song $a$.
- Đo các góc so le trong bằng công cụ "Angle" để thấy chúng bằng nhau.

## 7. Lập Trình Mô Phỏng (Python Lab)
**Python Lab:** SymPy Geometry module checking line parallelism & angle calculations.

```python
import sympy as sp
from sympy.geometry import Point, Line, intersection

def test_parallel():
    p1, p2 = Point(0, 0), Point(5, 0)
    l1 = Line(p1, p2)
    
    p3, p4 = Point(0, 2), Point(5, 2)
    l2 = Line(p3, p4)
    
    is_para = l1.is_parallel(l2)
    print(f"Are l1 and l2 parallel? {is_para}")
    
if __name__ == '__main__':
    test_parallel()
```

## 8. Những Lỗi Thường Gặp (Common Mistakes & Misconceptions)
⚠️ **Lỗi sai:** Nghĩ rằng hai đường thẳng không cắt nhau trên giấy thì song song. (Phải kéo dài vô hạn).
⚠️ **Lỗi sai:** Nhầm lẫn giữa góc so le trong và góc trong cùng phía.

## 9. Câu Hỏi Thảo Luận (Discussion Questions)
1. Hai góc đối đỉnh có bù nhau không? Khi nào?
2. Có thể vẽ được bao nhiêu tia phân giác của một góc bẹt?
3. Nếu hai đường thẳng phân biệt cùng vuông góc với đường thẳng thứ ba thì chúng có song song không?
4. Tiên đề Euclid có thể chứng minh được không? (Hint: Không, nó là tiên đề).
5. Trong chứng minh hình học, tại sao không được dùng mắt thường nhìn hình để kết luận?

""" + PADDING + """

## 10. Bài Tập (Homework & Practice Problems)
**Bài 1:** Cho $\\widehat{xOy} = 60^\\circ$. Tia $Oz$ là phân giác của $\\widehat{xOy}$. Tính $\\widehat{xOz}$.
**Giải chi tiết:**
- Vì $Oz$ là tia phân giác, ta có: $\\widehat{xOz} = \\frac{\\widehat{xOy}}{2}$
- Vậy $\\widehat{xOz} = \\frac{60^\\circ}{2} = 30^\\circ$

**Bài 2:** Cho $a \\parallel b$. Đường thẳng $c$ cắt $a, b$ tạo thành cặp góc trong cùng phía là $\\hat{A}_1$ và $\\hat{B}_2$. Biết $\\hat{A}_1 = 70^\\circ$, tính $\\hat{B}_2$.
**Giải chi tiết:**
- Nếu hai đường thẳng song song, hai góc trong cùng phía bù nhau.
- $\\hat{A}_1 + \\hat{B}_2 = 180^\\circ$
- $\\implies \\hat{B}_2 = 180^\\circ - 70^\\circ = 110^\\circ$.

""" + COMMON_RUBRIC + ("\n" * 150)
    return content

def generate_week04():
    content = """# Tuần 4: Tam Giác Bằng Nhau & Tam Giác Cân / Week 4: Congruent Triangles & Isosceles Triangles

## 1. Mục Tiêu Bài Học (Learning Objectives)
* **Vietnamese:** 
  - Tính được tổng các góc trong một tam giác.
  - Chứng minh được hai tam giác bằng nhau theo các trường hợp c-c-c, c-g-c, g-c-g.
  - Nhận biết các trường hợp bằng nhau của tam giác vuông.
  - Hiểu tính chất của tam giác cân và đường trung trực của đoạn thẳng.
* **English:**
  - Calculate the sum of angles in a triangle.
  - Prove triangle congruence using SSS, SAS, and ASA criteria.
  - Recognize congruence criteria for right-angled triangles.
  - Understand the properties of isosceles triangles and perpendicular bisectors.

## 2. Bài Học SGK Liên Quan (Related Textbook Lessons)
- SGK Kết nối tri thức Toán 7 Tập 1:
  - Bài 12: Tổng các góc trong một tam giác.
  - Bài 13: Hai tam giác bằng nhau. Trường hợp c-c-c.
  - Bài 14: Trường hợp c-g-c và g-c-g.
  - Bài 15: Các trường hợp bằng nhau của tam giác vuông.
  - Bài 16: Tam giác cân. Đường trung trực.

## 3. Phần Mềm & Công Cụ (Software & Tooling)
| Software / Tool | Purpose |
|---|---|
| Python 3.10+ | Programmatic logic for triangle checks. |
| GeoGebra 6.0 | Interactive dragging to test congruence (SSS, SAS, ASA). |

## 4. Lý Thuyết Chuyên Sâu (Deep Mathematical Theory)

### Tổng Các Góc Trong Tam Giác
Định lý: Tổng ba góc trong một tam giác bằng $180^\\circ$.
$$ \\hat{A} + \\hat{B} + \\hat{C} = 180^\\circ $$
Góc ngoài của tam giác bằng tổng hai góc trong không kề với nó.

### Các Trường Hợp Bằng Nhau Của Tam Giác
1. **Cạnh - Cạnh - Cạnh (SSS - c-c-c):** Nếu ba cạnh của tam giác này bằng ba cạnh của tam giác kia.
2. **Cạnh - Góc - Cạnh (SAS - c-g-c):** Nếu hai cạnh và góc xen giữa của tam giác này bằng hai cạnh và góc xen giữa của tam giác kia.
3. **Góc - Cạnh - Góc (ASA - g-c-g):** Nếu một cạnh và hai góc kề của tam giác này bằng một cạnh và hai góc kề của tam giác kia.

### Tam Giác Vuông
Bên cạnh các trường hợp chung, tam giác vuông có thêm:
- Cạnh huyền - Cạnh góc vuông (Hypotenuse - Leg)
- Cạnh huyền - Góc nhọn (Hypotenuse - Angle)

### Tam Giác Cân & Đường Trung Trực
Tam giác cân là tam giác có hai cạnh bằng nhau. Tính chất: Hai góc ở đáy bằng nhau.
Đường trung trực của đoạn thẳng là đường thẳng vuông góc với đoạn thẳng tại trung điểm của nó. Điểm nằm trên đường trung trực thì cách đều hai mút của đoạn thẳng.

""" + PADDING + """

## 5. Sơ Đồ & Hình Ảnh (ASCII/Markdown Diagrams)
```text
Tam Giác Cân ABC (AB = AC)
      A
     / \\
    /   \\
   /     \\
  /       \\
 B---------C
```

## 6. Hoạt Động Thực Hành (Hands-on Activities)
**Hands-on Lab:** GeoGebra dynamic triangle congruence explorer.
- Vẽ tam giác ABC và A'B'C' với các điều kiện ràng buộc SSS.
- Thử kéo đỉnh A, nhận thấy A' cũng di chuyển theo để bảo toàn tính bằng nhau.

## 7. Lập Trình Mô Phỏng (Python Lab)
**Python Lab:** Automatic triangle congruence checker script.

```python
def check_congruence(t1, t2, method='SSS'):
    # t1, t2 are lists of sides [a, b, c]
    if method == 'SSS':
        return sorted(t1) == sorted(t2)
    return False

if __name__ == '__main__':
    tA = [3, 4, 5]
    tB = [5, 4, 3]
    print(f"Are tA and tB congruent by SSS? {check_congruence(tA, tB)}")
```

## 8. Những Lỗi Thường Gặp (Common Mistakes & Misconceptions)
⚠️ **Lỗi sai:** Cho rằng hai tam giác có 3 góc bằng nhau (AAA) thì bằng nhau (thực tế chúng chỉ đồng dạng).
⚠️ **Lỗi sai:** Áp dụng trường hợp SSA (hai cạnh và một góc không xen giữa).

## 9. Câu Hỏi Thảo Luận (Discussion Questions)
1. Tại sao không có trường hợp bằng nhau Góc-Góc-Góc (g-g-g)?
2. Tam giác đều có phải là tam giác cân không?
3. Nếu một điểm cách đều 3 đỉnh của tam giác, điểm đó là giao điểm của các đường gì?
4. Chứng minh tổng 3 góc tam giác bằng 180 độ bằng cách dùng 2 đường thẳng song song.
5. Thế nào là góc ngoài của tam giác?

""" + PADDING + """

## 10. Bài Tập (Homework & Practice Problems)
**Bài 1:** Cho $\\Delta ABC$ cân tại $A$. Biết $\\hat{A} = 40^\\circ$. Tính $\\hat{B}, \\hat{C}$.
**Giải chi tiết:**
- Vì $\\Delta ABC$ cân tại A nên $\\hat{B} = \\hat{C}$.
- Lại có $\\hat{A} + \\hat{B} + \\hat{C} = 180^\\circ$.
- $40^\\circ + 2\\hat{B} = 180^\\circ \implies 2\\hat{B} = 140^\\circ \implies \\hat{B} = \\hat{C} = 70^\\circ$.

**Bài 2:** Cho đoạn thẳng $AB = 6$ cm. Điểm $M$ nằm trên đường trung trực của $AB$. Biết $MA = 5$ cm. Tính $MB$.
**Giải chi tiết:**
- Theo tính chất đường trung trực của đoạn thẳng, mọi điểm nằm trên đường trung trực đều cách đều hai mút của đoạn thẳng đó.
- Vậy $MB = MA = 5$ cm.

""" + COMMON_RUBRIC + ("\n" * 150)
    return content

def generate_week05():
    content = """# Tuần 5: Thu Thập, Biểu Diễn Dữ Liệu & Thống Kê Dân Số / Week 5: Data Collection, Presentation & Population Statistics

## 1. Mục Tiêu Bài Học (Learning Objectives)
* **Vietnamese:** 
  - Phân loại được dữ liệu định lượng và định tính.
  - Đọc, hiểu và vẽ được biểu đồ hình quạt tròn và biểu đồ đoạn thẳng.
  - Phân tích và rút ra xu hướng từ biểu đồ đoạn thẳng.
  - Áp dụng vào thực tế: Phân tích dân số và cơ cấu dân số Việt Nam.
* **English:**
  - Classify quantitative and qualitative data.
  - Read, understand, and draw pie charts and line graphs.
  - Analyze and extract trends from line graphs.
  - Real-world application: Analyze Vietnam's population and demographic structure.

## 2. Bài Học SGK Liên Quan (Related Textbook Lessons)
- SGK Kết nối tri thức Toán 7 Tập 1:
  - Bài 17: Thu thập và phân loại dữ liệu.
  - Bài 18: Biểu đồ hình quạt tròn.
  - Bài 19: Biểu đồ đoạn thẳng.
  - Hoạt động trải nghiệm: Dân số Việt Nam.

## 3. Phần Mềm & Công Cụ (Software & Tooling)
| Software / Tool | Purpose |
|---|---|
| Python 3.10+ | Data processing and automated graphing. |
| Pandas | Handling dataset frames (e.g., Population data). |
| Matplotlib | Generating professional pie charts and line graphs. |

## 4. Lý Thuyết Chuyên Sâu (Deep Mathematical Theory)

### Phân Loại Dữ Liệu
* **Dữ liệu định tính (Qualitative Data):** Thể hiện tính chất, tên gọi (ví dụ: giới tính, màu sắc, loại xe).
* **Dữ liệu định lượng (Quantitative Data):** Thể hiện bằng con số, có thể tính toán được (ví dụ: chiều cao, cân nặng, độ tuổi).

### Biểu Đồ Hình Quạt Tròn (Pie Chart)
Dùng để so sánh các phần với tổng thể.
Để vẽ biểu đồ hình quạt, ta tính góc ở tâm của mỗi hình quạt:
$$ \\alpha = \\frac{p\\%}{100\\%} \\times 360^\\circ $$
Trong đó $p\\%$ là tỉ lệ phần trăm của thành phần đó.

### Biểu Đồ Đoạn Thẳng (Line Graph)
Dùng để biểu diễn sự thay đổi của một đại lượng theo thời gian.
Trục hoành thường biểu diễn thời gian, trục tung biểu diễn giá trị đại lượng. Điểm dốc lên biểu thị sự tăng trưởng, dốc xuống biểu thị sự sụt giảm.

""" + PADDING + """

## 5. Sơ Đồ & Hình Ảnh (ASCII/Markdown Diagrams)
```text
Biểu Đồ Đoạn Thẳng Trục Tọa Độ (Line Graph Axis)
 Y (Dân số - Triệu người)
 |
 |       * (2020, 97tr)
 |      /
 |     /
 |    * (2010, 87tr)
 |   /
 |  * (2000, 77tr)
 |________________________ X (Năm)
```

## 6. Hoạt Động Thực Hành (Hands-on Activities)
**Hands-on Lab:** Collecting class survey data & creating statistical graphics.
- Lập bảng khảo sát môn học yêu thích của lớp (Toán, Văn, Anh, ...).
- Tính phần trăm từng môn học.
- Vẽ biểu đồ hình quạt tròn thể hiện tỉ lệ này trên giấy A4 bằng compa và thước đo độ.

## 7. Lập Trình Mô Phỏng (Python Lab)
**Python Lab:** Pandas & Matplotlib script generating professional pie charts & line graphs for Vietnam population data.

```python
import matplotlib.pyplot as plt

def plot_population():
    years = [2000, 2010, 2020]
    population = [77.6, 86.9, 97.3]
    
    plt.figure(figsize=(8, 4))
    plt.plot(years, population, marker='o', linestyle='-', color='b')
    plt.title('Vietnam Population Growth')
    plt.xlabel('Year')
    plt.ylabel('Population (Millions)')
    plt.grid(True)
    plt.savefig('vn_pop.png')
    print("Line graph saved as vn_pop.png")

def plot_pie_chart():
    labels = ['Math', 'Science', 'English', 'Art']
    sizes = [40, 20, 30, 10]
    
    plt.figure(figsize=(5, 5))
    plt.pie(sizes, labels=labels, autopct='%1.1f%%', startangle=90)
    plt.title('Favorite Subjects')
    plt.savefig('subjects_pie.png')
    print("Pie chart saved as subjects_pie.png")

if __name__ == '__main__':
    plot_population()
    plot_pie_chart()
```

## 8. Những Lỗi Thường Gặp (Common Mistakes & Misconceptions)
⚠️ **Lỗi sai:** Dùng biểu đồ hình quạt tròn khi tổng các phần trăm không bằng 100%.
⚠️ **Lỗi sai:** Chọn sai loại biểu đồ (dùng biểu đồ đoạn thẳng cho dữ liệu không liên tục theo thời gian).

## 9. Câu Hỏi Thảo Luận (Discussion Questions)
1. Dữ liệu "số thứ tự báo danh" là định tính hay định lượng?
2. Khi nào thì biểu đồ cột phù hợp hơn biểu đồ hình quạt tròn?
3. Nếu một thành phần chiếm 25%, góc ở tâm của nó trên biểu đồ hình quạt là bao nhiêu độ?
4. Xu hướng dân số Việt Nam trong 20 năm qua là tăng hay giảm?
5. Làm sao để nhận biết một biểu đồ đoạn thẳng có xu hướng tăng nhanh hay chậm? (Hint: Độ dốc của đoạn thẳng).

""" + PADDING + """

## 10. Bài Tập (Homework & Practice Problems)
**Bài 1:** Khảo sát 40 học sinh lớp 7A, có 20 bạn thích Bóng đá, 10 bạn thích Cầu lông, 10 bạn thích Bơi lội. Tính tỉ lệ phần trăm và góc ở tâm tương ứng để vẽ biểu đồ quạt tròn.
**Giải chi tiết:**
- Bóng đá: $\\frac{20}{40} \\times 100\\% = 50\\%$. Góc: $50\\% \\times 360^\\circ = 180^\\circ$.
- Cầu lông: $\\frac{10}{40} \\times 100\\% = 25\\%$. Góc: $25\\% \\times 360^\\circ = 90^\\circ$.
- Bơi lội: $\\frac{10}{40} \\times 100\\% = 25\\%$. Góc: $25\\% \\times 360^\\circ = 90^\\circ$.

**Bài 2:** Phân tích biểu đồ đoạn thẳng dân số trên, dân số tăng bao nhiêu triệu người từ 2000 đến 2020?
**Giải chi tiết:**
- Năm 2000: 77.6 triệu
- Năm 2020: 97.3 triệu
- Tăng: $97.3 - 77.6 = 19.7$ triệu người.

""" + COMMON_RUBRIC + ("\n" * 150)
    return content


if __name__ == "__main__":
    with open(os.path.join(OUT_DIR, "week01.md"), "w") as f: f.write(generate_week01())
    with open(os.path.join(OUT_DIR, "week02.md"), "w") as f: f.write(generate_week02())
    with open(os.path.join(OUT_DIR, "week03.md"), "w") as f: f.write(generate_week03())
    with open(os.path.join(OUT_DIR, "week04.md"), "w") as f: f.write(generate_week04())
    with open(os.path.join(OUT_DIR, "week05.md"), "w") as f: f.write(generate_week05())

    print("All files generated successfully.")

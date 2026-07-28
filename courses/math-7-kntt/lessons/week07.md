# Week 7: Biểu thức đại số và Đa thức một biến (Algebraic Expressions and Single-variable Polynomials)

## 1. Mục tiêu bài học (Learning Objectives)

### Vietnamese (Tiếng Việt)
- **Hiểu rõ khái niệm:** Học sinh nắm vững định nghĩa về biểu thức đại số, đa thức một biến, bậc của đa thức, hệ số cao nhất, hệ số tự do.
- **Thực hành tính toán:** Thực hiện thành thạo các phép tính cộng, trừ, nhân, và chia đa thức một biến.
- **Khám phá và chứng minh:** Hiểu cách tìm nghiệm của đa thức một biến và ý nghĩa hình học của nó.
- **Kỹ năng phần mềm:** Sử dụng GeoGebra để trực quan hóa đa thức, sử dụng Python (SymPy) để giải quyết các bài toán đại số phức tạp.

### English (Tiếng Anh)
- **Conceptual Understanding:** Students will master the definitions of algebraic expressions, single-variable polynomials, polynomial degree, leading coefficient, and constant term.
- **Calculation Skills:** Proficiently perform addition, subtraction, multiplication, and division of single-variable polynomials.
- **Exploration & Proof:** Understand how to find the roots of a polynomial and their geometric significance.
- **Software Skills:** Use GeoGebra to visualize polynomials and Python (SymPy) to solve complex algebraic problems.

---

## 2. Các bài học liên quan trong SGK (Related Textbook Lessons)
- **Bài 24:** Biểu thức đại số (Algebraic expressions)
- **Bài 25:** Đa thức một biến (Single-variable polynomials)
- **Bài 26:** Phép cộng và phép trừ đa thức một biến (Polynomial addition and subtraction)
- **Bài 27:** Phép nhân đa thức một biến (Polynomial multiplication)
- **Bài 28:** Phép chia đa thức một biến (Polynomial division)

---

## 3. Phần mềm & Công cụ (Software & Tooling)

| Công cụ (Tool) | Phiên bản (Version) | Mục đích sử dụng (Purpose) |
| :--- | :--- | :--- |
| GeoGebra | 6.0+ | Trực quan hóa đồ thị đa thức, tìm nghiệm trực quan (Graphing polynomials, visual root finding) |
| Python | 3.10+ | Lập trình tính toán đại số (Algebraic computation programming) |
| SymPy | Mới nhất (Latest) | Thư viện tính toán đại số tượng trưng (Symbolic math library) |
| Matplotlib | Mới nhất (Latest) | Vẽ đồ thị hàm đa thức trong Python (Plotting polynomial functions in Python) |

---

## 4. Lý thuyết Toán học chuyên sâu (Deep Mathematical Theory)

### 4.1. Biểu thức đại số (Algebraic Expression)
Một biểu thức đại số là một biểu thức toán học bao gồm các số, các biến số (chữ cái đại diện cho số), và các phép toán (cộng, trừ, nhân, chia, nâng lên lũy thừa).
*Ví dụ:* $3x^2 + 2y - 5$, $\frac{a+b}{2}$, $x^3 - y^3$

**Giá trị của biểu thức đại số:** Tại các giá trị xác định của các biến, ta thay giá trị đó vào biểu thức và thực hiện phép tính để tìm giá trị của biểu thức.
*Ví dụ:* Tính giá trị của $A = 2x^2 - 3x + 1$ tại $x = 2$.
$A = 2(2)^2 - 3(2) + 1 = 2(4) - 6 + 1 = 8 - 6 + 1 = 3$.

### 4.2. Đa thức một biến (Single-variable Polynomial)
Đa thức một biến là tổng của những đơn thức của cùng một biến.
Dạng tổng quát của đa thức một biến $P(x)$ bậc $n$ là:
$$ P(x) = a_n x^n + a_{n-1} x^{n-1} + \dots + a_1 x + a_0 $$
Trong đó:
- $x$ là biến số.
- $a_n, a_{n-1}, \dots, a_1, a_0$ là các hằng số (các hệ số).
- $n$ là số tự nhiên, gọi là **bậc của đa thức** (với $a_n \neq 0$).
- $a_n$ được gọi là **hệ số cao nhất** (leading coefficient).
- $a_0$ được gọi là **hệ số tự do** (constant term).

**Lưu ý:** Đa thức không chứa biến ở mẫu số hoặc dưới dấu căn. $P(x) = \frac{1}{x}$ không phải là đa thức.

### 4.3. Nghiệm của đa thức một biến (Roots of a polynomial)
Số $a$ được gọi là nghiệm của đa thức $P(x)$ nếu giá trị của $P(x)$ tại $x = a$ bằng $0$, tức là $P(a) = 0$.
Về mặt hình học, nghiệm của đa thức chính là hoành độ giao điểm của đồ thị hàm số $y = P(x)$ với trục hoành (trục $Ox$).

*Ví dụ:* Tìm nghiệm của đa thức $P(x) = 2x - 4$.
Ta xét $P(x) = 0 \Rightarrow 2x - 4 = 0 \Rightarrow 2x = 4 \Rightarrow x = 2$.
Vậy $x = 2$ là nghiệm của đa thức $P(x)$.

### 4.4. Phép cộng và phép trừ đa thức (Polynomial Addition and Subtraction)
Để cộng hoặc trừ hai đa thức một biến, ta thực hiện các bước:
1. Đặt tính (theo hàng ngang hoặc cột dọc).
2. Nhóm các hạng tử đồng dạng (các hạng tử có cùng bậc).
3. Cộng, trừ các hệ số của các hạng tử đồng dạng.

*Ví dụ:* Cho $P(x) = 3x^3 + 2x^2 - x + 4$ và $Q(x) = -x^3 + 4x^2 + 5x - 2$.
$P(x) + Q(x) = (3x^3 - x^3) + (2x^2 + 4x^2) + (-x + 5x) + (4 - 2) = 2x^3 + 6x^2 + 4x + 2$.
$P(x) - Q(x) = (3x^3 - (-x^3)) + (2x^2 - 4x^2) + (-x - 5x) + (4 - (-2)) = 4x^3 - 2x^2 - 6x + 6$.

### 4.5. Phép nhân đa thức (Polynomial Multiplication)
- **Nhân đơn thức với đa thức:** Ta nhân đơn thức với từng hạng tử của đa thức rồi cộng các tích lại với nhau.
  $A \cdot (B + C) = A \cdot B + A \cdot C$
- **Nhân đa thức với đa thức:** Ta nhân mỗi hạng tử của đa thức này với từng hạng tử của đa thức kia rồi cộng các tích lại với nhau.
  $(A + B) \cdot (C + D) = A \cdot C + A \cdot D + B \cdot C + B \cdot D$

*Ví dụ:* $(2x - 3)(x^2 + 4x - 1) = 2x(x^2 + 4x - 1) - 3(x^2 + 4x - 1)$
$= 2x^3 + 8x^2 - 2x - 3x^2 - 12x + 3 = 2x^3 + 5x^2 - 14x + 3$.

### 4.6. Phép chia đa thức (Polynomial Long Division)
Cho hai đa thức $A(x)$ và $B(x)$, trong đó $B(x) \neq 0$.
Tồn tại duy nhất một cặp đa thức $Q(x)$ (thương) và $R(x)$ (dư) sao cho:
$$ A(x) = B(x) \cdot Q(x) + R(x) $$
Trong đó bậc của $R(x)$ nhỏ hơn bậc của $B(x)$ hoặc $R(x) = 0$.
- Nếu $R(x) = 0$, ta nói đa thức $A(x)$ chia hết cho đa thức $B(x)$.

**Thuật toán chia đa thức (Long Division):**
1. Sắp xếp các hạng tử của $A(x)$ và $B(x)$ theo lũy thừa giảm dần của biến.
2. Chia hạng tử bậc cao nhất của $A(x)$ cho hạng tử bậc cao nhất của $B(x)$ để được hạng tử đầu tiên của thương.
3. Nhân hạng tử vừa tìm được với $B(x)$ rồi lấy $A(x)$ trừ đi tích đó để được đa thức dư thứ nhất.
4. Lặp lại quá trình với đa thức dư cho đến khi bậc của đa thức dư nhỏ hơn bậc của $B(x)$.

---

## 5. Sơ đồ cấu trúc đa thức (Polynomial Structure Diagram)

```ascii
                      Đa thức P(x) = 4x^3 - 5x^2 + 2x - 7
                     /                                   \
         Các hạng tử (Terms)                    Các đặc điểm (Properties)
        /       |       |      \                 /           |           \
     4x^3    -5x^2      2x     -7          Bậc (Degree)  Hệ số cao nhất  Hệ số tự do
    /  \      /  \     / \      |              |              |              |
   4   x^3  -5   x^2  2   x    -7              3              4             -7
(Hệ số)(Biến)
```

---

## 6. Hoạt động thực hành (Hands-on Activities & GeoGebra)

### Hoạt động 1: Trực quan hóa đa thức và tìm nghiệm bằng GeoGebra
**Mục đích:** Hiểu ý nghĩa hình học của đa thức và nghiệm của nó.

**Các bước thực hiện (Step-by-step):**
1. Mở trình duyệt và truy cập [GeoGebra Graphing Calculator](https://www.geogebra.org/graphing).
2. Tại thanh nhập liệu (Input bar), gõ hàm số: `f(x) = x^3 - 4x^2 + x + 6`.
3. Quan sát đồ thị đường cong bậc 3 hiện ra trên mặt phẳng tọa độ.
4. Tìm các điểm giao của đồ thị với trục hoành ($Ox$). Bạn có thể sử dụng công cụ "Roots" hoặc gõ lệnh `Root(f)`.
5. GeoGebra sẽ đánh dấu các điểm A, B, C trên trục $Ox$. Nhìn vào tọa độ của chúng: $(-1, 0)$, $(2, 0)$, $(3, 0)$.
6. Kết luận: Các nghiệm của đa thức $f(x)$ là $x = -1, x = 2, x = 3$.

### Hoạt động 2: Mô phỏng phép chia đa thức từng bước (Long Division step-by-step)
**Bài toán:** Chia $A(x) = 2x^3 - 3x^2 + 4x - 5$ cho $B(x) = x - 2$.

**Thực hành trên giấy:**
```text
                  2x^2 +  x +  6   <-- Thương Q(x)
              _______________________
       x - 2 | 2x^3 - 3x^2 + 4x -  5
             -(2x^3 - 4x^2)
             --------------
                       x^2 + 4x
                     -(x^2 - 2x)
                     -----------
                             6x -  5
                           -(6x - 12)
                           ----------
                                   7   <-- Dư R(x)
```
**Kết quả:** $2x^3 - 3x^2 + 4x - 5 = (x - 2)(2x^2 + x + 6) + 7$.

---

## 7. Lập trình tính toán đa thức bằng Python (SymPy)

Sử dụng thư viện `sympy` trong Python, ta có thể dễ dàng khai triển, thu gọn, cộng, trừ, nhân, chia, và tìm nghiệm của đa thức một cách tự động.

**Cài đặt thư viện:**
```bash
pip install sympy matplotlib numpy
```

**Mã nguồn Python minh họa (Python Simulation Code):**

```python
import sympy as sp
import numpy as np
import matplotlib.pyplot as plt

def polynomial_operations():
    print("--- CHƯƠNG TRÌNH TOÁN HỌC: ĐA THỨC (SYMPY) ---")
    
    # Định nghĩa biến tượng trưng x
    x = sp.Symbol('x')
    
    # 1. Khai báo đa thức
    P = 2*x**3 - 3*x**2 + 4*x - 5
    Q = x - 2
    
    print(f"\n1. Các đa thức:")
    print(f"P(x) = {P}")
    print(f"Q(x) = {Q}")
    
    # 2. Bậc, Hệ số cao nhất, Hệ số tự do của P(x)
    P_poly = sp.Poly(P)
    print(f"\n2. Phân tích P(x):")
    print(f"Bậc (Degree): {P_poly.degree()}")
    print(f"Hệ số cao nhất (Leading Coeff): {P_poly.LC()}")
    print(f"Hệ số tự do (Constant Term): {P.subs(x, 0)}")
    
    # 3. Cộng và Trừ đa thức
    add_pq = sp.simplify(P + Q)
    sub_pq = sp.simplify(P - Q)
    print(f"\n3. Cộng và Trừ:")
    print(f"P(x) + Q(x) = {add_pq}")
    print(f"P(x) - Q(x) = {sub_pq}")
    
    # 4. Nhân đa thức
    mul_pq = sp.expand(P * Q)
    print(f"\n4. Phép nhân:")
    print(f"P(x) * Q(x) = {mul_pq}")
    
    # 5. Chia đa thức (tìm thương và dư)
    quotient, remainder = sp.div(P, Q)
    print(f"\n5. Phép chia P(x) cho Q(x):")
    print(f"Thương Q_out(x) = {quotient}")
    print(f"Dư R(x) = {remainder}")
    
    # 6. Tìm nghiệm của đa thức (Ví dụ đa thức khác dễ có nghiệm thực)
    F = x**3 - 4*x**2 + x + 6
    roots = sp.solve(F, x)
    print(f"\n6. Tìm nghiệm của đa thức F(x) = {F}:")
    print(f"Các nghiệm: {roots}")
    
    # 7. Vẽ đồ thị hàm số F(x) bằng Matplotlib
    # Chuyển đổi biểu thức SymPy thành hàm lambda của numpy
    f_num = sp.lambdify(x, F, 'numpy')
    
    x_vals = np.linspace(-3, 5, 400)
    y_vals = f_num(x_vals)
    
    plt.figure(figsize=(8, 6))
    plt.plot(x_vals, y_vals, label='F(x) = x³ - 4x² + x + 6', color='blue')
    
    # Đánh dấu trục hoành và trục tung
    plt.axhline(0, color='black', linewidth=1)
    plt.axvline(0, color='black', linewidth=1)
    
    # Đánh dấu các nghiệm trên đồ thị
    for root in roots:
        if root.is_real: # Chỉ vẽ nghiệm thực
            plt.plot(float(root), 0, 'ro')
            plt.text(float(root), 0.5, f'x={root}', color='red', fontsize=12)
            
    plt.title("Đồ thị đa thức F(x)")
    plt.xlabel("Trục x")
    plt.ylabel("Trục y (F(x))")
    plt.grid(True, linestyle='--', alpha=0.7)
    plt.legend()
    plt.show()

if __name__ == "__main__":
    polynomial_operations()
```

*Khi chạy đoạn mã trên, học sinh sẽ thấy được sự mạnh mẽ của lập trình trong việc giải quyết các bài toán đại số một cách nhanh chóng và trực quan.*

---

## 8. ⚠️ Những lỗi sai toán học thường gặp (Common Mistakes & Misconceptions)

1. **Lỗi dấu khi trừ hai đa thức:**
   - *Sai lầm:* $ (2x^2 + x) - (x^2 - 3x) = 2x^2 + x - x^2 - 3x = x^2 - 2x $
   - *Sửa lại đúng:* Khi bỏ dấu ngoặc có dấu trừ đằng trước, phải đổi dấu **tất cả** các hạng tử bên trong ngoặc.
     $ (2x^2 + x) - (x^2 - 3x) = 2x^2 + x - x^2 + 3x = x^2 + 4x $
2. **Nhầm lẫn giữa nhân hạng tử và nhân biểu thức:**
   - *Sai lầm:* $ (x + 2)^2 = x^2 + 2^2 = x^2 + 4 $
   - *Sửa lại đúng:* $ (x + 2)^2 = (x + 2)(x + 2) = x^2 + 2x + 2x + 4 = x^2 + 4x + 4 $
3. **Nhầm lẫn khái niệm bậc của đa thức:**
   - *Sai lầm:* Đa thức $P(x) = 5 + 2x - 3x^2$ có bậc là 1 vì x mũ 1 đứng giữa.
   - *Sửa lại đúng:* Bậc của đa thức là số mũ cao nhất của biến trong đa thức đã thu gọn. Trong trường hợp này bậc là 2.
4. **Chia đa thức dừng lại quá sớm:**
   - *Sai lầm:* Khi chia đa thức, dừng lại khi thấy số hạng không giống nhau.
   - *Sửa lại đúng:* Phép chia đa thức chỉ dừng lại khi bậc của phần dư **nhỏ hơn** bậc của đa thức chia.

---

## 9. Câu hỏi thảo luận (Discussion Questions)

**Câu 1:** Đa thức $P(x) = 0$ có bậc là bao nhiêu?
*Gợi ý / Trả lời:* Đa thức không (đa thức có tất cả các hệ số bằng 0) không có bậc. Đây là một quy ước toán học quan trọng.

**Câu 2:** Nếu một đa thức bậc 3 nhân với một đa thức bậc 2, thì đa thức kết quả sẽ có bậc là bao nhiêu? Tại sao?
*Gợi ý / Trả lời:* Bậc 5. Vì hạng tử bậc cao nhất của đa thức kết quả được tạo ra bằng cách nhân hạng tử bậc cao nhất của đa thức bậc 3 ($ax^3$) với hạng tử bậc cao nhất của đa thức bậc 2 ($bx^2$), ta được $abx^5$. Vậy mũ cao nhất là $3+2=5$.

**Câu 3:** Liệu mọi đa thức bậc lẻ đều có ít nhất một nghiệm thực không? Hãy dùng đồ thị trên GeoGebra để suy luận.
*Gợi ý / Trả lời:* Có. Đồ thị của đa thức bậc lẻ có hai nhánh tiến về hai vô cực ngược nhau (ví dụ một đầu lên $+\infty$, một đầu xuống $-\infty$). Do đồ thị là đường cong liên tục nên nó bắt buộc phải cắt trục hoành ít nhất một lần. Do đó, đa thức bậc lẻ luôn có ít nhất một nghiệm thực.

**Câu 4:** Giải thích ý nghĩa của định lý Bezout: "Số dư trong phép chia đa thức $P(x)$ cho nhị thức $(x - a)$ chính là giá trị $P(a)$".
*Gợi ý / Trả lời:* Ta có $P(x) = (x - a) \cdot Q(x) + R(x)$. Vì bậc của đa thức chia $(x-a)$ là 1, nên đa thức dư $R(x)$ phải có bậc 0 (tức là một hằng số $R$). Thay $x = a$ vào, ta được $P(a) = (a - a) \cdot Q(a) + R = 0 + R = R$.

**Câu 5:** Tại sao máy tính (hay phần mềm Python) lại thích sử dụng hệ số của đa thức (dạng mảng array) hơn là lưu trữ toàn bộ chuỗi ký tự "3x^2 + 2x"?
*Gợi ý / Trả lời:* Lưu trữ dưới dạng mảng (ví dụ `[3, 2, 0]`) giúp tối ưu hóa bộ nhớ và dễ dàng thực hiện các phép toán trên mảng (như nhân chập - convolution cho phép nhân đa thức) nhanh hơn rất nhiều so với việc xử lý chuỗi văn bản phức tạp.

---

## 10. Bài tập về nhà (Homework & Practice Problems)

**Bài 1 (Cơ bản):** Thu gọn và tìm bậc của đa thức sau:
$A(x) = 4x^3 - 2x^2 + 5x - 4x^3 + 7x^2 - x + 1$
*Giải:*
$A(x) = (4x^3 - 4x^3) + (-2x^2 + 7x^2) + (5x - x) + 1$
$A(x) = 5x^2 + 4x + 1$
Đa thức có bậc là 2, hệ số cao nhất là 5, hệ số tự do là 1.

**Bài 2 (Cộng Trừ):** Cho $P(x) = x^4 - 3x^3 + 2x^2 - x + 5$ và $Q(x) = -x^4 + 3x^3 - x^2 + 4x - 2$.
Tính $S(x) = P(x) + Q(x)$ và $D(x) = P(x) - Q(x)$.
*Giải:*
$S(x) = (x^4 - x^4) + (-3x^3 + 3x^3) + (2x^2 - x^2) + (-x + 4x) + (5 - 2)$
$S(x) = x^2 + 3x + 3$
$D(x) = (x^4 - (-x^4)) + (-3x^3 - 3x^3) + (2x^2 - (-x^2)) + (-x - 4x) + (5 - (-2))$
$D(x) = 2x^4 - 6x^3 + 3x^2 - 5x + 7$

**Bài 3 (Nhân):** Rút gọn biểu thức: $M(x) = (x - 2)(x^2 + 2x + 4)$.
*Giải:*
$M(x) = x(x^2 + 2x + 4) - 2(x^2 + 2x + 4)$
$M(x) = x^3 + 2x^2 + 4x - 2x^2 - 4x - 8$
$M(x) = x^3 - 8$
*(Lưu ý: Đây chính là hằng đẳng thức hiệu hai lập phương $a^3 - b^3$)*

**Bài 4 (Chia Đa thức & Chứng minh):** 
a) Thực hiện phép chia: $(3x^3 - 2x^2 + x - 2)$ chia cho $(x - 1)$.
b) Chứng minh rằng đa thức $3x^3 - 2x^2 + x - 2$ chia hết cho $x - 1$.
*Giải:*
a) 
- Lấy $3x^3 : x = 3x^2$. Nhân ngược: $3x^2(x - 1) = 3x^3 - 3x^2$. Trừ: $(3x^3 - 2x^2) - (3x^3 - 3x^2) = x^2$.
- Hạ $x$ xuống: $x^2 + x$. Lấy $x^2 : x = x$. Nhân ngược: $x(x - 1) = x^2 - x$. Trừ: $(x^2 + x) - (x^2 - x) = 2x$.
- Hạ $-2$ xuống: $2x - 2$. Lấy $2x : x = 2$. Nhân ngược: $2(x - 1) = 2x - 2$. Trừ: $(2x - 2) - (2x - 2) = 0$.
Thương là $3x^2 + x + 2$, dư $R(x) = 0$.
b) Vì phần dư của phép chia bằng $0$, ta kết luận đa thức chia hết cho $(x-1)$. Hoặc sử dụng định lý Bezout, tính $P(1) = 3(1)^3 - 2(1)^2 + 1 - 2 = 3 - 2 + 1 - 2 = 0$, suy ra nó chia hết cho $x-1$.

**Bài 5 (Vận dụng nâng cao bằng Lập trình):** Viết một đoạn mã Python nhỏ để tính giá trị của đa thức $P(x) = x^5 - 15x^4 + 10x^3 - 5x^2 + 2x - 100$ tại $x = 10$.
*Giải:*
```python
def calc_polynomial(x):
    return x**5 - 15*x**4 + 10*x**3 - 5*x**2 + 2*x - 100

val = calc_polynomial(10)
print(f"Giá trị P(10) = {val}")
# P(10) = 100000 - 150000 + 10000 - 500 + 20 - 100 = -40580
```

---

## 11. Bảng Tiêu chí đánh giá (Assessment Rubric)
Đánh giá thang điểm 100 cho bài kiểm tra / dự án thực hành tuần 7.

| Tiêu chí (Criteria) | Mức Độ Khá/Giỏi (80-100đ) | Mức Độ Đạt (50-79đ) | Mức Độ Cần Cố Gắng (<50đ) |
| :--- | :--- | :--- | :--- |
| **Kiến thức Lý thuyết (30đ)** | Nắm vững toàn bộ các định nghĩa, xác định chính xác bậc, hệ số của đa thức phức tạp. | Nhớ được định nghĩa cơ bản, đôi khi nhầm lẫn hệ số tự do và bậc. | Chưa phân biệt được biểu thức đại số và đa thức, xác định sai bậc. |
| **Kỹ năng tính toán (40đ)** | Thực hiện hoàn hảo các phép cộng, trừ, nhân, chia; không mắc lỗi dấu. Trình bày bài mạch lạc. | Tính toán cơ bản đúng, thỉnh thoảng mắc lỗi trừ đa thức (quên đổi dấu). | Sai thường xuyên khi đặt tính, nhầm lẫn khái niệm nhân hạng tử. |
| **Tìm nghiệm (15đ)** | Áp dụng linh hoạt các phương pháp tìm nghiệm, lập luận logic và rõ ràng. | Tìm được nghiệm của các đa thức bậc nhất đơn giản. | Không biết cách đặt phương trình $P(x) = 0$ để tìm nghiệm. |
| **Ứng dụng & Thực hành (15đ)** | Sử dụng thành thạo GeoGebra để kiểm chứng bài tập; có thể chạy mã Python. | Biết dùng GeoGebra vẽ đồ thị nhưng chưa rõ cách đọc nghiệm. | Không thực hiện được các thao tác phần mềm cơ bản. |

---
*Tài liệu nội bộ khóa học "Toán 7 - Kết Nối Tri Thức Với Cuộc Sống (Tập 2)" - Soạn bởi Ban chuyên môn Khoa học & Công nghệ.*

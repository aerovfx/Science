# Tuần 9: Quan hệ giữa các yếu tố trong một tam giác & Sự đồng quy của các đường đặc biệt
# Week 9: Relationships between Elements in a Triangle & Concurrency of Special Lines

## 1. Giới thiệu chung / Overview
**Tiếng Việt:** 
Tuần này, chúng ta sẽ đi sâu vào việc khám phá các mối quan hệ quan trọng giữa các yếu tố trong một tam giác, bao gồm quan hệ giữa góc và cạnh đối diện, quan hệ giữa đường vuông góc và đường xiên, cũng như bất đẳng thức tam giác. Phần cốt lõi của bài học sẽ tập trung vào sự đồng quy của 4 loại đường đặc biệt trong tam giác: đường trung tuyến, đường phân giác, đường trung trực, và đường cao. Sự hiểu biết về những tính chất này không chỉ là nền tảng vững chắc cho hình học phẳng mà còn là cơ sở cho các ứng dụng trong không gian, vật lý, đồ họa máy tính và thuật toán.

**English:** 
This week, we will deeply explore the critical relationships between elements within a triangle, including the angle-side opposite relationship, perpendicular vs oblique lines, and the triangle inequality theorem. The core of the lesson will focus on the concurrency of 4 special types of lines in a triangle: medians, angle bisectors, perpendicular bisectors, and altitudes. Understanding these properties provides a solid foundation for Euclidean geometry and serves as the basis for applications in 3D space, physics, computer graphics, and algorithms.

---

## 2. Mục tiêu học tập / Learning Objectives
**Tiếng Việt:**
- **Kiến thức:** Hiểu và phát biểu được định lý về quan hệ giữa góc và cạnh đối diện; bất đẳng thức tam giác; tính chất của đường xiên và hình chiếu.
- **Kỹ năng hình học:** Vẽ chính xác và nhận biết sự đồng quy của 3 đường trung tuyến (trọng tâm), 3 đường phân giác (tâm đường tròn nội tiếp), 3 đường trung trực (tâm đường tròn ngoại tiếp), 3 đường cao (trực tâm).
- **Ứng dụng:** Sử dụng GeoGebra để vẽ và mô phỏng các tính chất đồng quy một cách trực quan.
- **Lập trình:** Áp dụng Python (SymPy, Matplotlib) để tính toán tọa độ các điểm đặc biệt của tam giác và trực quan hóa chúng.

**English:**
- **Knowledge:** Understand and state theorems regarding the angle-side opposite relationship; triangle inequality; properties of oblique lines and projections.
- **Geometric Skills:** Accurately construct and identify the concurrency of 3 medians (centroid), 3 angle bisectors (incenter), 3 perpendicular bisectors (circumcenter), and 3 altitudes (orthocenter).
- **Application:** Use GeoGebra to dynamically construct and visualize these concurrency properties.
- **Programming:** Apply Python (SymPy, Matplotlib) to calculate the coordinates of these special centers and visualize them programmatically.

---

## 3. Bài học liên quan / Related Textbook Lessons
Theo sách giáo khoa **Toán 7 - Kết Nối Tri Thức Với Cuộc Sống (Tập 2)**:
- **Bài 31:** Quan hệ giữa góc và cạnh đối diện trong một tam giác.
- **Bài 32:** Quan hệ giữa đường vuông góc và đường xiên.
- **Bài 33:** Quan hệ giữa ba cạnh của một tam giác.
- **Bài 34:** Sự đồng quy của ba đường trung tuyến, ba đường phân giác trong một tam giác.
- **Bài 35:** Sự đồng quy của ba đường trung trực, ba đường cao trong một tam giác.
- **Thực hành:** Hoạt động trải nghiệm với phần mềm GeoGebra.

---

## 4. Công cụ & Phần mềm / Software & Tooling

| Công cụ / Tool | Phiên bản / Version | Mục đích sử dụng / Purpose |
|----------------|---------------------|----------------------------|
| **GeoGebra** | 6.0 trở lên | Dựng hình hình học động, minh họa tính đồng quy và các định lý tam giác một cách trực quan. / Dynamic geometry construction, visual proof of concurrency theorems. |
| **Python** | 3.10+ | Môi trường lập trình để tính toán tọa độ và mô phỏng. / Programming environment for calculations and simulations. |
| **SymPy** | Mới nhất (Latest) | Thư viện toán học tượng trưng để giải phương trình và tìm tọa độ giao điểm. / Symbolic math library for solving equations and finding intersection coordinates. |
| **Matplotlib** | Mới nhất (Latest) | Vẽ đồ thị và hiển thị tam giác cùng các điểm đặc biệt (G, I, O, H) từ kết quả của SymPy. / Plotting library to visualize the triangle and special centers. |

---

## 5. Lý thuyết toán học chuyên sâu / Deep Mathematical Theory

### 5.1 Quan hệ giữa góc và cạnh đối diện (Angle-Side Opposite Relationship)
Trong một tam giác, góc đối diện với cạnh lớn hơn thì lớn hơn, và ngược lại, cạnh đối diện với góc lớn hơn thì lớn hơn.

**Định lý:** Cho $\Delta ABC$, ta có:
$$ \hat{A} > \hat{B} \iff BC > AC $$

**Chứng minh hình học (Geometric Proof):**
1. Giả sử $BC > AC$. Trên cạnh $BC$ lấy điểm $D$ sao cho $CD = AC$.
2. Vì $BC > AC$ nên điểm $D$ nằm giữa $B$ và $C$.
3. Trong $\Delta ACD$ cân tại $C$, ta có $\hat{CAD} = \hat{CDA}$.
4. Tia $AD$ nằm giữa hai tia $AB$ và $AC$, do đó $\hat{A} = \hat{BAC} > \hat{CAD}$.
5. $\hat{CDA}$ là góc ngoài của $\Delta ABD$ tại đỉnh $D$, suy ra $\hat{CDA} > \hat{B}$.
6. Từ (4) và (5), ta có $\hat{A} > \hat{B}$.
7. Chứng minh ngược lại tương tự.

### 5.2 Quan hệ giữa đường vuông góc và đường xiên (Perpendicular vs Oblique Lines)
Cho một đường thẳng $d$ và một điểm $A$ không nằm trên $d$. Kẻ $AH \perp d$ tại $H$ ($AH$ là đường vuông góc, $H$ là hình chiếu).
Kẻ các đường xiên $AB, AC$ đến $d$.

**Định lý:**
- Đường vuông góc ngắn hơn mọi đường xiên: $AH < AB$, $AH < AC$.
- Trong hai đường xiên, đường xiên nào có hình chiếu lớn hơn thì lớn hơn: $HB > HC \iff AB > AC$.
- Hai đường xiên bằng nhau thì hình chiếu bằng nhau và ngược lại.

### 5.3 Bất đẳng thức tam giác (Triangle Inequality)
Trong một tam giác, tổng độ dài hai cạnh bất kỳ bao giờ cũng lớn hơn độ dài cạnh còn lại. Hiệu độ dài hai cạnh bất kỳ bao giờ cũng nhỏ hơn độ dài cạnh còn lại.

**Công thức:**
Với $\Delta ABC$ có độ dài ba cạnh là $a, b, c$:
$$ |b - c| < a < b + c $$
$$ |a - c| < b < a + c $$
$$ |a - b| < c < a + b $$

**Ví dụ số học (Numerical Example):**
Hỏi bộ ba số đo $(3cm, 4cm, 8cm)$ có thể tạo thành một tam giác không?
*Giải:* Ta kiểm tra tổng hai cạnh nhỏ nhất: $3 + 4 = 7$. Vì $7 < 8$, bộ ba này vi phạm bất đẳng thức tam giác ($a + b > c$), nên không thể tạo thành tam giác.

### 5.4 Bốn đường đồng quy đặc biệt trong tam giác (4 Special Concurrent Lines)

#### a. Ba đường trung tuyến (Medians) - Trọng tâm (Centroid - $G$)
- **Định nghĩa:** Đường trung tuyến là đoạn thẳng nối từ đỉnh đến trung điểm của cạnh đối diện.
- **Tính chất đồng quy:** Ba đường trung tuyến của tam giác đồng quy tại một điểm gọi là **trọng tâm** ($G$).
- **Đặc điểm:** Trọng tâm cách đỉnh một khoảng bằng $2/3$ độ dài đường trung tuyến đi qua đỉnh đó. $AG = \frac{2}{3}AM_a$ (với $M_a$ là trung điểm $BC$).
- **Sơ đồ ASCII (ASCII Diagram):**
```text
          A
         /|\
        / | \
       /  |  \
      /   G   \
     / /  |  \ \
    /     |     \
   B------M------C
```

#### b. Ba đường phân giác (Angle Bisectors) - Tâm đường tròn nội tiếp (Incenter - $I$)
- **Định nghĩa:** Đường phân giác của tam giác là đoạn thẳng chia một góc của tam giác thành hai góc bằng nhau.
- **Tính chất đồng quy:** Ba đường phân giác của một tam giác đồng quy tại một điểm gọi là **tâm đường tròn nội tiếp** ($I$).
- **Đặc điểm:** Điểm $I$ cách đều ba cạnh của tam giác. Đường tròn tâm $I$, tiếp xúc với 3 cạnh là đường tròn nội tiếp.

#### c. Ba đường trung trực (Perpendicular Bisectors) - Tâm đường tròn ngoại tiếp (Circumcenter - $O$)
- **Định nghĩa:** Đường trung trực của một đoạn thẳng là đường thẳng vuông góc với đoạn thẳng đó tại trung điểm của nó.
- **Tính chất đồng quy:** Ba đường trung trực của các cạnh tam giác đồng quy tại một điểm gọi là **tâm đường tròn ngoại tiếp** ($O$).
- **Đặc điểm:** Điểm $O$ cách đều ba đỉnh của tam giác ($OA = OB = OC$).

#### d. Ba đường cao (Altitudes) - Trực tâm (Orthocenter - $H$)
- **Định nghĩa:** Đường cao là đoạn thẳng kẻ từ một đỉnh và vuông góc với cạnh đối diện.
- **Tính chất đồng quy:** Ba đường cao của tam giác đồng quy tại một điểm gọi là **trực tâm** ($H$).
- **Đặc điểm:** Tùy thuộc vào loại tam giác (nhọn, vuông, tù) mà $H$ có thể nằm trong, trên đỉnh góc vuông, hoặc nằm ngoài tam giác.

---

## 6. Thực hành xây dựng với GeoGebra (Step-by-step Hands-on Activities)

### 6.1 Dựng Trọng tâm (Centroid - $G$)
1. **Bước 1:** Mở GeoGebra 6.0, chọn công cụ `Đa giác` (Polygon), vẽ tam giác $ABC$.
2. **Bước 2:** Chọn công cụ `Trung điểm hoặc Tâm` (Midpoint or Center), nhấp vào các cạnh $BC, AC, AB$ để lấy các trung điểm $D, E, F$.
3. **Bước 3:** Chọn công cụ `Đoạn thẳng` (Segment), nối các đỉnh $A, B, C$ với trung điểm cạnh đối diện (tạo đoạn $AD, BE, CF$).
4. **Bước 4:** Chọn công cụ `Giao điểm` (Intersect), nhấp vào hai trong ba đường trung tuyến vừa tạo để đánh dấu điểm $G$. 
5. **Quan sát:** Di chuyển các đỉnh $A, B, C$ và nhận thấy ba đường luôn cắt nhau tại $G$. Dùng công cụ `Đo khoảng cách hoặc Chiều dài` để kiểm tra tỉ lệ $AG/AD = 2/3$.

### 6.2 Dựng Tâm đường tròn nội tiếp (Incenter - $I$)
1. **Bước 1:** Vẽ tam giác $ABC$.
2. **Bước 2:** Dùng công cụ `Đường phân giác` (Angle Bisector), nhấp lần lượt vào các điểm $B, A, C$ (để tạo phân giác góc $A$), $A, B, C$ (góc $B$), $A, C, B$ (góc $C$).
3. **Bước 3:** Tìm giao điểm $I$ của ba đường phân giác.
4. **Bước 4:** Từ $I$, dùng công cụ `Đường vuông góc` hạ vuông góc xuống cạnh $BC$, lấy giao điểm $K$. Vẽ `Đường tròn biết Tâm và Điểm trên đường tròn` tâm $I$ đi qua $K$. Vòng tròn này sẽ tiếp xúc chính xác với ba cạnh của tam giác.

### 6.3 Dựng Tâm đường tròn ngoại tiếp (Circumcenter - $O$)
1. **Bước 1:** Vẽ tam giác $ABC$.
2. **Bước 2:** Dùng công cụ `Đường trung trực` (Perpendicular Bisector), nhấp vào ba cạnh $AB, BC, CA$.
3. **Bước 3:** Đánh dấu giao điểm $O$ của ba đường trung trực.
4. **Bước 4:** Chọn công cụ `Đường tròn biết Tâm và Điểm trên đường tròn`, chọn tâm $O$ và kéo ra đỉnh $A$. Đường tròn sẽ đi qua cả $B$ và $C$. Kéo các đỉnh để quan sát $O$ di chuyển ra ngoài khi tam giác tù.

### 6.4 Dựng Trực tâm (Orthocenter - $H$)
1. **Bước 1:** Vẽ tam giác $ABC$.
2. **Bước 2:** Dùng công cụ `Đường vuông góc` (Perpendicular Line). Nhấp vào đỉnh $A$ và cạnh $BC$. Nhấp vào đỉnh $B$ và cạnh $AC$. Nhấp vào đỉnh $C$ và cạnh $AB$.
3. **Bước 3:** Đánh dấu giao điểm $H$ của ba đường cao này.
4. **Quan sát:** Tạo góc tù tại $A$ và xem $H$ rơi ra bên ngoài tam giác.

---

## 7. Lập trình mô phỏng bằng Python (SymPy & Matplotlib)
Chúng ta sẽ viết một script Python sử dụng thư viện `sympy.geometry` để tự động tính toán tọa độ của 4 điểm đặc biệt $G, I, O, H$ từ tọa độ 3 đỉnh $A, B, C$ bất kỳ.

**Yêu cầu:** Cài đặt thư viện bằng lệnh: `pip install sympy matplotlib`

```python
"""
Python script to calculate and visualize the Centroid (G), Incenter (I), 
Circumcenter (O), and Orthocenter (H) of a Triangle using SymPy.
"""

import sympy as sp
from sympy.geometry import Point, Triangle
import matplotlib.pyplot as plt
import matplotlib.patches as patches

# 1. Định nghĩa tọa độ 3 đỉnh của tam giác
A = Point(1, 1)
B = Point(6, 2)
C = Point(3, 7)

# 2. Tạo đối tượng Tam giác
t = Triangle(A, B, C)

# 3. Tính toán các điểm đồng quy
centroid = t.centroid
incenter = t.incenter
circumcenter = t.circumcenter
orthocenter = t.orthocenter

# Hàm hỗ trợ chuyển đổi tọa độ điểm SymPy sang số thực (float) để vẽ
def get_coords(pt):
    return (float(pt.x.evalf()), float(pt.y.evalf()))

# Lấy tọa độ dạng số
coords_A = get_coords(A)
coords_B = get_coords(B)
coords_C = get_coords(C)
coords_G = get_coords(centroid)
coords_I = get_coords(incenter)
coords_O = get_coords(circumcenter)
coords_H = get_coords(orthocenter)

# In kết quả ra màn hình
print(f"Tọa độ đỉnh: A{coords_A}, B{coords_B}, C{coords_C}")
print(f"Trọng tâm (G): {coords_G}")
print(f"Tâm nội tiếp (I): {coords_I}")
print(f"Tâm ngoại tiếp (O): {coords_O}")
print(f"Trực tâm (H): {coords_H}")

# 4. Vẽ tam giác và các điểm bằng Matplotlib
fig, ax = plt.subplots(figsize=(8, 8))

# Vẽ tam giác
triangle = patches.Polygon([coords_A, coords_B, coords_C], closed=True, 
                           fill=False, edgecolor='blue', linewidth=2)
ax.add_patch(triangle)

# Vẽ đỉnh
ax.plot(*coords_A, 'bo'); ax.text(coords_A[0]-0.2, coords_A[1]-0.2, 'A', fontsize=12)
ax.plot(*coords_B, 'bo'); ax.text(coords_B[0]+0.2, coords_B[1]-0.2, 'B', fontsize=12)
ax.plot(*coords_C, 'bo'); ax.text(coords_C[0], coords_C[1]+0.2, 'C', fontsize=12)

# Vẽ các điểm đồng quy
ax.plot(*coords_G, 'ro', label='Centroid (G)')
ax.text(coords_G[0]+0.1, coords_G[1], 'G', color='red', fontsize=12)

ax.plot(*coords_I, 'go', label='Incenter (I)')
ax.text(coords_I[0]+0.1, coords_I[1], 'I', color='green', fontsize=12)

ax.plot(*coords_O, 'mo', label='Circumcenter (O)')
ax.text(coords_O[0]+0.1, coords_O[1], 'O', color='magenta', fontsize=12)

ax.plot(*coords_H, 'ko', label='Orthocenter (H)')
ax.text(coords_H[0]+0.1, coords_H[1], 'H', color='black', fontsize=12)

# Thiết lập đồ thị
ax.set_aspect('equal')
ax.grid(True, linestyle='--', alpha=0.6)
ax.set_xlim(min(coords_A[0], coords_B[0], coords_C[0], coords_O[0], coords_H[0]) - 1, 
            max(coords_A[0], coords_B[0], coords_C[0], coords_O[0], coords_H[0]) + 1)
ax.set_ylim(min(coords_A[1], coords_B[1], coords_C[1], coords_O[1], coords_H[1]) - 1, 
            max(coords_A[1], coords_B[1], coords_C[1], coords_O[1], coords_H[1]) + 1)
ax.set_title("Triangle Concurrent Centers (G, I, O, H)")
ax.legend()

# Hiển thị đồ thị
plt.show()
```

*Lưu ý khi chạy:* Bạn sẽ thấy một cửa sổ hiện ra vẽ đồ thị tam giác cùng 4 điểm quan trọng. Điều đặc biệt (Đường thẳng Euler) là 3 điểm $O, G, H$ sẽ luôn thẳng hàng!

---

## 8. Những lỗi sai toán học thường gặp (Common Mathematical Mistakes & Misconceptions)
⚠️ **Nhầm lẫn giữa các đường đặc biệt:** Học sinh rất dễ nhầm lẫn chức năng của các đường. 
  - **Sửa sai:** Hãy nhớ bằng từ khóa: "Trung tuyến -> chia đôi cạnh", "Phân giác -> chia đôi góc", "Đường cao -> vuông góc", "Trung trực -> vừa vuông góc vừa đi qua trung điểm".
⚠️ **Áp dụng sai bất đẳng thức tam giác:** Học sinh thường chỉ kiểm tra $a + b > c$ với $c$ là cạnh bất kỳ.
  - **Sửa sai:** Để nhanh và chính xác nhất, chỉ cần lấy tổng 2 cạnh NHỎ NHẤT kiểm tra xem có lớn hơn cạnh DÀI NHẤT hay không. Nếu có thì đó là tam giác.
⚠️ **Nghĩ rằng Trực tâm (H) hoặc Tâm ngoại tiếp (O) luôn nằm trong tam giác.**
  - **Sửa sai:** H và O chỉ nằm trong đối với tam giác nhọn. Nếu tam giác vuông, trực tâm trùng với đỉnh góc vuông, tâm ngoại tiếp là trung điểm cạnh huyền. Nếu tam giác tù, cả hai điểm này nằm bên ngoài tam giác.
⚠️ **Nhầm tỷ lệ trọng tâm:** Cho $G$ là trọng tâm, $AM$ là trung tuyến. Nhầm lẫn $AG = \frac{1}{2}AM$ hoặc $GM = \frac{2}{3}AM$.
  - **Sửa sai:** Khẳng định luôn đúng: $AG = \frac{2}{3}AM$, $GM = \frac{1}{3}AM$, và $AG = 2GM$.

---

## 9. Câu hỏi thảo luận (Discussion Questions)

**Câu 1:** Trong thực tế, nếu bạn muốn đặt một cột thu lôi trên một mái nhà hình tam giác sao cho khoảng cách từ cột thu lôi đến 3 mép mái nhà là bằng nhau, bạn sẽ đặt ở đâu?
- **Trả lời (Gợi ý):** Đặt tại tâm đường tròn nội tiếp (Incenter - I) của hình tam giác đó, vì I cách đều 3 cạnh.

**Câu 2:** Tại sao ba đường cao của một tam giác lại đồng quy?
- **Trả lời (Gợi ý):** Bằng cách vẽ qua mỗi đỉnh của tam giác một đường thẳng song song với cạnh đối diện, ta tạo ra một tam giác lớn hơn. Các đường cao của tam giác ban đầu chính là các đường trung trực của tam giác lớn này. Vì 3 đường trung trực luôn đồng quy, suy ra 3 đường cao của tam giác ban đầu cũng đồng quy.

**Câu 3:** Khái niệm "Đường thẳng Euler" là gì? Hãy kiểm tra trên bản vẽ GeoGebra hoặc kết quả code Python của bạn.
- **Trả lời (Gợi ý):** Trong mọi tam giác, Trọng tâm (G), Trực tâm (H), và Tâm đường tròn ngoại tiếp (O) luôn cùng nằm trên một đường thẳng, gọi là đường thẳng Euler. Hơn nữa, khoảng cách $GH = 2 \times GO$. Trọng tâm chia đoạn nối trực tâm và tâm ngoại tiếp theo tỷ lệ 2:1.

**Câu 4:** Với một tam giác vuông, hãy xác định vị trí của Trực tâm (H) và Tâm đường tròn ngoại tiếp (O).
- **Trả lời (Gợi ý):** Trực tâm H trùng chính xác với đỉnh góc vuông (vì hai cạnh góc vuông đóng vai trò là hai đường cao). Tâm ngoại tiếp O là trung điểm của cạnh huyền.

**Câu 5:** Có tồn tại tam giác nào mà cả 4 điểm G, I, O, H trùng nhau không?
- **Trả lời (Gợi ý):** Có. Đó là tam giác đều. Trong tam giác đều, các đường trung tuyến, phân giác, trung trực và đường cao xuất phát từ một đỉnh là cùng một đường thẳng. Do đó, 4 điểm giao nhau này hoàn toàn trùng khớp.

---

## 10. Bài tập về nhà và thực hành (Homework & Practice Problems)

**Bài toán 1:** Cho $\Delta ABC$ cân tại $A$. Gọi $G$ là trọng tâm, $I$ là tâm đường tròn nội tiếp, $O$ là tâm ngoại tiếp, $H$ là trực tâm. Chứng minh 4 điểm $A, G, I, O, H$ thẳng hàng.
- **Bước giải (Step-by-step Proof):**
  1. $\Delta ABC$ cân tại $A$. Suy ra đường trung tuyến xuất phát từ đỉnh $A$ (gọi là $AM$) đồng thời là đường cao, đường phân giác, và đường trung trực của cạnh $BC$.
  2. Vì $AM$ là đường trung tuyến, nên trọng tâm $G$ nằm trên $AM$.
  3. Vì $AM$ là đường phân giác, tâm đường tròn nội tiếp $I$ nằm trên $AM$.
  4. Vì $AM$ là đường trung trực của $BC$, tâm đường tròn ngoại tiếp $O$ nằm trên $AM$.
  5. Vì $AM$ là đường cao hạ từ $A$, trực tâm $H$ nằm trên đường $AM$.
  6. Kết luận: Bốn điểm $G, I, O, H$ và đỉnh $A$ đều nằm trên đường thẳng chứa đoạn $AM$. Vậy chúng thẳng hàng.

**Bài toán 2:** Cho bộ ba đoạn thẳng có độ dài lần lượt là $x, x+2, x+4$ ($x > 0$). Tìm điều kiện của $x$ để ba đoạn thẳng này tạo thành một tam giác.
- **Bước giải (Step-by-step Proof):**
  1. Để 3 đoạn thẳng tạo thành một tam giác, chúng phải thỏa mãn bất đẳng thức tam giác.
  2. Cạnh dài nhất là $x+4$. Hai cạnh nhỏ hơn là $x$ và $x+2$.
  3. Áp dụng định lý: Tổng hai cạnh nhỏ hơn phải lớn hơn cạnh lớn nhất.
  4. $x + (x + 2) > x + 4$
  5. $2x + 2 > x + 4$
  6. $x > 2$.
  7. Vậy với mọi $x > 2$, bộ ba đoạn thẳng này sẽ tạo thành một tam giác.

**Bài toán 3 (Lập trình):** Sử dụng đoạn code Python ở mục 7, thay đổi tọa độ của điểm $C$ để tạo thành một tam giác vuông tại $A$ (Ví dụ: $A(0,0), B(4,0), C(0,3)$). Chạy lại code và kiểm tra vị trí của $H$ và $O$.
- **Kết quả mong đợi:** $H$ sẽ có tọa độ $(0, 0)$ (trùng đỉnh $A$), và $O$ sẽ có tọa độ $(2, 1.5)$ (trung điểm của cạnh huyền $BC$).

---

## 11. Bảng tiêu chí đánh giá (Assessment Rubric)

| Tiêu chí (Criteria) | Xuất sắc (Excellent) - 90-100đ | Đạt (Proficient) - 70-89đ | Cần cố gắng (Needs Improvement) - <70đ |
|---------------------|-------------------------------|---------------------------|----------------------------------------|
| **Hiểu lý thuyết (Theory)** | Phát biểu chính xác 100% định lý. Chứng minh rõ ràng mạch lạc các bài toán hình học. | Phát biểu được định lý, nhưng còn lúng túng khi chứng minh hoặc áp dụng vào bài toán phức tạp. | Sai lệch kiến thức cơ bản (ví dụ: sai bất đẳng thức tam giác). Không làm được bài chứng minh. |
| **Vẽ hình GeoGebra (GeoGebra)** | Vẽ chính xác, nhanh chóng 4 loại đường. Biết cách dùng hiệu ứng động để kiểm chứng sự đồng quy và kiểm tra tam giác đặc biệt. | Vẽ được 4 điểm đồng quy nhưng mất nhiều thời gian, đôi khi thao tác chưa tối ưu. | Không tìm được giao điểm chính xác. Nhầm lẫn công cụ trung trực và trung tuyến. |
| **Thực hành Code (Python)** | Cài đặt và chạy thành công. Hiểu cấu trúc code, biết cách sửa tọa độ điểm để tự tạo đề bài mới và tự kiểm chứng. | Chạy thành công code theo mẫu cung cấp nhưng chưa hiểu cách thay đổi thông số. | Báo lỗi không biết cách sửa (ví dụ chưa cài thư viện). Bỏ qua phần thực hành code. |
| **Giải quyết Vấn đề (Problem Solving)** | Hoàn thành xuất sắc 100% bài tập về nhà. Trình bày lập luận Logic hình học chặt chẽ. | Hoàn thành phần lớn bài tập, đôi chỗ trình bày chưa thật sự rõ ràng và logic. | Không hoàn thành bài tập hoặc làm nhưng không có chứng minh đi kèm. |

---
**Tài liệu tham khảo (References):**
- Sách giáo khoa Toán 7 - Kết Nối Tri Thức Với Cuộc Sống (Tập 2), NXB Giáo Dục.
- Tài liệu hướng dẫn sử dụng GeoGebra Classic 6.
- Tài liệu thư viện SymPy Geometry Module (https://docs.sympy.org/latest/modules/geometry/index.html).

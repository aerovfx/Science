# Tuần 6: Điện Tích, Định Luật Coulomb & Cường Độ Điện Trường / Week 6: Electric Charge, Coulomb's Law & Electric Field Strength

## 1. Mục Tiêu Bài Học / Learning Objectives

### Tiếng Việt
- Hiểu được bản chất của điện tích (dương, âm) và định luật bảo toàn điện tích trong một hệ cô lập.
- Nắm vững thuyết electron, cấu trúc nguyên tử và các hiện tượng nhiễm điện (cọ xát, tiếp xúc, hưởng ứng).
- Phát biểu và vận dụng được định luật Coulomb trong chân không và điện môi để giải các bài toán tương tác tĩnh điện cơ bản và phức tạp.
- Hiểu sâu khái niệm điện trường, cường độ điện trường và ý nghĩa vật lý của nguyên lý chồng chất điện trường.
- Vẽ và phân tích chi tiết được đường sức điện trường của các điện tích điểm độc lập, hệ điện tích và điện trường đều.
- Thực hiện được các thí nghiệm về tĩnh điện cơ bản, nhiễm điện và đo độ lệch của tĩnh điện kế.
- Ghi nhận và xử lý số liệu đo đạc thực nghiệm tĩnh điện.
- Thiết kế và lập trình mô phỏng các vector cường độ điện trường và đường sức bằng ngôn ngữ lập trình Python.

### English
- Understand the fundamental nature of electric charges (positive, negative) and the law of conservation of charge in an isolated system.
- Master the electron theory, atomic structure, and charging phenomena (friction, conduction, induction).
- State and apply Coulomb's law in vacuum and dielectric media to solve both basic and complex electrostatic interaction problems.
- Deeply understand the concept of electric fields, electric field strength, and the physical significance of the superposition principle.
- Draw and analyze in detail the electric field lines of independent point charges, systems of charges, and uniform electric fields.
- Perform basic electrostatic experiments, charging procedures, and measure the deflection angle of an electroscope.
- Record and process experimental electrostatic measurement data.
- Design and program an electric field vector and streamline simulation using the Python programming language.

---

## 2. Tài Liệu Tham Khảo / Related Textbook Lessons
- **SGK Kết nối tri thức Vật lí 11**:
  - **Bài 14**: Điện tích. Định luật Coulomb - Trọng tâm về tương tác hạt.
  - **Bài 15**: Điện trường - Khái niệm môi trường truyền tương tác điện.
  - **Bài 16**: Cường độ điện trường - Đại lượng đặc trưng cho tác dụng lực của điện trường.

---

## 3. Lịch Sử & Bối Cảnh Khoa Học / Historical Background
- **Thales của Miletus (600 TCN)**: Người đầu tiên ghi nhận hiện tượng hổ phách hút các vật nhẹ sau khi cọ xát.
- **Charles-Augustin de Coulomb (1785)**: Công bố định luật Coulomb bằng cách sử dụng cân xoắn do ông tự phát minh để đo lực đẩy/hút rất nhỏ.
- **Michael Faraday**: Đưa ra khái niệm "đường sức điện" (lines of force) giúp hình tượng hóa điện trường.

---

## 4. Dụng Cụ Thí Nghiệm / Lab Equipment & Tools

| STT / No. | Tên thiết bị / Equipment Name | Tiếng Anh / English | Số lượng / Qty | Đơn giá / Unit Price (VND) | Tình trạng / Availability |
|-----------|------------------------------|---------------------|----------------|---------------------------|---------------------------|
| 1 | Thanh thủy tinh, thanh nhựa | Glass & Plastic rods | 2 bộ | 50,000 | Sẵn có / Available |
| 2 | Vải lụa, vải len, lông thú | Silk & Fur cloths | 2 tấm | 30,000 | Sẵn có / Available |
| 3 | Tĩnh điện kế (Lá nhôm) | Electroscope | 1 bộ | 150,000 | Shopee/Lazada |
| 4 | Quả cầu kim loại cách điện | Insulated metal spheres | 2 quả | 100,000 | Cửa hàng thiết bị GD |
| 5 | Máy phát tĩnh điện Van de Graaff | Van de Graaff Generator | 1 cái | 1,500,000 | Phòng Lab / Lab room |
| 6 | Laptop / PC có cài Python | PC with Python | 1 máy | N/A | Tự trang bị / BYOD |
| 7 | Cân xoắn Coulomb (Mô hình) | Coulomb Torsion Balance | 1 bộ | 500,000 | Phòng Lab / Lab room |

---

## 5. Cơ Sở Lý Thuyết Chuyên Sâu / In-depth Theoretical Background

### 5.1. Điện Tích & Thuyết Electron / Electric Charge & Electron Theory
- **Cấu tạo nguyên tử**: Gồm hạt nhân mang điện dương (chứa proton và neutron) và lớp vỏ electron mang điện âm quay xung quanh.
- **Điện tích nguyên tố**: Electron có điện tích $e = -1.602 \times 10^{-19}$ C. Proton có điện tích $+1.602 \times 10^{-19}$ C.
- **Lượng tử hóa điện tích / Quantization of charge**: Bất kỳ điện tích tự do nào cũng bằng bội số nguyên của điện tích nguyên tố:
  $$ q = n \cdot e $$
- **Định luật bảo toàn điện tích / Conservation of charge**: Tổng đại số các điện tích của một hệ cô lập luôn là một hằng số.
  $$ \sum_{i} q_i = \text{const} $$

### 5.2. Định Luật Coulomb / Coulomb's Law
Lực tương tác tĩnh điện (hút hoặc đẩy) giữa hai điện tích điểm $q_1, q_2$ đứng yên tỉ lệ thuận với tích độ lớn của chúng và tỉ lệ nghịch với bình phương khoảng cách.
$$ F = k \frac{|q_1 q_2|}{\varepsilon r^2} $$
Trong đó:
- $F$: Độ lớn lực Coulomb (N)
- $k = \frac{1}{4\pi\varepsilon_0} \approx 8.99 \times 10^9 \, \text{N}\cdot\text{m}^2/\text{C}^2$
- $\varepsilon_0$: Hằng số điện môi chân không, xấp xỉ $8.85 \times 10^{-12} \, \text{C}^2/(\text{N}\cdot\text{m}^2)$
- $\varepsilon$: Hằng số điện môi tương đối của môi trường (chân không, không khí $\approx 1$, nước $\approx 81$)
- $r$: Khoảng cách giữa 2 điện tích (m).

**Phân tích vector lực Coulomb**:
Lực điện là đại lượng vector:
$$ \vec{F}_{12} = k \frac{q_1 q_2}{\varepsilon r^2} \hat{r}_{12} $$
Nếu $q_1 q_2 > 0$ (cùng dấu), $\vec{F}_{12}$ hướng ra xa (lực đẩy).
Nếu $q_1 q_2 < 0$ (trái dấu), $\vec{F}_{12}$ hướng vào trong (lực hút).

### 5.3. Điện Trường & Cường Độ Điện Trường / Electric Field
- **Khái niệm**: Điện trường là dạng vật chất đặc biệt tồn tại xung quanh hạt mang điện.
- **Cường độ điện trường $\vec{E}$**:
  $$ \vec{E} = \frac{\vec{F}}{q} $$
  Cường độ điện trường của điện tích điểm $Q$ tại điểm cách nó một khoảng $r$:
  $$ E = k \frac{|Q|}{\varepsilon r^2} $$
- **Nguyên lý chồng chất / Superposition principle**:
  Tại một điểm có nhiều điện trường $\vec{E}_1, \vec{E}_2, \dots, \vec{E}_n$, cường độ điện trường tổng hợp bằng tổng vector:
  $$ \vec{E} = \sum_{i=1}^n \vec{E}_i $$

### 5.4. Sơ đồ mô hình vật lý / Physical Model Diagrams (ASCII)

**Sự nhiễm điện do hưởng ứng / Charging by Induction:**
```text
( + ) Thanh thủy tinh / Glass rod
  |
  v
+---+   [ - - + + ] Quả cầu trung hòa / Neutral sphere
          Phân cực / Polarized
```

**Đường sức điện trường / Electric Field Lines (Dipole):**
```text
       ------>      <------
      /                    \
   ( + ) ---------------- ( - )
      \                    /
       ------>      <------
(Từ dương sang âm / From positive to negative)
```

---

## 6. Bài Toán Ví Dụ Mẫu & Giải Thích Chi Tiết / Worked Examples with Step-by-Step Solutions

### Ví dụ 1: Lực Coulomb 1D / 1D Coulomb Force
**Đề bài / Problem**: 
Hai điện tích điểm $q_1 = 3 \times 10^{-6} \, \text{C}$ và $q_2 = -5 \times 10^{-6} \, \text{C}$ được đặt cách nhau $20 \, \text{cm}$ trong chân không.
Tính lực tương tác tĩnh điện giữa chúng và cho biết đó là lực hút hay đẩy.
**Giải / Solution**:
1. Đổi đơn vị khoảng cách: $r = 20 \, \text{cm} = 0.2 \, \text{m}$.
2. Áp dụng định luật Coulomb trong chân không ($\varepsilon = 1$):
   $$ F = k \frac{|q_1 q_2|}{r^2} $$
3. Thay số (Plug in values):
   $$ F = 8.99 \times 10^9 \frac{|3 \times 10^{-6} \times (-5 \times 10^{-6})|}{(0.2)^2} $$
4. Tính toán:
   $$ F = 8.99 \times 10^9 \frac{15 \times 10^{-12}}{0.04} $$
   $$ F = 8.99 \times 10^9 \times 375 \times 10^{-12} = 3.37125 \, \text{N} $$
5. Kết luận: Vì $q_1$ và $q_2$ trái dấu, lực tĩnh điện là **lực hút**. / Since charges have opposite signs, it is an **attractive force**.

### Ví dụ 2: Lực Coulomb 2D (Nguyên lý chồng chất) / 2D Coulomb Force (Superposition)
**Đề bài / Problem**: 
Ba điện tích điểm $q_1 = q_2 = 2 \mu\text{C}$ và $q_3 = -2 \mu\text{C}$ đặt tại ba đỉnh của tam giác đều ABC cạnh $a = 30 \, \text{cm}$. Tính độ lớn lực điện tác dụng lên $q_3$ tại đỉnh C.
**Giải / Solution**:
1. Lực do $q_1$ (tại A) tác dụng lên $q_3$ (tại C) là lực hút, hướng từ C về A:
   $$ F_{13} = k \frac{|q_1 q_3|}{a^2} = 9 \times 10^9 \frac{2 \times 10^{-6} \times 2 \times 10^{-6}}{0.3^2} = 0.4 \, \text{N} $$
2. Lực do $q_2$ (tại B) tác dụng lên $q_3$ (tại C) là lực hút, hướng từ C về B:
   $$ F_{23} = k \frac{|q_2 q_3|}{a^2} = 0.4 \, \text{N} $$
3. Góc giữa hai vector lực $\vec{F}_{13}$ và $\vec{F}_{23}$ là $60^\circ$ (góc của tam giác đều).
4. Áp dụng quy tắc hình bình hành để tính lực tổng hợp $\vec{F}_3$:
   $$ F_3 = \sqrt{F_{13}^2 + F_{23}^2 + 2 F_{13} F_{23} \cos(60^\circ)} $$
5. Thay số:
   $$ F_3 = \sqrt{0.4^2 + 0.4^2 + 2(0.4)(0.4)(0.5)} = \sqrt{0.16 + 0.16 + 0.16} = \sqrt{0.48} \approx 0.693 \, \text{N} $$
6. Kết luận: Lực tác dụng lên $q_3$ có độ lớn $\approx 0.693 \, \text{N}$, hướng vào trung điểm đoạn AB.

### Ví dụ 3: Cường Độ Điện Trường Của Điện Tích Điểm / Electric Field Strength
**Đề bài / Problem**:
Xác định cường độ điện trường do điện tích $Q = -8 \mu\text{C}$ sinh ra tại điểm M cách nó $40 \, \text{cm}$ trong dầu (hằng số điện môi $\varepsilon = 2.5$).
**Giải / Solution**:
1. Đổi đơn vị: $Q = -8 \times 10^{-6} \, \text{C}$, $r = 0.4 \, \text{m}$.
2. Công thức cường độ điện trường:
   $$ E = k \frac{|Q|}{\varepsilon r^2} $$
3. Thay số:
   $$ E = 9 \times 10^9 \frac{8 \times 10^{-6}}{2.5 \times (0.4)^2} $$
   $$ E = 9 \times 10^9 \frac{8 \times 10^{-6}}{2.5 \times 0.16} = 9 \times 10^9 \frac{8 \times 10^{-6}}{0.4} = 180,000 \, \text{V/m} $$
4. Hướng của điện trường: Vì $Q$ mang điện âm, vector điện trường tại M hướng **về phía** điện tích $Q$.

---

## 7. Thực Hành Thí Nghiệm / Hands-on Experiments

### 7.1. Nhiễm điện do cọ xát & Tĩnh điện kế / Triboelectric charging & Electroscope
**Mục đích**: Hiểu cách truyền điện tích và đo lường định tính điện tích bằng tĩnh điện kế.
**Bảng xử lý số liệu (Ví dụ) / Data Table**:

| Thí nghiệm / Experiment | Vật liệu cọ xát / Materials | Góc xòe lá nhôm (Độ) / Leaf Deflection | Hiện tượng phụ / Observations |
|-------------------------|-----------------------------|---------------------------------------|---------------------------------|
| 1. Thanh thủy tinh      | Thủy tinh + Vải lụa         | ~ 30 độ                               | Lá nhôm xòe ra ngay lập tức.    |
| 2. Thanh nhựa (PVC)     | Nhựa + Lông thú             | ~ 45 độ                               | Hút các mảnh giấy vụn rất mạnh. |
| 3. Chạm tay vào lá nhôm | Người + Lá nhôm             | 0 độ                                  | Lá nhôm xẹp xuống (nối đất).    |
| 4. Hưởng ứng            | Thanh nhựa để gần (không chạm)| ~ 20 độ                             | Khi đưa ra xa, lá nhôm xẹp lại. |

**Các bước tiến hành chi tiết / Detailed Steps**:
1. Dùng thanh nhựa PVC cọ mạnh vào tấm lông thú (khoảng 10-15 lần). Thanh nhựa sẽ lấy electron từ lông thú và nhiễm điện âm.
2. Đưa thanh nhựa lại gần quả cầu của tĩnh điện kế nhưng KHÔNG chạm vào. Quan sát sự phân cực điện tích (điện dương bị hút lên quả cầu, điện âm đẩy xuống 2 lá nhôm làm chúng đẩy nhau và xòe ra).
3. Chạm thanh nhựa vào quả cầu kim loại. Các electron từ thanh nhựa di chuyển sang quả cầu và lá nhôm.
4. Lấy thanh nhựa ra. Lúc này tĩnh điện kế đã nhiễm điện âm vĩnh viễn, 2 lá nhôm vẫn xòe ra.
5. Chạm ngón tay vào quả cầu kim loại. Cơ thể người dẫn điện sẽ trung hòa điện tích dư thừa, làm lá nhôm xẹp xuống (Nối đất / Grounding).

### 7.2. Chú ý An Toàn / ⚠️ Safety Warnings
- **High voltage electrostatic warning**: Máy phát Van de Graaff có thể tạo ra điện thế hàng chục ngàn Volt. Tia lửa tĩnh điện có thể gây giật mình hoặc đau nhẹ.
- Không sử dụng cho người có máy tạo nhịp tim (pacemaker).
- Xả điện phần tĩnh điện sau mỗi lần sử dụng bằng thanh nối đất (grounding rod) để tránh tai nạn điện giật không mong muốn.
- Không để các thiết bị điện tử nhạy cảm (điện thoại, laptop) quá gần máy Van de Graaff vì từ trường biến thiên và tia lửa điện có thể làm hỏng vi mạch.

---

## 8. Lập Trình Mô Phỏng / Python Simulation Code

### Bài 1: Đồ thị Lực Coulomb theo khoảng cách / Coulomb Force vs Distance Plot
Chạy đoạn code sau để hình dung sự phụ thuộc của lực Coulomb vào $1/r^2$.

```python
# Lập trình vẽ đồ thị Lực Coulomb bằng Python
# Python Code for Coulomb Force Plot
import numpy as np
import matplotlib.pyplot as plt

# Khởi tạo thông số (Parameters)
k = 8.99e9      # Hằng số Coulomb (N.m^2/C^2)
q1 = 2e-6       # Điện tích 1 (C)
q2 = 3e-6       # Điện tích 2 (C)

# Khoảng cách r từ 0.05m đến 0.5m (5cm to 50cm)
r = np.linspace(0.05, 0.5, 100)

# Tính lực F theo định luật Coulomb
F = k * abs(q1 * q2) / (r**2)

# Thiết lập đồ thị
plt.figure(figsize=(10, 6))
plt.plot(r, F, 'b-', linewidth=2.5, label='F = k|q1*q2|/r^2')
plt.title('Sự phụ thuộc của lực Coulomb vào khoảng cách (Coulomb Force vs Distance)', fontsize=14)
plt.xlabel('Khoảng cách r (m)', fontsize=12)
plt.ylabel('Lực tương tác F (N)', fontsize=12)
plt.grid(True, linestyle='--', alpha=0.7)
plt.legend(fontsize=12)
plt.annotate('Lực giảm rất nhanh khi r tăng\n(Inverse square law)', 
             xy=(0.1, max(F)/2), xytext=(0.2, max(F)*0.6),
             arrowprops=dict(facecolor='red', shrink=0.05))
plt.tight_layout()
plt.show()
```

### Bài 2: Mô phỏng Vector Điện Trường 2D / 2D Electric Field Vector Field Simulation
Chạy đoạn code sau để vẽ đường sức điện trường của hệ 2 điện tích điểm.

```python
# Mô phỏng đường sức điện trường 2D
# 2D Electric Field Lines Simulation
import numpy as np
import matplotlib.pyplot as plt

def E_field(q, r0, x, y):
    """
    Tính vector điện trường (Ex, Ey) do điện tích q đặt tại r0 sinh ra.
    Returns the electric field vector E = (Ex, Ey) of a charge q at r0
    """
    # Tính bình phương khoảng cách
    den = np.hypot(x-r0[0], y-r0[1])**3
    # Tránh chia cho 0 tại vị trí đặt điện tích
    den[den == 0] = np.inf
    return q * (x - r0[0]) / den, q * (y - r0[1]) / den

# Lưới không gian (Grid setup)
nx, ny = 100, 100
x = np.linspace(-3, 3, nx)
y = np.linspace(-3, 3, ny)
X, Y = np.meshgrid(x, y)

# Khai báo các điện tích (Charges: (charge_value, [x_pos, y_pos]))
# Dipole: +1 tại (-1,0), -1 tại (1,0)
charges = [(1.5, [-1, 0]), (-1.5, [1, 0])] 

# Tính tổng hợp điện trường
Ex, Ey = np.zeros((ny, nx)), np.zeros((ny, nx))
for charge in charges:
    ex, ey = E_field(charge[0], charge[1], X, Y)
    Ex += ex
    Ey += ey

# Vẽ đồ thị (Plotting)
fig = plt.figure(figsize=(10, 8))
ax = fig.add_subplot(111)

# Độ lớn điện trường để tô màu
color_intensity = np.log1p(np.hypot(Ex, Ey))

# Streamplot vẽ các đường sức
strm = ax.streamplot(x, y, Ex, Ey, color=color_intensity, linewidth=1.5, 
                     cmap=plt.cm.jet, density=2, arrowstyle='->', arrowsize=2)

# Vẽ các chấm thể hiện điện tích
charge_colors = {True: 'red', False: 'blue'}
for q, pos in charges:
    circle = plt.Circle(pos, 0.1, color=charge_colors[q>0], zorder=5)
    ax.add_artistic(circle)
    # Thêm text chú thích + / -
    ax.text(pos[0]-0.05, pos[1]-0.05, '+' if q>0 else '-', 
            color='white', fontsize=12, weight='bold', zorder=6)

ax.set_xlabel('Trục x (m)', fontsize=12)
ax.set_ylabel('Trục y (m)', fontsize=12)
ax.set_xlim(-3,3)
ax.set_ylim(-3,3)
ax.set_aspect('equal')
plt.title('Đường Sức Điện Trường Của Lưỡng Cực Điện (Dipole Electric Field)', fontsize=14)
fig.colorbar(strm.lines, ax=ax, label='Log Intensity')
plt.show()
```

---

## 9. Câu Hỏi Thảo Luận Chuyên Sâu / Advanced Discussion Questions

1. **(VI)** Tại sao xe bồn chở xăng dầu thường thả một sợi xích sắt chạm xuống mặt đường khi di chuyển? Hiện tượng gì sẽ xảy ra nếu không có sợi xích này?
   **(EN)** Why do oil tanker trucks often drag an iron chain on the road? What would happen if this chain was missing?
   *Gợi ý / Hint*: Khi xe chạy, sự cọ xát giữa lốp xe với mặt đường và xăng dầu xóc nảy bên trong bồn tạo ra hiện tượng nhiễm điện do ma sát. Điện tích tĩnh tích tụ trên thân xe có thể lên tới hàng ngàn volt. Nếu không có xích sắt nối đất để xả điện, một tia lửa tĩnh điện có thể phát sinh khi ai đó chạm vào bồn hoặc khi xả xăng, dẫn đến cháy nổ. Xích sắt truyền điện tích từ thân xe xuống đất, giữ an toàn.

2. **(VI)** Cường độ điện trường bằng 0 ở vị trí nào giữa hai điện tích cùng dấu và trái dấu? Giải thích bằng nguyên lý chồng chất.
   **(EN)** Where is the electric field zero between two charges of the same sign and opposite signs? Explain using the superposition principle.
   *Gợi ý / Hint*: Với hai điện tích cùng dấu, điểm có $E = 0$ nằm trên đoạn thẳng nối 2 điện tích, vì 2 vector điện trường tại đó ngược chiều nhau và có thể triệt tiêu. Với hai điện tích trái dấu, 2 vector điện trường giữa chúng luôn cùng chiều, nên không thể có điểm nào trên đoạn nối bằng không. Điểm $E=0$ sẽ nằm ngoài đoạn nối, về phía điện tích có độ lớn nhỏ hơn.

3. **(VI)** Điện trường đều có đặc điểm gì? Hãy nêu cấu tạo của một thiết bị tạo ra điện trường đều trong thực tế.
   **(EN)** What are the characteristics of a uniform electric field? Describe a real-world device that generates it.
   *Gợi ý / Hint*: Điện trường đều có các đường sức là những đường thẳng song song, cách đều nhau. Cường độ điện trường tại mọi điểm là như nhau về cả hướng và độ lớn. Trong thực tế, khoảng không gian giữa hai bản kim loại phẳng song song, tích điện trái dấu, có độ lớn bằng nhau (như trong tụ điện phẳng) chính là một điện trường đều.

4. **(VI)** Nếu tăng khoảng cách giữa hai điện tích lên gấp 3 lần và giảm độ lớn của mỗi điện tích đi một nửa, lực Coulomb thay đổi như thế nào?
   **(EN)** If the distance between two charges is tripled and the magnitude of each is halved, how does the Coulomb force change?
   *Gợi ý / Hint*: Lực Coulomb tỉ lệ thuận với tích độ lớn 2 điện tích và tỉ lệ nghịch với bình phương khoảng cách. $F' \propto \frac{(1/2)(1/2)}{3^2} = \frac{1/4}{9} = \frac{1}{36}$. Lực sẽ giảm 36 lần.

5. **(VI)** Khi đưa một quả cầu kim loại trung hòa chưa nhiễm điện lại gần một quả cầu tích điện dương, quả cầu trung hòa có bị hút không? Giải thích hiện tượng.
   **(EN)** When a neutral metal sphere is brought near a positively charged sphere, is it attracted? Explain the phenomenon.
   *Gợi ý / Hint*: Có bị hút. Đây là hiện tượng nhiễm điện hưởng ứng. Quả cầu dương sẽ hút các electron tự do trong quả cầu kim loại về phía gần nó, làm mặt gần mang điện âm, mặt xa mang điện dương. Do lực tĩnh điện tỉ lệ nghịch với bình phương khoảng cách, lực hút (giữa mặt âm và quả cầu dương) lớn hơn lực đẩy (giữa mặt dương và quả cầu dương). Kết quả là quả cầu trung hòa bị hút lại.

---

## 10. Bài Tập Về Nhà / Homework Problems & Solutions

**Bài 1 / Problem 1**: 
Hai hạt bụi mang điện tích bằng nhau, nằm cách nhau một khoảng $r = 3 \, \text{cm}$ trong chân không. Chúng đẩy nhau với một lực $F = 1.6 \times 10^{-4} \, \text{N}$. 
a) Tính độ lớn điện tích của mỗi hạt bụi.
b) Phải đem chúng ra một khoảng cách bằng bao nhiêu để lực tương tác giảm đi 4 lần?
*Đáp án / Solution step*:
a) Vì điện tích bằng nhau $q_1 = q_2 = q$. Định luật Coulomb:
$$ F = k \frac{q^2}{r^2} \implies q^2 = \frac{F \cdot r^2}{k} $$
$$ q^2 = \frac{1.6 \times 10^{-4} \times (0.03)^2}{9 \times 10^9} = \frac{1.6 \times 10^{-4} \times 9 \times 10^{-4}}{9 \times 10^9} = 1.6 \times 10^{-17} \, \text{C}^2 $$
$$ |q| = 4 \times 10^{-9} \, \text{C} = 4 \, \text{nC} $$
b) Để lực $F'$ giảm đi 4 lần, tức là $F' = F/4$, thì mẫu số $r^2$ phải tăng gấp 4 lần. Vậy $r'$ phải tăng gấp 2 lần.
$$ r' = 2 \times 3 \, \text{cm} = 6 \, \text{cm} $$

**Bài 2 / Problem 2**:
Tại ba đỉnh A, B, C của một hình vuông ABCD cạnh $a = 20 \, \text{cm}$ trong không khí, người ta đặt ba điện tích điểm: $q_A = 2 \mu\text{C}$, $q_B = -2 \mu\text{C}$, $q_C = 2 \mu\text{C}$. Tính cường độ điện trường tổng hợp tại đỉnh D của hình vuông.
*Đáp án / Solution step*:
- Đổi đơn vị $a = 0.2 \, \text{m}$.
- Cường độ điện trường do $q_A$ gây ra tại D:
  $$ E_A = k \frac{|q_A|}{a^2} = 9 \times 10^9 \times \frac{2 \times 10^{-6}}{0.2^2} = 4.5 \times 10^5 \, \text{V/m} $$ (Hướng dọc theo AD).
- Cường độ điện trường do $q_C$ gây ra tại D:
  $$ E_C = k \frac{|q_C|}{a^2} = 4.5 \times 10^5 \, \text{V/m} $$ (Hướng dọc theo CD).
- Điện trường tổng hợp của $A$ và $C$ là $E_{AC} = \sqrt{E_A^2 + E_C^2} = E_A \sqrt{2} \approx 6.36 \times 10^5 \, \text{V/m}$. Hướng dọc theo đường chéo DB.
- Cường độ điện trường do $q_B$ gây ra tại D (khoảng cách BD = $a\sqrt{2}$):
  $$ E_B = k \frac{|q_B|}{(a\sqrt{2})^2} = 9 \times 10^9 \times \frac{2 \times 10^{-6}}{0.08} = 2.25 \times 10^5 \, \text{V/m} $$ 
- Vì $q_B$ âm, vector $\vec{E}_B$ hướng từ D về B. $\vec{E}_{AC}$ hướng từ B về D.
- Hai vector này ngược chiều, cường độ tổng hợp:
  $$ E_D = E_{AC} - E_B = 6.36 \times 10^5 - 2.25 \times 10^5 = 4.11 \times 10^5 \, \text{V/m} $$
Hướng từ B sang D.

---

## 11. Đánh Giá / Comprehensive Assessment Rubric (100-point scale)

| Tiêu chí / Criteria | Xuất sắc / Excellent (90-100) | Khá / Good (70-89) | Cần cố gắng / Needs Improvement (<70) |
|---------------------|-------------------------------|--------------------|---------------------------------------|
| **1. Nắm vững lý thuyết (30%)** <br>*Knowledge of concepts* | Giải thích mạch lạc các định luật bảo toàn, phân tích rõ ràng cấu tạo nguyên tử, không có sai sót. | Hiểu cơ bản công thức nhưng còn nhầm lẫn về dấu điện tích hoặc nguyên lý hưởng ứng. | Không thuộc định luật Coulomb. Không giải thích được nhiễm điện do ma sát. |
| **2. Thực hành thí nghiệm (20%)** <br>*Laboratory skills* | Thao tác an toàn tuyệt đối. Ghi nhận đầy đủ số liệu vào bảng. Giải thích hiện tượng tĩnh điện kế xuất sắc. | Làm được thí nghiệm nhưng bảng số liệu sơ sài, giải thích hiện tượng còn lúng túng. | Không thực hiện được thí nghiệm tĩnh điện kế, vi phạm an toàn phòng lab. |
| **3. Giải bài tập & Tính toán (30%)** <br>*Problem solving* | Trình bày bài giải rõ ràng, dùng đúng đơn vị SI. Tính toán vector tổng hợp (nguyên lý chồng chất) chính xác. | Tính đúng độ lớn (scalar) nhưng sai hướng của vector. Còn sai sót nhỏ ở phép đổi đơn vị cm sang m. | Không giải được bài toán cơ bản. Áp dụng sai hoàn toàn công thức Coulomb. |
| **4. Lập trình Python (20%)** <br>*Python Simulation* | Chạy thành công 100% mã nguồn, đồ thị rõ ràng. Có khả năng tùy chỉnh vị trí điện tích, lưới đồ thị và tự nhận xét hình dạng đường sức. | Chạy được code mẫu, nhưng không hiểu logic hàm tính toán bình phương nghịch đảo. | Không biết cài đặt thư viện matplotlib. Gặp lỗi cú pháp không tự sửa được. |

---
*Vui lòng lưu ý các yêu cầu về an toàn điện trong phòng thí nghiệm. Vật lý tĩnh điện là cơ sở cho toàn bộ thuyết điện từ học hiện đại! / Please observe electrical safety rules. Electrostatics is the foundation of modern electromagnetism!*

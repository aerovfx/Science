# Tuần 7: Điện Thế, Hiệu Điện Thế, Tụ Điện & Năng Lượng Điện Trường / Week 7: Electric Potential, Voltage, Capacitors & Electric Field Energy

## 1. Mục Tiêu Bài Học / Learning Objectives

### Tiếng Việt
- Hiểu được công của lực điện trường là một lực thế, nó hoàn toàn không phụ thuộc vào hình dạng đường đi của điện tích mà chỉ phụ thuộc vào điểm đầu và điểm cuối của quá trình dịch chuyển.
- Nắm vững khái niệm điện thế tại một điểm trong điện trường, mô tả khả năng sinh công của điện trường.
- Nắm vững khái niệm hiệu điện thế (Voltage) giữa hai điểm và công thức liên hệ với cường độ điện trường đều.
- Định nghĩa được cấu tạo của tụ điện, điện dung của tụ điện và ý nghĩa của các đơn vị như Farad, Microfarad, Nanofarad.
- Thiết lập và vận dụng được công thức tính điện dung của tụ điện phẳng và công thức tính năng lượng tích lũy trong điện trường của tụ.
- Thiết lập sơ đồ và giải quyết các bài toán về mạch điện ghép tụ điện (mắc nối tiếp, mắc song song, hỗn hợp).
- Thực hành lắp ráp mạch điện, sử dụng đồng hồ vạn năng đo đạc và xác định thời gian nạp/xả của mạch RC thông qua vi điều khiển Arduino.
- Đọc, hiểu và lập trình Python mô phỏng đường cong hàm mũ đặc trưng của quá trình nạp và xả tụ điện.

### English
- Understand that the work done by an electric force is conservative; it does not depend on the path taken by the charge, only on the initial and final positions.
- Master the concept of electric potential at a point, describing the electric field's capacity to do work.
- Master the concept of potential difference (Voltage) and its relation to a uniform electric field.
- Define the structure of a capacitor, its capacitance, and understand units like Farad, Microfarad, Nanofarad.
- Derive and apply the capacitance formula for a parallel-plate capacitor and the stored electric field energy.
- Analyze and solve problems involving complex capacitor circuits (series, parallel, and mixed combinations).
- Assemble circuits and perform practical labs using a multimeter and Arduino to measure the charge/discharge time constant of an RC circuit.
- Read, understand, and write Python scripts to simulate the exponential charging and discharging curves of capacitors.

---

## 2. Tài Liệu Tham Khảo / Related Textbook Lessons
- **SGK Kết nối tri thức Vật lí 11**:
  - **Bài 17**: Điện thế và hiệu điện thế - Khái niệm năng lượng trong điện trường.
  - **Bài 18**: Tụ điện - Thiết bị lưu trữ điện tích và cấu tạo mạch điện.
  - **Bài 19**: Năng lượng điện trường - Ứng dụng tích trữ năng lượng.

---

## 3. Lịch Sử Khám Phá / Historical Background
- **Chai Leyden (Leyden Jar) - 1745**: Do Pieter van Musschenbroek phát minh, là dạng tụ điện đầu tiên trong lịch sử, dùng để tích trữ tĩnh điện với điện áp cao.
- **Benjamin Franklin (1749)**: Phân tích chai Leyden và chứng minh rằng điện tích được lưu trữ ở thủy tinh (lớp điện môi) chứ không phải ở nước bên trong.
- **Alessandro Volta (1800)**: Chế tạo ra pin Voltaic Pile và đặt nền móng cho khái niệm về Điện thế (Voltage - mang tên ông).

---

## 4. Dụng Cụ Thí Nghiệm / Lab Equipment & Tools

| STT / No. | Tên thiết bị / Equipment Name | Tiếng Anh / English | Số lượng / Qty | Đơn giá / Unit Price (VND) | Tình trạng / Availability |
|-----------|------------------------------|---------------------|----------------|---------------------------|---------------------------|
| 1 | Bộ tụ điện các loại (10uF, 100uF, 1000uF) | Capacitor assortment kit | 1 hộp | 100,000 | Sẵn có / Available |
| 2 | Bộ điện trở (1k, 10k, 100k Ohm) | Resistor assortment kit | 1 hộp | 50,000 | Sẵn có / Available |
| 3 | Board mạch cắm, không cần hàn | Breadboard | 2 cái | 35,000 | Sẵn có / Available |
| 4 | Đồng hồ vạn năng điện tử (Digital) | Digital Multimeter | 1 cái | 250,000 | Sẵn có / Available |
| 5 | Vi điều khiển Arduino Uno R3 | Arduino Uno R3 Microcontroller | 1 bo | 150,000 | Sẵn có / Available |
| 6 | Dây cắm mạch (Đực-Đực) | Jumper wires (Male to Male) | 1 bó | 20,000 | Sẵn có / Available |
| 7 | Nguồn điện một chiều (Pin 9V) | 9V DC Battery & Snap connector | 2 bộ | 25,000 | Sẵn có / Available |

---

## 5. Cơ Sở Lý Thuyết Chuyên Sâu / In-depth Theoretical Background

### 5.1. Công của Lực Điện & Tính Chất Thế / Work of Electric Force
- Khi một điện tích điểm $q$ dịch chuyển từ điểm M đến điểm N trong một điện trường, lực điện tác dụng lên $q$ sinh công $A_{MN}$.
- **Tính chất bảo toàn (Conservative nature)**: Công $A_{MN}$ không phụ thuộc vào quỹ đạo di chuyển từ M đến N mà chỉ phụ thuộc vào tọa độ vị trí điểm M và N.
  Trong một điện trường đều $E$:
  $$ A_{MN} = q \cdot E \cdot d $$
  Trong đó $d$ là hình chiếu của độ dời $\vec{MN}$ lên phương đường sức điện trường.

### 5.2. Điện Thế & Hiệu Điện Thế / Electric Potential & Voltage
- **Điện thế $V$**: Là đại lượng đặc trưng cho điện trường về phương diện tạo ra thế năng. 
  $$ V_M = \frac{W_M}{q} = \frac{A_{M\infty}}{q} $$
- **Hiệu điện thế (Điện áp) $U$**: 
  $$ U_{MN} = V_M - V_N = \frac{A_{MN}}{q} $$
- Hệ thức liên hệ trong điện trường đều:
  $$ E = \frac{U}{d} $$
  Đơn vị của cường độ điện trường là Vôn trên mét (V/m).

### 5.3. Cấu Tạo Và Điện Dung Của Tụ Điện / Capacitors & Capacitance
- **Cấu tạo**: Hai vật dẫn bất kỳ đặt gần nhau và được cách điện với nhau bằng lớp điện môi (không khí, giấy, gốm, mica).
- **Điện dung $C$**: Đại lượng đặc trưng cho khả năng tích điện của tụ ở một hiệu điện thế nhất định.
  $$ C = \frac{Q}{U} $$
  Đơn vị đo là Farad (F). Các đơn vị ước: $1 \, \mu\text{F} = 10^{-6} \, \text{F}$, $1 \, \text{nF} = 10^{-9} \, \text{F}$, $1 \, \text{pF} = 10^{-12} \, \text{F}$.
- **Tụ điện phẳng / Parallel-plate capacitor**:
  $$ C = \frac{\varepsilon \varepsilon_0 S}{d} $$
  Trong đó: $\varepsilon$ là hằng số điện môi, $S$ là diện tích phần đối diện của hai bản tụ, $d$ là khoảng cách giữa 2 bản.

### 5.4. Ghép Tụ Điện / Combination of Capacitors
**Ghép nối tiếp (Series Combination)**:
- Mạch mắc nối tiếp, các tụ có điện tích bằng nhau do sự hưởng ứng tĩnh điện.
  $$ Q_{eq} = Q_1 = Q_2 = \dots = Q_n $$
- Hiệu điện thế của bộ tụ bằng tổng các hiệu điện thế:
  $$ U_{eq} = U_1 + U_2 + \dots + U_n $$
- Điện dung tương đương:
  $$ \frac{1}{C_{eq}} = \frac{1}{C_1} + \frac{1}{C_2} + \dots + \frac{1}{C_n} $$

**Ghép song song (Parallel Combination)**:
- Các bản tụ nối chung với nhau, hiệu điện thế trên mỗi tụ là như nhau.
  $$ U_{eq} = U_1 = U_2 = \dots = U_n $$
- Điện tích tổng cộng:
  $$ Q_{eq} = Q_1 + Q_2 + \dots + Q_n $$
- Điện dung tương đương:
  $$ C_{eq} = C_1 + C_2 + \dots + C_n $$

### 5.5. Năng Lượng Điện Trường / Electric Field Energy
Khi nạp điện cho tụ, quá trình này yêu cầu sinh công chống lại lực đẩy tĩnh điện. Công này tích lũy dưới dạng năng lượng điện trường bên trong tụ.
$$ W_e = \frac{1}{2} Q \cdot U = \frac{1}{2} C \cdot U^2 = \frac{Q^2}{2C} $$
Mật độ năng lượng điện trường trong một thể tích $V$:
$$ w = \frac{W_e}{V} = \frac{\varepsilon \varepsilon_0 E^2}{2} $$

### 5.6. Sơ đồ mô hình (ASCII) / ASCII Diagrams

**Tụ điện phẳng và Điện trường (Parallel-plate capacitor):**
```text
      ( +Q ) Bản dương / Positive Plate, Diện tích Area S
      + + + + + + + + + + + + + + 
       | | | | | | | | | | | | |  <-- Các đường sức song song (Điện trường đều)
       v v v v v v v v v v v v v 
      - - - - - - - - - - - - - - 
      ( -Q ) Bản âm / Negative Plate, Nối đất hoặc âm nguồn
       <-------- d -------->
```

**Mạch phân áp dung kháng (Capacitive Voltage Divider):**
```text
       +----[ C1 ]----+
       |              |
      (U)             +--- Đo U2
       |              |
       +----[ C2 ]----+
```

---

## 6. Bài Toán Ví Dụ Mẫu & Giải Thích Chi Tiết / Worked Examples with Step-by-Step Solutions

### Ví dụ 1: Tính điện thế và công lực điện / Potential and Work
**Đề bài / Problem**: 
Giữa hai bản phẳng song song mang điện trái dấu, đặt cách nhau $d = 5 \, \text{cm}$, có một hiệu điện thế $U = 100 \, \text{V}$. Một hạt electron di chuyển từ bản âm sang bản dương.
a) Tính cường độ điện trường giữa hai bản.
b) Tính công của lực điện trường thực hiện lên electron.
**Giải / Solution**:
1. Đổi đơn vị $d = 0.05 \, \text{m}$.
2. Cường độ điện trường đều:
   $$ E = \frac{U}{d} = \frac{100}{0.05} = 2000 \, \text{V/m} $$
3. Khi electron di chuyển từ bản âm sang bản dương, độ dời $d'$ ngược chiều đường sức điện trường. Tuy nhiên, lực điện tác dụng lên electron $\vec{F} = q\vec{E}$ cũng ngược chiều điện trường. Do đó lực điện cùng chiều với quỹ đạo, công là công dương.
   $$ A = |q| \cdot U = 1.6 \times 10^{-19} \times 100 = 1.6 \times 10^{-17} \, \text{J} $$
   (Hoặc theo định nghĩa $A = q(V_{âm} - V_{dương}) = (-e)(0 - U) = eU$).

### Ví dụ 2: Ghép tụ điện hỗn hợp / Mixed Capacitor Combinations
**Đề bài / Problem**: 
Cho ba tụ điện $C_1 = 3 \mu\text{F}$, $C_2 = 6 \mu\text{F}$, và $C_3 = 4 \mu\text{F}$. Tụ $C_1$ và $C_2$ mắc nối tiếp nhau. Sau đó cụm này được mắc song song với $C_3$. Đặt vào 2 cực của bộ tụ một điện áp $U = 12 \, \text{V}$.
a) Tính điện dung tương đương của bộ tụ.
b) Tính điện tích của cụm $(C_1, C_2)$ và điện tích của tụ $C_3$.
**Giải / Solution**:
1. Cụm $C_{12}$ mắc nối tiếp:
   $$ \frac{1}{C_{12}} = \frac{1}{C_1} + \frac{1}{C_2} = \frac{1}{3} + \frac{1}{6} = \frac{3}{6} \implies C_{12} = 2 \, \mu\text{F} $$
2. Bộ tụ song song $C_{eq} = C_{12} + C_3 = 2 + 4 = 6 \, \mu\text{F}$.
3. Vì $C_{12}$ và $C_3$ mắc song song nên hiệu điện thế trên mỗi nhánh bằng nhau: $U_{12} = U_3 = U = 12 \, \text{V}$.
4. Điện tích nhánh $C_3$:
   $$ Q_3 = C_3 \cdot U_3 = 4 \mu\text{F} \times 12 \text{V} = 48 \, \mu\text{C} $$
5. Điện tích nhánh $C_{12}$:
   $$ Q_{12} = C_{12} \cdot U_{12} = 2 \mu\text{F} \times 12 \text{V} = 24 \, \mu\text{C} $$
6. Vì $C_1, C_2$ nối tiếp nên $Q_1 = Q_2 = Q_{12} = 24 \, \mu\text{C}$.

### Ví dụ 3: Thay đổi điện môi trong tụ phẳng / Changing Dielectrics
**Đề bài / Problem**: 
Tụ phẳng không khí $C = 20 \text{pF}$ được nối với nguồn $U = 5 \text{V}$. Vẫn giữ nguyên nối với nguồn, người ta nhúng toàn bộ tụ vào chất lỏng có hằng số điện môi $\varepsilon = 4$. Năng lượng điện trường của tụ thay đổi ra sao?
**Giải / Solution**:
1. Ban đầu: $W_1 = \frac{1}{2} C U^2 = \frac{1}{2} \times 20 \times 10^{-12} \times 5^2 = 250 \times 10^{-12} \, \text{J} = 250 \, \text{pJ}$.
2. Vẫn nối với nguồn nên $U = const = 5 \text{V}$.
3. Khi cho chất điện môi vào, điện dung tăng 4 lần: $C' = 4 \times 20 = 80 \, \text{pF}$.
4. Năng lượng lúc sau:
   $$ W_2 = \frac{1}{2} C' U^2 = \frac{1}{2} \times 80 \times 10^{-12} \times 5^2 = 1000 \, \text{pJ} $$
5. Vậy năng lượng điện trường tăng lên gấp 4 lần. Phần năng lượng cung cấp thêm đến từ nguồn điện.

---

## 7. Thực Hành Thí Nghiệm / Hands-on Experiments

### 7.1. Đo hằng số thời gian $\tau$ của mạch RC / Measuring RC Time Constant
**Mục đích**: Xác định hằng số thời gian $\tau = RC$ bằng thực nghiệm và so sánh với lý thuyết. Nắm rõ hiện tượng nạp, xả tụ.
**Bảng dữ liệu thí nghiệm (Ví dụ cho RC = 10s) / Data Table**:
Sử dụng $R = 10 \, \text{k}\Omega$ và $C = 1000 \, \mu\text{F}$. Nguồn $5\text{V}$.

| Thời gian $t$ (s) | Điện áp Vôn kế (V) - Quá trình Nạp | Tỉ lệ $U/V_0$ (%) |
|-------------------|------------------------------------|-------------------|
| 0 | 0.00 | 0% |
| 5 | 1.97 | ~39.4% |
| 10 ($\tau$) | 3.16 | 63.2% (Khớp lý thuyết) |
| 20 ($2\tau$) | 4.32 | ~86.5% |
| 30 ($3\tau$) | 4.75 | ~95.0% |
| 50 ($5\tau$) | 4.97 | ~99.3% (Tụ đầy) |

**Cách làm chi tiết**:
1. Cắm $R = 10 \, \text{k}\Omega$ và $C = 1000 \, \mu\text{F}$ nối tiếp nhau trên breadboard. Nối với dây Ground của Arduino.
2. Nối cực dương của tụ với một đầu của trở. Đầu kia của trở sẽ cắm vào chân $5\text{V}$ khi bắt đầu thí nghiệm.
3. Kẹp dây Vôn kế vạn năng vào hai chân của tụ điện (chú ý dây đỏ vào cực dương tụ, dây đen vào cực âm tụ). Bật thang đo 20V DC.
4. Cắm dây vào chân $5\text{V}$ và đồng thời bấm đồng hồ bấm giây.
5. Mỗi 5 giây đọc to số Vôn và ghi vào bảng.
6. Khi tụ đầy (đạt ~5V), tháo dây khỏi chân $5\text{V}$ và cắm vòng lại về chân GND để thực hiện xả tụ. Ghi nhận thời gian điện áp giảm xuống còn $36.8\%$ ($~1.84\text{V}$).

### 7.2. Chú ý An Toàn / ⚠️ Safety Warnings
- **Tụ điện hóa (Electrolytic capacitors)** có tính phân cực rất mạnh. Một chân dài là cực dương (+), chân ngắn hoặc sọc xám trên thân là cực âm (-). **Phải cắm đúng chiều**. Cắm ngược có thể làm tụ sinh khí, phồng rộp, xì khói và thậm chí phát nổ như pháo.
- **Xả tụ trước khi cất**: Các tụ có dung lượng lớn (như loại trong amply, $10000 \mu\text{F}$) phải được xả điện bằng cách dùng một điện trở nối tắt 2 chân. Không dùng dây kim loại nối chập trực tiếp vì tia lửa sinh ra có thể phá hủy lớp điện môi.

---

## 8. Lập Trình Mô Phỏng / Python Simulation Code

### Bài 1: Đồ thị Nạp / Xả tụ RC (Hàm mũ) / RC Charge & Discharge Exponential Curves
Chạy đoạn mã sau bằng Jupyter Notebook để quan sát quy luật biến đổi điện áp của tụ.

```python
# RC Circuit Charge & Discharge Simulation
# Mô phỏng quá trình nạp và xả của mạch RC
import numpy as np
import matplotlib.pyplot as plt

# 1. Định nghĩa thông số linh kiện (Parameters)
R = 10000       # Điện trở / Resistance in Ohms (10 kOhm)
C = 1000e-6     # Điện dung / Capacitance in Farads (1000 uF)
V_source = 5.0  # Điện áp nguồn / Supply voltage

tau = R * C     # Hằng số thời gian / Time constant
print(f"Hằng số thời gian (Time Constant) tau = {tau} s")

# 2. Tạo mảng thời gian từ 0 đến 6 tau
t = np.linspace(0, 6*tau, 300) 

# 3. Tính điện áp theo công thức lý thuyết
# Quá trình Nạp: V(t) = V0 * (1 - e^{-t/tau})
v_charge = V_source * (1 - np.exp(-t/tau))

# Quá trình Xả: V(t) = V0 * e^{-t/tau}
v_discharge = V_source * np.exp(-t/tau)

# 4. Vẽ đồ thị (Plotting)
plt.figure(figsize=(12, 6))

# Đồ thị nạp
plt.subplot(1, 2, 1)
plt.plot(t, v_charge, 'b-', linewidth=2, label='Đường cong Nạp (Charge)')
plt.axhline(V_source, color='r', linestyle='--', label=f'Max V = {V_source}V')
plt.axvline(tau, color='g', linestyle='--', label=r'$t = \tau$ (63.2%)')
plt.plot(tau, V_source*(1-np.exp(-1)), 'ko', markersize=6)
plt.title('Đồ thị Nạp điện của Tụ điện (RC Charging)', fontsize=13)
plt.xlabel('Thời gian t (s)', fontsize=11)
plt.ylabel('Điện áp tụ V_c (V)', fontsize=11)
plt.grid(True)
plt.legend()

# Đồ thị xả
plt.subplot(1, 2, 2)
plt.plot(t, v_discharge, 'm-', linewidth=2, label='Đường cong Xả (Discharge)')
plt.axhline(0, color='r', linestyle='--', label='Min V = 0V')
plt.axvline(tau, color='g', linestyle='--', label=r'$t = \tau$ (36.8%)')
plt.plot(tau, V_source*np.exp(-1), 'ko', markersize=6)
plt.title('Đồ thị Xả điện của Tụ điện (RC Discharging)', fontsize=13)
plt.xlabel('Thời gian t (s)', fontsize=11)
plt.ylabel('Điện áp tụ V_c (V)', fontsize=11)
plt.grid(True)
plt.legend()

plt.tight_layout()
plt.show()
```

### Bài 2: Khảo sát Ghép Tụ Số Học / Numerical Simulation for Capacitor Networks
```python
# Hàm trợ giúp tính toán nhanh điện dung tương đương
def series_C(c1, c2):
    return (c1 * c2) / (c1 + c2)

def parallel_C(c1, c2):
    return c1 + c2

C1 = 3.0 # uF
C2 = 6.0 # uF
C3 = 4.0 # uF

# Tính cụm nối tiếp C1, C2
C12 = series_C(C1, C2)
# Nối song song với C3
C_eq = parallel_C(C12, C3)
print(f"Điện dung tương đương: C_eq = {C_eq:.2f} uF")
# Kết quả ra 6.0 uF, hoàn toàn khớp với Ví dụ 2 ở phần lý thuyết!
```

---

## 9. Câu Hỏi Thảo Luận Chuyên Sâu / Advanced Discussion Questions

1. **(VI)** Mặt đẳng thế là gì? Tại sao đường sức điện trường luôn luôn vuông góc với mặt đẳng thế tại mọi điểm?
   **(EN)** What is an equipotential surface? Why are electric field lines always perpendicular to it at all points?
   *Gợi ý / Hint*: Mặt đẳng thế là mặt mà mọi điểm trên đó đều có cùng một điện thế. Nếu ta di chuyển một điện tích trên mặt đẳng thế, do $U=0$ nên công $A = 0$. Mà $A = q\vec{E}\cdot \vec{d} = q E d \cos(\alpha)$. Để $A = 0$ với mọi độ dời $\vec{d}$ thì $\cos(\alpha) = 0 \implies \alpha = 90^\circ$. Suy ra $\vec{E}$ luôn vuông góc với mặt đẳng thế.

2. **(VI)** Chim đậu trên đường dây điện cao thế trần tại sao không bị điện giật dù dòng điện rất lớn? Nếu con chim sải cánh chạm vào một dây khác thì sao?
   **(EN)** Why don't birds sitting on bare high-voltage power lines get electrocuted despite high currents? What if the bird's wings touch another line?
   *Gợi ý / Hint*: Hai chân chim đậu trên cùng một dây dẫn (một đường đẳng thế gần đúng vì điện trở đoạn dây đó rất nhỏ). Hiệu điện thế $U$ giữa hai chân xấp xỉ bằng $0$, nên không có dòng điện đi qua thân chim. Nhưng nếu sải cánh chạm dây khác pha, sẽ có hiệu điện thế cực lớn tạo ra dòng điện lớn xuyên qua người chim, gây giật chết ngay lập tức.

3. **(VI)** Có ba tụ điện giống hệt nhau $C$, làm thế nào để ghép chúng lại để được bộ tụ có điện dung $C_{eq} = \frac{2}{3} C$?
   **(EN)** With three identical capacitors $C$, how can you combine them to get an equivalent capacitance of $2/3 C$?
   *Gợi ý / Hint*: Lấy 2 tụ ghép song song $\implies C_p = 2C$. Sau đó đem cụm này ghép nối tiếp với tụ còn lại. $\frac{1}{C_{eq}} = \frac{1}{2C} + \frac{1}{C} = \frac{3}{2C} \implies C_{eq} = \frac{2C}{3}$.

4. **(VI)** Nếu tăng khoảng cách giữa hai bản tụ phẳng lên gấp đôi nhưng vẫn giữ nguyên kết nối với nguồn điện (pin), thì điện dung, điện tích và điện trường trong tụ thay đổi như thế nào?
   **(EN)** If the distance between parallel plates is doubled while still connected to the battery, how do capacitance, charge, and electric field change?
   *Gợi ý / Hint*: Giữ nối nguồn $\implies U = const$. Khoảng cách $d$ tăng gấp 2 $\implies C = \frac{\varepsilon\varepsilon_0 S}{d}$ sẽ giảm một nửa. Do $Q = CU$, $Q$ cũng giảm một nửa. Điện trường $E = U/d$, $U$ không đổi, $d$ tăng 2 $\implies E$ giảm một nửa.

5. **(VI)** Một số micro tụ điện (condenser microphones) yêu cầu nguồn cấp phantom 48V. Tại sao micro tụ điện lại cần điện áp cao vậy?
   **(EN)** Condenser microphones require a 48V phantom power supply. Why do they need such high voltage?
   *Gợi ý / Hint*: Màng micro và màng chắn cố định tạo thành một tụ điện phẳng. Nguồn 48V nạp tĩnh điện cho tụ ($Q$ lớn). Khi âm thanh làm màng rung động, khoảng cách $d$ thay đổi $\implies C$ thay đổi. Vì $Q$ gần như không đổi, dẫn đến hiệu điện thế $U = Q/C$ biến thiên theo dạng sóng âm thanh. Sự biến thiên điện áp này được khuếch đại thành tín hiệu âm thanh.

---

## 10. Bài Tập Về Nhà / Homework Problems & Solutions

**Bài 1 / Problem 1**: 
Một tụ điện phẳng không khí có điện dung $C = 20 \, \text{pF}$. Diện tích mỗi bản là $S = 50 \, \text{cm}^2$. Đặt vào hai bản tụ một hiệu điện thế $U = 100 \, \text{V}$.
a) Tính điện tích của tụ điện và năng lượng điện trường.
b) Ngắt tụ ra khỏi nguồn, sau đó tăng khoảng cách giữa 2 bản tụ lên gấp đôi. Tính hiệu điện thế và năng lượng mới của tụ. Giải thích sự tăng giảm năng lượng.
*Đáp án / Solution step*:
a) $Q = CU = 20 \times 10^{-12} \times 100 = 2 \times 10^{-9} \, \text{C} = 2 \, \text{nC}$.
   $W = \frac{1}{2} C U^2 = \frac{1}{2} \times 20 \times 10^{-12} \times (100)^2 = 10^{-7} \, \text{J}$.
b) Ngắt nguồn $\implies$ Điện tích được bảo toàn: $Q' = Q = 2 \, \text{nC}$.
   Tăng $d$ gấp 2 $\implies C$ giảm một nửa: $C' = 10 \, \text{pF}$.
   Hiệu điện thế mới: $U' = Q'/C' = 2 \times 10^{-9} / 10 \times 10^{-12} = 200 \, \text{V}$.
   Năng lượng mới: $W' = \frac{Q'^2}{2C'} = \frac{(2 \times 10^{-9})^2}{2 \times 10 \times 10^{-12}} = 2 \times 10^{-7} \, \text{J}$.
   Năng lượng tăng gấp đôi. Năng lượng tăng thêm là do công cơ học mà người đó thực hiện để kéo tách hai bản tụ (đang hút nhau) ra xa thêm.

**Bài 2 / Problem 2**:
Ba tụ điện $C_1 = 2 \mu\text{F}$, $C_2 = 3 \mu\text{F}$, $C_3 = 6 \mu\text{F}$ được mắc nối tiếp. Đặt vào hai đầu bộ tụ hiệu điện thế $U = 24 \, \text{V}$. 
a) Tìm điện dung tương đương của cả bộ tụ.
b) Tính hiệu điện thế và năng lượng trên từng tụ điện.
*Đáp án / Solution step*:
a) $\frac{1}{C_{eq}} = \frac{1}{2} + \frac{1}{3} + \frac{1}{6} = \frac{3+2+1}{6} = \frac{6}{6} = 1 \implies C_{eq} = 1 \, \mu\text{F}$.
b) Vì mắc nối tiếp, điện tích trên các tụ bằng nhau và bằng điện tích bộ tụ:
   $Q = Q_1 = Q_2 = Q_3 = C_{eq} \cdot U = 1 \mu\text{F} \times 24 \text{V} = 24 \, \mu\text{C}$.
   Hiệu điện thế trên từng tụ:
   $U_1 = Q_1 / C_1 = 24 / 2 = 12 \, \text{V}$.
   $U_2 = Q_2 / C_2 = 24 / 3 = 8 \, \text{V}$.
   $U_3 = Q_3 / C_3 = 24 / 6 = 4 \, \text{V}$. (Kiểm tra: $12+8+4 = 24V$, đúng).
   Năng lượng trên tụ $C_1$: $W_1 = \frac{1}{2} C_1 U_1^2 = \frac{1}{2} \times 2 \times 10^{-6} \times 144 = 1.44 \times 10^{-4} \, \text{J}$.
   Tương tự $W_2 = \frac{1}{2} \times 3 \times 10^{-6} \times 64 = 0.96 \times 10^{-4} \, \text{J}$.

---

## 11. Đánh Giá / Comprehensive Assessment Rubric (100-point scale)

| Tiêu chí / Criteria | Xuất sắc / Excellent (90-100) | Khá / Good (70-89) | Cần cố gắng / Needs Improvement (<70) |
|---------------------|-------------------------------|--------------------|---------------------------------------|
| **1. Khái niệm Điện thế (25%)** <br>*Electric Potential Concepts* | Hiểu sâu sắc mối liên hệ giữa điện trường E và điện áp U, giải thích lưu loát các mặt đẳng thế và công cơ học tĩnh điện. | Còn đôi chút nhầm lẫn thuật ngữ giữa điện thế (V) và thế năng điện. | Hoàn toàn không phân biệt được điện thế V và hiệu điện thế U. |
| **2. Phân tích & Ghép mạch tụ (25%)** <br>*Circuit Analysis* | Tính toán chính xác 100% điện tích, điện áp của các mạch tụ hỗn hợp phức tạp. | Tính sai số học nhưng phương pháp giải đúng (nhầm Q và U song song/nối tiếp). | Dùng ngược công thức nối tiếp/song song của tụ điện. |
| **3. Thực hành đo mạch RC (30%)** <br>*RC Lab Practical* | Lắp ráp mạch chính xác, đo số liệu đầy đủ. Vẽ biểu đồ nạp xả trơn tru, tính toán sai số so với lý thuyết hợp lý. | Đo được số liệu nhưng đồ thị bị rời rạc, chưa biết cách làm mịn đường phân phối xác suất. | Không tự lắp được mạch điện, nối ngược tụ hóa gây nổ hoặc cháy board mạch. |
| **4. Lập trình mô phỏng (20%)** <br>*Python Simulation* | Đọc hiểu code, tự thay đổi tham số $R, C$ trong Python và giải thích được sự thay đổi độ dốc của đồ thị. | Chỉ copy/paste chạy code, chưa tự viết lại được các hàm vẽ subplot. | Lỗi cú pháp, thiếu thư viện numpy/matplotlib không thể chạy bài. |

---
*Ghi nhớ: Hãy cẩn thận khi sử dụng các tụ điện có giá trị dung lượng và điện áp chịu đựng lớn trong thực tế. Chúng có thể gây sốc điện ngay cả khi đã ngắt nguồn! / Remember: Be careful with high-voltage, high-capacity capacitors. They hold deadly charges even when unplugged!*

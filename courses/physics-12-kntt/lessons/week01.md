# Tuần 1: Cấu trúc chất, Nội năng và Nhiệt độ (Week 01: Structure of Matter, Internal Energy and Temperature)

## 1. Mục Tiêu Khóa Học (Learning Objectives)

**Tiếng Việt:**
- Hiểu và mô tả được cấu trúc của chất rắn, lỏng, khí dựa trên thuyết động học phân tử.
- Giải thích được các quá trình chuyển thể của chất: nóng chảy, đông đặc, hóa hơi, ngưng tụ, thăng hoa.
- Nắm vững khái niệm nội năng (tổng động năng và thế năng của các phân tử), và các phương pháp làm thay đổi nội năng (thực hiện công và truyền nhiệt).
- Vận dụng thành thạo Nguyên lý thứ nhất của Nhiệt động lực học ($\Delta U = Q + A$) vào các bài toán thực tế.
- Hiểu định nghĩa nhiệt độ, trạng thái cân bằng nhiệt, và Nguyên lý 0 của Nhiệt động lực học.
- Chuyển đổi và tính toán giữa các thang nhiệt độ: Celsius (°C), Kelvin (K), Fahrenheit (°F).
- Viết và chạy được các mô phỏng Python về cân bằng nhiệt và nguyên lý 1 nhiệt động lực học.

**English:**
- Understand and describe the structure of solids, liquids, and gases based on kinetic molecular theory.
- Explain phase transitions: melting, freezing, vaporization, condensation, sublimation.
- Master the concept of internal energy (sum of molecular kinetic and potential energy) and methods to change it (work done and heat transfer).
- Proficiently apply the First Law of Thermodynamics ($\Delta U = Q + A$) to practical problems.
- Understand the definition of temperature, thermal equilibrium, and the Zeroth Law of Thermodynamics.
- Convert and calculate between temperature scales: Celsius (°C), Kelvin (K), Fahrenheit (°F).
- Write and run Python simulations for thermal equilibrium and the first law of thermodynamics.

## 2. Bài Học Liên Quan Từ Sách Giáo Khoa (Related Textbook Lessons)
- **Bài 1:** Cấu trúc của chất. Sự chuyển thể.
- **Bài 2:** Nội năng. Định luật I của nhiệt động lực học.
- **Bài 3:** Nhiệt độ. Thang nhiệt độ – nhiệt kế.

---

## 3. Danh Sách Thiết Bị & Dụng Cụ Thực Hành (Lab Equipment & Tools)

Dưới đây là danh sách các thiết bị cần thiết cho các bài thực hành trong tuần này. Các thiết bị này có thể dễ dàng tìm mua trên các sàn thương mại điện tử tại Việt Nam hoặc các cửa hàng linh kiện điện tử.

| STT (No.) | Tên Thiết Bị (Equipment Name) | Mô tả & Thông số (Description & Specs) | Số lượng (Qty) | Giá dự kiến (Estimated Price VND) | Nguồn mua (Availability) |
|:---:|:---|:---|:---:|:---:|:---|
| 1 | Nhiệt kế điện tử (Digital Thermometer) | Loại TP300 hoặc tương đương, dải đo -50°C đến +300°C | 2 | 50,000 - 80,000 | Shopee, Lazada, Cửa hàng dụng cụ thí nghiệm |
| 2 | Cảm biến nhiệt độ NTC (NTC Thermistor) | Điện trở 10kOhm, NTC 3950, bọc chống nước | 2 | 15,000 - 30,000 | Cửa hàng linh kiện điện tử (Hshop, Nshop) |
| 3 | Arduino UNO R3 (Arduino Board) | Kèm cáp USB để đọc cảm biến NTC | 1 | 150,000 - 200,000 | Hshop, Nshop, TheGioiIC |
| 4 | Breadboard & Dây cắm (Breadboard & Jumpers) | Breadboard 400 hoặc 830 lỗ, một bó dây cắm cắm | 1 | 30,000 - 50,000 | Hshop, Nshop |
| 5 | Cốc thủy tinh chịu nhiệt (Beaker) | Dung tích 250ml và 500ml | 2 | 40,000 - 60,000 | Cửa hàng dụng cụ hóa học |
| 6 | Đèn cồn / Bếp đun nhỏ (Alcohol Burner/Heater) | Dùng để gia nhiệt nước | 1 | 30,000 - 50,000 | Cửa hàng dụng cụ hóa học |
| 7 | Cân điện tử mini (Digital Scale) | Độ chia nhỏ nhất 0.1g, tải trọng tối đa 500g | 1 | 80,000 - 150,000 | Shopee, Lazada |
| 8 | Vật liệu kim loại (Metal blocks) | Các khối Đồng, Nhôm cỡ 50g-100g | 2 | 50,000 - 100,000 | Cửa hàng vật liệu, shopee |

---

## 4. An Toàn Phòng Thí Nghiệm (Safety Warnings) ⚠️

**TIẾNG VIỆT:**
1. **Nguy cơ Bỏng (Burn Hazard):** Nước sôi và các thiết bị gia nhiệt có thể gây bỏng nặng. Tuyệt đối không chạm tay không vào cốc thủy tinh đang đun hoặc khối kim loại vừa được lấy ra khỏi nước sôi. Luôn sử dụng kẹp gắp và găng tay cách nhiệt.
2. **An Toàn Điện (Electrical Safety):** Khi sử dụng Arduino và cảm biến gần môi trường nước, đảm bảo tay và bàn làm việc luôn khô ráo. Tránh để chập mạch (short circuit) trên breadboard.
3. **An Toàn Cháy Nổ (Fire Safety):** Khi sử dụng đèn cồn, luôn để xa các vật liệu dễ cháy (giấy, vải). Cẩn thận khi tắt đèn cồn, phải dùng nắp đậy, tuyệt đối không thổi bằng miệng.
4. **An Toàn Hóa Chất/Vật Liệu (Material Safety):** Kính vỡ rất nguy hiểm. Nếu cốc thủy tinh bị nứt, vỡ do sốc nhiệt, không được dùng tay nhặt mà phải dùng chổi và hót rác.
5. **Giám Sát (Supervision):** Không bao giờ để hệ thống thí nghiệm hoạt động mà không có người giám sát.

**ENGLISH:**
1. **Burn Hazard:** Boiling water and heating devices can cause severe burns. Do not touch heated beakers or metal blocks with bare hands. Always use tongs and heat-resistant gloves.
2. **Electrical Safety:** When using Arduino near water, ensure your hands and workspace are dry. Avoid short circuits on the breadboard.
3. **Fire Safety:** Keep alcohol burners away from flammable materials. Always extinguish burners by covering them with the cap, never blow them out.
4. **Material Safety:** Broken glass is dangerous. If a glass beaker breaks due to thermal shock, use a broom and dustpan to clean it up, never your bare hands.
5. **Supervision:** Never leave an active experiment unattended.

---

## 5. Lý Thuyết Chuyên Sâu (Deep Theory Explanations)

### 5.1. Cấu trúc phân tử của chất (Molecular Structure of Matter)

Mọi chất đều được cấu tạo từ các hạt cực kì nhỏ bé là nguyên tử hoặc phân tử. Tùy thuộc vào khoảng cách và lực tương tác giữa các phân tử, chất tồn tại ở ba trạng thái cơ bản (trạng thái vật chất): Rắn, Lỏng, Khí.

- **Chất Rắn (Solid):**
  - Các phân tử ở rất gần nhau.
  - Lực tương tác (lực hút và lực đẩy) rất mạnh.
  - Các phân tử dao động quanh các vị trí cân bằng xác định.
  - Có hình dạng và thể tích xác định.
  
- **Chất Lỏng (Liquid):**
  - Các phân tử ở xa nhau hơn so với chất rắn.
  - Lực tương tác yếu hơn.
  - Các phân tử dao động quanh các vị trí cân bằng di chuyển được.
  - Có thể tích xác định nhưng hình dạng phụ thuộc vào bình chứa.
  
- **Chất Khí (Gas):**
  - Các phân tử ở rất xa nhau (so với kích thước của chúng).
  - Lực tương tác vô cùng yếu (có thể bỏ qua).
  - Các phân tử chuyển động hỗn loạn không ngừng.
  - Không có hình dạng và thể tích xác định (chiếm toàn bộ thể tích bình chứa).

### 5.2. Sự chuyển thể (Phase Changes)

Sự chuyển thể là sự biến đổi từ trạng thái vật lý này sang trạng thái vật lý khác dưới tác động của nhiệt độ và áp suất.

```ascii
     +-----------------+
     |                 |
+----v----+      +---------+
|         | <----+ LỎNG    |
| RẮN     |      | (Liquid)|
| (Solid) | +---->         |
+----+----+      +---------+
     |                 ^
     |                 |
     |   +---------+   |
     +---> KHÍ     +---+
         | (Gas)   |
         +---------+
```

*Sơ đồ các quá trình chuyển thể:*
- Rắn -> Lỏng: Nóng chảy (Melting)
- Lỏng -> Rắn: Đông đặc (Freezing)
- Lỏng -> Khí: Hóa hơi (Vaporization/Boiling)
- Khí -> Lỏng: Ngưng tụ (Condensation)
- Rắn -> Khí: Thăng hoa (Sublimation)
- Khí -> Rắn: Kết tinh/Ngưng kết (Deposition)

#### Đồ thị chuyển thể (Phase Change Curve)

Dưới đây là mô phỏng giản đồ nhiệt độ theo thời gian khi đun nóng nước đá từ -20°C lên 120°C ở áp suất tiêu chuẩn:

```text
 Nhiệt độ (°C)
 120 |                                             / Hơi nước (Khí)
     |                                            /
 100 |-------------------------------------------/  <-- Nước sôi (Hóa hơi)
     |                                          /
     |                                         /
  50 |                                        / Nước (Lỏng)
     |                                       /
     |                                      /
   0 |-------------------------------------/   <-- Nước đá tan (Nóng chảy)
     |                                    /
 -20 |                                   / Nước đá (Rắn)
     +--------------------------------------------------> Thời gian (t)
```

**Nhận xét:** Trong suốt quá trình nóng chảy hoặc hóa hơi, nhiệt độ của hệ không thay đổi dù ta vẫn tiếp tục cung cấp nhiệt (Q > 0). Lượng nhiệt này dùng để phá vỡ các liên kết phân tử, làm tăng thế năng phân tử thay vì động năng phân tử.

---

### 5.3. Nội năng và Định luật I Nhiệt động lực học (Internal Energy and First Law of Thermodynamics)

#### 5.3.1. Nội năng ($U$)
Nội năng của một vật là tổng động năng và thế năng tương tác của các phân tử cấu tạo nên vật đó.
$$U = E_d + E_t$$
Trong đó:
- $E_d$: Động năng phân tử (phụ thuộc vào nhiệt độ $T$).
- $E_t$: Thế năng phân tử (phụ thuộc vào thể tích $V$, khoảng cách giữa các phân tử).

Với khí lí tưởng, lực tương tác giữa các phân tử bằng 0, nên thế năng phân tử bằng 0. Do đó, nội năng của khí lí tưởng chỉ phụ thuộc vào nhiệt độ.

#### 5.3.2. Các cách làm thay đổi nội năng
Có hai cách chính để làm thay đổi nội năng của một vật:
1. **Thực hiện công (Doing work - $A$):** Ví dụ như nén khí, cọ xát vật. Có sự chuyển hóa từ cơ năng sang nội năng.
2. **Truyền nhiệt (Heat transfer - $Q$):** Ví dụ như đun nóng nước, làm lạnh. Quá trình này không có sự thực hiện công.

#### 5.3.3. Định luật I của Nhiệt động lực học (First Law of Thermodynamics)
Độ biến thiên nội năng của một hệ bằng tổng đại số nhiệt lượng và công mà hệ nhận được.
$$\Delta U = Q + A$$

**Quy ước dấu cực kì quan trọng (Sign Convention):**
- $\Delta U > 0$: Nội năng của hệ tăng.
- $\Delta U < 0$: Nội năng của hệ giảm.
- $Q > 0$: Hệ **nhận** nhiệt từ môi trường.
- $Q < 0$: Hệ **truyền** (tỏa) nhiệt cho môi trường.
- $A > 0$: Hệ **nhận** công từ môi trường (ví dụ: bị nén).
- $A < 0$: Hệ **thực hiện** công lên môi trường (ví dụ: giãn nở).

> [!IMPORTANT]
> Cần phân biệt rõ hệ nhận công (A > 0) và hệ sinh công (A' = -A > 0). Sách giáo khoa thường viết là $\Delta U = Q + A$. Nếu hệ thực hiện công A', thì $A = -A'$, lúc đó $\Delta U = Q - A'$. Bạn phải luôn phân tích kĩ "ai làm tác dụng lên ai".

**Ví dụ tính toán 1:**
Một lượng khí trong xilanh được đun nóng. Khí nhận một nhiệt lượng 500 J. Khí giãn nở đẩy piston lên và thực hiện một công là 200 J. Tính độ biến thiên nội năng của khí.
*Giải:*
- Khí nhận nhiệt: $Q = +500 \text{ J}$
- Khí thực hiện công: $A = -200 \text{ J}$ (Do hệ đẩy piston, sinh công)
- Độ biến thiên nội năng: $\Delta U = Q + A = 500 + (-200) = 300 \text{ J}$
- Kết luận: Nội năng của khí tăng 300 J.

---

### 5.4. Nhiệt độ và Thang Nhiệt độ (Temperature and Temperature Scales)

Nhiệt độ là đại lượng vĩ mô đặc trưng cho mức độ "nóng", "lạnh" của một vật. Về mặt vi mô, nhiệt độ là thước đo động năng tịnh tiến trung bình của các phân tử cấu tạo nên vật. Động năng trung bình càng lớn, nhiệt độ càng cao.

#### 5.4.1. Trạng thái cân bằng nhiệt (Thermal Equilibrium)
Khi hai vật có nhiệt độ khác nhau tiếp xúc với nhau:
- Nhiệt sẽ tự động truyền từ vật có nhiệt độ cao sang vật có nhiệt độ thấp hơn.
- Quá trình truyền nhiệt dừng lại khi hai vật có cùng nhiệt độ. Lúc này, hai vật ở trạng thái **cân bằng nhiệt**.

**Nguyên lý số 0 của Nhiệt động lực học:** Nếu vật A cân bằng nhiệt với vật B, và vật B cân bằng nhiệt với vật C, thì vật A sẽ cân bằng nhiệt với vật C. Đây là cơ sở để chế tạo nhiệt kế.

#### 5.4.2. Các thang nhiệt độ

1. **Thang Celsius (°C):**
   - Dựa trên nhiệt độ nóng chảy của nước đá nguyên chất (0°C) và nhiệt độ sôi của nước tinh khiết (100°C) ở áp suất tiêu chuẩn (1 atm).
   - Khoảng giữa được chia thành 100 phần bằng nhau, mỗi phần là 1 độ Celsius.

2. **Thang Kelvin (K): Thang nhiệt độ nhiệt động lực học tuyệt đối**
   - Không có độ âm. 0 K (Độ không tuyệt đối) là nhiệt độ mà tại đó chuyển động nhiệt của phân tử ngừng lại. (Thực tế không thể đạt tới 0 K).
   - Kích thước của 1 K bằng kích thước của 1 °C.
   - Công thức chuyển đổi: 
     $$T (K) = t (°C) + 273.15$$
   - (Trong tính toán thông thường, có thể dùng 273 thay cho 273.15).

3. **Thang Fahrenheit (°F):**
   - Phổ biến ở Hoa Kỳ. Nước đá tan ở 32°F và nước sôi ở 212°F.
   - Công thức chuyển đổi:
     $$t (°F) = t (°C) \times \frac{9}{5} + 32$$
     $$t (°C) = [t (°F) - 32] \times \frac{5}{9}$$

**Ví dụ tính toán 2:**
Nhiệt độ cơ thể người bình thường là khoảng 37 °C. Hãy đổi nhiệt độ này ra độ Kelvin và độ Fahrenheit.
*Giải:*
- Ra độ Kelvin: $T = 37 + 273.15 = 310.15 \text{ K}$
- Ra độ Fahrenheit: $t_F = 37 \times 1.8 + 32 = 66.6 + 32 = 98.6 \text{ °F}$

---

## 6. Bài Thực Hành (Hands-on Experiments)

### Thực Hành 1: Đo nhiệt độ và khảo sát quá trình cân bằng nhiệt

**Mục đích:**
- Sử dụng nhiệt kế điện tử đo nhiệt độ nước.
- Quan sát quá trình cân bằng nhiệt khi trộn nước nóng và nước lạnh.
- Tính toán nhiệt lượng trao đổi và so sánh với lý thuyết.

**Chuẩn bị:**
- 2 cốc thủy tinh 250ml
- 2 nhiệt kế điện tử
- Nước sôi, nước đá
- Cân điện tử mini

**Các bước tiến hành:**
1. **Bước 1:** Dùng cân điện tử cân khối lượng cốc 1 ($m_{c1}$) và cốc 2 ($m_{c2}$).
2. **Bước 2:** Đổ khoảng 100g nước nóng (khoảng 80°C) vào cốc 1. Ghi lại nhiệt độ chính xác $t_1$. Khối lượng nước nóng là $m_1$.
3. **Bước 3:** Đổ khoảng 100g nước lạnh (khoảng 20°C) vào cốc 2. Ghi lại nhiệt độ chính xác $t_2$. Khối lượng nước lạnh là $m_2$.
4. **Bước 4:** Đổ nhanh nước từ cốc 2 vào cốc 1. Dùng nhiệt kế khuấy nhẹ và theo dõi nhiệt độ.
5. **Bước 5:** Khi nhiệt độ dừng thay đổi, đó là nhiệt độ cân bằng $t_{cb}$. Ghi lại giá trị này.

**Xử lý số liệu:**
- Nhiệt lượng nước nóng tỏa ra: $Q_{tỏa} = m_1 \cdot c \cdot (t_1 - t_{cb})$
- Nhiệt lượng nước lạnh thu vào: $Q_{thu} = m_2 \cdot c \cdot (t_{cb} - t_2)$
(Bỏ qua nhiệt lượng do cốc hấp thụ, với $c$ của nước xấp xỉ $4200 \text{ J/kg.K}$).
- So sánh $Q_{tỏa}$ và $Q_{thu}$. Tính hiệu suất thực tế của quá trình truyền nhiệt. Tại sao lại có sự chênh lệch? (Gợi ý: Nhiệt lượng tỏa ra môi trường).

---

### Thực Hành 2: Chế tạo nhiệt kế kĩ thuật số bằng Arduino và NTC

**Mục đích:** Hiểu nguyên lý cảm biến nhiệt độ và lập trình đọc dữ liệu.

**Chuẩn bị:** Arduino UNO, Cảm biến nhiệt trở NTC 10k, Điện trở 10k, Breadboard.

**Sơ đồ mạch:**
- Nối một chân của NTC lên 5V của Arduino.
- Nối chân còn lại của NTC vào chân Analog A0, đồng thời nối qua điện trở 10k xuống GND (Tạo cầu phân áp).

**Code Arduino mẫu:**
```cpp
// Thông số của NTC 3950
const int analogPin = A0;
const float R1 = 10000; // Điện trở 10k ohm
const float c1 = 1.009249522e-03, c2 = 2.378405444e-04, c3 = 2.019202697e-07;

void setup() {
  Serial.begin(9600);
}

void loop() {
  int Vo = analogRead(analogPin);
  float R2 = R1 * (1023.0 / (float)Vo - 1.0); // Tính điện trở NTC
  float logR2 = log(R2);
  
  // Phương trình Steinhart-Hart để tính nhiệt độ Kelvin
  float T = (1.0 / (c1 + c2*logR2 + c3*logR2*logR2*logR2));
  
  // Đổi sang Celsius
  float Tc = T - 273.15;
  
  Serial.print("Nhiet do: "); 
  Serial.print(Tc);
  Serial.println(" C");
  
  delay(1000);
}
```
**Bài tập nhỏ:**
1. Chạy code, lấy ngón tay kẹp vào cảm biến NTC, quan sát Serial Monitor xem nhiệt độ có tăng lên khoảng 36-37°C không?
2. Bỏ cảm biến vào cốc nước đá, xem nhiệt độ giảm thế nào.

---

## 7. Python Simulation (Mô Phỏng Bằng Python)

Dưới đây là một đoạn code Python đầy đủ để mô phỏng quá trình truyền nhiệt giữa vật nóng và vật lạnh theo thời gian (dùng phương trình Newton về làm mát), và kiểm chứng Định luật 1 Nhiệt động lực học.
Bạn cần cài đặt các thư viện: `pip install numpy matplotlib scipy`.

```python
"""
Mô phỏng cân bằng nhiệt và Định luật 1 Nhiệt động lực học
File: thermal_equilibrium_sim.py
Tác giả: Antigravity STEM Course Builder
"""

import numpy as np
import matplotlib.pyplot as plt
from scipy.integrate import odeint

# ---------------------------------------------------------
# PHẦN 1: MÔ PHỎNG SỰ TRUYỀN NHIỆT (NEWTON'S LAW OF COOLING)
# ---------------------------------------------------------
# Giả sử ta thả một khối đồng nóng (m1) vào một chậu nước lạnh (m2)
# Khối đồng: T1, m1, c1
# Nước lạnh: T2, m2, c2

m1 = 0.5    # Khối lượng đồng (kg)
c1 = 380    # Nhiệt dung riêng đồng (J/kg.K)
m2 = 1.0    # Khối lượng nước (kg)
c2 = 4200   # Nhiệt dung riêng nước (J/kg.K)

T1_initial = 100.0  # Đồng ở 100 độ C
T2_initial = 20.0   # Nước ở 20 độ C

# Hệ số truyền nhiệt giữa 2 vật k (tùy thuộc diện tích tiếp xúc)
k = 0.5 

# Hệ phương trình vi phân mô tả tốc độ thay đổi nhiệt độ
def thermal_model(T, t, m1, c1, m2, c2, k):
    T1, T2 = T
    # Nhiệt truyền từ vật 1 sang vật 2: dQ/dt = k * (T1 - T2)
    dQ_dt = k * (T1 - T2)
    
    # dT/dt = -(dQ/dt) / (m*c)
    dT1_dt = -dQ_dt / (m1 * c1)
    dT2_dt =  dQ_dt / (m2 * c2)
    return [dT1_dt, dT2_dt]

# Thời gian mô phỏng từ 0 đến 3600 giây (1 giờ)
t = np.linspace(0, 3600, 1000)
T_initial = [T1_initial, T2_initial]

# Giải phương trình vi phân
solution = odeint(thermal_model, T_initial, t, args=(m1, c1, m2, c2, k))
T1_t = solution[:, 0]
T2_t = solution[:, 1]

# Tính nhiệt độ cân bằng lý thuyết
T_eq = (m1*c1*T1_initial + m2*c2*T2_initial) / (m1*c1 + m2*c2)
print(f"Nhiệt độ cân bằng lý thuyết: {T_eq:.2f} °C")

# Vẽ đồ thị
plt.figure(figsize=(10, 6))
plt.plot(t, T1_t, 'r-', label='Nhiệt độ khối Đồng (T1)')
plt.plot(t, T2_t, 'b-', label='Nhiệt độ Nước (T2)')
plt.axhline(T_eq, color='g', linestyle='--', label=f'Cân bằng ({T_eq:.2f} °C)')
plt.title('Mô phỏng Quá trình Cân Bằng Nhiệt')
plt.xlabel('Thời gian (giây)')
plt.ylabel('Nhiệt độ (°C)')
plt.legend()
plt.grid(True)
plt.savefig('thermal_sim_plot.png')
print("Đã lưu đồ thị vào file 'thermal_sim_plot.png'")

# ---------------------------------------------------------
# PHẦN 2: TÍNH TOÁN ĐỊNH LUẬT 1 NĐLH (FIRST LAW SOLVER)
# ---------------------------------------------------------
def first_law_solver(Q=None, A=None, delta_U=None):
    """
    Giải phương trình Delta U = Q + A.
    Truyền vào 2 biến đã biết, hàm sẽ trả về biến còn lại.
    """
    if Q is not None and A is not None and delta_U is None:
        delta_U = Q + A
        print(f"[First Law] Tính delta_U: Q={Q}, A={A} => delta_U = {delta_U} J")
        return delta_U
    elif Q is not None and delta_U is not None and A is None:
        A = delta_U - Q
        print(f"[First Law] Tính A: delta_U={delta_U}, Q={Q} => A = {A} J")
        return A
    elif A is not None and delta_U is not None and Q is None:
        Q = delta_U - A
        print(f"[First Law] Tính Q: delta_U={delta_U}, A={A} => Q = {Q} J")
        return Q
    else:
        print("Lỗi: Phải truyền đúng 2 thông số.")
        return None

# Ví dụ test solver
print("\n--- Kiểm tra First Law Solver ---")
# Khí nhận nhiệt 300J, thực hiện công 100J. Tính độ biến thiên nội năng.
# Nhận nhiệt Q = +300. Thực hiện công A = -100 (vì tự nó sinh công)
first_law_solver(Q=300, A=-100)

plt.show()
```

**Cách chạy đoạn mã:**
1. Lưu đoạn mã trên vào tệp `thermal_sim.py`.
2. Mở terminal, chạy lệnh `python thermal_sim.py`.
3. Quan sát các giá trị in ra trên màn hình và cửa sổ đồ thị xuất hiện. Đồ thị sẽ cho thấy đường cong nhiệt độ của đồng giảm dần và nhiệt độ của nước tăng dần cho đến khi gặp nhau tại đường tiệm cận cân bằng nhiệt.

---

## 8. Câu Hỏi Thảo Luận (Discussion Questions)

**Câu 1:** Dựa trên cấu trúc phân tử, hãy giải thích tại sao chất rắn lại khó nén hơn chất khí rất nhiều?
*Hướng dẫn trả lời:* Ở chất rắn, khoảng cách giữa các phân tử rất nhỏ và lực tương tác rất mạnh. Khi ta nén, lực đẩy giữa các phân tử tăng lên dữ dội chống lại sự nén. Trong khi đó ở chất khí, khoảng cách phân tử lớn, hầu như chỉ có không gian trống, nên dễ dàng nén các phân tử lại gần nhau hơn.

**Câu 2:** Khi một bình xịt chứa khí nén (như bình xịt khử mùi) được xịt ra, ta thấy vỏ bình lạnh đi. Dùng Nguyên lý 1 Nhiệt động lực học để giải thích.
*Hướng dẫn trả lời:* Khi khí phụt ra, nó giãn nở rất nhanh và đẩy không khí xung quanh, tức là khí sinh công ($A < 0$). Quá trình diễn ra nhanh nên ta coi gần đúng là đoạn nhiệt, không kịp trao đổi nhiệt với môi trường ($Q = 0$). Theo Nguyên lý 1: $\Delta U = Q + A = 0 - A = -A < 0$. Nội năng giảm, mà nội năng khí phụ thuộc nhiệt độ, nên nhiệt độ khí giảm. Khí lạnh truyền nhiệt làm vỏ bình lạnh đi.

**Câu 3:** Tại sao khi mài dao, lưỡi dao lại nóng lên? Nhiệt lượng đó từ đâu ra? Nội năng của con dao có tăng không?
*Hướng dẫn trả lời:* Quá trình mài là quá trình thực hiện công ($A > 0$). Công cơ học của tay do ma sát đã chuyển hóa thành nội năng của lưỡi dao ($\Delta U > 0$). Việc dao nóng lên chứng tỏ nội năng tăng. Quá trình này hoàn toàn không có sự truyền nhiệt ($Q=0$) nếu bỏ qua môi trường.

**Câu 4:** Khi nhiệt kế thủy ngân đo nhiệt độ của nước nóng, nhiệt độ đo được cuối cùng là nhiệt độ ban đầu của nước nóng, hay nhiệt độ của hệ (nước + nhiệt kế)? Điều này dẫn đến sai số gì?
*Hướng dẫn trả lời:* Nhiệt độ đo được là nhiệt độ cân bằng của hệ nước + nhiệt kế. Do nhiệt kế cũng hấp thụ một phần nhiệt từ nước, nhiệt độ cân bằng sẽ nhỏ hơn nhiệt độ ban đầu của nước. Sai số này gọi là sai số hệ thống do dụng cụ đo làm thay đổi đại lượng cần đo. Để giảm sai số, nhiệt dung của nhiệt kế phải càng nhỏ càng tốt.

**Câu 5:** Có thể có trường hợp một vật vừa nhận nhiệt lượng (Q > 0) vừa sinh công (A < 0) mà nội năng của nó không đổi ($\Delta U = 0$) không? Lấy ví dụ minh họa.
*Hướng dẫn trả lời:* Có. Nếu lượng nhiệt nhận vào đúng bằng công sinh ra, tức là $Q = -A$, thì $\Delta U = Q + A = 0$. Ví dụ: Một lượng khí lí tưởng giãn nở đẳng nhiệt (nhiệt độ không đổi). Vì $T$ không đổi nên $\Delta U = 0$. Lúc này $Q = -A$, toàn bộ nhiệt lượng hệ nhận vào chuyển hóa thành công hệ sinh ra.

---

## 9. Bài Tập Về Nhà (Homework & Practice Problems)

**Bài 1:**
Một khối khí được nhốt trong một xilanh thẳng đứng nhờ một piston nhẹ có thể trượt không ma sát. Khí nhận một nhiệt lượng 1500 J từ bếp đun. Piston giãn nở, thể tích khí tăng thêm $2 \times 10^{-3} \text{ m}^3$ ở áp suất không đổi $10^5 \text{ Pa}$. Tính độ biến thiên nội năng của khối khí.
*Hướng dẫn giải (Solution steps):*
1. Tính công mà khối khí sinh ra: $A' = p \cdot \Delta V = 10^5 \times 2 \times 10^{-3} = 200 \text{ J}$.
2. Vì khí sinh công (đẩy piston) nên hệ nhận công $A = -A' = -200 \text{ J}$.
3. Khí nhận nhiệt: $Q = +1500 \text{ J}$.
4. Áp dụng Định luật I: $\Delta U = Q + A = 1500 - 200 = 1300 \text{ J}$.
5. Kết luận: Nội năng của khí tăng 1300 J.

**Bài 2:**
Người ta thả một miếng đồng khối lượng 300g đang ở nhiệt độ 100°C vào một bình nhiệt lượng kế (có nhiệt dung không đáng kể) chứa 500g nước ở 15°C. Cho biết nhiệt dung riêng của đồng là 380 J/(kg.K) và của nước là 4200 J/(kg.K). Bỏ qua sự tỏa nhiệt ra môi trường.
a) Tính nhiệt độ khi có sự cân bằng nhiệt.
b) Đổi nhiệt độ cân bằng vừa tìm được sang độ Kelvin và độ Fahrenheit.
*Hướng dẫn giải (Solution steps):*
1. Đổi khối lượng ra kg: $m_1 = 0.3 \text{ kg}$, $m_2 = 0.5 \text{ kg}$.
2. Gọi nhiệt độ cân bằng là $t$.
3. Nhiệt lượng miếng đồng tỏa ra: $Q_1 = m_1 \cdot c_1 \cdot (t_1 - t) = 0.3 \times 380 \times (100 - t)$
4. Nhiệt lượng nước thu vào: $Q_2 = m_2 \cdot c_2 \cdot (t - t_2) = 0.5 \times 4200 \times (t - 15)$
5. Phương trình cân bằng nhiệt: $Q_1 = Q_2$
   $\Rightarrow 114 \times (100 - t) = 2100 \times (t - 15)$
   $\Rightarrow 11400 - 114t = 2100t - 31500$
   $\Rightarrow 2214t = 42900 \Rightarrow t \approx 19.38^\circ C$
6. Chuyển đổi: 
   $T(K) = 19.38 + 273.15 = 292.53 \text{ K}$
   $t(F) = 19.38 \times 1.8 + 32 = 66.88^\circ F$

**Bài 3:**
Một viên đạn chì (c = 130 J/kg.K) đang bay với vận tốc 200 m/s thì găm vào một bức tường gỗ và nằm yên trong đó. Giả sử 60% động năng của viên đạn chuyển hóa thành nhiệt làm nóng viên đạn. Hỏi nhiệt độ viên đạn tăng thêm bao nhiêu độ?
*Hướng dẫn giải (Solution steps):*
1. Gọi khối lượng viên đạn là $m$.
2. Động năng ban đầu: $W_d = \frac{1}{2}mv^2 = \frac{1}{2} \cdot m \cdot (200)^2 = 20000 \cdot m \text{ (J)}$
3. Nhiệt lượng viên đạn nhận được: $Q = 60\% \cdot W_d = 0.6 \times 20000 \cdot m = 12000 \cdot m \text{ (J)}$
4. Mặt khác, $Q = m \cdot c \cdot \Delta t \Rightarrow 12000 \cdot m = m \cdot 130 \cdot \Delta t$
5. Đơn giản $m$ ở hai vế, ta được: $\Delta t = \frac{12000}{130} \approx 92.3^\circ C$.
6. Vậy nhiệt độ viên đạn tăng thêm khoảng 92.3 °C (hay 92.3 K).

---

## 10. Rubric Đánh Giá & Chấm Điểm (Assessment Rubric)

Bảng dưới đây là tiêu chí chấm điểm cho học sinh trong tuần 1, dựa trên thang điểm 100.

| Tiêu Chí Đánh Giá (Criteria) | Mức Độ Xuất Sắc (Excellent) 90-100 | Mức Độ Tốt (Good) 75-89 | Mức Độ Đạt (Pass) 50-74 | Cần Cố Gắng (Needs Work) <50 | Điểm Tối Đa |
|:---|:---|:---|:---|:---|:---:|
| **1. Hiểu Lý Thuyết (Theory Understanding)** | Giải thích hoàn hảo cấu trúc 3 thể, Nguyên lý 1 và các thang nhiệt độ. Áp dụng đúng công thức. | Trình bày tốt lý thuyết cơ bản, đôi khi nhầm lẫn nhỏ về quy ước dấu công/nhiệt. | Hiểu các định nghĩa cơ bản nhưng gặp khó khăn khi giải thích sâu xa hoặc dùng sai công thức. | Không nắm được định nghĩa, nhầm lẫn trầm trọng giữa nhiệt và nội năng. | 25 |
| **2. Kỹ Năng Thực Hành & An Toàn (Lab Skills & Safety)** | Tuân thủ tuyệt đối an toàn. Lắp đặt mạch Arduino và cảm biến hoàn chỉnh, lấy dữ liệu chính xác. | Tuân thủ an toàn. Lắp được mạch nhưng cần giáo viên hỗ trợ đôi chút để đọc dữ liệu. | Làm được thực hành đo cân bằng nhiệt thủ công, mạch Arduino còn lúng túng hoặc có lỗi nhẹ. | Vi phạm quy tắc an toàn hoặc không thực hiện được thí nghiệm. | 30 |
| **3. Phân Tích & Viết Code (Analysis & Coding)** | Code Python chạy mượt mà, phân tích đồ thị rõ ràng, chỉnh sửa thông số tốt. | Chạy được code mẫu, hiểu sơ bộ cấu trúc code. | Cần nhiều trợ giúp để cài đặt thư viện và chạy file, chưa hiểu rõ code. | Không chạy được mô phỏng hoặc không tham gia phần này. | 20 |
| **4. Giải Bài Tập BTVN (Homework Problem Solving)** | Giải đúng 100% bài tập, trình bày sạch đẹp, có lập luận logic rõ ràng. | Giải đúng phần lớn bài tập, có vài lỗi tính toán số học nhỏ. | Làm được 50% khối lượng, còn bế tắc ở các bài tập suy luận cao. | Không làm bài tập hoặc sai phương pháp hoàn toàn. | 15 |
| **5. Tham Gia Thảo Luận (Discussion Participation)** | Sôi nổi, đưa ra câu trả lời sâu sắc cho các câu hỏi thảo luận, hỗ trợ bạn bè. | Có tham gia phát biểu 1-2 lần, câu trả lời ở mức độ vừa đủ. | Ít khi phát biểu, chỉ trả lời khi được gọi tên. | Hoàn toàn thụ động. | 10 |
| **Tổng Cộng (Total)** | | | | | **100** |

## Tổng kết tuần 1
Tuần 1 đã trang bị cho các em kiến thức cốt lõi về bản chất cấu trúc của chất, nhiệt độ và năng lượng (nội năng). Đây là nền tảng vô cùng quan trọng để tiếp tục bước vào Tuần 2 với các định luật về chất khí (Boyle, Charles, Gay-Lussac) và Phương trình trạng thái khí lý tưởng. Đừng quên nộp bài tập về nhà trước buổi học tuần sau qua hệ thống LMS của trường!

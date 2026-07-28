# Tuần 8: Dòng Điện, Cường Độ Dòng Điện & Định Luật Ohm cho Đoạn Mạch / Week 8: Electric Current, Current Intensity & Ohm's Law

## 1. Mục Tiêu Bài Học / Learning Objectives

### Tiếng Việt
- Khái quát và hiểu sâu bản chất của dòng điện trong các môi trường dẫn điện (kim loại, chất điện phân). Dòng điện là dòng chuyển dời có hướng của các điện tích tự do.
- Nắm vững khái niệm cường độ dòng điện, định nghĩa đơn vị Ampe (A), và biểu thức vi mô của cường độ dòng điện liên hệ với tốc độ trôi của electron.
- Hiểu sự phụ thuộc của điện trở vào kích thước hình học (chiều dài, tiết diện mặt cắt ngang) và bản chất vật liệu (điện trở suất) của vật dẫn.
- Tính toán được sự biến đổi của điện trở theo nhiệt độ thông qua hệ số nhiệt điện trở.
- Phát biểu rõ ràng và vận dụng thành thạo định luật Ohm cho đoạn mạch thuần điện trở để giải các bài toán về $I, U, R$.
- Nắm vững công thức tính công của dòng điện, công suất điện tiêu thụ, và định luật Joule-Lenz về tác dụng nhiệt của dòng điện.
- Lắp ráp sơ đồ, thực hành đo đạc thí nghiệm Vôn-Ampe để xác minh định luật Ohm và đo điện trở suất của dây Constantan.
- Lập trình Python xử lý dữ liệu hồi quy tuyến tính vẽ đặc tuyến V-A (I-U) và đường cong nhiệt độ - điện trở.

### English
- Conceptualize and deeply understand the nature of electric current in conductive media (metals, electrolytes) as the directed flow of free charges.
- Master the concept of current intensity, the definition of the Ampere (A), and the microscopic expression linking current to electron drift velocity.
- Understand how electrical resistance depends on geometric dimensions (length, cross-sectional area) and the material's properties (resistivity).
- Calculate the variation of resistance with temperature using the temperature coefficient of resistance.
- State clearly and skillfully apply Ohm's Law for purely resistive circuits to solve for $I, U, R$.
- Master formulas for electrical work, power consumption, and the Joule-Lenz law of thermal heating.
- Wire and perform the Volt-Ammeter lab experiment to verify Ohm's law and measure the resistivity of a Constantan wire.
- Write Python scripts to perform linear regression, plot the I-U characteristic curve, and graph the resistance-temperature dependence.

---

## 2. Tài Liệu Tham Khảo / Related Textbook Lessons
- **SGK Kết nối tri thức Vật lí 11**:
  - **Bài 20**: Dòng điện - Bản chất và chiều dòng điện.
  - **Bài 21**: Cường độ dòng điện và điện lượng - Phương trình vi mô tốc độ trôi.
  - **Bài 22**: Điện trở. Định luật Ohm - Mối quan hệ U-I và các yếu tố ảnh hưởng R.

---

## 3. Lịch Sử Khám Phá / Historical Background
- **Georg Simon Ohm (1827)**: Công bố cuốn sách vĩ đại mô tả về mối quan hệ tuyến tính giữa điện áp và dòng điện, mặc dù ban đầu lý thuyết của ông bị các nhà khoa học cùng thời chỉ trích và tẩy chay.
- **James Prescott Joule (1841)**: Khám phá ra rằng nhiệt lượng sinh ra do dòng điện đi qua một vật dẫn tỉ lệ thuận với bình phương cường độ dòng điện và điện trở của vật dẫn (Định luật Joule).

---

## 4. Dụng Cụ Thí Nghiệm / Lab Equipment & Tools

| STT / No. | Tên thiết bị / Equipment Name | Tiếng Anh / English | Số lượng / Qty | Đơn giá / Unit Price (VND) | Tình trạng / Availability |
|-----------|------------------------------|---------------------|----------------|---------------------------|---------------------------|
| 1 | Nguồn điện DC điều chỉnh (0-15V) | Adjustable DC Power Supply | 1 bộ | 400,000 | Phòng Lab / Lab room |
| 2 | Ampe kế Analog / Digital (0-2A) | Ammeter | 1 cái | 120,000 | Sẵn có / Available |
| 3 | Vôn kế Analog / Digital (0-20V) | Voltmeter | 1 cái | 120,000 | Sẵn có / Available |
| 4 | Bộ điện trở mẫu (nhiều vạch màu) | Fixed resistor set | 1 bộ | 80,000 | Sẵn có / Available |
| 5 | Dây điện trở (Constantan, Nichrome) | Resistance wire roll | 1 cuộn | 50,000 | Shopee/Lazada |
| 6 | Thước kẹp / Panme điện tử | Vernier Caliper / Micrometer | 1 cái | 150,000 | Sẵn có / Available |
| 7 | Biến trở con chạy (Slider Rheostat) | Sliding Rheostat | 1 cái | 100,000 | Phòng Lab / Lab room |

---

## 5. Cơ Sở Lý Thuyết Chuyên Sâu / In-depth Theoretical Background

### 5.1. Dòng Điện & Cường Độ Dòng Điện / Electric Current
- Dòng điện là dòng chuyển dời có hướng của các điện tích (electron, ion dương, ion âm). 
- **Quy ước chiều dòng điện**: Là chiều chuyển động của các điện tích dương. (Lưu ý trong kim loại, electron mang điện âm di chuyển ngược chiều dòng điện quy ước).
- **Cường độ dòng điện (Current intensity) $I$**: Là đại lượng đo bằng lượng điện tích $\Delta q$ dịch chuyển qua tiết diện thẳng của vật dẫn trong khoảng thời gian $\Delta t$.
  $$ I = \frac{\Delta q}{\Delta t} $$
- **Biểu thức vi mô của dòng điện / Microscopic equation**:
  Cường độ dòng điện phụ thuộc vào mật độ electron tự do, vận tốc trôi, và tiết diện dây.
  $$ I = n \cdot e \cdot v_d \cdot S $$
  Trong đó: $n$ là mật độ electron tự do (hạt/$m^3$), $v_d$ là tốc độ trôi (m/s), $S$ là tiết diện mặt cắt ngang ($m^2$). Vận tốc trôi thường rất nhỏ, cỡ vài mm/s.

### 5.2. Điện Trở & Sự Phụ Thuộc Vào Hình Học & Nhiệt Độ / Resistance & Temperature Dependence
- **Điện trở của một đoạn dây dẫn đồng chất, tiết diện đều**:
  $$ R = \rho \frac{l}{S} $$
  ($\rho$: điện trở suất, $l$: chiều dài, $S$: diện tích mặt cắt ngang).
- **Sự thay đổi của điện trở theo nhiệt độ / Temperature dependence**:
  Điện trở suất và điện trở của phần lớn kim loại tăng khi nhiệt độ tăng.
  $$ R(T) = R_0 \left[1 + \alpha (T - T_0)\right] $$
  Trong đó $\alpha$ là hệ số nhiệt điện trở ($K^{-1}$), $R_0$ là điện trở ở nhiệt độ chuẩn $T_0$ (thường là $20^\circ C$).

### 5.3. Định Luật Ohm Cho Đoạn Mạch / Ohm's Law
Cường độ dòng điện chạy qua một đoạn mạch thuần điện trở tỉ lệ thuận với hiệu điện thế hai đầu đoạn mạch và tỉ lệ nghịch với điện trở của nó.
$$ I = \frac{U}{R} \iff U = I \cdot R $$

### 5.4. Điện Năng & Công Suất Tỏa Nhiệt (Định Luật Joule-Lenz) / Electrical Energy & Heating
- Điện năng tiêu thụ (Công của dòng điện) trong thời gian $t$: 
  $$ A = U \cdot I \cdot t $$
- Công suất điện tiêu thụ: 
  $$ P = \frac{A}{t} = U \cdot I = \frac{U^2}{R} = I^2 R $$
- **Định luật Joule-Lenz**: Nhiệt lượng tỏa ra trên đoạn dây dẫn (thuần trở) tỉ lệ với bình phương cường độ dòng điện, với điện trở và thời gian dòng điện chạy qua:
  $$ Q_{tỏa} = I^2 \cdot R \cdot t $$

### 5.5. Sơ đồ mạch điện thí nghiệm / Circuit Schematics (ASCII)

**Sơ đồ phương pháp Vôn-Ampe đo điện trở:**
```text
      +--------(A)---------+
      |                    |
     (V)                  [Rx] 
      |                    |
      +--------------------+
             |      |
        (+) Nguồn DC (-)
```
*(Lưu ý: Vôn kế mắc song song với vật cần đo, Ampe kế mắc nối tiếp trong nhánh chính).*

---

## 6. Bài Toán Ví Dụ Mẫu & Giải Thích Chi Tiết / Worked Examples with Step-by-Step Solutions

### Ví dụ 1: Tính điện trở và chi phí điện năng / Resistance & Energy Cost
**Đề bài / Problem**: 
Một bếp điện có ghi (220V - 1000W) hoạt động bình thường ở mạng điện 220V.
a) Tính điện trở của dây mayso trong bếp và cường độ dòng điện chạy qua bếp.
b) Nếu mỗi ngày dùng bếp trong 2 giờ, tính tiền điện phải trả trong 30 ngày (biết giá điện là 2000 VND/1 kWh).
**Giải / Solution**:
1. Vì bếp hoạt động bình thường, điện áp thực tế là $U = 220 \, \text{V}$, công suất đạt định mức $P = 1000 \, \text{W}$.
2. Từ công thức $P = U^2 / R$, ta suy ra:
   $$ R = \frac{U^2}{P} = \frac{220^2}{1000} = \frac{48400}{1000} = 48.4 \, \Omega $$
3. Cường độ dòng điện:
   $$ I = \frac{P}{U} = \frac{1000}{220} \approx 4.54 \, \text{A} $$
4. Tính lượng điện năng thiêu thụ trong 1 tháng (30 ngày):
   Thời gian $t = 2 \, \text{h/ngày} \times 30 \, \text{ngày} = 60 \, \text{h}$.
   Công suất $P = 1000 \, \text{W} = 1 \, \text{kW}$.
   Điện năng $A = P \cdot t = 1 \, \text{kW} \times 60 \, \text{h} = 60 \, \text{kWh}$.
5. Tiền điện: $60 \times 2000 = 120,000 \, \text{VND}$.

### Ví dụ 2: Tính toán dựa trên vận tốc trôi / Drift Velocity Calculation
**Đề bài / Problem**: 
Một sợi dây đồng có đường kính $d = 2 \, \text{mm}$ mang dòng điện $I = 10 \, \text{A}$. Cho biết mật độ electron tự do trong đồng là $n = 8.5 \times 10^{28} \, \text{m}^{-3}$, điện tích $e = 1.6 \times 10^{-19} \, \text{C}$.
Tính tốc độ trôi của electron trong dây dẫn này.
**Giải / Solution**:
1. Diện tích mặt cắt ngang $S = \pi \cdot (d/2)^2 = \pi \cdot (10^{-3})^2 = 3.14 \times 10^{-6} \, \text{m}^2$.
2. Phương trình vi mô: $I = n \cdot e \cdot v_d \cdot S$.
3. Rút $v_d$:
   $$ v_d = \frac{I}{n \cdot e \cdot S} $$
   $$ v_d = \frac{10}{8.5 \times 10^{28} \times 1.6 \times 10^{-19} \times 3.14 \times 10^{-6}} $$
   $$ v_d \approx \frac{10}{4.27 \times 10^4} \approx 2.34 \times 10^{-4} \, \text{m/s} = 0.234 \, \text{mm/s} $$
4. Nhận xét: Vận tốc trôi rất chậm (chưa tới 1mm mỗi giây) dù dòng điện khá lớn.

### Ví dụ 3: Điện trở phụ thuộc nhiệt độ / Resistance variation with temp
**Đề bài / Problem**: 
Dây tóc bóng đèn bằng vonfram có điện trở $R_0 = 20 \, \Omega$ ở $20^\circ C$. Khi đèn sáng bình thường, điện trở của dây tóc là $R = 240 \, \Omega$. Biết hệ số nhiệt điện trở $\alpha = 4.5 \times 10^{-3} \, K^{-1}$. Xác định nhiệt độ của dây tóc khi đèn sáng bình thường.
**Giải / Solution**:
1. Áp dụng công thức $R = R_0 [1 + \alpha (T - T_0)]$.
2. Thay số:
   $$ 240 = 20 [1 + 4.5 \times 10^{-3} (T - 20)] $$
3. Giải phương trình:
   $$ 12 = 1 + 4.5 \times 10^{-3} (T - 20) $$
   $$ 11 = 4.5 \times 10^{-3} (T - 20) $$
   $$ T - 20 = \frac{11}{4.5 \times 10^{-3}} = 2444.4 \, ^\circ C $$
   $$ T \approx 2464.4 \, ^\circ C $$
4. Bóng đèn sợi đốt hoạt động ở nhiệt độ rất cao (hơn $2400^\circ C$).

---

## 7. Thực Hành Thí Nghiệm / Hands-on Experiments

### 7.1. Khảo sát đặc tuyến I-U và xác định giá trị điện trở / V-A Characteristic Curve
**Mục đích**: Kiểm chứng sự phụ thuộc tuyến tính $U \propto I$ của vật dẫn Oemic, từ đó tính điện trở $R$.
**Bảng dữ liệu mẫu (Điện trở thực tế khoảng 47 $\Omega$) / Data Table**:

| Lần đo / Attempt | Hiệu điện thế $U$ (V) | Cường độ dòng điện $I$ (A) | Tỉ số $R = U/I$ ($\Omega$) |
|------------------|-----------------------|----------------------------|----------------------------|
| 1 | 2.0 | 0.042 | 47.62 |
| 2 | 4.0 | 0.085 | 47.06 |
| 3 | 6.0 | 0.127 | 47.24 |
| 4 | 8.0 | 0.170 | 47.06 |
| 5 | 10.0 | 0.213 | 46.95 |

**Cách làm chi tiết**:
1. Mắc mạch điện nối tiếp theo sơ đồ: Cực dương nguồn $\to$ Ampe kế $\to$ Điện trở cần đo $\to$ Công tắc K $\to$ Cực âm nguồn. Mắc Vôn kế song song với điện trở cần đo.
2. Điều chỉnh núm nguồn để U đạt lần lượt các mốc 2V, 4V, 6V, 8V, 10V. Đọc ampe kế.
3. Ghi kết quả vào bảng, vẽ đồ thị $I$ theo $U$. Đường biểu diễn phải là đường thẳng đi qua gốc tọa độ O.
4. Lấy hệ số góc của đường thẳng (Slope) $k = \frac{\Delta I}{\Delta U}$. Suy ra điện trở $R = \frac{1}{k}$.

### 7.2. Đo điện trở suất của kim loại / Measuring Resistivity
1. Dùng thước kẹp (Caliper) đo đường kính $d$ của dây Constantan. (Ví dụ: $d = 0.5 \text{mm}$). Tiết diện $S = \frac{\pi d^2}{4}$.
2. Dùng thước cuộn đo chiều dài $l$ của đoạn dây đem test (Ví dụ: $l = 1 \text{m}$).
3. Đo điện trở $R$ của đoạn dây đó bằng mạch V-A (như phần 7.1).
4. Tính $\rho = \frac{R \cdot S}{l}$. Đối chiếu với bảng điện trở suất chuẩn trong SGK.

### 7.3. Chú ý An Toàn / ⚠️ Safety Warnings
- **Ngắn mạch (Short-circuit)**: Tuyệt đối KHÔNG ĐƯỢC tháo điện trở thử nghiệm ra nối trực tiếp nguồn (ngắn cực + và -). Dòng I sẽ vượt ngưỡng chịu đựng làm nổ cầu chì ampe kế, cháy dây dẫn, hoặc hỏng nguồn đắt tiền.
- Chú ý giới hạn công suất của điện trở: Một điện trở loại $1/4\text{W}$ sẽ bốc khói và cháy đen nếu bạn áp vào hiệu điện thế quá lớn (Ví dụ $R = 10\Omega, U = 10V \implies P = U^2/R = 100/10 = 10\text{W} \gg 1/4\text{W}$). Cần chọn điện trở sứ, cuộn dây hoặc ngắt mạch ngay sau khi đọc để linh kiện kịp nguội.

---

## 8. Lập Trình Mô Phỏng / Python Simulation Code

### Bài 1: Linear Regression fitting I-U Data / Khớp dữ liệu định luật Ohm
Sử dụng hàm hồi quy tuyến tính của Scipy để xử lý nhiễu từ số liệu đo thực tế, tìm đường thẳng đẹp nhất (Best-fit line).

```python
# Khớp dữ liệu thực nghiệm Định luật Ohm (Ohm's Law linear fit)
import numpy as np
import matplotlib.pyplot as plt
from scipy.stats import linregress

# Dữ liệu đo đạc thực nghiệm (Mock experimental data)
U_data = np.array([0, 2.1, 4.0, 5.8, 8.2, 10.0]) # Điện áp - Volts
I_data = np.array([0, 0.042, 0.085, 0.127, 0.170, 0.213]) # Dòng điện - Amperes

# Hồi quy tuyến tính I = (1/R) * U
# linregress(X, Y) trả về slope, intercept...
slope, intercept, r_value, p_value, std_err = linregress(U_data, I_data)

# Điện trở tính từ độ dốc: R = 1 / slope
R_measured = 1.0 / slope
print(f"Hệ số góc (Slope) = {slope:.5f}")
print(f"Giá trị điện trở (Measured Resistance) = {R_measured:.2f} Ohm")
print(f"Độ tin cậy của phép đo R^2 = {r_value**2:.4f}")

plt.figure(figsize=(9, 6))

# Vẽ các điểm đo thực tế
plt.plot(U_data, I_data, 'ko', markersize=8, label='Số liệu đo (Experimental Data)')

# Vẽ đường thẳng tốt nhất (Best-fit line)
U_fit = np.linspace(0, 11, 50)
I_fit = slope * U_fit + intercept
plt.plot(U_fit, I_fit, 'r-', linewidth=2.5, 
         label=f'Linear Fit: I = U / {R_measured:.1f}')

plt.title("Đặc tuyến Vôn - Ampe (Ohm's Law V-A Curve)", fontsize=14)
plt.xlabel("Hiệu điện thế $U$ (V)", fontsize=12)
plt.ylabel("Cường độ dòng điện $I$ (A)", fontsize=12)
plt.grid(True, linestyle='--')
plt.legend(fontsize=12)
plt.xlim(0, 11)
plt.ylim(0, 0.25)
plt.tight_layout()
plt.show()
```

### Bài 2: Mô phỏng điện trở theo nhiệt độ / Temperature vs Resistance Curve
```python
# Đồ thị điện trở thay đổi theo nhiệt độ (Kim loại Đồng / Copper)
import numpy as np
import matplotlib.pyplot as plt

T = np.linspace(-50, 200, 100) # Temperature from -50C to 200C
R0 = 100       # Điện trở tại 20C là 100 Ohm
T0 = 20
alpha = 0.0039 # Hệ số nhiệt điện trở của đồng (Temp coefficient for Copper)

# Áp dụng công thức
R_T = R0 * (1 + alpha * (T - T0))

plt.figure(figsize=(8, 5))
plt.plot(T, R_T, 'b-', linewidth=2, label=f'$\\alpha = {alpha}$ $K^{{-1}}$')
plt.plot(20, 100, 'ro', label='Điểm chuẩn $20^\circ C, 100\\Omega$')

plt.title("Sự phụ thuộc của Điện trở Đồng vào Nhiệt độ", fontsize=13)
plt.xlabel("Nhiệt độ ($^\circ$C)", fontsize=11)
plt.ylabel("Điện trở $R$ ($\Omega$)", fontsize=11)
plt.grid(True)
plt.legend()
plt.show()
```

---

## 9. Câu Hỏi Thảo Luận Chuyên Sâu / Advanced Discussion Questions

1. **(VI)** Tại sao bóng đèn sợi đốt thường hay đứt ngay vào thời điểm lúc vừa gạt công tắc bật sáng, chứ hiếm khi đứt khi đang sáng ổn định được một lúc?
   **(EN)** Why do incandescent light bulbs usually blow out the instant they are turned on, rather than when burning steadily?
   *Gợi ý / Hint*: Lúc vừa bật, nhiệt độ dây tóc đang là nhiệt độ phòng ($20^\circ C$). Điện trở dây lúc này rất nhỏ. Do đó cường độ dòng điện đi qua $I = U/R$ (dòng khởi động, inrush current) lớn hơn gấp hàng chục lần so với dòng định mức. Dòng cực lớn này sinh ra nhiệt lượng cực lớn trong tích tắc làm đứt phần yếu nhất của sợi vonfram. Khi đang sáng, nhiệt độ cao, điện trở R lớn, dòng I ổn định ở mức thấp.

2. **(VI)** Phân biệt khái niệm Vận tốc trôi (Drift velocity) của electron và Tốc độ lan truyền của tín hiệu dòng điện trong dây.
   **(EN)** Distinguish between the drift velocity of electrons and the propagation speed of electric current signals.
   *Gợi ý / Hint*: Vận tốc trôi của mỗi hạt electron do lực điện trường đẩy là rất chậm (cỡ phân số của mm/s). Nhưng điện trường được thiết lập trong dây dẫn bằng sóng điện từ với tốc độ gần bằng tốc độ ánh sáng ($3 \times 10^8$ m/s). Do đó tín hiệu dòng điện lan truyền tức thời. (Ví dụ giống như ống nước đã đầy: đẩy 1 giọt nước đầu ống, nước ở cuối ống chảy ra ngay lập tức, dù giọt nước đầu tiên mất rất lâu mới bơi tới đích).

3. **(VI)** Dây dẫn có điện trở suất nhỏ thì dẫn điện tốt hay kém? Đồng, Nhôm, Bạc, Vàng - xếp hạng khả năng dẫn điện.
   **(EN)** Does a wire with low resistivity conduct well or poorly? Rank Copper, Aluminum, Silver, Gold in conductivity.
   *Gợi ý / Hint*: Điện trở suất $\rho$ càng nhỏ, cản trở dòng điện càng ít $\implies$ Dẫn điện càng tốt. Bạc (Silver) dẫn điện tốt nhất, sau đó đến Đồng (Copper), rồi Vàng (Gold) và Nhôm (Aluminum). Đồng được ưu chuộng vì giá thành/hiệu suất tốt. Vàng dẫn kém hơn đồng nhưng được mạ ở chân cắm vì chống oxy hóa tuyệt vời.

4. **(VI)** Cùng một dòng điện $I$ nối tiếp đi qua đoạn dây đồng (dây dẫn) và đoạn dây hợp kim Nichrome (dây mayso tỏa nhiệt bếp điện). Dây nào sẽ bị đốt nóng đỏ lên? Tại sao đoạn dây đồng thì không bị nóng?
   **(EN)** The same current flows through a copper wire and a Nichrome heating element. Which gets red hot? Why doesn't the copper wire?
   *Gợi ý / Hint*: Vì mắc nối tiếp nên $I$ đi qua 2 dây là bằng nhau. Hợp kim Nichrome có điện trở suất $\rho$ cao hơn Đồng hàng trăm lần, dẫn tới $R_{nichrome} \gg R_{copper}$. Theo định luật Joule, nhiệt lượng $Q = I^2 R t$, điện trở lớn sinh ra nhiệt lượng khổng lồ. Dây đồng điện trở rất nhỏ nên không tỏa bao nhiêu nhiệt.

5. **(VI)** Sự phụ thuộc tuyến tính $U = IR$ (Định luật Ohm) có đúng cho mọi linh kiện điện tử không? (Ví dụ như diode, bóng bán dẫn, LED).
   **(EN)** Is the linear relationship $U = IR$ true for all electronic components? (e.g., diodes, transistors, LEDs).
   *Gợi ý / Hint*: Không. Định luật Ohm chỉ đúng cho vật dẫn kim loại và một số điện trở thuần túy (Ohmic devices). Các linh kiện bán dẫn như Diode, LED, Transistor có đặc tuyến V-A phi tuyến tính, tức là đồ thị đường cong hoặc dốc đứng sau một điện áp ngưỡng, không tuân theo quy luật $R$ cố định.

---

## 10. Bài Tập Về Nhà / Homework Problems & Solutions

**Bài 1 / Problem 1**: 
Một cuộn dây nhôm có tiết diện tròn đường kính $d = 1 \, \text{mm}$, điện trở đo được là $R = 3.5 \, \Omega$. Biết điện trở suất của nhôm là $\rho = 2.8 \times 10^{-8} \, \Omega\cdot\text{m}$.
a) Tính chiều dài $l$ của cuộn dây.
b) Nối hai đầu cuộn dây này với nguồn điện không đổi $12\text{V}$. Tính công suất tỏa nhiệt của dây.
*Đáp án / Solution step*:
a) Tiết diện của dây: $S = \pi \frac{d^2}{4} = 3.14 \times \frac{(10^{-3})^2}{4} = 0.785 \times 10^{-6} \, \text{m}^2$.
   Từ công thức $R = \rho \frac{l}{S} \implies l = \frac{R \cdot S}{\rho}$.
   $l = \frac{3.5 \times 0.785 \times 10^{-6}}{2.8 \times 10^{-8}} = \frac{2.7475 \times 10^{-6}}{2.8 \times 10^{-8}} \approx 98.125 \, \text{m}$.
b) Công suất tỏa nhiệt: $P = \frac{U^2}{R} = \frac{12^2}{3.5} = \frac{144}{3.5} \approx 41.14 \, \text{W}$.

**Bài 2 / Problem 2**:
Cho đoạn mạch gồm ba điện trở: $R_1 = 4 \, \Omega$, $R_2 = 6 \, \Omega$ và $R_3 = 12 \, \Omega$. Trong đó $R_2$ mắc song song với $R_3$, toàn bộ cụm này nối tiếp với $R_1$. Đặt vào hai đầu đoạn mạch điện áp tổng $U = 24 \, \text{V}$.
a) Tính điện trở tương đương của toàn mạch.
b) Tính cường độ dòng điện chạy qua mỗi điện trở.
c) Tính nhiệt lượng tổng cộng tỏa ra trên đoạn mạch trong 5 phút.
*Đáp án / Solution step*:
a) Nhánh song song: $R_{23} = \frac{R_2 R_3}{R_2 + R_3} = \frac{6 \times 12}{6 + 12} = \frac{72}{18} = 4 \, \Omega$.
   Điện trở tương đương: $R_{eq} = R_1 + R_{23} = 4 + 4 = 8 \, \Omega$.
b) Dòng điện mạch chính (chạy qua $R_1$):
   $I_1 = I_{eq} = \frac{U}{R_{eq}} = \frac{24}{8} = 3 \, \text{A}$.
   Điện áp trên cụm song song $R_{23}$:
   $U_{23} = I_{eq} \cdot R_{23} = 3 \times 4 = 12 \, \text{V}$.
   Do $R_2 // R_3$ nên $U_2 = U_3 = U_{23} = 12 \, \text{V}$.
   Dòng điện qua $R_2$: $I_2 = \frac{U_2}{R_2} = \frac{12}{6} = 2 \, \text{A}$.
   Dòng điện qua $R_3$: $I_3 = \frac{U_3}{R_3} = \frac{12}{12} = 1 \, \text{A}$. (Kiểm tra: $I_2 + I_3 = 2+1 = 3\text{A} = I_1$).
c) Nhiệt lượng tỏa ra: $Q = I_{eq}^2 R_{eq} t = \frac{U^2}{R_{eq}} t = \frac{24^2}{8} \times (5 \times 60) = 72 \times 300 = 21600 \, \text{J} = 21.6 \, \text{kJ}$.

---

## 11. Đánh Giá / Comprehensive Assessment Rubric (100-point scale)

| Tiêu chí / Criteria | Xuất sắc / Excellent (90-100) | Khá / Good (70-89) | Cần cố gắng / Needs Improvement (<70) |
|---------------------|-------------------------------|--------------------|---------------------------------------|
| **1. Nắm vững Lý thuyết & Ohm's Law (25%)** | Nắm vững bản chất hạt mang điện, công thức I, R, định luật nhiệt độ và định luật Joule-Lenz. | Quên hệ số nhiệt điện trở. Còn nhầm công suất với điện năng. | Mơ hồ hoàn toàn về sự phụ thuộc R vào kích thước, tiết diện S. |
| **2. Phân tích & Tính toán Mạch hỗn hợp (25%)** | Phân rã mạch R nối tiếp/song song thành thạo, tìm dòng rẽ nhánh chính xác, ko sai đơn vị. | Tìm được R tương đương nhưng hay nhầm U, I của các nhánh mạch phụ. | Dùng chung một công thức cộng cho cả nối tiếp và song song. |
| **3. Kỹ năng thực hành V-A & Đo đạc (30%)** | Mắc Vôn kế song song, ampe kế nối tiếp đúng cực. Xử lý số liệu tốt, vẽ đặc tuyến chuẩn xác. | Mắc mạch đúng nhưng đọc thang đo trên máy sai (lỗi hệ số nhân). Vẽ đồ thị xấu. | Làm đoản mạch nguồn do không dùng tải, nổ cầu chì thiết bị đo. |
| **4. Lập trình Hồi quy tuyến tính (20%)** | Khớp dữ liệu bằng code Scipy, diễn giải ý nghĩa độ dốc slope là nghịch đảo điện trở. | Chạy được code nhưng đưa số liệu mới vào thì báo lỗi chiều mảng numpy. | Code copy paste không chạy được, không hiểu `linregress` là gì. |

---
*Vật lý rất gắn bó với đời sống hàng ngày của bạn. Bất cứ khi nào cắm sạc điện thoại, hãy nhớ rằng Định luật Ohm đang hoạt động không ngừng nghỉ! / Physics is tied to reality. Always remember Ohm's Law!*

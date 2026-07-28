# Tuần 9: Nguồn Điện, Mạch Điện Đơn Giản & Thực Hành Đo Suất Điện Động / Week 9: Power Sources, Simple Circuits & EMF Measurement Lab

## 1. Mục Tiêu Bài Học / Learning Objectives

### Tiếng Việt
- Hiểu được cấu tạo chung, chức năng, và nguyên tắc hoạt động của các nguồn điện (sử dụng lực lạ hóa học, cơ học... để duy trì hiệu điện thế).
- Phân biệt rõ sự khác nhau giữa lực lạ và lực tĩnh điện bên trong nguồn.
- Định nghĩa định lượng khái niệm suất điện động (EMF - $\mathcal{E}$) và giải thích ý nghĩa của điện trở trong ($r$) của nguồn điện thực tế.
- Thiết lập toán học và vận dụng định luật Ohm cho toàn mạch $I = \frac{\mathcal{E}}{R_N + r}$ để tính toán mạch điện kín.
- Hiểu, phân tích đồ thị năng lượng, và tính toán được hiệu suất của nguồn điện. 
- Thiết lập và khảo sát điều kiện để công suất tiêu thụ ở mạch ngoài đạt cực đại (Định lý truyền công suất cực đại).
- Lắp ráp mạch thực hành, sử dụng vôn kế và ampe kế để đo đạc và vẽ đồ thị nhằm gián tiếp tìm ra suất điện động và điện trở trong của một viên pin thật (AA, 18650 Li-ion).
- Viết mã Python để tự động hóa xử lý số liệu bằng phương pháp bình phương tối thiểu (linear regression), trích xuất y-intercept (E) và slope (-r).

### English
- Understand the general structure, function, and working principles of power sources (using non-electrostatic forces like chemical, mechanical... to maintain voltage).
- Clearly distinguish between non-electrostatic forces (lực lạ) and electrostatic forces inside the source.
- Quantitatively define Electromotive Force (EMF - $\mathcal{E}$) and explain the significance of a real battery's internal resistance ($r$).
- Mathematically derive and apply Ohm's law for a complete circuit $I = \frac{\mathcal{E}}{R_N + r}$ to solve closed-circuit problems.
- Understand, analyze energy flow, and calculate the efficiency of a power source.
- Derive and investigate the condition for maximum power transfer to an external circuit.
- Assemble a practical circuit using voltmeters and ammeters to measure and plot data, indirectly finding the EMF and internal resistance of a real battery.
- Write Python code to automate data processing using least-squares linear regression to extract the y-intercept (E) and slope (-r).

---

## 2. Tài Liệu Tham Khảo / Related Textbook Lessons
- **SGK Kết nối tri thức Vật lí 11**:
  - **Bài 23**: Nguồn điện - Bản chất suất điện động.
  - **Bài 24**: Mạch điện đơn giản - Định luật Ohm cho toàn mạch và công suất.
  - **Bài 25**: Thực hành: Đo suất điện động và điện trở trong của nguồn điện - Áp dụng thực nghiệm định luật Ohm toàn mạch.

---

## 3. Lịch Sử Khám Phá / Historical Background
- **Luigi Galvani & Alessandro Volta (Thế kỷ 18)**: Phát hiện ra sự co giật của cơ đùi ếch do hiện tượng điện sinh học, dẫn đến việc Volta phát minh ra Pin Volta - nguồn điện hóa học cung cấp dòng điện liên tục đầu tiên.
- **Gustav Kirchhoff (1845)**: Mở rộng định luật Ohm thành các Định luật Kirchhoff, tạo nền tảng vững chắc cho phân tích mọi mạch điện phức tạp.

---

## 4. Dụng Cụ Thí Nghiệm / Lab Equipment & Tools

| STT / No. | Tên thiết bị / Equipment Name | Tiếng Anh / English | Số lượng / Qty | Đơn giá / Unit Price (VND) | Tình trạng / Availability |
|-----------|------------------------------|---------------------|----------------|---------------------------|---------------------------|
| 1 | Pin AA 1.5V các loại (Panasonic, Energizer - cả Mới và Cũ) | AA Battery (New & Used)| 4 viên | 15,000 | Tạp hóa / Grocery store |
| 2 | Hộp đế gắn pin (AA Battery holder) | Battery Holder | 2 cái | 10,000 | Sẵn có / Available |
| 3 | Biến trở con chạy loại lớn (100 $\Omega$, 2A) | Sliding Rheostat | 1 cái | 80,000 | Phòng Lab / Lab room |
| 4 | Đồng hồ vạn năng điện tử số (Chức năng V, A) | Digital Multimeter | 2 cái | 250,000 | Sẵn có / Available |
| 5 | Dây nối cắm bắp chuối chuyên dụng | Banana plug cables | 6 sợi | 40,000 | Sẵn có / Available |
| 6 | Công tắc K (Cầu dao đóng ngắt) | Switch / Circuit breaker | 1 cái | 15,000 | Sẵn có / Available |
| 7 | Máy tính cài Python (Jupyter) | Laptop with Python | 1 máy | N/A | Tự mang / BYOD |

---

## 5. Cơ Sở Lý Thuyết Chuyên Sâu / In-depth Theoretical Background

### 5.1. Nguồn Điện & Bản Chất Của "Lực Lạ" / Power Sources & Non-Electrostatic Forces
- Để dòng điện duy trì chạy mãi trong mạch, cần phải bơm liên tục các điện tích lên thế năng cao (đi ngược chiều điện trường tĩnh điện). Việc này yêu cầu một lực không phải lực tĩnh điện, gọi là **lực lạ**.
- Trong pin, lực lạ là lực đẩy hóa học từ phản ứng Oxi hóa - Khử.
- **Suất điện động (EMF - $\mathcal{E}$)**: Đặc trưng cho năng lực sinh công của lực lạ, là công của lực lạ $A_{lạ}$ làm dịch chuyển điện tích $q$ dương bên trong nguồn điện.
  $$ \mathcal{E} = \frac{A_{l\text{ạ}}}{q} $$
  Đơn vị đo suất điện động là Vôn (V). Giống như hiệu điện thế nhưng đại diện cho điện áp cực đại không tải của pin.

### 5.2. Định Luật Ohm Cho Toàn Mạch / Ohm's Law for Complete Circuit
- Một mạch kín hoàn chỉnh gồm nguồn điện (có suất điện động $\mathcal{E}$, điện trở trong $r$ kí hiệu sự hao phí bên trong pin) nối với mạch ngoài (có điện trở tương đương $R_N$).
- Áp dụng định luật bảo toàn năng lượng, công nguồn cấp bằng tổng nhiệt lượng tỏa ra ngoài và trong:
  $\mathcal{E} I t = I^2 R_N t + I^2 r t \implies \mathcal{E} = I R_N + I r$.
- Rút ra cường độ dòng điện trong mạch chính:
  $$ I = \frac{\mathcal{E}}{R_N + r} $$
- **Hiệu điện thế mạch ngoài (Terminal voltage)** hay còn gọi là điện áp rơi:
  $$ U = I \cdot R_N = \mathcal{E} - I \cdot r $$
  *Nhận xét*: Điện áp đầu ra $U$ luôn nhỏ hơn suất điện động $\mathcal{E}$ do sự sụt áp bên trong nguồn ($Ir$). Pin càng cũ, $r$ càng lớn, $U$ càng tụt khi cắm tải.

### 5.3. Công Suất & Hiệu Suất Nguồn Điện / Power & Efficiency
- **Công suất toàn phần của nguồn**: $P_{ng} = \mathcal{E} \cdot I$
- **Công suất tiêu thụ mạch ngoài (có ích)**: $P_{ich} = U \cdot I = I^2 R_N$
- **Nhiệt lượng vô ích (hao phí) làm nóng pin**: $P_{hao} = I^2 r$
- **Hiệu suất của nguồn (Efficiency)**:
  $$ H = \frac{P_{ich}}{P_{ng}} = \frac{U}{\mathcal{E}} = \frac{R_N}{R_N + r} \times 100\% $$

### 5.4. Định lý truyền công suất cực đại / Maximum Power Transfer Theorem
Xét công suất tỏa ra trên tải $R_N$:
$$ P = I^2 R_N = \left( \frac{\mathcal{E}}{R_N + r} \right)^2 R_N = \frac{\mathcal{E}^2 \cdot R_N}{(R_N + r)^2} $$
Chia cả tử và mẫu cho $R_N$, ta có mẫu thức: $R_N + \frac{r^2}{R_N} + 2r$.
Áp dụng bất đẳng thức Cauchy (AM-GM) cho hai số dương $R_N$ và $r^2/R_N$, mẫu thức nhỏ nhất (làm cho P cực đại) khi và chỉ khi:
$$ R_N = \frac{r^2}{R_N} \implies R_N = r $$
Khi đó, công suất tiêu thụ mạch ngoài đạt mức cực đại (Max Power):
$$ P_{max} = \frac{\mathcal{E}^2}{4r} $$
*(Lưu ý: Tại điểm truyền công suất cực đại, hiệu suất nguồn chỉ là 50%, tức một nửa công suất biến thành nhiệt làm nóng pin).*

### 5.5. Sơ đồ mạch điện (ASCII) / Circuit Schematics (ASCII)

**Mạch thực hành đo E và r:**
```text
           +-------[ Công tắc K ]-------+
           |                            |
         ( A ) Ampe kế                 [ Biến trở R_N ]
           |                            |
           +------------(V)-------------+
           |          Vôn kế            |
           +--[ + (E, r) - ]------------+  
                (Nguồn cần đo)
```

---

## 6. Bài Toán Ví Dụ Mẫu & Giải Thích Chi Tiết / Worked Examples with Step-by-Step Solutions

### Ví dụ 1: Tính toán toàn mạch cơ bản / Basic Closed Circuit
**Đề bài / Problem**: 
Một mạch điện gồm nguồn điện $\mathcal{E} = 12 \, \text{V}$, điện trở trong $r = 1 \, \Omega$, nối với mạch ngoài là một điện trở $R = 5 \, \Omega$.
a) Tính cường độ dòng điện trong mạch.
b) Tính hiệu điện thế giữa hai cực của nguồn điện (điện áp mạch ngoài).
c) Tính hiệu suất của nguồn điện.
**Giải / Solution**:
1. Áp dụng định luật Ohm toàn mạch:
   $$ I = \frac{\mathcal{E}}{R + r} = \frac{12}{5 + 1} = \frac{12}{6} = 2 \, \text{A} $$
2. Hiệu điện thế giữa 2 cực nguồn điện (Terminal voltage):
   $$ U = I \cdot R = 2 \times 5 = 10 \, \text{V} $$
   (Hoặc kiểm tra chéo: $U = \mathcal{E} - I \cdot r = 12 - 2 \times 1 = 10 \, \text{V}$).
3. Hiệu suất của nguồn:
   $$ H = \frac{R}{R+r} \times 100\% = \frac{5}{6} \times 100\% \approx 83.33\% $$

### Ví dụ 2: Công suất cực đại / Maximum Power Transfer
**Đề bài / Problem**:
Có một pin có suất điện động $\mathcal{E} = 9 \, \text{V}$, điện trở trong $r = 1.5 \, \Omega$. Mắc pin này với một biến trở $R_x$.
a) Phải chỉnh biến trở $R_x$ bằng bao nhiêu để công suất tỏa nhiệt trên biến trở là lớn nhất?
b) Tính giá trị công suất cực đại đó.
c) Tính cường độ dòng điện trong mạch lúc này.
**Giải / Solution**:
1. Theo định lý công suất cực đại, $P$ trên $R_x$ max khi:
   $$ R_x = r = 1.5 \, \Omega $$
2. Tính công suất cực đại:
   $$ P_{max} = \frac{\mathcal{E}^2}{4r} = \frac{9^2}{4 \times 1.5} = \frac{81}{6} = 13.5 \, \text{W} $$
3. Cường độ dòng điện trong mạch lúc này:
   $$ I = \frac{\mathcal{E}}{R_x + r} = \frac{9}{1.5 + 1.5} = \frac{9}{3} = 3 \, \text{A} $$

### Ví dụ 3: Đoản mạch / Short-circuit phenomenon
**Đề bài / Problem**: 
Giả sử ta vô tình nối hai cực của một acquy 12V ($r = 0.05 \Omega$) bằng một thanh kim loại dày có điện trở $R_N \approx 0 \Omega$. 
Tính dòng điện đoản mạch sinh ra và công suất nhiệt tỏa ra bên trong bản thân acquy. Hệ quả là gì?
**Giải / Solution**:
1. Dòng điện đoản mạch (Short circuit current):
   $$ I_{sc} = \frac{\mathcal{E}}{0 + r} = \frac{12}{0.05} = 240 \, \text{A} $$
2. Công suất nhiệt tỏa ra bên trong bình acquy:
   $$ P_r = I_{sc}^2 \cdot r = 240^2 \times 0.05 = 57600 \times 0.05 = 2880 \, \text{W} $$
3. Hệ quả: Bình acquy sẽ lập tức sôi sùng sục axit bên trong, tỏa lượng nhiệt cực lớn (gần 3kW) làm cháy vỏ bình hoặc gây nổ pin. Thanh kim loại nối cũng lập tức chảy rữa. Đây là nguyên nhân của nhiều vụ cháy nổ chạm chập điện.

---

## 7. Thực Hành Thí Nghiệm / Hands-on Experiments

### 7.1. Đo $\mathcal{E}$ và $r$ của pin AA / Measuring EMF and internal resistance
**Mục đích**: Từ số liệu thực tế đồ thị hóa để tìm ra nội trở pin (không thể đo trực tiếp bằng Ohm-kế thông thường).
**Bảng xử lý dữ liệu giả định (Mock Data for AA Battery) / Data Table**:

| Lần đo | Vị trí biến trở | Cường độ dòng điện I (A) | Hiệu điện thế U (V) | Ghi chú |
|--------|-----------------|--------------------------|---------------------|---------|
| 1 | Rất lớn | 0.05 | 1.48 | Gần bằng E (mở mạch) |
| 2 | Lớn vừa | 0.20 | 1.40 |  |
| 3 | Trung bình | 0.40 | 1.30 |  |
| 4 | Nhỏ | 0.60 | 1.20 |  |
| 5 | Rất nhỏ | 0.85 | 1.07 | Tụt áp nghiêm trọng |

**Cách làm chi tiết**:
1. Lắp sơ đồ mạch như mục 5.5. Vôn kế mắc song song nguồn (đo U). Ampe kế nối tiếp (đo I). Biến trở đóng vai trò $R_N$.
2. Đóng mạch K. Nhanh tay điều chỉnh thanh gạt biến trở.
3. Ở 5 vị trí ngẫu nhiên của thanh gạt, đọc cùng lúc 2 số liệu I và U, ghi vào bảng.
4. **Chú ý cực kỳ quan trọng**: Chỉ đóng mạch lúc ghi số liệu (1-2 giây) rồi mở mạch ngay! Nếu để dòng cao chạy qua pin liên tục, pin nóng lên làm r thay đổi, pin bị rút kiệt sẽ làm $\mathcal{E}$ suy giảm dẫn đến sai số thực nghiệm cực lớn.
5. Vẽ đồ thị toạ độ vuông góc: Trục tung U, trục hoành I. Theo phương trình $U = \mathcal{E} - r \cdot I$, đồ thị là đường thẳng có hệ số góc âm (slope = -r) và cắt trục tung tại $\mathcal{E}$.

### 7.2. Chú ý An Toàn / ⚠️ Safety Warnings
- Không bao giờ gạt biến trở về giá trị $0 \Omega$ vì sẽ gây **đoản mạch**. Dòng đoản mạch lớn phá hủy Ampe kế ngay lập tức (nổ cầu chì).
- Không được dùng Ohm-kế (thang đo $\Omega$ của vạn năng) cắm trực tiếp vào hai cực của pin để đo điện trở trong. Ohm-kế hoạt động bằng cách bơm 1 dòng nhỏ của máy đo vào trở, nếu bạn cắm vào pin, điện áp của pin sẽ đánh ngược lại làm cháy mạch đo trong đồng hồ vạn năng.

---

## 8. Lập Trình Mô Phỏng / Python Simulation Code

### Trích xuất thông số EMF và Nội trở bằng Hồi Quy Tuyến Tính (Linear Regression)
Đoạn code sau đọc dữ liệu thí nghiệm (dòng - áp) và tự động tìm đường hồi quy (least-squares), từ đó in ra $\mathcal{E}$ và $r$.

```python
# Xác định Suất điện động và Điện trở trong bằng thực nghiệm
import numpy as np
import matplotlib.pyplot as plt
from scipy.stats import linregress

# Dữ liệu thực nghiệm giả định của 1 viên pin AA
# I_exp (Amperes), U_exp (Volts)
I_exp = np.array([0.05, 0.20, 0.40, 0.60, 0.85])
U_exp = np.array([1.48, 1.40, 1.30, 1.20, 1.07])

# Phân tích Hồi quy tuyến tính phương trình: U = -r * I + E
# X = I_exp, Y = U_exp
# linregress trả về hệ số góc (slope) = -r, và tung độ gốc (intercept) = E
slope, intercept, r_value, p_value, std_err = linregress(I_exp, U_exp)

EMF = intercept
internal_r = -slope

print("=== KẾT QUẢ XỬ LÝ SỐ LIỆU ===")
print(f"Suất điện động (EMF E): {EMF:.3f} V")
print(f"Điện trở trong (Internal r): {internal_r:.3f} Ohm")
print(f"Mức độ tương quan R-squared: {r_value**2:.4f} (Gần 1 là kết quả tốt)")

# Vẽ đồ thị (Plotting)
plt.figure(figsize=(9, 6))

# Chấm điểm dữ liệu thực
plt.plot(I_exp, U_exp, 'ko', markersize=8, label='Dữ liệu đo thực tế (Data points)')

# Tạo dải I để vẽ đường thẳng
I_line = np.linspace(0, max(I_exp) + 0.2, 100)
U_line = slope * I_line + intercept

# Vẽ đường khớp hồi quy (Fit line)
plt.plot(I_line, U_line, 'r-', linewidth=2.5, 
         label=f'Đường hồi quy: U = {-internal_r:.2f}I + {EMF:.2f}')

# Trang trí đồ thị
plt.title("Xác định Suất điện động & Điện trở trong của nguồn điện", fontsize=14)
plt.xlabel("Cường độ dòng điện $I$ (A)", fontsize=12)
plt.ylabel("Điện áp mạch ngoài $U$ (V)", fontsize=12)
plt.xlim(0, max(I_line))
plt.ylim(0, 1.6)
plt.grid(True, linestyle='--')
plt.legend(fontsize=12)

# Đánh dấu tung độ gốc E
plt.annotate(f"EMF = {EMF:.2f} V\n(Tung độ gốc / y-intercept)", xy=(0, EMF), 
             xytext=(0.15, EMF-0.05),
             arrowprops=dict(facecolor='blue', shrink=0.05, width=1.5, headwidth=7),
             fontsize=11)

plt.tight_layout()
plt.show()
```

---

## 9. Câu Hỏi Thảo Luận Chuyên Sâu / Advanced Discussion Questions

1. **(VI)** Tại sao Vôn kế luôn phải được chế tạo có điện trở rất lớn, trong khi ampe kế lại có điện trở rất nhỏ (lý tưởng bằng 0)?
   **(EN)** Why must voltmeters always have very high resistance, while ammeters have very low resistance (ideally zero)?
   *Gợi ý / Hint*: Vôn kế mắc song song vào hai điểm mạch cần đo U. Điện trở Vôn kế phải khổng lồ (vài Mega-Ohm) để cường độ dòng điện rẽ vào nhánh Vôn kế cực kỳ nhỏ (xấp xỉ không), tránh làm thay đổi trạng thái gốc của mạch chính. Ngược lại, ampe kế mắc nối tiếp trong nhánh chính, nó phải có R vô cùng bé để sự có mặt của nó không làm sụt áp thêm trên mạch, không cản trở dòng điện thật đang chạy.

2. **(VI)** Pin con thỏ cũ để lâu trong tủ, khi lấy ra đo hở mạch bằng Vôn kế vẫn báo 1.45V, nhưng khi lắp vào xe đồ chơi thì xe không nhúc nhích. Hãy dùng kiến thức bài này giải thích nghịch lý trên.
   **(EN)** An old battery measures 1.45V open-circuit, but when put into a toy car, it fails to move. Use this lesson's knowledge to explain the paradox.
   *Gợi ý / Hint*: Khi đo hở mạch (I = 0), Vôn kế hiển thị đúng $\mathcal{E}$ (hoặc xấp xỉ). Hóa chất trong pin cũ thoái hóa làm điện trở trong $r$ tăng lên rất cao (vài chục $\Omega$). Khi cắm vào xe đồ chơi, mạch cần rút dòng I (dù nhỏ vài trăm mA). Vì $r$ khổng lồ, độ sụt áp bên trong pin là $U_{sụt} = Ir$ trở nên rất lớn. Do đó, điện áp cấp ra tải thực sự $U = \mathcal{E} - Ir$ giảm mạnh thê thảm (có thể chỉ còn 0.5V), không đủ sức quay mô-tơ.

3. **(VI)** Khi sạc bình ắc quy (từ một nguồn sạc điện lưới bên ngoài), dòng điện đi vào cực dương hay cực âm của ắc quy? Khi đó công thức $U$ hai đầu ắc quy viết thế nào?
   **(EN)** When charging a battery (from an external charger), does current enter its positive or negative terminal? How is its terminal voltage $U$ written then?
   *Gợi ý / Hint*: Nguồn sạc phải có điện áp khỏe hơn, ép đẩy dòng sạc đi VÀO cực dương của ắc quy (đi ngược lại xu thế xả tự nhiên). Lực đẩy này giúp đảo ngược phản ứng hóa học nạp lại năng lượng. Khi đó điện áp ở hai cực ắc quy: $U_{sạc} = \mathcal{E}_{ắcquy} + I_{sạc} \cdot r$. (Đó là lý do củ sạc phải có điện áp ra cao hơn điện áp pin, ví dụ sạc acquy 12V thường đưa ra áp 14.4V).

4. **(VI)** 2 học sinh cùng làm lab đo E và r. Học sinh A đo được $E = 1.5V, r = 0.5\Omega$. Học sinh B làm hỏng pin (để ngắn mạch quá lâu) rồi mới đo ra $E = 1.2V, r = 3\Omega$. Tính dòng lớn nhất có thể cung cấp của pin học sinh A và học sinh B. 
   **(EN)** Compare the max short-circuit current of battery A vs degraded battery B.
   *Gợi ý / Hint*: Học sinh A: $I_{max} = 1.5 / 0.5 = 3\text{A}$. Học sinh B: $I_{max} = 1.2 / 3 = 0.4\text{A}$. Pin B đã bị hỏng hoàn toàn.

5. **(VI)** Giải thích ý nghĩa vật lý của việc hiệu suất truyền tải cực đại chỉ là 50%.
   **(EN)** Explain the physical meaning of maximum power transfer efficiency being only 50%.
   *Gợi ý / Hint*: Để khai thác được mức công suất tối đa cho loa/ăng-ten (mạch ngoài), ta phải hi sinh một nửa năng lượng dưới dạng nhiệt năng tiêu hao ngay trong lòng thiết bị phát. Điều này quan trọng trong điện tử viễn thông (đòi hỏi tín hiệu to nhất không cần tiết kiệm điện), nhưng cực đoan và bị tránh trong truyền tải điện năng lưới quốc gia (cần hiệu suất 95-99% để tiết kiệm than đá/nước).

---

## 10. Bài Tập Về Nhà / Homework Problems & Solutions

**Bài 1 / Problem 1**: 
Một nguồn điện có suất điện động $\mathcal{E} = 6 \, \text{V}$, điện trở trong $r = 2 \, \Omega$ được mắc với mạch ngoài là một điện trở $R = 4 \, \Omega$ để tạo thành mạch kín.
a) Tính cường độ dòng điện qua mạch.
b) Tính công suất tiêu thụ mạch ngoài và công suất tổng nguồn cấp.
c) Thay $R = 4 \, \Omega$ bằng biến trở. Hỏi điều chỉnh R bằng bao nhiêu thì công suất toả nhiệt trên R lớn nhất? Tính giá trị Pmax đó.
*Đáp án / Solution step*:
a) $I = \frac{\mathcal{E}}{R+r} = \frac{6}{4+2} = \frac{6}{6} = 1 \, \text{A}$.
b) Công suất mạch ngoài $P_N = I^2 R = 1^2 \times 4 = 4 \, \text{W}$.
   Công suất nguồn $P_{ng} = \mathcal{E} I = 6 \times 1 = 6 \, \text{W}$. (Kiểm chứng: P hao phí = $I^2 r = 2\text{W}$, đúng vì $4+2=6$).
c) Công suất trên biến trở $R$ đạt cực đại khi $R = r = 2 \, \Omega$.
   Giá trị P max: $P_{max} = \frac{\mathcal{E}^2}{4r} = \frac{6^2}{4 \times 2} = \frac{36}{8} = 4.5 \, \text{W}$.

**Bài 2 / Problem 2**:
Khi mắc điện trở $R_1 = 2 \, \Omega$ vào hai cực của một nguồn điện, dòng điện trong mạch chính là $I_1 = 2 \, \text{A}$. Nếu thay bằng điện trở $R_2 = 5 \, \Omega$ thì cường độ dòng điện là $I_2 = 1 \, \text{A}$. 
Xác định suất điện động $\mathcal{E}$ và điện trở trong $r$ của nguồn điện đó.
*Đáp án / Solution step*:
Áp dụng phương trình $\mathcal{E} = I(R + r)$ cho cả hai trường hợp.
- TH1: $\mathcal{E} = 2(2 + r) = 4 + 2r$   (1)
- TH2: $\mathcal{E} = 1(5 + r) = 5 + r$   (2)
Từ (1) và (2), giải hệ phương trình:
$4 + 2r = 5 + r \implies r = 1 \, \Omega$.
Thay $r=1$ vào phương trình (2): $\mathcal{E} = 5 + 1 = 6 \, \text{V}$.
Vậy nguồn có suất điện động 6V, điện trở trong 1 Ohm.

---

## 11. Đánh Giá / Comprehensive Assessment Rubric (100-point scale)

| Tiêu chí / Criteria | Xuất sắc / Excellent (90-100) | Khá / Good (70-89) | Cần cố gắng / Needs Improvement (<70) |
|---------------------|-------------------------------|--------------------|---------------------------------------|
| **1. Bản chất Vật lý nguồn điện (20%)** | Phân biệt rành rọt lực tĩnh điện - lực lạ, suất điện động và hiệu điện thế. | Trả lời được công thức nhưng nhầm lẫn E và U. | Không hiểu khái niệm nội trở, coi r = 0 trong mọi trường hợp. |
| **2. Định luật Ohm toàn mạch (30%)** | Tính toán cực chuẩn, giải hệ phương trình tốt, giải phóng bài toán Pmax mượt mà. | Tính đúng mạch kín nhưng không nhớ hệ quả Cauchy cho định lý Pmax. | Bỏ sót r trong công thức $I=U/R$, tính toán sai lệch hoàn toàn. |
| **3. Kỹ năng Thực hành (30%)** | Kỹ năng đo lường nhanh, đóng/cắt đúng lúc bảo vệ pin. Đồ thị vẽ tay tuyến tính hoàn hảo. | Đo số liệu bị phi tuyến tính (cong) do ngâm pin quá lâu làm r thay đổi nhiệt lượng. | Lắp mạch sai cực vôn kế, không đo được bài. |
| **4. Lập trình Hồi quy số liệu (20%)** | Code tốt, hiểu ý nghĩa chặn trục tung và độ dốc của `linregress` là gì. | Chạy được nhưng không trích xuất thủ công được hệ số vào đồ thị. | Không hoàn thành được nhiệm vụ coding. |

---
*Ghi nhớ bảo vệ môi trường: Pin hỏng (đặc biệt Lithium hoặc Alkaline) chứa chì, kẽm, axit rất độc hại. Tuyệt đối không vứt pin vào thùng rác hữu cơ, hãy gom vào hộp tái chế pin! / Dispose of batteries properly to protect our environment!*

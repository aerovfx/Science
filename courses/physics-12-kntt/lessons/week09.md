# Tuần 9: Vật Lý Lượng Tử, Hiệu Ứng Quang Điện & Quang Phổ / Week 9: Quantum Physics, Photoelectric Effect & Atomic Spectra

## 1. Mục tiêu bài học (Learning Objectives)
Trong tuần này, học sinh sẽ được học về các khái niệm cơ bản của vật lý lượng tử, hiệu ứng quang điện, và quang phổ nguyên tử. Mục tiêu cụ thể bao gồm:
- **Hiểu (Understand)**: Khái niệm photon, lưỡng tính sóng hạt của ánh sáng, và lý thuyết dải năng lượng trong chất rắn.
- **Áp dụng (Apply)**: Sử dụng phương trình Einstein về hiệu ứng quang điện để giải các bài toán liên quan đến động năng ban đầu cực đại của electron và điện thế hãm.
- **Phân tích (Analyze)**: Phân tích quang phổ vạch của nguyên tử hydro dựa trên mô hình nguyên tử Bohr.
- **Thực hành (Practice)**: Thực hiện thí nghiệm xác định hằng số Planck bằng cách sử dụng các đèn LED có màu sắc khác nhau.
- **Mô phỏng (Simulate)**: Viết mã Python để mô phỏng sự phụ thuộc của dòng quang điện vào điện áp hãm và trực quan hóa quang phổ phát xạ của hydro.

---

## 2. Thiết bị thực hành (Lab Equipment Table)
Dưới đây là danh sách các thiết bị cần thiết cho thí nghiệm xác định hằng số Planck bằng đèn LED. / Below is the list of required equipment for the Planck's constant determination experiment using LEDs.

| STT (No.) | Tên thiết bị (Equipment Name) | Mô tả (Description) | Số lượng (Qty) | Đơn giá ước tính (Est. Price - VND) |
|---|---|---|---|---|
| 1 | Nguồn điện một chiều (DC Power Supply) | 0 - 12V, có thể điều chỉnh được (Adjustable) | 1 | 800,000 |
| 2 | Biến trở (Potentiometer) | 10kΩ hoặc 100kΩ để tinh chỉnh điện áp | 1 | 20,000 |
| 3 | Đồng hồ vạn năng (Multimeter) | Đo dòng điện (mA) và điện áp (V) | 2 | 250,000 |
| 4 | Bộ đèn LED các màu (LED Set) | Đỏ (Red), Cam (Orange), Vàng (Yellow), Lục (Green), Lam (Blue) | 5 | 50,000 |
| 5 | Điện trở bảo vệ (Resistor) | 1kΩ để hạn dòng qua LED | 1 | 1,000 |
| 6 | Bảng mạch cắm (Breadboard) | Để lắp ráp mạch điện không cần mỏ hàn | 1 | 50,000 |
| 7 | Dây cắm (Jumper Wires) | Dây kết nối đực-đực, đực-cái các loại | 1 bộ | 30,000 |
| 8 | Ống quang phổ cầm tay (Handheld Spectroscope) | Tùy chọn: Dùng để quan sát quang phổ của nguồn sáng | 1 | 350,000 |

> **Cảnh báo an toàn (Safety Warnings)**:
> 1. Không nhìn trực tiếp vào các nguồn sáng cường độ mạnh (như Laser, LED siêu sáng). / Do not look directly into high-intensity light sources.
> 2. Đảm bảo mắc đúng cực tính của nguồn điện và LED để tránh làm hỏng linh kiện. / Ensure correct polarity of power supply and LEDs to avoid damaging components.
> 3. Cẩn thận khi sử dụng điện áp cao hơn mức an toàn. Trong thí nghiệm này, điện áp luôn dưới mức nguy hiểm (< 12V). / Be careful with high voltages. In this experiment, voltage is always below hazardous levels.

---

## 3. Cơ sở Lý thuyết & Toán học (Theoretical & Mathematical Foundations)

### 3.1. Thuyết lượng tử ánh sáng & Photon (Quantum Theory of Light & Photons)
Max Planck đề xuất rằng năng lượng bức xạ điện từ được phát ra thành các lượng nhỏ gián đoạn gọi là "lượng tử năng lượng" (quanta). Albert Einstein mở rộng lý thuyết này và gọi các hạt lượng tử ánh sáng là *photon*.
Năng lượng của một photon được tính bằng công thức:
$$ E = hf = \frac{hc}{\lambda} $$
Trong đó (Where):
- $E$ là năng lượng của photon (Joules hoặc eV) / Energy of photon.
- $h \approx 6.626 \times 10^{-34} \, \text{J}\cdot\text{s}$ là hằng số Planck / Planck's constant.
- $f$ là tần số của ánh sáng (Hz) / Frequency of light.
- $c \approx 3 \times 10^8 \, \text{m/s}$ là tốc độ ánh sáng trong chân không / Speed of light.
- $\lambda$ là bước sóng của ánh sáng (m) / Wavelength of light.

### 3.2. Hiệu ứng quang điện (Photoelectric Effect)
Hiệu ứng quang điện là hiện tượng electron bị bật ra khỏi bề mặt kim loại khi có ánh sáng chiếu vào. Các electron này được gọi là quang electron (photoelectrons).
**Định luật quang điện thứ nhất**: Ánh sáng kích thích phải có bước sóng $\lambda$ ngắn hơn hoặc bằng một bước sóng giới hạn $\lambda_0$ (giới hạn quang điện) đặc trưng cho từng kim loại. $\lambda \le \lambda_0$.
Phương trình Einstein về hiệu ứng quang điện:
$$ hf = A + K_{max} $$
Trong đó:
- $hf$ là năng lượng của photon chiếu tới.
- $A = \frac{hc}{\lambda_0}$ là công thoát (Work function) - năng lượng tối thiểu để bứt electron ra khỏi kim loại.
- $K_{max} = \frac{1}{2}mv_{max}^2$ là động năng ban đầu cực đại của quang electron.

Khi đặt một điện áp ngược (điện áp hãm $U_h$) để làm cho dòng quang điện triệt tiêu:
$$ K_{max} = e|U_h| $$
(với $e \approx 1.6 \times 10^{-19} \, \text{C}$ là điện tích nguyên tố).

#### Sơ đồ thí nghiệm quang điện (ASCII Diagram of Photoelectric Setup)
```text
           Light (Photon)
             \ \ \
              \ \ \
            +-------+             Anode (A)
  Cathode(K)|       |             +---+
    (Metal) |  ---e-|----->       |   |
            |       |             +---+
            +-------+               |
                |                   |
                |     +---[ V ]---+ |
                |     |   Voltmeter |
                +-----+-------------+
                      |             |
                     ---           (A) Ammeter
                     ___            |
                      |             |
                      +-------------+
                 Variable Power Supply
```

### 3.3. Bước sóng De Broglie (De Broglie Wavelength)
Louis de Broglie đề xuất rằng không chỉ ánh sáng mà vật chất (ví dụ electron, proton) cũng có tính chất sóng, gọi là lưỡng tính sóng hạt (wave-particle duality). Bước sóng của một hạt có động lượng $p$ được tính bằng:
$$ \lambda = \frac{h}{p} = \frac{h}{mv} $$

### 3.4. Mô hình nguyên tử Bohr (Bohr Model of the Atom)
Niels Bohr áp dụng thuyết lượng tử vào cấu trúc nguyên tử. Các tiên đề của Bohr bao gồm:
1. **Tiên đề về trạng thái dừng**: Nguyên tử chỉ tồn tại trong những trạng thái có năng lượng xác định $E_n$. Ở các trạng thái dừng, nguyên tử không bức xạ năng lượng.
2. **Tiên đề về sự bức xạ và hấp thụ năng lượng**: Khi nguyên tử chuyển từ trạng thái năng lượng cao $E_n$ xuống trạng thái năng lượng thấp $E_m$ ($E_n > E_m$), nó phát ra một photon có năng lượng:
$$ hf = E_n - E_m $$
Ngược lại, nếu nguyên tử hấp thụ một photon có năng lượng đúng bằng $E_n - E_m$, nó sẽ chuyển từ $E_m$ lên $E_n$.

Đối với nguyên tử Hydro, mức năng lượng ở trạng thái lượng tử thứ $n$ là:
$$ E_n = -\frac{13.6}{n^2} \, \text{(eV)} $$
Trong đó $n = 1, 2, 3, \dots$ là số lượng tử chính.

### 3.5. Lý thuyết dải năng lượng trong chất rắn (Energy Band Theory of Solids)
Các điện tử trong tinh thể chất rắn bị giới hạn trong những dải năng lượng cho phép, bị ngăn cách bởi các vùng cấm (Band gaps).
- **Vùng hóa trị (Valence Band - VB)**: Dải năng lượng cao nhất bị lấp đầy bởi các electron ở nhiệt độ $0 \, \text{K}$.
- **Vùng dẫn (Conduction Band - CB)**: Dải năng lượng trống nằm trên vùng hóa trị.
- **Vùng cấm (Band Gap - $E_g$)**: Khoảng cách năng lượng giữa đáy vùng dẫn và đỉnh vùng hóa trị. Electron không thể có năng lượng nằm trong vùng cấm.

#### Biểu diễn Vùng cấm (Band Gap ASCII Diagram)
```text
  Energy (E)
    ^
    |      +-------------------------+
    |      |  Conduction Band (CB)   |  (Empty or partially filled)
    |      +-------------------------+
    |                 ^
    |                 | Band Gap (Eg)
    |                 v
    |      +-------------------------+
    |      |    Valence Band (VB)    |  (Completely filled at 0K)
    |      +-------------------------+
    |
    +------------------------------------> Space / Momentum
```
*Đối với vật liệu bán dẫn, một photon có năng lượng $hf \ge E_g$ có thể kích thích một electron từ VB lên CB, tạo ra cặp electron-lỗ trống.*

---

## 4. Thí nghiệm thực hành: Đo hằng số Planck bằng LED (Hands-on Experiment: Measuring Planck's Constant using LEDs)

### 4.1. Nguyên lý (Principle)
Đèn LED phát sáng khi có một dòng điện thuận chạy qua nó. Tại điện áp ngưỡng (Threshold voltage - $V_{th}$), các electron tái hợp với lỗ trống và phát ra photon. Năng lượng của photon phát ra xấp xỉ bằng công của lực điện trường thực hiện lên electron khi nó vượt qua vùng cấm của vật liệu bán dẫn làm LED:
$$ E = h \frac{c}{\lambda} \approx e V_{th} $$
Từ đó, ta có thể tính hằng số Planck:
$$ h = \frac{e V_{th} \lambda}{c} $$
Bằng cách đo $V_{th}$ cho các LED có bước sóng $\lambda$ khác nhau, ta vẽ đồ thị $V_{th}$ theo $\frac{1}{\lambda}$, độ dốc của đồ thị (slope) sẽ bằng $\frac{hc}{e}$.

### 4.2. Các bước tiến hành (Step-by-step Procedure)
1. Lắp mạch điện gồm Nguồn DC điều chỉnh được nối tiếp với biến trở 10k, điện trở bảo vệ 1k, và LED (mắc thuận).
2. Mắc Ampe kế nối tiếp với LED để đo dòng điện $I$.
3. Mắc Vôn kế song song với LED để đo điện áp rơi trên LED $V$.
4. **Đối với từng màu LED (Đỏ, Cam, Vàng, Lục, Lam):**
   - Vặn biến trở để điện áp từ 0V tăng dần.
   - Quan sát LED và Ampe kế. Ghi lại giá trị điện áp $V_{th}$ ngay khi LED vừa bắt đầu phát sáng (hoặc khi dòng điện $I$ vừa vượt qua một giá trị rất nhỏ, ví dụ $0.1 \, \text{mA}$).
   - Ghi lại bước sóng $\lambda$ của LED (ví dụ: Đỏ 650nm, Vàng 590nm, Lục 520nm, Lam 470nm).
5. **Xử lý dữ liệu:**
   - Lập bảng giá trị $(\frac{1}{\lambda}, V_{th})$.
   - Vẽ đồ thị hàm bậc nhất $V_{th} = f(1/\lambda)$.
   - Tính hệ số góc (độ dốc) $k$ của đường chuẩn.
   - Suy ra hằng số Planck thực nghiệm: $h_{exp} = \frac{k \cdot e}{c}$.
   - So sánh với giá trị lý thuyết và tính sai số phần trăm.

---

## 5. Mô phỏng bằng Python (Python Simulation)

Phần này cung cấp mã Python sử dụng thư viện `matplotlib` và `numpy` để mô phỏng hai hiện tượng: Hiệu ứng quang điện và Quang phổ vạch của nguyên tử Hydro.

### 5.1. Mô phỏng dòng quang điện và điện áp hãm (Photoelectric Current vs Stopping Potential)
Đoạn mã dưới đây vẽ đồ thị biểu diễn sự phụ thuộc của dòng quang điện vào điện thế $U$ giữa Anot và Katot với các cường độ sáng và tần số khác nhau.

```python
import numpy as np
import matplotlib.pyplot as plt

def photoelectric_current(U, U_stop, I_sat, alpha=5.0):
    """
    Tính dòng quang điện dựa trên mô hình phi tuyến đơn giản.
    U: Điện áp A-K
    U_stop: Điện áp hãm (âm)
    I_sat: Dòng bão hòa
    alpha: Hệ số hình dáng đường cong
    """
    I = np.zeros_like(U)
    # Nếu U <= U_stop, I = 0
    # Nếu U > U_stop, I tăng dần tới bão hòa I_sat
    mask = U > U_stop
    I[mask] = I_sat * (1.0 - np.exp(-alpha * (U[mask] - U_stop)))
    return I

# Thiết lập dải điện áp U từ -3V đến 5V
U = np.linspace(-3, 5, 500)

# Kịch bản 1: Cùng tần số (cùng U_hãm), khác cường độ sáng
U_stop1 = -1.5 # Vôn
I_sat1_low = 2.0  # mA
I_sat1_high = 4.0 # mA

I1_low = photoelectric_current(U, U_stop1, I_sat1_low)
I1_high = photoelectric_current(U, U_stop1, I_sat1_high)

# Kịch bản 2: Khác tần số f1 < f2 (U_hãm khác nhau), cùng cường độ bão hòa
U_stop2 = -2.5 # Vôn (tần số cao hơn)
I_sat2 = 4.0   # mA

I2 = photoelectric_current(U, U_stop2, I_sat2)

plt.figure(figsize=(10, 6))
plt.plot(U, I1_high, label=r'Cường độ sáng cao, $f_1$ (U$_{hãm}$ = -1.5V)', color='blue')
plt.plot(U, I1_low, label=r'Cường độ sáng thấp, $f_1$ (U$_{hãm}$ = -1.5V)', color='cyan')
plt.plot(U, I2, label=r'Cường độ sáng cao, $f_2 > f_1$ (U$_{hãm}$ = -2.5V)', color='red')

plt.axhline(0, color='black', linewidth=1)
plt.axvline(0, color='black', linewidth=1)
plt.xlabel('Điện áp U_AK (V)', fontsize=12)
plt.ylabel('Dòng quang điện I (mA)', fontsize=12)
plt.title('Đồ thị Dòng quang điện theo Điện áp', fontsize=14)
plt.legend()
plt.grid(True)
plt.xlim([-3, 5])
plt.ylim([-0.5, 5])
plt.show()
```

### 5.2. Trực quan hóa quang phổ vạch của Hydro (Hydrogen Emission Spectrum Line Visualizer)
Mã này tính toán các bước sóng của dãy Balmer (bức xạ ánh sáng nhìn thấy) và hiển thị chúng trên một phổ.

```python
import numpy as np
import matplotlib.pyplot as plt

# Hằng số Rydberg cho Hydro
R_H = 1.097e7 # m^-1
# Dãy Balmer: chuyển mức về n = 2
n_lower = 2
n_upper = np.array([3, 4, 5, 6]) # H-alpha, H-beta, H-gamma, H-delta

# Công thức Rydberg: 1/lambda = R_H * (1/n_lower^2 - 1/n_upper^2)
inv_lambda = R_H * (1/(n_lower**2) - 1/(n_upper**2))
wavelengths = 1 / inv_lambda # mét
wavelengths_nm = wavelengths * 1e9 # nm

line_names = [r'H-$\alpha$', r'H-$\beta$', r'H-$\gamma$', r'H-$\delta$']
# Màu sắc tương ứng ước lượng từ bước sóng
colors = ['red', 'cyan', 'blue', 'violet']

fig, ax = plt.subplots(figsize=(10, 3))
# Vẽ nền tối cho quang phổ
ax.set_facecolor('black')
ax.set_xlim(350, 750)
ax.set_ylim(0, 1)

# Vẽ các vạch quang phổ
for wl, name, col in zip(wavelengths_nm, line_names, colors):
    ax.axvline(wl, color=col, linewidth=3)
    ax.text(wl, 1.05, f'{name}\n{wl:.1f} nm', color='white', 
            ha='center', va='bottom', fontsize=10, 
            bbox=dict(facecolor='black', edgecolor='white', boxstyle='round,pad=0.2'))

ax.set_yticks([])
ax.set_xlabel('Bước sóng (nm)', fontsize=12)
ax.set_title('Quang phổ phát xạ vạch của Hydro (Dãy Balmer)', fontsize=14)
plt.tight_layout()
plt.show()
```

---

## 6. Câu hỏi Thảo luận (Discussion Questions)

**Câu 1 (Q1): Tại sao lý thuyết sóng ánh sáng cổ điển không thể giải thích được sự tồn tại của giới hạn quang điện? (Why can't classical wave theory of light explain the existence of a photoelectric threshold frequency?)**
> **Trả lời (Answer):**
> Theo lý thuyết sóng cổ điển, năng lượng của sóng ánh sáng phụ thuộc vào cường độ (biên độ) chứ không phụ thuộc vào tần số. Nếu ta chiếu ánh sáng có tần số rất thấp (bước sóng dài) nhưng cường độ đủ mạnh trong thời gian đủ dài, năng lượng tích lũy cuối cùng sẽ đủ để bứt electron ra khỏi kim loại. Tuy nhiên, thực nghiệm cho thấy nếu tần số ánh sáng nhỏ hơn giới hạn $f_0$, thì dù cường độ sáng lớn đến đâu và chiếu lâu đến đâu, electron vẫn không bật ra. Thuyết lượng tử giải thích điều này: ánh sáng là hạt (photon), một electron chỉ hấp thụ trọn vẹn MỘT photon. Nếu năng lượng photon $hf$ nhỏ hơn công thoát $A$, electron không thể thoát ra ngoài, bất kể có bao nhiêu photon chiếu vào.

**Câu 2 (Q2): Việc tăng cường độ ánh sáng chiếu vào kim loại (vẫn giữ tần số không đổi $f > f_0$) ảnh hưởng như thế nào đến dòng quang điện bão hòa và động năng cực đại của electron?**
> **Trả lời:**
> - **Dòng bão hòa:** Tăng cường độ ánh sáng nghĩa là tăng số lượng photon chiếu tới kim loại trong một giây. Do đó, số lượng electron bị bật ra trong một giây (quang electron) cũng tăng lên theo tỷ lệ thuận. Dòng quang điện bão hòa $I_{sat}$ sẽ **tăng lên**.
> - **Động năng cực đại:** Động năng cực đại phụ thuộc vào năng lượng của từng photon và công thoát ($K_{max} = hf - A$), không phụ thuộc vào số lượng photon. Do tần số $f$ không đổi, năng lượng một photon không đổi, nên động năng cực đại của electron **không đổi**. Từ đó suy ra điện thế hãm $U_h$ cũng không đổi.

**Câu 3 (Q3): Trong thí nghiệm đo hằng số Planck bằng đèn LED, nếu dùng LED tia cực tím (UV) thay cho LED màu, sai số của phép đo có xu hướng thay đổi như thế nào và tại sao?**
> **Trả lời:**
> Sử dụng LED UV có thể làm tăng sai số do dòng rò và các hiệu ứng phi tuyến tính ở điện áp cao hơn. LED UV có bước sóng rất ngắn, năng lượng photon cao, cần điện áp ngưỡng (threshold voltage) $V_{th}$ cao hơn (thường >3.0V). Ở mức điện áp này, nhiệt độ tiếp giáp P-N tăng nhanh, điện trở bên trong thay đổi, làm điểm "bắt đầu phát sáng" khó xác định chính xác bằng mắt thường hoặc ampe kế cơ bản, dẫn đến sai số cao hơn trong việc lấy mốc $V_{th}$.

**Câu 4 (Q4): So sánh quang phổ liên tục và quang phổ vạch phát xạ. Nguồn gốc sinh ra chúng khác nhau như thế nào?**
> **Trả lời:**
> - **Quang phổ liên tục:** Là dải màu biến thiên liên tục từ đỏ đến tím, không bị đứt quãng. Nguồn gốc sinh ra từ các vật rắn, lỏng, hoặc chất khí áp suất lớn bị nung nóng (ví dụ: dây tóc bóng đèn, Mặt Trời). Quang phổ này chỉ phụ thuộc vào nhiệt độ của nguồn sáng, không phụ thuộc vào thành phần hóa học.
> - **Quang phổ vạch phát xạ:** Là một hệ thống các vạch sáng màu riêng lẻ trên một nền tối. Nguồn gốc sinh ra từ chất khí hay hơi ở áp suất thấp bị kích thích phát sáng bằng nhiệt hoặc điện (ví dụ: đèn tuýp hydro, neon). Đặc điểm là mỗi nguyên tố hóa học có một quang phổ vạch đặc trưng riêng biệt (số lượng vạch, vị trí, độ sáng), dùng để nhận biết nguyên tố đó. Điều này được giải thích bởi sự chuyển dời electron giữa các mức năng lượng rời rạc đặc trưng của nguyên tử.

**Câu 5 (Q5): Khái niệm 'Vùng cấm' (Band gap) trong lý thuyết dải năng lượng có ý nghĩa quyết định như thế nào đối với tính chất dẫn điện của chất dẫn điện, chất cách điện và chất bán dẫn?**
> **Trả lời:**
> - **Chất dẫn điện (Conductors):** Không có vùng cấm hoặc vùng cấm bằng không (vùng dẫn và vùng hóa trị đan xen, chồng lấp lên nhau). Các electron ở vùng hóa trị dễ dàng di chuyển tự do sang vùng dẫn ngay cả ở nhiệt độ phòng, do đó chúng dẫn điện rất tốt.
> - **Chất cách điện (Insulators):** Vùng cấm rất rộng (thường $> 3\, \text{eV}$). Ở điều kiện bình thường, năng lượng nhiệt không đủ để kích thích electron nhảy qua vùng cấm từ VB lên CB. Vùng dẫn hoàn toàn trống rỗng, nên vật liệu không dẫn điện.
> - **Chất bán dẫn (Semiconductors):** Có vùng cấm hẹp (thường $\sim 1\, \text{eV}$, ví dụ Si là $1.1\, \text{eV}$). Ở nhiệt độ 0 tuyệt đối, nó như chất cách điện. Ở nhiệt độ phòng, một số electron nhận đủ năng lượng nhiệt để vượt qua vùng cấm lên CB, tạo ra các cặp e-lỗ trống, khiến nó bắt đầu dẫn điện kém. Khi bị kích thích mạnh bằng ánh sáng (quang dẫn) hoặc nhiệt độ cao, độ dẫn điện tăng đột biến. Tính chất này là nền tảng của toàn bộ vi mạch điện tử.

---

## 7. Bài tập về nhà và Luyện tập (Homework & Practice Problems)

**Bài 1:**
Một bề mặt kim loại Natri (Na) có giới hạn quang điện là $\lambda_0 = 500 \, \text{nm}$. Người ta chiếu vào bề mặt này bức xạ có bước sóng $\lambda = 400 \, \text{nm}$. Biết $h = 6.625 \times 10^{-34} \, \text{J}\cdot\text{s}$, $c = 3 \times 10^8 \, \text{m/s}$, $e = 1.6 \times 10^{-19} \, \text{C}$.
a) Tính công thoát $A$ của Natri theo đơn vị eV.
b) Hiệu ứng quang điện có xảy ra không? Giải thích.
c) Tính động năng ban đầu cực đại của quang electron ra khỏi bề mặt Natri (đơn vị Joules và eV).
d) Tính điện áp hãm $U_h$ cần thiết để triệt tiêu hoàn toàn dòng quang điện.

> **Hướng dẫn giải chi tiết (Step-by-step Solution for Problem 1):**
> **Câu a:**
> Công thoát $A = \frac{hc}{\lambda_0}$
> $A = \frac{6.625 \times 10^{-34} \times 3 \times 10^8}{500 \times 10^{-9}} = \frac{19.875 \times 10^{-26}}{5 \times 10^{-7}} = 3.975 \times 10^{-19} \, \text{J}$
> Đổi ra eV: $A(\text{eV}) = \frac{3.975 \times 10^{-19}}{1.6 \times 10^{-19}} = 2.484 \, \text{eV}$.
>
> **Câu b:**
> Điều kiện để xảy ra quang điện là bước sóng kích thích $\lambda \le \lambda_0$.
> Vì $400 \, \text{nm} < 500 \, \text{nm}$, nên hiệu ứng quang điện **CÓ** xảy ra.
>
> **Câu c:**
> Năng lượng photon chiếu vào:
> $E = \frac{hc}{\lambda} = \frac{19.875 \times 10^{-26}}{400 \times 10^{-9}} = 4.96875 \times 10^{-19} \, \text{J}$
> Theo phương trình Einstein: $E = A + K_{max} \Rightarrow K_{max} = E - A$
> $K_{max} = 4.96875 \times 10^{-19} - 3.975 \times 10^{-19} = 0.99375 \times 10^{-19} \, \text{J}$
> Đổi ra eV: $K_{max} = \frac{0.99375 \times 10^{-19}}{1.6 \times 10^{-19}} \approx 0.621 \, \text{eV}$.
>
> **Câu d:**
> Từ công thức $K_{max} = e|U_h|$
> $|U_h| = \frac{K_{max}}{e} = 0.621 \, \text{V}$
> Vậy điện áp hãm cần đặt vào là $U_h = -0.621 \, \text{V}$.

**Bài 2:**
Trong mô hình nguyên tử Hydro của Bohr, mức năng lượng của các trạng thái dừng được tính bằng công thức $E_n = -\frac{13.6}{n^2} \, (\text{eV})$ với $n \ge 1$.
a) Tính năng lượng của trạng thái cơ bản ($n=1$) và trạng thái kích thích thứ nhất ($n=2$).
b) Khi một electron trong nguyên tử chuyển từ quỹ đạo $n=3$ về quỹ đạo $n=2$, nguyên tử sẽ phát ra một photon có năng lượng bao nhiêu eV?
c) Tính bước sóng của photon phát ra ở câu (b) theo đơn vị nm. Bức xạ này thuộc vùng nào của quang phổ điện từ?

> **Hướng dẫn giải chi tiết (Step-by-step Solution for Problem 2):**
> **Câu a:**
> - Ở trạng thái cơ bản $n=1$: $E_1 = -\frac{13.6}{1^2} = -13.6 \, \text{eV}$.
> - Ở trạng thái kích thích thứ nhất $n=2$: $E_2 = -\frac{13.6}{2^2} = -3.4 \, \text{eV}$.
>
> **Câu b:**
> Năng lượng trạng thái $n=3$: $E_3 = -\frac{13.6}{3^2} = -\frac{13.6}{9} \approx -1.511 \, \text{eV}$.
> Năng lượng photon phát ra khi chuyển từ $n=3$ về $n=2$:
> $E_{photon} = E_3 - E_2 = -1.511 - (-3.4) = 1.889 \, \text{eV}$.
>
> **Câu c:**
> Năng lượng photon theo Joules: $E(\text{J}) = 1.889 \times 1.6 \times 10^{-19} = 3.0224 \times 10^{-19} \, \text{J}$.
> Bước sóng: $\lambda = \frac{hc}{E} = \frac{19.875 \times 10^{-26}}{3.0224 \times 10^{-19}} \approx 6.576 \times 10^{-7} \, \text{m} = 657.6 \, \text{nm}$.
> Sai số nhỏ so với giá trị thực nghiệm của vạch $H-\alpha$ (656.3 nm) do làm tròn $13.6 \, \text{eV}$ và hằng số. Bức xạ này thuộc vùng ánh sáng nhìn thấy (màu đỏ).

**Bài 3:**
Một hạt electron đang chuyển động với vận tốc $v = 10^6 \, \text{m/s}$. Tính bước sóng De Broglie của electron này. Khối lượng electron $m_e = 9.1 \times 10^{-31} \, \text{kg}$.
> **Hướng dẫn giải chi tiết:**
> Động lượng của electron: $p = m_e v = 9.1 \times 10^{-31} \times 10^6 = 9.1 \times 10^{-25} \, \text{kg}\cdot\text{m/s}$.
> Bước sóng De Broglie: $\lambda = \frac{h}{p} = \frac{6.625 \times 10^{-34}}{9.1 \times 10^{-25}} \approx 7.28 \times 10^{-10} \, \text{m} = 0.728 \, \text{nm}$.
> Bước sóng này thuộc dải tia X, thể hiện tính chất sóng của hạt electron ở vi mô.

---

## 8. Tiêu chí đánh giá & Chấm điểm (Assessment Rubric)

Dưới đây là bảng tiêu chí đánh giá cho bài thực hành thí nghiệm đo hằng số Planck bằng đèn LED và bài tập lập trình mô phỏng (Thang điểm 100). / Below is the evaluation rubric for the Planck's constant lab and simulation programming assignment (100-point scale).

| Hạng mục (Category) | Tiêu chí chi tiết (Detailed Criteria) | Điểm tối đa (Max Points) |
|---|---|:---:|
| **1. Kỹ năng thực hành (Lab Skills)** | | **30** |
| - Lắp ráp mạch điện (Circuit Assembly) | Mắc đúng cực nguồn, trở bảo vệ, LED, vôn kế và ampe kế. Mạch gọn gàng, an toàn. | 10 |
| - Tiến trình đo (Measurement Process) | Thao tác cẩn thận, biết cách tinh chỉnh biến trở để tìm đúng ngưỡng $V_{th}$. Đọc số liệu chính xác. | 10 |
| - Ghi chép dữ liệu (Data Recording) | Bảng số liệu rõ ràng, đầy đủ đơn vị. Số liệu phản ánh đúng thực tế khách quan. | 10 |
| **2. Xử lý & Phân tích Dữ liệu (Data Analysis)** | | **35** |
| - Vẽ đồ thị (Graphing) | Đồ thị $V_{th}$ theo $1/\lambda$ vẽ đúng tỷ lệ, có trục tọa độ và đơn vị rõ ràng, có đường xu hướng (trendline). | 10 |
| - Tính toán $h$ (Calculating $h$) | Tính độ dốc đường thẳng chính xác, sử dụng đúng công thức suy ra $h_{exp}$. | 15 |
| - Phân tích sai số (Error Analysis) | So sánh $h_{exp}$ với $h_{theory}$, tính % sai số, chỉ ra ít nhất 2 nguyên nhân gây sai số hợp lý. | 10 |
| **3. Mô phỏng Python (Python Simulation)** | | **25** |
| - Chạy code thành công (Execution) | Code chạy không bị lỗi, hiển thị được 2 đồ thị (Dòng quang điện & Quang phổ). | 10 |
| - Tùy chỉnh (Customization) | Học sinh tự thay đổi thông số $U_h, \lambda, n$ để tạo ra biểu đồ mang tính cá nhân, ghi chú rõ trong code. | 10 |
| - Trình bày (Presentation) | Giải thích ngắn gọn cách biểu đồ liên kết với lý thuyết đã học trong báo cáo. | 5 |
| **4. Thái độ & An toàn (Attitude & Safety)** | | **10** |
| - Tuân thủ an toàn (Safety Compliance) | Tuân thủ tuyệt đối cảnh báo an toàn điện và an toàn ánh sáng (không nhìn thẳng vào nguồn sáng cường độ cao). | 5 |
| - Vệ sinh & Dọn dẹp (Cleanup) | Tháo mạch, cất dọn thiết bị gọn gàng vào hộp/khay sau khi hoàn thành. | 5 |
| **TỔNG CỘNG (TOTAL)** | | **100** |

---

## 9. Tài liệu tham khảo bổ sung (Additional References)
- SGK Vật Lí 12 - Bộ Kết Nối Tri Thức với Cuộc Sống (Chuyên đề 3).
- Đại học Colorado Boulder - Mô phỏng PhET: *Photoelectric Effect*. Sinh viên nên truy cập PhET để chơi thử mô phỏng tương tác giúp củng cố trực giác về bài học.
- Feynman, R. P., Leighton, R. B., & Sands, M. (1965). *The Feynman Lectures on Physics*, Tập 3 (Cơ học lượng tử).
- Tài liệu hướng dẫn sử dụng thư viện `matplotlib` và `numpy` trong Python.

> *"Bất cứ ai không bị sốc bởi lý thuyết lượng tử, thì người đó chưa hiểu gì về nó." (Anyone who is not shocked by quantum theory has not understood it.)* — Niels Bohr.

---
**[End of Document - Week 09]**

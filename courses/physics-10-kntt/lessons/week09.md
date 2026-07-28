# Tuần 9: Khối Lượng Riêng, Áp Suất Chất Lưu & Chất Khí / Week 9: Density, Fluid Pressure & Ideal Gas

## 1. Learning Objectives / Mục tiêu học tập

**Vietnamese (Tiếng Việt):**
- Định nghĩa rõ ràng khối lượng riêng và áp dụng công thức vào các bài toán đo lường thực tế, có chú ý đổi đơn vị.
- Hiểu được khái niệm áp suất, áp suất thủy tĩnh của cột chất lỏng và ứng dụng của nó trong thực tiễn (đập nước, lặn biển).
- Nắm vững định luật Archimedes về lực đẩy nổi và nguyên lý Pascal để giải thích máy thủy lực và phanh đĩa ô tô.
- Tiếp cận mô hình chất khí lý tưởng, nhận biết các thông số trạng thái cơ bản ($p, V, T$).
- Vận dụng Phương trình trạng thái khí lý tưởng để giải các bài toán biến đổi trạng thái (đẳng nhiệt, đẳng tích, đẳng áp).
- Thực hành thao tác khéo léo và đo hệ số căng bề mặt của chất lỏng bằng phương pháp lực xé vòng nhôm.
- Thực hành xác định khối lượng riêng của chất rắn bất kì bằng phương pháp dời chỗ nước trong bình tràn.
- Hiểu và giải thích các hiện tượng thủy động lực học cơ bản, hiện tượng mao dẫn (nước hút lên ống nhỏ, rễ cây hút nước).
- Viết chương trình Python để mô phỏng và vẽ đồ thị sự biến thiên đa dạng các chu trình ($p-V, V-T$) của chất khí.
- Liên hệ tới những ứng dụng kỹ thuật hạng nặng (thủy lực công nghiệp) và nhiệt động lực học trong thiết kế động cơ hơi nước và tủ lạnh.

**English:**
- Clearly define density and apply its formula in practical measurement problems, with strict unit conversions.
- Understand pressure, hydrostatic pressure of fluid columns, and real-world applications (dams, deep-sea diving).
- Master Archimedes' principle on buoyancy and Pascal's principle to explain hydraulic machines and car disc brakes.
- Introduce the Ideal Gas model, identifying basic state parameters ($p, V, T$).
- Apply the Ideal Gas Equation to solve state transition problems (isothermal, isochoric, isobaric processes).
- Practice precise dexterity and measure the surface tension coefficient using the aluminum ring tear-off method.
- Experimentally determine the density of an irregular solid via the water displacement method in a catch-can.
- Understand and explain basic fluid dynamics and capillary action (water rising in fine tubes, plant roots absorbing water).
- Write Python scripts to simulate and graph various thermodynamic cycles ($p-V, V-T$) of gases.
- Relate these concepts to heavy engineering applications (industrial hydraulics) and thermodynamics in steam engines and refrigerators.

## 2. Related Textbook Lessons / Bài học SGK liên quan chi tiết

Chương này bao trùm **Chương VII: Khối Lượng Riêng và Áp Suất Chất Lưu** (SGK Vật lí 10 Kết nối tri thức).
- **SGK KNTT Bài 31: Khối lượng riêng. Áp suất chất lỏng / Density. Fluid pressure.**
  - Giải thích tại sao một khối sắt ném xuống hồ thì chìm nhưng chiếc tàu lớn bằng sắt lại nổi nhẹ nhàng.
  - Xây dựng định luật phân bố áp suất theo chiều sâu $h$ trong lòng chất lỏng đứng yên.
- **SGK KNTT Bài 32: Chất khí lý tưởng / Ideal gas.**
  - Đặc điểm cấu trúc hạt vi mô của chất khí, cách các phân tử chuyển động nhiệt hỗn loạn đập vào thành bình sinh ra áp suất.
  - Các định luật Boyle, Charles, Gay-Lussac và phương trình Clapeyron tổng quát.
- **SGK KNTT Bài 33: Thực hành: Đo hệ số căng bề mặt của chất lỏng / Practice: Surface tension.**
  - Nhấn mạnh tính chất của lực phân tử tại biên giới hai môi trường (Lỏng - Khí).
- **SGK KNTT Bài 34: Khối lượng riêng của chất rắn / Density of solids.**
  - Sử dụng phương pháp dời thể tích (Archimedes đã tìm ra khi tắm) để đo thể tích khối vật liệu không có hình dạng hình học đều.
- **Các phần mở rộng (Đọc thêm):** 
  - Khí cầu khí nóng Montgolfier và ứng dụng phương trình $pV=nRT$ để tính lực nâng lùi.
  - Bệnh giảm áp ở thợ lặn do sủi bọt Nitơ khi áp suất thay đổi đột ngột.

## 3. Lab Equipment & Tools / Dụng cụ và thiết bị thực hành

| Dụng cụ (VI) | Equipment (EN) | Giá dự kiến (VND) | Nơi mua / Availability | Ghi chú / Notes |
|---|---|---|---|---|
| Lực kế lò xo độ nhạy cao| Precision Spring Scale| 600,000 | Cty thiết bị GD | Dải đo 1N hoặc 0.1N để đo lực kéo cực nhỏ làm đứt màng xà phòng. |
| Vòng nhôm nguyên chất | Aluminum Ring | 50,000 | Xưởng cơ khí trường | Bề mặt phẳng, mép ngoài và trong được mài sắc để vát lớp tiếp xúc mỏng nhất. |
| Cốc thủy tinh chịu nhiệt| Borosilicate Beaker | 80,000 | Cửa hàng hóa chất | Dung tích 250ml hoặc 500ml, có mỏ rót và vạch chia độ. |
| Hóa chất / Nước xà phòng| Soap / Surfactant | Tự chuẩn bị | Siêu thị tạp hóa | Dùng để làm giảm sức căng bề mặt của nước tinh khiết. |
| Cân tiểu ly điện tử | Digital Precision Scale| 300,000 | Shopee/Lazada | Độ chính xác lên đến 0.01g, rất quan trọng để cân vòng nhôm mỏng. |
| Bộ khối kim loại mẫu | Standard Metal Blocks| 150,000 | Đồ dùng học sinh | Khối đồng, nhôm, sắt có cùng thể tích nhưng khối lượng khác biệt. |
| Bình tràn | Overflow Can | 80,000 | Cửa hàng thiết bị GD | Có vòi rót nước trào ra khi nhúng vật chìm xuống, dùng đo thể tích $V$. |
| Áp kế chất lỏng chữ U | U-tube Manometer | 200,000 | Cty thiết bị GD | Để đo trực quan chênh lệch áp suất dựa trên chênh lệch mực chất lỏng (nước màu). |
| Bơm tiêm lớn, ống nối | Large Syringe & Tubing| 50,000 | Nhà thuốc | Khảo sát luật Boyle: bịt đầu ống tiêm rồi ép piston đo biến thiên Thể tích và Áp suất. |

## 4. Theory Explanations / Lý thuyết và Công thức chi tiết

### 4.1. Khối lượng riêng (Density)
- **Khối lượng riêng:** Đại lượng đặc trưng cho tính chất dày đặc của vật liệu, cho biết khối lượng của một đơn vị thể tích vật chất đó.
  - Công thức: 
    $$ \rho = \frac{m}{V} $$
  - Đơn vị SI: $kg/m^3$. Các đơn vị thường dùng khác: $g/cm^3$ hoặc $kg/lít$. Chuyển đổi: $1 \text{ g/cm}^3 = 1000 \text{ kg/m}^3$.
  - Mật độ nước tinh khiết ở $4^\circ C$ là $\approx 1000 \text{ kg/m}^3$.
  - Khối lượng riêng khác Trọng lượng riêng ($d = \rho \cdot g$).

### 4.2. Áp suất chất lưu (Fluid Pressure)
- **Áp suất nói chung:** Độ lớn của áp lực (lực vuông góc) trên một đơn vị diện tích bị ép.
  - $$ p = \frac{F}{S} $$
  - Đơn vị: Pascal (Pa). $1 \text{ Pa} = 1 \text{ N/m}^2$. Các đơn vị khác: Atm, Bar, mmHg.
- **Áp suất thủy tĩnh (Hydrostatic Pressure):** Tại một độ sâu $h$ trong lòng chất lỏng, do trọng lượng của cột chất lỏng đè lên, áp suất được tính bằng:
  - $$ p = p_0 + \rho g h $$
  - $p_0$: Áp suất khí quyển trên mặt thoáng chất lỏng ($\approx 1.013 \times 10^5 \text{ Pa}$).
  - $h$: Độ sâu tính từ mặt thoáng chất lỏng xuống đáy.
  - Nguyên lý các bình thông nhau: Ở cùng độ sâu tĩnh, áp suất tại mọi điểm bằng nhau, mực chất lỏng cân bằng phẳng ngang.
- **Nguyên lý Pascal:** Áp suất tác dụng lên một chất lỏng kín được truyền nguyên vẹn đi theo mọi hướng. (Ứng dụng: Máy nén thủy lực dùng piston $S_1, S_2 \Rightarrow \frac{F_1}{S_1} = \frac{F_2}{S_2}$).

### 4.3. Lực đẩy Archimedes (Buoyancy)
- Mọi vật nhúng trong chất lỏng đều chịu một lực nâng từ dưới lên.
  - $$ F_A = \rho_{\text{chất lỏng}} \cdot g \cdot V_{\text{vật chìm}} $$
  - Chú ý: Lực đẩy Archimedes chính bằng trọng lượng của phần chất lỏng bị vật dời chỗ.
- Điều kiện nổi: Khi $P = F_A \Rightarrow \rho_{vật} \cdot V_{vật} = \rho_{lỏng} \cdot V_{chìm}$. Nếu vật nhẹ hơn chất lỏng ($\rho_v < \rho_l$), vật sẽ nổi một phần trên mặt thoáng.

### 4.4. Phương trình Trạng thái Khí lý tưởng (Ideal Gas Law)
- Mô hình khí lý tưởng coi phân tử nhỏ như chất điểm, các va chạm vào thành bình hoàn toàn đàn hồi.
- Bốn thông số trạng thái: Áp suất $p$, Thể tích $V$, Nhiệt độ tuyệt đối $T$ (Kelvin), Số mol khí $n$.
- **Phương trình tổng quát (Clapeyron-Mendeleev):**
  - $$ pV = nRT $$
  - $R \approx 8.31 \text{ J/(mol}\cdot\text{K)}$ là hằng số khí lý tưởng.
- **Định luật các quá trình đặc biệt (Với khối lượng khí không đổi):**
  - **Đẳng nhiệt (Boyle's Law - $T=\text{const}$):** $pV = \text{const}$ (Tỉ lệ nghịch).
  - **Đẳng tích (Charles's Law - $V=\text{const}$):** $\frac{p}{T} = \text{const}$ (Tỉ lệ thuận).
  - **Đẳng áp (Gay-Lussac - $p=\text{const}$):** $\frac{V}{T} = \text{const}$ (Tỉ lệ thuận).

### 4.5. Lực căng bề mặt (Surface Tension)
- Phân tử nằm trên bề mặt thoáng bị các phân tử bên trong kéo xuống, tạo thành một màng cao su đàn hồi bao bọc lấy chất lỏng.
  - Công thức lực kéo: $$ F = \sigma \cdot l $$
  - $\sigma$: Hệ số căng bề mặt (N/m). Phụ thuộc bản chất chất lỏng và nhiệt độ (nhiệt độ tăng $\rightarrow \sigma$ giảm).
  - $l$: Chu vi đường giới hạn mặt thoáng tiếp xúc.

### 4.6. Worked Numerical Examples / Bài toán ví dụ (Giải chi tiết)

**Ví dụ 1 (Example 1): Bài toán Tàu ngầm & Thủy lực học**
Một cánh cửa hình chữ nhật của trạm lặn sâu có kích thước chiều ngang $a = 0.5\text{ m}$, chiều cao $b = 1.0\text{ m}$. Tâm của cánh cửa nằm ở độ sâu $H = 200\text{ m}$ dưới mực nước biển. Khối lượng riêng nước biển là $\rho = 1030\text{ kg/m}^3$. Áp suất khí quyển $p_0 = 1 \text{ atm} \approx 10^5\text{ Pa}$. Áp suất bên trong trạm lặn được giữ bằng với áp suất khí quyển $p_{trong} = p_0$. Lấy $g = 9.8\text{ m/s}^2$.
Yêu cầu: Tính tổng áp lực nước ép vào phía ngoài cánh cửa. Tại sao người ta phải thiết kế cửa mở ra ngoài hay mở vào trong?

**Giải (Solution):**
1. Xác định chênh lệch áp suất hai bên cửa:
Áp suất phía ngoài (ngoài biển) tại tâm cửa (do cửa nhỏ so với độ sâu nên coi áp suất phân bố đều bằng áp suất tại tâm $H$):
$$ p_{\text{ngoài}} = p_0 + \rho g H $$
Áp suất phía trong trạm lặn:
$$ p_{\text{trong}} = p_0 $$
Độ chênh áp ép lên mặt cửa:
$$ \Delta p = p_{\text{ngoài}} - p_{\text{trong}} = (p_0 + \rho g H) - p_0 = \rho g H $$
Thay số tính $\Delta p$:
$$ \Delta p = 1030 \cdot 9.8 \cdot 200 = 2,018,800 \text{ (Pa)} \approx 20\text{ atm} $$
2. Diện tích cánh cửa:
$$ S = a \cdot b = 0.5 \cdot 1.0 = 0.5 \text{ (m}^2) $$
3. Tổng áp lực tác dụng lên cửa:
$$ F = \Delta p \cdot S = 2018800 \cdot 0.5 = 1,009,400 \text{ (N)} $$
*Phân tích kỹ thuật:* Lực 1 triệu Newton tương đương sức nặng của một khối đá 100 tấn ép lên cánh cửa tí hon! Cánh cửa này BẮT BUỘC phải thiết kế nẹp gờ khung cửa ở phía trong, tức là cửa phải "mở vào trong trạm", khi đó nước biển sẽ ép cánh cửa dính chặt, tự đóng kín hoàn hảo vào khung ron cao su. Nếu thiết kế cửa mở ra ngoài, chỉ cần một bản lề hỏng, áp suất 100 tấn sẽ thổi tung cửa vào trong, phá hủy trạm.

**Ví dụ 2 (Example 2): Quá trình đẳng áp khối khí (Khí cầu)**
Một quả bóng thám không bơm chứa 2 mol khí Hê-li ($He$) ở mặt đất có áp suất $p_1 = 1\text{ atm}$, nhiệt độ $T_1 = 300\text{ K}$. Khi lên đến độ cao nhất định, để duy trì áp suất $p_2 = 1\text{ atm}$ (do bóng được nung nóng bên trong), thể tích của bóng tăng lên gấp 1.5 lần ($V_2 = 1.5 V_1$).
a) Tính nhiệt độ $T_2$ của khí trong bóng lúc này (theo thang Celsius).
b) Thể tích ban đầu $V_1$ là bao nhiêu? ($R = 0.082 \text{ atm}\cdot\text{lít/(mol}\cdot\text{K)}$).

**Giải (Solution):**
a) Áp suất không đổi ($p_1 = p_2 = 1\text{ atm}$), ta áp dụng định luật Charles cho quá trình đẳng áp:
$$ \frac{V_1}{T_1} = \frac{V_2}{T_2} $$
Suy ra:
$$ T_2 = T_1 \cdot \frac{V_2}{V_1} = 300 \cdot \frac{1.5 V_1}{V_1} = 300 \cdot 1.5 = 450 \text{ (K)} $$
Đổi ra thang nhiệt độ bách phân (Celsius):
$$ t_2 = T_2 - 273.15 = 450 - 273.15 = 176.85 ^\circ\text{C} $$
b) Áp dụng phương trình trạng thái ở trạng thái 1:
$$ p_1 V_1 = nRT_1 $$
$$ 1 \cdot V_1 = 2 \cdot 0.082 \cdot 300 $$
$$ V_1 = 49.2 \text{ (lít)} $$

## 5. Diagrams and Models / Sơ đồ và Mô hình

Sơ đồ đồ thị các quá trình của khí lý tưởng:
```ascii
 p (Áp suất)
 ^
 |             (3) Đẳng áp
 +--------------------->  (p = const)
 |             \  (T2 > T1)
 | (1) Đẳng     \ 
 |     tích      \ (2) Đẳng nhiệt (Boyle) T1
 |                \ (p * V = const) 
 |                 \
 +-------------------------> V (Thể tích)
```

Sơ đồ thí nghiệm Máy Thủy lực (Pascal's Principle):
```ascii
  Lực ấn tay (Nhỏ)                        Lực nâng ô tô (Lớn)
  F1 = 100N                               F2 = 10,000N
    |                                        ^
    v                                        |
  +--+                                   +--------+
  |S1| (Tiết diện nhỏ)                   |   S2   | (Tiết diện khổng lồ)
  +--+-----------------------------------+--------+
  |    Chất lỏng chịu áp lực p truyền đi nguyên vẹn   |
  +-----------------------------------------------+
     p = F1/S1            ==             p = F2/S2
```

## 6. Step-by-step Hands-on Experiments / Thực hành mở rộng

### 6.1. Mục đích / Purpose
1. Đo khối lượng riêng của các vật liệu không đều bằng phương pháp dời nước.
2. Đo hệ số căng bề mặt $\sigma$ của nước sạch và nước xà phòng, quan sát hiện tượng "đứt màng".

### 6.2. Các bước tiến hành / Procedures
**Phần 1: Đo khối lượng riêng chất rắn (Archimedes Method)**
1. Cân khối kim loại móp méo trên cân điện tử, ghi lại khối lượng $m = 125.5\text{ g}$.
2. Đặt bình tràn thẳng đứng, hứng một cốc chia vạch (beaker) loại 100ml ngay dưới mỏ tràn.
3. Rót nước từ từ vào bình tràn cho tới khi nước bắt đầu rỉ nhỏ giọt qua mỏ tràn. Đợi nước ngừng chảy hoàn toàn. Bỏ cốc nước thừa đi, đặt cốc chia vạch rỗng và khô (đã cân khối lượng cốc $m_{cốc}$) xuống dưới vòi tràn.
4. Buộc khối kim loại bằng sợi chỉ mảnh, nhẹ nhàng thả chìm hoàn toàn vào bình tràn. Không để vật chạm đáy. Nước dâng lên sẽ chảy trào qua mỏ xuống cốc chia vạch.
5. Khi nước ngừng trào, lấy cốc chia vạch đem cân khối lượng để được $m_{cốc+nước}$. Trừ đi $m_{cốc}$ thu được khối lượng nước trào ra $m_{nước}$.
6. Tính thể tích vật: $V_{vật} = V_{nước} = \frac{m_{nước}}{\rho_{nước}}$ (với $\rho_{nước} = 1\text{ g/cm}^3$).
7. Khối lượng riêng vật: $\rho_{vật} = \frac{m}{V_{vật}}$.

**Phần 2: Lực căng bề mặt vòng nhôm**
1. Móc vòng nhôm xuyến (đường kính ngoài $D = 40\text{mm}$, trong $d = 38\text{mm}$) vào lực kế lò xo kỹ thuật số cực nhạy (giới hạn đo 0.1 N). Đọc và trừ bì trọng lượng $P_0$ của vòng khi treo tự do trong không khí.
2. Nâng một cốc chứa nước cất lên từ phía dưới sao cho mặt nước vừa vặn chạm vào đáy vòng nhôm (nước dính ướt vòng).
3. Rất nhẹ nhàng và cực kỳ chậm, từ từ hạ thấp cốc nước (hoặc kéo lực kế lên nhờ bộ quay ren tinh chỉnh).
4. Quan sát kĩ mặt nước bị kéo dâng lên theo vòng nhôm thành một màng trụ mỏng. Đọc sự tăng đột biến của số chỉ lực kế. Lực kế sẽ đạt giá trị max $F_{max}$ ngay đúng tíc tắc màng nước bị xé rách đứt lìa khỏi vòng nhôm.
5. Pha thêm vài giọt xà phòng rửa chén vào cốc nước, khuấy nhẹ không sủi bọt, và lặp lại thao tác đo.

### 6.3. Bảng xử lý số liệu thí nghiệm / Data Table
*Kết quả thí nghiệm lực căng bề mặt:* Trọng lượng vòng $P_0 = 0.050\text{ N}$.
Chu vi vòng nhôm (cả mặt trong và ngoài vòng xuyến): $l = \pi(D + d) = 3.14 \times (0.040 + 0.038) = 0.245\text{ m}$.

| Loại chất lỏng | $F_{max}$ Đo được 1 (N) | $F_{max}$ 2 (N) | $F_{max}$ 3 (N) | Trung bình $F_{max}$ (N)| Lực căng $F_c = F_{max} - P_0$ | Hệ số $\sigma = \frac{F_c}{l}$ (N/m) |
|---|---|---|---|---|---|---|
| Nước cất ($25^\circ C$) | 0.0678 | 0.0681 | 0.0675 | 0.0678 | 0.0178 | $\frac{0.0178}{0.245} \approx 0.0726$ |
| Nước xà phòng | 0.0592 | 0.0595 | 0.0598 | 0.0595 | 0.0095 | $\frac{0.0095}{0.245} \approx 0.0387$ |

*Nhận xét:* Hệ số căng bề mặt chuẩn của nước cất là $\approx 0.0728 \text{ N/m}$. Phép đo cực kỳ chính xác. Khi thêm chất hoạt động bề mặt (xà phòng), các phân tử xà phòng chèn vào làm đứt gãy liên kết hydro mạnh mẽ giữa các phân tử nước, kéo hệ số $\sigma$ tụt thảm hại (chỉ còn một nửa). Đó là lý do xà phòng giúp nước len lỏi sâu vào các sợi vải nhỏ bé để tẩy rửa.

## 7. Python Lab / Thực hành Python chi tiết

Mô phỏng 3 chu trình nhiệt động lực học (Đẳng nhiệt, Đẳng tích, Đẳng áp) trên cùng một đồ thị $p-V$, vẽ đa giác khép kín các chu trình Carnot đơn giản.

```python
"""
Mô phỏng Đồ thị p-V của Khí Lý Tưởng - Các biến đổi trạng thái.
Ideal Gas p-V Diagram Simulation - State Transformations.
"""
import numpy as np
import matplotlib.pyplot as plt

def simulate_thermodynamic_cycles():
    # 1. Định nghĩa các hằng số và hàm (Constants and Functions)
    nR = 2.0  # Chọn tích số n*R = 2.0 cho bài toán mô phỏng (Đơn vị ảo)
    
    # 2. Xây dựng các đường đẳng nhiệt (Isotherms - Boyle's Law: p = nRT/V)
    # Nhiệt độ T1 thấp, T2 cao
    T1 = 300.0  # Kelvin
    T2 = 600.0
    
    # Mảng thể tích chung để vẽ đường cong
    V_curve = np.linspace(1, 10, 200)
    P_iso_T1 = nR * T1 / V_curve
    P_iso_T2 = nR * T2 / V_curve
    
    # 3. Xây dựng một Chu trình khép kín (A thermodynamic cycle A -> B -> C -> A)
    # Điểm A: trên đường T1, Thể tích V_A = 2
    V_A = 2.0
    P_A = nR * T1 / V_A  # = 2*300/2 = 300
    
    # Quá trình 1 (A -> B): Đẳng áp giãn nở (Isobaric expansion p = const)
    P_B = P_A
    # Mở rộng cho đến khi cắt đường T2
    V_B = nR * T2 / P_B  # = 2*600/300 = 4.0
    
    # Quá trình 2 (B -> C): Đẳng tích làm nguội (Isochoric cooling V = const)
    V_C = V_B
    # Làm nguội quay lại nhiệt độ T1
    P_C = nR * T1 / V_C  # = 2*300/4.0 = 150.0
    
    # Quá trình 3 (C -> A): Nén Đẳng nhiệt (Isothermal compression T = const)
    # (Đường cong theo P = nRT1/V từ V_C về V_A)
    V_CA_path = np.linspace(V_C, V_A, 50)
    P_CA_path = nR * T1 / V_CA_path
    
    # 4. Trực quan hóa dữ liệu bằng Matplotlib (Plotting)
    plt.figure(figsize=(10, 7))
    
    # Vẽ các đường nền đẳng nhiệt (Background Isotherms)
    plt.plot(V_curve, P_iso_T1, 'b--', alpha=0.3, label=f'Đường đẳng nhiệt $T_1 = {T1}K$')
    plt.plot(V_curve, P_iso_T2, 'r--', alpha=0.3, label=f'Đường đẳng nhiệt $T_2 = {T2}K$')
    
    # Vẽ Chu trình A -> B -> C -> A
    # A -> B (Đẳng áp)
    plt.plot([V_A, V_B], [P_A, P_B], 'r-', linewidth=3, label='A->B: Đẳng áp giãn nở')
    # B -> C (Đẳng tích)
    plt.plot([V_B, V_C], [P_B, P_C], 'g-', linewidth=3, label='B->C: Đẳng tích làm nguội')
    # C -> A (Đẳng nhiệt)
    plt.plot(V_CA_path, P_CA_path, 'b-', linewidth=3, label='C->A: Đẳng nhiệt nén')
    
    # Đánh dấu các đỉnh (Nodes)
    plt.plot([V_A, V_B, V_C], [P_A, P_B, P_C], 'ko', markersize=8)
    plt.annotate('A (2, 300)', xy=(V_A, P_A), xytext=(V_A-0.5, P_A+20), fontsize=12, fontweight='bold')
    plt.annotate('B (4, 300)', xy=(V_B, P_B), xytext=(V_B+0.2, P_B+20), fontsize=12, fontweight='bold')
    plt.annotate('C (4, 150)', xy=(V_C, P_C), xytext=(V_C+0.2, P_C-10), fontsize=12, fontweight='bold')
    
    # Thêm text chú thích Công của chu trình (Work done is the area inside the cycle)
    plt.fill_between(V_CA_path, P_CA_path, P_A, color='orange', alpha=0.2, label='Công sinh ra (Work Area)')
    
    # Định dạng đồ thị
    plt.title('Chu trình Nhiệt động lực học trên Đồ thị p-V\n(Thermodynamic Cycle on p-V Diagram)', fontsize=15)
    plt.xlabel('Thể tích V (Lít)', fontsize=12)
    plt.ylabel('Áp suất p (kPa)', fontsize=12)
    plt.xlim(0, 7)
    plt.ylim(0, 400)
    plt.grid(True, linestyle=':', alpha=0.7)
    plt.legend(loc='upper right', fontsize=11)
    
    plt.tight_layout()
    plt.savefig('pv_cycle_simulation.png', dpi=300)
    print("Mô phỏng đồ thị p-V thành công. Lưu thành 'pv_cycle_simulation.png'")

if __name__ == "__main__":
    simulate_thermodynamic_cycles()
```

## 8. Safety Warnings / Cảnh báo an toàn ⚠️

**VI:**
1. Khi thao tác với Bình tràn và nước, đặc biệt với các khối kim loại nặng, cẩn thận kẻo tuột chỉ làm khối sắt rơi rầm xuống đáy cốc thủy tinh gây nứt vỡ. Nước tràn kết hợp với miểng chai thủy tinh là cực kỳ nguy hiểm cho tay.
2. Xà phòng rơi vãi trên mặt sàn nhà/bàn thao tác rất dễ trơn trượt. Sinh viên phải chuẩn bị sẵn khăn lau khô.
3. Khi khảo sát phương trình khí lý tưởng, nếu dùng nguồn nhiệt (bếp điện, nước sôi) để tăng nhiệt độ của khí trong bình thủy tinh, TUYỆT ĐỐI không được bịt kín hoàn toàn nắp bình nếu thủy tinh không phải loại chịu áp. Sự giãn nở nhiệt của khí có thể làm nổ tung bình thủy tinh (Đẳng tích làm áp suất tăng vọt). Luôn đeo kính bảo hộ.
4. Tránh sử dụng nhiệt kế thủy ngân cổ điển vì độc tính nếu vỡ. Sử dụng nhiệt kế điện tử hoặc cồn màu.

**EN:**
1. When handling the Overflow Can and heavy metal blocks, be extremely careful not to drop the mass. A heavy block striking the bottom of a glass beaker will shatter it, mixing water with sharp glass shards—a severe cut hazard.
2. Soap solution spills on floors or benches create extreme slipping hazards. Have dry towels ready for immediate cleanup.
3. When investigating ideal gas laws using a heat source (hot plate, boiling water) to heat gas in a glass flask, NEVER completely seal the flask unless it is rated for high pressure. Thermal expansion of gas (Isochoric pressure rise) can violently explode standard glass. Always wear safety goggles.
4. Avoid using classic mercury thermometers due to toxic vapor if broken. Use digital or red-alcohol thermometers instead.

## 9. Discussion Questions / Câu hỏi thảo luận chuyên sâu

1. **Question 1:** Dựa trên nguyên lý Lực đẩy Archimedes, tại sao một quả bóng bay hydro/heli khi bay lên cao đến một lúc nào đó nó sẽ không bay lên nữa, lơ lửng, và cuối cùng lại có thể nổ tung?
   - *Gợi ý (Hint):* Càng lên cao, áp suất khí quyển giảm dần, mật độ khối lượng riêng của không khí $\rho_{kk}$ loãng đi. Lực đẩy $F_A = \rho_{kk} g V_{bóng}$ giảm dần. Khi $F_A = P_{bóng}$, nó dừng lại. Trong lúc đó, do áp suất môi trường giảm, khí Heli bên trong nới rộng thể tích theo định luật Boyle để cân bằng áp, bơm căng thành vỏ bóng cao su đến mức xé rách nó nổ tung.

2. **Question 2:** Nếu bạn vô tình làm rơi một cây kim khâu bằng thép lên mặt nước phẳng lặng, đôi khi kim có thể nổi. Nhưng nếu bạn nhỏ một giọt nước rửa chén vào gần đó, kim chìm ngay lập tức. Hãy giải thích.
   - *Gợi ý (Hint):* Sắt nặng hơn nước nên về lực Archimedes là kim chìm. Nhưng lực căng bề mặt màng nước đã võng xuống, cung cấp một lực đàn hồi hướng lên đỡ lấy thân kim. Khi nhỏ xà phòng, chất hoạt động bề mặt (Surfactant) làm giảm mạnh sức căng bề mặt $\sigma$ của nước, màng nước yếu đi bị đứt, và cây kim chìm.

3. **Question 3:** Thợ lặn chuyên nghiệp thường bị chứng "Bệnh giảm áp" (Decompression sickness - The Bends) nếu họ bơi từ đáy biển sâu ngoi lên mặt nước quá nhanh. Cơ chế nhiệt động lực học đằng sau là gì?
   - *Gợi ý (Hint):* Dưới áp suất thủy tĩnh cao của đáy biển, khí Nitơ trong bình lặn hòa tan mạnh vào máu thợ lặn (Định luật Henry). Nếu ngoi lên quá nhanh, áp suất giảm đột ngột (giống bật nắp lon Coca Cola), Nitơ trong máu không thoát kịp qua phổi mà sủi thành các bọt khí nhỏ li ti ngay trong thành mạch máu, làm kẹt tĩnh mạch, đau khớp, đột quỵ não gây tử vong.

4. **Question 4:** Giải thích nghịch lý thủy tĩnh: Ba bình chứa nước A, B, C có hình dạng hoàn toàn khác nhau (đáy rộng, phễu nhọn, uốn éo), nhưng đều có cùng diện tích đáy $S$ và đổ nước cùng đến độ cao $h$. Tại sao lực ép của nước lên đáy cả 3 bình đều bẳng nhau dù lượng nước (khối lượng) đổ vào 3 bình là khác nhau?
   - *Gợi ý (Hint):* Áp suất thủy tĩnh tại đáy chỉ phụ thuộc độ cao $h$ ($p = p_0 + \rho g h$) chứ không phụ thuộc hình dáng cột nước. Vì diện tích đáy bằng nhau, lực $F = p \cdot S$ là hoàn toàn bằng nhau. Trọng lượng dư/thiếu của nước trong các bình hình thuôn/phễu thực chất đã bị phản lực của các thành bình vát nghiêng gánh đỡ mất.

5. **Question 5:** Máy bơm nước ly tâm hoạt động dựa trên nguyên lý gì, và tại sao nó không thể tự hút nước từ độ sâu lớn hơn $10.33\text{ mét}$ ở điều kiện tiêu chuẩn dù máy bơm có công suất động cơ vô hạn?
   - *Gợi ý (Hint):* Máy bơm tạo ra khoảng chân không trong ống hút. Áp suất khí quyển ép mặt nước ngoài giếng đẩy cột nước chui lên ống. Trị số $1\text{ atm}$ chỉ đỡ được tối đa một cột nước cao $h = \frac{p}{\rho g} = \frac{101325}{1000 \cdot 9.8} \approx 10.33\text{ m}$. Nếu ống dài hơn 10.33m, áp suất khí quyển vô lực, trên đỉnh ống hình thành khoảng chân không tuyệt đối (Cavitation), nước không lên nổi.

## 10. Homework & Practice Problems / Bài tập về nhà

**Bài 1 (Khối lượng riêng hợp kim):** Một thợ vàng được yêu cầu pha chế $2\text{ kg}$ hợp kim Vàng và Đồng. Biết khối lượng riêng của vàng nguyên chất là $19.3\text{ g/cm}^3$, của đồng là $8.9\text{ g/cm}^3$. Đo lường cho thấy thỏi hợp kim đúc ra có thể tích thực tế là $150\text{ cm}^3$. (Giả sử thể tích pha trộn bằng tổng thể tích thành phần). 
Hỏi trong thỏi hợp kim này có bao nhiêu gam vàng và bao nhiêu gam đồng?

**Bài 2 (Thủy lực học Pascal):** Một ghế ngồi nha sĩ (sử dụng bơm thủy lực) có một piston nâng bệnh nhân và ghế với tổng trọng lượng $1200\text{ N}$. Diện tích của piston nâng là $0.08\text{ m}^2$. Để đạp chân nâng chiếc ghế này lên, nha sĩ tác dụng một lực vào piston đẩy có diện tích $0.002\text{ m}^2$.
a) Tính lực tối thiểu nha sĩ phải dùng chân đạp lên piston đẩy.
b) Nếu nha sĩ đạp piston đẩy đi xuống một đoạn $10\text{ cm}$, thì ghế bệnh nhân được nâng lên một đoạn bao nhiêu? (Chú ý tính bảo toàn thể tích chất lỏng không chịu nén $S_1 \cdot h_1 = S_2 \cdot h_2$).

**Bài 3 (Mao dẫn trong ống thủy tinh):** Một ống mao dẫn bằng thủy tinh sạch có đường kính bên trong $d = 0.6\text{ mm}$ được cắm thẳng đứng vào một cốc nước. Biết hệ số căng bề mặt của nước là $\sigma = 0.073\text{ N/m}$, khối lượng riêng của nước $1000\text{ kg/m}^3$, gia tốc $g = 9.8\text{ m/s}^2$. 
Tính độ cao mực nước dâng lên bên trong ống mao dẫn (Cho góc dính ướt $\theta = 0^\circ$). *Công thức gợi ý: $h = \frac{4\sigma}{\rho g d}$*.

**Bài 4 (Phương trình khí lý tưởng đẳng áp):** Xilanh nằm ngang có một piston nhẹ không ma sát chứa khí bị giam. Khối khí ban đầu có nhiệt độ $27^\circ C$ và chiếm thể tích $2.5\text{ L}$. Hơ nóng xilanh bằng đèn cồn sao cho khí dãn nở đẳng áp (do piston tự do di chuyển cân bằng áp suất ngoài) cho đến khi thể tích khí lên tới $4.0\text{ L}$.
a) Tính nhiệt độ mới của khối khí.
b) Dùng thuyết động học phân tử giải thích tại sao khi nung nóng, muốn áp suất không đổi thì thể tích phải tăng.

**Bài 5 (Nâng cao Python):** Cải tiến mã nguồn mô phỏng đồ thị (Section 7) bằng cách yêu cầu người dùng (`input()`) nhập các giá trị nhiệt độ $T_1, T_2$ bất kỳ và số lượng mol $n$. In ra màn hình giá trị Công sinh ra của toàn bộ chu trình Carnot khép kín bằng cách tính diện tích tích phân bằng hàm thư viện `scipy.integrate.trapezoid` hoặc thuật toán xấp xỉ.

## 11. Assessment Rubric / Bảng đánh giá Tổng hợp

| Tiêu chí (Criteria) | Xuất sắc (90-100) / Excellent | Khá (70-89) / Good | Đạt (50-69) / Satisfactory | Cần cố gắng (<50) / Needs Improvement |
|---|---|---|---|---|
| **Hiểu lý thuyết (Theory Knowledge)** | Nắm rất chắc khái niệm áp suất thủy tĩnh và khí lý tưởng. Đổi đơn vị (Pa, atm, cm^3) không sai sót. Giải hệ PT hợp kim trơn tru. | Hiểu và áp dụng đúng định luật Boyle, Charles. Làm bài thủy tĩnh đúng. Đôi khi quên cộng 273 để đổi K. | Cố gắng áp dụng công thức nhưng hay lộn ngược (v.d. $V/T$ thành $T/V$). Khó khăn ở tư duy nghịch lý thủy tĩnh. | Mất gốc hoàn toàn. Không hiểu sự khác biệt khối lượng riêng và trọng lượng. Đổi sai đơn vị trầm trọng. |
| **Kỹ năng Lab (Lab Skills)** | Thao tác kéo vòng nhôm tinh tế đỉnh cao. Dùng cân tiểu ly khéo léo. Cực kì cẩn thận với đồ thủy tinh. | Thao tác đo tốt, quan sát được khoảnh khắc đứt màng xà phòng. Lấy số liệu bình tràn hơi đổ tháo. | Thao tác vội vàng, giật lực kế mạnh làm đứt màng mà không kịp đọc số. Sai số to. | Làm đổ cốc nước ngập bàn, làm rơi kim loại phá vỡ ống thủy tinh, bị trừ hết điểm. |
| **Báo cáo & Xử lý số liệu (Data & Report)** | Bảng số liệu chi tiết. Tính sai số truyền qua tinh xảo. Đưa ra được kết luận vật lý thú vị từ thực nghiệm. | Viết báo cáo rõ ràng, trung thực với số liệu, có đồ thị $F$ dao động. Phân tích kết quả logic. | Viết báo cáo cẩu thả. Ghi số liệu không đơn vị. Đồ thị vẽ tay nghệch ngoạc. | Không có số liệu cá nhân, gian lận chép số liệu từ nhóm bạn để nộp. |
| **Kỹ năng lập trình (Python Skills)** | Vẽ chu trình p-V hoàn hảo, tính được diện tích công bằng thuật toán tích phân. | Code vẽ được đường đẳng nhiệt, mô phỏng đúng chu trình hình chữ nhật hoặc tam giác. | Code chạy nhưng ra hình dạng sai vật lý (v.d. đẳng nhiệt là đường thẳng). | Nộp bài code rỗng hoặc không chịu chạy code. |
| **Sáng tạo & Phản biện (Critical thinking)** | Đưa ra ý tưởng chế tạo máy thủy lực từ xy lanh y tế. Giải đáp sắc bén các nghịch lý. | Trả lời đầy đủ, hợp logic. Liên kết được bệnh giảm áp với Định luật Boyle. | Thụ động khi tranh luận, thiếu chứng cứ luận cứ. | Im lặng không đóng góp gì cho giờ học thảo luận. |

## 12. Phụ lục bổ sung (Extra Notes & Explanations)
- Lực nâng khí quyển rất đáng kinh ngạc. Nếu đặt 2 bán cầu kim loại khít vào nhau và hút hết không khí bên trong ra (Bán cầu Magdeburg cổ đại), lực ép của khí quyển từ bên ngoài lớn tới mức cần 16 con ngựa kéo ở hai bên mới tách nổi 2 bán cầu rời nhau ra.
- Hiệu ứng Coanda và Phương trình Bernoulli (đáng lẽ được học sâu hơn) là lời giải thích hoàn chỉnh tại sao lực nâng cánh máy bay tồn tại dựa vào sự chênh lệch vận tốc dòng chảy chất lưu trên và dưới bề mặt cánh.
- Động cơ hơi nước, hay tủ lạnh hiện đại đều là các cỗ máy nhiệt (Heat engines), vận hành dựa trên các chu trình nén - giãn của chất khí và chất lưu y hệt như đồ thị p-V mô phỏng ở trên. Nếu không có các định luật khí lý tưởng này, chúng ta không có thời kỳ Cách mạng Công nghiệp.
- Màng xà phòng bong bóng tạo ra màu sắc ngũ sắc cầu vồng lấp lánh (Iridescence) là do hiện tượng "Giao thoa ánh sáng màng mỏng", khi ánh sáng phản xạ từ mặt trên và mặt dưới của màng xà phòng cực mỏng giao thoa với nhau.

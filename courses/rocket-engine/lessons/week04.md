# Tuần 4: Buồng Đốt, Vòi Phun & Vật Liệu / Week 4: Combustion Chamber, Nozzle & Materials

## Mục Tiêu / Learning Objectives
Trong tuần này, học viên sẽ nắm được các nguyên lý khí động học cốt lõi quyết định hiệu suất của một động cơ tên lửa. Chúng ta sẽ đi sâu vào thiết kế buồng đốt, sự kỳ diệu của vòi phun De Laval và cách lựa chọn vật liệu tối ưu.
*   **VI:** Hiểu rõ mối liên hệ giữa áp suất buồng đốt (Pc) và thiết kế vòi phun.
*   **EN:** Understand the relationship between chamber pressure (Pc) and nozzle design.
*   **VI:** Nắm vững nguyên lý hoạt động của vòi phun hội tụ - phân kỳ (De Laval) và cách dòng khí đạt tốc độ siêu thanh.
*   **EN:** Master the principles of convergent-divergent (De Laval) nozzles and how gas flow reaches supersonic speeds.
*   **VI:** Có khả năng tính toán hệ số lực đẩy (CF) và các thông số hình học của vòi phun.
*   **EN:** Be able to calculate the thrust coefficient (CF) and nozzle geometric parameters.
*   **VI:** Biết cách lựa chọn vật liệu phù hợp cho từng thành phần của tên lửa dựa trên đặc tính cơ nhiệt.
*   **EN:** Know how to select appropriate materials for each rocket component based on thermo-mechanical properties.
*   **VI:** Thực hành tính toán và lập trình thiết kế vòi phun cơ bản.
*   **EN:** Practice calculating and coding basic nozzle designs.

---

## Vật Liệu & Dụng Cụ / Materials & Tools

Dưới đây là danh sách các vật liệu, mẫu vật và dụng cụ cần thiết cho các hoạt động thực hành trong tuần.
*Here is the list of materials, samples, and tools required for this week's lab activities.*

| Vật Liệu / Material | Mô Tả / Description | Số Lượng / Qty | Đơn Giá Ước Tính / Est. Price (VND) | Ghi Chú / Notes |
| :--- | :--- | :--- | :--- | :--- |
| Các mẫu ống thân (Body tube samples) | Ống giấy kraft, ống PVC, sợi thủy tinh (fiberglass), sợi carbon. | 1 bộ / set | 150,000 | Cắt thành các đoạn 10cm để so sánh trọng lượng và độ cứng. |
| Mẫu vật liệu vòi phun (Nozzle material samples) | Graphite (than chì mật độ cao), Phenolic resin, Đất sét / Ceramic. | 1 bộ / set | 300,000 | Khám phá khả năng chịu nhiệt. |
| Mẫu vật liệu cánh (Fin material samples) | Balsa wood, ván ép (plywood), G10 fiberglass. | 1 bộ / set | 100,000 | Kiểm tra khả năng uốn cong và độ bền. |
| Dụng cụ đo lường (Measuring tools) | Thước kẹp điện tử (Digital caliper), cân tiểu ly (Precision scale). | 1 bộ / set | 250,000 | Đo đạc chính xác mẫu vật. |
| Máy in 3D & Sợi nhựa (3D Printer & Filaments) | Mẫu in từ PLA, ABS, PETG. | 1 bộ / set | Tùy chọn / Optional | Đánh giá độ bền nhiệt của nhựa in 3D. |
| Giấy nhám & Dụng cụ cắt | Dùng để gia công cơ bản các mẫu vật. | 1 bộ / set | 50,000 | |

---

## ⚠️ An Toàn / Safety Notes

> [!WARNING]
> CẢNH BÁO AN TOÀN NGHIÊM NGẶT - TUYỆT ĐỐI TUÂN THỦ
> STRICT SAFETY WARNING - COMPLY ABSOLUTELY

1.  **VI:** Tuân thủ Mã An Toàn Tên Lửa Mô Hình (Model Rocketry Safety Code). Không bao giờ sử dụng vật liệu kim loại cho thân tên lửa hoặc vòi phun của tên lửa mô hình cơ bản để tránh tạo ra các mảnh văng nguy hiểm khi có sự cố nổ buồng đốt (CATO - Catastrophic Anomaly at Take Off).
    **EN:** Comply with the Model Rocketry Safety Code. Never use metallic materials for the body or nozzle of basic model rockets to prevent dangerous shrapnel in the event of a CATO.
2.  **VI:** Việc gia công sợi carbon và sợi thủy tinh sinh ra bụi mịn vô cùng độc hại cho phổi. Phải đeo khẩu trang chống bụi (chuẩn N95 trở lên), kính bảo hộ và găng tay khi cắt hoặc chà nhám.
    **EN:** Machining carbon fiber and fiberglass produces fine dust that is highly toxic to the lungs. Always wear a dust mask (N95 or better), safety goggles, and gloves when cutting or sanding.
3.  **VI:** Áp suất buồng đốt có thể lên tới hàng triệu Pascal. Bất kỳ sự thiếu hụt nào về độ bền vật liệu buồng đốt đều có thể dẫn đến hậu quả nghiêm trọng. Luôn tính toán hệ số an toàn (Safety Factor) tối thiểu từ 1.5 đến 2.0.
    **EN:** Chamber pressure can reach millions of Pascals. Any deficiency in chamber material strength can lead to severe consequences. Always calculate a minimum Safety Factor of 1.5 to 2.0.

---

## Lý Thuyết / Theory

### 1. Thiết Kế Buồng Đốt / Combustion Chamber Design

Buồng đốt (Combustion Chamber) là "trái tim" của động cơ, nơi hỗn hợp nhiên liệu và chất oxy hóa phản ứng để tạo ra dòng khí nhiệt độ cao, áp suất cao.
*The combustion chamber is the "heart" of the engine, where the fuel and oxidizer mix reacts to generate a high-temperature, high-pressure gas stream.*

#### Áp Suất Buồng Đốt (Chamber Pressure - Pc)
Áp suất buồng đốt ($P_c$) là thông số quyết định trực tiếp đến hiệu suất của động cơ.
*   **Tên lửa mô hình (Model rockets):** $P_c$ thường rơi vào khoảng 1 MPa đến 7 MPa (10 - 70 bar). Động cơ sử dụng nhiên liệu rắn như hắc ín (black powder) hay APCP (Ammonium Perchlorate Composite Propellant) hoạt động tốt trong dải này.
*   **Động cơ thực tế (Real liquid engines):** $P_c$ có thể vượt quá 20 MPa (200 bar), ví dụ động cơ Raptor của SpaceX có thể đạt trên 30 MPa. Áp suất càng cao, động cơ càng gọn nhẹ nhưng yêu cầu vật liệu và bơm tuabin vô cùng phức tạp.

#### Chiều Dài Đặc Trưng L* (Characteristic Length)
L* (L-star) là một thông số quan trọng đo lường tỷ lệ giữa thể tích buồng đốt ($V_c$) và diện tích cổ vòi phun ($A_t$). Nó đại diện cho thời gian lưu lại (residence time) của dòng khí trong buồng đốt. Thời gian này phải đủ dài để quá trình cháy diễn ra hoàn toàn.
*L* is a crucial parameter measuring the ratio of the combustion chamber volume ($V_c$) to the throat area ($A_t$). It represents the residence time of the gas in the chamber, which must be long enough for complete combustion.*

$$ L^* = \frac{V_c}{A_t} $$

*   **Giá trị tiêu biểu (Typical values):**
    *   Nhiên liệu lỏng (LOX/Kerosene): 1.0 - 1.3 m
    *   Nhiên liệu rắn tiên tiến (APCP): 1.0 - 1.5 m
Nếu L* quá nhỏ, nhiên liệu chưa cháy hết đã bị đẩy ra ngoài, làm giảm hiệu suất (Specific Impulse - Isp). Nếu L* quá lớn, buồng đốt sẽ nặng không cần thiết và tổn thất nhiệt qua thành buồng đốt sẽ tăng lên.

---

### 2. Vòi Phun De Laval / The De Laval Nozzle - THE Key Invention

Được phát minh bởi Gustaf de Laval vào cuối thế kỷ 19, vòi phun hội tụ - phân kỳ (convergent-divergent nozzle) là phát minh cốt lõi biến thế năng của khí áp suất cao thành động năng (tốc độ) cực lớn, tạo ra lực đẩy.
*Invented by Gustaf de Laval in the late 19th century, the convergent-divergent nozzle is the core invention that converts the potential energy of high-pressure gas into massive kinetic energy (speed), generating thrust.*

#### Nguyên Lý Hoạt Động (Operating Principle)
Dòng khí đi qua vòi phun trải qua 3 giai đoạn:
1.  **Phần Hội Tụ (Convergent Section):** Tiết diện vòi phun giảm dần. Do vận tốc dòng khí nhỏ hơn vận tốc âm thanh (Mach < 1, Subsonic), việc thu hẹp tiết diện làm tăng tốc độ dòng khí và giảm áp suất.
2.  **Cổ Vòi Phun (Throat):** Đây là điểm hẹp nhất. Tại đây, tốc độ dòng khí đạt chính xác vận tốc âm thanh tại điều kiện nhiệt độ đó (Mach = 1, Sonic chocked flow).
3.  **Phần Phân Kỳ (Divergent Section):** Điều kỳ diệu của nhiệt động lực học xảy ra ở đây. Khi dòng khí đã đạt tốc độ âm thanh, việc **mở rộng** tiết diện ống không làm khí chậm lại mà ngược lại, làm nó **tiếp tục tăng tốc** vượt qua ngưỡng âm thanh (Mach > 1, Supersonic).

```text
    Khí từ Buồng Đốt (P_c, T_c, v_c ~ 0)
    =====================
       \               /
        \             /   <-- Phần Hội Tụ (Convergent, Mach < 1)
         \           /
          |         |     <-- Cổ (Throat, Mach = 1)
         /           \
        /             \   <-- Phần Phân Kỳ (Divergent, Mach > 1)
       /               \
      /                 \
     /                   \
    =======================
    Khí Xả (P_e, v_e rất lớn, Mach_e >> 1)
```
*(Sơ đồ nguyên lý vòi phun De Laval)*

#### Tỷ Lệ Diện Tích (Area Ratio - $\epsilon$)
Tỷ lệ diện tích phân kỳ $\epsilon$ là tỷ số giữa diện tích mặt cắt ngang tại miệng vòi phun ($A_e$) và diện tích cổ ($A_t$).
$$ \epsilon = \frac{A_e}{A_t} $$
Tỷ lệ này quyết định số Mach ở đầu ra ($M_e$) và ảnh hưởng lớn đến Isp.

#### Hiệu Suất Vòi Phun (Nozzle Efficiency)
Một vòi phun được gọi là **giãn nở tối ưu (optimally expanded)** khi áp suất khí xả tại miệng vòi ($P_e$) cân bằng chính xác với áp suất khí quyển môi trường ($P_a$).
*   **$P_e = P_a$ (Optimum):** Lực đẩy đạt giá trị cực đại. Dòng xả thẳng hàng hoàn hảo.
*   **$P_e > P_a$ (Under-expanded):** Vòi phun quá ngắn hoặc độ phân kỳ chưa đủ. Khí ra khỏi vòi tiếp tục nở rộng tạo thành các luồng hình nón (expansion fans). Lãng phí năng lượng.
*   **$P_e < P_a$ (Over-expanded):** Vòi phun quá lớn so với áp suất môi trường. Áp suất khí quyển "ép" dòng khí lại, tạo ra sóng xung kích (shockwaves) bên trong vòi phun, có thể phá hủy vòi. Hiện tượng Mach diamonds thường thấy ở trạng thái này.

---

### 3. Hình Học Vòi Phun (Nozzle Geometry)

Thiết kế hình dáng vòi phun quyết định dòng khí lưu thông có trơn tru hay không, hạn chế sự tách dòng (flow separation) và nhiễu loạn.
*Nozzle geometry design determines whether the gas flow is smooth, minimizing flow separation and turbulence.*

*   **Nửa góc hội tụ (Convergent half-angle):** Thường dao động khoảng $15^\circ$ đến $45^\circ$. Phần này không quá nhạy cảm với hình dáng vì dòng khí đang ở trạng thái dưới âm thanh và rất ổn định.
*   **Nửa góc phân kỳ (Divergent half-angle):** Khó thiết kế hơn nhiều. Dòng khí siêu âm rất dễ bị nhiễu loạn.
    *   **Vòi phun hình nón (Conical nozzle):** Dễ chế tạo nhất (dùng máy tiện). Góc phân kỳ thường từ $12^\circ$ đến $18^\circ$ (tối ưu nhất khoảng $15^\circ$). Tuy nhiên, khí xả đi ra không hoàn toàn song song với trục tên lửa, dẫn đến tổn thất lực đẩy (divergence loss).
    *   **Vòi phun hình chuông (Bell / Parabolic nozzle):** Được thiết kế theo đường cong parabol để bẻ hướng dòng khí xả song song với trục động cơ ở đầu ra. Giúp tối đa hóa lực đẩy và thường ngắn hơn vòi phun hình nón có cùng tỷ lệ diện tích.

---

### 4. Hệ Số Lực Đẩy CF (Thrust Coefficient)

Hệ số lực đẩy ($C_F$) là một thông số không thứ nguyên, đánh giá mức độ hiệu quả của vòi phun trong việc biến đổi áp suất tĩnh trong buồng đốt thành lực đẩy động lực học. Một hệ số $C_F$ lý tưởng thường rơi vào khoảng 1.3 đến 1.8.
*The thrust coefficient ($C_F$) is a dimensionless parameter evaluating how effectively the nozzle converts static chamber pressure into dynamic thrust.*

Công thức cơ bản:
$$ C_F = \frac{F}{P_c \cdot A_t} $$
*(Trong đó: F là lực đẩy tổng, Pc là áp suất buồng đốt, At là diện tích cổ)*

Công thức tính lý thuyết dựa trên nhiệt động lực học phức tạp hơn rất nhiều, phụ thuộc vào tỷ số nhiệt dung ($\gamma$), áp suất buồng ($P_c$), áp suất môi trường ($P_a$) và áp suất tại miệng vòi ($P_e$).
$$ C_F = \sqrt{\frac{2\gamma^2}{\gamma - 1} \left(\frac{2}{\gamma + 1}\right)^{\frac{\gamma+1}{\gamma-1}} \left[ 1 - \left(\frac{P_e}{P_c}\right)^{\frac{\gamma-1}{\gamma}} \right]} + \frac{P_e - P_a}{P_c} \epsilon $$
Khi mở rộng tối ưu ($P_e = P_a$), số hạng thứ hai biến mất.

---

### 5. Lựa Chọn Vật Liệu / Materials Selection

Việc chọn vật liệu đòi hỏi sự cân bằng tinh tế giữa: Khả năng chịu nhiệt (Thermal resistance), Mật độ/Khối lượng (Density/Weight), Độ bền cơ học (Structural strength), và Giá thành (Cost/Manufacturability).

#### 5.1 Ống Thân (Body Tube)
*   **Cardboard / Giấy Kraft (Estes style):** Rất nhẹ, rẻ, dễ cắt. Phù hợp cho tên lửa nhỏ chạy bằng động cơ hắc ín (C, D class).
*   **Fiberglass (Sợi thủy tinh):** Bền bỉ, chịu lực cản khí động học cực tốt, chịu nhiệt tương đối. Thích hợp cho tên lửa công suất cao (High Power Rocketry - HPR). Nặng hơn giấy.
*   **Carbon Fiber (Sợi carbon):** Siêu nhẹ, độ cứng cực cao. Chuyên dùng cho các kỷ lục độ cao. Nhược điểm: rất đắt, khó gia công, và chặn tín hiệu vô tuyến (RF shielding - cẩn thận khi đặt GPS bên trong).
*   **Aluminum (Nhôm):** Ít dùng cho mô hình vì vi phạm mã an toàn (có thể biến thành mảnh văng). Nhưng dùng làm vỏ động cơ (motor casing) thì cực tốt (Nhôm 6061-T6).

#### 5.2 Vòi Phun (Nozzle)
Vòi phun chịu nhiệt độ và ma sát khủng khiếp nhất.
*   **Graphite (Than chì):** Vật liệu "thần thánh" cho vòi phun. Chịu được nhiệt độ lên đến > $3000^\circ C$ mà không nóng chảy (nó thăng hoa). Rất dễ tiện bằng máy tiện (lathe) thành hình dạng De Laval hoàn hảo.
*   **Phenolic Resin / Phenolic Canvas:** Vật liệu cháy tiêu (ablative). Nó từ từ cháy và tạo ra một lớp than bảo vệ phần bên dưới, giúp tản nhiệt.
*   **Ceramic (Gốm / Đất sét chịu nhiệt):** Rẻ tiền, dễ đúc. Thường dùng trong động cơ hắc ín tự chế rẻ tiền, nhưng dễ nứt vỡ do sốc nhiệt (thermal shock).

#### 5.3 Cánh Đuôi (Fins)
*   **Balsa wood (Gỗ Balsa):** Nhẹ vô đối, dùng cho tên lửa nhỏ. Dễ gãy.
*   **Plywood (Ván ép):** Ví dụ như ván ép Baltic Birch. Cứng cáp hơn Balsa rất nhiều, phù hợp tầm trung.
*   **G10 Fiberglass / Carbon Fiber:** Tuyệt đối vững chắc. G10 không bị flutter (rung động khí động học) ở tốc độ siêu thanh (Mach > 1).

#### 5.4 Mũi Tên Lửa (Nosecone)
*   **Plastic (Nhựa đúc):** Phổ biến, rẻ, bề mặt nhẵn bóng.
*   **Balsa wood:** Dễ chà nhám tạo hình.
*   **Fiberglass:** Siêu bền, chuyên dụng cho tên lửa vượt tường âm thanh.

| Vật Liệu (Material) | Mật độ (Density g/cm³) | Khả năng chịu nhiệt (T_max) | Độ bền tương đối | Ứng Dụng |
| :--- | :--- | :--- | :--- | :--- |
| Giấy (Cardboard) | ~0.7 | Thấp (< 100°C) | Yếu | Thân tên lửa nhỏ |
| Nhôm (Al 6061) | 2.7 | Trung bình (T_nc ~ 660°C) | Rất Cao | Vỏ động cơ |
| Sợi Carbon | ~1.6 | Trung bình (nhựa cháy) | Siêu Cao | Thân, Cánh cao cấp |
| Graphite | 2.2 | Rất Cao (> 3000°C) | Trung bình (giòn) | Vòi phun (Nozzle) |
| Gỗ Balsa | ~0.16 | Thấp | Yếu | Cánh, mũi nhẹ |

#### 5.5 In 3D Cho Chế Tạo Tên Lửa
Công nghệ in 3D mang lại sự tự do trong thiết kế mũi tên lửa, khối giữ động cơ (engine mount), và đôi khi là cánh. Tuy nhiên cần chú ý:
*   **PLA:** Nhiệt độ biến dạng thấp (khoảng 60°C). Tránh để ngoài trời nắng mùa hè, dễ biến dạng cong vênh.
*   **ABS / ASA:** Bền hơn, chịu nhiệt tốt hơn (90°C), nhẹ. ASA chịu tia UV tốt.
*   **PETG:** Cân bằng tốt, chịu va đập mạnh, dẻo dai hơn PLA.
*   **Nylon (Sợi Carbon Nylon):** Cực kỳ cứng cáp và chịu nhiệt. Hoàn hảo cho các cơ cấu chịu lực.
*(Tuyệt đối KHÔNG in 3D vòi phun động cơ bằng nhựa vì dòng khí hàng ngàn độ sẽ thổi bay vòi phun trong phần nghìn giây)*

---

## Tính Toán Thực Hành / Practice Calculations

Ví dụ: Bạn cần thiết kế một động cơ tên lửa mô hình với các thông số sau:
*   Áp suất buồng đốt mục tiêu: $P_c = 1.0 \text{ MPa}$
*   Áp suất khí quyển: $P_a = 0.1 \text{ MPa}$
*   Lực đẩy yêu cầu: $F_{target} = 50 \text{ N}$
*   Tỷ số nhiệt dung của khí cháy (giả sử): $\gamma = 1.2$

**Bước 1: Tính Hệ số lực đẩy lý thuyết (Theoretical CF)**
*(Giả sử vòi phun giãn nở tối ưu $P_e = P_a$)*
Ta áp dụng công thức $C_F$ (bạn có thể sử dụng hàm Python bên dưới để giải nhanh, kết quả sẽ rơi vào khoảng $C_F \approx 1.4$).

**Bước 2: Tính diện tích cổ vòi phun ($A_t$)**
Biết $C_F = 1.4$, $P_c = 1,000,000 \text{ Pa}$, $F = 50 \text{ N}$.
$$ A_t = \frac{F}{C_F \cdot P_c} = \frac{50}{1.4 \times 1,000,000} \approx 3.57 \times 10^{-5} \text{ m}^2 = 35.7 \text{ mm}^2 $$
Đường kính cổ (Throat diameter) $D_t \approx 6.74 \text{ mm}$.

**Bước 3: Tỷ lệ mở rộng ($\epsilon$) và Đường kính lối ra ($D_e$)**
Bằng các công thức khí động học, ta tính được số Mach tại lối ra ($M_e$) và tỷ lệ $\epsilon$ (xem phần Code).
Từ đó tính được diện tích lối ra $A_e$ và đường kính miệng vòi phun $D_e$.

---

## Thí Nghiệm / Lab Activities

### Lab 1: Thiết kế vòi phun trên giấy (Design a nozzle on paper)
*   **Nhiệm vụ:** Dựa vào các thông số từ bài tập thực hành trên ($P_c = 1 \text{ MPa}$, $P_a = 0.1 \text{ MPa}$, $F = 50 \text{ N}$).
*   **Yêu cầu:** Vẽ phác thảo mặt cắt dọc của vòi phun theo tỷ lệ 1:1 trên giấy ô ly.
*   **Chỉ tiêu:** Đánh dấu rõ ràng $D_t$ (đường kính cổ), $D_e$ (đường kính ra). Sử dụng góc hội tụ $30^\circ$ và góc phân kỳ hình nón $15^\circ$.
*   **Mục đích:** Hình dung tỷ lệ thực tế của vòi phun De Laval. Học viên sẽ thấy phần cổ hẹp hơn nhiều so với miệng vòi như thế nào.

### Lab 2: So sánh vật liệu thực tế (Material Comparison)
*   **Nhiệm vụ:** Học viên được phát các đoạn ống vật liệu khác nhau (Giấy, PVC, Sợi Carbon) dài bằng nhau (10cm).
*   **Thực hành:**
    1.  Cân từng mẫu để ghi nhận khối lượng.
    2.  Dùng tay bóp thử để cảm nhận độ cứng (rigidity).
    3.  Lập bảng so sánh tỷ lệ (Độ cứng cảm nhận / Khối lượng).
    4.  *(Dưới sự giám sát của giáo viên)* Dùng đèn khò gas nhỏ (blowtorch) khò trực tiếp vào mảnh graphite và mảnh nhôm trong 10 giây để quan sát sự khác biệt về truyền nhiệt và nóng chảy. (Graphite sẽ đỏ rực nhưng không chảy, nhôm sẽ mềm và chảy gục).

---

## Code / Formulas

Đoạn mã Python sau đây là một công cụ mạnh mẽ để tính toán nhanh các thông số hình học của vòi phun lý tưởng (Isentropic Flow).

```python
import numpy as np

def nozzle_design(Pc, Pa, F_target, gamma=1.2, T_chamber=3000):
    """
    Tính toán thông số vòi phun De Laval cơ bản.
    Pc: Áp suất buồng đốt (Pa)
    Pa: Áp suất môi trường (Pa)
    F_target: Lực đẩy mục tiêu (N)
    gamma: Tỷ số nhiệt dung (Specific heat ratio)
    """
    # Tỷ số áp suất
    pr = Pc / Pa
    
    # Tính số Mach tại miệng vòi xả (Me)
    Me = ((2/(gamma-1)) * (pr**((gamma-1)/gamma) - 1))**0.5
    
    # Tính hệ số lực đẩy CF
    term1 = np.sqrt(2*gamma**2/(gamma-1) * (2/(gamma+1))**((gamma+1)/(gamma-1)))
    term2 = (1 - (Pa/Pc)**((gamma-1)/gamma))**0.5
    CF = term1 * term2 + (Pa/Pc) * (Pc/Pa) # (Công thức đầy đủ cho CF)
    
    # Tính diện tích cổ (At) theo m^2
    At = F_target / (CF * Pc)
    throat_diam = 2 * np.sqrt(At / np.pi) * 1000 # chuyển sang mm
    
    # Tính tỷ lệ diện tích epsilon
    epsilon = (1/Me) * ((2/(gamma+1)) * (1 + (gamma-1)/2 * Me**2))**((gamma+1)/(2*(gamma-1)))
    
    # Tính đường kính miệng vòi (De)
    exit_diam = throat_diam * np.sqrt(epsilon)
    
    return {
        'Me': round(Me, 2), 
        'CF': round(CF, 2), 
        'At_mm2': round(At*1e6, 2), 
        'throat_mm': round(throat_diam, 2), 
        'exit_mm': round(exit_diam, 2)
    }

# Ví dụ chạy thử với P_c = 1MPa, P_a = 0.1MPa, F = 50N
result = nozzle_design(Pc=1e6, Pa=1e5, F_target=50)
print(f"Mach Exit (Me): {result['Me']}")
print(f"Thrust Coefficient (CF): {result['CF']}")
print(f"Throat Diameter: {result['throat_mm']} mm")
print(f"Exit Diameter: {result['exit_mm']} mm")
```

Học viên có thể copy đoạn mã này vào Google Colab hoặc Jupyter Notebook, thay đổi các thông số (ví dụ tăng $P_c$ lên 5MPa) và quan sát xem đường kính cổ vòi phun thay đổi như thế nào để giữ nguyên lực đẩy.

---

## Câu Hỏi Thảo Luận / Discussion Questions

1.  **VI:** Điều gì sẽ xảy ra nếu phần hẹp nhất của vòi phun (cổ vòi) bị tắc một phần trong quá trình đốt? (Hãy liên hệ với $P_c$ và $C_F$).
    **EN:** What would happen if the narrowest part of the nozzle (the throat) became partially blocked during a burn? (Relate to $P_c$ and $C_F$).
2.  **VI:** Tại sao chúng ta không dùng thép không gỉ (Stainless Steel) để làm thân tên lửa mô hình thay vì giấy hay sợi thủy tinh, mặc dù thép rất cứng?
    **EN:** Why don't we use Stainless Steel for model rocket bodies instead of cardboard or fiberglass, even though steel is very strong?
3.  **VI:** Giải thích hiện tượng "over-expanded nozzle" (vòi phun giãn nở quá mức). Khi tên lửa bay từ mặt đất lên độ cao rất cao (rìa vũ trụ), vòi phun của nó sẽ có xu hướng chuyển từ trạng thái nào sang trạng thái nào?
    **EN:** Explain an "over-expanded nozzle". As a rocket flies from the ground to a very high altitude (edge of space), how does the nozzle expansion state tend to change?
4.  **VI:** Graphite là vật liệu tuyệt vời để chịu nhiệt, nhưng điểm yếu lớn nhất của nó trong chế tạo cơ khí là gì?
    **EN:** Graphite is an excellent heat-resistant material, but what is its biggest weakness in mechanical manufacturing?
5.  **VI:** Dựa vào công thức tỷ lệ thể tích $L^*$, nếu bạn muốn dùng một loại nhiên liệu cháy rất chậm, bạn nên thiết kế buồng đốt dài ra hay ngắn lại? Tại sao?
    **EN:** Based on the $L^*$ characteristic length formula, if you want to use a very slow-burning propellant, should you design the combustion chamber to be longer or shorter? Why?

---

## Bài Về Nhà / Homework

**Mini-Project: Mô phỏng Thiết Kế Vòi Phun Bằng Python**

**Nhiệm vụ:**
1.  Cài đặt môi trường Python (Python idle hoặc Google Colab).
2.  Chạy đoạn code `nozzle_design` được cung cấp trong bài giảng.
3.  **Yêu cầu:** Viết thêm một đoạn vòng lặp `for` để tính toán thông số của vòi phun khi Áp suất buồng đốt ($P_c$) tăng dần từ 1 MPa đến 5 MPa (bước nhảy 0.5 MPa), trong khi vẫn giữ nguyên Lực đẩy $F = 100 \text{ N}$ và áp suất ngoài $P_a = 0.1 \text{ MPa}$.
4.  Lưu kết quả đầu ra (Đường kính cổ $D_t$ và Đường kính miệng $D_e$) vào một bảng hoặc xuất ra biểu đồ graph (dùng thư viện `matplotlib` nếu có thể).
5.  Viết một đoạn văn ngắn (3-5 câu) nhận xét: Khi ta tăng áp suất buồng đốt, vòi phun cần phải nhỏ đi hay lớn lên để tạo ra cùng một lực đẩy? Tại sao điều này có lợi cho thiết kế tên lửa thực tế?

---

## Đánh Giá / Assessment Rubric

Bảng tiêu chí đánh giá mức độ hoàn thành của học viên đối với Module thiết kế buồng đốt và vòi phun.

| Tiêu Chí / Criteria | Xuất Sắc / Excellent (4đ) | Khá / Good (3đ) | Đạt / Pass (2đ) | Cần Cố Gắng / Needs Work (0-1đ) |
| :--- | :--- | :--- | :--- | :--- |
| **Hiểu biết Lý thuyết (Theory Knowledge)** | Giải thích hoàn hảo dòng chảy siêu âm và các trạng thái giãn nở của vòi phun. | Nắm được nguyên lý cơ bản của vòi phun De Laval và mục đích của nó. | Biết được vòi phun dùng để làm gì nhưng chưa giải thích được sự thay đổi vận tốc. | Không hiểu khái niệm số Mach và áp suất buồng. |
| **Tính toán (Calculations & Code)** | Chạy code thành công, vẽ được biểu đồ và đưa ra kết luận sắc bén về mối quan hệ giữa $P_c$ và $A_t$. | Chạy được code và tính ra kết quả đúng của vòng lặp, có nhận xét cơ bản. | Thay được số vào code cơ bản ban đầu để tính 1 trường hợp cụ thể. | Không chạy được code hoặc kết quả sai hoàn toàn. |
| **Thực hành Lab (Lab Activities)** | Bản vẽ vòi phun chính xác tuyệt đối tỷ lệ. Đánh giá vật liệu sâu sắc (kèm số liệu khối lượng). | Bản vẽ tương đối chính xác. So sánh vật liệu hợp lý. | Có vẽ vòi phun nhưng sai tỷ lệ hình học. Có tham gia so sánh vật liệu. | Không hoàn thành bản vẽ hoặc không làm bài lab so sánh. |
| **Ý thức An toàn (Safety Awareness)** | Tuân thủ tuyệt đối. Liên tục nhắc nhở bạn học về mã an toàn và đồ bảo hộ. | Tuân thủ các quy tắc an toàn khi được yêu cầu. | Có chú ý an toàn nhưng đôi lúc lơ là (vd: quên đeo kính). | Vi phạm quy tắc an toàn nghiêm trọng (vd: đùa nghịch với lửa hoặc dao). |

*Tổng điểm tối đa: 16 điểm.*
*Học viên cần đạt tối thiểu 10/16 để được chuyển sang bài học tiếp theo (Thiết kế hệ thống khí động học).*

---
*(End of Week 4 Lesson File)*

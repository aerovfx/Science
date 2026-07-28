# Tuần 2: Nhiệt Dung Riêng và Nhiệt Ẩn Chuyển Thể (Week 2: Specific Heat Capacity and Latent Heat of Phase Transition)

## 1. Mục Tiêu Học Tập (Learning Objectives)

### 1.1. Mục Tiêu Tiếng Việt
- **Kiến thức (Knowledge)**: 
  - Hiểu rõ khái niệm về nhiệt dung riêng ($c$), nhiệt dung ($C$), nhiệt nóng chảy riêng ($\lambda$) và nhiệt hóa hơi riêng ($L$).
  - Phân biệt sự khác nhau giữa nội năng, nhiệt lượng và nhiệt độ.
  - Nắm vững các định luật nhiệt động lực học ứng dụng trong truyền nhiệt.
  - Xây dựng và sử dụng thành thạo phương trình cân bằng nhiệt trong các quá trình truyền nhiệt phức tạp và chuyển thể nhiều giai đoạn.
- **Kỹ năng (Skills)**: 
  - Thực hành tính toán nhiệt lượng trong các bài toán nhiệt học đa biến.
  - Lập kế hoạch, thiết kế và tiến hành thí nghiệm vật lí: đo nhiệt dung riêng của kim loại và nhiệt nóng chảy riêng của nước đá.
  - Sử dụng ngôn ngữ lập trình Python (thư viện numpy, matplotlib, scipy) để mô phỏng đường cong gia nhiệt và ứng dụng hồi quy (curve fitting) để tìm tham số vật lí từ dữ liệu thực nghiệm.
- **Thái độ (Attitude)**: 
  - Rèn luyện tính cẩn thận, tỉ mỉ, trung thực và chính xác trong việc thu thập và xử lý số liệu đo lường.
  - Tuân thủ nghiêm ngặt các quy tắc an toàn phòng thí nghiệm, đặc biệt khi làm việc với nhiệt lượng kế, bếp nhiệt và các vật liệu ở nhiệt độ cao.
  - Khuyến khích tư duy logic, sáng tạo khi đối mặt với các sai số thực nghiệm.

### 1.2. English Objectives
- **Knowledge**: Understand the physical concepts of specific heat capacity ($c$), heat capacity ($C$), specific latent heat of fusion ($\lambda$), and specific latent heat of vaporization ($L$). Distinguish between internal energy, heat, and temperature. Master the heat balance equation in complex heat transfer and multi-stage phase transition processes.
- **Skills**: Practice calculating heat energy in multivariable thermal problems. Plan, design, and conduct physics experiments: measure the specific heat capacity of metals and the specific latent heat of fusion of ice. Use Python programming (numpy, matplotlib, scipy) to simulate heating curves and apply curve fitting to extract physical parameters from experimental data.
- **Attitude**: Cultivate carefulness, meticulousness, honesty, and accuracy in data collection and processing. Strictly adhere to laboratory safety rules, especially when working with calorimeters, heaters, and high-temperature materials. Encourage logical and creative thinking when dealing with experimental errors.

---

## 2. Bài Học Liên Quan Trong Sách Giáo Khoa (Related Textbook Lessons)
- **Bài 4**: Nhiệt dung riêng (Specific Heat Capacity) - Cơ sở vi mô và vĩ mô của sự hấp thụ nhiệt.
- **Bài 5**: Nhiệt nóng chảy riêng (Specific Latent Heat of Fusion) - Cấu trúc tinh thể và sự phá vỡ liên kết rắn.
- **Bài 6**: Nhiệt hóa hơi riêng (Specific Latent Heat of Vaporization) - Năng lượng cần thiết để vượt qua áp suất khí quyển.
- **Bài 7**: Bài tập về vật lí nhiệt (Exercises on Thermal Physics) - Ứng dụng tích hợp các kiến thức.

*(Sách giáo khoa Vật Lí 12 - Kết Nối Tri Thức với Cuộc Sống / Physics 12 - Connecting Knowledge to Life - NXB Giáo Dục Việt Nam)*

---

## 3. Thiết Bị & Dụng Cụ Thí Nghiệm (Lab Equipment & Tools)

Dưới đây là danh sách các thiết bị cần thiết cho thí nghiệm trong tuần này. Các vật tư đã được tối ưu hóa cho điều kiện thực hành tại trường học hoặc tại nhà dưới sự giám sát (This is the list of required equipment for this week's experiment. Materials have been optimized for school or supervised home labs):

| STT (No.) | Thiết bị (Equipment) | Mô tả / Thông số kỹ thuật (Specs) | Giá tham khảo (VND) | Nơi mua / Tình trạng (Availability) |
| :---: | :--- | :--- | :--- | :--- |
| 1 | Nhiệt lượng kế (Calorimeter) | Loại 250ml, vỏ nhựa cách nhiệt 2 lớp (Foam/Vacuum), có nắp đậy kín, kèm que khuấy | 250,000 | Cửa hàng thiết bị giáo dục / Shopee |
| 2 | Nhiệt kế điện tử (Digital Thermometer) | Khoảng đo từ -50°C đến +150°C, sai số $\pm 0.1$°C, đầu dò bằng thép không gỉ | 150,000 | Lazada / Tiki / Chợ điện tử |
| 3 | Cân tiểu ly điện tử (Digital Scale) | Tải trọng tối đa 500g, độ chia nhỏ nhất 0.01g | 120,000 | Shopee / Cửa hàng gia dụng |
| 4 | Bộ mẫu vật rắn (Solid metal samples) | Khối Nhôm (Al), Đồng (Cu), Thép (Fe), Chì (Pb), mỗi mẫu khối lượng chuẩn 50g | 150,000 | Mua tại cửa hàng vật tư GD (Edutech) |
| 5 | Bếp đun điện / cách thủy (Hot plate) | Công suất 500W-1000W, có núm điều chỉnh nhiệt độ vô cấp | 350,000 | Siêu thị điện máy / Shopee |
| 6 | Cốc mỏ thủy tinh (Glass Beaker) | Thể tích 500ml, làm từ thủy tinh chịu nhiệt (Borosilicate 3.3) | 50,000 | Cửa hàng hóa chất / Shopee |
| 7 | Nước đá vụn (Crushed ice) | Khoảng 200g, nên làm từ nước cất để giảm sai số do tạp chất | 0 | Tự chuẩn bị ở nhà (Homemade) |
| 8 | Găng tay chịu nhiệt (Heat-resistant gloves) | Chất liệu sợi kevlar hoặc silicone dày, chịu nhiệt độ tiếp xúc 200°C | 80,000 | Cửa hàng bảo hộ lao động |
| 9 | Kẹp gắp (Crucible Tongs) | Bằng thép không gỉ, dài 25cm | 40,000 | Cửa hàng thiết bị giáo dục |

---

## 4. Cảnh Báo An Toàn (Safety Warnings) ⚠️

> [!CAUTION]
> **CẢNH BÁO NHIỆT ĐỘ CAO VÀ RỦI RO BỎNG (HIGH TEMPERATURE & BURN WARNING)**
> - Trong các bài thực hành của tuần này, chúng bản thân phải đun nước sôi đạt $100^\circ\text{C}$ và đun nóng các thỏi kim loại lên cùng mức nhiệt độ này. Nguy cơ bỏng nhiệt là rất cao nếu không cẩn thận.
> - **QUY ĐỊNH BẮT BUỘC**: Luôn luôn đeo găng tay chịu nhiệt khi thao tác với cốc nước nóng, di chuyển bếp đun, hoặc sử dụng kẹp gắp kim loại (ALWAYS wear heat-resistant gloves when handling hot objects).
> - Không bao giờ để bếp đun hoạt động mà không có người giám sát. Rút phích cắm ngay sau khi sử dụng xong (Never leave the heater running unattended. Unplug immediately after use).
> - Đặc biệt lưu ý an toàn điện: Tránh để nước văng vào ổ cắm điện hoặc phích cắm. Bàn làm việc thí nghiệm phải khô ráo.
> - **XỬ LÝ SỰ CỐ (FIRST AID)**: Nếu bị bỏng, KHÔNG BÔI KEM ĐÁNH RĂNG. Ngay lập tức xả trực tiếp vết bỏng dưới vòi nước lạnh liên tục trong ít nhất 15-20 phút. Thông báo ngay cho giáo viên hướng dẫn hoặc bộ phận y tế.

---

## 5. Cơ Sở Lý Thuyết Chuyên Sâu (Deep Theoretical Background)

### 5.1. Nhiệt Dung Riêng và Nhiệt Dung (Specific Heat and Heat Capacity)

**Sự truyền nhiệt và nội năng:**
Khi hai vật có nhiệt độ khác nhau tiếp xúc với nhau, năng lượng nhiệt sẽ tự phát truyền từ vật có nhiệt độ cao sang vật có nhiệt độ thấp. Quá trình này dừng lại khi hai vật đạt trạng thái cân bằng nhiệt (Equilibrium). Năng lượng được truyền đi này gọi là Nhiệt lượng ($Q$).

**Nhiệt dung ($C$):**
Nhiệt dung của một vật là lượng nhiệt cần thiết để làm nhiệt độ của vật đó tăng thêm $1\text{ K}$ (hoặc $1^\circ\text{C}$).
Đơn vị của Nhiệt dung là $\text{J/K}$.
Công thức: $C = \frac{Q}{\Delta T}$

**Nhiệt dung riêng ($c$):**
Để có một đại lượng đặc trưng cho tính chất của vật liệu (không phụ thuộc khối lượng), ta định nghĩa nhiệt dung riêng là nhiệt dung trên một đơn vị khối lượng của chất đó.
Nhiệt dung riêng của một chất là nhiệt lượng cần cung cấp để $1\text{ kg}$ chất đó tăng nhiệt độ lên thêm $1\text{ K}$.
Đơn vị của $c$ là $\text{J/(kg}\cdot\text{K)}$ hoặc $\text{J/(kg}\cdot^\circ\text{C)}$.

**Phương trình nhiệt lượng cơ bản:**
Đối với một quá trình gia nhiệt hoặc làm lạnh không kèm theo sự chuyển thể:
$$ Q = m \cdot c \cdot \Delta T = m \cdot c \cdot (T_{\text{sau}} - T_{\text{trước}}) $$

- Nếu $T_{\text{sau}} > T_{\text{trước}}$, $Q > 0$: Vật thu nhiệt (Heat absorption).
- Nếu $T_{\text{sau}} < T_{\text{trước}}$, $Q < 0$: Vật tỏa nhiệt (Heat emission). 

> [!NOTE]
> Bảng một số nhiệt dung riêng thông dụng:
> - Nước (Water): $c \approx 4186 \text{ J/(kg}\cdot\text{K)}$
> - Nước đá (Ice): $c \approx 2100 \text{ J/(kg}\cdot\text{K)}$
> - Nhôm (Aluminum): $c \approx 880 \text{ J/(kg}\cdot\text{K)}$
> - Đồng (Copper): $c \approx 380 \text{ J/(kg}\cdot\text{K)}$
> - Chì (Lead): $c \approx 130 \text{ J/(kg}\cdot\text{K)}$

### 5.2. Nhiệt Nóng Chảy Riêng (Specific Latent Heat of Fusion)

**Khái niệm vi mô:**
Tại nhiệt độ nóng chảy, năng lượng nhiệt cung cấp không làm tăng động năng tịnh tiến trung bình của các phân tử (do đó nhiệt độ không đổi). Thay vào đó, năng lượng này được dùng để thắng lực hút tĩnh điện trong mạng tinh thể, làm phá vỡ cấu trúc tinh thể rắn để chuyển sang cấu trúc lỏng linh hoạt hơn. Năng lượng này gọi là nhiệt ẩn nóng chảy.

Nhiệt nóng chảy riêng ($\lambda$) của một chất là nhiệt lượng cần thiết để $1\text{ kg}$ chất rắn chuyển hoàn toàn thành lỏng ở nhiệt độ nóng chảy.

**Phương trình quá trình nóng chảy:**
$$ Q_{nc} = \lambda \cdot m $$

Trong đó:
- $Q_{nc}$: Nhiệt lượng nóng chảy (J)
- $\lambda$: Nhiệt nóng chảy riêng (J/kg)
- $m$: Khối lượng chất thay đổi pha (kg)

### 5.3. Nhiệt Hóa Hơi Riêng (Specific Latent Heat of Vaporization)

Tương tự như sự nóng chảy, sự hóa hơi là quá trình chuyển pha từ lỏng sang khí. Tại nhiệt độ sôi, nhiệt cung cấp được sử dụng hoàn toàn để cắt đứt lực liên kết phân tử yếu trong chất lỏng và thực hiện công giãn nở chống lại áp suất của khí quyển để biến chất lỏng thành dạng khí.

Nhiệt hóa hơi riêng ($L$) của một chất là nhiệt lượng cần cung cấp để $1\text{ kg}$ chất lỏng hóa thành hơi hoàn toàn ở nhiệt độ sôi.

**Phương trình quá trình hóa hơi:**
$$ Q_{hh} = L \cdot m $$

*Bảng tham số pha của Nước (ở 1 atm):*
- Nhiệt độ nóng chảy: $0^\circ\text{C} = 273.15\text{ K}$
- Nhiệt nóng chảy riêng ($\lambda$): $3.34 \times 10^5 \text{ J/kg}$
- Nhiệt độ sôi: $100^\circ\text{C} = 373.15\text{ K}$
- Nhiệt hóa hơi riêng ($L$): $2.26 \times 10^6 \text{ J/kg}$

### 5.4. Phương Trình Cân Bằng Nhiệt Lượng (Heat Balance Equation)

Dựa trên Định luật Bảo toàn Năng lượng, trong một hệ cô lập (không có trao đổi nhiệt với môi trường), tổng năng lượng không đổi. Do đó, tổng lượng nhiệt tỏa ra bởi các vật nóng phải bằng tổng lượng nhiệt thu vào bởi các vật lạnh.

$$ \sum Q_{\text{tỏa}} = \sum Q_{\text{thu}} $$
(Chú ý: Ta dùng giá trị tuyệt đối cho $Q_{\text{tỏa}}$ để các phương trình mang dấu dương).

#### Sơ đồ Mô Hình Cân Bằng (ASCII Concept Map)

```text
======================================================================
               MÔ HÌNH HỆ CÔ LẬP TRONG NHIỆT LƯỢNG KẾ
======================================================================
  [LỚP VỎ CÁCH NHIỆT TUYỆT ĐỐI - KHÔNG CHO NHIỆT THOÁT RA MÔI TRƯỜNG]
  +----------------------------------------------------------------+
  |                                                                |
  |     (VẬT NÓNG - HOT SOURCE)                                    |
  |      +-----------------+           Dòng nhiệt năng (Heat Flow) |
  |      |  Khối kim loại  | -----------------------------> +      |
  |      |  T_hot = 100°C  |                                |      |
  |      +-----------------+                                |      |
  |               |                                         |      |
  |               v                                         v      |
  |     Hạ nhiệt (Q_tỏa_kim_loại)                   Tăng nhiệt     |
  |               |                                 (Q_thu_nước)   |
  |               v                                         |      |
  |      +-----------------+                                |      |
  |      | Nhiệt độ Cân Bằng| <-----------------------------+      |
  |      |   (Equilibrium)  |                                      |
  |      |     T_cb         |                                      |
  |      +-----------------+                                       |
  |                                                                |
  |      (VẬT LẠNH - COLD SINK)                                    |
  |      +-----------------+  Q_thu_nlk   +-----------------+      |
  |      |      Nước       | <----------- | Nhiệt lượng kế  |      |
  |      |  T_cold = 25°C  |              | T_cold = 25°C   |      |
  |      +-----------------+              +-----------------+      |
  |                                                                |
  +----------------------------------------------------------------+
======================================================================
```

---

## 6. Bài Tập Mẫu Phức Hợp (Advanced Worked Examples)

### Bài tập Mẫu 1 (Example 1): Phân tích trạng thái cuối cùng của hệ hỗn hợp đá và nước
Cho một hỗn hợp gồm $m_1 = 400\text{ g}$ nước đá ở nhiệt độ $T_1 = -10^\circ\text{C}$ và $m_2 = 200\text{ g}$ nước lỏng ở nhiệt độ $T_2 = 50^\circ\text{C}$ được trộn vào nhau trong một bình cách nhiệt lý tưởng. Bỏ qua nhiệt dung của bình. Khảo sát trạng thái cuối cùng của hệ và tính khối lượng của mỗi pha (rắn, lỏng) khi hệ đạt cân bằng nhiệt.
Biết:
- $c_{\text{đá}} = 2100\text{ J/(kg}\cdot\text{K)}$
- $c_{\text{nước}} = 4200\text{ J/(kg}\cdot\text{K)}$
- Nhiệt nóng chảy của đá: $\lambda = 3.34 \times 10^5\text{ J/kg}$

**Phân tích & Lời giải (Step-by-step Solution):**
*Bước 1: Tính nhiệt lượng tối đa mà nước (vật lạnh hơn đá nhưng mang nguồn nhiệt) có thể tỏa ra khi hạ xuống $0^\circ\text{C}$ (ngưỡng chuyển pha).*
$$ Q_{\text{tỏa\_max}} = m_2 \cdot c_{\text{nước}} \cdot (T_2 - 0) = 0.2 \cdot 4200 \cdot (50 - 0) = 42,000\text{ J} $$

*Bước 2: Tính nhiệt lượng cần thiết để toàn bộ khối nước đá tăng từ $-10^\circ\text{C}$ lên $0^\circ\text{C}$.*
$$ Q_{\text{thu1}} = m_1 \cdot c_{\text{đá}} \cdot (0 - (-10)) = 0.4 \cdot 2100 \cdot 10 = 8,400\text{ J} $$

Ta thấy $Q_{\text{tỏa\_max}} > Q_{\text{thu1}}$ ($42000 > 8400$), do đó toàn bộ nước đá sẽ đạt được $0^\circ\text{C}$ và bắt đầu quá trình nóng chảy. Phần nhiệt lượng dư ra là:
$$ Q_{\text{dư}} = 42,000 - 8,400 = 33,600\text{ J} $$

*Bước 3: Nhiệt lượng dư này sẽ làm nóng chảy một phần hoặc toàn bộ khối nước đá ở $0^\circ\text{C}$. Tính nhiệt lượng cần thiết để nóng chảy TOÀN BỘ lượng đá.*
$$ Q_{\text{nc\_toàn\_bộ}} = m_1 \cdot \lambda = 0.4 \cdot 3.34 \times 10^5 = 133,600\text{ J} $$

Ta thấy $Q_{\text{dư}} < Q_{\text{nc\_toàn\_bộ}}$ ($33600 < 133600$). Điều này có nghĩa là lượng nhiệt còn lại không đủ để làm nóng chảy hết $400\text{ g}$ đá. Do đó, hệ không thể nóng lên quá $0^\circ\text{C}$.
**Kết luận về nhiệt độ:** Nhiệt độ cân bằng của hệ là $t_{cb} = 0^\circ\text{C}$. Trạng thái của hệ là hỗn hợp nước và nước đá.

*Bước 4: Tính khối lượng nước đá đã bị nóng chảy.*
Lượng nhiệt cung cấp cho sự nóng chảy là phần $Q_{\text{dư}}$:
$$ m_{\text{đá\_tan}} = \frac{Q_{\text{dư}}}{\lambda} = \frac{33600}{334000} \approx 0.1006\text{ kg} \approx 100.6\text{ g} $$

*Bước 5: Tính thành phần khối lượng ở trạng thái cân bằng.*
- Khối lượng nước đá còn lại: $m_{\text{đá\_cuối}} = 400 - 100.6 = 299.4\text{ g}$
- Khối lượng nước lỏng: $m_{\text{nước\_cuối}} = m_2 + m_{\text{đá\_tan}} = 200 + 100.6 = 300.6\text{ g}$

**Đáp số:** Nhiệt độ $0^\circ\text{C}$, chứa $299.4\text{ g}$ đá và $300.6\text{ g}$ nước.

---

### Bài tập Mẫu 2 (Example 2): Tính tổng năng lượng hóa hơi
Một siêu tốc đun nước có công suất định mức $P = 1500\text{ W}$, hiệu suất đun là $H = 90\%$. Siêu tốc chứa $1.2\text{ lít}$ nước ở $25^\circ\text{C}$.
a) Tính thời gian cần thiết để đun nước đến khi bắt đầu sôi ($100^\circ\text{C}$).
b) Nếu để quên không ngắt điện sau khi nước sôi, mất thêm bao lâu để một nửa lượng nước trong siêu tốc hóa hơi hoàn toàn?
Biết $c_n = 4200\text{ J/(kg}\cdot\text{K)}$, $L = 2.26 \times 10^6\text{ J/kg}$, khối lượng riêng của nước là $1\text{ kg/lít}$.

**Giải (Solution):**
**Phần a:**
Khối lượng nước $m = 1.2\text{ kg}$. Độ tăng nhiệt độ $\Delta T = 100 - 25 = 75^\circ\text{C}$.
Nhiệt lượng hữu ích cần cung cấp để nước bắt đầu sôi:
$$ Q_{i} = m \cdot c_n \cdot \Delta T = 1.2 \cdot 4200 \cdot 75 = 378,000\text{ J} $$
Do hiệu suất $H = 0.9$, tổng năng lượng điện cần tiêu thụ là:
$$ E = \frac{Q_i}{H} = \frac{378000}{0.9} = 420,000\text{ J} $$
Thời gian đun sôi:
$$ t_1 = \frac{E}{P} = \frac{420000}{1500} = 280\text{ s} = 4\text{ phút } 40\text{ giây.} $$

**Phần b:**
Một nửa lượng nước cần hóa hơi là: $m' = \frac{1.2}{2} = 0.6\text{ kg}$.
Nhiệt lượng cần thiết cho quá trình hóa hơi nửa lượng nước:
$$ Q_{hh} = m' \cdot L = 0.6 \cdot 2.26 \times 10^6 = 1,356,000\text{ J} $$
Tổng năng lượng điện tiêu thụ trong giai đoạn này:
$$ E_{hh} = \frac{Q_{hh}}{H} = \frac{1356000}{0.9} = 1,506,666.7\text{ J} $$
Thời gian cần thêm:
$$ t_2 = \frac{E_{hh}}{P} = \frac{1506666.7}{1500} \approx 1004.4\text{ s} \approx 16\text{ phút } 44\text{ giây.} $$

---

## 7. Thực Hành Thí Nghiệm (Step-by-step Hands-on Experiments)

### Thí nghiệm 1: Xác định Nhiệt Nóng Chảy Riêng Của Nước Đá ($\lambda_{\text{ice}}$)

**Nguyên lý (Principle):**
Ta thả một khối lượng nước đá đã biết vào một lượng nước ấm trong nhiệt lượng kế. Đo nhiệt độ ban đầu và nhiệt độ cân bằng, từ đó suy ra lượng nhiệt nước ấm tỏa ra đã được dùng để làm tan chảy nước đá và nâng nhiệt độ nước thu được.

**Các bước tiến hành (Procedure):**
1. Dùng cân tiểu ly, đo khối lượng vỏ nhiệt lượng kế (có chứa que khuấy) $m_{nlk}$.
2. Đổ khoảng $200\text{ g}$ nước ấm (nhiệt độ khoảng $40^\circ\text{C}$ - $45^\circ\text{C}$) vào bình. Cân lại để xác định khối lượng nước ấm $m_n$.
3. Đậy nắp nhiệt lượng kế, cắm nhiệt kế xuyên qua lỗ nắp. Đợi 1-2 phút cho nhiệt độ ổn định, ghi nhiệt độ ban đầu $T_1$.
4. Lấy một cục nước đá đang tan (nhiệt độ đảm bảo chính xác là $0^\circ\text{C}$). Nhanh chóng dùng khăn giấy thấm khô nước bám trên mặt viên đá.
5. Thả ngay cục nước đá vào nhiệt lượng kế, đậy kín nắp.
6. Khuấy liên tục và đều tay. Quan sát nhiệt kế, khi nhiệt độ giảm đến giá trị thấp nhất rồi bắt đầu đứng im (tất cả đá đã tan hết), ghi lại nhiệt độ cân bằng $T_{cb}$.
7. Đem bình lên cân để xác định tổng khối lượng hệ, từ đó bằng phép trừ ta tính được khối lượng của cục nước đá đã cho vào: $m_{đá}$.
8. Xử lý số liệu:
   Phương trình:
   $$ (m_n \cdot c_n + m_{nlk} \cdot c_{nlk}) \cdot (T_1 - T_{cb}) = m_{đá} \cdot \lambda + m_{đá} \cdot c_n \cdot (T_{cb} - 0) $$
   Từ đó rút ra $\lambda$. Tính sai số tương đối so với giá trị $3.34 \times 10^5\text{ J/kg}$.

### Thí nghiệm 2: Đo Nhiệt Dung Riêng Của Đồng / Nhôm ($c_{metal}$)

*(Xem chi tiết ở phiên bản cơ bản, học sinh có thể tham khảo lại để thiết kế bước lấy mẫu khối lượng cho chính xác. Trọng tâm của thí nghiệm kim loại là phải chuyển thật nhanh mẫu thử từ cốc nước sôi sang nhiệt lượng kế để tránh tỏa nhiệt ra không khí).*

---

## 8. Lập Trình Python: Mô Phỏng & Xử Lý Số Liệu (Python Simulation & Curve Fitting)

Trong phần này, chúng ta sẽ không chỉ mô phỏng đường cong gia nhiệt mà còn viết một đoạn code sử dụng thư viện `scipy.optimize` để **hồi quy dữ liệu (curve fitting)**. Giả sử học sinh có một bộ dữ liệu nhiệt độ - thời gian thu thập được từ thực nghiệm thực tế, các em có thể dùng Python để tự động tính toán $c$ của mẫu thử.

### Code 1: Mô phỏng toàn diện sự biến thiên pha của vật chất
Đoạn mã sau vẽ chi tiết đường cong gia nhiệt từ $-20^\circ\text{C}$ đến $120^\circ\text{C}$ bằng `matplotlib`.

```python
# ==============================================================================
# File: heating_curve_simulation.py
# Description: Mô phỏng quá trình gia nhiệt của nước (Rắn -> Lỏng -> Khí)
# ==============================================================================

import numpy as np
import matplotlib.pyplot as plt

# 1. Hằng số vật lí
m_water = 1.0          # kg
c_ice = 2100.0         # J/(kg.K)
c_water = 4186.0       # J/(kg.K)
c_steam = 2000.0       # J/(kg.K)
L_fusion = 3.34e5      # J/kg
L_vapor = 2.26e6       # J/kg
power = 1000.0         # W (J/s)

# Nhiệt độ tới hạn
T_start, T_melt, T_boil, T_end = -20.0, 0.0, 100.0, 120.0

# 2. Tính thời gian các giai đoạn (s)
t1 = (m_water * c_ice * (T_melt - T_start)) / power
t2 = (m_water * L_fusion) / power
t3 = (m_water * c_water * (T_boil - T_melt)) / power
t4 = (m_water * L_vapor) / power
t5 = (m_water * c_steam * (T_end - T_boil)) / power

time_pts = [0, t1, t1+t2, t1+t2+t3, t1+t2+t3+t4, t1+t2+t3+t4+t5]
temp_pts = [T_start, T_melt, T_melt, T_boil, T_boil, T_end]

# 3. Vẽ biểu đồ
plt.figure(figsize=(10, 6))
plt.plot(time_pts, temp_pts, color='crimson', linewidth=2.5, marker='o', markersize=6)
plt.fill_between(time_pts, temp_pts, -30, color='crimson', alpha=0.1)

# Annotations
plt.annotate('Ice heating', xy=(time_pts[1]/2, -10), textcoords="offset points", xytext=(0,10), ha='center')
plt.annotate('Melting', xy=(time_pts[1] + t2/2, 0), textcoords="offset points", xytext=(0,15), ha='center', color='blue')
plt.annotate('Water heating', xy=(time_pts[2] + t3/2, 50), ha='center')
plt.annotate('Vaporization', xy=(time_pts[3] + t4/2, 100), textcoords="offset points", xytext=(0,15), ha='center', color='blue')

plt.title("Mô Phỏng Đường Cong Gia Nhiệt Của $1$ kg Nước ($P=1000$W)")
plt.xlabel("Thời gian đun (giây)")
plt.ylabel("Nhiệt độ ($^\circ$C)")
plt.grid(True, linestyle='--')
plt.show()
```

### Code 2: Khớp đường cong dữ liệu thực nghiệm (Curve Fitting) để tìm $c$
Đoạn mã sau sử dụng dữ liệu giả định thu thập được từ cảm biến nhiệt độ theo thời gian để tính ngược lại Nhiệt dung riêng của nhôm. Phương trình cơ bản: $\Delta T = \frac{P}{m \cdot c} \cdot t$. Nếu vẽ $\Delta T$ theo thời gian $t$, độ dốc (slope) của đường thẳng chính là $\frac{P}{m \cdot c}$.

```python
# ==============================================================================
# File: exp_curve_fitting_c.py
# Description: Dùng scipy.optimize để xác định nhiệt dung riêng từ dữ liệu thực nghiệm
# ==============================================================================

import numpy as np
import matplotlib.pyplot as plt
from scipy.optimize import curve_fit

# 1. Dữ liệu thực nghiệm (Mock experimental data)
# Giả sử dùng nguồn nhiệt điện (heater) có công suất P = 50 W đun nóng thỏi nhôm khối lượng m = 0.5 kg.
# Bảng giá trị thời gian (s) và nhiệt độ thu được (°C).
time_data = np.array([0, 30, 60, 90, 120, 150, 180, 210, 240])
temp_data = np.array([25.0, 28.5, 31.8, 35.1, 38.6, 42.0, 45.3, 48.9, 52.1])

# Thông số thí nghiệm
Power = 50.0 # W
mass = 0.5   # kg

# 2. Xây dựng hàm mô hình vật lí
# Nhiệt độ T(t) = T0 + (P / (m * c)) * t
def temp_model(t, c, T0):
    return T0 + (Power / (mass * c)) * t

# 3. Chạy thuật toán hồi quy (Curve fitting)
# p0 là giá trị dự đoán ban đầu (initial guess): [c_guess, T0_guess]
popt, pcov = curve_fit(temp_model, time_data, temp_data, p0=[900, 25.0])

c_experimental, T0_fitted = popt

print("=== KẾT QUẢ XỬ LÝ SỐ LIỆU ===")
print(f"Nhiệt dung riêng thực nghiệm (c): {c_experimental:.2f} J/(kg.K)")
print(f"Nhiệt độ ban đầu (T0_fit): {T0_fitted:.2f} °C")

# Tính sai số so với lý thuyết (c_nhôm_lý_thuyết = 880 J/kg.K)
error = abs(c_experimental - 880) / 880 * 100
print(f"Sai số tương đối: {error:.2f}%")

# 4. Vẽ đồ thị so sánh
plt.figure(figsize=(8, 5))
plt.scatter(time_data, temp_data, color='red', label='Dữ liệu đo đạc (Raw Data)')
plt.plot(time_data, temp_model(time_data, *popt), color='blue', label=f'Đường hồi quy (Fitted line)\nc = {c_experimental:.0f} J/kg.K')

plt.title('Khớp Đường Cong Dữ Liệu Thực Nghiệm - Đo Nhiệt Dung Riêng')
plt.xlabel('Thời gian t (s)')
plt.ylabel('Nhiệt độ T ($^\circ$C)')
plt.legend()
plt.grid(True)
plt.show()
```
*Ghi chú cho giáo viên: Học sinh có thể xuất dữ liệu từ các bộ cảm biến LabQuest hoặc Arduino ra file CSV, sau đó dùng Pandas để load data vào mô hình Python này.*

---

## 9. Câu Hỏi Thảo Luận Mở Rộng (Discussion Questions)

**Câu 1 (Q1):** Tại sao trong thí nghiệm đo nhiệt dung riêng, chúng ta phải chuyển mẫu kim loại từ nồi nước sôi sang nhiệt lượng kế *thật nhanh*?
> **Đáp án chi tiết (Detailed Answer):** Quá trình chuyển mẫu là giai đoạn dễ thất thoát nhiệt nhất. Nếu di chuyển chậm, thỏi kim loại sẽ bức xạ và truyền dẫn nhiệt lượng vào không khí xung quanh. Hệ quả là khi thỏi kim loại tiếp xúc mặt nước trong nhiệt lượng kế, nhiệt độ của nó đã thấp hơn mức $100^\circ\text{C}$ lý thuyết. Trong phương trình cân bằng $m \cdot c \cdot (100 - t_{cb}) = \text{Hệ số} \cdot \Delta t$, việc áp dụng con số 100 sẽ làm kết quả tính toán $c$ bị sai lệch nghiêm trọng (giá trị tính ra bị nhỏ hơn thực tế).

**Câu 2 (Q2):** Phân tích ảnh hưởng của hiện tượng bốc hơi nước bề mặt trong quá trình đo nhiệt độ cân bằng của nhiệt lượng kế.
> **Đáp án chi tiết (Detailed Answer):** Nếu nắp nhiệt lượng kế không kín, một lượng nước nóng sẽ bay hơi. Quá trình bay hơi mang theo một lượng nhiệt hóa hơi rất lớn (Lớn do $L_{nước}$ lớn). Năng lượng này bị tước đoạt khỏi hệ làm nhiệt độ cân bằng đo được sẽ thấp hơn nhiệt độ lý thuyết. Điều này dẫn đến sự mất cân bằng về năng lượng trong tính toán lý thuyết và gây sai số lớn.

**Câu 3 (Q3):** Tại sao hiện tượng đóng băng của hồ nước ở vùng ôn đới luôn xảy ra từ bề mặt trên cùng xuống dưới đáy, thay vì đóng băng từ đáy lên?
> **Đáp án chi tiết (Detailed Answer):** Khác với hầu hết các chất, nước có khối lượng riêng lớn nhất ở $4^\circ\text{C}$. Khi không khí lạnh làm nước bề mặt hạ nhiệt xuống $4^\circ\text{C}$, phần nước này nặng nhất và chìm xuống đáy, đẩy lớp nước ấm hơn lên trên. Sự đối lưu này tiếp diễn cho đến khi toàn bộ hồ đạt $4^\circ\text{C}$. Khi bề mặt tiếp tục lạnh đi dưới $4^\circ\text{C}$ (xuống $0^\circ\text{C}$), khối lượng riêng của lớp nước này nhẹ hơn khối nước $4^\circ\text{C}$ dưới đáy, nên nó nổi lên trên và bắt đầu đóng băng từ trên bề mặt. Lớp băng sau đó đóng vai trò như một lớp cách nhiệt tuyệt vời, ngăn chặn nhiệt độ lạnh cắt sâu xuống dưới, giúp sinh vật thủy sinh có thể sống sót qua mùa đông dưới đáy hồ.

**Câu 4 (Q4):** Có thể sử dụng đồ thị nhiệt độ - thời gian để phát hiện xem một chất có phải là hợp chất tinh khiết hay là một hỗn hợp không?
> **Đáp án chi tiết (Detailed Answer):** Có thể. Đối với một chất tinh khiết, tại điểm pha (nóng chảy, sôi), đồ thị sẽ xuất hiện một đường nằm ngang hoàn hảo (nhiệt độ không đổi cho đến khi quá trình chuyển pha hoàn tất). Trong khi đó, với hỗn hợp (như hợp kim, dung dịch), quá trình chuyển pha diễn ra trong một dải nhiệt độ, do đó đồ thị tại vùng nóng chảy hoặc vùng sôi sẽ có độ dốc nhất định chứ không nằm ngang hoàn toàn.

**Câu 5 (Q5):** Khi bạn để một giọt nước trên da và nó bay hơi, bạn cảm thấy mát lạnh. Hãy dùng kiến thức về nhiệt hóa hơi riêng để giải thích vi mô hiện tượng này.
> **Đáp án chi tiết (Detailed Answer):** Để bay hơi, các phân tử nước ở bề mặt phải chiến thắng lực hút từ các phân tử bên trong. Chỉ những phân tử có động năng lớn nhất (nhiệt độ vi mô cao nhất) mới có thể "thoát" ra khỏi chất lỏng trở thành hơi. Khi các phân tử "nóng" nhất này bay đi, động năng trung bình của các phân tử còn lại trong giọt nước bị giảm sút. Sự sụt giảm động năng này tương ứng với việc nhiệt độ của nước giảm. Để tiếp tục bay hơi, nước lấy năng lượng nhiệt từ bề mặt da của chúng ta (hiện tượng thu nhiệt). Khi da mất nhiệt, các dây thần kinh cảm giác truyền tín hiệu "lạnh" về não. $L_{nước}$ càng lớn thì lượng nhiệt tước đi từ da càng nhiều, ta càng thấy mát.

---

## 10. Bài Tập Về Nhà Tự Luyện (Homework & Practice Problems)

**Bài 1: Tính toán cơ bản**
Một lượng nước đá có khối lượng $200\text{ g}$ đang ở nhiệt độ $-15^\circ\text{C}$. Hỏi cần cung cấp cho nó một lượng nhiệt bao nhiêu để nó biến hoàn toàn thành hơi nước ở $100^\circ\text{C}$? (Cho $c_{đá} = 2100\text{ J/kg.K}$, $c_{nước} = 4200\text{ J/kg.K}$, $\lambda = 3.34 \times 10^5\text{ J/kg}$, $L = 2.26 \times 10^6\text{ J/kg}$).

*Hướng dẫn (Guide):*
- Tổng nhiệt lượng $Q = Q_1 + Q_2 + Q_3 + Q_4$.
- $Q_1$ (Làm ấm đá từ $-15^\circ\text{C}$ đến $0^\circ\text{C}$) = $0.2 \cdot 2100 \cdot 15 = 6,300\text{ J}$.
- $Q_2$ (Đá nóng chảy ở $0^\circ\text{C}$) = $0.2 \cdot 3.34 \times 10^5 = 66,800\text{ J}$.
- $Q_3$ (Làm nóng nước từ $0^\circ\text{C}$ đến $100^\circ\text{C}$) = $0.2 \cdot 4200 \cdot 100 = 84,000\text{ J}$.
- $Q_4$ (Nước hóa hơi ở $100^\circ\text{C}$) = $0.2 \cdot 2.26 \times 10^6 = 452,000\text{ J}$.
- Tổng $Q = 609,100\text{ J}$.

**Bài 2: Phương trình cân bằng nhiệt ba thành phần**
Thả một thỏi Đồng khối lượng $0.3\text{ kg}$ ở $200^\circ\text{C}$ và một thỏi Nhôm khối lượng $0.2\text{ kg}$ ở $100^\circ\text{C}$ vào một nhiệt lượng kế chứa $1.0\text{ kg}$ nước đang ở $20^\circ\text{C}$. Nhiệt dung của vỏ nhiệt lượng kế bằng không. Hãy xác định nhiệt độ cân bằng $T_{cb}$ của hệ.
(Cho $c_{Cu} = 380\text{ J/kg.K}$, $c_{Al} = 880\text{ J/kg.K}$, $c_{nước} = 4200\text{ J/kg.K}$).

*Hướng dẫn (Guide):*
- Đồng tỏa nhiệt: $Q_1 = 0.3 \cdot 380 \cdot (200 - T_{cb}) = 114(200 - T_{cb})$
- Nhôm tỏa nhiệt: $Q_2 = 0.2 \cdot 880 \cdot (100 - T_{cb}) = 176(100 - T_{cb})$
- Nước thu nhiệt: $Q_3 = 1.0 \cdot 4200 \cdot (T_{cb} - 20) = 4200(T_{cb} - 20)$
- Phương trình cân bằng: $Q_1 + Q_2 = Q_3$.
- $22800 - 114 T_{cb} + 17600 - 176 T_{cb} = 4200 T_{cb} - 84000$
- $40400 - 290 T_{cb} = 4200 T_{cb} - 84000$
- $4490 T_{cb} = 124400 \rightarrow T_{cb} \approx 27.7^\circ\text{C}$.

**Bài 3 (Thách thức - Challenge):**
Vào mùa đông, trong một hồ nước nhỏ có một lớp băng dày đóng trên mặt hồ. Nhiệt độ của lớp băng tiếp xúc với không khí là $-10^\circ\text{C}$, nhiệt độ lớp băng tiếp xúc với nước là $0^\circ\text{C}$. Viết công thức mô tả tốc độ đóng băng thêm của mặt hồ theo thời gian (Biết độ dẫn nhiệt của băng là $k$, nhiệt nóng chảy riêng của nước đá là $\lambda$, và khối lượng riêng của nước đá là $\rho$). Trình bày sự tương tự giữa bài toán này và Định luật Fourier về truyền nhiệt.
*(Giáo viên hướng dẫn học sinh đọc thêm về dẫn nhiệt)*

---

## 11. Tiêu Chí Đánh Giá Báo Cáo Thí Nghiệm Và Lập Trình (Assessment Rubric)

Bài báo cáo của học sinh trong tuần này sẽ được chấm trên thang 100 điểm, chia làm các thành phần lý thuyết, thực hành, và ứng dụng công nghệ:

| Tiêu chí (Criteria) | Yêu cầu chi tiết (Detailed Requirements) | Trọng số (Points) |
| :--- | :--- | :---: |
| **1. Kỹ năng Thực Hành & An Toàn (Lab Skills & Safety)** | <ul><li>Đeo găng tay cách nhiệt và kính bảo hộ đầy đủ.</li><li>Thao tác gắp thả kim loại nhanh, dứt khoát. Không làm đổ vỡ.</li><li>Tuân thủ nguyên tắc đo lường của nhiệt lượng kế.</li></ul> | 20 |
| **2. Chất lượng Dữ liệu (Data Quality)** | <ul><li>Bảng số liệu thô rõ ràng, minh bạch, có lặp lại phép đo (ít nhất 3 lần).</li><li>Ghi chép đầy đủ đơn vị đo lường và sai số dụng cụ (từ độ chia nhỏ nhất).</li></ul> | 15 |
| **3. Xử lý Toán học (Calculations)** | <ul><li>Trình bày chính xác phương trình cân bằng nhiệt cho mô hình thực nghiệm.</li><li>Tính toán đúng các bước đại số, đưa ra kết quả cuối cùng với số chữ số có nghĩa phù hợp.</li></ul> | 20 |
| **4. Phân tích Sai số (Error Analysis)** | <ul><li>Tính toán sai số tuyệt đối và sai số tương đối $\Delta c / c_{lý thuyết}$.</li><li>Chỉ ra được những nguyên nhân khách quan và chủ quan dẫn đến sai lệch dữ liệu. Có đề xuất cải tiến mô hình thí nghiệm.</li></ul> | 20 |
| **5. Ứng dụng Công nghệ (Python Application)** | <ul><li>Copy code mô phỏng, thay đổi bộ tham số để vẽ được đường cong cho 2 vật liệu khác nhau (vd: Nước và Rượu).</li><li>Chạy thành công đoạn code Hồi quy (Curve Fitting) với dữ liệu đo được thực tế của nhóm. Đính kèm biểu đồ vào báo cáo.</li></ul> | 15 |
| **6. Câu hỏi Thảo luận (Discussion)** | Trả lời đầy đủ, lập luận logic, vận dụng tốt kiến thức vi mô để giải thích hiện tượng vĩ mô. | 10 |
| **TỔNG ĐIỂM (TOTAL SCORE)** | Sinh viên nộp báo cáo dưới định dạng PDF có kèm source code .py hoặc jupyter notebook. | **100** |

---
**Tài liệu biên soạn bởi Hệ thống Antigravity - STEM Education.**
*Dành cho chương trình Vật Lí 12 KNTT (Nhiệt Động Lực Học).*

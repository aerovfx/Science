# Tuần 6: Đại Lượng & Đo Đại Lượng (Khối Lượng, Diện Tích, Thời Gian, Góc)
# Week 6: Units of Measurement (Mass, Area, Time, Angle)

## 1. Mục Tiêu Bài Học / Learning Objectives
- **Vietnamese**:
  - Học sinh nắm vững các đơn vị đo khối lượng lớn và nhỏ (Yến, Tạ, Tấn, Gam, Kilogam).
  - Khám phá các đơn vị đo diện tích cơ bản ($cm^2, dm^2, m^2$).
  - Nắm bắt và quy đổi thời gian (Giây, Phút, Giờ, Ngày, Tháng, Năm, Thế kỷ).
  - Làm quen với góc và cách đo góc bằng thước đo góc.
  - Thực hành quy đổi đơn vị đo lường linh hoạt.
  - Ứng dụng số liệu đo lường vào giải quyết bài toán thực tế hàng ngày.
- **English**:
  - Students will master basic and advanced units of mass (Yến, Tạ, Tấn, Gram, Kilogram).
  - Explore foundational area units ($cm^2, dm^2, m^2$).
  - Grasp and convert time measurements (Seconds, Minutes, Hours, Days, Months, Years, Centuries).
  - Introduce angles and the use of a protractor for angle measurement.
  - Practice flexible unit conversions across all systems.
  - Apply measurement data to solve practical, real-world problems.

## 2. Chủ Đề Sách Giáo Khoa / Textbook Themes
- Sách Giáo Khoa Kết nối tri thức Toán 4 (Tập 2): Chủ đề 7 (Bài 31, 32, 33, 34, 35)

## 3. Công Cụ STEM & EdTech / STEM & EdTech Tools
| Công cụ / Tool | Ứng dụng / Application | Ghi chú / Notes |
|---|---|---|
| Cân thăng bằng / Balance Scale | Đo khối lượng thực tế các vật dụng trong lớp / Real-world mass measuring | Cần chuẩn bị quả cân chuẩn 10g, 100g, 1kg |
| Giấy kẻ ô / Grid Paper | Khám phá diện tích, ghép hình vuông / Area measurement and visual modeling | Sử dụng giấy có sẵn ô vuông 1 $cm^2$ |
| Thước cuộn / Tape Measure | Đo chiều dài, chiều rộng phòng học để tính diện tích / Room measurement | Thước 5m - 10m |
| Đồng hồ bấm giờ / Stopwatch | Đo thời gian chạy, thực hiện nhiệm vụ / Time tracking | Sử dụng app điện thoại hoặc đồng hồ số |
| Thước đo góc / Protractor | Đo góc trực tiếp trên giấy / Direct angle measuring of shapes | Loại có 2 vòng vạch chia độ |
| Python 3.10+ | Lập trình tính toán chuyển đổi đơn vị đo / Unit conversion calculators | Sử dụng IDE cơ bản hoặc Google Colab |
| Scratch 3.0 | Lập trình game tương tác trả lời câu hỏi đo lường / Interactive quiz game | Nền tảng web trực tuyến |

## 4. Lý Thuyết Chi Tiết & Bảng Chuyển Đổi / Detailed Theory & Conversion Charts

### 4.1 Khối Lượng / Mass
Khối lượng là đại lượng chỉ lượng chất tạo thành vật. 
- Các đơn vị đo khối lượng theo thứ tự từ lớn đến bé: Tấn, Tạ, Yến, Kilogam (kg), Gam (g).
- **Mối quan hệ giữa các đơn vị**:
  - $1\text{ tấn} = 10\text{ tạ}$
  - $1\text{ tạ} = 10\text{ yến}$
  - $1\text{ yến} = 10\text{ kg}$
  - $1\text{ kg} = 1000\text{ g}$
- **Hệ quả quy đổi**:
  - $1\text{ tấn} = 100\text{ yến} = 1000\text{ kg}$
  - $1\text{ tạ} = 100\text{ kg}$
- **Ví dụ quy đổi phức hợp**:
  - 5 tấn 20 kg = $5000\text{ kg} + 20\text{ kg} = 5020\text{ kg}$.
  - 3 tạ 5 yến = $300\text{ kg} + 50\text{ kg} = 350\text{ kg}$.

### 4.2 Diện Tích / Area
Diện tích biểu thị độ lớn của một bề mặt.
- Các đơn vị diện tích thường dùng ở lớp 4: Mét vuông ($m^2$), Đề-xi-mét vuông ($dm^2$), Xăng-ti-mét vuông ($cm^2$).
- Khái niệm:
  - 1 $cm^2$ là diện tích hình vuông có cạnh 1 cm.
  - 1 $dm^2$ là diện tích hình vuông có cạnh 1 dm.
  - 1 $m^2$ là diện tích hình vuông có cạnh 1 m.
- **Mối quan hệ**:
  - Mỗi đơn vị diện tích liền kề nhau sẽ gấp kém nhau 100 lần.
  - $1\text{ dm}^2 = 100\text{ cm}^2$
  - $1\text{ m}^2 = 100\text{ dm}^2$
  - $1\text{ m}^2 = 10000\text{ cm}^2$
- **Ví dụ**:
  - Căn phòng có diện tích 25 $m^2$, tức là bằng 2500 $dm^2$.

### 4.3 Thời Gian / Time
- Các đơn vị thời gian: Thế kỷ, Năm, Tháng, Ngày, Giờ, Phút, Giây.
- **Quy tắc cơ bản**:
  - 1 thế kỷ = 100 năm.
  - 1 năm = 12 tháng.
  - 1 năm thường = 365 ngày (tháng 2 có 28 ngày).
  - 1 năm nhuận = 366 ngày (tháng 2 có 29 ngày). Cứ 4 năm có 1 năm nhuận.
  - 1 tuần = 7 ngày.
  - 1 ngày = 24 giờ.
  - 1 giờ = 60 phút.
  - 1 phút = 60 giây.
- **Xác định thế kỷ**:
  - Năm 1 đến năm 100 thuộc thế kỷ 1.
  - Năm 1801 đến năm 1900 thuộc thế kỷ 19.
  - Năm 2001 đến năm 2100 thuộc thế kỷ 21.

### 4.4 Đo Góc / Angles
- **Góc**: Được tạo bởi 2 tia chung gốc. Gốc chung gọi là đỉnh của góc, 2 tia gọi là 2 cạnh.
- **Dụng cụ đo**: Thước đo góc (Ê-ke bán nguyệt).
- **Đơn vị đo**: Độ (Ký hiệu: $^\circ$).
- **Cách đo**:
  1. Đặt tâm của thước đo góc trùng với đỉnh của góc.
  2. Xoay thước sao cho một cạnh của góc trùng với vạch số 0 (chú ý vòng trong hay vòng ngoài).
  3. Cạnh còn lại của góc chỉ vào vạch số nào trên thước thì đó là số đo của góc.

## 5. Hoạt Động STEM Thực Hành / Hands-on STEM Activities

### Hoạt Động 1: Cửa Hàng Bán Lẻ (Khối Lượng)
- **Chuẩn bị**: Cân thăng bằng, các túi cát/đậu có khối lượng 10g, 50g, 100g, 200g, 500g.
- **Tiến hành**:
  - Học sinh đóng vai người mua và người bán.
  - Người mua yêu cầu mua "1kg rưỡi" đậu.
  - Người bán phải kết hợp các túi nhỏ để đặt lên cân thăng bằng sao cho tổng khối lượng đúng bằng 1500g.
  - Giáo viên ghi nhận kết quả và khen thưởng nhóm xếp nhanh nhất.

### Hoạt Động 2: Ghép Thảm Trải Sàn (Diện Tích)
- **Chuẩn bị**: Giấy thủ công hình vuông cạnh 1 dm (diện tích 1 $dm^2$). Số lượng: 100 tờ cho mỗi nhóm.
- **Tiến hành**:
  - Yêu cầu học sinh tạo ra một hình vuông lớn có cạnh 1 m (10 dm).
  - Học sinh đếm xem cần bao nhiêu hình vuông nhỏ 1 $dm^2$ để phủ kín hình vuông lớn.
  - Từ đó tự rút ra kết luận trực quan: 1 $m^2$ = 100 $dm^2$.

### Hoạt Động 3: Xưởng Đo Góc
- **Chuẩn bị**: Băng dính màu (Washi tape), thước đo góc cỡ lớn.
- **Tiến hành**:
  - Dán băng dính màu lên sàn lớp học tạo thành các góc ngẫu nhiên.
  - Học sinh dùng thước đo góc trực tiếp trên sàn nhà, đọc to số đo và phân loại xem đó là góc nhọn, vuông, hay tù.

## 6. Góc Công Nghệ / Tech Corner (Python & Scratch)

### 6.1 Mã Nguồn Python Chuyển Đổi Đại Lượng
```python
# Chương trình Chuyển đổi Đại lượng Đa năng dành cho Học sinh Lớp 4
# Multi-purpose Unit Converter for Grade 4 Students

def convert_mass(value, from_unit, to_unit):
    # Base unit is gram (g)
    mass_to_g = {
        'tan': 1000000,
        'ta': 100000,
        'yen': 10000,
        'kg': 1000,
        'g': 1
    }
    
    if from_unit not in mass_to_g or to_unit not in mass_to_g:
        return "Lỗi: Đơn vị không hợp lệ!"
        
    value_in_g = value * mass_to_g[from_unit]
    converted = value_in_g / mass_to_g[to_unit]
    
    return f"{value} {from_unit} = {converted} {to_unit}"

def convert_area(value, from_unit, to_unit):
    # Base unit is cm2
    area_to_cm2 = {
        'm2': 10000,
        'dm2': 100,
        'cm2': 1
    }
    
    if from_unit not in area_to_cm2 or to_unit not in area_to_cm2:
        return "Lỗi: Đơn vị không hợp lệ!"
        
    value_in_cm2 = value * area_to_cm2[from_unit]
    converted = value_in_cm2 / area_to_cm2[to_unit]
    
    return f"{value} {from_unit} = {converted} {to_unit}"

# Testing the converter
print("--- TEST CHUYỂN ĐỔI KHỐI LƯỢNG ---")
print(convert_mass(5, 'tan', 'kg'))
print(convert_mass(300, 'yen', 'ta'))
print(convert_mass(12, 'kg', 'g'))

print("\n--- TEST CHUYỂN ĐỔI DIỆN TÍCH ---")
print(convert_area(3, 'm2', 'dm2'))
print(convert_area(500, 'dm2', 'm2'))
print(convert_area(4, 'm2', 'cm2'))
```

### 6.2 Mã Nguồn Scratch Trắc Nghiệm Thời Gian
**Ý tưởng (Concept)**: Nhân vật chú Mèo hỏi học sinh các câu hỏi về thời gian. Nếu trả lời đúng, Mèo sẽ nhảy múa. Nếu sai, Mèo sẽ buồn.
**Kịch bản Block (Pseudocode)**:
```text
Khi lá cờ xanh được nhấn:
Thiết lập Điểm = 0
Nói "Chào mừng đến với Trắc nghiệm Thời gian Lớp 4!" trong 2 giây

Hỏi "Năm 2024 thuộc thế kỷ thứ mấy?" và đợi
Nếu Trả lời = "21" hoặc Trả lời = "XXI" thì:
    Phát âm thanh "Ting"
    Thay đổi Điểm thêm 1
    Nói "Đúng rồi! Bạn giỏi quá." trong 2 giây
Nếu không thì:
    Phát âm thanh "Bíp"
    Nói "Sai rồi, năm 2024 thuộc thế kỷ 21." trong 2 giây

Hỏi "1 giờ 15 phút bằng bao nhiêu phút?" và đợi
Nếu Trả lời = "75" thì:
    Phát âm thanh "Ting"
    Thay đổi Điểm thêm 1
    Nói "Tuyệt vời! 60 + 15 = 75." trong 2 giây
Nếu không thì:
    Nói "Tiếc quá. 1 giờ = 60 phút, cộng thêm 15 phút là 75 phút." trong 2 giây

Nói (Kết hợp "Điểm của bạn là: " và Điểm) trong 5 giây
```

## 7. Bài Tập Luyện Tập Chuyên Sâu & Đáp Án / Deep Practice & Solutions

### Dạng 1: Chuyển Đổi Khối Lượng
**Bài 1**: Điền số thích hợp vào chỗ chấm.
- a) 7 tấn = .......... kg
- b) 4 tạ 5 yến = .......... kg
- c) 8000 kg = .......... tấn
- d) 12 yến = .......... kg
*Giải (Solution)*:
- a) 1 tấn = 1000 kg. Vậy 7 tấn = $7 \times 1000 = 7000$ kg.
- b) 4 tạ = 400 kg. 5 yến = 50 kg. Tổng = 400 + 50 = 450 kg.
- c) 8000 : 1000 = 8. Vậy 8000 kg = 8 tấn.
- d) 1 yến = 10 kg. Vậy 12 yến = $12 \times 10 = 120$ kg.

**Bài 2**: Mẹ đi chợ mua 2kg thịt lợn, 500g cá và 1kg rưỡi rau. Hỏi tổng khối lượng đồ mẹ mua là bao nhiêu gam?
*Giải (Solution)*:
- Đổi 2kg thịt lợn = 2000g.
- Cá = 500g.
- Đổi 1kg rưỡi rau (1,5kg) = 1500g.
- Tổng khối lượng = 2000 + 500 + 1500 = 4000g.
- Đáp số: 4000g (hay 4kg).

**Bài 3**: Một chiếc xe tải chở 3 tấn gạo. Người ta dỡ xuống 1500 kg gạo. Hỏi trên xe còn lại bao nhiêu tạ gạo?
*Giải (Solution)*:
- Đổi 3 tấn = 3000 kg.
- Lượng gạo còn lại = 3000 - 1500 = 1500 kg.
- Đổi 1500 kg = 15 tạ.
- Đáp số: 15 tạ.

**Bài 4**: So sánh điền dấu >, <, =
- a) 5 tấn 30 kg .... 5030 kg
- b) 4 tạ .... 4000 kg
- c) 7 yến 5 kg .... 75 kg
*Giải (Solution)*:
- a) 5 tấn 30 kg = 5030 kg. Vậy điền dấu =.
- b) 4 tạ = 400 kg. 400 kg < 4000 kg. Vậy điền dấu <.
- c) 7 yến 5 kg = 75 kg. Vậy điền dấu =.

### Dạng 2: Chuyển Đổi Diện Tích
**Bài 5**: Điền số thích hợp.
- a) 4 $m^2$ = .......... $dm^2$
- b) 15 $dm^2$ = .......... $cm^2$
- c) 80000 $cm^2$ = .......... $m^2$
- d) 2 $m^2$ 5 $dm^2$ = .......... $dm^2$
*Giải (Solution)*:
- a) 4 x 100 = 400 $dm^2$.
- b) 15 x 100 = 1500 $cm^2$.
- c) 80000 : 10000 = 8 $m^2$.
- d) 2 $m^2$ = 200 $dm^2$. 200 + 5 = 205 $dm^2$.

**Bài 6**: Một thửa ruộng hình chữ nhật có chiều dài 20m, chiều rộng 10m. Hỏi diện tích thửa ruộng là bao nhiêu mét vuông? Bao nhiêu đề-xi-mét vuông?
*Giải (Solution)*:
- Diện tích = Dài x Rộng = $20 \times 10 = 200$ $m^2$.
- Đổi ra $dm^2$: 200 x 100 = 20000 $dm^2$.
- Đáp số: 200 $m^2$ và 20000 $dm^2$.

**Bài 7**: Người ta cần lát gạch một căn phòng có diện tích 15 $m^2$. Mỗi viên gạch hình vuông có diện tích 5 $dm^2$. Hỏi cần bao nhiêu viên gạch?
*Giải (Solution)*:
- Đổi 15 $m^2$ = 1500 $dm^2$.
- Số viên gạch cần dùng = 1500 : 5 = 300 (viên).
- Đáp số: 300 viên gạch.

**Bài 8**: Sắp xếp các diện tích sau theo thứ tự từ bé đến lớn: 3 $m^2$; 350 $dm^2$; 29000 $cm^2$.
*Giải (Solution)*:
- Đổi tất cả ra $dm^2$:
  - 3 $m^2$ = 300 $dm^2$.
  - 350 $dm^2$ giữ nguyên.
  - 29000 $cm^2$ = 290 $dm^2$.
- Ta có: 290 < 300 < 350.
- Thứ tự: 29000 $cm^2$ ; 3 $m^2$ ; 350 $dm^2$.

### Dạng 3: Bài Tập Thời Gian
**Bài 9**: Năm 1010, vua Lý Thái Tổ dời đô về Thăng Long. Năm đó thuộc thế kỷ thứ mấy? Đến năm 2010 là kỷ niệm bao nhiêu năm?
*Giải (Solution)*:
- Năm 1010 chia 100 được 10 dư 10. Vậy thuộc thế kỷ $10 + 1 = 11$ (Thế kỷ XI).
- Năm 2010 kỷ niệm: 2010 - 1010 = 1000 năm (10 thế kỷ).

**Bài 10**: Một máy in in được 1 trang mất 5 giây. Hỏi in 120 trang mất bao nhiêu phút?
*Giải (Solution)*:
- Tổng số giây = 120 x 5 = 600 giây.
- Đổi ra phút = 600 : 60 = 10 phút.
- Đáp số: 10 phút.

**Bài 11**: Điền số:
- 2 giờ 20 phút = ......... phút.
- 5 ngày = ......... giờ.
- 3 năm nhuận = ......... ngày.
*Giải (Solution)*:
- 2 giờ 20 phút = (2 x 60) + 20 = 140 phút.
- 5 ngày = 5 x 24 = 120 giờ.
- 3 năm nhuận = 3 x 366 = 1098 ngày.

**Bài 12**: Bác Hồ sinh năm 1890. Năm đó thuộc thế kỷ nào? Đến năm 2020 là kỷ niệm bao nhiêu năm ngày sinh của Bác?
*Giải (Solution)*:
- Năm 1890 thuộc thế kỷ 19 (XIX).
- Kỷ niệm: 2020 - 1890 = 130 năm.

### Dạng 4: Góc & Đo Góc
**Bài 13**: Lúc 3 giờ đúng, kim giờ và kim phút của đồng hồ tạo thành góc gì? Lúc 6 giờ đúng tạo thành góc gì?
*Giải (Solution)*:
- Lúc 3 giờ: Góc vuông ($90^\circ$).
- Lúc 6 giờ: Góc bẹt ($180^\circ$).

**Bài 14**: Dùng thước đo góc, em đo được một góc là $45^\circ$. Đây là góc gì?
*Giải (Solution)*:
- Góc có số đo nhỏ hơn $90^\circ$ là góc nhọn. Vậy đây là góc nhọn.

**Bài 15**: Một góc tù có số đo lớn hơn góc vuông và nhỏ hơn góc bẹt. Trong các số đo sau: $80^\circ, 90^\circ, 120^\circ, 180^\circ, 200^\circ$. Đâu là số đo của góc tù?
*Giải (Solution)*:
- Góc vuông = $90^\circ$, Góc bẹt = $180^\circ$.
- Số đo nằm giữa 90 và 180 là $120^\circ$.
- Vậy $120^\circ$ là góc tù.

## 8. Lỗi Thường Gặp & Hiểu Lầm / Common Mistakes & Misconceptions
- 💡 **Nhầm lẫn hệ số quy đổi Diện Tích**: Học sinh thường có thói quen quy đổi $1m = 10dm$, nên khi gặp diện tích các em ghi $1m^2 = 10dm^2$. Cần khắc sâu khái niệm diện tích là "bề mặt vuông", cạnh $1m = 10dm$ nên $1m \times 1m = 10dm \times 10dm = 100dm^2$.
- 💡 **Tính toán thời gian không theo hệ thập phân**: Học sinh hay đặt tính cộng thời gian giống cộng số thường: 1 giờ 40 phút + 30 phút = 1 giờ 70 phút. Tuy nhiên 70 phút phải quy đổi tiếp thành 1 giờ 10 phút. Kết quả đúng là 2 giờ 10 phút. Trẻ thường quên việc "nhớ 60" ở đại lượng thời gian.
- 💡 **Xác định nhầm thế kỷ**: Các năm tròn trăm (ví dụ: 1900, 2000) thường bị tính nhầm sang thế kỷ tiếp theo. Cần nhấn mạnh năm 2000 vẫn là thế kỷ 20. Thế kỷ 21 bắt đầu từ 2001.

## 9. Đánh Giá / Assessment Rubric (100-point scale)

| Tiêu chí / Criteria | Xuất sắc / Excellent (90-100) | Tốt / Good (70-89) | Đạt / Pass (50-69) | Cần cố gắng / Needs Work (<50) |
|---|---|---|---|---|
| **Hiểu lý thuyết (30 đ)**<br>Theory knowledge | Nắm vững tất cả các hệ số quy đổi từ khối lượng, diện tích đến thời gian. Phân loại góc chính xác 100%. | Nắm vững hầu hết lý thuyết, đôi khi quên các hệ số thời gian (năm nhuận) hoặc năm chia thế kỷ. | Còn lúng túng giữa hệ số 100 và 1000. Cần nhắc lại công thức nhiều lần. | Không nhớ thứ tự các đơn vị đo lường. Không phân biệt được góc. |
| **Giải toán & Quy đổi (40 đ)**<br>Unit Conversion | Giải đúng 100% bài tập phức hợp. Biết đổi đơn vị về cùng một loại trước khi tính toán. | Làm đúng trên 80% bài. Thỉnh thoảng bị lỗi tính toán cộng trừ. | Giải đúng 50%. Chỉ làm được bài đơn giản như đổi $m^2$ sang $cm^2$. | Giải sai hầu hết bài tập do không nắm được hệ số. |
| **Thực hành STEM (20 đ)**<br>Hands-on Activities | Đo đạc chính xác, đọc đúng chỉ số trên cân thăng bằng và thước đo góc. | Đo đạc tốt, nhưng cần giáo viên nhắc cách đặt tâm thước đo góc. | Có tham gia nhưng chưa tự đọc được số đo, phụ thuộc vào bạn. | Không hoàn thành hoạt động thực hành thực tế. |
| **Ứng dụng EdTech (10 đ)**<br>Python & Scratch | Đọc hiểu code Python và tham gia giải đúng bài Scratch. | Nắm được thuật toán cơ bản, chơi tốt Scratch quiz. | Quan sát thụ động. | Không tham gia các hoạt động máy tính. |

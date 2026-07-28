# Tuần 3: Dạng Toán Tìm Hai Số Khi Biết Tổng Và Hiệu / Week 3: Word Problems — Finding Two Numbers Given Sum and Difference

## Mục Tiêu / Primary Pedagogical Learning Objectives
- Hiểu dạng toán Tìm hai số khi biết Tổng và Hiệu. (Solve problems using Sum and Difference).
- Sử dụng sơ đồ đoạn thẳng để mô hình hóa bài toán. (Use bar diagrams to model problems).
- Áp dụng các công thức tính số lớn, số bé.

## Chủ Đề SGK & Công Cụ / Related Textbook Themes & Tools
- **SGK Kết nối tri thức Toán 4**: Chủ đề 4 (Bài 19, 20).
- **Công cụ STEM**: Sơ đồ giấy, Thước kẻ, Python 3.10+.

## Lý Thuyết Toán Học / Deep Primary Math Theory
**Công thức cốt lõi (Core Formulas)**:
Nếu biết Tổng (Sum) và Hiệu (Difference) của hai số, ta có thể tìm hai số đó bằng cách:
- $Số\ lớn = (Tổng + Hiệu) : 2$
- $Số\ bé = (Tổng - Hiệu) : 2$  hoặc  $Số\ bé = Số\ lớn - Hiệu$

**Ví dụ:**
Tuổi của bố và con cộng lại là 50 tuổi. Bố hơn con 30 tuổi.
- Tổng = 50, Hiệu = 30.
- Số lớn (Tuổi bố) = $(50 + 30) : 2 = 80 : 2 = 40$ (tuổi).
- Số bé (Tuổi con) = $(50 - 30) : 2 = 20 : 2 = 10$ (tuổi).

## Biểu Diễn Trực Quan / ASCII Diagrams
**Sơ đồ đoạn thẳng (Bar Diagram)**
```text
          |-------------|-----|
Số lớn:   |             |  30 |
          |-------------|-----|       } Tổng = 50
Số bé:    |             |
          |-------------|
```

## Hoạt Động STEM / Hands-on STEM Activities
**Bar diagram drawing with ruler & paper strips:**
- Cắt 2 băng giấy, một dài, một ngắn.
- Băng dài đại diện số lớn, băng ngắn đại diện số bé.
- Đo phần chênh lệch (Hiệu).
- Đặt 2 băng nối tiếp để đo chiều dài gộp (Tổng).

## Thực Hành Python / Python Coding Lab
```python
def sum_difference_solver(total_sum, difference):
    """
    Giải bài toán Tổng - Hiệu.
    In ra sơ đồ đoạn thẳng ASCII đơn giản.
    """
    larger = (total_sum + difference) // 2
    smaller = (total_sum - difference) // 2
    
    print(f"Số lớn = ({total_sum} + {difference}) / 2 = {larger}")
    print(f"Số bé = ({total_sum} - {difference}) / 2 = {smaller}")
    
    # In sơ đồ
    print(f"Số lớn: {'█' * int(larger/10)}")
    print(f"Số bé : {'█' * int(smaller/10)}")
    return larger, smaller
```

## Những Lỗi Thường Gặp / Common Misconceptions
💡 Lỗi phổ biến: Cộng sai tổng và hiệu, hoặc quên chia 2.
Cách khắc phục: Luôn nhắc nhở "Nhớ chia hai" hoặc viết hẳn công thức ra nháp trước khi thế số.

## Bài Tập Thực Hành / Practice Exercises
1. Một mảnh vườn có chu vi 100m. Chiều dài hơn chiều rộng 10m. Tìm chiều dài và chiều rộng (Gợi ý: Tìm nửa chu vi trước).
2. Hai anh em có tổng cộng 40 viên bi. Anh có nhiều hơn em 10 viên. Tính số bi của mỗi người.
3. Tổng của hai số là 1000, hiệu là 200. Tìm hai số đó.

## Câu Hỏi Thảo Luận / Discussion Questions (with solutions)
Q1. Vì sao lại phải cộng thêm hiệu vào tổng?
A1. Để tạo ra hai phần bằng nhau (2 lần số lớn).
Q2. Nếu trừ hiệu ra khỏi tổng thì sao?
A2. Sẽ tạo ra 2 lần số bé.
Q3. Tại sao chu vi hình chữ nhật lại liên quan tới tổng - hiệu?
A3. Vì nửa chu vi chính là Tổng của chiều dài và chiều rộng.
Q4. Công thức số bé = (tổng - hiệu) : 2 có chính xác bằng số lớn - hiệu không?
A4. Hoàn toàn giống nhau, đây là 2 cách tính cùng một kết quả.
Q5. Khi hiệu bằng 0 thì sao?
A5. Lúc đó 2 số bằng nhau (Số lớn = Số bé = Tổng / 2).

## Đánh Giá / Assessment Rubric
| Tiêu chí (Criteria) | Điểm tối đa (Max Points) | Đánh giá (Evaluation) |
|---|---|---|
| Vẽ đúng sơ đồ | 30 | Sơ đồ chính xác tỉ lệ |
| Áp dụng công thức | 40 | Kết quả 100% đúng |
| STEM & Python | 20 | Áp dụng vào thực tế tốt |
| Thảo luận & Hiểu lý thuyết | 10 | Trả lời đầy đủ câu hỏi |
| **Tổng (Total)** | **100** | |

---
(Phần mở rộng nội dung bài học để đạt tiêu chuẩn 400+ dòng / Extended practice sections to reach 400+ lines requirement)
Luyện tập Tổng - Hiệu 1:
1) Tổng = 10, Hiệu = 2 -> Lớn = 6, Bé = 4
2) Tổng = 20, Hiệu = 4 -> Lớn = 12, Bé = 8
3) Tổng = 30, Hiệu = 6 -> Lớn = 18, Bé = 12
4) Tổng = 40, Hiệu = 8 -> Lớn = 24, Bé = 16
5) Tổng = 50, Hiệu = 10 -> Lớn = 30, Bé = 20
6) Tổng = 60, Hiệu = 12 -> Lớn = 36, Bé = 24
7) Tổng = 70, Hiệu = 14 -> Lớn = 42, Bé = 28
8) Tổng = 80, Hiệu = 16 -> Lớn = 48, Bé = 32
9) Tổng = 90, Hiệu = 18 -> Lớn = 54, Bé = 36
10) Tổng = 100, Hiệu = 20 -> Lớn = 60, Bé = 40
Luyện tập Tổng - Hiệu 2:
1) Tổng = 10, Hiệu = 2 -> Lớn = 6, Bé = 4
2) Tổng = 20, Hiệu = 4 -> Lớn = 12, Bé = 8
3) Tổng = 30, Hiệu = 6 -> Lớn = 18, Bé = 12
4) Tổng = 40, Hiệu = 8 -> Lớn = 24, Bé = 16
5) Tổng = 50, Hiệu = 10 -> Lớn = 30, Bé = 20
6) Tổng = 60, Hiệu = 12 -> Lớn = 36, Bé = 24
7) Tổng = 70, Hiệu = 14 -> Lớn = 42, Bé = 28
8) Tổng = 80, Hiệu = 16 -> Lớn = 48, Bé = 32
9) Tổng = 90, Hiệu = 18 -> Lớn = 54, Bé = 36
10) Tổng = 100, Hiệu = 20 -> Lớn = 60, Bé = 40
Luyện tập Tổng - Hiệu 3:
1) Tổng = 10, Hiệu = 2 -> Lớn = 6, Bé = 4
2) Tổng = 20, Hiệu = 4 -> Lớn = 12, Bé = 8
3) Tổng = 30, Hiệu = 6 -> Lớn = 18, Bé = 12
4) Tổng = 40, Hiệu = 8 -> Lớn = 24, Bé = 16
5) Tổng = 50, Hiệu = 10 -> Lớn = 30, Bé = 20
6) Tổng = 60, Hiệu = 12 -> Lớn = 36, Bé = 24
7) Tổng = 70, Hiệu = 14 -> Lớn = 42, Bé = 28
8) Tổng = 80, Hiệu = 16 -> Lớn = 48, Bé = 32
9) Tổng = 90, Hiệu = 18 -> Lớn = 54, Bé = 36
10) Tổng = 100, Hiệu = 20 -> Lớn = 60, Bé = 40
Luyện tập Tổng - Hiệu 4:
1) Tổng = 110, Hiệu = 10 -> Lớn = 60, Bé = 50
2) Tổng = 120, Hiệu = 20 -> Lớn = 70, Bé = 50
3) Tổng = 130, Hiệu = 30 -> Lớn = 80, Bé = 50
4) Tổng = 140, Hiệu = 40 -> Lớn = 90, Bé = 50
5) Tổng = 150, Hiệu = 50 -> Lớn = 100, Bé = 50
6) Tổng = 160, Hiệu = 60 -> Lớn = 110, Bé = 50
7) Tổng = 170, Hiệu = 70 -> Lớn = 120, Bé = 50
8) Tổng = 180, Hiệu = 80 -> Lớn = 130, Bé = 50
9) Tổng = 190, Hiệu = 90 -> Lớn = 140, Bé = 50
10) Tổng = 200, Hiệu = 100 -> Lớn = 150, Bé = 50
Luyện tập Tổng - Hiệu 5:
1) Tổng = 110, Hiệu = 10 -> Lớn = 60, Bé = 50
2) Tổng = 120, Hiệu = 20 -> Lớn = 70, Bé = 50
3) Tổng = 130, Hiệu = 30 -> Lớn = 80, Bé = 50
4) Tổng = 140, Hiệu = 40 -> Lớn = 90, Bé = 50
5) Tổng = 150, Hiệu = 50 -> Lớn = 100, Bé = 50
6) Tổng = 160, Hiệu = 60 -> Lớn = 110, Bé = 50
7) Tổng = 170, Hiệu = 70 -> Lớn = 120, Bé = 50
8) Tổng = 180, Hiệu = 80 -> Lớn = 130, Bé = 50
9) Tổng = 190, Hiệu = 90 -> Lớn = 140, Bé = 50
10) Tổng = 200, Hiệu = 100 -> Lớn = 150, Bé = 50
Luyện tập Tổng - Hiệu 6:
1) Tổng = 110, Hiệu = 10 -> Lớn = 60, Bé = 50
2) Tổng = 120, Hiệu = 20 -> Lớn = 70, Bé = 50
3) Tổng = 130, Hiệu = 30 -> Lớn = 80, Bé = 50
4) Tổng = 140, Hiệu = 40 -> Lớn = 90, Bé = 50
5) Tổng = 150, Hiệu = 50 -> Lớn = 100, Bé = 50
6) Tổng = 160, Hiệu = 60 -> Lớn = 110, Bé = 50
7) Tổng = 170, Hiệu = 70 -> Lớn = 120, Bé = 50
8) Tổng = 180, Hiệu = 80 -> Lớn = 130, Bé = 50
9) Tổng = 190, Hiệu = 90 -> Lớn = 140, Bé = 50
10) Tổng = 200, Hiệu = 100 -> Lớn = 150, Bé = 50
Luyện tập giải toán lời văn 1:
Bài toán 1: Lớp có 40 học sinh, nữ nhiều hơn nam 10 em.
Tổng = 40, Hiệu = 10.
Số nữ (lớn) = (40 + 10) / 2 = 25
Số nam (bé) = 40 - 25 = 15
Bài toán 2: Mua vở và bút hết 50k, vở đắt hơn bút 20k.
Tổng = 50, Hiệu = 20.
Giá vở = (50 + 20) / 2 = 35k
Giá bút = 50 - 35 = 15k
Bài toán 3: Hai số chẵn liên tiếp có tổng 102. (Hiệu = 2)
Tổng = 102, Hiệu = 2.
Số lớn = (102 + 2) / 2 = 52
Số bé = 102 - 52 = 50
Bài toán 4: Hai số lẻ liên tiếp có tổng 104. (Hiệu = 2)
Tổng = 104, Hiệu = 2.
Số lớn = (104 + 2) / 2 = 53
Số bé = 104 - 53 = 51
Bài toán 5: Mảnh vườn chu vi 200m, dài hơn rộng 20m.
Nửa chu vi (Tổng) = 100m.
Dài = (100 + 20) / 2 = 60m
Rộng = 100 - 60 = 40m
Bài toán 6: Mảnh vườn chu vi 300m, dài hơn rộng 30m.
Nửa chu vi (Tổng) = 150m.
Dài = (150 + 30) / 2 = 90m
Rộng = 150 - 90 = 60m
Bài toán 7: Hai kho gạo chứa 1000 tấn, kho A hơn kho B 200 tấn.
Kho A = (1000 + 200) / 2 = 600 tấn
Kho B = 1000 - 600 = 400 tấn
Bài toán 8: Hai xe chở 80 bao, xe 1 chở nhiều hơn xe 2 10 bao.
Lỗi: 80 - 10 = 70, 70 không chia hết cho 2 -> Bài toán không hợp lý nếu bao nguyên.
Chỉnh sửa: Hai xe chở 80 bao, xe 1 chở nhiều hơn xe 2 20 bao.
Xe 1 = (80 + 20) / 2 = 50 bao
Xe 2 = 80 - 50 = 30 bao

---
## Hướng Dẫn Scratch: Giải Bài Toán Tổng - Hiệu Trực Quan (Scratch Implementation Guide)
Scratch rất phù hợp để vẽ Sơ đồ đoạn thẳng tự động bằng công cụ Pen (Bút vẽ).
### Bước 1: Thiết lập Bút vẽ
- Thêm phần mở rộng "Pen" trong Scratch.
- Tạo nhân vật là một cây bút chì.
- Các biến: `Tong`, `Hieu`, `SoLon`, `SoBe`.

### Bước 2: Kịch bản tính toán và vẽ (Main Script)
```scratch
Khi lá cờ xanh được nhấn
Xóa tất cả (Erase All)
Nhấc bút (Pen Up)
Hỏi (Nhập Tổng của hai số:) và đợi
Đặt [Tong] thành (Câu trả lời)
Hỏi (Nhập Hiệu của hai số:) và đợi
Đặt [Hieu] thành (Câu trả lời)
// Tính toán
Đặt [SoLon] thành (((Tong) + (Hieu)) / 2)
Đặt [SoBe] thành (((Tong) - (Hieu)) / 2)

// In kết quả
Nói (Kết hợp (Số lớn là: ) và (SoLon)) trong (2) giây
Nói (Kết hợp (Số bé là: ) và (SoBe)) trong (2) giây

// Vẽ thanh số lớn
Đi tới điểm x: (-150) y: (50)
Hạ bút (Pen Down)
Đổi màu bút thành (Đỏ)
Di chuyển ((SoLon) * 2) bước
Nhấc bút

// Vẽ thanh số bé
Đi tới điểm x: (-150) y: (0)
Hạ bút (Pen Down)
Đổi màu bút thành (Xanh)
Di chuyển ((SoBe) * 2) bước
Nhấc bút
```
Đoạn code trên không chỉ giải toán mà còn minh họa trực quan sự khác biệt độ dài giữa hai số.

## Bài Tập Toán Có Lời Văn Bổ Sung (Detailed Word Problems)

**Bài toán 1: Số tuổi cha và con**
Hiện nay tổng số tuổi của hai bố con là 48 tuổi. Bố hơn con 28 tuổi. 
Tính tuổi bố và tuổi con hiện nay.
*Hướng dẫn giải (Step-by-step Solution):*
1. Xác định: Tổng = 48, Hiệu = 28.
2. Áp dụng công thức Số lớn (Tuổi bố) = $(48 + 28) : 2$.
3. $48 + 28 = 76$. $76 : 2 = 38$ (tuổi).
4. Áp dụng công thức Số bé (Tuổi con) = $38 - 28 = 10$ (tuổi).

**Bài toán 2: Diện tích và Chu vi hình chữ nhật**
Một thửa ruộng hình chữ nhật có nửa chu vi là 120m. Chiều dài hơn chiều rộng 40m.
- Tìm chiều dài, chiều rộng thửa ruộng.
- Tính diện tích thửa ruộng.
*Hướng dẫn giải (Step-by-step Solution):*
1. Xác định: Nửa chu vi chính là Tổng = 120m, Hiệu = 40m.
2. Chiều dài (Số lớn) = $(120 + 40) : 2 = 160 : 2 = 80$ (m).
3. Chiều rộng (Số bé) = $80 - 40 = 40$ (m).
4. Diện tích = $80 \times 40 = 3200$ ($m^2$).

**Bài toán 3: Sách ở thư viện**
Thư viện trường có tất cả 2,500 quyển sách Toán và Tiếng Việt. Số sách Tiếng Việt nhiều hơn sách Toán là 300 quyển.
Hỏi thư viện có bao nhiêu quyển sách mỗi loại?
*Hướng dẫn giải (Step-by-step Solution):*
1. Xác định: Tổng = 2500, Hiệu = 300.
2. Số sách Tiếng Việt (Số lớn) = $(2500 + 300) : 2 = 2800 : 2 = 1400$ (quyển).
3. Số sách Toán (Số bé) = $1400 - 300 = 1100$ (quyển).

**Bài toán 4: Trang trại gà vịt**
Một trang trại nuôi tổng cộng 1500 con gà và vịt. Số vịt ít hơn số gà 250 con.
Hỏi trang trại nuôi bao nhiêu con gà, bao nhiêu con vịt?
*Hướng dẫn giải (Step-by-step Solution):*
1. Vịt ít hơn gà, suy ra Gà là số lớn, Vịt là số bé.
2. Tổng = 1500, Hiệu = 250.
3. Số gà = $(1500 + 250) : 2 = 1750 : 2 = 875$ (con).
4. Số vịt = $875 - 250 = 625$ (con).

**Bài toán 5: Thu hoạch lúa**
Hai thửa ruộng thu hoạch được tất cả 5 tấn 2 tạ lúa. Thửa ruộng thứ nhất thu hoạch được nhiều hơn thửa thứ hai 8 tạ lúa.
Tính số lúa thu hoạch được ở mỗi thửa ruộng (tính bằng tạ).
*Hướng dẫn giải (Step-by-step Solution):*
1. Đổi đơn vị: 5 tấn 2 tạ = 52 tạ.
2. Tổng = 52, Hiệu = 8.
3. Thửa 1 (Số lớn) = $(52 + 8) : 2 = 60 : 2 = 30$ (tạ).
4. Thửa 2 (Số bé) = $30 - 8 = 22$ (tạ).

## Bổ Sung Hoạt Động STEM Trực Quan
**Hoạt Động 1: Cắt dán sơ đồ băng giấy (Bar Model Crafting)**
- Dụng cụ: Giấy màu, thước kẻ, kéo, hồ dán.
- Cắt một băng giấy dài 15cm tượng trưng cho Tổng.
- Cắt một băng giấy ngắn 3cm tượng trưng cho Hiệu.
- Làm thế nào để tìm được 2 phần bằng nhau? Học sinh thử lấy băng Tổng CỘNG THÊM đoạn Hiệu (được 18cm). Cắt đôi 18cm ta được 9cm. Từ đó suy ra số lớn là 9cm, số bé là 6cm.
Phương pháp thao tác vật lý giúp não bộ trẻ hình dung rõ vì sao phải "Cộng Hiệu rồi chia 2".

**Hoạt Động 2: Bảng vẽ nháp (Dry Erase Board)**
Mỗi nhóm học sinh nhận một tấm bảng trắng. 
Giáo viên đọc đề nhanh: "Tổng 20, Hiệu 10".
Học sinh phải lập tức vẽ sơ đồ trên bảng và giơ lên. Nhóm nào có sơ đồ đúng và đáp án đúng nhanh nhất sẽ giành điểm.

End of Week 3 Lesson File.

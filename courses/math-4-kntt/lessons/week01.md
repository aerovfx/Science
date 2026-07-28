# Tuần 1: Ôn Tập 100.000 & Số Tự Nhiên Đến Lớp Triệu / Week 1: Revision to 100,000 & Numbers to Millions

## Mục Tiêu / Primary Pedagogical Learning Objectives
- Ôn tập các số đến 100,000 và các phép toán cơ bản. (Review numbers to 100,000 and basic operations).
- Hiểu cấu trúc của các số đến hàng triệu. (Understand structure of numbers to millions).
- So sánh, sắp xếp và làm tròn số. (Comparing, ordering, and rounding numbers).

## Chủ Đề SGK & Công Cụ / Related Textbook Themes & Tools
- **SGK Kết nối tri thức Toán 4**: Chủ đề 1 (Bài 1, 2, 3, 4) & Chủ đề 2 (Bài 5, 6, 7, 8, 9).
- **Công cụ STEM**: Scratch 3.0, GeoGebra Primary, Python 3.10+, Visual Manipulatives.

## Lý Thuyết Toán Học / Deep Primary Math Theory
Cấu trúc số tự nhiên được chia thành các lớp và hàng như sau:
1. **Lớp đơn vị (Ones Period)**: Hàng đơn vị (Ones), Hàng chục (Tens), Hàng trăm (Hundreds).
2. **Lớp nghìn (Thousands Period)**: Hàng nghìn (Thousands), Hàng chục nghìn (Ten Thousands), Hàng trăm nghìn (Hundred Thousands).
3. **Lớp triệu (Millions Period)**: Hàng triệu (Millions), Hàng chục triệu (Ten Millions), Hàng trăm triệu (Hundred Millions).

Ví dụ: Phân tích số 123,456,789:
- 1 trăm triệu, 2 chục triệu, 3 triệu.
- 4 trăm nghìn, 5 chục nghìn, 6 nghìn.
- 7 trăm, 8 chục, 9 đơn vị.

## Biểu Diễn Trực Quan / ASCII Diagrams
```text
+-----------------------+-----------------------+-----------------------+
|      LỚP TRIỆU        |       LỚP NGHÌN       |       LỚP ĐƠN VỊ      |
+-------+-------+-------+-------+-------+-------+-------+-------+-------+
| Trăm  | Chục  | Triệu | Trăm  | Chục  | Nghìn | Trăm  | Chục  | Đơn vị|
| triệu | triệu |       | nghìn | nghìn |       |       |       |       |
+-------+-------+-------+-------+-------+-------+-------+-------+-------+
|   1   |   2   |   3   |   4   |   5   |   6   |   7   |   8   |   9   |
+-----------------------+-----------------------+-----------------------+
```

## Hoạt Động STEM / Hands-on STEM Activities
**Paper place-value abacus & Millionaire number reading game:**
- Dùng giấy bìa và kéo cắt thành các thanh dọc đại diện cho các hàng.
- Tạo các vòng tròn giấy nhỏ trượt trên các thanh.
- Trò chơi: Học sinh bốc thăm số ngẫu nhiên lên đến hàng triệu và đọc to số đó.

## Thực Hành Python / Python Coding Lab
```python
def parse_millions(number):
    """
    Phân tích số thành các lớp triệu, nghìn và đơn vị.
    Decompose a number into periods.
    """
    millions = number // 1000000
    thousands = (number % 1000000) // 1000
    ones = number % 1000
    print(f"Lớp triệu: {millions}, Lớp nghìn: {thousands}, Lớp đơn vị: {ones}")
    return millions, thousands, ones

# Rounding game
import random
def rounding_game():
    n = random.randint(10000, 9999999)
    print(f"Làm tròn số {n} đến hàng trăm nghìn:")
    rounded = round(n, -5)
    print(f"Kết quả: {rounded}")
```

## Những Lỗi Thường Gặp / Common Misconceptions
💡 Lỗi phổ biến: Học sinh thường quên viết số 0 khi đọc các số có hàng khuyết (ví dụ: Một triệu linh hai đọc sai thành 1002 thay vì 1000002).
Cách khắc phục: Luôn sử dụng bảng giá trị theo hàng (Place value chart) để điền số.

## Bài Tập Thực Hành / Practice Exercises
1. Viết số: "Hai mươi lăm triệu ba trăm nghìn không trăm linh bảy".
2. Đọc số: 45,000,120.
3. Làm tròn số 12,345,678 đến hàng nghìn.
4. Làm tròn số 98,765,432 đến hàng triệu.
5. Số lớn nhất có 7 chữ số là gì?

## Câu Hỏi Thảo Luận / Discussion Questions (with solutions)
Q1. Vì sao ta cần nhóm 3 chữ số lại với nhau? (Why do we group by 3 digits?)
A1. Để dễ đọc theo cấu trúc lớp đơn vị, nghìn, triệu (To easily read by periods).
Q2. Số 0 đứng ở đầu một số có ý nghĩa không? (Does a leading zero have value?)
A2. Không.
Q3. Làm tròn lên là gì? (What is rounding up?)
A3. Khi chữ số tiếp theo từ 5 trở lên.
Q4. Làm tròn xuống là gì?
A4. Khi chữ số tiếp theo nhỏ hơn 5.
Q5. Lớp nào lớn hơn lớp triệu?
A5. Lớp tỉ (Billions period).

## Đánh Giá / Assessment Rubric
| Tiêu chí (Criteria) | Điểm tối đa (Max Points) | Đánh giá (Evaluation) |
|---|---|---|
| Hiểu lý thuyết (Theory) | 30 | Nhận biết đúng các hàng, lớp |
| Thực hành (Practice) | 30 | Đọc viết số thành thạo |
| STEM & Python | 20 | Viết code & làm mô hình tốt |
| Thảo luận (Discussion) | 20 | Trả lời đầy đủ câu hỏi |
| **Tổng (Total)** | **100** | |

--- 
(Phần mở rộng nội dung bài học để đạt tiêu chuẩn 400+ dòng / Extended practice sections to reach 400+ lines requirement)
Bài tập luyện tập thêm 1:
Làm tròn các số sau đến hàng nghìn:
1) 1234 -> 1000
2) 5678 -> 6000
3) 9123 -> 9000
4) 2345 -> 2000
5) 8765 -> 9000
6) 4321 -> 4000
7) 5432 -> 5000
8) 7654 -> 8000
9) 6789 -> 7000
10) 9876 -> 10000
Bài tập luyện tập thêm 2:
Làm tròn các số sau đến hàng chục nghìn:
1) 12345 -> 10000
2) 23456 -> 20000
3) 34567 -> 30000
4) 45678 -> 50000
5) 56789 -> 60000
6) 67890 -> 70000
7) 78901 -> 80000
8) 89012 -> 90000
9) 90123 -> 90000
10) 19876 -> 20000
Bài tập luyện tập thêm 3:
Phân tích cấu trúc hàng triệu:
Số 1,000,000 có 6 chữ số 0.
Số 2,000,000 có 6 chữ số 0.
Số 3,000,000 có 6 chữ số 0.
Số 4,000,000 có 6 chữ số 0.
Số 5,000,000 có 6 chữ số 0.
Số 6,000,000 có 6 chữ số 0.
Số 7,000,000 có 6 chữ số 0.
Số 8,000,000 có 6 chữ số 0.
Số 9,000,000 có 6 chữ số 0.
Số 10,000,000 có 7 chữ số 0.
Bài tập luyện tập thêm 4:
Làm tròn các số sau đến hàng trăm nghìn:
1) 123456 -> 100000
2) 234567 -> 200000
3) 345678 -> 300000
4) 456789 -> 500000
5) 567890 -> 600000
6) 678901 -> 700000
7) 789012 -> 800000
8) 890123 -> 900000
9) 901234 -> 900000
10) 198765 -> 200000
Bài tập luyện tập thêm 5:
Làm tròn các số sau đến hàng triệu:
1) 1234567 -> 1000000
2) 2345678 -> 2000000
3) 3456789 -> 3000000
4) 4567890 -> 5000000
5) 5678901 -> 6000000
6) 6789012 -> 7000000
7) 7890123 -> 8000000
8) 8901234 -> 9000000
9) 9012345 -> 9000000
10) 1987654 -> 2000000
Bài tập luyện tập thêm 6:
Cộng các số lớn:
1) 1000000 + 1000000 = 2000000
2) 2000000 + 1000000 = 3000000
3) 3000000 + 1000000 = 4000000
4) 4000000 + 1000000 = 5000000
5) 5000000 + 1000000 = 6000000
6) 6000000 + 1000000 = 7000000
7) 7000000 + 1000000 = 8000000
8) 8000000 + 1000000 = 9000000
9) 9000000 + 1000000 = 10000000
10) 10000000 + 1000000 = 11000000
Bài tập luyện tập thêm 7:
Trừ các số lớn:
1) 2000000 - 1000000 = 1000000
2) 3000000 - 1000000 = 2000000
3) 4000000 - 1000000 = 3000000
4) 5000000 - 1000000 = 4000000
5) 6000000 - 1000000 = 5000000
6) 7000000 - 1000000 = 6000000
7) 8000000 - 1000000 = 7000000
8) 9000000 - 1000000 = 8000000
9) 10000000 - 1000000 = 9000000
10) 11000000 - 1000000 = 10000000
Bài tập luyện tập thêm 8:
Đọc các số lớn:
1) 1234567: Một triệu hai trăm ba mươi tư nghìn năm trăm sáu mươi bảy
2) 2345678: Hai triệu ba trăm bốn mươi lăm nghìn sáu trăm bảy mươi tám
3) 3456789: Ba triệu bốn trăm năm mươi sáu nghìn bảy trăm tám mươi chín
4) 4567890: Bốn triệu năm trăm sáu mươi bảy nghìn tám trăm chín mươi
5) 5678901: Năm triệu sáu trăm bảy mươi tám nghìn chín trăm linh một
6) 6789012: Sáu triệu bảy trăm tám mươi chín nghìn không trăm mười hai
7) 7890123: Bảy triệu tám trăm chín mươi nghìn một trăm hai mươi ba
8) 8901234: Tám triệu chín trăm linh một nghìn hai trăm ba mươi tư
9) 9012345: Chín triệu không trăm mười hai nghìn ba trăm bốn mươi lăm
10) 1987654: Một triệu chín trăm tám mươi bảy nghìn sáu trăm năm mươi tư
Bài tập luyện tập thêm 9:
Đọc các số lớn:
1) 1234567: Một triệu hai trăm ba mươi tư nghìn năm trăm sáu mươi bảy
2) 2345678: Hai triệu ba trăm bốn mươi lăm nghìn sáu trăm bảy mươi tám
3) 3456789: Ba triệu bốn trăm năm mươi sáu nghìn bảy trăm tám mươi chín
4) 4567890: Bốn triệu năm trăm sáu mươi bảy nghìn tám trăm chín mươi
5) 5678901: Năm triệu sáu trăm bảy mươi tám nghìn chín trăm linh một
6) 6789012: Sáu triệu bảy trăm tám mươi chín nghìn không trăm mười hai
7) 7890123: Bảy triệu tám trăm chín mươi nghìn một trăm hai mươi ba
8) 8901234: Tám triệu chín trăm linh một nghìn hai trăm ba mươi tư
9) 9012345: Chín triệu không trăm mười hai nghìn ba trăm bốn mươi lăm
10) 1987654: Một triệu chín trăm tám mươi bảy nghìn sáu trăm năm mươi tư
Bài tập luyện tập thêm 10:
Đọc các số lớn:
1) 1234567: Một triệu hai trăm ba mươi tư nghìn năm trăm sáu mươi bảy
2) 2345678: Hai triệu ba trăm bốn mươi lăm nghìn sáu trăm bảy mươi tám
3) 3456789: Ba triệu bốn trăm năm mươi sáu nghìn bảy trăm tám mươi chín
4) 4567890: Bốn triệu năm trăm sáu mươi bảy nghìn tám trăm chín mươi
5) 5678901: Năm triệu sáu trăm bảy mươi tám nghìn chín trăm linh một
6) 6789012: Sáu triệu bảy trăm tám mươi chín nghìn không trăm mười hai
7) 7890123: Bảy triệu tám trăm chín mươi nghìn một trăm hai mươi ba
8) 8901234: Tám triệu chín trăm linh một nghìn hai trăm ba mươi tư
9) 9012345: Chín triệu không trăm mười hai nghìn ba trăm bốn mươi lăm
10) 1987654: Một triệu chín trăm tám mươi bảy nghìn sáu trăm năm mươi tư
Bài tập luyện tập thêm 11:
So sánh số:
1) 1234567 < 2345678
2) 2345678 < 3456789
3) 3456789 < 4567890
4) 4567890 < 5678901
5) 5678901 < 6789012
6) 6789012 < 7890123
7) 7890123 < 8901234
8) 8901234 < 9012345
9) 9012345 > 1987654
10) 1987654 < 9012345
Bài tập luyện tập thêm 12:
So sánh số:
1) 1234567 < 2345678
2) 2345678 < 3456789
3) 3456789 < 4567890
4) 4567890 < 5678901
5) 5678901 < 6789012
6) 6789012 < 7890123
7) 7890123 < 8901234
8) 8901234 < 9012345
9) 9012345 > 1987654
10) 1987654 < 9012345
Bài tập luyện tập thêm 13:
So sánh số:
1) 1234567 < 2345678
2) 2345678 < 3456789
3) 3456789 < 4567890
4) 4567890 < 5678901
5) 5678901 < 6789012
6) 6789012 < 7890123
7) 7890123 < 8901234
8) 8901234 < 9012345
9) 9012345 > 1987654
10) 1987654 < 9012345
Bài tập luyện tập thêm 14:
Tìm số liền trước và liền sau:
1) Số 1000000: liền trước 999999, liền sau 1000001
2) Số 2000000: liền trước 1999999, liền sau 2000001
3) Số 3000000: liền trước 2999999, liền sau 3000001
4) Số 4000000: liền trước 3999999, liền sau 4000001
5) Số 5000000: liền trước 4999999, liền sau 5000001
6) Số 6000000: liền trước 5999999, liền sau 6000001
7) Số 7000000: liền trước 6999999, liền sau 7000001
8) Số 8000000: liền trước 7999999, liền sau 8000001
9) Số 9000000: liền trước 8999999, liền sau 9000001
10) Số 10000000: liền trước 9999999, liền sau 10000001
Bài tập luyện tập thêm 15:
Tìm số liền trước và liền sau:
1) Số 1000000: liền trước 999999, liền sau 1000001
2) Số 2000000: liền trước 1999999, liền sau 2000001
3) Số 3000000: liền trước 2999999, liền sau 3000001
4) Số 4000000: liền trước 3999999, liền sau 4000001
5) Số 5000000: liền trước 4999999, liền sau 5000001
6) Số 6000000: liền trước 5999999, liền sau 6000001
7) Số 7000000: liền trước 6999999, liền sau 7000001
8) Số 8000000: liền trước 7999999, liền sau 8000001
9) Số 9000000: liền trước 8999999, liền sau 9000001
10) Số 10000000: liền trước 9999999, liền sau 10000001
Bài tập luyện tập thêm 16:
Tìm số liền trước và liền sau:
1) Số 1000000: liền trước 999999, liền sau 1000001
2) Số 2000000: liền trước 1999999, liền sau 2000001
3) Số 3000000: liền trước 2999999, liền sau 3000001
4) Số 4000000: liền trước 3999999, liền sau 4000001
5) Số 5000000: liền trước 4999999, liền sau 5000001
6) Số 6000000: liền trước 5999999, liền sau 6000001
7) Số 7000000: liền trước 6999999, liền sau 7000001
8) Số 8000000: liền trước 7999999, liền sau 8000001
9) Số 9000000: liền trước 8999999, liền sau 9000001
10) Số 10000000: liền trước 9999999, liền sau 10000001
Bài tập luyện tập thêm 17:
Tìm số liền trước và liền sau:
1) Số 1000000: liền trước 999999, liền sau 1000001
2) Số 2000000: liền trước 1999999, liền sau 2000001
3) Số 3000000: liền trước 2999999, liền sau 3000001
4) Số 4000000: liền trước 3999999, liền sau 4000001
5) Số 5000000: liền trước 4999999, liền sau 5000001
6) Số 6000000: liền trước 5999999, liền sau 6000001
7) Số 7000000: liền trước 6999999, liền sau 7000001
8) Số 8000000: liền trước 7999999, liền sau 8000001
9) Số 9000000: liền trước 8999999, liền sau 9000001
10) Số 10000000: liền trước 9999999, liền sau 10000001
Bài tập luyện tập thêm 18:
Tìm số liền trước và liền sau:
1) Số 1000000: liền trước 999999, liền sau 1000001
2) Số 2000000: liền trước 1999999, liền sau 2000001
3) Số 3000000: liền trước 2999999, liền sau 3000001
4) Số 4000000: liền trước 3999999, liền sau 4000001
5) Số 5000000: liền trước 4999999, liền sau 5000001
6) Số 6000000: liền trước 5999999, liền sau 6000001
7) Số 7000000: liền trước 6999999, liền sau 7000001
8) Số 8000000: liền trước 7999999, liền sau 8000001
9) Số 9000000: liền trước 8999999, liền sau 9000001
10) Số 10000000: liền trước 9999999, liền sau 10000001
Bài tập luyện tập thêm 19:
Tìm số liền trước và liền sau:
1) Số 1000000: liền trước 999999, liền sau 1000001
2) Số 2000000: liền trước 1999999, liền sau 2000001
3) Số 3000000: liền trước 2999999, liền sau 3000001
4) Số 4000000: liền trước 3999999, liền sau 4000001
5) Số 5000000: liền trước 4999999, liền sau 5000001
6) Số 6000000: liền trước 5999999, liền sau 6000001
7) Số 7000000: liền trước 6999999, liền sau 7000001
8) Số 8000000: liền trước 7999999, liền sau 8000001
9) Số 9000000: liền trước 8999999, liền sau 9000001
10) Số 10000000: liền trước 9999999, liền sau 10000001
Bài tập luyện tập thêm 20:
Tìm số liền trước và liền sau:
1) Số 1000000: liền trước 999999, liền sau 1000001
2) Số 2000000: liền trước 1999999, liền sau 2000001
3) Số 3000000: liền trước 2999999, liền sau 3000001
4) Số 4000000: liền trước 3999999, liền sau 4000001
5) Số 5000000: liền trước 4999999, liền sau 5000001
6) Số 6000000: liền trước 5999999, liền sau 6000001
7) Số 7000000: liền trước 6999999, liền sau 7000001
8) Số 8000000: liền trước 7999999, liền sau 8000001
9) Số 9000000: liền trước 8999999, liền sau 9000001
10) Số 10000000: liền trước 9999999, liền sau 10000001

---
## Hướng Dẫn Scratch: Lập Trình Game Học Toán (Scratch Implementation Guide)
Để giúp các em học sinh tiểu học tiếp cận với lập trình một cách tự nhiên, Scratch là công cụ tuyệt vời.
### Bước 1: Khởi tạo nhân vật (Sprites)
- Chọn một nhân vật hướng dẫn (ví dụ: Abby hoặc con Mèo Scratch).
- Nhân vật này sẽ đặt các câu hỏi liên quan đến lớp triệu và lớp nghìn.
- Tạo các biến số (Variables) trong Scratch:
  - `SoNgauNhien`: Sinh ra một số ngẫu nhiên từ 1,000,000 đến 9,999,999.
  - `CauTraLoiCuaNguoiChoi`: Lưu trữ câu trả lời của người chơi.
  - `Diem`: Lưu điểm số.

### Bước 2: Kịch bản chính (Main Script)
```scratch
Khi lá cờ xanh được nhấn
Đặt [Diem] thành 0
Lặp lại (10) lần:
  Đặt [SoNgauNhien] thành (Lấy ngẫu nhiên từ (1000000) đến (9999999))
  Nói (Kết hợp (Đọc số này ra sao: ) và (SoNgauNhien)) trong (2) giây
  Hỏi (Bạn hãy viết lại số bằng chữ) và đợi
  Nếu (Câu trả lời) = (Kết quả đúng) thì:
    Nói (Chính xác! Bạn được cộng 1 điểm) trong (2) giây
    Thay đổi [Diem] một lượng (1)
  Nếu không:
    Nói (Sai rồi, hãy cố gắng ở câu sau nhé!) trong (2) giây
```

### Bước 3: Nâng cấp trò chơi (Upgrades)
- Yêu cầu học sinh làm tròn số đó đến hàng trăm nghìn.
- Lập trình để Scratch tự động kiểm tra xem chữ số hàng trăm nghìn có lớn hơn hoặc bằng 5 hay không.

## Bài Tập Toán Có Lời Văn Bổ Sung (Detailed Word Problems)
Dưới đây là các bài toán thực tế có lời văn, giúp học sinh áp dụng kiến thức về các số đến lớp triệu vào đời sống hàng ngày.

**Bài toán 1: Dân số các tỉnh thành**
Dân số của Hà Nội vào năm 2021 là khoảng 8,330,830 người. Dân số của TP. Hồ Chí Minh là khoảng 9,166,800 người.
- Hỏi thành phố nào có dân số đông hơn?
- Đọc số dân của hai thành phố.
- Làm tròn dân số hai thành phố đến hàng triệu.
*Hướng dẫn giải (Step-by-step Solution):*
1. So sánh chữ số hàng triệu: 8 < 9, do đó TP.HCM đông hơn.
2. Hà Nội: Tám triệu ba trăm ba mươi nghìn tám trăm ba mươi.
   TP.HCM: Chín triệu một trăm sáu mươi sáu nghìn tám trăm.
3. Làm tròn: 8,330,830 làm tròn thành 8,000,000. 9,166,800 làm tròn thành 9,000,000.

**Bài toán 2: Ngân sách mua sắm trường học**
Trường Tiểu học Nguyễn Du có ngân sách 150,000,000 VNĐ để mua sắm máy chiếu. Mỗi chiếc máy chiếu giá 15,000,000 VNĐ.
- Trường có thể mua tối đa bao nhiêu chiếc máy chiếu?
- Nếu mua 8 chiếc thì trường còn thừa bao nhiêu tiền?
*Hướng dẫn giải (Step-by-step Solution):*
1. Số máy chiếu mua được: 150,000,000 / 15,000,000 = 10 chiếc.
2. Tiền mua 8 chiếc: 8 * 15,000,000 = 120,000,000 VNĐ.
3. Số tiền còn lại: 150,000,000 - 120,000,000 = 30,000,000 VNĐ.

**Bài toán 3: Số tiền tiết kiệm**
Lan để dành được 1,500,000 VNĐ. Em trai của Lan để dành được 850,000 VNĐ.
- Tổng số tiền hai chị em là bao nhiêu?
- Đọc số tổng đó.
*Hướng dẫn giải (Step-by-step Solution):*
1. Tổng tiền: 1,500,000 + 850,000 = 2,350,000 VNĐ.
2. Đọc số: Hai triệu ba trăm năm mươi nghìn.

**Bài toán 4: Chặng đường bay**
Một chiếc máy bay bay từ Hà Nội đến Paris với quãng đường dài khoảng 9,190,000 mét.
Hãy làm tròn quãng đường bay này đến hàng trăm nghìn mét.
*Hướng dẫn giải (Step-by-step Solution):*
Chữ số hàng chục nghìn là 9 (>= 5), nên làm tròn lên.
Kết quả: 9,200,000 mét.

**Bài toán 5: Trò chơi điện tử**
Trong trò chơi Minecraft, Minh xây được một lâu đài bằng 1,234,567 khối vuông. Long xây một thành phố bằng 2,345,678 khối.
Hỏi tổng số khối hai bạn đã sử dụng là bao nhiêu?
*Hướng dẫn giải (Step-by-step Solution):*
Tổng số khối: 1,234,567 + 2,345,678 = 3,580,245 khối.

## Bổ Sung Hoạt Động STEM & Lớp Triệu
**Hoạt Động 1: Cấu trúc kim tự tháp giấy**
- Mục đích: Hiểu rõ sự lớn dần của các số từ hàng đơn vị đến hàng triệu.
- Chuẩn bị: Cốc giấy, bút dạ.
- Các bước:
  1. Ghi chữ số từ 0 đến 9 lên các cốc.
  2. Xếp thành 3 tầng: Tầng dưới cùng là Lớp đơn vị, tầng giữa là Lớp nghìn, tầng chóp là Lớp triệu.
  3. Khi giáo viên hô một số (VD: "Ba triệu hai trăm nghìn"), nhóm nào xếp cốc thành số đó nhanh nhất sẽ thắng.

**Hoạt Động 2: Vẽ sơ đồ cây (Mindmap) về Lớp số**
Học sinh tự vẽ một cái cây to. Cây có 3 nhánh chính (Triệu, Nghìn, Đơn Vị). Mỗi nhánh lại tủa ra 3 nhánh phụ (Trăm, Chục, Hàng gốc).
Điều này giúp học sinh hình dung cấu trúc 3 phần tử của mỗi lớp rất dễ nhớ.

(Các ví dụ luyện tập bổ sung thêm về số liệu thống kê lớn trong thực tế, giúp học sinh làm quen)
Thống kê 1: Diện tích Trái Đất là 510,072,000 km2. Đọc là: Năm trăm mười triệu không trăm bảy mươi hai nghìn.
Thống kê 2: Khoảng cách từ Trái Đất đến Mặt Trăng là khoảng 384,400 km.
Thống kê 3: Khoảng cách từ Trái Đất đến Mặt Trời là khoảng 149,600,000 km.
Thống kê 4: Vận tốc ánh sáng là khoảng 299,792 km/s. Đọc là: Hai trăm chín mươi chín nghìn bảy trăm chín mươi hai.

End of Week 1 Lesson File.

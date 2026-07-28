# Tuần 8: Hình Bình Hành, Hình Thoi & Tính Diện Tích
# Week 8: Parallelogram, Rhombus & Area Calculations

## 1. Mục Tiêu Bài Học / Learning Objectives
- **Vietnamese**:
  - Nhận dạng được hình bình hành và hình thoi trong toán học và thực tế.
  - Phân tích và chỉ ra các tính chất đặc trưng của hai hình (Cặp cạnh song song, bằng nhau, đường chéo).
  - Thuộc lòng và hiểu bản chất công thức tính diện tích Hình Bình Hành ($S = a \times h$) và Hình Thoi ($S = \frac{m \times n}{2}$).
  - Vẽ được hình bình hành và hình thoi bằng thước kẻ và ê-ke trên giấy ô ly.
  - Vận dụng linh hoạt giải toán lời văn, tính diện tích thửa ruộng, mặt kính, biển báo.
- **English**:
  - Identify parallelograms and rhombuses in geometry and real-world contexts.
  - Analyze the defining characteristics of both shapes (Parallel/equal sides, diagonals).
  - Memorize and understand the area formulas for Parallelograms ($S = a \times h$) and Rhombuses ($S = \frac{m \times n}{2}$).
  - Draw these shapes using a ruler and set square on grid paper.
  - Flexibly apply concepts to word problems (fields, glass panes, signs).

## 2. Chủ Đề Sách Giáo Khoa / Textbook Themes
- Sách Giáo Khoa Kết nối tri thức Toán 4 (Tập 2): Chủ đề 8 (Bài 39, 40, 41, 42, 43)

## 3. Công Cụ STEM & EdTech / STEM & EdTech Tools
| Công cụ / Tool | Ứng dụng / Application | Ghi chú / Notes |
|---|---|---|
| Tangram Puzzle | Trò chơi ghép 7 mảnh ghép để tạo thành hình bình hành khổng lồ / Puzzle solving | Rèn luyện tư duy không gian |
| Giấy màu, Kéo / Paper & Scissors | Thực hành chứng minh công thức diện tích bằng cách cắt dán / Proof by cutting | Trực quan hóa toán học |
| Khung xếp hình (Geoboard) | Dùng chun căng tạo hình thoi, kiểm tra 2 đường chéo vuông góc / Rubber band geometry | |
| Python 3.10+ | Lập trình chương trình tính chu vi & diện tích đa năng / Geometry calculator | |
| GeoGebra Primary | Mô phỏng đường chéo hình thoi cắt nhau tại trung điểm / Digital interactive visual | App trên máy tính bảng |

## 4. Lý Thuyết Chi Tiết / Detailed Geometry Theory

### 4.1 Hình Bình Hành / Parallelogram
**Định nghĩa**:
- Hình bình hành là tứ giác có hai cặp cạnh đối diện song song và bằng nhau.
- Nói cách khác: Cạnh trên song song và dài bằng cạnh dưới; Cạnh trái song song và dài bằng cạnh phải.
**Tính chất hình học**:
- Các góc đối diện bằng nhau (Góc tù bằng góc tù, góc nhọn bằng góc nhọn).
- Đường cao ($h$) là đoạn thẳng hạ từ một đỉnh, vuông góc với cạnh đáy ($a$) đối diện.
**Công thức tính diện tích**:
- **S = a x h** (Diện tích bằng cạnh đáy nhân với chiều cao tương ứng).
- Giải thích: Nếu cắt phần tam giác nhô ra ở một bên và đắp sang bên kia, hình bình hành biến thành hình chữ nhật có Dài = a, Rộng = h. Do đó diện tích là a x h.
**Công thức tính chu vi**:
- P = (a + b) x 2 (Tổng độ dài 2 cạnh kề nhau nhân 2).

### 4.2 Hình Thoi / Rhombus
**Định nghĩa**:
- Hình thoi là tứ giác có 4 cạnh bằng nhau.
- Nó cũng có hai cặp cạnh đối diện song song (giống hình bình hành). Do đó, hình thoi là dạng đặc biệt của hình bình hành.
**Tính chất đặc biệt của đường chéo**:
- Hai đường chéo vuông góc với nhau tại trung điểm của mỗi đường. (Tạo ra chữ thập hoàn hảo ở giữa).
**Công thức tính diện tích**:
- **S = (m x n) : 2** hoặc $S = \frac{m \times n}{2}$ (Trong đó m, n là độ dài hai đường chéo).
- Giải thích: Diện tích hình thoi bằng một nửa diện tích hình chữ nhật bao bọc bên ngoài (có chiều dài và rộng bằng 2 đường chéo m, n).
**Công thức tính chu vi**:
- P = a x 4 (Độ dài 1 cạnh nhân 4, giống hệt hình vuông).

## 5. Hoạt Động STEM Thực Hành / Hands-on STEM Labs

### Bài Thực Hành 1: "Biến Hình" Hình Bình Hành (Cắt dán chứng minh)
- Phát cho mỗi học sinh 1 tờ giấy hình bình hành.
- **Nhiệm vụ**: Dùng ê-ke vẽ đường cao $h$ từ góc tù xuống cạnh đáy.
- Lấy kéo cắt dọc theo đường cao $h$ đó, ta được 1 tam giác vuông và 1 hình thang vuông.
- Di chuyển hình tam giác vuông sang cạnh đối diện, ghép lại bằng hồ dán.
- **Wow!** Hình đã biến thành một Hình Chữ Nhật với chiều dài là $a$ và chiều rộng là $h$. Tính diện tích hình chữ nhật là $a \times h$. Suy ra diện tích hình bình hành ban đầu cũng là $a \times h$.

### Bài Thực Hành 2: Chế Tạo Con Diều Hình Thoi (Kite Building)
- Vật liệu: 2 thanh tre (1 dài 60cm, 1 dài 40cm), dây dù, giấy bọc quà.
- Học sinh phải buộc chữ thập 2 thanh tre sao cho chúng **vuông góc tại trung điểm** (Tạo bộ khung hình thoi m=60, n=40).
- Áp dụng công thức tính $S = (60 \times 40) : 2 = 1200\text{ cm}^2$ để cắt đúng lượng giấy cần thiết dán lên khung tre. Sản phẩm tạo ra là một con diều truyền thống.

## 6. Góc Công Nghệ / Python Calculator Suite

```python
# MATH GRADE 4: GEOMETRY SUITE
# Chương trình Tính Chu Vi & Diện Tích Đa Năng

def geometry_calculator():
    print("=== MÁY TÍNH HÌNH HỌC LỚP 4 ===")
    print("1. Hình Bình Hành")
    print("2. Hình Thoi")
    print("3. Hình Chữ Nhật (Ôn tập)")
    
    choice = input("Nhập số chọn hình bạn muốn tính (1/2/3): ")
    
    if choice == '1':
        print("\n--- HÌNH BÌNH HÀNH ---")
        a = float(input("Nhập độ dài cạnh đáy (a): "))
        h = float(input("Nhập chiều cao (h): "))
        b = float(input("Nhập độ dài cạnh bên (b): "))
        
        area = a * h
        perimeter = (a + b) * 2
        
        print(f"=> Diện tích (S) = {a} x {h} = {area}")
        print(f"=> Chu vi (P) = ({a} + {b}) x 2 = {perimeter}")
        
    elif choice == '2':
        print("\n--- HÌNH THOI ---")
        m = float(input("Nhập đường chéo thứ nhất (m): "))
        n = float(input("Nhập đường chéo thứ hai (n): "))
        a = float(input("Nhập độ dài 1 cạnh (a): "))
        
        area = (m * n) / 2
        perimeter = a * 4
        
        print(f"=> Diện tích (S) = ({m} x {n}) : 2 = {area}")
        print(f"=> Chu vi (P) = {a} x 4 = {perimeter}")
        
    else:
        print("Lựa chọn không hợp lệ. Thoát chương trình.")

# Chạy mô phỏng (trong môi trường thật)
# geometry_calculator()
```

## 7. Lỗi Thường Gặp & Hiểu Lầm / Common Misconceptions
- 💡 **Nhầm Chu Vi và Diện Tích (Hình Bình Hành)**: Trẻ quen tính diện tích hình chữ nhật là Dài x Rộng, nên sang hình bình hành, trẻ lấy Cạnh đáy x Cạnh bên. (SAI! Phải là Cạnh đáy x Chiều cao).
- 💡 **Quên "Chia 2" ở Hình Thoi**: Rất nhiều bạn áp dụng công thức (m x n) xong là ghi luôn kết quả mà quên mất phải chia cho 2. Giáo viên dùng thơ vè: "Diện tích hình thoi, nhân hai đường chéo, cắt đôi (chia 2) liền tay".
- 💡 **Lấy đường chéo nhân cạnh bên**: Trong hình thoi có số đo cạnh và số đo đường chéo. Có bạn lấy đường chéo nhân cạnh bên để tính diện tích. Cần làm rõ: Diện tích chỉ dùng 2 đường chéo, chu vi chỉ dùng độ dài cạnh ngoài.

## 8. Bài Tập Luyện Tập Chuyên Sâu & Đáp Án / Deep Practice & Solutions

### Dạng 1: Diện Tích Hình Bình Hành
**Bài 1**: Tính diện tích hình bình hành biết độ dài đáy là 15 cm, chiều cao tương ứng là 7 cm.
*Giải (Solution)*:
- Diện tích $S = a \times h = 15 \times 7 = 105\text{ cm}^2$.
- Đáp số: 105 $\text{cm}^2$.

**Bài 2**: Một khu rừng hình bình hành có chiều dài đáy là 5 km, chiều cao là 3 km. Diện tích khu rừng đó là bao nhiêu ki-lô-mét vuông?
*Giải (Solution)*:
- Diện tích $S = 5 \times 3 = 15\text{ km}^2$.
- Đáp số: 15 $\text{km}^2$.

**Bài 3**: Một mảnh đất hình bình hành có diện tích 120 $m^2$. Độ dài đáy là 15 m. Hỏi chiều cao của mảnh đất là bao nhiêu mét?
*Giải (Solution)*:
- Từ công thức $S = a \times h$, suy ra $h = S : a$.
- Chiều cao $h = 120 : 15 = 8\text{ m}$.
- Đáp số: 8 m.

**Bài 4**: (Đổi đơn vị) Tính diện tích hình bình hành biết đáy dài 4 dm, chiều cao 25 cm.
*Giải (Solution)*:
- Đổi 4 dm = 40 cm.
- Diện tích $S = 40 \times 25 = 1000\text{ cm}^2$.
- Đáp số: 1000 $\text{cm}^2$.

**Bài 5**: Hình bình hành ABCD có chu vi 40 cm. Cạnh đáy AB = 12 cm. Hỏi cạnh bên BC bằng bao nhiêu?
*Giải (Solution)*:
- Nửa chu vi hình bình hành: 40 : 2 = 20 cm.
- Cạnh bên BC = 20 - 12 = 8 cm.
- Đáp số: 8 cm.

### Dạng 2: Diện Tích Hình Thoi
**Bài 6**: Hình thoi MNPQ có độ dài hai đường chéo là 8 cm và 10 cm. Tính diện tích.
*Giải (Solution)*:
- Diện tích $S = \frac{8 \times 10}{2} = \frac{80}{2} = 40\text{ cm}^2$.
- Đáp số: 40 $\text{cm}^2$.

**Bài 7**: Một biển báo giao thông hình thoi có đường chéo m = 40 cm, n = 30 cm. Diện tích biển báo là bao nhiêu?
*Giải (Solution)*:
- Diện tích $S = \frac{40 \times 30}{2} = \frac{1200}{2} = 600\text{ cm}^2$.
- Đáp số: 600 $\text{cm}^2$.

**Bài 8**: Diện tích hình thoi là 100 $dm^2$. Biết độ dài một đường chéo là 10 dm. Tính độ dài đường chéo thứ hai.
*Giải (Solution)*:
- Tích của 2 đường chéo là: $S \times 2 = 100 \times 2 = 200$.
- Độ dài đường chéo thứ hai: 200 : 10 = 20 dm.
- Đáp số: 20 dm.

**Bài 9**: Hình thoi có 4 cạnh đều bằng 5 cm. Tính chu vi hình thoi đó.
*Giải (Solution)*:
- Chu vi $P = 5 \times 4 = 20\text{ cm}$.
- Đáp số: 20 cm.

**Bài 10**: Hình vuông có cạnh 6 cm. Nếu coi hình vuông là một hình thoi có 2 đường chéo bằng nhau, em tính diện tích nó bằng công thức cạnh x cạnh xem ra kết quả là bao nhiêu?
*Giải (Solution)*:
- $S = 6 \times 6 = 36\text{ cm}^2$.

### Dạng 3: Toán Tổng Hợp & Lời Văn
**Bài 11**: Một thửa ruộng hình bình hành có đáy dài 50m, chiều cao bằng một nửa đáy. Người ta trồng lúa, cứ 1 $m^2$ thu được 2 kg thóc. Hỏi cả thửa ruộng thu được bao nhiêu kg thóc?
*Giải (Solution)*:
- Chiều cao thửa ruộng: 50 : 2 = 25 m.
- Diện tích thửa ruộng: 50 x 25 = 1250 $m^2$.
- Số kg thóc thu được: 1250 x 2 = 2500 kg.
- Đáp số: 2500 kg.

**Bài 12**: Một tấm kính hình thoi có 2 đường chéo lần lượt là 2m và 15dm. Tính diện tích tấm kính theo đơn vị đề-xi-mét vuông ($dm^2$).
*Giải (Solution)*:
- Đổi 2m = 20 dm.
- Diện tích tấm kính: $\frac{20 \times 15}{2} = \frac{300}{2} = 150\text{ dm}^2$.
- Đáp số: 150 $dm^2$.

**Bài 13**: Bác thợ nề lát nền một căn phòng bằng 400 viên gạch hình vuông cạnh 4dm. Biết căn phòng hình chữ nhật. Tính diện tích căn phòng đó bằng mét vuông. (Vận dụng linh hoạt).
*Giải (Solution)*:
- Diện tích 1 viên gạch: 4 x 4 = 16 $dm^2$.
- Diện tích căn phòng: 16 x 400 = 6400 $dm^2$.
- Đổi 6400 $dm^2$ = 64 $m^2$.
- Đáp số: 64 $m^2$.

**Bài 14**: Hình bình hành và hình thoi có điểm gì giống nhau nhất về các cặp cạnh đối diện?
*Giải (Solution)*:
- Cả hai hình đều có 2 cặp cạnh đối diện song song và bằng nhau.

**Bài 15**: Cho hình thoi ABCD, hai đường chéo cắt nhau tại O. Góc AOB là góc gì?
*Giải (Solution)*:
- Góc AOB là góc vuông (Vì 2 đường chéo của hình thoi vuông góc với nhau).

## 9. Đánh Giá / Assessment Rubric (100-point scale)

| Tiêu chí / Criteria | Xuất sắc / Excellent (90-100) | Tốt / Good (70-89) | Đạt / Pass (50-69) | Cần cố gắng / Needs Work (<50) |
|---|---|---|---|---|
| **Công thức & Lý thuyết (30 đ)**<br>Formula mastery | Thuộc làu công thức chữ và ý nghĩa bản chất. Nhớ "chia 2" cho hình thoi. | Thuộc công thức, làm đúng, thi thoảng tính ngược chiều cao hơi chậm. | Rất hay nhầm lẫn chu vi và diện tích, quên chia 2 hình thoi. | Không nhớ công thức tính. |
| **Giải Toán & Đơn Vị (40 đ)**<br>Math problem solving | Giải chuẩn bài dài 3 bước. Đổi đơn vị tuyệt đối chính xác trước khi nhân. | Giải tốt bài cơ bản, bài lời văn phức tạp bị vướng số liệu. | Chỉ tính được S khi có sẵn a, h, m, n cùng đơn vị. | Không tính toán được nhân chia 2 chữ số. |
| **Dự án STEM (20 đ)**<br>Hands-on Kite/Paper | Tự tin cắt dán, làm diều cực chuẩn góc vuông chữ thập. Sáng tạo. | Làm được khung diều, nếp dán giấy còn nhăn nheo, cắt mấp mô. | Cần nhiều sự trợ giúp mới chốt được góc vuông tre. | Làm sai hướng dẫn hoàn toàn. |
| **Logic Tin Học (10 đ)**<br>Tech/Python usage | Hiểu code chạy điều kiện If/Else để chọn tính 2 hình. | Nhập số vào máy tính python tốt. | Nhìn chưa hiểu logic máy. | Bỏ qua. |

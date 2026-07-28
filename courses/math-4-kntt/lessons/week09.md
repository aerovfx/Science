# Tuần 9: Thống Kê & Xác Suất Đơn Giản
# Week 9: Elementary Statistics & Probability

## 1. Mục Tiêu Bài Học / Learning Objectives
- **Vietnamese**:
  - Biết cách thu thập, phân loại và ghi chép số liệu thống kê.
  - Đọc, phân tích và tự thiết kế biểu đồ tranh (Pictogram) có quy định "chìa khóa" (Key).
  - Đọc hiểu, phân tích và tự vẽ biểu đồ cột (Bar Chart) biểu diễn dữ liệu thực tế.
  - Hiểu và phân biệt 3 khái niệm xác suất đơn giản: Chắc chắn (Certain), Có thể (Possible), Không thể (Impossible).
  - Thực hành thí nghiệm xác suất với đồng xu, xúc xắc, rút thăm.
- **English**:
  - Learn how to collect, categorize, and record statistical data.
  - Read, analyze, and design Pictograms with a specific "Key".
  - Read, analyze, and draw Bar Charts representing real-world data.
  - Understand and differentiate 3 elementary probability concepts: Certain, Possible, Impossible.
  - Conduct probability experiments using coins, dice, and drawing lots.

## 2. Chủ Đề Sách Giáo Khoa / Textbook Themes
- Sách Giáo Khoa Kết nối tri thức Toán 4 (Tập 2): Chủ đề 9 (Bài 44, 45, 46, 47, 48)

## 3. Công Cụ STEM & EdTech / STEM & EdTech Tools
| Công cụ / Tool | Ứng dụng / Application | Ghi chú / Notes |
|---|---|---|
| Đồng xu, Xúc xắc / Coins, Dice | Thực hành tung đồng xu, gieo xúc xắc / Probability experiments | Dụng cụ trực quan thực tế |
| Giấy A0, Bút màu / Poster | Tự thiết kế biểu đồ tại lớp học / Drawing charts | Làm việc nhóm |
| Sticker, Nam châm | Tạo biểu đồ tranh trực quan trên bảng đen / Board pictograms | Mỗi sticker = 1 đơn vị |
| Python & Matplotlib | Vẽ biểu đồ cột chuyên nghiệp trên máy tính / Bar chart programming | Sử dụng Jupyter Notebook |
| MS Excel / Google Sheets | Nhập liệu và xuất biểu đồ / Spreadsheet basics | Cho học sinh tiếp cận Tin học cơ bản |

## 4. Lý Thuyết Chi Tiết & Khái Niệm / Detailed Theory & Concepts

### 4.1 Thu Thập Số Liệu / Data Collection
- **Thu thập**: Là bước đầu tiên của thống kê. Ví dụ: Đi đếm số xe đạp trong bãi xe, hỏi các bạn trong lớp xem thích môn thể thao nào nhất.
- **Phân loại**: Chia nhóm số liệu. Ví dụ: Phân nhóm Bóng đá, Cầu lông, Bơi lội.
- **Ghi chép (Bảng số liệu)**: Lập bảng tần số (đếm số vạch).

### 4.2 Biểu Đồ Tranh / Pictograms
- **Khái niệm**: Là dạng biểu đồ sử dụng các hình vẽ, biểu tượng để thay thế cho số lượng thực tế.
- **"Chìa khóa" (Key)**: Rất quan trọng! Nếu 1 hình mặt cười 😃 biểu diễn 5 học sinh, thì 3 mặt cười sẽ là $3 \times 5 = 15$ học sinh.
- **Lợi ích**: Trực quan, dễ nhìn, bắt mắt với học sinh lứa tuổi nhỏ.
- **Hạn chế**: Khó biểu diễn các con số quá lẻ (ví dụ 17, 19).

### 4.3 Biểu Đồ Cột / Bar Charts
- **Cấu trúc**:
  - Trục ngang (Trục hoành): Thường ghi tên các đối tượng (VD: Táo, Cam, Lê).
  - Trục dọc (Trục tung): Thường ghi các mốc số lượng (VD: 0, 5, 10, 15, 20).
  - Cột: Vẽ thẳng đứng, chiều cao cột bằng với số lượng đối tượng đó.
- **Ưu điểm**: So sánh dễ dàng bằng cách nhìn độ cao. Cột cao nhất là nhiều nhất, cột thấp nhất là ít nhất.

### 4.4 Xác Suất Đơn Giản / Elementary Probability
- Trong cuộc sống, có những sự việc ta biết trước sẽ xảy ra, có những việc không thể biết trước.
- **Chắc chắn (Certain)**: Sự kiện 100% xảy ra.
  - *Ví dụ*: Hôm nay là thứ Hai, ngày mai chắc chắn là thứ Ba.
- **Không thể (Impossible)**: Sự kiện 0% xảy ra, tuyệt đối không bao giờ xảy ra.
  - *Ví dụ*: Con lợn bay trên trời bằng đôi cánh tự nhiên.
  - *Ví dụ*: Tung 1 con xúc xắc bình thường ra mặt 7 chấm.
- **Có thể (Possible)**: Sự kiện có khả năng xảy ra, nhưng cũng có thể không xảy ra. Phụ thuộc vào nhiều yếu tố ngẫu nhiên.
  - *Ví dụ*: Ngày mai trời có thể mưa.
  - *Ví dụ*: Tung đồng xu ra mặt Sấp.

## 5. Hoạt Động STEM Thực Hành / Hands-on STEM Labs

### Hoạt Động 1: "Thám Tử" Dữ Liệu
- Chia lớp thành 4 nhóm. Mỗi nhóm đi vòng quanh lớp khảo sát xem tháng sinh của tất cả học sinh là tháng nào.
- Trở về nhóm, tổng hợp và vẽ một Biểu đồ cột lên giấy A0 để báo cáo.
- Các nhóm nhận xét biểu đồ của nhau: Tháng nào nhiều bạn sinh nhất? Tháng nào ít nhất?

### Hoạt Động 2: Thí Nghiệm Xác Suất Đồng Xu
- Mỗi nhóm nhận 1 đồng xu 5000 VNĐ.
- Quy ước mặt số là Sấp, mặt hình là Ngửa.
- Lần lượt mỗi bạn tung 5 lần. Một thư ký ghi chép lại. Tổng cộng tung 40 lần.
- Kết luận: Sự kiện ra mặt Sấp là "Có thể". Sự kiện ra mặt Ngửa là "Có thể". Sự kiện ra mặt Sấp và Ngửa cùng lúc là "Không thể". Sự kiện ra 1 trong 2 mặt là "Chắc chắn". Số lần sấp và ngửa có xu hướng bằng nhau (~20 lần).

## 6. Góc Công Nghệ / Tech Corner (Python & Matplotlib)

Dưới đây là một đoạn code Python thực tế để vẽ biểu đồ cột. Học sinh chỉ cần nhập số liệu yêu thích.
```python
import matplotlib.pyplot as plt

def draw_bar_chart():
    print("=== CHƯƠNG TRÌNH VẼ BIỂU ĐỒ CỘT ===")
    
    # Số liệu giả lập: Môn học yêu thích của 40 học sinh
    subjects = ['Toán', 'Tiếng Việt', 'Tiếng Anh', 'Mỹ Thuật', 'Thể Dục']
    votes = [12, 8, 10, 5, 5]
    
    # Cấu hình biểu đồ
    plt.figure(figsize=(10, 6)) # Kích thước cửa sổ
    
    # Vẽ cột
    bars = plt.bar(subjects, votes, color=['blue', 'orange', 'green', 'red', 'purple'])
    
    # Gắn nhãn
    plt.title('Biểu Đồ Môn Học Yêu Thích Của Lớp 4A', fontsize=16)
    plt.xlabel('Môn Học', fontsize=12)
    plt.ylabel('Số Lượng Học Sinh', fontsize=12)
    
    # Thêm số lượng trực tiếp lên đỉnh cột
    for bar in bars:
        yval = bar.get_height()
        plt.text(bar.get_x() + bar.get_width()/2, yval + 0.2, 
                 yval, ha='center', va='bottom', fontsize=11, fontweight='bold')
    
    # Hiển thị
    plt.grid(axis='y', linestyle='--', alpha=0.7)
    plt.show()

# Run the function in Jupyter Notebook or standard Python IDE
# draw_bar_chart()
```

## 7. Lỗi Thường Gặp & Hiểu Lầm / Common Misconceptions
- 💡 **Sai lầm khi đọc biểu đồ tranh**: Quên hoàn toàn dòng chữ "1 🌟 = 10 học sinh". Đếm thấy 4 🌟 thì kết luận lớp có 4 học sinh. (Phải luôn tìm chìa khóa trước tiên).
- 💡 **Vẽ trục tọa độ không chia đều khoảng cách**: Trong biểu đồ cột, các mốc 0, 5, 10, 15... phải cách đều nhau. Học sinh vẽ tay thường vẽ khoảng cách từ 0-5 rất xa, từ 5-10 rất gần, làm biến dạng cột.
- 💡 **Nhầm "Có thể" và "Chắc chắn"**: Ví dụ "Mai con đi học". Học sinh nghĩ là "Chắc chắn". Giáo viên cần giải thích: Trừ phi xảy ra chuyện bất ngờ như ốm đau, thiên tai, nên đó chỉ là "Có thể". Chắc chắn phải là sự thật hiển nhiên (ví dụ 1 ngày có 24 giờ).

## 8. Bài Tập Luyện Tập Chuyên Sâu & Đáp Án / Deep Practice & Solutions

### Dạng 1: Đọc Biểu Đồ Tranh
**Bài 1**: Biểu đồ tranh thống kê số áo phông bán được của 1 cửa hàng. Quy ước: Mỗi (Áo) = 20 chiếc.
- Thứ Hai: (Áo) (Áo)
- Thứ Ba: (Áo) (Áo) (Áo)
- Thứ Tư: (Áo)
Hỏi 3 ngày đó bán được tổng cộng bao nhiêu chiếc áo?
*Giải (Solution)*:
- Tổng số biểu tượng: $2 + 3 + 1 = 6$ (biểu tượng).
- Số chiếc áo bán được: $6 \times 20 = 120$ (chiếc).
- Đáp số: 120 chiếc.

**Bài 2**: Một trường tiểu học vẽ biểu đồ số cây xanh trồng được. Khối 4 vẽ 4 cái cây 🌲, Khối 5 vẽ 5 cái cây 🌲. Biết mỗi 🌲 = 15 cây thật. Khối 5 trồng nhiều hơn khối 4 bao nhiêu cây?
*Giải (Solution)*:
- Khối 5 nhiều hơn Khối 4 số biểu tượng: $5 - 4 = 1$ 🌲.
- 1 biểu tượng bằng 15 cây thật. Vậy Khối 5 trồng nhiều hơn 15 cây.
- Đáp số: 15 cây.

**Bài 3**: Một biểu đồ tranh dùng hình Mặt Trời để đếm số ngày nắng. Nếu tháng đó có 24 ngày nắng, và mỗi Hình = 4 ngày, thì ta phải vẽ bao nhiêu Mặt Trời?
*Giải (Solution)*:
- Ta lấy: $24 : 4 = 6$ (hình).
- Đáp số: Phải vẽ 6 hình Mặt Trời.

### Dạng 2: Biểu Đồ Cột
**Bài 4**: Nhìn vào biểu đồ cột số sách đọc trong tháng. Trục tung đánh số 0, 10, 20, 30. Cột của "Nam" nằm chính giữa mốc 10 và 20. Cột của "Hoa" chạm mốc 30. 
a) Nam đọc được bao nhiêu quyển?
b) Hoa đọc nhiều hơn Nam bao nhiêu quyển?
*Giải (Solution)*:
- a) Chính giữa 10 và 20 là số 15. Vậy Nam đọc 15 quyển.
- b) Hoa đọc 30 quyển. Hoa nhiều hơn Nam: 30 - 15 = 15 quyển.

**Bài 5**: Vẽ nháp 1 biểu đồ cột thể hiện điểm Toán của 3 học sinh: An (8 đ), Bình (10 đ), Cường (6 đ).
*Giải (Solution)*:
- Trục ngang: Ghi tên An, Bình, Cường.
- Trục dọc: Ghi điểm 0, 2, 4, 6, 8, 10.
- Cột An cao tới vạch 8. Bình vạch 10. Cường vạch 6.

### Dạng 3: Xác Suất - Điền "Chắc chắn", "Có thể", "Không thể"
**Bài 6**: Con chó bay lượn trên trời để bắt chim.
*Giải (Solution)*: Không thể.

**Bài 7**: Thả một hòn đá vào nước, hòn đá chìm xuống đáy.
*Giải (Solution)*: Chắc chắn (vì đá nặng hơn nước).

**Bài 8**: Sáng nay, Mai ăn sáng bằng bún chả.
*Giải (Solution)*: Có thể (Tùy thuộc vào bữa sáng Mai chọn).

**Bài 9**: Em rút ngẫu nhiên 1 lá bài từ bộ 52 lá, và rút được lá Át Bích.
*Giải (Solution)*: Có thể.

**Bài 10**: Một tháng có 32 ngày.
*Giải (Solution)*: Không thể. (Tháng nhiều nhất chỉ 31 ngày).

**Bài 11**: Một hình vuông có 4 góc vuông.
*Giải (Solution)*: Chắc chắn (Theo định nghĩa hình vuông).

**Bài 12**: Một hình bình hành có các góc đều là góc vuông.
*Giải (Solution)*: Có thể. (Hình bình hành có 4 góc vuông là hình chữ nhật, hình chữ nhật là 1 trường hợp của hình bình hành).

### Dạng 4: Lời Văn Tổng Hợp
**Bài 13**: Lớp có 35 học sinh. Trong hộp có 35 thẻ ghi tên các bạn. Rút thăm 1 thẻ. Sự kiện rút trúng tên bạn lớp trưởng là?
*Giải (Solution)*: Có thể.

**Bài 14**: Một hộp có 5 viên kẹo dâu và 2 viên kẹo cam. Nhắm mắt bốc 3 viên. 
a) Sự kiện "bốc được ít nhất 1 viên dâu" là gì?
b) Sự kiện "bốc được 3 viên cam" là gì?
*Giải (Solution)*:
- a) Chắc chắn. Vì chỉ có 2 viên cam, bốc 3 viên thì kiểu gì cũng dính 1 viên dâu.
- b) Không thể. Trong hộp chỉ có 2 viên cam, không thể bốc ra 3 viên cam.

**Bài 15**: (Bài toán thử thách)
Trong túi kín có 1 quả bóng đỏ, 1 bóng xanh, 1 bóng vàng. Minh thò tay lấy 2 quả. Minh bảo: "Chắc chắn mình lấy được bóng xanh". Khẳng định của Minh đúng hay sai?
*Giải (Solution)*:
- Sai. Vì Minh có thể lấy được 1 quả đỏ và 1 quả vàng (không có quả xanh nào). Vậy việc lấy được bóng xanh chỉ là "Có thể".

## 9. Đánh Giá / Assessment Rubric (100-point scale)

| Tiêu chí / Criteria | Xuất sắc / Excellent (90-100) | Tốt / Good (70-89) | Đạt / Pass (50-69) | Cần cố gắng / Needs Work (<50) |
|---|---|---|---|---|
| **Đọc Biểu Đồ (30 đ)**<br>Reading Charts | Đọc biểu đồ nhanh, chính xác, tính toán tỷ lệ Key của biểu đồ tranh hoàn hảo. | Đọc tốt, hiểu vấn đề, đôi khi tính nhẩm chậm hoặc nhìn lệch dòng. | Chỉ nhìn và đếm đúng số trên cột thẳng, vướng khi tỷ lệ Key thay đổi. | Không biết nhìn trục số để lấy dữ liệu. |
| **Vẽ Biểu Đồ (20 đ)**<br>Drawing Charts | Vẽ sạch sẽ, thẳng hàng, chia tỷ lệ trục tung rất chuẩn. Có tên đầy đủ. | Vẽ biểu đồ đủ cấu trúc nhưng chia khoảng cách chưa đều hoàn toàn. | Chỉ vẽ được dạng phác thảo, quên ghi số liệu hoặc tên trục. | Từ chối vẽ hoặc vẽ sai toàn bộ cấu trúc. |
| **Logic Xác Suất (20 đ)**<br>Probability Logic | Trả lời nhanh, giải thích sắc bén tại sao lại là chắc chắn/không thể/có thể. | Làm đúng bài tập cơ bản. | Nhầm lẫn giữa Có thể và Chắc chắn do suy nghĩ cảm tính. | Không hiểu khái niệm, đoán mò. |
| **Hoạt động Khảo Sát (20 đ)**<br>Survey Activity | Trưởng nhóm xuất sắc, giao tiếp thu thập dữ liệu nhanh, báo cáo tự tin. | Tham gia giúp đỡ, đếm cẩn thận nhưng không tự tin thuyết trình. | Ngồi yên đợi các bạn làm, chỉ quan sát. | Gây mất trật tự, cản trở nhóm. |
| **Ứng dụng EdTech (10 đ)**<br>Matplotlib | Hứng thú nhập số liệu vào code Python, chạy và hiểu output. | Nhìn bảng và hiểu đồ thị do giáo viên chạy. | Thụ động. | Bỏ qua. |

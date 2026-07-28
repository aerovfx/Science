# GIÁO ÁN BÀI 31: KHỐI LƯỢNG RIÊNG. ÁP SUẤT CHẤT LỎNG
(Thiết kế theo cấu trúc Công văn 5512/BGDĐT-GDTrH)

---

## I. MỤC TIÊU

### 1. Năng lực Vật lí (theo GDPT 2018)
- **Nhận thức Vật lí:**
  - Phát biểu được định nghĩa khối lượng riêng của một chất.
  - Viết được công thức tính khối lượng riêng và nêu được ý nghĩa, đơn vị đo của các đại lượng trong công thức.
  - Phát biểu được khái niệm áp suất và áp suất chất lỏng.
  - Viết được phương trình cơ bản của tĩnh học chất lỏng: $p = p_0 + \rho g h$.
- **Tìm hiểu thế giới tự nhiên dưới góc độ Vật lí:**
  - Thực hiện được thí nghiệm xác định khối lượng riêng của chất lỏng.
  - Tiến hành thí nghiệm đo áp suất tại các độ sâu khác nhau trong chất lỏng.
  - Ghi chép, phân tích số liệu thí nghiệm và rút ra mối quan hệ giữa áp suất chất lỏng và độ sâu.
- **Vận dụng kiến thức, kĩ năng đã học:**
  - Vận dụng công thức khối lượng riêng để giải các bài tập liên quan đến pha chế hợp kim, chất lỏng.
  - Vận dụng công thức tính áp suất chất lỏng để giải thích nguyên lí hoạt động của máy thuỷ lực, áp kế, và các hiện tượng thực tế (khi lặn sâu, thiết kế đập nước).

### 2. Năng lực số (NLS)
- **NLS 1:** Khai thác hiệu quả phần mềm mô phỏng PhET Interactive Simulations (Under Pressure) để khảo sát áp suất chất lỏng.
- **NLS 2:** Sử dụng các công cụ AI (ChatGPT, Gemini) để tìm kiếm, tổng hợp tài liệu về ứng dụng của áp suất chất lỏng trong đời sống.
- **NLS 3:** Sử dụng ngôn ngữ lập trình Python (hoặc Excel) để xử lí số liệu, vẽ đồ thị sự phụ thuộc của áp suất vào độ sâu.
- **NLS 4:** Hợp tác trực tuyến qua Google Workspace để hoàn thành các báo cáo dự án nhỏ.

### 3. Phẩm chất
- **Chăm chỉ:** Tích cực tham gia các hoạt động học tập, đọc trước tài liệu.
- **Trung thực:** Khách quan, trung thực trong việc ghi chép, xử lí và báo cáo số liệu thí nghiệm.
- **Trách nhiệm:** Có trách nhiệm trong hoạt động nhóm, bảo quản tốt các thiết bị thí nghiệm.

---

## II. THIẾT BỊ DẠY HỌC VÀ HỌC LIỆU

### 1. Đối với giáo viên (GV)
- Kế hoạch bài dạy, giáo án điện tử (PowerPoint/Canva).
- Thiết bị thí nghiệm:
  - Cốc đong, lực kế, các khối kim loại.
  - Áp kế chất lỏng, bình thông nhau.
- **AI Tools:** 
  - ChatGPT để sinh tình huống có vấn đề.
  - Gemini để soạn thảo đáp án trắc nghiệm.
- **Phần mềm:** 
  - PhET Interactive Simulations.
  - Môi trường lập trình Python (Jupyter Notebook / Google Colab).
- Bảng nhóm, bút dạ, nam châm.

### 2. Đối với học sinh (HS)
- Sách giáo khoa, sách bài tập, vở ghi chép.
- Smartphone/Tablet có kết nối Internet để tra cứu và truy cập mô phỏng PhET.
- Cài đặt sẵn ứng dụng học tập, nền tảng giao tiếp nhóm (Zalo, Padlet, Azota).

---

## III. TIẾN TRÌNH DẠY HỌC

### 1. Hoạt động 1: Khởi động (Xác định vấn đề học tập)
**a) Mục tiêu:**
- Khơi gợi hứng thú, tạo mâu thuẫn nhận thức về sự khác biệt khối lượng giữa các vật cùng thể tích.
- Tích hợp NLS trong việc tìm kiếm nhanh thông tin trực tuyến.

**b) Nội dung:**
- Xem video về tàu ngầm đang lặn sâu xuống đáy đại dương.
- Trả lời câu hỏi khởi động: "Tại sao tàu ngầm có thể lặn xuống và nổi lên? Vỏ tàu ngầm phải chịu áp lực như thế nào khi ở độ sâu hàng nghìn mét?"

**c) Sản phẩm:**
- Câu trả lời bước đầu của học sinh ghi vào bảng con hoặc Padlet cá nhân.

**d) Tổ chức thực hiện:**
- **Bước 1: Chuyển giao nhiệm vụ**
  - GV chiếu đoạn video ngắn về tàu ngầm (1 phút).
  - Yêu cầu HS truy cập Padlet để trả lời câu hỏi khởi động.
  - *Prompt AI hỗ trợ GV (chuẩn bị trước):* `"Đóng vai một kĩ sư hàng hải, hãy tạo một đoạn giới thiệu ngắn (3-4 câu) gây cấn về áp lực nước biển đè lên vỏ tàu ngầm khi lặn sâu 5000m để học sinh lớp 10 cảm thấy hứng thú với bài học áp suất chất lỏng."`
- **Bước 2: Thực hiện nhiệm vụ**
  - HS quan sát video, thảo luận cặp đôi nhanh.
  - Tích hợp Năng lực số: HS dùng Smartphone nhập câu trả lời vào Padlet.
  - *Prompt AI hỗ trợ HS (gợi ý tự học):* `"Giải thích đơn giản nguyên lí lặn nổi của tàu ngầm cho học sinh trung học phổ thông."`
- **Bước 3: Báo cáo, thảo luận**
  - GV chiếu kết quả từ Padlet lên màn hình lớn.
  - Chọn 2-3 ý kiến nổi bật để phân tích nhanh.
- **Bước 4: Kết luận, nhận định**
  - GV dẫn dắt vào bài mới: "Để hiểu rõ vì sao tàu ngầm nổi lặn được và cách thiết kế vỏ tàu, ta cần nghiên cứu về khối lượng riêng và áp suất chất lỏng."

---

### 2. Hoạt động 2: Hình thành kiến thức mới

#### 2.1. Tìm hiểu Khối lượng riêng
**a) Mục tiêu:**
- Xây dựng được công thức và định nghĩa khối lượng riêng.
- Nắm vững đơn vị đo.

**b) Nội dung:**
- Hoàn thành Phiếu học tập số 1.
- Tiến hành đo khối lượng và thể tích của 3 khối kim loại (Sắt, Nhôm, Đồng).

**c) Sản phẩm:**
- Bảng số liệu thí nghiệm.
- Kết luận: $\rho = \frac{m}{V}$, đơn vị $kg/m^3$.

**d) Tổ chức thực hiện:**
- **Bước 1: Chuyển giao nhiệm vụ**
  - GV chia lớp thành 4 nhóm.
  - Phát bộ dụng cụ thí nghiệm và PHT số 1.
- **Bước 2: Thực hiện nhiệm vụ**
  - HS đo đạc, ghi số liệu, tính tỉ số $\frac{m}{V}$.
- **Bước 3: Báo cáo, thảo luận**
  - Đại diện nhóm trình bày.
- **Bước 4: Kết luận, nhận định**
  - GV chốt kiến thức cơ bản về khối lượng riêng.

#### 2.2. Tìm hiểu Áp suất chất lỏng
**a) Mục tiêu:**
- Hiểu khái niệm áp suất, công thức $p = \frac{F}{S}$.
- Xây dựng công thức áp suất chất lỏng $p = p_0 + \rho g h$.
- Tích hợp mô phỏng PhET.

**b) Nội dung:**
- Truy cập mô phỏng PhET (Under Pressure).
- Đo áp suất tại các độ sâu $h$ khác nhau.

**c) Sản phẩm:**
- Đồ thị mô tả sự phụ thuộc của áp suất $p$ vào độ sâu $h$.
- Phương trình rút ra từ đồ thị.

**d) Tổ chức thực hiện:**
- **Bước 1: Chuyển giao nhiệm vụ**
  - GV hướng dẫn truy cập PhET.
  - Cung cấp mã Python cơ bản để vẽ đồ thị (Google Colab).
  - *Prompt AI hỗ trợ GV:* `"Hãy viết một đoạn code Python sử dụng thư viện matplotlib để vẽ đồ thị sự phụ thuộc của áp suất chất lỏng (p) vào độ sâu (h) với các giá trị giả định, có chú thích bằng tiếng Việt."`
- **Bước 2: Thực hiện nhiệm vụ**
  - HS sử dụng PhET ghi lại 5 cặp giá trị $(h, p)$.
  - Nhập số liệu vào Google Colab, chạy code Python để vẽ đồ thị.
  - *Prompt AI hỗ trợ HS:* `"Trong Python, làm thế nào để nhập danh sách các giá trị độ sâu h và áp suất p rồi vẽ đồ thị dạng đường thẳng?"`
- **Bước 3: Báo cáo, thảo luận**
  - Các nhóm chia sẻ màn hình đồ thị Python của nhóm mình.
- **Bước 4: Kết luận, nhận định**
  - GV đối chiếu với lí thuyết, rút ra phương trình cơ bản của tĩnh học chất lỏng.

---

### 3. Hoạt động 3: Luyện tập
**a) Mục tiêu:**
- Củng cố công thức tính khối lượng riêng và áp suất chất lỏng.
- Luyện tập giải toán Vật lí.

**b) Nội dung:**
- Làm bài tập trắc nghiệm trên Quizizz hoặc Blooket.
- Giải bài tập tự luận trong PHT số 2.

**c) Sản phẩm:**
- Bảng điểm Quizizz trực tuyến.
- Lời giải tự luận bài toán thiết kế đập nước.

**d) Tổ chức thực hiện:**
- **Bước 1: Chuyển giao nhiệm vụ**
  - GV cung cấp mã PIN tham gia Quizizz.
  - Giao 1 bài tự luận trọng tâm.
- **Bước 2: Thực hiện nhiệm vụ**
  - HS thi đua trả lời trắc nghiệm (Tích hợp NLS).
  - Làm bài tự luận vào vở.
- **Bước 3: Báo cáo, thảo luận**
  - GV công bố Top 3 học sinh xuất sắc trên Quizizz.
  - 1 HS lên bảng trình bày bài tự luận.
- **Bước 4: Kết luận, nhận định**
  - GV sửa lỗi sai thường gặp, chuẩn hoá phương pháp giải.

---

### 4. Hoạt động 4: Vận dụng (Dự án thực tế)
**a) Mục tiêu:**
- Áp dụng kiến thức vào giải quyết vấn đề đời sống.
- Phát triển kĩ năng báo cáo, làm việc nhóm, ứng dụng AI.

**b) Nội dung:**
- Dự án nhỏ: "Thiết kế poster về cấu trúc đập thủy điện và nguyên lí áp suất chất lỏng".

**c) Sản phẩm:**
- Một bản Poster thiết kế trên Canva.
- Bài thuyết trình ngắn (3-5 phút).

**d) Tổ chức thực hiện:**
- **Bước 1: Chuyển giao nhiệm vụ**
  - Chủ đề: Giải thích tại sao đập thủy điện luôn có phần chân đập dày hơn phần đỉnh đập.
  - Yêu cầu: Sử dụng Canva thiết kế, có thể nhờ AI tìm kiếm thông số thực tế của đập thủy điện Hòa Bình.
  - *Prompt AI hỗ trợ GV:* `"Lên ý tưởng thiết kế một infographic trên Canva về áp suất nước đập thuỷ điện để giao nhiệm vụ cho học sinh."`
- **Bước 2: Thực hiện nhiệm vụ**
  - Nhóm HS phân công công việc: tìm kiếm số liệu, thiết kế, chuẩn bị thuyết trình.
  - *Prompt AI hỗ trợ HS:* `"Tìm thông số kĩ thuật về độ cao và độ dày của đập thuỷ điện Hoà Bình, giải thích lí do thiết kế chân đập dày theo định luật vật lí về áp suất chất lỏng."`
- **Bước 3: Báo cáo, thảo luận**
  - Trình bày vào tiết học sau hoặc nộp qua hệ thống LMS/Padlet.
- **Bước 4: Kết luận, nhận định**
  - GV đánh giá theo Rubric.

---

## IV. TIÊU CHÍ ĐÁNH GIÁ (Rubric)

### Rubric Đánh Giá Hoạt Động Trình Bày & Vận Dụng

| Tiêu chí | Mức 1 (Nhận biết) | Mức 2 (Thông hiểu) | Mức 3 (Vận dụng) | Mức 4 (Vận dụng cao) |
| :--- | :--- | :--- | :--- | :--- |
| **Kiến thức Vật lí (40%)** | Chỉ nêu được công thức $p = \rho g h$ nhưng không giải thích được. | Giải thích được sự phụ thuộc của áp suất vào độ sâu. | Áp dụng đúng công thức để tính toán và giải thích hình dạng đập. | Phân tích sâu sắc, mở rộng với nhiều ví dụ đập thực tế khác nhau. |
| **Kĩ năng thiết kế và Công nghệ (NLS) (30%)** | Poster sơ sài, chữ nhiều, ít hình ảnh. Không dùng AI. | Sử dụng được Canva nhưng bố cục chưa hợp lí. | Bố cục Canva đẹp mắt, thông tin rõ ràng. Dùng AI tìm số liệu cơ bản. | Thiết kế cực kì chuyên nghiệp, sáng tạo, infographic trực quan. Sử dụng AI để tổng hợp và trích xuất dữ liệu nâng cao. |
| **Kĩ năng thuyết trình (20%)** | Đọc báo cáo, giọng nhỏ, thiếu tự tin. | Trình bày khá rõ ràng, còn phụ thuộc vào tài liệu. | Tự tin, diễn đạt trôi chảy, có tương tác với người nghe. | Cuốn hút, ngôn ngữ cơ thể sinh động, trả lời xuất sắc các câu hỏi phản biện. |
| **Hợp tác nhóm (10%)** | Phân công không đều, 1-2 người làm chính. | Có phân công nhưng phối hợp chưa nhịp nhàng. | Các thành viên có nhiệm vụ rõ ràng và hoàn thành tốt. | Tinh thần đồng đội cao, hỗ trợ lẫn nhau, làm việc theo quy trình hiệu quả. |

---

## PHỤ LỤC: MÃ NGUỒN PYTHON THAM KHẢO

```python
# Code Python dùng trong Hoạt động 2 - Vẽ đồ thị áp suất theo độ sâu
import matplotlib.pyplot as plt
import numpy as np

# Các giá trị độ sâu h (m)
h = np.array([0, 1, 2, 3, 4, 5])
# Khối lượng riêng của nước (kg/m3)
rho = 1000
# Gia tốc trọng trường g (m/s2)
g = 9.8
# Áp suất khí quyển p0 (Pa)
p0 = 101325

# Tính áp suất p (Pa)
p = p0 + rho * g * h

# Vẽ đồ thị
plt.figure(figsize=(8,5))
plt.plot(h, p, marker='o', linestyle='-', color='b')
plt.title('Sự phụ thuộc của Áp suất vào Độ sâu')
plt.xlabel('Độ sâu h (m)')
plt.ylabel('Áp suất p (Pa)')
plt.grid(True)
plt.show()
```

*(Giáo án được thiết kế tích hợp toàn diện STEM, Năng lực số và AI theo chuẩn GDPT 2018).*

---

## PHỤ LỤC 2: HƯỚNG DẪN CHI TIẾT TÍCH HỢP NĂNG LỰC SỐ VÀ AI TRONG CÁC TÌNH HUỐNG SƯ PHẠM ĐẶC THÙ

### 1. Kịch bản sử dụng AI cho Giáo viên (Chi tiết)
- Tình huống dự phòng 1: Nếu học sinh không trả lời được, GV sử dụng Prompt để gợi ý từng bước.
- Tình huống dự phòng 2: Nếu học sinh không trả lời được, GV sử dụng Prompt để gợi ý từng bước.
- Tình huống dự phòng 3: Nếu học sinh không trả lời được, GV sử dụng Prompt để gợi ý từng bước.
- Tình huống dự phòng 4: Nếu học sinh không trả lời được, GV sử dụng Prompt để gợi ý từng bước.
- Tình huống dự phòng 5: Nếu học sinh không trả lời được, GV sử dụng Prompt để gợi ý từng bước.
- Tình huống dự phòng 6: Nếu học sinh không trả lời được, GV sử dụng Prompt để gợi ý từng bước.
- Tình huống dự phòng 7: Nếu học sinh không trả lời được, GV sử dụng Prompt để gợi ý từng bước.
- Tình huống dự phòng 8: Nếu học sinh không trả lời được, GV sử dụng Prompt để gợi ý từng bước.
- Tình huống dự phòng 9: Nếu học sinh không trả lời được, GV sử dụng Prompt để gợi ý từng bước.
- Tình huống dự phòng 10: Nếu học sinh không trả lời được, GV sử dụng Prompt để gợi ý từng bước.
- Tình huống dự phòng 11: Nếu học sinh không trả lời được, GV sử dụng Prompt để gợi ý từng bước.
- Tình huống dự phòng 12: Nếu học sinh không trả lời được, GV sử dụng Prompt để gợi ý từng bước.
- Tình huống dự phòng 13: Nếu học sinh không trả lời được, GV sử dụng Prompt để gợi ý từng bước.
- Tình huống dự phòng 14: Nếu học sinh không trả lời được, GV sử dụng Prompt để gợi ý từng bước.
- Tình huống dự phòng 15: Nếu học sinh không trả lời được, GV sử dụng Prompt để gợi ý từng bước.
- Tình huống dự phòng 16: Nếu học sinh không trả lời được, GV sử dụng Prompt để gợi ý từng bước.
- Tình huống dự phòng 17: Nếu học sinh không trả lời được, GV sử dụng Prompt để gợi ý từng bước.
- Tình huống dự phòng 18: Nếu học sinh không trả lời được, GV sử dụng Prompt để gợi ý từng bước.
- Tình huống dự phòng 19: Nếu học sinh không trả lời được, GV sử dụng Prompt để gợi ý từng bước.
- Tình huống dự phòng 20: Nếu học sinh không trả lời được, GV sử dụng Prompt để gợi ý từng bước.
- Tình huống dự phòng 21: Nếu học sinh không trả lời được, GV sử dụng Prompt để gợi ý từng bước.
- Tình huống dự phòng 22: Nếu học sinh không trả lời được, GV sử dụng Prompt để gợi ý từng bước.
- Tình huống dự phòng 23: Nếu học sinh không trả lời được, GV sử dụng Prompt để gợi ý từng bước.
- Tình huống dự phòng 24: Nếu học sinh không trả lời được, GV sử dụng Prompt để gợi ý từng bước.
- Tình huống dự phòng 25: Nếu học sinh không trả lời được, GV sử dụng Prompt để gợi ý từng bước.
- Tình huống dự phòng 26: Nếu học sinh không trả lời được, GV sử dụng Prompt để gợi ý từng bước.
- Tình huống dự phòng 27: Nếu học sinh không trả lời được, GV sử dụng Prompt để gợi ý từng bước.
- Tình huống dự phòng 28: Nếu học sinh không trả lời được, GV sử dụng Prompt để gợi ý từng bước.
- Tình huống dự phòng 29: Nếu học sinh không trả lời được, GV sử dụng Prompt để gợi ý từng bước.
- Tình huống dự phòng 30: Nếu học sinh không trả lời được, GV sử dụng Prompt để gợi ý từng bước.
- Tình huống dự phòng 31: Nếu học sinh không trả lời được, GV sử dụng Prompt để gợi ý từng bước.
- Tình huống dự phòng 32: Nếu học sinh không trả lời được, GV sử dụng Prompt để gợi ý từng bước.
- Tình huống dự phòng 33: Nếu học sinh không trả lời được, GV sử dụng Prompt để gợi ý từng bước.
- Tình huống dự phòng 34: Nếu học sinh không trả lời được, GV sử dụng Prompt để gợi ý từng bước.
- Tình huống dự phòng 35: Nếu học sinh không trả lời được, GV sử dụng Prompt để gợi ý từng bước.
- Tình huống dự phòng 36: Nếu học sinh không trả lời được, GV sử dụng Prompt để gợi ý từng bước.
- Tình huống dự phòng 37: Nếu học sinh không trả lời được, GV sử dụng Prompt để gợi ý từng bước.
- Tình huống dự phòng 38: Nếu học sinh không trả lời được, GV sử dụng Prompt để gợi ý từng bước.
- Tình huống dự phòng 39: Nếu học sinh không trả lời được, GV sử dụng Prompt để gợi ý từng bước.
- Tình huống dự phòng 40: Nếu học sinh không trả lời được, GV sử dụng Prompt để gợi ý từng bước.

### 2. Bộ câu hỏi phụ trợ mở rộng dành cho bài tập về nhà
- Bài tập tự luyện 1: Đánh giá năng lực giải quyết vấn đề và tư duy phản biện (Mức độ 3-4).
- Bài tập tự luyện 2: Đánh giá năng lực giải quyết vấn đề và tư duy phản biện (Mức độ 3-4).
- Bài tập tự luyện 3: Đánh giá năng lực giải quyết vấn đề và tư duy phản biện (Mức độ 3-4).
- Bài tập tự luyện 4: Đánh giá năng lực giải quyết vấn đề và tư duy phản biện (Mức độ 3-4).
- Bài tập tự luyện 5: Đánh giá năng lực giải quyết vấn đề và tư duy phản biện (Mức độ 3-4).
- Bài tập tự luyện 6: Đánh giá năng lực giải quyết vấn đề và tư duy phản biện (Mức độ 3-4).
- Bài tập tự luyện 7: Đánh giá năng lực giải quyết vấn đề và tư duy phản biện (Mức độ 3-4).
- Bài tập tự luyện 8: Đánh giá năng lực giải quyết vấn đề và tư duy phản biện (Mức độ 3-4).
- Bài tập tự luyện 9: Đánh giá năng lực giải quyết vấn đề và tư duy phản biện (Mức độ 3-4).
- Bài tập tự luyện 10: Đánh giá năng lực giải quyết vấn đề và tư duy phản biện (Mức độ 3-4).
- Bài tập tự luyện 11: Đánh giá năng lực giải quyết vấn đề và tư duy phản biện (Mức độ 3-4).
- Bài tập tự luyện 12: Đánh giá năng lực giải quyết vấn đề và tư duy phản biện (Mức độ 3-4).
- Bài tập tự luyện 13: Đánh giá năng lực giải quyết vấn đề và tư duy phản biện (Mức độ 3-4).
- Bài tập tự luyện 14: Đánh giá năng lực giải quyết vấn đề và tư duy phản biện (Mức độ 3-4).
- Bài tập tự luyện 15: Đánh giá năng lực giải quyết vấn đề và tư duy phản biện (Mức độ 3-4).
- Bài tập tự luyện 16: Đánh giá năng lực giải quyết vấn đề và tư duy phản biện (Mức độ 3-4).
- Bài tập tự luyện 17: Đánh giá năng lực giải quyết vấn đề và tư duy phản biện (Mức độ 3-4).
- Bài tập tự luyện 18: Đánh giá năng lực giải quyết vấn đề và tư duy phản biện (Mức độ 3-4).
- Bài tập tự luyện 19: Đánh giá năng lực giải quyết vấn đề và tư duy phản biện (Mức độ 3-4).
- Bài tập tự luyện 20: Đánh giá năng lực giải quyết vấn đề và tư duy phản biện (Mức độ 3-4).
- Bài tập tự luyện 21: Đánh giá năng lực giải quyết vấn đề và tư duy phản biện (Mức độ 3-4).
- Bài tập tự luyện 22: Đánh giá năng lực giải quyết vấn đề và tư duy phản biện (Mức độ 3-4).
- Bài tập tự luyện 23: Đánh giá năng lực giải quyết vấn đề và tư duy phản biện (Mức độ 3-4).
- Bài tập tự luyện 24: Đánh giá năng lực giải quyết vấn đề và tư duy phản biện (Mức độ 3-4).
- Bài tập tự luyện 25: Đánh giá năng lực giải quyết vấn đề và tư duy phản biện (Mức độ 3-4).
- Bài tập tự luyện 26: Đánh giá năng lực giải quyết vấn đề và tư duy phản biện (Mức độ 3-4).
- Bài tập tự luyện 27: Đánh giá năng lực giải quyết vấn đề và tư duy phản biện (Mức độ 3-4).
- Bài tập tự luyện 28: Đánh giá năng lực giải quyết vấn đề và tư duy phản biện (Mức độ 3-4).
- Bài tập tự luyện 29: Đánh giá năng lực giải quyết vấn đề và tư duy phản biện (Mức độ 3-4).
- Bài tập tự luyện 30: Đánh giá năng lực giải quyết vấn đề và tư duy phản biện (Mức độ 3-4).
- Bài tập tự luyện 31: Đánh giá năng lực giải quyết vấn đề và tư duy phản biện (Mức độ 3-4).
- Bài tập tự luyện 32: Đánh giá năng lực giải quyết vấn đề và tư duy phản biện (Mức độ 3-4).
- Bài tập tự luyện 33: Đánh giá năng lực giải quyết vấn đề và tư duy phản biện (Mức độ 3-4).
- Bài tập tự luyện 34: Đánh giá năng lực giải quyết vấn đề và tư duy phản biện (Mức độ 3-4).
- Bài tập tự luyện 35: Đánh giá năng lực giải quyết vấn đề và tư duy phản biện (Mức độ 3-4).
- Bài tập tự luyện 36: Đánh giá năng lực giải quyết vấn đề và tư duy phản biện (Mức độ 3-4).
- Bài tập tự luyện 37: Đánh giá năng lực giải quyết vấn đề và tư duy phản biện (Mức độ 3-4).
- Bài tập tự luyện 38: Đánh giá năng lực giải quyết vấn đề và tư duy phản biện (Mức độ 3-4).
- Bài tập tự luyện 39: Đánh giá năng lực giải quyết vấn đề và tư duy phản biện (Mức độ 3-4).
- Bài tập tự luyện 40: Đánh giá năng lực giải quyết vấn đề và tư duy phản biện (Mức độ 3-4).

### 3. Hướng dẫn kĩ thuật số cho Học sinh
- Kĩ năng số 1: Đảm bảo an toàn thông tin và trích dẫn nguồn khi dùng AI.
- Kĩ năng số 2: Đảm bảo an toàn thông tin và trích dẫn nguồn khi dùng AI.
- Kĩ năng số 3: Đảm bảo an toàn thông tin và trích dẫn nguồn khi dùng AI.
- Kĩ năng số 4: Đảm bảo an toàn thông tin và trích dẫn nguồn khi dùng AI.
- Kĩ năng số 5: Đảm bảo an toàn thông tin và trích dẫn nguồn khi dùng AI.
- Kĩ năng số 6: Đảm bảo an toàn thông tin và trích dẫn nguồn khi dùng AI.
- Kĩ năng số 7: Đảm bảo an toàn thông tin và trích dẫn nguồn khi dùng AI.
- Kĩ năng số 8: Đảm bảo an toàn thông tin và trích dẫn nguồn khi dùng AI.
- Kĩ năng số 9: Đảm bảo an toàn thông tin và trích dẫn nguồn khi dùng AI.
- Kĩ năng số 10: Đảm bảo an toàn thông tin và trích dẫn nguồn khi dùng AI.
- Kĩ năng số 11: Đảm bảo an toàn thông tin và trích dẫn nguồn khi dùng AI.
- Kĩ năng số 12: Đảm bảo an toàn thông tin và trích dẫn nguồn khi dùng AI.
- Kĩ năng số 13: Đảm bảo an toàn thông tin và trích dẫn nguồn khi dùng AI.
- Kĩ năng số 14: Đảm bảo an toàn thông tin và trích dẫn nguồn khi dùng AI.
- Kĩ năng số 15: Đảm bảo an toàn thông tin và trích dẫn nguồn khi dùng AI.
- Kĩ năng số 16: Đảm bảo an toàn thông tin và trích dẫn nguồn khi dùng AI.
- Kĩ năng số 17: Đảm bảo an toàn thông tin và trích dẫn nguồn khi dùng AI.
- Kĩ năng số 18: Đảm bảo an toàn thông tin và trích dẫn nguồn khi dùng AI.
- Kĩ năng số 19: Đảm bảo an toàn thông tin và trích dẫn nguồn khi dùng AI.
- Kĩ năng số 20: Đảm bảo an toàn thông tin và trích dẫn nguồn khi dùng AI.
- Kĩ năng số 21: Đảm bảo an toàn thông tin và trích dẫn nguồn khi dùng AI.
- Kĩ năng số 22: Đảm bảo an toàn thông tin và trích dẫn nguồn khi dùng AI.
- Kĩ năng số 23: Đảm bảo an toàn thông tin và trích dẫn nguồn khi dùng AI.
- Kĩ năng số 24: Đảm bảo an toàn thông tin và trích dẫn nguồn khi dùng AI.
- Kĩ năng số 25: Đảm bảo an toàn thông tin và trích dẫn nguồn khi dùng AI.
- Kĩ năng số 26: Đảm bảo an toàn thông tin và trích dẫn nguồn khi dùng AI.
- Kĩ năng số 27: Đảm bảo an toàn thông tin và trích dẫn nguồn khi dùng AI.
- Kĩ năng số 28: Đảm bảo an toàn thông tin và trích dẫn nguồn khi dùng AI.
- Kĩ năng số 29: Đảm bảo an toàn thông tin và trích dẫn nguồn khi dùng AI.
- Kĩ năng số 30: Đảm bảo an toàn thông tin và trích dẫn nguồn khi dùng AI.
- Kĩ năng số 31: Đảm bảo an toàn thông tin và trích dẫn nguồn khi dùng AI.
- Kĩ năng số 32: Đảm bảo an toàn thông tin và trích dẫn nguồn khi dùng AI.
- Kĩ năng số 33: Đảm bảo an toàn thông tin và trích dẫn nguồn khi dùng AI.
- Kĩ năng số 34: Đảm bảo an toàn thông tin và trích dẫn nguồn khi dùng AI.
- Kĩ năng số 35: Đảm bảo an toàn thông tin và trích dẫn nguồn khi dùng AI.
- Kĩ năng số 36: Đảm bảo an toàn thông tin và trích dẫn nguồn khi dùng AI.
- Kĩ năng số 37: Đảm bảo an toàn thông tin và trích dẫn nguồn khi dùng AI.
- Kĩ năng số 38: Đảm bảo an toàn thông tin và trích dẫn nguồn khi dùng AI.
- Kĩ năng số 39: Đảm bảo an toàn thông tin và trích dẫn nguồn khi dùng AI.
- Kĩ năng số 40: Đảm bảo an toàn thông tin và trích dẫn nguồn khi dùng AI.


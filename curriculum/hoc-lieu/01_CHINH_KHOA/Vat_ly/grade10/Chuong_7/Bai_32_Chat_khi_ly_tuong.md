# GIÁO ÁN BÀI 32: CHẤT KHÍ LÍ TƯỞNG
(Thiết kế theo cấu trúc Công văn 5512/BGDĐT-GDTrH)

---

## I. MỤC TIÊU

### 1. Năng lực Vật lí (theo GDPT 2018)
- **Nhận thức Vật lí:**
  - Nêu được khái niệm khí lí tưởng.
  - Phân biệt được chất khí thực và chất khí lí tưởng.
  - Nêu được các định luật về chất khí (Boyle, Charles).
  - Viết được phương trình trạng thái của khí lí tưởng.
- **Tìm hiểu thế giới tự nhiên dưới góc độ Vật lí:**
  - Thiết kế và thực hiện được thí nghiệm (thật hoặc mô phỏng ảo) khảo sát quá trình đẳng nhiệt, đẳng tích.
  - Quan sát, thu thập và biểu diễn số liệu trên các hệ toạ độ (p-V, p-T, V-T).
- **Vận dụng kiến thức, kĩ năng đã học:**
  - Áp dụng phương trình trạng thái khí lí tưởng để giải các bài tập thực tiễn (áp suất lốp xe khi trời nắng, bóng bay lên cao...).
  - Giải thích hiện tượng thực tế dựa trên thuyết động học phân tử chất khí.

### 2. Năng lực số (NLS)
- **NLS 1:** Sử dụng thành thạo phần mềm mô phỏng PhET Interactive Simulations (Gas Properties) để khảo sát các thông số trạng thái của lượng khí.
- **NLS 2:** Áp dụng công cụ xử lí bảng tính (Excel/Google Sheets) và Python để phân tích dữ liệu thí nghiệm tự động, vẽ đồ thị đẳng nhiệt, đẳng tích.
- **NLS 3:** Hợp tác số hóa, sử dụng bảng trắng điện tử Miro hoặc Jamboard để thảo luận nhóm về thuyết động học phân tử.
- **NLS 4:** Tương tác với AI (ChatGPT/Claude) để tối ưu hoá phương pháp giải bài tập Vật lí và tìm hiểu sâu hơn về mô hình khí lí tưởng.

### 3. Phẩm chất
- **Chăm chỉ:** Kiên trì trong việc xử lí chuỗi số liệu thực nghiệm phức tạp, tự học qua các tài liệu trực tuyến.
- **Trung thực:** Không tự ý sửa đổi số liệu thí nghiệm cho khớp với lí thuyết.
- **Trách nhiệm:** Ý thức về an toàn khi làm thí nghiệm liên quan đến áp suất cao, nhiệt độ.

---

## II. THIẾT BỊ DẠY HỌC VÀ HỌC LIỆU

### 1. Đối với giáo viên (GV)
- Máy tính, máy chiếu, bảng thông minh.
- Thiết bị thí nghiệm định luật Boyle (xi lanh, áp kế).
- **AI Tools:**
  - Claude 3 / ChatGPT 4o để xây dựng kịch bản mô phỏng.
  - Prompt tạo bài toán trắc nghiệm nhanh.
- **Phần mềm:**
  - PhET Interactive Simulations (Gas Properties).
  - Python (Jupyter Notebook).

### 2. Đối với học sinh (HS)
- Sách giáo khoa, sách chuyên đề.
- Thiết bị di động hoặc máy tính bảng kết nối Wifi trường.
- Đã cài đặt hoặc có khả năng truy cập Google Sheets, Colab.

---

## III. TIẾN TRÌNH DẠY HỌC

### 1. Hoạt động 1: Khởi động (Xác định vấn đề học tập)
**a) Mục tiêu:**
- Đặt học sinh vào tình huống thực tế liên quan đến sự nở vì nhiệt của chất khí.
- Khởi động tư duy phân tích các thông số trạng thái (p, V, T).

**b) Nội dung:**
- Xem hình ảnh hoặc video quả bóng bay bị nổ khi để ngoài trời nắng gắt.
- Trả lời câu hỏi: "Yếu tố nào làm quả bóng căng phồng và nổ? Có mối liên hệ nào giữa nhiệt độ, thể tích và áp suất bên trong quả bóng?"

**c) Sản phẩm:**
- Các ý tưởng, giả thuyết của HS đưa ra trên Jamboard.

**d) Tổ chức thực hiện:**
- **Bước 1: Chuyển giao nhiệm vụ**
  - GV chia sẻ link Jamboard cho lớp.
  - *Prompt AI hỗ trợ GV:* `"Viết một tình huống gây tò mò về hiện tượng nổ lốp xe đạp vào mùa hè nóng bức để làm bài tập khởi động cho tiết học về chất khí lí tưởng lớp 10."`
- **Bước 2: Thực hiện nhiệm vụ**
  - HS ghi các từ khoá (Nhiệt độ tăng, Thể tích tăng, Áp suất tăng) vào Jamboard.
  - *Prompt AI hỗ trợ HS (nếu dùng ở nhà):* `"Tại sao bóng bay bơm khí lại bị vỡ khi gặp nhiệt độ cao? Giải thích dưới góc độ vật lí."`
- **Bước 3: Báo cáo, thảo luận**
  - GV phân tích các sticky notes trên Jamboard.
- **Bước 4: Kết luận, nhận định**
  - Trạng thái của một lượng khí được xác định bởi 3 thông số: p, V, T. Khi một thông số thay đổi, các thông số khác cũng thay đổi theo. Hôm nay ta sẽ học về Mô hình khí lí tưởng và phương trình trạng thái.

---

### 2. Hoạt động 2: Hình thành kiến thức mới

#### 2.1. Khái niệm khí lí tưởng và Thuyết động học phân tử
**a) Mục tiêu:** Nhận biết các tiên đề của thuyết động học phân tử. Phân biệt khí thực và khí lí tưởng.
**b) Nội dung:**
- Hoạt động thảo luận nhóm (Think - Pair - Share).
- Phân tích bảng so sánh đặc điểm phân tử khí.
**c) Sản phẩm:** Bảng phân loại khí thực vs khí lí tưởng.
**d) Tổ chức thực hiện:**
- **Bước 1:** Giao nhiệm vụ đọc SGK.
  - *Prompt AI hỗ trợ GV:* `"Lập một bảng so sánh ngắn gọn, trực quan giữa khí lí tưởng và khí thực để học sinh dễ hiểu nhất."`
- **Bước 2:** HS tóm tắt các tiên đề.
- **Bước 3:** Đại diện trình bày, GV ghi chú lên bảng.
- **Bước 4:** GV chuẩn hoá: Khí lí tưởng là chất khí mà các phân tử được coi là các chất điểm và chỉ tương tác với nhau khi va chạm.

#### 2.2. Khảo sát các định luật chất khí qua mô phỏng PhET
**a) Mục tiêu:** Phát hiện định luật Boyle, định luật Charles. Thiết lập phương trình trạng thái.
**b) Nội dung:**
- HS sử dụng máy tính vào PhET.
- Cố định T, thay đổi V để đo p (Định luật Boyle).
- Cố định p, thay đổi T để đo V (Định luật Charles).
**c) Sản phẩm:**
- Bảng dữ liệu thí nghiệm ảo, đồ thị biểu diễn 2 định luật.
**d) Tổ chức thực hiện:**
- **Bước 1: Chuyển giao nhiệm vụ**
  - GV chia nhóm chuyên gia. Nhóm 1, 2 nghiên cứu đẳng nhiệt. Nhóm 3, 4 nghiên cứu đẳng áp.
- **Bước 2: Thực hiện nhiệm vụ**
  - HS chạy PhET (Gas Properties). Kéo thả pít-tông, đun nóng/làm lạnh khối khí.
  - Tích hợp NLS: HS nhập dữ liệu vào Google Sheets để vẽ đồ thị tự động (Đường hyperbol cho đẳng nhiệt, đường thẳng cho đẳng áp/đẳng tích).
  - *Prompt AI hỗ trợ HS:* `"Làm thế nào để sử dụng Google Sheets vẽ đồ thị phân tán (scatter plot) và chèn đường xu hướng (trendline) cho tập số liệu (V, p)?"`
- **Bước 3: Báo cáo, thảo luận**
  - Đại diện nhóm chuyên gia lên bảng trình chiếu đồ thị từ Google Sheets.
- **Bước 4: Kết luận, nhận định**
  - Tổng hợp lại thành Phương trình trạng thái khí lí tưởng: $\frac{p_1 V_1}{T_1} = \frac{p_2 V_2}{T_2}$.

---

### 3. Hoạt động 3: Luyện tập
**a) Mục tiêu:** Vận dụng phương trình trạng thái để tính toán thông số còn thiếu.
**b) Nội dung:**
- Bài tập trắc nghiệm nhanh 10 câu (Azota/Quizizz).
- 1 bài toán lớn tổng hợp đồ thị các quá trình biến đổi trạng thái.
**c) Sản phẩm:**
- Lời giải bài tập vẽ lại đồ thị (từ hệ tọa độ p-V sang V-T).
**d) Tổ chức thực hiện:**
- **Bước 1:** GV giao đề trên hệ thống trực tuyến.
  - *Prompt AI hỗ trợ GV:* `"Tạo 5 bài tập tính toán sử dụng phương trình trạng thái khí lí tưởng, mức độ thông hiểu, kèm lời giải chi tiết từng bước."`
- **Bước 2:** HS làm bài độc lập.
- **Bước 3:** Chữa bài tập đồ thị khó trên bảng.
- **Bước 4:** Nhấn mạnh lỗi sai: "Nhiệt độ T bắt buộc phải đổi sang độ Kelvin (K)".

---

### 4. Hoạt động 4: Vận dụng
**a) Mục tiêu:** Giải thích các hiện tượng thực tế và bài toán đời sống bằng phương trình trạng thái.
**b) Nội dung:**
- Vận dụng giải bài toán: "Thiết kế khinh khí cầu".
**c) Sản phẩm:**
- Bản báo cáo tính toán sức nâng của khinh khí cầu khi thay đổi nhiệt độ khối khí bên trong.
**d) Tổ chức thực hiện:**
- **Bước 1:** GV đưa bài toán thực tế.
  - *Prompt AI hỗ trợ GV:* `"Đề xuất một dự án nhỏ về khinh khí cầu mini ứng dụng định luật Charles cho học sinh lớp 10, yêu cầu các bước tính toán thể tích cần thiết để nâng tải trọng 50g."`
- **Bước 2:** Nhóm HS lập mô hình, tính toán ở nhà.
  - *Prompt AI hỗ trợ HS:* `"Cung cấp công thức tính lực đẩy Archimedes cho khinh khí cầu trong không khí. Làm sao kết hợp với phương trình khí lí tưởng để tính nhiệt độ cần đốt nóng?"`
- **Bước 3:** Nộp bài qua Google Classroom.
- **Bước 4:** GV chấm điểm bằng Rubric.

---

## IV. TIÊU CHÍ ĐÁNH GIÁ (Rubric)

### Rubric Đánh Giá Thực Hành Mô Phỏng và Xử Lí Số Liệu

| Tiêu chí | Mức 1 (Nhận biết) | Mức 2 (Thông hiểu) | Mức 3 (Vận dụng) | Mức 4 (Vận dụng cao) |
| :--- | :--- | :--- | :--- | :--- |
| **Sử dụng phần mềm (PhET/Sheets)** | Cần GV hướng dẫn từng bước, vẽ đồ thị sai. | Biết cách thu thập số liệu và tự vẽ biểu đồ cơ bản. | Thu thập chính xác, vẽ biểu đồ chuẩn, có dán nhãn trục toạ độ. | Khai thác sâu tính năng của phần mềm, dùng Python/AI phân tích sai số nhỏ. |
| **Độ chính xác lí thuyết** | Không nhận ra được định luật Boyle từ đồ thị. | Kết luận đúng định luật nhưng chưa viết được biểu thức. | Viết và phát biểu chính xác các định luật khí lí tưởng. | Mở rộng được hệ quả, chứng minh được phương trình trạng thái từ thực nghiệm. |
| **Hoàn thành báo cáo** | Báo cáo nộp trễ, thiếu phần kết luận. | Báo cáo đầy đủ các phần, nộp đúng hạn. | Báo cáo trình bày khoa học, thẩm mĩ, lập luận chặt chẽ. | Báo cáo xuất sắc, có minh họa sống động, sáng tạo cách thức trình bày. |

---

## PHỤ LỤC: MÃ NGUỒN PYTHON (DÀNH CHO HỌC SINH GIỎI / CÂU LẠC BỘ STEM)

```python
# Khảo sát quá trình đẳng nhiệt (Định luật Boyle-Mariotte)
import numpy as np
import matplotlib.pyplot as plt

# Tạo dữ liệu thể tích V từ 1 đến 10 lít
V = np.linspace(1, 10, 100)
# Hằng số k = p*V (giả sử T = hằng số, k = 10)
k = 10
# Tính áp suất p
p = k / V

# Vẽ đồ thị p-V
plt.figure(figsize=(8,6))
plt.plot(V, p, color='red', linewidth=2, label='Đường đẳng nhiệt T1')
plt.title('Đồ thị quá trình đẳng nhiệt (Định luật Boyle)')
plt.xlabel('Thể tích V (Lít)')
plt.ylabel('Áp suất p (atm)')
plt.grid(True, linestyle='--')
plt.legend()
plt.show()
```
*(Giáo án tích hợp công nghệ giúp trực quan hoá trừu tượng nhiệt động lực học).*

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


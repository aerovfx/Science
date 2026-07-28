# KẾ HOẠCH BÀI DẠY: BÀI 11 - THỰC HÀNH: ĐO GIA TỐC RƠI TỰ DO
*(Bộ sách: Kết nối tri thức với cuộc sống - Vật lí 10)*

## I. MỤC TIÊU
### 1. Về năng lực vật lí
- **Nhận thức vật lí:**
  - Nêu được nguyên lí của phép đo gia tốc rơi tự do thông qua quãng đường và thời gian (dựa vào công thức $s = \frac{1}{2}gt^2$).
  - Nhận biết được các dụng cụ đo: đồng hồ đo thời gian hiện số, cổng quang điện, nam châm điện.
- **Tìm hiểu thế giới tự nhiên dưới góc độ vật lí:**
  - Thực hiện đúng các bước lắp ráp thí nghiệm, tiến hành đo thời gian rơi của vật trên các quãng đường khác nhau.
  - Xử lí số liệu thực nghiệm, tính được gia tốc $g$ và sai số của phép đo.
  - Vẽ được đồ thị $s$ theo $t^2$, từ đó xác định $g$ từ hệ số góc của đồ thị.
- **Vận dụng kiến thức, kĩ năng đã học:**
  - Giải thích được tại sao cần tiến hành nhiều lần đo và tại sao phải có cổng quang điện thay vì dùng tay bấm đồng hồ thông thường (giảm sai số).

### 2. Về năng lực số (NLS)
- Sử dụng thành thạo phần mềm Excel hoặc Google Sheets để nhập số liệu, tính giá trị trung bình, sai số tuyệt đối, sai số tỉ đối.
- Dùng tính năng Scatter Plot (biểu đồ phân tán) và Trendline (đường xu hướng) trong Excel để vẽ đồ thị $s - t^2$ và xác định phương trình đồ thị.
- Sử dụng phần mềm Tracker phân tích video chuyển động rơi để đối chiếu kết quả với phương pháp đo truyền thống (tùy chọn nâng cao).

### 3. Về phẩm chất
- **Trung thực:** Ghi chép chính xác kết quả đo, không tự ý sửa đổi số liệu để ép ra $g \approx 9.8$.
- **Chăm chỉ, cẩn thận:** Tỉ mỉ trong việc điều chỉnh cổng quang, cẩn thận khi thao tác với các thiết bị điện.
- **Trách nhiệm:** Giữ gìn, bảo quản dụng cụ thí nghiệm, dọn dẹp gọn gàng sau khi thực hành.

---

## II. THIẾT BỊ DẠY HỌC VÀ HỌC LIỆU
### 1. Giáo viên
- Kế hoạch bài dạy, bài giảng trình chiếu.
- Các bộ dụng cụ thí nghiệm đo gia tốc rơi tự do: Giá đỡ đứng, nam châm điện, cổng quang điện, đồng hồ đo thời gian hiện số, trụ thép, thước milimet, dây cắm nối.
- Video hướng dẫn lắp ráp và tiến hành thí nghiệm (để HS xem trước hoặc xem nếu không hiểu).
- **AI Tools:** Chuẩn bị một đoạn mã Python (do AI sinh ra) dùng để nhập dữ liệu mảng và in ra kết quả sai số tự động.

### 2. Học sinh
- Đọc trước bài, chuẩn bị báo cáo thực hành (kẻ sẵn bảng số liệu).
- Máy tính xách tay hoặc máy tính bảng có cài Excel/Google Sheets (mỗi nhóm 1 chiếc).

---

## III. TIẾN TRÌNH DẠY HỌC

### HOẠT ĐỘNG 1: KHỞI ĐỘNG (XÁC ĐỊNH VẤN ĐỀ)
**a. Mục tiêu:**
- Kích hoạt kiến thức cũ về sự rơi tự do.
- Đặt vấn đề: Làm thế nào để đo được gia tốc $g$ một cách chính xác trong phòng thí nghiệm?

**b. Nội dung:**
- GV đặt câu hỏi: "Ở bài trước, ta biết $g \approx 9,8 \text{ m/s}^2$. Làm sao người ta đo được con số này? Nếu dùng đồng hồ bấm giây trên điện thoại và thước dây để đo một vật rơi từ độ cao 2m, theo các em có chính xác không?"

**c. Sản phẩm:**
- HS nhận ra: Bấm tay sẽ bị sai số phản xạ người rất lớn so với thời gian rơi rất ngắn của vật. Cần một công cụ đo tự động.

**d. Tổ chức thực hiện:**
- **Bước 1:** GV nêu tình huống.
- **Bước 2:** HS suy nghĩ, trả lời (thời gian phản xạ của người khoảng 0.2s, trong khi vật rơi 2m chỉ mất khoảng 0.6s, sai số quá lớn).
- **Bước 3:** Báo cáo, nhận xét.
- **Bước 4:** GV dẫn vào bài: Chúng ta sẽ dùng hệ thống cảm biến (cổng quang điện) để đo thời gian rơi chính xác tới $0.001s$.
- **Tích hợp NLS & AI:** 
  - *Prompt AI cho GV:* "Hãy gợi ý một tình huống hài hước hoặc một câu đố ngắn về sai số phản xạ của con người để mở đầu bài thực hành vật lí."

---

### HOẠT ĐỘNG 2: HÌNH THÀNH KIẾN THỨC MỚI (TÌM HIỂU DỤNG CỤ VÀ PHƯƠNG ÁN)
**a. Mục tiêu:**
- Nắm được sơ đồ lắp ráp, chức năng của đồng hồ hiện số và cổng quang điện.
- Xác định phương án tiến hành thí nghiệm.

**b. Nội dung:**
- Giới thiệu dụng cụ: Cổng quang (chế độ A, B, A<->B), nam châm điện giữ vật.
- Phương án: Đo $t$ ứng với các quãng đường $s$ khác nhau. Dùng công thức $g = \frac{2s}{t^2}$.

**c. Sản phẩm:**
- HS mô tả được sơ đồ và trình tự các bước.

**d. Tổ chức thực hiện:**
- **Bước 1: Giao nhiệm vụ:** Yêu cầu HS nghiên cứu SGK, quan sát bộ dụng cụ thực tế trên bàn GV và video hướng dẫn. Nêu chức năng của từng bộ phận.
- **Bước 2: Thực hiện nhiệm vụ:** HS thảo luận nhóm (5p).
- **Bước 3: Báo cáo, thảo luận:** Đại diện nhóm lên chỉ trực tiếp trên bộ dụng cụ.
- **Bước 4: Kết luận, nhận định:** GV chốt lại cách cài đặt đồng hồ ở chế độ đo thời gian vật đi từ A đến B (hoặc từ nam châm đến cổng quang).
- **Tích hợp AI:**
  - *Prompt AI cho HS:* "Giải thích ngắn gọn nguyên lí hoạt động của cổng quang điện trong phòng thí nghiệm vật lí."

---

### HOẠT ĐỘNG 3: LUYỆN TẬP (TIẾN HÀNH THÍ NGHIỆM VÀ XỬ LÍ SỐ LIỆU)
**a. Mục tiêu:**
- Thao tác thành thạo bộ dụng cụ.
- Lấy được ít nhất 3 bộ số liệu chính xác.
- Tính toán sai số và vẽ đồ thị.

**b. Nội dung:**
- Nhóm HS tiến hành đo: Thả vật từ 3 vị trí s khác nhau (vd 0.2m, 0.4m, 0.6m), mỗi vị trí đo 5 lần thời gian t.
- Nhập số liệu vào bảng tính để xử lí nhanh.

**c. Sản phẩm:**
- Bảng số liệu hoàn chỉnh của nhóm.
- Đồ thị s - t² trên máy tính. Kết quả cuối cùng của g = $\bar{g} \pm \Delta g$.

**d. Tổ chức thực hiện:**
- **Bước 1: Giao nhiệm vụ:** 
  - HS về các trạm thí nghiệm (chia 4-6 nhóm).
  - Yêu cầu tuân thủ an toàn, thao tác nhẹ nhàng, thả rơi trụ thép trúng vào cổng quang.
  - Nhập dữ liệu thời gian thực vào Google Sheets mà nhóm đã chuẩn bị.
- **Bước 2: Thực hiện nhiệm vụ (Thực hành):** 
  - Nhóm trưởng điều hành, thư kí ghi số liệu, các thành viên luân phiên thao tác.
  - Sử dụng Excel lập công thức tính giá trị trung bình, sai số (hàm AVERAGE, ABS...).
- **Bước 3: Báo cáo, thảo luận:** Các nhóm hoàn thành bảng, vẽ đồ thị Scatter Plot trên Excel.
- **Bước 4: Kết luận, nhận định:** GV đi vòng quanh hỗ trợ nếu cổng quang bị lệch, hướng dẫn kiểm tra lại nếu số liệu sai lệch quá lớn ($g < 8$ hoặc $g > 11$).
- **Tích hợp NLS & AI:** 
  - Sử dụng Excel/Google Sheets cho toàn bộ quá trình tính toán để tiết kiệm thời gian, tránh sai số toán học.
  - *Prompt AI cho HS (dành cho nhóm tính sai số gặp khó khăn):* "Viết công thức Excel để tính sai số tuyệt đối trung bình của 5 giá trị thời gian nằm trong ô A1 đến A5."

---

### HOẠT ĐỘNG 4: VẬN DỤNG VÀ BÁO CÁO
**a. Mục tiêu:**
- Hoàn thiện báo cáo thực hành. Đánh giá nguyên nhân gây sai số.
- Đề xuất phương án cải tiến.

**b. Nội dung:**
- Trình bày kết quả $g$ của nhóm. So sánh với giá trị lí thuyết ($9.78 - 9.81$ tại VN).
- Phân tích sai số hệ thống và ngẫu nhiên.

**c. Sản phẩm:**
- Bản báo cáo thực hành hoàn chỉnh, có đồ thị in ra hoặc nộp qua file mềm.

**d. Tổ chức thực hiện:**
- **Bước 1: Giao nhiệm vụ:** Các nhóm thảo luận nguyên nhân sai số. (Do lực cản không khí, do cửa sổ cổng quang rộng, do đồng hồ, do từ dư của nam châm...).
- **Bước 2: Thực hiện nhiệm vụ:** Ghi chép phần thảo luận vào báo cáo.
- **Bước 3: Báo cáo, thảo luận:** Nộp file báo cáo qua Google Classroom / Padlet.
- **Bước 4: Kết luận, nhận định:** GV tổng kết giờ thực hành, biểu dương nhóm làm tốt, số liệu đẹp và trung thực. Nhắc nhở dọn dẹp dụng cụ.
- **Tích hợp AI:**
  - *Prompt AI cho HS:* "Ngoài phương pháp dùng cổng quang điện, hãy liệt kê 3 phương pháp hiện đại khác sử dụng điện thoại thông minh để đo gia tốc trọng trường g."

---

## IV. TIÊU CHÍ ĐÁNH GIÁ (RUBRIC)

| Tiêu chí / Mức độ | Nhận biết (1) | Thông hiểu (2) | Vận dụng (3) | Vận dụng cao (4) |
| --- | --- | --- | --- | --- |
| **Kỹ năng thao tác** | Biết tên các dụng cụ, lúng túng khi lắp. | Lắp ráp đúng sơ đồ nhưng chậm. | Thao tác thành thạo, điều chỉnh cổng quang chuẩn xác. | Thiết lập mạch nhanh, biết tự khắc phục lỗi thiết bị. |
| **Xử lí số liệu (NLS)** | Ghi chép đủ số liệu ra nháp. | Tính tay được các giá trị trung bình. | Lập bảng Excel tính tự động đúng sai số. | Vẽ đồ thị Excel đẹp, xuất phương trình $y=ax$, tính g từ đồ thị chính xác. |
| **Trung thực, KQ** | Lấy số liệu của nhóm khác hoặc chế số. | Ghi đúng nhưng kết quả sai lệch rất lớn không rõ nguyên nhân. | Kết quả $g$ nằm trong khoảng $9.5 - 10.2$, trung thực. | Kết quả sát lí thuyết, giải thích được rõ ràng các loại sai số mắc phải. |
| **Hợp tác, kỷ luật** | Gây mất trật tự, làm hỏng dụng cụ. | Tuân thủ nội quy nhưng thụ động. | Phân công việc trong nhóm rõ ràng. | Quản lí thời gian xuất sắc, dọn dẹp hoàn hảo. |

---
*Ghi chú: Giờ thực hành cần đề cao tính trung thực khoa học, học sinh tuyệt đối không được "chế" số liệu để cho kết quả đẹp. Sai số là bản chất của thực nghiệm.*

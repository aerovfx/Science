# KẾ HOẠCH BÀI DẠY (GIÁO ÁN)
## BÀI 26: THỰC HÀNH: ĐO SUẤT ĐIỆN ĐỘNG VÀ ĐIỆN TRỞ TRONG CỦA NGUỒN ĐIỆN
**Môn học: Vật lí; Lớp: 11 (Bộ sách Kết nối tri thức với cuộc sống)**
**Thời lượng thực hiện: 2 tiết**

---

## I. MỤC TIÊU

### 1. Năng lực vật lí
- **Nhận thức vật lí:** 
  - Nêu được cơ sở lí thuyết của phương pháp đo suất điện động $\xi$ và điện trở trong $r$ dựa vào định luật Ohm cho toàn mạch: $I = \frac{\xi}{R + r} \Rightarrow U = \xi - Ir$.
  - Trình bày được mục đích, nguyên tắc hoạt động của các dụng cụ đo (Vôn kế, Ampe kế, biến trở, đồng hồ vạn năng hiện số).
- **Tìm hiểu thế giới tự nhiên dưới góc độ vật lí (Năng lực Thực hành):** 
  - Lắp ráp được mạch điện thực hành theo sơ đồ thiết kế.
  - Sử dụng thành thạo đồng hồ vạn năng để đo dòng điện $I$ và điện áp $U$.
  - Thực hiện các thao tác lấy số liệu an toàn, khoa học, giảm thiểu sai số.
- **Vận dụng kiến thức, kĩ năng đã học:** 
  - Xử lý số liệu thực nghiệm: Vẽ đồ thị $U = f(I)$.
  - Sử dụng phương pháp đồ thị để xác định chính xác $\xi$ (tung độ gốc) và $r$ (độ lớn hệ số góc) của nguồn.

### 2. Năng lực chung và Năng lực số (NLS)
- **Giao tiếp và hợp tác:** Làm việc nhóm phân công rõ ràng: người lắp mạch, người chỉnh biến trở, người đọc số, người ghi chép.
- **Giải quyết vấn đề:** Xử lý tình huống khi kim đồng hồ không nhảy hoặc bị ngược chiều.
- **Năng lực số (NLS):** 
  - Sử dụng phần mềm Excel (hoặc Logger Pro) để nhập bảng số liệu.
  - Sử dụng tính năng "Trendline" (đường xu hướng) trong Excel để vẽ đồ thị hàm bậc nhất $y = ax + b$ từ dữ liệu thực tế và xuất trực tiếp phương trình, từ đó suy ra $r$ và $\xi$ tự động bằng thuật toán bình phương tối thiểu, giảm sai số vẽ tay.

### 3. Phẩm chất
- **Khách quan, trung thực:** Tôn trọng số liệu đo thực tế, tuyệt đối không bịa số liệu "cho đẹp".
- **Cẩn thận, kỉ luật:** Đảm bảo an toàn điện, ngắt mạch khi không đo để tránh nóng hỏng pin và thiết bị.

---

## II. THIẾT BỊ DẠY HỌC VÀ HỌC LIỆU

### 1. Đối với giáo viên
- Bộ dụng cụ thí nghiệm biểu diễn: 
  - Nguồn điện (Pin tiểu 1.5V gắn trong hộp chứa).
  - Biến trở con chạy hoặc hộp điện trở thập phân.
  - 2 Đồng hồ vạn năng hiện số (làm Ampe kế DC và Vôn kế DC).
  - Khóa K, dây nối.
- Máy chiếu, máy tính có sẵn file Excel mẫu xử lí số liệu và vẽ đồ thị.

### 2. Đối với học sinh
- Mỗi nhóm (4-6 HS): 1 bộ thí nghiệm tương tự GV.
- Giấy kẻ ô li (nếu yêu cầu vẽ tay) hoặc laptop/tablet có cài Excel.
- Mẫu báo cáo thực hành (Phiếu học tập).

---

## III. TIẾN TRÌNH DẠY HỌC

### HOẠT ĐỘNG 1: KHỞI ĐỘNG (XÁC ĐỊNH VẤN ĐỀ)
**a) Mục tiêu:** Ôn tập định luật Ohm toàn mạch và khơi gợi ý tưởng dùng đồ thị để tìm ẩn số.
**b) Nội dung:** Biến đổi toán học biểu thức định luật Ohm về dạng đồ thị $y = ax + b$.
**c) Sản phẩm:** Phương trình $U = -r.I + \xi$.
**d) Tổ chức thực hiện:**
- **Bước 1:** GV đặt vấn đề: Ta có công thức toàn mạch $I = \frac{\xi}{R+r}$. Ta cần tìm $\xi$ và $r$. Nếu ta thay đổi $R$, đo $U$ và $I$ tương ứng, ta có thể tìm được $\xi, r$ không?
- **Bước 2:** HS viết nháp, kết hợp $U = IR$. Suy ra $I = \frac{\xi}{\frac{U}{I} + r} \Rightarrow U = \xi - Ir$.
- **Bước 3:** HS nhận xét dạng hàm số này trong toán học học ở trục $(I, U)$.
- **Bước 4:** GV chốt: Đây là hàm bậc nhất $y = b - ax$ (với $y$ là $U$, $x$ là $I$, $b$ là $\xi$, $a$ là $r$). Đồ thị là một đường thẳng đi xuống. Hoạt động hôm nay là đi đo để vẽ đường thẳng đó.

---

### HOẠT ĐỘNG 2: HÌNH THÀNH KIẾN THỨC, KỸ NĂNG THỰC HÀNH

#### TIỂU HOẠT ĐỘNG 2.1: THIẾT KẾ PHƯƠNG ÁN VÀ LẮP RÁP MẠCH ĐIỆN
**a) Mục tiêu:** Mắc đúng mạch điện thực hành, chọn đúng thang đo trên vạn năng kế.
**b) Nội dung:** Phân tích sơ đồ mạch, cách mắc Ampe kế và Vôn kế.
**c) Sản phẩm:** Mạch điện thực tế hoạt động bình thường, thông mạch.
**d) Tổ chức thực hiện:**
- **Bước 1:** GV chiếu sơ đồ mạch: Nguồn nối tiếp khóa K, biến trở $R$ và Ampe kế. Vôn kế mắc song song với nguồn điện. Yêu cầu các nhóm lắp theo.
- **Bước 2:** HS làm việc nhóm. Quan trọng: Ampe kế chọn thang đo DCA (khoảng 200mA hoặc 2A), Vôn kế chọn thang DCV (20V). Cực dương đồng hồ về cực dương của nguồn.
- **Bước 3:** Các nhóm kiểm tra chéo lẫn nhau. GV đi vòng quanh xác nhận an toàn mạch trước khi cho HS đóng khóa K.
- **Bước 4:** GV nhấn mạnh kĩ năng: Chỉ đóng khóa K lúc đọc số, đọc xong ngắt ngay để pin không bị phân cực, giữ $\xi, r$ ổn định.

#### TIỂU HOẠT ĐỘNG 2.2: TIẾN HÀNH THÍ NGHIỆM VÀ GHI SỐ LIỆU
**a) Mục tiêu:** Thu thập được ít nhất 5 cặp số liệu $(U, I)$ khác nhau.
**b) Nội dung:** Dịch chuyển biến trở $R$ để thay đổi điện trở mạch ngoài.
**c) Sản phẩm:** Bảng số liệu thô trong phiếu báo cáo.
**d) Tổ chức thực hiện:**
- **Bước 1:** GV hướng dẫn thao tác mẫu 1 lần đo.
- **Bước 2:** HS tiến hành tự đo: 
  - Đóng K, chỉnh $R$ ở 5 vị trí khác nhau. 
  - Tại mỗi vị trí, đọc đồng thời $U$ và $I$. 
  - Ghi vào bảng 5 cặp $(U_1, I_1), (U_2, I_2),... (U_5, I_5)$.
- **Bước 3:** Nếu có sai số thô bạo (vd số văng quá xa), HS tự phát hiện và đo lại.
- **Bước 4:** Thu dọn dụng cụ khi hoàn thành bảng số.

---

### HOẠT ĐỘNG 3: XỬ LÝ SỐ LIỆU (ỨNG DỤNG ĐỒ THỊ VÀ NĂNG LƯỢNG SỐ)
**a) Mục tiêu:** Vẽ đường đặc tuyến V-A của nguồn, xác định $E$ và $r$.
**b) Nội dung:** Dùng giấy ô li để vẽ hoặc dùng phần mềm Excel.
**c) Sản phẩm:** Đồ thị đường thẳng. Giá trị $\xi$ và $r$ cụ thể.
**d) Tổ chức thực hiện:**
- **Phương án 1 (Vẽ tay truyền thống):** HS biểu diễn các điểm thực nghiệm lên hệ trục tọa độ $(I, U)$. Vẽ một đường thẳng "tốt nhất" đi sát nhất với các điểm này. Kéo dài đường thẳng cắt trục tung $U$ tại $\xi$, độ dốc (hệ số góc) $\tan(\alpha)$ chính là điện trở trong $r$.
- **Phương án 2 (Sử dụng NLS - Khuyến khích mạnh mẽ):** 
  - **Bước 1:** HS mở laptop, nhập cột $I$ và cột $U$ vào Excel.
  - **Bước 2:** Bôi đen dữ liệu, chọn Insert -> Scatter Plot.
  - **Bước 3:** Click chuột phải vào điểm dữ liệu, chọn *Add Trendline*. Chọn Linear. Đánh dấu *Display Equation on chart*.
  - **Bước 4:** Đọc kết quả từ phương trình $y = -ax + b$. Khi đó $\xi = b$ (V) và $r = a$ ($\Omega$).
- GV yêu cầu mỗi nhóm so sánh độ chính xác của vẽ tay và máy. Đánh giá tính ưu việt của kĩ năng số trong vật lí thực nghiệm.

---

### HOẠT ĐỘNG 4: BÁO CÁO VÀ THẢO LUẬN TỔNG KẾT
**a) Mục tiêu:** Đánh giá độ tin cậy của phép đo, phân tích nguyên nhân sai số.
**b) Nội dung:** Các nhóm nộp báo cáo và trả lời câu hỏi phản biện.
**c) Sản phẩm:** Bản báo cáo hoàn chỉnh.
**d) Tổ chức thực hiện:**
- **Câu hỏi phản biện:** "Tại sao không đo $\xi$ bằng cách nối trực tiếp Vôn kế vào pin (mạch hở)?"
- **Trả lời dự kiến:** Có thể đo được, nhưng Vôn kế thực tế không có điện trở vô cùng lớn, nên mạch vẫn có dòng nhỏ, làm $U$ thực tế hơi nhỏ hơn $\xi$. Phép đo đồ thị nhiều điểm giúp triệt tiêu sai số ngẫu nhiên tốt hơn.
- GV tổng kết, nhận xét tinh thần thái độ làm việc của các nhóm.

---

## IV. TIÊU CHÍ ĐÁNH GIÁ (RUBRIC)

| Tiêu chí | Mức 1 (Chưa đạt) | Mức 2 (Đạt) | Mức 3 (Khá) | Mức 4 (Tốt) |
| :--- | :--- | :--- | :--- | :--- |
| **Kỹ năng thao tác dụng cụ** | Không biết mắc mạch điện, chập cháy. | Mắc được mạch có hỗ trợ, đọc số còn chậm. | Tự mắc mạch thành thạo, chọn đúng thang đo. | Thao tác chuyên nghiệp, cẩn thận đóng ngắt khóa K bảo vệ thiết bị. |
| **Bảng số liệu** | Thiếu số liệu, hoặc chép của nhóm khác. | Có số liệu nhưng nhiều sai số thô bạo. | Số liệu hợp lí, quy luật U giảm khi I tăng hiện rõ. | Số liệu tuyệt đối trung thực, chính xác, độ phân tán thấp. |
| **Xử lí bằng đồ thị U-I và Excel (NLS)** | Vẽ sai trục tọa độ, không tìm được r. | Vẽ tay được đường thẳng tương đối, tính sai góc. | Vẽ tay hoặc máy ra kết quả $\xi$, $r$ đúng phương pháp. | Sử dụng Excel nhuần nhuyễn, giải thích rõ phương trình hồi quy tuyến tính, đánh giá sai số tốt. |
| **Báo cáo và làm việc nhóm** | Báo cáo cẩu thả. | Báo cáo đủ cấu trúc. | Trình bày sạch đẹp, có sự phân công nhóm tốt. | Phân tích sai số cực kỳ sâu sắc, trả lời tốt câu hỏi mở rộng của GV. |

---
*Ghi chú: Bài thực hành cần chuẩn bị thiết bị kĩ, pin phải còn mới để dòng điện ổn định.*

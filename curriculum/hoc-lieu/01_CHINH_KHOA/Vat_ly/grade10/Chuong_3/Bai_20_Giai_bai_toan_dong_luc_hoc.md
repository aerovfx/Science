# KẾ HOẠCH BÀI DẠY: BÀI 20. GIẢI BÀI TOÁN ĐỘNG LỰC HỌC
## Môn học: Vật lí 10
## Thời lượng thực hiện: 2 tiết

---

## I. MỤC TIÊU DẠY HỌC

### 1. Về năng lực đặc thù (Năng lực Vật lí)
**a) Nhận thức vật lí:**
- Nêu được các bước cơ bản để giải một bài toán động lực học cơ chất điểm.
- Trình bày được quy tắc phân tích lực, chiếu các lực lên các trục tọa độ (hệ trục tọa độ vuông góc).
- Ghi nhớ và viết được các phương trình định luật II Newton dưới dạng vectơ và dạng đại số.

**b) Tìm hiểu thế giới tự nhiên dưới góc độ vật lí:**
- Phân tích được các hệ vật thực tế (ví dụ: kéo xe gòong, ròng rọc kéo vật liệu xây dựng, vật trượt trên mặt phẳng nghiêng).
- Mô hình hóa một bài toán thực tiễn thành mô hình vật lí (chất điểm, hệ trục tọa độ, các vectơ lực tác dụng).
- Đánh giá sự hợp lí của kết quả giải toán (ví dụ gia tốc không thể lớn bất thường, lực căng dây phải dương).

**c) Vận dụng kiến thức, kĩ năng đã học:**
- Giải được các bài toán cơ bản về động lực học: vật chuyển động trên mặt phẳng ngang có ma sát, vật trượt trên mặt phẳng nghiêng.
- Giải được bài toán hệ vật liên kết (qua ròng rọc nhẹ, dây không dãn).
- Vận dụng phần mềm hoặc code để kiểm tra đáp số hoặc vẽ đồ thị chuyển động.

### 2. Năng lực số (Digital Competencies)
- **Khai thác dữ liệu & AI:** Sử dụng ChatGPT hoặc Claude để đóng vai "Gia sư Vật lí", giải thích từng bước giải bài toán mà học sinh đang vướng mắc. Biết cách viết prompt mô tả bài toán vật lí dạng văn bản sang ngôn ngữ mà AI hiểu được.
- **Sử dụng công cụ mô phỏng:** Dùng PhET Interactive Simulations (Forces and Motion) để kiểm chứng lại kết quả tính toán lí thuyết bằng thực nghiệm mô phỏng.
- **Lập trình tính toán:** Ứng dụng ngôn ngữ Python (trong môi trường Jupyter/Colab) để giải hệ phương trình động lực học hoặc tính toán các giá trị số một cách tự động.

### 3. Về phẩm chất
- **Chăm chỉ:** Tích cực luyện tập các dạng bài, ghi chép cẩn thận các bước phân tích lực, không bỏ sót lực.
- **Trung thực:** Khách quan trong việc kiểm chứng kết quả. Không chép bài của bạn hay lạm dụng AI để giải bài mà không hiểu bản chất.
- **Cẩn thận, tỉ mỉ:** Biểu diễn đúng tỉ lệ lực, hướng của vectơ, chiếu đúng dấu của các lực lên hệ trục tọa độ.

---

## II. THIẾT BỊ DẠY HỌC VÀ HỌC LIỆU

### 1. Đối với giáo viên
- Máy tính cá nhân, máy chiếu, bảng phấn.
- Slide bài giảng trình bày trực quan các bước giải toán, sơ đồ phân tích lực bằng hiệu ứng Animation.
- **Công cụ số & AI:**
  - File Jupyter Notebook chứa code giải các bài toán mặt phẳng nghiêng, hệ 2 vật.
  - PhET Simulation: Forces and Motion: Basics.
  - Prompt chuẩn bị sẵn để minh họa cách hỏi AI.
- Hệ thống bài tập phân loại theo các mức độ.

### 2. Đối với học sinh
- SGK Vật lí 10, sách bài tập, vở ghi, máy tính cầm tay (Casio/Vinacal).
- Thiết bị thông minh có kết nối mạng để sử dụng PhET và Google Colab.
- Thước kẻ, bút màu (để vẽ các lực khác nhau cho rõ ràng).

---

## III. TIẾN TRÌNH DẠY HỌC

### HOẠT ĐỘNG 1: KHỞI ĐỘNG (Xác định vấn đề học tập) (10 phút)
**a) Mục tiêu:** Tạo mâu thuẫn nhận thức, gợi nhớ lại kiến thức về các lực đã học và định luật II Newton, từ đó đặt ra nhu cầu cần có một phương pháp tổng quát để giải bài toán cơ học.
**b) Nội dung:** Học sinh quan sát hình ảnh một đoàn tàu kéo nhiều toa, và một chiếc xe tải vượt dốc. Suy nghĩ về cách tính toán lực kéo cần thiết của động cơ.
**c) Sản phẩm:** Câu trả lời của HS, kể tên được các lực tác dụng lên các vật.
**d) Tổ chức thực hiện:**
- **Bước 1: Giao nhiệm vụ học tập**
  - GV chiếu hình ảnh xe kéo hàng lên dốc.
  - Câu hỏi: "Để xe chở hàng khối lượng 5 tấn lên được con dốc nghiêng 20 độ với vận tốc không đổi, động cơ xe cần tạo ra lực kéo tối thiểu là bao nhiêu? Để trả lời, chúng ta phải làm những bước nào?"
  - *AI Prompt (GV dùng chuẩn bị bài)*: "Viết một bài toán khởi động thú vị về động lực học, lấy bối cảnh một con robot giải cứu hàng hóa trên dốc nghiêng, yêu cầu tính lực kéo để tạo sự hứng thú cho học sinh."
- **Bước 2: Thực hiện nhiệm vụ**
  - HS làm việc cá nhân, liệt kê nháp các lực tác dụng lên xe (Trọng lực, phản lực, ma sát, lực kéo).
- **Bước 3: Báo cáo, thảo luận**
  - 1-2 HS đứng lên trình bày liệt kê các lực. HS khác nhận xét chiều của các lực.
- **Bước 4: Kết luận, nhận định**
  - GV nhận xét: Việc liệt kê đúng lực là bước đầu tiên và quan trọng nhất. Để đi đến kết quả cuối cùng chính xác, ta cần một quy trình chuẩn. Bài học hôm nay cung cấp thuật toán (phương pháp động lực học) để giải mọi bài toán cơ học lớp 10.

### HOẠT ĐỘNG 2: HÌNH THÀNH KIẾN THỨC MỚI (35 phút)

**a) Mục tiêu:** Xây dựng và hệ thống hóa được phương pháp động lực học (các bước giải bài toán).
**b) Nội dung:** Phân tích ví dụ mẫu: Một vật trượt trên mặt phẳng ngang. Rút ra 4 bước giải cơ bản.
**c) Sản phẩm:** Quy trình 4 bước giải bài toán động lực học được ghi vào vở. Sơ đồ tư duy về phương pháp chiếu lực.
**d) Tổ chức thực hiện:**
- **Bước 1: Giao nhiệm vụ học tập**
  - GV xét bài toán: Vật khối lượng m trượt trên mặt phẳng ngang dưới tác dụng của lực kéo $F_k$ hợp với phương ngang góc $\alpha$. Hệ số ma sát trượt là $\mu$. Tính gia tốc.
  - GV yêu cầu các nhóm đọc SGK, kết hợp kiến thức định luật II Newton, đề xuất các bước để tìm ra gia tốc a.
- **Bước 2: Thực hiện nhiệm vụ**
  - HS thảo luận nhóm (5 phút), vẽ hình, biểu diễn các lực.
  - Năng lực số: HS có thể mở PhET mô phỏng khối gỗ bị kéo để xem sự thay đổi của gia tốc khi thay đổi góc kéo.
- **Bước 3: Báo cáo, thảo luận**
  - 1 HS lên bảng vẽ hình và ghi phương trình định luật II Newton: $\vec{P} + \vec{N} + \vec{F}_{ms} + \vec{F}_k = m\vec{a}$
  - GV đặt câu hỏi: "Làm thế nào để chuyển phương trình vectơ này thành phương trình đại số để tính toán?" (Dự kiến: Chiếu lên trục tọa độ).
- **Bước 4: Kết luận, nhận định**
  - GV chốt 4 bước chuẩn của phương pháp động lực học:
    1. **Chọn hệ quy chiếu (Hệ trục tọa độ Oxy):** Chiều dương (Ox) cùng chiều chuyển động, trục Oy vuông góc. Vẽ giản đồ vectơ lực tác dụng lên vật (Phân tích lực).
    2. **Viết phương trình động lực học (ĐL II Newton):** Viết dưới dạng vectơ cho tất cả các lực.
    3. **Chiếu phương trình vectơ:** Chiếu lên trục Oy để tìm áp lực N. Chiếu lên trục Ox để tìm gia tốc a. (Lưu ý: chú ý góc và dấu của lực).
    4. **Tính toán và biện luận:** Thay số vào giải phương trình, kiểm tra tính hợp lí của đáp số.

### HOẠT ĐỘNG 3: LUYỆN TẬP (30 phút)
**a) Mục tiêu:** Học sinh tự tay thực hiện 4 bước giải để làm 2 bài toán điển hình: Vật trên mặt phẳng nghiêng và Hệ 2 vật liên kết.
**b) Nội dung:**
  - Bài 1: Vật trượt trên mặt phẳng nghiêng có ma sát.
  - Bài 2: Bài toán ròng rọc (Máy Atwood).
**c) Sản phẩm:** Lời giải chi tiết trên phiếu học tập/bảng phụ.
**d) Tổ chức thực hiện:**
- **Bước 1: Giao nhiệm vụ**
  - Phân lớp thành các nhóm (4 HS/nhóm).
  - Nửa lớp làm Bài 1, nửa lớp làm Bài 2.
  - *Yêu cầu công nghệ (Python)*: GV chia sẻ một đoạn code Python tính gia tốc vật trên mặt phẳng nghiêng. Yêu cầu HS điền khuyết công thức `a = g*(sin(alpha) - mu*cos(alpha))` vào code để đối chiếu đáp số lí thuyết.
- **Bước 2: Thực hiện**
  - HS tiến hành vẽ hình, phân tích lực, chiếu lên hệ trục.
  - *AI Prompt (Dành cho HS nếu bí)*: "Đóng vai giáo viên vật lí, hãy hướng dẫn tôi cách chiếu trọng lực P lên trục Ox và Oy khi vật nằm trên mặt phẳng nghiêng góc alpha, không giải trực tiếp mà chỉ gợi ý công thức lượng giác."
- **Bước 3: Báo cáo, thảo luận**
  - Đại diện nhóm lên bảng trình bày chi tiết từng bước.
  - GV trình chiếu màn hình Google Colab, chạy đoạn mã Python mà HS vừa hoàn thiện, nhập số liệu đề bài để so sánh đáp án trên bảng.
- **Bước 4: Kết luận**
  - GV sửa lỗi phổ biến: Quên chiếu Trọng lực trên trục Ox đối với mặt phẳng nghiêng; Nhầm lẫn lực căng dây T ở 2 bên ròng rọc.
  - Khen ngợi việc ứng dụng Python tính toán nhanh gọn, hạn chế sai sót bấm máy tính.

### HOẠT ĐỘNG 4: VẬN DỤNG VÀ MỞ RỘNG (10 phút)
**a) Mục tiêu:** Phát triển tư duy thuật toán, ứng dụng AI trong học tập Vật lí chủ động.
**b) Nội dung:** Học sinh học cách sử dụng AI hiệu quả để tự học giải toán Vật lí tại nhà.
**c) Sản phẩm:** Bản ghi chép các quy tắc "Prompting cho môn Vật lí".
**d) Tổ chức thực hiện:**
- **Bước 1: Giao nhiệm vụ**
  - GV giới thiệu bài tập về nhà: Hệ 3 vật liên kết qua ròng rọc kép.
  - Giao bài tập dự án cá nhân: Hãy dùng ChatGPT/Gemini để nhờ nó giải bài toán này. Đánh giá xem AI có làm đúng không? Nếu AI làm sai, hãy viết lại prompt để AI sửa lỗi.
- **Bước 2: Thực hiện (tại nhà)**
  - HS thực hiện tương tác với AI. Lưu lại toàn bộ lịch sử chat (Export chat).
  - Năng lực số: HS rèn luyện tư duy phản biện (Critical Thinking) khi không tin tưởng 100% vào AI, biết cách kiểm tra chéo (Cross-check) kết quả AI đưa ra bằng công thức SGK.
- **Bước 3: Báo cáo**
  - Nộp bản in/PDF lịch sử chat và lời nhận xét vào buổi học kế tiếp.
- **Bước 4: Đánh giá**
  - GV dùng Rubric để chấm điểm kĩ năng phân tích và phản biện của HS.

---

## IV. TIÊU CHÍ ĐÁNH GIÁ (RUBRIC)

| Tiêu chí | Mức 1 (Chưa đạt) | Mức 2 (Đạt) | Mức 3 (Khá) | Mức 4 (Tốt) |
| :--- | :--- | :--- | :--- | :--- |
| **Phân tích lực và chọn hệ quy chiếu** | Không vẽ được hình. Kể thiếu nhiều lực. | Kể đủ lực nhưng vẽ sai hướng, tỉ lệ. Chọn trục tọa độ chưa hợp lí. | Vẽ hình rõ ràng, chọn hệ trục Oxy đúng chuẩn. Biểu diễn đúng các lực. | Vẽ hình cực kì khoa học, đẹp, phân tích chính xác mọi chi tiết lực (tỉ lệ tương đối của các lực đúng). |
| **Thiết lập và giải phương trình (ĐL II Newton)** | Không viết được phương trình ĐL II Newton. | Viết được phương trình dạng vectơ nhưng chiếu sai dấu, sai góc. | Chiếu đúng hệ trục. Lập được hệ phương trình đại số và giải ra kết quả gần đúng. | Giải hệ phương trình chính xác, lập luận logic, trình bày sạch đẹp. Có bước biện luận đáp số. |
| **Năng lực Số (Python & PhET)** | Không thực hiện được. | Quan sát PhET thụ động, chạy code Python bị lỗi cú pháp không biết sửa. | Chạy thành công mô phỏng PhET, hoàn thiện đoạn code Python ở mức độ cơ bản. | Làm chủ hoàn toàn mô phỏng, biết thay đổi thông số. Viết lại hoặc tối ưu code Python để in ra đồ thị vật lí tự động. |
| **Kĩ năng sử dụng AI (Vận dụng)** | Copy paste đề bài cho AI và chép y hệt kết quả mà không hiểu. | Có dùng AI, nhận ra AI sai nhưng không biết cách hướng dẫn AI sửa lỗi. | Viết prompt khá rõ ràng, đánh giá đúng ưu nhược điểm bài giải của AI. | Có tư duy phản biện xuất sắc. Prompting như một chuyên gia (giao vai, yêu cầu chi tiết từng bước), ép AI phải lập luận theo phương pháp chiếu của VN. |

*(Kế hoạch bài dạy được thiết kế nhằm chuẩn hóa thuật toán giải toán vật lí, đồng thời trang bị cho HS kĩ năng của thế kỉ 21: Lập trình, tư duy mô hình hóa và khai thác sức mạnh của AI).*

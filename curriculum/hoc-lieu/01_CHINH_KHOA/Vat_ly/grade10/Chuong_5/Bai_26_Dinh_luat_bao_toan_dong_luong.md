# KẾ HOẠCH BÀI DẠY (CV 5512) - BÀI 26: ĐỊNH LUẬT BẢO TOÀN ĐỘNG LƯỢNG

**Môn học: Vật lí 10 (Bộ sách Kết nối tri thức với cuộc sống)**
**Thời lượng thực hiện: 2 tiết**

## I. MỤC TIÊU

### 1. Về năng lực vật lí
- **Nhận thức vật lí:**
  - Nêu được khái niệm hệ kín (hệ cô lập).
  - Trình bày được nội dung và viết được biểu thức của định luật bảo toàn động lượng cho hệ hai vật: $\vec{p}_1 + \vec{p}_2 = \vec{p}_1' + \vec{p}_2'$.
  - Phân biệt được va chạm đàn hồi và va chạm mềm.
- **Tìm hiểu thế giới tự nhiên dưới góc độ vật lí:**
  - Giải thích được nguyên tắc hoạt động của chuyển động bằng phản lực (tên lửa, súng giật lùi, con mực phun nước).
  - Đưa ra được ví dụ về các vụ nổ pháo hoa và phân tích dưới góc độ bảo toàn động lượng.
- **Vận dụng kiến thức, kĩ năng đã học:**
  - Vận dụng định luật bảo toàn động lượng để tính toán vận tốc của các vật sau va chạm (đặc biệt trong va chạm mềm và va chạm đàn hồi trực diện).
  - Vận dụng bài toán đạn nổ thành 2 mảnh.
  - Phân tích và giải quyết các bài toán thực tiễn liên quan đến chuyển động phản lực.

### 2. Về năng lực số (NLS) và Tích hợp công nghệ
- **Năng lực sử dụng công cụ số (NLS1):** Sử dụng các phần mềm mô phỏng vật lí để thiết lập các thông số ban đầu và quan sát kết quả.
- **Năng lực tìm kiếm, xử lý thông tin số (NLS2):** Khai thác AI (ChatGPT/Claude/Gemini) để sinh ra bài tập tương tự nhằm tự luyện tập.
- **Năng lực giải quyết vấn đề số (NLS4):** Dùng phần mềm Python (hoặc Excel) để lập trình tính toán nhanh vận tốc của hệ sau va chạm mềm dựa trên các dữ liệu đầu vào.

### 3. Về phẩm chất
- **Chăm chỉ:** Nghiên cứu bài trước khi đến lớp, tích cực đóng góp ý kiến trong hoạt động nhóm.
- **Trung thực:** Ghi nhận và báo cáo trung thực số liệu từ phần mềm mô phỏng, không sao chép kết quả.
- **Trách nhiệm:** Ý thức được tầm quan trọng của an toàn trong các hoạt động liên quan đến phản lực (ví dụ không tự chế tạo pháo nổ), có ý thức bảo vệ an ninh, an toàn.

## II. THIẾT BỊ DẠY HỌC VÀ HỌC LIỆU

### 1. Đối với giáo viên (GV)
- **Thiết bị:** Máy chiếu, loa, máy tính cài đặt sẵn các phần mềm trình chiếu.
- **Học liệu truyền thống:** SGK, SGV, Phấn màu, Bộ thí nghiệm va chạm (đệm khí, cổng quang điện) (nếu có để trực quan, nếu không thay bằng mô phỏng).
- **Công cụ số & Tích hợp AI:**
  - **PhET Simulations:** Bài "Collision Lab", chế độ 1D để HS thấy rõ động lượng tổng cộng trước và sau va chạm không đổi.
  - **AI Prompt (Cho GV):** "Design a highly engaging introductory activity to teach the Law of Conservation of Momentum for high school students. Involve a relatable scenario like a skateboard or a shopping cart. Provide step-by-step instructions for the teacher."
  - **Google Forms / Azota:** Dùng để tạo bài kiểm tra ngắn cuối giờ.

### 2. Đối với học sinh (HS)
- **Thiết bị:** Vở ghi chép, SGK, máy tính cầm tay, điện thoại thông minh (nếu được phép dùng trong hđ nhóm).
- **Học liệu:** Đọc trước bài 26 ở nhà.
- **Tích hợp Công nghệ/AI:**
  - *Sử dụng Python cơ bản (cho nhóm HS khá giỏi học STEM):* Cung cấp một đoạn code Python tính $v'$ sau va chạm mềm: `v_sau = (m1*v1 + m2*v2) / (m1 + m2)`. Yêu cầu HS nhập thử dữ liệu vào Google Colab để kiểm chứng.

---

## III. TIẾN TRÌNH DẠY HỌC

### HOẠT ĐỘNG 1: KHỞI ĐỘNG (Xác định vấn đề) - 10 phút
**a) Mục tiêu:** Khơi gợi trí tò mò về sự liên hệ vận tốc trước và sau tương tác, dẫn dắt khái niệm hệ kín và định luật bảo toàn.
**b) Nội dung:**
- GV mời 2 HS lên bục giảng: 1 HS đứng yên trên một chiếc ván trượt (skateboard), 1 HS khác chạy đến và nhảy lên cùng đứng trên ván. Hỏi: Điều gì xảy ra với vận tốc của ván trượt sau khi bạn thứ hai nhảy lên?
- GV chiếu video: Vận động viên trượt băng nghệ thuật đẩy nhau trên sân băng, hoặc súng giật lùi khi bắn.
- Đặt vấn đề: Có quy luật nào chi phối sự thay đổi trạng thái chuyển động của các vật trong các tình huống trên?
**c) Sản phẩm:**
- Ý kiến dự đoán của HS: Vận tốc giảm đi khi có thêm người, súng giật lùi do đạn bay tới.
**d) Tổ chức thực hiện:**
- **Bước 1: Giao nhiệm vụ học tập**
  - Tổ chức trò chơi tư duy nhanh. Chiếu hình ảnh, yêu cầu HS dùng bảng con ghi dự đoán (nhanh, chậm, giật lùi).
- **Bước 2: Thực hiện nhiệm vụ**
  - HS ghi bảng con và giơ lên.
- **Bước 3: Báo cáo, thảo luận**
  - GV phỏng vấn nhanh 1-2 HS về lí do đưa ra dự đoán.
- **Bước 4: Kết luận, nhận định**
  - GV nhận xét: Mọi tương tác này đều tuân theo một định luật vô cùng quan trọng của cơ học: Định luật bảo toàn động lượng. Để áp dụng được, ta phải khảo sát trong một điều kiện gọi là "Hệ kín".

### HOẠT ĐỘNG 2: HÌNH THÀNH KIẾN THỨC MỚI - 35 phút
#### 2.1. Khái niệm hệ kín (Hệ cô lập) (10 phút)
**a) Mục tiêu:** Nhận biết và định nghĩa được hệ kín.
**b) Nội dung:**
- Đọc SGK phần 1. Tìm hiểu các lực nội lực, ngoại lực.
- Khi nào một hệ được coi là hệ kín? (Không có ngoại lực tác dụng, hoặc tổng các ngoại lực bằng 0, hoặc nội lực rất lớn so với ngoại lực).
**c) Sản phẩm:**
- HS ghi vở:
  - Hệ kín là hệ chỉ có các vật trong hệ tương tác với nhau (nội lực), không tương tác với các vật ngoài hệ (ngoại lực = 0).
  - Hoặc tổng ngoại lực triệt tiêu lẫn nhau.
  - Trường hợp va chạm, nổ: Ngoại lực không đáng kể so với nội lực sinh ra trong thời gian rất ngắn $\rightarrow$ coi gần đúng là hệ kín.
**d) Tổ chức thực hiện:**
- **Bước 1: Giao nhiệm vụ**
  - GV chia bảng làm 2 cột: "Hệ kín" và "Hệ không kín". Nêu các ví dụ để HS phân loại.
- **Bước 2: Thực hiện**
  - Nhóm 4 HS thảo luận phân loại các ví dụ.
- **Bước 3: Báo cáo**
  - Cử đại diện lên bảng đánh dấu (tick) vào cột tương ứng.
- **Bước 4: Kết luận**
  - GV sửa lỗi và chốt khái niệm nội lực, ngoại lực, hệ kín.

#### 2.2. Định luật bảo toàn động lượng (15 phút)
**a) Mục tiêu:** Phát biểu, viết biểu thức của định luật.
**b) Nội dung:**
- Từ định luật III Newton kết hợp với khái niệm xung lượng, GV dẫn dắt HS chứng minh định luật bảo toàn động lượng cho hệ 2 vật.
  $\vec{F}_{12} = - \vec{F}_{21} \Rightarrow \frac{\Delta\vec{p}_1}{\Delta t} = - \frac{\Delta\vec{p}_2}{\Delta t} \Rightarrow \Delta\vec{p}_1 + \Delta\vec{p}_2 = 0 \Rightarrow \vec{p}_1 + \vec{p}_2 = \vec{p}_1' + \vec{p}_2'$
**c) Sản phẩm:**
- Lời chứng minh trong vở HS.
- Biểu thức: $\vec{p}_{hệ} = \text{const}$
**d) Tổ chức thực hiện:**
- **Bước 1: Giao nhiệm vụ**
  - GV chiếu sơ đồ chứng minh bị khuyết vài chỗ, yêu cầu HS dùng bút chì điền vào PHT.
- **Bước 2: Thực hiện**
  - HS dựa vào kiến thức bài trước điền vào các bước chứng minh.
- **Bước 3: Báo cáo**
  - 1 HS đọc kết quả.
- **Bước 4: Kết luận**
  - GV chốt: Động lượng của một hệ kín là một đại lượng bảo toàn.

#### 2.3. Va chạm mềm và Chuyển động bằng phản lực (10 phút)
**a) Mục tiêu:** Ứng dụng định luật vào 2 trường hợp cụ thể.
**b) Nội dung:**
- Va chạm mềm: Hai vật dính vào nhau sau va chạm. Công thức: $m_1\vec{v}_1 + m_2\vec{v}_2 = (m_1 + m_2)\vec{V}$
- Phản lực: Súng giật lùi, Tên lửa.
**c) Sản phẩm:**
- Công thức tính vận tốc va chạm mềm, vận tốc giật lùi của súng.
**d) Tổ chức thực hiện:**
- GV sử dụng phần mềm PhET (Collision Lab - Inelastic) biểu diễn trực tiếp trên máy chiếu. Kéo trượt thông số khối lượng và vận tốc, hỏi HS đoán vận tốc sau va chạm trước khi bấm nút "Play".
- *Tích hợp AI:* GV yêu cầu một HS dùng điện thoại mở Gemini/ChatGPT và hỏi: "Làm thế nào tên lửa có thể chuyển động trong không gian vũ trụ khi không có không khí để đẩy lại?". Đọc to câu trả lời cho lớp nghe. (Kết luận: Do phản lực của khí phụt ra phía sau theo ĐL bảo toàn động lượng).

### HOẠT ĐỘNG 3: LUYỆN TẬP - 20 phút
**a) Mục tiêu:** Giải bài tập định lượng.
**b) Nội dung:**
- Bài 1 (Va chạm mềm): Một toa xe 2 tấn chạy với 3m/s đâm vào toa xe 3 tấn đang đứng yên và móc nối vào nhau. Tính vận tốc đoàn xe.
- Bài 2 (Phản lực): Một khẩu pháo khối lượng 2000kg bắn viên đạn 5kg với vận tốc 400m/s. Tính vận tốc giật lùi của pháo.
**c) Sản phẩm:**
- Bài 1: $v = \frac{2\times 3 + 3\times 0}{2+3} = 1.2$ m/s
- Bài 2: $V = -\frac{5\times 400}{2000} = -1$ m/s (Dấu âm chỉ chiều ngược lại).
**d) Tổ chức thực hiện:**
- **Bước 1: Giao nhiệm vụ**
  - Tổ chức trò chơi "Tiếp sức". Lớp chia 2 dãy, mỗi dãy cử 4 bạn, mỗi bạn lên viết 1 bước giải.
- **Bước 2: Thực hiện**
  - Các đội thi đua giải nhanh trên bảng.
- **Bước 3: Báo cáo**
  - GV cùng các HS dưới lớp làm giám khảo, kiểm tra tính logic, bước chiếu lên trục tọa độ.
- **Bước 4: Kết luận**
  - GV nhắc nhở lỗi sai kinh điển: Không chọn chiều dương mà cứ cộng đại số số học; quên dấu ngoặc.

### HOẠT ĐỘNG 4: VẬN DỤNG - 15 phút
**a) Mục tiêu:** Nâng cao tư duy, kết nối kiến thức vào lập trình/công cụ tính toán số (STEM).
**b) Nội dung:**
- Tích hợp Toán - Tin (Năng lực số NLS4): Xây dựng một công cụ tự động tính toán va chạm.
- Giao nhiệm vụ cho các nhóm sử dụng Excel hoặc Google Sheets để tạo bảng tính: Nhập m1, v1, m2, v2 $\rightarrow$ Tự động ra kết quả V (va chạm mềm).
**c) Sản phẩm:**
- File Google Sheets chia sẻ với GV, có sử dụng hàm cơ bản `= (A2*B2 + C2*D2)/(A2+C2)`.
**d) Tổ chức thực hiện:**
- **Bước 1:** GV hướng dẫn thao tác cơ bản trên Google Sheets. Cung cấp Prompt AI để HS có thể tự hỏi nếu kẹt: "Hãy viết công thức Excel để tính vận tốc V sau va chạm mềm dựa trên các ô A1(m1), B1(v1), C1(m2), D1(v2)."
- **Bước 2:** HS thực hành trên laptop cá nhân hoặc phòng máy (nếu có) hoặc làm bài tập về nhà.
- **Bước 3:** HS nộp link Google Sheets qua nhóm Zalo hoặc LMS.
- **Bước 4:** GV đánh giá và khen ngợi các nhóm làm đẹp, giao diện thân thiện (có màu sắc, biểu đồ).

---

## IV. TIÊU CHÍ ĐÁNH GIÁ (RUBRIC)

| Tiêu chí | Mức 1: Nhận biết | Mức 2: Thông hiểu | Mức 3: Vận dụng | Mức 4: Vận dụng cao |
| :--- | :--- | :--- | :--- | :--- |
| **Lí thuyết hệ kín & ĐL bảo toàn** | Nêu được khái niệm hệ kín nhưng còn vấp. Viết được biểu thức. | Giải thích được tại sao một hệ được coi là hệ kín. Giải thích được biểu thức. | Áp dụng định luật cho các trường hợp cụ thể, phân tích được các lực tác dụng. | Chỉ ra được các trường hợp hệ không kín tuyệt đối nhưng vẫn áp dụng được (theo 1 phương). |
| **Giải bài tập định lượng** | Tính được bài toán va chạm mềm đơn giản khi các vật chuyển động cùng chiều. | Chọn đúng HQC, giải quyết được bài toán 2 vật ngược chiều, có đổi dấu. | Giải thành thạo bài toán giật lùi, đạn nổ 2 mảnh đơn giản. | Giải quyết bài toán nổ thành 2 mảnh có góc bất kì (dùng quy tắc hình bình hành). |
| **Kĩ năng Số & Công nghệ (Excel/PhET)** | Không biết sử dụng hoặc chỉ xem GV thao tác. | Biết nhập liệu vào mô phỏng PhET, biết dùng Excel cơ bản theo hướng dẫn. | Tự thiết lập được các thông số trên PhET để chứng minh định luật. Thiết lập đúng hàm Excel. | Dùng AI để tối ưu hóa bảng tính Excel, thêm chức năng kiểm tra lỗi (ví dụ cảnh báo nếu nhập chữ thay vì số). |
| **Thái độ và Hợp tác** | Ít tương tác trong nhóm, không tập trung. | Có tham gia trò chơi tiếp sức nhưng còn thụ động. | Hỗ trợ bạn bè trong nhóm, hoàn thành tốt nhiệm vụ được giao. | Làm nhóm trưởng tốt, biết phân công công việc, giải thích lại cho bạn yếu. |

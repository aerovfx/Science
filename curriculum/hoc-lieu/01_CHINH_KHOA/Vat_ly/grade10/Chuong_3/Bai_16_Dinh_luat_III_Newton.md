# BÀI 16: ĐỊNH LUẬT III NEWTON
(Thời lượng: 2 tiết)

## I. MỤC TIÊU DẠY HỌC
### 1. Năng lực vật lí
- **Nhận thức vật lí:**
  - Phát biểu được định luật III Newton.
  - Phân biệt được lực và phản lực.
  - Lấy được các ví dụ thực tế về định luật III Newton.
  - Nêu được đặc điểm của cặp lực - phản lực: Cùng giá, ngược chiều, cùng độ lớn, đặt vào hai vật khác nhau.
- **Tìm hiểu thế giới tự nhiên dưới góc độ vật lí:**
  - Thực hiện được các thí nghiệm chứng minh định luật III Newton (sử dụng lực kế, xe lăn, nam châm).
  - Quan sát và phân tích được hiện tượng tương tác giữa các vật thông qua mô phỏng PhET và thí nghiệm thực tế.
  - Biết cách đặt câu hỏi, đưa ra giả thuyết và kiểm chứng giả thuyết về lực tương tác giữa các vật.
- **Vận dụng kiến thức, kĩ năng đã học:**
  - Vận dụng định luật III Newton để giải thích một số hiện tượng trong đời sống (chuyển động của tên lửa, súng giật khi bắn, người bước lên bờ từ thuyền...).
  - Đề xuất được giải pháp an toàn trong các hoạt động thể thao dựa trên định luật III Newton.

### 2. Năng lực số (NLS)
- **Sử dụng công nghệ số:** Sử dụng thành thạo phần mềm mô phỏng PhET, các công cụ thu thập dữ liệu tự động (cảm biến lực).
- **Phân tích dữ liệu:** Sử dụng Python cơ bản trên Jupyter Notebook để vẽ đồ thị lực theo thời gian và phân tích mối quan hệ giữa các lực.
- **Sáng tạo nội dung số:** Dùng Canva để thiết kế poster/infographic giải thích ứng dụng của định luật III Newton.
- **Sử dụng AI:** Biết cách sử dụng ChatGPT hoặc Gemini để tìm kiếm tài liệu, gợi ý cách giải thích hiện tượng và tạo prompt hiệu quả.

### 3. Phẩm chất
- **Chăm chỉ:** Tích cực tham gia các hoạt động học tập, tìm tòi tư liệu về định luật Newton.
- **Trung thực:** Báo cáo đúng số liệu thực nghiệm, không ngụy tạo kết quả thí nghiệm.
- **Trách nhiệm:** Tuân thủ quy định an toàn khi làm thí nghiệm, hợp tác tốt với các thành viên trong nhóm.

---

## II. THIẾT BỊ DẠY HỌC VÀ HỌC LIỆU
### 1. Thiết bị, dụng cụ thực hành
- 04 bộ thí nghiệm vật lí: Lực kế lò xo (giới hạn đo 5N), xe lăn, nam châm, thanh ray.
- Cảm biến lực (Force sensor) kết nối với máy tính/điện thoại thông minh.
- Máy tính xách tay hoặc máy tính bảng cho các nhóm học sinh (có kết nối mạng).
- Máy chiếu, màn hình tương tác.

### 2. Học liệu số & AI Tools
- **Mô phỏng PhET:** "Forces and Motion: Basics" (https://phet.colorado.edu/).
- **Công cụ AI (Giáo viên):**
  - Prompt tạo câu hỏi: "Act as an expert physics teacher. Generate 5 multiple-choice questions and 2 real-world problem-solving questions about Newton's Third Law for 10th-grade high school students in Vietnam."
  - Prompt đánh giá: "Analyze the following student response about rocket motion based on Newton's 3rd Law and point out any misconceptions..."
- **Công cụ AI (Học sinh):**
  - Prompt tìm hiểu: "Giải thích đơn giản cho học sinh lớp 10 tại sao khi ta đẩy vào tường, tường lại đẩy lại ta một lực bằng đúng như vậy nhưng ta không bị bật ngửa ra sau (xét yếu tố ma sát)."
- **Python Code (trên Google Colab):** Đoạn mã mẫu phân tích dữ liệu lực tác dụng (sẽ cung cấp trong bài).
- **Canva:** Mẫu template làm báo cáo nhóm.

---

## III. TIẾN TRÌNH DẠY HỌC

### HOẠT ĐỘNG 1: KHỞI ĐỘNG (15 phút) - MỞ ĐẦU VÀ TẠO TÌNH HUỐNG CÓ VẤN ĐỀ
**a. Mục tiêu:**
- Khơi gợi sự tò mò của học sinh về hiện tượng tương tác giữa các vật.
- Xác định được vấn đề cốt lõi: Khi vật A tác dụng lên vật B một lực, vật B có tác dụng lại vật A không? Nếu có thì đặc điểm như thế nào?

**b. Nội dung:**
- GV chiếu một video clip ngắn về các hiện tượng:
  - Một vận động viên bơi lội đạp chân vào thành hồ để xuất phát.
  - Vụ phóng tên lửa Falcon 9 của SpaceX.
- GV yêu cầu HS thảo luận nhóm đôi (Think-Pair-Share) và trả lời câu hỏi khởi động trên ứng dụng Mentimeter hoặc Padlet.

**c. Sản phẩm:**
- Câu trả lời của học sinh trên Padlet/Mentimeter. (Ví dụ: Chân tác dụng lực lên tường, tường tác dụng lực đẩy người đi tới...).

**d. Tổ chức thực hiện:**
- **Bước 1 (Chuyển giao nhiệm vụ):** GV chiếu video, gửi link Padlet cho HS. Yêu cầu: "Hãy chỉ ra lực nào làm người bơi tiến về phía trước và lực nào nâng tên lửa lên khỏi mặt đất?".
- **Bước 2 (Thực hiện nhiệm vụ):** HS xem video, thảo luận với bạn bên cạnh, dùng điện thoại hoặc máy tính nhập câu trả lời lên Padlet.
  - *Tích hợp AI:* Nhóm nào gặp khó khăn có thể dùng AI (ChatGPT/Gemini) với prompt: "Lực nào đẩy tên lửa bay lên theo nguyên tắc vật lí?"
- **Bước 3 (Báo cáo, thảo luận):** GV hiển thị màn hình Padlet, gọi 1-2 nhóm trình bày ý kiến. Các nhóm khác nhận xét.
- **Bước 4 (Kết luận, nhận định):** GV tổng hợp ý kiến, chỉ ra rằng cả hai trường hợp đều là sự "tương tác qua lại" và dẫn dắt vào bài: "Để hiểu rõ quy luật của sự tương tác này, chúng ta cùng học Định luật III Newton."

---

### HOẠT ĐỘNG 2: HÌNH THÀNH KIẾN THỨC MỚI (45 phút)
#### 2.1. Thí nghiệm tìm hiểu đặc điểm của lực và phản lực (25 phút)
**a. Mục tiêu:**
- Khám phá và rút ra được các đặc điểm của cặp lực tương tác (lực và phản lực).
- Rèn luyện kĩ năng sử dụng dụng cụ đo (lực kế) và phần mềm số.

**b. Nội dung:**
- Nhóm tiến hành thí nghiệm với 2 lực kế móc vào nhau. Kéo 2 lực kế và ghi nhận số chỉ.
- Sử dụng cảm biến lực và máy tính để vẽ đồ thị lực theo thời gian của hai lực tương tác.

**c. Sản phẩm:**
- Bảng số liệu ghi lại lực tương tác trong các trường hợp kéo nhẹ, kéo mạnh.
- Đồ thị thu được từ cảm biến lực (hoặc vẽ tay từ số liệu thực).
- Kết luận về phương, chiều, độ lớn và điểm đặt.

**d. Tổ chức thực hiện:**
- **Bước 1 (Chuyển giao):** GV chia lớp thành các nhóm (4-5 HS/nhóm). Phát dụng cụ (2 lực kế/nhóm hoặc 2 cảm biến lực nếu có).
  - Nhiệm vụ: Một bạn giữ yên lực kế A, bạn kia kéo lực kế B. Sau đó cả hai cùng kéo. Ghi số chỉ của 2 lực kế ở các thời điểm.
- **Bước 2 (Thực hiện):**
  - HS làm thí nghiệm. Chụp ảnh kết quả.
  - Nhóm sử dụng cảm biến lực sẽ dùng mã Python cơ bản trên Jupyter/Colab để vẽ đồ thị:
  ```python
  import matplotlib.pyplot as plt
  import pandas as pd
  # Dữ liệu giả lập từ cảm biến
  time = [0, 1, 2, 3, 4, 5]
  force_A = [0, -2, -4, -3, -5, 0] # Lực kế A
  force_B = [0, 2, 4, 3, 5, 0]   # Lực kế B
  plt.plot(time, force_A, label="Lực kế A", color='red')
  plt.plot(time, force_B, label="Lực kế B", color='blue')
  plt.legend()
  plt.xlabel("Thời gian (s)")
  plt.ylabel("Lực (N)")
  plt.title("Đồ thị cặp lực tương tác")
  plt.show()
  ```
- **Bước 3 (Báo cáo):** Các nhóm chia sẻ đồ thị và bảng số liệu lên màn hình chung. Nêu nhận xét: "Luôn có $F_A = -F_B$".
- **Bước 4 (Kết luận):** GV chuẩn hóa kiến thức. Định nghĩa: Khi A tác dụng lên B một lực thì B cũng tác dụng lên A một lực. Hai lực này cùng giá, ngược chiều, cùng độ lớn. Đặt tên là lực và phản lực. Phát biểu định luật III Newton.

#### 2.2. Phân tích đặc điểm của lực và phản lực (20 phút)
**a. Mục tiêu:** Khắc sâu bản chất của cặp lực - phản lực (không cân bằng nhau vì đặt vào 2 vật khác nhau).
**b. Nội dung:** So sánh cặp lực - phản lực và cặp lực cân bằng.
**c. Sản phẩm:** Bảng phân biệt hai loại cặp lực.
**d. Tổ chức thực hiện:**
- **Bước 1:** GV dùng PhET "Forces and Motion" chiếu cảnh kéo co.
- **Bước 2:** Yêu cầu HS điền vào bảng so sánh (Điểm đặt, phương, chiều, độ lớn, kết quả tác dụng).
- **Bước 3:** HS thảo luận.
- **Bước 4:** GV chốt kiến thức: Lực và phản lực luôn xuất hiện và mất đi đồng thời, cùng bản chất, nhưng KHÔNG cân bằng nhau do tác dụng lên hai vật khác nhau.

---

### HOẠT ĐỘNG 3: LUYỆN TẬP (15 phút)
**a. Mục tiêu:**
- Vận dụng định luật III Newton để làm các bài tập tự luận và trắc nghiệm.
- Củng cố kiến thức đã học.

**b. Nội dung:**
- Giải quyết bài tập trắc nghiệm trên Quizizz/Kahoot.
- Phân tích lực trong hiện tượng "Súng giật khi bắn".

**c. Sản phẩm:**
- Kết quả bài làm trên hệ thống Quizizz.
- Hình vẽ biểu diễn vectơ lực trên súng và viên đạn.

**d. Tổ chức thực hiện:**
- **Bước 1:** GV gửi mã PIN Quizizz cho học sinh. (Các câu hỏi này GV đã dùng AI sinh ra ở phần chuẩn bị).
- **Bước 2:** HS tham gia trả lời nhanh bằng điện thoại/máy tính.
- **Bước 3:** GV dựa vào thống kê của Quizizz để sửa những câu HS sai nhiều nhất.
- **Bước 4:** GV gọi 1 HS lên bảng vẽ hình biểu diễn phản lực làm súng giật lùi, giải thích mối quan hệ với khối lượng của súng.

---

### HOẠT ĐỘNG 4: VẬN DỤNG (15 phút & Hướng dẫn về nhà)
**a. Mục tiêu:**
- Ứng dụng kiến thức giải thích hiện tượng thực tế phức tạp.
- Phát triển kĩ năng làm việc nhóm, thiết kế sáng tạo.

**b. Nội dung:**
- Thực hiện dự án nhỏ (Homework): "Thiết kế poster bằng Canva giải thích ứng dụng của Định luật III Newton trong một môn thể thao (Võ thuật, Bơi lội, Điền kinh...)".

**c. Sản phẩm:**
- Bản thiết kế Poster (định dạng PDF hoặc JPG) nộp trên Google Classroom.

**d. Tổ chức thực hiện:**
- **Bước 1:** GV giao nhiệm vụ. Gợi ý HS sử dụng AI để tìm ý tưởng.
  - *Prompt mẫu cho HS:* "Gợi ý 3 hiện tượng trong môn bóng đá thể hiện rõ định luật III Newton. Viết nội dung ngắn gọn để tôi đưa vào poster."
- **Bước 2:** HS ghi nhận nhiệm vụ, tạo nhóm 3 người.
- **Bước 3:** Ở nhà, HS dùng Canva để thiết kế.
- **Bước 4:** Buổi học sau, GV dành 5 phút cho các nhóm thuyết trình nhanh.

---

## IV. TIÊU CHÍ ĐÁNH GIÁ (RUBRIC)

| Tiêu chí | Mức 1 (Chưa đạt) | Mức 2 (Đạt) | Mức 3 (Khá) | Mức 4 (Tốt) |
| :--- | :--- | :--- | :--- | :--- |
| **Kiến thức (Định luật III)** | Không phát biểu được định luật. Không nhận diện được lực/phản lực. | Phát biểu được định luật nhưng chưa đầy đủ. Phân biệt được lực/phản lực ở mức cơ bản. | Phát biểu đúng. Nêu rõ đặc điểm của cặp lực/phản lực. Phân biệt đúng với lực cân bằng. | Nắm vững, giải thích cặn kẽ bản chất. Vẽ đúng vectơ lực cho các trường hợp phức tạp. |
| **Kĩ năng thực hành & Phân tích số liệu (Năng lực Vật lí & NLS)** | Không thao tác được dụng cụ. Không biết đọc đồ thị. | Làm được thí nghiệm khi có người hướng dẫn. Ghi số liệu còn sai sót. | Tự làm được thí nghiệm. Biết dùng phần mềm (Python/Excel) vẽ đồ thị cơ bản nhưng chưa đẹp/chưa chuẩn. | Làm thí nghiệm thành thạo. Dùng Python vẽ đồ thị đẹp, phân tích sâu sắc ý nghĩa của đồ thị lực-thời gian. |
| **Ứng dụng AI & Công nghệ (NLS)** | Không sử dụng AI hay công nghệ trong bài học. | Có dùng công cụ (Padlet, Canva) nhưng sản phẩm sơ sài. Chưa biết dùng AI hợp lí. | Dùng tốt các công cụ số. Sử dụng AI tạo prompt cơ bản để tìm tài liệu. Sản phẩm tốt. | Thành thạo AI, tạo prompt tinh chỉnh tốt. Thiết kế Canva xuất sắc, kết hợp nhuần nhuyễn công nghệ vào giải quyết bài tập. |
| **Thái độ & Phẩm chất** | Thiếu tập trung, ỷ lại vào nhóm. | Tham gia nhưng chưa chủ động, còn thụ động chờ phân công. | Tích cực, hoàn thành đúng hạn nhiệm vụ được giao. Trung thực trong báo cáo. | Trưởng nhóm xuất sắc, hỗ trợ bạn bè, sáng tạo trong cách làm bài. Khắt khe với độ chính xác của thí nghiệm. |

---
*Ghi chú bổ sung dành cho giáo viên:*
- Để tăng cường Năng lực số, GV nên khuyến khích HS tự điều chỉnh tham số trong đoạn mã Python. Ví dụ thay đổi độ lớn của `force_A` để xem đồ thị thay đổi thế nào.
- Đảm bảo hướng dẫn học sinh kiểm chứng thông tin do AI sinh ra (AI có thể "ảo giác" khi giải thích những bài toán động lực học có ma sát phức tạp). Cần rèn cho học sinh kĩ năng tư duy phản biện với kết quả của AI.
- Nếu thời gian 2 tiết không đủ, bài tập nhóm có thể làm ngoài giờ và nộp qua hệ thống LMS của trường học.
- Đảm bảo tính an toàn khi thực hiện các thí nghiệm có thể tạo ra lực đàn hồi hoặc lực bật mạnh (nếu dùng lò xo nặng).
- Nên tạo thêm các tình huống phản trực giác để HS tranh luận (ví dụ: Con muỗi đập vào kính ô tô, lực ô tô tác dụng lên muỗi có bằng lực muỗi tác dụng lên ô tô không? Tại sao muỗi nát bét mà ô tô không sao?). Tình huống này rất hiệu quả để kiểm tra sự hiểu sâu Định luật II và III Newton.
- Hết bài 16.

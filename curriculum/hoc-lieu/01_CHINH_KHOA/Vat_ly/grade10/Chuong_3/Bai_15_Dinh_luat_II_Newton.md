# KẾ HOẠCH BÀI DẠY: BÀI 15 - ĐỊNH LUẬT II NEWTON
**(Theo Công văn 5512/BGDĐT-GDTrH)**

---

## I. MỤC TIÊU BÀI HỌC

### 1. Năng lực Vật lí
* **Nhận thức vật lí:**
  - Phát biểu được nội dung định luật II Newton.
  - Viết được biểu thức toán học của định luật II Newton dưới dạng véc-tơ $\vec{a} = \frac{\vec{F}}{m}$ và dạng đại số $F = ma$.
  - Trình bày được định nghĩa đơn vị lực Newton (N) dựa trên định luật II.
  - Nêu được mối quan hệ giữa gia tốc, lực tác dụng và khối lượng của vật (gia tốc tỉ lệ thuận với lực, tỉ lệ nghịch với khối lượng).
* **Tìm hiểu thế giới tự nhiên dưới góc độ vật lí:**
  - Thiết kế và thực hiện được thí nghiệm (hoặc phân tích kết quả thí nghiệm qua video/mô phỏng) để kiểm chứng mối quan hệ giữa gia tốc và lực, giữa gia tốc và khối lượng.
  - Xử lí số liệu thí nghiệm, vẽ và nhận xét được đồ thị $a$ theo $F$ (đường thẳng đi qua gốc toạ độ) và $a$ theo $\frac{1}{m}$ (đường thẳng).
* **Vận dụng kiến thức, kĩ năng đã học:**
  - Vận dụng biểu thức định luật II Newton để giải các bài toán động lực học cơ bản (tính gia tốc khi biết lực và khối lượng, hoặc ngược lại).
  - Giải thích được tại sao xe tải nặng lại cần động cơ mạnh hơn xe con, tại sao xe đua F1 lại được thiết kế nhẹ và có động cơ công suất cực lớn.

### 2. Năng lực số (Digital Competencies)
* **Thu thập, xử lí và biểu diễn dữ liệu:**
  - Sử dụng Excel hoặc Google Sheets để nhập số liệu thí nghiệm, dùng tính năng Scatter Plot để vẽ đồ thị hàm bậc nhất, từ đó nội suy ra mối quan hệ tuyến tính.
* **Mô phỏng và Lập trình:**
  - Khai thác phần mềm PhET (Forces and Motion: Basics - Acceleration) để thực hiện thí nghiệm ảo thay đổi khối lượng và lực kéo.
  - Đọc hiểu và chỉnh sửa được một chương trình Python mô phỏng chuyển động có gia tốc dưới tác dụng của lực hằng.
* **Ứng dụng AI:**
  - Sử dụng AI để tìm kiếm các dữ liệu kĩ thuật của các phương tiện giao thông (khối lượng, lực đẩy tối đa, thời gian tăng tốc từ 0-100km/h) để phục vụ cho bài toán thực tế.

### 3. Phẩm chất
* **Trung thực:** Khách quan trong việc ghi chép số liệu thí nghiệm. Nếu số liệu bị sai số lớn, không được tự ý sửa đổi cho khớp lí thuyết mà phải tìm ra nguyên nhân gây sai số (như ma sát, độ dốc bàn).
* **Chăm chỉ:** Tích cực luyện tập tính toán, cẩn thận với thứ nguyên và đơn vị đo ($kg, m/s^2, N$).
* **Trách nhiệm:** Tuân thủ nội quy phòng thực hành. Hợp tác tốt với bạn bè trong quá trình xử lí dữ liệu số trên máy tính.

---

## II. THIẾT BỊ DẠY HỌC VÀ HỌC LIỆU

### 1. Thiết bị dạy học của giáo viên
* Bảng từ, phấn. Laptop và Máy chiếu (Projector).
* Bộ thí nghiệm cơ học (nếu dạy thực hành trực tiếp): Xe đĩa nhôm, ròng rọc, các quả nặng (50g, 100g), cổng quang điện (Photo-gate), đồng hồ hiện số.
* Video bài giảng: Cảnh quay khởi hành của xe thể thao và xe tải nặng.

### 2. Học liệu số và AI Tools
* **Phần mềm mô phỏng (PhET):** "Forces and Motion: Basics" - Tab Acceleration.
* **Công cụ xử lí dữ liệu:** Bảng tính Google Sheets đã thiết lập sẵn hệ trục toạ độ.
* **AI Tool (Gemini/ChatGPT):**
  - *Prompt dành cho Giáo viên soạn bài:* "Generate a dataset for a physics experiment verifying Newton's Second Law. Create 5 data points for Acceleration vs Force (keeping mass constant at 2kg) and add a realistic 5% random error to the acceleration values."
* **Python:** Cài đặt sẵn môi trường Google Colab để HS có thể copy-paste code biểu diễn đồ thị `matplotlib`.

### 3. Thiết bị học tập của học sinh
* Sách giáo khoa, vở ghi, máy tính Casio.
* Giấy kẻ ô li (nếu vẽ đồ thị bằng tay) hoặc Laptop/Tablet để vẽ đồ thị bằng Excel/Colab.

---

## III. TIẾN TRÌNH DẠY HỌC

### Hoạt động 1: Khởi động (Xác định vấn đề học tập) (10 phút)

**a) Mục tiêu:**
- Tạo tình huống có vấn đề liên quan đến mối liên hệ giữa lực, khối lượng và sự thay đổi vận tốc (gia tốc).

**b) Nội dung:**
- Xem clip so sánh thời gian tăng tốc từ $0$ lên $100 \text{ km/h}$ của xe đua F1 và xe container chứa đầy hàng.
- Trả lời câu hỏi định tính: Yếu tố nào quyết định sự tăng tốc nhanh hay chậm của một phương tiện?

**c) Sản phẩm:**
- HS nhận ra: Muốn tăng tốc nhanh thì xe phải nhẹ (khối lượng nhỏ) hoặc động cơ phải mạnh (lực lớn).

**d) Tổ chức thực hiện:**
- **Bước 1:** GV trình chiếu 2 đoạn video clip song song: Một bên là xe đua F1 vọt lên cực kì nhanh, một bên là xe tải đầu kéo ì ạch khởi hành.
- **Bước 2:** Đặt câu hỏi: Theo định luật I Newton, lực làm thay đổi trạng thái chuyển động (tức là tạo ra gia tốc). Vậy gia tốc của vật phụ thuộc vào những yếu tố nào và phụ thuộc như thế nào?
- **Bước 3:** HS thảo luận nhanh theo cặp và đưa ra dự đoán (phụ thuộc lực kéo, phụ thuộc độ nặng nhẹ).
- **Bước 4:** GV dẫn dắt: Để biết chính xác về mặt định lượng (toán học), nhà bác học Newton đã làm các thí nghiệm và rút ra định luật quan trọng nhất của cơ học cổ điển: Định luật II Newton.

---

### Hoạt động 2: Hình thành kiến thức mới (40 phút)

#### Hoạt động 2.1: Khảo sát thí nghiệm ảo về mối quan hệ giữa Gia tốc, Lực và Khối lượng (20 phút)

**a) Mục tiêu:**
- Học sinh tự rút ra được: $a \sim F$ (khi $m$ không đổi) và $a \sim \frac{1}{m}$ (khi $F$ không đổi).
- Rèn kĩ năng dùng PhET và Google Sheets.

**b) Nội dung:**
- Thực hành trên PhET (tab Acceleration). Bỏ qua ma sát.
- Lần 1: Cố định khối lượng (ví dụ cái thùng 50kg), thay đổi lực đẩy $50N, 100N, 150N...$ ghi lại gia tốc.
- Lần 2: Cố định lực đẩy (ví dụ 100N), thay đổi khối lượng vật (đặt thêm vật lên). Ghi lại gia tốc.

**c) Sản phẩm:**
- Bảng số liệu thu được trên Excel/Sheets.
- Hai đồ thị do Excel tự động vẽ: Đồ thị $a-F$ là đường thẳng qua gốc toạ độ. Đồ thị $a-m$ là đường hyperbol, đồ thị $a-\frac{1}{m}$ là đường thẳng.

**d) Tổ chức thực hiện:**
- **Bước 1: Giao nhiệm vụ (Tích hợp Năng lực số):**
  - GV gửi link Google Sheets (mẫu điền) và link PhET vào nhóm Zalo lớp hoặc Google Classroom.
  - Chia nhóm: Dãy 1 làm thí nghiệm giữ $m$ đổi $F$; Dãy 2 làm thí nghiệm giữ $F$ đổi $m$.
- **Bước 2: Thực hiện nhiệm vụ:**
  - HS thao tác trên điện thoại/laptop. Nhập lực, đọc chỉ số "Acceleration" trên màn hình PhET, gõ vào Sheets.
  - Dùng lệnh tạo biểu đồ (Insert -> Chart -> Scatter) để xem dạng đồ thị.
- **Bước 3: Báo cáo:**
  - Đại diện nhóm trình chiếu file Sheets của mình.
  - Rút kết luận toán học: Gia tốc tỉ lệ thuận với lực tác dụng và tỉ lệ nghịch với khối lượng.
- **Bước 4: GV chuẩn hoá kiến thức:**
  - Biểu diễn bằng kí hiệu: $a \sim F$ và $a \sim \frac{1}{m} \Rightarrow a \sim \frac{F}{m}$.
  - Từ đó hình thành công thức định luật.

#### Hoạt động 2.2: Phát biểu Định luật II Newton và Khái niệm Đơn vị Lực (10 phút)

**a) Mục tiêu:**
- Ghi nhớ nội dung và công thức của định luật II.
- Hiểu ý nghĩa véc-tơ của biểu thức.
- Định nghĩa được 1 Newton.

**b) Nội dung:**
- Phát biểu định luật, viết phương trình véc-tơ $\vec{a} = \frac{\vec{F}}{m}$.
- Nhấn mạnh: Véc-tơ gia tốc luôn cùng hướng với véc-tơ lực tác dụng.
- Đơn vị lực: $1N = 1 kg \cdot m/s^2$.

**c) Sản phẩm:**
- Vở ghi bài đầy đủ.
- Lời giải thích đơn vị 1N nghĩa là gì.

**d) Tổ chức thực hiện:**
- **Bước 1:** Từ tỉ lệ thuận, Newton đưa vào hệ số tỉ lệ $k=1$ bằng cách định nghĩa lại đơn vị lực. Ta có phương trình đại số: $F = m \cdot a$.
- **Bước 2:** Lực và gia tốc là các đại lượng véc-tơ. Khối lượng là đại lượng vô hướng dương. Từ Toán học, GV yêu cầu HS viết dạng véc-tơ của phương trình.
- **Bước 3:** HS suy luận ra $\vec{F} = m \cdot \vec{a}$. Vậy hướng của gia tốc do lực sinh ra phải *cùng hướng* với lực.
- **Bước 4:** Định nghĩa đơn vị N: $1\text{ Newton}$ là độ lớn của một lực tác dụng vào vật có khối lượng $1\text{ kg}$ truyền cho nó gia tốc $1 \text{ m/s}^2$.

#### Hoạt động 2.3: Lập trình Python mô phỏng Định luật II (10 phút)

**a) Mục tiêu:**
- Cho HS thấy sự gắn kết giữa Vật lí, Toán học và Khoa học Máy tính.

**b) Nội dung:**
- Chạy đoạn code vẽ đồ thị mối liên hệ không gian trạng thái (vận tốc - thời gian) của vật chịu lực tác dụng.

**c) Sản phẩm:**
- HS được mở rộng tầm mắt bằng đồ thị sinh bởi Python.

**d) Tổ chức thực hiện:**
- **Bước 1:** GV mở một notebook trên Google Colab chiếu lên bảng.
- **Bước 2:** Giải thích thuật toán Euler đơn giản để tích phân phương trình Newton: `v_new = v_old + a * dt` với `a = F / m`.
- **Bước 3:**
  - *Mã Python minh hoạ:*
  ```python
  import matplotlib.pyplot as plt
  m = 2.0  # kg
  F = 10.0 # N
  dt = 0.1 # s
  t, v = 0.0, 0.0
  time_list, vel_list = [t], [v]

  for _ in range(50): # Chạy 5 giây
      a = F / m
      v += a * dt
      t += dt
      time_list.append(t)
      vel_list.append(v)

  plt.plot(time_list, vel_list, label=f"m={m}kg, F={F}N")
  plt.xlabel("Thời gian (s)")
  plt.ylabel("Vận tốc (m/s)")
  plt.title("Đồ thị Vận tốc - Thời gian theo Định luật II Newton")
  plt.grid(True); plt.legend(); plt.show()
  ```
- **Bước 4:** Đổi giá trị $m$ thành $4.0 \text{ kg}$, chạy lại. HS sẽ thấy độ dốc đồ thị (gia tốc) giảm đi một nửa. Trực quan hoá cực kì hiệu quả.

---

### Hoạt động 3: Luyện tập (25 phút)

**a) Mục tiêu:**
- Vận dụng biểu thức $\vec{F} = m \vec{a}$ để tính toán trong các bài toán 1 chiều cơ bản.

**b) Nội dung:**
- Bài tập trắc nghiệm và tự luận trên giấy.
- Trường hợp nhiều lực tác dụng: $\vec{F}_{hl} = \vec{F}_1 + \vec{F}_2 + \dots = m\vec{a}$.

**c) Sản phẩm:**
- Đáp án và bài giải chi tiết.

**d) Tổ chức thực hiện:**
- **Bước 1:** GV giao Bài toán 1: "Một ô tô khối lượng 1,5 tấn đang chuyển động thì hãm phanh với lực hãm là 3000N. Tính gia tốc của xe và nhận xét về hướng của gia tốc."
- **Bước 2:** HS làm bài. Lưu ý đổi đơn vị $1,5 \text{ tấn} = 1500 \text{ kg}$. Tính $a = F/m = -3000 / 1500 = -2 \text{ m/s}^2$ (chọn chiều dương là chiều chuyển động, lực hãm ngược chiều nên mang dấu âm).
- **Bước 3:** Chữa bài trên bảng. Nhấn mạnh tầm quan trọng của việc chọn hệ quy chiếu, chiều dương và phân tích dấu của lực.
- **Bước 4:** Giao Bài toán 2 (Mở rộng tổng hợp lực đã học bài 13): "Một vật chịu 2 lực cùng phương ngược chiều. $F_1 = 20N, F_2 = 5N$. Khối lượng $5kg$. Tính $a$." HS áp dụng $\vec{F}_{hl} = m\vec{a}$.

---

### Hoạt động 4: Vận dụng thực tế và Giao nhiệm vụ (15 phút)

**a) Mục tiêu:**
- Ứng dụng định luật II để phân tích bài toán thực tế (Công nghệ ô tô).
- Phát triển kĩ năng đặt câu hỏi Prompt AI để thu thập dữ liệu thế giới thực.

**b) Nội dung:**
- Tìm hiểu các thông số kĩ thuật (Spec) của phương tiện.
- Tính toán ước lượng lực đẩy của động cơ.

**c) Sản phẩm:**
- Bản báo cáo kết quả tìm kiếm của HS về một dòng xe ô tô.

**d) Tổ chức thực hiện:**
- **Bước 1 (Năng lực số):** GV giao nhiệm vụ cá nhân tại lớp bằng điện thoại:
  - "Sử dụng công cụ AI (như ChatGPT hoặc Perplexity), hãy tìm kiếm khối lượng ($kg$) và thời gian tăng tốc từ $0-100 \text{ km/h}$ ($0-27.8 \text{ m/s}$) của một dòng xe điện nổi tiếng (ví dụ Tesla Model S Plaid hoặc VinFast VF8)."
  - *Gợi ý Prompt cho HS:* "What is the kerb weight of a VinFast VF8, and what is its 0 to 100 km/h acceleration time?"
- **Bước 2:** Sau khi có thông số, yêu cầu HS tính:
  1. Gia tốc trung bình của xe ($a = \frac{\Delta v}{\Delta t}$).
  2. Lực kéo trung bình do động cơ tạo ra ($F = m \cdot a$).
- **Bước 3:** HS tính toán. Một vài HS sẽ ra kết quả lực đẩy khổng lồ (vài chục ngàn Newton). Điều này chứng minh cho việc các xe điện có gia tốc rất cao cần khung gầm và hệ thống truyền động chịu lực cực lớn.
- **Bước 4:** Giao BTVN: Hoàn thành bài tập SGK. Tìm thêm thông số của một chiếc máy bay Boeing 777 lúc cất cánh và lặp lại phép tính tương tự. Nộp kết quả tính trên file Word/PDF lên hệ thống quản lí học tập.

---

## IV. TIÊU CHÍ ĐÁNH GIÁ (RUBRIC)

Bảng Rubric đánh giá Năng lực giải bài tập và Vận dụng số hoá (Hoạt động 3 & 4)

| Tiêu chí | Mức 1 (Dưới trung bình) | Mức 2 (Trung bình) | Mức 3 (Khá) | Mức 4 (Tốt) |
| :--- | :--- | :--- | :--- | :--- |
| **Giải Toán Động lực học (40%)** | Áp dụng sai công thức, quên đổi đơn vị (vd: để nguyên tấn tính). Không hiểu ý nghĩa dấu của gia tốc. | Nhớ công thức nhưng hay sai sót về dấu khi lực hãm phanh. Tính toán còn sai số học. | Tính chuẩn xác gia tốc, hiểu chiều của véc tơ. Giải tốt bài toán 1 lực. | Giải quyết xuất sắc các bài toán nhiều lực, lực hãm, tổng hợp lực trước khi dùng định luật II. |
| **Kĩ năng Xử lí Dữ liệu & Đồ thị (25%)** | Không biết dùng Excel/PhET. Không vẽ được dạng đồ thị tuyến tính của bài học. | Thao tác trên PhET được nhưng chép sai dữ liệu. Vẽ đồ thị thủ công trên giấy còn lúng túng. | Nhập số liệu Excel và vẽ được biểu đồ Scatter tốt. Đọc được mối liên hệ tỉ lệ. | Thành thạo Excel/Sheets. Thậm chí có khả năng tự chỉnh sửa code Python để vẽ đồ thị đổi màu/hiệu chỉnh trục. |
| **Khai thác AI & Dữ liệu thực (20%)** | Không biết cách tạo prompt để tra cứu thông số kĩ thuật. Tìm ra thông số sai bối cảnh. | Tìm được thông số nhưng không biết tính toán tiếp hoặc quên quy đổi đơn vị km/h sang m/s. | Prompt chuẩn, lấy được dữ liệu của xe thực tế, tính ra lực kéo cơ bản đúng. | Tự so sánh được kết quả 2 dòng xe khác nhau (vd xe xăng vs xe điện) bằng định luật II, có lập luận đánh giá. |
| **Trình bày Báo cáo (15%)** | Nộp bài bẩn, chữ viết cẩu thả, không viết đủ các bước luận giải. | Trình bày tạm ổn, thiếu lời giải thích các đại lượng. | Trình bày sạch đẹp, có lời giải thích, đơn vị đo chuẩn xác. | Bài giải như một báo cáo khoa học thu nhỏ, cấu trúc rõ ràng (Giả thiết, Trình bày, Kết luận). File kĩ thuật số đẹp. |

*(GV sử dụng kết quả này kết hợp với điểm số trên các nền tảng trắc nghiệm trực tuyến để ra điểm tổng hợp cho kĩ năng giải quyết vấn đề của HS).*

---
**Tài liệu tham khảo GV:**
- Sách Vật lí Đại cương (Halliday, Resnick).
- Tài liệu bồi dưỡng giáo viên về STEM và Python for Physics.
- Cơ sở dữ liệu xe ô tô toàn cầu (Carfolio).

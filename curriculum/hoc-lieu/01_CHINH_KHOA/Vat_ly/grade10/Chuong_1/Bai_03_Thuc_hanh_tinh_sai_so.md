# KẾ HOẠCH BÀI DẠY (GIÁO ÁN)
## BÀI 3: THỰC HÀNH TÍNH SAI SỐ TRONG PHÉP ĐO (GHI KẾT QUẢ ĐO)
**Môn học: Vật lí; Lớp: 10 (Bộ sách Kết nối tri thức với cuộc sống)**
**Thời lượng thực hiện: 2 tiết**

---

## I. MỤC TIÊU
### 1. Năng lực vật lí
- **Nhận thức vật lí:** 
  - Trình bày được khái niệm phép đo trực tiếp, phép đo gián tiếp.
  - Nêu được nguyên nhân gây ra sai số (sai số hệ thống, sai số ngẫu nhiên).
  - Viết được công thức tính sai số tuyệt đối, sai số tương đối (tỉ đối).
- **Tìm hiểu thế giới tự nhiên dưới góc độ vật lí:** 
  - Thực hiện được các phép đo cơ bản (chiều dài, thời gian, khối lượng) với các dụng cụ thực tế (thước cặp, đồng hồ bấm giây).
- **Vận dụng kiến thức, kĩ năng đã học:**
  - Biết cách viết kết quả đo đúng quy ước chữ số có nghĩa.
  - Áp dụng các công thức để tính sai số của phép đo gián tiếp và đánh giá độ chính xác của phép đo.

### 2. Năng lực chung và Năng lực số (NLS)
- **Năng lực tính toán:** 
  - Xử lí số liệu thực nghiệm chính xác, làm tròn số đúng quy tắc.
- **Năng lực hợp tác:** 
  - Phân công nhiệm vụ rõ ràng trong nhóm khi thực hành đo đạc.
- **Năng lực số (NLS):**
  - Sử dụng Excel / Google Sheets để nhập liệu, tính toán tự động giá trị trung bình, sai số tuyệt đối và biểu diễn đồ thị (nếu cần).
  - Viết một script Python đơn giản (tùy chọn cho HS khá giỏi) để tính sai số tự động.

### 3. Phẩm chất
- **Trung thực:** Ghi chép đúng và đầy đủ các số liệu thực tế đo được, tuyệt đối không "chế" số liệu cho đẹp.
- **Tỉ mỉ, kiên nhẫn:** Đọc giá trị đo cẩn thận để hạn chế tối đa sai số ngẫu nhiên do người quan sát.
- **Trách nhiệm:** Bảo quản tốt dụng cụ đo trong quá trình thực hành.

---

## II. THIẾT BỊ DẠY HỌC VÀ HỌC LIỆU
### 1. Đối với giáo viên
- Máy chiếu, máy tính, bảng vẽ.
- Các dụng cụ đo thực tế làm mẫu: Thước kẹp (thước cặp), panme, thước cuộn, đồng hồ bấm giây.
- File bảng tính Excel / Google Sheets mẫu đã thiết lập sẵn công thức để trình diễn cho học sinh.
- Môi trường Google Colab / Replit sẵn sàng nếu muốn demo mã Python tính sai số.

### 2. Đối với học sinh
- SGK, vở ghi, máy tính cầm tay (Casio/Vinacal).
- Bộ dụng cụ thực hành cho mỗi nhóm (Thước kẻ, một cuốn sách vật lí để đo kích thước, con lắc đơn hoặc vật rơi để đo thời gian).
- Điện thoại / Laptop có cài đặt ứng dụng Spreadsheet (Excel/Google Sheets).

### 3. Công cụ AI và Phần mềm hỗ trợ (Tích hợp NLS)
- **Python / Google Colab:** Để xử lí số liệu mảng lớn tự động.
- **ChatGPT / Gemini:** Đóng vai trò gia sư giải đáp thắc mắc về chữ số có nghĩa và quy tắc làm tròn.
- **Google Sheets:** Tự động hóa các bảng biểu tính sai số.

---

## III. TIẾN TRÌNH DẠY HỌC

### HOẠT ĐỘNG 1: KHỞI ĐỘNG (XÁC ĐỊNH VẤN ĐỀ) (15 phút)
**a. Mục tiêu:**
- HS nhận ra rằng mọi phép đo trong thực tế đều không thể chính xác tuyệt đối, từ đó nảy sinh nhu cầu tìm hiểu về sai số.

**b. Nội dung:**
- Tổ chức "Thử thách đo lường" nhỏ tại lớp: Đo chiều rộng của cái bàn giáo viên.

**c. Sản phẩm:**
- Các số liệu đo đạc khác nhau từ các nhóm cho cùng một đại lượng.

**d. Tổ chức thực hiện (4 bước):**
- **Bước 1: Giao nhiệm vụ học tập**
  - GV phát cho 4 nhóm, mỗi nhóm một loại thước khác nhau (thước kẻ học sinh 20cm, thước cuộn, thước dây thợ may).
  - Yêu cầu cử 1 đại diện lên đo chiều rộng của cùng một chiếc bàn giáo viên. Ghi kết quả lên bảng.
- **Bước 2: Thực hiện nhiệm vụ**
  - Các em thực hiện đo đạc độc lập, đọc kết quả và viết lên bảng (ví dụ: Nhóm 1: 60.1 cm; Nhóm 2: 60.2 cm; Nhóm 3: 59.9 cm; Nhóm 4: 60.0 cm).
- **Bước 3: Báo cáo, thảo luận**
  - GV chỉ vào các kết quả: "Cùng một cái bàn, tại sao kết quả của 4 bạn lại khác nhau? Đâu mới là chiều rộng thật sự của cái bàn?"
  - HS thảo luận chỉ ra nguyên nhân: Do mắt nhìn nghiêng, do thước bị giãn, do thước ngắn phải nối nhiều lần...
- **Bước 4: Kết luận, nhận định**
  - GV chốt: Không có một dụng cụ hay phương pháp nào đo được "Giá trị thực" (True value). Luôn luôn có sự sai lệch gọi là **Sai số**. Bài học này giúp chúng ta biết cách tính và biểu diễn sai số đó để kết quả đo có ý nghĩa khoa học.

---

### HOẠT ĐỘNG 2: HÌNH THÀNH KIẾN THỨC MỚI (35 phút)

#### TIỂU HOẠT ĐỘNG 2.1: PHÂN LOẠI SAI SỐ VÀ CÁCH TÍNH (20 phút)
**a. Mục tiêu:**
- Phân biệt phép đo trực tiếp, gián tiếp. Sai số hệ thống, sai số ngẫu nhiên.
- Nắm được công thức tính giá trị trung bình, sai số tuyệt đối trung bình, sai số tỉ đối.

**b. Nội dung:**
- Lí thuyết về các loại sai số.
- Công thức:
  - Giá trị trung bình: $\bar{A} = \frac{A_1 + A_2 + ... + A_n}{n}$
  - Sai số tuyệt đối của mỗi lần đo: $\Delta A_i = |\bar{A} - A_i|$
  - Sai số tuyệt đối của phép đo: $\Delta A = \overline{\Delta A} + \Delta A_{dc}$
  - Cách viết kết quả: $A = \bar{A} \pm \Delta A$

**c. Sản phẩm:**
- Ghi chép đầy đủ các công thức. Sơ đồ tư duy phân loại sai số.

**d. Tổ chức thực hiện (4 bước):**
- **Bước 1: Giao nhiệm vụ học tập**
  - GV yêu cầu HS đọc SGK và trả lời các câu hỏi: Sai số hệ thống là gì? Sai số ngẫu nhiên là gì? Cách khắc phục?
  - **Prompt AI cho HS (Tự học):** *"Hãy giải thích sự khác nhau giữa độ chính xác (accuracy) và độ chụm (precision) trong đo lường vật lí. Lấy ví dụ về trò chơi ném phi tiêu để minh họa."*
- **Bước 2: Thực hiện nhiệm vụ**
  - HS nghiên cứu SGK, có thể dùng AI trên điện thoại để tra cứu thêm khái niệm Accuracy và Precision để hiểu sâu hơn về bản chất sai số.
- **Bước 3: Báo cáo, thảo luận**
  - HS trình bày. GV vẽ hình cái bia ném phi tiêu lên bảng để giải thích trực quan: Ném chụm vào 1 điểm lệch tâm (Sai số hệ thống), ném rải rác quanh tâm (Sai số ngẫu nhiên).
- **Bước 4: Kết luận, nhận định**
  - GV tổng kết các công thức lên bảng. Lưu ý nguyên tắc làm tròn: Sai số tuyệt đối thường chỉ lấy 1 (hoặc 2) chữ số có nghĩa. Giá trị trung bình làm tròn đến cùng bậc thập phân với sai số tuyệt đối.

#### TIỂU HOẠT ĐỘNG 2.2: CHỮ SỐ CÓ NGHĨA (CSCN) (15 phút)
**a. Mục tiêu:**
- Xác định đúng số lượng chữ số có nghĩa của một số liệu thực nghiệm.

**b. Nội dung:**
- Quy tắc xác định chữ số có nghĩa (Các chữ số khác 0 đều có nghĩa, các chữ số 0 kẹp giữa có nghĩa, chữ số 0 tận cùng bên phải phần thập phân có nghĩa, chữ số 0 đầu tiên bên trái không có nghĩa).

**c. Sản phẩm:**
- Kết quả đếm số lượng CSCN của loạt bài tập ví dụ.

**d. Tổ chức thực hiện (4 bước):**
- **Bước 1: Giao nhiệm vụ học tập**
  - GV cho một loạt các số: 0,0052; 10,02; 15,00; 3400. Yêu cầu HS xác định số CSCN.
- **Bước 2: Thực hiện nhiệm vụ**
  - HS áp dụng quy tắc SGK để đếm.
- **Bước 3: Báo cáo, thảo luận**
  - Gọi HS đọc kết quả, cả lớp nhận xét đúng sai. (Ví dụ 0,0052 có 2 CSCN; 15,00 có 4 CSCN).
- **Bước 4: Kết luận, nhận định**
  - GV chốt các quy tắc. Giải thích vì sao 15 cm viết là 15,00 cm thì lại mang ý nghĩa vật lí khác nhau (15,00 chứng tỏ thước đo chính xác đến 0,01 cm).

---

### HOẠT ĐỘNG 3: LUYỆN TẬP VÀ THỰC HÀNH TÍNH TOÁN BẰNG CÔNG CỤ SỐ (25 phút)
**a. Mục tiêu:**
- Thực hành đo đạc và tự tính toán số liệu.
- Tích hợp NLS: Sử dụng Google Sheets và Python để xử lí dữ liệu lớn.

**b. Nội dung:**
- HS đo thời gian rơi của một vật 5 lần, điền vào bảng.
- Dùng công cụ số để tính toán các đại lượng sai số.

**c. Sản phẩm:**
- Bảng số liệu hoàn chỉnh trên Google Sheets.
- (Tùy chọn) Đoạn code Python thực thi ra kết quả.

**d. Tổ chức thực hiện (4 bước):**
- **Bước 1: Giao nhiệm vụ học tập**
  - GV cung cấp cho mỗi nhóm một vật nặng và đồng hồ bấm giây. Yêu cầu thả vật từ độ cao 1m và đo thời gian 5 lần.
  - Nhập liệu vào Google Sheets. Thiết lập hàm `=AVERAGE()`, hàm `=ABS()`, tính toán sai số.
  - **Dành cho HS hứng thú Lập trình (NLS nâng cao):** GV chiếu một đoạn code Python lên bảng.
    ```python
    import numpy as np
    data = [0.45, 0.47, 0.44, 0.46, 0.48]
    t_mean = np.mean(data)
    delta_t = np.abs(data - t_mean)
    delta_t_mean = np.mean(delta_t)
    print(f"GTTB: {t_mean:.3f}, Sai so TB: {delta_t_mean:.3f}")
    ```
- **Bước 2: Thực hiện nhiệm vụ**
  - HS thực hiện đo đạc. Nhập số liệu vào Google Sheets.
  - Tự lập công thức tính các cột: $\Delta t_1, \Delta t_2...$ và tính $\overline{\Delta t}$.
- **Bước 3: Báo cáo, thảo luận**
  - Các nhóm chia sẻ màn hình Spreadsheet của mình. So sánh kết quả tính tay (máy tính Casio) và tính bằng Excel.
- **Bước 4: Kết luận, nhận định**
  - GV đánh giá cao kĩ năng số của HS. Nhấn mạnh ưu điểm của công cụ số: Tránh sai sót tính toán cơ học, xử lí hàng ngàn số liệu chỉ trong tích tắc, rất hữu ích cho các nghiên cứu đại học sau này.

---

### HOẠT ĐỘNG 4: VẬN DỤNG (15 phút)
**a. Mục tiêu:**
- Tính sai số gián tiếp thông qua công thức vật lí.
- Vận dụng vào một bài toán thực tế.

**b. Nội dung:**
- Từ thời gian $t$ đo được, tính gia tốc rơi tự do $g = \frac{2h}{t^2}$ và xác định sai số gián tiếp của $g$.

**c. Sản phẩm:**
- Bài giải hoàn chỉnh viết kết quả đo của đại lượng gián tiếp $g = \bar{g} \pm \Delta g$.

**d. Tổ chức thực hiện (4 bước):**
- **Bước 1: Giao nhiệm vụ học tập**
  - Cho chiều cao $h = 1,000 \pm 0,001$ m. Dùng thời gian $t = \bar{t} \pm \Delta t$ vừa tính ở trên.
  - Yêu cầu HS tính $\bar{g}$ và sai số tỉ đối $\delta g = \frac{\Delta h}{h} + 2\frac{\Delta t}{t}$. Từ đó suy ra $\Delta g$.
  - **Prompt AI hỗ trợ tư duy:** *"Tôi có công thức vật lí $g = \frac{2h}{t^2}$. Hãy hướng dẫn tôi từng bước cách tính sai số tỉ đối và sai số tuyệt đối của đại lượng g dựa theo quy tắc tính sai số gián tiếp."*
- **Bước 2: Thực hiện nhiệm vụ**
  - HS áp dụng quy tắc đạo hàm lôgarit (hoặc quy tắc tổng quát trong SGK): Sai số tỉ đối của tích/thương bằng tổng các sai số tỉ đối. Lũy thừa $n$ thì nhân $n$ lần.
- **Bước 3: Báo cáo, thảo luận**
  - Lên bảng trình bày các bước tính toán và ghi kết quả cuối cùng đúng số CSCN.
- **Bước 4: Kết luận, nhận định**
  - GV nhận xét, sửa lỗi làm tròn số của học sinh (đây là lỗi HS hay mắc nhất). Nhắc nhở quy tắc làm tròn khắt khe của Vật lí.

---

## IV. TIÊU CHÍ ĐÁNH GIÁ (RUBRIC)

| Tiêu chí | Nhận biết (1) | Thông hiểu (2) | Vận dụng (3) | Vận dụng cao (4) |
| :--- | :--- | :--- | :--- | :--- |
| **1. Kiến thức về Sai số (Năng lực Vật lí)** | Nêu được khái niệm nhưng chưa phân biệt được hệ thống và ngẫu nhiên. | Phân biệt rõ sai số hệ thống và ngẫu nhiên, biết nguồn gốc gây ra chúng. | Giải thích được nguyên nhân gây sai số trong thí nghiệm cụ thể và đề xuất cách giảm thiểu. | Tự lập luận, thiết kế lại thí nghiệm hoặc thay đổi dụng cụ để giảm thiểu tối đa sai số hệ thống. |
| **2. Kĩ năng Đo đạc và Ghi chép** | Đo đạc cẩu thả, đọc sai vạch chia trên dụng cụ. | Thao tác đúng quy trình, đọc số liệu tương đối chính xác. Ghi chép đầy đủ. | Đọc số liệu cẩn thận, biết ước lượng phần lẻ của vạch chia nhỏ nhất. | Kĩ năng thực hành cực kì điêu luyện, thao tác dứt khoát, hỗ trợ bạn bè trong việc đọc số liệu khó (như trên panme). |
| **3. Xử lí số liệu & Năng lực số (NLS)** | Tính toán bằng máy tính cầm tay còn sai sót, không biết dùng Spreadsheet. | Biết thiết lập các hàm cơ bản (SUM, AVERAGE) trên Excel để tính trung bình. | Sử dụng thành thạo Spreadsheet để tính toàn bộ bảng số liệu, định dạng đẹp mắt. | Biết vẽ đồ thị sai số (Error bars) trên Excel hoặc dùng Python/Colab để viết script tự động hóa hoàn toàn. |
| **4. Quy tắc làm tròn & Chữ số có nghĩa** | Xác định sai CSCN. Làm tròn số tùy tiện. | Đếm đúng CSCN, làm tròn đúng nhưng biểu diễn kết quả $\pm$ có bậc thập phân chưa khớp. | Áp dụng chuẩn quy tắc làm tròn, kết quả viết dạng $A = \bar{A} \pm \Delta A$ chính xác. | Phân tích sâu sắc ý nghĩa vật lí của việc làm tròn, tranh luận và bảo vệ được kết quả của mình khi có sự khác biệt nhỏ. |
| **5. Thái độ khoa học** | Thích "chế" số cho đẹp, kết quả giống lí thuyết. Thiếu trung thực. | Tôn trọng số liệu đo, dù số liệu có sai lệch lớn so với lí thuyết. | Kiên nhẫn đo đi đo lại nhiều lần khi thấy kết quả bất thường. | Có tư duy hoài nghi khoa học, đặt câu hỏi về độ tin cậy của dụng cụ đo và đề xuất kiểm định lại dụng cụ. |

---
*Ghi chú: Bài học mang tính thực hành và tính toán cao. GV cần đi sát từng nhóm để sửa lỗi kĩ năng đo (ví dụ: lỗi ngắm chừng khi bấm đồng hồ, lỗi Parallax khi đọc thước).*

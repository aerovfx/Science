# KẾ HOẠCH BÀI DẠY (GIÁO ÁN)
## BÀI 17: MÁY PHÁT ĐIỆN XOAY CHIỀU
**Môn học: Vật lí; Lớp: 12 (Bộ sách Kết nối tri thức với cuộc sống)**
**Thời lượng thực hiện: 2 tiết**

## I. MỤC TIÊU
### 1. Kiến thức
- Nêu được nguyên tắc cấu tạo và hoạt động của máy phát điện xoay chiều (dựa trên hiện tượng cảm ứng điện từ).
- Viết được biểu thức của suất điện động xoay chiều: $e = NBS\omega.\cos(\omega t)$.
- Phân biệt được phần cảm (tạo từ trường) và phần ứng (tạo dòng điện), rôto (phần quay) và stato (phần đứng yên) trong máy phát điện xoay chiều 1 pha và 3 pha.
- Trình bày được nguyên tắc tạo ra dòng điện xoay chiều 3 pha.

### 2. Năng lực
#### 2.1. Năng lực vật lí
- Năng lực nhận thức: Thiết lập được phương trình $e$ từ phương trình từ thông $\Phi = NBS\cos(\omega t)$ bằng cách đạo hàm (toán học tích hợp).
- Năng lực tìm hiểu thế giới tự nhiên: Quan sát mô hình máy phát điện, các nhà máy thủy điện, nhiệt điện để rút ra mô hình vật lí chung.
- Năng lực vận dụng: Giải thích được tại sao dòng điện lưới quốc gia là dòng điện xoay chiều 3 pha với tần số 50Hz.

#### 2.2. Năng lực chung
- Năng lực giao tiếp và hợp tác: Làm việc nhóm để thiết kế mô hình máy phát điện đơn giản hoặc báo cáo về các loại nhà máy điện.
- Năng lực giải quyết vấn đề: Đề xuất các cách tăng hiệu suất, tăng điện áp đầu ra của máy phát điện.

### 3. Phẩm chất
- Trách nhiệm: Nhận thức được tầm quan trọng của điện năng, từ đó có ý thức tiết kiệm điện, bảo vệ tài nguyên năng lượng.
- Khát vọng cống hiến: Tìm hiểu về các nguồn năng lượng tái tạo (phong điện, điện mặt trời) cho tương lai của đất nước.

## II. THIẾT BỊ DẠY HỌC VÀ HỌC LIỆU
### 1. Giáo viên
- Mô hình máy phát điện xoay chiều 1 pha, 3 pha (loại thực hành).
- Tranh ảnh, video mô phỏng nguyên lí làm việc của máy phát 1 pha và 3 pha.
- Thí nghiệm biểu diễn: Khung dây quay trong từ trường của nam châm chữ U, kết nối với máy hiện sóng Oscilloscope để thấy đồ thị dạng hình sin.

### 2. Học sinh
- Đọc bài trước, ôn lại kiến thức về chuyển động tròn đều (tốc độ góc $\omega$), đạo hàm của hàm lượng giác.

### 3. Tích hợp AI / Công nghệ
- **AI Prompt tham khảo:**
  - *"Đóng vai một kĩ sư điện lực của nhà máy Thủy điện Hòa Bình, hãy giải thích quy trình biến đổi từ thế năng của nước thành điện năng xoay chiều 3 pha cung cấp cho lưới điện quốc gia."*
  - *"Viết một đoạn code Python (sử dụng matplotlib) để vẽ đồ thị suất điện động $e = NBS\omega\cos(\omega t)$ và từ thông $\Phi = NBS\cos(\omega t)$ trên cùng một hệ trục, so sánh độ lệch pha giữa chúng."*

## III. TIẾN TRÌNH DẠY HỌC

### HOẠT ĐỘNG 1: KHỞI ĐỘNG (10 phút)
**1. Mục tiêu:**
- Gắn kết kiến thức cảm ứng điện từ (Bài 16) với việc chế tạo nguồn điện trong thực tế.

**2. Nội dung:**
- GV chiếu hình ảnh nhà máy Thủy điện Sơn La lớn nhất Đông Nam Á. Đặt câu hỏi: Hàng triệu kilowatt điện được sinh ra từ đâu? Nguyên lí cốt lõi nào đã biến sức nước thành điện năng thắp sáng cả đất nước?

**3. Sản phẩm:**
- Trả lời của HS: Nước làm quay tuabin, tuabin nối với máy phát điện. Nguyên lí là cảm ứng điện từ.

**4. Tổ chức thực hiện:**
- **Bước 1:** GV trình chiếu hình ảnh, đặt vấn đề.
- **Bước 2:** HS phát biểu ý kiến cá nhân.
- **Bước 3:** GV chốt: Dù là thủy điện, nhiệt điện, điện gió hay điện hạt nhân... trái tim của chúng đều là "Máy phát điện xoay chiều". Ta sẽ khám phá cấu tạo của nó.

### HOẠT ĐỘNG 2: HÌNH THÀNH KIẾN THỨC MỚI (65 phút)

#### TIỂU HOẠT ĐỘNG 2.1: NGUYÊN TẮC TẠO RA DÒNG ĐIỆN XOAY CHIỀU (25 phút)
**1. Mục tiêu:**
- Thiết lập công thức biểu diễn suất điện động xoay chiều.

**2. Nội dung:**
- Khảo sát khung dây diện tích S, có N vòng dây, quay đều với tốc độ góc $\omega$ trong từ trường đều $\vec{B}$.
- Viết biểu thức từ thông $\Phi(t)$ và tính suất điện động $e(t)$.

**3. Sản phẩm:**
- Tại thời điểm t, $\alpha = \omega t + \varphi$.
- $\Phi = NBS\cos(\omega t + \varphi)$
- Theo Faraday: $e = -\Phi' = NBS\omega\sin(\omega t + \varphi) = E_0\cos(\omega t + \varphi - \pi/2)$.
- Kết luận: Suất điện động biến thiên điều hòa theo thời gian gọi là suất điện động xoay chiều. Giá trị cực đại $E_0 = NBS\omega$.

**4. Tổ chức thực hiện:**
- **Bước 1:** GV vẽ hình lên bảng: khung dây quay quanh trục vuông góc với đường sức từ.
- **Bước 2:** GV yêu cầu 1 HS khá môn Toán lên bảng đạo hàm hàm số $\Phi(t) = NBS\cos(\omega t)$ theo biến t.
- **Bước 3:** HS thực hiện, ra kết quả $e(t)$. Lớp nhận xét.
- **Bước 4:** GV đưa ra định nghĩa, chỉ rõ biên độ $E_0$ phụ thuộc vào số vòng dây N, diện tích S, độ mạnh từ trường B và tốc độ quay $\omega$.

#### TIỂU HOẠT ĐỘNG 2.2: MÁY PHÁT ĐIỆN XOAY CHIỀU 1 PHA (20 phút)
**1. Mục tiêu:**
- Phân tích cấu tạo máy phát 1 pha.

**2. Nội dung:**
- Tìm hiểu 2 bộ phận chính: Phần cảm và Phần ứng.
- Rôto và Stato.
- Công thức tần số $f = np$ (n: vòng/s, p: số cặp cực).

**3. Sản phẩm:**
- Hiểu được cấu tạo: Máy nhỏ (phần ứng quay, phần cảm đứng yên), máy lớn (phần ứng đứng yên, phần cảm quay - nam châm điện).
- Tần số $f = np$ hoặc $f = np/60$ (nếu n tính bằng vòng/phút).

**4. Tổ chức thực hiện:**
- **Bước 1:** GV cho HS quan sát mô hình thực tế. Chỉ rõ đâu là cuộn dây, đâu là nam châm.
- **Bước 2:** GV giải thích tại sao trong thực tế công nghiệp, người ta lại cho nam châm (rôto) quay, còn cuộn dây (stato) đứng yên. (Vì cuộn dây phát ra điện áp rất lớn, quay sẽ dễ đánh lửa ở chổi quét, rất nguy hiểm).
- **Bước 3:** Giới thiệu công thức $f=np$. Yêu cầu HS tính tốc độ quay n (vòng/phút) của máy phát có 4 cặp cực để tạo ra tần số lưới điện Việt Nam $f=50Hz$.
- **Bước 4:** HS tính ra $n = 750$ vòng/phút.

#### TIỂU HOẠT ĐỘNG 2.3: MÁY PHÁT ĐIỆN XOAY CHIỀU 3 PHA (20 phút)
**1. Mục tiêu:**
- Nêu cấu tạo và ưu điểm của dòng điện 3 pha.

**2. Nội dung:**
- Cấu tạo: 3 cuộn dây đặt lệch nhau 120 độ trên stato, nam châm quay ở giữa.
- Hệ thống 3 dòng điện lệch pha nhau $2\pi/3$.

**3. Sản phẩm:**
- Vẽ được giản đồ sóng của 3 suất điện động.
- Nêu được 2 ưu điểm: Truyền tải đi xa tiết kiệm dây dẫn (mắc hình sao); tạo ra từ trường quay cho động cơ không đồng bộ.

**4. Tổ chức thực hiện:**
- **Bước 1:** GV trình chiếu hoạt hình mô phỏng máy phát 3 pha.
- **Bước 2:** GV phân tích sự xuất hiện của suất điện động ở từng cuộn dây theo thời gian khi cực Bắc của rôto quét qua.
- **Bước 3:** Viết hệ 3 phương trình:
  $e_1 = E_0\cos(\omega t)$
  $e_2 = E_0\cos(\omega t - 2\pi/3)$
  $e_3 = E_0\cos(\omega t + 2\pi/3)$
- **Bước 4:** HS nhận xét tổng $e_1 + e_2 + e_3 = 0$. GV nhấn mạnh đây là cơ sở để dùng dây trung hòa trong mạng điện 3 pha.

### HOẠT ĐỘNG 3: LUYỆN TẬP (10 phút)
**1. Mục tiêu:**
- Ghi nhớ công thức $E_0$ và $f=np$.

**2. Nội dung:**
- Làm bài tập trắc nghiệm ngắn gọn.

**3. Sản phẩm:**
- Đáp án đúng của học sinh.

**4. Tổ chức thực hiện:**
- **Bước 1:** Đưa ra 2 bài tập tự luận nhỏ.
- **Bước 2:** Gọi 2 HS lên bảng tính toán trực tiếp.
- **Bước 3:** GV sửa lỗi trình bày, lỗi bấm máy.

### HOẠT ĐỘNG 4: VẬN DỤNG (5 phút)
**1. Mục tiêu:**
- Liên hệ thực tế gia đình và địa phương.

**2. Nội dung:**
- Tìm hiểu các máy phát điện dự phòng dùng xăng/dầu ở gia đình.

**3. Sản phẩm:**
- Báo cáo nhỏ hoặc thông tin HS thu thập được.

**4. Tổ chức thực hiện:**
- **Bước 1:** Yêu cầu HS về nhà chụp ảnh hoặc ghi lại các thông số ghi trên nhãn máy phát điện dự phòng (nếu có) hoặc tìm hiểu trên mạng.
- **Bước 2:** Dùng AI hoặc Google dịch để giải thích các thuật ngữ tiếng Anh trên nhãn máy.

## IV. TIÊU CHÍ ĐÁNH GIÁ (RUBRICS)

| Tiêu chí | Tốt (8-10 điểm) | Khá (6-7 điểm) | Đạt (5 điểm) | Chưa đạt (<5 điểm) |
| :--- | :--- | :--- | :--- | :--- |
| **Kiến thức** | Viết trôi chảy các phương trình, giải thích tường tận nguyên lí hoạt động và sự khác biệt 1 pha - 3 pha. | Nắm được nguyên lí, viết được công thức nhưng đôi khi quên số $\pi$, chu kì. | Thuộc công thức cơ bản $f=np$ nhưng không hiểu bản chất đạo hàm từ thông. | Không nắm được nguyên lí cảm ứng điện từ. |
| **Kĩ năng tính toán** | Giải quyết gọn gàng bài toán, đổi đơn vị vòng/phút, tính $\omega$ không sai sót. | Còn nhầm lẫn giữa vòng/giây và vòng/phút trong công thức tính $f$. | Biết ráp số nhưng bấm máy tính hay sai, quên các hệ số $10^{-4}$... | Không biết tính. |
| **Nhận thức thực tiễn** | Phân tích sâu sắc ưu điểm dòng 3 pha, hiểu hệ thống lưới điện quốc gia. | Biết được thông tin cơ bản qua bài giảng nhưng không mở rộng được. | Mơ hồ về điện 1 pha và 3 pha ngoài thực tế. | Hoàn toàn thụ động. |

*(Kết thúc giáo án Bài 17)*

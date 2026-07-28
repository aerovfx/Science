# KẾ HOẠCH BÀI DẠY (GIÁO ÁN)
## BÀI 31: XÁC SUẤT THỰC NGHIỆM
**Môn học: Toán; Lớp: 7 (Bộ sách Kết nối tri thức với cuộc sống)**
**Thời lượng thực hiện: 1 tiết**

---

## I. MỤC TIÊU

### 1. Năng lực Toán học
- **Tư duy và lập luận toán học:** Nhận biết được khái niệm xác suất thực nghiệm của một biến cố trong một trò chơi hoặc phép thử lặp đi lặp lại nhiều lần. Giải thích được sự tương quan giữa xác suất thực nghiệm và xác suất lý thuyết khi số lần thực hiện phép thử đủ lớn.
- **Mô hình hóa toán học:** Sử dụng tỉ số giữa số lần xuất hiện biến cố và tổng số lần thực nghiệm để mô hình hóa các bài toán kiểm tra chất lượng sản phẩm (như tỉ lệ nảy mầm của hạt giống lúa thuần Việt Nam, tỉ lệ sản phẩm nông sản đạt chuẩn xuất khẩu).
- **Giải quyết vấn đề toán học:** Tính được xác suất thực nghiệm của một biến cố dựa trên bảng dữ liệu thu thập từ thực tế hoặc mô phỏng.
- **Giao tiếp toán học:** Đọc, phân tích và giải thích bảng số liệu tần số xuất hiện của biến cố; nhận xét xu hướng hội tụ của xác suất thực nghiệm.
- **Sử dụng công cụ và phương tiện toán học:** Sử dụng ngôn ngữ lập trình Python, phần mềm GeoGebra hoặc máy tính cầm tay để chạy mô phỏng phép thử với số lần lặp lớn ($n = 1.000, 10.000, 100.000$).

### 2. Năng lực chung và Năng lực số (NLS)
- **Năng lực tự chủ và tự học:** Tự lực thu thập dữ liệu qua thí nghiệm cá nhân (tung đồng xu, gieo xúc xắc), tổng hợp số liệu thu được vào bảng tần số.
- **Năng lực giao tiếp và hợp tác:** Làm việc nhóm để gộp dữ liệu thí nghiệm của tất cả các thành viên, tăng tổng số lần thực hiện phép thử $n$.
- **Năng lực số (NLS):**
  - Khai thác AI ChatGPT/Gemini: Nhập câu lệnh để AI tìm kiếm dữ liệu lịch sử về thí nghiệm tung đồng xu nổi tiếng của Buffon và Karl Pearson.
  - Sử dụng Python mô phỏng số lớn: Viết mã Python vẽ biểu đồ đường thể hiện sự hội tụ của xác suất thực nghiệm về giá trị xác suất lý thuyết $0.5$.
  - Google Sheets / Excel: Nhập dữ liệu nhóm, tự động tính tỉ số xác suất thực nghiệm bằng công thức `=COUNTIF()/COUNTA()`.
  - Quizizz: Thực hiện bài kiểm tra trắc nghiệm nhanh đánh giá năng lực tính xác suất thực nghiệm.

### 3. Phẩm chất
- **Chăm chỉ:** Kiên nhẫn thực hiện nhiều lần phép thử ngẫu nhiên và cẩn thận ghi chép lại kết quả.
- **Trung thực:** Tôn trọng số liệu thực nghiệm thu được, tuyệt đối không bịa đặt hay chỉnh sửa dữ liệu thí nghiệm.
- **Trách nhiệm:** Ý thức được vai trò của xác suất thực nghiệm trong thống kê đời sống và kiểm định chất lượng sản phẩm thực tế.

---

## II. THIẾT BỊ DẠY HỌC VÀ HỌC LIỆU

### 1. Đối với giáo viên
- Máy tính laptop kết nối Internet, máy chiếu, bảng phụ.
- SGK Toán 7 Kết nối tri thức với cuộc sống, Sách giáo viên, Kế hoạch bài dạy.
- Dụng cụ thí nghiệm cho học sinh: 10 đồng xu 2.000đ/đồng xu phong thủy, 10 con xúc xắc 6 mặt, 10 hộp kín chứa bi 2 màu.
- File mã nguồn Python mô phỏng chạy trên Google Colab / Replit.
- Link Google Sheet chung cho cả lớp nhập dữ liệu nhóm.

### 2. Đối với học sinh
- SGK Toán 7, vở ghi, máy tính cầm tay Fx-580VN X.
- Bút chì, thước kẻ, phiếu ghi chép thực nghiệm cá nhân và nhóm.
- Điện thoại/Máy tính bảng có kết nối mạng (nếu được cho phép).

### 3. Công cụ AI và Phần mềm hỗ trợ (Tích hợp NLS)
- **AI Tools:** ChatGPT, Google Gemini.
- **Python (Google Colab):** Thư viện `random`, `matplotlib` mô phỏng 100.000 lần tung đồng xu.
- **Google Sheets:** Bảng tính thu thập dữ liệu thời gian thực của các nhóm trong lớp.
- **Quizizz:** Bài tập trắc nghiệm củng cố kiến thức.

---

## III. TIẾN TRÌNH DẠY HỌC

### HOẠT ĐỘNG 1: KHỞI ĐỘNG (XÁC ĐỊNH VẤN ĐỀ) (10 phút)

**a. Mục tiêu:**
- Tạo sự tò mò qua câu chuyện lịch sử toán học về thí nghiệm tung đồng xu hàng nghìn lần của các nhà toán học thế giới.
- Dẫn dắt học sinh đến khái niệm xác suất thực nghiệm.

**b. Nội dung:**
- GV giới thiệu câu chuyện: Nhà toán học người Pháp Buffon đã tung một đồng xu $4.040$ lần và thu được $2.048$ lần mặt sấp. Sau đó, nhà toán học Karl Pearson đã tung một đồng xu $24.000$ lần và thu được $12.012$ lần mặt sấp.
- Tỉ số giữa số lần mặt sấp xuất hiện và tổng số lần tung là bao nhiêu? Giá trị đó có gần với xác suất lý thuyết $0.5$ không?

**c. Sản phẩm:**
- HS tính tỉ số của Buffon: $\frac{2.048}{4.040} \approx 0.5069$.
- HS tính tỉ số của Karl Pearson: $\frac{12.012}{24.000} = 0.5005$.
- HS nhận xét: Cả hai tỉ số đều rất gần với $0.5$.

**d. Tổ chức thực hiện (4 bước):**

- **Bước 1: Giao nhiệm vụ**
  - GV chiếu hình ảnh nhà toán học Karl Pearson và bảng thống kê kết quả tung đồng xu.
  - Giao câu hỏi suy ngẫm cho HS.
  - **Prompt AI mẫu cụ thể cho HS (Tiếng Việt):**
    > *"Hãy đóng vai một nhà sử học toán học, kể ngắn gọn câu chuyện Karl Pearson tung đồng xu 24.000 lần và giải thích ý nghĩa của con số 0.5005 đối với học sinh lớp 7."*

- **Bước 2: Thực hiện nhiệm vụ**
  - HS tính toán tỉ số ra nháp bằng máy tính cầm tay.
  - 1 HS nhập prompt AI trên máy tính bảng để xem câu chuyện lịch sử chi tiết.

- **Bước 3: Báo cáo, thảo luận**
  - GV gọi 2 HS nêu kết quả tính tỉ số của Buffon và Pearson.
  - Cả lớp thảo luận về câu hỏi: "Nếu chúng ta tung đồng xu 20 lần thì tỉ số mặt sấp có luôn luôn bằng 0.5 hay không?"

- **Bước 4: Kết luận, nhận định**
  - GV kết luận: Tỉ số giữa số lần xuất hiện một biến cố và tổng số lần thực hiện phép thử được gọi là **Xác suất thực nghiệm**. Để tìm hiểu sâu hơn về tính chất của xác suất thực nghiệm, chúng ta cùng học Bài 31.

---

### HOẠT ĐỘNG 2: HÌNH THÀNH KIẾN THỨC MỚI (20 phút)

#### TIỂU HOẠT ĐỘNG 2.1: Công thức tính xác suất thực nghiệm (10 phút)

**a. Mục tiêu:**
- Hiểu và ghi nhớ công thức tính xác suất thực nghiệm của một biến cố trong $n$ lần thực hiện phép thử.

**b. Nội dung:**
- **Định nghĩa toán học chính xác:**
  Thực hiện một phép thử ngẫu nhiên $n$ lần. Giả sử biến cố $A$ xuất hiện $k$ lần ($0 \le k \le n$). Khi đó, **Xác suất thực nghiệm** của biến cố $A$ sau $n$ lần thực hiện phép thử đó là tỉ số:
  $$\text{Xác suất thực nghiệm của } A = \frac{k}{n} = \frac{\text{Số lần biến cố } A \text{ xuất hiện}}{\text{Tổng số lần thực hiện phép thử}}$$
- **Ví dụ thực tế Việt Nam:** Viện Kỹ thuật Nông nghiệp Việt Nam thử nghiệm gieo $1.000$ hạt giống lúa ST25. Kết quả thu được $935$ hạt nảy mầm thành cây con khỏe mạnh.
  - Phép thử: Gieo hạt lúa ST25 ($n = 1.000$).
  - Biến cố $A$: "Hạt lúa nảy mầm" ($k = 935$).
  - Xác suất thực nghiệm nảy mầm: $\frac{935}{1.000} = 0.935 = 93.5\%$.

**c. Sản phẩm:**
- HS ghi chép chính xác công thức $\frac{k}{n}$.
- Tính đúng xác suất thực nghiệm nảy mầm của hạt lúa ST25 là $93.5\%$.

**d. Tổ chức thực hiện (4 bước):**

- **Bước 1: Giao nhiệm vụ**
  - GV giảng giải công thức và chiếu ví dụ thực tế hạt giống lúa ST25.
  - Yêu cầu HS xác định $n, k$ và tính tỉ số xác suất thực nghiệm.

- **Bước 2: Thực hiện nhiệm vụ**
  - HS thực hiện tính toán cá nhân vào vở ghi bài.

- **Bước 3: Báo cáo, thảo luận**
  - GV mời 1 HS đứng tại chỗ nêu công thức tổng quát và lời giải bài toán lúa ST25.

- **Bước 4: Kết luận, nhận định**
  - GV nhấn mạnh: Khác với xác suất lý thuyết (tính bằng suy luận trước khi làm), xác suất thực nghiệm chỉ tính được **sau khi** ta đã tiến hành thu thập dữ liệu thực tế.

---

#### TIỂU HOẠT ĐỘNG 2.2: Mối quan hệ giữa xác suất thực nghiệm và xác suất lý thuyết (Định luật số lớn - Mô phỏng Python) (10 phút)

**a. Mục tiêu:**
- Học sinh nhận biết được tính quy luật: Khi số lần thực nghiệm $n$ càng lớn, xác suất thực nghiệm của biến cố $A$ càng gần với xác suất lý thuyết của biến cố đó.
- Trải nghiệm chạy đoạn mã mô phỏng Python trên máy tính.

**b. Nội dung:**
- **Thực nghiệm nhóm tại lớp:** Cho mỗi nhóm HS tung đồng xu 20 lần, ghi lại số lần mặt sấp $k$. Tổng hợp dữ liệu toàn lớp ($N_{tổng} = 20 \times 10 = 200$ lần).
- **Trình chiếu mô phỏng Python (NLS):**
  Giáo viên chạy mã Python tự động tung đồng xu với các quy mô $n = 10, 100, 1.000, 10.000, 100.000$ lần và hiển thị đồ thị hội tụ.

```python
import random
import matplotlib.pyplot as plt

# Chương trình mô phỏng sự hội tụ của xác suất thực nghiệm tung đồng xu
def simulate_coin_flips():
    trial_counts = [10, 50, 100, 500, 1000, 5000, 10000, 100000]
    exp_probabilities = []
    
    for n in trial_counts:
        # Tung đồng xu n lần (1: Mặt Sấp, 0: Mặt Ngửa)
        flips = [random.choice([0, 1]) for _ in range(n)]
        k = sum(flips)  # Số lần mặt Sấp xuất hiện
        p_exp = k / n
        exp_probabilities.append(p_exp)
        print(f"Số lần tung n = {n:6d} | Số lần Sấp k = {k:6d} | Xác suất thực nghiệm = {p_exp:.4f}")

simulate_coin_flips()
```

**c. Sản phẩm:**
- Bảng dữ liệu thực nghiệm thu được của lớp.
- Kết quả chạy đoạn mã Python hiển thị xác suất thực nghiệm dao động quanh $0.5$ và hội tụ sát $0.5000$ khi $n = 100.000$.

**d. Tổ chức thực hiện (4 bước):**

- **Bước 1: Giao nhiệm vụ**
  - GV yêu cầu các nhóm tiến hành tung đồng xu 20 lần và nhập kết quả $k$ vào link Google Sheets của lớp.
  - GV chiếu đoạn mã Python trên Google Colab.
  - **Prompt AI hỗ trợ GV (Tiếng Việt):**
    > *"Giải thích khái niệm Định luật số lớn (Law of Large Numbers) bằng ngôn ngữ giản dị, phù hợp với trình độ học sinh lớp 7."*

- **Bước 2: Thực hiện nhiệm vụ**
  - Các nhóm HS thực hiện tung đồng xu 20 lần, ghi chép và nhập kết quả.
  - GV bấm nút chạy mã Python trên máy chiếu cho học sinh quan sát.

- **Bước 3: Báo cáo, thảo luận**
  - GV chiếu bảng Google Sheets toàn lớp: Quan sát sự biến đổi của tỉ số khi ghép dữ liệu từ 20 lần, 60 lần, 100 lần, 200 lần.
  - HS rút ra nhận xét về sự thay đổi của xác suất thực nghiệm khi $n$ tăng lên.

- **Bước 4: Kết luận, nhận định**
  - GV chốt định lý: **Khi số lần thực hiện phép thử rất lớn, xác suất thực nghiệm của một biến cố sẽ càng ngày càng gần với xác suất lý thuyết của biến cố đó.**

---

### HOẠT ĐỘNG 3: LUYỆN TẬP (10 phút)

**a. Mục tiêu:**
- Đánh giá kĩ năng tính xác suất thực nghiệm dựa trên bảng tần số cho trước.
- Rèn luyện thao tác tính toán chính xác tỉ số xác suất.

**b. Nội dung:**
- **Bài tập 1 (Thực tế nông sản Việt Nam):**
  Một đại lý thu mua sầu riêng Ri6 ở Tiền Giang kiểm tra ngẫu nhiên 500 quả sầu riêng thu hoạch từ một trang trại. Kết quả kiểm tra được ghi trong bảng sau:

  | Loại sản phẩm | Đạt chuẩn xuất khẩu (Loại 1) | Đạt tiêu chuẩn tiêu thụ nội địa (Loại 2) | Quả bị lỗi/hỏng (Loại 3) |
  | :--- | :---: | :---: | :---: |
  | **Số lượng (quả)** | 380 | 105 | 15 |

  a) Tính xác suất thực nghiệm của biến cố $A$: "Chọn được quả sầu riêng đạt chuẩn xuất khẩu."
  b) Tính xác suất thực nghiệm của biến cố $B$: "Chọn được quả sầu riêng bị lỗi/hỏng."
  c) Nếu trang trại đó thu hoạch 10.000 quả sầu riêng, hãy dự đoán có khoảng bao nhiêu quả bị lỗi/hỏng?

**c. Sản phẩm:**
- **Lời giải Bài tập 1:**
  - Tổng số lần kiểm tra $n = 500$.
  - a) Xác suất thực nghiệm của biến cố $A$: $P_{tn}(A) = \frac{380}{500} = 0.76 = 76\%$.
  - b) Xác suất thực nghiệm của biến cố $B$: $P_{tn}(B) = \frac{15}{500} = 0.03 = 3\%$.
  - c) Dự đoán số quả bị lỗi/hỏng trong 10.000 quả: $10.000 \times 3\% = 300$ (quả).

**d. Tổ chức thực hiện (4 bước):**

- **Bước 1: Giao nhiệm vụ**
  - GV giao bài tập sầu riêng Ri6 cho HS giải cá nhân vào vở.

- **Bước 2: Thực hiện nhiệm vụ**
  - HS suy nghĩ, bấm máy tính cầm tay và viết lời giải.

- **Bước 3: Báo cáo, thảo luận**
  - GV mời 1 HS đứng tại chỗ nêu lời giải câu a và b.
  - GV mời 1 HS khác giải thích cách dự đoán ở câu c.

- **Bước 4: Kết luận, nhận định**
  - GV nhận xét bài làm của HS, nhấn mạnh ứng dụng thực tế quan trọng của xác suất thực nghiệm trong công tác **dự báo và quản lý chất lượng sản phẩm**.

---

### HOẠT ĐỘNG 4: VẬN DỤNG (5 phút)

**a. Mục tiêu:**
- Hướng dẫn học sinh tự thiết kế một bài toán thống kê thực nghiệm tại nhà (ví dụ: thống kê màu sắc xe máy đi qua cổng trường trong 15 phút hoặc tỉ lệ sút phạt thành công của đội bóng lớp).

**b. Nội dung:**
- Nhiệm vụ học tập ở nhà: Đứng tại ban công hoặc cổng nhà trong 10 phút, đếm tổng số ô tô đi qua ($n$) và số ô tô màu trắng xuất hiện ($k$). Tính xác suất thực nghiệm của biến cố "Ô tô đi qua có màu trắng".

**c. Sản phẩm:**
- Phiếu thu thập dữ liệu và kết quả tính xác suất thực nghiệm cá nhân nộp vào tiết học sau.

**d. Tổ chức thực hiện (4 bước):**

- **Bước 1: Giao nhiệm vụ**
  - GV dặn dò nhiệm vụ tự học ở nhà.
  - **Prompt AI gợi ý cho HS thực hiện bài tập ở nhà (Tiếng Việt):**
    > *"Hãy viết prompt nhờ ChatGPT gợi ý 3 đề tài khảo sát thực nghiệm xác suất thực tế đơn giản mà học sinh lớp 7 có thể tự thực hiện tại gia đình."*

- **Bước 2: Thực hiện nhiệm vụ**
  - HS ghi chép nhiệm vụ vào vở bài tập.

- **Bước 3: Báo cáo, thảo luận**
  - HS nộp phiếu khảo sát thực nghiệm vào buổi học sau.

- **Bước 4: Kết luận, nhận định**
  - GV tổng kết toàn bộ kiến thức Bài 31 và hướng dẫn HS chuẩn bị cho tiết Ôn tập Chương 8.

---

## IV. TIÊU CHÍ ĐÁNH GIÁ (RUBRIC)

| Tiêu chí đánh giá | Mức 1: Nhận biết (1-4 điểm) | Mức 2: Thông hiểu (5-6 điểm) | Mức 3: Vận dụng (7-8 điểm) | Mức 4: Vận dụng cao (9-10 điểm) |
| :--- | :--- | :--- | :--- | :--- |
| **1. Công thức xác suất thực nghiệm** | Nêu được khái niệm tỉ số thực nghiệm nhưng viết chưa đúng công thức. | Phát biểu chính xác công thức $P_{tn} = \frac{k}{n}$ và xác định đúng $k, n$ trong bảng đơn giản. | Tính đúng xác suất thực nghiệm cho các biến cố khác nhau từ bảng thống kê thực tế. | Phân tích sâu sắc sự khác biệt bản chất giữa xác suất thực nghiệm và xác suất lý thuyết. |
| **2. Xu hướng hội tụ của xác suất** | Biết rằng số lần thử càng nhiều thì kết quả càng chính xác. | Hiểu rằng khi $n$ rất lớn, xác suất thực nghiệm xấp xỉ xác suất lý thuyết. | Phân tích được dữ liệu mô phỏng $10.000$ lần tung đồng xu/gieo xúc xắc để chứng minh định luật số lớn. | Giải thích được các biến động ngẫu nhiên khi $n$ nhỏ và tính ổn định khi $n$ lớn bằng luận điểm toán học. |
| **3. Dự báo thực tế từ thực nghiệm** | Đọc được các con số trong bảng tần số cho trước. | Tính được tỉ lệ phần trăm thực nghiệm của các loại sản phẩm trong mẫu thử. | Vận dụng xác suất thực nghiệm để dự đoán số lượng sản phẩm lỗi/đạt chuẩn trong tổng thể lớn. | Thiết kế một quy trình khảo sát kiểm định chất lượng sản phẩm nông nghiệp/công nghiệp hoàn chỉnh. |
| **4. Ứng dụng Công nghệ & NLS** | Xem giáo viên chạy chương trình Python mô phỏng. | Biết nhập số liệu cá nhân vào bảng tính Google Sheets của lớp. | Sử dụng tốt Prompt AI để tìm hiểu lịch sử toán học và kiểm tra kết quả bài tập. | Tự thao tác chỉnh sửa tham số $n$ trong mã Python trên Google Colab để quan sát đồ thị hội tụ. |
| **5. Phẩm chất & Kĩ năng nhóm** | Tham gia thực hành tung đồng xu khi giáo viên yêu cầu. | Ghi chép dữ liệu thí nghiệm cá nhân trung thực, không bịa số liệu. | Hợp tác tích cực với nhóm để gộp dữ liệu thí nghiệm chính xác. | Hướng dẫn các thành viên trong nhóm thực hiện thí nghiệm đúng chuẩn khoa học và tổng hợp số liệu khoa học. |

---
*Ghi chú: Kế hoạch bài dạy này được xây dựng chuẩn theo Công văn 5512/BGDĐT-GDTrH, tích hợp Năng lực số và Trí tuệ nhân tạo (AI) phù hợp với Chương trình GDPT 2018 môn Toán Lớp 7.*

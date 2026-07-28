# KẾ HOẠCH BÀI DẠY (GIÁO ÁN)
## BÀI 30: XÁC SUẤT CỦA BIẾN CỐ TRONG TRÒ CHƠI MAY RỦI
**Môn học: Toán; Lớp: 7 (Bộ sách Kết nối tri thức với cuộc sống)**
**Thời lượng thực hiện: 2 tiết**

---

## I. MỤC TIÊU

### 1. Năng lực Toán học
- **Tư duy và lập luận toán học:** Nhận biết được khái niệm các kết quả có cùng khả năng xảy ra (đồng khả năng) trong các trò chơi may rủi đơn giản. Nhận biết và giải thích được ý nghĩa số đo mức độ khả năng xảy ra của biến cố thông qua tỉ số xác suất.
- **Mô hình hóa toán học:** Biểu diễn các trò chơi may rủi thực tế (như rút thẻ trúng thưởng siêu thị, quay bánh xe trúng thưởng, bốc thăm may mắn) thành mô hình toán học tính xác suất lý thuyết.
- **Giải quyết vấn đề toán học:** Tính được xác suất của biến cố trong một số trò chơi may rủi đơn giản bằng công thức $P(A) = \frac{n(A)}{N}$, trong đó các kết quả có thể của phép thử là đồng khả năng.
- **Giao tiếp toán học:** Trình bày chính xác, mạch lạc các bước tính xác suất của biến cố, đọc và giải thích ý nghĩa giá trị xác suất thu được (ví dụ: $P(A) = 0.5$ nghĩa là khả năng xảy ra là $50\%$).
- **Sử dụng công cụ và phương tiện toán học:** Biết sử dụng máy tính cầm tay, công cụ mô phỏng Python/GeoGebra và chatbot AI (ChatGPT/Gemini) để kiểm chứng xác suất lý thuyết trong trò chơi ngẫu nhiên.

### 2. Năng lực chung và Năng lực số (NLS)
- **Năng lực tự chủ và tự học:** Tự giác làm việc cá nhân, chủ động tìm hiểu công thức tính xác suất trước bài học qua video giảng dạy trực tuyến hoặc tài liệu SGK.
- **Năng lực giao tiếp và hợp tác:** Thảo luận tích cực trong nhóm để xác định đúng số kết quả có thể xảy ra và số kết quả thuận lợi cho biến cố.
- **Năng lực số (NLS):**
  - Khai thác AI ChatGPT/Gemini: Sử dụng prompt để yêu cầu AI giải thích công thức xác suất đồng khả năng và tạo các bài toán trắc nghiệm thực tế.
  - Sử dụng GeoGebra Probability Calculator: Minh họa phân bố xác suất đồng khả năng khi gieo xúc xắc hoặc rút thẻ.
  - Sử dụng Python mô phỏng: Viết đoạn script Python đếm số kết quả thuận lợi $n(A)$ và tính tỉ số xác suất lý thuyết $P(A) = \frac{n(A)}{N}$.
  - Quizizz/Kahoot: Thực hiện bài đánh giá trắc nghiệm tương tác về tính xác suất trò chơi may rủi.

### 3. Phẩm chất
- **Chăm chỉ:** Tích cực luyện tập, kiên trì phân tích và tính toán xác suất của các bài toán trò chơi may rủi.
- **Trung thực:** Tính toán công bằng, không lừa dối trong việc tính số kết quả thuận lợi của trò chơi.
- **Trách nhiệm:** Ý thức được tác hại của các trò chơi cờ bạc ăn tiền và biết sử dụng kiến thức xác suất để đưa ra quyết định thông minh trong đời sống.

---

## II. THIẾT BỊ DẠY HỌC VÀ HỌC LIỆU

### 1. Đối với giáo viên
- Máy tính cá nhân kết nối Internet, máy chiếu hoặc màn hình tương tác.
- SGK Toán 7 Kết nối tri thức với cuộc sống, Sách giáo viên, Giáo án điện tử.
- Dụng cụ trực quan: Bánh xe quay số (8 phần bằng nhau), 1 bộ bài tây 52 lá, 20 tấm thẻ đánh số từ 1 đến 20, con xúc xắc cân đối.
- Mã QR các ứng dụng học tập trực tuyến (Quizizz, GeoGebra, Python Colab).

### 2. Đối với học sinh
- SGK Toán 7, vở ghi bài, máy tính cầm tay (Fx-580VN X / Fx-880BTG).
- Thước kẻ, phiếu học tập cá nhân và nhóm.
- Thiết bị di động hoặc máy tính bảng kết nối Wifi (dùng cho hoạt động tích hợp NLS).

### 3. Công cụ AI và Phần mềm hỗ trợ (Tích hợp NLS)
- **AI Tools:** ChatGPT, Google Gemini.
- **GeoGebra Classic / Suite:** Tính toán xác suất (https://www.geogebra.org/classic#probability).
- **Python Code Google Colab:** Script tính xác suất lý thuyết và kiểm chứng ngẫu nhiên.
- **Quizizz:** Hệ thống câu hỏi trắc nghiệm đánh giá nhanh khả năng tính xác suất.

---

## III. TIẾN TRÌNH DẠY HỌC

### HOẠT ĐỘNG 1: KHỞI ĐỘNG (XÁC ĐỊNH VẤN ĐỀ) (15 phút)

**a. Mục tiêu:**
- Tạo tình huống có vấn đề thực tế: So sánh cơ hội thắng giữa các người chơi trong một chương trình bốc thăm trúng thưởng tại siêu thị Co.opmart Việt Nam.
- Học sinh nảy sinh nhu cầu đo lường "khả năng xảy ra" của một biến cố bằng một con số cụ thể.

**b. Nội dung:**
- **Tình huống:** Nhân dịp Khuyến mãi tri ân khách hàng, siêu thị Co.opmart tổ chức rút thăm may mắn. Trong thùng phiếu có 100 phiếu ghi số từ 1 đến 100 có kích thước và khối lượng hoàn toàn giống nhau.
  - Bạn An có phiếu mang số 25 (1 phiếu).
  - Bạn Bình mua nhiều hàng nên có 5 phiếu mang các số 1, 2, 3, 4, 5.
  - Bạn Cường có 10 phiếu mang các số từ 11 đến 20.
  Ai có khả năng trúng thưởng cao nhất và làm thế nào để dùng toán học đo lường chính xác cơ hội thắng của mỗi bạn?

**c. Sản phẩm:**
- HS nhận xét: Khả năng rút trúng 1 phiếu bất kỳ là như nhau (đồng khả năng).
- Bạn Cường có 10 phiếu nên cơ hội trúng cao nhất, bạn An có 1 phiếu nên cơ hội thấp nhất.
- Đề xuất thước đo: Tỉ số giữa số phiếu sở hữu và tổng số 100 phiếu.

**d. Tổ chức thực hiện (4 bước):**

- **Bước 1: Giao nhiệm vụ**
  - GV chiếu hình ảnh thùng phiếu bốc thăm siêu thị Co.opmart.
  - Đặt câu hỏi thảo luận cho các nhóm.
  - **Prompt AI mẫu cụ thể cho HS (Tiếng Việt):**
    > *"Hãy đóng vai một chuyên gia phân tích dữ liệu, giải thích ngắn gọn bằng ví dụ thực tế vì sao người mua 10 vé số lại có cơ hội trúng gấp 10 lần người mua 1 vé số trong một hòm phiếu 100 vé đồng khả năng."*

- **Bước 2: Thực hiện nhiệm vụ**
  - HS thảo luận nhóm trong 3 phút, ghi kết quả tỉ số của từng bạn ra nháp:
    - Cơ hội bạn An: $\frac{1}{100} = 0.01 = 1\%$.
    - Cơ hội bạn Bình: $\frac{5}{100} = 0.05 = 5\%$.
    - Cơ hội bạn Cường: $\frac{10}{100} = 0.10 = 10\%$.
  - 1 học sinh nhập prompt vào ChatGPT để kiểm tra kết quả phân tích của nhóm.

- **Bước 3: Báo cáo, thảo luận**
  - GV gọi đại diện Nhóm 2 đứng lên báo cáo kết quả tỉ số cơ hội của An, Bình, Cường.
  - GV yêu cầu lớp nhận xét về nhận định "khả năng xuất hiện mỗi lá phiếu là như nhau".

- **Bước 4: Kết luận, nhận định**
  - GV chốt: Giá trị tỉ số $\frac{1}{100}, \frac{5}{100}, \frac{10}{100}$ chính là **Xác suất** của biến cố trúng thưởng của từng bạn. Để tính được xác suất này một cách tổng quát, chúng ta cùng nghiên cứu Bài 30.

---

### HOẠT ĐỘNG 2: HÌNH THÀNH KIẾN THỨC MỚI (40 phút)

#### TIỂU HOẠT ĐỘNG 2.1: Các kết quả đồng khả năng (15 phút)

**a. Mục tiêu:**
- Hiểu thế nào là các kết quả có cùng khả năng xảy ra (đồng khả năng).
- Nhận biết các điều kiện để phép thử tạo ra các kết quả đồng khả năng (đồng xu cân đối, xúc xắc đồng chất, các tấm thẻ có kích thước giống hệt nhau).

**b. Nội dung:**
- Phân tích tính đồng khả năng trong các trò chơi:
  - Tung 1 đồng xu cân đối và đồng chất: Mặt $S$ và mặt $N$ có khả năng xuất hiện như nhau.
  - Gieo 1 con xúc xắc 6 mặt cân đối: Các mặt $1, 2, 3, 4, 5, 6$ có khả năng xuất hiện như nhau.
  - Rút ngẫu nhiên 1 tấm thẻ từ hộp gồm $N$ tấm thẻ giống hệt nhau: Mỗi tấm thẻ đều có khả năng được rút như nhau.

**c. Sản phẩm:**
- HS ghi nhớ khái niệm kết quả đồng khả năng.
- Phân biệt được trò chơi cân bằng (đồng khả năng) và trò chơi không cân bằng (ví dụ: con quay bị lệch trọng tâm, đồng xu bị biến dạng).

**d. Tổ chức thực hiện (4 bước):**

- **Bước 1: Giao nhiệm vụ**
  - GV cho HS quan sát 2 trường hợp:
    - Trường hợp A: Gieo một con xúc xắc cân đối.
    - Trường hợp B: Gieo một con xúc xắc bị gọt dũa làm mặt 6 nặng hơn các mặt khác.
  - Yêu cầu HS nhận xét khả năng xuất hiện của các mặt ở mỗi trường hợp.

- **Bước 2: Thực hiện nhiệm vụ**
  - HS làm việc cá nhân, suy nghĩ và trao đổi với bạn bên cạnh.

- **Bước 3: Báo cáo, thảo luận**
  - HS trả lời: Trường hợp A các mặt xuất hiện với khả năng như nhau (đồng khả năng); Trường hợp B mặt 6 có khả năng xuất hiện cao hơn các mặt khác (không đồng khả năng).

- **Bước 4: Kết luận, nhận định**
  - GV nhấn mạnh: Trong toàn bộ chương trình Toán 7, chúng ta xét các trò chơi may rủi mà các kết quả có thể của phép thử đều là **đồng khả năng**.

---

#### TIỂU HOẠT ĐỘNG 2.2: Công thức tính xác suất của biến cố (25 phút)

**a. Mục tiêu:**
- Thiết lập công thức tính xác suất của biến cố $A$ trong trò chơi may rủi đồng khả năng:
  $$P(A) = \frac{n(A)}{N}$$
- Biết xác định $N$ (tổng số kết quả có thể xảy ra) và $n(A)$ (số kết quả thuận lợi cho biến cố $A$).
- Sử dụng đoạn mã Python để tính xác suất và hiển thị kết quả tự động.

**b. Nội dung:**
- **Định lý toán học chính xác:**
  Giả sử một phép thử ngẫu nhiên có $N$ kết quả có thể xảy ra và các kết quả này là đồng khả năng. Nếu biến cố $A$ có $n(A)$ kết quả thuận lợi, thì xác suất của biến cố $A$, kí hiệu là $P(A)$, được tính bởi công thức:
  $$P(A) = \frac{n(A)}{N} = \frac{\text{Số kết quả thuận lợi cho biến cố } A}{\text{Tổng số kết quả có thể xảy ra}}$$
- **Tính chất xác suất:**
  - $0 \le P(A) \le 1$.
  - Nếu $A$ là biến cố không thể $\implies P(A) = 0$.
  - Nếu $A$ là biến cố chắc chắn $\implies P(A) = 1$.
- **Minh họa bằng đoạn mã Python (NLS):**

```python
# Đoạn mã Python tính xác suất lý thuyết trong trò chơi gieo xúc xắc 6 mặt
def calculate_probability():
    # Tập hợp các kết quả có thể (N = 6)
    sample_space = [1, 2, 3, 4, 5, 6]
    N = len(sample_space)
    
    # Biến cố A: "Xuất hiện mặt có số chấm là số chẵn"
    favorable_outcomes_A = [x for x in sample_space if x % 2 == 0] # {2, 4, 6}
    n_A = len(favorable_outcomes_A)
    
    P_A = n_A / N
    print(f"Tổng số kết quả N = {N}")
    print(f"Các kết quả thuận lợi cho A: {favorable_outcomes_A} (n(A) = {n_A})")
    print(f"Xác suất của biến cố A: P(A) = {n_A}/{N} = {P_A:.4f} (hoặc {P_A*100:.1f}%)")

calculate_probability()
```

**c. Sản phẩm:**
- HS phát biểu đúng công thức $P(A) = \frac{n(A)}{N}$ và các tính chất $0 \le P(A) \le 1$.
- Áp dụng công thức tính đúng xác suất biến cố "Mặt xuất hiện số chẵn" khi gieo xúc xắc là $P(A) = \frac{3}{6} = 0.5$.

**d. Tổ chức thực hiện (4 bước):**

- **Bước 1: Giao nhiệm vụ**
  - GV trình bày công thức $P(A) = \frac{n(A)}{N}$.
  - Yêu cầu HS hoàn thành Ví dụ 1: Một hộp đựng 20 tấm thẻ giống hệt nhau đánh số từ 1 đến 20. Rút ngẫu nhiên 1 tấm thẻ. Tính xác suất của các biến cố:
    - $A$: "Số ghi trên tấm thẻ rút được là số chia hết cho 5."
    - $B$: "Số ghi trên tấm thẻ rút được là số nguyên tố."
  - **Prompt AI hỗ trợ GV (Tiếng Việt):**
    > *"Tạo câu hỏi trắc nghiệm kèm giải thích chi tiết về tính xác suất rút thẻ chia hết cho 3 từ hộp 30 thẻ số cho học sinh lớp 7."*

- **Bước 2: Thực hiện nhiệm vụ**
  - HS làm việc cá nhân giải Ví dụ 1 vào vở.
  - Các số chia hết cho 5 trong khoảng 1..20: $\{5, 10, 15, 20\} \implies n(A) = 4$.
  - Các số nguyên tố trong khoảng 1..20: $\{2, 3, 5, 7, 11, 13, 17, 19\} \implies n(B) = 8$.

- **Bước 3: Báo cáo, thảo luận**
  - HS 1 trình bày bài làm biến cố $A$: $P(A) = \frac{4}{20} = \frac{1}{5} = 0.2$.
  - HS 2 trình bày bài làm biến cố $B$: $P(B) = \frac{8}{20} = \frac{2}{5} = 0.4$.
  - GV chiếu màn hình Python Colab xác nhận kết quả khớp với tính toán thủ công của HS.

- **Bước 4: Kết luận, nhận định**
  - GV nhận xét: Để tính xác suất chính xác, chìa khóa quan trọng nhất là phải liệt kê đầy đủ, không bỏ sót và không trùng lặp các kết quả thuận lợi $n(A)$.

---

### HOẠT ĐỘNG 3: LUYỆN TẬP (20 phút)

**a. Mục tiêu:**
- Luyện tập kĩ năng xác định $N$ và $n(A)$ để tính xác suất biến cố trong nhiều tình huống trò chơi ngẫu nhiên đa dạng.
- Đánh giá kiến thức tức thời thông qua phần mềm Quizizz.

**b. Nội dung:**
- **Bài tập Luyện tập 1 (Bài toán Vòng quay may mắn):**
  Một bánh xe hình tròn được chia thành 8 hình quạt bằng nhau, đánh số từ 1 đến 8. Quay bánh xe 1 lần. Tính xác suất của biến cố:
  - $E$: "Mũi tên chỉ vào ô ghi số chẵn."
  - $F$: "Mũi tên chỉ vào ô ghi số lớn hơn 5."
  - $G$: "Mũi tên chỉ vào ô ghi số là bội của 3."
- **Bài tập Luyện tập 2 (Quizizz tương tác):** 5 câu hỏi trắc nghiệm tính xác suất chọn bi, rút thẻ, chọn ngẫu nhiên học sinh trong lớp.

**c. Sản phẩm:**
- **Lời giải Luyện tập 1:**
  - Tổng số kết quả có thể xảy ra: $N = 8$.
  - $E = \{2, 4, 6, 8\} \implies n(E) = 4 \implies P(E) = \frac{4}{8} = 0.5$.
  - $F = \{6, 7, 8\} \implies n(F) = 3 \implies P(F) = \frac{3}{8} = 0.375$.
  - $G = \{3, 6\} \implies n(G) = 2 \implies P(G) = \frac{2}{8} = 0.25$.
- Báo cáo kết quả Quizizz hiển thị top 3 học sinh xuất sắc.

**d. Tổ chức thực hiện (4 bước):**

- **Bước 1: Giao nhiệm vụ**
  - GV giao Bài tập 1 cho học sinh làm vào vở.
  - GV gửi đường link Quizizz cho cả lớp qua nhóm học tập hoặc quét mã QR trên màn hình.

- **Bước 2: Thực hiện nhiệm vụ**
  - HS độc lập giải Bài tập 1 trong 5 phút.
  - HS truy cập Quizizz làm bài trong 7 phút.

- **Bước 3: Báo cáo, thảo luận**
  - GV gọi 1 HS lên bảng trình bày Luyện tập 1.
  - GV phân tích kết quả thống kê các câu sai nhiều nhất trên Quizizz.

- **Bước 4: Kết luận, nhận định**
  - GV tổng kết các lỗi hay gặp: Tính thiếu trường hợp thuận lợi, nhầm lẫn tổng số kết quả $N$, quên rút gọn phân số xác suất.

---

### HOẠT ĐỘNG 4: VẬN DỤNG (15 phút)

**a. Mục tiêu:**
- Vận dụng xác suất để phân tích tính công bằng của một trò chơi dân gian Việt Nam (như trò chơi gieo 2 đồng xu hoặc chọn thẻ mang số).
- Tạo lập thái độ đúng đắn, tỉnh táo trước các hình thức cờ bạc biến tướng hoặc trò chơi may rủi không an toàn.

**b. Nội dung:**
- **Tình huống Vận dụng:** Đề xuất trò chơi "Tung 2 đồng xu 2.000đ cân đối".
  - Người chơi A thắng nếu 2 đồng xu cùng xuất hiện mặt Sấp.
  - Người chơi B thắng nếu 2 đồng xu xuất hiện 1 Sấp và 1 Ngửa.
  - Bạn Nam cho rằng trò chơi này hoàn toàn công bằng vì có 2 người chơi. Em hãy tính xác suất thắng của mỗi người chơi để khẳng định ý kiến của Nam đúng hay sai?

**c. Sản phẩm:**
- Bài phân tích của học sinh:
  - Tập hợp tất cả các kết quả có thể xảy ra khi tung 2 đồng xu: $\Omega = \{(S,S); (S,N); (N,S); (N,N)\} \implies N = 4$.
  - Biến cố A thắng (cùng Sấp): $\{(S,S)\} \implies n(A) = 1 \implies P(A) = \frac{1}{4} = 0.25$.
  - Biến cố B thắng (1 Sấp 1 Ngửa): $\{(S,N); (N,S)\} \implies n(B) = 2 \implies P(B) = \frac{2}{4} = 0.5$.
  - Vì $P(B) = 0.5 > P(A) = 0.25$, nên trò chơi này **KHÔNG CÔNG BẰNG** (Người B có cơ hội thắng gấp đôi người A). Ý kiến của Nam là sai!

**d. Tổ chức thực hiện (4 bước):**

- **Bước 1: Giao nhiệm vụ**
  - GV đưa ra tình huống vận dụng tung 2 đồng xu.
  - Yêu cầu các nhóm thảo luận và kiểm chứng kết quả bằng việc chạy phần mềm GeoGebra hoặc mã Python.
  - **Prompt AI dành cho HS về nhà:**
    > *"Hãy viết đoạn văn ngắn 150 từ giải thích vì sao trong các trò chơi sòng bạc hoặc cờ bạc trên mạng, nhà cái luôn nắm giữ xác suất thắng cao hơn người chơi dựa trên lý thuyết xác suất đã học ở Bài 30."*

- **Bước 2: Thực hiện nhiệm vụ**
  - Nhóm HS thảo luận, liệt kê không gian mẫu $\Omega$ gồm 4 phần tử.
  - HS tính toán xác suất $P(A)$ và $P(B)$.

- **Bước 3: Báo cáo, thảo luận**
  - Đại diện Nhóm 4 trình bày bài giải phân tích tính không công bằng của trò chơi.

- **Bước 4: Kết luận, nhận định**
  - GV chốt bài: Xác suất giúp chúng ta đưa ra nhìn nhận khách quan, khoa học về sự công bằng của các trò chơi. GV giáo dục tư tưởng phòng chống tệ nạn cờ bạc trong học đường.

---

## IV. TIÊU CHÍ ĐÁNH GIÁ (RUBRIC)

| Tiêu chí đánh giá | Mức 1: Nhận biết (1-4 điểm) | Mức 2: Thông hiểu (5-6 điểm) | Mức 3: Vận dụng (7-8 điểm) | Mức 4: Vận dụng cao (9-10 điểm) |
| :--- | :--- | :--- | :--- | :--- |
| **1. Khái niệm kết quả đồng khả năng** | Nhận biết được các kết quả đồng khả năng trong trò chơi tung 1 đồng xu. | Nêu được điều kiện để các kết quả là đồng khả năng trong các trò chơi gieo xúc xắc, rút thẻ. | Phân tích được một trò chơi thực tế có bảo đảm tính đồng khả năng hay không. | Đề xuất giải pháp cải tiến dụng cụ trò chơi để đạt tính đồng khả năng tuyệt đối. |
| **2. Áp dụng công thức tính xác suất** | Ghi nhớ công thức $P(A) = \frac{n(A)}{N}$ nhưng còn lúng túng khi xác định $N$. | Xác định chính xác $N$ và $n(A)$ trong bài toán đơn giản (gieo 1 xúc xắc, chọn 1 tấm thẻ). | Tính đúng xác suất biến cố trong các bài toán phức hợp (tung 2 đồng xu, rút bài, quay bánh xe). | Giải quyết thành thạo bài toán tính xác suất biến cố với số kết quả $N$ lớn bằng phương pháp đếm logic. |
| **3. Giải quyết bài toán thực tế** | Nêu được nhận xét cảm tính về cơ hội thắng thua trong trò chơi may rủi. | Dùng tỉ số xác suất để so sánh cơ hội thắng giữa 2 người chơi đơn giản. | Phân tích chính xác tính công bằng của trò chơi ngẫu nhiên dựa trên xác suất lý thuyết. | Thiết kế một trò chơi may rủi đảm bảo tính công bằng tuyệt đối cho tất cả người tham gia. |
| **4. Ứng dụng Công nghệ & NLS** | Mở được phần mềm và tham gia Quizizz theo hướng dẫn. | Sử dụng được Prompt AI mẫu để kiểm tra kết quả bài tập xác suất. | Tự thao tác trên GeoGebra Probability Calculator để kiểm tra phân bố xác suất. | Tự chỉnh sửa mã Python mô phỏng phép thử $10.000$ lần để so sánh với xác suất lý thuyết. |
| **5. Phẩm chất & Kĩ năng nhóm** | Tham gia hoạt động nhóm khi được nhắc nhở. | Lắng nghe ý kiến đồng đội, đóng góp bài giải cá nhân vào nhóm. | Tích cực trao đổi, phản biện kết quả tính toán của nhóm bạn. | Lãnh đạo nhóm thảo luận logic, phân công nhiệm vụ phù hợp và giải thích rõ ràng cho các bạn. |

---
*Ghi chú: Kế hoạch bài dạy này được xây dựng chuẩn theo Công văn 5512/BGDĐT-GDTrH, tích hợp Năng lực số và Trí tuệ nhân tạo (AI) phù hợp với Chương trình GDPT 2018 môn Toán Lớp 7.*

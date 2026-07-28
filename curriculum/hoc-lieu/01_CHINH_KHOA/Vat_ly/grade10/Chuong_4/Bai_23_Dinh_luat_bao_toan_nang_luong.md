# KẾ HOẠCH BÀI DẠY BÀI 23: ĐỊNH LUẬT BẢO TOÀN CƠ NĂNG VÀ NĂNG LƯỢNG
(Dành cho học sinh lớp 10 - Chương trình GDPT 2018)
Thời lượng dự kiến: 2 tiết (90 phút)

## I. MỤC TIÊU
### 1. Năng lực Vật lí
**a. Nhận thức vật lí**
- Phát biểu được định nghĩa và thiết lập được phương trình định luật bảo toàn cơ năng trong trường hợp vật chuyển động chỉ dưới tác dụng của trọng lực (hoặc lực đàn hồi).
- Phát biểu được định luật bảo toàn và chuyển hóa năng lượng tổng quát.
- Nhận biết rõ ràng điều kiện lí tưởng để áp dụng định luật bảo toàn cơ năng (bỏ qua mọi lực ma sát, lực cản không khí).
- Hiểu và chứng minh được khi hệ có lực ma sát sinh công, độ biến thiên cơ năng của hệ bằng đúng công của lực ma sát (công của lực không thế).
- Thiết lập hệ thức toán học liên hệ giữa sự hao hụt cơ năng và phần năng lượng tỏa ra môi trường dưới dạng nhiệt.

**b. Tìm hiểu thế giới tự nhiên dưới góc độ vật lí**
- Khảo sát sự chuyển hóa qua lại liên tục giữa động năng và thế năng trong các chuyển động thực tế diễn ra xung quanh ta (sự dao động của con lắc đơn, sự rơi và nảy của quả bóng cao su trên sàn cứng).
- Quan sát thí nghiệm, sử dụng phần mềm phân tích video chuyển động (Tracker Video Analysis) để thu thập dữ liệu tọa độ thời gian, từ đó kiểm chứng (nghiệm lại) tính đúng đắn của định luật bảo toàn cơ năng bằng thực nghiệm.

**c. Vận dụng kiến thức, kĩ năng đã học**
- Giải các bài toán cơ học động lực học phức tạp (con lắc đơn, chuyển động trên đường cong) bằng phương pháp năng lượng (phương pháp bảo toàn cơ năng). HS nhận ra sự ưu việt, nhanh chóng và ngắn gọn của phương pháp này so với việc chiếu lực theo định luật II Newton.
- Lập trình mô phỏng sự rơi tự do và vẽ đồ thị biểu diễn sự bảo toàn tổng năng lượng bằng ngôn ngữ lập trình Python.
- Đề xuất các giải pháp kĩ thuật nhằm giảm thiểu sự tiêu hao năng lượng (giảm lực cản) trong các hệ thống cơ học, động cơ thực tế.

### 2. Năng lực số (Digital Competencies - NLS)
- **Năng lực phân tích dữ liệu số:** Cài đặt, sử dụng phần mềm Tracker để bóc tách, trích xuất dữ liệu từ video chuyển động thực của vật, xuất ra bảng tính Excel và vẽ đồ thị năng lượng.
- **Năng lực giao tiếp và hợp tác trên môi trường số:** Thảo luận, làm việc nhóm xuyên suốt trên không gian mạng (Google Workspace, Microsoft Teams) để soạn thảo báo cáo thí nghiệm chung.
- **Năng lực sáng tạo nội dung số và Tích hợp AI:** 
    - Viết đoạn mã kịch bản Python để mô hình hóa và vẽ biểu đồ động.
    - Sử dụng ChatGPT/Gemini để hệ thống hóa kiến thức nhanh chóng và tìm kiếm các ứng dụng thực tiễn của định luật bảo toàn trong kĩ thuật hàng không, vũ trụ.

### 3. Phẩm chất
- **Chăm chỉ:** Kiên nhẫn, tỉ mỉ trong việc xử lí một lượng lớn số liệu thí nghiệm từ phần mềm Tracker (xử lí khung hình Frame-by-frame).
- **Trung thực:** Tôn trọng sự thật khách quan. Không ngụy tạo, bóp méo số liệu thí nghiệm khi kết quả không bảo toàn cơ năng tuyệt đối (do tồn tại lực cản thực tế trong không khí).
- **Trách nhiệm:** Tuân thủ tuyệt đối quy định an toàn khi tiến hành các thí nghiệm vật lí tại phòng Lab. Có ý thức tiết kiệm tài nguyên năng lượng.

---

## II. THIẾT BỊ DẠY HỌC VÀ HỌC LIỆU
### 1. Thiết bị dạy học
**a. Đối với Giáo viên (GV):**
- Máy tính xách tay (Laptop) cài sẵn phần mềm Tracker Video Analysis bản mới nhất.
- Máy chiếu, cáp nối HDMI, loa ngoài để chiếu video.
- Một video quay chậm (Slow-motion) chuẩn bị sẵn ghi hình một quả bóng billiard hoặc bóng golf rơi tự do (yêu cầu trong video phải có đặt sẵn một cây thước 1 mét để làm vật chuẩn tỉ lệ và khung hình cần cố định rõ nét).
- Bộ thí nghiệm con lắc đơn chuẩn, hoặc quả bóng cao su có độ nảy cao.

**b. Đối với Học sinh (HS):**
- Điện thoại thông minh (smartphone) có camera chất lượng cao hỗ trợ quay phim slow-motion.
- Giấy nháp khổ A4, bút, máy tính khoa học Casio/Vinacal.
- Tài khoản Google (Gmail) cá nhân để truy cập Google Colab viết mã Python.

### 2. AI Tools và Công nghệ tích hợp
- **AI Tools (ChatGPT / Claude / Gemini / Perplexity):**
    - *Prompt gợi ý cho GV (chuẩn bị giáo án):* "Hãy soạn cho tôi một kịch bản tranh biện ngắn (Debate) dài khoảng 300 chữ, dành cho đối tượng học sinh lớp 10, với chủ đề hấp dẫn: 'Nếu năng lượng luôn luôn được bảo toàn theo định luật Vật lí, vậy tại sao thế giới lại đang đối mặt với khủng hoảng thiếu hụt năng lượng?'"
    - *Prompt gợi ý cho HS:* "Xin chào AI, hãy giúp tôi tóm tắt định luật bảo toàn cơ năng và định luật bảo toàn năng lượng tổng quát dưới dạng một bài vè hoặc bài thơ 4 chữ vui nhộn, dễ đọc, dễ nhớ để chuẩn bị cho bài kiểm tra."
- **Phần mềm phân tích Vật lí - Tracker Video Analysis:** 
    - Công cụ phân tích quỹ đạo điểm ảnh (Point Mass Tracking) cực kì mạnh mẽ mã nguồn mở. Cung cấp khả năng xuất dữ liệu $(t, x, y, v_x, v_y)$ để tính ra Động năng và Thế năng.
    - *Link tải:* [https://physlets.org/tracker/](https://physlets.org/tracker/)
- **Lập trình trực quan Python:** Code bằng thư viện Matplotlib để vẽ hai đường cong đồ thị (thế năng giảm dần dạng parabol, động năng tăng dần dạng parabol úp) và đường cơ năng là một đường nằm ngang tuyệt đối (hằng số).

---

## III. TIẾN TRÌNH DẠY HỌC

### HOẠT ĐỘNG 1: KHỞI ĐỘNG (Xác định vấn đề học tập) - 10 phút
**a) Mục tiêu:**
- Tạo ra một "xung đột nhận thức" (Cognitive conflict): Khẳng định rằng năng lượng được bảo toàn, nhưng thực tế quả bóng ném xuống đất khi nảy lên không bao giờ đạt được lại độ cao ban đầu. Vậy năng lượng hao hụt đã biến đi đâu mất?

**b) Nội dung:**
- Tiến hành thực nghiệm trực tiếp ngay tại lớp: Thả một quả bóng cao su đàn hồi từ độ cao $h=1m$ xuống nền gạch cứng.
- Đặt câu hỏi động não thảo luận nhanh đầu giờ.

**c) Sản phẩm:**
- Suy đoán, giả thuyết của học sinh về nguyên nhân gây ra sự hao hụt năng lượng cơ học (có thể biến thành nhiệt, âm thanh, hay năng lượng biến dạng...).

**d) Tổ chức thực hiện:**
- **Chuyển giao nhiệm vụ:** 
    - GV mời 1 HS xung phong lên bục giảng. Đưa cho HS quả bóng và 1 cây thước gỗ mét.
    - Yêu cầu HS cầm quả bóng ở độ cao chính xác $h=1m$ (so với mặt bàn giáo viên) và thả rơi không vận tốc đầu.
    - Yêu cầu toàn bộ học sinh bên dưới tập trung cao độ, quan sát độ cao cực đại mà quả bóng đạt được ngay ở lần nảy đầu tiên lên không trung.
    - *Câu hỏi kích thích tư duy:* "Các em thấy độ cao mới có bằng đúng 1 mét không? Nếu không thì tại sao lại thấp hơn?"
- **Thực hiện nhiệm vụ:** 
    - HS quan sát thí nghiệm, suy nghĩ độc lập trong đầu.
- **Báo cáo, thảo luận:**
    - HS phát biểu tự do (Brainstorming/Popcorn style). 
    - Đa số học sinh sẽ dễ dàng nhận ra quả bóng nảy thấp hơn mức 1m. Các em có thể nhắc đến từ khóa "lực cản của không khí" hoặc "sự ma sát với mặt đất".
- **Kết luận, nhận định:**
    - GV mỉm cười và tổng kết: Chắc chắn rồi, trong thực tế cơ năng của quả bóng đã giảm sút. Nhưng từ hàng trăm năm trước, định luật vĩ đại nhất của vật lí học tự nhiên lại nói rằng: "Năng lượng không tự nhiên sinh ra cũng không tự nhiên mất đi". Sự mâu thuẫn kì lạ này sẽ được giải mã hoàn toàn trong bài học ngày hôm nay: Bài 23.

---

### HOẠT ĐỘNG 2: HÌNH THÀNH KIẾN THỨC MỚI - 45 phút

#### Hoạt động 2.1: Khảo sát Định luật bảo toàn cơ năng bằng Phần mềm Tracker (20 phút)
**a) Mục tiêu:**
- Học sinh tự tay nghiệm lại định luật bảo toàn cơ năng trong điều kiện gần như lí tưởng (lực cản rất nhỏ có thể bỏ qua).
- Bồi dưỡng mạnh mẽ Năng lực số thông qua việc sử dụng phần mềm khoa học chuyên dụng quốc tế.

**b) Nội dung:**
- Phân tích video quả bóng rơi tự do (video chuẩn bị sẵn) trên giao diện Tracker.
- Từ kho dữ liệu tọa độ và vận tốc theo chiều y $(y, v_y)$ xuất ra tại mỗi khung hình, tiến hành lập cột công thức tính và vẽ đồ thị $W_d, W_t, W_{tổng}$.

**c) Sản phẩm:**
- Biểu đồ đồ thị năng lượng (Energy vs Time graph) hiện ra trên màn hình máy tính của các nhóm. 
- Học sinh rút ra nhận xét về hình dáng của đường tổng năng lượng.

**d) Tổ chức thực hiện:**
- **Chuyển giao nhiệm vụ:**
    - GV chia sẻ cho mỗi nhóm HS một tệp tin nén (file .zip) qua Zalo lớp. Bên trong chứa phần mềm Tracker (bản portable không cần cài đặt) và 1 file video mẫu tên là `Bong_roi.mp4`.
    - GV cung cấp tờ "Hướng dẫn thao tác SOP (Standard Operating Procedure)" gồm 5 bước cơ bản để dùng Tracker: (1) Set gốc tọa độ trục x-y, (2) Kéo thước Calibration Stick, (3) Tạo Point Mass, (4) Auto-tracking bám theo quả bóng, (5) Mở cửa sổ đồ thị (Plot Data).
- **Thực hiện nhiệm vụ:**
    - HS làm việc theo nhóm 4 người. 1 em điều khiển chuột, 1 em đọc hướng dẫn, 2 em phân tích số liệu.
    - Tại mục Data Builder, HS thêm 2 cột dữ liệu bằng cách nhập công thức vật lí:
      - Động năng: $K = 0.5 * m * v_y^2$
      - Thế năng: $U = m * g * y$
      - Cơ năng tổng: $E = K + U$
- **Báo cáo, thảo luận:**
    - Đại diện nhóm nhanh nhất sẽ được quyền Share Screen (chiếu màn hình) kết quả đồ thị lên máy chiếu chung.
    - HS tiến hành biện luận: Đường thế năng (màu xanh lá) dốc đi xuống, đường động năng (màu đỏ) dốc đi lên. Nhưng kì diệu thay, tổng của chúng (đường màu tím) lại kết hợp thành một đường thẳng nằm ngang gần như hoàn hảo.
- **Kết luận, nhận định:**
    - GV kết luận định lí: Sự chuyển hóa qua lại giữa động năng và thế năng luôn tuân theo một quy luật: Tổng của chúng (cơ năng) không đổi (là một hằng số). Đó chính là Định luật bảo toàn cơ năng.
    - *Công thức toán học:* $W_1 = W_2 \\Leftrightarrow \\frac{1}{2}mv_1^2 + mgh_1 = \\frac{1}{2}mv_2^2 + mgh_2$ (Điều kiện cực kì quan trọng: Hệ kín, bỏ qua ma sát, lực cản).

#### Hoạt động 2.2: Sự biến thiên cơ năng và Định luật bảo toàn năng lượng tổng quát (25 phút)
**a) Mục tiêu:**
- HS giải thích được sự hụt cơ năng trong thí nghiệm quả bóng đầu giờ.
- Nắm được công thức mở rộng: Độ biến thiên cơ năng bằng công của ngoại lực (cản/ma sát).
- Phát biểu trôi chảy định luật bảo toàn và chuyển hóa năng lượng tổng quát cho toàn vũ trụ.

**b) Nội dung:**
- Phân tích tương tác giữa vật và môi trường (sự cọ xát sinh nhiệt năng, biến dạng đàn hồi, phát ra âm thanh).
- Xây dựng biểu thức toán học liên hệ.

**c) Sản phẩm:**
- Ghi chép định nghĩa, khái niệm và công thức: $\\Delta W = W_2 - W_1 = A_{ms}$.

**d) Tổ chức thực hiện:**
- **Chuyển giao nhiệm vụ:**
    - Quay trở lại thí nghiệm nảy quả bóng lúc đầu. GV yêu cầu HS suy luận sâu hơn: "Khoảnh khắc quả bóng va chạm vào mặt đất cứng, điều gì đã thực sự xảy ra ở cấp độ phân tử?" (Vật bị méo/biến dạng, phát ra tiếng kêu "bộp" khá to, và mặt đất+quả bóng nóng lên một chút vi mô).
    - Các dạng năng lượng mới này sinh ra từ hư không chăng? (Không, chúng lấy từ sự hao hụt cơ năng).
- **Thực hiện nhiệm vụ:**
    - HS thảo luận sôi nổi, tìm cách kết nối khái niệm cơ năng ban đầu với các dạng mới như nhiệt năng, năng lượng âm thanh.
    - GV định hướng tư duy để HS thiết lập biểu thức: Phần cơ năng bị mất đi của hệ = Công của lực ma sát/lực cản sinh ra.
- **Báo cáo, thảo luận:**
    - HS đứng lên trình bày diễn đạt theo ngôn ngữ học trò, GV sau đó sẽ điều chỉnh thuật ngữ cho hàn lâm và chính xác hơn.
- **Kết luận, nhận định:**
    - Định luật bảo toàn tổng quát (Nội dung quan trọng nhất): "Năng lượng không tự nhiên sinh ra, cũng không tự nhiên mất đi, nó chỉ chuyển hóa từ dạng này sang dạng khác, hoặc truyền từ vật này sang vật khác".
    - *Ứng dụng AI thú vị:* GV trình chiếu trực tiếp câu trả lời từ công cụ ChatGPT cho câu hỏi tranh biện lúc đầu: "Tại sao có khủng hoảng năng lượng?". (Lời giải thích cốt lõi: Tổng năng lượng không hề thay đổi, nhưng 'năng lượng chất lượng cao, hữu ích' đang ngày càng bị phân tán và biến thành 'năng lượng vô ích/nhiệt tán xạ tỏa vào môi trường' theo nguyên lí 2 Nhiệt động lực học về Entropy).

---

### HOẠT ĐỘNG 3: LUYỆN TẬP (15 phút)
**a) Mục tiêu:**
- Vận dụng linh hoạt định luật bảo toàn cơ năng để giải quyết bài toán cơ học động lực học mà không cần dùng đến các phương trình chiếu định luật II Newton phức tạp (tốn thời gian).

**b) Nội dung:**
- Làm việc cá nhân và thảo luận nhóm đôi với bộ bài tập đặc thù (Con lắc đơn).
- Tích hợp Python trực quan hóa đồ thị vận tốc theo góc lệch.

**c) Sản phẩm:**
- Đáp án chính xác các bài toán ném vật, chuyển động vật trượt không ma sát.
- Hiển thị kết quả đồ thị xuất từ code Python.

**d) Tổ chức thực hiện:**
- **Chuyển giao nhiệm vụ:**
    - *Bài toán mẫu:* Một con lắc đơn có chiều dài sợi dây không dãn là $l=1m$. Kéo quả nặng lệch khỏi phương thẳng đứng một góc $\\alpha_0 = 60^0$ rồi thả nhẹ (không vận tốc đầu). Hãy tính vận tốc cực đại của quả nặng khi nó đi qua vị trí cân bằng. (Biết bỏ qua mọi ma sát với không khí, lấy $g=10m/s^2$).
    - *Tích hợp lập trình Python (Bài tập tự chọn lấy điểm cộng):* GV cung cấp một đoạn snippet code. Nhiệm vụ của HS là viết thêm vòng lặp `for` tính vận tốc $v$ theo nhiều góc thả $\\alpha_0$ khác nhau từ $10^0$ đến $90^0$ và vẽ đồ thị sự phụ thuộc của $v_{max}$ vào góc $\\alpha_0$.
- **Thực hiện nhiệm vụ:**
    - HS trên lớp làm bài tay: Chọn gốc thế năng $U=0$ tại vị trí cân bằng (VTCB) $O$. Áp dụng bảo toàn cơ năng tại vị trí biên $A$ và vị trí $O$: $W_A = W_O$.
    - Viết phương trình thế năng: $\\Rightarrow mgl(1-\\cos\\alpha_0) = \\frac{1}{2}mv_{max}^2$.
    - Triệt tiêu khối lượng $m$, thay số toán học giải ra $v_{max} = \sqrt{2gl(1-\cos60^0)} = \sqrt{10} \approx 3.16 m/s$.
- **Báo cáo, thảo luận:**
    - HS lên bảng ghi lại trình tự các bước tư duy (chọn mốc -> viết phương trình tại 2 điểm -> giải phương trình). 
    - GV làm rõ sự tiện lợi vô biên: "Nếu các em phải dùng phương pháp phân tích lực chiếu Newton $Ox, Oy$, bài toán này vô cùng nan giải và quá phức tạp do lực căng dây $T$ và trọng lực $P$ liên tục thay đổi góc. Với phương pháp năng lượng, mọi thứ giải quyết gọn gàng trong 2-3 dòng chữ".
- **Kết luận, nhận định:**
    - GV khắc sâu nhấn mạnh: Tư duy giải toán bằng phương pháp năng lượng là một công cụ mạnh mẽ, sắc bén bậc nhất trong Vật lí học để đối phó với hệ kín không ma sát.

---

### HOẠT ĐỘNG 4: VẬN DỤNG VÀ MỞ RỘNG (10 phút trên lớp & Dự án học tập)
**a) Mục tiêu:**
- Vận dụng sự linh hoạt của kiến thức bảo toàn năng lượng để giải thích nguyên lí hoạt động các thiết bị công nghệ hiện đại thực tế.

**b) Nội dung:**
- Giao dự án học tập nhỏ (Project-based learning - Mini Project): Nghiên cứu nguyên lí hoạt động hệ thống "Phanh tái sinh năng lượng" (Regenerative Braking) đang được áp dụng rầm rộ trên ô tô điện hiện nay.

**c) Sản phẩm:**
- Bài thuyết trình khoa học ngắn gọn (khoảng 3-5 slides) vào tiết học tiếp theo.

**d) Tổ chức thực hiện:**
- **Chuyển giao nhiệm vụ dự án:**
    - GV tạo tình huống: "Bình thường, khi ô tô chạy bằng xăng phanh lại để dừng đèn đỏ, toàn bộ khối động năng khổng lồ của xe sẽ cọ xát vào má phanh, biến hoàn toàn thành nhiệt nóng rực và bị lãng phí bay vào không khí. Tuy nhiên, trên các dòng xe ô tô điện thông minh hiện đại (như VinFast VF8, Tesla Model 3), kĩ sư đã phát minh ra hệ thống 'Phanh tái sinh'". 
    - *Nhiệm vụ cho các nhóm về nhà:* Hãy tra cứu Internet (Google, YouTube) hoặc tham vấn công cụ AI xem phanh tái sinh có thể "bắt" động năng quay trở lại để làm việc gì hữu ích? Hãy soạn một bản slide ngắn minh họa sơ đồ dòng chuyển hóa năng lượng này.
- **Thực hiện nhiệm vụ & Đánh giá (Vào tiết sau):** HS thực hiện online tại nhà. GV sẽ dành 10 phút đầu tuần sau để các nhóm trình chiếu, tranh biện, và chấm điểm thuyết trình.

---

## IV. TIÊU CHÍ ĐÁNH GIÁ (RUBRIC TOÀN DIỆN)

Để đánh giá công bằng, đa chiều năng lực của HS, GV áp dụng thang đo Rubric sau:

| Các tiêu chí cần đánh giá | Mức 1: Chưa đạt / Yếu (<5 điểm) | Mức 2: Đạt / Cơ bản (5 - 6 điểm) | Mức 3: Khá / Thành thạo (7 - 8 điểm) | Mức 4: Tốt / Xuất sắc (9 - 10 điểm) |
| :--- | :--- | :--- | :--- | :--- |
| **Tiêu chí 1: Kiến thức và kĩ năng Vật lí (50%)** | Không phát biểu được định luật. Lúng túng hoàn toàn khi giải toán. | Thuộc lòng và phát biểu được, nhưng khi áp dụng giải bài tập còn gặp khó khăn trong việc chọn mốc thế năng sao cho tiện nhất. | Thiết lập đúng phương trình bảo toàn cơ năng, giải rất tốt các bài toán con lắc đơn và vật rơi. | Hiểu cực kì sâu sắc giới hạn lí thuyết của bảo toàn cơ năng, giải quyết thành thạo các bài toán khó có lực ma sát sinh công gây tiêu hao năng lượng. |
| **Tiêu chí 2: Kỹ năng thực hành Công nghệ số (30%)** | Không thao tác và không cài đặt được phần mềm Tracker trên máy tính. | Có mở được phần mềm, nạp được video mẫu và xem đồ thị do bạn làm. | Tự thiết lập thành công hệ tọa độ x-y trong Tracker, track điểm tốt, xuất ra đồ thị trực quan. | Vận hành Tracker trơn tru. Đỉnh cao là dùng ngôn ngữ lập trình Python/Excel để xử lý mượt mà, nội suy đường cong từ tập dữ liệu thô (raw data). |
| **Tiêu chí 3: Ứng dụng thực tiễn & Năng lực sử dụng AI (20%)** | Quên không làm bài tập dự án phanh tái sinh về nhà, hoặc làm chống đối. | Báo cáo dự án rất sơ sài, thiết kế xấu, nội dung chủ yếu là copy-paste bừa bãi từ mạng Internet. | Trình bày, giải thích đúng trọng tâm nguyên lí phanh tái sinh điện. Slide trình bày rõ ràng, có vẽ được sơ đồ chuỗi năng lượng. | Nghĩ ra được câu lệnh (Prompt) AI siêu thông minh để tra cứu tài liệu sâu. Tổng hợp thông tin, số liệu kĩ thuật của ô tô VinFast đưa vào báo cáo có tính thuyết phục cao. |

---
*Lưu ý cuối cùng của tác giả:* Giáo án này được thiết kế ưu tiên sự tương tác và lồng ghép công nghệ mạnh mẽ. Nó phản ánh tinh thần hiện đại hóa giáo dục STEM. Giáo viên hãy cứ mạnh dạn đưa Python, Tracker và AI vào lớp học, học sinh thế hệ Gen Z sẽ nắm bắt nhanh hơn chúng ta tưởng rất nhiều.

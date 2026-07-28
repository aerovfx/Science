# Tuần 6: Năng Lượng, Công, Công Suất & Định Luật Bảo Toàn Cơ Năng / Week 6: Energy, Work, Power & Conservation of Mechanical Energy

## 1. Learning Objectives / Mục tiêu học tập

**Vietnamese (Tiếng Việt):**
- Hiểu và nắm vững các khái niệm cơ bản về Công, Công suất, Năng lượng, và Cơ năng.
- Phân biệt giữa công cơ học và khái niệm "công" trong đời sống hằng ngày.
- Nắm được định luật bảo toàn cơ năng trong trường hợp chỉ có lực thế tác dụng.
- Vận dụng các công thức tính công cơ học, công suất để giải quyết các bài toán thực tế phức tạp.
- Biết cách tính động năng, thế năng trọng trường, và thế năng đàn hồi trong hệ quy chiếu tùy ý.
- Thực hành đo lường công và công suất thông qua các thí nghiệm với mặt phẳng nghiêng, hệ thống ròng rọc và hệ lực kéo.
- Thực hành kiểm chứng định luật bảo toàn cơ năng sử dụng con lắc đơn hoặc máng cong trượt, với sự hỗ trợ của cảm biến quang điện.
- Phân tích sai số thực nghiệm nguyên nhân gây ra sự hao hụt năng lượng cơ học (chuyển hóa thành nhiệt năng).
- Viết mã Python để trực quan hóa quá trình biến đổi năng lượng từ thế năng sang động năng theo thời gian dưới dạng biểu đồ đường.
- Hiểu và phân tích được hiệu suất của các máy cơ đơn giản, hệ thống truyền động và động cơ đốt trong.
- Phát triển tư duy logic, khả năng làm việc nhóm qua quá trình thu thập, phân tích và trình bày số liệu thí nghiệm.
- Áp dụng các định luật vật lý để giải thích các hiện tượng tự nhiên như dòng nước chảy, sự rơi của thiên thạch, và ứng dụng trong đời sống như tàu lượn siêu tốc.

**English:**
- Understand and master the fundamental concepts of Work, Power, Energy, and Mechanical Energy.
- Distinguish between mechanical work and the everyday concept of "work".
- Grasp the law of conservation of mechanical energy when only conservative forces are involved.
- Apply mechanical work and power formulas to solve complex real-world physics problems.
- Calculate kinetic energy, gravitational potential energy, and elastic potential energy in arbitrary reference frames.
- Practice measuring work and power through experiments involving inclined planes, pulley systems, and traction.
- Verify the conservation of mechanical energy using a simple pendulum or curved track, assisted by photogate sensors.
- Analyze experimental errors and the causes of mechanical energy dissipation (transformation into thermal energy).
- Write Python code to visualize the transformation from potential to kinetic energy over time using line charts.
- Understand and analyze the efficiency of simple machines, transmission systems, and internal combustion engines.
- Develop logical thinking and teamwork skills through data collection, analysis, and presentation.
- Apply physical laws to explain natural phenomena like flowing water, falling meteorites, and practical applications like roller coasters.

## 2. Related Textbook Lessons / Bài học SGK liên quan chi tiết

Chương này thuộc **Chương IV: Năng lượng, Công, Công suất** (SGK Kết nối tri thức với cuộc sống - Vật lí 10).
- **SGK KNTT Bài 21: Công và công suất / Work and Power.**
  - Nhấn mạnh vào định nghĩa công trong trường hợp lực không song song với độ dời.
  - Phân tích các trường hợp công phát động ($\cos\alpha > 0$) và công cản ($\cos\alpha < 0$).
  - Khái niệm công suất trung bình và công suất tức thời.
- **SGK KNTT Bài 22: Động năng, thế năng, cơ năng / Kinetic, potential, and mechanical energy.**
  - Mối quan hệ giữa động năng và công của ngoại lực (Định lý biến thiên động năng).
  - Định nghĩa thế năng trọng trường và vai trò của mốc thế năng.
  - Sự kết hợp tạo thành cơ năng toàn phần của hệ.
- **SGK KNTT Bài 23: Định luật bảo toàn năng lượng / Law of conservation of energy.**
  - Sự chuyển hóa năng lượng giữa các dạng: cơ năng, nhiệt năng, điện năng.
  - Ứng dụng định luật bảo toàn cơ năng trong các bài toán chuyển động không ma sát.
- **SGK KNTT Bài 24: Hiệu suất / Efficiency.**
  - Khái niệm năng lượng có ích và năng lượng hao phí.
  - Tối ưu hóa hiệu suất trong các hệ thống kỹ thuật.
- **Các phần mở rộng (Đọc thêm):** 
  - Động cơ vĩnh cửu loại 1 tại sao không thể tồn tại?
  - Ứng dụng của năng lượng gió và năng lượng mặt trời trong việc thay thế nhiên liệu hóa thạch.
  - Tại sao hiệu suất của các tế bào quang điện (pin mặt trời) hiện nay vẫn chưa cao?

## 3. Lab Equipment & Tools / Dụng cụ và thiết bị thực hành

| Dụng cụ (VI) | Equipment (EN) | Giá dự kiến (VND) | Nơi mua / Availability | Ghi chú / Notes |
|---|---|---|---|---|
| Cảm biến lực | Force Sensor | 550,000 | Cửa hàng thiết bị giáo dục | Độ phân giải cao, kết nối USB/Bluetooth. Giới hạn đo 50N, độ chia 0.01N. |
| Cảm biến chuyển động | Motion Sensor | 450,000 | Cửa hàng thiết bị giáo dục | Dùng sóng siêu âm, tốc độ quét 50Hz, tầm đo 15cm - 2m. |
| Cổng quang điện (Photogate)| Photogate | 300,000 | Công ty vật tư trường học| Đo tốc độ tức thời tại 1 điểm với độ trễ < 1ms. Cần 2 chiếc cho 1 set lab. |
| Xe kỹ thuật số | Smart Cart | 1,200,000 | Đại lý phân phối chính hãng| Tích hợp sẵn gia tốc kế, con quay hồi chuyển (gyro), cảm biến lực và vị trí. |
| Bộ quả nặng đồng thau | Mass Set | 150,000 | Shopee/Lazada | 50g x 10 quả, có móc treo, được hiệu chuẩn khối lượng chính xác. |
| Giá đỡ thí nghiệm | Lab Stand | 250,000 | Cửa hàng hóa chất/y tế | Khung hợp kim nhôm vững chắc, đế gang nặng chống lật. |
| Máng cong trượt | Curved Track | 400,000 | Đặt hàng trực tuyến | Dùng kiểm chứng bảo toàn cơ năng, có rãnh chống trượt ngang. |
| Con lắc đơn | Simple Pendulum | 100,000 | Tự chế / Mua sẵn | Dây treo mảnh không dãn (Kevlar/Nylon), vật nặng hình cầu mạ niken. |
| Thước cuộn/thước mét | Measuring Tape | 50,000 | Cửa hàng vật liệu | Đo khoảng cách s, h. Bằng thép hoặc sợi thủy tinh. |
| Đồng hồ bấm giây | Stopwatch | 100,000 | Shopee/Nhà sách | Sai số 0.01s, có chế độ đo lap (đo từng chặng). |
| Lò xo các loại | Springs | 80,000 | Cửa hàng thiết bị GD | Bộ lò xo với hệ số k khác nhau để khảo sát thế năng đàn hồi. |
| Ròng rọc cố định & động | Pulleys | 120,000 | Cửa hàng thiết bị GD | Khảo sát hệ lực nâng và hao phí công (hiệu suất). |

## 4. Theory Explanations / Lý thuyết và Công thức chi tiết

### 4.1. Công cơ học / Mechanical Work
- **Định nghĩa:** Công cơ học là đại lượng vô hướng được sinh ra khi một lực tác dụng lên vật làm vật dịch chuyển. Nó là thước đo phần năng lượng mà lực đã truyền cho vật (hoặc lấy đi khỏi vật).
- **Công thức:** 
  $$ A = \vec{F} \cdot \vec{s} = F \cdot s \cdot \cos\alpha $$
  - Trong đó:
    - $A$: Công cơ học (Work), đơn vị là Joule (J). $1 J = 1 N \cdot m$.
    - $F$: Độ lớn véctơ lực tác dụng (Force), đơn vị là Newton (N).
    - $s$: Độ dời của vật (Displacement), đơn vị là mét (m).
    - $\alpha$: Góc hợp bởi hướng của lực $\vec{F}$ và hướng dịch chuyển $\vec{s}$.
- **Phân tích các trường hợp đặc biệt:**
  - Nếu $0 \le \alpha < 90^\circ$: $\cos\alpha > 0 \Rightarrow A > 0$. Lực sinh công dương, gọi là công phát động.
  - Nếu $\alpha = 90^\circ$: $\cos\alpha = 0 \Rightarrow A = 0$. Lực vuông góc với độ dời không sinh công (Ví dụ: Trọng lực tác dụng lên xe chạy ngang).
  - Nếu $90^\circ < \alpha \le 180^\circ$: $\cos\alpha < 0 \Rightarrow A < 0$. Lực sinh công âm, gọi là công cản (Ví dụ: Lực ma sát).

### 4.2. Công suất / Power
- **Định nghĩa:** Công suất là đại lượng đặc trưng cho tốc độ sinh công của lực, hay tốc độ truyền năng lượng.
- **Công thức:** 
  $$ P = \frac{A}{t} $$
  - $P$: Công suất trung bình, đơn vị là Watt (W). $1 W = 1 J/s$.
- **Công suất tức thời:** Nếu một vật đang chuyển động với vận tốc tức thời $\vec{v}$ dưới tác dụng của lực $\vec{F}$, công suất tức thời là:
  $$ P = \vec{F} \cdot \vec{v} = F \cdot v \cdot \cos\alpha $$
- **Đơn vị khác:** Mã lực (Horsepower - HP). $1 \text{ HP} \approx 746 \text{ W}$.

### 4.3. Động năng / Kinetic Energy
- **Định nghĩa:** Năng lượng mà vật có được do chuyển động gọi là động năng.
- **Công thức:** 
  $$ W_d = \frac{1}{2}mv^2 $$
  - $m$: khối lượng vật (kg).
  - $v$: độ lớn vận tốc của vật (m/s).
- **Định lý động năng (Work-Energy Theorem):** Tổng công của tất cả các lực tác dụng lên vật bằng độ biến thiên động năng của vật đó.
  $$ A_{ngoại lực} = \Delta W_d = W_{d2} - W_{d1} = \frac{1}{2}mv_2^2 - \frac{1}{2}mv_1^2 $$

### 4.4. Thế năng / Potential Energy
- **Thế năng trọng trường (Gravitational Potential Energy):** 
  - Là dạng năng lượng tương tác giữa Trái Đất và vật, nó phụ thuộc vào vị trí của vật trong trọng trường.
  - **Công thức:** 
    $$ W_t = mgh $$
  - $h$: độ cao của vật so với mốc thế năng (thường chọn mốc thế năng tại mặt đất, $h=0 \Rightarrow W_t=0$).
- **Thế năng đàn hồi (Elastic Potential Energy):**
  - Là dạng năng lượng lưu trữ trong các vật bị biến dạng đàn hồi (như lò xo bị nén hoặc kéo dãn).
  - **Công thức:** 
    $$ W_{t(đh)} = \frac{1}{2}k(\Delta l)^2 $$
  - $k$: Độ cứng của lò xo (N/m). $\Delta l$: Độ biến dạng (m).

### 4.5. Cơ năng và Định luật bảo toàn cơ năng / Mechanical Energy
- **Cơ năng (Mechanical Energy):** Là tổng động năng và thế năng của vật.
  $$ W = W_d + W_t $$
- **Định luật bảo toàn cơ năng:** 
  - Khi một vật chuyển động chỉ chịu tác dụng của các lực thế (như trọng lực, lực đàn hồi) và không chịu tác dụng của các lực phi thế (ma sát, lực kéo, lực cản), thì cơ năng của vật là một đại lượng bảo toàn (không đổi theo thời gian).
  - Dạng phương trình:
    $$ W_1 = W_2 \iff \frac{1}{2}mv_1^2 + mgh_1 = \frac{1}{2}mv_2^2 + mgh_2 = \text{const} $$
- **Trường hợp có lực phi thế:**
  $$ A_{\text{phi thế}} = \Delta W = W_2 - W_1 $$
  (Công của lực cản/lực ma sát làm giảm cơ năng hệ, biến cơ năng thành nhiệt năng).

### 4.6. Hiệu suất / Efficiency
- Bất kỳ máy móc nào khi hoạt động đều có sự hao phí năng lượng (thường do ma sát tỏa nhiệt).
- **Công thức:** 
  $$ H = \frac{A_{có ích}}{A_{toàn phần}} \times 100\% = \frac{P_{có ích}}{P_{toàn phần}} \times 100\% $$
  - Luôn luôn có $H < 100\%$.

### 4.7. Worked Numerical Examples / Bài toán ví dụ (Giải chi tiết)

**Ví dụ 1 (Example 1): Bài toán công và lực ma sát trên mặt phẳng ngang**
Một người kéo một khối gỗ nặng $m = 20\text{ kg}$ trượt trên mặt sàn nằm ngang bằng một lực $F = 100\text{ N}$ có hướng hợp với phương ngang một góc $\alpha = 30^\circ$. Hệ số ma sát trượt giữa khối gỗ và sàn là $\mu = 0.2$. Khối gỗ di chuyển được quãng đường $s = 5\text{ m}$. Lấy $g = 9.8\text{ m/s}^2$. 
Yêu cầu:
a) Tính công của lực kéo $F$.
b) Tính công của lực ma sát.
c) Tính tổng công tác dụng lên khối gỗ và vận tốc của khối gỗ ở cuối đoạn đường (giả sử vận tốc ban đầu $v_0 = 0$).

**Giải (Solution):**
a) Công của lực kéo $F$:
Áp dụng công thức tính công cơ học:
$$ A_k = F \cdot s \cdot \cos\alpha = 100 \cdot 5 \cdot \cos(30^\circ) = 500 \cdot \frac{\sqrt{3}}{2} = 250\sqrt{3} \approx 433.01 \text{ (J)} $$

b) Công của lực ma sát:
Trước tiên ta phải xác định độ lớn lực ma sát. Áp dụng định luật II Newton chiếu lên phương thẳng đứng (Oy) để tìm phản lực pháp tuyến $N$:
$$ N + F_y - P = 0 \Rightarrow N = mg - F\sin\alpha $$
Thay số vào:
$$ N = 20 \cdot 9.8 - 100 \cdot \sin(30^\circ) = 196 - 100 \cdot 0.5 = 146 \text{ (N)} $$
Độ lớn lực ma sát trượt:
$$ F_{ms} = \mu N = 0.2 \cdot 146 = 29.2 \text{ (N)} $$
Lực ma sát ngược chiều chuyển động nên góc $\alpha_{ms} = 180^\circ$. Công của lực ma sát:
$$ A_{ms} = F_{ms} \cdot s \cdot \cos(180^\circ) = 29.2 \cdot 5 \cdot (-1) = -146.0 \text{ (J)} $$

c) Vận tốc khối gỗ:
Tổng công của các lực tác dụng lên vật: Trọng lực và phản lực $N$ vuông góc với quỹ đạo nên sinh công bằng 0.
$$ A_{tổng} = A_k + A_{ms} = 433.01 - 146.0 = 287.01 \text{ (J)} $$
Theo định lý động năng:
$$ A_{tổng} = \Delta W_d = \frac{1}{2}mv^2 - \frac{1}{2}mv_0^2 = \frac{1}{2} \cdot 20 \cdot v^2 - 0 = 10 v^2 $$
Suy ra:
$$ 10 v^2 = 287.01 \Rightarrow v^2 = 28.701 \Rightarrow v = \sqrt{28.701} \approx 5.36 \text{ (m/s)} $$

**Ví dụ 2 (Example 2): Bài toán con lắc đơn và Định luật bảo toàn cơ năng**
Một con lắc đơn có chiều dài dây treo $l = 1\text{ m}$, mang vật nặng khối lượng $m = 200\text{ g}$. Kéo con lắc lệch khỏi vị trí cân bằng (theo phương thẳng đứng) một góc $\alpha_0 = 60^\circ$ rồi thả nhẹ. Bỏ qua mọi ma sát và lực cản của không khí. Lấy $g = 10\text{ m/s}^2$.
Yêu cầu:
a) Tính vận tốc của vật nặng khi nó đi qua vị trí cân bằng.
b) Tính sức căng của dây treo khi vật đi qua vị trí cân bằng.

**Giải (Solution):**
Chọn mốc thế năng tại vị trí cân bằng (vị trí thấp nhất của quỹ đạo, $h=0$).
a) Khi dây treo lệch góc $\alpha_0$, độ cao của vật so với vị trí cân bằng là:
$$ h_0 = l - l\cos\alpha_0 = l(1 - \cos\alpha_0) = 1 \cdot (1 - \cos 60^\circ) = 1 \cdot (1 - 0.5) = 0.5 \text{ (m)} $$
Cơ năng ban đầu tại vị trí thả (vận tốc bằng 0):
$$ W_1 = W_{t1} + W_{d1} = mgh_0 + 0 = 0.2 \cdot 10 \cdot 0.5 = 1.0 \text{ (J)} $$
Khi qua vị trí cân bằng, độ cao $h = 0 \Rightarrow W_{t2} = 0$. Cơ năng tại vị trí cân bằng:
$$ W_2 = W_{t2} + W_{d2} = 0 + \frac{1}{2}mv_{max}^2 $$
Bảo toàn cơ năng:
$$ W_1 = W_2 \Rightarrow 1.0 = \frac{1}{2} \cdot 0.2 \cdot v_{max}^2 \Rightarrow 0.1 \cdot v_{max}^2 = 1.0 \Rightarrow v_{max}^2 = 10 \Rightarrow v_{max} = \sqrt{10} \approx 3.16 \text{ (m/s)} $$

b) Sức căng của dây treo:
Khi đi qua vị trí cân bằng, vật chuyển động trên quỹ đạo tròn bán kính $l$. Lực hướng tâm là hợp lực của sức căng dây $T$ (hướng lên tâm) và trọng lực $P$ (hướng xuống).
Phương trình định luật II Newton chiếu lên phương hướng tâm:
$$ T - mg = m \frac{v_{max}^2}{l} $$
Suy ra sức căng dây:
$$ T = mg + m \frac{v_{max}^2}{l} = m \left( g + \frac{v_{max}^2}{l} \right) = 0.2 \cdot \left( 10 + \frac{10}{1} \right) = 0.2 \cdot 20 = 4.0 \text{ (N)} $$
*(Lưu ý: Sức căng dây gấp đôi trọng lượng tĩnh $mg = 2N$ của vật).*

## 5. Diagrams and Models / Sơ đồ và Mô hình

Sơ đồ chuyển hóa năng lượng trên mặt phẳng nghiêng (Energy Transformation Diagram):
```ascii
      [ Đỉnh mặt phẳng nghiêng / Top of incline ]
      Độ cao = h (max)
      Vận tốc v = 0
      W_t = mgh (Max), W_d = 0
          \
           \   <-- Lực trọng trường sinh công dương (A_P > 0)
            \      Thế năng chuyển hóa thành Động năng
             \     Nếu có lực ma sát, một phần cơ năng biến thành Nhiệt năng (Q)
              \
               \
                \
[ Chân mặt phẳng nghiêng / Bottom of incline ]
      Độ cao h = 0
      Vận tốc v = V_max
      W_t = 0, W_d = 1/2*m*v^2 (Max)
```

Sơ đồ véctơ lực trong bài toán con lắc đơn:
```ascii
          (Điểm treo)
              O
             /|
            / |
         l /  | l*cos(alpha)
          /   |
         /    |
        O     +  <- Vị trí có độ cao h = l - l*cos(alpha)
       / \
  T <-+   +-> v
      |
      V
    P=mg
```

## 6. Step-by-step Hands-on Experiments / Thực hành mở rộng

### 6.1. Mục đích / Purpose
Thí nghiệm dùng để đo lường công, sự chuyển hóa năng lượng trên máng nghiêng và kiểm chứng định luật bảo toàn cơ năng của vật nặng rơi tự do, kết hợp tính toán sai số.

### 6.2. Các bước tiến hành thí nghiệm rơi tự do / Procedures
1. Lắp đặt giá đỡ thí nghiệm đứng thẳng. Gắn nam châm điện ở đỉnh giá đỡ để giữ quả cầu thép.
2. Gắn 2 cổng quang điện (Photogate) A và B trên giá đỡ tại 2 vị trí khác nhau. Photogate A cách điểm thả một khoảng $h_A$, Photogate B cách điểm thả một khoảng $h_B$ ($h_B > h_A$).
3. Đo khối lượng $m$ của quả cầu thép bằng cân tiểu ly (Ví dụ: $m = 0.05 \text{ kg}$). Đo đường kính $D$ của quả cầu bằng thước kẹp.
4. Cài đặt đồng hồ đo thời gian (Smart Timer) ở chế độ đo thời gian quả cầu chắn tia hồng ngoại khi đi qua từng cổng quang điện, kí hiệu là $\Delta t_A$ và $\Delta t_B$.
5. Thả rơi quả cầu thép bằng cách ngắt điện nam châm.
6. Lặp lại thí nghiệm 5 lần, di chuyển Photogate B để thay đổi độ cao $h_B$.
7. Dùng công thức $v = \frac{D}{\Delta t}$ để tính vận tốc tức thời tại các điểm A và B.

### 6.3. Bảng xử lý số liệu thí nghiệm / Data Table
Khối lượng quả cầu: $m = 0.05\text{ kg}$, Đường kính $D = 0.02\text{ m}$. Mốc thế năng tại Photogate B.
Khoảng cách giữa A và B là $h = h_B - h_A = 0.5\text{ m}$.

| Lần đo (Trial) | $\Delta t_A$ (s) | $v_A$ (m/s) | $W_{dA}$ (J) | $W_{tA} = mgh$ (J) | Cơ năng A ($W_A$) | $\Delta t_B$ (s) | $v_B$ (m/s) | $W_{dB}$ (J) | Cơ năng B ($W_B$) | Sai số tương đối % |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 0.0112 | 1.786 | 0.0797 | 0.2450 | 0.3247 | 0.0055 | 3.636 | 0.3306 | 0.3306 | ~ 1.8% |
| 2 | 0.0113 | 1.770 | 0.0783 | 0.2450 | 0.3233 | 0.0056 | 3.571 | 0.3188 | 0.3188 | ~ 1.4% |
| 3 | 0.0111 | 1.802 | 0.0812 | 0.2450 | 0.3262 | 0.0055 | 3.636 | 0.3306 | 0.3306 | ~ 1.3% |
| 4 | 0.0112 | 1.786 | 0.0797 | 0.2450 | 0.3247 | 0.0056 | 3.571 | 0.3188 | 0.3188 | ~ 1.8% |
| 5 | 0.0113 | 1.770 | 0.0783 | 0.2450 | 0.3233 | 0.0055 | 3.636 | 0.3306 | 0.3306 | ~ 2.2% |

**Nhận xét:** Cơ năng tại A (gồm động năng và thế năng dư so với B) xấp xỉ bằng động năng tại B (vì chọn mốc thế năng ở B). Độ sai lệch từ 1-3% là rất nhỏ, chủ yếu do lực cản không khí và sai số của thiết bị đo. Định luật bảo toàn cơ năng được xác minh.

## 7. Python Lab / Thực hành Python chi tiết

Sử dụng thư viện `matplotlib` và `numpy` để mô phỏng và trực quan hóa sự biến thiên thế năng, động năng và cơ năng của một vật bị ném thẳng đứng lên cao trong trường trọng lực.

```python
"""
Mô phỏng sự biến đổi năng lượng của một vật ném thẳng đứng.
Energy Transformation Simulation of a Vertically Thrown Object.
"""
import numpy as np
import matplotlib.pyplot as plt

def simulate_energy():
    # 1. Các thông số vật lý (Physical parameters)
    m = 2.0         # Khối lượng (mass in kg)
    g = 9.8         # Gia tốc trọng trường (gravity in m/s^2)
    v0 = 25.0       # Vận tốc ban đầu hướng lên (initial velocity in m/s)
    h0 = 0.0        # Độ cao ban đầu (initial height in m)
    
    # 2. Tính thời gian vật bay đến khi chạm đất (Time of flight)
    # Phương trình y = v0*t - 0.5*g*t^2. Khi chạm đất y = 0
    # => t*(v0 - 0.5*g*t) = 0 => t = 2*v0/g
    t_flight = 2 * v0 / g
    print(f"Tổng thời gian bay (Total flight time): {t_flight:.2f} s")
    
    # 3. Tạo mảng thời gian từ 0 đến t_flight (Create time array)
    t = np.linspace(0, t_flight, 200)
    
    # 4. Tính toán các đại lượng động học (Kinematics calculations)
    y = h0 + v0 * t - 0.5 * g * t**2    # Vị trí / Position
    v = v0 - g * t                      # Vận tốc / Velocity
    
    # 5. Tính toán Năng lượng (Energy calculations)
    Wt = m * g * y                      # Thế năng / Potential Energy (Wt = mgh)
    Wd = 0.5 * m * v**2                 # Động năng / Kinetic Energy (Wd = 1/2*mv^2)
    W_total = Wt + Wd                   # Cơ năng toàn phần / Total Mechanical Energy
    
    # 6. Trực quan hóa dữ liệu bằng đồ thị (Data visualization)
    plt.figure(figsize=(12, 7))
    
    # Vẽ các đường đồ thị / Plotting lines
    plt.plot(t, Wt, label='Thế năng (Potential Energy - $W_t$)', color='blue', linewidth=2.5)
    plt.plot(t, Wd, label='Động năng (Kinetic Energy - $W_d$)', color='red', linewidth=2.5)
    plt.plot(t, W_total, label='Cơ năng (Total Energy - $W$)', color='green', linestyle='--', linewidth=3)
    
    # Đánh dấu đỉnh quỹ đạo (Mark the apex)
    t_apex = v0 / g
    Wt_max = m * g * (v0**2 / (2*g))
    plt.plot(t_apex, Wt_max, 'ko', markersize=8)
    plt.annotate(f'Đỉnh quỹ đạo\n({t_apex:.1f}s, {Wt_max:.0f}J)', 
                 xy=(t_apex, Wt_max), xytext=(t_apex+0.3, Wt_max-50),
                 arrowprops=dict(facecolor='black', shrink=0.05, width=1, headwidth=6))
    
    # Định dạng đồ thị / Graph formatting
    plt.title('Sự chuyển hóa Năng lượng trong chuyển động ném thẳng đứng\n(Energy Transformation in Vertical Projection)', fontsize=14, fontweight='bold')
    plt.xlabel('Thời gian - Time (s)', fontsize=12)
    plt.ylabel('Năng lượng - Energy (Joule)', fontsize=12)
    plt.xlim(0, t_flight)
    plt.ylim(0, max(W_total) * 1.1)
    plt.grid(True, linestyle=':', alpha=0.7)
    plt.legend(fontsize=11, loc='center right')
    
    # Lưu và hiển thị đồ thị / Save and show
    plt.tight_layout()
    plt.savefig('energy_simulation_detailed.png', dpi=300)
    print("Mô phỏng hoàn tất. Đồ thị đã được lưu thành 'energy_simulation_detailed.png'")
    # plt.show() # Bỏ comment để hiển thị trực tiếp

if __name__ == "__main__":
    simulate_energy()
```

## 8. Safety Warnings / Cảnh báo an toàn ⚠️

**VI:**
1. Luôn đeo kính bảo hộ khi thực hành, đặc biệt khi làm việc với lò xo nén mạnh hoặc dây cao su. Lò xo bung ra có thể gây chấn thương mắt.
2. Kiểm tra chắc chắn giá treo và dây của con lắc, sử dụng nút thắt an toàn tránh làm đứt dây văng quả nặng vào người xung quanh.
3. Trong thí nghiệm rơi tự do, không đặt tay chân dưới khu vực thả vật nặng. Nên đặt một hộp cát hoặc miếng mút xốp đệm ở dưới để hứng vật, tránh làm hỏng sàn và hỏng vật.
4. Cắm thiết bị cảm biến cẩn thận, quản lý dây điện gọn gàng để không bị vấp ngã làm kéo theo thiết bị đắt tiền xuống đất.
5. Khi khảo sát năng lượng điện hoặc nhiệt, tuyệt đối tuân thủ quy tắc an toàn về phòng chống cháy nổ và rò rỉ điện.

**EN:**
1. Always wear safety goggles during experiments, especially when working with highly compressed springs or rubber bands. A snapping spring can cause severe eye injuries.
2. Ensure the pendulum stand and string are secure, using safe knots to avoid the mass breaking off and flying at bystanders.
3. In free-fall experiments, do not place hands or feet under the drop zone. Use a sandbox or foam pad to catch the mass to prevent floor and equipment damage.
4. Plug in sensors carefully and manage cables neatly to avoid tripping hazards that could pull expensive equipment onto the floor.
5. When experimenting with electrical or thermal energy, strictly adhere to fire and electrical safety protocols.

## 9. Discussion Questions / Câu hỏi thảo luận chuyên sâu

1. **Question 1:** Tại sao trong thực tế, cơ năng không bao giờ được bảo toàn một cách hoàn hảo cho dù hệ có vẻ rất "kín"? (Why is mechanical energy never perfectly conserved in reality, even in seemingly "closed" systems?)
   - *Gợi ý (Hint):* Xem xét các loại lực cản môi trường không thể loại bỏ hoàn toàn như lực cản không khí, ma sát tại các điểm tiếp xúc (trục quay con lắc). Những lực này luôn sinh công âm, làm biến đổi dần cơ năng thành nhiệt năng và âm thanh.

2. **Question 2:** Hãy giải thích cơ chế hoạt động của hệ thống phanh tái sinh (Regenerative braking) trên ô tô điện hiện đại (như Tesla, VinFast) dựa trên nguyên lý chuyển hóa năng lượng. (Explain regenerative braking in EVs based on energy transformation.)
   - *Gợi ý (Hint):* Khi phanh, động cơ điện hoạt động như một máy phát điện. Động năng của xe thay vì biến thành nhiệt năng do ma sát ở đĩa phanh, sẽ quay trục máy phát sinh ra dòng điện sạc lại vào pin.

3. **Question 3:** Nếu ta thay quả nặng của con lắc bằng một quả cầu xốp rỗng có cùng kích thước, quỹ đạo dao động sẽ thay đổi như thế nào sau nhiều chu kỳ? Giải thích bằng công thức năng lượng. (If we replace the bob with a hollow styrofoam sphere of the same size, how does the oscillation change? Explain using energy formulas.)
   - *Gợi ý (Hint):* Cả hai chịu cùng lực cản không khí $F_c$ (vì cùng thể tích/kích thước). Tuy nhiên khối lượng quả cầu xốp $m'$ rất nhỏ. Công của lực cản $A_c$ trên một chu kỳ là đáng kể so với tổng cơ năng $W' = m'gh$. Do đó cơ năng suy giảm rất nhanh, con lắc tắt dần nhanh chóng.

4. **Question 4:** Định luật bảo toàn cơ năng có vi phạm khi một người vác bao gạo nặng đứng yên trong 1 giờ đồng hồ và cảm thấy mệt mỏi, tiêu hao nhiều calo? (Does energy conservation fail when a person holding a heavy bag of rice stationary for an hour gets tired and burns calories?)
   - *Gợi ý (Hint):* Về mặt vật lý cơ học, công $A = F \cdot s = 0$ do không có độ dời. Cơ năng của bao gạo không đổi. Sự mệt mỏi là do cơ bắp phải liên tục co rút vi mô để giữ tư thế, tiêu hao năng lượng hóa học nội tại (ATP) chuyển thành nhiệt năng trong cơ thể, không vi phạm định luật bảo toàn năng lượng tổng quát.

5. **Question 5:** Máy đóng cọc (Pile driver) hoạt động dựa trên nguyên lý nào của bài học? Tại sao khi cọc đã lún sâu, mỗi lần đóng cọc lún thêm ít hơn so với ban đầu mặc dù năng lượng búa thả xuống là như nhau?
   - *Gợi ý (Hint):* Búa được nâng lên cao để tích lũy thế năng, khi rơi chuyển hóa thành động năng khổng lồ đập vào cọc. Khi cọc lún sâu, diện tích tiếp xúc với đất cứng tăng, lực cản của đất $F_{đất}$ tăng vọt. Áp dụng định lý biến thiên động năng: Năng lượng búa $\Delta W = F_{đất} \cdot \Delta s$. Vì $\Delta W$ không đổi, $F_{đất}$ tăng thì quãng đường lún $\Delta s$ phải giảm.

## 10. Homework & Practice Problems / Bài tập về nhà

**Bài 1 (Khởi động):** Một vật khối lượng $m = 5\text{ kg}$ rơi tự do từ độ cao $20\text{ m}$ xuống đất. Lấy $g = 10\text{ m/s}^2$. 
a) Tính cơ năng tại lúc thả vật.
b) Ở độ cao nào thì động năng bằng 3 lần thế năng? 
c) Tính vận tốc của vật khi chạm đất.

*Gợi ý:* b) Tại vị trí đó $W_d = 3W_t$. Cơ năng $W = W_d + W_t = 4W_t = 4mgh$. Mặt khác $W = mgh_{max}$. Suy ra $h = \frac{h_{max}}{4}$.

**Bài 2 (Mặt phẳng nghiêng có ma sát):** Một chiếc xe đồ chơi khối lượng $200\text{ g}$ được thả không vận tốc đầu từ đỉnh một dốc nghiêng $30^\circ$ so với phương ngang. Dốc dài $2\text{ m}$. Hệ số ma sát trượt giữa xe và mặt dốc là $\mu = 0.1$.
a) Dùng định lý biến thiên cơ năng để tính vận tốc của xe tại chân dốc.
b) Sau khi xuống hết dốc, xe tiếp tục trượt trên mặt phẳng ngang có cùng hệ số ma sát $\mu = 0.1$. Tìm quãng đường xe trượt trên mặt phẳng ngang cho đến khi dừng lại.

*Gợi ý:* a) Cơ năng tại đỉnh dốc: $W_1 = mgh = mgL\sin\alpha$. Cơ năng tại chân dốc $W_2 = \frac{1}{2}mv^2$. Công lực ma sát trên dốc $A_{ms1} = - \mu mg\cos\alpha \cdot L$. $W_2 - W_1 = A_{ms1}$.
b) Trên mặt phẳng ngang, toàn bộ động năng ở chân dốc bị công ma sát triệt tiêu: $0 - \frac{1}{2}mv^2 = - \mu mg \cdot S$.

**Bài 3 (Công suất máy bơm):** Một máy bơm nước cần bơm $10\text{ m}^3$ nước lên một tháp chứa cách mặt đất $25\text{ m}$ trong thời gian 45 phút. Khối lượng riêng của nước là $1000\text{ kg/m}^3$. Lấy $g = 10\text{ m/s}^2$.
a) Tính công tối thiểu máy bơm phải thực hiện.
b) Tính công suất có ích của máy bơm.
c) Biết hiệu suất của động cơ bơm là 80%, tính công suất điện thực tế mà máy bơm tiêu thụ.

**Bài 4 (Hệ Ròng rọc):** Một hệ thống pa-lăng gồm 1 ròng rọc cố định và 1 ròng rọc động được dùng để kéo một khối hàng $m = 120\text{ kg}$ lên cao $4\text{ m}$. Công nhân phải kéo một đoạn dây dài $8\text{ m}$ với lực kéo $F = 650\text{ N}$. 
a) Tính công có ích và công toàn phần.
b) Tính hiệu suất của hệ thống pa-lăng. Phần công hao phí do đâu mà có?

**Bài 5 (Nâng cao Python):** Cải tiến mã nguồn Python trong phần Thực hành (Section 7) bằng cách thêm vào một lực cản của không khí $F_c = -k \cdot v$ (với $k = 0.1 \text{ kg/s}$). Sử dụng phương pháp Euler để giải phương trình vi phân chuyển động. Vẽ lại đồ thị năng lượng và quan sát sự suy giảm của cơ năng toàn phần. 

## 11. Assessment Rubric / Bảng đánh giá

| Tiêu chí (Criteria) | Xuất sắc (90-100) / Excellent | Khá (70-89) / Good | Đạt (50-69) / Satisfactory | Cần cố gắng (<50) / Needs Improvement |
|---|---|---|---|---|
| **Hiểu lý thuyết (Theory Knowledge)** | Nắm vững xuất sắc mọi công thức. Giải thích được sự tinh tế giữa lực thế và lực phi thế trong bảo toàn cơ năng. | Hiểu đa số các khái niệm cơ bản. Áp dụng tốt công thức để tính động/thế năng nhưng đôi khi nhầm lẫn hệ dấu. | Nhớ công thức nhưng chưa hiểu sâu bản chất vật lí. Cần mớm lời để giải toán. | Không nắm được cơ bản, học vẹt, áp dụng sai công thức công cơ học. |
| **Kỹ năng Lab (Lab Skills)** | Thao tác thiết bị cảm biến chuẩn xác, chuyên nghiệp. Xử lý lỗi (troubleshoot) thiết bị nhanh chóng. An toàn tuyệt đối. | Thao tác khá, đôi khi cần xem lại tài liệu hướng dẫn sử dụng Photogate. An toàn. | Thực hiện được thí nghiệm nhưng còn lúng túng, chậm chạp. Phụ thuộc nhiều vào thành viên khác. | Không thực hiện được thí nghiệm, làm rơi vỡ đồ, vi phạm quy định an toàn phòng Lab. |
| **Báo cáo & Xử lý số liệu (Data & Report)** | Bảng số liệu hoàn hảo. Sai số được tính toán chặt chẽ bằng sai số truyền qua. Đồ thị vẽ bằng máy tính đẹp, trực quan. | Tính đúng đa số số liệu. Biểu diễn đồ thị tay rõ ràng. Lỗi phân tích sai số nhỏ. | Có số liệu nhưng đầy rẫy lỗi tính toán số học. Báo cáo cẩu thả, vẽ đồ thị sai tỷ lệ. | Không nộp báo cáo, copy số liệu của nhóm khác, hoặc chế số liệu không trung thực. |
| **Kỹ năng lập trình (Python Skills)** | Code chạy hoàn hảo. Có thêm các tính năng mở rộng (nhập xuất dữ liệu, animation). Comments rõ ràng chuyên nghiệp. | Code chạy mượt mà, cấu trúc ổn, đáp ứng đúng yêu cầu của phần thực hành. | Code chạy được sau vài lần gỡ lỗi với sự hỗ trợ của giáo viên. Đồ thị thiếu nhãn. | Không hiểu logic lập trình, không chạy được chương trình cơ bản. |
| **Kỹ năng mềm (Soft Skills & Attitude)** | Làm việc nhóm tích cực, phân công công việc rõ ràng. Lắng nghe và dẫn dắt nhóm đi đến mục tiêu. | Chăm chỉ, hợp tác tốt với các bạn. Có đóng góp vào kết quả chung. | Thụ động, chỉ làm theo chỉ đạo mà không đưa ra sáng kiến. | Không tập trung, làm việc riêng, gây mất đoàn kết nội bộ nhóm. |

## 12. Phụ lục bổ sung (Extra Notes & Explanations)
- **Công thức sai số:** Trong thí nghiệm, sai số tương đối (Relative Error) được tính bằng $\epsilon = \frac{|\text{Giá trị thực nghiệm} - \text{Giá trị lý thuyết}|}{\text{Giá trị lý thuyết}} \times 100\%$.
- **Lực thế (Conservative Forces):** Là những lực mà công do nó sinh ra trên một quỹ đạo khép kín bằng 0. Ví dụ nổi bật là Trọng lực và Lực đàn hồi. Lực ma sát không phải là lực thế vì khi đi một vòng khép kín, công của lực ma sát khác 0 (nó luôn âm).
- **Nguyên lý cực tiểu thế năng:** Trong tự nhiên, một hệ cơ học tĩnh luôn có xu hướng chuyển dịch về trạng thái có thế năng nhỏ nhất (vị trí cân bằng bền). Ví dụ, hòn bi luôn lăn xuống chỗ trũng nhất của cái bát.
- Nhấn mạnh cho sinh viên: Năng lượng không phải là một "vật chất" hữu hình mà ta có thể chạm vào. Nó là một khái niệm trừu tượng (abstract quantity), một công cụ toán học mạnh mẽ mà tự nhiên tuân theo một cách bí ẩn, giúp ta đoán trước được tương lai của hệ vật lý mà không cần giải phương trình lực phức tạp theo thời gian.

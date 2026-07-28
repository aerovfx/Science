# Tuần 7: Động Lượng & Định Luật Bảo Toàn Động Lượng / Week 7: Momentum & Law of Conservation of Momentum

## 1. Learning Objectives / Mục tiêu học tập

**Vietnamese (Tiếng Việt):**
- Hiểu khái niệm động lượng, véctơ động lượng của một vật và của hệ vật.
- Nhận biết mối quan hệ nhân-quả giữa xung lượng của lực (nguyên nhân) và độ biến thiên động lượng (kết quả).
- Nắm vững định luật bảo toàn động lượng cho hệ kín (hệ cô lập) theo các phương tọa độ.
- Phân biệt rõ bản chất vật lý giữa va chạm đàn hồi (bảo toàn cả động năng và động lượng) và va chạm mềm (chỉ bảo toàn động lượng, tiêu hao động năng).
- Vận dụng linh hoạt định luật bảo toàn động lượng để giải quyết các bài toán về va chạm 1D, 2D, nổ mảnh, và chuyển động bằng phản lực.
- Thực hành đo lường vận tốc và động lượng của xe trước và sau va chạm bằng xe kỹ thuật số, máng trượt đệm khí và cổng quang điện.
- Phân tích và giải thích nguyên lý hoạt động của thiết bị giảm chấn, súng giật lùi, tên lửa đẩy và các động cơ phản lực trong hàng không vũ trụ.
- Viết mã Python để mô phỏng và kiểm chứng sự bảo toàn động lượng trong các bài toán va chạm đa chiều phức tạp, có vẽ véctơ minh họa trực quan.
- Nhận thức được tầm quan trọng của động lượng trong thiết kế an toàn giao thông (túi khí ô tô, vùng nát hấp thụ xung lực).
- Rèn luyện kỹ năng phân tích lỗi hệ thống khi số liệu thí nghiệm thực tế không phản ánh sự bảo toàn tuyệt đối như lý thuyết.

**English:**
- Understand the concept of momentum, the momentum vector of a single object, and a system of objects.
- Recognize the cause-and-effect relationship between impulse (cause) and the change in momentum (effect).
- Master the law of conservation of momentum for closed (isolated) systems along coordinate axes.
- Clearly distinguish the physical nature between elastic collisions (conserving both kinetic energy and momentum) and inelastic collisions (conserving only momentum, losing kinetic energy).
- Flexibly apply momentum conservation to solve problems in 1D/2D collisions, explosive fragmentations, and recoil/jet motion.
- Practice measuring the velocity and momentum of carts before and after collisions using smart carts, air tracks, and photogates.
- Analyze and explain the working principles of shock absorbers, gun recoil, space rockets, and jet engines in aerospace.
- Write Python code to simulate and verify momentum conservation in complex multi-dimensional collision problems, including visual vector rendering.
- Recognize the importance of momentum in traffic safety engineering (car airbags, crumple zones).
- Refine skills in systemic error analysis when real experimental data deviates from perfect theoretical conservation.

## 2. Related Textbook Lessons / Bài học SGK liên quan chi tiết

Chương này thuộc **Chương V: Động Lượng** (SGK Kết nối tri thức với cuộc sống - Vật lí 10).
- **SGK KNTT Bài 25: Động lượng / Momentum.**
  - Nhắc lại định luật II Newton dưới dạng tổng quát: $\vec{F} = \frac{\Delta \vec{p}}{\Delta t}$ thay vì chỉ là $\vec{F} = m\vec{a}$.
  - Giải thích xung lực là gì và tại sao thời gian tác dụng lực $\Delta t$ lại cực kỳ quan trọng trong thực tế.
- **SGK KNTT Bài 26: Định luật bảo toàn động lượng / Law of conservation of momentum.**
  - Khái niệm hệ kín (hệ cô lập). Phân biệt nội lực và ngoại lực.
  - Thiết lập phương trình bảo toàn động lượng.
  - Các dạng bài tập va chạm (mềm, đàn hồi) và ứng dụng thực tiễn của chuyển động bằng phản lực (tên lửa nước, động cơ phản lực).
- **SGK KNTT Bài 27: Thực hành: Xác định động lượng của vật trước và sau va chạm.**
  - Kỹ thuật sử dụng xe trượt động lực học.
  - Đánh giá sai số từ ma sát của thiết bị.
- **Các phần mở rộng (Đọc thêm):** 
  - Vận tốc vũ trụ cấp 1 và cấp 2 trong công nghệ thám hiểm không gian.
  - Túi khí (Airbag) ô tô bung ra như thế nào trong 30 mili-giây để cứu mạng người.
  - Súng trường tấn công sử dụng lò xo lùi (recoil spring) để hấp thụ động lượng giật lùi như thế nào.

## 3. Lab Equipment & Tools / Dụng cụ và thiết bị thực hành

| Dụng cụ (VI) | Equipment (EN) | Giá dự kiến (VND) | Nơi mua / Availability | Ghi chú / Notes |
|---|---|---|---|---|
| Xe trượt động lực học | Dynamics Carts | 800,000/cặp | Cty thiết bị Giáo dục | Có đệm nam châm cho va chạm đàn hồi, và miếng dán velcro cho va chạm mềm. Bánh xe ma sát siêu thấp. |
| Máng trượt nhôm dài | Aluminum Track | 1,500,000 | Cty thiết bị Giáo dục | Dài 1.2m, có thước chia vạch sẵn trên thân máng. Có chân đế điều chỉnh thăng bằng. |
| Máng trượt đệm khí | Air Track | 5,000,000 | Đại lý chuyên ngành | (Tùy chọn) Máy nén khí thổi qua các lỗ nhỏ nâng xe lên khỏi mặt máng, loại bỏ >99% ma sát. |
| Cổng quang điện (x2) | Photogates | 600,000/cặp | Shopee/Lazada | Gắn dọc theo máng trượt để đo thời gian xe che khuất tia sáng. Độ nhạy $10^{-4}$ giây. |
| Lá cản sáng | Picket Fence/Flags| 50,000 | Đi kèm cổng quang | Gắn lên thân xe để che tia hồng ngoại của cổng quang điện. Bề rộng $1cm$ hoặc $5cm$. |
| Bộ quả nặng bổ sung | Mass Set | 150,000 | Shopee/Lazada | Các miếng thép 50g, 100g thiết kế riêng để thả gọn vào khay của xe trượt. |
| Bộ thu nhận số liệu | Datalogger | 2,500,000 | Cty thiết bị Giáo dục | Nhận tín hiệu từ Photogates và tính toán ra vận tốc hiển thị trực tiếp lên màn hình/máy tính. |
| Cân điện tử tiểu ly | Digital Scale | 250,000 | Siêu thị | Dùng để cân chính xác khối lượng của từng xe và các quả nặng phụ trợ. |
| Giọt nước thăng bằng| Spirit Level | 50,000 | Cửa hàng kim khí | Dùng để canh chỉnh máng trượt sao cho tuyệt đối nằm ngang, loại bỏ thành phần của trọng lực. |

## 4. Theory Explanations / Lý thuyết và Công thức chi tiết

### 4.1. Động lượng / Linear Momentum
- **Định nghĩa:** Động lượng là đại lượng vật lý véctơ đặc trưng cho khả năng truyền chuyển động của một vật. Khi một vật nặng di chuyển nhanh, nó có động lượng lớn, rất khó để làm nó dừng lại.
- **Công thức cơ bản:** 
  $$ \vec{p} = m\vec{v} $$
  - $\vec{p}$: Động lượng, đơn vị là $kg \cdot m/s$. Véctơ $\vec{p}$ luôn cùng phương, cùng chiều với véctơ vận tốc $\vec{v}$.
  - $m$: Khối lượng của vật ($kg$).
  - $\vec{v}$: Vận tốc của vật ($m/s$).
- **Động lượng của một hệ vật:** Bằng tổng véctơ các động lượng của các vật trong hệ.
  $$ \vec{p}_{hệ} = \vec{p}_1 + \vec{p}_2 + \dots = m_1\vec{v}_1 + m_2\vec{v}_2 + \dots $$

### 4.2. Xung lượng của lực và độ biến thiên động lượng / Impulse & Momentum Change
- Dạng nguyên thủy của Định luật II Newton (bởi Isaac Newton) không phải là $F = ma$, mà là lực bằng tốc độ thay đổi động lượng.
  $$ \vec{F}_{net} = \frac{\Delta \vec{p}}{\Delta t} $$
- **Xung lượng (Impulse):** Khi lực $\vec{F}$ tác dụng trong thời gian ngắn $\Delta t$, tích $\vec{F} \Delta t$ được gọi là xung lượng của lực.
- **Định lý biến thiên động lượng:**
  $$ \Delta \vec{p} = \vec{p}_{sau} - \vec{p}_{trước} = \vec{F}_{net} \cdot \Delta t $$
- **Ý nghĩa kỹ thuật:** Để làm thay đổi một lượng động lượng $\Delta p$ nhất định (ví dụ dừng một chiếc xe đang chạy nhanh), ta có thể dùng lực rất lớn $\vec{F}$ trong thời gian rất ngắn $\Delta t$ (gây gãy vỡ, chấn thương), hoặc dùng lực nhỏ $\vec{F}$ trải dài trong thời gian lớn $\Delta t$ (an toàn). Túi khí trên xe hơi hoạt động bằng cách làm phồng lên để kéo dài thời gian va chạm $\Delta t$ của đầu người lái xe, qua đó giảm lực $\vec{F}$ tác động vào sọ não.

### 4.3. Định luật bảo toàn động lượng / Conservation of Momentum
- **Hệ kín (Hệ cô lập):** Là hệ mà các vật trong hệ chỉ tương tác với nhau (sinh ra nội lực) và không tương tác với các vật ngoài hệ, hoặc tổng các ngoại lực tác dụng lên hệ bằng 0 ($\sum \vec{F}_{ngoại} = 0$).
- **Định luật:** Động lượng toàn phần của một hệ kín là một đại lượng bảo toàn (không thay đổi theo thời gian).
- **Phương trình véctơ:** 
  $$ \sum \vec{p}_{trước} = \sum \vec{p}_{sau} $$
  $$ m_1\vec{v}_1 + m_2\vec{v}_2 = m_1\vec{v}_1' + m_2\vec{v}_2' $$
- *Chú ý:* Phương trình trên là phương trình véctơ. Khi giải toán cần chọn hệ trục tọa độ và chiếu các véctơ lên các trục (Ox, Oy) để chuyển thành phương trình đại số.

### 4.4. Phân loại Va chạm / Collisions
- **Va chạm đàn hồi (Elastic Collision):** 
  - Là va chạm lý tưởng, các vật nảy ra khỏi nhau sau va chạm.
  - Đặc điểm: Bảo toàn CẢ động lượng và động năng.
  - Phương trình 1 (Động lượng): $m_1\vec{v}_1 + m_2\vec{v}_2 = m_1\vec{v}_1' + m_2\vec{v}_2'$
  - Phương trình 2 (Động năng): $\frac{1}{2}m_1v_1^2 + \frac{1}{2}m_2v_2^2 = \frac{1}{2}m_1v_1'^2 + \frac{1}{2}m_2v_2'^2$
  - Từ 2 phương trình này suy ra vận tốc tương đối trước và sau va chạm: $v_1 - v_2 = -(v_1' - v_2')$.

- **Va chạm mềm (Perfectly Inelastic Collision):** 
  - Sau va chạm hai vật dính chặt vào nhau và cùng chuyển động với chung một vận tốc $\vec{V}$.
  - Đặc điểm: Chỉ bảo toàn Động lượng. Động năng hệ bị giảm tối đa (một phần lớn động năng biến thành nhiệt năng hoặc công phá vỡ cấu trúc).
  - Phương trình: $m_1\vec{v}_1 + m_2\vec{v}_2 = (m_1 + m_2)\vec{V}$

### 4.5. Chuyển động bằng phản lực / Recoil Motion
- Dựa trên sự bảo toàn động lượng của hệ kín (với động lượng ban đầu bằng 0).
- **Nguyên lý Súng giật lùi:** Trước khi bắn hệ súng-đạn có động lượng 0. Khi đạn khối lượng $m$ bay tới trước với vận tốc $\vec{v}$, súng khối lượng $M$ sẽ giật lùi với vận tốc $\vec{V}$.
  $$ M\vec{V} + m\vec{v} = 0 \Rightarrow \vec{V} = -\frac{m}{M}\vec{v} $$
- **Nguyên lý Động cơ Tên lửa:** Tên lửa đốt nhiên liệu và liên tục phụt một lượng khí nóng ra phía sau. Động lượng của luồng khí xả ra sau sẽ tạo ra một động lượng bằng và ngược chiều cho khối lượng còn lại của tên lửa, đẩy nó bay tới trước trong môi trường chân không ngoài không gian (nơi không có không khí để cánh quạt hoạt động).

### 4.6. Worked Numerical Examples / Bài toán ví dụ (Giải chi tiết)

**Ví dụ 1 (Example 1): Bài toán Va chạm mềm trên đường ray 1D**
Một toa tàu hàng khối lượng $m_1 = 40,000 \text{ kg}$ chuyển động với vận tốc $v_1 = 3 \text{ m/s}$ dọc theo một đường ray ngang đến đâm vào một toa tàu thứ hai khối lượng $m_2 = 60,000 \text{ kg}$ đang đứng yên ($v_2 = 0$). Các bộ cản (couplers) khóa hai toa tàu lại với nhau ngay khi va chạm.
a) Tính vận tốc chung của hai toa tàu ngay sau khi gắn vào nhau.
b) Tính phần trăm động năng ban đầu đã bị tiêu hao trong vụ va chạm này.

**Giải (Solution):**
a) Gọi chiều chuyển động ban đầu của toa 1 là chiều dương trục Ox.
Vì không có ngoại lực cản trở đáng kể theo phương ngang trong thời gian ngắn của va chạm, hệ 2 toa tàu là hệ kín. Áp dụng ĐL bảo toàn động lượng:
$$ P_{trước} = P_{sau} $$
$$ m_1 v_1 + m_2 v_2 = (m_1 + m_2)V $$
Thay số:
$$ 40000 \cdot 3 + 60000 \cdot 0 = (40000 + 60000) \cdot V $$
$$ 120,000 = 100,000 \cdot V \Rightarrow V = 1.2 \text{ (m/s)} $$
Hai toa tàu cùng tiếp tục tiến tới trước với vận tốc $1.2 \text{ m/s}$.

b) Tính sự hao hụt động năng:
Động năng ban đầu của hệ:
$$ W_{d1} = \frac{1}{2}m_1v_1^2 = \frac{1}{2} \cdot 40000 \cdot (3)^2 = 20000 \cdot 9 = 180,000 \text{ (J)} $$
Động năng sau va chạm của hệ dính liền:
$$ W_{d2} = \frac{1}{2}(m_1+m_2)V^2 = \frac{1}{2} \cdot 100000 \cdot (1.2)^2 = 50000 \cdot 1.44 = 72,000 \text{ (J)} $$
Năng lượng bị hao hụt (chuyển thành âm thanh, nhiệt tại chốt khóa, biến dạng):
$$ \Delta W = W_{d1} - W_{d2} = 180,000 - 72,000 = 108,000 \text{ (J)} $$
Phần trăm hao hụt:
$$ \text{Loss} \% = \frac{\Delta W}{W_{d1}} \times 100\% = \frac{108,000}{180,000} \times 100\% = 60\% $$

**Ví dụ 2 (Example 2): Bài toán Đạn nổ / Va chạm 2D**
Một viên đạn pháo khối lượng $M = 3 \text{ kg}$ đang bay theo phương ngang với tốc độ $v = 100 \text{ m/s}$ thì bất ngờ nổ thành 2 mảnh. Mảnh thứ nhất có khối lượng $m_1 = 1 \text{ kg}$ bay vọt lên thẳng đứng (vuông góc với hướng ban đầu) với tốc độ $v_1 = 400 \text{ m/s}$.
Tìm hướng bay và tốc độ của mảnh thứ hai $m_2$.

**Giải (Solution):**
Đây là bài toán 2 chiều (2D). Chọn hệ trục tọa độ Oxy: Trục Ox nằm ngang theo hướng đạn pháo ban đầu. Trục Oy thẳng đứng hướng lên.
Hệ kín vì nội lực của vụ nổ (cực lớn) át hoàn toàn ngoại lực (trọng lực) trong chớp mắt.
Khối lượng mảnh 2: $m_2 = M - m_1 = 3 - 1 = 2 \text{ (kg)}$.
- Động lượng ban đầu của đạn (trước nổ):
  $P_{0x} = M \cdot v = 3 \cdot 100 = 300 \text{ (kg m/s)}$
  $P_{0y} = 0$
- Động lượng của mảnh 1 (sau nổ):
  $P_{1x} = 0$ (vì bay thẳng đứng)
  $P_{1y} = m_1 \cdot v_1 = 1 \cdot 400 = 400 \text{ (kg m/s)}$
- Động lượng của mảnh 2: $P_{2x}, P_{2y}$
Áp dụng bảo toàn động lượng cho từng trục:
- Trục Ox: $P_{0x} = P_{1x} + P_{2x} \Rightarrow 300 = 0 + m_2 \cdot v_{2x} \Rightarrow 2 \cdot v_{2x} = 300 \Rightarrow v_{2x} = 150 \text{ m/s}$
- Trục Oy: $P_{0y} = P_{1y} + P_{2y} \Rightarrow 0 = 400 + m_2 \cdot v_{2y} \Rightarrow 2 \cdot v_{2y} = -400 \Rightarrow v_{2y} = -200 \text{ m/s}$

Tốc độ của mảnh 2:
$$ v_2 = \sqrt{v_{2x}^2 + v_{2y}^2} = \sqrt{150^2 + (-200)^2} = \sqrt{22500 + 40000} = \sqrt{62500} = 250 \text{ m/s} $$
Hướng bay của mảnh 2 hợp với phương ngang một góc $\theta$:
$$ \tan\theta = \frac{v_{2y}}{v_{2x}} = \frac{-200}{150} = -\frac{4}{3} \Rightarrow \theta \approx -53.1^\circ $$
Mảnh thứ hai bay với tốc độ $250 \text{ m/s}$ chúi xuống dưới hợp với phương ngang góc $53.1^\circ$.

## 5. Diagrams and Models / Sơ đồ và Mô hình

Sơ đồ véctơ Động lượng vụ nổ đạn pháo 2D:
```ascii
                   y
                   ^
                   |  P1 (m1*v1 = 400)
                   |  ^
                   |  |
                   |  |
   P_initial       |  |
 (M*v = 300) ----> +-------------------> x
                   | \
                   |  \
                   |   \  P2 (m2*v2 = 500, x=300, y=-400)
                   |    \
                   |     v
```

Sơ đồ nguyên lý túi khí ô tô (Impulse - Xung lực):
```ascii
   Lực F (N)
   |
   |
 F1|---|     (Va chạm cứng vào vô lăng / Hard crash: thời gian ngắn, Lực cực lớn)
   |   |
   |   |
 F2|   |           /--------\ (Có túi khí Airbag: thời gian va chạm kéo dài, Lực nhỏ đi)
   |   |          /          \
   |   |         /            \
   +-------------------------------------> Thời gian t (s)
      t1        t2            t3
   
   *Diện tích dưới 2 đường cong là bằng nhau (Đều bằng độ biến thiên động lượng Delta P của người lái)
```

## 6. Step-by-step Hands-on Experiments / Thực hành mở rộng

### 6.1. Mục đích / Purpose
Sử dụng hệ thống máng trượt và cổng quang điện để thu thập số liệu xác định độ chính xác của định luật bảo toàn động lượng trong hai trường hợp: Va chạm đàn hồi (có nam châm đẩy nhau) và va chạm mềm (dính bằng dán velcro).

### 6.2. Các bước tiến hành / Procedures
1. **Canh chỉnh thiết bị:** Đặt máng trượt nhôm lên mặt bàn vững chắc. Dùng thước có giọt nước (Spirit level) kiểm tra độ thăng bằng. Vặn các vít chân máng sao cho máng tuyệt đối nằm ngang. (Nếu máng nghiêng, trọng lực sẽ kéo xe chạy làm sai lệch số liệu).
2. **Setup Cảm biến:** Gắn 2 cổng quang điện (Photogate A và B) lên máng, cách nhau khoảng 40cm. Cắm cáp nối vào bộ Datalogger. Lắp lá cản sáng rộng $D = 0.05 \text{m}$ (5cm) lên nóc cả 2 xe trượt.
3. **Cân xe:** Đưa Xe 1 và Xe 2 lên cân điện tử, ghi lại khối lượng $m_1, m_2$.
4. **THÍ NGHIỆM 1 (Va chạm đàn hồi):** 
   - Đặt Xe 2 đứng yên ở giữa 2 cổng quang điện. Bố trí các đầu xe có nam châm cùng chiều hướng vào nhau để đẩy nhau khi lại gần.
   - Bật Datalogger chế độ "Collision Timer".
   - Dùng tay đẩy nhẹ Xe 1 từ bên ngoài cổng A đi vào. Xe 1 đi qua cổng A (máy tính đo $v_{1(trước)}$). 
   - Xe 1 va vào Xe 2 bằng đệm từ tính. Xe 2 bị đẩy vọt qua cổng B (máy đo $v_{2(sau)}$). Tùy tỷ lệ khối lượng, Xe 1 có thể bật ngược lại qua cổng A hoặc chạy chậm lại qua cổng B. 
   - Lưu lại bộ dữ liệu. Thêm quả nặng 200g vào Xe 1, lặp lại thí nghiệm.
5. **THÍ NGHIỆM 2 (Va chạm mềm):**
   - Đảo đầu 2 xe để các dải băng gai Velcro hướng vào nhau. 
   - Vẫn đặt Xe 2 đứng yên ở giữa. Đẩy Xe 1 qua cổng A.
   - Hai xe dính vào nhau sau va chạm và khối hệ $(m_1+m_2)$ cùng đi qua cổng B. Máy tính đo $v_{hệ(sau)}$.
   - Lưu dữ liệu. Thay đổi khối lượng và thực hiện ít nhất 3 lần đo.

### 6.3. Bảng xử lý số liệu thí nghiệm / Data Table
*Mẫu xử lý số liệu cho va chạm mềm (Inelastic collision)*
$m_1 = 0.25\text{ kg}$, $m_2 = 0.25\text{ kg}$, Xe 2 ban đầu đứng yên $v_{2(trước)} = 0$.
Lá cản sáng $D = 0.05\text{ m}$.

| Lần đo | $\Delta t_1$ tại Cổng A (s) | $v_1$ trước (m/s) | Động lượng hệ trước $P_0$ | $\Delta t_{hệ}$ tại Cổng B (s) | $V_{sau}$ (m/s) | Động lượng hệ sau $P$ | Sai số % |
|---|---|---|---|---|---|---|---|
| 1 | 0.062 | $0.05/0.062 = 0.806$ | $0.25 \times 0.806 = 0.2015$ | 0.128 | $0.05/0.128 = 0.390$ | $0.50 \times 0.390 = 0.1950$ | 3.2% |
| 2 | 0.050 | $0.05/0.050 = 1.000$ | $0.25 \times 1.000 = 0.2500$ | 0.104 | $0.05/0.104 = 0.480$ | $0.50 \times 0.480 = 0.2400$ | 4.0% |
| 3 | 0.045 | $0.05/0.045 = 1.111$ | $0.25 \times 1.111 = 0.2778$ | 0.093 | $0.05/0.093 = 0.537$ | $0.50 \times 0.537 = 0.2685$ | 3.3% |

*Nhận xét:* Tổng động lượng của hệ trước và sau va chạm gần như xấp xỉ bằng nhau. Độ hụt động lượng khoảng 3-4% là do một phần nhỏ ma sát bám của đường ray và sức cản của luồng không khí hất ra khi 2 xe đập vào nhau. Định luật được nghiệm đúng.

## 7. Python Lab / Thực hành Python chi tiết

Mô phỏng đồ họa hiển thị véctơ trong bài toán Va chạm đàn hồi 2 chiều (2D Elastic Collision) bằng Python. Trực quan hóa sự bảo toàn động lượng dưới dạng quy tắc hình bình hành véctơ.

```python
"""
Mô phỏng Va chạm đàn hồi 2D và kiểm chứng định luật bảo toàn động lượng.
2D Elastic Collision Simulation and Momentum Conservation Verification.
"""
import numpy as np
import matplotlib.pyplot as plt

def simulate_2d_collision():
    # 1. Các thông số đầu vào (Input parameters)
    m1 = 2.0  # Khối lượng viên bi 1 (kg)
    m2 = 3.0  # Khối lượng viên bi 2 (kg)
    
    # Vận tốc ban đầu (Initial velocity vectors)
    u1 = np.array([5.0, 0.0])   # Bi 1 di chuyển dọc trục x
    u2 = np.array([0.0, 0.0])   # Bi 2 đứng yên
    
    # 2. Xử lý va chạm đàn hồi 2D (Calculate collision)
    # Giả sử do góc chạm, viên bi 1 bị tán xạ ở góc 30 độ (pi/6 rad) lên trên.
    # Ta phải giải hệ phương trình bảo toàn động lượng & động năng.
    theta1 = np.radians(30)
    
    # (Đoạn mã sau giải quyết PT bảo toàn động lượng & động năng để tìm độ lớn v1)
    # v1^2*(m1+m1^2/m2) - 2*v1*(m1^2*u1*cos(theta1)/m2) + m1^2*u1^2/m2 - m1*u1^2 = 0
    a = m1 + (m1**2)/m2
    b = -2 * (m1**2 * u1[0] * np.cos(theta1)) / m2
    c = (m1**2 * u1[0]**2)/m2 - m1 * u1[0]**2
    
    roots = np.roots([a, b, c])
    # Chọn nghiệm dương vật lý
    v1_mag = np.max(roots)
    
    # Vận tốc v1 theo dạng véctơ
    v1 = np.array([v1_mag * np.cos(theta1), v1_mag * np.sin(theta1)])
    
    # Tính vận tốc v2 từ bảo toàn động lượng: m1*u1 + m2*u2 = m1*v1 + m2*v2
    p_initial = m1 * u1 + m2 * u2
    p_final_1 = m1 * v1
    p_final_2 = p_initial - p_final_1
    v2 = p_final_2 / m2
    
    # 3. In kết quả tính toán ra màn hình (Print results)
    print("--- KIỂM CHỨNG BẢO TOÀN ĐỘNG LƯỢNG (MOMENTUM) ---")
    print(f"Tổng Động lượng ban đầu: P = {p_initial} kg.m/s")
    print(f"Động lượng bi 1 sau va chạm: p1' = {p_final_1}")
    print(f"Động lượng bi 2 sau va chạm: p2' = {p_final_2}")
    print(f"Tổng Động lượng sau va chạm: P' = {p_final_1 + p_final_2}")
    
    print("\n--- KIỂM CHỨNG BẢO TOÀN ĐỘNG NĂNG (KINETIC ENERGY) ---")
    E_initial = 0.5 * m1 * np.dot(u1, u1) + 0.5 * m2 * np.dot(u2, u2)
    E_final = 0.5 * m1 * np.dot(v1, v1) + 0.5 * m2 * np.dot(v2, v2)
    print(f"Tổng động năng trước: {E_initial:.2f} J")
    print(f"Tổng động năng sau: {E_final:.2f} J")
    
    # 4. Trực quan hóa véctơ động lượng (Visualize Vectors)
    plt.figure(figsize=(10, 8))
    
    # Vẽ gốc tọa độ
    plt.plot(0, 0, 'ko', markersize=10, label='Điểm va chạm (Impact point)')
    
    # Định nghĩa hàm hỗ trợ vẽ véctơ
    def draw_vector(ax, origin, vector, color, name, offset=0):
        ax.quiver(*origin, *vector, angles='xy', scale_units='xy', scale=1, color=color, width=0.005)
        ax.text(origin[0] + vector[0]/2, origin[1] + vector[1]/2 + offset, name, color=color, fontsize=12, fontweight='bold')

    ax = plt.gca()
    # Véctơ tổng động lượng trước
    draw_vector(ax, [0,0], p_initial, 'black', 'P (Tổng ban đầu)', offset=0.5)
    
    # Véctơ động lượng sau của bi 1 & bi 2
    draw_vector(ax, [0,0], p_final_1, 'blue', 'p1 (Mảnh 1)')
    draw_vector(ax, [0,0], p_final_2, 'red', 'p2 (Mảnh 2)')
    
    # Vẽ quy tắc hình bình hành (Dotted lines)
    plt.plot([p_final_1[0], p_initial[0]], [p_final_1[1], p_initial[1]], 'r--', alpha=0.5)
    plt.plot([p_final_2[0], p_initial[0]], [p_final_2[1], p_initial[1]], 'b--', alpha=0.5)
    
    # Định dạng đồ thị
    plt.xlim(-2, 12)
    plt.ylim(-6, 6)
    plt.grid(True, linestyle=':')
    plt.title('Bảo Toàn Véctơ Động Lượng Trong Va Chạm 2D\n(Momentum Vector Conservation in 2D Collision)', fontsize=14)
    plt.axhline(0, color='grey', linewidth=1)
    plt.axvline(0, color='grey', linewidth=1)
    plt.legend()
    
    plt.savefig('2d_collision_vectors.png', dpi=300)
    print("\nĐồ thị đã được lưu: '2d_collision_vectors.png'")

if __name__ == "__main__":
    simulate_2d_collision()
```

## 8. Safety Warnings / Cảnh báo an toàn ⚠️

**VI:**
1. Tránh đẩy xe trượt quá mạnh trong phòng thí nghiệm. Lực tác động lớn có thể làm xe văng khỏi rãnh máng trượt và rơi xuống đất, làm gãy vỡ cảm biến gia tốc và vi mạch siêu nhỏ bên trong (đối với xe Smart Cart trị giá cao).
2. Khi sử dụng máng đệm khí (Air track), tuyệt đối không để bụi, vật sắc nhọn làm xước bề mặt nhôm. Các vết xước sẽ làm xì khí, mất lớp đệm ma sát.
3. Nếu thí nghiệm bắn đạn hoặc làm tên lửa nước, luôn thực hiện ngoài trời ở bãi đất trống. Đeo kính bảo hộ, và nghiêm cấm việc hướng mũi tên lửa / nòng bắn về phía bất kỳ sinh vật sống nào.
4. Đảm bảo các cổng quang điện được kẹp chặt vào máng bằng ốc vít để tránh xê dịch trong quá trình đo, làm hỏng độ chính xác của khoảng cách đo.

**EN:**
1. Avoid pushing carts too hard in the lab. High impacts can cause carts to derail from the track and fall to the floor, shattering accelerometers and microchips inside (especially for expensive Smart Carts).
2. When using an air track, absolutely keep dust and sharp objects away to prevent scratching the aluminum surface. Scratches will cause air leaks, destroying the frictionless air cushion.
3. If conducting projectile or water rocket experiments, always do so outdoors in an open field. Wear safety goggles, and strictly prohibit aiming the rocket nose/barrel at any living creature.
4. Ensure photogates are tightly clamped to the track with screws to prevent shifting during measurements, which ruins the accuracy of the measured distance.

## 9. Discussion Questions / Câu hỏi thảo luận chuyên sâu

1. **Question 1:** Tại sao trong các vụ tai nạn giao thông đối đầu (head-on collision), hai chiếc xe tải cùng khối lượng và cùng vận tốc đâm vào nhau lại gây thiệt hại (biến dạng xe) tương đương với việc một chiếc xe đâm vào một bức tường đá không thể dịch chuyển với cùng vận tốc đó? (Dùng phân tích động năng và động lượng).
   - *Gợi ý (Hint):* Khi 2 xe giống nhau đâm đối đầu, do bảo toàn động lượng, vận tốc sau va chạm của khối dính liền là $V=0$. Cả hai xe mất toàn bộ động năng của mình, động năng đó biến thành công phá vỡ cấu trúc của chính xe đó. Đối với bức tường, bức tường không nhận động năng (khối lượng Trái Đất vô hạn), nên chiếc xe duy nhất đâm vào tường cũng mất toàn bộ động năng của nó để phá vỡ cấu trúc của chính nó. Tác động vật lý (mức hấp thụ năng lượng) lên mỗi xe là như nhau.

2. **Question 2:** Túi khí ô tô (Airbag) và dây đai an toàn (Seatbelt) cứu sống hành khách như thế nào theo quan điểm của khái niệm "Xung lượng của lực"?
   - *Gợi ý (Hint):* Xung lượng $F \cdot \Delta t = \Delta P$. $\Delta P$ của người là cố định (phải giảm vận tốc từ 100km/h về 0). Túi khí mềm và dây an toàn có độ đàn hồi làm kéo dài thời gian va chạm $\Delta t$ từ 0.01s lên 0.1s. Khi $\Delta t$ tăng 10 lần, lực tác động $F$ làm chấn thương lồng ngực và sọ não sẽ giảm đi 10 lần tới mức chịu đựng được của cơ thể.

3. **Question 3:** Nguyên lý bảo toàn động lượng được con mực, bạch tuộc áp dụng như thế nào trong tự nhiên để thoát khỏi kẻ thù?
   - *Gợi ý (Hint):* Chúng hút một lượng nước lớn vào khoang cơ thể, sau đó co bóp thật mạnh để phụt tia nước ra phía sau qua một lỗ nhỏ. Tia nước mang khối lượng nhỏ nhưng vận tốc cực lớn tạo ra động lượng $\vec{p}_{nước}$. Cơ thể con mực sẽ nhận phản lực tạo ra động lượng $\vec{p}_{mực}$ ngược chiều để phóng đi với tốc độ cao. (Đúng nguyên lý động cơ phản lực).

4. **Question 4:** Khi một phi hành gia thực hiện đi bộ không gian ngoài trạm ISS (Spacewalk), nếu dây buộc an toàn bị đứt và không có vật gì để bám, làm thế nào người đó có thể sử dụng định luật bảo toàn động lượng để bay trở lại trạm?
   - *Gợi ý (Hint):* Phi hành gia phải hy sinh ném một đồ vật nặng mang theo (như cờ lê, kìm) thật mạnh về phía KHÔNG gian sâu thẳm (hướng xa trạm). Nhờ bảo toàn động lượng, cơ thể phi hành gia sẽ nhận được một vận tốc nhỏ giật lùi về phía trạm. Nếu ném hướng về trạm, người đó sẽ trôi dạt ra xa mãi mãi.

5. **Question 5:** Tại sao động năng không được bảo toàn trong va chạm mềm, và nguồn năng lượng bị "mất đi" đó đã làm gì?
   - *Gợi ý (Hint):* Các vật thể không phải là chất điểm cứng tuyệt đối. Khi va chạm, bề mặt vật chất bị bẻ cong, vỡ nát, đè nén. Các tương tác vi mô giữa các phân tử gây ra lực ma sát nội. Phần động năng bị giảm đã thực hiện công làm biến dạng vĩnh viễn hệ thống và tỏa lượng nhiệt lớn.

## 10. Homework & Practice Problems / Bài tập về nhà

**Bài 1 (Khởi động - 1D):** Một viên đạn khối lượng $50\text{ g}$ bay với vận tốc $800\text{ m/s}$ theo phương ngang, xuyên qua một khối gỗ $m = 5\text{ kg}$ đang nằm yên trên mặt bàn nhẵn không ma sát. Sau khi xuyên qua khối gỗ, vận tốc đạn suy giảm còn $200\text{ m/s}$. Tính vận tốc trượt của khối gỗ ngay sau khi đạn xuyên qua. Tính lượng động năng bị mất đi do lực cản của gỗ.

**Bài 2 (Đạn nổ - Bảo toàn 2 hướng):** Một quả lựu đạn khối lượng $M = 1.2\text{ kg}$ đang bay theo phương ngang với vận tốc $v = 15\text{ m/s}$ thì phát nổ thành 2 mảnh. Mảnh thứ nhất $m_1 = 0.8\text{ kg}$ bay thẳng đứng lên trên với vận tốc $v_1 = 30\text{ m/s}$. 
a) Bỏ qua lực hấp dẫn trong lúc nổ. Tìm vận tốc (độ lớn và hướng) của mảnh thứ hai $m_2$.
b) Giải thích tại sao mảnh thứ hai bắt buộc phải bay chệch xuống dưới.

**Bài 3 (Xung lượng búa tạ):** Một công nhân dùng búa tạ nặng $m = 4\text{ kg}$ đóng một cái cọc xuống đất. Búa đập vào đầu cọc với vận tốc $10\text{ m/s}$ và dừng hẳn lại sau $0.05\text{ s}$. Tính lực đập trung bình của búa lên đầu cọc. Nếu mặt đất cứng hơn làm búa dừng lại chỉ trong $0.01\text{ s}$, lực tác dụng lên cọc lúc này là bao nhiêu?

**Bài 4 (Hành trình không gian - Tên lửa):** Một vệ tinh không gian khối lượng $1000\text{ kg}$ (bao gồm cả khối lượng nhiên liệu) đang bay với tốc độ $5000\text{ m/s}$. Động cơ hoạt động trong chớp mắt (tức thời) xả ra phía sau $100\text{ kg}$ khí thải với tốc độ $2000\text{ m/s}$ (so với bản thân vệ tinh lúc chưa xả khí). Tính vận tốc mới của vệ tinh ngay sau khi phun khí.

**Bài 5 (Nâng cao Python):** Sinh viên sử dụng kiến thức về thuật toán vật lý để viết một đoạn code Python tính toán hàng loạt kết quả vận tốc sau va chạm của 100 chiếc xe va chạm đàn hồi 1D nối tiếp nhau (mô phỏng con lắc Newton - Newton's Cradle) và hiển thị kết quả ra Terminal hoặc xuất đồ thị. Khối lượng các bi có thể tùy chỉnh.

## 11. Assessment Rubric / Bảng đánh giá Tổng hợp

| Tiêu chí (Criteria) | Xuất sắc (90-100) / Excellent | Khá (70-89) / Good | Đạt (50-69) / Satisfactory | Cần cố gắng (<50) / Needs Improvement |
|---|---|---|---|---|
| **Hiểu lý thuyết (Theory Knowledge)** | Phân biệt rõ bản chất các loại va chạm. Giải thích bài toán súng/tên lửa chuẩn xác. Chứng minh được phương trình bảo toàn. | Hiểu và áp dụng đúng định luật bảo toàn động lượng. Đôi khi nhầm lẫn giữa bảo toàn động năng và động lượng. | Gặp khó khăn khi thiết lập hệ phương trình cho bài toán nổ 2D. Quên chiều của véctơ. | Hoàn toàn không hiểu định luật, cộng vận tốc đại số thay vì véctơ dẫn đến sai toàn bài. |
| **Kỹ năng Lab (Lab Skills)** | Set up cổng quang điện hoàn hảo, canh thăng bằng máng chuẩn, thu số liệu đẹp và tự sửa lỗi phần mềm. | Sử dụng tốt cổng quang điện và xe trượt. Cần giáo viên hướng dẫn khởi động Datalogger. | Thu được số liệu nhưng còn lúng túng khi lấy gốc thời gian. Gây ồn ào. | Làm hỏng thiết bị, làm rơi xe trượt, số liệu lệch hoàn toàn do đẩy xe sai cách. |
| **Báo cáo & Xử lý số liệu (Data & Report)** | Xử lý excel xuất sắc, tính đúng \% hao hụt, lý giải nguyên nhân vật lý cụ thể đằng sau sai số (ma sát, lực cản). | Báo cáo đầy đủ, tính đúng nhưng giải thích sai số hời hợt "do ma sát" chung chung. | Báo cáo thiếu bước tính hao hụt động năng. Bảng biểu lộn xộn. | Không nộp báo cáo, chữ viết tay không đọc được, copy kết quả. |
| **Kỹ năng lập trình (Python Skills)** | Code chạy trơn tru, đồ thị quy tắc hình bình hành chuẩn xác, trang trí màu sắc phân biệt rõ ràng. | Code đúng logic đại số, nhưng lỗi nhỏ khi vẽ đồ thị (sai tọa độ điểm cuối của vector). | Chạy được chương trình nhưng không tùy chỉnh được code để tự thiết kế bài toán khác. | Không thực hiện bài tập code, nộp file lỗi syntax. |
| **Khả năng Tư duy phản biện (Critical Thinking)** | Trả lời sắc bén các câu hỏi thảo luận về an toàn ô tô, du hành vũ trụ. Liên kết chặt chẽ lý thuyết với thực tế. | Trả lời được các ý chính của câu hỏi thảo luận nhưng thiếu lập luận Toán học chứng minh. | Trả lời lan man không trọng tâm câu hỏi. Không giải thích được hiện tượng túi khí. | Không chuẩn bị bài, không trả lời được vấn đề. |

## 12. Phụ lục bổ sung (Extra Notes & Explanations)
- **Tên lửa không đẩy vào không khí!** Đây là một hiểu lầm phổ biến nhất trong vật lý đại chúng. Rất nhiều người nghĩ tên lửa bay lên bằng cách "đẩy lớp khí xả vào không khí để tạo sức bật". Điều này hoàn toàn sai. Thực tế, không khí bên ngoài còn gây lực cản. Tên lửa chuyển động bằng phản lực nội tại: luồng khí đẩy ra sau tạo phản lực trực tiếp lên buồng đốt tên lửa theo định luật 3 Newton. Nó hoạt động tốt hơn trong chân không không gian vì không có lực cản không khí.
- **Va chạm siêu đàn hồi (Super-elastic collision):** Là trường hợp cực hiếm gặp trong tự nhiên (nhưng phổ biến ở thế giới hạ nguyên tử hạt nhân) khi động năng hệ SAU va chạm lớn hơn TRƯỚC va chạm. Điều này xảy ra khi có một sự giải phóng năng lượng tiềm tàng trong lúc va chạm (ví dụ kích nổ ngòi nổ lò xo bị nén bên trong vật thể).
- Sóng xung kích (Shockwave) từ các vụ nổ (như bom nguyên tử) có sức tàn phá khủng khiếp chính là do nó truyền một lượng **động lượng** khổng lồ của một bức tường không khí nén chặt đập vào các tòa nhà trong thời gian cực ngắn $\Delta t \approx 0$, tạo ra lực vô cùng lớn phá hủy kết cấu bê tông thép.
- Khi chơi bi-a (billiards), nếu bạn đánh viên bi trắng vào ngay tâm viên bi mục tiêu đang đứng yên (va chạm đàn hồi xuyên tâm 1D với hai vật cùng khối lượng $m$), viên bi trắng sẽ dừng lại ngay lập tức và truyền 100% động lượng và vận tốc của nó sang cho viên bi mục tiêu. Đây là minh chứng hoàn hảo cho hệ phương trình bảo toàn.
- **Hệ quy chiếu khối tâm (Center of Mass frame):** Trong nghiên cứu vật lý đại học, bài toán va chạm 2D thường được chuyển về hệ quy chiếu khối tâm. Trong hệ này, tổng động lượng luôn bằng 0 ở mọi thời điểm, giúp phương trình Toán học trở nên cực kỳ đơn giản và đối xứng.

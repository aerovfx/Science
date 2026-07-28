# Tuần 3: Chuyển Động Biến Đổi, Gia Tốc và Sự Rơi Tự Do / Week 3: Accelerated Motion, Acceleration and Free Fall

## 1. Mục Tiêu Học Tập / Learning Objectives

### Mục tiêu Kiến thức / Knowledge Objectives
- **(VI)** Hiểu khái niệm gia tốc, ý nghĩa vật lí của gia tốc trong chuyển động (Bài 8 - KNTT).
- **(VI)** Phân biệt được chuyển động thẳng nhanh dần đều và chậm dần đều thông qua dấu của đại lượng vectơ và giá trị đại số (Bài 9 - KNTT).
- **(VI)** Thiết lập và vận dụng được các phương trình động học của chuyển động thẳng biến đổi đều: phương trình vận tốc, phương trình tọa độ, và phương trình độc lập với thời gian (Bài 9 - KNTT).
- **(VI)** Hiểu đặc điểm của sự rơi tự do, điều kiện để một vật được xem là rơi tự do, gia tốc rơi tự do $g$ và sự phụ thuộc của nó vào vĩ độ (Bài 10 - KNTT).
- **(VI)** Nắm vững phương pháp đo gia tốc rơi tự do bằng dụng cụ thực hành hiện đại (cổng quang điện, nam châm điện) (Bài 11 - KNTT).
- **(EN)** Understand the concept of acceleration and its physical meaning in motion (Chapter 8).
- **(EN)** Distinguish between uniformly accelerated and uniformly decelerated rectilinear motion through the signs of vector quantities and algebraic values (Chapter 9).
- **(EN)** Derive and apply the kinematic equations for uniformly accelerated rectilinear motion: velocity equation, position equation, and time-independent equations (Chapter 9).
- **(EN)** Understand the characteristics of free fall, conditions for free fall, acceleration due to gravity $g$, and its dependence on latitude (Chapter 10).
- **(EN)** Master the experimental method for measuring the acceleration of free fall using modern lab equipment (photogates, electromagnets) (Chapter 11).

### Mục tiêu Kỹ năng / Skill Objectives
- **(VI)** Vẽ và phân tích đồ thị vận tốc - thời gian ($v-t$), gia tốc - thời gian ($a-t$), và tọa độ - thời gian ($x-t$) của các loại chuyển động.
- **(VI)** Bố trí và tiến hành thí nghiệm đo gia tốc rơi tự do, xử lí sai số bằng phương pháp thống kê hoặc phương pháp đồ thị, hiểu rõ sai số hệ thống và sai số ngẫu nhiên.
- **(VI)** Sử dụng Python để mô phỏng chuyển động, khớp đường cong (curve fitting) để tìm $g$ và phân tích dữ liệu nhiễu.
- **(EN)** Draw and analyze velocity-time ($v-t$), acceleration-time ($a-t$), and position-time ($x-t$) graphs of various types of motion.
- **(EN)** Set up and conduct the free-fall experiment, processing errors using statistical or graphical methods, understanding systematic and random errors.
- **(EN)** Use Python to simulate motion, perform curve fitting to extract $g$, and analyze noisy data.

### Bài học liên quan (SGK Kết nối tri thức) / Related Textbook Lessons
- **Bài 8:** Chuyển động biến đổi. Gia tốc / Lesson 8: Accelerated motion. Acceleration
- **Bài 9:** Chuyển động thẳng biến đổi đều / Lesson 9: Uniformly accelerated rectilinear motion
- **Bài 10:** Sự rơi tự do / Lesson 10: Free fall
- **Bài 11:** Thực hành: Đo gia tốc rơi tự do / Lesson 11: Practice: Measuring the acceleration of free fall

---

## 2. Bảng Dụng Cụ Thí Nghiệm / Lab Equipment & Tools Table

| Tên dụng cụ (VI) / Equipment Name (EN) | Số lượng / Qty | Thông số kỹ thuật / Specifications | Giá tham khảo (VND) / Est. Price | Nơi mua / Local Availability |
| :--- | :--- | :--- | :--- | :--- |
| Đồng hồ đo thời gian hiện số / Digital Timer | 1 | Độ chia nhỏ nhất 0.001s, 2 cổng quang | 1,200,000 | Cửa hàng thiết bị trường học, Shopee |
| Cổng quang điện / Photogates | 2 | Cảm biến hồng ngoại, cáp nối tiêu chuẩn | 350,000/cái | Công ty TBGD, Shopee |
| Nam châm điện / Electromagnet | 1 | 6V-12V DC, lực hút thả bi, thời gian ngắt từ < 5ms | 200,000 | Cửa hàng linh kiện điện tử |
| Hộp thả bi tự do / Free-fall apparatus stand | 1 | Thước thẳng 1m, đế nặng, giá đỡ, dây dọi | 500,000 | Công ty TBGD |
| Bi thép / Steel balls | 3 | Đường kính 1cm, 1.5cm, 2cm | 20,000 | Cửa hàng kim khí |
| Dây cắm mạch / Jumper wires | 1 bộ | Dây đồng có chui cắm 4mm | 50,000 | Cửa hàng linh kiện điện tử |

---

## 3. Cảnh Báo An Toàn / Safety Warnings ⚠️

### (VI) An Toàn Phòng Thí Nghiệm
1. **An toàn điện:** Đồng hồ và nam châm điện sử dụng nguồn điện. Phải đảm bảo tay khô ráo khi cắm điện. Tránh để dây dẫn chạm vào các cạnh sắc của giá kim loại có thể gây chập mạch hoặc rò rỉ điện.
2. **An toàn cơ học:** Giá đỡ rất nặng và cao. Cần đặt giá đỡ trên mặt bàn phẳng, cân bằng (dùng dây dọi để kiểm tra độ thẳng đứng). Tránh để đổ giá đỡ gây chấn thương cho học sinh.
3. **Quản lý vật tư:** Bi thép dễ lăn rơi. Khi thả bi, cần có khay chứa cát hoặc mút xốp ở dưới cùng để hứng bi, tránh làm bi nảy văng ra xa trúng mắt, hoặc làm trầy xước, vỡ gạch sàn nhà. Không được nuốt bi.

### (EN) Laboratory Safety Rules
1. **Electrical Safety:** The timer and electromagnet use electricity. Ensure hands are dry when plugging in. Avoid letting wires touch sharp edges of the metal stand, which could cause a short circuit or electric shock.
2. **Mechanical Safety:** The apparatus stand is heavy and tall. Place it on a flat, balanced table (use a plumb bob to check verticality). Prevent the stand from tipping over and causing injury to students.
3. **Material Management:** Steel balls roll easily. When dropping the ball, have a sandbox or foam pad at the bottom to catch it, preventing it from bouncing away and hitting eyes or damaging the floor tiles. Do not swallow the balls.

---

## 4. Lý Thuyết Chuyên Sâu / Deep Theory Explanations

### 4.1 Chuyển động biến đổi và Gia tốc (Bài 8 KNTT) / Accelerated Motion & Acceleration

**(VI)** Chuyển động biến đổi là chuyển động có vận tốc thay đổi theo thời gian. Sự thay đổi này có thể là về **độ lớn** (tốc độ nhanh lên hoặc chậm đi), hoặc về **hướng** (chuyển động cong), hoặc cả hai.
Đại lượng vật lí đặc trưng cho tốc độ thay đổi của vận tốc (tức là mức độ nhanh hay chậm của sự biến đổi vận tốc) được gọi là **gia tốc**.

**(EN)** Accelerated motion is motion where velocity changes over time. This change can be in **magnitude** (speeding up or slowing down), in **direction** (curved motion), or both.
The physical quantity that characterizes the rate of change of velocity is called **acceleration**.

#### Gia tốc trung bình (Average Acceleration)
Gia tốc trung bình trong khoảng thời gian $\Delta t$ là tỷ số giữa độ biến thiên vận tốc $\Delta \vec{v}$ và khoảng thời gian đó.
$$ \vec{a}_{tb} = \frac{\Delta \vec{v}}{\Delta t} = \frac{\vec{v}_2 - \vec{v}_1}{t_2 - t_1} $$
Đơn vị chuẩn trong hệ SI (Unit in SI): mét trên giây bình phương ($m/s^2$).

#### Gia tốc tức thời (Instantaneous Acceleration)
Gia tốc tức thời là gia tốc của vật tại một thời điểm xác định, được tính bằng giới hạn của gia tốc trung bình khi $\Delta t \to 0$. Bằng ngôn ngữ giải tích, nó là đạo hàm bậc nhất của vận tốc theo thời gian, hoặc đạo hàm bậc hai của tọa độ theo thời gian.
$$ \vec{a} = \lim_{\Delta t \to 0} \frac{\Delta \vec{v}}{\Delta t} = \frac{d\vec{v}}{dt} = \frac{d^2\vec{x}}{dt^2} $$

### 4.2 Chuyển Động Thẳng Biến Đổi Đều (Bài 9 KNTT) / Uniformly Accelerated Rectilinear Motion

**(VI)** Là chuyển động có quỹ đạo là đường thẳng, trong đó gia tốc tức thời không đổi theo thời gian (cả về hướng và độ lớn): $\vec{a} = \text{const}$.
- **Nhanh dần đều (Speeding up):** Vectơ gia tốc $\vec{a}$ cùng chiều với vectơ vận tốc $\vec{v}$. Suy ra tích vô hướng: $\vec{a} \cdot \vec{v} > 0$ hay đại số: $a \cdot v > 0$.
- **Chậm dần đều (Slowing down):** Vectơ gia tốc $\vec{a}$ ngược chiều với vectơ vận tốc $\vec{v}$. Suy ra: $\vec{a} \cdot \vec{v} < 0$ hay đại số: $a \cdot v < 0$.

**(EN)** A rectilinear motion where instantaneous acceleration is constant over time in both direction and magnitude: $\vec{a} = \text{const}$.
- **Speeding up:** Vector $\vec{a}$ is in the same direction as vector $\vec{v}$. Hence: $\vec{a} \cdot \vec{v} > 0$ or algebraically $a \cdot v > 0$.
- **Slowing down:** Vector $\vec{a}$ is in the opposite direction of vector $\vec{v}$. Hence: $\vec{a} \cdot \vec{v} < 0$ or algebraically $a \cdot v < 0$.

#### Các phương trình động học / Kinematic Equations
Chọn mốc thời gian $t_0 = 0$. Vận tốc ban đầu là $v_0$ (tại $t=0$), tọa độ ban đầu là $x_0$. Ta có 4 phương trình cơ bản:

1. **Phương trình vận tốc theo thời gian / Velocity-time equation:** 
   $$ v(t) = v_0 + \int_{0}^{t} a \, dt = v_0 + a \cdot t $$

2. **Độ dịch chuyển (Quãng đường với chuyển động một chiều) / Displacement equation:**
   Từ định nghĩa $v = \frac{dd}{dt} \Rightarrow d = \int_{0}^{t} v(t) dt = \int_{0}^{t} (v_0 + a \cdot t) dt$
   $$ d(t) = v_0 \cdot t + \frac{1}{2} a \cdot t^2 $$

3. **Phương trình tọa độ / Position equation:**
   Vì $x = x_0 + d$, nên:
   $$ x(t) = x_0 + v_0 \cdot t + \frac{1}{2} a \cdot t^2 $$

4. **Phương trình độc lập với thời gian / Time-independent equation:**
   Từ $t = \frac{v - v_0}{a}$, thay vào phương trình độ dịch chuyển, ta thu được:
   $$ v^2 - v_0^2 = 2 \cdot a \cdot d $$
   *Lưu ý:* Phương trình này rất hữu ích khi bài toán không cho thông tin về thời gian.

#### Đồ thị (Graphs)
Sử dụng biểu diễn ASCII cho đồ thị / ASCII Representation for graphs:

```text
v-t Graph (Nhanh dần đều / Speeding up)
v (m/s)
^
|      /
|     /
|    /
|   /
|  /
| / v0
|/
+-----------------> t (s)
Góc nghiêng (Slope) của tiếp tuyến = a = const > 0
Diện tích dưới đồ thị (Area) = độ dịch chuyển d
```

```text
x-t Graph (Nhanh dần đều / Speeding up)
x (m)
^
|       . 
|      .
|     .
|   .
|. x0
+-----------------> t (s)
Parabola: Cong lõm lên / Concave up (a > 0)
```

### 4.3 Sự Rơi Tự Do (Bài 10 KNTT) / Free Fall

**(VI)** Sự rơi tự do là sự rơi của một vật **chỉ** dưới tác dụng của trọng lực. Trong thực tế, nếu lực cản của không khí là rất nhỏ so với trọng lực (ví dụ thả hòn bi sắt đặc), ta có thể coi chuyển động đó gần đúng là sự rơi tự do. Galileo Galilei là người đầu tiên chứng minh được rằng tại cùng một nơi trên Trái Đất, mọi vật rơi tự do với cùng một gia tốc.

Đặc điểm của sự rơi tự do:
- **Quỹ đạo (Trajectory):** Đường thẳng đứng (xác định bằng dây dọi).
- **Chiều (Direction):** Từ trên xuống dưới.
- **Tính chất động học:** Là chuyển động thẳng nhanh dần đều với vận tốc ban đầu $v_0 = 0$.
- **Gia tốc:** Ký hiệu là gia tốc rơi tự do $g$. Tại bề mặt Trái Đất, $g \approx 9.8 \ m/s^2$ hoặc $9.81 \ m/s^2$. Tuy nhiên, $g$ thay đổi nhẹ theo vĩ độ địa lý (lớn nhất ở hai cực, nhỏ nhất ở xích đạo do lực li tâm và hình dạng dẹt của Trái Đất) và giảm dần theo độ cao.

**(EN)** Free fall is the falling of an object **solely** under the influence of gravity. In practice, if air resistance is negligible compared to gravity (e.g., dropping a solid iron ball), the motion can be approximated as free fall. Galileo Galilei was the first to show that at the same location on Earth, all objects fall in free fall with the same acceleration.

Characteristics of free fall:
- **Trajectory:** Vertical straight line (determined by a plumb line).
- **Direction:** Top to bottom (downward).
- **Kinematic nature:** Uniformly accelerated rectilinear motion with initial velocity $v_0 = 0$.
- **Acceleration:** Denoted as free-fall acceleration $g$. At the Earth's surface, $g \approx 9.8 \ m/s^2$ or $9.81 \ m/s^2$. However, $g$ varies slightly with latitude (highest at the poles, lowest at the equator due to centrifugal force and Earth's oblate shape) and decreases with altitude.

#### Phương trình rơi tự do / Free Fall Equations
Bản chất rơi tự do là trường hợp riêng của chuyển động thẳng biến đổi đều. Chọn hệ quy chiếu:
- Gốc tọa độ $O$ tại vị trí thả vật.
- Trục $Oy$ hướng thẳng đứng từ trên xuống dưới.
- Gốc thời gian $t_0 = 0$ lúc bắt đầu thả vật.
Khi đó, $v_0 = 0$, $a = g$, $x_0 = 0$. Các phương trình trở thành:

1. **Vận tốc (Velocity):** 
   $$ v(t) = g \cdot t $$
2. **Quãng đường / Tọa độ (Distance / Position):** 
   $$ s = y = \frac{1}{2} g \cdot t^2 $$
3. **Mối liên hệ giữa vận tốc và quãng đường (Velocity-distance relation):**
   $$ v^2 = 2 \cdot g \cdot s \Rightarrow v = \sqrt{2 \cdot g \cdot s} $$
4. **Thời gian rơi từ độ cao $h$ (Time of fall from height $h$):**
   Thay $s = h$ vào pt quãng đường:
   $$ t = \sqrt{\frac{2h}{g}} $$

---

## 5. Thực Hành: Đo Gia Tốc Rơi Tự Do (Bài 11 KNTT) / Hands-on Lab: Measuring $g$

### 5.1 Phân Tích Chuyên Sâu Về Thiết Bị Nam Châm Điện / Deep Technical Analysis of the Electromagnet
Trong thí nghiệm này, sai số hệ thống lớn nhất thường đến từ **nam châm điện (electromagnet)**. 
- **Nguyên lý hoạt động:** Nam châm điện giữ viên bi thép khi có dòng điện chạy qua cuộn dây. Khi ngắt dòng điện (đồng thời kích hoạt timer), từ trường không biến mất ngay lập tức do hiện tượng tự cảm (self-induction) của cuộn dây theo định luật Faraday-Lenz. 
- **Hậu quả từ trễ (Magnetic hysteresis & Inductive delay):** Có một khoảng thời gian trễ $\Delta t_m$ rất nhỏ (cỡ vài mili-giây) từ lúc công tắc ngắt đến khi lực từ đủ yếu để viên bi thực sự bắt đầu tách khỏi nam châm dưới tác dụng của trọng lực.
- **Biện pháp khắc phục:** Do thời gian đo trên máy ($t_{measure}$) bao gồm cả khoảng thời gian trễ này ($t_{measure} = t_{true} + \Delta t_m$), nên để triệt tiêu sai số này, người ta đo khoảng thời gian rơi giữa hai cổng quang (Photogate A và Photogate B) thay vì từ nam châm đến 1 cổng quang. Khi viên bi qua cổng A, vận tốc không còn là 0.

### 5.2 Bố trí thí nghiệm (Experimental Setup)

**(VI) Các bước chuẩn bị (Phương pháp dùng 1 cổng quang - theo chuẩn cơ bản SGK):**
1. Lắp thanh trụ kim loại thẳng đứng (dùng dây dọi để căn chỉnh cho thật thẳng đứng).
2. Lắp nam châm điện ở đỉnh thanh trụ, cắm dây nối vào công tắc của đồng hồ đo thời gian (timer).
3. Lắp cổng quang điện (Photogate) E phía dưới nam châm (cách đáy viên bi một đoạn $s$).
4. Chỉnh chế độ của đồng hồ đo thời gian sang chế độ đo thời gian rơi tự do (Free Fall mode - công tắc ngắt nam châm đồng thời kích hoạt bộ đếm thời gian).

**(EN) Preparation Steps (1-photogate method - basic textbook standard):**
1. Mount the vertical metal rod (use a plumb bob for perfect vertical alignment).
2. Attach the electromagnet at the top of the rod, plug its wires into the timer's switch port.
3. Attach the Photogate (E) below the magnet (at a distance $s$ from the bottom of the ball).
4. Set the digital timer to Free Fall mode (the switch cuts power to the magnet and starts the timer simultaneously).

### 5.3 Tiến hành đo (Measurement Procedure)
1. Kẹp bi thép vào nam châm điện (đảm bảo bi bám sát tâm nam châm).
2. Dùng thước trên giá đỡ đo khoảng cách $s$ từ điểm thấp nhất của viên bi đến ngang tầm tia hồng ngoại của cổng quang điện.
3. Bấm nút Reset trên timer để màn hình hiện 0.000.
4. Bấm công tắc để thả bi. Ghi lại thời gian $t$ hiển thị trên timer (thời gian viên bi rơi quãng đường $s$).
5. Lặp lại thí nghiệm 5 lần cho cùng một khoảng cách $s$ để lấy giá trị trung bình và tính sai số ngẫu nhiên.
6. Thay đổi khoảng cách $s$ (ví dụ: $0.2m, 0.4m, 0.6m, 0.8m$) và lặp lại các bước trên.

### 5.4 Xử lý số liệu (Data Processing)
Ta có phương trình quãng đường: 
$$ s = \frac{1}{2} \bar{g} \bar{t}^2 \Rightarrow \bar{g} = \frac{2s}{\bar{t}^2} $$
Trong đó $\bar{t}$ là giá trị trung bình của thời gian đo được.
Tính sai số tỉ đối:
$$ \delta g = \frac{\Delta g}{\bar{g}} = \frac{\Delta s}{s} + 2\frac{\Delta t}{\bar{t}} $$
Suy ra sai số tuyệt đối: $\Delta g = \bar{g} \cdot \delta g$.
Kết quả đo gia tốc rơi tự do được viết dưới dạng:
$$ g = \bar{g} \pm \Delta g \ (\text{m/s}^2) $$

---

## 6. Ví Dụ Tính Toán Chuyên Sâu / Detailed Worked Examples

### Ví dụ 1: Gặp gỡ giữa hai vật / Encounter between two objects
**Bài toán (VI):** Từ một ban công cao $h = 45 \ m$ so với mặt đất, người ta thả rơi tự do vật A. Cùng lúc đó, từ mặt đất, người ta ném thẳng đứng vật B lên trên với vận tốc ban đầu $v_0 = 30 \ m/s$. Bỏ qua sức cản không khí. Lấy $g = 10 \ m/s^2$.
1. Viết phương trình tọa độ của hai vật.
2. Hai vật gặp nhau ở độ cao nào và sau thời gian bao lâu kể từ lúc ném?
3. Khi gặp nhau, các vật đang chuyển động theo chiều nào? Vận tốc mỗi vật là bao nhiêu?

**Problem (EN):** From a balcony at a height of $h = 45 \ m$ above the ground, object A is dropped in free fall. At the exact same time, object B is thrown vertically upward from the ground with an initial velocity of $v_0 = 30 \ m/s$. Ignore air resistance. Take $g = 10 \ m/s^2$.
1. Write the position equations for both objects.
2. At what height and after how much time do the two objects meet?
3. When they meet, in which direction is each object moving? What is the velocity of each object?

**Giải chi tiết (Detailed Solution):**
**1. Phương trình tọa độ (Position equations):**
- Chọn trục $Oy$ thẳng đứng hướng lên. Gốc tọa độ $O$ tại mặt đất.
- Gốc thời gian $t_0 = 0$ là lúc thả vật A và ném vật B.
- **Vật A (Rơi tự do):** Tọa độ ban đầu $y_{0A} = 45 \ m$; Vận tốc ban đầu $v_{0A} = 0$; Gia tốc $a_A = -g = -10 \ m/s^2$ (vì $\vec{g}$ hướng xuống, ngược chiều dương $Oy$).
  $$ y_A = y_{0A} + v_{0A} t + \frac{1}{2} a_A t^2 = 45 - 5t^2 \ \ \text{(1)} $$
- **Vật B (Ném thẳng đứng lên):** Tọa độ ban đầu $y_{0B} = 0$; Vận tốc ban đầu $v_{0B} = 30 \ m/s$ (cùng chiều dương); Gia tốc $a_B = -g = -10 \ m/s^2$.
  $$ y_B = y_{0B} + v_{0B} t + \frac{1}{2} a_B t^2 = 30t - 5t^2 \ \ \text{(2)} $$

**2. Vị trí và thời gian gặp nhau (Meeting point and time):**
- Khi hai vật gặp nhau: $y_A = y_B$
  $$ 45 - 5t^2 = 30t - 5t^2 $$
  $$ \Rightarrow 30t = 45 \Rightarrow t = 1.5 \ (s) $$
- Hai vật gặp nhau sau **$1.5 \ s$**.
- Độ cao gặp nhau (thay $t=1.5$ vào pt 1):
  $$ h_{meet} = y_A = 45 - 5(1.5)^2 = 45 - 5 \times 2.25 = 45 - 11.25 = 33.75 \ (m) $$

**3. Vận tốc và chiều chuyển động khi gặp nhau (Velocity and direction at meeting):**
Phương trình vận tốc tổng quát: $v(t) = v_0 + at$.
- Vận tốc vật A: $v_A(1.5) = 0 - 10 \times 1.5 = -15 \ m/s$. 
  Dấu âm chứng tỏ vật A đang rơi xuống. Tốc độ là $15 \ m/s$.
- Vận tốc vật B: $v_B(1.5) = 30 - 10 \times 1.5 = 30 - 15 = 15 \ m/s$.
  Dấu dương chứng tỏ vật B vẫn đang đi lên. Tốc độ là $15 \ m/s$.

---

### Ví dụ 2: Khoảng thời gian liên tiếp trong chuyển động biến đổi đều / Successive time intervals in uniformly accelerated motion
**Bài toán (VI):** Một viên bi thả lăn nhanh dần đều trên một máng nghiêng. Nó đi qua đoạn đường dài $s_1 = 40 \ cm$ trong thời gian $t_1 = 2 \ s$, và đi qua đoạn đường tiếp theo dài $s_2 = 120 \ cm$ trong cùng thời gian $t_2 = 2 \ s$. Tính gia tốc của viên bi và vận tốc ban đầu ở đầu đoạn đường $s_1$.

**Problem (EN):** A marble rolls down an inclined plane with uniform acceleration. It travels a distance of $s_1 = 40 \ cm$ in time $t_1 = 2 \ s$, and then travels the next distance $s_2 = 120 \ cm$ in an equal time $t_2 = 2 \ s$. Calculate the acceleration of the marble and its initial velocity at the start of distance $s_1$.

**Giải chi tiết (Detailed Solution):**
- Gọi $v_0$ là vận tốc ban đầu ở đầu đoạn $s_1$. Gia tốc là $a$. Đổi đơn vị: $s_1 = 0.4 \ m$, $s_2 = 1.2 \ m$.
- Xét trên đoạn đường đầu ($t = 2 \ s$):
  $$ s_1 = v_0 t + \frac{1}{2} a t^2 \Rightarrow 0.4 = 2v_0 + \frac{1}{2} a (2^2) \Rightarrow 0.4 = 2v_0 + 2a \ \ \text{(3)} $$
- Xét trên tổng hai đoạn đường ($s_{total} = s_1 + s_2 = 1.6 \ m$), tổng thời gian đi là $t_{total} = t_1 + t_2 = 4 \ s$:
  $$ s_{total} = v_0 t_{total} + \frac{1}{2} a t_{total}^2 \Rightarrow 1.6 = v_0 (4) + \frac{1}{2} a (4^2) \Rightarrow 1.6 = 4v_0 + 8a \ \ \text{(4)} $$
- Giải hệ phương trình (3) và (4):
  Nhân pt (3) với 2: $0.8 = 4v_0 + 4a \ \ \text{(5)}$
  Lấy pt (4) trừ pt (5): $1.6 - 0.8 = (4v_0 + 8a) - (4v_0 + 4a) \Rightarrow 0.8 = 4a \Rightarrow a = 0.2 \ (m/s^2)$.
  Thay $a = 0.2$ vào (3): $0.4 = 2v_0 + 2(0.2) \Rightarrow 2v_0 = 0 \Rightarrow v_0 = 0 \ (m/s)$.
- **Kết luận:** Viên bi có gia tốc $a = 0.2 \ m/s^2$ và bắt đầu lăn từ trạng thái nghỉ (vận tốc đầu bằng $0$).

---

## 7. Mô Phỏng Python / Python Simulation Code

Đoạn mã Python dưới đây mô phỏng chuyển động rơi tự do, vẽ đồ thị $v-t$, $s-t$ và thực hiện khớp đường cong (curve fitting) để tìm lại giá trị $g$ từ dữ liệu có nhiễu (mô phỏng sai số thực nghiệm trong bài 11 KNTT).

*(EN)* The Python code below simulates free fall, plots $v-t$ and $s-t$ graphs, and performs curve fitting to extract $g$ from noisy data (simulating experimental errors in Chapter 11).

```python
import numpy as np
import matplotlib.pyplot as plt
from scipy.optimize import curve_fit

# ---------------------------------------------------------
# 1. THIẾT LẬP THÔNG SỐ (PARAMETERS SETUP)
# ---------------------------------------------------------
g_true = 9.80665   # Gia tốc rơi tự do thực tế chuẩn (m/s^2)
h0 = 2.0           # Độ cao thả bi thường thấy trong PTN (m)
v0 = 0.0           # Vận tốc ban đầu (m/s)
t_max = np.sqrt(2 * h0 / g_true) # Thời gian chạm đất lý thuyết ~ 0.638 s

# Tạo mảng thời gian
t_sim = np.linspace(0, t_max, 50)

# ---------------------------------------------------------
# 2. TẠO DỮ LIỆU LÝ THUYẾT VÀ DỮ LIỆU CÓ NHIỄU (MÔ PHỎNG THỰC NGHIỆM)
# ---------------------------------------------------------
# Dữ liệu lý thuyết (Theoretical data)
s_true = 0.5 * g_true * t_sim**2
v_true = g_true * t_sim

# Thêm nhiễu ngẫu nhiên (Gaussian noise) để mô phỏng sai số đo đạc do thiết bị
np.random.seed(42)
# Khai báo sai số chuẩn là khoảng 2 cm
noise_s = np.random.normal(0, 0.02, size=t_sim.shape) 
s_measured = s_true + noise_s

# ---------------------------------------------------------
# 3. KHỚP ĐƯỜNG CONG (CURVE FITTING) ĐỂ TÌM GIA TỐC g
# ---------------------------------------------------------
# Hàm mô hình (Model function): s = 0.5 * g * t^2
def free_fall_model(t, g_est):
    return 0.5 * g_est * t**2

# Thực hiện curve fit
popt, pcov = curve_fit(free_fall_model, t_sim, s_measured)
g_fitted = popt[0]
g_error = np.sqrt(np.diag(pcov))[0]

print(f"=== KẾT QUẢ MÔ PHỎNG VÀ KHỚP ĐƯỜNG CONG (CURVE FIT RESULTS) ===")
print(f"Giá trị g lý thuyết (True g): {g_true:.3f} m/s^2")
print(f"Giá trị g tìm được từ dữ liệu nhiễu (Measured g): {g_fitted:.3f} +/- {g_error:.3f} m/s^2")

# ---------------------------------------------------------
# 4. VẼ ĐỒ THỊ (PLOTTING)
# ---------------------------------------------------------
plt.style.use('ggplot')
fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(14, 6))

# Đồ thị Quãng đường - Thời gian (s-t graph)
ax1.plot(t_sim, s_true, 'k-', lw=2, label='Lý thuyết (Theory)')
ax1.scatter(t_sim, s_measured, color='red', s=20, alpha=0.7, label='Dữ liệu đo nhiễu (Measured Data)')
ax1.plot(t_sim, free_fall_model(t_sim, g_fitted), 'b--', lw=2, label=f'Best Fit (g={g_fitted:.2f} m/s²)')
ax1.set_title('Đồ thị Quãng đường - Thời gian (s-t Graph)\nThể hiện Parabola')
ax1.set_xlabel('Thời gian t (s)')
ax1.set_ylabel('Quãng đường s (m)')
ax1.legend()
ax1.grid(True)

# Đồ thị Vận tốc - Thời gian (v-t graph)
ax2.plot(t_sim, v_true, 'g-', lw=2, label='Vận tốc lý thuyết (Theory)')
ax2.set_title('Đồ thị Vận tốc - Thời gian (v-t Graph)\nĐường thẳng với độ dốc là g')
ax2.set_xlabel('Thời gian t (s)')
ax2.set_ylabel('Vận tốc v (m/s)')
ax2.legend()
ax2.grid(True)

plt.tight_layout()
plt.savefig('free_fall_simulation.png')
plt.show()
```

---

## 8. Câu Hỏi Thảo Luận Mở Rộng / Extended Discussion Questions

**Q1: (VI)** Gia tốc là số âm có chắc chắn vật đang chuyển động chậm dần không? Hãy đưa ra một ví dụ cụ thể để giải thích.
**(EN)** If acceleration is negative, is the object definitely slowing down? Provide a specific example to explain.
> **Answer/Hint:** KHÔNG (NO). Gia tốc âm chỉ có nghĩa là vector gia tốc ngược chiều dương của trục tọa độ đã chọn. Nếu vật đang chuyển động theo chiều âm (v < 0) và a < 0, thì a và v cùng dấu, vật đang chuyển động *nhanh dần đều* theo chiều âm. Ví dụ: Một vật rơi tự do, chọn trục Oy hướng lên trên. Khi đó vận tốc v < 0 (đi xuống), gia tốc a = -g < 0. Vật chuyển động nhanh dần đều. Chỉ khi a và v trái dấu ($a \cdot v < 0$) thì vật mới chậm dần.

**Q2: (VI)** Trong thí nghiệm đo $g$, nếu tăng khối lượng của viên bi lên gấp đôi (bằng cách dùng bi có kích thước lớn hơn) thì kết quả đo được có thay đổi không? Tại sao?
**(EN)** In the $g$ measurement experiment, if the mass of the ball is doubled (by using a larger ball), will the measured result change? Why?
> **Answer/Hint:** Về mặt lý thuyết (bỏ qua lực cản không khí), kết quả đo $g$ KHÔNG THAY ĐỔI vì gia tốc rơi tự do không phụ thuộc vào khối lượng của vật. Tuy nhiên, trong thực tế, nếu viên bi có kích thước (thể tích) lớn hơn, lực cản không khí sẽ lớn hơn. Nhưng vì bi bằng thép có khối lượng riêng rất lớn, lực cản không khí vẫn cực kỳ nhỏ so với trọng lượng, do đó sự thay đổi (nếu có) cũng nằm trong giới hạn sai số đo đạc, mắt thường hoặc máy đo thông thường không nhận ra sự khác biệt.

**Q3: (VI)** Tại sao trong thí nghiệm Bài 11 (KNTT), người ta ưu tiên dùng nam châm điện thay vì dùng kéo cắt đứt sợi dây treo viên bi?
**(EN)** Why is an electromagnet preferred over cutting a string holding the ball in the Chapter 11 experiment?
> **Answer/Hint:** Dùng nam châm điện cho phép đồng bộ hóa hoàn hảo (synchronization) giữa thời điểm viên bi bắt đầu rơi và thời điểm máy đếm thời gian bắt đầu chạy thông qua một công tắc điện duy nhất. Nếu dùng kéo cắt dây, rất khó xác định chính xác thời điểm t=0 (lúc dây đứt hoàn toàn) để bật đồng hồ, gây ra sai số ngẫu nhiên rất lớn.

**Q4: (VI)** Diện tích dưới đồ thị $v-t$ cho ta biết thông tin gì? Cách chứng minh điều đó thông qua tích phân?
**(EN)** What information does the area under the $v-t$ graph provide? How to prove it using integration?
> **Answer/Hint:** Diện tích dưới đồ thị $v-t$ cho ta biết **Độ dịch chuyển** (Displacement) của vật trong khoảng thời gian đó. Đối với chuyển động không đổi chiều, nó cũng chính là quãng đường đi được. Chứng minh: Diện tích $S = \int_{t_1}^{t_2} v(t) dt$. Mặt khác $v(t) = \frac{dx}{dt} \Rightarrow dx = v(t) dt$. Suy ra $S = \int_{x_1}^{x_2} dx = x_2 - x_1 = \Delta x$, chính là độ dịch chuyển.

---

## 9. Bài Tập Về Nhà / Homework & Practice Problems

### Bài 1: Sự rơi của giọt nước (Water drop falling)
**(VI)** Nước nhỏ giọt đều đặn từ một mái nhà cao $16 \ m$ xuống đất. Giọt thứ nhất chạm đất đúng lúc giọt thứ năm bắt đầu rơi. Lấy $g = 10 \ m/s^2$. Bỏ qua lực cản không khí.
a. Tìm khoảng thời gian giữa hai lần nhỏ giọt liên tiếp.
b. Tính khoảng cách giữa giọt thứ nhất và giọt thứ hai khi giọt thứ nhất vừa chạm đất.
**(EN)** Water drops fall regularly from a roof $16 \ m$ above the ground. The first drop hits the ground exactly when the fifth drop begins to fall. Take $g = 10 \ m/s^2$. Ignore air resistance.
a. Find the time interval between two consecutive drops.
b. Calculate the distance between the first and second drops when the first drop just hits the ground.

**Solution Hints:**
- Thời gian để 1 giọt rơi từ độ cao 16m: $t = \sqrt{\frac{2h}{g}} = \sqrt{\frac{32}{10}} \approx 1.789 \ (s)$.
- Từ giọt 1 đến giọt 5 có 4 khoảng thời gian đều nhau. Gọi $\Delta t$ là khoảng tg giữa 2 giọt. $\Rightarrow 4\Delta t = t \Rightarrow \Delta t = \frac{1.789}{4} \approx 0.447 \ (s)$.
- Khi giọt 1 chạm đất (đã đi $16m$), giọt 2 đã rơi được thời gian $t_2 = 3\Delta t = 1.342 \ (s)$. Quãng đường giọt 2: $s_2 = \frac{1}{2}g t_2^2 = 5 \times (1.342)^2 \approx 9 \ (m)$.
- Khoảng cách giữa giọt 1 và 2 lúc này: $\Delta s = 16 - 9 = 7 \ (m)$.

### Bài 2: Phanh khẩn cấp (Emergency braking)
**(VI)** Một xe máy đang chạy với vận tốc $54 \ km/h$ thì phát hiện chướng ngại vật cách đó $20 \ m$. Người lái xe lập tức hãm phanh tối đa, tạo ra gia tốc chậm dần đều có độ lớn $5 \ m/s^2$.
a. Xe có đâm vào chướng ngại vật không? Giải thích bằng tính toán.
b. Tính thời gian kể từ lúc hãm phanh đến khi xe dừng lại hoàn toàn.
**(EN)** A motorcycle is traveling at $54 \ km/h$ when the rider spots an obstacle $20 \ m$ away. The rider immediately applies maximum brakes, creating a uniform deceleration with a magnitude of $5 \ m/s^2$.
a. Will the motorcycle hit the obstacle? Explain with calculations.
b. Calculate the time from the moment the brakes are applied until the motorcycle completely stops.

**Solution Hints:**
- Đổi đơn vị: $v_0 = 54 \ km/h = 15 \ m/s$. Do xe chậm dần đều, $a = -5 \ m/s^2$.
- Khi dừng lại hẳn $v = 0$. Áp dụng pt độc lập với thời gian: $v^2 - v_0^2 = 2as \Rightarrow 0 - 15^2 = 2 \times (-5) \times s \Rightarrow -225 = -10s \Rightarrow s = 22.5 \ (m)$.
- Vì $22.5 \ m > 20 \ m$, xe **SẼ ĐÂM** vào chướng ngại vật trước khi kịp dừng lại.
- Thời gian dừng hẳn (nếu không có chướng ngại vật): $t = \frac{v - v_0}{a} = \frac{0 - 15}{-5} = 3 \ (s)$.

---

## 10. Rubric Đánh Giá Thực Hành (Bài 11 KNTT) / Assessment Rubric (100-point scale)

| Tiêu chí / Criteria (VI) | Tiêu chí (EN) | Xuất sắc (90-100) | Tốt (70-89) | Đạt (50-69) | Cần cố gắng (<50) | Điểm tối đa |
| :--- | :--- | :--- | :--- | :--- | :--- | :---: |
| 1. Chuẩn bị & An toàn | Prep & Safety | Tuân thủ tuyệt đối 100%, thao tác dứt khoát, biết cách xử lý bi rơi gọn gàng. | Tuân thủ cơ bản, thi thoảng cần giáo viên nhắc nhở vị trí hứng bi. | Có lỗi nhỏ trong an toàn cơ học/điện (ví dụ quên tắt nguồn khi nối dây). | Vi phạm an toàn nghiêm trọng, lúng túng, làm rơi đồ đạc. | 15 |
| 2. Lắp ráp thiết bị | Assembly | Cân chỉnh dây dọi hoàn hảo, cắm mạch điện chính xác, ngắt kết nối dứt khoát. | Lắp đúng nhưng chưa thẳng đứng hoàn toàn, mạch điện hơi rối. | Lắp sai 1 chi tiết nhỏ phải làm lại dưới sự hướng dẫn của giáo viên. | Không tự lắp ráp được, cắm nhầm nguồn gây chập. | 25 |
| 3. Tiến hành đo đạc | Execution | Bấm giờ chuẩn, số liệu ổn định, ghi chép khoa học vào bảng báo cáo sạch đẹp. | Số liệu có biến động nhỏ, ghi chép đầy đủ nhưng trình bày chưa tối ưu. | Quên reset máy vài lần, thao tác chậm, đọc sai giá trị trên timer. | Thao tác sai hoàn toàn, số liệu ảo không đúng thực tế. | 30 |
| 4. Xử lý số liệu | Data Processing| Tính đúng $g$, tính chuẩn sai số tuyệt đối $\Delta g$, vẽ đồ thị đẹp (bằng tay hoặc Python). Phân tích được nguyên nhân sai số. | Tính đúng $g$, có biết tính sai số nhưng nhầm lẫn nhỏ ở phần sai số tỷ đối. | Chỉ tính được giá trị $g$ trung bình, không biết cách tính sai số. | Tính sai công thức căn bản, kết quả $g$ vô lý (vd $g=15$). | 30 |

---
**Tài liệu tham khảo (References):**
- SGK Vật lí 10 - Kết nối tri thức với cuộc sống (Bài 8, 9, 10, 11).
- Sách bài tập Vật lí 10 (NXB Giáo Dục).
- Tài liệu Hướng dẫn Thực hành Vật lí Cơ bản.
- Lập trình Python ứng dụng trong mô phỏng Vật lí thực nghiệm.

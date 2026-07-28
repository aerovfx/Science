# Tuần 2: Động học Chất điểm - Độ dịch chuyển, Vận tốc và Đồ thị (Week 2: Particle Kinematics - Displacement, Velocity, and Graphs)

## 1. Mục tiêu bài học (Learning Objectives)

**Tiếng Việt:**
- Phân biệt được quãng đường đi được (vô hướng) và độ dịch chuyển (vectơ).
- Hiểu và tính toán được tốc độ trung bình, vận tốc trung bình và vận tốc tức thời.
- Thiết lập và phân tích đồ thị độ dịch chuyển - thời gian ($d-t$).
- Phân tích và tính toán quãng đường, độ dịch chuyển dựa trên đồ thị vận tốc - thời gian ($v-t$).
- Thực hành đo tốc độ của vật chuyển động sử dụng thiết bị cảm biến (Cổng quang điện / Cảm biến siêu âm).
- Áp dụng kỹ năng lập trình Python để mô phỏng và tính toán các đại lượng động học, trực quan hóa mối quan hệ giữa $x$, $v$, và $t$.
- Phân tích sâu sai số trong thực hành đo lường vật lý.

**English:**
- Distinguish between distance traveled (scalar) and displacement (vector).
- Understand and calculate average speed, average velocity, and instantaneous velocity.
- Construct and analyze displacement-time ($d-t$) graphs.
- Analyze and calculate distance and displacement based on velocity-time ($v-t$) graphs.
- Conduct hands-on experiments to measure the speed of a moving object using sensor equipment (Photogate / Ultrasonic sensor).
- Apply Python programming skills to simulate and calculate kinematic quantities, visualizing the relationship between $x$, $v$, and $t$.
- Deeply analyze errors in physical measurement practices.

---

## 2. Các bài học liên quan trong SGK (Related Textbook Lessons)
*Tham chiếu sách giáo khoa: Vật Lí 10 - Kết Nối Tri Thức Với Cuộc Sống (Reference: Physics 10 Textbook - Connecting Knowledge to Life)*

- **Bài 4:** Độ dịch chuyển và quãng đường đi được (Distance and Displacement).
  - Trọng tâm: Định nghĩa và phân biệt hai khái niệm. Phép cộng vectơ độ dịch chuyển. (Focus: Definition and distinction of the two concepts. Vector addition of displacements).
- **Bài 5:** Tốc độ và vận tốc (Speed and Velocity).
  - Trọng tâm: Công thức tính, ý nghĩa vật lý của vận tốc. (Focus: Calculation formulas, physical meaning of velocity).
- **Bài 6:** Thực hành: Đo tốc độ của vật chuyển động (Lab: Measuring the speed of moving objects).
  - Trọng tâm: Kỹ năng sử dụng thiết bị đo (đồng hồ đo thời gian hiện số, cổng quang điện). (Focus: Skills in using measuring devices - digital timer, photogate).
- **Bài 7:** Đồ thị độ dịch chuyển – thời gian (Displacement-Time Graph).
  - Trọng tâm: Cách vẽ, cách đọc và phân tích đồ thị $d-t$ để suy ra vận tốc. (Focus: How to draw, read, and analyze d-t graphs to deduce velocity).
- **Bài 8 (Phần mở rộng):** Đồ thị vận tốc – thời gian ($v-t$).
  - Trọng tâm: Xác định gia tốc từ độ dốc, và tính độ dịch chuyển từ diện tích dưới đồ thị. (Focus: Determine acceleration from slope, and calculate displacement from the area under the graph).

---

## 3. Thiết bị và Dụng cụ Thực hành (Lab Equipment & Tools)

Dưới đây là danh sách các thiết bị cần thiết cho bài thực hành đo tốc độ (Below is the list of required equipment for the speed measurement lab):

| STT (No.) | Thiết bị (Equipment) | Số lượng (Qty) | Ước tính giá (Est. Price VND) | Khả năng mua (Availability) | Mục đích sử dụng (Purpose) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Cổng quang điện (Photogate Sensor) | 2 | 350,000 | Cao (Shopee/Lazada) | Đo thời gian vật đi qua (Measure time passing by) |
| 2 | Xe lăn thí nghiệm (Dynamics Cart) | 1 | 150,000 | Cao (Cửa hàng giáo cụ) | Vật chuyển động (Moving object) |
| 3 | Máng trượt có thước (Track with ruler) | 1 | 250,000 | Trung bình (Cửa hàng giáo cụ) | Quỹ đạo thẳng (Straight trajectory) |
| 4 | Đồng hồ đo thời gian hiện số (Digital Timer) | 1 | 400,000 | Cao (Shopee) | Hiển thị thời gian (Display time) |
| 5 | Board Micro:bit (Alternative) | 1 | 550,000 | Cao (Hshop, MakerLab) | Lập trình bấm giờ (Programming timer) |
| 6 | Cảm biến siêu âm HC-SR04 (Ultrasonic) | 1 | 35,000 | Cao (Hshop) | Đo khoảng cách liên tục (Continuous distance) |

---

## 4. Cảnh báo An toàn (Safety Warnings) ⚠️

**Tiếng Việt:**
- **Chú ý với xe lăn trượt:** Khi thực hiện thí nghiệm trên máng nghiêng, xe có thể đạt tốc độ cao. Đảm bảo có vật cản mềm (như miếng mút) ở cuối máng để tránh va đập mạnh làm hỏng thiết bị.
- **An toàn điện:** Khi sử dụng các cảm biến và mạch Micro:bit, đảm bảo tay khô ráo. Tránh làm đoản mạch các chân cắm trên board mạch. Nguồn cấp cho cảm biến không được vượt quá 5V.
- **Bảo vệ mắt:** Tránh nhìn trực tiếp vào tia hồng ngoại phát ra từ cổng quang điện (mặc dù công suất thấp nhưng nên tạo thói quen an toàn).
- **Lắp đặt cảm biến siêu âm:** Tránh để màng rung của cảm biến tiếp xúc trực tiếp với các vật sắc nhọn gây rách màng, làm hỏng cảm biến.
- **Trọng lượng:** Cẩn thận khi thao tác với các quả nặng gia tải lên xe lăn để tránh rơi trúng chân.

**English:**
- **Caution with dynamics carts:** When experimenting on an inclined track, the cart can reach high speeds. Ensure there is a soft bumper (like a sponge) at the end of the track to prevent hard collisions that could damage the equipment.
- **Electrical safety:** When using sensors and Micro:bit boards, ensure your hands are dry. Avoid short-circuiting the pins on the board. The power supply for sensors must not exceed 5V.
- **Eye protection:** Avoid looking directly into the infrared beam emitted by the photogate (though low power, it's good safety practice).
- **Ultrasonic sensor installation:** Avoid direct contact between the sensor's vibrating membrane and sharp objects, which could tear the membrane and damage the sensor.
- **Weights:** Be careful when handling weights added to the cart to avoid dropping them on your feet.

---

## 5. Lý thuyết chuyên sâu (Deep Theory Explanations)

### 5.1 Quãng đường và Độ dịch chuyển (Distance and Displacement) (Bài 4 - SGK)

- **Hệ quy chiếu và Vị trí (Frame of Reference and Position):**
  Để xác định vị trí của một vật, ta cần chọn một vật làm mốc, một hệ trục tọa độ gắn với vật làm mốc và một gốc thời gian cùng đồng hồ đo thời gian. (To determine the position of an object, we need a reference object, a coordinate system attached to it, a time origin, and a clock).
  Vị trí trên trục $Ox$ được xác định bởi tọa độ $x$.

- **Quãng đường ($s$ - Distance):**
  - Là tổng chiều dài quỹ đạo mà vật đã thực sự đi qua trong suốt quá trình chuyển động. (The total length of the path actually traveled by the object during its motion).
  - Quãng đường là đại lượng vô hướng luôn không âm: $s \ge 0$. Đặc biệt, nó có tính cộng dồn, nghĩa là luôn tăng theo thời gian chuyển động. (Distance is a non-negative scalar quantity. It is cumulative, meaning it always increases with time of motion).

- **Độ dịch chuyển ($\vec{d}$ hoặc $\Delta \vec{x}$ - Displacement):**
  - Là đại lượng vectơ chỉ sự thay đổi vị trí của vật, có gốc tại vị trí ban đầu và ngọn tại vị trí lúc sau. (A vector quantity indicating the change in position of an object, with its tail at the initial position and head at the final position).
  - Biểu thức vectơ: $\Delta \vec{x} = \vec{x}_2 - \vec{x}_1$
  - Trong chuyển động một chiều trên trục $Ox$, giá trị đại số của độ dịch chuyển là:
    $$d = \Delta x = x_2 - x_1$$
  - Giá trị $d$ có thể dương (vật chuyển động theo chiều dương), âm (chuyển động ngược chiều dương), hoặc bằng không (vật quay về điểm xuất phát).

**Mô hình Vật lý (Physical Model):**
```text
Trục tọa độ Ox:
    -5       0       5       10      15      20 (m)
<----|-------|-------|-------|-------|-------|---->
             A (x_A=0)       B (x_B=10)      C (x_C=15)
```
Nếu vật đi từ A đến C, rồi quay lại B:
- Quãng đường: $s = |x_C - x_A| + |x_B - x_C| = 15 + 5 = 20 \text{ (m)}$.
- Độ dịch chuyển: $d = x_B - x_A = 10 - 0 = +10 \text{ (m)}$.

### 5.2 Tốc độ và Vận tốc (Speed and Velocity) (Bài 5 - SGK)

- **Tốc độ trung bình (Average Speed):**
  Đặc trưng cho độ nhanh chậm trung bình của vật trên suốt quãng đường đi. Đại lượng này chỉ mang tính chất thống kê, không cung cấp thông tin về hướng chuyển động. (Characterizes the average fastness or slowness of the object over the entire distance traveled. This is a statistical quantity and provides no directional info).
  $$v_{tb} = \frac{s}{\Delta t} = \frac{\sum s_i}{\sum \Delta t_i}$$
  Trong đó, $\Delta t$ là tổng thời gian chuyển động, bao gồm cả thời gian nghỉ ngơi.

- **Vận tốc trung bình (Average Velocity):**
  Là đại lượng vectơ, phản ánh mức độ thay đổi vị trí của vật trong một khoảng thời gian. Nó liên kết trực tiếp độ dịch chuyển và thời gian. (A vector quantity reflecting the rate of change of position over a time interval. It directly links displacement and time).
  $$\vec{v}_{tb} = \frac{\Delta \vec{x}}{\Delta t}$$
  Giá trị đại số:
  $$v_{avg} = \frac{\Delta x}{\Delta t} = \frac{x_2 - x_1}{t_2 - t_1}$$

- **Vận tốc tức thời (Instantaneous Velocity):**
  Để biết chính xác vật đang di chuyển nhanh chậm như thế nào và theo hướng nào tại một thời điểm $t$ cụ thể, ta xét vận tốc trung bình trong một khoảng thời gian $\Delta t$ vô cùng nhỏ (tiến tới 0). Về mặt toán học, đó là đạo hàm bậc nhất của vị trí theo thời gian. (To know exactly how fast and in what direction the object is moving at a specific instant $t$, we consider the average velocity over an infinitesimally small time interval. Mathematically, it is the first derivative of position with respect to time).
  $$\vec{v} = \lim_{\Delta t \to 0} \frac{\Delta \vec{x}}{\Delta t} = \frac{d\vec{x}}{dt}$$

### 5.3 Đồ thị độ dịch chuyển - thời gian ($d-t$ Graph) (Bài 7 - SGK)

- Trục tung (y-axis): Biểu diễn độ dịch chuyển $d$ hoặc tọa độ $x$.
- Trục hoành (x-axis): Biểu diễn thời gian $t$.
- **Ý nghĩa hình học (Geometric Meaning):**
  - **Độ dốc (Slope):** Độ dốc của đường thẳng nối hai điểm trên đồ thị $d-t$ bằng vận tốc trung bình giữa hai thời điểm đó.
    $$\text{Slope} = \tan \alpha = \frac{\Delta d}{\Delta t} = v_{avg}$$
  - **Đạo hàm:** Độ dốc của đường tiếp tuyến tại một điểm trên đồ thị biểu diễn vận tốc tức thời tại thời điểm đó.
- **Phân loại chuyển động qua đồ thị (Classifying motion via graphs):**
  - Đường thẳng dốc lên: $v > 0$ (Chuyển động thẳng đều theo chiều dương).
  - Đường thẳng dốc xuống: $v < 0$ (Chuyển động thẳng đều theo chiều âm).
  - Đường nằm ngang: $v = 0$ (Vật đứng yên).
  - Đường cong dạng parabol: Vận tốc thay đổi theo thời gian (Chuyển động có gia tốc).

### 5.4 Mở rộng: Đồ thị vận tốc - thời gian ($v-t$ Graph)

- Trục tung (y-axis): Vận tốc $v$.
- Trục hoành (x-axis): Thời gian $t$.
- **Ý nghĩa của diện tích dưới đồ thị (Area under the graph):**
  - Diện tích hình phẳng giới hạn bởi đồ thị $v-t$, trục hoành $t$, và hai đường thẳng $t = t_1, t = t_2$ có độ lớn bằng với **độ dịch chuyển** $\Delta x$ trong khoảng thời gian đó.
  - $\Delta x = \int_{t_1}^{t_2} v(t) dt$.
  - Nếu phần diện tích nằm phía trên trục hoành, $\Delta x > 0$. Nếu phần diện tích nằm phía dưới trục hoành, $\Delta x < 0$.
- **Ý nghĩa của độ dốc (Slope):**
  - Độ dốc của đồ thị $v-t$ chính là **gia tốc** $a = \frac{\Delta v}{\Delta t}$.

---

## 6. Phân tích Kỹ thuật Thiết bị Cảm biến (Deep Technical Analysis of Sensors)

### 6.1 Cổng quang điện (Photogate Sensor)
- **Nguyên lý hoạt động (Operating Principle):** Cổng quang điện gồm một bóng LED phát hồng ngoại (IR Transmitter) và một bộ thu quang (IR Receiver) đặt đối diện nhau. Khi có vật đi qua, chùm tia hồng ngoại bị chắn, tín hiệu điện áp tại đầu thu thay đổi (từ mức CAO xuống mức THẤP).
- **Ứng dụng đo thời gian (Time Measurement Application):** Đồng hồ số nhận tín hiệu điện áp này. Khi tín hiệu thay đổi lần đầu (bắt đầu chắn sáng), bộ đếm giờ (timer) chạy. Khi tín hiệu phục hồi (hết chắn sáng), bộ đếm dừng lại. Độ chính xác của timer thường đạt mili giây ($10^{-3} \text{ s}$) hoặc micro giây ($10^{-6} \text{ s}$).
- **Sai số hệ thống (Systematic Error):** Phụ thuộc vào độ trễ của linh kiện quang điện và tần số xung nhịp của đồng hồ số. Cổng quang có thể bị nhiễu do ánh sáng mặt trời mạnh nếu không được che chắn. Nếu cờ chắn không vuông góc hoàn toàn với tia hồng ngoại, độ rộng chắn $\Delta d$ thực tế sẽ lớn hơn so với đo đạc.

### 6.2 Cảm biến Siêu âm HC-SR04 (Ultrasonic Sensor)
- **Nguyên lý hoạt động (Operating Principle):** Sử dụng sóng âm tần số cao (40 kHz, ngoài vùng nghe của con người). Chân `Trig` phát ra một chuỗi xung siêu âm (thường 8 xung). Sóng âm đập vào vật cản và phản xạ lại. Chân `Echo` sẽ chuyển sang mức CAO trong khoảng thời gian bằng thời gian sóng đi và về.
- **Công thức tính (Calculation Formula):**
  Khoảng cách $d$ được tính bằng:
  $$d = \frac{v_{sound} \times \Delta t_{echo}}{2}$$
  Với $v_{sound} \approx 343 \text{ m/s}$ (tốc độ âm thanh trong không khí ở $20^\circ\text{C}$).
- **Đánh giá và ứng dụng (Evaluation & App):** Cảm biến siêu âm cho phép đo khoảng cách liên tục theo thời gian thực (real-time). Khi vẽ đồ thị các vị trí $d$ liên tiếp theo thời gian $t$, ta có thể trực tiếp thu được đồ thị $d-t$ trên máy tính mà không cần tính toán thủ công.
- **Hạn chế (Limitations):** Bị nhiễu bởi nhiệt độ môi trường (tốc độ âm thanh thay đổi). Cụ thể, $v_{sound} = 331.4 + 0.6 \cdot T \text{ (m/s)}$. Cảm biến cũng không hiệu quả với vật thể có bề mặt gồ ghề hoặc mềm xốp do tán xạ và hấp thụ sóng âm.

---

## 7. Ví dụ Tính toán Chi tiết (Detailed Worked Numerical Examples)

### Ví dụ 1 (Example 1)
**Bài toán:** Một chiếc ô tô đi trên quốc lộ từ Thành phố A đến Thành phố B. Đồ thị $d-t$ của hành trình như sau:
1. Từ $t=0$ đến $t=2$ giờ: Ô tô chạy thẳng từ vị trí $x=0$ đến vị trí $x=120$ km.
2. Từ $t=2$ đến $t=3$ giờ: Ô tô dừng lại ăn trưa (tọa độ không đổi).
3. Từ $t=3$ đến $t=5$ giờ: Ô tô tiếp tục chạy từ $x=120$ km đến $x=200$ km (tới đích).
4. Từ $t=5$ đến $t=8$ giờ: Ô tô quay ngay trở về và đến Thành phố A tại $t=8$ giờ.

**Yêu cầu:**
a) Vẽ phác thảo đồ thị $d-t$. (Sketch the d-t graph).
b) Tính vận tốc (velocity) của ô tô trong từng giai đoạn.
c) Tính tốc độ trung bình (average speed) và vận tốc trung bình (average velocity) trong 5 giờ đầu.
d) Tính tốc độ trung bình và vận tốc trung bình trong toàn bộ 8 giờ hành trình.

**Lời giải (Solution):**

a) Phác thảo đồ thị (Graph Sketch):
```text
  x (km)
  200 |                   C--------D (t=5, x=200)
      |                  /          \
  120 |      A--------B (t=2, 3)     \
      |     /                         \
    0 |___O(0)_________________________E (t=8)
       0    2    3        5           8   t (h)
```

b) Tính vận tốc từng giai đoạn (Velocity in each phase):
Sử dụng công thức $v = \frac{\Delta x}{\Delta t}$
- Giai đoạn OB (0 - 2 h):
  $$v_1 = \frac{120 - 0}{2 - 0} = 60 \text{ (km/h)}$$
- Giai đoạn BC (2 - 3 h):
  $$v_2 = \frac{120 - 120}{3 - 2} = 0 \text{ (km/h)}$$ (Vật đứng yên)
- Giai đoạn CD (3 - 5 h):
  $$v_3 = \frac{200 - 120}{5 - 3} = \frac{80}{2} = 40 \text{ (km/h)}$$
- Giai đoạn DE (5 - 8 h):
  $$v_4 = \frac{0 - 200}{8 - 5} = \frac{-200}{3} \approx -66.67 \text{ (km/h)}$$
  (Dấu trừ chỉ chiều chuyển động ngược với chiều dương).

c) Trong 5 giờ đầu (First 5 hours):
- Quãng đường: $s_5 = 120 + 0 + (200 - 120) = 200 \text{ km}$.
- Độ dịch chuyển: $\Delta x_5 = x(5) - x(0) = 200 - 0 = 200 \text{ km}$.
- Tốc độ trung bình: $v_{tb,5} = \frac{200}{5} = 40 \text{ km/h}$.
- Vận tốc trung bình: $v_{avg,5} = \frac{200}{5} = 40 \text{ km/h}$.

d) Toàn bộ 8 giờ (Total 8 hours):
- Quãng đường: $s_{total} = 200 \text{ (đi)} + 200 \text{ (về)} = 400 \text{ km}$.
- Độ dịch chuyển: $\Delta x_{total} = x(8) - x(0) = 0 - 0 = 0 \text{ km}$ (Vật quay lại điểm xuất phát).
- Tốc độ trung bình: $v_{tb,8} = \frac{400}{8} = 50 \text{ km/h}$.
- Vận tốc trung bình: $v_{avg,8} = \frac{0}{8} = 0 \text{ km/h}$.

### Ví dụ 2 (Example 2)
**Bài toán:** Đồ thị vận tốc - thời gian ($v-t$) của một vật như sau:
- Từ $t=0$ đến $t=4$ s: Vận tốc là hằng số $v = 5 \text{ m/s}$.
- Từ $t=4$ đến $t=7$ s: Vận tốc là hằng số $v = -3 \text{ m/s}$.
Tính tổng quãng đường đi được và độ dịch chuyển của vật trong 7 giây.

**Lời giải (Solution):**
Theo tính chất đồ thị $v-t$:
- Giai đoạn 1 ($0-4$s): Độ dịch chuyển $\Delta x_1 = \text{Diện tích hcn}_1 = 5 \times 4 = 20 \text{ m}$.
- Giai đoạn 2 ($4-7$s): Độ dịch chuyển $\Delta x_2 = \text{Diện tích hcn}_2 = -3 \times 3 = -9 \text{ m}$.

- Tổng độ dịch chuyển (Total Displacement):
  $$\Delta x = \Delta x_1 + \Delta x_2 = 20 - 9 = 11 \text{ m}$$
- Tổng quãng đường đi được (Total Distance):
  $$s = |\Delta x_1| + |\Delta x_2| = 20 + 9 = 29 \text{ m}$$

---

## 8. Thực hành Thí nghiệm (Hands-on Experiments) (Bài 6 - SGK)

**Tên thí nghiệm:** Đo tốc độ xe lăn bằng Cổng quang điện (Measuring cart speed using Photogate).

**Bước 1: Thiết lập (Setup)**
- Đặt máng trượt nằm ngang hoặc hơi nghiêng để xe lăn có thể chạy. Cân bằng máng (bằng thước nivo) nếu muốn xe chuyển động thẳng đều hoặc nằm ngang tuyệt đối.
- Gắn 2 cổng quang điện A và B lên dọc theo máng trượt. Đo chính xác khoảng cách giữa tia hồng ngoại của 2 cổng, ký hiệu là $s$. Ví dụ $s = 0.500 \pm 0.001$ m.
- Kết nối hai cổng quang với Đồng hồ đo thời gian hiện số. Chọn chế độ đo thời gian vật chắn sáng đi từ cổng A sang cổng B (chế độ $A \leftrightarrow B$).

**Bước 2: Tiến hành (Procedure)**
- Gắn một tấm chắn sáng (flag) có bề rộng hẹp (width = $\Delta d$) lên trên xe lăn. Dùng thước kẹp caliper để đo $\Delta d$. Ví dụ $\Delta d = 0.050 \pm 0.001$ m.
- Đặt xe lăn ở đỉnh máng, thả nhẹ nhàng không cung cấp vận tốc đầu.
- Để đo thời gian chạy qua 2 cổng, ghi lại thời gian $t_{AB}$ hiển thị trên đồng hồ khi xe đi từ cổng A đến cổng B. Lặp lại thí nghiệm 3-5 lần để lấy giá trị trung bình $\bar{t}_{AB}$ nhằm giảm sai số ngẫu nhiên.
- (Tùy chọn) Để đo vận tốc tức thời tại cổng A, chuyển đồng hồ số sang chế độ đo thời gian chắn tia sáng $\Delta t_A$ khi tấm chắn đi ngang qua cổng A.

**Bước 3: Tính toán và Phân tích Sai số (Calculation and Error Analysis)**
- Tốc độ trung bình trên đoạn AB:
  $$v_{tb} = \frac{s}{\bar{t}_{AB}}$$
- Vận tốc (tốc độ) tức thời tại A:
  $$v_A = \frac{\Delta d}{\Delta t_A}$$
- Lan truyền sai số (Error Propagation):
  Sai số tỷ đối của phép đo tốc độ trung bình được tính theo công thức:
  $$\frac{\delta v_{tb}}{v_{tb}} = \frac{\delta s}{s} + \frac{\delta t}{t}$$
  Trong đó $\delta s$ là sai số dụng cụ đo độ dài (ví dụ thước cuộn thường là $1 \text{ mm}$), $\delta t$ là sai số dụng cụ và ngẫu nhiên của đồng hồ đo thời gian. Nếu sử dụng nhiều lần đo, $\delta t$ sẽ bao gồm cả sai số ngẫu nhiên từ độ lệch chuẩn.
  Việc hiểu lan truyền sai số giúp học sinh biết được đại lượng nào (khoảng cách hay thời gian) đóng góp nhiều nhất vào độ không chính xác của kết quả, từ đó tìm cách cải tiến quy trình đo đạc.

**Sơ đồ lắp ráp (Assembly Diagram):**
```text
           Photogate A                  Photogate B
               |                            |
  =============|============================|============= Máng trượt (Track)
       [ Xe lăn ]--> v
          |<- s = 0.5m ->|
```

---

## 9. Lập trình Mô phỏng với Python (Python Simulation Code)

Đoạn mã sau sử dụng `matplotlib` và `numpy` để vẽ đồ thị độ dịch chuyển - thời gian dựa trên dữ liệu thực nghiệm giả định, và sử dụng phương pháp đạo hàm số học (numerical differentiation) để tính vận tốc tức thời tại mỗi điểm dữ liệu. Học sinh sẽ được thực hành lập trình trực tiếp, từ đó hiểu rõ hơn về mối liên hệ đạo hàm giữa vị trí và vận tốc.

(The following code uses `matplotlib` and `numpy` to plot a displacement-time graph based on hypothetical experimental data, and uses numerical differentiation to calculate instantaneous velocity).

```python
import numpy as np
import matplotlib.pyplot as plt

# 1. Dữ liệu thực nghiệm giả định (Hypothetical experimental data)
# Thời gian t (s) (Time in seconds)
t = np.array([0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0])

# Vị trí x (m) của vật thể (Position in meters)
# Hàm ví dụ: x(t) = 0.5 * t^2 cho t<=5, sau đó x(t) = 12.5 + 5*(t-5)
x = np.array([0.0, 0.5, 2.0, 4.5, 8.0, 12.5, 17.5, 22.5, 27.5, 32.5, 37.5])

# 2. Vẽ đồ thị Độ dịch chuyển - Thời gian (Plot d-t graph)
plt.figure(figsize=(10, 8))

# Subplot 1: Đồ thị d-t
plt.subplot(2, 1, 1)
plt.plot(t, x, marker='o', linestyle='-', color='b', linewidth=2, label='Vị trí $x(t)$ (Position)')
plt.title('Đồ thị Độ dịch chuyển - Thời gian (Displacement - Time Graph)', fontsize=14, fontweight='bold')
plt.xlabel('Thời gian $t$ (s)', fontsize=12)
plt.ylabel('Độ dịch chuyển $x$ (m)', fontsize=12)
plt.grid(True, linestyle='--', alpha=0.7)
plt.legend()
plt.axvline(x=5, color='gray', linestyle='--', alpha=0.5)
plt.text(2, 15, 'Chuyển động nhanh dần\n(Accelerating)', fontsize=10, bbox=dict(facecolor='white', alpha=0.5))
plt.text(7, 15, 'Chuyển động thẳng đều\n(Constant Velocity)', fontsize=10, bbox=dict(facecolor='white', alpha=0.5))

# 3. Tính Vận tốc tức thời (Calculate Instantaneous Velocity)
# Sử dụng phương pháp sai phân hướng tâm (Central difference method) cho các điểm giữa
# v[i] = (x[i+1] - x[i-1]) / (t[i+1] - t[i-1])
v = np.zeros_like(x)

# Điểm đầu (Forward difference - Sai phân tiến)
v[0] = (x[1] - x[0]) / (t[1] - t[0])
# Điểm cuối (Backward difference - Sai phân lùi)
v[-1] = (x[-1] - x[-2]) / (t[-1] - t[-2])
# Các điểm ở giữa (Central difference - Sai phân hướng tâm)
for i in range(1, len(t) - 1):
    v[i] = (x[i+1] - x[i-1]) / (t[i+1] - t[i-1])

# Subplot 2: Đồ thị v-t
plt.subplot(2, 1, 2)
plt.plot(t, v, marker='s', linestyle='-', color='r', linewidth=2, label='Vận tốc $v(t)$ (Velocity)')
plt.title('Đồ thị Vận tốc - Thời gian (Velocity - Time Graph)', fontsize=14, fontweight='bold')
plt.xlabel('Thời gian $t$ (s)', fontsize=12)
plt.ylabel('Vận tốc $v$ (m/s)', fontsize=12)
plt.grid(True, linestyle='--', alpha=0.7)
plt.legend()
plt.axvline(x=5, color='gray', linestyle='--', alpha=0.5)
plt.ylim(0, max(v) + 2)

plt.tight_layout()
# Uncomment plt.show() when running locally
# plt.show()

# 4. In kết quả ra màn hình (Print results)
print("Bảng Dữ Liệu Động Học (Kinematics Data Table):")
print(f"{'Thời gian t(s)':<15} | {'Vị trí x(m)':<15} | {'Vận tốc v(m/s)':<15}")
print("-" * 50)
for time, pos, vel in zip(t, x, v):
    print(f"{time:<15.1f} | {pos:<15.1f} | {vel:<15.2f}")
```

*Hướng dẫn chạy (How to run):*
- Mở terminal/command prompt.
- Cài đặt thư viện (nếu chưa có): `pip install numpy matplotlib`
- Lưu đoạn mã trên vào file `kinematics_sim.py` và chạy lệnh: `python kinematics_sim.py`. Bạn sẽ quan sát được cả biểu đồ trực quan và dữ liệu số trên console. Học sinh có thể tùy chỉnh dữ liệu của mảng `x` và `t` để mô phỏng các thí nghiệm tự thiết kế.

---

## 10. Câu hỏi Thảo luận (Discussion Questions)

**Câu 1 (Q1):** Quãng đường và độ dịch chuyển có bao giờ bằng nhau không? Phân tích một trường hợp thực tế. (Can distance and displacement ever be equal? Analyze a real-world case.)
> **Trả lời (Answer):** Có. Độ lớn của độ dịch chuyển bằng quãng đường khi vật chuyển động thẳng và không đổi chiều. Ví dụ: Một vận động viên chạy nước rút 100m thẳng từ vạch xuất phát tới đích. Khi đó quãng đường $s=100\text{m}$, độ dịch chuyển $\Delta x = 100\text{m}$. Nhưng nếu vận động viên chạy quay lại nhặt giày bị rơi, hai đại lượng này sẽ khác nhau ngay lập tức. (Yes. The magnitude of displacement equals distance when the object moves in a straight line without changing direction. Example: A sprinter running 100m straight).

**Câu 2 (Q2):** Nếu đồng hồ tốc độ (speedometer) trên xe máy chỉ một giá trị không đổi là 40 km/h trong 10 phút, điều đó có nghĩa là vận tốc của xe máy không đổi? (If a motorcycle's speedometer shows a constant value of 40 km/h for 10 mins, does that mean its velocity is constant?)
> **Trả lời (Answer):** Không đúng. Đồng hồ tốc độ chỉ đo "Tốc độ tức thời" (đại lượng vô hướng, magnitude of velocity). Vận tốc là một vectơ gồm cả độ lớn và hướng. Nếu xe đi trên một đoạn đường cong bùng binh với tốc độ không đổi 40 km/h, hướng chuyển động của xe liên tục thay đổi, do đó **vận tốc liên tục thay đổi** (và xe đang có gia tốc hướng tâm). (No. The speedometer only measures instantaneous speed. Velocity is a vector. If the motorcycle turns a corner at a constant speed, its direction changes, hence its velocity changes).

**Câu 3 (Q3):** Trong thí nghiệm đo tốc độ bằng cổng quang điện, nếu thay tấm chắn sáng dài 10cm bằng tấm chắn sáng chỉ dài 1cm thì kết quả đo $\frac{\Delta d}{\Delta t}$ có thay đổi ý nghĩa vật lý không? Tại sao? (In the photogate lab, if we replace a 10cm flag with a 1cm flag, does the physical meaning of the result change? Why?)
> **Trả lời (Answer):** Có. Tốc độ thực chất ta đo là tốc độ trung bình trong khoảng thời gian $\Delta t$ tia sáng bị chắn. Tốc độ tức thời là giới hạn khi $\Delta t \to 0$. Tấm chắn 1cm càng ngắn thì $\Delta d$ càng nhỏ, dẫn đến thời gian chặn sáng $\Delta t$ càng nhỏ. Do đó, kết quả $\frac{\Delta d}{\Delta t}$ với tấm chắn 1cm sẽ **sát với định nghĩa vận tốc tức thời** hơn rất nhiều so với tấm chắn 10cm. Tuy nhiên, nếu $\Delta d$ quá nhỏ, sai số dụng cụ của đồng hồ (ví dụ $\pm 1$ ms) sẽ chiếm tỷ trọng lớn, làm tăng sai số phép đo (sai số tỷ đối tăng).

**Câu 4 (Q4):** Nhìn vào đồ thị $d-t$, làm sao để biết vật đang chuyển động nhanh dần hay chậm dần? (Looking at a d-t graph, how can you tell if an object is speeding up or slowing down?)
> **Trả lời (Answer):** Phải xét độ dốc (slope) của tiếp tuyến với đường cong đồ thị $d-t$. Độ dốc chính là vận tốc.
> - Nếu trị tuyệt đối của độ dốc tăng theo thời gian (đường cong ngày càng dốc đứng lên hoặc dốc sâu xuống), vật đang chuyển động nhanh dần.
> - Nếu trị tuyệt đối của độ dốc giảm theo thời gian (đường cong ngày càng nằm ngang, tiến tới song song trục hoành), vật đang chuyển động chậm dần và chuẩn bị dừng lại.

**Câu 5 (Q5):** Một người ném quả bóng tennis thẳng đứng lên trời, quả bóng bay lên cao 5m rồi rơi trở lại tay người đó trong tổng thời gian 2 giây. Tính tốc độ trung bình và vận tốc trung bình của quả bóng. (A person throws a ball straight up 5m, and it falls back into their hand in 2 seconds. Calculate the average speed and average velocity).
> **Trả lời (Answer):**
> - Quá trình: Bóng bay lên 5m rồi rơi xuống 5m.
> - Tổng quãng đường: $s = 5 \text{ (lên)} + 5 \text{ (xuống)} = 10 \text{ m}$.
> - Tổng thời gian: $t = 2 \text{ s}$.
> - Tốc độ trung bình (Average speed): $v_{tb} = \frac{10}{2} = 5 \text{ m/s}$.
> - Độ dịch chuyển (Displacement): Vật quay lại đúng vị trí lòng bàn tay người ném $\implies \Delta x = 0 \text{ m}$.
> - Vận tốc trung bình (Average velocity): $v_{avg} = \frac{\Delta x}{t} = \frac{0}{2} = 0 \text{ m/s}$.

**Câu 6 (Q6):** Sai số hệ thống và sai số ngẫu nhiên khác nhau như thế nào trong bài thực hành sử dụng cổng quang? (How do systematic and random errors differ in the photogate experiment?)
> **Trả lời (Answer):** Sai số hệ thống thường xuất phát từ việc tấm chắn sáng (flag) không vuông góc tuyệt đối với tia hồng ngoại, làm cho $\Delta d$ cản sáng thực tế lớn hơn so với số đo bằng thước kẹp, khiến vận tốc đo được thường có xu hướng nhỏ hơn thực tế. Nó có tính hướng về một phía. Sai số ngẫu nhiên là dao động của thời gian đo được $\Delta t$ khi ta thả tay xe lăn mỗi lần lực thả có chút xê dịch. Sai số này có thể bù trừ bằng cách lấy trung bình nhiều lần thả.

---

## 11. Bài tập Thực hành & Về nhà (Homework & Practice Problems)

**Bài 1 (Problem 1 - Vận dụng cao):**
Một chiếc thuyền máy chạy trên sông từ bến A đến bến B ngược dòng nước mất 4 giờ. Khoảng cách giữa 2 bến là 60 km. Vận tốc của dòng nước so với bờ là 5 km/h.
a) Tính vận tốc của thuyền máy so với mặt nước.
b) Nếu thuyền máy chạy xuôi dòng từ B về A với cùng công suất động cơ, thời gian chạy sẽ là bao nhiêu?
c) Tính tốc độ trung bình của thuyền trong toàn bộ chuyến đi khứ hồi.

*Hướng dẫn (Solution Steps):*
a) Gọi $v_{t,n}$ là vận tốc thuyền so với nước, $v_{n,b}$ là vận tốc nước so với bờ ($5 \text{ km/h}$). Khi đi ngược dòng: $v_{nguoc} = v_{t,n} - v_{n,b}$. Vận tốc ngược dòng thực tế: $v_{nguoc} = \frac{60}{4} = 15 \text{ km/h}$. $\implies v_{t,n} - 5 = 15 \implies v_{t,n} = 20 \text{ km/h}$.
b) Đi xuôi dòng: $v_{xuoi} = v_{t,n} + v_{n,b} = 20 + 5 = 25 \text{ km/h}$. Thời gian xuôi dòng $t_{xuoi} = \frac{60}{25} = 2.4 \text{ giờ}$.
c) Tổng quãng đường: $s = 60 + 60 = 120 \text{ km}$. Tổng thời gian: $t_{tong} = 4 + 2.4 = 6.4 \text{ giờ}$. Tốc độ trung bình $v_{tb} = \frac{120}{6.4} = 18.75 \text{ km/h}$.

**Bài 2 (Problem 2 - Lập trình Python nâng cao):**
Sử dụng code Python ở mục 9, thay đổi mảng vị trí `x` thành một hàm dao động điều hòa:
`x = 10 * np.sin(2 * np.pi * t / 5)` với `t = np.linspace(0, 10, 100)`.
1. Vẽ lại đồ thị $d-t$ và $v-t$.
2. Hãy so sánh kết quả tính đạo hàm số học bằng numpy với đạo hàm giải tích (Analytical derivative) $v(t) = 10 \cdot \frac{2\pi}{5} \cdot \cos(2\pi t / 5)$. Nhận xét về sự đồng pha/lệch pha giữa ly độ và vận tốc.

*Hướng dẫn (Solution Steps):*
Học sinh viết lại script, nhận ra rằng vận tốc là hàm cosine, sớm pha $\frac{\pi}{2}$ so với hàm vị trí sine. Vận tốc đạt cực đại khi vật qua vị trí cân bằng ($x=0$) và bằng 0 khi vật ở biên ($x=\pm 10$). Trải nghiệm này kết nối vật lý lớp 10 với kiến thức dao động lớp 11 và 12, một điểm sáng trong chương trình đổi mới. Việc mô phỏng cũng rèn luyện kỹ năng công nghệ thông tin cho học sinh.

**Bài 3 (Problem 3 - Tư duy phản biện):**
Nếu dùng cảm biến siêu âm thay vì cổng quang để đo vận tốc tức thời, thì ưu và nhược điểm của phương pháp siêu âm là gì? Bạn sẽ cấu hình khoảng cách lấy mẫu như thế nào để kết quả đo đạt độ tin cậy cao nhất?
*Gợi ý:* Cảm biến siêu âm cho đồ thị liên tục $d-t$, dễ tính đạo hàm từng điểm, nhưng sai số $v_{sound}$ do nhiệt độ sẽ lan truyền vào toàn bộ đồ thị. Tốc độ cập nhật (sampling rate) cũng bị giới hạn bởi thời gian Echo quay về. Đặc biệt, nhiễu âm phản xạ từ các vật thể xung quanh có thể làm lệch vị trí đo đạc đáng kể so với việc dùng cổng quang chắn tia sáng chuyên dụng.

---

## 12. Bảng Tiêu chí Đánh giá (Assessment Rubric)

Thang điểm 100 cho báo cáo thực hành và bài tập về nhà. (100-point scale for lab report and homework).

| Tiêu chí (Criteria) | Mức độ 1: Cần cố gắng (Needs Improvement) (0-10đ) | Mức độ 2: Đạt (Proficient) (11-20đ) | Mức độ 3: Xuất sắc (Excellent) (21-25đ) | Điểm tối đa |
| :--- | :--- | :--- | :--- | :---: |
| **1. Lý thuyết (Theory)** | Không phân biệt được quãng đường và độ dịch chuyển. (Cannot distinguish distance/displacement). | Phân biệt được nhưng tính toán còn sai sót dấu. (Distinguishes but has sign calculation errors). | Giải thích rõ ràng, lập luận vật lý chặt chẽ, chính xác. (Clear explanation, rigorous physical reasoning). | 25 |
| **2. Kỹ năng Vẽ Đồ thị (Graphing Skills)** | Đồ thị vẽ sai trục, không ghi đơn vị, tỷ lệ sai lệch. (Wrong axes, no units, wrong scale). | Đồ thị cơ bản đúng, có đơn vị nhưng phân tích dốc sai. (Basically correct, lacks proper slope analysis). | Đồ thị rõ ràng, chia tỷ lệ chuẩn, phân tích đúng ý nghĩa đạo hàm và diện tích. (Clear, well-scaled, correct derivative and area analysis). | 25 |
| **3. Kỹ năng Thực hành (Lab Skills)** | Không biết lắp ghép thiết bị cổng quang. (Cannot assemble photogate equipment). | Lắp được thiết bị, thu thập được số liệu nhưng xử lý sai số chưa tốt. (Assembled & got data, but poor error handling). | Thao tác nhanh, chính xác, xử lý số liệu chuẩn, biện luận sai số hệ thống/ngẫu nhiên sâu sắc. (Fast, accurate, deep error discussion). | 25 |
| **4. Lập trình (Programming/Python)** | Không chạy được code, gặp lỗi cú pháp. (Code doesn't run, syntax errors). | Chạy được code mẫu nhưng không biết chỉnh sửa hàm $x(t)$. (Runs sample code but can't modify function). | Chỉnh sửa linh hoạt, tính sai số đạo hàm, đồ họa đẹp mắt (Legend, Grid). (Modifies well, calculates errors, nice plots). | 25 |
| **Tổng điểm (Total Score)** | | | | **100** |

---
*Tài liệu nội bộ khóa học STEM Vật Lí 10 - Phát triển bởi chuyên gia giáo dục theo chương trình Kết nối Tri thức với Cuộc sống.*
*(Internal STEM Physics 10 Course Material - Developed by Education Experts following KNTT Curriculum.)*

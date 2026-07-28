# Tuần 8: Chuyển Động Tròn & Lực Hướng Tâm / Week 8: Circular Motion & Centripetal Force

## 1. Learning Objectives / Mục tiêu học tập

**Vietnamese (Tiếng Việt):**
- Trình bày được định nghĩa chuyển động tròn, chuyển động tròn đều và các đặc điểm động học của nó.
- Phân biệt rõ ràng và thiết lập được mối liên hệ toán học giữa độ dịch chuyển góc, tốc độ góc, tốc độ dài, chu kì và tần số.
- Giải thích được nguyên nhân vật lý cốt lõi gây ra chuyển động tròn đều là do một lực tổng hợp luôn hướng vào tâm, gọi là lực hướng tâm.
- Nắm được công thức tính gia tốc hướng tâm, và áp dụng định luật II Newton để tính lực hướng tâm.
- Vận dụng lý thuyết chuyển động tròn vào việc thiết kế độ nghiêng an toàn cho các khúc cua trên đường cao tốc.
- Phân tích nguyên lý hoạt động của vệ tinh nhân tạo quay quanh Trái Đất và cách lực hấp dẫn đóng vai trò lực hướng tâm.
- Thực hiện thành thạo thí nghiệm đo tốc độ dài và tốc độ góc của một đĩa quay, có sử dụng cảm biến quang học đếm xung.
- Lập bảng tính toán số liệu thực nghiệm, đánh giá mức độ tin cậy của phép đo chu kì quay bằng đồng hồ hoặc cảm biến.
- Viết mã Python để mô phỏng quỹ đạo bay của vệ tinh nhân tạo, tích hợp vẽ đồ thị hiển thị quỹ đạo tròn 2D và các véctơ vận tốc, gia tốc tại nhiều điểm khác nhau.
- Hiểu được các rủi ro về an toàn khi chế tạo máy quay ly tâm tốc độ cao trong công nghiệp y tế và cơ khí (nguy cơ vật văng ra do đứt liên kết).

**English:**
- Define circular motion, uniform circular motion, and detail its kinematic characteristics.
- Clearly distinguish and mathematically connect angular displacement, angular speed, linear speed, period, and frequency.
- Explain the core physical cause of uniform circular motion: a net force constantly directed towards the center, known as centripetal force.
- Grasp the formula for centripetal acceleration and apply Newton's second law to calculate centripetal force.
- Apply circular motion theory to design safe banking angles for highway curves.
- Analyze the operating principles of artificial satellites orbiting Earth and how gravity acts as the centripetal force.
- Proficiently conduct experiments measuring the linear and angular speeds of a rotating disk using optical pulse-counting sensors.
- Create experimental data tables, evaluating the reliability of rotation period measurements via stopwatch or sensor.
- Write Python code to simulate satellite orbital trajectories, plotting 2D circular orbits along with velocity and acceleration vectors at various points.
- Understand safety risks when building high-speed centrifuges in medical and mechanical industries (risk of projectiles due to broken linkages).

## 2. Related Textbook Lessons / Bài học SGK liên quan chi tiết

Chương này thuộc **Chương VI: Chuyển động tròn** (SGK Kết nối tri thức với cuộc sống - Vật lí 10).
- **SGK KNTT Bài 28: Động học của chuyển động tròn / Kinematics of circular motion.**
  - Trình bày các khái niệm radian, tốc độ góc.
  - Phân biệt giữa chuyển động quay của một vật rắn và chuyển động tròn của một chất điểm.
- **SGK KNTT Bài 29: Gia tốc hướng tâm và lực hướng tâm / Centripetal acceleration and force.**
  - Chứng minh sự tồn tại của gia tốc trong chuyển động tròn đều (dù tốc độ không đổi nhưng vận tốc đổi hướng liên tục).
  - Khái niệm lực hướng tâm không phải là một lực mới trong tự nhiên, mà là lực thành phần hoặc hợp lực của các lực cơ bản (như trọng lực, lực ma sát, lực căng dây).
- **SGK KNTT Bài 30: Thực hành: Đo tốc độ dài và tốc độ góc / Practice: Measuring linear and angular speed.**
  - Thực hành với bộ thiết bị chuyển động tròn.
- **Các phần mở rộng (Đọc thêm):** 
  - Khái niệm "lực li tâm" trong hệ quy chiếu phi quán tính (rotating reference frame). Tại sao hành khách trong ô tô lại bị ép vào thành cửa khi xe rẽ gấp?
  - Cơ học quỹ đạo: Vận tốc vũ trụ cấp 1 (khoảng $7.9\text{ km/s}$) cần thiết để giữ vệ tinh trên quỹ đạo tầm thấp.

## 3. Lab Equipment & Tools / Dụng cụ và thiết bị thực hành

| Dụng cụ (VI) | Equipment (EN) | Giá dự kiến (VND) | Nơi mua / Availability | Ghi chú / Notes |
|---|---|---|---|---|
| Động cơ quay một chiều | DC Rotary Motor | 450,000 | Cty thiết bị Giáo dục | Có núm vặn biến trở để thay đổi tốc độ quay RPM liên tục. Nguồn 12V. |
| Đĩa nhôm có lỗ/khe | Slotted Disk | 150,000 | Xưởng cơ khí trường | Bằng nhôm nhẹ, sơn đen để chống phản quang, có khe đục dọc theo viền. |
| Cảm biến quang điện | Optical Sensor | 200,000 | Cửa hàng linh kiện | Hình chữ U, khi khe hở lướt qua tia sáng sẽ xuất ra tín hiệu xung điện. |
| Lực kế lò xo quay | Rotary Spring Scale| 300,000 | Đặt hàng trực tuyến | Thiết kế đặc biệt gắn trên thanh ngang quay để đo lực kéo vật nặng văng ra. |
| Thước kẹp điện tử | Digital Caliper | 250,000 | Cửa hàng kim khí | Đo chính xác bán kính r từ tâm quay đến tâm quả nặng / khe quang. Độ chia 0.01mm. |
| Đồng hồ bấm giây | Stopwatch | 100,000 | Siêu thị | Độ chia 0.01s. Dự phòng nếu dùng tay đếm chu kì quay chậm. |
| Quả nặng các loại | Mass Set | 100,000 | Shopee/Lazada | Có móc cài, 10g, 20g, 50g để gắn lên thanh quay khảo sát lực hướng tâm. |
| Bộ đọc xung Arduino | Arduino Counter | 150,000 | Cửa hàng linh kiện | Board Arduino Uno lập trình sẵn để đếm số xung/giây từ cảm biến và hiện LCD. |

## 4. Theory Explanations / Lý thuyết và Công thức chi tiết

### 4.1. Động học chuyển động tròn (Kinematics)
- **Độ dịch chuyển góc (Angular displacement - $\theta$):**
  - Trong chuyển động tròn, vị trí của vật thường được xác định bởi góc ở tâm quét bởi bán kính nối từ tâm đến vật.
  - Đơn vị chuẩn: Radian (rad). Chuyển đổi: $360^\circ = 2\pi \text{ rad}$.
  - Mối liên hệ cung tròn và góc: $s = r\theta$ (với $\theta$ tính bằng radian, $s$ là độ dài cung quay).

- **Tốc độ góc (Angular velocity - $\omega$):**
  - Đặc trưng cho sự quay nhanh hay chậm của bán kính nối.
  - Công thức: $\omega = \frac{\Delta \theta}{\Delta t}$ (rad/s). 
  - Trong chuyển động tròn đều, tốc độ góc là hằng số.

- **Chu kì và Tần số (Period & Frequency):**
  - Chu kì $T$ (giây): Thời gian vật đi hết trọn vẹn 1 vòng ($2\pi$ radian). $T = \frac{2\pi}{\omega}$.
  - Tần số $f$ (Hertz - Hz): Số vòng vật đi được trong 1 giây. $f = \frac{1}{T} = \frac{\omega}{2\pi}$.

- **Mối liên hệ tốc độ dài và tốc độ góc:**
  - Vận tốc tuyến tính (vận tốc dài - $v$) trên quỹ đạo tiếp tuyến:
  - $$ v = \frac{\Delta s}{\Delta t} = \frac{r\Delta \theta}{\Delta t} = r\omega $$

### 4.2. Động lực học chuyển động tròn (Dynamics)
- **Gia tốc hướng tâm (Centripetal acceleration):**
  - Trong chuyển động tròn đều, độ lớn vận tốc $|\vec{v}|$ không đổi nhưng phương luôn thay đổi (luôn tiếp tuyến với quỹ đạo tròn).
  - Sự thay đổi phương của vận tốc chứng tỏ có một gia tốc vuông góc với vận tốc, hướng thẳng vào tâm quay.
  - Công thức:
    $$ a_{ht} = \frac{v^2}{r} = \omega^2 r $$
    
- **Lực hướng tâm (Centripetal force):**
  - Áp dụng định luật 2 Newton, lực (hay tổng hợp lực) gây ra gia tốc hướng tâm được gọi là lực hướng tâm.
  - Phương trình:
    $$ \vec{F}_{ht} = m\vec{a}_{ht} \Rightarrow F_{ht} = m\frac{v^2}{r} = m\omega^2 r $$
  - Nếu lực giữ vật biến mất (ví dụ đứt dây), vật sẽ không bay ra ngoài theo đường bán kính (do không có lực nào đẩy ra), mà sẽ bay đi theo đường tiếp tuyến do nguyên lý quán tính (Định luật 1 Newton).

### 4.3. Ứng dụng thực tế: Thiết kế mặt đường nghiêng ở khúc cua (Banked Curves)
- Tại khúc cua phẳng, lực ma sát nghỉ đóng vai trò duy nhất làm lực hướng tâm. Nếu đường ướt (ma sát giảm) hoặc xe chạy quá nhanh ($v$ lớn $\Rightarrow F_{ht}$ cần lớn), xe sẽ bị văng ra khỏi đường do không đủ lực ma sát.
- Cách khắc phục: Làm mặt đường nghiêng một góc $\alpha$ so với phương ngang.
- Khi đó, phản lực $N$ vuông góc với mặt đường sẽ có một thành phần nằm ngang $N_x = N\sin\alpha$ hướng vào tâm cong. 
- Tại tốc độ chuẩn thiết kế, xe không cần đến ma sát để bám cua:
  $$ N\sin\alpha = m\frac{v^2}{r} $$
  $$ N\cos\alpha = mg $$
  Chia 2 phương trình: $\tan\alpha = \frac{v^2}{rg} \Rightarrow v_{chuẩn} = \sqrt{rg\tan\alpha}$.
- Đây là lý do các trường đua NASCAR hay bãi thử ô tô có mặt đường cong rất dốc.

### 4.4. Worked Numerical Examples / Bài toán ví dụ (Giải chi tiết)

**Ví dụ 1 (Example 1): Bài toán ôtô đi qua cầu vồng**
Một ôtô có khối lượng $M = 1500\text{ kg}$ chạy với tốc độ không đổi $v = 15\text{ m/s}$ qua một cây cầu hình vòng cung lồi có bán kính cong $R = 50\text{ m}$. Lấy $g = 9.8\text{ m/s}^2$. 
Yêu cầu:
a) Tính lực nén của ôtô lên mặt cầu tại điểm cao nhất.
b) Xe phải chạy với tốc độ tối thiểu bao nhiêu để ngay tại điểm cao nhất xe bị "cất cánh" khỏi mặt cầu?

**Giải (Solution):**
a) Tại điểm cao nhất của cầu, xe chuyển động tròn đều tạm thời (theo phương đứng). Tâm quay nằm ở phía dưới mặt cầu.
- Các lực tác dụng lên xe theo phương thẳng đứng: Trọng lực $P = Mg$ (hướng xuống tâm), Phản lực của mặt cầu $N$ (hướng lên trên).
- Hợp lực đóng vai trò lực hướng tâm (hướng vào tâm quay, tức là hướng xuống):
  $$ P - N = F_{ht} = M\frac{v^2}{R} $$
- Phản lực $N$ (cũng là lực nén của xe lên cầu theo định luật 3 Newton):
  $$ N = P - M\frac{v^2}{R} = M\left(g - \frac{v^2}{R}\right) $$
- Thay số:
  $$ N = 1500 \cdot \left(9.8 - \frac{15^2}{50}\right) = 1500 \cdot \left(9.8 - \frac{225}{50}\right) = 1500 \cdot (9.8 - 4.5) = 1500 \cdot 5.3 = 7950 \text{ (N)} $$
Trọng lượng tĩnh của xe là $1500 \cdot 9.8 = 14700\text{ N}$. Lực nén lúc xe chạy (7950 N) nhỏ hơn trọng lượng tĩnh. Cảm giác trên xe sẽ thấy "nhẹ đi" (bồng bềnh).

b) Để xe vừa "cất cánh" khỏi mặt cầu, lực nén $N = 0$.
$$ M\left(g - \frac{v_{max}^2}{R}\right) = 0 \Rightarrow g = \frac{v_{max}^2}{R} $$
$$ v_{max} = \sqrt{gR} = \sqrt{9.8 \cdot 50} = \sqrt{490} \approx 22.13 \text{ (m/s)} \approx 79.7 \text{ (km/h)} $$
Nếu xe vượt quá 80km/h trên cây cầu này, nó sẽ bay lên không trung.

**Ví dụ 2 (Example 2): Vệ tinh địa tĩnh (Geostationary Satellite)**
Vệ tinh địa tĩnh là vệ tinh luôn nằm cố định phía trên một điểm ở đường xích đạo Trái Đất. Để làm được vậy, chu kì quay của vệ tinh quanh Trái Đất phải bằng đúng chu kì tự quay của Trái Đất. 
Cho biết $T_{Trái Đất} \approx 24\text{ giờ}$, bán kính Trái Đất $R_E \approx 6371\text{ km}$, Khối lượng Trái Đất $M_E = 5.97 \times 10^{24}\text{ kg}$, Hằng số hấp dẫn $G = 6.67 \times 10^{-11}\text{ N}\cdot\text{m}^2/\text{kg}^2$.
Yêu cầu: Tính độ cao $h$ của quỹ đạo vệ tinh địa tĩnh so với mặt đất.

**Giải (Solution):**
Lực hấp dẫn đóng vai trò lực hướng tâm giữ vệ tinh quỹ đạo:
$$ F_{hd} = F_{ht} \Rightarrow G\frac{M_E \cdot m}{r^2} = m\omega^2 r $$
Rút gọn khối lượng vệ tinh $m$, ta có:
$$ G\frac{M_E}{r^2} = \omega^2 r \Rightarrow r^3 = \frac{GM_E}{\omega^2} $$
Trong đó chu kì vệ tinh $T = 24\text{ giờ} = 24 \times 3600 = 86400\text{ (s)}$.
Tốc độ góc $\omega = \frac{2\pi}{T} = \frac{2 \cdot 3.14159}{86400} \approx 7.272 \times 10^{-5}\text{ (rad/s)}$.
Thay số vào công thức bán kính $r$:
$$ r^3 = \frac{6.67 \times 10^{-11} \cdot 5.97 \times 10^{24}}{(7.272 \times 10^{-5})^2} \approx \frac{3.982 \times 10^{14}}{5.288 \times 10^{-9}} \approx 7.53 \times 10^{22} \text{ (m}^3\text{)} $$
Suy ra bán kính từ tâm Trái Đất:
$$ r = \sqrt[3]{7.53 \times 10^{22}} \approx 42,226,000 \text{ (m)} = 42,226 \text{ (km)} $$
Độ cao $h$ so với mặt đất:
$$ h = r - R_E = 42226 - 6371 = 35,855 \text{ (km)} $$
(Đây là con số nổi tiếng trong ngành viễn thông vệ tinh: quỹ đạo địa tĩnh ở độ cao gần 36,000 km).

## 5. Diagrams and Models / Sơ đồ và Mô hình

Mô hình hệ tọa độ của Véctơ trong Chuyển động tròn đều:
```ascii
          ^ v (Vận tốc tuyến tính v: tiếp tuyến với quỹ đạo)
         /
        /
       + <--- Hạt chuyển động tròn 
      /| \
     / |  \  Quỹ đạo tròn
    |  |a_ht (Gia tốc hướng tâm luôn hướng vào tâm)
    |  v   |
    |  O   | <-- Tâm quỹ đạo (Center)
     \    /
      \  /
       --
Lưu ý: a_ht và v luôn vuông góc với nhau ở mọi vị trí.
```

Phân tích lực ô tô trên mặt đường nghiêng (Banked Curve):
```ascii
         N (Phản lực vuông góc đường)
        /|
       / | N_y = N*cos(alpha) = P
      /  |
[Car]+---+-----> N_x = N*sin(alpha) = F_ht (Lực hướng tâm)
    /    | 
   /     V P = mg (Trọng lực)
  /___ góc alpha
 Mặt ngang
```

## 6. Step-by-step Hands-on Experiments / Thực hành mở rộng

### 6.1. Mục đích / Purpose
Thực hành gắn cảm biến quang học đếm số xung của đĩa quay, qua đó phần mềm tự động vẽ đồ thị để tìm chu kì. Khảo sát trực tiếp phương trình lực hướng tâm bằng lò xo đo lực li tâm.

### 6.2. Các bước tiến hành / Procedures
1. **Phần 1: Đo tốc độ dài và tốc độ góc**
   - Lắp đĩa nhôm (có 10 khe hẹp phân bố đều ở mép ngoài) lên trục động cơ điện một chiều.
   - Dùng thước kẹp đo chính xác bán kính $r$ từ tâm đến khe hở. (Ví dụ $r = 0.08\text{m}$).
   - Bố trí cảm biến quang học chữ U sao cho mép đĩa đi qua giữa rãnh cảm biến mà không chạm vào.
   - Nối cảm biến vào Arduino Datalogger. Cài đặt Datalogger đếm số xung trong 1 giây. Vì đĩa có 10 khe, 10 xung bằng 1 vòng.
   - Bật nguồn điện động cơ ở mức Voltage = 3V. Đợi 5 giây cho tốc độ ổn định. Ghi nhận tần số xung (ví dụ 120 xung/giây).
   - Tính toán tần số vòng $f = \frac{120}{10} = 12\text{ (Hz)}$. Suy ra $\omega = 2\pi f$ và $v = \omega r$.
   - Tăng Voltage lên 6V, 9V, 12V và lấy 3 bộ số liệu tiếp theo.

2. **Phần 2: Kiểm chứng lực hướng tâm (Centripetal Force Apparatus)**
   - Lắp hệ thanh quay chữ T nằm ngang lên trục động cơ. 
   - Trên thanh ngang có móc 1 quả nặng $m = 50\text{g}$, quả nặng được giữ bởi 1 lò xo nối với tâm quay. Đầu kia quả nặng có thể trượt trên thanh ngang.
   - Lò xo này được nối với một lực kế kỹ thuật số đặt ở tâm trục.
   - Bật động cơ quay. Quả nặng bị "văng" ra làm lò xo giãn. Lực kế chỉ giá trị lực đàn hồi của lò xo. Ở trạng thái cân bằng động, lực đàn hồi này cung cấp lực hướng tâm $F_{ht}$ để giữ quả nặng.
   - Ghi lại số chỉ của lực kế ($F_{đo}$), dùng Datalogger đo tốc độ góc $\omega$, và dùng một đèn nháy Stroboscope (đèn chớp đồng bộ) để nhìn rõ và đọc vị trí giãn $r$ của quả nặng trên thanh thước vạch lúc đang quay.
   - Tính $F_{lý thuyết} = m\omega^2 r$. So sánh $F_{đo}$ và $F_{lý thuyết}$.

### 6.3. Bảng xử lý số liệu thí nghiệm / Data Table
*Khảo sát phần 2 - Khối lượng quả nặng $m = 0.05\text{ kg}$.*

| Lần quay | Voltage | Bán kính quay $r$ (m) | Tốc độ góc $\omega$ đo được (rad/s) | Lực đo được $F_{đo}$ (N) | $F_{lý thuyết} = m\omega^2r$ (N) | Sai số tương đối |
|---|---|---|---|---|---|---|
| 1 | 3V | 0.10 | 10.5 | 0.52 | $0.05 \times (10.5)^2 \times 0.10 \approx 0.551$ | ~ 5.6% |
| 2 | 6V | 0.12 | 14.8 | 1.25 | $0.05 \times (14.8)^2 \times 0.12 \approx 1.314$ | ~ 4.8% |
| 3 | 9V | 0.14 | 18.2 | 2.20 | $0.05 \times (18.2)^2 \times 0.14 \approx 2.318$ | ~ 5.1% |

*Nhận xét:* Giá trị lực đo được từ cảm biến có sự tương đồng rất lớn với giá trị tính toán lý thuyết. Sai số 5% xuất phát từ ma sát tĩnh giữa quả nặng và thanh trượt ngăn nó văng ra tự do hoàn toàn, và sai số trong việc đọc bán kính bằng mắt thường kết hợp đèn chớp. Định luật được xác nhận.

## 7. Python Lab / Thực hành Python chi tiết

Sử dụng thư viện `matplotlib` vẽ hoạt hình đồ họa (Animation) cho chuyển động quỹ đạo của Trái Đất và Mặt Trăng, hiển thị trực tiếp các véctơ lực hướng tâm và véctơ vận tốc.

```python
"""
Mô phỏng quỹ đạo bay vệ tinh và véctơ lực hướng tâm, vận tốc.
Satellite Orbit Simulation with Centripetal Force and Velocity Vectors.
"""
import numpy as np
import matplotlib.pyplot as plt

def simulate_orbit_vectors():
    # 1. Các thông số hệ thống (System Constants)
    # Ta dùng hệ số chuẩn hóa để đồ thị dễ nhìn thay vì dùng số thực (quá lớn)
    R_orbit = 10.0   # Bán kính quỹ đạo
    omega = 0.5      # Tốc độ góc (rad/s)
    
    # 2. Tạo mảng thời gian 1 chu kì (Time array for one period)
    T = 2 * np.pi / omega
    # Tạo 12 điểm trên quỹ đạo để vẽ véctơ cho thoáng
    t = np.linspace(0, T, 12, endpoint=False) 
    
    # 3. Phương trình chuyển động tròn tham số (Parametric equations)
    # Vị trí (x, y)
    x = R_orbit * np.cos(omega * t)
    y = R_orbit * np.sin(omega * t)
    
    # Vận tốc v = đạo hàm vị trí. v = (-R*w*sin(wt), R*w*cos(wt))
    vx = -R_orbit * omega * np.sin(omega * t)
    vy =  R_orbit * omega * np.cos(omega * t)
    
    # Gia tốc a = đạo hàm vận tốc. a = (-R*w^2*cos(wt), -R*w^2*sin(wt))
    ax = -R_orbit * omega**2 * np.cos(omega * t)
    ay = -R_orbit * omega**2 * np.sin(omega * t)
    
    # 4. Trực quan hóa dữ liệu (Visualization)
    plt.figure(figsize=(10, 10))
    
    # Vẽ Trái đất ở tâm (Central Body)
    earth = plt.Circle((0, 0), 2, color='#1f77b4', label='Trái Đất (Central Body)')
    plt.gca().add_patch(earth)
    
    # Vẽ đường quỹ đạo mờ (Orbit path)
    t_full = np.linspace(0, T, 100)
    plt.plot(R_orbit * np.cos(omega * t_full), R_orbit * np.sin(omega * t_full), 'k--', alpha=0.3)
    
    # Vẽ các vệ tinh tại các điểm thời gian t
    plt.plot(x, y, 'ro', markersize=8, label='Vệ tinh (Satellite)')
    
    # Vẽ Véctơ Vận tốc (Xanh lục) và Gia tốc hướng tâm (Đỏ) tại mỗi điểm
    for i in range(len(t)):
        # Vector Vận tốc
        plt.quiver(x[i], y[i], vx[i], vy[i], angles='xy', scale_units='xy', scale=1.5, color='green', width=0.005)
        # Vector Gia tốc hướng tâm
        plt.quiver(x[i], y[i], ax[i], ay[i], angles='xy', scale_units='xy', scale=0.5, color='red', width=0.005)
    
    # Chú thích tùy chỉnh giả cho legend của Quiver
    plt.quiver([0], [0], [0], [0], color='green', label='Vận tốc (Velocity - v)')
    plt.quiver([0], [0], [0], [0], color='red', label='Lực Hướng Tâm (Centripetal F)')
    
    # Định dạng đồ thị
    plt.title('Mô phỏng Quỹ đạo Vệ tinh và các Véctơ Động lực học\n(Satellite Orbit Dynamics Vectors)', fontsize=16, fontweight='bold')
    plt.xlabel('Trục X (Đơn vị khoảng cách)', fontsize=12)
    plt.ylabel('Trục Y (Đơn vị khoảng cách)', fontsize=12)
    
    # Cân bằng trục để vòng tròn không bị méo thành elip
    plt.axis('equal') 
    limit = R_orbit * 1.5
    plt.xlim(-limit, limit)
    plt.ylim(-limit, limit)
    plt.grid(True, linestyle=':', alpha=0.6)
    plt.legend(loc='upper right')
    
    plt.tight_layout()
    plt.savefig('satellite_vectors_plot.png', dpi=300)
    print("Mô phỏng hoàn tất. Đồ họa đã được lưu thành 'satellite_vectors_plot.png'")

if __name__ == "__main__":
    simulate_orbit_vectors()
```

## 8. Safety Warnings / Cảnh báo an toàn ⚠️

**VI:**
1. Trong các thí nghiệm về máy quay ly tâm và hệ lực hướng tâm, ĐẢM BẢO CHẮC CHẮN quả nặng và đĩa quay được cố định bằng ốc siết chặt vào trục động cơ. Lực quán tính li tâm ở tốc độ 3000 vòng/phút (RPM) có thể xé đứt dây văng quả kim loại đi với tốc độ viên đạn gây tai nạn nghiêm trọng.
2. Không để bàn tay, mái tóc dài, khăn quàng hoặc quần áo rộng gần khu vực trục động cơ đang quay. Nguy cơ cuốn và vắt là rất cao.
3. Luôn đeo kính bảo hộ bằng nhựa Polycarbonate chống va đập khi làm thực nghiệm với tốc độ quay lớn. 
4. Tuân thủ việc tăng tốc độ động cơ từ từ (tăng mức Voltage lên dần) qua chiết áp, tuyệt đối không giật ngay lên nguồn 12V vì gia tốc góc đột ngột dễ làm vỡ cấu trúc cơ khí.
5. Cảnh báo nguy cơ về hiệu ứng nhấp nháy (strobe effect) khi sử dụng đèn Stroboscope. Tần số nháy nhất định có thể kích hoạt cơn co giật ở những học sinh có tiền sử bệnh động kinh nhạy sáng (Photosensitive epilepsy). Cần hỏi ý kiến lớp trước khi sử dụng đèn chớp.

**EN:**
1. In centrifuge and centripetal force apparatus experiments, ABSOLUTELY ENSURE all masses and disks are tightly screwed to the motor shaft. Centrifugal inertia at 3000 RPM can snap strings, launching metal masses at bullet speeds causing severe accidents.
2. Keep hands, long hair, scarves, and loose clothing well away from the spinning motor shaft area to prevent catastrophic entanglement.
3. Always wear impact-resistant Polycarbonate safety goggles when operating high-speed rotary setups.
4. Gradually increase motor speed (voltage) using the potentiometer; never jerk it straight to 12V, as sudden angular acceleration can shatter the mechanical structure.
5. Warning regarding the strobe effect: Certain flashing frequencies from a Stroboscope can trigger seizures in students with a history of Photosensitive Epilepsy. Explicitly ask the class before turning on strobe lights.

## 9. Discussion Questions / Câu hỏi thảo luận chuyên sâu

1. **Question 1:** Lồng máy giặt ở chế độ vắt xoay với tốc độ 1200 vòng/phút. Tại sao quần áo lại bị ép dính sát vào thành lồng máy, và nước lại văng ra ngoài qua các lỗ nhỏ? Giải thích bằng cả 2 hệ quy chiếu: Đứng yên và Gắn với lồng giặt.
   - *Gợi ý (Hint):* Theo hệ quy chiếu đứng yên mặt đất: Quần áo đang chuyển động tròn có quán tính muốn văng thẳng ra ngoài theo tiếp tuyến. Lồng giặt ngăn nó lại bằng cách cung cấp lực phản lực (hướng tâm). Còn nước qua khe hở thì không bị ngăn lại nên văng thẳng ra. Theo hệ quy chiếu lồng giặt (quay): Có sự xuất hiện của "Lực quán tính li tâm" hướng ra xa tâm, lực này kéo cả quần áo và nước ra rìa.

2. **Question 2:** Nếu Trái Đất đột nhiên mất đi toàn bộ lực hấp dẫn, Mặt Trăng sẽ chuyển động tiếp như thế nào trên không gian? Định luật Vật lý nào chi phối điều này?
   - *Gợi ý (Hint):* Nó không rơi vào tâm, cũng không bị "hút" hay quay vòng nữa. Theo Định luật 1 Newton (Quán tính), nếu tổng ngoại lực bằng 0, vật đang chuyển động sẽ tiếp tục chuyển động thẳng đều. Mặt Trăng sẽ bay tuột vào không gian sâu thẳm theo một đường thẳng tiếp tuyến với quỹ đạo tại đúng thời điểm đứt lực hấp dẫn.

3. **Question 3:** Khi đi xe đạp mô-tô ôm một khúc cua gắt, tại sao người lái lại chủ động nghiêng cả người và xe vào phía tâm khúc cua đến mức đầu gối sát mặt đất (cornering)?
   - *Gợi ý (Hint):* Tại khúc cua, lực ma sát với mặt đường là lực hướng tâm đẩy bánh xe trượt vào trong tâm. Lực này tạo ra một mô-men lực có xu hướng làm lật nhào chiếc xe ra phía ngoài. Bằng cách nghiêng trọng tâm người và xe vào trong, trọng lực sẽ tạo ra một mô-men ngược chiều bù trừ lại mô-men gây lật của lực li tâm (quán tính), giữ hệ thống thăng bằng.

4. **Question 4:** So sánh gia tốc hướng tâm do sự tự quay của Trái Đất tác dụng lên một vật đặt tại đường Xích Đạo và đặt tại hai Cực (Bắc/Nam). Tại sao người ta ưu tiên xây dựng các bệ phóng tàu vũ trụ (như Mũi Canaveral của NASA) gần Xích đạo nhất có thể?
   - *Gợi ý (Hint):* Ở cực, bán kính quay $r=0 \Rightarrow a_{ht}=0$. Ở xích đạo $r$ max nên $v = \omega R$ đạt giá trị max ($\sim 460 \text{ m/s}$). Xây trạm phóng tên lửa ở Xích đạo giúp tên lửa "mượn" sẵn vận tốc khởi điểm 460 m/s này của Trái Đất (chỉ cần phóng theo chiều quay), tiết kiệm được hàng tấn nhiên liệu hóa học.

5. **Question 5:** Trạm không gian vũ trụ Quốc tế ISS bay ở độ cao 400km, nơi đó lực hấp dẫn của Trái Đất vẫn mạnh đến khoảng 90% so với trên mặt đất. Tại sao các phi hành gia trên trạm lại bay lơ lửng trong môi trường vi trọng lực (Microgravity) như thể không có trọng lực?
   - *Gợi ý (Hint):* Cảm giác trọng lượng sinh ra là do sàn nhà cung cấp phản lực chống lại trọng lực kéo bạn. Trên quỹ đạo, ISS đang rơi tự do xoắn ốc liên tục xuống Trái Đất do lực hấp dẫn, và phi hành gia cũng đang rơi tự do với CÙNG một gia tốc. Do đó, giữa người và sàn của ISS không có lực ép (N=0). Cảm giác này giống hệt như đứt cáp thang máy (nhưng ISS rơi ngang nhanh đến mức độ cong Trái đất lùi xuống ngang bằng tốc độ rơi, quỹ đạo thành vòng tròn khép kín).

## 10. Homework & Practice Problems / Bài tập về nhà

**Bài 1 (Động học cơ bản):** Một cái quạt trần có 3 cánh quay với tốc độ ổn định 150 vòng/phút (RPM). Chiều dài cánh quạt từ tâm ra đến mút ngoài là $R = 0.6\text{ m}$.
a) Tính chu kì $T$ và tốc độ góc $\omega$ của cánh quạt.
b) Tính tốc độ dài $v$ của một con ruồi bám ở ngay đầu mút cánh quạt và một con ruồi khác bám ở khoảng cách $R/2$.
c) Tính gia tốc hướng tâm của con ruồi ở đầu mút cánh quạt.

**Bài 2 (Máy ly tâm tế bào y tế):** Trong một máy ly tâm tách huyết tương, các ống nghiệm sinh học quay với tốc độ 4000 vòng/phút. Các mẫu máu nằm cách trục quay $15\text{ cm}$. 
a) Tính gia tốc hướng tâm mà các mẫu máu phải chịu đựng (đơn vị m/s^2).
b) So sánh gia tốc này với gia tốc trọng trường $g = 9.8\text{ m/s}^2$ (Tính xem nó gấp bao nhiêu "G"). Nhận xét sức mạnh tách ly tâm so với để ống nghiệm tự lắng theo trọng lực thường.

**Bài 3 (Mặt đường nghiêng ô tô):** Một ô tô đua khối lượng $1000\text{ kg}$ chạy thử nghiệm trên mặt đường nghiêng một góc $12^\circ$ (so với phương ngang) tại một khúc cua bán kính cong $120\text{ m}$.
a) Nếu bỏ qua hoàn toàn ma sát giữa lốp và đường (đường đóng băng), tìm vận tốc tối ưu (tốc độ chuẩn) để xe chạy qua khúc cua an toàn mà không bị trượt lên trên hoặc trượt xuống dưới dốc.
b) Tại tốc độ đó, mặt đường đang đẩy ngược lại ô tô một lực pháp tuyến $N$ là bao nhiêu? So sánh nó với trọng lượng tĩnh $mg$ của ô tô.

**Bài 4 (Hệ lực con lắc nón - Conical Pendulum):** Một quả cầu nhỏ khối lượng $200\text{ g}$ được treo bằng một sợi dây nhẹ dài $0.8\text{ m}$. Quả cầu được cấp vận tốc ngang để bay vòng quanh tạo thành một hình nón góc nón (góc giữa dây và trục thẳng đứng) là $30^\circ$. Lấy $g = 9.8\text{ m/s}^2$.
a) Vẽ sơ đồ lực tác dụng lên quả cầu.
b) Phân tích các thành phần của lực căng dây. Từ đó tính sức căng $T$.
c) Tính tốc độ dài quỹ đạo $v$ của quả cầu.

**Bài 5 (Nâng cao Python):** Cải tiến bài thực hành vẽ Quỹ đạo (Section 7). Thêm tương tác thư viện `matplotlib.animation.FuncAnimation` để tạo một video MP4 hình ảnh vệ tinh bay tròn liên tục 360 độ trên quỹ đạo. Các véctơ $\vec{v}$ và $\vec{a}$ sẽ quét quanh vòng tròn giống như kim đồng hồ. 

## 11. Assessment Rubric / Bảng đánh giá Tổng hợp

| Tiêu chí (Criteria) | Xuất sắc (90-100) / Excellent | Khá (70-89) / Good | Đạt (50-69) / Satisfactory | Cần cố gắng (<50) / Needs Improvement |
|---|---|---|---|---|
| **Hiểu lý thuyết (Theory Knowledge)** | Nắm rõ mô hình Toán học. Phân biệt rất sắc sảo khái niệm lực hướng tâm là hợp lực. Giải thích hiện tượng ly tâm rõ ràng. | Áp dụng đúng công thức động học và lực nhưng đôi khi nhầm đơn vị RPM sang rad/s. | Quên công thức liên hệ $\omega, v, a_{ht}$. Gặp khó khăn giải PT mặt phẳng nghiêng. | Mất gốc kiến thức, không hiểu gia tốc hướng tâm sinh ra từ đâu khi $v$ không đổi. |
| **Kỹ năng Lab (Lab Skills)** | Thiết lập mạch Arduino đếm xung hoàn hảo, vận hành mượt mà, phân tích sai số sắc bén. | Setup cảm biến quang hoạt động. Biết vẽ đồ thị, xử lý lỗi nhanh. | Thao tác ẩu, thu số liệu ngập ngừng, phụ thuộc vào bản in bài mẫu. | Gây nguy hiểm về an toàn, không thu thập được số liệu thực tế nào. |
| **Báo cáo & Xử lý số liệu (Data & Report)** | Xử lý excel xuất sắc, tính quy luật $F_{ht} \propto \omega^2$ chính xác, biểu diễn hồi quy tuyến tính. | Báo cáo đẩy đủ. Có vẽ đồ thị $F$ theo $\omega$ nhưng chưa dùng quy mô $x^2$. | Báo cáo có số liệu nhưng phân tích sai hoặc sao chép của sách. | Không làm bài báo cáo, số liệu tự bịa (không tương thích công thức). |
| **Kỹ năng lập trình (Python Skills)** | Code Python hoàn chỉnh, chỉnh sửa được quy mô vector mũi tên cho đẹp. Tự thêm tính năng animation. | Chạy được file mẫu và sửa được các thông số khối lượng, vận tốc đầu vào. | Copy file chạy nhưng lỗi import numpy, plt, không giải quyết được lỗi vặt. | Không làm bài Python. |
| **Khả năng Tư duy ứng dụng (Applied Thinking)** | Trả lời độc đáo, đào sâu vấn đề kỹ thuật vũ trụ, đua xe F1, và tàu lượn siêu tốc. | Trả lời tốt câu hỏi liên hệ đời sống. Quan tâm các ứng dụng công nghiệp. | Thiếu sự sáng tạo, lặp lại các ý trong sách giáo khoa. | Không làm bài tập về nhà. |

## 12. Phụ lục bổ sung (Extra Notes & Explanations)
- **Chu kì vòng quay và RPM:** Trong kỹ thuật thực tế (động cơ, ổ cứng máy tính), đại lượng đo vận tốc quay phổ biến nhất là RPM (Revolutions per Minute - Vòng trên phút). Để đổi RPM ra chuẩn SI ($\omega$ tính bằng rad/s), ta nhân với tỷ lệ $\frac{2\pi}{60}$. Ví dụ: ổ cứng HDD 7200 RPM = $7200 \times \frac{2\pi}{60} = 240\pi \approx 754\text{ rad/s}$.
- **Hiệu ứng Coriolis:** Đây là một loại lực quán tính ly kỳ xuất hiện trong hệ quy chiếu chuyển động quay như Trái Đất. Ở Bắc bán cầu, vật chuyển động dài bị lệch quỹ đạo về phía tay phải (nguyên nhân gây ra chiều quay của các cơn bão cuồng phong ngược kim đồng hồ ở Bắc bán cầu và thuận kim đồng hồ ở Nam bán cầu).
- Ứng dụng "Vòng quay tử thần" (Loop-the-loop) trên tàu lượn siêu tốc: Tại đỉnh của vòng tròn khép kín, để hành khách không rơi khỏi ghế mà không cần dây an toàn giữ lại, thì lực hướng tâm cung cấp từ trọng lượng $P$ phải bằng hoặc nhỏ hơn nhu cầu cần thiết $\frac{mv^2}{R}$. Suy ra điều kiện vận tốc tối thiểu tại đỉnh vòng lặp là $v_{min} = \sqrt{gR}$.
- Khi học Vật lý, hãy luôn nhớ: Lực ly tâm (Centrifugal force) **không có thật** đối với một người quan sát đứng yên bên ngoài (hệ quy chiếu quán tính). Nó chỉ là một công cụ Toán học hư cấu "Lực quán tính" được bịa ra để người ngồi bên trong chiếc xe đang quay có thể áp dụng định luật Newton như bình thường. Bản chất của vật là nó muốn bay thẳng theo tiếp tuyến.

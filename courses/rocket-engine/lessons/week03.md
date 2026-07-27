# Tuần 3: Khí Động Học & Thiết Kế Tên Lửa / Week 3: Aerodynamics & Rocket Design

## Lịch Sử và Giới Thiệu / History and Introduction
Khí động học (aerodynamics) là một nhánh của động lực học chất lưu, nghiên cứu về chuyển động của không khí và cách nó tương tác với các vật thể rắn, chẳng hạn như tên lửa, máy bay, hoặc ô tô. Đối với tên lửa, đặc biệt là tên lửa mô hình (model rockets), sự hiểu biết về khí động học là yếu tố sống còn để đảm bảo chuyến bay ổn định, an toàn và đạt độ cao tối đa.
Aerodynamics is a branch of fluid dynamics concerned with studying the motion of air and how it interacts with solid objects, such as rockets, airplanes, or cars. For rockets, especially model rockets, an understanding of aerodynamics is vital to ensure a stable, safe flight and to reach maximum altitude.

### Những Người Tiên Phong / The Pioneers
Những nghiên cứu đầu tiên về khí động học tên lửa có thể kể đến công trình của Robert H. Goddard, người đã phóng thành công tên lửa nhiên liệu lỏng đầu tiên vào năm 1926. Tuy nhiên, Theodore von Kármán, một nhà toán học và kỹ sư hàng không vũ trụ người Hungary-Mỹ, mới là người đặt nền móng cho các hình dáng mũi tên lửa (nosecone shapes) tối ưu hóa lực cản mà chúng ta vẫn sử dụng cho đến ngày nay (như Von Kármán ogive).
Early research into rocket aerodynamics can be traced back to the work of Robert H. Goddard, who successfully launched the first liquid-fueled rocket in 1926. However, Theodore von Kármán, a Hungarian-American mathematician and aerospace engineer, laid the foundation for drag-optimized nosecone shapes that we still use today (like the Von Kármán ogive).

## Mục Tiêu / Learning Objectives
- **Hiểu các lực cơ bản:** Nắm vững 4 lực tác động lên tên lửa trong quá trình bay (Lực đẩy, Lực cản, Trọng lực, Lực nâng).
- **Understand the fundamental forces:** Master the 4 forces acting on a rocket during flight (Thrust, Drag, Gravity, Lift).
- **Thiết kế ổn định:** Phân biệt được Trọng tâm (Center of Gravity - CG) và Tâm áp suất (Center of Pressure - CP).
- **Stable design:** Differentiate between the Center of Gravity (CG) and Center of Pressure (CP).
- **Biên độ ổn định:** Có khả năng tính toán biên độ ổn định (Stability Margin) và áp dụng phương trình Barrowman.
- **Stability Margin:** Be able to calculate the Stability Margin and apply the Barrowman equations.
- **Thực hành thiết kế:** Xây dựng một mô hình tên lửa bằng giấy bìa cứng và kiểm tra tính ổn định.
- **Design practice:** Build a cardstock model rocket and test its stability.

## Vật Liệu & Dụng Cụ / Materials & Tools

| STT / No. | Vật liệu / Material | Mô tả / Description | Số lượng / Qty | Đơn giá / Price (VND) |
| :--- | :--- | :--- | :--- | :--- |
| 1 | Bìa cứng / Cardstock | Giấy A4 định lượng 160gsm-200gsm (Cardstock paper) | 5 tờ / sheets | 10,000 |
| 2 | Ống PVC (tùy chọn) | Ống nhựa nhỏ làm khung (Small PVC pipe for frame) | 1 | 15,000 |
| 3 | Keo dán gỗ hoặc keo 502 | Keo dán chuyên dụng (Wood glue or cyanoacrylate) | 1 | 25,000 |
| 4 | Dao rọc giấy / Craft knife | Dao cắt chính xác (Precision utility knife) | 1 | 20,000 |
| 5 | Thước kẻ / Ruler | Thước kim loại 30cm (30cm metal ruler) | 1 | 10,000 |
| 6 | Kéo / Scissors | Cắt giấy, bìa cứng (Scissors for paper/cardboard) | 1 | 15,000 |
| 7 | Bút chì / Pencil | Dùng để phác thảo (For drafting) | 1 | 5,000 |
| 8 | Băng keo / Tape | Băng dính trong (Clear tape) | 1 cuộn / roll | 10,000 |
| 9 | Máy tính / Calculator | Máy tính bỏ túi (Scientific calculator) | 1 | Sẵn có (N/A) |
| 10| Đất sét / Modeling clay | Dùng để điều chỉnh CG (For adjusting CG) | 1 hộp / box | 20,000 |
| **Tổng cộng** | | | | **~ 130,000 VND** |

## Lý Thuyết / Theory

### 1. Cấu Tạo Tên Lửa / Rocket Anatomy
Một tên lửa mô hình tiêu chuẩn bao gồm các bộ phận chính sau:
A standard model rocket consists of the following main components:
- **Nosecone (Mũi tên lửa):** Hình nón hoặc hình ogive ở phía trước, giúp giảm lực cản không khí. (The conical or ogive shape at the front, helping to reduce air drag.)
- **Body Tube (Ống thân):** Cấu trúc chính chứa động cơ, hệ thống thu hồi và khoang chứa. (The main structure housing the motor, recovery system, and payload.)
- **Fins (Cánh đuôi):** Các bề mặt khí động học ở phía sau giúp giữ cho tên lửa bay thẳng. (Aerodynamic surfaces at the rear that keep the rocket flying straight.)
- **Motor Mount (Giá đỡ động cơ):** Bộ phận giữ động cơ tên lửa cố định bên trong ống thân. (The component that securely holds the rocket motor inside the body tube.)
- **Recovery System (Hệ thống thu hồi):** Dù hoặc dây ruy-băng giúp tên lửa hạ cánh an toàn. (Parachute or streamer that helps the rocket land safely.)
- **Payload Bay (Khoang chứa):** Khu vực để đặt cảm biến hoặc camera (tùy chọn). (Area to place sensors or cameras, optional.)

### 2. Các Lực Khí Động Học / Aerodynamic Forces on a Rocket
Khi tên lửa bay trong khí quyển, có 4 lực chính tác động lên nó.
As a rocket flies through the atmosphere, there are 4 main forces acting upon it.
1. **Lực đẩy (Thrust - T):** Lực tạo ra bởi động cơ đẩy tên lửa lên trên.
   **Thrust:** The force generated by the motor pushing the rocket upwards.
2. **Lực cản (Drag - D):** Lực của không khí cản trở chuyển động của tên lửa.
   **Drag:** The force of air resisting the rocket's motion.
3. **Trọng lực (Gravity - W):** Lực hút của Trái Đất kéo tên lửa xuống.
   **Gravity:** The Earth's gravitational pull bringing the rocket down.
4. **Lực nâng (Lift - L):** Lực vuông góc với hướng di chuyển. Đối với tên lửa đối xứng bay thẳng đứng, lực nâng thường bằng 0 (hoặc rất nhỏ, chỉ xuất hiện khi tên lửa bay chệch hướng, lúc này lực nâng từ cánh sẽ tạo ra mô-men quay để khôi phục quỹ đạo).
   **Lift:** Force perpendicular to the direction of motion. For symmetric rockets flying vertically, lift is usually zero (or very small, appearing only when the rocket veers off-course, at which point lift from the fins creates a restoring moment).

#### Phương trình Lực Cản (Drag Equation)
Độ lớn của lực cản được tính bằng công thức:
The magnitude of drag is calculated using the formula:
**D = ½ × ρ × v² × Cd × A**

Trong đó / Where:
- **D:** Lực cản (Drag force) tính bằng Newton (N).
- **ρ (rho):** Mật độ không khí (Air density), khoảng 1.225 kg/m³ ở mực nước biển.
- **v:** Vận tốc của tên lửa (Velocity), tính bằng m/s.
- **Cd:** Hệ số lực cản (Drag coefficient), phụ thuộc vào hình dáng.
- **A:** Diện tích cản gió mặt trước (Frontal cross-sectional area), A = π × r² (m²).

**Hệ số Lực cản (Cd) của một số hình dạng mũi (Nosecone Drag Coefficients):**
- Mũi tù / Blunt: Cd ≈ 1.0 - 1.2
- Mũi nón / Conical: Cd ≈ 0.5 - 0.7
- Mũi hình Von Kármán (Ogive): Cd ≈ 0.3 - 0.4
(Việc sử dụng mũi Von Kármán giảm đáng kể lực cản ở tốc độ cận âm).
(Using a Von Kármán ogive significantly reduces drag at subsonic speeds).

### 3. Sự Ổn Định: CG và CP / Stability: Center of Gravity and Center of Pressure
Để tên lửa bay thẳng, nó phải ổn định. Ổn định được quyết định bởi vị trí tương đối của hai điểm: Trọng tâm (CG) và Tâm áp suất (CP).
For a rocket to fly straight, it must be stable. Stability is determined by the relative positions of two points: Center of Gravity (CG) and Center of Pressure (CP).

- **Trọng tâm (Center of Gravity - CG):** Điểm cân bằng khối lượng của tên lửa. Toàn bộ trọng lượng của tên lửa có thể coi như tập trung tại điểm này. Tên lửa sẽ xoay quanh điểm CG trong không trung.
  **Center of Gravity:** The point of mass balance of the rocket. The entire weight acts through this point. The rocket rotates around its CG in flight.
- **Tâm áp suất (Center of Pressure - CP):** Điểm mà tại đó tổng các lực khí động học (lực cản và lực nâng) tác dụng.
  **Center of Pressure:** The point where the total of all aerodynamic forces (drag and lift) act.

**Nguyên lý Ổn định (The Principle of Stability):**
Tâm áp suất (CP) phải luôn nằm phía sau Trọng tâm (CG) so với hướng bay. Khi đó, nếu gió thổi làm tên lửa chệch hướng, lực khí động học tác dụng vào CP (nằm sau CG) sẽ tạo ra một mô-men xoắn xoay mũi tên lửa trở lại hướng bay ban đầu, giống như bánh lái của chong chóng gió (weathercocking).
The CP must always be behind the CG relative to the direction of flight. When a gust of wind pushes the rocket off course, aerodynamic forces acting on the CP (behind the CG) create a torque that pivots the nose back into the wind, much like a weathercock.

#### Biên độ Ổn định (Stability Margin - SM)
Khoảng cách giữa CG và CP được tính bằng đơn vị đường kính thân (calibers).
The distance between CG and CP is measured in body diameters (calibers).
**SM = (CP - CG) / D_tube**

- **Quá thấp (SM < 1):** Tên lửa không ổn định, có thể lộn nhào (Tumbling).
- **Lý tưởng (SM = 1.0 đến 2.0):** Tên lửa bay thẳng và ổn định (Stable).
- **Quá cao (SM > 2.0):** Tên lửa quá ổn định (Overstable), dễ bị ảnh hưởng bởi gió ngang (Weathercocking mạnh) làm nó bay ngang thay vì bay lên cao.

### 4. Phương trình Barrowman (Barrowman Equations)
Được phát triển bởi James Barrowman vào năm 1967, đây là phương pháp tiêu chuẩn để tính CP cho tên lửa mô hình hoạt động ở vận tốc cận âm.
Developed by James Barrowman in 1967, this is the standard method for calculating CP for model rockets at subsonic speeds.
(Các phương trình này rất phức tạp, nhưng có thể lập trình bằng Python hoặc dùng OpenRocket/Rocksim).

Các thành phần chính đóng góp vào lực nâng bình thường (Normal Force - CN):
- Phần mũi (Nosecone): CN_nose = 2.0
- Phần cánh (Fins): CN_fins phụ thuộc vào diện tích và hình dáng cánh.

Vị trí CP tổng được tính bằng trung bình trọng số của vị trí CP từng phần:
**X_cp = (CN_nose × X_nose + CN_fins × X_fins) / (CN_nose + CN_fins)**
(X được đo từ đỉnh mũi tên lửa xuống dưới).

### 5. Thiết kế Cánh đuôi (Fin Design)
Cánh đuôi quyết định phần lớn vị trí CP.
The fins largely dictate the location of the CP.
- **Trapezoidal (Hình thang):** Phổ biến, dễ chế tạo.
- **Clipped Delta (Delta cắt góc):** Khí động học tốt, thường dùng trong tên lửa hiện đại.
- **Swept (Vuốt xuôi):** Đưa CP lùi về phía sau nhiều hơn, tăng độ ổn định.

*Quy tắc ngón tay cái (Rule of Thumb):* Sải cánh (Fin span) thường nên lớn gấp khoảng 1.5 đến 2 lần đường kính thân tên lửa.

### 6. Hệ thống Thu hồi (Recovery Systems)
Hệ thống dù (Parachute) cần được tính toán kích thước để tên lửa không rơi quá nhanh (gây hỏng hóc) hoặc quá chậm (bị gió thổi bay mất).
Parachutes must be sized so the rocket doesn't fall too fast (causing damage) or too slow (drifting away).
**Vận tốc cuối (Terminal Velocity):**
v = √( (2 × m × g) / (ρ × Cd_chute × A_chute) )
- Mục tiêu an toàn (Target): v < 6 m/s (khoảng 20 ft/s).
- Hệ số lực cản dù (Cd_parachute) thường khoảng 0.75 - 1.5 tùy hình dạng (dù phẳng hình lục giác thường là 0.75).

## Tính Toán Thực Hành / Practice Calculations

**Ví dụ 1: Tính đường kính dù**
Một tên lửa nặng 0.5 kg sau khi cháy hết nhiên liệu (m = 0.5 kg). Mật độ không khí ρ = 1.225 kg/m³. Gia tốc trọng trường g = 9.8 m/s². Hệ số cản dù phẳng Cd = 0.75. Tốc độ chạm đất mong muốn v = 5 m/s.
Hãy tính diện tích dù cần thiết.

*Giải:*
Biến đổi công thức: A_chute = (2 × m × g) / (ρ × Cd × v²)
A_chute = (2 × 0.5 × 9.8) / (1.225 × 0.75 × 5²)
A_chute = 9.8 / (0.91875 × 25) = 9.8 / 22.96875 = 0.426 m²
Vì A_chute = π × r², r = √(0.426 / 3.14) = 0.368 m = 36.8 cm.
Đường kính dù cần thiết: D = 2 × r = 73.6 cm.

**Ví dụ 2: Tính lực cản lên thân tên lửa**
Tên lửa bay với tốc độ v = 100 m/s. Đường kính thân D = 5 cm (Bán kính r = 0.025m). Mũi có Cd = 0.4.
A = π × 0.025² = 0.00196 m².
Lực cản Drag = 0.5 × 1.225 × 100² × 0.4 × 0.00196 = 4.8 Newton.

## Thí Nghiệm / Lab Activities

### Lab 1: Xây Dựng Tên Lửa Bìa Cứng và Kiểm Tra CG/CP / Build a Cardstock Rocket and Test CG/CP
**Mục đích (Purpose):** Hiểu rõ khái niệm CG và CP thông qua thực hành chế tạo. Lắp ráp nhanh một thân tên lửa giả lập (mockup) và áp dụng phép thử "Swing Test" (Thử nghiệm quay vòng).

**Các bước (Steps):**
1. **Tạo ống thân (Make the Body Tube):**
   - Cuộn 1 tờ giấy bìa cứng thành ống trụ (đường kính khoảng 3cm, dài 25cm). Cố định bằng băng keo dọc theo mép.
   - (Roll a sheet of cardstock into a cylinder - approx 3cm diameter, 25cm length. Secure with tape.)
2. **Tạo mũi tên lửa (Make the Nosecone):**
   - Cắt một nửa hình tròn giấy, cuộn thành hình nón, dán keo. Gắn vào một đầu của ống thân.
   - (Cut a semi-circle, roll it into a cone, tape it. Attach to one end of the body tube.)
3. **Cắt và gắn cánh đuôi (Cut and Attach Fins):**
   - Thiết kế 3 cánh hình Clipped Delta từ giấy bìa cứng. Gắn đều đặn (cách nhau 120 độ) ở phần đuôi.
   - (Design 3 clipped delta fins from cardstock. Attach them evenly spaced at 120 degrees at the rear.)
4. **Đo Trọng Tâm (Measure CG):**
   - Đặt tên lửa nằm ngang lên ngón tay của bạn. Di chuyển tên lửa cho đến khi nó thăng bằng hoàn hảo. Đánh dấu điểm đó là CG.
   - (Balance the rocket horizontally on your finger. Mark the balance point as CG.)
5. **Thử nghiệm Swing Test (Đo CP thực tế):**
   - Buộc một sợi dây dài khoảng 1 mét vào chính xác điểm CG.
   - (Tie a string about 1 meter long exactly at the CG mark.)
   - Đeo kính bảo hộ, cầm đầu dây và quay tên lửa quanh đầu bạn giống như quay một cái thòng lọng (lasoo).
   - (Wear safety goggles, hold the string and swing the rocket in a circle over your head.)
   - Nếu mũi tên lửa hướng về phía trước theo hướng quay, tên lửa **ổn định** (CP nằm sau CG). Nếu nó lộn nhào, tên lửa **không ổn định**.
   - (If the nose points forward in the direction of motion, it's stable. If it tumbles, it's unstable.)
6. **Điều chỉnh (Adjust):** Nếu không ổn định, hãy nhét một ít đất sét vào mũi tên lửa (nosecone) để dời CG về phía trước, sau đó thử lại.

### Lab 2: Sử Dụng OpenRocket / Using OpenRocket Simulator
1. Tải và cài đặt phần mềm OpenRocket (Mã nguồn mở, miễn phí).
2. Thiết kế mô hình tên lửa trên phần mềm bằng cách kéo thả các bộ phận.
3. Phần mềm sẽ tự động tính toán vị trí CG và CP (biểu tượng chấm xanh và đỏ).
4. **Thử thách:** Thay đổi hình dạng cánh từ Trapezoidal sang Swept và quan sát xem CP lùi về phía sau bao nhiêu cm.

## Code / Formulas

Dưới đây là một ví dụ bằng ngôn ngữ Python để tính toán Tâm Áp Suất (CP) đơn giản theo phương trình Barrowman cho cấu hình 3 cánh.
Below is a simple Python script to calculate the Center of Pressure (CP) using simplified Barrowman equations for a 3-fin configuration.

```python
import numpy as np

def barrowman_cp(body_len, body_diam, nose_len, fin_span, fin_root, fin_tip, fin_sweep, num_fins=3):
    """
    Tính vị trí Tâm Áp Suất (CP) tính từ mũi tên lửa (đơn vị: cm).
    Calculate Center of Pressure distance from the nose tip.
    """
    # 1. Nosecone contribution (giả sử mũi ogive/nón chuẩn)
    CN_nose = 2.0
    X_nose = 0.466 * nose_len
    
    # 2. Fins contribution
    s = fin_span
    d = body_diam
    # Vị trí trọng tâm khí động học của cánh (so với gốc cánh)
    Xf = (fin_sweep / 3) * ((fin_root + 2*fin_tip) / (fin_root + fin_tip))
    
    # Hệ số lực nâng của bộ cánh
    term1 = 4 * num_fins * (s/d)**2
    term2 = 1 + np.sqrt(1 + (2*s / (fin_root + fin_tip))**2)
    CN_fins = term1 / term2
    
    # Vị trí áp dụng lực của cánh (tính từ mũi)
    X_fins = body_len - fin_root + Xf
    
    # 3. Tính toán tổng thể (Total CP)
    CN_total = CN_nose + CN_fins
    X_cp = (CN_nose * X_nose + CN_fins * X_fins) / CN_total
    
    return X_cp, CN_total

# Ví dụ (Example usage):
body_length = 30.0 # cm
body_diameter = 3.0 # cm
nose_length = 8.0 # cm
fin_span = 4.5 # cm
fin_root_chord = 5.0 # cm
fin_tip_chord = 2.0 # cm
fin_sweep_distance = 3.0 # cm

cp, cn_total = barrowman_cp(body_length, body_diameter, nose_length, 
                            fin_span, fin_root_chord, fin_tip_chord, fin_sweep_distance)

print(f"Khoảng cách CP từ mũi / Distance of CP from nose: {cp:.2f} cm")
# Nếu CG nằm ở 20 cm, tính Stability Margin:
cg = 20.0
sm = (cp - cg) / body_diameter
print(f"Biên độ ổn định / Stability Margin: {sm:.2f} calibers")
```

## ⚠️ An Toàn / Safety Notes
Thiết kế khí động học kém có thể dẫn đến hậu quả nghiêm trọng khi phóng. Luôn tuân thủ quy tắc an toàn tên lửa mô hình (Model Rocketry Safety Code).
Poor aerodynamic design can lead to serious consequences during launch. Always adhere to the Model Rocketry Safety Code.
- **TUYỆT ĐỐI KHÔNG (NEVER):** Phóng một tên lửa chưa được kiểm tra độ ổn định. Phải luôn đảm bảo CG nằm trước CP ít nhất 1 đường kính thân (1 caliber).
- **CHỈ SỬ DỤNG (ONLY USE):** Vật liệu nhẹ như giấy, bìa cứng, nhựa mỏng, balsa cho phần vỏ tên lửa. Không dùng kim loại gia công làm cấu trúc chính vì nó có thể trở thành vật nguy hiểm nếu rơi tự do.
- **Swing Test:** Luôn thực hiện bài kiểm tra Swing Test bằng dây cho những thiết kế mới trước khi gắn động cơ thật.
- **Kính Bảo Hộ (Safety Goggles):** Luôn đeo kính khi thực hiện thí nghiệm cắt dán (với dao rọc giấy) và kiểm tra quay dây (Swing Test).

## Câu Hỏi Thảo Luận / Discussion Questions (5)
1. Tại sao Trọng tâm (CG) bắt buộc phải nằm ở phía trước Tâm áp suất (CP) để tên lửa bay thẳng? Chuyện gì xảy ra nếu CP nằm trước CG?
   *Why must the CG be located ahead of the CP for straight flight? What happens if the CP is ahead of the CG?*
2. Hình dạng mũi (nosecone) nào giảm lực cản tốt nhất ở vận tốc dưới âm thanh (subsonic)? Tại sao?
   *Which nosecone shape reduces drag best at subsonic speeds? Why?*
3. Nếu bạn tăng kích thước (diện tích) của cánh đuôi tên lửa, vị trí của Tâm áp suất (CP) sẽ di chuyển về hướng nào?
   *If you increase the size (area) of the rocket fins, in which direction will the Center of Pressure (CP) move?*
4. Gió ngang (crosswind) ảnh hưởng như thế nào đến một tên lửa có biên độ ổn định (Stability Margin) quá lớn (ví dụ SM = 4.0)? Hiện tượng "weathercocking" là gì?
   *How does a crosswind affect a rocket with an excessively large Stability Margin (e.g., SM = 4.0)? What is "weathercocking"?*
5. Một chiếc dù có đường kính quá lớn sẽ mang lại lợi ích gì và có nguy cơ gì đối với việc hạ cánh của tên lửa?
   *What are the benefits and risks of using an oversized parachute for rocket recovery?*

## Bài Về Nhà / Homework
**Mini-Project: Thiết kế tên lửa tối ưu trên OpenRocket**
1. Cài đặt phần mềm OpenRocket trên máy tính cá nhân.
2. Thiết kế một tên lửa mô hình với các thông số: Ống thân (Body Tube) đường kính tối thiểu 24mm, chiều dài tối thiểu 30cm.
3. Thay đổi hình dạng của 3 loại cánh: Rectangular (Chữ nhật), Elliptical (Elip), và Clipped Delta. Ghi lại vị trí CP cho từng loại.
4. Điều chỉnh khối lượng mũi tên lửa (thêm Mass component) sao cho Stability Margin (Biên độ ổn định) đạt chính xác 1.5 calibers.
5. Xuất file PDF hoặc chụp ảnh màn hình báo cáo nộp cho giáo viên ở buổi học tiếp theo.
*(Design an optimized rocket on OpenRocket. Test 3 fin shapes, record CP locations, adjust nose weight to achieve exactly 1.5 calibers of Stability Margin, and export a report.)*

## Đánh Giá / Assessment Rubric

| Tiêu chí / Criteria | Xuất sắc / Excellent (9-10đ) | Khá / Good (7-8đ) | Cần cố gắng / Needs Work (<7đ) |
| :--- | :--- | :--- | :--- |
| **Kiến thức Lý thuyết (Theory Knowledge)** | Nắm vững sự khác biệt giữa CG, CP và công thức tính. Giải thích được hiện tượng weathercocking. | Hiểu cơ bản về CG, CP nhưng chưa tính toán mượt mà công thức. | Nhầm lẫn giữa CG và CP, không giải thích được lực cản. |
| **Thực hành Lab 1 (Swing Test)** | Lắp ráp tên lửa rất cân đối, cánh thẳng, thực hiện swing test thành công hoàn toàn. | Lắp ráp được nhưng mũi hoặc cánh hơi lệch. Swing test thành công sau khi chỉnh sửa. | Tên lửa quá lệch, không thể thực hiện swing test thành công. |
| **Bài tập Tính toán (Calculations)** | Tính toán đường kính dù và lực cản chính xác 100%, có đơn vị rõ ràng. | Có sai sót nhỏ trong phép nhân/chia nhưng hiểu đúng công thức. | Áp dụng sai công thức, kết quả tính toán sai hoàn toàn. |
| **Sử dụng OpenRocket (Homework)** | Nộp báo cáo đầy đủ 3 loại cánh, tối ưu SM đạt chuẩn 1.5, trình bày rõ ràng. | Thiết kế được trên phần mềm, đạt SM ổn định nhưng thiếu 1-2 báo cáo chi tiết. | Không sử dụng được phần mềm hoặc thiết kế báo lỗi (SM < 1.0). |

---
*Bản quyền khóa học STEM DIY Rocket Engine - Tài liệu nội bộ. / Copyright STEM DIY Rocket Engine Course - Internal Document.*

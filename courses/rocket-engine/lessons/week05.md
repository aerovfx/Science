# Tuần 5: Hệ Thống Phục Hồi, An Toàn & Lắp Ráp Tên Lửa Mô Hình / Week 5: Recovery Systems, Safety & Model Rocket Assembly

## Mục Tiêu / Learning Objectives

### Tiếng Việt
Trong tuần thứ 5 của khóa học này, chúng ta sẽ chuyển sự tập trung từ lý thuyết cơ bản và khí động học sang một trong những khía cạnh quan trọng nhất của kỹ thuật tên lửa: đưa tên lửa trở lại mặt đất một cách an toàn. Mục tiêu của bài học này là:
1. Hiểu các nguyên lý vật lý chi phối sự rơi trong không khí và cách các hệ thống phục hồi (recovery systems) thay đổi các lực này để đảm bảo hạ cánh an toàn.
2. Nắm vững cách tính toán kích thước dù (parachute sizing) thông qua phương trình lực cản khí động học cơ bản.
3. Làm quen với các khái niệm và thiết bị phục hồi điện tử, đặc biệt là hệ thống bung dù kép (dual deployment) sử dụng cao độ kế (altimeter).
4. Học và thấm nhuần Bộ Quy Tắc An Toàn của Hiệp Hội Tên Lửa Quốc Gia (NAR - National Association of Rocketry) và áp dụng vào bối cảnh tại Việt Nam.
5. Thực hành lắp ráp hoàn chỉnh một tên lửa mô hình thương mại an toàn (ví dụ: Estes Alpha III), bao gồm lắp ráp vây, động cơ, hệ thống phục hồi, và chuẩn bị bệ phóng.
6. Hiểu các quy trình an toàn trên bãi phóng, từ việc kiểm tra 12 điểm trước chuyến bay đến xử lý các tình huống động cơ xịt (misfire).

### English
In the fifth week of this course, we will shift our focus from fundamental theory and aerodynamics to one of the most critical aspects of rocketry: bringing the rocket safely back to the ground. The objectives of this lesson are:
1. Understand the physics governing free fall in the atmosphere and how recovery systems alter these forces to ensure a safe landing.
2. Master the calculation of parachute sizing through the fundamental aerodynamic drag equation.
3. Familiarize yourself with electronic recovery concepts and devices, specifically dual deployment systems using altimeters.
4. Learn and internalize the National Association of Rocketry (NAR) Safety Code and its application within the Vietnamese context.
5. Practice the complete assembly of a safe commercial model rocket kit (e.g., Estes Alpha III), including fin attachment, motor mount assembly, recovery system packing, and launch pad preparation.
6. Understand launch site safety procedures, from the 12-point pre-flight inspection to handling motor misfires safely.

---

## Vật Liệu & Dụng Cụ / Materials & Tools

Bảng dưới đây liệt kê các vật liệu và dụng cụ cần thiết cho phần thực hành của tuần này, cùng với giá ước tính tính bằng VNĐ.
The table below lists the materials and tools required for this week's hands-on activities, along with estimated prices in VND.

| STT | Tên Linh Kiện (VI) | Component Name (EN) | Số Lượng / Qty | Đơn Giá (VND) / Price | Tổng (VND) / Total | Ghi Chú / Notes |
|:---:|:---|:---|:---:|:---:|:---:|:---|
| 1 | Bộ KIT Estes Alpha III | Estes Alpha III Model Rocket Kit | 1 bộ | 450,000 | 450,000 | Dành cho thực hành lắp ráp an toàn / Safe assembly practice kit |
| 2 | Động cơ Estes (A8-3 hoặc B4-4) | Estes Motors (A8-3 or B4-4) | 1 vỉ (3 cái) | 350,000 | 350,000 | Động cơ tiêu chuẩn / Standard commercial motors |
| 3 | Mồi lửa Estes & Chốt nhựa | Estes Igniters & Plugs | 1 bộ | Đi kèm | 0 | Thường đi kèm hộp động cơ / Usually included with motors |
| 4 | Giấy chống cháy (Wadding) | Recovery Wadding | 1 bịch | 150,000 | 150,000 | Bảo vệ dù khỏi khí nóng / Protects parachute from hot ejection gases |
| 5 | Dù dự phòng (các kích cỡ) | Spare Parachutes (various sizes) | 3 cái | 80,000 | 240,000 | Dùng cho thí nghiệm rơi / Used for drop tests |
| 6 | Dây thun chống sốc / Kevlar | Shock Cord (Elastic/Kevlar) | 5 mét | 50,000 | 50,000 | Hấp thụ lực giật bung dù / Absorbs deployment shock |
| 7 | Keo dán nhựa / Epoxy | Plastic Cement / Epoxy 5-min | 1 tuýp | 70,000 | 70,000 | Dán vây và ống động cơ / Gluing fins and motor mount |
| 8 | Giấy nhám các loại | Sandpaper (assorted grits) | 3 tờ | 10,000 | 30,000 | Làm mịn bề mặt / Smoothing surfaces |
| 9 | Băng keo giấy | Masking Tape | 1 cuộn | 15,000 | 15,000 | Cố định linh kiện / Fixing components temporarily |
| 10 | Cao độ kế mô hình | Model Rocket Altimeter (e.g. Jolly Logic) | 1 cái | 1,200,000| 1,200,000| Ghi lại độ cao / Records peak altitude |
| 11 | Hệ thống bệ phóng Estes | Estes Launch Pad & Controller | 1 bộ | 600,000 | 600,000 | Thiết bị phóng an toàn / Safe launching equipment |
| **Tổng** | **Tổng Cộng (Estimated Total)** | | | | **3,155,000 VND** | |

---

## Lý Thuyết / Theory

### 1. Tầm Quan Trọng Của Hệ Thống Phục Hồi / The Importance of Recovery Systems
Sau khi động cơ tiêu thụ hết nhiên liệu và tên lửa đạt đến đỉnh quỹ đạo (apogee), nó sẽ bắt đầu rơi tự do dưới tác dụng của trọng lực. Nếu không có hệ thống phục hồi, tên lửa sẽ rơi với vận tốc đầu cực đại (terminal velocity), gây nguy hiểm cho người trên mặt đất và phá hủy hoàn toàn tên lửa cùng các thiết bị điện tử bên trong.
Hệ thống phục hồi là một tập hợp các cơ cấu và vật liệu được thiết kế để tạo ra lực cản khí động học (aerodynamic drag) nhằm giảm vận tốc rơi của tên lửa xuống một mức an toàn (thường dưới 6 m/s đối với tên lửa mô hình tiêu chuẩn).

After the motor burns out and the rocket reaches its apogee, it begins to free-fall under the influence of gravity. Without a recovery system, the rocket would fall at terminal velocity, posing a severe hazard to people on the ground and completely destroying the rocket and its onboard electronics.
A recovery system is a collection of mechanisms and materials designed to generate aerodynamic drag to reduce the rocket's descent velocity to a safe level (typically under 6 m/s for standard model rockets).

### 2. Các Loại Dù / Types of Parachutes
Trong tên lửa mô hình, dù là phương pháp phục hồi phổ biến nhất. Dưới đây là các loại dù thường gặp:
- **Dù tròn (Round/Hemispherical Parachute):** Loại dù phổ biến nhất, dễ may và dễ gấp. Tuy nhiên, nó có thể bị chao đảo (oscillation) khi rơi. Hệ số cản (Cd) khoảng 0.75 - 0.80.
- **Dù chéo (Cross Parachute):** Được làm từ hai dải vải chữ nhật vắt chéo nhau. Dù chéo rất ổn định, ít chao đảo và có hệ số cản cao hơn (Cd khoảng 0.85).
- **Dù vòng tròn (Toroidal Parachute):** Dù có một lỗ lớn ở giữa (như hình bánh donut), tạo ra độ ổn định cực cao và Cd có thể lên tới 1.5 - 2.2. Tuy nhiên, việc chế tạo và gấp loại dù này rất phức tạp.

In model rocketry, parachutes are the most common recovery method. Here are the common types:
- **Round/Hemispherical Parachute:** The most common type, easy to manufacture and pack. However, it can oscillate during descent. Drag coefficient (Cd) is around 0.75 - 0.80.
- **Cross Parachute:** Made from two rectangular panels crossing each other. It is very stable, oscillates less, and has a higher drag coefficient (Cd around 0.85).
- **Toroidal Parachute:** Has a large hole in the center (like a donut), providing extreme stability and a Cd up to 1.5 - 2.2. However, manufacturing and packing are complex.

### 3. Dây Sốc (Shock Cord)
Dây sốc là bộ phận kết nối giữa thân tên lửa và hệ thống mũi/dù. Chức năng của nó là hấp thụ lực giật (shock) khi dù đột ngột mở ra ở vận tốc cao.
- **Chiều dài:** Dây sốc nên dài ít nhất gấp 2 lần chiều dài thân tên lửa để đảm bảo tính đàn hồi và tránh việc mũi tên lửa văng ngược lại làm móp thân.
- **Vật liệu:** Các loại tên lửa nhỏ (Estes) thường dùng dây thun (elastic rubber), nhưng dây thun dễ bị đứt do nhiệt từ khí phóng. Tên lửa lớn hơn thường sử dụng dây Kevlar (chịu nhiệt, chịu lực kéo rất tốt) kết hợp với một đoạn thun hoặc nylon đàn hồi ở cuối.

The shock cord connects the rocket body to the nosecone/parachute system. Its function is to absorb the shock when the parachute suddenly deploys at high speeds.
- **Length:** The shock cord should be at least 2 times the length of the rocket body tube to provide enough elasticity and prevent the nosecone from snapping back and denting the body.
- **Materials:** Small model rockets (Estes) often use elastic rubber, but rubber can easily break due to the heat of ejection gases. Larger rockets use Kevlar (heat resistant, high tensile strength) combined with a section of elastic nylon at the end.

### 4. Liều Phóng & Cơ Chế Bung Dù (Ejection Charge & Deployment Mechanism)
Trong tên lửa mô hình tiêu chuẩn (sử dụng động cơ thương mại như Estes), sau khi nhiên liệu cháy hết, động cơ có một lớp thuốc cháy chậm (delay charge) không tạo ra lực đẩy mà chỉ tạo khói (để theo dõi) và đếm lùi thời gian. Khi cháy đến cuối, ngọn lửa sẽ bắt vào liều phóng (ejection charge) - thường là một lượng nhỏ thuốc súng đen (black powder) được đóng gói sẵn và kiểm định an toàn trong động cơ.
Sự bùng cháy của liều phóng tạo ra một áp suất khí lớn bên trong ống thân. Áp suất này đẩy lớp giấy wadding, sau đó đẩy dù và mũi tên lửa bung ra ngoài.

In standard model rockets (using commercial motors like Estes), after the propellant burns out, the motor has a delay charge that produces no thrust but emits tracking smoke and acts as a timer. When it burns through, the fire ignites the ejection charge—usually a small amount of commercially pre-packaged and safety-tested black powder built into the motor.
The combustion of the ejection charge creates a burst of pressurized gas inside the body tube. This pressure pushes the recovery wadding, which in turn pushes the parachute and nosecone out of the rocket.

### 5. Hệ Thống Phục Hồi Điện Tử (Electronic Recovery & Dual Deployment)
Đối với tên lửa bay rất cao (High Power Rocketry), việc bung dù chính ở đỉnh quỹ đạo có thể khiến tên lửa trôi dạt hàng km do gió. Để giải quyết, người ta dùng hệ thống bung dù kép (Dual Deployment):
1. Tại đỉnh quỹ đạo (Apogee), một mạch điện tử (Altimeter) phát hiện sự giảm độ cao, kích hoạt một cầu lửa (e-match) để bung một dù nhỏ (Drogue parachute). Tên lửa rơi nhanh nhưng ổn định (khoảng 15-20 m/s).
2. Khi rơi xuống độ cao an toàn (thường là 200m - 300m so với mặt đất), Altimeter kích hoạt liều phóng thứ hai để bung dù chính (Main parachute), giảm tốc độ xuống dưới 6 m/s để hạ cánh.
Các thiết bị cao độ kế phổ biến: Perfectflite MAWD, Eggtimer, hoặc các module mã nguồn mở dựa trên cảm biến BMP280.

For rockets flying to extreme altitudes (High Power Rocketry), deploying the main parachute at apogee might cause the rocket to drift for kilometers due to wind. To solve this, a Dual Deployment system is used:
1. At apogee, an electronic circuit (Altimeter) detects the drop in altitude and fires an e-match to deploy a small drogue parachute. The rocket falls quickly but stably (around 15-20 m/s).
2. When descending to a safe altitude (typically 200m - 300m AGL), the altimeter fires a second charge to deploy the main parachute, slowing the descent to under 6 m/s for landing.
Common altimeters: Perfectflite MAWD, Eggtimer, or open-source modules based on the BMP280 sensor.

### 6. Quy Tắc An Toàn NAR (NAR Safety Code)
An toàn là ưu tiên tuyệt đối. Dưới đây là tóm tắt các quy tắc quan trọng nhất từ Bộ quy tắc của Hiệp hội Tên lửa Quốc gia (NAR):
1. **Vật liệu:** Chỉ sử dụng giấy, gỗ, nhựa nhẹ để làm tên lửa. KHÔNG dùng kim loại cho thân, vây hoặc mũi.
2. **Động cơ:** Chỉ sử dụng động cơ tên lửa mô hình thương mại đã được kiểm định (certified commercial motors). Tuyệt đối KHÔNG tự chế tạo hoặc can thiệp vào động cơ.
3. **Phục hồi:** Luôn sử dụng hệ thống phục hồi (dù, cờ dải) để tên lửa trở về an toàn. Sử dụng giấy wadding chống cháy để ngăn ngừa cháy dù.
4. **Hệ thống đánh lửa:** Phải đánh lửa từ xa bằng điện, với công tắc an toàn (safety interlock) và luôn rút khóa an toàn khi đang gắn dây điện.
5. **Khu vực phóng:** Phải phóng ở khu vực ngoài trời rộng lớn, tránh xa đường dây điện, tòa nhà và sân bay. Không phóng khi có gió mạnh.
6. **Misfire (Cháy xịt):** Nếu động cơ không đánh lửa, rút chìa khóa an toàn, đợi ít nhất 1 phút trước khi tiến lại gần tên lửa để kiểm tra.

Safety is the absolute priority. Here is a summary of the most critical rules from the National Association of Rocketry (NAR) Safety Code:
1. **Materials:** Use only lightweight, non-metal parts for the nose, body, and fins (paper, wood, plastic). NO metal airframes.
2. **Motors:** Use only commercially made, certified model rocket motors. NEVER tamper with or attempt to make your own motors.
3. **Recovery:** Always use a recovery system (parachute, streamer) so the rocket returns safely. Use flame-resistant wadding to prevent parachute fires.
4. **Ignition System:** Must be launched electrically from a distance, using a launch controller with a safety interlock key. The key must be removed when approaching the pad.
5. **Launch Site:** Launch outdoors in a large, cleared area, away from power lines, buildings, and airports. Do not launch in high winds.
6. **Misfires:** If the rocket does not launch when the button is pressed, remove the safety key and wait at least one full minute before approaching the rocket to investigate.

---

## Tính Toán Thực Hành / Practice Calculations

### Phương Trình Kích Thước Dù / Parachute Sizing Equation
Để tên lửa hạ cánh an toàn, vận tốc chạm đất ($v$) phải nhỏ hơn hoặc bằng 6 m/s. Trọng lực ($F_g$) cân bằng với lực cản khí động học ($F_d$) tại vận tốc cuối (terminal velocity):

$$ F_g = F_d $$
$$ m \cdot g = \frac{1}{2} \cdot \rho \cdot v^2 \cdot C_d \cdot A $$

Trong đó:
- $m$: Khối lượng tên lửa khi hạ cánh (kg)
- $g$: Gia tốc trọng trường (9.81 m/s²)
- $\rho$: Mật độ không khí (khoảng 1.225 kg/m³ ở mực nước biển)
- $v$: Vận tốc hạ cánh mong muốn (m/s)
- $C_d$: Hệ số cản của dù (khoảng 0.75 cho dù tròn)
- $A$: Diện tích của dù. Đối với dù tròn, $A = \frac{\pi \cdot D^2}{4}$ (với D là đường kính dù)

Thế $A$ vào phương trình và giải tìm $D$:
$$ m \cdot g = \frac{1}{2} \cdot \rho \cdot v^2 \cdot C_d \cdot \frac{\pi \cdot D^2}{4} $$
$$ D = \sqrt{ \frac{8 \cdot m \cdot g}{\pi \cdot \rho \cdot v^2 \cdot C_d} } $$

### Ví dụ / Example
Một tên lửa mô hình Estes có khối lượng hạ cánh (sau khi hết nhiên liệu) là $m = 0.05$ kg (50 grams). Chúng ta sử dụng dù tròn ($C_d = 0.75$) và muốn vận tốc hạ cánh an toàn là $v = 4$ m/s. Mật độ không khí $\rho = 1.225$ kg/m³. Tính đường kính dù cần thiết.

An Estes model rocket has a descent mass of $m = 0.05$ kg. We are using a round parachute ($C_d = 0.75$) and want a safe descent velocity of $v = 4$ m/s. Air density $\rho = 1.225$ kg/m³. Calculate the required parachute diameter.

**Giải / Solution:**
$$ D = \sqrt{ \frac{8 \cdot 0.05 \cdot 9.81}{\pi \cdot 1.225 \cdot (4^2) \cdot 0.75} } $$
$$ D = \sqrt{ \frac{3.924}{3.14159 \cdot 1.225 \cdot 16 \cdot 0.75} } $$
$$ D = \sqrt{ \frac{3.924}{46.18} } $$
$$ D = \sqrt{ 0.08497 } $$
$$ D \approx 0.29 \text{ m} = 29 \text{ cm} $$
(Một chiếc dù đường kính khoảng 30 cm là hoàn hảo cho tên lửa này / A 30 cm diameter parachute is perfect for this rocket).

---

## Thí Nghiệm / Lab Activities

### Lab 1: Lắp ráp Tên Lửa Mô Hình Estes Alpha III / Assembling the Estes Alpha III Model Rocket
Trong bài thực hành này, chúng ta sẽ lắp ráp một bộ kit tên lửa thương mại được thiết kế an toàn. KHÔNG tự ý thay đổi thiết kế hoặc sử dụng vật liệu khác.
In this lab, we will assemble a safe, commercial model rocket kit. DO NOT alter the design or use substitute materials.

**Quy trình 7 Bước Lắp Ráp / 7-Step Assembly Process:**

1. **Lắp vây & Chấm keo (Fin attachment + epoxy filleting):** 
   - Alpha III sử dụng cụm vây đúc sẵn bằng nhựa. Bôi keo dán nhựa (plastic cement) vào rãnh của ống thân và trượt cụm vây vào đúng vị trí. Để khô hoàn toàn.
   - *Alpha III uses a pre-molded plastic fin can. Apply plastic cement to the body tube groove and slide the fin unit into place. Let it dry completely.*
2. **Lắp ráp buồng động cơ (Motor mount assembly):**
   - Đặt móc khóa động cơ (engine hook) vào khe ống bọc động cơ. Quấn băng keo giấy để cố định. Lắp vòng căn tâm (centering rings).
   - *Insert the engine hook into the slot of the motor mount tube. Wrap masking tape to secure it. Glue the centering rings in place.*
3. **Nhồi giấy chống cháy & Gấp dù (Recovery wadding + parachute packing):**
   - Vò nhàu 3-4 tờ giấy wadding chống cháy và nhét vào thân tên lửa. Điều này bảo vệ dù khỏi khí nóng. 
   - Gấp dù làm 4, sau đó cuộn tròn cùng với dây dù để tránh rối. Đặt dù vào trong ống thân phía trên lớp giấy wadding.
   - *Crumple 3-4 sheets of recovery wadding and push them into the body tube. This protects the parachute from hot gases. Fold the parachute in half twice, then roll it tightly with the shroud lines to prevent tangling. Insert it above the wadding.*
4. **Cài đặt mũi tên lửa (Nosecone seating):**
   - Buộc dây sốc vào lỗ ở đáy mũi tên lửa. Cắm mũi tên lửa vào đầu ống thân. Nó không được quá chặt (dù sẽ không bung ra được) hoặc quá lỏng (mũi sẽ rơi ra khi bay).
   - *Tie the shock cord to the loop at the base of the nosecone. Seat the nosecone into the body tube. It must not be too tight (parachute won't deploy) or too loose (nosecone will fall off during flight).*
5. **Canh lỉnh ống phóng (Launch lug alignment):**
   - Dán ống phóng (launch lug) - ống hút nhỏ gọn - dọc theo thân tên lửa. Ống này sẽ trượt dọc theo que phóng (launch rod) để dẫn hướng.
   - *Glue the launch lug (small straw-like tube) parallel to the body tube. This glides along the launch rod for guidance.*
6. **Lắp đặt động cơ (Motor installation):**
   - Trượt động cơ Estes (ví dụ: A8-3) vào buồng động cơ cho đến khi móc khóa giữ chặt. Chèn mồi lửa (igniter) vào lỗ xả của động cơ, ấn đến tận đáy thuốc phóng, và cố định bằng chốt nhựa.
   - *Slide the commercial Estes motor (e.g., A8-3) into the mount until the hook secures it. Insert the igniter all the way to the propellant grain and secure it with the provided plastic plug.*
7. **Kiểm tra thông mạch (Continuity check):**
   - Mang tên lửa ra bệ phóng. Nối 2 kẹp cá sấu của bộ điều khiển phóng vào mồi lửa. Lùi xa ít nhất 5 mét.
   - Cắm chìa khóa an toàn vào bộ điều khiển. Đèn sáng báo hiệu mạch điện đã thông mạch (continuity) và sẵn sàng phóng.
   - *Take the rocket to the pad. Attach the micro-clips to the igniter. Move back at least 5 meters. Insert the safety key. The light should turn on, indicating electrical continuity.*

### Lab 2: Thực Hành Quy Trình Bãi Phóng / Launch Day Procedures Drill
- **Vai trò Giám đốc An toàn (RSO - Range Safety Officer):** Kiểm tra lại toàn bộ quy trình, đảm bảo không có người ở gần bệ phóng, bầu trời quang đãng, không có máy bay.
- **Đếm ngược (Countdown):** Hô to "5, 4, 3, 2, 1, PHÓNG!" đồng thời giữ chặt nút phóng.
- **Xử lý Misfire (Misfire handling):** Giả lập tình huống bấm nút nhưng tên lửa không bay. Học sinh phải thực hiện đúng quy trình: Rút chìa khóa, hô to "MISFIRE", đợi đúng 60 giây, sau đó mới tiến lại gần kiểm tra dây điện.
- **Kiểm tra sau chuyến bay (Post-flight inspection):** Khi thu hồi tên lửa, kiểm tra vây có gãy không, dây sốc có bị đứt hoặc cháy xém không, và tháo vỏ động cơ cũ một cách an toàn (cẩn thận vì nó có thể còn rất nóng).

- *Role of RSO: Verify pad is clear, sky is clear of aircraft.*
- *Countdown: Shout loudly "5, 4, 3, 2, 1, LAUNCH!" while holding the button.*
- *Misfire Drill: Simulate a misfire. Students must remove safety key, shout "MISFIRE", wait 60 seconds, then investigate.*
- *Post-flight: Inspect for broken fins, burnt shock cords, and safely remove the spent casing (it may be hot).*

---

## Code / Formulas

Đoạn mã Python dưới đây giúp bạn tự động tính toán đường kính dù cần thiết dựa trên khối lượng tên lửa và vận tốc mong muốn.
The Python script below automates the calculation of the required parachute diameter based on rocket mass and desired velocity.

```python
import math

def calculate_parachute_diameter(mass_kg, target_velocity_m_s, Cd=0.75, rho=1.225):
    """
    Tính toán đường kính dù tròn cho tên lửa.
    Calculate round parachute diameter for a rocket.
    
    Parameters:
    mass_kg (float): Khối lượng tên lửa lúc hạ cánh / Descent mass in kg
    target_velocity_m_s (float): Vận tốc hạ cánh mục tiêu / Target landing velocity in m/s
    Cd (float): Hệ số cản khí động học / Drag coefficient (default: 0.75)
    rho (float): Mật độ không khí / Air density in kg/m^3 (default: 1.225 at sea level)
    
    Returns:
    float: Đường kính dù tính bằng mét / Diameter in meters
    """
    g = 9.81 # Gia tốc trọng trường (m/s^2)
    # D = sqrt( (8 * m * g) / (pi * rho * v^2 * Cd) )
    numerator = 8 * mass_kg * g
    denominator = math.pi * rho * (target_velocity_m_s ** 2) * Cd
    
    diameter_m = math.sqrt(numerator / denominator)
    return diameter_m

# Ví dụ thực tế: Tên lửa Estes Alpha III nặng 50g, muốn rơi với vận tốc 4 m/s
# Example: Estes Alpha III weighing 50g, target velocity 4 m/s
rocket_mass = 0.05
velocity = 4.0

diam = calculate_parachute_diameter(rocket_mass, velocity)
print(f"Khối lượng tên lửa / Rocket mass: {rocket_mass*1000} g")
print(f"Vận tốc rơi mục tiêu / Target velocity: {velocity} m/s")
print(f"Đường kính dù cần thiết / Required parachute diameter: {diam:.2f} m ({diam*100:.1f} cm)")
```

---

## ⚠️ An Toàn / Safety Notes

> [!WARNING]
> **TUYỆT ĐỐI TUÂN THỦ CÁC QUY TẮC SAU / STRICTLY ADHERE TO THESE RULES:**
> - **Tuyệt đối KHÔNG chế tạo nhiên liệu hoặc chất nổ.** Khóa học này chỉ sử dụng động cơ tên lửa mô hình thương mại đã được kiểm định, an toàn và hợp pháp (ví dụ Estes). Việc tự trộn hóa chất làm nhiên liệu là vô cùng nguy hiểm, bất hợp pháp trong nhiều bối cảnh, và bị nghiêm cấm hoàn toàn trong lớp học này.
> - **NO homemade propellants or explosives.** This course uses strictly commercial, certified model rocket motors. Mixing your own propellants is extremely dangerous, often illegal, and strictly prohibited in this class.
> - **Chỉ sử dụng công tắc điện.** KHÔNG BAO GIỜ đốt ngòi nổ bằng bật lửa hoặc diêm. Phải luôn dùng bộ điều khiển từ xa có dây dài ít nhất 5 mét (cho mô hình nhỏ).
> - **Use Electrical Ignition ONLY.** NEVER light a fuse with a match or lighter. Always use a remote electrical launch controller with at least a 5-meter wire for small models.
> - **Wadding chống cháy.** Giấy wadding không phải là khăn giấy thông thường. Nếu bạn dùng khăn giấy thường, liều phóng sẽ làm cháy nó, gây hỏa hoạn khi dù bung ra và rớt xuống đất.
> - **Fireproof Wadding.** Recovery wadding is not regular tissue paper. Regular tissue will catch fire from the ejection charge and cause ground fires.

---

## Câu Hỏi Thảo Luận / Discussion Questions (5)

1. Tại sao tên lửa mô hình (như Estes) không sử dụng dù ở giai đoạn đẩy lên (boost phase)? Điều gì sẽ xảy ra nếu dù bung sớm lúc tên lửa đang bay lên với tốc độ cao nhất?
   *(Why don't model rockets deploy parachutes during the boost phase? What happens if a parachute deploys prematurely at max velocity?)*
2. Hệ số cản ($C_d$) của dù phụ thuộc vào những yếu tố hình học nào? Liệu việc khoét một lỗ nhỏ ở đỉnh dù tròn (spill hole) làm tăng hay giảm độ chao đảo của tên lửa khi hạ cánh? Tại sao?
   *(What geometric factors determine the drag coefficient of a parachute? Does cutting a small spill hole at the apex increase or decrease oscillation? Why?)*
3. Phân tích chức năng của giấy chống cháy (wadding). Tại sao ta không thể dùng khăn giấy ướt hoặc bông gòn thường để thay thế?
   *(Analyze the function of recovery wadding. Why can't we substitute it with wet tissue or standard cotton balls?)*
4. Tại sao dây sốc (shock cord) thường được khuyên làm dài ít nhất gấp 2 lần chiều dài thân tên lửa? Điều gì xảy ra nếu dây sốc quá ngắn hoặc làm bằng vật liệu không co giãn như dây dù nilong mỏng?
   *(Why is the shock cord recommended to be at least twice the length of the body tube? What happens if it is too short or made of inelastic material?)*
5. Trong kịch bản tên lửa bay cao 1,000 mét (sử dụng động cơ công suất cao), tại sao hệ thống phục hồi bung dù kép (dual deployment) lại là một yêu cầu an toàn bắt buộc, thay vì bung một dù lớn duy nhất ở đỉnh?
   *(In a scenario where a rocket flies to 1,000 meters, why is dual deployment a mandatory safety requirement rather than deploying a single large parachute at apogee?)*

---

## Bài Về Nhà / Homework

**Nhiệm vụ 1: Thiết kế và Tính toán / Task 1: Design and Calculation**
Giả sử bạn đang thiết kế một tên lửa mô hình mới có tổng khối lượng (khi rơi) là 120 grams (0.12 kg). Bạn có 2 lựa chọn dù có sẵn:
- Dù A: Dù tròn (Cd = 0.75), đường kính 45 cm.
- Dù B: Dù chéo (Cd = 0.85), đường kính 35 cm.

Yêu cầu (Sử dụng công thức trong phần Lý thuyết):
1. Tính vận tốc hạ cánh ($v$) nếu sử dụng Dù A.
2. Tính vận tốc hạ cánh ($v$) nếu sử dụng Dù B.
3. Nếu giới hạn vận tốc an toàn là $v \le 5.5$ m/s, bạn sẽ chọn dù nào? Vì sao?

*Assume you are designing a rocket with a descent mass of 120 grams. You have two parachutes:*
- *Parachute A: Round (Cd = 0.75), diameter 45 cm.*
- *Parachute B: Cross (Cd = 0.85), diameter 35 cm.*
*Calculate the descent velocity for both. If the safety limit is 5.5 m/s, which do you choose and why?*

**Nhiệm vụ 2: Lập danh sách kiểm tra an toàn / Task 2: Safety Checklist Creation**
Viết ra tay (không đánh máy) một bảng Checklist 10-điểm kiểm tra trước chuyến bay (Pre-flight Inspection) mà bạn, trong vai trò RSO, sẽ thực hiện trước khi cho phép ai đó ấn nút phóng.
*Handwrite a 10-point Pre-flight Inspection Checklist that you, acting as the RSO, would perform before allowing a launch.*

---

## Đánh Giá / Assessment Rubric

Bảng dưới đây được sử dụng để chấm điểm kết quả học tập của học viên trong Tuần 5.
The table below is used to grade the student's performance in Week 5.

| Tiêu Chí / Criteria | Xuất Sắc / Excellent (9-10) | Khá / Good (7-8) | Đạt / Pass (5-6) | Cần Cố Gắng / Needs Work (<5) |
|:---|:---|:---|:---|:---|
| **Tính Toán Dù / Parachute Math** | Giải chính xác, trình bày công thức rõ ràng, hiểu biến số. (Flawless calculations and clear understanding) | Tính đúng kết quả nhưng trình bày còn thiếu sót. (Correct results, minor presentation errors) | Có lỗi tính toán nhỏ, nhưng áp dụng đúng công thức. (Minor math errors, correct formula) | Sai công thức và kết quả hoàn toàn. (Completely incorrect formula and results) |
| **Lắp Ráp / Assembly Skills** | Lắp ráp chuẩn, keo dán gọn gàng, mũi tên lửa vừa vặn, dù gấp đúng. (Perfect assembly, neat gluing, perfect nosecone fit) | Lắp đúng kỹ thuật nhưng ngoại hình chưa đẹp. (Correct assembly, messy finish) | Lắp ráp tạm ổn, mũi tên lửa hơi lỏng/chặt. (Okay assembly, nosecone fit issues) | Lắp sai vị trí vây, thiếu giấy chống cháy. (Incorrect fin placement, missing wadding) |
| **An Toàn / Safety Adherence** | Tuân thủ 100% quy tắc NAR, thực hiện xử lý misfire hoàn hảo. (100% NAR adherence, perfect misfire drill) | Nhớ hầu hết quy tắc, cần nhắc nhở nhẹ 1-2 lần. (Remembers most rules, needs minor reminders) | Tuân thủ an toàn cơ bản nhưng bỏ sót vài bước kiểm tra. (Basic safety, misses checks) | Vi phạm nghiêm trọng quy tắc an toàn. (Severe safety violations) |
| **Thảo Luận / Discussion** | Tham gia tích cực, câu trả lời sâu sắc, tư duy phản biện tốt. (Active participation, deep insights, critical thinking) | Trả lời đúng trọng tâm nhưng chưa mở rộng vấn đề. (Correct answers, lacks elaboration) | Trả lời chiếu lệ, thiếu chi tiết. (Superficial answers, missing details) | Không tham gia trả lời câu hỏi. (No participation) |
| **Bài Về Nhà / Homework** | Nộp đúng hạn, tính toán chính xác 100%, checklist chi tiết. (On time, 100% correct, detailed checklist) | Nộp đúng hạn, sai sót nhỏ trong tính toán. (On time, minor calculation errors) | Nộp muộn, checklist sơ sài. (Late, brief checklist) | Không nộp bài. (Not submitted) |

*(End of Week 5 Curriculum / Kết thúc giáo trình Tuần 5)*

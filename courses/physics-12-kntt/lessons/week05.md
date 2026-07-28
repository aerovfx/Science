# Tuần 5: Hiện tượng cảm ứng điện từ và Dòng điện xoay chiều 
# Week 5: Electromagnetic Induction and Alternating Current

## Mục tiêu học tập / Learning Objectives

### Tiếng Việt (VI)
- **Kiến thức**: Hiểu được khái niệm từ thông, định luật Faraday về cảm ứng điện từ, định luật Lenz. Nắm vững nguyên tắc tạo ra dòng điện xoay chiều, các đặc trưng của mạch điện xoay chiều RLC nối tiếp, hiện tượng cộng hưởng điện, và nguyên tắc hoạt động của máy biến áp. Hiểu rõ công suất trong mạch điện xoay chiều và ý nghĩa của hệ số công suất.
- **Kỹ năng**: Tính toán được suất điện động cảm ứng, từ thông, phân tích mạch RLC. Vẽ giản đồ vectơ (giản đồ Fresnel). Viết chương trình mô phỏng bằng Python để trực quan hóa hiện tượng cộng hưởng điện tử và công suất tiêu thụ trong mạch RLC.
- **Thực hành**: Chế tạo thành công một máy phát điện xoay chiều quay tay đơn giản. Đo đạc và phân tích các đại lượng trong mạch xoay chiều bằng dao động ký (Oscilloscope) hoặc đồng hồ vạn năng số (Multimeter).
- **Thái độ**: Tuân thủ nghiêm ngặt các quy tắc an toàn khi làm việc với dòng điện xoay chiều cường độ cao, phát huy tư duy phân tích, tỉ mỉ trong tính toán và giải quyết vấn đề thực tế.

### English (EN)
- **Knowledge**: Understand the concept of magnetic flux, Faraday's law of electromagnetic induction, and Lenz's law. Grasp the principles of generating alternating current (AC), the characteristics of an AC RLC series circuit, electrical resonance, and transformer operation. Understand power in AC circuits and the significance of the power factor.
- **Skills**: Calculate induced electromotive force (EMF), magnetic flux, and analyze RLC circuits. Draw phasor diagrams (Fresnel diagrams). Write a Python simulation program to visualize electronic resonance and power dissipation in an RLC circuit.
- **Practice**: Successfully construct a simple DIY hand-crank AC generator. Measure and analyze quantities in AC circuits using an oscilloscope or a digital multimeter.
- **Attitude**: Strictly adhere to safety rules when working with high-current alternating current, fostering analytical thinking, meticulousness in calculations, and real-world problem-solving skills.

---

## Các bài học sách giáo khoa liên quan / Related Textbook Lessons
Khóa học này được thiết kế theo đúng định hướng của chương trình Vật Lí 12 - Kết Nối Tri Thức với Cuộc Sống (KNTT), tập trung kết hợp chặt chẽ giữa lý thuyết và kỹ năng thực hành STEM:
- **Bài 16**: Từ thông. Hiện tượng cảm ứng điện từ / Magnetic flux. Electromagnetic induction.
- **Bài 17**: Máy phát điện xoay chiều / Alternating current generator.
- **Bài 18**: Ứng dụng hiện tượng cảm ứng điện từ / Applications of electromagnetic induction.
- **Bài 19**: Điện từ trường. Mô hình sóng điện từ / Electromagnetic field. Electromagnetic wave model.
- **Bài 20**: Bài tập về từ trường / Exercises on magnetic fields.
- **Chuyên đề 1**: Dòng điện xoay chiều & Mạch RLC nối tiếp / Special Topic 1: Alternating Current & RLC series circuits.

---

## Danh mục thiết bị thực hành / Lab Equipment & Tools Table

Để tiến hành các bài thực hành trong tuần này, các nhóm học sinh cần chuẩn bị hoặc mượn các thiết bị sau từ phòng thí nghiệm vật lí:

| Tên thiết bị (VI) | Equipment Name (EN) | Số lượng / Qty | Đơn giá / Price (VND) | Nơi mua / Availability | Ghi chú / Notes |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Cuộn dây đồng tráng men (0.5mm) | Enameled copper wire (0.5mm) | 1 cuộn | 50,000 | Cửa hàng điện tử, Shopee | Dùng để quấn cuộn dây stator và rotor |
| Nam châm Neodymium tròn | Neodymium magnets (round) | 4 viên | 80,000 | Shopee, Lazada | Tạo từ trường mạnh ($B$ lớn) cho máy phát |
| Đèn LED nhỏ (5mm, nhiều màu) | Small LED (5mm, multi-color) | 5 bóng | 10,000 | Cửa hàng linh kiện điện tử | Hiển thị điện áp tạo ra, trực quan hóa dòng AC |
| Trục quay & tay quay nhựa | Plastic axle & crank set | 1 bộ | 30,000 | Cửa hàng mô hình, dịch vụ in 3D | Bộ cơ khí truyền động cho máy phát điện tự chế |
| Dao động ký mini (DSO138) | Mini Oscilloscope (DSO138) | 1 chiếc | 450,000 | Shopee, Cửa hàng điện tử | Quan sát dạng sóng hình sin thực tế của điện áp AC |
| Đồng hồ vạn năng số | Digital Multimeter (DMM) | 1 chiếc | 150,000 | Cửa hàng đồ điện, Shopee | Đo điện áp hiệu dụng, điện trở, dòng điện |
| Tụ điện các loại (1uF - 100uF) | Capacitors (1uF - 100uF) | 1 bộ | 40,000 | Cửa hàng điện tử | Thực hành lắp ráp mạch RLC, thay đổi $Z_C$ |
| Điện trở công suất (10 Ohm, 5W) | Power resistors (10 Ohm, 5W) | 5 cái | 25,000 | Cửa hàng điện tử | Tăng trở kháng mạch, có khả năng tản nhiệt tốt |
| Cuộn cảm (10mH - 100mH) | Inductors (10mH - 100mH) | 2 cuộn | 50,000 | Shopee, Cửa hàng điện tử | Dùng cho mạch RLC, tạo thành phần cảm kháng $Z_L$ |
| Bảng mạch cắm (Breadboard) | Breadboard (solderless) | 1 tấm | 35,000 | Shopee | Dùng để lắp ráp mạch điện nhanh mà không cần hàn |
| Dây cắm mạch (Jumper wires) | Jumper wires (M-M, M-F) | 1 bó | 25,000 | Shopee | Kết nối linh kiện trên breadboard linh hoạt |
| Kính bảo hộ & găng tay | Safety goggles & gloves | 1 bộ | 60,000 | Cửa hàng bảo hộ lao động | Đảm bảo an toàn khi quay nam châm ở tốc độ cao |

*Tổng chi phí dự kiến / Estimated Total Cost: ~ 1,005,000 VND*

---

## Cảnh báo an toàn / ⚠️ Safety Warnings

Trong thực hành liên quan đến dòng điện xoay chiều, rủi ro về điện giật và cháy nổ là luôn hiện hữu nếu không tuân thủ các quy tắc an toàn. Yêu cầu học sinh đọc kỹ các cảnh báo sau:

- ⚠️ **TUYỆT ĐỐI KHÔNG (NEVER) kết nối trực tiếp thiết bị tự chế với điện lưới 220V**: Điện lưới gia đình có điện áp (220V) và dòng điện cực kỳ lớn, có thể gây tử vong ngay lập tức do rung tim. Mọi thí nghiệm trong bài học này chỉ được giới hạn ở điện áp thấp (low voltage), dưới 24V (thường dùng máy biến áp cách ly hoặc Function Generator).
- ⚠️ **Sử dụng kính bảo hộ (Wear safety goggles)**: Thí nghiệm máy phát điện yêu cầu quay nam châm ở tốc độ cao. Lực ly tâm có thể khiến nam châm văng ra như đạn. Kính bảo hộ là BẮT BUỘC để bảo vệ mắt.
- ⚠️ **Tránh đoản mạch (Avoid short circuits)**: Khi sử dụng nguồn điện ngoài hoặc tụ điện lớn đã sạc, hãy cẩn thận tránh làm chập hai đầu dây dẫn. Đoản mạch tạo ra tia lửa điện, sinh nhiệt lớn, có thể gây hỏng thiết bị đo lường (như đứt cầu chì trong đồng hồ vạn năng) hoặc cháy linh kiện trên breadboard.
- ⚠️ **Xả tụ điện (Discharge capacitors)**: Trước khi chạm tay vào tụ điện lớn (trên 100uF) sau khi ngắt điện, phải luôn xả tụ bằng cách dùng một điện trở nối tắt hai chân tụ. Tụ điện có thể lưu trữ điện áp nguy hiểm trong thời gian dài ngay cả khi đã tắt nguồn.

---

## Lý thuyết chuyên sâu & Phân tích Toán học / Deep Theory Explanations & Mathematical Analysis

Trong phần này, chúng sẽ đi sâu vào nền tảng vật lý và toán học của các hiện tượng.

### 1. Từ thông (Magnetic Flux)

Từ thông xuyên qua một diện tích là đại lượng đo lượng đường sức từ đi xuyên qua bề mặt đó. Có thể hình dung từ thông giống như lưu lượng nước chảy qua một vòng dây: nước chảy càng mạnh (B lớn) hoặc vòng càng to (S lớn) hoặc mặt hướng trực diện dòng nước ($\cos\alpha = 1$) thì lưu lượng càng lớn.

Công thức tính từ thông toán học / Mathematical formula for magnetic flux:
$$ \Phi = B \cdot S \cdot \cos\alpha $$

Trong đó / Where:
- $\Phi$ (Phi): Từ thông, đơn vị là Weber (Wb). / Magnetic flux, unit is Weber (Wb). $1 \text{ Wb} = 1 \text{ T} \cdot \text{m}^2$.
- $B$: Cảm ứng từ, đặc trưng cho độ mạnh của từ trường, đơn vị là Tesla (T). / Magnetic flux density, unit is Tesla (T).
- $S$: Diện tích bề mặt tiết diện phẳng, đơn vị là mét vuông ($m^2$). / Surface area, unit is square meters ($m^2$).
- $\alpha$: Góc hợp bởi vectơ pháp tuyến $\vec{n}$ của mặt phẳng $S$ và vectơ cảm ứng từ $\vec{B}$. / The angle between the normal vector $\vec{n}$ of surface $S$ and the magnetic field vector $\vec{B}$. Chú ý: Đây không phải là góc giữa mặt phẳng và từ trường, mà là góc giữa pháp tuyến (đường vuông góc với mặt phẳng) và từ trường.

**Ví dụ 1 (Từ thông) / Example 1 (Magnetic Flux):**
Một khung dây dẫn hình chữ nhật kích thước 10 cm x 20 cm gồm 50 vòng dây, được đặt trong một từ trường đều có cảm ứng từ $B = 0.05$ T. Vectơ pháp tuyến của khung dây hợp với hướng của từ trường một góc $60^\circ$. Tính từ thông tổng xuyên qua toàn bộ cuộn dây.
A rectangular wire coil of dimensions 10 cm x 20 cm consisting of 50 turns is placed in a uniform magnetic field with a magnetic induction $B = 0.05$ T. The normal vector of the frame makes an angle of $60^\circ$ with the direction of the magnetic field. Calculate the total magnetic flux passing through the entire coil.

**Giải chi tiết / Detailed Solution:**
- Diện tích một vòng dây: $S = 0.1 \text{ m} \times 0.2 \text{ m} = 0.02 \text{ m}^2$
- Cảm ứng từ: $B = 0.05 \text{ T}$
- Góc $\alpha = 60^\circ \implies \cos(60^\circ) = 0.5$
- Từ thông qua 1 vòng dây: $\Phi_1 = B \cdot S \cdot \cos(60^\circ) = 0.05 \cdot 0.02 \cdot 0.5 = 0.0005 \text{ Wb}$.
- Từ thông tổng qua $N=50$ vòng dây: $\Phi = N \cdot \Phi_1 = 50 \cdot 0.0005 = 0.025 \text{ Wb} = 2.5 \times 10^{-2} \text{ Wb}$.

### 2. Định luật Faraday về cảm ứng điện từ (Faraday's Law of Electromagnetic Induction)

Sự biến thiên từ thông qua một mạch kín sinh ra một suất điện động cảm ứng trong mạch đó. Đây là nền tảng cốt lõi của việc sản xuất điện năng trên toàn cầu.
The change in magnetic flux through a closed circuit induces an electromotive force (EMF) in that circuit. This is the core foundation of global electricity generation.

Định luật Faraday được biểu diễn toán học dưới dạng giá trị trung bình / Faraday's Law is mathematically expressed in average form as:
$$ \mathcal{E}_{cu} = -\frac{\Delta\Phi}{\Delta t} $$

Hoặc dưới dạng đạo hàm tức thời (với khung dây có $N$ vòng) / Or in instantaneous derivative form (for a coil with $N$ turns):
$$ \mathcal{E} = -N \frac{d\Phi}{dt} $$

Trong đó / Where:
- $\mathcal{E}$ (Epsilon): Suất điện động cảm ứng (V) / Induced electromotive force (V).
- Dấu trừ ($-$) thể hiện định luật Lenz, cho biết chiều của suất điện động cảm ứng có xu hướng chống lại sự thay đổi từ thông. / The minus ($-$) sign represents Lenz's Law.

### 3. Định luật Lenz (Lenz's Law)

Định luật Lenz quy định chiều của dòng điện cảm ứng:
"Dòng điện cảm ứng xuất hiện trong mạch kín có chiều sao cho từ trường cảm ứng mà nó sinh ra có tác dụng chống lại sự biến thiên của từ thông ban đầu qua mạch."
The induced current in a closed circuit flows in such a direction that the induced magnetic field it creates opposes the change in the original magnetic flux through the circuit.

Tóm gọn: "Tự nhiên ghét sự thay đổi" (Nature abhors a change in flux). Nếu từ thông đang tăng, dòng điện cảm ứng sẽ sinh ra từ trường ngược chiều để cản sự tăng đó. Nếu từ thông giảm, nó sinh ra từ trường cùng chiều để bù đắp sự giảm. Điều này là hệ quả trực tiếp của Định luật bảo toàn năng lượng.

### 4. Dòng điện xoay chiều (Alternating Current - AC Generation)

Dòng điện xoay chiều được tạo ra bằng cách quay liên tục một cuộn dây trong từ trường (hoặc quay nam châm quanh cuộn dây). 
Nếu một cuộn dây có diện tích $S$ và gồm $N$ vòng dây quay đều với tốc độ góc $\omega$ trong một từ trường đều $\vec{B}$, góc $\alpha$ giữa pháp tuyến và từ trường sẽ thay đổi theo quy luật bậc nhất của thời gian: $\alpha(t) = \omega t + \varphi$ (với $\varphi$ là góc ban đầu).

Từ thông qua cuộn dây biến thiên điều hòa theo thời gian / Magnetic flux through the coil varies harmonically with time:
$$ \Phi(t) = N B S \cos(\omega t + \varphi) $$

Theo định luật Faraday, suất điện động cảm ứng sinh ra là đạo hàm bậc nhất của từ thông theo thời gian, có thêm dấu trừ:
According to Faraday's Law, the induced EMF is the negative first derivative of magnetic flux with respect to time:
$$ e(t) = -\frac{d\Phi}{dt} = - \left( N B S (-\omega) \sin(\omega t + \varphi) \right) = N B S \omega \sin(\omega t + \varphi) $$

Đặt $E_0 = N B S \omega$ là biên độ (giá trị cực đại) của suất điện động xoay chiều, ta thu được phương trình cơ bản của dòng điện xoay chiều:
Let $E_0 = N B S \omega$ be the amplitude (maximum value) of the alternating EMF, we obtain the fundamental equation of AC:
$$ e(t) = E_0 \sin(\omega t + \varphi) $$

Để đồng bộ với các hàm điện áp thường thấy dạng cosin, ta dùng công thức lượng giác $\sin(x) = \cos(x - \pi/2)$:
$$ e(t) = E_0 \cos\left(\omega t + \varphi - \frac{\pi}{2}\right) $$

**Sơ đồ nguyên lý máy phát điện xoay chiều (AC Generator Schematic):**
```text
      N (North Pole of Stator)
      +----------------+
      |                |
      |   /========\   | <-- Rotating Coil (Rotor)
      |  /          \  |
      | +------------+ |
      | |            | |
      +-|   Rotor    |-+
        |   Axis     |
      +-|            |-+
      | +------------+ |
      |  \          /  | <-- Slip rings & Carbon Brushes (Chổi than)
      |   \========/   |     transfer power to External Circuit
      |                |
      +----------------+
      S (South Pole of Stator)
```

### 5. Mạch điện xoay chiều RLC nối tiếp (AC RLC Series Circuit)

Một mạch điện RLC nối tiếp gồm một điện trở thuần $R$ (tiêu thụ năng lượng), một cuộn cảm thuần $L$ (quán tính điện, gây chậm pha dòng điện), và một tụ điện $C$ (tích điện, gây nhanh pha dòng điện).

Các đại lượng cản trở dòng điện:
- **Cảm kháng (Inductive Reactance):** $Z_L = \omega L = 2\pi f L$ (Đơn vị: $\Omega$). $Z_L$ tăng theo tần số.
- **Dung kháng (Capacitive Reactance):** $Z_C = \frac{1}{\omega C} = \frac{1}{2\pi f C}$ (Đơn vị: $\Omega$). $Z_C$ giảm khi tần số tăng.
- **Tổng trở (Total Impedance):** Đo lường sự cản trở dòng điện tổng hợp của toàn mạch. Áp dụng định lý Pythagoras trong giản đồ vectơ:
$$ Z = \sqrt{R^2 + (Z_L - Z_C)^2} $$

Định luật Ohm cho mạch xoay chiều / Ohm's Law for AC circuit:
$$ I_0 = \frac{U_0}{Z} \quad \text{hoặc / or} \quad I = \frac{U}{Z} $$
(Trong đó $I, U$ là các giá trị hiệu dụng / Where $I, U$ are RMS values. Lưu ý $U = \frac{U_0}{\sqrt{2}}$).

Độ lệch pha giữa điện áp hai đầu mạch và dòng điện ($\varphi = \varphi_u - \varphi_i$):
$$ \tan\varphi = \frac{Z_L - Z_C}{R} $$
- Nếu $Z_L > Z_C$: $\varphi > 0$, điện áp $u$ sớm pha hơn dòng điện $i$ (mạch có tính cảm kháng).
- Nếu $Z_L < Z_C$: $\varphi < 0$, điện áp $u$ trễ pha hơn dòng điện $i$ (mạch có tính dung kháng).

#### Công suất và Hệ số công suất (Power and Power Factor)
Công suất tiêu thụ trung bình của mạch chỉ do điện trở $R$ quyết định (cuộn cảm thuần và tụ điện lý tưởng không tiêu thụ công suất):
$$ P = U I \cos\varphi = I^2 R $$
Trong đó $\cos\varphi = \frac{R}{Z}$ gọi là hệ số công suất (Power Factor). Trong truyền tải điện năng, người ta luôn muốn nâng cao $\cos\varphi$ để giảm hao phí trên đường dây.

#### Hiện tượng cộng hưởng điện (Electrical Resonance)
Cộng hưởng xảy ra khi cảm kháng bằng dung kháng ($Z_L = Z_C$).
Lúc này, độ lệch pha $\varphi = 0$ (điện áp đồng pha với dòng điện).
Tổng trở của mạch đạt giá trị nhỏ nhất: $Z_{min} = R$.
Hệ quả là cường độ dòng điện trong mạch đạt giá trị lớn nhất cực đại: $I_{max} = \frac{U}{R}$.
Công suất mạch đạt giá trị cực đại: $P_{max} = \frac{U^2}{R}$.

Điều kiện cộng hưởng / Resonance condition:
$$ \omega L = \frac{1}{\omega C} \implies \omega^2 L C = 1 $$
Tần số góc cộng hưởng / Resonant angular frequency:
$$ \omega_0 = \frac{1}{\sqrt{LC}} \implies f_0 = \frac{1}{2\pi\sqrt{LC}} $$

**Sơ đồ mạch điện RLC nối tiếp (RLC Series Circuit Schematic):**
```text
        R (Resistor)       L (Inductor)      C (Capacitor)
  +----/\/\/\/\/\--------@@@@@@@@@@--------||----------+
  |    (Tỏa nhiệt)     (Lưu trữ từ trường) (Lưu trữ điện trường)
  |                                                    |
  +-----------------------( ~ )------------------------+
                        AC Power Source
                        u(t) = U_0 cos(\omega t)
```

### 6. Máy biến áp (Transformer)

Máy biến áp là thiết bị tĩnh điện, làm việc dựa trên hiện tượng cảm ứng điện từ, có tác dụng biến đổi điện áp xoay chiều mà không làm thay đổi tần số của nó. Cấu tạo cơ bản gồm 2 cuộn dây (sơ cấp và thứ cấp) quấn trên cùng một lõi thép kỹ thuật điện (ghép từ nhiều lá thép mỏng để giảm dòng Foucault).

Công thức máy biến áp lý tưởng (bỏ qua hao phí) / Ideal transformer formula:
$$ \frac{U_1}{U_2} = \frac{N_1}{N_2} = \frac{I_2}{I_1} $$
Trong đó / Where:
- $N_1, U_1, I_1$: Số vòng dây, điện áp, dòng điện cuộn sơ cấp (Primary side).
- $N_2, U_2, I_2$: Số vòng dây, điện áp, dòng điện cuộn thứ cấp (Secondary side).
- Nếu $N_2 > N_1$: Máy tăng áp (Step-up transformer). Sử dụng ở các trạm phát điện để nâng áp truyền tải.
- Nếu $N_2 < N_1$: Máy hạ áp (Step-down transformer). Sử dụng ở các khu dân cư để hạ áp về mức 220V an toàn.

---

## Thực hành: Xây dựng và Mô phỏng / Hands-on Experiments & Simulations

### Thí nghiệm 1: Chế tạo máy phát điện xoay chiều quay tay (Building a DIY Hand-Crank AC Generator)

**Mục đích (Objective):** Quan sát sự tạo thành dòng điện xoay chiều thông qua nguyên lý quay nam châm quanh cuộn dây hoặc ngược lại. Cảm nhận được việc chuyển hóa cơ năng thành điện năng.

**Các bước thực hiện (Step-by-step):**
1. **Chuẩn bị Rotor:** Lấy trục quay bằng nhựa và sử dụng keo nến hoặc băng dính chắc chắn để gắn 4 viên nam châm Neodymium xung quanh thân trục. Chú ý phân bố các cực N và S xen kẽ nhau quay ra ngoài (N-S-N-S). Việc này đảm bảo khi trục quay, từ trường xuyên qua cuộn dây sẽ liên tục đảo chiều từ dương sang âm, tối đa hóa đại lượng $\frac{d\Phi}{dt}$.
2. **Chuẩn bị Stator:** Quấn khoảng 500-1000 vòng dây đồng tráng men lên một khung nhựa hình trụ rỗng. Càng nhiều vòng, điện áp $E_0$ sinh ra càng lớn.
3. **Lắp ráp:** Lồng trục nam châm (rotor) vào bên trong lõi rỗng của cuộn stator. Đảm bảo rotor được đặt đồng trục và có thể quay trơn tru tự do mà không cọ xát vào thành trong của cuộn dây.
4. **Kết nối:** Dùng dao rọc giấy cạo sạch lớp men cách điện ở hai đầu sợi dây đồng. Nối hai đầu cuộn dây này vào hai chân của một bóng đèn LED.
5. **Vận hành:** Sử dụng tay quay (crank) để quay trục rotor. Quay chậm rồi tăng tốc dần dần.
6. **Quan sát & Phân tích:** 
   - Đèn LED sẽ bắt đầu nhấp nháy sáng.
   - Khi quay càng nhanh, đèn sáng càng rõ và tần số nhấp nháy càng cao.
   - Tại sao LED nhấp nháy mà không sáng liên tục? Vì đèn LED là một Đi-ốt phát quang, nó chỉ cho dòng điện đi qua theo một chiều duy nhất (khi điện áp ở bán kỳ dương). Ở bán kỳ âm, dòng điện bị chặn lại, đèn tắt. Sự nhấp nháy này là minh chứng trực quan cho thấy dòng điện sinh ra là dòng xoay chiều (đổi chiều liên tục).
7. **Nâng cao:** Thay đèn LED bằng Oscilloscope mini DSO138. Quan sát trên màn hình, bạn sẽ thấy một đồ thị hình sin hoàn hảo. Khi quay nhanh hơn, biên độ đồ thị cao hơn (điện áp lớn hơn) và các chu kỳ nằm sát nhau hơn (tần số cao hơn).

### Thí nghiệm 2: Khảo sát hiện tượng cộng hưởng trong mạch RLC (Investigating Resonance in an RLC Circuit)

**Mục đích (Objective):** Tìm hiểu sự phụ thuộc của cường độ dòng điện vào tần số của nguồn AC, vẽ đường cong cộng hưởng, và tìm ra tần số cộng hưởng bằng thực nghiệm.

**Các bước thực hiện (Step-by-step):**
1. **Lắp ráp mạch:** Trên Breadboard, cắm nối tiếp một điện trở $R = 100 \Omega$, một cuộn cảm $L = 10 \text{ mH}$, và một tụ điện $C = 1 \mu\text{F}$. Đảm bảo các kết nối chắc chắn.
2. **Kết nối nguồn:** Sử dụng một máy phát hàm (Function Generator) thiết lập sóng hình sin, biên độ đỉnh-đỉnh (Vpp) là $10V$. Kẹp hai dây của máy phát hàm vào hai đầu đoạn mạch RLC nối tiếp.
3. **Cài đặt Đo lường:** Kết nối đầu dò (Probe) Kênh 1 của Oscilloscope song song với điện trở $R$.
   *Ghi chú phân tích:* Theo định luật Ohm $u_R = i \cdot R$. Vì $R$ không đổi, đồ thị điện áp trên $R$ mà Oscilloscope vẽ ra có hình dạng và pha hoàn toàn giống hệt đồ thị dòng điện $i(t)$ của mạch. Đo điện áp $U_R$ chính là cách gián tiếp để đo dòng điện $I$.
4. **Thực hiện Đo đạc:** 
   - Điều chỉnh tần số của Function Generator bắt đầu từ mức $500 \text{ Hz}$. Đọc giá trị $U_R$ đỉnh-đỉnh trên màn hình dao động ký, ghi vào bảng.
   - Tăng dần tần số mỗi bước $100 \text{ Hz}$. Lặp lại việc ghi chép.
   - Quan sát kỹ dải tần số từ $1400 \text{ Hz}$ đến $1700 \text{ Hz}$. Bạn sẽ thấy $U_R$ tăng vọt rồi sau đó lại giảm xuống.
5. **Xử lý số liệu:** 
   - Điểm có $U_R$ lớn nhất chính là điểm cộng hưởng.
   - Tính toán tần số cộng hưởng lý thuyết theo công thức: 
     $f_0 = \frac{1}{2\pi\sqrt{LC}} = \frac{1}{2\pi\sqrt{10\times 10^{-3} \times 1\times 10^{-6}}} \approx 1591.5 \text{ Hz}$.
   - So sánh tần số $f_0$ lý thuyết với tần số mà bạn đo được thực tế có $U_R$ lớn nhất. Sai số (nếu có) thường đến từ dung sai của linh kiện (đặc biệt là sai số của tụ điện và điện trở nội của cuộn cảm).

---

## Mã Python mô phỏng (Python Simulation Code)

Dưới đây là một chương trình Python cực kỳ đầy đủ, ứng dụng các thư viện `numpy`, `matplotlib`, và `scipy` để mô phỏng sự phụ thuộc của tổng trở $Z$, cường độ dòng điện $I$, và công suất $P$ vào tần số góc $\omega$ của dòng điện xoay chiều. 
Chương trình này tạo ra 3 đồ thị trực quan: Trở kháng, Dòng điện, và Công suất tiêu thụ. Nó giúp học sinh hiểu rõ bản chất toán học của mạch RLC.

*Lưu file mã này thành `rlc_simulation.py`, cài đặt các thư viện cần thiết bằng lệnh `pip install numpy matplotlib scipy`, và chạy nó để xem đồ thị. / Save this code as `rlc_simulation.py` and run it.*

```python
import numpy as np
import matplotlib.pyplot as plt
from scipy.signal import find_peaks

# ======================================================================
# RLC AC Circuit Resonance and Power Simulator
# Mô phỏng cộng hưởng và Công suất mạch điện xoay chiều RLC nối tiếp
# Tác giả: Trợ lý AI Antigravity
# ======================================================================

# 1. Định nghĩa thông số cấu kiện mạch (Circuit Parameters)
R = 50.0       # Điện trở thuần / Resistance in Ohms (Ohm)
L = 0.05       # Độ tự cảm / Inductance in Henrys (H) - tương đương 50mH
C = 2e-6       # Điện dung / Capacitance in Farads (F) - tương đương 2uF
U_m = 10.0     # Biên độ điện áp nguồn / Source voltage amplitude in Volts (V)
U_rms = U_m / np.sqrt(2) # Điện áp hiệu dụng / RMS Voltage

# Tính toán tần số cộng hưởng lý thuyết (Theoretical resonant frequency)
omega_0 = 1.0 / np.sqrt(L * C)
f_0 = omega_0 / (2 * np.pi)
print("--- KẾT QUẢ TÍNH TOÁN LÝ THUYẾT ---")
print(f"Tần số góc cộng hưởng (w0): {omega_0:.2f} rad/s")
print(f"Tần số cộng hưởng (f0)    : {f_0:.2f} Hz")
print("-" * 35)

# 2. Tạo không gian mẫu tần số góc (Generate frequency data)
# Khảo sát trong dải tần số góc từ 1000 đến 10000 rad/s với 2000 điểm dữ liệu
omega = np.linspace(1000, 10000, 2000)

# 3. Tính toán các đại lượng điện xoay chiều (Calculate AC quantities)
Z_L = omega * L                           # Cảm kháng / Inductive reactance
Z_C = 1.0 / (omega * C)                   # Dung kháng / Capacitive reactance
Z = np.sqrt(R**2 + (Z_L - Z_C)**2)        # Tổng trở / Total Impedance

I_m = U_m / Z                             # Biên độ dòng điện / Current Amplitude
I_rms = I_m / np.sqrt(2)                  # Dòng điện hiệu dụng / RMS Current

# Tính góc lệch pha (Phase Angle)
phi = np.arctan((Z_L - Z_C) / R)          
cos_phi = np.cos(phi)                     # Hệ số công suất / Power Factor

# Tính công suất tiêu thụ trung bình (Average Active Power)
P = U_rms * I_rms * cos_phi

# 4. Thiết lập và vẽ đồ thị (Plotting with Matplotlib)
plt.style.use('ggplot')
fig, (ax1, ax2, ax3) = plt.subplots(3, 1, figsize=(10, 12), sharex=True)
fig.suptitle('Mô phỏng Mạch RLC Nối Tiếp (RLC Series Circuit Simulation)', fontsize=16)

# Đồ thị 1: Các loại trở kháng (Impedances Z, Z_L, Z_C)
ax1.plot(omega, Z, 'k-', linewidth=2.5, label='Tổng trở $Z$ (Impedance)')
ax1.plot(omega, Z_L, 'r--', linewidth=1.5, label='Cảm kháng $Z_L$ (Inductive)')
ax1.plot(omega, Z_C, 'b--', linewidth=1.5, label='Dung kháng $Z_C$ (Capacitive)')
ax1.axvline(x=omega_0, color='g', linestyle=':', label='Cộng hưởng $\omega_0$')
ax1.set_ylabel('Trở kháng ($\Omega$)')
ax1.set_title('Sự phụ thuộc của Trở Kháng vào Tần số góc')
ax1.legend(loc='upper right')

# Đồ thị 2: Cường độ dòng điện (Current Amplitude I_m)
ax2.plot(omega, I_m, 'b-', linewidth=2, label='Biên độ dòng điện $I_0$')
ax2.axvline(x=omega_0, color='g', linestyle=':')
# Highlight điểm cực đại
I_max = U_m / R
ax2.plot(omega_0, I_max, 'ro', markersize=8)
ax2.annotate(f' $I_{{max}}$ = {I_max:.2f} A\n (Cộng hưởng)', 
             xy=(omega_0, I_max), xytext=(omega_0 + 500, I_max - 0.03),
             arrowprops=dict(facecolor='black', shrink=0.05, width=1.5, headwidth=8))
ax2.set_ylabel('Cường độ dòng điện (A)')
ax2.set_title('Đường cong Cộng hưởng Dòng điện')
ax2.legend(loc='upper right')

# Đồ thị 3: Công suất tiêu thụ (Active Power P)
ax3.plot(omega, P, 'm-', linewidth=2, label='Công suất tác dụng $P$')
ax3.axvline(x=omega_0, color='g', linestyle=':')
# Công suất cực đại đạt được khi cộng hưởng (Z = R)
P_max = (U_rms**2) / R
ax3.plot(omega_0, P_max, 'ro', markersize=8)
ax3.annotate(f' $P_{{max}}$ = {P_max:.2f} W', 
             xy=(omega_0, P_max), xytext=(omega_0 + 500, P_max - 0.1),
             arrowprops=dict(facecolor='black', shrink=0.05, width=1.5, headwidth=8))
ax3.set_xlabel('Tần số góc $\omega$ (rad/s)')
ax3.set_ylabel('Công suất (W)')
ax3.set_title('Công suất tiêu thụ của mạch theo Tần số')
ax3.legend(loc='upper right')

# Làm đẹp layout và hiển thị
plt.tight_layout(rect=[0, 0.03, 1, 0.96])
# plt.savefig('rlc_resonance_power_plot.png', dpi=300)
plt.show()
```

---

## Câu hỏi thảo luận (Discussion Questions)

**Câu 1 (Q1):** Dựa vào công thức Faraday $\mathcal{E} = -N \frac{d\Phi}{dt}$, giải thích tại sao để máy phát điện cung cấp điện áp lớn hơn, người ta thường quấn nhiều vòng dây hơn và cho rotor quay nhanh hơn?
> **Hướng dẫn trả lời (Hint):** 
> Điện áp tạo ra có biên độ $E_0 = N B S \omega$. Có thể thấy $E_0$ tỉ lệ thuận trực tiếp với số vòng dây ($N$) và tốc độ góc quay ($\omega$). Rotor quay nhanh hơn làm tăng $\omega$, do đó đạo hàm của hàm cosin (sự biến thiên của từ thông) sinh ra hệ số $\omega$ lớn, dẫn đến điện áp đỉnh lớn. Về mặt vật lý học, khi quay nhanh, số lượng đường sức từ bị cuộn dây "cắt ngang" trong một đơn vị thời gian càng nhiều, tạo ra một suất điện động kích thích electron di chuyển mạnh hơn.

**Câu 2 (Q2):** Trong hiện tượng cộng hưởng của mạch RLC, điều gì sẽ xảy ra về mặt toán học và vật lý nếu điện trở thuần $R$ của mạch dần tiến tới giá trị $0$?
> **Hướng dẫn trả lời (Hint):** 
> *Toán học*: Khi xảy ra cộng hưởng ($Z_L = Z_C$), tổng trở $Z = \sqrt{R^2 + (0)^2} = R$. Nếu $R \to 0$, thì $Z \to 0$. Khi đó cường độ dòng điện $I = U/Z$ sẽ tiến tới vô cực ($\infty$). Đỉnh của đồ thị cộng hưởng sẽ cao nhọn vô tận.
> *Vật lý*: Một mạch $R = 0$ là một mạch LC lý tưởng không có điện trở thuần, nghĩa là không có thành phần tiêu tán năng lượng (dưới dạng nhiệt năng). Khi được cấp năng lượng ban đầu, điện trường trong tụ điện $C$ và từ trường trong cuộn cảm $L$ sẽ biến đổi và chuyển hóa qua lại cho nhau mãi mãi (tạo thành dao động điện từ duy trì) mà không bị suy hao (damped). Cường độ vô cực thể hiện mạch có khả năng nhận toàn bộ năng lượng mà không có sự cản trở.

**Câu 3 (Q3):** Tại sao mạng lưới truyền tải điện quốc gia lại sử dụng dòng điện xoay chiều (AC) thay vì dòng điện một chiều (DC)? Máy biến áp đóng vai trò trọng yếu nào trong hệ thống này?
> **Hướng dẫn trả lời (Hint):** 
> Ưu điểm tuyệt đối của AC so với DC trong thế kỷ 19-20 là khả năng thay đổi điện áp một cách cực kỳ dễ dàng và hiệu suất cao thông qua Máy Biến Áp (Transformer - vốn chỉ hoạt động được với dòng AC do cần từ thông biến thiên).
> Khi truyền tải công suất $P$ đi xa qua đường dây có điện trở $r$, dòng điện trên dây là $I = P / U$. Công suất hao phí do tỏa nhiệt là $\Delta P = I^2 r = (P/U)^2 \cdot r$. Từ công thức này, ta thấy $\Delta P$ tỉ lệ nghịch với bình phương điện áp $U^2$.
> Bằng cách sử dụng máy tăng áp để nâng $U$ lên hàng trăm kilovolt (như đường dây 500kV Bắc - Nam), dòng điện $I$ giảm đi cực nhỏ, kéo theo hao phí giảm đi hàng triệu lần. Đến nơi tiêu thụ, máy hạ áp lại chuyển đổi về 220V để sử dụng an toàn. DC không thể thay đổi điện áp dễ dàng như vậy (cho đến khi có công nghệ biến tần điện tử công suất hiện đại HVDC).

**Câu 4 (Q4):** Định luật Lenz cho thấy dòng điện cảm ứng có xu hướng "chống lại" nguyên nhân sinh ra nó. Hãy chứng minh bằng tư duy phản biện: Điều gì xảy ra nếu dòng điện sinh ra lại "hỗ trợ" nguyên nhân sinh ra nó? Hệ quả đó vi phạm định luật nào của vật lý?
> **Hướng dẫn trả lời (Hint):** 
> Giả sử ta đẩy cực Bắc của một nam châm lại gần một vòng dây, nếu dòng điện cảm ứng sinh ra cũng tạo ra một cực Nam đối diện (nghĩa là "hỗ trợ" sự tiến lại gần, bằng cách hút nam châm vào), nam châm sẽ bị hút và tự động tăng tốc lao vào cuộn dây. Vận tốc tăng làm từ thông biến thiên càng nhanh, dòng điện lại càng lớn, lực hút càng mạnh. Nam châm sẽ tự động tăng tốc độ đến vô hạn, và sinh ra một năng lượng điện vô hạn mà ta không cần tốn một lực đẩy nào. Điều này tạo ra động cơ vĩnh cửu và vi phạm nghiêm trọng **Định luật Bảo toàn Năng lượng**.
> Định luật Lenz đảm bảo năng lượng được bảo toàn: Dòng điện tạo ra từ trường chống lại sự chuyển động, đòi hỏi ta phải tốn **công cơ học** để thắng lực cản đó. Công cơ học này chính là nguồn gốc chuyển hóa thành **điện năng**.

**Câu 5 (Q5):** Một thiết bị đo là dao động ký (Oscilloscope) hiển thị giá trị biên độ (Peak voltage) của một nguồn điện xoay chiều là 311V. Tuy nhiên, khi dùng đồng hồ vạn năng số (Multimeter) đo vào chính nguồn đó, nó chỉ hiển thị con số 220V. Cả hai thiết bị đều không bị hỏng, vậy sự khác biệt này xuất phát từ đâu?
> **Hướng dẫn trả lời (Hint):** 
> Dao động ký (Oscilloscope) vẽ ra dạng sóng thực tế theo thời gian, nên nó hiển thị giá trị đỉnh tuyệt đối, gọi là điện áp cực đại hoặc biên độ $U_0 = 311V$.
> Ngược lại, đồng hồ vạn năng ở chế độ AC được thiết kế để tính toán và hiển thị giá trị **hiệu dụng** (Root Mean Square - RMS voltage), ký hiệu là $U$. Ý nghĩa của giá trị hiệu dụng là: Mức điện áp của dòng AC sinh ra công suất tỏa nhiệt tương đương với một dòng DC có cùng điện áp.
> Mối quan hệ toán học đối với sóng hình sin lý tưởng là: $U = \frac{U_0}{\sqrt{2}}$. 
> Tính thử: $311 / \sqrt{2} \approx 220V$. Do đó, điện lưới quốc gia mà ta hay gọi "điện 220V" thực chất là đang nói về giá trị hiệu dụng, đỉnh sóng thực tế cao tới hơn 300V.

---

## Bài tập về nhà / Homework & Practice Problems

Các bài tập dưới đây được thiết kế để ôn tập các khái niệm cốt lõi. Học sinh cần trình bày đầy đủ các bước tính toán, không chỉ ghi đáp án cuối cùng.

### Bài 1: Tính toán suất điện động cực đại
Một cuộn dây dẫn dẹt hình tròn có 200 vòng, bán kính $r = 10\text{ cm}$, quay đều quanh một trục nằm trong mặt phẳng cuộn dây với tốc độ quay $3600 \text{ vòng/phút}$ trong một từ trường đều. Cảm ứng từ của từ trường $B = 0.2\text{ T}$ và hướng vuông góc với trục quay. 
a) Chuyển đổi tốc độ quay sang tần số góc $\omega$ theo đơn vị $\text{rad/s}$.
b) Tính suất điện động cực đại sinh ra trong cuộn dây.
c) Viết biểu thức điện áp tức thời (giả sử lúc $t=0$, pháp tuyến khung dây cùng hướng với vectơ cảm ứng từ).

**Hướng dẫn giải (Solution steps):**
a) Tần số vòng $f = \frac{3600 \text{ vòng}}{60 \text{ giây}} = 60 \text{ Hz}$ (vòng/s).
Tần số góc: $\omega = 2\pi f = 2\pi \times 60 = 120\pi \text{ rad/s}$.
b) Tính diện tích cuộn dây: $S = \pi \cdot r^2 = \pi \cdot (0.1 \text{ m})^2 = 0.01\pi \text{ m}^2$.
Suất điện động cực đại: $E_0 = N \cdot B \cdot S \cdot \omega = 200 \times 0.2 \times (0.01\pi) \times 120\pi = 48\pi^2 \approx 473.74 \text{ V}$.
c) Tại $t=0$, góc $\alpha = 0$, biểu thức từ thông $\Phi(t) = \Phi_0 \cos(\omega t)$.
Theo định luật Faraday $e = -\frac{d\Phi}{dt}$, suất điện động: 
$e(t) = E_0 \sin(\omega t) = 48\pi^2 \sin(120\pi t) \text{ (V)}$.

### Bài 2: Phân tích mạch điện xoay chiều RLC nối tiếp
Cho mạch điện RLC nối tiếp gồm điện trở thuần $R = 40 \Omega$, cuộn cảm thuần có độ tự cảm $L = \frac{0.6}{\pi} \text{ H}$, và tụ điện có điện dung $C = \frac{10^{-3}}{2\pi} \text{ F}$. Đặt vào hai đầu mạch điện áp xoay chiều $u = 120\sqrt{2} \cos(100\pi t) \text{ V}$.
a) Tính cảm kháng $Z_L$, dung kháng $Z_C$ và tổng trở $Z$ của mạch.
b) Tính cường độ dòng điện hiệu dụng trong mạch.
c) Viết phương trình tức thời của cường độ dòng điện $i(t)$.
d) Tính công suất tiêu thụ trung bình của mạch điện.

**Hướng dẫn giải (Solution steps):**
a) Tần số góc $\omega = 100\pi \text{ rad/s}$.
- Cảm kháng: $Z_L = \omega L = 100\pi \times \frac{0.6}{\pi} = 60 \Omega$.
- Dung kháng: $Z_C = \frac{1}{\omega C} = \frac{1}{100\pi \times \frac{10^{-3}}{2\pi}} = \frac{1}{0.005} = 20 \Omega$.
- Tổng trở: $Z = \sqrt{R^2 + (Z_L - Z_C)^2} = \sqrt{40^2 + (60 - 20)^2} = \sqrt{40^2 + 40^2} = 40\sqrt{2} \Omega \approx 56.57 \Omega$.
b) Điện áp hiệu dụng: $U = \frac{120\sqrt{2}}{\sqrt{2}} = 120 \text{ V}$. 
- Cường độ hiệu dụng: $I = \frac{U}{Z} = \frac{120}{40\sqrt{2}} = \frac{3}{\sqrt{2}} = 1.5\sqrt{2} \text{ A} \approx 2.12 \text{ A}$.
c) Biên độ dòng điện: $I_0 = I\sqrt{2} = 3 \text{ A}$.
- Độ lệch pha của điện áp so với dòng điện: $\tan\varphi = \frac{Z_L - Z_C}{R} = \frac{60 - 20}{40} = 1 \implies \varphi = \frac{\pi}{4} \text{ rad}$.
- Ta có $\varphi = \varphi_u - \varphi_i = \frac{\pi}{4}$. Mà pha ban đầu của điện áp $\varphi_u = 0$, suy ra pha ban đầu của dòng điện $\varphi_i = -\frac{\pi}{4}$.
- Biểu thức dòng điện: $i(t) = 3 \cos\left(100\pi t - \frac{\pi}{4}\right) \text{ (A)}$.
d) Công suất tiêu thụ trung bình:
- $P = I^2 R = (1.5\sqrt{2})^2 \times 40 = 4.5 \times 40 = 180 \text{ W}$.

### Bài 3: Xác định tần số cộng hưởng
Một mạch thu sóng vô tuyến (radio receiver) sử dụng mạch LC cộng hưởng để chọn sóng. Cuộn cảm có $L = 5 \mu\text{H}$. Để thu được dải sóng thanh có tần số từ $90 \text{ MHz}$ đến $105 \text{ MHz}$ (tương đương băng tần FM radio), tụ điện xoay $C$ trong mạch phải biến thiên trong khoảng giá trị nào? (Lấy $\pi^2 \approx 10$).

**Hướng dẫn giải (Solution steps):**
Tần số cộng hưởng của mạch được tính bởi công thức: $f = \frac{1}{2\pi\sqrt{LC}}$
Bình phương 2 vế và suy ra $C$: $C = \frac{1}{4\pi^2 f^2 L} \approx \frac{1}{40 \cdot f^2 \cdot L}$
- Khi thu sóng $f_1 = 90 \text{ MHz} = 90 \times 10^6 \text{ Hz}$:
  $C_1 = \frac{1}{4 \cdot 10 \cdot (90 \times 10^6)^2 \cdot 5 \times 10^{-6}} = \frac{1}{40 \cdot 8100 \times 10^{12} \cdot 5 \times 10^{-6}} = \frac{1}{1.62 \times 10^{12}} \approx 6.17 \times 10^{-13} \text{ F} = 0.617 \text{ pF}$.
- Khi thu sóng $f_2 = 105 \text{ MHz} = 105 \times 10^6 \text{ Hz}$:
  $C_2 = \frac{1}{4 \cdot 10 \cdot (105 \times 10^6)^2 \cdot 5 \times 10^{-6}} = \frac{1}{40 \cdot 11025 \times 10^{12} \cdot 5 \times 10^{-6}} = \frac{1}{2.205 \times 10^{12}} \approx 4.53 \times 10^{-13} \text{ F} = 0.453 \text{ pF}$.
- Kết luận: Tụ điện xoay cần có khả năng điều chỉnh điện dung trong khoảng từ $0.453 \text{ pF}$ đến $0.617 \text{ pF}$.

### Bài 4: Thiết kế máy biến áp lý tưởng
Một trường học mua một hệ thống thiết bị thí nghiệm nhập khẩu từ Mỹ, có thông số yêu cầu là điện áp hoạt động 110V AC. Tuy nhiên lưới điện tại Việt Nam là 220V AC. Các bạn học sinh được giao nhiệm vụ quấn một máy biến áp tự ngẫu để hạ áp cho thiết bị này. Cuộn dây sơ cấp (Primary) được quấn 1200 vòng.
a) Cuộn thứ cấp phải được quấn thêm hoặc trích ra bao nhiêu vòng dây?
b) Giả sử hệ thống thiết bị thí nghiệm tiêu thụ dòng điện $I_2 = 2A$ ở thứ cấp. Tính dòng điện hiệu dụng chạy qua cuộn sơ cấp (coi máy biến áp là lý tưởng với hiệu suất 100%).

**Hướng dẫn giải (Solution steps):**
a) Áp dụng phương trình máy biến áp lý tưởng về điện áp:
$\frac{U_1}{U_2} = \frac{N_1}{N_2} \implies \frac{220}{110} = 2 = \frac{1200}{N_2}$
$\implies N_2 = \frac{1200}{2} = 600 \text{ vòng}$.
Vậy cuộn thứ cấp cần được quấn 600 vòng dây. (Nếu là biến áp tự ngẫu, điểm trích ra sẽ nằm ở vòng thứ 600 của cuộn dây chung).
b) Máy biến áp lý tưởng bảo toàn năng lượng, công suất sơ cấp bằng công suất thứ cấp ($P_1 = P_2$), dẫn đến $\frac{I_2}{I_1} = \frac{U_1}{U_2}$:
$\frac{2}{I_1} = \frac{220}{110} = 2 \implies I_1 = \frac{2}{2} = 1 \text{ A}$.
Vậy dòng điện chạy qua cuộn sơ cấp và lưới điện gia đình chỉ là 1A.

---

## Tiêu chí đánh giá & Thang điểm (Assessment Rubric - 100 Points)

Quá trình học tập của học sinh trong Tuần 5 sẽ được đánh giá toàn diện dựa trên 5 tiêu chí sau:

| Tiêu chí (Criteria) | Trọng số (Weight) | Yêu cầu đạt được (Expectations) | Điểm tối đa (Max Points) |
| :--- | :--- | :--- | :--- |
| **1. Trình bày Lý thuyết & Công thức** | 20% | - Phát biểu đúng, đầy đủ các định luật (Faraday, Lenz). <br> - Viết đúng các phương trình RLC, phân tích được giản đồ vectơ. | 20 |
| **2. Kỹ năng Thực hành & Lắp ráp** | 25% | - Chế tạo máy phát điện vận hành trơn tru, làm sáng đèn LED. <br> - Lắp ráp mạch RLC gọn gàng trên breadboard. <br> - Sử dụng thành thạo dao động ký và vạn năng kế để đo thông số. | 25 |
| **3. Mã nguồn Python & Phân tích Dữ liệu** | 20% | - Viết code chạy mượt mà không có lỗi (bug-free). <br> - Đồ thị sinh ra phải có đủ các trục $X/Y$, chú thích legend và tiêu đề rõ ràng. <br> - Chỉ ra được điểm cộng hưởng trên biểu đồ bằng marker. | 20 |
| **4. Báo cáo Bài tập về nhà** | 25% | - Trình bày sạch sẽ lời giải của 4 bài tập. <br> - Viết rõ các bước lập luận, không nhảy bước. <br> - Kết quả tính toán chuẩn xác và có kèm theo đơn vị đo chuẩn (V, A, Ohm, Rad/s). | 25 |
| **5. Thái độ Thảo luận & An toàn** | 10% | - Tham gia tích cực vào các câu hỏi thảo luận, có tư duy đa chiều. <br> - Tuân thủ tuyệt đối quy định an toàn điện và phòng thí nghiệm (đeo kính, không đoản mạch). | 10 |

---
*Tài liệu nội bộ môn Vật Lí 12 / Internal Document for 12th Grade Physics.*
*Ban chuyên môn Vật Lí, Dự án Giáo dục Khoa học Khám phá (STEM & Micro:bit).*
*Người soạn và cập nhật: AI Assistant (Antigravity).*
*Lần cập nhật cuối: 28/07/2026.*

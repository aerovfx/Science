# Tuần 3: Lực Cản & Lực Nâng Trong Nước / Week 3: Drag & Lift Forces in Water

## Mục Tiêu / Learning Objectives
Trong tuần này, học viên sẽ được trang bị khối lượng kiến thức chuyên sâu và nâng cao về các lực thủy động lực học cơ bản, bao gồm lực cản (drag) và lực nâng (lift). Nước là một môi trường đặc biệt với khối lượng riêng và độ nhớt lớn hơn không khí rất nhiều, do đó các lực tác dụng lên cấu trúc cũng lớn hơn gấp nhiều lần.
In this week, students will be equipped with in-depth and advanced knowledge of fundamental hydrodynamic forces, including drag and lift. Water is a special medium with much higher density and viscosity compared to air, meaning the forces acting on structures are significantly greater.

1. **Hiểu rõ các loại lực cản (Understanding Drag Types):** 
   - Phân biệt lực cản áp suất (pressure/form drag) và lực cản ma sát (viscous/skin friction drag).
   - Differentiate between pressure (form) drag and viscous (skin friction) drag.
   - Nhận diện loại lực cản nào chiếm ưu thế tùy thuộc vào hình dạng hình học của vật thể.
   - Identify which type of drag is dominant depending on the geometric shape of the object.
   
2. **Nghiên cứu sự phụ thuộc vào số Reynolds (Reynolds Number Dependence):** 
   - Khảo sát sự biến thiên của hệ số cản $C_D$ đối với các hình dạng phổ biến trong môi trường nước.
   - Investigate the variation of the drag coefficient $C_D$ for common shapes in water.
   - Phân tích chi tiết hiện tượng khủng hoảng lực cản (drag crisis) và các ứng dụng thực tế.
   - Analyze in detail the drag crisis phenomenon and its practical applications.

3. **Phân tích lực cản trên vỏ tàu ngầm (Drag Analysis on Submarine Hulls):** 
   - Đánh giá ba thành phần chính: lực cản ma sát, lực cản phần lồi (appendage) và lực cản tạo sóng (wave-making).
   - Evaluate the three main components: friction drag, appendage drag, and wave-making drag.
   - Ứng dụng thực tiễn trong công nghiệp thiết kế vỏ tàu ngầm tại Việt Nam.
   - Practical applications in submarine hull design industry in Vietnam.

4. **Cơ chế tạo lực nâng bằng cánh ngầm (Hydrofoil Lift Generation Mechanisms):** 
   - Áp dụng định lý Kutta-Joukowski và lý thuyết cánh mỏng (Thin airfoil theory).
   - Apply the Kutta-Joukowski theorem and Thin airfoil theory.
   - Khảo sát hiện tượng thất tốc (Stall) và ảnh hưởng của nó đến hiệu suất vận hành của tàu cánh ngầm.
   - Investigate Stall phenomenon and its impact on hydrofoil vessel performance.

5. **Khí thực và siêu khí thực (Cavitation and Supercavitation):** 
   - Tìm hiểu cơ chế hình thành cavitation trên bề mặt cánh quạt và hydrofoil.
   - Understand the formation mechanism of cavitation on propeller and hydrofoil surfaces.
   - Khám phá các công nghệ vũ khí hiện đại sử dụng supercavitation như ngư lôi Shkval.
   - Explore modern weapon technologies utilizing supercavitation such as Shkval torpedoes.

6. **Hiệu ứng khối lượng kèm theo (Added Mass Effect):** 
   - Phân tích tại sao vật thể gia tốc trong nước lại chịu tải trọng quán tính lớn hơn nhiều so với trong không khí.
   - Analyze why objects accelerating in water experience much higher inertial loads than in air.

7. **Phương trình Morison (Morison Equation):** 
   - Áp dụng phương trình Morison để tính toán lực của sóng lên các cấu trúc thanh mảnh (slender structures) ở môi trường biển sâu.
   - Apply the Morison equation to calculate wave forces on slender structures in deep-sea environments.

## Phần Mềm & Công Cụ / Software & Tools
- **Python 3.10+**: Môi trường lập trình chính được khuyến nghị dùng trong toàn bộ khóa học. / Main programming environment recommended throughout the course.
- **Thư viện / Libraries**: 
  - `numpy`: Xử lý mảng dữ liệu tốc độ cao. / High-speed array data processing.
  - `matplotlib` & `seaborn`: Dùng để vẽ đồ thị chuyên nghiệp. / Used for professional plotting.
  - `scipy`: Cung cấp các hàm nội suy và giải phương trình vi phân. / Provides interpolation and ODE solver functions.
- **Jupyter Notebook / JupyterLab**: Dùng để chạy code Python từng khối và trình bày báo cáo trực quan. / Used for running Python code in blocks and presenting visual reports.
- **Phần mềm CFD (tùy chọn / optional)**: OpenFOAM hoặc Ansys Fluent để mô phỏng 3D (sẽ dùng ở các tuần nâng cao). / OpenFOAM or Ansys Fluent for 3D simulation (to be used in advanced weeks).

---

## Lý Thuyết / Theory

### 1. Phân Tích Chuyên Sâu Lực Cản Áp Suất và Lực Cản Ma Sát / In-depth Analysis of Pressure and Viscous Drag

Trong thủy lực học và khí động học, lực cản tổng cộng (Total Drag) tác dụng lên một vật thể chuyển động trong chất lưu là tổng hợp của các ứng suất pháp tuyến (normal stresses - áp suất) và ứng suất tiếp tuyến (tangential stresses - ma sát) tích phân trên toàn bộ diện tích bề mặt ướt (wetted surface).
In hydrodynamics and aerodynamics, the total drag acting on an object moving through a fluid is the integral of normal stresses (pressure) and tangential stresses (friction) over the entire wetted surface area.

#### 1.1 Lực cản ma sát (Viscous / Skin Friction Drag)
Lực cản ma sát được sinh ra hoàn toàn do độ nhớt (viscosity) của chất lưu, tạo ra một ứng suất cắt (shear stress) tại lớp biên (boundary layer) giữa bề mặt vật thể rắn và dòng chảy.
Skin friction drag is generated entirely by the viscosity of the fluid, creating a shear stress at the boundary layer between the solid object surface and the flow.

- **Công thức tích phân / Integral Formula**: 
  $$D_f = \iint_{S} \tau_w \cos\theta \, dA$$
  Trong đó: / Where:
  - $\tau_w = \mu \left( \frac{\partial u}{\partial y} \right)_{y=0}$ là ứng suất cắt tại thành (wall shear stress).
  - $\theta$ là góc giữa phương thẳng góc với bề mặt vi phân $dA$ và phương của dòng chảy tới chưa bị nhiễu loạn (free-stream).
  - $\mu$ là độ nhớt động lực học (dynamic viscosity).

- **Đặc điểm quan trọng / Key characteristics**: 
  - Bề mặt càng nhám (roughness) và diện tích tiếp xúc càng lớn thì $D_f$ càng lớn.
  - The rougher the surface and the larger the contact area, the greater the $D_f$.
  - Lực này chiếm tỷ trọng tuyệt đối đối với các hình dạng thuôn nhọn (streamlined bodies) như cánh máy bay, vỏ tàu ngầm, thân cá heo.
  - This force absolutely dominates for streamlined bodies such as airplane wings, submarine hulls, and dolphin bodies.

#### 1.2 Lực cản áp suất (Pressure / Form Drag)
Lực cản áp suất (hay lực cản hình dáng) sinh ra do sự phân bố áp suất không đồng đều xung quanh vật thể. Sự chênh lệch áp suất này cực kỳ rõ rệt giữa mặt trước (đón dòng - khu vực áp suất đình trệ) và mặt sau (khu vực wake hay dòng xoáy - khu vực áp suất thấp) của vật thể.
Pressure drag (or form drag) is caused by the uneven pressure distribution around the object. This pressure difference is extremely pronounced between the front (stagnation area) and the back (wake region - low pressure area) of the object.

- **Cơ chế tách dòng (Flow Separation Mechanism)**:
  Khi dòng chảy đi qua điểm có bề dày lớn nhất của vật thể, lớp biên phải chống lại một gradient áp suất dương (adverse pressure gradient, $\frac{dp}{dx} > 0$). Động năng của dòng hạt chất lưu cạn kiệt do ma sát, khiến lớp biên bị tách khỏi bề mặt vật thể, tạo ra một vùng áp suất rất thấp phía sau.
  When flow passes the thickest point of the object, the boundary layer must overcome an adverse pressure gradient. The kinetic energy of fluid particles is depleted by friction, causing the boundary layer to separate from the surface, creating a very low-pressure wake region behind.

- **Công thức tích phân / Integral Formula**:
  $$D_p = \iint_{S} p \cos\theta \, dA$$
  Trong đó $p$ là áp suất (tĩnh và động lực) tác dụng vuông góc lên bề mặt. / Where $p$ is the pressure acting normal to the surface.

- **Đặc điểm quan trọng / Key characteristics**:
  - Chiếm tỷ trọng lớn đối với các vật thể tù (bluff bodies) như hình trụ đứng thẳng trong dòng chảy, bảng quảng cáo, khối lập phương.
  - Dominates for bluff bodies like vertical cylinders in crossflow, billboards, cubes.

### 2. Sự Phụ Thuộc của Hệ Số Cản $C_D$ Vào Số Reynolds và Khủng Hoảng Lực Cản / $C_D$ Dependence on Reynolds Number and Drag Crisis

Hệ số cản $C_D$ là một đại lượng không thứ nguyên biểu thị sức cản thủy động lực học của một vật. Nó phụ thuộc mạnh mẽ vào số Reynolds.
The drag coefficient $C_D$ is a dimensionless quantity representing hydrodynamic resistance. It strongly depends on the Reynolds number.

$$C_D = \frac{D_{Total}}{\frac{1}{2} \rho U^2 A_{ref}}$$
Trong đó: / Where:
- $D_{Total}$ là tổng lực cản (Total Drag).
- $\rho$ là khối lượng riêng của chất lưu ($\approx 1000 \text{ kg/m}^3$ cho nước ngọt, $1025 \text{ kg/m}^3$ cho nước biển).
- $U$ là vận tốc tương đối của dòng chảy không bị nhiễu loạn (free-stream velocity).
- $A_{ref}$ là diện tích tham chiếu (đối với vật thể tù thường là diện tích hình chiếu mặt cắt ngang frontal area; đối với cánh máy bay là diện tích hình chiếu bằng planform area).

#### Hiện Tượng Khủng hoảng lực cản (Drag Crisis) - Trọng Tâm Bài Học
Khủng hoảng lực cản là một hiện tượng phi tuyến tính thú vị và cực kỳ quan trọng, được phát hiện bởi Gustave Eiffel.
Drag crisis is an interesting and extremely important non-linear phenomenon, discovered by Gustave Eiffel.

- **Phân tích cơ chế (Mechanism Analysis):**
  Đối với vật thể trơn nhẵn cong (như quả cầu, hình trụ tròn), khi số Reynolds tăng lên và đạt đến vùng $Re_{crit} \approx 3 \times 10^5$, lớp biên sát bề mặt vật thể đột ngột chuyển pha từ trạng thái tầng (laminar boundary layer) sang trạng thái rối (turbulent boundary layer) TRƯỚC điểm tách dòng (separation point).
  For smooth curved bodies (like spheres, cylinders), as Reynolds number reaches the critical zone $Re_{crit} \approx 3 \times 10^5$, the boundary layer abruptly transitions from laminar to turbulent BEFORE the flow separation point.
  
  Lớp biên rối có đặc tính trao đổi động lượng mạnh mẽ giữa các lớp chất lưu lân cận, cung cấp thêm động năng (kinetic energy) cho dòng hạt sát bề mặt thành. Nhờ năng lượng bổ sung này, dòng chảy có khả năng chống lại adverse pressure gradient tốt hơn, di chuyển bám theo bề mặt cong xa hơn về phía đuôi vật thể.
  A turbulent boundary layer exhibits strong momentum exchange between adjacent fluid layers, injecting kinetic energy into the near-wall particles. Thanks to this added energy, the flow can better resist the adverse pressure gradient, staying attached to the curved surface further towards the rear.
  
  Kết quả là: Điểm tách dòng (separation point) dời mạnh về phía sau (delayed separation), làm thu hẹp đáng kể kích thước của vùng wake. Sự thu hẹp vùng áp suất thấp phía sau đuôi dẫn đến việc lực cản áp suất ($D_p$) giảm đột ngột, làm $C_D$ giảm mạnh từ $\approx 0.47$ (chế độ subcritical) xuống $\approx 0.1$ (chế độ supercritical).
  As a result: The separation point is strongly delayed towards the rear, significantly narrowing the size of the wake region. The reduction of the low-pressure zone at the rear causes pressure drag ($D_p$) to drop abruptly, plummeting $C_D$ from $\approx 0.47$ to $\approx 0.1$.

- **Ứng dụng thực tế (Practical Applications):**
  - **Quả bóng golf:** Được cố tình tạo ra hàng trăm lỗ lõm li ti (dimples) nhằm chủ động "kích hoạt" dòng rối ở lớp biên tại số Reynolds thấp hơn bình thường (khoảng $5 \times 10^4$). Việc kích hoạt sớm drag crisis giúp bóng bay xa hơn gấp đôi so với bóng trơn.
  - **Golf balls:** Intentionally manufactured with hundreds of tiny dimples to proactively "trip" the boundary layer into turbulence at a lower Reynolds number. Tripping drag crisis early allows the ball to fly twice as far compared to a smooth ball.

### 3. Phân Tích Tổng Hợp Lực Cản Trên Vỏ Tàu Ngầm / Comprehensive Drag Analysis on Submarine Hulls

Thiết kế thân tàu ngầm quân sự hoặc phương tiện lặn AUV/ROV là một bài toán tối ưu hóa thủy động lực học phức tạp. Tổng lực cản ($R_T$) bao gồm:
Designing military submarine hulls or AUV/ROV vehicles is a complex hydrodynamic optimization problem. Total drag ($R_T$) comprises:

1. **Lực cản ma sát (Friction Drag - $R_F$):** 
   - Đây là thành phần chi phối lớn nhất, chiếm 60% đến 70% tổng lực cản khi tàu ngầm lặn sâu.
   - This is the most dominant component, accounting for 60% to 70% of total drag when deeply submerged.
   - Thân tàu ngầm hình giọt nước (teardrop/Albacore shape) được tối ưu để cực tiểu hóa lực cản áp suất, nên lực ma sát mới là "kẻ thù chính".
   - The teardrop hull shape is optimized to minimize form drag, making friction the "main enemy".
   - Tính toán thường dựa trên hệ số ma sát tấm phẳng $C_F$ theo ITTC (International Towing Tank Conference) 1957.
   - Calculation is often based on the flat plate friction coefficient $C_F$ from ITTC-1957.

2. **Lực cản phần lồi (Appendage Drag - $R_{APP}$):** 
   - Sinh ra từ các cấu trúc gắn thêm ngoài thân chính: tháp chỉ huy (sail/conning tower), cánh lái ngang/dọc (rudders/planes), và chân vịt.
   - Generated by structures attached outside the main hull: sail, rudders/planes, and propeller shafts.
   - Các phần lồi này làm phá vỡ dòng chảy trơn tru, tạo ra xoáy rễ (root vortices) và tách dòng cục bộ, làm tăng đáng kể lực cản áp suất.
   - These appendages disrupt smooth flow, creating root vortices and local separation, significantly increasing pressure drag.

3. **Lực cản tạo sóng (Wave-making Drag - $R_W$):** 
   - Cơ chế: Khi một vật thể khổng lồ di chuyển gần mặt thoáng (free surface), vùng áp suất cao ở mũi đẩy mặt nước nhô lên, trong khi vùng áp suất thấp hạ mặt nước xuống. Năng lượng cơ học của tàu bị chuyển hóa để duy trì hệ thống sóng Kelvin lan truyền trên mặt đại dương.
   - Mechanism: When a massive object moves near the free surface, the high-pressure bow pushes water up, while low-pressure areas pull it down. The sub's mechanical energy is converted to maintain the spreading Kelvin wave system.
   - Đặc điểm: Chỉ xuất hiện khi tàu chạy nổi (surfaced) hoặc lặn nông ở độ sâu dùng ống thở (snorkeling/periscope depth).
   - Characteristic: Only present when surfaced or at shallow periscope depth.
   - Nếu tàu lặn sâu hơn 3 đến 5 lần đường kính thân, sự tương tác với mặt thoáng biến mất, lực tạo sóng hoàn toàn triệt tiêu. Đây là lý do tàu ngầm hiện đại có thể bơi ngầm nhanh hơn bơi nổi.
   - If submerged deeper than 3 to 5 times hull diameter, interaction with the free surface vanishes, wave-making drag is zero. This is why modern subs can travel faster submerged than surfaced.

**Ứng dụng thực tế tại Việt Nam:** Các kỹ sư thiết kế phương tiện lặn không người lái ROV tại Liên doanh Việt - Nga Vietsovpetro phải tối ưu hình dáng để ROV không bị dòng hải lưu ngoài khơi Vũng Tàu cuốn trôi, đảm bảo thao tác robot chính xác dưới biển sâu.
**Real application in Vietnam:** ROV designers at Vietsovpetro must optimize shapes so ROVs are not swept away by ocean currents off Vung Tau, ensuring precise robotic operations deep underwater.

### 4. Động Lực Học Tạo Lực Nâng Bằng Cánh Ngầm (Hydrofoil Dynamics)

Cánh ngầm (hydrofoil) là cấu trúc thiết kế nhằm tạo ra lực nâng (lift) khi di chuyển trong nước, nhấc bổng thân tàu lên khỏi mặt nước để giảm thiểu lực cản tạo sóng và lực cản ma sát của thân. Môi trường nước đặc hơn không khí 800 lần, nên lực nâng tạo ra cực kỳ mạnh ngay cả ở vận tốc thấp.
Hydrofoils are structures designed to generate lift when moving through water, lifting the hull above the surface to eliminate hull wave-making and friction drag. Water is 800 times denser than air, so generated lift is incredibly strong even at low speeds.

#### Định lý Kutta-Joukowski / Kutta-Joukowski Theorem
Lực nâng $L$ sinh ra trên một đơn vị chiều dài sải cánh tỷ lệ thuận với một đại lượng toán học gọi là hoàn lưu (circulation) $\Gamma$.
Lift $L$ per unit span is proportional to a mathematical quantity called circulation $\Gamma$.
$$L' = \rho U_{\infty} \Gamma$$
- Cơ chế vật lý: Khi dòng chảy bao quanh cánh có góc tấn (angle of attack), Điều kiện Kutta (Kutta condition) yêu cầu vận tốc chất lưu tại mép thoát (trailing edge) phải hữu hạn, dòng chảy mặt trên và mặt dưới phải hợp lại trơn tru. Để thỏa mãn điều này, một hoàn lưu quanh cánh phải được sinh ra. Hoàn lưu làm tăng tốc độ dòng chảy mặt trên (giảm áp suất) và giảm tốc độ dòng chảy mặt dưới (tăng áp suất), từ đó tạo chênh lệch áp suất hướng lên trên.
- Physical mechanism: When flow passes a wing at an angle of attack, the Kutta condition requires finite velocity at the trailing edge; upper and lower flows must merge smoothly. To satisfy this, a circulation around the wing is generated. This circulation speeds up upper flow (lowering pressure) and slows lower flow (raising pressure), creating an upward pressure differential.

#### Lý thuyết cánh mỏng / Thin Airfoil Theory
Dành cho các hydrofoil có độ dày rất nhỏ, lý thuyết khí động học cánh mỏng dự đoán độ dốc đường cong hệ số lực nâng (lift curve slope).
For very thin hydrofoils, thin airfoil theory predicts the lift curve slope.
Đối với góc tấn $\alpha$ nhỏ (chưa bị thất tốc): / For small angle of attack $\alpha$:
$$C_L \approx 2\pi (\alpha - \alpha_{L=0})$$
Trong đó $\alpha_{L=0}$ là góc tấn ứng với lực nâng bằng 0 (bằng $0^\circ$ đối với cánh đối xứng). 
Lưu ý quan trọng: Công thức $2\pi$ được tính theo radian. Nếu dùng độ (degrees), độ dốc xấp xỉ $0.11 \text{ per degree}$.

#### Thất tốc (Stall Phenomenon)
Khi góc tấn $\alpha$ vượt qua một giới hạn (thường khoảng 12° - 15°), gradient áp suất trên mặt hút (mặt trên) trở nên quá lớn. Lớp biên không đủ động năng để bám mặt cánh, dẫn đến tách dòng hoàn toàn từ mép dẫn (leading edge stall) hoặc mép thoát (trailing edge stall).
When angle of attack exceeds a limit (usually 12°-15°), the adverse pressure gradient on the suction (upper) surface becomes too steep. The boundary layer lacks energy to stay attached, causing massive flow separation.
Hậu quả: Lực nâng $C_L$ rớt thảm hại, lực cản $C_D$ tăng đột biến, phương tiện mất khả năng điều khiển hoặc bị rơi tự do xuống nước.
Consequence: Lift $C_L$ plummets disastrously, drag $C_D$ spikes, the vehicle loses control or crashes into the water.

### 5. Khí Thực (Cavitation) và Siêu Khí Thực (Supercavitation)

Đây là vấn đề đau đầu bậc nhất trong kỹ thuật hàng hải. Khí thực khác hoàn toàn với sự đun sôi (boiling).
This is arguably the most severe headache in marine engineering. Cavitation is fundamentally different from boiling.
- Sôi (Boiling): Xảy ra khi ta tăng nhiệt độ lên đến điểm sôi của chất lỏng.
- Khí thực (Cavitation): Xảy ra ở nhiệt độ không đổi, khi tĩnh áp (static pressure) cục bộ giảm mạnh xuống dưới áp suất hóa hơi (vapor pressure, $p_v$).

Khi dòng nước tăng tốc cực nhanh để đi vòng qua mặt trên hydrofoil hoặc mặt lưng của cánh quạt chân vịt, theo định luật Bernoulli, áp suất ở đó giảm mạnh. Khi $P_{local} < p_v$, nước lập tức "hóa hơi lạnh" tạo thành vô vàn bong bóng khí.
When water accelerates rapidly over a hydrofoil suction surface or propeller back, Bernoulli's principle dictates pressure drops. When $P_{local} < p_v$, water instantly "cold boils" into millions of vapor bubbles.

- **Mức độ nghiêm trọng (Severity Metric):** Đo bằng số Cavitation (Cavitation Number $\sigma$)
  $$\sigma = \frac{p_\infty - p_v}{\frac{1}{2}\rho U^2}$$
  Nếu $\sigma$ nhỏ, nguy cơ cavitation càng cao.

- **Tác hại hủy diệt (Destructive Harm):** 
  Các bong bóng khí này rất không ổn định. Khi chúng bị dòng chảy cuốn về vùng có áp suất cao hơn ở phía sau cánh quạt, chúng bị vỡ nát (collapse) chỉ trong một phần nghìn giây. Vụ sụp đổ này tạo ra một vòi rồng nước siêu nhỏ (microjet) với vận tốc có thể đạt 1000 m/s đập thẳng vào bề mặt kim loại, tạo ra sóng xung kích (shockwaves) nén với áp suất hàng Gigapascal. 
  Sự va đập liên tục này tạo ra hiện tượng xói mòn (pitting/erosion), ăn thủng vật liệu chân vịt, đồng thời phát ra tiếng ồn (noise) khủng khiếp, làm lộ vị trí của tàu ngầm quân sự.

- **Siêu khí thực (Supercavitation):**
  Thay vì cố gắng triệt tiêu, các nhà thiết kế vũ khí đã lợi dụng hiện tượng này. Bằng cách thiết kế mũi ngư lôi có dạng đĩa phẳng để tạo cavitation một cách cực đoan nhất, đồng thời bơm thêm khí nén từ trong thân ra, họ tạo ra một bong bóng khí bao bọc trọn vẹn toàn bộ thân ngư lôi.
  Ngư lôi lúc này bay trong khí, ma sát với nước (vốn chiếm 70% lực cản) bị triệt tiêu hoàn toàn. Ngư lôi VA-111 Shkval của Nga áp dụng nguyên lý này, đạt tốc độ > 370 km/h dưới nước - vận tốc không tưởng đối với thủy động lực học truyền thống.

### 6. Hiệu Ứng Khối Lượng Kèm Theo (Added Mass / Virtual Mass)

Trong động lực học cơ bản trên cạn, phương trình Newton II là $F = m a$.
Nhưng trong chất lưu, khi một vật gia tốc, nó không chỉ tự tăng tốc chính bản thân mình mà còn phải "kéo theo" và gia tốc toàn bộ một thể tích nước khổng lồ bao quanh nó. Năng lượng động học truyền cho lớp nước này tương đương với việc khối lượng của vật bị tăng lên.
In fluid dynamics, when an object accelerates, it must also drag and accelerate a massive volume of surrounding water. The kinetic energy imparted to this water acts exactly as if the object's mass had increased.

Phương trình chuyển động đúng trong môi trường nước: / Correct equation of motion in water:
$$(m_{obj} + m_{added}) \frac{dU}{dt} = \sum F_{external}$$
Với nước ($\rho$ rất lớn), $m_{added}$ có thể khổng lồ. 
- Đối với quả cầu, $m_{added} = 0.5 \times \rho_{water} \times V_{sphere}$. Khối lượng kèm theo bằng đúng một nửa khối lượng nước bị chiếm chỗ!
- Ứng dụng: Khi thiết kế hệ thống điều khiển cho ROV, nếu bỏ qua added mass, ROV sẽ phản hồi rất chậm chạp so với lệnh điều khiển và gây ra dao động cộng hưởng phá hủy hệ thống.

### 7. Phương Trình Morison Cho Công Trình Biển (Morison Equation for Offshore Structures)

Phương trình Morison là trụ cột trong thiết kế kết cấu ngoài khơi. Nó dự đoán lực tác động của sóng lên các công trình thanh mảnh (slender structures), định nghĩa là các kết cấu có tỷ lệ đường kính trên bước sóng rất nhỏ ($D/L < 0.2$), nghĩa là kết cấu không cản trở hình dạng của sóng.
The Morison equation is the pillar of offshore structure design. It predicts wave loads on slender structures ($D/L < 0.2$), meaning the structure does not diffract the incident wave.

Lực sóng phân bố trên một đơn vị chiều dài của trụ tròn:
Force per unit length of a cylindrical pile:
$$f(t) = f_I(t) + f_D(t) = C_M \rho \frac{\pi D^2}{4} \dot{u}(t) + C_D \frac{1}{2} \rho D |u(t)| u(t)$$

Phân tích phương trình:
- Thành phần Lực Quán Tính $f_I$ (Inertia Force): Phụ thuộc vào khối lượng nước chiếm chỗ và gia tốc tức thời của dòng nước $\dot{u}(t)$ do sóng biển tạo ra. Hệ số quán tính $C_M = 1 + C_a$ (với $C_a$ là hệ số added mass).
- Thành phần Lực Cản $f_D$ (Drag Force): Tuân theo định luật bình phương vận tốc $u^2$. Dấu giá trị tuyệt đối $|u| u$ được sử dụng thay vì $u^2$ để đảm bảo chiều của lực cản luôn cùng chiều với vận tốc dòng chảy (sóng biển dao động qua lại).

**Ứng dụng thực tế tại Việt Nam:** Các kỹ sư thiết kế dàn khoan chân cắm (jack-up rigs) hoặc chân đế giàn khoan cố định (jacket platforms) tại các mỏ dầu như Bạch Hổ, Sư Tử Đen thuộc thềm lục địa Việt Nam sử dụng phương trình này hàng ngày để tính toán cấu trúc thép chịu đựng siêu bão.

---

## Ví Dụ Tính Toán Chuyên Sâu / In-depth Worked Examples

### Ví dụ 1: Tính chi tiết lực cản trên thiết bị AUV hình trụ (Calculate drag on AUV)
Một tàu lặn không người lái (AUV) hình trụ tròn có phần mũi thuôn nhọn hình elip, đường kính tối đa $D = 0.5 \text{ m}$, chiều dài $L = 4.0 \text{ m}$, đang thực hiện nhiệm vụ khảo sát rạn san hô với vận tốc hành trình không đổi $U = 2.5 \text{ m/s}$ trong vùng biển Đông ($\rho = 1025 \text{ kg/m}^3$, độ nhớt động học $\nu = 1.05 \times 10^{-6} \text{ m}^2\text{/s}$). AUV đang lặn ở độ sâu 50m.

1. **Kiểm tra lực cản tạo sóng (Wave-making Drag):**
   Độ sâu lặn $h = 50 \text{ m}$. Tỷ lệ $h/D = 50 / 0.5 = 100 \gg 3$. Do lặn rất sâu, tương tác mặt thoáng bằng 0, ta kết luận $R_W \approx 0$.
   
2. **Tính toán số Reynolds toàn thân (Reynolds Number):**
   Đại lượng đặc trưng là chiều dài AUV.
   $$Re_L = \frac{U L}{\nu} = \frac{2.5 \times 4.0}{1.05 \times 10^{-6}} = 9.52 \times 10^6$$
   Với $Re > 10^6$, lớp biên dọc theo thân tàu hoàn toàn ở trạng thái rối (turbulent boundary layer).

3. **Tính hệ số ma sát $C_F$ theo công thức tiêu chuẩn ITTC-1957:**
   Công thức ITTC được công nhận toàn cầu trong ngành đóng tàu:
   $$C_F = \frac{0.075}{(\log_{10} Re_L - 2)^2} = \frac{0.075}{(\log_{10}(9.52\times 10^6) - 2)^2}$$
   $$\log_{10}(9.52 \times 10^6) \approx 6.978$$
   $$C_F = \frac{0.075}{(6.978 - 2)^2} = \frac{0.075}{4.978^2} = \frac{0.075}{24.78} \approx 0.00302$$

4. **Tính diện tích ướt xấp xỉ (Wetted Area):**
   Xem AUV như hình trụ thẳng, diện tích ướt $A_s \approx \pi D L$.
   $$A_s = \pi \times 0.5 \times 4.0 = 6.28 \text{ m}^2$$

5. **Tính Lực cản ma sát (Friction Drag):**
   $$R_F = C_F \frac{1}{2} \rho U^2 A_s = 0.00302 \times 0.5 \times 1025 \times (2.5)^2 \times 6.28 = 60.75 \text{ N}$$
   
6. **Tính hệ số cản hình dáng và tổng lực cản:**
   Với AUV thuôn nhọn tốt, ta dùng công thức gần đúng $C_{form} = C_F \times \left(1 + k\right)$ với hệ số hình dạng $k \approx 1.5 \left(\frac{D}{L}\right)^{1.5} + 7 \left(\frac{D}{L}\right)^3$.
   $D/L = 0.5 / 4.0 = 0.125$.
   $k \approx 1.5(0.125)^{1.5} + 7(0.125)^3 \approx 0.066 + 0.013 = 0.079$.
   Tổng lực cản thân trần $R_{Total} = R_F \times (1 + k) = 60.75 \times 1.079 \approx 65.55 \text{ N}$.
   
*(Trong thực tế, AUV còn có hệ số appendage, thường cộng thêm khoảng 20% vào $R_{Total}$.)*

---

## Code Python / Python Code

Đoạn mã Python toàn diện này được thiết kế để không chỉ tính toán lực cản mà còn giải mô phỏng phương trình vi phân chuyển động (ODE) cho bài toán vật thể rơi tự do trong nước (Free-fall of a sphere in water) có xét đến khối lượng kèm theo (Added Mass) và sự biến đổi lực cản phi tuyến (Drag crisis).
This comprehensive Python code is designed to simulate the differential equation of motion for a free-falling sphere, accounting for Added Mass and non-linear drag coefficient.

```python
import numpy as np
import matplotlib.pyplot as plt
from scipy.integrate import odeint

# ==========================================
# THƯ VIỆN HÀM THỦY ĐỘNG LỰC HỌC CƠ BẢN
# ==========================================

def get_sphere_cd(Re):
    """
    Tính hệ số cản Cd của quả cầu trơn dựa trên số Reynolds.
    Bao phủ các vùng: Stokes, Subcritical, Drag Crisis, Supercritical.
    """
    Re = np.maximum(Re, 1e-10) # Tránh chia cho 0
    Cd = np.zeros_like(Re, dtype=float)
    
    # Dùng numpy boolean indexing để vector hóa tốc độ cao
    mask_stokes = Re < 1.0
    mask_allen = (Re >= 1.0) & (Re < 400.0)
    mask_newton = (Re >= 400.0) & (Re < 3e5)
    mask_crisis = (Re >= 3e5) & (Re < 3e6)
    mask_super = Re >= 3e6
    
    Cd[mask_stokes] = 24.0 / Re[mask_stokes]
    Cd[mask_allen] = (24.0 / Re[mask_allen]) * (1 + 0.15 * Re[mask_allen]**0.687)
    Cd[mask_newton] = 0.47
    
    # Mô hình hóa sự sụt giảm bậc 3 trong vùng Drag crisis
    Re_c = Re[mask_crisis]
    # Nội suy tuyến tính trên thang log cho đơn giản
    log_Re_c = np.log10(Re_c)
    Cd[mask_crisis] = 0.47 - (0.47 - 0.1) * (log_Re_c - np.log10(3e5)) / (np.log10(3e6) - np.log10(3e5))
    
    Cd[mask_super] = 0.2
    return Cd

# ==========================================
# MÔ PHỎNG VẬT RƠI TỰ DO TRONG NƯỚC (ODE SOLVER)
# ==========================================

def sphere_free_fall_model(y, t, diameter, rho_obj, rho_fluid, mu_fluid):
    """
    Phương trình vi phân: dv/dt = (W_net - F_drag) / M_eff
    y = [position_z, velocity_v]
    """
    z, v = y
    g = 9.81
    
    # Hình học vật thể
    volume = (np.pi * diameter**3) / 6.0
    area = (np.pi * diameter**2) / 4.0
    
    # Các thông số khối lượng
    m_actual = rho_obj * volume
    m_displaced = rho_fluid * volume
    
    # Lực nổi ròng (Trọng lực - Lực đẩy Archimedes)
    W_net = (rho_obj - rho_fluid) * volume * g
    
    # Hiệu ứng Added Mass của quả cầu (bằng 0.5 khối lượng nước chiếm chỗ)
    m_added = 0.5 * m_displaced
    m_eff = m_actual + m_added
    
    # Tính toán lực cản phi tuyến
    velocity_mag = abs(v)
    if velocity_mag == 0:
        F_drag = 0
    else:
        Re = (rho_fluid * velocity_mag * diameter) / mu_fluid
        Cd = get_sphere_cd(np.array([Re]))[0]
        # Lực cản ngược chiều với vecto vận tốc
        F_drag = np.sign(v) * 0.5 * rho_fluid * (v**2) * area * Cd
        
    # Gia tốc 
    dvdt = (W_net - F_drag) / m_eff
    dzdt = v
    
    return [dzdt, dvdt]

# THIẾT LẬP THÔNG SỐ VÀ CHẠY MÔ PHỎNG
diameter = 0.15 # 15 cm
rho_steel = 7800.0 # Thép, kg/m^3
rho_water = 1000.0 # Nước ngọt
mu_water = 1.0e-3  # Pa.s

t_span = np.linspace(0, 5.0, 1000) # Mô phỏng 5 giây đầu tiên
y0 = [0.0, 0.0] # Bắt đầu ở z=0, vận tốc ban đầu = 0

# Giải phương trình vi phân
solution = odeint(sphere_free_fall_model, y0, t_span, args=(diameter, rho_steel, rho_water, mu_water))
positions = solution[:, 0]
velocities = solution[:, 1]

# Tính vận tốc cuối cùng (Terminal Velocity)
v_terminal = velocities[-1]
print(f"Vận tốc cuối (Terminal Velocity) của quả cầu thép 15cm trong nước: {v_terminal:.2f} m/s")

# ==========================================
# TRÌNH BÀY ĐỒ THỊ TRỰC QUAN
# ==========================================

plt.style.use('ggplot') # Giao diện đẹp chuyên nghiệp
fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(14, 5))

# Đồ thị 1: Hệ số cản Cd vs Reynolds
Re_plot = np.logspace(-1, 7, 1000)
Cd_plot = get_sphere_cd(Re_plot)
ax1.loglog(Re_plot, Cd_plot, 'b-', lw=2)
ax1.axvspan(3e5, 3e6, color='red', alpha=0.15, label='Drag Crisis\n(Turbulent BL)')
ax1.set_title('Drag Coefficient vs Reynolds Number', fontsize=12, fontweight='bold')
ax1.set_xlabel('Reynolds Number $Re$ (Log scale)')
ax1.set_ylabel('Drag Coefficient $C_D$ (Log scale)')
ax1.legend()
ax1.grid(True, which="both", ls="--")

# Đồ thị 2: Động học rơi tự do
ax2.plot(t_span, velocities, 'g-', lw=2, label='Velocity $v(t)$')
ax2.axhline(y=v_terminal, color='k', linestyle='--', label=f'Terminal Vel = {v_terminal:.2f} m/s')
ax2.set_title('Free Fall Dynamics in Water (Steel Sphere, D=15cm)', fontsize=12, fontweight='bold')
ax2.set_xlabel('Time (s)')
ax2.set_ylabel('Downward Velocity (m/s)')
ax2.legend()

plt.tight_layout()
plt.show()
```

---

## Thực Hành / Lab Activity

### Bài tập 1: Xử lý dữ liệu khí động học và tối ưu góc tấn (Hydrofoil Lift Optimization)
Mục đích: Viết code Python tính toán lực nâng/cản của hydrofoil NACA 0012 dựa trên dữ liệu khí động, vẽ đồ thị cực trị.
Objective: Write a Python script to calculate lift/drag of NACA 0012 hydrofoil based on aero data, plot extreme values.

1. **Chuẩn bị dữ liệu**: Sinh viên tạo file dữ liệu giả lập hàm mảng numpy cho $\alpha$ từ $-5^\circ$ đến $20^\circ$. $C_L$ tăng tuyến tính, sau đó rớt thảm hại sau $14^\circ$ (Stall). $C_D$ hàm bậc 2.
2. **Yêu cầu code**: Sử dụng Python Pandas và Numpy để nội suy hàm số liên tục.
3. **Nhiệm vụ thực tiễn**: Một nguyên mẫu tàu cánh ngầm Greenlines DP (tuyến Bến Bạch Đằng - Vũng Tàu) trọng lượng tĩnh 25 tấn cần bay trên mặt nước. Sải cánh dưới nước là $4 \text{ m}^2$. Vận tốc thiết kế là 35 knots. Sử dụng thuật toán tối ưu (vd `scipy.optimize.minimize`) để tìm **góc tấn $\alpha$ tối ưu nhỏ nhất** sao cho Lực Nâng sinh ra lớn hơn trọng lượng tàu ($L > W$) nhằm đảm bảo tàu nâng mũi lên khỏi mặt nước an toàn.

### Bài tập 2: Mô phỏng chuỗi thời gian tải trọng bão bằng phương trình Morison / Morison Equation Time-Series Simulation
Mục đích: Khảo sát sự thay đổi biên độ tải trọng sóng lên cọc móng giàn khoan ngoài khơi trong điều kiện bão cấp 12.
1. Mô phỏng đặc tính sóng biển bằng sóng tuyến tính Airy (Airy wave theory) có chiều cao $H = 10 \text{m}$, chu kỳ $T = 12 \text{s}$. Viết hàm số cho vận tốc hạt nước $u(t) = \frac{\pi H}{T} \cos(\omega t)$ và gia tốc $\dot{u}(t) = -\frac{2\pi^2 H}{T^2} \sin(\omega t)$.
2. Vẽ đồ thị so sánh thành phần lực quán tính $f_I$ và lực cản $f_D$ tác dụng lên 1 mét dài của cọc thép đường kính $D = 1.5 \text{m}$. Hệ số $C_M = 2.0, C_D = 1.2$.
3. **Câu hỏi tư duy**: Nhận xét về độ lệch pha (phase shift) giữa lực cực đại (Max Force) và đỉnh sóng (Wave Crest). Chúng có xuất hiện cùng lúc không? Tại sao?

---

## ⚠️ Lỗi Thường Gặp / Common Mistakes

1. **Sai Lầm Tử Thần Về Khối Lượng Riêng (Fatal Density Confusion):** 
   - *Biểu hiện:* Dùng nhầm $\rho_{air} = 1.225 \text{ kg/m}^3$ để giải bài toán tàu thuyền.
   - *Cảnh báo:* Nước nặng hơn không khí gần 800 lần. Một sơ suất này sẽ làm lực mô phỏng nhỏ đi 800 lần, dẫn đến thiết kế sụp đổ hoàn toàn trong thực tế. Luôn kiểm tra lại đơn vị $\rho_{water} = 1000 - 1025 \text{ kg/m}^3$.
2. **Ngộ Nhận Về Lực Cản Hình Dáng (Form Drag Fallacy):**
   - *Biểu hiện:* Nghĩ rằng mọi vật thể càng nhám thì lực cản tổng cộng càng lớn.
   - *Chỉnh lý:* Sai đối với vật thể tù (bluff bodies)! Làm nhám bề mặt (như tạo dimples trên quả bóng golf) có thể kích hoạt dòng rối, kéo điểm tách dòng ra phía sau, giảm mạnh kích thước vùng wake, từ đó giảm lực cản tổng cộng, bù đắp dư thừa cho phần lực ma sát tăng lên.
3. **Bỏ Quên Added Mass Khi Tính Toán Động Lực Học Rung Động (Neglecting Added Mass in Vibrations):**
   - *Biểu hiện:* Khi tính tần số dao động riêng (natural frequency) $\omega_n = \sqrt{k/m}$ của cọc giàn khoan, chỉ dùng khối lượng thép $m_{steel}$.
   - *Chỉnh lý:* Cọc giàn khoan dao động trong nước phải mang vác thêm một khối nước xung quanh nó. Phải dùng $m_{eff} = m_{steel} + m_{added}$, làm tăng khối lượng tổng, kéo theo **tần số dao động tự nhiên giảm đi rất nhiều**. Bỏ qua điều này dẫn đến tính sai cộng hưởng sóng (wave resonance).
4. **Nhầm lẫn Áp suất Dư và Tuyệt Đối ở bài toán Cavitation:**
   - *Biểu hiện:* Khí thực được kích hoạt bởi áp suất tuyệt đối (Absolute Pressure) rơi xuống dưới áp suất hơi nước (khoảng 2300 Pa ở $20^\circ\text{C}$). Không bao giờ dùng áp suất dư (Gauge Pressure) có thể nhận giá trị âm để tính tỷ số cavitation $\sigma$.

---

## Câu Hỏi Thảo Luận Mở / Discussion & Open Questions (5 questions)

1. **Hiệu ứng vảy cá mập (Shark skin effect):** Thiên nhiên đã tiến hóa vảy cá mập có các rãnh dọc siêu nhỏ (riblets) giúp giảm lực cản ma sát đáng kể (khác với hiện tượng khủng hoảng lực cản của bóng golf). Phân tích sự khác biệt vật lý cốt lõi giữa hai cơ chế giảm lực cản này. Liệu chúng ta có thể áp dụng sơn phủ "da cá mập" lên vỏ tàu thương mại cỡ lớn (VLCC) không? Hiệu quả về mặt chi phí?
2. **Chân vịt tàu ngầm tấn công (Nuclear Submarine Propellers):** Tại sao chân vịt tàu ngầm hạt nhân tấn công hiện đại lại có rất nhiều cánh (thường từ 7 đến 9 cánh), cong vút về phía sau (highly skewed), và vòng quay rất chậm? Hãy giải thích dựa trên các lý thuyết về lực cản áp suất, xoáy mép thoát (trailing vortices), và đặc biệt là sự ngăn chặn triệt để hiện tượng cavitation âm học (acoustic cavitation).
3. **Thiết kế thân tàu hai thân (Catamaran vs Monohull):** So sánh cơ chế lực cản tạo sóng (Wave-making drag) giữa tàu đơn thân (monohull) truyền thống và tàu hai thân (catamaran). Tàu hai thân có lợi thế thủy động lực học nào tại vận tốc cao (tốc độ Froude lớn)?
4. **Giới hạn của Morison (Limitations of Morison's equation):** Khi thiết kế một trụ đỡ bê tông khổng lồ của giàn khoan Gravity-based structure (GBS) có đường kính lên tới $D = 30\text{m}$, phương trình Morison không còn hợp lệ. Lực tán xạ (Diffraction) và phản xạ sóng xảy ra. Trình bày ngắn gọn tại sao sự tán xạ lại làm thay đổi hoàn toàn bài toán lực tải trọng sóng?
5. **Hiệu ứng mặt đất dưới nước (Wing-In-Ground effect):** Khi một hydrofoil bơi cực kỳ sát mặt đáy biển (hoặc mặt thoáng), lực nâng của nó bị biến đổi do hiệu ứng đệm (ground effect). Phân tích chiều hướng thay đổi của hệ số Lực Nâng $C_L$ và hệ số Lực Cản $C_D$ trong trường hợp này.

---

## Bài Tập Lớn Về Nhà / Heavy Homework Assignment

**Bài 1 (Tính toán lý thuyết và thiết kế - 40 điểm):**
Một nhóm thiết kế Đại học Bách Khoa chế tạo xuồng bay bằng vật liệu composite. Xuồng nặng 1.5 tấn. Kỹ sư bố trí 1 cánh ngầm chữ V (V-foil) phía trước và một cánh ngang bằng (Straight-foil) phẳng phía sau.
Cho thông số cánh ngầm nằm ngang phía sau: sải cánh $b = 2.0 \text{ m}$, dây cung $c = 0.4 \text{ m}$, biên dạng có $\alpha_{L=0} = -2^\circ$. Góc tấn đang xét là $\alpha = 3^\circ$.
Hệ số cản ký sinh (Parasitic drag) của cả xuồng là $C_{D,0} = 0.05$. Vận tốc xuồng đạt $12 \text{ m/s}$. Nước ngọt $1000 \text{ kg/m}^3$.
- Yêu cầu a: Dựa trên lý thuyết cánh mỏng, tính toán hệ số lực nâng $C_L$ của cánh ngang. Tính lực nâng $L$ cánh ngang sinh ra.
- Yêu cầu b: Cánh ngang sinh ra hoàn lưu $\Gamma$. Tính hoàn lưu trung bình quanh cánh ngang dựa theo định lý Kutta-Joukowski.
- Yêu cầu c: Tính toán độ lớn của lực cản cảm ứng (Induced drag) và tổng lực cản của hệ thống.

**Bài 2 (Lập trình mô phỏng Động Lực Học bằng Python - 60 điểm):**
**Nhiệm vụ:** Giải quyết bài toán phóng tên lửa hành trình từ tàu ngầm lặn sâu.
Một khoang đạn chứa tên lửa (giả sử hình trụ khối lượng $m = 2000 \text{ kg}$, đường kính $D = 0.6 \text{ m}$, chiều dài $L = 5 \text{ m}$) bị bơm nổ đẩy vọt từ ống phóng thẳng đứng lên mặt nước. Lực đẩy do bọt khí áp suất cao trong ống phóng tạo ra một lực không đổi $F_{thrust} = 300 \text{ kN}$ kéo dài đúng trong 1.5 giây đầu tiên. Tàu ngầm ở độ sâu 100m. Khối lượng riêng tàu $1025 \text{ kg/m}^3$.
Viết script Python giải hệ phương trình vi phân chuyển động 1 chiều $z$ (phương thẳng đứng hướng lên). Phương trình tổng quát:
$$(m + m_a) a(t) = F_{thrust}(t) - (m - \rho V)g - \frac{1}{2}\rho C_D A v(t) |v(t)|$$
- Khối lượng kèm theo $m_a \approx 0.1 m_{displaced}$ (do hình trụ thuôn dài).
- Lực đẩy $F_{thrust} = 300,000\text{N}$ nếu $t \le 1.5\text{s}$, sau đó bằng $0$.
- Hệ số cản cố định $C_D = 0.3$.
- Vẽ 2 đồ thị song song: Vị trí độ sâu $z(t)$ theo thời gian, và Vận tốc $v(t)$ theo thời gian.
- Tính xem khoang đạn có trồi lên mặt nước ($z > 100\text{m}$) thành công không? Vận tốc khi chạm mặt nước (break-out velocity) là bao nhiêu?
- Nộp Jupyter Notebook (`.ipynb`) kèm phân tích kết quả lên hệ thống E-learning của môn học trước kỳ học tuần 4.

---

## Bảng Đánh Giá Chấm Điểm / Assessment Rubric

| Hạng Mục / Criteria | Xuất Sắc / Distinction (≥ 85%) | Đạt / Pass (50% - 84%) | Chưa Đạt / Fail (< 50%) |
| :--- | :--- | :--- | :--- |
| **Kiến thức Lý thuyết (30%)** | Giải thích sâu sắc nguyên lý vật lý đằng sau phương trình Morison và added mass. Hiểu rành rọt Drag Crisis. | Ghi nhớ định nghĩa cơ bản các lực. Phân biệt được ma sát và áp suất. | Lẫn lộn giữa các khái niệm. Sai bản chất hiện tượng cavitation. |
| **Tính toán Phân Tích (30%)** | Đổi đơn vị không tì vết, áp dụng chính xác ITTC cho AUV, giải đúng bài toán cánh ngầm cực phức tạp, không thiếu Added mass. | Áp dụng đúng công thức $C_L, C_D$ cơ bản, phương trình tĩnh lực học. Sai số nhỏ gọn. | Sai ngay công thức định luật Newton 2 hoặc lộn số Reynolds giữa chiều dài và đường kính. |
| **Mô phỏng Python (40%)** | Code module hóa tốt, hàm mô phỏng ODE hoàn hảo, có bình luận giải thích, đồ thị Seaborn tuyệt đẹp, tự tin đánh giá kết quả động lực học. | Code chạy ra kết quả đúng. Vẽ được các plot yêu cầu dù chưa đẹp. Plot ra được đồ thị hàm bậc nhất/hai căn bản. | Code báo lỗi syntax, lỗi không hội tụ ODE, hoặc logic IF/ELSE cho lực cản vận tốc phi tuyến bị sai mấu chốt. |

*Tài liệu tham khảo bắt buộc / Mandatory Reading Materials:*
- *Fluid Mechanics - Frank M. White, Chapter 7 (Flow Past Immersed Bodies).*
- *Marine Hydrodynamics - J.N. Newman, MIT Press.*
- *Offshore Mechanics - Lecture Notes from Petrovietnam University (PVU).*
- *Numpy and Scipy Documentation for scientific computation.*

*--- Kết thúc tài liệu học tập tuần 3. Học viên vui lòng mang máy tính xách tay có cài sẵn Anaconda lên phòng Lab thực hành thủy lực học vào sáng Thứ Sáu. / End of week 3 document. Students please bring laptops with Anaconda installed to the hydrodynamics Lab this Friday morning. ---*

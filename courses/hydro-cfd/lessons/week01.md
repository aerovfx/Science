# Tuần 1: Giới Thiệu Cơ Học Chất Lỏng & Tính Chất Nước / Week 1: Introduction to Fluid Mechanics & Water Properties

Chào mừng các bạn đến với tuần đầu tiên của khóa học Mô phỏng Động lực học Lưu chất (CFD - Computational Fluid Dynamics) tập trung vào môi trường nước. Trong tuần này, chúng ta sẽ đặt nền móng kiến thức cơ bản về cơ học chất lỏng và tìm hiểu chi tiết về các tính chất vật lý của nước.
Welcome to the first week of the Computational Fluid Dynamics (CFD) course focusing on the water environment. In this week, we will lay the foundational knowledge of fluid mechanics and explore the physical properties of water in detail.

---

## Mục Tiêu / Learning Objectives

Kết thúc tuần học này, học viên có thể:
By the end of this week, students will be able to:

1. **Hiểu rõ định nghĩa và bản chất của lưu chất (fluid)**, phân biệt sự khác nhau cơ bản giữa chất rắn (solid) và lưu chất dưới tác dụng của lực cắt.
   **Understand the definition and nature of a fluid**, distinguishing the fundamental differences between solids and fluids under shear stress.
2. **Nắm vững các tính chất vật lý quan trọng của nước** và so sánh chúng với không khí, bao gồm khối lượng riêng (density), độ nhớt (viscosity), sức căng bề mặt (surface tension), và mô đun đàn hồi thể tích (bulk modulus).
   **Master the important physical properties of water** and compare them with air, including density, viscosity, surface tension, and bulk modulus.
3. **Hiểu được sự phụ thuộc vào nhiệt độ** của các tính chất vật lý của nước.
   **Understand the temperature dependence** of water's physical properties.
4. **Nhận biết và tính toán các số không thứ nguyên quan trọng** (dimensionless numbers) như Reynolds (Re), Froude (Fr), Weber (We), Euler (Eu), và số Cavitation (Ca), cũng như ý nghĩa vật lý của chúng trong các bài toán thực tế.
   **Recognize and calculate key dimensionless numbers** like Reynolds (Re), Froude (Fr), Weber (We), Euler (Eu), and Cavitation (Ca), as well as their physical significance in real-world problems.
5. **Phân biệt các trạng thái dòng chảy**: Tầng (laminar), chuyển tiếp (transitional), và rối (turbulent).
   **Distinguish flow regimes**: Laminar, transitional, and turbulent.
6. **Sử dụng Python** để tính toán và trực quan hóa (plot) sự thay đổi của độ nhớt theo nhiệt độ, cũng như tự động tính toán số Reynolds cho các kịch bản khác nhau.
   **Use Python** to calculate and visualize (plot) the variation of viscosity with temperature, and automate the calculation of the Reynolds number for various scenarios.
7. **Nắm bắt ý tưởng về Thể tích điều khiển (Control Volume) và Định lý Vận chuyển Reynolds (Reynolds Transport Theorem)**.
   **Grasp the concept of Control Volume and the Reynolds Transport Theorem**.
8. **Liên hệ lý thuyết với các ứng dụng kỹ thuật tại Việt Nam**, như thiết kế vỏ tàu, giàn khoan dầu khí, và các công trình thủy lợi.
   **Relate theory to engineering applications in Vietnam**, such as ship hull design, offshore oil platforms, and hydraulic structures.

---

## Phần Mềm & Công Cụ / Software & Tools

Để hoàn thành các bài tập và thực hành trong tuần này, bạn sẽ cần chuẩn bị các công cụ sau:
To complete the exercises and labs this week, you will need to prepare the following tools:

- **Python 3.8+**: Ngôn ngữ lập trình chính để thực hiện tính toán. / The primary programming language for calculations.
- **Jupyter Notebook / Google Colab**: Môi trường viết code tương tác, rất tốt để ghi chép và hiển thị đồ thị. / Interactive coding environment, excellent for notes and plotting.
- **Thư viện Python (Python Libraries)**:
  - `numpy`: Xử lý mảng và tính toán toán học. / Array manipulation and mathematical calculations.
  - `matplotlib`: Vẽ đồ thị. / Plotting graphs.
  - `scipy` (Tùy chọn/Optional): Các hàm tính toán khoa học nâng cao. / Advanced scientific computing functions.
- **Notepad++ hoặc VS Code**: Trình soạn thảo văn bản để xem các tệp dữ liệu (nếu cần). / Text editor for viewing data files (if needed).

*Lưu ý:* Việc cài đặt Anaconda là một giải pháp trọn gói khuyến nghị cho người mới bắt đầu.
*Note:* Installing Anaconda is a recommended all-in-one solution for beginners.

---

## Lý Thuyết / Theory

### 1. CFD Là Gì? Ứng Dụng Kỹ Thuật / What is CFD? Engineering Applications

**Mô phỏng Động lực học Lưu chất (CFD - Computational Fluid Dynamics)** là một nhánh của cơ học chất lỏng sử dụng phân tích số (numerical analysis) và cấu trúc dữ liệu để phân tích và giải quyết các vấn đề liên quan đến dòng chảy của chất lỏng và chất khí. Máy tính được sử dụng để thực hiện các tính toán mô phỏng sự tương tác của chất lỏng và chất khí với các bề mặt được xác định bởi điều kiện biên (boundary conditions).
**Computational Fluid Dynamics (CFD)** is a branch of fluid mechanics that uses numerical analysis and data structures to analyze and solve problems that involve fluid flows. Computers are used to perform the calculations required to simulate the free-flow interaction of liquids and gases with surfaces defined by boundary conditions.

**Tại sao CFD lại quan trọng trong kỹ thuật? / Why is CFD important in engineering?**
Thay vì phải xây dựng các mô hình vật lý đắt tiền (tỷ lệ thu nhỏ hoặc kích thước thật) và đưa vào bể thử mô hình (towing tank) hay ống phóng thủy động (water tunnel), kỹ sư có thể thử nghiệm hàng trăm thiết kế trên máy tính. Điều này tiết kiệm thời gian, chi phí và cung cấp cái nhìn chi tiết vào bên trong dòng chảy mà các cảm biến vật lý khó có thể đo đạc được (ví dụ: phân bố áp suất bề mặt, vùng rẽ nước, dòng xoáy).
Instead of building expensive physical models (scaled or full-size) and putting them in a towing tank or water tunnel, engineers can test hundreds of designs on a computer. This saves time, cost, and provides detailed insights into the flow field that physical sensors might struggle to measure (e.g., surface pressure distribution, wake regions, vortices).

**Các Ứng dụng Tiêu biểu (Đặc biệt trong Môi trường Nước) / Typical Applications (Especially in Water Environment):**
- **Thiết kế vỏ tàu (Ship Hull Design)**: Tối ưu hóa hình dáng để giảm sức cản, tiết kiệm nhiên liệu. Phân tích hiện tượng tạo sóng (wave making).
- **Tàu ngầm & ROV (Submarines & Remotely Operated Vehicles)**: Tính toán lực cản, thiết kế cánh ngầm (hydroplanes), phân tích dòng chảy qua chân vịt để tránh tạo bọt khí (cavitation) gây tiếng ồn.
- **Cánh ngầm (Hydrofoil)**: Thiết kế cánh tạo lực nâng dưới nước, mô phỏng quá trình tàu nhấc lên khỏi mặt nước.
- **Đập & Công trình thủy lợi (Dams & Hydraulic Structures)**: Mô phỏng lưu lượng tràn qua đập, xói lở đáy sông, lực tác dụng lên cửa van.
- **Hệ thống đường ống (Piping Systems)**: Tính toán tổn thất áp suất, hiện tượng búa nước (water hammer), phân phối lưu lượng qua các van và ống góp (manifold).

### 2. Phân Biệt Lưu Chất và Chất Rắn / Fluid vs Solid

**Lưu chất (Fluid)** bao gồm cả chất lỏng và chất khí. Điểm khác biệt lớn nhất giữa lưu chất và chất rắn nằm ở cách chúng phản ứng với **lực cắt (shear force / shear stress)**.
A **fluid** includes both liquids and gases. The biggest difference between a fluid and a solid lies in how they react to **shear force / shear stress**.

- **Chất rắn (Solid)**: Khi chịu tác dụng của một lực cắt không đổi, chất rắn sẽ biến dạng một góc tĩnh (static deformation) và dừng lại khi lực đàn hồi cân bằng với lực tác dụng.
  **Solid**: When subjected to a constant shear stress, a solid will deform by a static angle and stop when the elastic restoring force balances the applied force.
- **Lưu chất (Fluid)**: Là môi trường liên tục (continuous medium), không có hình dạng cố định. Khi chịu TẤT CẢ các lực cắt, dù nhỏ đến đâu, lưu chất sẽ **biến dạng liên tục** (tức là chảy). Nó không thể chịu được lực cắt khi ở trạng thái nghỉ.
  **Fluid**: It is a continuous medium with no fixed shape. When subjected to ANY shear stress, no matter how small, a fluid will **deform continuously** (i.e., flow). It cannot sustain a shear stress when at rest.

Lực cắt $\tau$ (tau) trong lưu chất có liên hệ chặt chẽ với tốc độ biến dạng (rate of shear strain), thường được biểu diễn thông qua định luật độ nhớt của Newton.
The shear stress $\tau$ (tau) in a fluid is closely related to the rate of shear strain, often expressed through Newton's law of viscosity.

### 3. Tính Chất Nước vs Không Khí / Water Properties vs Air

Nước và không khí là hai lưu chất phổ biến nhất, nhưng chúng có đặc điểm vật lý rất khác nhau, ảnh hưởng lớn đến cách ta thiết lập bài toán CFD.
Water and air are the two most common fluids, but they have very different physical characteristics, greatly affecting how we set up CFD problems.

1. **Khối lượng riêng (Density - $\rho$)**:
   - Nước: $\approx 1000 \text{ kg/m}^3$
   - Không khí: $\approx 1.225 \text{ kg/m}^3$ (ở điều kiện tiêu chuẩn).
   - *Ý nghĩa*: Nước đặc hơn không khí khoảng 816 lần. Do đó, lực cản và lực nâng trong nước lớn hơn rất nhiều so với không khí ở cùng một vận tốc.
2. **Độ nhớt động lực học (Dynamic Viscosity - $\mu$)**: Biểu thị sức cản nội tại chống lại sự chảy.
   - Nước: $\approx 1.0 \times 10^{-3} \text{ Pa}\cdot\text{s}$ (ở 20°C).
   - Không khí: $\approx 1.8 \times 10^{-5} \text{ Pa}\cdot\text{s}$.
   - *Ý nghĩa*: Nước "nhớt" hơn không khí khoảng 55 lần.
3. **Độ nhớt động học (Kinematic Viscosity - $\nu = \mu / \rho$)**:
   - Nước: $\approx 1.0 \times 10^{-6} \text{ m}^2/\text{s}$.
   - Không khí: $\approx 1.5 \times 10^{-5} \text{ m}^2/\text{s}$.
   - *Lưu ý thú vị*: Mặc dù $\mu$ của nước lớn hơn, nhưng do $\rho$ của nước lớn hơn rất nhiều, $\nu$ của không khí lại lớn hơn nước khoảng 15 lần! Điều này ảnh hưởng trực tiếp đến số Reynolds.
4. **Mô đun đàn hồi thể tích (Bulk Modulus - $K$)**: Đặc trưng cho tính nén được (compressibility).
   - Nước: $K \approx 2.2 \text{ GPa}$. Nước cực kỳ khó nén. Trong hầu hết các bài toán CFD (trừ sóng xung kích dưới nước), nước được coi là **không nén được (incompressible)**.
   - Không khí: $K \approx 101 \text{ kPa}$ (đẳng nhiệt). Không khí dễ nén khi vận tốc tiếp cận tốc độ âm thanh (Mach > 0.3).
5. **Tốc độ âm thanh (Speed of Sound - $c$)**: $c = \sqrt{K/\rho}$
   - Nước: $\approx 1500 \text{ m/s}$.
   - Không khí: $\approx 340 \text{ m/s}$.

### 4. Sự Phụ Thuộc Vào Nhiệt Độ / Temperature Dependence of Water Properties

Không giống như không khí lý tưởng, tính chất của nước không thay đổi nhiều theo áp suất (ở các điều kiện thông thường), nhưng thay đổi đáng kể theo nhiệt độ.
Unlike an ideal gas, water's properties do not change much with pressure (under ordinary conditions) but change significantly with temperature.

- **Khối lượng riêng**: Nước đạt mật độ tối đa ở khoảng $4^\circ\text{C}$ ($999.97 \text{ kg/m}^3$). Khi nóng hơn hoặc lạnh hơn (đóng băng), mật độ giảm.
- **Độ nhớt**: Khi nhiệt độ tăng, độ nhớt của nước **giảm**. Điều này khác với chất khí (độ nhớt của khí tăng khi nhiệt độ tăng do sự gia tăng va chạm phân tử). Trong nước lỏng, nhiệt độ cao làm phá vỡ các liên kết hydro, giúp các phân tử trượt lên nhau dễ dàng hơn.

Một phương trình thực nghiệm phổ biến để tính độ nhớt động lực học của nước $\mu(T)$ theo nhiệt độ $T$ (Kelvin) là phương trình Vogel-Fulcher-Tammann (VFT) hoặc các công thức nội suy tương tự.
A common empirical equation for calculating dynamic viscosity of water $\mu(T)$ as a function of temperature $T$ (Kelvin) is the Vogel-Fulcher-Tammann (VFT) equation or similar interpolation formulas.

### 5. Số Không Thứ Nguyên / Dimensionless Numbers

Trong CFD, các số không thứ nguyên là công cụ cực kỳ quan trọng để đánh giá mức độ tương đối của các lực khác nhau trong dòng chảy, cho phép mở rộng quy mô từ mô hình nhỏ lên tỷ lệ thật (scaling).
In CFD, dimensionless numbers are crucial tools for evaluating the relative magnitude of different forces in a flow, allowing scaling from small models to full size.

1. **Số Reynolds (Reynolds Number - $Re$)**: Đặc trưng cho tỷ lệ giữa **Lực quán tính (Inertial forces)** và **Lực nhớt (Viscous forces)**.
   $$ Re = \frac{\rho V L}{\mu} = \frac{V L}{\nu} $$
   *(V: vận tốc đặc trưng, L: chiều dài đặc trưng)*
   - $Re$ thấp: Lực nhớt chiếm ưu thế (Dòng chảy tầng).
   - $Re$ cao: Lực quán tính chiếm ưu thế (Dòng chảy rối).

2. **Số Froude (Froude Number - $Fr$)**: Đặc trưng cho tỷ lệ giữa **Lực quán tính** và **Trọng lực (Gravity forces)**. Rất quan trọng đối với tàu chạy trên mặt nước (tạo sóng).
   $$ Fr = \frac{V}{\sqrt{g L}} $$
   *(g: gia tốc trọng trường)*

3. **Số Weber (Weber Number - $We$)**: Đặc trưng cho tỷ lệ giữa **Lực quán tính** và **Sức căng bề mặt (Surface tension)**. Quan trọng trong hiện tượng phun hạt, tạo bọt, sóng mao dẫn.
   $$ We = \frac{\rho V^2 L}{\sigma} $$
   *($\sigma$: hệ số sức căng bề mặt)*

4. **Số Euler (Euler Number - $Eu$)**: Đặc trưng cho tỷ lệ giữa **Lực áp suất** và **Lực quán tính**.
   $$ Eu = \frac{\Delta p}{\frac{1}{2}\rho V^2} $$

5. **Số Cavitation (Cavitation Number - $Ca$ hoặc $\sigma_c$)**: Biểu thị khả năng xảy ra hiện tượng tạo khoang (sôi cục bộ do áp suất giảm thấp hơn áp suất hóa hơi).
   $$ Ca = \frac{p - p_v}{\frac{1}{2}\rho V^2} $$
   *(p: áp suất dòng chảy tự do, $p_v$: áp suất hóa hơi của nước)*. Khi $Ca < 1$, nguy cơ cavitation rất cao.

### 6. Trạng Thái Dòng Chảy / Flow Regimes

Dựa vào số Reynolds, ta phân loại dòng chảy thành 3 trạng thái:
Based on the Reynolds number, we classify flow into 3 regimes:

- **Laminar Flow (Dòng chảy tầng)**: Các lớp chất lỏng trượt lên nhau êm ái, không có sự pha trộn giữa các lớp. Đường dòng (streamlines) rõ ràng, ổn định. Xảy ra ở vận tốc thấp hoặc độ nhớt cao ($Re$ thấp, ví dụ dòng chảy trong ống $Re < 2300$).
- **Transitional Flow (Dòng chuyển tiếp)**: Giai đoạn trung gian, dòng chảy bắt đầu xuất hiện những dao động và sự mất ổn định nhất định.
- **Turbulent Flow (Dòng chảy rối)**: Dòng chảy hỗn loạn, biến động mạnh theo thời gian và không gian. Có sự pha trộn mạnh mẽ của động lượng, khối lượng và nhiệt độ thông qua các xoáy (eddies) với nhiều kích cỡ khác nhau. Hầu hết các ứng dụng kỹ thuật thực tế (tàu thủy, đập nước) đều là dòng chảy rối ($Re$ rất cao).

### 7. Lưu Chất Newton và Phi Newton / Newtonian vs Non-Newtonian

- **Lưu chất Newton (Newtonian fluid)**: Nước và không khí. Mối quan hệ giữa lực cắt ($\tau$) và tốc độ biến dạng ($du/dy$) là tuyến tính. Độ nhớt ($\mu$) là hằng số (ở nhiệt độ và áp suất cho trước), không phụ thuộc vào lực tác dụng mạnh hay yếu.
  $$ \tau = \mu \frac{du}{dy} $$
- **Lưu chất Phi Newton (Non-Newtonian fluid)**: Bùn, kem đánh răng, sơn, máu. Độ nhớt thay đổi khi chịu lực cắt. (Ví dụ: bột bắp pha nước - oobleck - cứng lại khi bị đấm mạnh). Trong khóa học này, chúng ta giả định nước luôn là lưu chất Newton.

### 8. Thể Tích Điều Khiển & Định Lý RTT / Control Volume & Reynolds Transport Theorem

Trong cơ học chất rắn, ta thường dùng phương pháp **Lagrange**: Theo dõi một hệ thống hạt rắn cụ thể khi nó chuyển động.
In solid mechanics, we often use the **Lagrangian** approach: Tracking a specific system of solid particles as it moves.

Trong cơ học lưu chất, theo dõi hàng tỷ phần tử nước di chuyển là bất khả thi. Thay vào đó, ta dùng phương pháp **Euler**: Xác định một vùng không gian cố định gọi là **Thể tích điều khiển (Control Volume - CV)** và quan sát lưu chất chảy ra, chảy vào vùng đó.
In fluid mechanics, tracking billions of water particles is impossible. Instead, we use the **Eulerian** approach: Define a fixed region in space called a **Control Volume (CV)** and observe the fluid flowing in and out of it.

**Định lý Vận chuyển Reynolds (RTT)** là cầu nối giữa hai phương pháp này. Nó biểu diễn sự thay đổi của một đại lượng (như khối lượng, động lượng) bên trong một hệ thống hạt (Lagrange) thành sự biến thiên theo thời gian của đại lượng đó bên trong Control Volume cộng với lượng ròng đi qua bề mặt điều khiển (Control Surface - CS).
The **Reynolds Transport Theorem (RTT)** is the bridge between these two approaches. It expresses the rate of change of an extensive property (like mass, momentum) of a system (Lagrangian) in terms of the time rate of change of that property within a Control Volume plus the net flux of the property across the Control Surface (CS).

Phương trình tổng quát cho một đại lượng $B$ (với $b = B/m$ là đại lượng trên một đơn vị khối lượng):
$$ \frac{dB_{sys}}{dt} = \frac{d}{dt} \int_{CV} \rho b \, dV + \int_{CS} \rho b (\vec{V} \cdot \vec{n}) \, dA $$

RTT là nền tảng để thiết lập các phương trình bảo toàn khối lượng (Phương trình liên tục), bảo toàn động lượng (Phương trình Navier-Stokes), và bảo toàn năng lượng.

### 9. Showcase Ứng Dụng Tại Việt Nam / Applications Showcase in Vietnam

Kỹ thuật thủy động lực học có tính ứng dụng to lớn tại Việt Nam, một quốc gia với bờ biển dài và mạng lưới sông ngòi dày đặc:
Hydrodynamics engineering has massive applications in Vietnam, a country with a long coastline and a dense network of rivers:

- **Đóng tàu (Shipbuilding)**: Công ty đóng tàu Hạ Long, nhà máy đóng tàu Hòa Phát, Vietship. Sử dụng CFD để tối ưu hóa tuyến hình vỏ tàu, giảm sức cản, thiết kế chân vịt hiệu suất cao phù hợp với điều kiện vận hành tại Việt Nam.
- **Dầu khí ngoài khơi (Offshore Oil & Gas)**: Vietsovpetro, PTSC. Mô phỏng tải trọng sóng, dòng chảy lên các giàn khoan ngoài khơi (jacket platforms, FPSO) để đảm bảo độ bền kết cấu trong điều kiện bão.
- **Công trình thủy điện / Thủy lợi (Hydropower / Hydraulic Structures)**: Đập thủy điện Hòa Bình, Sơn La. Đánh giá khả năng xả lũ, thiết kế tiêu năng đập tràn để ngăn ngừa xói lở hạ lưu, ảnh hưởng đến đê điều.
- **Phương tiện dưới nước (Underwater Vehicles)**: Phát triển các loại ROV (robot điều khiển từ xa) dùng để kiểm tra cáp ngầm, đường ống dầu khí biển.

---

## Ví Dụ Tính Toán / Worked Examples

**Ví dụ 1: Tính toán số Reynolds cho một tàu ngầm**
**Example 1: Calculating Reynolds Number for a Submarine**

Một tàu ngầm mini có chiều dài $L = 15$ mét đang di chuyển ở độ sâu 50m trong vùng biển Việt Nam với tốc độ 12 knots (hải lý/giờ). Nhiệt độ nước biển khoảng 20°C.
A mini submarine of length $L = 15$ meters is traveling at a depth of 50m in Vietnamese waters at a speed of 12 knots. The seawater temperature is approximately 20°C.

**Yêu cầu / Required:** Tính số Reynolds của dòng chảy quanh tàu ngầm. Đánh giá trạng thái dòng chảy. (Biết $1 \text{ knot} = 0.5144 \text{ m/s}$, độ nhớt động học của nước biển ở 20°C $\nu \approx 1.05 \times 10^{-6} \text{ m}^2/\text{s}$).

**Lời giải / Solution:**
1. Đổi đơn vị vận tốc / Convert velocity unit:
   $V = 12 \times 0.5144 = 6.1728 \text{ m/s}$
2. Áp dụng công thức số Reynolds / Apply Reynolds number formula:
   $$ Re = \frac{V \cdot L}{\nu} = \frac{6.1728 \times 15}{1.05 \times 10^{-6}} $$
   $$ Re = \frac{92.592}{1.05 \times 10^{-6}} \approx 88,182,857 \approx 8.82 \times 10^7 $$
3. **Đánh giá / Conclusion:**
   Giá trị $Re \approx 8.8 \times 10^7$ là cực kỳ lớn ($Re \gg 10^5$). Dòng chảy xung quanh phần lớn vỏ tàu ngầm chắc chắn ở trạng thái **rối (turbulent)**. Lớp biên (boundary layer) sẽ chuyển từ tầng sang rối rất nhanh ở mũi tàu. Do đó, khi mô phỏng CFD, bắt buộc phải sử dụng các mô hình rối (Turbulence Models) như k-$\epsilon$ hoặc k-$\omega$ SST.

---

## Code Python / Python Code

Dưới đây là một đoạn code Python đầy đủ để phục vụ cho buổi thực hành (Lab).
Below is a complete Python script to be used in the Lab session.

```python
import numpy as np
import matplotlib.pyplot as plt

# ---------------------------------------------------------
# PART 1: Plotting Water Viscosity vs Temperature
# ---------------------------------------------------------
def water_dynamic_viscosity(T_celsius):
    """
    Calculate dynamic viscosity of liquid water (Pa.s) 
    using an empirical correlation.
    Valid approximately for 0 < T < 100 Celsius.
    """
    T_k = T_celsius + 273.15
    # Empirical formula (simplified for demonstration)
    # A = 2.414e-5, B = 247.8, C = 140
    # mu = A * 10^(B / (T_k - C))
    A = 2.414e-5
    B = 247.8
    C = 140.0
    mu = A * (10 ** (B / (T_k - C)))
    return mu

def water_density(T_celsius):
    """
    Calculate water density (kg/m^3) at normal pressure.
    """
    # Simple polynomial approximation
    T = T_celsius
    rho = 1000 * (1 - (T + 288.9414)/(508929.2 * (T + 68.12963)) * (T - 3.9863)**2)
    return rho

# Generate temperature array from 0 to 100 C
temps = np.linspace(0, 100, 100)
viscosities_dynamic = water_dynamic_viscosity(temps)
densities = water_density(temps)
viscosities_kinematic = viscosities_dynamic / densities

# Plot dynamic viscosity
plt.figure(figsize=(10, 5))
plt.plot(temps, viscosities_dynamic * 1000, 'b-', linewidth=2) # Convert to mPa.s for better readability
plt.title('Water Dynamic Viscosity vs Temperature')
plt.xlabel('Temperature (°C)')
plt.ylabel('Dynamic Viscosity (mPa.s)')
plt.grid(True)
plt.show()

# Plot kinematic viscosity
plt.figure(figsize=(10, 5))
plt.plot(temps, viscosities_kinematic * 1e6, 'r-', linewidth=2) # Convert to mm^2/s
plt.title('Water Kinematic Viscosity vs Temperature')
plt.xlabel('Temperature (°C)')
plt.ylabel('Kinematic Viscosity (mm²/s)')
plt.grid(True)
plt.show()

# ---------------------------------------------------------
# PART 2: Calculating Reynolds Number for 10 Scenarios
# ---------------------------------------------------------
print("\n--- Reynolds Number Calculation for 10 Scenarios ---")

# Define 10 scenarios: (Name, Velocity (m/s), Length (m), Temperature (°C))
scenarios = [
    ("Tiny fish swimming", 0.05, 0.02, 25),
    ("Pipe flow (home plumbing)", 1.5, 0.015, 20),
    ("River stream", 1.0, 5.0, 15),
    ("Small RC Boat", 2.0, 0.5, 25),
    ("Olympic swimmer", 2.0, 1.8, 26),
    ("Submarine (cruising)", 6.0, 50.0, 10),
    ("Hydrofoil ferry", 15.0, 30.0, 25),
    ("Oil rig platform leg (current)", 1.2, 2.0, 15),
    ("ROV propeller blade", 10.0, 0.1, 5),
    ("Tsunami wave (approx shallow)", 200.0, 100.0, 20)
]

print(f"{'Scenario Name':<30} | {'Re Number':<12} | {'Flow Regime'}")
print("-" * 65)

for name, V, L, T in scenarios:
    nu = water_dynamic_viscosity(T) / water_density(T)
    Re = (V * L) / nu
    
    # Simple rule of thumb for flow regime (highly context-dependent, 
    # but let's use a generic Re threshold for external flow here: 5e5)
    if Re < 2300: # Assuming pipe-like for the tiny ones, just as a placeholder logic
        regime = "Laminar/Low-Re"
    elif Re < 500000:
        regime = "Transitional/Mixed"
    else:
        regime = "Turbulent"
        
    print(f"{name:<30} | {Re:<12.2e} | {regime}")
```

---

## Thực Hành / Lab Activity

**Yêu cầu chung / General Requirements:**
1. Mở Jupyter Notebook / Google Colab. Mở một notebook mới có tên `Week01_FluidProperties.ipynb`.
   Open Jupyter Notebook / Google Colab. Create a new notebook named `Week01_FluidProperties.ipynb`.
2. Copy đoạn code Python ở phần trên vào notebook và thực thi (Run).
   Copy the Python code provided above into the notebook and execute it.
3. Quan sát đồ thị biểu diễn độ nhớt của nước thay đổi theo nhiệt độ.
   Observe the plot showing how water viscosity changes with temperature.
4. Đọc kết quả bảng tính số Reynolds cho 10 kịch bản.
   Read the output table of Reynolds numbers for the 10 scenarios.

**Nhiệm vụ mở rộng (Bonus Task):**
- Chọn một kịch bản từ bảng trên (ví dụ: Tàu ngầm). Hãy thay đổi nhiệt độ nước từ 5°C (vùng biển lạnh) lên 30°C (vùng biển nhiệt đới) và tính toán lại sự thay đổi của số Reynolds. Chênh lệch là bao nhiêu phần trăm?
- Choose one scenario from the table (e.g., Submarine). Change the water temperature from 5°C (cold sea) to 30°C (tropical sea) and recalculate the change in the Reynolds number. What is the percentage difference?
- *Gợi ý thảo luận*: Điều này ảnh hưởng thế nào đến lực cản ma sát (frictional resistance) của vỏ tàu khi đi từ Bắc Băng Dương về Biển Đông?
- *Discussion hint*: How does this affect the frictional resistance of the ship hull when traveling from the Arctic Ocean to the South China Sea?

---

## ⚠️ Lỗi Thường Gặp / Common Mistakes

1. **Nhầm lẫn giữa độ nhớt động lực học ($\mu$) và độ nhớt động học ($\nu$)**: Trong công thức số Reynolds, nếu dùng $\mu$, tử số phải có khối lượng riêng $\rho$ ($Re = \rho V L / \mu$). Nếu dùng $\nu$, tử số không có $\rho$ ($Re = V L / \nu$). Kỹ sư mới thường quên nhân $\rho$ khi dùng $\mu$.
   **Confusing dynamic viscosity ($\mu$) and kinematic viscosity ($\nu$)**: In the Reynolds number formula, if you use $\mu$, the numerator must include density $\rho$ ($Re = \rho V L / \mu$). If you use $\nu$, there is no $\rho$ ($Re = V L / \nu$). Novice engineers often forget to multiply by $\rho$ when using $\mu$.
2. **Sai đơn vị (Unit Mismatch)**: Vận tốc tính bằng knot, km/h nhưng quên không đổi ra m/s. Chiều dài bằng mm nhưng không đổi ra m. Lời khuyên: LUÔN sử dụng hệ đơn vị SI trong tính toán trung gian.
   **Unit Mismatch**: Using velocity in knots or km/h but forgetting to convert to m/s. Length in mm not converted to m. Advice: ALWAYS use SI units in intermediate calculations.
3. **Mặc định nước là lưu chất nén được ở tốc độ thấp**: Kích hoạt mô hình giải compressible cho dòng nước ở tốc độ 10 m/s sẽ làm bộ giải (solver) chạy cực kỳ chậm và dễ bị phân kỳ (diverge) mà không mang lại lợi ích gì. Chỉ xét tính nén được của nước (compressible) trong bài toán va đập thủy động cực mạnh hoặc sóng xung kích (shockwaves).
   **Defaulting water to compressible flow at low speeds**: Turning on a compressible solver for a water flow at 10 m/s will make the solver extremely slow and prone to divergence without any benefit. Only consider water compressibility in problems of extreme hydrodynamic impact or underwater shockwaves.
4. **Nhầm lẫn về nhiệt độ nước biển**: Trong mô phỏng biển sâu, nhiệt độ nước không phải 20°C mà thường ở mức 4°C. Tại nhiệt độ này mật độ đạt cực đại, độ nhớt cũng cao hơn đáng kể so với nước ấm mặt biển, làm thay đổi số Reynolds hàng chục phần trăm.
   **Misunderstanding seawater temperature**: In deep-sea simulations, water temperature is not 20°C but often around 4°C. At this temperature, density is at its maximum, and viscosity is significantly higher than warm surface water, changing the Reynolds number by tens of percent.

---

## Câu Hỏi Thảo Luận / Discussion (5 questions)

Hãy thảo luận với bạn học hoặc suy nghĩ về các câu hỏi sau:
Discuss with your peers or think about the following questions:

1. **Đường ống hẹp vs. Sông rộng**: Tại sao dòng chảy trong đường ống nhỏ ở nhà thường là dòng chảy tầng (laminar), nhưng dòng chảy của một con sông dù chảy rất chậm lại hầu như luôn là dòng chảy rối (turbulent)? Hãy giải thích dựa trên số Reynolds.
   **Narrow pipe vs. Wide river**: Why is the flow in a small house pipe often laminar, but the flow of a very slow-moving river is almost always turbulent? Explain based on the Reynolds number.
2. **Kích thước mô hình**: Nếu bạn muốn thử nghiệm mô hình một con tàu trong bể thử (towing tank), bạn phải giữ nguyên số Froude ($Fr$) giữa tàu thật và mô hình. Theo định nghĩa $Fr$, điều gì sẽ xảy ra với vận tốc kéo mô hình (khi chiều dài mô hình rất nhỏ so với tàu thật)?
   **Model scaling**: If you want to test a ship model in a towing tank, you must keep the Froude number ($Fr$) the same between the full-scale ship and the model. According to the definition of $Fr$, what happens to the towing speed of the model (given the model length is much smaller than the real ship)?
3. **Chân vịt tàu**: Tại sao chân vịt tàu biển thường bị rỗ, ăn mòn ở rìa cánh sau một thời gian hoạt động, mặc dù cánh làm bằng hợp kim rất cứng? Gợi ý: Tìm hiểu về số Cavitation và sự thay đổi áp suất cục bộ.
   **Ship propellers**: Why do ship propellers often suffer from pitting and erosion at the blade edges after some time in operation, even though they are made of very hard alloys? Hint: Look into the Cavitation number and local pressure changes.
4. **Giọt nước vs Giọt mật khoảng không khí**: Khi rơi tự do trong không khí, hình dạng của giọt nước khác với giọt mật ong như thế nào? Những lực nào đang cạnh tranh với nhau định hình giọt chất lỏng?
   **Water drop vs Honey drop**: When falling freely in air, how does the shape of a water drop differ from a honey drop? What competing forces are shaping the liquid drop?
5. **CFD và Biến đổi khí hậu**: Ứng dụng mô phỏng cơ học lưu chất có thể giúp ích gì trong việc xây dựng các công trình chắn sóng bảo vệ đê biển tại Đồng bằng sông Cửu Long trước mực nước biển dâng?
   **CFD and Climate Change**: How can fluid mechanics simulation aid in designing breakwaters to protect sea dikes in the Mekong Delta against rising sea levels?

---

## Bài Về Nhà / Homework

1. **Đọc tài liệu (Reading)**: Đọc Chương 1 và 2 trong sách giáo khoa "Fluid Mechanics: Fundamentals and Applications" (Cengel & Cimbala) để củng cố lý thuyết.
   **Reading**: Read Chapters 1 and 2 in the textbook "Fluid Mechanics: Fundamentals and Applications" (Cengel & Cimbala) to reinforce the theory.
2. **Bài tập tính toán (Calculation Task)**: Một quả cầu thép (đường kính $D = 0.5$ mét) được kéo ngầm dưới nước ở độ sâu 10m với tốc độ 3 m/s. Nước ở 15°C.
   - Tính khối lượng riêng và độ nhớt động học của nước ở 15°C (sử dụng code Python ở trên để tra cứu).
   - Tính toán số Reynolds cho quả cầu. (Chiều dài đặc trưng là đường kính $D$).
   - Dòng chảy ở phía sau quả cầu (wake) dự kiến là dòng tầng hay rối?
   **Calculation Task**: A steel sphere (diameter $D = 0.5$ meters) is towed underwater at a depth of 10m with a speed of 3 m/s. Water is at 15°C.
   - Calculate the density and kinematic viscosity of water at 15°C (use the Python code above to find the values).
   - Calculate the Reynolds number for the sphere. (The characteristic length is the diameter $D$).
   - Is the flow behind the sphere (wake) expected to be laminar or turbulent?
3. **Mở rộng code Python (Python Extension)**: Viết thêm một hàm để tính toán **số Froude** và **số Weber**. Tạo một kịch bản cho một chiếc cano chạy trên mặt nước (tự giả định chiều dài, vận tốc) và in ra $Fr$ và $We$.
   **Python Extension**: Write an additional function to calculate the **Froude number** and **Weber number**. Create a scenario for a speedboat running on the water surface (assume length and velocity) and print out $Fr$ and $We$.

---

## Đánh Giá / Assessment Rubric

| Tiêu chí / Criteria | Xuất sắc / Excellent (9-10) | Khá / Good (7-8) | Trung bình / Average (5-6) | Yếu / Poor (<5) |
| :--- | :--- | :--- | :--- | :--- |
| **Tính toán (Calculation)** | Tính đúng 100%, trình bày rõ ràng các bước và đơn vị SI. / 100% correct, clearly presented steps and SI units. | Có sai sót nhỏ ở phép tính cuối nhưng phương pháp đúng. / Minor arithmetic errors but correct method. | Sai công thức hoặc nhầm lẫn đơn vị (VD: dùng $\mu$ thay vì $\nu$). / Wrong formula or unit mismatch. | Không làm hoặc sai hoàn toàn phương pháp. / Not attempted or completely wrong method. |
| **Code Python (Python Code)** | Hoàn thành đủ yêu cầu + Phần mở rộng hoạt động tốt, code sạch, có comment. / Completed all tasks + Extension works well, clean code, commented. | Code chạy được nhưng chưa tối ưu hoặc thiếu comment. / Code runs but not optimized or lacks comments. | Code có lỗi cú pháp nhưng sinh viên hiểu logic cơ bản. / Code has syntax errors but student understands logic. | Không viết được code hoặc copy/paste không chạy. / Cannot write code or copy/paste doesn't run. |
| **Thảo luận (Discussion)** | Trả lời sắc bén, liên hệ thực tế VN rất tốt, hiểu sâu vật lý. / Sharp answers, great VN real-world connection, deep physics insight. | Trả lời đầy đủ nhưng đôi chỗ thiếu độ sâu. / Complete answers but lacking depth in places. | Trả lời qua loa, chỉ chép lại lý thuyết suông. / Superficial answers, just copying theory. | Không tham gia hoặc không trả lời được. / No participation or unable to answer. |

---
*Tài liệu nội bộ khóa học CFD in Water - Tuần 1. Giảng viên / Instructor: [Your Name/Dept]*
*Internal Document for CFD in Water Course - Week 1.*

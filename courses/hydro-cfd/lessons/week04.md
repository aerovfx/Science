# Tuần 4: Lớp Biên & Mô Hình Rối / Week 4: Boundary Layer Theory & Turbulence Models

## Mục Tiêu / Learning Objectives

**Mục tiêu bài học (Vietnamese):**
Trong tuần thứ 4 của khóa học Thủy động lực học tính toán (CFD), chúng ta sẽ tập trung vào một trong những khái niệm quan trọng nhất trong cơ học lưu chất: Lớp biên (Boundary Layer) và cách mô phỏng dòng chảy rối (Turbulence Modeling). Sau khi hoàn thành bài học này, học viên sẽ có khả năng:
1. Hiểu sâu sắc về khái niệm lớp biên, sự hình thành và phát triển của lớp biên trên bề mặt vật thể rắn.
2. Nắm vững các công thức toán học tính toán bề dày lớp biên cho cả hai trường hợp dòng chảy tầng (laminar) và dòng chảy rối (turbulent).
3. Ứng dụng lý thuyết lớp biên vào bài toán thực tế: phân tích dòng chảy quanh vỏ tàu ngầm.
4. Nắm bắt khái niệm các biến số tại vách (wall variables) đặc biệt là y+, định luật thành vách (law of the wall), lớp nhớt phụ (viscous sublayer) và vùng log-law.
5. Giải thích được dòng thác năng lượng Kolmogorov (Kolmogorov cascade) và sự khác biệt giữa các phương pháp mô phỏng: DNS, LES, và RANS.
6. Hiểu cấu trúc toán học và ưu nhược điểm của các mô hình rối RANS phổ biến: k-epsilon, k-omega SST, Spalart-Allmaras.
7. Lựa chọn đúng giá trị y+ cho việc sử dụng hàm vách (wall functions) hay giải trực tiếp đến vách (low-Re approach).
8. Lập trình Python tính toán bề dày lớp biên và ước tính giá trị y+ cho quá trình tạo lưới lưới (meshing).

**Learning Objectives (English):**
In the fourth week of our Computational Fluid Dynamics (CFD) course, we will focus on one of the most critical concepts in fluid mechanics: the Boundary Layer and Turbulence Modeling. Upon completing this lesson, students will be able to:
1. Deeply understand the boundary layer concept, its formation, and development on a solid surface.
2. Master the mathematical formulas for calculating boundary layer thickness for both laminar and turbulent flows.
3. Apply boundary layer theory to a practical problem: analyzing flow around a submarine hull.
4. Grasp the concept of wall variables, especially y+, the law of the wall, viscous sublayer, and log-law region.
5. Explain the Kolmogorov energy cascade and the differences between simulation approaches: DNS, LES, and RANS.
6. Understand the mathematical structure and pros/cons of common RANS turbulence models: k-epsilon, k-omega SST, Spalart-Allmaras.
7. Correctly select the y+ value for using wall functions versus the low-Re approach (resolving to the wall).
8. Program in Python to calculate boundary layer thickness and estimate the y+ value for the meshing process.

---

## Phần Mềm & Công Cụ / Software & Tools

**Công cụ cần thiết (Vietnamese):**
- **Python 3.8+**: Cài đặt sẵn trên máy tính với các thư viện `numpy`, `matplotlib`, và `scipy` để thực hiện các tính toán lý thuyết và trực quan hóa.
- **Phần mềm CFD (OpenFOAM hoặc ANSYS Fluent)**: Dùng để thiết lập bài toán kiểm chứng các mô hình rối khác nhau.
- **Phần mềm tạo lưới (Pointwise, GMSH hoặc ANSYS Meshing)**: Cần thiết để tạo lưới có độ phân giải cao tại vách (inflation layers) nhằm đạt được y+ mong muốn.
- **Trình soạn thảo mã (VS Code / Jupyter Notebook)**: Môi trường viết và thực thi mã Python.

**Required Tools (English):**
- **Python 3.8+**: Pre-installed with `numpy`, `matplotlib`, and `scipy` libraries for theoretical calculations and visualization.
- **CFD Software (OpenFOAM or ANSYS Fluent)**: Used to set up validation cases for different turbulence models.
- **Meshing Software (Pointwise, GMSH, or ANSYS Meshing)**: Required for creating high-resolution wall meshes (inflation layers) to achieve the target y+.
- **Code Editor (VS Code / Jupyter Notebook)**: Environment for writing and executing Python code.

---

## Lý Thuyết / Theory

### 1. Khái Niệm Lớp Biên / Boundary Layer Concept

**Tiếng Việt:**
Lớp biên (Boundary Layer) là vùng chất lưu nằm sát bề mặt vật rắn, nơi hiệu ứng nhớt (viscous effects) đóng vai trò chi phối. Khái niệm này được Ludwig Prandtl giới thiệu vào năm 1904, tạo ra một bước ngoặt lớn trong cơ học lưu chất. Ở bên ngoài lớp biên, dòng chảy có thể được coi là không nhớt (inviscid) và tuân theo phương trình Euler. Bên trong lớp biên, vận tốc của dòng chảy giảm dần từ vận tốc dòng tự do (free-stream velocity) $U_\infty$ xuống $0$ tại vách (điều kiện không trượt - no-slip condition).

**English:**
The Boundary Layer is the region of fluid immediately adjacent to a solid surface where viscous effects are dominant. This concept was introduced by Ludwig Prandtl in 1904, creating a massive breakthrough in fluid mechanics. Outside the boundary layer, the flow can be considered inviscid and governed by the Euler equations. Inside the boundary layer, the flow velocity gradually decreases from the free-stream velocity $U_\infty$ to $0$ at the wall (no-slip condition).

#### Công thức bề dày lớp biên (Boundary Layer Thickness Formulas)

Bề dày lớp biên, ký hiệu là $\delta$, thường được định nghĩa là khoảng cách từ vách đến vị trí mà vận tốc đạt 99% vận tốc dòng tự do ($u = 0.99 U_\infty$).
*The boundary layer thickness, denoted as $\delta$, is usually defined as the distance from the wall to the point where the velocity reaches 99% of the free-stream velocity.*

1. **Dòng chảy tầng trên tấm phẳng (Laminar Flow on a Flat Plate):**
   Sử dụng lời giải chính xác Blasius (Blasius exact solution):
   $$ \delta = \frac{5.0 \cdot x}{\sqrt{Re_x}} $$
   Trong đó (Where):
   - $x$ là khoảng cách từ mép dẫn (distance from leading edge).
   - $Re_x = \frac{\rho U_\infty x}{\mu} = \frac{U_\infty x}{\nu}$ là số Reynolds cục bộ (local Reynolds number).
   - $\nu$ là độ nhớt động học (kinematic viscosity).

2. **Dòng chảy rối trên tấm phẳng (Turbulent Flow on a Flat Plate):**
   Sử dụng xấp xỉ theo định luật 1/7 (1/7th power law approximation):
   $$ \delta \approx \frac{0.37 \cdot x}{Re_x^{1/5}} $$
   Hoặc một biến thể phổ biến trong kỹ thuật (Or a common engineering variant):
   $$ \delta \approx \frac{0.382 \cdot x}{Re_x^{0.2}} $$

### 2. Lớp Biên Trên Vỏ Tàu Ngầm / Boundary Layer on Submarine Hull

**Tiếng Việt:**
Trong kỹ thuật hàng hải tại Việt Nam (ví dụ: đóng tàu biển hoặc tàu ngầm không người lái AUV dùng để khảo sát thềm lục địa), việc dự đoán lớp biên là cực kỳ quan trọng để tính toán lực cản ma sát (skin friction drag). Vỏ tàu ngầm có hình dạng thon thả (streamlined). Ban đầu, lớp biên ở mũi tàu là dòng tầng (laminar). Khi chuyển động về phía đuôi, do số Reynolds tăng, lớp biên chuyển pha sang rối (transition to turbulence). Lớp biên rối có bề dày tăng nhanh hơn và tạo ra ứng suất cắt tại vách (wall shear stress) lớn hơn nhiều so với dòng tầng, làm tăng lực cản ma sát. Ngoài ra, hình dạng thân tàu gây ra gradient áp suất bất lợi (adverse pressure gradient) ở phần đuôi, có thể dẫn đến hiện tượng tách dòng (flow separation).

**English:**
In maritime engineering in Vietnam (e.g., shipbuilding or Autonomous Underwater Vehicles - AUVs for continental shelf survey), predicting the boundary layer is crucial for calculating skin friction drag. A submarine hull has a streamlined shape. Initially, the boundary layer at the bow is laminar. Moving towards the stern, as the Reynolds number increases, the boundary layer transitions to turbulence. A turbulent boundary layer grows much faster and generates a significantly higher wall shear stress compared to a laminar one, increasing frictional drag. Furthermore, the hull shape induces an adverse pressure gradient at the aft section, which can lead to flow separation.

### 3. Các Biến Số Tại Vách và Định Luật Thành Vách / Wall Variables and Law of the Wall

**Tiếng Việt:**
Để phân tích dòng rối gần vách, chúng ta sử dụng các biến số vô hướng (dimensionless wall variables):
- **Vận tốc ma sát (Friction velocity) $u_\tau$**: $u_\tau = \sqrt{\frac{\tau_w}{\rho}}$ (với $\tau_w$ là ứng suất cắt tại vách).
- **Khoảng cách vô hướng (Dimensionless distance) $y^+$**: $y^+ = \frac{y \cdot u_\tau}{\nu}$
- **Vận tốc vô hướng (Dimensionless velocity) $u^+$**: $u^+ = \frac{u}{u_\tau}$

**English:**
To analyze turbulent flow near a wall, we use dimensionless wall variables:
- **Friction velocity $u_\tau$**: $u_\tau = \sqrt{\frac{\tau_w}{\rho}}$ (where $\tau_w$ is the wall shear stress).
- **Dimensionless distance $y^+$**: $y^+ = \frac{y \cdot u_\tau}{\nu}$
- **Dimensionless velocity $u^+$**: $u^+ = \frac{u}{u_\tau}$

**Định luật thành vách (Law of the Wall):**
Chia lớp biên rối thành các vùng (Divides the turbulent boundary layer into regions):
1. **Lớp nhớt phụ (Viscous Sublayer)**: $y^+ < 5$. Ở đây, nhớt động học thống trị rối. Phương trình: $u^+ = y^+$.
2. **Vùng chuyển tiếp (Buffer Layer)**: $5 < y^+ < 30$. Cả nhớt động học và rối đều quan trọng.
3. **Vùng Log-law (Log-law Region)**: $30 < y^+ < 500$ (hoặc cao hơn). Rối thống trị hoàn toàn. Phương trình: $u^+ = \frac{1}{\kappa} \ln(y^+) + B$. (Với hằng số von Kármán $\kappa \approx 0.41$ và $B \approx 5.0$).

### 4. Dòng Thác Kolmogorov và DNS, LES, RANS / Kolmogorov Cascade and DNS, LES, RANS

**Tiếng Việt:**
Dòng chảy rối bao gồm nhiều cuộn xoáy (eddies) với nhiều kích cỡ khác nhau. Năng lượng được truyền từ các dòng chính (main flow) vào các cuộn xoáy lớn nhất. Từ các cuộn xoáy lớn, năng lượng tiếp tục truyền xuống các cuộn xoáy nhỏ hơn. Quá trình này cứ tiếp diễn tạo thành **Dòng thác năng lượng Kolmogorov (Kolmogorov energy cascade)**. Khi các cuộn xoáy đạt đến kích thước cực nhỏ (Kolmogorov microscale), động năng của chúng bị tiêu tán thành nhiệt do độ nhớt.

Dựa trên phổ năng lượng này, ta có 3 phương pháp mô phỏng (Based on this energy spectrum, we have 3 simulation methods):
1. **DNS (Direct Numerical Simulation)**: Giải trực tiếp phương trình Navier-Stokes cho mọi kích thước cuộn xoáy từ lớn nhất đến nhỏ nhất (Kolmogorov scale). Vô cùng tốn kém tài nguyên máy tính, thường chỉ dùng cho nghiên cứu học thuật với số Reynolds thấp.
2. **LES (Large Eddy Simulation)**: Giải trực tiếp các cuộn xoáy lớn (mang phần lớn năng lượng) và mô hình hóa tác động của các cuộn xoáy nhỏ (sub-grid scale). Tài nguyên cần thiết ở mức trung bình cao.
3. **RANS (Reynolds-Averaged Navier-Stokes)**: Trung bình hóa toàn bộ dòng chảy theo thời gian. Giải hệ phương trình vận tốc trung bình và mô hình hóa TOÀN BỘ tác động của dòng rối thông qua Ứng suất Reynolds (Reynolds stresses). Đây là phương pháp phổ biến nhất trong công nghiệp vì chi phí tính toán thấp.

**English:**
Turbulent flow consists of eddies of various sizes. Energy is transferred from the main flow into the largest eddies. From the large eddies, energy cascades down to smaller and smaller eddies. This continuous process is called the **Kolmogorov energy cascade**. When eddies reach an extremely small size (Kolmogorov microscale), their kinetic energy is dissipated into heat due to viscosity.

Based on this energy spectrum, we have 3 simulation methods:
1. **DNS (Direct Numerical Simulation)**: Directly solves the Navier-Stokes equations for all eddy sizes down to the Kolmogorov scale. Extremely computationally expensive, mainly used for academic research at low Reynolds numbers.
2. **LES (Large Eddy Simulation)**: Directly resolves large eddies (which carry most of the energy) and models the effect of small eddies (sub-grid scale). Requires moderately high computational resources.
3. **RANS (Reynolds-Averaged Navier-Stokes)**: Time-averages the entire flow field. Solves the mean velocity equations and models the ENTIRE effect of turbulence via Reynolds stresses. This is the most popular method in industry due to low computational cost.

### 5. Các Mô Hình Rối RANS / RANS Turbulence Models

Trong CFD, để khép kín hệ phương trình RANS, ta cần tính toán Độ nhớt rối (Turbulent/Eddy Viscosity $\mu_t$). Các mô hình phổ biến (To close the RANS equations, we must calculate the Turbulent/Eddy Viscosity $\mu_t$. Common models):

#### A. Mô hình k-epsilon (Standard $k-\epsilon$)
- Giải 2 phương trình vi phân: Động năng rối $k$ (turbulent kinetic energy) và Tốc độ tiêu tán $\epsilon$ (dissipation rate).
- **Ưu điểm (Pros)**: Hội tụ tốt, ổn định, hoạt động tốt cho dòng tự do (free shear flows).
- **Nhược điểm (Cons)**: Dự đoán rất kém hiện tượng tách dòng (flow separation) khi có gradient áp suất bất lợi.
- **Phương trình Độ nhớt rối**: $\mu_t = \rho C_\mu \frac{k^2}{\epsilon}$

#### B. Mô hình k-omega SST (Shear Stress Transport $k-\omega$ SST)
- Được phát triển bởi Menter (1994). Nó kết hợp sức mạnh của mô hình $k-\omega$ gần vách (giải quyết tốt tách dòng) và $k-\epsilon$ ở vùng dòng tự do (tránh nhạy cảm với điều kiện biên).
- **Ưu điểm (Pros)**: Cực kỳ chính xác cho các dòng chảy khí động học, thủy động lực học có tách dòng (như cánh máy bay, chân vịt tàu thủy). Đây là mô hình tiêu chuẩn hiện tại trong công nghiệp.
- **Nhược điểm (Cons)**: Yêu cầu lưới rất mịn sát vách (cần $y^+ \approx 1$).

#### C. Mô hình Spalart-Allmaras (SA)
- Mô hình 1 phương trình, giải trực tiếp phương trình vận chuyển cho một biến liên quan đến độ nhớt rối.
- **Ưu điểm (Pros)**: Rất nhẹ, chạy nhanh, đặc biệt thiết kế riêng cho các ứng dụng khí động học hàng không (aerospace aerodynamics) như cánh máy bay.
- **Nhược điểm (Cons)**: Không tốt cho các dòng xoáy phức tạp bên trong ống hoặc dòng có sự pha trộn hỗn loạn.

### 6. Yêu Cầu y+ Cho Lưới / y+ Requirements for Meshing

**Tiếng Việt:**
Khi thiết kế lưới CFD, kích thước của lớp lưới đầu tiên sát vách ($\Delta y$) quyết định giá trị $y^+$.
- **Hàm vách (Wall Functions)**: Thích hợp khi dùng k-epsilon. Thay vì giải chi tiết lớp nhớt phụ, ta đặt điểm lưới đầu tiên nằm ở vùng log-law. Yêu cầu: $30 < y^+ < 300$. Cách này tiết kiệm số lượng lưới.
- **Giải trực tiếp đến vách (Low-Re Approach)**: Bắt buộc khi dùng k-omega SST để bắt các hiện tượng tách dòng tinh tế. Điểm lưới đầu tiên phải nằm gọn trong lớp nhớt phụ. Yêu cầu: $y^+ \approx 1$. Tốn rất nhiều phần tử lưới tại lớp biên (inflation layers).

**English:**
When designing a CFD mesh, the size of the first mesh cell adjacent to the wall ($\Delta y$) dictates the $y^+$ value.
- **Wall Functions**: Suitable when using k-epsilon. Instead of resolving the viscous sublayer, we place the first grid node in the log-law region. Requirement: $30 < y^+ < 300$. This saves mesh count.
- **Low-Re Approach (Resolving to the wall)**: Mandatory when using k-omega SST to capture delicate flow separation phenomena. The first grid point must be well within the viscous sublayer. Requirement: $y^+ \approx 1$. Requires many inflation layers at the boundary.

---

## Ví Dụ Tính Toán / Worked Examples

**Bài toán (Problem):**
Một tàu ngầm khảo sát đại dương hoạt động ngoài khơi vùng biển Vũng Tàu (Việt Nam) di chuyển với vận tốc $U_\infty = 3$ m/s. Chiều dài tàu $L = 10$ m. Nước biển ở $25^\circ C$ có khối lượng riêng $\rho = 1025$ kg/m³ và độ nhớt động lực học $\mu = 1.05 \times 10^{-3}$ kg/(m·s).
Hãy tính:
1. Số Reynolds dựa trên chiều dài thân tàu (Reynolds number based on length).
2. Bề dày lớp biên rối ở cuối thân tàu ($x = L$).
3. Khoảng cách $\Delta y$ (chiều cao lớp lưới đầu tiên) để đạt $y^+ = 1$ ở đuôi tàu ($x=10$m) nhằm sử dụng mô hình k-omega SST.

**Lời giải (Solution):**

*Bước 1: Tính số Reynolds (Step 1: Calculate Reynolds Number)*
$$ Re_L = \frac{\rho \cdot U_\infty \cdot L}{\mu} = \frac{1025 \cdot 3 \cdot 10}{1.05 \times 10^{-3}} = 2.928 \times 10^7 $$
Vì $Re_L > 5 \times 10^5$, dòng chảy hoàn toàn là dòng rối (Fully turbulent flow).

*Bước 2: Bề dày lớp biên ở x = 10m (Step 2: Boundary layer thickness at x=10m)*
Sử dụng công thức kinh nghiệm (Using empirical formula):
$$ \delta = \frac{0.382 \cdot x}{Re_x^{0.2}} = \frac{0.382 \cdot 10}{(2.928 \times 10^7)^{0.2}} = \frac{3.82}{31.06} \approx 0.123 \text{ m} = 12.3 \text{ cm} $$
Tại cuối tàu, lớp biên dày khoảng 12.3 cm.

*Bước 3: Ước tính $\Delta y$ cho $y^+ = 1$ (Step 3: Estimate $\Delta y$ for $y^+=1$)*
Tính hệ số ma sát bề mặt theo công thức thực nghiệm cho tấm phẳng (Calculate skin friction coefficient using empirical flat plate formula):
$$ C_f = 0.0576 \cdot Re_x^{-0.2} = 0.0576 \cdot (2.928 \times 10^7)^{-0.2} \approx 0.00185 $$
Tính ứng suất cắt tại vách (Calculate wall shear stress):
$$ \tau_w = \frac{1}{2} \rho U_\infty^2 C_f = 0.5 \cdot 1025 \cdot 3^2 \cdot 0.00185 \approx 8.53 \text{ N/m}^2 $$
Tính vận tốc ma sát (Calculate friction velocity):
$$ u_\tau = \sqrt{\frac{\tau_w}{\rho}} = \sqrt{\frac{8.53}{1025}} \approx 0.0912 \text{ m/s} $$
Tính khoảng cách $\Delta y$ (Calculate distance $\Delta y$):
Từ công thức $y^+ = \frac{\Delta y \cdot u_\tau}{\nu} = \frac{\Delta y \cdot \rho \cdot u_\tau}{\mu}$
$$ \Delta y = \frac{y^+ \cdot \mu}{\rho \cdot u_\tau} = \frac{1 \cdot 1.05 \times 10^{-3}}{1025 \cdot 0.0912} \approx 1.12 \times 10^{-5} \text{ m} = 0.0112 \text{ mm} $$
**Kết luận**: Để mô phỏng k-omega SST cho tàu ngầm này, chiều cao phần tử lưới sát vách cực kỳ nhỏ, chỉ khoảng 0.0112 mm.

---

## Code Python / Python Code

Dưới đây là đoạn code Python tự động tính toán kích thước bề dày lưới đầu tiên (first cell height) dựa trên bài toán trên. Học viên có thể sử dụng script này trong thực tế công việc.
*Below is a Python code snippet that automatically calculates the first cell height based on the above problem. Students can use this script in real engineering work.*

```python
import numpy as np

def calculate_yplus_spacing(U, L, rho, mu, target_yplus):
    """
    Tính toán khoảng cách lưới lớp đầu tiên (First cell height) 
    dựa trên giá trị y+ mục tiêu cho dòng chảy qua tấm phẳng.
    
    Parameters:
    U (float): Vận tốc dòng tự do (Free stream velocity) [m/s]
    L (float): Chiều dài đặc trưng (Characteristic length) [m]
    rho (float): Khối lượng riêng (Density) [kg/m^3]
    mu (float): Độ nhớt động lực (Dynamic viscosity) [kg/(m.s)]
    target_yplus (float): Giá trị y+ mong muốn (Target y+)
    
    Returns:
    float: Bề dày phần tử lưới đầu tiên (First cell height) delta_y [m]
    """
    
    # 1. Tính số Reynolds
    Re_L = (rho * U * L) / mu
    print(f"Reynolds Number (Re_L): {Re_L:.2e}")
    
    if Re_L < 5e5:
        print("Warning: Flow is likely laminar. Turbulent estimations may not be accurate.")
        
    # 2. Tính hệ số lực cản ma sát (Skin Friction Coefficient - Cf)
    # Sử dụng công thức kinh nghiệm Schlichting cho dòng rối
    Cf = 0.0576 * (Re_L ** -0.2)
    print(f"Skin Friction Coefficient (Cf): {Cf:.6f}")
    
    # 3. Tính ứng suất cắt tại vách (Wall Shear Stress - tau_w)
    tau_w = 0.5 * rho * (U**2) * Cf
    print(f"Wall Shear Stress (tau_w): {tau_w:.4f} N/m^2")
    
    # 4. Tính vận tốc ma sát (Friction Velocity - u_tau)
    u_tau = np.sqrt(tau_w / rho)
    print(f"Friction Velocity (u_tau): {u_tau:.4f} m/s")
    
    # 5. Tính bề dày lớp lưới đầu tiên (First Cell Height - delta_y)
    # y+ = (delta_y * u_tau * rho) / mu => delta_y = (y+ * mu) / (rho * u_tau)
    delta_y = (target_yplus * mu) / (rho * u_tau)
    
    return delta_y

# Áp dụng cho bài toán tàu ngầm ở Vũng Tàu (Submarine problem in Vung Tau)
U_inf = 3.0      # m/s
Length = 10.0    # m
Density = 1025.0 # kg/m^3 (Sea water)
Viscosity = 1.05e-3 # kg/(m.s)

print("--- Y+ Calculator cho mô hình k-omega SST (Mục tiêu y+ = 1) ---")
target_y_sst = 1.0
delta_y_sst = calculate_yplus_spacing(U_inf, Length, Density, Viscosity, target_y_sst)
print(f"-> Chiều cao lưới cho k-omega SST (y+=1): {delta_y_sst:.6f} m ({delta_y_sst*1000:.4f} mm)\n")

print("--- Y+ Calculator cho mô hình k-epsilon (Mục tiêu y+ = 50) ---")
target_y_keps = 50.0
delta_y_keps = calculate_yplus_spacing(U_inf, Length, Density, Viscosity, target_y_keps)
print(f"-> Chiều cao lưới cho k-epsilon (y+=50): {delta_y_keps:.6f} m ({delta_y_keps*1000:.4f} mm)")

# Ước tính bề dày lớp biên (Boundary layer thickness estimation)
bl_thickness = 0.382 * Length / ((Density * U_inf * Length / Viscosity) ** 0.2)
print(f"\n-> Bề dày lớp biên tại đuôi tàu (BL Thickness at aft): {bl_thickness:.4f} m ({bl_thickness*100:2f} cm)")
```

---

## Thực Hành / Lab Activity

**Bài tập thực hành (Hands-on Lab):**
1. **Khởi động phần mềm chia lưới**: Mở phần mềm chia lưới (như ANSYS Meshing hoặc Pointwise).
2. **Import hình học**: Nhập file CAD 2D biên dạng cánh ngầm (Hydrofoil NACA 0012). Cánh ngầm này ứng dụng cho tàu cánh ngầm chạy dọc sông Sài Gòn.
3. **Thiết lập lưới lăng trụ (Prism/Inflation Layers)**: 
   - Vận tốc dòng chảy là 10 m/s.
   - Sử dụng script Python ở trên để tính $\Delta y$ cho $y^+ = 1$.
   - Cấu hình Inflation Layer với First Layer Thickness bằng $\Delta y$ vừa tính được.
   - Thiết lập Growth Rate = 1.2 và số lớp (Number of Layers) là 15-20 lớp.
4. **Kiểm tra (Verification)**: Xuất lưới sang solver (OpenFOAM/Fluent), chạy mô phỏng RANS bằng k-omega SST trong 10 vòng lặp đầu tiên, sau đó plot contour của giá trị y+ trên bề mặt cánh ngầm để xác nhận nó xấp xỉ 1.

**Lab Activity (English):**
1. **Launch meshing software**: Open your meshing tool (ANSYS Meshing or Pointwise).
2. **Import geometry**: Load the 2D CAD file of a hydrofoil (NACA 0012 profile). This hydrofoil is applied to high-speed passenger boats operating along the Saigon River.
3. **Set up Prism/Inflation Layers**:
   - Flow velocity is 10 m/s.
   - Use the provided Python script to calculate $\Delta y$ for $y^+ = 1$.
   - Configure the Inflation Layer setting the First Layer Thickness to the calculated $\Delta y$.
   - Set Growth Rate = 1.2 and Number of Layers to 15-20.
4. **Verification**: Export the mesh to the solver (OpenFOAM/Fluent), run a RANS simulation using k-omega SST for the first 10 iterations, then plot the y+ contour on the hydrofoil surface to verify it is approximately 1.

---

## ⚠️ Lỗi Thường Gặp / Common Mistakes

**Tiếng Việt:**
1. **Lưới quá thô sát vách khi dùng k-omega SST**: Rất nhiều sinh viên chọn mô hình k-omega SST nhưng lại không tạo inflation layers, khiến y+ nằm ở mức 100. Khi đó, mô hình hoạt động sai lệch và không đoán được sự tách dòng, sinh ra sai số lớn về lực cản và lực nâng.
2. **Sử dụng Wall Functions cho y+ < 5**: Khi dùng mô hình k-epsilon (yêu cầu hàm vách), nếu chia lưới quá mịn sát vách (y+ < 5, nằm trong lớp nhớt phụ), hàm vách logarit (log-law wall function) sẽ cho kết quả sai lầm.
3. **Quên không kiểm tra lại trường y+ sau khi hội tụ**: Giá trị tính toán từ công thức kinh nghiệm chỉ là ước tính ban đầu (initial guess). Bạn BẮT BUỘC phải trích xuất (post-process) trường y+ trên vách từ phần mềm CFD sau khi mô phỏng hội tụ để xem có đúng mục tiêu không. Nếu không, phải chia lại lưới (remesh).

**English:**
1. **Mesh too coarse at the wall when using k-omega SST**: Many students select the k-omega SST model but fail to create inflation layers, resulting in a y+ around 100. In this case, the model behaves incorrectly and fails to predict flow separation, leading to massive errors in drag and lift.
2. **Using Wall Functions for y+ < 5**: When using the k-epsilon model (which requires wall functions), if the mesh is too fine near the wall (y+ < 5, inside the viscous sublayer), the logarithmic wall function will yield erroneous results.
3. **Forgetting to check the y+ field after convergence**: The value calculated from the empirical formula is just an initial guess. You MUST extract (post-process) the y+ field on the wall from the CFD software after the simulation converges to see if it meets the target. If not, you must remesh.

---

## Câu Hỏi Thảo Luận / Discussion

**Vietnamese & English:**

1. **(VN)** Tại sao lớp biên lại phát triển dày dần lên khi dòng chảy đi từ mũi vật thể về phía đuôi?
   **(EN)** Why does the boundary layer grow thicker as the flow travels from the leading edge to the trailing edge of an object?
   
2. **(VN)** Trong bài toán thiết kế đường ống dẫn dầu từ mỏ Bạch Hổ, mô hình rối nào (k-epsilon, k-omega, hay SA) sẽ phù hợp nhất cho dòng chảy dài trong ống tròn không có tách dòng? Tại sao?
   **(EN)** In designing an oil pipeline from the Bach Ho field, which turbulence model (k-epsilon, k-omega, or SA) would be most suitable for fully developed pipe flow with no separation? Why?
   
3. **(VN)** Nếu ta tăng gấp đôi vận tốc dòng tự do $U_\infty$, giá trị $y^+$ tại vách sẽ thay đổi như thế nào nếu ta giữ nguyên lưới ban đầu?
   **(EN)** If we double the free-stream velocity $U_\infty$, how will the wall $y^+$ value change assuming we keep the same initial mesh?

4. **(VN)** Dòng thác năng lượng Kolmogorov giải thích thế nào về việc độ nhớt động học $\nu$ quyết định kích thước của các cuộn xoáy nhỏ nhất trong dòng rối?
   **(EN)** How does the Kolmogorov energy cascade explain that the kinematic viscosity $\nu$ determines the size of the smallest eddies in a turbulent flow?

5. **(VN)** Một kỹ sư tính toán $\Delta y = 0.001$ mm cho $y^+=1$. Kích thước lưới này quá nhỏ, khiến tỷ lệ khung hình (aspect ratio) của phần tử lưới vượt quá 10000. Điều này ảnh hưởng thế nào đến phương pháp giải số (numerical solver)?
   **(EN)** An engineer calculates $\Delta y = 0.001$ mm for $y^+=1$. This mesh size is so small that the element aspect ratio exceeds 10000. How does this affect the numerical solver?

---

## Bài Về Nhà / Homework

**Bài tập (Assignment):**
1. **Lý thuyết**: Viết một báo cáo ngắn (1 trang) so sánh sự khác nhau về phương trình toán học cơ bản giữa mô hình k-epsilon chuẩn (Standard k-epsilon) và mô hình k-omega SST. Hãy tập trung vào cách k-omega SST kết hợp hai mô hình trong một bằng cách sử dụng các hàm trộn (blending functions).
2. **Lập trình**: Mở rộng đoạn code Python phía trên. Viết thêm tính năng: Yêu cầu người dùng nhập vào lưới thực tế $\Delta y_{actual}$, sau đó code sẽ in ra biểu đồ (dùng `matplotlib`) sự phụ thuộc của $y^+$ vào Vận tốc $U_\infty$ (từ 1 m/s đến 20 m/s).
3. **Mô phỏng**: Chạy bài toán dòng chảy qua trụ tròn (flow over a cylinder) ở $Re = 1 \times 10^6$ sử dụng 2 mô hình lưới khác nhau: một lưới thô dùng k-epsilon và một lưới mịn có inflation layers dùng k-omega SST. So sánh hệ số lực cản $C_D$ thu được với dữ liệu thực nghiệm.

**Homework (English):**
1. **Theory**: Write a short report (1 page) comparing the fundamental mathematical equations between the Standard k-epsilon and the k-omega SST models. Focus on how k-omega SST combines the two models into one using blending functions.
2. **Programming**: Extend the Python code above. Add a feature: Ask the user to input an actual mesh size $\Delta y_{actual}$, then use `matplotlib` to plot the dependence of $y^+$ on the Velocity $U_\infty$ (ranging from 1 m/s to 20 m/s).
3. **Simulation**: Run the flow over a cylinder problem at $Re = 1 \times 10^6$ using 2 different meshes: a coarse mesh with k-epsilon and a fine mesh with inflation layers using k-omega SST. Compare the obtained drag coefficient $C_D$ with experimental data.

---

## Đánh Giá / Assessment Rubric

| Tiêu Chí / Criteria | Xuất Sắc / Excellent (8.5 - 10) | Khá / Good (7.0 - 8.4) | Đạt / Pass (5.0 - 6.9) | Không Đạt / Fail (< 5.0) |
|---------------------|--------------------------------|------------------------|------------------------|--------------------------|
| **Hiểu Lý Thuyết (Theory Comprehension)** | Giải thích hoàn hảo sự khác biệt giữa các mô hình rối, áp dụng đúng cho bài toán tàu ngầm/đường ống. | Nắm được đặc điểm chính của các mô hình rối nhưng còn thiếu sót nhỏ khi áp dụng. | Nêu được định nghĩa y+ nhưng chưa hiểu sâu về sự phân loại mô hình. | Trả lời sai các khái niệm cơ bản về lớp biên và y+. |
| **Code Python (Python Coding)** | Code chạy hoàn hảo, có biểu đồ đẹp mắt, code sạch (PEP8), comment rõ ràng. | Code chạy đúng kết quả toán học nhưng thiếu phần trực quan hóa (biểu đồ). | Code chạy được nhưng kết quả sai lệch nhỏ hoặc cấu trúc code lộn xộn. | Code bị lỗi cú pháp (syntax error) hoặc không ra kết quả. |
| **Thực Hành CFD (CFD Practical Lab)** | Thiết lập lưới tuyệt vời (y+ cực kỳ chính xác), kết quả hội tụ tốt và phân tích sâu sắc. | Thiết lập lưới tốt (y+ gần mục tiêu), mô phỏng hội tụ nhưng phân tích còn sơ sài. | Cố gắng làm lưới nhưng thông số y+ bị sai lệch lớn, kết quả kém chính xác. | Không hoàn thành bài thực hành chia lưới và chạy mô phỏng. |
| **Thảo Luận (Discussion Participation)** | Tham gia tích cực, đặt câu hỏi phản biện sâu sắc về toán học và vật lý của mô hình. | Có trả lời các câu hỏi, ý kiến đóng góp mang tính xây dựng. | Trả lời ngắn gọn, thụ động, mang tính chất học thuộc lòng. | Không tham gia thảo luận. |

*Lưu ý: Học viên bắt buộc phải đạt điểm tối thiểu 5.0 ở tiêu chí "Thực Hành CFD" để qua tuần này.*
*Note: Students must score at least 5.0 in the "CFD Practical Lab" criterion to pass this week.*

---
*End of Week 4 Lesson File / Hết nội dung Bài học Tuần 4*

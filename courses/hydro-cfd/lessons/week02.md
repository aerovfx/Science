# Tuần 2: Phương Trình Navier-Stokes & Phương Trình Liên Tục / Week 2: Navier-Stokes Equations & Continuity

## Mục Tiêu / Learning Objectives

### Tiếng Việt
Kết thúc tuần này, học viên sẽ có khả năng:
1. Hiểu sâu sắc và dẫn xuất được các phương trình bảo toàn cơ bản trong cơ học lưu chất: Bảo toàn khối lượng (Phương trình liên tục), Bảo toàn động lượng (Phương trình Navier-Stokes), và Bảo toàn năng lượng.
2. Viết và giải thích ý nghĩa vật lý của từng số hạng trong phương trình Navier-Stokes dạng 2D Đề-các (Cartesian 2D).
3. Nắm vững phương trình Bernoulli, phương trình Euler, và phương trình Stokes, cùng với các điều kiện áp dụng cụ thể.
4. Hiểu khái niệm về ghép nối vận tốc - áp suất (Pressure-velocity coupling) trong giải quyết bài toán dòng chảy không nén được.
5. Áp dụng hàm dòng (Stream function) và độ xoáy (Vorticity) để đơn giản hóa phương trình Navier-Stokes trong không gian 2 chiều.
6. Lập trình giải phương trình khuếch tán 1 chiều (dạng đơn giản của Navier-Stokes) cho bài toán dòng chảy Couette không ổn định (transient Couette flow) bằng Python và phương pháp sai phân hữu hạn (Finite Difference Method).
7. Liên hệ lý thuyết với các bài toán kỹ thuật thủy lực thực tế tại Việt Nam như cấp thoát nước, đập thủy điện, và đê điều.

### English
By the end of this week, students will be able to:
1. Deeply understand and derive the fundamental conservation equations in fluid mechanics: Conservation of Mass (Continuity Equation), Conservation of Momentum (Navier-Stokes Equations), and Conservation of Energy.
2. Write and explain the physical significance of each term in the 2D Cartesian Navier-Stokes equations.
3. Master the Bernoulli equation, Euler equations, and Stokes equations, along with their specific conditions of applicability.
4. Understand the concept of pressure-velocity coupling in solving incompressible flow problems.
5. Apply stream function and vorticity concepts to simplify the Navier-Stokes equations in 2D space.
6. Program and solve the 1D diffusion equation (simplified Navier-Stokes) for transient Couette flow using Python and the Finite Difference Method (FDM).
7. Relate theoretical concepts to real-world hydraulic engineering applications in Vietnam, such as water supply/drainage, hydroelectric dams, and dyke systems.

---

## Phần Mềm & Công Cụ / Software & Tools

### Tiếng Việt
- **Môi trường lập trình**: Python 3.8+ (Anaconda, Jupyter Notebook, hoặc VS Code).
- **Thư viện Python cần thiết**: 
  - `numpy`: Để xử lý mảng và tính toán ma trận, phục vụ cho phương pháp sai phân hữu hạn.
  - `matplotlib`: Để vẽ đồ thị và trực quan hóa kết quả mô phỏng (ví dụ: profile vận tốc).
  - `scipy` (tùy chọn): Chứa các hàm hỗ trợ giải hệ phương trình tuyến tính nếu sử dụng sơ đồ ẩn.

### English
- **Programming Environment**: Python 3.8+ (Anaconda, Jupyter Notebook, or VS Code).
- **Required Python Libraries**:
  - `numpy`: For array manipulation and matrix calculations, essential for the finite difference method.
  - `matplotlib`: For plotting and visualizing simulation results (e.g., velocity profiles).
  - `scipy` (optional): Contains functions to help solve linear systems of equations if using implicit schemes.

---

## Lý Thuyết / Theory

### 1. Các Định Luật Bảo Toàn / Conservation Laws

Trong động lực học lưu chất (CFD), chúng ta giải quyết các bài toán dựa trên ba định luật bảo toàn cơ bản của tự nhiên.
In Computational Fluid Dynamics (CFD), we solve problems based on three fundamental conservation laws of nature.

#### 1.1 Bảo toàn khối lượng (Phương trình liên tục) / Conservation of Mass (Continuity Equation)

Khối lượng của một hệ thống khép kín không đổi theo thời gian. Xét một thể tích điều khiển (Control Volume - CV), tốc độ thay đổi khối lượng bên trong CV bằng tổng khối lượng đi vào trừ đi tổng khối lượng đi ra.
The mass of a closed system remains constant over time. Considering a Control Volume (CV), the rate of change of mass inside the CV equals the total mass entering minus the total mass leaving.

Phương trình tổng quát dưới dạng vi phân (General differential form):
$$ \frac{\partial \rho}{\partial t} + \nabla \cdot (\rho \mathbf{u}) = 0 $$

Trong đó (Where):
- $\rho$: Mật độ khối lượng / Density (kg/m³)
- $t$: Thời gian / Time (s)
- $\mathbf{u} = (u, v, w)$: Vector vận tốc / Velocity vector (m/s)
- $\nabla \cdot$: Toán tử phân kỳ (Divergence operator)

Nếu lưu chất không nén được (Incompressible flow), mật độ $\rho$ là hằng số. Phương trình trở thành:
If the fluid is incompressible, density $\rho$ is constant. The equation simplifies to:
$$ \nabla \cdot \mathbf{u} = 0 \quad \text{hay} \quad \frac{\partial u}{\partial x} + \frac{\partial v}{\partial y} + \frac{\partial w}{\partial z} = 0 $$

#### 1.2 Bảo toàn động lượng (Phương trình Navier-Stokes) / Conservation of Momentum

Dựa trên định luật II Newton: Tốc độ thay đổi động lượng của một hạt lưu chất bằng tổng các lực tác dụng lên nó (lực bề mặt và lực thể tích).
Based on Newton's Second Law: The rate of change of momentum of a fluid particle equals the sum of forces acting on it (surface forces and body forces).

Dạng vector tổng quát cho lưu chất Newton (General vector form for Newtonian fluid):
$$ \rho \left( \frac{\partial \mathbf{u}}{\partial t} + (\mathbf{u} \cdot \nabla)\mathbf{u} \right) = -\nabla p + \nabla \cdot \boldsymbol{\tau} + \rho \mathbf{g} $$

Trong đó (Where):
- $p$: Áp suất thủy tĩnh / Static pressure (Pa)
- $\boldsymbol{\tau}$: Tensor ứng suất cắt (viscous stress tensor)
- $\mathbf{g}$: Gia tốc trọng trường / Gravitational acceleration

#### 1.3 Bảo toàn năng lượng / Conservation of Energy

Dựa trên nguyên lý thứ nhất của nhiệt động lực học. Quan trọng cho dòng chảy có sự truyền nhiệt hoặc dòng chảy chịu nén (khí động học). Trong các bài toán thủy lực cơ bản (nước là chất không nén được ở nhiệt độ ổn định), phương trình này thường được tách rời và không cần giải đồng thời với Continuity và Momentum.
Based on the First Law of Thermodynamics. Crucial for flows with heat transfer or compressible flows (aerodynamics). In basic hydraulic problems (water is incompressible at steady temperature), this equation is often decoupled and doesn't need to be solved simultaneously with Continuity and Momentum.

### 2. Phương Trình Navier-Stokes Trong 2D Đề-các / Navier-Stokes in 2D Cartesian

Để dễ hình dung, ta xét trường hợp dòng chảy 2 chiều (2D: $x, y$), không nén được (Incompressible: $\rho = \text{const}$), có độ nhớt động lực học $\mu$ là hằng số.
For simplicity, we consider a 2-dimensional flow (2D: $x, y$), incompressible ($\rho = \text{const}$), with constant dynamic viscosity $\mu$.

Theo phương x (x-momentum):
$$ \rho \left( \underbrace{\frac{\partial u}{\partial t}}_{\text{Local}} + \underbrace{u \frac{\partial u}{\partial x} + v \frac{\partial u}{\partial y}}_{\text{Convective}} \right) = \underbrace{-\frac{\partial p}{\partial x}}_{\text{Pressure}} + \underbrace{\mu \left( \frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} \right)}_{\text{Viscous/Diffusion}} + \underbrace{\rho g_x}_{\text{Body force}} $$

Theo phương y (y-momentum):
$$ \rho \left( \frac{\partial v}{\partial t} + u \frac{\partial v}{\partial x} + v \frac{\partial v}{\partial y} \right) = -\frac{\partial p}{\partial y} + \mu \left( \frac{\partial^2 v}{\partial x^2} + \frac{\partial^2 v}{\partial y^2} \right) + \rho g_y $$

#### Giải thích ý nghĩa vật lý từng số hạng / Physical interpretation of each term:
- **Local acceleration (Gia tốc cục bộ)**: $\rho \frac{\partial \mathbf{u}}{\partial t}$. Sự thay đổi vận tốc tại một điểm cố định theo thời gian. Bằng 0 nếu dòng chảy ổn định (steady state).
- **Convective acceleration (Gia tốc đối lưu)**: $\rho (\mathbf{u} \cdot \nabla)\mathbf{u}$. Sự thay đổi vận tốc do hạt lưu chất di chuyển từ vị trí này sang vị trí khác trong không gian. Đây là thành phần phi tuyến (non-linear) gây ra sự phức tạp và nhiễu loạn (turbulence) trong CFD.
- **Pressure gradient force (Lực Gradient áp suất)**: $-\nabla p$. Lực đẩy dòng chảy đi từ nơi có áp suất cao đến nơi có áp suất thấp.
- **Viscous term (Số hạng nhớt/Khuếch tán)**: $\mu \nabla^2 \mathbf{u}$. Lực ma sát nhớt sinh ra do sự trượt của các lớp lưu chất lên nhau. Có xu hướng san phẳng sự chênh lệch vận tốc (khuếch tán động lượng).
- **Body force (Lực khối)**: $\rho \mathbf{g}$. Lực tác dụng lên toàn bộ khối lượng lưu chất, ví dụ như trọng lực, lực điện từ.

### 3. Phương Trình Bernoulli, Euler, và Stokes / Bernoulli, Euler, and Stokes Equations

#### Phương Trình Euler (Inviscid Flow)
Nếu bỏ qua độ nhớt của lưu chất ($\mu = 0$, dòng chảy không nhớt - inviscid flow), phương trình NS trở thành phương trình Euler:
If we neglect fluid viscosity ($\mu = 0$, inviscid flow), the NS equations become Euler equations:
$$ \rho \left( \frac{\partial \mathbf{u}}{\partial t} + (\mathbf{u} \cdot \nabla)\mathbf{u} \right) = -\nabla p + \rho \mathbf{g} $$

#### Phương Trình Bernoulli
Tích phân phương trình Euler dọc theo một đường dòng (streamline) cho dòng chảy ổn định (steady), không nhớt (inviscid), không nén được (incompressible), ta được phương trình Bernoulli:
Integrating the Euler equation along a streamline for steady, inviscid, incompressible flow gives the Bernoulli equation:
$$ p + \frac{1}{2} \rho v^2 + \rho g h = \text{constant} $$
*Ứng dụng*: Tính toán áp suất trong đường ống khi thay đổi tiết diện (ống Venturi), đo vận tốc bằng ống Pitot.

#### Phương Trình Stokes (Creeping Flow)
Ngược lại với Euler, nếu dòng chảy có vận tốc rất chậm hoặc độ nhớt rất cao (Số Reynolds $Re \ll 1$), thành phần quán tính đối lưu trở nên rất nhỏ so với thành phần lực nhớt. Phương trình NS đơn giản thành phương trình Stokes:
Contrary to Euler, if the flow is very slow or highly viscous (Reynolds number $Re \ll 1$), the convective inertia term becomes negligible compared to the viscous term. NS equations simplify to Stokes equations:
$$ 0 = -\nabla p + \mu \nabla^2 \mathbf{u} + \rho \mathbf{g} $$
*Ứng dụng*: Bôi trơn thủy lực, chuyển động của các hạt vi mô trong nước (microfluidics).

### 4. Ghép Nối Vận Tốc - Áp Suất / Pressure-Velocity Coupling

Trong dòng chảy không nén được, phương trình NS có 3 ẩn chính trong 2D: $u, v, p$, nhưng phương trình liên tục $\nabla \cdot \mathbf{u} = 0$ không chứa trực tiếp biến áp suất $p$. Điều này gây khó khăn lớn trong việc giải hệ phương trình.
In incompressible flows, NS equations have 3 main unknowns in 2D: $u, v, p$, but the continuity equation $\nabla \cdot \mathbf{u} = 0$ does not explicitly contain pressure $p$. This poses a major difficulty in solving the system.

**Giải pháp**: Sử dụng các thuật toán ghép nối vận tốc và áp suất như **SIMPLE** (Semi-Implicit Method for Pressure Linked Equations), **MAC** (Marker and Cell). Các phương pháp này thường biến đổi phương trình liên tục thành một dạng phương trình Poisson cho áp suất (Pressure Poisson Equation).
**Solution**: Use pressure-velocity coupling algorithms like **SIMPLE** or **MAC**. These methods typically transform the continuity equation into a Pressure Poisson Equation.

### 5. Hàm Dòng và Độ Xoáy / Stream Function and Vorticity

Để tránh vấn đề áp suất trong 2D không nén được, người ta có thể đổi biến thành Hàm dòng ($\psi$) và Độ xoáy ($\omega$).
To avoid the pressure issue in 2D incompressible flow, one can transform variables into Stream Function ($\psi$) and Vorticity ($\omega$).

- **Vorticity (Độ xoáy)** $\omega = \nabla \times \mathbf{u}$. Trong 2D: $\omega = \frac{\partial v}{\partial x} - \frac{\partial u}{\partial y}$.
- **Stream function (Hàm dòng)** $\psi$: Định nghĩa sao cho $u = \frac{\partial \psi}{\partial y}$ và $v = -\frac{\partial \psi}{\partial x}$. Việc định nghĩa này tự động thỏa mãn phương trình liên tục.

Phương trình NS biến đổi thành Hệ phương trình Vorticity-Stream function:
The NS equations transform into the Vorticity-Stream function system:
1. Poisson equation for Stream function: $\nabla^2 \psi = -\omega$
2. Vorticity transport equation: $\frac{\partial \omega}{\partial t} + u \frac{\partial \omega}{\partial x} + v \frac{\partial \omega}{\partial y} = \nu \nabla^2 \omega$ (với $\nu = \mu/\rho$ là độ nhớt động học / kinematic viscosity).

---

## Ví Dụ Tính Toán / Worked Examples

### Bài Toán Thực Tế (Engineering Application in Vietnam)
**Tiếng Việt**: Mô phỏng dòng chảy giữa hai mảng song song (Dòng chảy Couette). Giả sử hệ thống xử lý nước thải tại một nhà máy ở khu công nghiệp Sóng Thần (Bình Dương) có một lớp nước rỉ rác ($v=10^{-6}$ m²/s) nằm giữa hai tấm kim loại cách nhau $h = 0.05$ m. Tấm dưới đứng yên, tấm trên bắt đầu chuyển động đột ngột với vận tốc $U_0 = 0.1$ m/s vào thời điểm $t = 0$. Tìm sự phân bố vận tốc $u(y, t)$.

**English**: Simulating flow between two parallel plates (Couette Flow). Assume a wastewater treatment system at a factory in Song Than Industrial Zone (Binh Duong) has a layer of leachate ($v=10^{-6}$ m²/s) between two metal plates separated by $h = 0.05$ m. The bottom plate is stationary, the top plate suddenly moves at velocity $U_0 = 0.1$ m/s at $t = 0$. Find the velocity distribution $u(y, t)$.

### Thiết lập phương trình / Setting up the equation:
Vì dòng chảy song song theo trục x, $v = 0, w = 0$. Vận tốc $u$ chỉ phụ thuộc vào khoảng cách $y$ và thời gian $t$. Gradient áp suất bằng 0.
Since flow is parallel to x-axis, $v = 0, w = 0$. Velocity $u$ depends only on distance $y$ and time $t$. Pressure gradient is zero.
Phương trình Navier-Stokes đơn giản thành Phương trình khuếch tán 1D (1D Diffusion equation):
$$ \frac{\partial u}{\partial t} = \nu \frac{\partial^2 u}{\partial y^2} $$

**Điều kiện biên (Boundary Conditions):**
- Tại $y = 0$ (Tấm dưới): $u(0, t) = 0$ (No-slip condition - Điều kiện không trượt)
- Tại $y = h$ (Tấm trên): $u(h, t) = U_0 = 0.1$ m/s

**Điều kiện ban đầu (Initial Condition):**
- Tại $t = 0$: $u(y, 0) = 0$ cho mọi $0 \le y < h$

### Phương pháp Sai phân hữu hạn (FTCS Scheme):
- Forward Time (Tiến theo thời gian): $\frac{\partial u}{\partial t} \approx \frac{u_j^{n+1} - u_j^n}{\Delta t}$
- Centered Space (Trung tâm theo không gian): $\frac{\partial^2 u}{\partial y^2} \approx \frac{u_{j+1}^n - 2u_j^n + u_{j-1}^n}{(\Delta y)^2}$

Phương trình rời rạc hóa (Discretized equation):
$$ u_j^{n+1} = u_j^n + \frac{\nu \Delta t}{(\Delta y)^2} \left( u_{j+1}^n - 2u_j^n + u_{j-1}^n \right) $$

Đặt $S = \frac{\nu \Delta t}{(\Delta y)^2}$. Để ổn định (stability), $S \le 0.5$.

---

## Code Python / Python Code

Dưới đây là mã nguồn Python sử dụng NumPy và Matplotlib để giải bài toán dòng chảy Couette nói trên.
Below is the Python code using NumPy and Matplotlib to solve the aforementioned Couette flow problem.

```python
import numpy as np
import matplotlib.pyplot as plt

# ==========================================
# THÔNG SỐ VẬT LÝ / PHYSICAL PARAMETERS
# ==========================================
L_y = 0.05          # Khoảng cách 2 bản / Distance between plates (m)
U_top = 0.1         # Vận tốc bản trên / Top plate velocity (m/s)
nu = 1e-6           # Độ nhớt động học của nước / Kinematic viscosity (m^2/s)
t_max = 500.0       # Tổng thời gian mô phỏng / Total simulation time (s)

# ==========================================
# THÔNG SỐ LƯỚI / GRID PARAMETERS
# ==========================================
ny = 51             # Số điểm lưới theo trục y / Number of grid points
dy = L_y / (ny - 1) # Kích thước cell / Cell size (m)
y = np.linspace(0, L_y, ny) # Tọa độ y / y-coordinates

# ==========================================
# ĐIỀU KIỆN ỔN ĐỊNH / STABILITY CONDITION
# ==========================================
# Để FTCS ổn định, S = nu * dt / dy^2 <= 0.5
# Chọn S = 0.4 để đảm bảo an toàn / Choose S = 0.4 for safety
S_target = 0.4
dt = S_target * (dy**2) / nu 
nt = int(t_max / dt) + 1 # Số bước thời gian / Number of time steps

print(f"Kích thước lưới dy = {dy:.5f} m")
print(f"Bước thời gian dt = {dt:.5f} s")
print(f"Tổng số bước thời gian nt = {nt}")

# ==========================================
# KHỞI TẠO BIẾN / INITIALIZATION
# ==========================================
u = np.zeros(ny)     # Vận tốc u tại thời điểm t / Velocity u at time t
un = np.zeros(ny)    # Vận tốc u tại thời điểm t - dt / Velocity u at time t-dt

# Điều kiện biên ban đầu (t=0) / Initial Boundary conditions
u[-1] = U_top        # Tại y = h, u = U_top
u[0] = 0             # Tại y = 0, u = 0 (mặc định / default)

# Lưu lại các mốc thời gian để vẽ đồ thị / Times to save for plotting
plot_times = [10, 50, 100, 200, t_max]
u_profiles = {}

# ==========================================
# VÒNG LẶP THỜI GIAN / TIME LOOP
# ==========================================
time_elapsed = 0.0

for n in range(nt):
    un = u.copy()
    
    # Giải phương trình sai phân cho các nút bên trong (1 đến ny-2)
    # Solve difference equation for interior nodes
    for j in range(1, ny - 1):
        u[j] = un[j] + nu * dt / dy**2 * (un[j+1] - 2*un[j] + un[j-1])
    
    # Ép lại điều kiện biên (đề phòng sai số số học)
    # Enforce boundary conditions (just in case of numerical drift)
    u[0] = 0
    u[-1] = U_top
    
    time_elapsed += dt
    
    # Lưu kết quả tại các mốc thời gian / Save results at specific times
    for pt in plot_times:
        # Nếu thời gian vượt qua mốc plot_time và chưa được lưu
        if time_elapsed >= pt and pt not in u_profiles:
            u_profiles[pt] = u.copy()

# Cập nhật kết quả cuối cùng / Final result
u_profiles[t_max] = u.copy()

# ==========================================
# VẼ ĐỒ THỊ / PLOTTING
# ==========================================
plt.figure(figsize=(8, 6))

# Vẽ trạng thái Steady state lý thuyết (Đường thẳng) / Analytical Steady state
u_steady = U_top * (y / L_y)
plt.plot(u_steady, y, 'k--', linewidth=2, label='Steady State (Analytical)')

# Vẽ các đường profile theo thời gian / Plot profiles over time
colors = ['r', 'g', 'b', 'c', 'm']
for (pt, profile), c in zip(u_profiles.items(), colors):
    plt.plot(profile, y, color=c, label=f't = {pt:.1f} s')

plt.title('Quá Trình Phát Triển Dòng Couette / Couette Flow Development')
plt.xlabel('Vận Tốc / Velocity u (m/s)')
plt.ylabel('Khoảng Cách / Distance y (m)')
plt.legend(loc='lower right')
plt.grid(True)
plt.show()
```

---

## Thực Hành / Lab Activity

### Tiếng Việt
**Nhiệm vụ 1:** Chạy đoạn mã Python phía trên trong Jupyter Notebook. Quan sát cách profile vận tốc (đường cong) dần tiệm cận về một đường thẳng khi thời gian $t$ đủ lớn. Đường thẳng đó đại diện cho trạng thái ổn định (steady state).
**Nhiệm vụ 2:** Thay đổi giá trị độ nhớt động học `nu`. Thử với $\nu = 10^{-5}$ (chất lỏng nhớt hơn) và $\nu = 10^{-7}$. Nhận xét xem mất bao lâu để dòng chảy đạt trạng thái steady state so với nước.
**Nhiệm vụ 3:** Điều chỉnh tham số lưới `ny` thành 101. Quan sát sự thay đổi của bước thời gian `dt`. Nếu bạn cưỡng ép gán `dt` lớn hơn giới hạn ổn định, điều gì sẽ xảy ra với đồ thị?

### English
**Task 1:** Run the Python code above in a Jupyter Notebook. Observe how the velocity profile (the curve) gradually approaches a straight line as time $t$ becomes large enough. That straight line represents the steady state.
**Task 2:** Change the kinematic viscosity value `nu`. Try with $\nu = 10^{-5}$ (more viscous fluid) and $\nu = 10^{-7}$. Comment on how long it takes to reach the steady state compared to water.
**Task 3:** Adjust the grid parameter `ny` to 101. Observe the change in time step `dt`. If you forcefully assign a `dt` larger than the stability limit, what happens to the plot?

---

## ⚠️ Lỗi Thường Gặp / Common Mistakes

### Tiếng Việt
1. **Quên chia tỷ lệ lưới (CFL Condition):** Rất nhiều học viên tự gán giá trị `dt` ngẫu nhiên mà quên mất điều kiện ổn định $S = \nu \Delta t / (\Delta y)^2 \le 0.5$ cho sơ đồ Explicit FTCS. Hậu quả là kết quả tính toán bị bùng nổ (blow-up), giá trị vận tốc ra `NaN` (Not a Number).
2. **Nhầm lẫn giữa áp suất thủy tĩnh và áp suất động lực học:** Trong phương trình Bernoulli, $p$ là tĩnh, $\frac{1}{2}\rho v^2$ là áp suất động. Việc nhầm lẫn khi áp dụng vào đầu vào/đầu ra của ống dẫn sẽ dẫn đến tính sai cột áp máy bơm.
3. **Nhầm lẫn toán tử Nabla:** Viết $\nabla \cdot \mathbf{u}$ (Divergence - vector ra vô hướng) thay cho $\nabla \mathbf{u}$ (Gradient - vector ra tensor).

### English
1. **Ignoring Grid Scaling (CFL Condition):** Many students arbitrarily assign a `dt` value, forgetting the stability condition $S = \nu \Delta t / (\Delta y)^2 \le 0.5$ for the Explicit FTCS scheme. The result is a numerical blow-up, with velocity values becoming `NaN`.
2. **Confusing Static and Dynamic Pressure:** In Bernoulli's equation, $p$ is static, $\frac{1}{2}\rho v^2$ is dynamic pressure. Confusing them when applied to pipe inlets/outlets leads to miscalculating pump head.
3. **Nabla Operator Confusion:** Writing $\nabla \cdot \mathbf{u}$ (Divergence - vector to scalar) instead of $\nabla \mathbf{u}$ (Gradient - vector to tensor).

---

## Câu Hỏi Thảo Luận / Discussion (5 questions)

1. **VN:** Tại sao phương trình Navier-Stokes lại khó giải tích (analytical solution) cho các dòng chảy phức tạp? / **EN:** Why are the Navier-Stokes equations so difficult to solve analytically for complex flows?
2. **VN:** Ý nghĩa vật lý của số hạng đối lưu phi tuyến $(\mathbf{u} \cdot \nabla)\mathbf{u}$ là gì? / **EN:** What is the physical meaning of the non-linear convective term $(\mathbf{u} \cdot \nabla)\mathbf{u}$?
3. **VN:** Trong mạng lưới cấp nước ngầm tại TP.HCM, giả sử nước chảy trong ống tĩnh, ta có thể áp dụng phương trình Euler thay cho Navier-Stokes không? Vì sao? / **EN:** In the underground water supply network in Ho Chi Minh City, assuming water flows in a static pipe, can we apply Euler equations instead of Navier-Stokes? Why?
4. **VN:** Hiện tượng "Blow-up" trong giải số phương trình đạo hàm riêng là gì? Làm thế nào để khắc phục? / **EN:** What is the "Blow-up" phenomenon in numerical solutions of partial differential equations? How can it be mitigated?
5. **VN:** Hàm dòng (Stream function) có tồn tại trong bài toán dòng chảy 3 chiều (3D) không? / **EN:** Does the stream function exist for 3-dimensional (3D) flow problems?

---

## Bài Về Nhà / Homework

### Tiếng Việt
**Đề bài:** Hãy sửa đổi mã Python ở trên để giải quyết bài toán "Dòng chảy Poiseuille" (Poiseuille flow) giữa 2 bản phẳng đứng yên.
1. Cả hai bản phẳng tại $y=0$ và $y=h$ đều đứng yên ($u=0$).
2. Có một gradient áp suất (Pressure gradient) được áp dụng dọc theo trục x: $-\frac{1}{\rho}\frac{\partial p}{\partial x} = G$ (Giả sử $G = 0.005$).
3. Phương trình vi phân cần giải: $\frac{\partial u}{\partial t} = \nu \frac{\partial^2 u}{\partial y^2} + G$
**Yêu cầu:** Vẽ đồ thị sự phát triển của dòng chảy. Dạng của đồ thị ở trạng thái ổn định sẽ là hình gì? (Gợi ý: Nó không còn là đường thẳng nữa).

### English
**Problem:** Modify the Python code above to solve the "Poiseuille flow" problem between 2 stationary flat plates.
1. Both plates at $y=0$ and $y=h$ are stationary ($u=0$).
2. A constant pressure gradient is applied along the x-axis: $-\frac{1}{\rho}\frac{\partial p}{\partial x} = G$ (Assume $G = 0.005$).
3. The governing PDE to solve: $\frac{\partial u}{\partial t} = \nu \frac{\partial^2 u}{\partial y^2} + G$
**Requirement:** Plot the flow development over time. What shape does the steady-state velocity profile take? (Hint: It is no longer a straight line).

---

## Đánh Giá / Assessment Rubric

| Tiêu chí / Criterion | Kém / Poor (0-4) | Đạt / Satisfactory (5-7) | Tốt / Excellent (8-10) |
|---------------------|------------------|--------------------------|------------------------|
| **Hiểu Phương Trình (Understanding Equations)** | Không phân biệt được NS và Euler / Cannot distinguish NS and Euler. | Nêu được phương trình nhưng chưa giải thích được số hạng / States equations but poor explanations. | Giải thích chính xác 100% ý nghĩa từng số hạng / 100% accurate explanation of terms. |
| **Lập trình Python (Python Coding)** | Code lỗi, không chạy / Code crashes. | Code chạy được nhưng biểu đồ sai sót / Code runs but graphs have minor errors. | Chạy mượt mà, cấu trúc code sạch, chú thích rõ / Runs smoothly, clean code, well-commented. |
| **Phân tích ổn định (Stability Analysis)** | Không biết CFL condition / Ignorant of CFL. | Đặt dt dựa trên trial & error / Sets dt by trial & error. | Tính chính xác dt dựa trên lý thuyết / Accurately calculates dt mathematically. |
| **Báo cáo (Report)** | Thiếu format, viết cẩu thả / Bad formatting, sloppy. | Trình bày đủ ý nhưng chưa sâu / Covers points but lacks depth. | Phân tích sâu sắc, biểu đồ đẹp, ngôn ngữ chuẩn / Deep analysis, beautiful plots, professional language. |

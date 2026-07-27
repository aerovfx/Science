# Tuần 5: Lưới Tính & Quy Trình CFD / Week 5: Meshing & CFD Workflow

## Mục Tiêu / Learning Objectives
- **Tiếng Việt:**
  - Nắm vững quy trình tiêu chuẩn của Mô phỏng Động lực học Lưu chất Tính toán (CFD).
  - Hiểu sâu sắc sự khác biệt giữa các loại lưới (Structured, Unstructured, Hybrid, Polyhedral) và biết cách chọn lưới tối ưu cho các bài toán nước phức tạp.
  - Phân tích chi tiết các tiêu chí chất lượng lưới bao gồm Aspect ratio, Skewness, Orthogonality, và y+.
  - Thiết lập điều kiện biên (Boundary conditions) một cách chính xác và phù hợp với thực tế vật lý cho dòng chảy sông ngòi và công trình thủy lợi (Inlet, Outlet, Wall, Symmetry).
  - Xác định kích thước miền tính toán (Domain sizing) và Tỷ lệ tắc nghẽn (Blockage ratio) chuẩn xác.
  - Thực hiện khảo sát đánh giá sự hội tụ của lưới (Mesh convergence study) thông qua phương pháp ngoại suy Richardson (Richardson extrapolation).
  - Làm quen với cấu trúc thư mục của OpenFOAM và các công cụ tạo lưới như blockMesh, snappyHexMesh và Gmsh.
- **English:**
  - Master the standard Computational Fluid Dynamics (CFD) workflow from geometry to post-processing.
  - Deeply understand the differences between mesh types (Structured, Unstructured, Hybrid, Polyhedral) and select the optimal mesh for complex water problems.
  - Detailly analyze mesh quality metrics including Aspect ratio, Skewness, Orthogonality, and y+.
  - Accurately establish physical boundary conditions for river flows and hydraulic structures (Inlet, Outlet, Wall, Symmetry).
  - Accurately determine domain sizing guidelines and blockage ratio.
  - Perform rigorous mesh convergence studies using Richardson Extrapolation.
  - Familiarize with OpenFOAM directory structure and meshing tools like blockMesh, snappyHexMesh, and Gmsh.

## Phần Mềm & Công Cụ / Software & Tools
- OpenFOAM (khuyến nghị phiên bản v2312 từ ESI hoặc Foundation 11 / recommended version v2312 or Foundation 11)
- Gmsh (Phần mềm tạo lưới 3D tự do mã nguồn mở / Open-source 3D finite element mesh generator)
- ParaView (Phần mềm trực quan hóa và Hậu xử lý dữ liệu mạnh mẽ / Powerful data analysis and visualization application)
- Python (với thư viện NumPy, Matplotlib, Pandas) dùng cho kịch bản phân tích chất lượng / for quality analysis scripting

## Lý Thuyết / Theory

### 1. Quy Trình CFD Tiêu Chuẩn Trong Công Trình Thủy / The Standard CFD Workflow in Hydraulic Engineering
Mô phỏng bằng công cụ tính toán thủy động lực học đòi hỏi một quy trình chặt chẽ, đặc biệt với nước là lưu chất không nén được (Incompressible fluid).
/ Computational modeling of fluid dynamics requires a strict workflow, especially with water as an incompressible fluid.

1. **Hình học (Geometry):**
   - Xây dựng mô hình 2D/3D (bằng AutoCAD, SolidWorks, hoặc FreeCAD).
   - Đơn giản hóa mô hình: Loại bỏ các chi tiết quá nhỏ (như bu lông, ốc vít trên cửa van đập) không ảnh hưởng đáng kể đến dòng chảy chính để tiết kiệm số lượng ô lưới.
   - *English:* Build 2D/3D CAD models. Simplify by removing minor details (e.g., bolts on dam gates) that don't significantly affect the macroscopic flow to save mesh count.

2. **Chia Lưới (Meshing / Grid Generation):**
   - Rời rạc hóa (Discretize) không gian liên tục thành các miền thể tích hữu hạn (Finite Volumes).
   - Đây là bước mất nhiều thời gian nhất của kỹ sư (chiếm đến 60-70% thời gian toàn dự án).
   - *English:* Discretize continuous space into finite volumes. This is the most time-consuming step for engineers (up to 60-70% of project time).

3. **Thiết Lập Mô Phỏng (Setup / Pre-processing):**
   - Lựa chọn phương trình chủ đạo (Governing Equations). Với nước, ta giải hệ phương trình Navier-Stokes không nén được (Incompressible N-S equations):
     $$ \nabla \cdot \mathbf{u} = 0 $$
     $$ \frac{\partial \mathbf{u}}{\partial t} + (\mathbf{u} \cdot \nabla)\mathbf{u} = -\frac{1}{\rho}\nabla p + \nu \nabla^2 \mathbf{u} + \mathbf{g} $$
   - Khai báo các mô hình vật lý (VOF cho dòng chảy mặt thoáng, RANS $k-\epsilon$ hoặc $k-\omega$ SST cho dòng rối).
   - Thiết lập điều kiện biên (Boundary conditions) và điều kiện ban đầu (Initial conditions).

4. **Giải Hệ Phương Trình (Solving):**
   - Sử dụng các thuật toán giải lặp áp suất-vận tốc như SIMPLE (cho trạng thái tĩnh - steady state), PISO, hoặc PIMPLE (cho trạng thái động - transient).
   - Theo dõi phần dư (Residuals) - các giá trị này phải giảm mạnh (thường xuống dưới $10^{-4}$ hoặc $10^{-5}$) để đảm bảo hệ phương trình đã hội tụ.

5. **Hậu Xử Lý (Post-processing):**
   - Trích xuất dữ liệu vận tốc, áp suất bề mặt, đường dòng (streamlines), mặt cắt (contours), bề mặt đẳng trị (isosurfaces).
   - Đánh giá lực nâng, lực cản và ứng suất cắt tại bề mặt đáy (bed shear stress).

### 2. Các Loại Lưới Tính / Types of Computational Meshes

Việc chọn lưới ảnh hưởng trực tiếp đến độ chính xác số học (numerical accuracy) và thời gian giải (solving time).
/ Mesh selection directly impacts numerical accuracy and solving time.

- **Lưới Có Cấu Trúc (Structured Mesh):**
  - Chứa các ô phân bố theo quy luật không gian $i, j, k$. Thông thường là khối Lục diện (Hexahedral/Hex) trong 3D hoặc Tứ giác (Quadrilateral/Quad) trong 2D.
  - Tính trực giao của lưới cao, sự khuếch tán số học (Numerical diffusion) giảm tối đa.
  - Phù hợp với các kênh hở thẳng, đường ống đơn giản. Khó xây dựng xung quanh các địa hình tự nhiên quanh co.

- **Lưới Không Cấu Trúc (Unstructured Mesh):**
  - Không có quy luật $i, j, k$. Thường là Tứ diện (Tetrahedral/Tet) trong 3D.
  - Thuận lợi: Rất dễ tự động tạo (Automated generation) xung quanh vật thể cực kỳ phức tạp (như tua bin Francis, hình học rễ cây ngập mặn).
  - Bất lợi: Số lượng ô tăng vọt so với lưới cấu trúc, dẫn đến ma trận hệ phương trình lớn hơn, tốn RAM và thời gian giải hơn.

- **Lưới Lai (Hybrid Mesh):**
  - Giải pháp tối ưu trong công nghiệp. Dùng phần tử Lục diện/Lăng trụ (Prism layers) bám sát bề mặt để giải quyết lớp biên (Boundary layer) nơi có gradient vận tốc lớn, và dùng Tứ diện điền đầy phần không gian rộng lớn bên ngoài.

- **Lưới Đa Diện (Polyhedral Mesh):**
  - Một ô lưới có thể có rất nhiều mặt (10-14 mặt).
  - Trong OpenFOAM và các phần mềm hiện đại, có thể chuyển đổi Tứ diện sang Đa diện (Poly-dual mesh) để giảm số lượng ô (khoảng 3 lần) mà vẫn duy trì độ chính xác cao hơn, tốc độ hội tụ nhanh hơn.

### 3. Đánh Giá Chất Lượng Lưới / Mesh Quality Metrics

Chất lượng lưới quyết định lưới đó có chạy được hay không. / Mesh quality dictates whether the simulation runs or crashes.

1. **Tỷ Lệ Khung hình (Aspect Ratio, $AR$):**
   $$ AR = \frac{L_{max}}{L_{min}} $$
   - Tỷ số giữa chiều dài cạnh dài nhất và ngắn nhất. Trong các khối Prism sát tường, $AR$ có thể lên đến 100-500 mà bộ giải vẫn ổn định. Tuy nhiên, ở vùng dòng chảy tự do (bulk flow), $AR$ nên gần 1 (lưới đẳng hướng - isotropic).

2. **Độ Lệch (Skewness / Face Skewness):**
   - Đo lường khoảng cách từ tâm hình học của mặt (face center) đến giao điểm của đoạn thẳng nối 2 tâm của 2 ô lưới kề nhau.
   - Skewness cao làm suy giảm độ chính xác của đạo hàm không gian. Yêu cầu Skewness $< 4.0$ trong checkMesh (với OpenFOAM, Skewness đo bằng hệ số khác so với Ansys, quy tắc chung là giữ giá trị checkMesh OK).

3. **Tính Trực Giao (Orthogonality / Non-Orthogonality):**
   - Góc hợp bởi vector nối tâm 2 khối $\mathbf{d}$ và vector pháp tuyến của mặt chung $\mathbf{n}$.
   $$ \theta = \cos^{-1} \left( \frac{\mathbf{d} \cdot \mathbf{n}}{|\mathbf{d}||\mathbf{n}|} \right) $$
   - $\theta = 0^\circ$ là trực giao hoàn hảo (Perfect orthogonality).
   - Trong OpenFOAM:
     - $\theta < 70^\circ$: Tốt, an toàn.
     - $70^\circ < \theta < 80^\circ$: Có thể gây mất ổn định, cần bổ sung nhiều lần lặp chỉnh áp suất (non-orthogonal correctors trong `fvSolution`).
     - $\theta > 85^\circ$: Rất xấu, thường gây phân kỳ (Floating point exception).

4. **Khoảng Cách Bề Mặt Không Thứ Nguyên (Dimensionless Wall Distance, $y^+$):**
   $$ y^+ = \frac{y \cdot \sqrt{\tau_w / \rho}}{\nu} $$
   - Đại lượng cực kỳ quan trọng để xử lý rối (Turbulence) ở lớp biên rắn.
   - Khi mô phỏng với hàm tường (Wall Functions) - cách làm phổ biến tiết kiệm tài nguyên cho dòng sông/biển: $30 < y^+ < 300$ (vùng log-law).
   - Khi mô phỏng không có hàm tường, giải thẳng xuống thành (Low-Re models): $y^+ \le 1$ (vùng viscous sublayer).

### 4. Điều Kiện Biên Trong Nước & Môi Trường / Boundary Conditions in Water CFD

Trong OpenFOAM, điều kiện biên được lưu trong thư mục `0/`.

- **Ngõ Vào (Inlet):**
  - **`fixedValue` (Velocity Inlet):** Dùng khi biết trước vận tốc dòng. Phân bố có thể đồng đều (uniform) hoặc theo chiều sâu (logarithmic profile cho sông).
  - **`flowRateInletVelocity`:** Cung cấp lưu lượng khối hoặc thể tích ($Q = m^3/s$). Rất tiện dụng trong kỹ thuật thủy lợi.
- **Ngõ Ra (Outlet):**
  - **`zeroGradient`:** Dòng chảy hoàn toàn phát triển, không có thay đổi gradient.
  - **`fixedValue` áp suất (Pressure Outlet):** Chỉ định áp suất tĩnh (thường là $p = 0$ áp suất dư).
- **Tường Rắn (Wall):**
  - Vận tốc: `noSlip` (vận tốc bằng 0 tại tường).
  - Áp suất: `zeroGradient`.
  - Nếu bờ sông gồ ghề: Sử dụng mô hình độ nhám tương đương `nutkRoughWallFunction` (cần khai báo chiều cao gồ ghề $K_s$).
- **Mặt Khí Quyển (Atmosphere / Top / Free Surface trong 1 pha):**
  - `slip` (Trượt hoàn hảo, không có ứng suất cắt của gió).
  - Hoặc mô phỏng 2 pha (VOF) dùng `inletOutlet` cho áp suất tổng kết hợp khí.
- **Đối Xứng (Symmetry / SymmetryPlane):**
  - Áp dụng khi mô hình (ví dụ một trụ cầu duy nhất nằm giữa sông) đối xứng. Giúp giảm một nửa lượng phần tử lưới. Không có thông lượng khối lượng và xung lượng xuyên qua mặt đối xứng.

### 5. Kích Thước Miền Tính Toán & Tỷ Lệ Tắc Nghẽn / Domain Sizing & Blockage Ratio

Một sai lầm rất lớn của người mới học là đặt các biên vào quá sát vật cản, gây ra các sai số vật lý.
/ A huge mistake by beginners is placing boundaries too close to the obstacle, causing non-physical errors.

- **Vùng Thượng Lưu (Upstream distance):** Phải đặt cách xa vật cản tối thiểu $5D$ đến $10D$ ($D$ là đặc trưng kích thước vật) để dòng chảy không bị vật cản ép ngược trở lại Inlet, làm hỏng điều kiện biên.
- **Vùng Hạ Lưu (Downstream distance):** Đặt cách xa ít nhất $15D$ đến $20D$. Vùng dòng thức (Wake region) phía sau vật cản có rất nhiều cuộn xoáy. Nếu mặt cắt Outlet cắt ngang vùng cuộn xoáy này, dòng chảy ngược (Reverse flow) sẽ xảy ra tại Outlet, cực kỳ dễ gây sập (crash) mô phỏng.
- **Tỷ Lệ Tắc Nghẽn (Blockage Ratio, $BR$):**
  $$ BR = \frac{A_{object}}{A_{channel}} \times 100\% $$
  - Nơi $A_{object}$ là diện tích hình chiếu mặt cắt ngang của vật cản, $A_{channel}$ là diện tích mặt cắt ngang của kênh.
  - Nguyên tắc thiết kế (Best Practice): $BR < 5\%$. Nếu lớn hơn, vật cản sẽ làm hẹp kênh quá nhiều, tạo ra hiệu ứng gia tốc gió/nước kẹp giữa vách hầm và vật cản (Artificial Venturi effect), làm tăng lực cản $F_D$ không thực tế.

### 6. Khảo Sát Hội Tụ Lưới & Ngoại Suy Richardson / Mesh Convergence Study & Richardson Extrapolation

Nhiều người nghĩ lưới càng mịn kết quả càng chính xác. Điều này đúng một nửa, vì lưới càng mịn thì sai số rời rạc (Discretization error) giảm, nhưng tài nguyên tính toán tăng phi mã và sai số làm tròn số máy tính (Round-off error) cũng có thể tăng lên. Do đó ta cần tìm "Độ độc lập lưới" (Grid Independence).

Quy trình chuẩn kỹ thuật bằng phương pháp Richardson:
Giả sử ta giải bài toán tìm Lực đẩy (Thrust) hoặc áp suất trung bình $\phi$. Ta thực hiện với 3 bộ lưới phân cấp liên tiếp: Lưới thô (3), Lưới trung bình (2), và Lưới mịn (1). Kích thước đặc trưng trung bình của ô lưới là $h = \left( \frac{V}{N} \right)^{1/3}$ với $N$ là tổng số ô lưới, $V$ là thể tích toàn miền.

Tỷ lệ tinh chỉnh lưới lý tưởng $r$:
$$ r = \frac{h_3}{h_2} \approx \frac{h_2}{h_1} \ge 1.3 $$

Chỉ số cấp hội tụ (Order of Convergence), $p$:
Tính chênh lệch giữa các đáp án $\varepsilon_{32} = \phi_3 - \phi_2$, $\varepsilon_{21} = \phi_2 - \phi_1$.
$$ p = \frac{\ln \left| \frac{\varepsilon_{32}}{\varepsilon_{21}} \right|}{\ln(r)} $$
*Chú ý:* Nếu tỉ số $\varepsilon_{32} / \varepsilon_{21} < 0$, sự hội tụ đang bị dao động (Oscillatory convergence). Ta không thể dùng Richardson Extrapolation. Nếu nó cực gần 1, hội tụ rất chậm. Một bộ giải bậc 2 như sơ đồ QUICK/Linear Upwind sẽ có $p$ tiệm cận 2.

Giá trị chuẩn ngoại suy liên tục (Richardson Extrapolated value, $\phi_{ext}$):
$$ \phi_{ext} = \phi_1 + \frac{\phi_1 - \phi_2}{r^p - 1} $$

Chỉ số phần trăm sai số lưới (Grid Convergence Index - GCI) cho lưới mịn, dùng hệ số an toàn $F_s = 1.25$ (khi dùng 3 lưới):
$$ GCI_{fine}^{21} = \frac{1.25 \cdot \left| \frac{\phi_2 - \phi_1}{\phi_1} \right|}{r^p - 1} \times 100\% $$
Nếu $GCI < 5\%$, lưới số 1 được xem là an toàn và đáng tin cậy. Dùng lưới này cho toàn bộ dự án.

### 7. Công Cụ Lưới Trong OpenFOAM: blockMesh, snappyHexMesh và Gmsh

OpenFOAM cung cấp sẵn hai công cụ mạnh mẽ:
1. **`blockMesh`:** Đọc cấu hình từ `system/blockMeshDict`. Phân chia miền thành các khối (blocks) 3D có cấu trúc lục diện. Rất tốt cho kênh chữ nhật, ống trụ cơ bản.
2. **`snappyHexMesh`:** Một công cụ tạo lưới bán cấu trúc (hex-dominant mesh) bao bọc quanh vật thể phức tạp. Quy trình của nó:
   - **CastellatedMesh:** Cắt lưới nền (tạo từ blockMesh) thành các bậc thang bám sát khối CAD 3D (.STL hoặc .OBJ). Loại bỏ các khối nằm trong vật cản.
   - **Snap:** Ép (snap) các mặt bậc thang đó dính khít mượt mà vào bề mặt của khối CAD thực.
   - **AddLayers:** Thêm các lớp lăng trụ cực mỏng song song bề mặt để xử lý hiệu ứng lớp biên (Prism layers for boundary layer).
3. **Gmsh:** Một phần mềm bên thứ 3. Giao diện đồ họa (GUI) dễ dùng hoặc code bằng script file `.geo`. Tạo lưới tứ diện (Tet mesh) không cấu trúc rất nhanh. Xuất ra định dạng `.msh`, sau đó vào OpenFOAM gõ `gmshToFoam mesh.msh` để chuyển đổi.

## Ví Dụ Tính Toán / Worked Examples

### Khảo Sát Nước Dâng Tại Đê Biển ĐBSCL (Mekong Delta Sea Dike Overtopping)
Trong điều kiện biến đổi khí hậu ở Việt Nam, triều cường dâng cao tác động vào đê chắn sóng. Viện Khoa học Thủy lợi mô phỏng áp suất nước tác dụng lên mặt đê bằng 3 lưới khác nhau. Áp suất động cực đại được đo bằng:
- Lưới Thô (Coarse, 50,000 ô, $h_3 = 0.3$ m): $P_{max, 3} = 15,200$ Pa
- Lưới TB (Medium, 150,000 ô, $h_2 = 0.2$ m): $P_{max, 2} = 16,500$ Pa
- Lưới Mịn (Fine, 500,000 ô, $h_1 = 0.133$ m): $P_{max, 1} = 16,900$ Pa

**Giải bài toán:**
Kiểm tra tỷ lệ tinh chỉnh $r$:
$$ r = \frac{0.3}{0.2} = 1.5, \quad r = \frac{0.2}{0.133} \approx 1.5 $$
Cấp độ hội tụ $p$:
$$ \varepsilon_{32} = 15200 - 16500 = -1300 $$
$$ \varepsilon_{21} = 16500 - 16900 = -400 $$
Tỷ số $\varepsilon_{32} / \varepsilon_{21} = 1300 / 400 = 3.25 > 0$ (Hội tụ đơn điệu / Monotonic convergence).
$$ p = \frac{\ln(3.25)}{\ln(1.5)} = \frac{1.178}{0.405} \approx 2.91 $$
Giá trị ngoại suy lý thuyết Richardson khi lưới mịn cực độ ($h \to 0$):
$$ P_{ext} = 16900 + \frac{-400}{1.5^{2.91} - 1} = 16900 + \frac{-400}{3.25 - 1} = 16900 - 177.78 = 16722.2 \text{ Pa} $$
Chỉ số sai lệch lưới mịn GCI:
$$ error_{21} = \left| \frac{16500 - 16900}{16900} \right| = 0.0236 \text{ (hoặc 2.36\%)} $$
$$ GCI_{1} = \frac{1.25 \times 2.36\%}{1.5^{2.91} - 1} = \frac{2.95\%}{2.25} \approx 1.31\% $$
Kết luận: Sai số $GCI = 1.31\% < 5\%$. Lưới mịn 500k ô là một lưới xuất sắc và hoàn toàn độc lập với kích thước lưới. / Conclusion: The fine mesh is excellent and grid-independent.

### `blockMeshDict` Cho Trạm Xử Lý Nước Thải (Wastewater Treatment Channel)
Kênh hở dẫn nước thải nhà máy tại KCN Sóng Thần (dài 15m, cao 3m, rộng 0.5m). Mô phỏng dòng tĩnh không chịu nén (incompressible steady-state) 3D.
```cpp
/*--------------------------------*- C++ -*----------------------------------*\
| =========                 |                                                 |
| \\      /  F ield         | OpenFOAM: The Open Source CFD Toolbox           |
|  \\    /   O peration     | Version:  v2312                                 |
|   \\  /    A nd           | Website:  www.openfoam.com                      |
|    \\/     M anipulation  |                                                 |
\*---------------------------------------------------------------------------*/
FoamFile
{
    version     2.0;
    format      ascii;
    class       dictionary;
    object      blockMeshDict;
}
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * //

scale   1; // Tỷ lệ mét / Meter scale

vertices
(
    (0 0 0)    // 0
    (15 0 0)   // 1
    (15 3 0)   // 2
    (0 3 0)    // 3
    (0 0 0.5)  // 4
    (15 0 0.5) // 5
    (15 3 0.5) // 6
    (0 3 0.5)  // 7
);

blocks
(
    // 3D Block: 150 ô hướng X, 30 ô hướng Y, 10 ô hướng Z.
    // Grading: Hệ số dồn ô lưới (Edge grading).
    // Y grading = 10 nghĩa là ô trên cùng (y=3m) to gấp 10 lần ô dưới cùng (y=0m). 
    // Mật độ cao sát đáy để bắt ứng suất cắt!
    hex (0 1 2 3 4 5 6 7) (150 30 10) simpleGrading (1 10 1)
);

edges
(
);

boundary
(
    inletFlow
    {
        type patch; // Dòng chảy vào / Flow enters
        faces
        (
            (0 4 7 3)
        );
    }
    outletFlow
    {
        type patch; // Dòng chảy ra / Flow leaves
        faces
        (
            (1 2 6 5)
        );
    }
    bottomAndSides
    {
        type wall; // Đáy và hai bên hông tường / Bottom and side walls
        faces
        (
            (0 1 5 4) // Đáy (Bottom)
            (0 3 2 1) // Hông 1 (Front Side)
            (4 5 6 7) // Hông 2 (Back Side)
        );
    }
    atmosphereTop
    {
        type patch; // Mặt thoáng khí quyển / Atmosphere top
        faces
        (
            (3 7 6 2)
        );
    }
);

mergePatchPairs
(
);
// ************************************************************************* //
```

## Code Python / Python Code
Dưới đây là một script Python cao cấp dùng để tự động tính toán GCI, phân tích hệ số hội tụ và lưu lại biểu đồ vào file PDF, tiện lợi cho việc xuất báo cáo kỹ thuật. / An advanced Python script for calculating GCI, analyzing convergence, and saving a plot to PDF for technical reports.

```python
import numpy as np
import matplotlib.pyplot as plt

def analyze_mesh_convergence(h_array, phi_array):
    """
    Phân tích hội tụ lưới đa điểm và vẽ biểu đồ.
    h_array: Mảng chứa kích thước lưới [h_min, h_mid, h_max] (Sắp xếp tăng dần).
    phi_array: Mảng giá trị tương ứng [phi_fine, phi_medium, phi_coarse].
    """
    # Đảm bảo dữ liệu theo đúng chuẩn [Fine, Medium, Coarse]
    h1, h2, h3 = h_array[0], h_array[1], h_array[2]
    phi1, phi2, phi3 = phi_array[0], phi_array[1], phi_array[2]
    
    r21 = h2 / h1
    r32 = h3 / h2
    
    eps32 = phi3 - phi2
    eps21 = phi2 - phi1
    
    # Tính cấp p trung bình nếu r không hoàn toàn bằng nhau
    r_avg = (r21 + r32) / 2.0
    p = np.log(abs(eps32 / eps21)) / np.log(r_avg)
    
    # Tính giá trị Richardson
    phi_ext = phi1 + eps21 / (r21**p - 1)
    
    # Tính GCI
    error21 = abs((phi2 - phi1) / phi1)
    gci = 1.25 * error21 / (r21**p - 1) * 100
    
    # In báo cáo màn hình
    print("="*45)
    print("   BÁO CÁO PHÂN TÍCH HỘI TỤ LƯỚI (GCI)")
    print("="*45)
    print(f"Refinement ratios: r21 = {r21:.3f}, r32 = {r32:.3f}")
    print(f"Order of convergence (p): {p:.3f}")
    print(f"Richardson Extrapolated (Phi_ext): {phi_ext:.4f}")
    print(f"Grid Convergence Index (Fine): {gci:.3f} %")
    if gci < 5.0:
        print("=> STATUS: SUCCESS. Fine mesh is independent.")
    else:
        print("=> STATUS: WARNING. Need finer mesh (GCI > 5%).")
        
    # Trực quan hóa dữ liệu (Visualization)
    plt.figure(figsize=(8, 5))
    h_ext = np.insert(h_array, 0, 0.0)
    phi_plot = np.insert(phi_array, 0, phi_ext)
    
    plt.plot(h_ext, phi_plot, 'o-', linewidth=2, markersize=8, label="Computed Values")
    plt.plot(0, phi_ext, 'r*', markersize=12, label="Richardson Extrapolation (h->0)")
    
    plt.title("Khảo Sát Hội Tụ Lưới (Mesh Convergence Study)")
    plt.xlabel("Kích thước đặc trưng ô lưới (Grid Size, h)")
    plt.ylabel("Giá trị cần theo dõi (Variable of Interest, $\phi$)")
    plt.grid(True, linestyle='--', alpha=0.7)
    plt.legend()
    
    # Lưu biểu đồ
    plt.savefig('mesh_convergence.pdf', format='pdf', bbox_inches='tight')
    print("=> Saved plot to 'mesh_convergence.pdf'.")

# Dữ liệu thử nghiệm từ ví dụ đê biển ĐBSCL / Data from Mekong Delta dike example
h_sizes = np.array([0.133, 0.2, 0.3]) # Từ mịn đến thô
p_values = np.array([16900, 16500, 15200])

analyze_mesh_convergence(h_sizes, p_values)
```

## Thực Hành / Lab Activity
**Lab 5: Xây Dựng Lưới & Đánh Giá Chất Lượng Cho Tràn Xả Lũ 2D (2D Spillway Meshing & Quality Check)**

**Bước 1 (Step 1): Khởi tạo thư mục dự án / Initialize Project Directory**
Chúng ta sẽ mô phỏng mô hình tràn xả lũ tĩnh học bằng bộ giải `simpleFoam`.
```bash
mkdir -p $FOAM_RUN/spillway2D
cd $FOAM_RUN/spillway2D
# Copy thư mục mẫu cơ bản từ pitzDaily
cp -r $FOAM_TUTORIALS/incompressible/simpleFoam/pitzDaily/* .
rm -rf 0/* # Xóa dữ liệu cũ, chỉ giữ lại cấu trúc
```

**Bước 2 (Step 2): Viết cấu trúc `blockMeshDict` / Write blockMeshDict**
Dùng text editor (Nano, Vim, hoặc Gedit) mở `system/blockMeshDict`. Viết một khung 10m x 5m đơn giản. Mục tiêu là luyện tập tính năng "Grading" (ép lưới).
```bash
nano system/blockMeshDict
```
Tạo block cơ bản với thông số: `hex (0 1 2 3 4 5 6 7) (80 40 1) simpleGrading (1 0.1 1)`. Chú ý Grading 0.1 nghĩa là sát sàn (đáy đập) lưới mịn, lên cao thì thô dần. Điều này tối ưu việc mô phỏng ứng suất cắt ở đáy đập.

**Bước 3 (Step 3): Kích hoạt chạy chia lưới / Generate the Mesh**
Thực thi lệnh cơ bản:
```bash
blockMesh
```
Đọc log ghi ra màn hình. Chú ý số dòng: `Create polyMesh for time = constant` và tổng số khối được sinh ra.

**Bước 4 (Step 4): Kiểm tra và sửa lỗi toán học / Run checkMesh**
Lệnh quan trọng nhất trước khi chạy mô phỏng:
```bash
checkMesh
```
Phân tích kết quả đầu ra:
1. `Boundary openness`: Bắt buộc phải là `OK` (Lưới phải kín, không hở thủng).
2. `Max Aspect Ratio`: Ghi nhận giá trị. Nếu Grading 0.1 làm ô sát sàn quá dẹt, AR có thể vọt lên > 100.
3. `Non-orthogonality`: Đối với block hình chữ nhật, chỉ số này phải cực kỳ gần 0.

**Bước 5 (Step 5): Trực quan hóa lưới / Visualize in ParaView**
```bash
paraFoam
```
Trong giao diện ParaView:
- Đổi Representation từ "Surface" sang "Surface with Edges".
- Quan sát độ nén của lưới tại phía sàn (bottom). Zoom cận cảnh.
- Cảm nhận sự thay đổi thể tích. Nhớ quy luật: Volume ratio kề nhau $< 1.2$.

## ⚠️ Lỗi Thường Gặp / Common Mistakes
1. **Quên mặt `empty` cho lưới 2D (Forgetting `empty` patches in 2D):** 
   OpenFOAM bản chất luôn là phần mềm mô phỏng không gian 3 chiều. Để bắt nó giải hệ số 2D, bề dày theo trục Z phải giới hạn bằng 1 ô lưới duy nhất, và hai mặt hông (Front và Back Z-normal faces) BẮT BUỘC phải gán `type empty;` trong boundary list của `blockMeshDict`. Quên điều này sẽ khiến mô phỏng giải dư 1 chiều, kết quả sai lệch và hội tụ chậm.
2. **Kích thước ô lưới thay đổi quá đột ngột (Sudden jump in cell size / High Expansion Ratio):** 
   Khi sử dụng `simpleGrading` hoặc AddLayers của snappyHexMesh, tỷ lệ thể tích giữa hai ô lưới kề nhau không bao giờ nên vượt quá 1.2 (20%). Việc chuyển đổi đột ngột làm tăng sai số nội suy số học (truncation errors) trong sơ đồ sai phân hữu hạn, dẫn đến xuất hiện các gradient áp suất không thực (wiggles).
3. **Mô phỏng 2 pha (VOF) nhưng chia lưới quá thô ở mặt thoáng (Coarse mesh at free surface in VOF):** 
   Kỹ thuật Volume of Fluid đòi hỏi dòng chảy khuếch tán bề mặt cực nhạy. Nếu lưới thô, ranh giới nước-không khí (water-air interface) sẽ bị nhòe (smearing). Nước dường như "bốc hơi" vào không khí. Cần dùng lệnh `refineMesh` quanh mặt nước tĩnh.
4. **Miền tính toán quá chật hẹp (Domain restriction / Wall blocking):** 
   Đặt cổng Outlet ngay sát đuôi một trụ cầu hoặc vách đá. Các cuộn xoáy Von Karman đang sinh ra mạnh mẽ thì bị ngắt cụt. Kết quả bộ giải văng ra thông báo "Reverse flow detected at Outlet" và lập tức crash (divergence).
5. **Tính y+ sai mô hình rối (Mismatched y+ and Turbulence model):** 
   Làm lưới cục kỳ mịn sát tường ($y+ = 1$), nhưng trong file `0/nut` và `0/k` lại gọi các hàm tường (Wall Functions) dành cho lưới thô ($y+ > 30$). Điều này gây xung đột nghiêm trọng về mô hình toán học của lớp biên.

## Câu Hỏi Thảo Luận / Discussion (5 questions)
1. Trong một dự án mô phỏng dòng lũ vỡ đập (ví dụ tại hệ thống Thủy điện Hòa Bình đổ xuống đồng bằng), tại sao lưới tứ diện (Tetrahedral unstructured mesh) thường được ưu tiên ở vùng địa hình đồi núi phức tạp thay vì lưới lục diện (Hex)? / In a dam break flood simulation (e.g., from Hoa Binh Dam to the plains), why is unstructured tetrahedral mesh preferred over mountainous terrain instead of hexahedral mesh?
2. Nếu chỉ số y+ tại điểm đo dòng chảy ở lòng sông Cửu Long quá lớn (ví dụ $y^+ = 800$), điều gì sẽ xảy ra với độ chính xác của kết quả tính toán lực cắt đáy (bed shear stress) gây xói lở? / If y+ at a riverbed measurement point in the Mekong River is too high ($y^+ = 800$), what happens to the accuracy of the bed shear stress calculation predicting erosion?
3. Phân tích tác động của "Tính trực giao kém" (Poor non-orthogonality > 80 độ) đến quá trình giải phương trình áp suất (Pressure Poisson equation) trong thuật toán PISO. Cần dùng lệnh gì trong `fvSolution` để khắc phục tạm thời? / Analyze the impact of poor non-orthogonality (> 80 degrees) on the pressure correction equation in the PISO algorithm. What setting in `fvSolution` can temporarily mitigate this?
4. Tại sao cần chạy khảo sát độc lập lưới (Mesh independence) cho mọi nghiên cứu CFD khoa học dùng để xuất bản bài báo? Liệt kê ngắn gọn quy trình 3 bước cốt lõi. / Why is mesh independence strictly required for all publishable scientific CFD studies? Briefly list the 3 core steps.
5. Việc áp dụng lưới động tinh chỉnh thích nghi (Adaptive Mesh Refinement - `interIsoFoam`) trong quá trình mô phỏng nước dâng do bão (Storm surge) có ý nghĩa và lợi ích tối ưu tài nguyên máy tính tính toán như thế nào? / What are the meanings and computational resource optimization benefits of using Adaptive Mesh Refinement during a storm surge simulation?

## Bài Về Nhà / Homework
**Đề bài / Assignment:** Khảo Sát Độc Lập Lưới Quanh Trụ Cầu Đáy Sông (Mesh Independence for a Bridge Pier).

**Bối cảnh:** Bạn là kỹ sư thiết kế cho một dự án cầu mới vắt ngang sông Đồng Nai. Thiết kế móng cầu dạng trụ tròn (đường kính $D = 1m$). Dòng chảy sông tốc độ không đổi $U = 2 m/s$. Bạn cần chứng minh mô hình tính toán Drag Force là đáng tin cậy cho Hội đồng Thẩm định. / Context: You are a design engineer for a new bridge across the Dong Nai River. The pier is circular ($D=1m$). River flow is $U = 2 m/s$. You must prove the computed Drag Force is reliable for the review board.

**Nhiệm vụ cụ thể:**
1. Khởi tạo case OpenFOAM (dùng `simpleFoam`) 2D.
2. Tạo 3 bộ lưới phân cấp bằng `blockMesh` với tỷ lệ tinh chỉnh $r \approx 1.4 \to 1.5$. Ví dụ: Lưới 1: 15,000 ô; Lưới 2: 30,000 ô; Lưới 3: 65,000 ô. (Đảm bảo $y+$ thỏa mãn mô hình k-epsilon sinh viên chọn). / Create 3 grid levels with $r \approx 1.4-1.5$.
3. Chạy mô phỏng tính tới hội tụ (residuals $< 10^{-4}$) và trích xuất giá trị lực cản tĩnh (Steady-state drag force) bằng function object `forces`. / Run to convergence and extract drag forces.
4. Áp dụng đoạn code Python ở phần trên (hoặc code tay) để tính GCI (Grid Convergence Index). / Use the Python code to calculate GCI.
5. Soạn thảo nộp báo cáo (PDF, tối đa 2 trang A4) gồm:
   - Bảng so sánh lực cản 3 lưới.
   - Biểu đồ hội tụ.
   - Trị số ngoại suy và GCI.
   - Hình ảnh ParaView phân bố áp suất quang trụ cầu của lưới mịn nhất.

*Lưu ý:* Báo cáo nộp bằng tiếng Anh hoặc tiếng Việt vào hệ thống LMS trước ngày thứ 6 tuần sau. / *Note:* Submit in English or Vietnamese to the LMS by next Friday.

## Đánh Giá / Assessment Rubric
| Tiêu chí / Criteria | Xuất sắc / Excellent (9-10) | Khá / Good (7-8) | Cơ bản / Basic (5-6) | Cần cải thiện / Needs Work (<5) |
|----------------------------------|----------------------------------------------------|--------------------------------------------------|------------------------------------------------|--------------------------------------------------|
| **Chất lượng Lưới (30%)** <br> *(Mesh Quality)* | Hình học chính xác, `checkMesh` báo `OK` sạch sẽ, lưới ép sát tường mượt mà (grading tốt), y+ khớp với lý thuyết dòng rối Wall Function. / Accurate geom, zero errors, smooth wall grading, valid y+. | Ít lỗi skewness cực nhỏ chấp nhận được, chưa tối ưu lớp biên hoàn toàn nhưng chạy ổn. / Minor skewness, boundary layer not fully optimized but runs fine. | Lưới thô, chạy được nhưng chia tỷ lệ sai, kích thước đột ngột gây cảnh báo (warning). / Coarse mesh, poor grading, sudden jumps causing warnings. | Lỗi tạo lưới, file dictionary sai cú pháp, `checkMesh` báo `Failed`. Lưới phân kỳ. / Meshing fails, syntax errors, checkMesh fails, diverge. |
| **Phân tích Hội tụ (40%)** <br> *(Convergence Analysis)* | Áp dụng chuẩn ngoại suy Richardson đa điểm, code Python tính đúng GCI < 5%, biểu đồ rõ ràng chuyên nghiệp. / Correct multi-point Richardson, GCI < 5%, pro plots. | Áp dụng đúng công thức tìm cấp hội tụ $p$, nhưng GCI vẫn còn khá cao (> 5%) do lưới chưa đủ nhỏ. / Correct p but GCI > 5% due to coarse baseline. | Không tính $p$ và GCI, chỉ ghi lệch bao nhiêu phần trăm bằng toán học thô sơ. / No GCI, only reported naive percentage diff. | Không làm bước phân tích hội tụ lưới hoàn toàn (bỏ qua bước trọng tâm). / Did not perform mesh convergence study at all. |
| **Báo cáo Kỹ thuật (30%)** <br> *(Technical Report)* | Giải thích hiện tượng rành mạch, hình ảnh cắt lớp ParaView sắc nét, phân tích vật lý lực cản rất sâu sắc có liên hệ thực tế đê kè. / Clear explanation, sharp ParaView slices, deep drag physical insights. | Hình ảnh chụp đầy đủ, lý giải hợp lý nhưng còn mang tính lý thuyết suông. / Adequate screenshots and reasonable but overly theoretical text. | Trình bày thiếu hình ảnh minh họa, không cắt lớp áp suất, kết luận mơ hồ hoặc quá ngắn. / Missing contour plots, vague or too short conclusions. | Chép code của nhau, nộp file log mà không có biện luận hay báo cáo đi kèm. / Copied logs without discussion or written report. |

---
**Tài liệu đọc thêm / Further Reading:**
- Roache, P. J. (1994). "Perspective: A Method for Uniform Reporting of Grid Refinement Studies". Journal of Fluids Engineering.
- "Computational Fluid Dynamics: The Basics with Applications" by John D. Anderson, Jr. - Chapter 5 (Grid Generation).
- Tài liệu Hướng dẫn Sử dụng OpenFOAM User Guide v2312 - Mục `blockMesh` và `snappyHexMesh`.
- Celik, I. B., Ghia, U., Roache, P. J., & Freitas, C. J. (2008). "Procedure for estimation and reporting of uncertainty due to discretization in CFD applications". Journal of Fluids Engineering.
- Versteeg, H. K., & Malalasekera, W. (2007). "An Introduction to Computational Fluid Dynamics: The Finite Volume Method". Pearson Education.

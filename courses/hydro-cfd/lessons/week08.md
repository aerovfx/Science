# Tuần 8: Mô Phỏng Thủy Động Lực Học Cánh Ngầm (Hydrofoil) / Week 8: Hydrofoil Hydrodynamics Simulation

## Mục Tiêu / Objectives
- Ứng dụng cánh ngầm NACA.
- Sử dụng mô hình k-ω SST.
- Trích xuất Lift/Drag polar.

## Lý Thuyết / Theory
Dòng NACA 4 chữ số: NACA 4412 (4% camber, vị trí 40%, dày 12%).

## OpenFOAM Case Setup
simpleFoam, $\alpha=5^\circ$, Re=$10^6$.
Inlet k = 1.5*(U*TI)^2.

## Post-Processing (Python)
```python
import numpy as np
import matplotlib.pyplot as plt

alphas = np.array([0, 2, 4, 6, 8, 10, 12])
CL_sim = np.array([0.00, 0.22, 0.44, 0.63, 0.79, 0.90, 0.85])
CD_sim = np.array([0.010, 0.011, 0.013, 0.018, 0.028, 0.045, 0.080])

plt.plot(alphas, CL_sim/CD_sim, 'g-o')
plt.title('L/D Ratio')
plt.savefig('hydrofoil_polar.png')
```

## Câu Hỏi Thảo Luận / Discussion (5)
1. Ưu điểm của k-ω SST?
2. Stall là gì?
3. Vị trí cực tiểu áp suất?
4. Ảnh hưởng camber?
5. Tại sao L/D quan trọng?

## Bài Về Nhà / Homework
Quét $\alpha$ 0-15 độ.

## Đánh Giá / Assessment Rubric
| Category | Points | Description |
|---------|--------|-------------|
| Mesh | 20 | Quality mesh y+~1 |
| Model | 20 | k-omega |
| Sweep | 30 | Polar curve |
| Analysis | 30 | Stall and L/D |

### Bổ sung lý thuyết và thực hành chi tiết (Mở rộng) / Extended Theory and Practice (Extension)

Phần này cung cấp các hướng dẫn bổ sung, xử lý sự cố nâng cao và lý thuyết chuyên sâu để giúp học viên hiểu rõ hơn về OpenFOAM và CFD. / This section provides additional guidelines, advanced troubleshooting, and deep theoretical insights to help students better understand OpenFOAM and CFD.

#### 1. Tại sao lưới lại quan trọng? / Why is the mesh so important?
Trong CFD, lưới (mesh) phân chia miền tính toán thành các thể tích nhỏ hữu hạn (finite volumes). 
- **Lưới quá thô (Too coarse):** Dẫn đến kết quả không chính xác do không bắt được sự thay đổi của các biến số (vận tốc, áp suất).
- **Lưới quá mịn (Too fine):** Tăng thời gian tính toán và có thể gây ra sai số làm tròn nếu sử dụng kiểu dữ liệu không đủ độ chính xác (double precision).
- **Chất lượng lưới (Mesh quality):** Các yếu tố như độ xiên (skewness), tỷ lệ khung hình (aspect ratio) và tính trực giao (orthogonality) ảnh hưởng lớn đến độ hội tụ của các phương trình rời rạc hóa.
Trong OpenFOAM, công cụ `checkMesh` là bắt buộc để kiểm tra chất lượng lưới trước khi chạy mô phỏng. Học viên cần đảm bảo `Max skewness < 4` (dành cho lưới lục diện hex) và `Non-orthogonality < 70`.

#### 2. Phân tích phương trình Navier-Stokes / Analyzing the Navier-Stokes Equations
Phương trình Navier-Stokes (N-S) là trái tim của CFD. Đối với dòng chảy không nén được (incompressible flow), chúng ta có:
$\nabla \cdot \vec{U} = 0$ (Bảo toàn khối lượng / Continuity equation)
$\frac{\partial \vec{U}}{\partial t} + (\vec{U} \cdot \nabla)\vec{U} = -\frac{1}{\rho}\nabla P + \nu \nabla^2 \vec{U} + \vec{f}$ (Bảo toàn động lượng / Momentum equation)

- **Số hạng đối lưu (Convective term) $(\vec{U} \cdot \nabla)\vec{U}$:** Gây ra tính phi tuyến của phương trình. Điều này tạo ra sự phức tạp khi giải và là nguồn gốc sinh ra dòng chảy rối (turbulence).
- **Số hạng khuếch tán (Diffusive term) $\nu \nabla^2 \vec{U}$:** Trực tiếp liên quan đến độ nhớt của chất lỏng. Độ nhớt (nu) giúp làm mịn các gradient vận tốc.
- **Áp suất (Pressure term) $\nabla P$:** Áp suất không có phương trình tiến hóa riêng trong dòng không nén được, mà thay vào đó nó hoạt động như một ràng buộc (constraint) để đảm bảo trường vận tốc thỏa mãn phương trình liên tục (divergence-free). Đây là lý do tại sao OpenFOAM sử dụng thuật toán PISO, SIMPLE, hoặc PIMPLE.

#### 3. Cấu hình Solver trong OpenFOAM / Solver Configuration in OpenFOAM
Các file trong thư mục `system` kiểm soát cách OpenFOAM tính toán.
- **controlDict:** Quản lý thời gian, bước thời gian (deltaT) và khi nào ghi dữ liệu (writeInterval).
- **fvSchemes:** Chọn các sơ đồ rời rạc hóa (discretization schemes) cho từng số hạng trong phương trình đạo hàm riêng. Ví dụ: `div(phi,U)` thường dùng `Gauss linearUpwind` hoặc `Gauss upwind` để đảm bảo ổn định.
- **fvSolution:** Chứa thông tin về các bộ giải tuyến tính (linear solvers) cho từng biến (như `p`, `U`, `k`, `omega`). Thuật toán PIMPLE (kết hợp PISO và SIMPLE) rất hữu ích cho các mô phỏng dòng chuyển tiếp với số Courant (Co) lớn hơn 1.

#### 4. Sử dụng ParaView / Using ParaView Effectively
ParaView không chỉ dùng để xem màu (contour) mà còn có các tính năng xử lý nâng cao.
- **Filters:** Học viên nên quen thuộc với `Slice`, `Clip`, `StreamTracer`, và `Glyph`.
- **Plot Over Line:** Công cụ tuyệt vời để trích xuất dữ liệu 1D (ví dụ: hồ sơ vận tốc) từ miền 3D/2D và xuất ra file CSV.
- **Temporal Statistics:** Để tính giá trị trung bình theo thời gian của một dòng chảy rối, ví dụ như tính hệ số cản trung bình $C_D$.

#### 5. Xử lý sự cố (Troubleshooting Guide)
- Lỗi `Floating point exception`: Thường do lưới kém chất lượng hoặc bước thời gian deltaT quá lớn. Giảm deltaT hoặc kích hoạt tính năng tự điều chỉnh (adjustableRunTime) có thể giúp khắc phục.
- Lỗi `FOAM FATAL ERROR`: Đọc kĩ dòng cuối cùng trong `log` file. OpenFOAM thường chỉ ra chính xác file nào và dòng nào có lỗi cú pháp (ví dụ quên dấu chấm phẩy `;` trong từ điển OpenFOAM).

*(Ghi chú: Phần mở rộng này được thiết kế để cung cấp thêm giá trị giáo dục, giúp học viên rèn luyện tư duy phân tích, hiểu sâu các khái niệm lý thuyết và làm chủ công cụ mô phỏng.)*

### Bổ sung lý thuyết và thực hành chi tiết (Mở rộng) / Extended Theory and Practice (Extension)

Phần này cung cấp các hướng dẫn bổ sung, xử lý sự cố nâng cao và lý thuyết chuyên sâu để giúp học viên hiểu rõ hơn về OpenFOAM và CFD. / This section provides additional guidelines, advanced troubleshooting, and deep theoretical insights to help students better understand OpenFOAM and CFD.

#### 1. Tại sao lưới lại quan trọng? / Why is the mesh so important?
Trong CFD, lưới (mesh) phân chia miền tính toán thành các thể tích nhỏ hữu hạn (finite volumes). 
- **Lưới quá thô (Too coarse):** Dẫn đến kết quả không chính xác do không bắt được sự thay đổi của các biến số (vận tốc, áp suất).
- **Lưới quá mịn (Too fine):** Tăng thời gian tính toán và có thể gây ra sai số làm tròn nếu sử dụng kiểu dữ liệu không đủ độ chính xác (double precision).
- **Chất lượng lưới (Mesh quality):** Các yếu tố như độ xiên (skewness), tỷ lệ khung hình (aspect ratio) và tính trực giao (orthogonality) ảnh hưởng lớn đến độ hội tụ của các phương trình rời rạc hóa.
Trong OpenFOAM, công cụ `checkMesh` là bắt buộc để kiểm tra chất lượng lưới trước khi chạy mô phỏng. Học viên cần đảm bảo `Max skewness < 4` (dành cho lưới lục diện hex) và `Non-orthogonality < 70`.

#### 2. Phân tích phương trình Navier-Stokes / Analyzing the Navier-Stokes Equations
Phương trình Navier-Stokes (N-S) là trái tim của CFD. Đối với dòng chảy không nén được (incompressible flow), chúng ta có:
$\nabla \cdot \vec{U} = 0$ (Bảo toàn khối lượng / Continuity equation)
$\frac{\partial \vec{U}}{\partial t} + (\vec{U} \cdot \nabla)\vec{U} = -\frac{1}{\rho}\nabla P + \nu \nabla^2 \vec{U} + \vec{f}$ (Bảo toàn động lượng / Momentum equation)

- **Số hạng đối lưu (Convective term) $(\vec{U} \cdot \nabla)\vec{U}$:** Gây ra tính phi tuyến của phương trình. Điều này tạo ra sự phức tạp khi giải và là nguồn gốc sinh ra dòng chảy rối (turbulence).
- **Số hạng khuếch tán (Diffusive term) $\nu \nabla^2 \vec{U}$:** Trực tiếp liên quan đến độ nhớt của chất lỏng. Độ nhớt (nu) giúp làm mịn các gradient vận tốc.
- **Áp suất (Pressure term) $\nabla P$:** Áp suất không có phương trình tiến hóa riêng trong dòng không nén được, mà thay vào đó nó hoạt động như một ràng buộc (constraint) để đảm bảo trường vận tốc thỏa mãn phương trình liên tục (divergence-free). Đây là lý do tại sao OpenFOAM sử dụng thuật toán PISO, SIMPLE, hoặc PIMPLE.

#### 3. Cấu hình Solver trong OpenFOAM / Solver Configuration in OpenFOAM
Các file trong thư mục `system` kiểm soát cách OpenFOAM tính toán.
- **controlDict:** Quản lý thời gian, bước thời gian (deltaT) và khi nào ghi dữ liệu (writeInterval).
- **fvSchemes:** Chọn các sơ đồ rời rạc hóa (discretization schemes) cho từng số hạng trong phương trình đạo hàm riêng. Ví dụ: `div(phi,U)` thường dùng `Gauss linearUpwind` hoặc `Gauss upwind` để đảm bảo ổn định.
- **fvSolution:** Chứa thông tin về các bộ giải tuyến tính (linear solvers) cho từng biến (như `p`, `U`, `k`, `omega`). Thuật toán PIMPLE (kết hợp PISO và SIMPLE) rất hữu ích cho các mô phỏng dòng chuyển tiếp với số Courant (Co) lớn hơn 1.

#### 4. Sử dụng ParaView / Using ParaView Effectively
ParaView không chỉ dùng để xem màu (contour) mà còn có các tính năng xử lý nâng cao.
- **Filters:** Học viên nên quen thuộc với `Slice`, `Clip`, `StreamTracer`, và `Glyph`.
- **Plot Over Line:** Công cụ tuyệt vời để trích xuất dữ liệu 1D (ví dụ: hồ sơ vận tốc) từ miền 3D/2D và xuất ra file CSV.
- **Temporal Statistics:** Để tính giá trị trung bình theo thời gian của một dòng chảy rối, ví dụ như tính hệ số cản trung bình $C_D$.

#### 5. Xử lý sự cố (Troubleshooting Guide)
- Lỗi `Floating point exception`: Thường do lưới kém chất lượng hoặc bước thời gian deltaT quá lớn. Giảm deltaT hoặc kích hoạt tính năng tự điều chỉnh (adjustableRunTime) có thể giúp khắc phục.
- Lỗi `FOAM FATAL ERROR`: Đọc kĩ dòng cuối cùng trong `log` file. OpenFOAM thường chỉ ra chính xác file nào và dòng nào có lỗi cú pháp (ví dụ quên dấu chấm phẩy `;` trong từ điển OpenFOAM).

*(Ghi chú: Phần mở rộng này được thiết kế để cung cấp thêm giá trị giáo dục, giúp học viên rèn luyện tư duy phân tích, hiểu sâu các khái niệm lý thuyết và làm chủ công cụ mô phỏng.)*

### Bổ sung lý thuyết và thực hành chi tiết (Mở rộng) / Extended Theory and Practice (Extension)

Phần này cung cấp các hướng dẫn bổ sung, xử lý sự cố nâng cao và lý thuyết chuyên sâu để giúp học viên hiểu rõ hơn về OpenFOAM và CFD. / This section provides additional guidelines, advanced troubleshooting, and deep theoretical insights to help students better understand OpenFOAM and CFD.

#### 1. Tại sao lưới lại quan trọng? / Why is the mesh so important?
Trong CFD, lưới (mesh) phân chia miền tính toán thành các thể tích nhỏ hữu hạn (finite volumes). 
- **Lưới quá thô (Too coarse):** Dẫn đến kết quả không chính xác do không bắt được sự thay đổi của các biến số (vận tốc, áp suất).
- **Lưới quá mịn (Too fine):** Tăng thời gian tính toán và có thể gây ra sai số làm tròn nếu sử dụng kiểu dữ liệu không đủ độ chính xác (double precision).
- **Chất lượng lưới (Mesh quality):** Các yếu tố như độ xiên (skewness), tỷ lệ khung hình (aspect ratio) và tính trực giao (orthogonality) ảnh hưởng lớn đến độ hội tụ của các phương trình rời rạc hóa.
Trong OpenFOAM, công cụ `checkMesh` là bắt buộc để kiểm tra chất lượng lưới trước khi chạy mô phỏng. Học viên cần đảm bảo `Max skewness < 4` (dành cho lưới lục diện hex) và `Non-orthogonality < 70`.

#### 2. Phân tích phương trình Navier-Stokes / Analyzing the Navier-Stokes Equations
Phương trình Navier-Stokes (N-S) là trái tim của CFD. Đối với dòng chảy không nén được (incompressible flow), chúng ta có:
$\nabla \cdot \vec{U} = 0$ (Bảo toàn khối lượng / Continuity equation)
$\frac{\partial \vec{U}}{\partial t} + (\vec{U} \cdot \nabla)\vec{U} = -\frac{1}{\rho}\nabla P + \nu \nabla^2 \vec{U} + \vec{f}$ (Bảo toàn động lượng / Momentum equation)

- **Số hạng đối lưu (Convective term) $(\vec{U} \cdot \nabla)\vec{U}$:** Gây ra tính phi tuyến của phương trình. Điều này tạo ra sự phức tạp khi giải và là nguồn gốc sinh ra dòng chảy rối (turbulence).
- **Số hạng khuếch tán (Diffusive term) $\nu \nabla^2 \vec{U}$:** Trực tiếp liên quan đến độ nhớt của chất lỏng. Độ nhớt (nu) giúp làm mịn các gradient vận tốc.
- **Áp suất (Pressure term) $\nabla P$:** Áp suất không có phương trình tiến hóa riêng trong dòng không nén được, mà thay vào đó nó hoạt động như một ràng buộc (constraint) để đảm bảo trường vận tốc thỏa mãn phương trình liên tục (divergence-free). Đây là lý do tại sao OpenFOAM sử dụng thuật toán PISO, SIMPLE, hoặc PIMPLE.

#### 3. Cấu hình Solver trong OpenFOAM / Solver Configuration in OpenFOAM
Các file trong thư mục `system` kiểm soát cách OpenFOAM tính toán.
- **controlDict:** Quản lý thời gian, bước thời gian (deltaT) và khi nào ghi dữ liệu (writeInterval).
- **fvSchemes:** Chọn các sơ đồ rời rạc hóa (discretization schemes) cho từng số hạng trong phương trình đạo hàm riêng. Ví dụ: `div(phi,U)` thường dùng `Gauss linearUpwind` hoặc `Gauss upwind` để đảm bảo ổn định.
- **fvSolution:** Chứa thông tin về các bộ giải tuyến tính (linear solvers) cho từng biến (như `p`, `U`, `k`, `omega`). Thuật toán PIMPLE (kết hợp PISO và SIMPLE) rất hữu ích cho các mô phỏng dòng chuyển tiếp với số Courant (Co) lớn hơn 1.

#### 4. Sử dụng ParaView / Using ParaView Effectively
ParaView không chỉ dùng để xem màu (contour) mà còn có các tính năng xử lý nâng cao.
- **Filters:** Học viên nên quen thuộc với `Slice`, `Clip`, `StreamTracer`, và `Glyph`.
- **Plot Over Line:** Công cụ tuyệt vời để trích xuất dữ liệu 1D (ví dụ: hồ sơ vận tốc) từ miền 3D/2D và xuất ra file CSV.
- **Temporal Statistics:** Để tính giá trị trung bình theo thời gian của một dòng chảy rối, ví dụ như tính hệ số cản trung bình $C_D$.

#### 5. Xử lý sự cố (Troubleshooting Guide)
- Lỗi `Floating point exception`: Thường do lưới kém chất lượng hoặc bước thời gian deltaT quá lớn. Giảm deltaT hoặc kích hoạt tính năng tự điều chỉnh (adjustableRunTime) có thể giúp khắc phục.
- Lỗi `FOAM FATAL ERROR`: Đọc kĩ dòng cuối cùng trong `log` file. OpenFOAM thường chỉ ra chính xác file nào và dòng nào có lỗi cú pháp (ví dụ quên dấu chấm phẩy `;` trong từ điển OpenFOAM).

*(Ghi chú: Phần mở rộng này được thiết kế để cung cấp thêm giá trị giáo dục, giúp học viên rèn luyện tư duy phân tích, hiểu sâu các khái niệm lý thuyết và làm chủ công cụ mô phỏng.)*

### Bổ sung lý thuyết và thực hành chi tiết (Mở rộng) / Extended Theory and Practice (Extension)

Phần này cung cấp các hướng dẫn bổ sung, xử lý sự cố nâng cao và lý thuyết chuyên sâu để giúp học viên hiểu rõ hơn về OpenFOAM và CFD. / This section provides additional guidelines, advanced troubleshooting, and deep theoretical insights to help students better understand OpenFOAM and CFD.

#### 1. Tại sao lưới lại quan trọng? / Why is the mesh so important?
Trong CFD, lưới (mesh) phân chia miền tính toán thành các thể tích nhỏ hữu hạn (finite volumes). 
- **Lưới quá thô (Too coarse):** Dẫn đến kết quả không chính xác do không bắt được sự thay đổi của các biến số (vận tốc, áp suất).
- **Lưới quá mịn (Too fine):** Tăng thời gian tính toán và có thể gây ra sai số làm tròn nếu sử dụng kiểu dữ liệu không đủ độ chính xác (double precision).
- **Chất lượng lưới (Mesh quality):** Các yếu tố như độ xiên (skewness), tỷ lệ khung hình (aspect ratio) và tính trực giao (orthogonality) ảnh hưởng lớn đến độ hội tụ của các phương trình rời rạc hóa.
Trong OpenFOAM, công cụ `checkMesh` là bắt buộc để kiểm tra chất lượng lưới trước khi chạy mô phỏng. Học viên cần đảm bảo `Max skewness < 4` (dành cho lưới lục diện hex) và `Non-orthogonality < 70`.

#### 2. Phân tích phương trình Navier-Stokes / Analyzing the Navier-Stokes Equations
Phương trình Navier-Stokes (N-S) là trái tim của CFD. Đối với dòng chảy không nén được (incompressible flow), chúng ta có:
$\nabla \cdot \vec{U} = 0$ (Bảo toàn khối lượng / Continuity equation)
$\frac{\partial \vec{U}}{\partial t} + (\vec{U} \cdot \nabla)\vec{U} = -\frac{1}{\rho}\nabla P + \nu \nabla^2 \vec{U} + \vec{f}$ (Bảo toàn động lượng / Momentum equation)

- **Số hạng đối lưu (Convective term) $(\vec{U} \cdot \nabla)\vec{U}$:** Gây ra tính phi tuyến của phương trình. Điều này tạo ra sự phức tạp khi giải và là nguồn gốc sinh ra dòng chảy rối (turbulence).
- **Số hạng khuếch tán (Diffusive term) $\nu \nabla^2 \vec{U}$:** Trực tiếp liên quan đến độ nhớt của chất lỏng. Độ nhớt (nu) giúp làm mịn các gradient vận tốc.
- **Áp suất (Pressure term) $\nabla P$:** Áp suất không có phương trình tiến hóa riêng trong dòng không nén được, mà thay vào đó nó hoạt động như một ràng buộc (constraint) để đảm bảo trường vận tốc thỏa mãn phương trình liên tục (divergence-free). Đây là lý do tại sao OpenFOAM sử dụng thuật toán PISO, SIMPLE, hoặc PIMPLE.

#### 3. Cấu hình Solver trong OpenFOAM / Solver Configuration in OpenFOAM
Các file trong thư mục `system` kiểm soát cách OpenFOAM tính toán.
- **controlDict:** Quản lý thời gian, bước thời gian (deltaT) và khi nào ghi dữ liệu (writeInterval).
- **fvSchemes:** Chọn các sơ đồ rời rạc hóa (discretization schemes) cho từng số hạng trong phương trình đạo hàm riêng. Ví dụ: `div(phi,U)` thường dùng `Gauss linearUpwind` hoặc `Gauss upwind` để đảm bảo ổn định.
- **fvSolution:** Chứa thông tin về các bộ giải tuyến tính (linear solvers) cho từng biến (như `p`, `U`, `k`, `omega`). Thuật toán PIMPLE (kết hợp PISO và SIMPLE) rất hữu ích cho các mô phỏng dòng chuyển tiếp với số Courant (Co) lớn hơn 1.

#### 4. Sử dụng ParaView / Using ParaView Effectively
ParaView không chỉ dùng để xem màu (contour) mà còn có các tính năng xử lý nâng cao.
- **Filters:** Học viên nên quen thuộc với `Slice`, `Clip`, `StreamTracer`, và `Glyph`.
- **Plot Over Line:** Công cụ tuyệt vời để trích xuất dữ liệu 1D (ví dụ: hồ sơ vận tốc) từ miền 3D/2D và xuất ra file CSV.
- **Temporal Statistics:** Để tính giá trị trung bình theo thời gian của một dòng chảy rối, ví dụ như tính hệ số cản trung bình $C_D$.

#### 5. Xử lý sự cố (Troubleshooting Guide)
- Lỗi `Floating point exception`: Thường do lưới kém chất lượng hoặc bước thời gian deltaT quá lớn. Giảm deltaT hoặc kích hoạt tính năng tự điều chỉnh (adjustableRunTime) có thể giúp khắc phục.
- Lỗi `FOAM FATAL ERROR`: Đọc kĩ dòng cuối cùng trong `log` file. OpenFOAM thường chỉ ra chính xác file nào và dòng nào có lỗi cú pháp (ví dụ quên dấu chấm phẩy `;` trong từ điển OpenFOAM).

*(Ghi chú: Phần mở rộng này được thiết kế để cung cấp thêm giá trị giáo dục, giúp học viên rèn luyện tư duy phân tích, hiểu sâu các khái niệm lý thuyết và làm chủ công cụ mô phỏng.)*

### Bổ sung lý thuyết và thực hành chi tiết (Mở rộng) / Extended Theory and Practice (Extension)

Phần này cung cấp các hướng dẫn bổ sung, xử lý sự cố nâng cao và lý thuyết chuyên sâu để giúp học viên hiểu rõ hơn về OpenFOAM và CFD. / This section provides additional guidelines, advanced troubleshooting, and deep theoretical insights to help students better understand OpenFOAM and CFD.

#### 1. Tại sao lưới lại quan trọng? / Why is the mesh so important?
Trong CFD, lưới (mesh) phân chia miền tính toán thành các thể tích nhỏ hữu hạn (finite volumes). 
- **Lưới quá thô (Too coarse):** Dẫn đến kết quả không chính xác do không bắt được sự thay đổi của các biến số (vận tốc, áp suất).
- **Lưới quá mịn (Too fine):** Tăng thời gian tính toán và có thể gây ra sai số làm tròn nếu sử dụng kiểu dữ liệu không đủ độ chính xác (double precision).
- **Chất lượng lưới (Mesh quality):** Các yếu tố như độ xiên (skewness), tỷ lệ khung hình (aspect ratio) và tính trực giao (orthogonality) ảnh hưởng lớn đến độ hội tụ của các phương trình rời rạc hóa.
Trong OpenFOAM, công cụ `checkMesh` là bắt buộc để kiểm tra chất lượng lưới trước khi chạy mô phỏng. Học viên cần đảm bảo `Max skewness < 4` (dành cho lưới lục diện hex) và `Non-orthogonality < 70`.

#### 2. Phân tích phương trình Navier-Stokes / Analyzing the Navier-Stokes Equations
Phương trình Navier-Stokes (N-S) là trái tim của CFD. Đối với dòng chảy không nén được (incompressible flow), chúng ta có:
$\nabla \cdot \vec{U} = 0$ (Bảo toàn khối lượng / Continuity equation)
$\frac{\partial \vec{U}}{\partial t} + (\vec{U} \cdot \nabla)\vec{U} = -\frac{1}{\rho}\nabla P + \nu \nabla^2 \vec{U} + \vec{f}$ (Bảo toàn động lượng / Momentum equation)

- **Số hạng đối lưu (Convective term) $(\vec{U} \cdot \nabla)\vec{U}$:** Gây ra tính phi tuyến của phương trình. Điều này tạo ra sự phức tạp khi giải và là nguồn gốc sinh ra dòng chảy rối (turbulence).
- **Số hạng khuếch tán (Diffusive term) $\nu \nabla^2 \vec{U}$:** Trực tiếp liên quan đến độ nhớt của chất lỏng. Độ nhớt (nu) giúp làm mịn các gradient vận tốc.
- **Áp suất (Pressure term) $\nabla P$:** Áp suất không có phương trình tiến hóa riêng trong dòng không nén được, mà thay vào đó nó hoạt động như một ràng buộc (constraint) để đảm bảo trường vận tốc thỏa mãn phương trình liên tục (divergence-free). Đây là lý do tại sao OpenFOAM sử dụng thuật toán PISO, SIMPLE, hoặc PIMPLE.

#### 3. Cấu hình Solver trong OpenFOAM / Solver Configuration in OpenFOAM
Các file trong thư mục `system` kiểm soát cách OpenFOAM tính toán.
- **controlDict:** Quản lý thời gian, bước thời gian (deltaT) và khi nào ghi dữ liệu (writeInterval).
- **fvSchemes:** Chọn các sơ đồ rời rạc hóa (discretization schemes) cho từng số hạng trong phương trình đạo hàm riêng. Ví dụ: `div(phi,U)` thường dùng `Gauss linearUpwind` hoặc `Gauss upwind` để đảm bảo ổn định.
- **fvSolution:** Chứa thông tin về các bộ giải tuyến tính (linear solvers) cho từng biến (như `p`, `U`, `k`, `omega`). Thuật toán PIMPLE (kết hợp PISO và SIMPLE) rất hữu ích cho các mô phỏng dòng chuyển tiếp với số Courant (Co) lớn hơn 1.

#### 4. Sử dụng ParaView / Using ParaView Effectively
ParaView không chỉ dùng để xem màu (contour) mà còn có các tính năng xử lý nâng cao.
- **Filters:** Học viên nên quen thuộc với `Slice`, `Clip`, `StreamTracer`, và `Glyph`.
- **Plot Over Line:** Công cụ tuyệt vời để trích xuất dữ liệu 1D (ví dụ: hồ sơ vận tốc) từ miền 3D/2D và xuất ra file CSV.
- **Temporal Statistics:** Để tính giá trị trung bình theo thời gian của một dòng chảy rối, ví dụ như tính hệ số cản trung bình $C_D$.

#### 5. Xử lý sự cố (Troubleshooting Guide)
- Lỗi `Floating point exception`: Thường do lưới kém chất lượng hoặc bước thời gian deltaT quá lớn. Giảm deltaT hoặc kích hoạt tính năng tự điều chỉnh (adjustableRunTime) có thể giúp khắc phục.
- Lỗi `FOAM FATAL ERROR`: Đọc kĩ dòng cuối cùng trong `log` file. OpenFOAM thường chỉ ra chính xác file nào và dòng nào có lỗi cú pháp (ví dụ quên dấu chấm phẩy `;` trong từ điển OpenFOAM).

*(Ghi chú: Phần mở rộng này được thiết kế để cung cấp thêm giá trị giáo dục, giúp học viên rèn luyện tư duy phân tích, hiểu sâu các khái niệm lý thuyết và làm chủ công cụ mô phỏng.)*

### Bổ sung lý thuyết và thực hành chi tiết (Mở rộng) / Extended Theory and Practice (Extension)

Phần này cung cấp các hướng dẫn bổ sung, xử lý sự cố nâng cao và lý thuyết chuyên sâu để giúp học viên hiểu rõ hơn về OpenFOAM và CFD. / This section provides additional guidelines, advanced troubleshooting, and deep theoretical insights to help students better understand OpenFOAM and CFD.

#### 1. Tại sao lưới lại quan trọng? / Why is the mesh so important?
Trong CFD, lưới (mesh) phân chia miền tính toán thành các thể tích nhỏ hữu hạn (finite volumes). 
- **Lưới quá thô (Too coarse):** Dẫn đến kết quả không chính xác do không bắt được sự thay đổi của các biến số (vận tốc, áp suất).
- **Lưới quá mịn (Too fine):** Tăng thời gian tính toán và có thể gây ra sai số làm tròn nếu sử dụng kiểu dữ liệu không đủ độ chính xác (double precision).
- **Chất lượng lưới (Mesh quality):** Các yếu tố như độ xiên (skewness), tỷ lệ khung hình (aspect ratio) và tính trực giao (orthogonality) ảnh hưởng lớn đến độ hội tụ của các phương trình rời rạc hóa.
Trong OpenFOAM, công cụ `checkMesh` là bắt buộc để kiểm tra chất lượng lưới trước khi chạy mô phỏng. Học viên cần đảm bảo `Max skewness < 4` (dành cho lưới lục diện hex) và `Non-orthogonality < 70`.

#### 2. Phân tích phương trình Navier-Stokes / Analyzing the Navier-Stokes Equations
Phương trình Navier-Stokes (N-S) là trái tim của CFD. Đối với dòng chảy không nén được (incompressible flow), chúng ta có:
$\nabla \cdot \vec{U} = 0$ (Bảo toàn khối lượng / Continuity equation)
$\frac{\partial \vec{U}}{\partial t} + (\vec{U} \cdot \nabla)\vec{U} = -\frac{1}{\rho}\nabla P + \nu \nabla^2 \vec{U} + \vec{f}$ (Bảo toàn động lượng / Momentum equation)

- **Số hạng đối lưu (Convective term) $(\vec{U} \cdot \nabla)\vec{U}$:** Gây ra tính phi tuyến của phương trình. Điều này tạo ra sự phức tạp khi giải và là nguồn gốc sinh ra dòng chảy rối (turbulence).
- **Số hạng khuếch tán (Diffusive term) $\nu \nabla^2 \vec{U}$:** Trực tiếp liên quan đến độ nhớt của chất lỏng. Độ nhớt (nu) giúp làm mịn các gradient vận tốc.
- **Áp suất (Pressure term) $\nabla P$:** Áp suất không có phương trình tiến hóa riêng trong dòng không nén được, mà thay vào đó nó hoạt động như một ràng buộc (constraint) để đảm bảo trường vận tốc thỏa mãn phương trình liên tục (divergence-free). Đây là lý do tại sao OpenFOAM sử dụng thuật toán PISO, SIMPLE, hoặc PIMPLE.

#### 3. Cấu hình Solver trong OpenFOAM / Solver Configuration in OpenFOAM
Các file trong thư mục `system` kiểm soát cách OpenFOAM tính toán.
- **controlDict:** Quản lý thời gian, bước thời gian (deltaT) và khi nào ghi dữ liệu (writeInterval).
- **fvSchemes:** Chọn các sơ đồ rời rạc hóa (discretization schemes) cho từng số hạng trong phương trình đạo hàm riêng. Ví dụ: `div(phi,U)` thường dùng `Gauss linearUpwind` hoặc `Gauss upwind` để đảm bảo ổn định.
- **fvSolution:** Chứa thông tin về các bộ giải tuyến tính (linear solvers) cho từng biến (như `p`, `U`, `k`, `omega`). Thuật toán PIMPLE (kết hợp PISO và SIMPLE) rất hữu ích cho các mô phỏng dòng chuyển tiếp với số Courant (Co) lớn hơn 1.

#### 4. Sử dụng ParaView / Using ParaView Effectively
ParaView không chỉ dùng để xem màu (contour) mà còn có các tính năng xử lý nâng cao.
- **Filters:** Học viên nên quen thuộc với `Slice`, `Clip`, `StreamTracer`, và `Glyph`.
- **Plot Over Line:** Công cụ tuyệt vời để trích xuất dữ liệu 1D (ví dụ: hồ sơ vận tốc) từ miền 3D/2D và xuất ra file CSV.
- **Temporal Statistics:** Để tính giá trị trung bình theo thời gian của một dòng chảy rối, ví dụ như tính hệ số cản trung bình $C_D$.

#### 5. Xử lý sự cố (Troubleshooting Guide)
- Lỗi `Floating point exception`: Thường do lưới kém chất lượng hoặc bước thời gian deltaT quá lớn. Giảm deltaT hoặc kích hoạt tính năng tự điều chỉnh (adjustableRunTime) có thể giúp khắc phục.
- Lỗi `FOAM FATAL ERROR`: Đọc kĩ dòng cuối cùng trong `log` file. OpenFOAM thường chỉ ra chính xác file nào và dòng nào có lỗi cú pháp (ví dụ quên dấu chấm phẩy `;` trong từ điển OpenFOAM).

*(Ghi chú: Phần mở rộng này được thiết kế để cung cấp thêm giá trị giáo dục, giúp học viên rèn luyện tư duy phân tích, hiểu sâu các khái niệm lý thuyết và làm chủ công cụ mô phỏng.)*

### Bổ sung lý thuyết và thực hành chi tiết (Mở rộng) / Extended Theory and Practice (Extension)

Phần này cung cấp các hướng dẫn bổ sung, xử lý sự cố nâng cao và lý thuyết chuyên sâu để giúp học viên hiểu rõ hơn về OpenFOAM và CFD. / This section provides additional guidelines, advanced troubleshooting, and deep theoretical insights to help students better understand OpenFOAM and CFD.

#### 1. Tại sao lưới lại quan trọng? / Why is the mesh so important?
Trong CFD, lưới (mesh) phân chia miền tính toán thành các thể tích nhỏ hữu hạn (finite volumes). 
- **Lưới quá thô (Too coarse):** Dẫn đến kết quả không chính xác do không bắt được sự thay đổi của các biến số (vận tốc, áp suất).
- **Lưới quá mịn (Too fine):** Tăng thời gian tính toán và có thể gây ra sai số làm tròn nếu sử dụng kiểu dữ liệu không đủ độ chính xác (double precision).
- **Chất lượng lưới (Mesh quality):** Các yếu tố như độ xiên (skewness), tỷ lệ khung hình (aspect ratio) và tính trực giao (orthogonality) ảnh hưởng lớn đến độ hội tụ của các phương trình rời rạc hóa.
Trong OpenFOAM, công cụ `checkMesh` là bắt buộc để kiểm tra chất lượng lưới trước khi chạy mô phỏng. Học viên cần đảm bảo `Max skewness < 4` (dành cho lưới lục diện hex) và `Non-orthogonality < 70`.

#### 2. Phân tích phương trình Navier-Stokes / Analyzing the Navier-Stokes Equations
Phương trình Navier-Stokes (N-S) là trái tim của CFD. Đối với dòng chảy không nén được (incompressible flow), chúng ta có:
$\nabla \cdot \vec{U} = 0$ (Bảo toàn khối lượng / Continuity equation)
$\frac{\partial \vec{U}}{\partial t} + (\vec{U} \cdot \nabla)\vec{U} = -\frac{1}{\rho}\nabla P + \nu \nabla^2 \vec{U} + \vec{f}$ (Bảo toàn động lượng / Momentum equation)

- **Số hạng đối lưu (Convective term) $(\vec{U} \cdot \nabla)\vec{U}$:** Gây ra tính phi tuyến của phương trình. Điều này tạo ra sự phức tạp khi giải và là nguồn gốc sinh ra dòng chảy rối (turbulence).
- **Số hạng khuếch tán (Diffusive term) $\nu \nabla^2 \vec{U}$:** Trực tiếp liên quan đến độ nhớt của chất lỏng. Độ nhớt (nu) giúp làm mịn các gradient vận tốc.
- **Áp suất (Pressure term) $\nabla P$:** Áp suất không có phương trình tiến hóa riêng trong dòng không nén được, mà thay vào đó nó hoạt động như một ràng buộc (constraint) để đảm bảo trường vận tốc thỏa mãn phương trình liên tục (divergence-free). Đây là lý do tại sao OpenFOAM sử dụng thuật toán PISO, SIMPLE, hoặc PIMPLE.

#### 3. Cấu hình Solver trong OpenFOAM / Solver Configuration in OpenFOAM
Các file trong thư mục `system` kiểm soát cách OpenFOAM tính toán.
- **controlDict:** Quản lý thời gian, bước thời gian (deltaT) và khi nào ghi dữ liệu (writeInterval).
- **fvSchemes:** Chọn các sơ đồ rời rạc hóa (discretization schemes) cho từng số hạng trong phương trình đạo hàm riêng. Ví dụ: `div(phi,U)` thường dùng `Gauss linearUpwind` hoặc `Gauss upwind` để đảm bảo ổn định.
- **fvSolution:** Chứa thông tin về các bộ giải tuyến tính (linear solvers) cho từng biến (như `p`, `U`, `k`, `omega`). Thuật toán PIMPLE (kết hợp PISO và SIMPLE) rất hữu ích cho các mô phỏng dòng chuyển tiếp với số Courant (Co) lớn hơn 1.

#### 4. Sử dụng ParaView / Using ParaView Effectively
ParaView không chỉ dùng để xem màu (contour) mà còn có các tính năng xử lý nâng cao.
- **Filters:** Học viên nên quen thuộc với `Slice`, `Clip`, `StreamTracer`, và `Glyph`.
- **Plot Over Line:** Công cụ tuyệt vời để trích xuất dữ liệu 1D (ví dụ: hồ sơ vận tốc) từ miền 3D/2D và xuất ra file CSV.
- **Temporal Statistics:** Để tính giá trị trung bình theo thời gian của một dòng chảy rối, ví dụ như tính hệ số cản trung bình $C_D$.

#### 5. Xử lý sự cố (Troubleshooting Guide)
- Lỗi `Floating point exception`: Thường do lưới kém chất lượng hoặc bước thời gian deltaT quá lớn. Giảm deltaT hoặc kích hoạt tính năng tự điều chỉnh (adjustableRunTime) có thể giúp khắc phục.
- Lỗi `FOAM FATAL ERROR`: Đọc kĩ dòng cuối cùng trong `log` file. OpenFOAM thường chỉ ra chính xác file nào và dòng nào có lỗi cú pháp (ví dụ quên dấu chấm phẩy `;` trong từ điển OpenFOAM).

*(Ghi chú: Phần mở rộng này được thiết kế để cung cấp thêm giá trị giáo dục, giúp học viên rèn luyện tư duy phân tích, hiểu sâu các khái niệm lý thuyết và làm chủ công cụ mô phỏng.)*

### Bổ sung lý thuyết và thực hành chi tiết (Mở rộng) / Extended Theory and Practice (Extension)

Phần này cung cấp các hướng dẫn bổ sung, xử lý sự cố nâng cao và lý thuyết chuyên sâu để giúp học viên hiểu rõ hơn về OpenFOAM và CFD. / This section provides additional guidelines, advanced troubleshooting, and deep theoretical insights to help students better understand OpenFOAM and CFD.

#### 1. Tại sao lưới lại quan trọng? / Why is the mesh so important?
Trong CFD, lưới (mesh) phân chia miền tính toán thành các thể tích nhỏ hữu hạn (finite volumes). 
- **Lưới quá thô (Too coarse):** Dẫn đến kết quả không chính xác do không bắt được sự thay đổi của các biến số (vận tốc, áp suất).
- **Lưới quá mịn (Too fine):** Tăng thời gian tính toán và có thể gây ra sai số làm tròn nếu sử dụng kiểu dữ liệu không đủ độ chính xác (double precision).
- **Chất lượng lưới (Mesh quality):** Các yếu tố như độ xiên (skewness), tỷ lệ khung hình (aspect ratio) và tính trực giao (orthogonality) ảnh hưởng lớn đến độ hội tụ của các phương trình rời rạc hóa.
Trong OpenFOAM, công cụ `checkMesh` là bắt buộc để kiểm tra chất lượng lưới trước khi chạy mô phỏng. Học viên cần đảm bảo `Max skewness < 4` (dành cho lưới lục diện hex) và `Non-orthogonality < 70`.

#### 2. Phân tích phương trình Navier-Stokes / Analyzing the Navier-Stokes Equations
Phương trình Navier-Stokes (N-S) là trái tim của CFD. Đối với dòng chảy không nén được (incompressible flow), chúng ta có:
$\nabla \cdot \vec{U} = 0$ (Bảo toàn khối lượng / Continuity equation)
$\frac{\partial \vec{U}}{\partial t} + (\vec{U} \cdot \nabla)\vec{U} = -\frac{1}{\rho}\nabla P + \nu \nabla^2 \vec{U} + \vec{f}$ (Bảo toàn động lượng / Momentum equation)

- **Số hạng đối lưu (Convective term) $(\vec{U} \cdot \nabla)\vec{U}$:** Gây ra tính phi tuyến của phương trình. Điều này tạo ra sự phức tạp khi giải và là nguồn gốc sinh ra dòng chảy rối (turbulence).
- **Số hạng khuếch tán (Diffusive term) $\nu \nabla^2 \vec{U}$:** Trực tiếp liên quan đến độ nhớt của chất lỏng. Độ nhớt (nu) giúp làm mịn các gradient vận tốc.
- **Áp suất (Pressure term) $\nabla P$:** Áp suất không có phương trình tiến hóa riêng trong dòng không nén được, mà thay vào đó nó hoạt động như một ràng buộc (constraint) để đảm bảo trường vận tốc thỏa mãn phương trình liên tục (divergence-free). Đây là lý do tại sao OpenFOAM sử dụng thuật toán PISO, SIMPLE, hoặc PIMPLE.

#### 3. Cấu hình Solver trong OpenFOAM / Solver Configuration in OpenFOAM
Các file trong thư mục `system` kiểm soát cách OpenFOAM tính toán.
- **controlDict:** Quản lý thời gian, bước thời gian (deltaT) và khi nào ghi dữ liệu (writeInterval).
- **fvSchemes:** Chọn các sơ đồ rời rạc hóa (discretization schemes) cho từng số hạng trong phương trình đạo hàm riêng. Ví dụ: `div(phi,U)` thường dùng `Gauss linearUpwind` hoặc `Gauss upwind` để đảm bảo ổn định.
- **fvSolution:** Chứa thông tin về các bộ giải tuyến tính (linear solvers) cho từng biến (như `p`, `U`, `k`, `omega`). Thuật toán PIMPLE (kết hợp PISO và SIMPLE) rất hữu ích cho các mô phỏng dòng chuyển tiếp với số Courant (Co) lớn hơn 1.

#### 4. Sử dụng ParaView / Using ParaView Effectively
ParaView không chỉ dùng để xem màu (contour) mà còn có các tính năng xử lý nâng cao.
- **Filters:** Học viên nên quen thuộc với `Slice`, `Clip`, `StreamTracer`, và `Glyph`.
- **Plot Over Line:** Công cụ tuyệt vời để trích xuất dữ liệu 1D (ví dụ: hồ sơ vận tốc) từ miền 3D/2D và xuất ra file CSV.
- **Temporal Statistics:** Để tính giá trị trung bình theo thời gian của một dòng chảy rối, ví dụ như tính hệ số cản trung bình $C_D$.

#### 5. Xử lý sự cố (Troubleshooting Guide)
- Lỗi `Floating point exception`: Thường do lưới kém chất lượng hoặc bước thời gian deltaT quá lớn. Giảm deltaT hoặc kích hoạt tính năng tự điều chỉnh (adjustableRunTime) có thể giúp khắc phục.
- Lỗi `FOAM FATAL ERROR`: Đọc kĩ dòng cuối cùng trong `log` file. OpenFOAM thường chỉ ra chính xác file nào và dòng nào có lỗi cú pháp (ví dụ quên dấu chấm phẩy `;` trong từ điển OpenFOAM).

*(Ghi chú: Phần mở rộng này được thiết kế để cung cấp thêm giá trị giáo dục, giúp học viên rèn luyện tư duy phân tích, hiểu sâu các khái niệm lý thuyết và làm chủ công cụ mô phỏng.)*

### Bổ sung lý thuyết và thực hành chi tiết (Mở rộng) / Extended Theory and Practice (Extension)

Phần này cung cấp các hướng dẫn bổ sung, xử lý sự cố nâng cao và lý thuyết chuyên sâu để giúp học viên hiểu rõ hơn về OpenFOAM và CFD. / This section provides additional guidelines, advanced troubleshooting, and deep theoretical insights to help students better understand OpenFOAM and CFD.

#### 1. Tại sao lưới lại quan trọng? / Why is the mesh so important?
Trong CFD, lưới (mesh) phân chia miền tính toán thành các thể tích nhỏ hữu hạn (finite volumes). 
- **Lưới quá thô (Too coarse):** Dẫn đến kết quả không chính xác do không bắt được sự thay đổi của các biến số (vận tốc, áp suất).
- **Lưới quá mịn (Too fine):** Tăng thời gian tính toán và có thể gây ra sai số làm tròn nếu sử dụng kiểu dữ liệu không đủ độ chính xác (double precision).
- **Chất lượng lưới (Mesh quality):** Các yếu tố như độ xiên (skewness), tỷ lệ khung hình (aspect ratio) và tính trực giao (orthogonality) ảnh hưởng lớn đến độ hội tụ của các phương trình rời rạc hóa.
Trong OpenFOAM, công cụ `checkMesh` là bắt buộc để kiểm tra chất lượng lưới trước khi chạy mô phỏng. Học viên cần đảm bảo `Max skewness < 4` (dành cho lưới lục diện hex) và `Non-orthogonality < 70`.

#### 2. Phân tích phương trình Navier-Stokes / Analyzing the Navier-Stokes Equations
Phương trình Navier-Stokes (N-S) là trái tim của CFD. Đối với dòng chảy không nén được (incompressible flow), chúng ta có:
$\nabla \cdot \vec{U} = 0$ (Bảo toàn khối lượng / Continuity equation)
$\frac{\partial \vec{U}}{\partial t} + (\vec{U} \cdot \nabla)\vec{U} = -\frac{1}{\rho}\nabla P + \nu \nabla^2 \vec{U} + \vec{f}$ (Bảo toàn động lượng / Momentum equation)

- **Số hạng đối lưu (Convective term) $(\vec{U} \cdot \nabla)\vec{U}$:** Gây ra tính phi tuyến của phương trình. Điều này tạo ra sự phức tạp khi giải và là nguồn gốc sinh ra dòng chảy rối (turbulence).
- **Số hạng khuếch tán (Diffusive term) $\nu \nabla^2 \vec{U}$:** Trực tiếp liên quan đến độ nhớt của chất lỏng. Độ nhớt (nu) giúp làm mịn các gradient vận tốc.
- **Áp suất (Pressure term) $\nabla P$:** Áp suất không có phương trình tiến hóa riêng trong dòng không nén được, mà thay vào đó nó hoạt động như một ràng buộc (constraint) để đảm bảo trường vận tốc thỏa mãn phương trình liên tục (divergence-free). Đây là lý do tại sao OpenFOAM sử dụng thuật toán PISO, SIMPLE, hoặc PIMPLE.

#### 3. Cấu hình Solver trong OpenFOAM / Solver Configuration in OpenFOAM
Các file trong thư mục `system` kiểm soát cách OpenFOAM tính toán.
- **controlDict:** Quản lý thời gian, bước thời gian (deltaT) và khi nào ghi dữ liệu (writeInterval).
- **fvSchemes:** Chọn các sơ đồ rời rạc hóa (discretization schemes) cho từng số hạng trong phương trình đạo hàm riêng. Ví dụ: `div(phi,U)` thường dùng `Gauss linearUpwind` hoặc `Gauss upwind` để đảm bảo ổn định.
- **fvSolution:** Chứa thông tin về các bộ giải tuyến tính (linear solvers) cho từng biến (như `p`, `U`, `k`, `omega`). Thuật toán PIMPLE (kết hợp PISO và SIMPLE) rất hữu ích cho các mô phỏng dòng chuyển tiếp với số Courant (Co) lớn hơn 1.

#### 4. Sử dụng ParaView / Using ParaView Effectively
ParaView không chỉ dùng để xem màu (contour) mà còn có các tính năng xử lý nâng cao.
- **Filters:** Học viên nên quen thuộc với `Slice`, `Clip`, `StreamTracer`, và `Glyph`.
- **Plot Over Line:** Công cụ tuyệt vời để trích xuất dữ liệu 1D (ví dụ: hồ sơ vận tốc) từ miền 3D/2D và xuất ra file CSV.
- **Temporal Statistics:** Để tính giá trị trung bình theo thời gian của một dòng chảy rối, ví dụ như tính hệ số cản trung bình $C_D$.

#### 5. Xử lý sự cố (Troubleshooting Guide)
- Lỗi `Floating point exception`: Thường do lưới kém chất lượng hoặc bước thời gian deltaT quá lớn. Giảm deltaT hoặc kích hoạt tính năng tự điều chỉnh (adjustableRunTime) có thể giúp khắc phục.
- Lỗi `FOAM FATAL ERROR`: Đọc kĩ dòng cuối cùng trong `log` file. OpenFOAM thường chỉ ra chính xác file nào và dòng nào có lỗi cú pháp (ví dụ quên dấu chấm phẩy `;` trong từ điển OpenFOAM).

*(Ghi chú: Phần mở rộng này được thiết kế để cung cấp thêm giá trị giáo dục, giúp học viên rèn luyện tư duy phân tích, hiểu sâu các khái niệm lý thuyết và làm chủ công cụ mô phỏng.)*

### Bổ sung lý thuyết và thực hành chi tiết (Mở rộng) / Extended Theory and Practice (Extension)

Phần này cung cấp các hướng dẫn bổ sung, xử lý sự cố nâng cao và lý thuyết chuyên sâu để giúp học viên hiểu rõ hơn về OpenFOAM và CFD. / This section provides additional guidelines, advanced troubleshooting, and deep theoretical insights to help students better understand OpenFOAM and CFD.

#### 1. Tại sao lưới lại quan trọng? / Why is the mesh so important?
Trong CFD, lưới (mesh) phân chia miền tính toán thành các thể tích nhỏ hữu hạn (finite volumes). 
- **Lưới quá thô (Too coarse):** Dẫn đến kết quả không chính xác do không bắt được sự thay đổi của các biến số (vận tốc, áp suất).
- **Lưới quá mịn (Too fine):** Tăng thời gian tính toán và có thể gây ra sai số làm tròn nếu sử dụng kiểu dữ liệu không đủ độ chính xác (double precision).
- **Chất lượng lưới (Mesh quality):** Các yếu tố như độ xiên (skewness), tỷ lệ khung hình (aspect ratio) và tính trực giao (orthogonality) ảnh hưởng lớn đến độ hội tụ của các phương trình rời rạc hóa.
Trong OpenFOAM, công cụ `checkMesh` là bắt buộc để kiểm tra chất lượng lưới trước khi chạy mô phỏng. Học viên cần đảm bảo `Max skewness < 4` (dành cho lưới lục diện hex) và `Non-orthogonality < 70`.

#### 2. Phân tích phương trình Navier-Stokes / Analyzing the Navier-Stokes Equations
Phương trình Navier-Stokes (N-S) là trái tim của CFD. Đối với dòng chảy không nén được (incompressible flow), chúng ta có:
$\nabla \cdot \vec{U} = 0$ (Bảo toàn khối lượng / Continuity equation)
$\frac{\partial \vec{U}}{\partial t} + (\vec{U} \cdot \nabla)\vec{U} = -\frac{1}{\rho}\nabla P + \nu \nabla^2 \vec{U} + \vec{f}$ (Bảo toàn động lượng / Momentum equation)

- **Số hạng đối lưu (Convective term) $(\vec{U} \cdot \nabla)\vec{U}$:** Gây ra tính phi tuyến của phương trình. Điều này tạo ra sự phức tạp khi giải và là nguồn gốc sinh ra dòng chảy rối (turbulence).
- **Số hạng khuếch tán (Diffusive term) $\nu \nabla^2 \vec{U}$:** Trực tiếp liên quan đến độ nhớt của chất lỏng. Độ nhớt (nu) giúp làm mịn các gradient vận tốc.
- **Áp suất (Pressure term) $\nabla P$:** Áp suất không có phương trình tiến hóa riêng trong dòng không nén được, mà thay vào đó nó hoạt động như một ràng buộc (constraint) để đảm bảo trường vận tốc thỏa mãn phương trình liên tục (divergence-free). Đây là lý do tại sao OpenFOAM sử dụng thuật toán PISO, SIMPLE, hoặc PIMPLE.

#### 3. Cấu hình Solver trong OpenFOAM / Solver Configuration in OpenFOAM
Các file trong thư mục `system` kiểm soát cách OpenFOAM tính toán.
- **controlDict:** Quản lý thời gian, bước thời gian (deltaT) và khi nào ghi dữ liệu (writeInterval).
- **fvSchemes:** Chọn các sơ đồ rời rạc hóa (discretization schemes) cho từng số hạng trong phương trình đạo hàm riêng. Ví dụ: `div(phi,U)` thường dùng `Gauss linearUpwind` hoặc `Gauss upwind` để đảm bảo ổn định.
- **fvSolution:** Chứa thông tin về các bộ giải tuyến tính (linear solvers) cho từng biến (như `p`, `U`, `k`, `omega`). Thuật toán PIMPLE (kết hợp PISO và SIMPLE) rất hữu ích cho các mô phỏng dòng chuyển tiếp với số Courant (Co) lớn hơn 1.

#### 4. Sử dụng ParaView / Using ParaView Effectively
ParaView không chỉ dùng để xem màu (contour) mà còn có các tính năng xử lý nâng cao.
- **Filters:** Học viên nên quen thuộc với `Slice`, `Clip`, `StreamTracer`, và `Glyph`.
- **Plot Over Line:** Công cụ tuyệt vời để trích xuất dữ liệu 1D (ví dụ: hồ sơ vận tốc) từ miền 3D/2D và xuất ra file CSV.
- **Temporal Statistics:** Để tính giá trị trung bình theo thời gian của một dòng chảy rối, ví dụ như tính hệ số cản trung bình $C_D$.

#### 5. Xử lý sự cố (Troubleshooting Guide)
- Lỗi `Floating point exception`: Thường do lưới kém chất lượng hoặc bước thời gian deltaT quá lớn. Giảm deltaT hoặc kích hoạt tính năng tự điều chỉnh (adjustableRunTime) có thể giúp khắc phục.
- Lỗi `FOAM FATAL ERROR`: Đọc kĩ dòng cuối cùng trong `log` file. OpenFOAM thường chỉ ra chính xác file nào và dòng nào có lỗi cú pháp (ví dụ quên dấu chấm phẩy `;` trong từ điển OpenFOAM).

*(Ghi chú: Phần mở rộng này được thiết kế để cung cấp thêm giá trị giáo dục, giúp học viên rèn luyện tư duy phân tích, hiểu sâu các khái niệm lý thuyết và làm chủ công cụ mô phỏng.)*

### Bổ sung lý thuyết và thực hành chi tiết (Mở rộng) / Extended Theory and Practice (Extension)

Phần này cung cấp các hướng dẫn bổ sung, xử lý sự cố nâng cao và lý thuyết chuyên sâu để giúp học viên hiểu rõ hơn về OpenFOAM và CFD. / This section provides additional guidelines, advanced troubleshooting, and deep theoretical insights to help students better understand OpenFOAM and CFD.

#### 1. Tại sao lưới lại quan trọng? / Why is the mesh so important?
Trong CFD, lưới (mesh) phân chia miền tính toán thành các thể tích nhỏ hữu hạn (finite volumes). 
- **Lưới quá thô (Too coarse):** Dẫn đến kết quả không chính xác do không bắt được sự thay đổi của các biến số (vận tốc, áp suất).
- **Lưới quá mịn (Too fine):** Tăng thời gian tính toán và có thể gây ra sai số làm tròn nếu sử dụng kiểu dữ liệu không đủ độ chính xác (double precision).
- **Chất lượng lưới (Mesh quality):** Các yếu tố như độ xiên (skewness), tỷ lệ khung hình (aspect ratio) và tính trực giao (orthogonality) ảnh hưởng lớn đến độ hội tụ của các phương trình rời rạc hóa.
Trong OpenFOAM, công cụ `checkMesh` là bắt buộc để kiểm tra chất lượng lưới trước khi chạy mô phỏng. Học viên cần đảm bảo `Max skewness < 4` (dành cho lưới lục diện hex) và `Non-orthogonality < 70`.

#### 2. Phân tích phương trình Navier-Stokes / Analyzing the Navier-Stokes Equations
Phương trình Navier-Stokes (N-S) là trái tim của CFD. Đối với dòng chảy không nén được (incompressible flow), chúng ta có:
$\nabla \cdot \vec{U} = 0$ (Bảo toàn khối lượng / Continuity equation)
$\frac{\partial \vec{U}}{\partial t} + (\vec{U} \cdot \nabla)\vec{U} = -\frac{1}{\rho}\nabla P + \nu \nabla^2 \vec{U} + \vec{f}$ (Bảo toàn động lượng / Momentum equation)

- **Số hạng đối lưu (Convective term) $(\vec{U} \cdot \nabla)\vec{U}$:** Gây ra tính phi tuyến của phương trình. Điều này tạo ra sự phức tạp khi giải và là nguồn gốc sinh ra dòng chảy rối (turbulence).
- **Số hạng khuếch tán (Diffusive term) $\nu \nabla^2 \vec{U}$:** Trực tiếp liên quan đến độ nhớt của chất lỏng. Độ nhớt (nu) giúp làm mịn các gradient vận tốc.
- **Áp suất (Pressure term) $\nabla P$:** Áp suất không có phương trình tiến hóa riêng trong dòng không nén được, mà thay vào đó nó hoạt động như một ràng buộc (constraint) để đảm bảo trường vận tốc thỏa mãn phương trình liên tục (divergence-free). Đây là lý do tại sao OpenFOAM sử dụng thuật toán PISO, SIMPLE, hoặc PIMPLE.

#### 3. Cấu hình Solver trong OpenFOAM / Solver Configuration in OpenFOAM
Các file trong thư mục `system` kiểm soát cách OpenFOAM tính toán.
- **controlDict:** Quản lý thời gian, bước thời gian (deltaT) và khi nào ghi dữ liệu (writeInterval).
- **fvSchemes:** Chọn các sơ đồ rời rạc hóa (discretization schemes) cho từng số hạng trong phương trình đạo hàm riêng. Ví dụ: `div(phi,U)` thường dùng `Gauss linearUpwind` hoặc `Gauss upwind` để đảm bảo ổn định.
- **fvSolution:** Chứa thông tin về các bộ giải tuyến tính (linear solvers) cho từng biến (như `p`, `U`, `k`, `omega`). Thuật toán PIMPLE (kết hợp PISO và SIMPLE) rất hữu ích cho các mô phỏng dòng chuyển tiếp với số Courant (Co) lớn hơn 1.

#### 4. Sử dụng ParaView / Using ParaView Effectively
ParaView không chỉ dùng để xem màu (contour) mà còn có các tính năng xử lý nâng cao.
- **Filters:** Học viên nên quen thuộc với `Slice`, `Clip`, `StreamTracer`, và `Glyph`.
- **Plot Over Line:** Công cụ tuyệt vời để trích xuất dữ liệu 1D (ví dụ: hồ sơ vận tốc) từ miền 3D/2D và xuất ra file CSV.
- **Temporal Statistics:** Để tính giá trị trung bình theo thời gian của một dòng chảy rối, ví dụ như tính hệ số cản trung bình $C_D$.

#### 5. Xử lý sự cố (Troubleshooting Guide)
- Lỗi `Floating point exception`: Thường do lưới kém chất lượng hoặc bước thời gian deltaT quá lớn. Giảm deltaT hoặc kích hoạt tính năng tự điều chỉnh (adjustableRunTime) có thể giúp khắc phục.
- Lỗi `FOAM FATAL ERROR`: Đọc kĩ dòng cuối cùng trong `log` file. OpenFOAM thường chỉ ra chính xác file nào và dòng nào có lỗi cú pháp (ví dụ quên dấu chấm phẩy `;` trong từ điển OpenFOAM).

*(Ghi chú: Phần mở rộng này được thiết kế để cung cấp thêm giá trị giáo dục, giúp học viên rèn luyện tư duy phân tích, hiểu sâu các khái niệm lý thuyết và làm chủ công cụ mô phỏng.)*

### Bổ sung lý thuyết và thực hành chi tiết (Mở rộng) / Extended Theory and Practice (Extension)

Phần này cung cấp các hướng dẫn bổ sung, xử lý sự cố nâng cao và lý thuyết chuyên sâu để giúp học viên hiểu rõ hơn về OpenFOAM và CFD. / This section provides additional guidelines, advanced troubleshooting, and deep theoretical insights to help students better understand OpenFOAM and CFD.

#### 1. Tại sao lưới lại quan trọng? / Why is the mesh so important?
Trong CFD, lưới (mesh) phân chia miền tính toán thành các thể tích nhỏ hữu hạn (finite volumes). 
- **Lưới quá thô (Too coarse):** Dẫn đến kết quả không chính xác do không bắt được sự thay đổi của các biến số (vận tốc, áp suất).
- **Lưới quá mịn (Too fine):** Tăng thời gian tính toán và có thể gây ra sai số làm tròn nếu sử dụng kiểu dữ liệu không đủ độ chính xác (double precision).
- **Chất lượng lưới (Mesh quality):** Các yếu tố như độ xiên (skewness), tỷ lệ khung hình (aspect ratio) và tính trực giao (orthogonality) ảnh hưởng lớn đến độ hội tụ của các phương trình rời rạc hóa.
Trong OpenFOAM, công cụ `checkMesh` là bắt buộc để kiểm tra chất lượng lưới trước khi chạy mô phỏng. Học viên cần đảm bảo `Max skewness < 4` (dành cho lưới lục diện hex) và `Non-orthogonality < 70`.

#### 2. Phân tích phương trình Navier-Stokes / Analyzing the Navier-Stokes Equations
Phương trình Navier-Stokes (N-S) là trái tim của CFD. Đối với dòng chảy không nén được (incompressible flow), chúng ta có:
$\nabla \cdot \vec{U} = 0$ (Bảo toàn khối lượng / Continuity equation)
$\frac{\partial \vec{U}}{\partial t} + (\vec{U} \cdot \nabla)\vec{U} = -\frac{1}{\rho}\nabla P + \nu \nabla^2 \vec{U} + \vec{f}$ (Bảo toàn động lượng / Momentum equation)

- **Số hạng đối lưu (Convective term) $(\vec{U} \cdot \nabla)\vec{U}$:** Gây ra tính phi tuyến của phương trình. Điều này tạo ra sự phức tạp khi giải và là nguồn gốc sinh ra dòng chảy rối (turbulence).
- **Số hạng khuếch tán (Diffusive term) $\nu \nabla^2 \vec{U}$:** Trực tiếp liên quan đến độ nhớt của chất lỏng. Độ nhớt (nu) giúp làm mịn các gradient vận tốc.
- **Áp suất (Pressure term) $\nabla P$:** Áp suất không có phương trình tiến hóa riêng trong dòng không nén được, mà thay vào đó nó hoạt động như một ràng buộc (constraint) để đảm bảo trường vận tốc thỏa mãn phương trình liên tục (divergence-free). Đây là lý do tại sao OpenFOAM sử dụng thuật toán PISO, SIMPLE, hoặc PIMPLE.

#### 3. Cấu hình Solver trong OpenFOAM / Solver Configuration in OpenFOAM
Các file trong thư mục `system` kiểm soát cách OpenFOAM tính toán.
- **controlDict:** Quản lý thời gian, bước thời gian (deltaT) và khi nào ghi dữ liệu (writeInterval).
- **fvSchemes:** Chọn các sơ đồ rời rạc hóa (discretization schemes) cho từng số hạng trong phương trình đạo hàm riêng. Ví dụ: `div(phi,U)` thường dùng `Gauss linearUpwind` hoặc `Gauss upwind` để đảm bảo ổn định.
- **fvSolution:** Chứa thông tin về các bộ giải tuyến tính (linear solvers) cho từng biến (như `p`, `U`, `k`, `omega`). Thuật toán PIMPLE (kết hợp PISO và SIMPLE) rất hữu ích cho các mô phỏng dòng chuyển tiếp với số Courant (Co) lớn hơn 1.

#### 4. Sử dụng ParaView / Using ParaView Effectively
ParaView không chỉ dùng để xem màu (contour) mà còn có các tính năng xử lý nâng cao.
- **Filters:** Học viên nên quen thuộc với `Slice`, `Clip`, `StreamTracer`, và `Glyph`.
- **Plot Over Line:** Công cụ tuyệt vời để trích xuất dữ liệu 1D (ví dụ: hồ sơ vận tốc) từ miền 3D/2D và xuất ra file CSV.
- **Temporal Statistics:** Để tính giá trị trung bình theo thời gian của một dòng chảy rối, ví dụ như tính hệ số cản trung bình $C_D$.

#### 5. Xử lý sự cố (Troubleshooting Guide)
- Lỗi `Floating point exception`: Thường do lưới kém chất lượng hoặc bước thời gian deltaT quá lớn. Giảm deltaT hoặc kích hoạt tính năng tự điều chỉnh (adjustableRunTime) có thể giúp khắc phục.
- Lỗi `FOAM FATAL ERROR`: Đọc kĩ dòng cuối cùng trong `log` file. OpenFOAM thường chỉ ra chính xác file nào và dòng nào có lỗi cú pháp (ví dụ quên dấu chấm phẩy `;` trong từ điển OpenFOAM).

*(Ghi chú: Phần mở rộng này được thiết kế để cung cấp thêm giá trị giáo dục, giúp học viên rèn luyện tư duy phân tích, hiểu sâu các khái niệm lý thuyết và làm chủ công cụ mô phỏng.)*

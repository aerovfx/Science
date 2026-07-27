# Tuần 6: OpenFOAM Căn Bản — Dòng Laminaire Trong Ống / Week 6: OpenFOAM Basics — Laminar Pipe Flow

## Mục Tiêu / Objectives
- Cài đặt và hiểu cấu trúc thư mục của OpenFOAM / Install and understand OpenFOAM directory structure.
- Nắm vững các solver cơ bản cho dòng chảy nước / Master basic solvers for water flow.
- Thực hành mô phỏng dòng chảy tầng trong ống (Poiseuille flow) / Practice laminar pipe flow simulation (Poiseuille flow).
- Xử lý kết quả bằng ParaView và Python / Post-process results using ParaView and Python.

## Phần Mềm / Software Stack
- OpenFOAM (phiên bản 10 hoặc v2312) / OpenFOAM (version 10 or v2312).
- ParaView 5.10+ / ParaView 5.10+.
- Python 3.9+ (numpy, matplotlib) / Python 3.9+ (numpy, matplotlib).
- WSL2 (Windows), Ubuntu native hoặc Docker / WSL2 (Windows), native Ubuntu or Docker.

### Cài đặt OpenFOAM / OpenFOAM Installation
```bash
sudo apt update
sudo apt install openfoam10
echo "source /opt/openfoam10/etc/bashrc" >> ~/.bashrc
source ~/.bashrc
```

## Lý Thuyết / Theory
### Cấu trúc OpenFOAM / OpenFOAM Architecture
OpenFOAM là bộ công cụ mã nguồn mở bao gồm các solvers, utilities, và libraries.
- icoFoam: Chuyển tiếp (transient), chảy tầng, không nén được.
- simpleFoam: Ổn định (steady-state), chảy rối, không nén được.

### Dòng chảy Poiseuille 2D / 2D Poiseuille Flow
- Giải tích (Analytical): $u(y) = \frac{1}{2\mu}\left(-\frac{dP}{dx}\right)\left(\frac{H^2}{4} - y^2\right)$.

## OpenFOAM Case Setup
### 0/U
```foam
FoamFile { version 2.0; format ascii; class volVectorField; object U; }
dimensions [0 1 -1 0 0 0 0];
internalField uniform (0 0 0);
boundaryField {
    inlet  { type fixedValue; value uniform (0.01 0 0); }
    outlet { type zeroGradient; }
    walls  { type noSlip; }
    frontAndBack { type empty; }
}
```

### 0/p
```foam
FoamFile { version 2.0; format ascii; class volScalarField; object p; }
dimensions [0 2 -2 0 0 0 0];
internalField uniform 0;
boundaryField {
    inlet  { type zeroGradient; }
    outlet { type fixedValue; value uniform 0; }
    walls  { type zeroGradient; }
    frontAndBack { type empty; }
}
```

### constant/transportProperties
```foam
FoamFile { version 2.0; format ascii; class dictionary; object transportProperties; }
transportModel Newtonian;
nu [0 2 -1 0 0 0 0] 1e-6;
```

### system/controlDict
```foam
FoamFile { version 2.0; format ascii; class dictionary; object controlDict; }
application icoFoam;
startFrom startTime;
startTime 0; stopAt endTime; endTime 20; deltaT 0.05;
writeControl timeStep; writeInterval 20; runTimeModifiable true;
functions {
    velocityProfile {
        type sets; libs ("libsampling.so"); writeControl writeTime;
        sets ( centerline { type uniform; axis x; start (0 0.1 0.05); end (2 0.1 0.05); nPoints 100; } );
        fields (U p);
    }
}
```

## Post-Processing (Python + ParaView)
```python
import numpy as np
import matplotlib.pyplot as plt

def poiseuille_analytical(y, H, dpdx, mu=1e-3):
    return (1/(2*mu)) * (-dpdx) * ((H/2)**2 - y**2)

y_theory = np.linspace(-0.1, 0.1, 100)
u_theory = poiseuille_analytical(y_theory, H=0.2, dpdx=-0.002)

plt.figure(figsize=(8, 6))
plt.plot(u_theory, y_theory*1000, 'r-', linewidth=2.5, label='Analytical')
plt.xlabel('u (m/s)'); plt.ylabel('y (mm)')
plt.title('Velocity Profile')
plt.legend(); plt.grid()
plt.savefig('poiseuille_comparison.png')
```

## Câu Hỏi Thảo Luận / Discussion (5)
1. Tại sao hồ sơ vận tốc lại có dạng parabol?
2. Ứng dụng thực tế của Poiseuille flow?
3. Điều kiện biên noSlip có ý nghĩa gì?
4. Ảnh hưởng của độ nhớt?
5. Tại sao chia lưới mịn gần thành?

## Bài Về Nhà / Homework
Mô phỏng ống hẹp dần.

## Đánh Giá / Assessment Rubric
| Category | Points | Description |
|---------|--------|-------------|
| Setup | 25 | Correct values |
| Mesh | 25 | Good resolution |
| Python | 25 | Script runs |
| Report | 25 | Accurate theory |

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

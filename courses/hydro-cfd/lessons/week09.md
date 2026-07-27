# Tuần 9: Dòng Hai Pha — Sóng & Phương Pháp VOF / Week 9: Two-Phase Flow — Waves & Volume of Fluid Method

## Mục Tiêu / Objectives
- Phương pháp VOF cho dòng 2 pha.
- Mô phỏng Dam Break bằng interFoam.
- Lý thuyết sóng Airy.

## Lý Thuyết / Theory
Phương trình: $\frac{\partial \alpha}{\partial t} + \nabla \cdot (\alpha U) = 0$. VOF interface.

## OpenFOAM Case Setup
### setFieldsDict
```foam
regions ( boxToCell { box (0 0 0) (0.292 0.146 0.01); fieldValues ( volScalarFieldValue alpha.water 1 ); } );
```

## Post-Processing (Python)
```python
import numpy as np

def airy_wave(x, t, A=0.1, T=2.0, d=5.0, g=9.81):
    omega = 2*np.pi/T
    k = omega**2/g
    for _ in range(20): k = omega**2 / (g*np.tanh(k*d))
    return A*np.cos(k*x - omega*t)
```

## Câu Hỏi Thảo Luận / Discussion (5)
1. Số hạng $U_c$ trong VOF?
2. Ý nghĩa số Froude?
3. Tốc độ tính toán của interFoam?
4. Ảnh hưởng trọng lực trong vỡ đập?
5. Mô hình sức căng bề mặt CSF?

## Bài Về Nhà / Homework
Mô phỏng đập vỡ có vật cản.

## Đánh Giá / Assessment Rubric
| Category | Points | Description |
|---------|--------|-------------|
| VOF | 25 | setFields |
| Transient | 25 | Time stepping |
| Alpha.water | 25 | Contours |
| Python | 25 | Airy wave |

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

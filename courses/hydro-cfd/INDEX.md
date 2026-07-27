# 🌊 Khoá Học CFD Thủy Động Lực Học — 10 Tuần
# *Computational Fluid Dynamics in Water — 10-Week Course*

---

> **Cấp độ / Level:** Nâng cao / Advanced  
> **Đối tượng:** Sinh viên kỹ thuật năm 2–4, kỹ sư, nhà nghiên cứu  
> **Thời lượng:** 10 tuần × 2 buổi × 90 phút = **30 giờ**  
> **Ngôn ngữ:** Song ngữ Việt – Anh  
> **Yêu cầu:** Vật lý cơ học chất lỏng cơ bản, giải tích, Python cơ bản, Linux cơ bản

---

## 🎯 Mục Tiêu / Course Goals

- ✅ Hiểu và áp dụng phương trình Navier-Stokes cho chất lỏng không nén (nước)
- ✅ Phân tích lực cản, lực nâng, số Reynolds, Froude, Strouhal
- ✅ Thiết kế và tạo lưới tính (mesh) cho bài toán thủy động lực học
- ✅ Chạy mô phỏng CFD bằng **OpenFOAM** (phần mềm mã nguồn mở công nghiệp)
- ✅ Hậu xử lý kết quả với **ParaView** và **Python**
- ✅ Tối ưu thiết kế: vỏ tàu ngầm mini, hydrofoil, cấu trúc ngoài khơi

---

## 🗺️ Tổng Quan / Course Map

```
PHẦN 1: LÝ THUYẾT (Tuần 1–5)              PHẦN 2: THỰC HÀNH CFD (Tuần 6–10)
Theory                                      OpenFOAM Practice
───────────────────────────────────         ──────────────────────────────────
Tuần 1: Tính chất nước, số vô thứ nguyên   Tuần 6:  icoFoam — Dòng Poiseuille 2D
Tuần 2: Phương trình Navier-Stokes          Tuần 7:  Xoáy Von Kármán quanh trụ
Tuần 3: Lực cản & nâng trong nước          Tuần 8:  Hydrofoil NACA, góc tới sweep
Tuần 4: Lớp biên & mô hình rối (k-ω SST)  Tuần 9:  Dòng 2 pha, sóng & VOF
Tuần 5: Lưới tính & quy trình CFD          Tuần 10: Capstone: ROV/Hydrofoil/Wave
```

---

## 🔬 Kiến Trúc Hệ Thống CFD / CFD System Architecture

```
  GEOMETRY          MESHING            SOLVING           POST-PROCESS
  ─────────         ─────────          ─────────          ─────────────
  FreeCAD      →   blockMeshDict   →  simpleFoam    →   ParaView
  Gmsh         →   snappyHexMesh  →  pimpleFoam    →   Python (pandas)
  NACA script  →   extrudeMesh    →  interFoam     →   matplotlib
  STL file     →   Gmsh Python    →  icoFoam       →   Jupyter
```

---

## 🖥️ Stack Phần Mềm / Software Stack (Tất cả miễn phí)

| Phần mềm | Phiên bản | Dùng cho | Cài đặt |
|---------|---------|---------|---------|
| **OpenFOAM** | v10 / v2312 | CFD solver | `sudo apt install openfoam10` |
| **ParaView** | 5.12+ | Visualization 3D | paraview.org |
| **Gmsh** | 4.12 | Meshing phức tạp | `pip install gmsh` |
| **Python 3.11** | — | Post-processing | python.org |
| **NumPy + SciPy** | — | Tính toán | `pip install numpy scipy` |
| **Matplotlib** | — | Đồ thị | `pip install matplotlib` |
| **Pandas** | — | Đọc CSV data | `pip install pandas` |
| **FreeCAD** | 0.21 | Thiết kế 3D | freecad.org |

```bash
# Cài đặt Python packages / Install all at once
pip install numpy scipy matplotlib pandas gmsh \
            jupyter notebook vtk pyvista

# OpenFOAM (Ubuntu/Debian WSL2)
wget -q -O - https://dl.openfoam.com/add-apt-repository.sh | bash
sudo apt-get install openfoam2312-default
```

---

## ⚙️ Cấu Trúc Case OpenFOAM / OpenFOAM Case Structure

```
case/
├── 0/                    ← Điều kiện ban đầu & biên
│   ├── U                 ← Trường vận tốc (m/s)
│   ├── p                 ← Áp suất (m²/s²)
│   ├── k                 ← Năng lượng rối (m²/s²)
│   ├── omega             ← Tỷ lệ tiêu tán (1/s)
│   └── nut               ← Nhớt rối (m²/s)
├── constant/
│   ├── polyMesh/         ← Lưới tính
│   └── transportProperties  ← ν = 1e-6 m²/s (nước 20°C)
└── system/
    ├── controlDict       ← Điều khiển chạy
    ├── fvSchemes         ← Sơ đồ số
    └── fvSolution        ← Bộ giải tuyến tính
```

---

## 📦 Danh Mục Tài Liệu / Document Index

| File | Nội dung |
|------|---------|
| [INDEX.md](INDEX.md) | Tổng quan khoá học |
| [schedule.md](schedule.md) | Lịch học 20 buổi |
| [lessons/week01.md](lessons/week01.md) | Tính chất nước & số vô thứ nguyên |
| [lessons/week02.md](lessons/week02.md) | Phương trình Navier-Stokes |
| [lessons/week03.md](lessons/week03.md) | Lực cản & lực nâng |
| [lessons/week04.md](lessons/week04.md) | Lớp biên & mô hình rối k-ω SST |
| [lessons/week05.md](lessons/week05.md) | Lưới tính & quy trình CFD |
| [lessons/week06.md](lessons/week06.md) | icoFoam — Dòng Poiseuille |
| [lessons/week07.md](lessons/week07.md) | Xoáy Von Kármán quanh trụ |
| [lessons/week08.md](lessons/week08.md) | Hydrofoil NACA trong nước |
| [lessons/week09.md](lessons/week09.md) | Dòng 2 pha — VOF & sóng |
| [lessons/week10.md](lessons/week10.md) | Capstone & tối ưu thiết kế |
| [references/formulas.md](references/formulas.md) | Công thức tổng hợp |
| [references/openfoam_quickref.md](references/openfoam_quickref.md) | OpenFOAM cheat sheet |
| [projects/final_project.md](projects/final_project.md) | Dự án cuối khoá |
| [code/python/](code/python/) | Scripts hậu xử lý |
| [code/openfoam/](code/openfoam/) | Case files sẵn dùng |

---

## 🔑 Công Thức Nhanh / Quick Formula Reference

| Công thức | Ý nghĩa |
|----------|---------|
| Re = ρVL/μ = VL/ν | Số Reynolds |
| Fr = V/√(gL) | Số Froude (dòng mặt thoáng) |
| St = fD/V | Số Strouhal (xoáy) |
| Ca = (p-pv)/(½ρV²) | Số cavitation |
| FD = ½ρV²ACD | Lực cản |
| FL = ½ρV²ACL | Lực nâng |
| ∂u/∂t+(u·∇)u = -∇p/ρ+ν∇²u | Navier-Stokes (incompressible) |
| ∇·u = 0 | Phương trình liên tục |
| δ = 0.37x/Rex^(1/5) | Bề dày lớp biên rối |
| y⁺ = yuτ/ν | Y-plus (mesh wall distance) |

---

## 🌏 Ứng Dụng Tại Việt Nam / Vietnamese Applications

| Lĩnh vực | Tổ chức | Liên quan đến khoá học |
|---------|--------|----------------------|
| 🚢 **Đóng tàu** | Hòa Phát Dung Quất, Saigon Shipyard | Sức cản vỏ tàu, thiết kế chân vịt |
| 🌊 **Điện gió ngoài khơi** | Bitexco, PetroVietnam, Siemens VN | Tải trọng sóng lên trụ móng |
| ⚡ **Thủy điện** | EVN (Hòa Bình, Sơn La, Lai Châu) | Dòng qua tràn, erosion |
| 🔬 **Nghiên cứu** | ĐH Bách Khoa, VAST, VinAI | Tối ưu hình học, AI-CFD |
| 🚤 **Hải quân** | BTL Hải quân VN | Thiết kế tàu chiến, tàu ngầm |

---

*🌊 STEM Hydro-CFD Program · 07/2026 · Song ngữ Việt – Anh*

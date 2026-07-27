# 📅 Lịch Học 10 Tuần — CFD Thủy Động Lực Học
# *10-Week Schedule — Hydro-CFD Course*

---

## 🔷 PHẦN 1: LÝ THUYẾT (Tuần 1–5) / Theory

---

### Tuần 1 — Giới Thiệu & Tính Chất Nước

| Buổi | Nội dung | Hoạt động | Chuẩn bị |
|------|---------|-----------|---------|
| **1** | Ứng dụng CFD (tàu, ROV, đập, ống), tính chất nước vs không khí | Python: vẽ ρ, μ vs nhiệt độ | Python + matplotlib |
| **2** | Số vô thứ nguyên: Re, Fr, We, Ca, St | Tính Re cho 10 tình huống thực tế | Calculator + Python |

**✅ Deliverables:**
- Python script: water_properties(T) + plot ρ(T), μ(T)
- Bảng 10 tình huống thực tế với Re, phân loại flow regime

---

### Tuần 2 — Phương Trình Navier-Stokes

| Buổi | Nội dung | Hoạt động | Chuẩn bị |
|------|---------|-----------|---------|
| **3** | Phương trình liên tục, NS, ý nghĩa từng số hạng | Giải 1D diffusion bằng tay + Python | Python numpy |
| **4** | Dòng Couette, dòng Poiseuille: nghiệm giải tích | Python: FTCS scheme mô phỏng Couette | Python scipy |

**✅ Deliverables:**
- Nghiệm giải tích Couette & Poiseuille (tính tay)
- Python: FTCS solver + animation so sánh với steady state

---

### Tuần 3 — Lực Cản & Lực Nâng

| Buổi | Nội dung | Hoạt động | Chuẩn bị |
|------|---------|-----------|---------|
| **5** | Lực cản áp suất & ma sát, CD-Re curve, tàu ngầm, cavitation | Python: CD vs Re plot, drag calculator | Python |
| **6** | Lực nâng (Kutta-Joukowski), NACA profiles, hydrofoil design | Python: NACA coordinate generator, vẽ foil | Python |

**✅ Deliverables:**
- Tính FD, FL cho 5 hình dạng khác nhau trong nước
- Vẽ 3 profile NACA (0012, 4412, 6412) bằng Python

---

### Tuần 4 — Lớp Biên & Mô Hình Rối

| Buổi | Nội dung | Hoạt động | Chuẩn bị |
|------|---------|-----------|---------|
| **7** | Lớp biên Blasius & turbulent, y+, law of the wall | Python: BL calculator, thiết kế first cell height | Python |
| **8** | DNS vs LES vs RANS, k-ω SST equations, wall functions | Tính k và ω initial conditions cho 3 bài toán | Calculator |

**✅ Deliverables:**
- Python BL calculator: δ(x), Cf(x), y+=1 → Δy cho mesh
- Bảng so sánh: k-ε vs k-ω SST vs Spalart-Allmaras

---

### Tuần 5 — Lưới Tính & Quy Trình CFD

| Buổi | Nội dung | Hoạt động | Chuẩn bị |
|------|---------|-----------|---------|
| **9** | Structured vs unstructured, prism layers, mesh quality metrics | blockMesh: channel 2D với grading | OpenFOAM |
| **10** | BCs trong water CFD, domain sizing, Richardson extrapolation | checkMesh + kiểm tra chất lượng lưới | OpenFOAM |

**✅ Deliverables:**
- File blockMeshDict channel 2D, checkMesh PASSED
- Mesh convergence study plan (coarse/medium/fine)

---

## 🔷 PHẦN 2: THỰC HÀNH CFD (Tuần 6–10) / OpenFOAM Practice

---

### Tuần 6 — icoFoam: Dòng Poiseuille 2D

| Buổi | Nội dung | Hoạt động | Chuẩn bị |
|------|---------|-----------|---------|
| **11** | OpenFOAM architecture, solvers, case structure | Cài OpenFOAM, chạy tutorial cavity | WSL2/Linux |
| **12** | icoFoam Poiseuille: case đầy đủ, post-process ParaView | So sánh simulation vs analytical profile | OpenFOAM + ParaView |

**✅ Deliverables:**
- Case Poiseuille chạy thành công
- Python plot: simulation vs analytical (error < 1%)

---

### Tuần 7 — Xoáy Von Kármán Quanh Trụ

| Buổi | Nội dung | Hoạt động | Chuẩn bị |
|------|---------|-----------|---------|
| **13** | pimpleFoam cylinder Re=100, Von Kármán theory, Strouhal | Build case, mesh, chạy đến t=50s | pimpleFoam |
| **14** | FFT phân tích tần số xoáy, CD/CL time history | Python FFT: tìm St, so sánh St≈0.2 | Python scipy.fft |

**✅ Deliverables:**
- Case chạy xong, CL oscillation thấy rõ trong ParaView
- Python: St đo được trong ±5% so với 0.2

---

### Tuần 8 — Hydrofoil NACA Trong Nước

| Buổi | Nội dung | Hoạt động | Chuẩn bị |
|------|---------|-----------|---------|
| **15** | C-mesh quanh NACA 4412, simpleFoam k-ω SST, y+≈1 | Mesh + chạy α=5°, kiểm tra Cp distribution | Gmsh + simpleFoam |
| **16** | Angle sweep α=0°→12°, automation script, polar diagram | Python: CL, CD, L/D vs α, so với XFOIL | Python + shell |

**✅ Deliverables:**
- Polar diagram đầy đủ (8 điểm α)
- Góc tối ưu L/D_max xác định

---

### Tuần 9 — Dòng Hai Pha: VOF & Sóng

| Buổi | Nội dung | Hoạt động | Chuẩn bị |
|------|---------|-----------|---------|
| **17** | VOF method, interFoam, damBreak tutorial | Chạy damBreak, so sánh với Ritter analytical | interFoam |
| **18** | Airy wave theory, wave generation, Python wave calculator | Tính L, c, Cg cho 5 điều kiện sóng biển VN | Python |

**✅ Deliverables:**
- Dam break simulation: x_front(t) so với Ritter < 10%
- Python wave calculator cho bài toán offshore Việt Nam

---

### Tuần 10 — 🏆 DEMO DAY & Capstone

| Buổi | Nội dung | Hoạt động | Chuẩn bị |
|------|---------|-----------|---------|
| **19** | Hoàn thiện dự án, dry run, review báo cáo | Thuyết trình thử 10 phút | Slide + case |
| **20** | **DEMO DAY** | Thuyết trình + demo ParaView live | Laptop + results |

**✅ Deliverables:**
- Báo cáo 10-15 trang (PDF)
- Demo ParaView live: contour + streamlines + force history
- Slide 10 trang

---

## 📊 Thống Kê / Stats

| Chỉ số | Số liệu |
|--------|---------|
| Tổng buổi | 20 buổi × 90 phút |
| Lý thuyết | 10 buổi |
| OpenFOAM thực hành | 10 buổi |
| Python sessions | Mỗi buổi |
| Case files hoàn chỉnh | 4 cases (Poiseuille, Cylinder, Hydrofoil, DamBreak) |

---

## 🏆 Tiêu Chí Hoàn Thành

- ✅ Tham dự ≥ 16/20 buổi
- ✅ Python toolkit cá nhân (water_properties, BL calculator, NACA generator)
- ✅ 4 OpenFOAM cases chạy thành công (checkMesh + convergence)
- ✅ Dự án cuối: báo cáo + demo ParaView
- ✅ Điểm tổng ≥ 60/100

---

*🌊 Hydro-CFD Program · 07/2026*

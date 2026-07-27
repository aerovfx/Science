# 🏆 Dự Án Cuối Khoá — CFD Thủy Động Lực Học
# *Capstone Project — Hydro-CFD Course*

---

## 🎯 3 Track Dự Án / 3 Project Tracks

### Track A — 🐠 ROV Hull Designer
**Nhiệm vụ**: Thiết kế và tối ưu vỏ tàu ROV (Remotely Operated Vehicle) mini để giảm thiểu lực cản.

**Thông số thiết kế:**
- Tốc độ hoạt động: V = 1 m/s (nước ngọt 20°C → Re ≈ 3×10⁵)
- Kích thước: L = 0.3m, D = 0.1m
- Mục tiêu: CD < 0.15 (torpedo shape target)

**Yêu cầu:**
- So sánh 3 hình dạng: cylinder, streamlined oval, torpedo (DTMB hull)
- Mesh với snappyHexMesh + prism layers (y+ ≈ 1)
- simpleFoam + k-ω SST
- Drag breakdown: form drag vs skin friction drag
- Cp distribution trên bề mặt thân
- ParaView: vẽ streamlines + pressure contour

**Python analysis:**
```python
# So sánh kết quả 3 thiết kế / Compare 3 designs
designs = {
    'cylinder':    {'CD': 0.82, 'CD_form': 0.65, 'CD_friction': 0.17},
    'oval':        {'CD': 0.42, 'CD_form': 0.25, 'CD_friction': 0.17},
    'torpedo':     {'CD': 0.11, 'CD_form': 0.01, 'CD_friction': 0.10},
}
# Tính lực cản tuyệt đối / Calculate absolute drag force
V, rho, A = 1.0, 998.2, 0.3*0.1  # m/s, kg/m³, m²
for name, d in designs.items():
    FD = 0.5 * rho * V**2 * A * d['CD']
    Power = FD * V  # Watts
    print(f"{name}: CD={d['CD']:.2f}, FD={FD:.1f}N, Power={Power:.1f}W")
```

---

### Track B — 🚤 Hydrofoil Performance Analyst
**Nhiệm vụ**: Polar sweep đầy đủ cho 3 profile NACA, tìm tối ưu cho tàu cánh ngầm cao tốc.

**Thông số:**
- Re = 10⁶ (V=1 m/s, c=1m in water, or V=10 m/s, c=0.1m)
- Angles of attack: α = 0°, 2°, 4°, 6°, 8°, 10°, 12°, 15°
- Profiles: NACA 0012, NACA 4412, NACA 6412

**Yêu cầu:**
- C-mesh hoặc O-mesh quanh foil (Gmsh Python API)
- simpleFoam + k-ω SST + Low-Re mesh (y+ ≈ 1)
- Automate bằng Python: thay đổi α → chạy OpenFOAM → extract CL, CD
- CL vs α, CD vs α, L/D vs α (polar diagram)
- Validate với XFOIL (panel method) cho so sánh
- Visualize Cp distribution + flow separation ở α cao

**Automation script:**
```bash
#!/bin/bash
# Chạy tự động polar sweep / Automated polar sweep
for alpha in 0 2 4 6 8 10 12; do
    case_dir="case_alpha_${alpha}"
    cp -r case_template $case_dir
    # Modify inlet velocity direction for angle of attack
    Ux=$(python3 -c "import math; print(math.cos(math.radians($alpha)))")
    Uy=$(python3 -c "import math; print(math.sin(math.radians($alpha)))")
    sed -i "s/REPLACE_UX/$Ux/g; s/REPLACE_UY/$Uy/g" $case_dir/0/U
    # Run solver
    simpleFoam -case $case_dir > $case_dir/log 2>&1
    echo "Done: alpha=$alpha"
done
```

---

### Track C — 🌊 Wave-Structure Interaction Engineer
**Nhiệm vụ**: Tính toán lực sóng tác dụng lên trụ móng turbine điện gió ngoài khơi — áp dụng cho dự án điện gió offshore của Việt Nam.

**Thông số:**
- Cột nước: d = 20m
- Đường kính trụ: D = 2m
- Chiều cao sóng: H = 3m, chu kỳ T = 8s
- Vật liệu: thép (không cần tính toán vật liệu)

**Yêu cầu:**
- Tính lực Morison (công thức) vs CFD (interFoam)
- interFoam với wave generation (wavesFoam hoặc manual inlet velocity)
- Đo lực theo thời gian: FD(t), FL(t)
- Phân tích: max force, overturning moment
- So sánh CFD vs Morison equation

**Morison equation for verification:**
```python
def morison_wave_force(t, A, T, d, D, CD=1.2, CM=2.0, rho=1025):
    """
    Phương trình Morison: lực sóng lên trụ
    Morison equation: wave force on vertical cylinder
    F = FD (drag) + FI (inertia)
    """
    from scipy.integrate import quad
    g = 9.81
    omega = 2*np.pi / T
    # Dispersion relation
    k = omega**2 / g
    for _ in range(20): k = omega**2 / (g*np.tanh(k*d))
    
    def integrand_drag(z):
        u = A*omega * np.cosh(k*(z+d))/np.sinh(k*d) * np.cos(omega*t)
        return CD * 0.5 * rho * D * u * abs(u)
    
    def integrand_inertia(z):
        dudt = -A*omega**2 * np.cosh(k*(z+d))/np.sinh(k*d) * np.sin(omega*t)
        return CM * rho * np.pi*D**2/4 * dudt
    
    FD, _ = quad(integrand_drag,    -d, 0)
    FI, _ = quad(integrand_inertia, -d, 0)
    return FD + FI, FD, FI
```

---

## 📊 Rubric Đánh Giá / Assessment Rubric (100 điểm)

| Hạng mục | Điểm | Tiêu chí |
|---------|------|---------|
| **Mesh Quality** | 15 | checkMesh OK, y+≤5, skewness<0.7, aspect ratio<500 |
| **Convergence** | 15 | Residuals < 1e-4, CD/CL stable (var < 1%) |
| **Accuracy** | 20 | Kết quả trong 10% so với reference/analytical |
| **Post-processing** | 20 | ParaView (vector/contour/streamlines) + Python plots |
| **Technical Report** | 20 | Problem setup, formulas, interpretation, error analysis |
| **Presentation** | 10 | Rõ ràng, tự tin, Q&A tốt |

### Bonus Points (+10)
- Monte Carlo sensitivity analysis (+ 5 điểm)
- Animation (ParaView timelapse, + 3 điểm)
- Geometry optimization (tối ưu shape, + 5 điểm)
- XFOIL validation cho track B (+ 2 điểm)

---

## 📄 Yêu Cầu Báo Cáo / Report Requirements

**Cấu trúc báo cáo 10–15 trang / 10-15 page report structure:**

1. **Giới thiệu bài toán** — Background, objectives, design constraints
2. **Lý thuyết** — Governing equations, turbulence model, relevant formulas
3. **Thiết lập mô phỏng** — Geometry, mesh (with checkMesh output), BCs, solver settings
4. **Kết quả** — Figures: residuals, force history, velocity/pressure contours, Cp distribution
5. **Thảo luận** — Compare with theory/reference, sources of error, mesh sensitivity
6. **Kết luận** — Key findings, design recommendation, future work
7. **Tài liệu tham khảo** — ≥ 5 references

---

## 📅 Timeline

| Mốc | Tuần | Yêu cầu |
|-----|------|---------|
| Track chọn + Proposal | Tuần 7 | 1 trang mô tả bài toán |
| Mesh hoàn chỉnh | Tuần 8 | checkMesh PASSED |
| Kết quả sơ bộ | Tuần 9 | CD/CL so sánh với tài liệu |
| Final report nộp | Tuần 10 Buổi 19 | PDF báo cáo |
| **DEMO DAY** | Tuần 10 Buổi 20 | Trình bày 10' + demo ParaView |

---

## 🌏 Định Hướng Nghề Nghiệp

| Hướng | Tổ chức | Kỹ năng cần |
|-------|--------|------------|
| **CFD Engineer** | ANSYS, Siemens PLM, Dassault | OpenFOAM, Fluent, Star-CCM+ |
| **Naval Architect** | Hòa Phát, Saigon Shipyard | Maxsurf, Rhino, ORCA3D |
| **Offshore Engineer** | Vietsovpetro, Fugro | OrcaFlex, SIMA, ANSYS AQWA |
| **Ocean Energy** | Mainstream, CIP, EVN | WEC-Sim, FAST, WAMIT |
| **Research/PhD** | ĐH Bách Khoa, ĐH Đà Nẵng | OpenFOAM, SU2, adjoint opt. |

---

*🌊 Hydro-CFD Program · 07/2026*

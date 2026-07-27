# ⚡ OpenFOAM Quick Reference — Hydro-CFD Course
# *Tham Khảo Nhanh OpenFOAM*

---

## 📁 Cấu Trúc Case / Case Structure

```bash
case/
├── 0/          ← Điều kiện ban đầu (t=0)
├── constant/   ← Hằng số vật lý & lưới
└── system/     ← Cài đặt solver & schemes
```

---

## 🔑 Lệnh Cơ Bản / Essential Commands

```bash
# Tạo lưới / Generate mesh
blockMesh                    # From blockMeshDict
snappyHexMesh -overwrite     # Mesh around STL geometry
checkMesh                    # Verify mesh quality
extrudeMesh                  # Extrude 2D mesh to 3D

# Cài đặt điều kiện / Setup
setFields                    # Initialize fields (e.g., VOF alpha)
decomposePar -force          # For parallel runs
mpirun -np 4 simpleFoam -parallel  # Parallel solve

# Chạy simulation / Run simulation
icoFoam         # Laminar transient
simpleFoam      # Turbulent steady-state
pimpleFoam      # Turbulent transient
interFoam       # Two-phase VOF
foamRun -solver simpleFoam   # (v2312 syntax)

# Giám sát / Monitor
foamLog log.simpleFoam       # Extract residuals
gnuplot residuals.gnuplot    # Plot residuals
tail -f log.simpleFoam | grep "Ux\|p\|Time"

# Hậu xử lý / Post-processing
paraFoam                     # Open in ParaView
simpleFoam -postProcess -func forceCoeffs
foamCalc mag U               # Calculate |U|
postProcess -func "wallShearStress"
```

---

## 🌊 transportProperties — Nước 20°C

```
FoamFile { version 2.0; format ascii; class dictionary; object transportProperties; }
transportModel Newtonian;
nu  [0 2 -1 0 0 0 0]  1e-6;    // m²/s @ 20°C
```

---

## ⚙️ fvSchemes — Chuẩn cho simpleFoam/pimpleFoam

```
ddtSchemes    { default         Euler; }
gradSchemes   { default         Gauss linear; }
divSchemes
{
    default         none;
    div(phi,U)      Gauss linearUpwind grad(U);  // Low diffusion
    div(phi,k)      Gauss upwind;
    div(phi,omega)  Gauss upwind;
    div((nuEff*dev(T(grad(U))))) Gauss linear;
}
laplacianSchemes  { default     Gauss linear corrected; }
interpolationSchemes { default  linear; }
snGradSchemes { default         corrected; }
```

---

## 🔧 fvSolution — SIMPLE Algorithm

```
solvers
{
    p    { solver PCG; preconditioner DIC; tolerance 1e-7; relTol 0.01; }
    U    { solver PBiCGStab; preconditioner DILU; tolerance 1e-8; relTol 0.1; }
    k    { solver PBiCGStab; preconditioner DILU; tolerance 1e-8; relTol 0.1; }
    omega { solver PBiCGStab; preconditioner DILU; tolerance 1e-8; relTol 0.1; }
}
SIMPLE
{
    nNonOrthogonalCorrectors 2;
    consistent yes;
    residualControl { p 1e-4; U 1e-4; k 1e-4; omega 1e-4; }
}
relaxationFactors
{
    equations { U 0.7; k 0.5; omega 0.5; }
    fields    { p 0.3; }
}
```

---

## 🌀 k-ω SST Initial Conditions

```bash
# Tính giá trị ban đầu / Calculate initial values
# TI = turbulence intensity (0.01 = 1%)
# L = turbulent length scale (≈ 0.07 × chord)

# k = 1.5 × (U × TI)²
# ω = k^0.5 / (Cμ^0.25 × L),  Cμ = 0.09

# For U=1 m/s, TI=1%, chord=0.1m, L=0.007m:
# k = 1.5 × (0.01)² = 1.5e-4 m²/s²
# ω = sqrt(1.5e-4) / (0.09^0.25 × 0.007) = 16.1 rad/s
```

**0/k:**
```
internalField   uniform 1.5e-4;
boundaryField {
    inlet  { type fixedValue; value uniform 1.5e-4; }
    outlet { type zeroGradient; }
    walls  { type kqRWallFunction; value uniform 1.5e-4; }
}
```

**0/omega:**
```
internalField   uniform 16.1;
boundaryField {
    inlet  { type fixedValue; value uniform 16.1; }
    outlet { type zeroGradient; }
    walls  { type omegaWallFunction; value uniform 16.1; }
}
```

---

## 🔍 forceCoeffs Function Object

```
forceCoeffs_object
{
    type            forceCoeffs;
    libs            ("libforces.so");
    writeControl    timeStep;
    writeInterval   1;
    patches         (cylinder);        // Patch name of body
    rho             rhoInf;
    rhoInf          998.2;             // Water density kg/m³
    CofR            (0 0 0);
    liftDir         (0 1 0);
    dragDir         (1 0 0);
    pitchAxis       (0 0 1);
    magUInf         1.0;               // Freestream velocity m/s
    lRef            0.1;               // Reference length (chord/diameter)
    Aref            0.1;               // Reference area (chord × span)
}
```

---

## 📊 Kiểm Tra Chất Lượng Lưới / Mesh Quality Checks

```bash
checkMesh 2>&1 | grep -E "Max|Min|mesh|OK|FAILED"
```

| Chỉ tiêu | Yêu cầu | Ghi chú |
|---------|--------|--------|
| Max non-orthogonality | < 70° (tốt < 40°) | Ảnh hưởng diffusion |
| Max skewness | < 4 (tốt < 1) | Ảnh hưởng convection |
| Max aspect ratio | < 1000 (tốt < 100) | Lớp biên |
| Min face area | > 0 | Mesh hợp lệ |
| y+ (target) | ≈ 1 (k-ω SST) | First cell height |

---

## 🚨 Troubleshooting Thường Gặp

| Lỗi | Nguyên nhân | Giải pháp |
|-----|------------|---------|
| `floating point exception` | Divergence | Giảm relaxation: U→0.5, p→0.2 |
| `maximum number of iterations exceeded` | Solver không hội tụ | Tăng nNonOrthCorrectors, sửa mesh |
| `Divergence in p` | Mesh quality xấu | Sửa non-ortho, giảm timestep |
| `checkMesh: FAILED` | Lưới có lỗi | Chạy surfaceCheck, sửa STL |
| `negative volume` | Mesh bị lộn | Kiểm tra normal vectors STL |
| CL/CD oscillates wildly | dt quá lớn | Giảm deltaT, kiểm tra Co < 1 |

---

## 📐 Courant Number (PIMPLE/PISO)

```
Co = U × Δt / Δx < 1  (stability requirement)

# Trong controlDict:
maxCo           0.8;     // Target Courant number
adjustTimeStep  yes;     // Auto-adjust timestep
maxDeltaT       0.01;    // Maximum timestep (s)
```

---

*🌊 Hydro-CFD Course Quick Reference · 07/2026*

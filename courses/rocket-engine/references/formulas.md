# 📐 Công Thức Tổng Hợp — Động Cơ Tên Lửa
# *Master Formula Reference — Rocket Engine Course*

---

## 1. Phương Trình Tsiolkovsky / Tsiolkovsky Rocket Equation

$$\Delta v = I_{sp} \times g_0 \times \ln\left(\frac{m_0}{m_f}\right)$$

| Ký hiệu | Ý nghĩa | Đơn vị |
|--------|--------|--------|
| Δv | Thay đổi vận tốc | m/s |
| Isp | Xung lực riêng | giây (s) |
| g₀ | Gia tốc trọng trường chuẩn | 9.81 m/s² |
| m₀ | Khối lượng ban đầu (đầy nhiên liệu) | kg |
| mf | Khối lượng cuối (hết nhiên liệu) | kg |

**Ví dụ / Example**: Estes C6-5, Isp=130s, m₀=150g, mf=120g  
Δv = 130 × 9.81 × ln(0.15/0.12) = **328 m/s**

---

## 2. Phương Trình Lực Đẩy / Thrust Equation

$$F = \dot{m} \cdot v_e + (P_e - P_a) \cdot A_e$$

| Ký hiệu | Ý nghĩa | Đơn vị |
|--------|--------|--------|
| ṁ | Lưu lượng khối lượng | kg/s |
| ve | Vận tốc khí thoát | m/s |
| Pe | Áp suất cửa nozzle | Pa |
| Pa | Áp suất môi trường | Pa |
| Ae | Diện tích cửa nozzle | m² |

**Trường hợp tối ưu**: Pe = Pa → F = ṁ × ve = ṁ × Isp × g₀

---

## 3. Xung Lực Riêng / Specific Impulse

$$I_{sp} = \frac{F}{\dot{m} \cdot g_0} = \frac{v_e}{g_0} \quad [\text{giây}]$$

$$I_{sp} = \frac{C_F \cdot c^*}{g_0}$$

**Bảng Isp điển hình / Typical Isp values:**
| Nhiên liệu | Isp (s) |
|-----------|--------|
| Black Powder | 80–90 |
| APCP (Estes) | 120–180 |
| N₂O/HTPB (hybrid) | 200–250 |
| LOX/RP-1 (SpaceX) | 311–350 |
| LOX/LH₂ (SSME) | 363–453 |
| Ion Thruster | 1500–10000 |

---

## 4. Lực Cản / Drag Force

$$D = \frac{1}{2} \rho v^2 C_d A$$

| Ký hiệu | Ý nghĩa | Đơn vị |
|--------|--------|--------|
| ρ | Mật độ không khí (1.225 sea level) | kg/m³ |
| v | Vận tốc tên lửa | m/s |
| Cd | Hệ số cản (0.4–0.75 điển hình) | — |
| A | Diện tích mặt cắt ngang = π(d/2)² | m² |

---

## 5. Ổn Định / Stability

$$SM = \frac{X_{CP} - X_{CG}}{d} \quad [\text{calibers}]$$

- SM ≥ 1.0: **Ổn định** (stable) ✅
- SM = 0: Vừa ổn định (marginally stable) ⚠️
- SM < 0: Không ổn định (unstable) ❌

**Barrowman (fin contribution simplified)**:
$$C_{N,fins} = \frac{4n(s/d)^2}{1 + \sqrt{1 + \left(\frac{2s}{c_r + c_t}\right)^2}}$$

---

## 6. Thiết Kế Vòi Phun / Nozzle Design

**Diện tích họng nozzle / Throat area:**
$$A_t = \frac{F}{C_F \cdot P_c}$$

**Hệ số lực đẩy / Thrust coefficient:**
$$C_F = \sqrt{\frac{2\gamma^2}{\gamma-1}\left(\frac{2}{\gamma+1}\right)^{\frac{\gamma+1}{\gamma-1}}\left[1-\left(\frac{P_e}{P_c}\right)^{\frac{\gamma-1}{\gamma}}\right]} + \frac{P_e - P_a}{P_c}\frac{A_e}{A_t}$$

**Tỷ lệ diện tích / Area ratio (exit/throat):**
$$\varepsilon = \frac{A_e}{A_t} = \frac{1}{M_e}\left[\frac{2}{\gamma+1}\left(1+\frac{\gamma-1}{2}M_e^2\right)\right]^{\frac{\gamma+1}{2(\gamma-1)}}$$

---

## 7. Mô Hình Khí Quyển ISA / ISA Atmosphere Model

**Tầng đối lưu (0–11km) / Troposphere:**
$$T(h) = 288.15 - 0.0065h \quad [K]$$
$$P(h) = 101325\left(\frac{T}{288.15}\right)^{5.2561} \quad [Pa]$$
$$\rho(h) = \frac{P}{287.05 \cdot T} \quad [kg/m^3]$$

**Độ cao từ áp suất / Altitude from pressure:**
$$h = 44330\left[1 - \left(\frac{P}{101325}\right)^{0.1903}\right] \quad [m]$$

---

## 8. Thiết Kế Dù / Parachute Sizing

**Vận tốc chạm đất / Terminal velocity:**
$$v_t = \sqrt{\frac{2mg}{\rho C_{d,chute} A_{chute}}}$$

**Đường kính dù cần thiết (target v ≤ 6 m/s):**
$$D_{chute} = \sqrt{\frac{8mg}{\pi \rho C_{d,chute} v_t^2}}$$

*Cd_chute ≈ 0.75 cho dù tròn / for round parachute*  
*Cd_chute ≈ 2.2 cho dù hình nón cụt (toroidal)*

---

## 9. Tốc Độ Cháy Nhiên Liệu / Propellant Burn Rate (Vieille's Law)

$$r = a \cdot P^n$$

| Thông số | Ý nghĩa |
|--------|--------|
| r | Tốc độ cháy (m/s) |
| P | Áp suất buồng đốt (Pa) |
| a | Hằng số nhiên liệu |
| n | Chỉ số áp suất (0.2–0.5 thường gặp) |

---

## 10. Hằng Số Quan Trọng / Important Constants

| Hằng số | Giá trị | Đơn vị |
|--------|--------|--------|
| g₀ (tiêu chuẩn) | 9.80665 | m/s² |
| R (khí lý tưởng) | 8.314 | J/(mol·K) |
| ρ₀ (không khí SL) | 1.225 | kg/m³ |
| T₀ (ISA SL) | 288.15 | K |
| P₀ (ISA SL) | 101,325 | Pa |
| Tốc độ âm thanh (20°C) | 343 | m/s |

---

## 🐍 Python Quick Reference

```python
import numpy as np

# Tsiolkovsky
def delta_v(Isp, m0, mf, g0=9.81):
    return Isp * g0 * np.log(m0 / mf)

# Drag force
def drag(v, rho=1.225, Cd=0.5, diam=0.024):
    A = np.pi * (diam/2)**2
    return 0.5 * rho * v**2 * Cd * A

# ISA Atmosphere
def atmosphere(h):
    T = 288.15 - 0.0065 * min(h, 11000)
    P = 101325 * (T/288.15)**5.2561
    rho = P / (287.05 * T)
    return rho, T, P

# Altitude from pressure
def baro_altitude(P, P0=101325):
    return 44330 * (1 - (P/P0)**0.1903)

# Parachute diameter
def chute_diameter(mass, v_land=6.0, Cd=0.75, rho=1.225):
    return np.sqrt(8*mass*9.81 / (np.pi * rho * Cd * v_land**2))

# Stability margin
def stability_margin(Xcp, Xcg, diameter):
    return (Xcp - Xcg) / diameter  # in calibers
```

---

*📐 STEM Rocket Engine Program · 07/2026*

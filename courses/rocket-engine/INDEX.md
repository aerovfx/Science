# 🚀 Khoá Học Động Cơ Tên Lửa DIY — 10 Tuần
# *DIY Rocket Engine & Model Rocketry — 10-Week Course*

---

> **Cấp độ / Level:** Trung cấp – Nâng cao / Intermediate – Advanced  
> **Đối tượng / Audience:** Học sinh lớp 10–12, sinh viên kỹ thuật, đam mê không gian  
> **Thời lượng / Duration:** 10 tuần × 2 buổi/tuần × 90 phút = **30 giờ học**  
> **Ngôn ngữ / Language:** Song ngữ Việt – Anh / Bilingual Vietnamese – English  
> **Yêu cầu / Prerequisites:** Vật lý cơ bản (lực, nhiệt động lực học), toán THPT, Python cơ bản

---

## 🎯 Mục Tiêu Khoá Học / Course Goals

Cuối khoá, học viên có thể:
- ✅ Hiểu và vận dụng phương trình Tsiolkovsky tính Δv cho tên lửa
- ✅ Đọc và phân tích đường cong lực đẩy của động cơ tên lửa mô hình
- ✅ Thiết kế tên lửa mô hình với độ ổn định đúng (SM ≥ 1.0 caliber)
- ✅ Mô phỏng quỹ đạo tên lửa bằng Python (RocketPy / tự viết)
- ✅ Sử dụng OpenRocket để thiết kế và tối ưu tên lửa
- ✅ Lắp ráp và phóng một tên lửa mô hình Estes an toàn
- ✅ Phân tích dữ liệu chuyến bay thực tế và cải tiến thiết kế

> ⚠️ **Lưu ý quan trọng / Important Note:**  
> Khoá học này sử dụng **động cơ Estes được chứng nhận thương mại** (NFPA 1122).  
> **KHÔNG** tự chế tạo nhiên liệu tên lửa — nguy hiểm tính mạng và vi phạm pháp luật.  
> *This course uses **commercially certified Estes motors** only. NEVER make propellant from scratch.*

---

## 🗺️ Tổng Quan Chương Trình / Course Map

```
PHẦN 1: LÝ THUYẾT & PHẦN CỨNG (Tuần 1–5)
Theory & Hardware Section
────────────────────────────────────────────
Tuần 1: Lịch sử tên lửa & Phương trình Tsiolkovsky
Tuần 2: Nhiên liệu & Hóa học đẩy (APCP, Estes motors)
Tuần 3: Khí động học & Thiết kế tên lửa (CP/CG stability)
Tuần 4: Buồng đốt, Vòi phun De Laval & Vật liệu
Tuần 5: Hệ thống phục hồi, An toàn & Lắp ráp mô hình

PHẦN 2: MÔ PHỎNG & PHẦN MỀM (Tuần 6–10)
Simulation & Software Section
────────────────────────────────────────────
Tuần 6: Mô phỏng quỹ đạo với Python (Euler/RK4)
Tuần 7: OpenRocket — Thiết kế & mô phỏng đầy đủ
Tuần 8: Điều khiển vector lực đẩy TVC & Avionics
Tuần 9: Phân tích dữ liệu chuyến bay & cải tiến
Tuần 10: Demo Day — Phóng tên lửa mô hình
```

---

## 📐 Kiến Trúc Tên Lửa Mô Hình / Model Rocket Anatomy

```
        ╔══════════╗
        ║ NOSECONE ║  ← Giảm lực cản (ogive/conical)
        ╚════╤═════╝
             │
    ┌────────┴────────┐
    │   PAYLOAD BAY   │  ← Camera, altimeter, experiments
    └────────┬────────┘
             │
    ┌────────┴────────┐
    │   BODY TUBE     │  ← Cardboard/fibreglass/carbon
    │                 │
    │ ◄── RECOVERY ──►│  ← Parachute + shock cord
    │                 │
    └────────┬────────┘
             │
    ┌────────┴────────┐
    │  FIN CAN        │  ← 3-4 fins for stability
    │  ╱╲  ╱╲  ╱╲    │
    └────────┬────────┘
             │
        ┌────┴────┐
        │  MOTOR  │  ← Estes A–F class
        │  MOUNT  │
        └─────────┘
             ↑
       EXHAUST PLUME
```

---

## 📦 Danh Mục Tài Liệu / Document Index

| File | Mô tả |
|------|-------|
| [INDEX.md](INDEX.md) | Tổng quan khoá học |
| [schedule.md](schedule.md) | Lịch học 10 tuần chi tiết |
| **lessons/** | Bài học theo tuần |
| [week01.md](lessons/week01.md) | Tuần 1: Lịch sử & Tsiolkovsky |
| [week02.md](lessons/week02.md) | Tuần 2: Nhiên liệu & Hóa học đẩy |
| [week03.md](lessons/week03.md) | Tuần 3: Khí động học & Thiết kế |
| [week04.md](lessons/week04.md) | Tuần 4: Vòi phun De Laval & Vật liệu |
| [week05.md](lessons/week05.md) | Tuần 5: Phục hồi, An toàn & Lắp ráp |
| [week06.md](lessons/week06.md) | Tuần 6: Mô phỏng Python (RK4) |
| [week07.md](lessons/week07.md) | Tuần 7: OpenRocket & ThrustCurve.org |
| [week08.md](lessons/week08.md) | Tuần 8: TVC Avionics & Arduino FC |
| [week09.md](lessons/week09.md) | Tuần 9: Phân tích dữ liệu chuyến bay |
| [week10.md](lessons/week10.md) | Tuần 10: Demo Day & Launch |
| **references/** | Tài liệu tham khảo |
| [components.md](references/components.md) | Danh sách vật liệu & mua sắm |
| [safety.md](references/safety.md) | Quy định an toàn NAR |
| [formulas.md](references/formulas.md) | Công thức tổng hợp |
| **projects/** | Dự án |
| [final_project.md](projects/final_project.md) | Dự án cuối khoá (3 tracks) |
| **code/** | Code mẫu |
| [python/simulator.py](code/python/simulator.py) | Bộ mô phỏng quỹ đạo |
| [arduino/flight_computer.ino](code/arduino/flight_computer.ino) | Flight computer |
| [openrocket/](code/openrocket/) | File thiết kế .ork |

---

## 🛒 Danh Sách Vật Liệu / Bill of Materials

### Gói Cơ Bản — Học Lý Thuyết + Mô Phỏng (~500k–1 triệu)
| Vật liệu | Thông số | Giá |
|---------|---------|-----|
| Estes Model Rocket Kit | Alpha III hoặc tương đương | 200–400k |
| Estes Motor Pack | C6-5 (4 motors) | 150–250k |
| Launch Controller + Pad | Estes Porta-Pad II | 150–300k |
| Launch igniter spares | Pack 6 | 50–100k |
| Wadding | Recovery wadding pack | 30–50k |
| **Laptop với Python** | Đã có | — |

### Gói Avionics (Tuần 8–10) (~500k–1.5 triệu)
| Vật liệu | Thông số | Giá |
|---------|---------|-----|
| Arduino Nano/Mega | ATmega328P/2560 | 50–150k |
| BMP280 Barometer | I2C altimeter | 20–40k |
| MPU-6050 IMU | 6-axis | 20–40k |
| MicroSD Module | SPI data logger | 15–30k |
| SG90 Servo (×2) | TVC gimbal | 30–60k |
| 9V Battery + holder | Power | 20–30k |
| Perfboard + wire | Assembly | 30–60k |

---

## 💻 Phần Mềm / Software Stack (Tất cả miễn phí)

| Phần mềm | Dùng cho | Tải về |
|---------|---------|-------|
| **Python 3.11+** | Mô phỏng, phân tích | python.org |
| **RocketPy** | `pip install rocketpy` | rocketpy.org |
| **OpenRocket** | Thiết kế & mô phỏng GUI | openrocket.info |
| **NumPy + SciPy** | `pip install numpy scipy` | — |
| **Matplotlib** | `pip install matplotlib` | — |
| **Arduino IDE** | Lập trình flight computer | arduino.cc |
| **ThrustCurve.org** | Database motor data | thrustcurve.org |

```bash
# Cài tất cả Python packages / Install all packages
pip install rocketpy numpy scipy matplotlib pandas \
            jupyter seaborn pyserial
```

---

## 🔑 Công Thức Cốt Lõi / Key Formulas

| Công thức | Ý nghĩa |
|----------|---------|
| **Δv = Isp × g₀ × ln(m₀/mf)** | Phương trình Tsiolkovsky |
| **F = ṁ × ve + (Pe−Pa) × Ae** | Phương trình lực đẩy |
| **D = ½ρv²CdA** | Lực cản khí động |
| **SM = (CP − CG) / d** | Hệ số ổn định (≥ 1.0) |
| **h = 44330(1−(P/P₀)^0.190)** | Độ cao từ áp suất (m) |
| **r = aPⁿ** | Tốc độ cháy Vieille |
| **Isp = CF × c\* / g₀** | Xung lực riêng |

---

## 📊 Phân Bổ Thời Gian / Time Distribution

| Hoạt động | % | Giờ |
|-----------|---|-----|
| Lý thuyết + Tính toán | 35% | 10.5h |
| Mô phỏng (Python/OpenRocket) | 30% | 9h |
| Thực hành phần cứng/avionics | 25% | 7.5h |
| Demo Day (phóng tên lửa) | 10% | 3h |

---

## 🏆 Đánh Giá / Assessment

| Hạng mục | % |
|---------|---|
| Bài tập tính toán hàng tuần | 20% |
| Quiz vật lý (Tuần 3, 6, 9) | 15% |
| Báo cáo mô phỏng OpenRocket (Tuần 7) | 20% |
| Dự án cuối khoá (Tuần 10) | 45% |

---

## 🌏 Ngành Hàng Không Vũ Trụ Việt Nam / Vietnamese Aerospace Context

- **VNSC** (Vietnam National Space Center) — Hòa Lạc
- **VNREDSat-1** (2013) — Vệ tinh quan sát Trái Đất đầu tiên của VN
- **NanoDragon** (2021) — CubeSat 3U do VNSC chế tạo
- **Mục tiêu 2030**: Phóng vệ tinh tự chủ hoàn toàn
- **Chương trình học bổng**: JAXA, NASA, ESA internships cho sinh viên VN

---

*🚀 STEM Rocket Engine Program · 07/2026 · Song ngữ Việt – Anh*

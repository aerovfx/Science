# 📅 Lịch Học 10 Tuần — Động Cơ Tên Lửa DIY
# *10-Week Schedule — DIY Rocket Engine & Model Rocketry*

---

## 🔷 PHẦN 1: LÝ THUYẾT & PHẦN CỨNG / THEORY & HARDWARE (Tuần 1–5)

---

### Tuần 1 — Lịch Sử Tên Lửa & Nguyên Lý Đẩy

| Buổi | Nội dung | Hoạt động | Chuẩn bị |
|------|---------|-----------|---------|
| **1** | Lịch sử tên lửa (Goddard → SpaceX), Newton 3, phương trình Tsiolkovsky | Lecture + tính Δv cho 3 kịch bản khác nhau | Calculator |
| **2** | Phân loại tên lửa (solid/liquid/hybrid), Isp so sánh, giới thiệu Estes | Thí nghiệm bóng bay = Newton 3, đo lực đẩy | Bóng bay, cân điện tử |

**✅ Deliverables:**
- Tính Δv cho tên lửa mô hình (C6-5) bằng phương trình Tsiolkovsky
- Bảng so sánh Isp 5 loại nhiên liệu khác nhau

---

### Tuần 2 — Nhiên Liệu & Hóa Học Đẩy

| Buổi | Nội dung | Hoạt động | Chuẩn bị |
|------|---------|-----------|---------|
| **3** | APCP composition, cách đọc tên motor (C6-5), bảng phân loại A→O | Phân tích đường cong lực đẩy của 3 motor Estes | Data files |
| **4** | Python: vẽ thrust curve + tính tổng xung lực | Lab Python: plot + tính Isp từ data thực | Python + matplotlib |

**✅ Deliverables:**
- Python script vẽ thrust curve + xuất: Total Impulse, Avg Thrust, Isp
- Báo cáo 1 trang: so sánh C6-5, B6-4, D12-5

---

### Tuần 3 — Khí Động Học & Thiết Kế Tên Lửa

| Buổi | Nội dung | Hoạt động | Chuẩn bị |
|------|---------|-----------|---------|
| **5** | 4 lực tác dụng, hệ số cản Cd, Barrowman CP, CG đo thực tế | Lab: đo CG/CP mô hình giấy bìa, tính SM | Mô hình giấy, cân |
| **6** | Thiết kế nosecone, fin (trapezoidal vs swept), cân bằng stability | OpenRocket: build + sim 3 cấu hình fin khác nhau | OpenRocket |

**✅ Deliverables:**
- Tính stability margin (SM) cho 3 cấu hình fin bằng Barrowman
- File OpenRocket với rocket đạt SM = 1.5 calibers

---

### Tuần 4 — Buồng Đốt, Vòi Phun & Vật Liệu

| Buổi | Nội dung | Hoạt động | Chuẩn bị |
|------|---------|-----------|---------|
| **7** | Vòi phun De Laval: subsonic→sonic→supersonic, tỉ số diện tích, CF | Python: nozzle design calculator (Pc, Pa, F_target → Dt, De) | Python |
| **8** | Vật liệu: graphite, fiberglass, carbon fiber, 3D print; L\* parameter | So sánh mẫu vật liệu: khối lượng vs độ bền | Mẫu vật liệu |

**✅ Deliverables:**
- Python nozzle calculator: tính Dt, De, Me cho F=50N, Pc=1MPa
- Bảng so sánh 6 vật liệu: density, Tmax, giá, ứng dụng

---

### Tuần 5 — Phục Hồi, An Toàn & Lắp Ráp

| Buổi | Nội dung | Hoạt động | Chuẩn bị |
|------|---------|-----------|---------|
| **9** | Parachute sizing (v_land ≤ 6 m/s), dual deployment, NAR safety code | Tính kích thước dù cho tên lửa 200g | Calculator |
| **10** | **ASSEMBLY DAY**: Lắp hoàn chỉnh Estes Alpha III, kiểm tra continuity | Lắp ráp + test 12-point checklist | Estes kit + motor |

**✅ Deliverables:**
- Tên lửa Estes lắp hoàn chỉnh, ready-to-fly
- Checklist 12 điểm kiểm tra đầy đủ
- Ảnh tên lửa + sơ đồ recovery system

> ⚠️ **ASSEMBLY DAY**: Kiểm tra continuity bằng đồng hồ trước khi lắp motor!

---

## 🔷 PHẦN 2: MÔ PHỎNG & PHẦN MỀM / SIMULATION & SOFTWARE (Tuần 6–10)

---

### Tuần 6 — Mô Phỏng Quỹ Đạo với Python

| Buổi | Nội dung | Hoạt động | Chuẩn bị |
|------|---------|-----------|---------|
| **11** | Phương trình chuyển động có khối lượng thay đổi, Euler vs RK4, mô hình khí quyển ISA | Code: 1D simulator từ đầu (100 dòng) | Python + scipy |
| **12** | RocketPy library: setup, motor import, flight object, all_info() | Sim C6-5 rocket, so sánh với tính tay | RocketPy |

**✅ Deliverables:**
- 1D Python simulator tự viết: plot altitude/velocity/acceleration
- RocketPy simulation report: apogee, max velocity, flight time

---

### Tuần 7 — OpenRocket Nâng Cao & ThrustCurve.org

| Buổi | Nội dung | Hoạt động | Chuẩn bị |
|------|---------|-----------|---------|
| **13** | OpenRocket nâng cao: Monte Carlo (100 runs), wind effect, optimization | Tối ưu fin để đạt apogee tối đa với C motor | OpenRocket |
| **14** | ThrustCurve.org: tải .eng files, so sánh motor cùng class, export CSV | So sánh Estes C6 vs Aerotech C10 | thrustcurve.org |

**✅ Deliverables:**
- Monte Carlo report: apogee phân phối với wind 5 m/s
- Motor comparison: bảng so sánh 5 motor class C/D

---

### Tuần 8 — TVC Avionics & Arduino Flight Computer

| Buổi | Nội dung | Hoạt động | Chuẩn bị |
|------|---------|-----------|---------|
| **15** | MPU-6050 + BMP280 + SD logging, state machine (PAD→BOOST→COAST→APOGEE→DESCENT) | Build altimeter: đọc độ cao, log ra SD | Arduino + BMP280 |
| **16** | PID stabilization: error = 0° target, servo gimbal | Test TVC trên rig đứng yên (không phóng) | Servo + test rig |

**✅ Deliverables:**
- Arduino flight computer log đúng altitude + acceleration
- PID demo: servo giữ góc 0° khi nghiêng tay rig

---

### Tuần 9 — Phân Tích Dữ Liệu Chuyến Bay

| Buổi | Nội dung | Hoạt động | Chuẩn bị |
|------|---------|-----------|---------|
| **17** | Post-flight pipeline: CSV → Pandas → Savgol filter → find apogee | Phân tích file flight data mẫu (provided) | Python + pandas |
| **18** | Trích xuất Cd thực từ dữ liệu coast phase, so sánh sim vs thực tế | Tối ưu thiết kế cho chuyến bay tiếp theo | Python |

**✅ Deliverables:**
- FlightDataAnalyzer class: tự động tìm apogee, max vel, Cd thực
- Báo cáo cải tiến: đề xuất thay đổi design + motor

---

### Tuần 10 — 🚀 DEMO DAY — Phóng Tên Lửa!

| Buổi | Nội dung | Hoạt động | Chuẩn bị |
|------|---------|-----------|---------|
| **19** | Hoàn thiện dự án, dry-run presentation, RSO safety briefing | Final prep + continuity test + thuyết trình thử | Rocket + slide |
| **20** | **LAUNCH DAY** 🏆 | Thuyết trình 5' + Phóng tên lửa + Data analysis | Sân rộng + FAI waiver |

**✅ Deliverables:**
- Slide 10 trang: thiết kế + mô phỏng + avionics + kết quả
- Video phóng tên lửa
- Post-flight analysis report

> 📍 **Tuần 10 Buổi 20 học NGOÀI TRỜI** tại bãi đất trống đủ rộng (≥ 100m radius)  
> 🚨 **Cần RSO (Range Safety Officer) được đào tạo** và tuân thủ NAR safety code

---

## 📊 Thống Kê / Stats

| Chỉ số | Số liệu |
|--------|---------|
| Tổng buổi | 20 buổi |
| Tổng thời gian | 30 giờ |
| Buổi lý thuyết | 8 |
| Buổi simulation/code | 6 |
| Buổi phần cứng/avionics | 4 |
| Buổi ngoài trời | 1 (Launch Day) |

---

## 🏆 Tiêu Chí Tốt Nghiệp

- ✅ Tham dự ≥ 16/20 buổi
- ✅ Nộp bài tập ≥ 7/10 tuần
- ✅ Python simulator chạy được (Tuần 6)
- ✅ OpenRocket simulation hoàn chỉnh (Tuần 7)
- ✅ Tham gia Launch Day (Tuần 10)
- ✅ Điểm tổng kết ≥ 60/100

---

*📅 STEM Rocket Engine Program · 07/2026*

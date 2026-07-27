# 🏆 Dự Án Cuối Khoá — Động Cơ Tên Lửa DIY
# *Capstone Project Guide — Rocket Engine Course*

---

## 🎯 3 Track Dự Án / 3 Project Tracks

### Track A — 🐍 Simulation Engineer
**Nhiệm vụ**: Xây dựng bộ mô phỏng quỹ đạo đầy đủ và thực hiện phân tích Monte Carlo để dự đoán vùng rơi của tên lửa.

**Yêu cầu tối thiểu:**
- Python simulator với RK4/RK45 integration
- Mô hình khí quyển ISA (không phải ρ = const)
- Monte Carlo ≥ 200 lần với gió ngẫu nhiên ±5 m/s
- Vẽ bản đồ vùng rơi (landing scatter) bằng Folium hoặc Matplotlib
- So sánh 3 motor khác nhau trên cùng thiết kế tên lửa
- Launch readiness report (PDF/Markdown)

**Bonus:**
- 2D trajectory (với thành phần ngang, gió ảnh hưởng)
- Sensitivity analysis: Cd, khối lượng, Isp ảnh hưởng apogee thế nào?

```python
# Monte Carlo wind analysis / Phân tích gió Monte Carlo
import numpy as np
import matplotlib.pyplot as plt

def monte_carlo_landing(n_runs=200, wind_sigma=3.0):
    """
    Mô phỏng N lần phóng với gió ngẫu nhiên
    Simulate N launches with random wind
    """
    landing_x, landing_y = [], []
    
    for _ in range(n_runs):
        wind_x = np.random.normal(0, wind_sigma)  # m/s
        wind_y = np.random.normal(0, wind_sigma)  # m/s
        
        # Run 2D simulation with wind...
        # (full implementation in simulator.py)
        lx, ly = simulate_with_wind(wind_x, wind_y)
        landing_x.append(lx)
        landing_y.append(ly)
    
    # Vẽ vùng rơi / Plot scatter
    plt.figure(figsize=(8, 8))
    plt.scatter(landing_x, landing_y, alpha=0.3, s=10, color='red')
    plt.scatter(0, 0, marker='^', s=200, color='green', label='Launch pad')
    
    # 95% confidence ellipse
    from matplotlib.patches import Ellipse
    std_x, std_y = np.std(landing_x), np.std(landing_y)
    ellipse = Ellipse((np.mean(landing_x), np.mean(landing_y)),
                       4*std_x, 4*std_y, angle=0, fill=False, 
                       color='orange', linewidth=2, label='95% confidence')
    plt.gca().add_patch(ellipse)
    
    plt.xlabel('X (m) — Đông/Tây'); plt.ylabel('Y (m) — Bắc/Nam')
    plt.title(f'Vùng Rơi / Landing Scatter (n={n_runs}, σ_wind={wind_sigma} m/s)')
    plt.legend(); plt.axis('equal'); plt.grid(alpha=0.3)
    plt.savefig('monte_carlo_landing.png', dpi=150)
    
    print(f"📍 Mean landing: ({np.mean(landing_x):.1f}, {np.mean(landing_y):.1f}) m")
    print(f"📏 Std spread:  ({std_x:.1f}, {std_y:.1f}) m")
    print(f"🎯 95% radius:  {2*max(std_x,std_y):.1f} m")
```

---

### Track B — 🔧 Hardware Builder
**Nhiệm vụ**: Thiết kế, lắp ráp và phóng một tên lửa mô hình hoàn chỉnh với onboard altimeter, phục hồi và phân tích dữ liệu sau chuyến bay.

**Yêu cầu tối thiểu:**
- Tên lửa lắp ráp hoàn chỉnh (Estes kit hoặc scratch-build)
- Arduino altimeter + SD logger (BMP280 + microSD)
- Phóng với motor class C hoặc D
- Thu hồi thành công (tên lửa không hỏng)
- Phân tích dữ liệu: apogee thực tế vs mô phỏng
- Video phóng tên lửa ≥ 720p

**Bonus:**
- Dual deployment (drogue + main) với altimeter
- So sánh với mô phỏng OpenRocket

**Checklist trước phóng / Pre-launch checklist:**
```
□ Continuity test igniter (không kết nối nguồn!)
□ Recovery wadding lắp đúng
□ Parachute gấp và nhét đúng
□ Shock cord không bị xoắn
□ Nosecone ngồi chắc
□ Launch lug thẳng và bôi trơn
□ Motor lắp đúng chiều, clip chắc
□ Altimeter bật nguồn, LED xanh
□ SD card có trong slot
□ Tất cả vít đã xiết chặt
□ RSO đã kiểm tra ✓
□ Khu vực an toàn cleared ✓
```

---

### Track C — 💻 Avionics Developer
**Nhiệm vụ**: Xây dựng flight computer có khả năng TVC (Thrust Vector Control) — minh hoạ trên test rig mặt đất (không cần phóng thật).

**Yêu cầu tối thiểu:**
- Arduino Mega + MPU-6050 + BMP280 + SD + 2×Servo
- State machine: PAD → BOOST → COAST → APOGEE → DESCENT → LANDED
- PID attitude control (pitch axis): target = 0°
- Data logging ≥ 20Hz: time, altitude, pitch, roll, servo_angle
- Ground test rig: servo giữ 0° khi nghiêng tay 15°
- Post-flight analysis script (Python, đọc CSV từ SD)

**Bonus:**
- Telemetry radio (HC-12 hoặc RFM95 LoRa) stream dữ liệu về laptop
- Web dashboard live với Flask + WebSocket
- Deployment simulation: trigger pyro output khi đạt apogee

**Sơ đồ kết nối / Wiring Diagram:**
```
Arduino Mega 2560
│
├── [I2C] MPU-6050  (SDA=20, SCL=21)   ← IMU
├── [I2C] BMP280    (SDA=20, SCL=21)   ← Barometer
├── [SPI] MicroSD   (CS=53)            ← Data logger
├── [PWM] Servo X   (pin 9)            ← TVC gimbal X
├── [PWM] Servo Y   (pin 10)           ← TVC gimbal Y
├── [OUT] Pyro Ch1  (pin 6) → MOSFET  ← Drogue deploy
├── [OUT] Pyro Ch2  (pin 7) → MOSFET  ← Main deploy
├── [TX1] HC-12     (pin 18)           ← Telemetry TX
└── [IN]  E-Stop    (pin 44, INPUT_PULLUP)
```

---

## 📊 Rubric Đánh Giá / Assessment Rubric

### Tổng: 100 điểm

#### 1. Kỹ thuật / Technical (40 điểm)
| Tiêu chí | Điểm | Mô tả |
|---------|------|-------|
| Tính chính xác khoa học | 15 | Công thức đúng, kết quả hợp lý |
| Chất lượng code / hardware | 15 | Clean code, comment đầy đủ |
| Kết quả mô phỏng / thực nghiệm | 10 | Dữ liệu rõ ràng, phân tích đúng |

#### 2. Demo / Live Demo (35 điểm)
| Tiêu chí | Điểm | Mô tả |
|---------|------|-------|
| Demo chạy không lỗi | 20 | Track A: sim chạy, B: phóng OK, C: rig demo |
| Xử lý khi có sự cố | 10 | Bình tĩnh, có phương án dự phòng |
| Trả lời câu hỏi kỹ thuật | 5 | Hiểu nguyên lý đằng sau |

#### 3. Thuyết Trình / Presentation (25 điểm)
| Tiêu chí | Điểm | Mô tả |
|---------|------|-------|
| Slide 10 trang, có hình ảnh | 10 | Có đồ thị, sơ đồ, ảnh thực tế |
| Trình bày tự tin, mạch lạc | 10 | Không đọc slide, có eye contact |
| Cấu trúc: Vấn đề → Giải pháp → Kết quả | 5 | Flow logic |

---

## 📅 Timeline Dự Án

| Tuần | Việc cần làm |
|------|------------|
| Tuần 7 | Chọn track, nộp proposal 1 trang |
| Tuần 8 | Bắt đầu build/code |
| Tuần 9 | Hoàn thiện + test |
| Tuần 10 Buổi 19 | Final check + thuyết trình thử |
| Tuần 10 Buổi 20 | **DEMO DAY + LAUNCH** 🚀 |

---

## 🌏 Định Hướng Nghề Nghiệp / Career Paths

| Hướng | Công ty / Tổ chức | Kỹ năng cần |
|-------|-----------------|------------|
| **Propulsion Engineer** | SpaceX, Aerojet, Safran | Thermodynamics, CFD, MATLAB |
| **Avionics Engineer** | RocketLab, Northrop | Embedded C, RTOS, RF |
| **Trajectory Analyst** | NASA, ESA, JAXA | Python, MATLAB, orbital mechanics |
| **Structural Engineer** | Boeing, Airbus Space | FEA, Ansys, composites |
| **Nghiên cứu / Research** | VNSC, Đại học Bách Khoa | Vật lý, Toán cao cấp |

---

*🚀 STEM Rocket Engine Program · 07/2026*

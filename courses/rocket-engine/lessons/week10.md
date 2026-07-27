# Tuần 10: Dự Án Cuối Khoá & Phóng Tên Lửa / Week 10: Capstone Project & Launch Day

## 1. Mục Tiêu / Objectives

Tuần cuối cùng của khoá học là lúc sinh viên tổng hợp toàn bộ kiến thức Khí động học, Điện tử, và Lập trình vào một Dự Án Cuối Khoá (Capstone Project). Bạn sẽ làm việc theo nhóm hoặc cá nhân, hoàn thành một trong 3 hướng đi chuyên sâu (Tracks) và tham gia Ngày Phóng Tên Lửa Thực Tế (Launch Day).

The final week of the course is where students synthesize all Aerodynamics, Electronics, and Programming knowledge into a Capstone Project. You will work in teams or individually, complete one of 3 specialized tracks, and participate in the physical Launch Day.

### Mục tiêu cụ thể / Specific objectives:
1. **Hoàn thiện dự án / Complete the Capstone**: Ứng dụng kiến thức vào thực tế (Mô phỏng, Chế tạo, hoặc Điện tử).
2. **Kỹ năng báo cáo / Reporting skills**: Viết tài liệu kỹ thuật (Technical documentation) và thuyết trình.
3. **An toàn bãi phóng / Range Safety**: Nắm vững các nguyên tắc an toàn hàng không mô hình của NAR (National Association of Rocketry).
4. **Phân tích sau chuyến bay / Post-flight debrief**: Thu thập dữ liệu và đánh giá sự khác biệt giữa mô phỏng và thực tế.

---

## 2. Phần Mềm & Công Cụ / Software & Tools

| Công cụ / Tool | Phiên bản / Version | Chức năng / Function | Link tải / Download Link |
| --- | --- | --- | --- |
| **RocketPy** | 1.1+ | Mô phỏng bay nâng cao 6DOF / 6DOF Flight Sim | `pip install rocketpy` |
| **OpenRocket** | 22.02 | Kiểm tra lại độ ổn định (Cross-check) | [openrocket.info](https://openrocket.info/) |
| **PowerPoint/Canva** | N/A | Thiết kế Slide Thuyết trình / Presentation | N/A |
| **Cân điện tử / Scale**| N/A | Đo khối lượng khô chính xác / Weighing | N/A |
| **Thước kẹp / Caliper**| N/A | Đo đạc linh kiện / Measuring dimensions | N/A |

---

## 3. Lý Thuyết: Phân Tích Monte Carlo (Monte Carlo Analysis Theory)

Cho dù bạn chọn Track nào, việc hiểu về sai số hệ thống là bắt buộc đối với Kỹ sư Hàng không Vũ trụ (Aerospace Engineers). 
**Phân tích Monte Carlo** là phương pháp chạy hàng trăm hoặc hàng ngàn chuyến bay mô phỏng, trong đó mỗi lần bay, các thông số đầu vào bị làm nhiễu một cách ngẫu nhiên theo một phân phối xác suất (Probability Distribution).

### 3.1 Phân Phối Chuẩn (Normal Distribution)

Trong thực tế sản xuất, một động cơ Estes C6 ghi là có lực đẩy 14N, nhưng thực tế có thể là 13.5N hoặc 14.5N. Sự phân tán này thường tuân theo phân phối chuẩn (Normal Distribution/Gaussian).
$$ f(x) = \frac{1}{\sigma \sqrt{2\pi}} e^{-\frac{1}{2}\left(\frac{x-\mu}{\sigma}\right)^2} $$
Trong đó:
*   $\mu$ (Mean) là giá trị trung bình kỳ vọng.
*   $\sigma$ (Standard Deviation) là độ lệch chuẩn.

### 3.2 Tầm Quan Trọng của Monte Carlo / Importance of Monte Carlo

Trong hệ thống hàng không, rủi ro (Risk) không được tính bằng 1 chuyến bay thử. Nó tính bằng: "Trong 1000 lần phóng, có bao nhiêu lần tên lửa sẽ bay chệch ra khỏi khu vực an toàn (Recovery Zone)?"
*   Nếu gió thổi ngẫu nhiên từ $2 m/s$ đến $10 m/s$.
*   Nếu khối lượng khô sai số $\pm 5g$.
*   Nếu dù bung trễ $1s$.
Mô phỏng Monte Carlo kết hợp tất cả các sự kiện ngẫu nhiên này lại để đưa ra một xác suất sống sót (Probability of Success).

### 3.3 Hướng Mở Rộng Nghề Nghiệp (Career Paths)

Kiến thức của khoá học mở ra các hướng đi tại các cơ quan không gian hoặc công ty tư nhân:
*   **Aerospace Engineer**: Tính toán quỹ đạo, khí động học (SpaceX, Rocket Lab, VNSC).
*   **Propulsion Engineer**: Thiết kế buồng đốt, nozzle cho động cơ lỏng/rắn.
*   **Avionics/GNC Engineer**: Lập trình cảm biến, thuật toán Navigation & Control.
*   *Tại Việt Nam*: VNSC (Trung tâm Vũ trụ Việt Nam), VNREDSat, hoặc các startup nghiên cứu máy bay không người lái (UAV).

---

## 4. Code Python / Python Code: Track A (Simulation Engineer)

Đối với những bạn chọn Track A (Kỹ sư Mô phỏng), bạn sẽ không viết mã Arduino mà tập trung xây dựng một mô hình toán học siêu chính xác bằng `RocketPy` (Thư viện tính toán 6DOF của đại học Brazil, hiện đang chuẩn mực trong ngành Model Rocketry).

### Cài đặt RocketPy / Install RocketPy
```bash
pip install rocketpy
```

### Mã nguồn `capstone_rocketpy.py` / Source code
```python
import numpy as np
import matplotlib.pyplot as plt
from rocketpy import Environment, SolidMotor, Rocket, Flight

def run_capstone_simulation():
    print("="*50)
    print("KHỞI TẠO MÔ PHỎNG ROCKETPY 6DOF / INIT ROCKETPY 6DOF SIMULATION")
    print("="*50)

    # 1. Môi trường phóng (Launch Environment)
    # Lấy vĩ độ, kinh độ của một khu vực trống trải (VD: Bãi đất ngoại thành)
    # Vĩ độ 21.028, Kinh độ 105.804 (Khu vực gần Hà Nội)
    env = Environment(latitude=21.028, longitude=105.804, elevation=10)
    env.set_atmospheric_model(type='standard_atmosphere')
    
    # Thiết lập gió (Wind setup) - Rất quan trọng để mô phỏng Weathercocking
    # Gió 3m/s ở mặt đất, hướng 90 độ (Đông sang Tây)
    env.set_atmospheric_model(
        type="custom_atmosphere",
        wind_v=3.0,
        wind_direction=90
    )
    print("✔️ Đã thiết lập Môi trường / Environment set up successfully")

    # 2. Động cơ tên lửa (Rocket Motor - Estes C6)
    # Thông số chi tiết về hình học viên nhiên liệu (Grain geometry)
    C6 = SolidMotor(
        thrust_source='motors/Estes_C6.eng', # Phải tải file C6.eng từ ThrustCurve.org
        dry_mass=0.012,                # Khối lượng vỏ động cơ (kg)
        dry_inertia=(0.00001, 0.00001, 0.000001), 
        nozzle_radius=0.008,           # Bán kính ống xả (m)
        grain_number=1,                # Số lượng khối nhiên liệu
        grain_density=1700,            # Mật độ nhiên liệu rắn (kg/m^3)
        grain_outer_radius=0.011,      # m
        grain_initial_inner_radius=0.005, # Lõi rỗng (m)
        grain_initial_height=0.07,     # m
        grain_separation=0,
        grains_center_of_mass_position=0.02, # Vị trí tính từ đầu động cơ
        center_of_dry_mass_position=0.02,
        nozzle_position=0.0,
        burn_time=1.9,                 # Thời gian cháy (s)
        throat_radius=0.004,           # Bán kính cổ họng (m)
        reshape_thrust_curve=False,
        interpolation_method='linear'
    )
    print("✔️ Đã thiết lập Động cơ C6 / Solid Motor set up successfully")

    # 3. Thiết kế thân Tên lửa (Rocket Design)
    myRocket = Rocket(
        radius=0.024,                  # Bán kính ngoài thân (m) -> Đường kính 48mm
        mass=0.100,                    # Khối lượng khô (100g)
        inertia=(0.005, 0.005, 0.0002),# Ma trận quán tính Ixx, Iyy, Izz
        power_off_drag=0.45,           # Hệ số Cd ước tính khi tắt máy
        power_on_drag=0.5,             # Hệ số Cd ước tính khi mở máy (Thường cao hơn do xả đuôi)
        center_of_mass_without_motor=0.15, # CG không motor (m, tính từ mũi)
        coordinate_system_orientation='tail_to_nose'
    )
    
    # Gắn động cơ vào tên lửa
    myRocket.add_motor(C6, position=-0.2) # Gắn ở đuôi (-0.2m so với gốc tọa độ)
    
    # Thêm chóp mũi (Nosecone)
    myRocket.add_nose(length=0.08, kind='ogive', position=0.24)
    
    # Thêm cánh (Fins)
    # Tính toán chính xác khí động học cánh
    fin_set = myRocket.add_trapezoidal_fins(
        n=3,                      # Số cánh
        span=0.05,                # Sải cánh (m)
        root_chord=0.06,          # Cạnh gốc dính vào thân (m)
        tip_chord=0.03,           # Cạnh ngoài (m)
        position=-0.18            # Vị trí gắn (m)
    )
    
    # Thêm Dù (Parachute)
    main_chute = myRocket.add_parachute(
        'Main', cd_s=0.68,        # Hệ số cản x Diện tích của dù
        trigger='apogee',         # Kích hoạt khi tới đỉnh (Apogee)
        sampling_rate=105,
        lag=1.5,                  # Trễ bung dù 1.5s
        noise=(0, 8.3, 0.5)
    )
    print("✔️ Đã thiết kế Tên lửa / Rocket design complete")

    # 4. Chạy Mô phỏng Chuyến bay (Run Flight Simulation)
    print("\nĐang mô phỏng chuyến bay 6DOF... / Running 6DOF flight simulation...")
    test_flight = Flight(
        rocket=myRocket, 
        environment=env,
        rail_length=1.0,           # Thanh dẫn hướng bệ phóng dài 1m
        inclination=85,            # Bệ phóng nghiêng 85 độ so với mặt đất (5 độ off vertical)
        heading=0                  # Phóng về hướng Bắc (North)
    )
    
    # 5. Phân tích kết quả (Analyze Results)
    print("✔️ Mô phỏng hoàn tất. Đang xuất báo cáo... / Sim complete. Generating report...")
    test_flight.info()             # In báo cáo thông số tóm tắt ra console
    test_flight.plots.trajectory_3d() # Vẽ đồ thị 3D quỹ đạo (Nếu bạn có giao diện UI)
    
    # Lưu báo cáo đầy đủ
    test_flight.export_data('capstone_flight_data.csv')
    print("Đã lưu dữ liệu chuyến bay vào 'capstone_flight_data.csv'")

if __name__ == "__main__":
    # Yêu cầu sinh viên phải tạo thư mục 'motors' và tải file Estes_C6.eng vào trước khi chạy.
    # Note: Create 'motors' folder and place Estes_C6.eng inside before running.
    import os
    if not os.path.exists('motors'):
        os.makedirs('motors')
        print("Tạo thư mục 'motors'. Vui lòng bỏ file .eng vào đó / Created 'motors' dir. Please insert .eng file.")
    else:
        try:
            run_capstone_simulation()
        except FileNotFoundError:
            print("LỖI: Chưa có file động cơ (motors/Estes_C6.eng). Hãy tải từ ThrustCurve.org!")
            print("ERROR: Missing motor file. Download it from ThrustCurve.org!")

```

---

## 5. Hướng Dẫn Các Hướng Dự Án (Capstone Tracks)

Bạn sẽ phải chọn 1 trong 3 con đường dưới đây cho dự án cuối khoá:

### Track A: Simulation Engineer (Kỹ sư Mô phỏng)
*   **Nhiệm vụ:** Viết script Python kết hợp thư viện `RocketPy` để mô phỏng tên lửa nhiều tầng (Multi-stage) hoặc chạy mô phỏng Monte Carlo 500 lần để vẽ bản đồ rải rác khu vực rơi (Dispersion map).
*   **Sản phẩm (Deliverables):** File mã nguồn, Biểu đồ Dispersion, Báo cáo phân tích độ nhạy của gió (Wind sensitivity report).
*   **Năng lực đạt được:** Toán học cao cấp, Python nâng cao, hiểu sâu sắc khí động học tĩnh và động.

### Track B: Hardware Builder (Kỹ sư Khung vỏ & Lắp ráp)
*   **Nhiệm vụ:** Tự tay thiết kế OpenRocket, xuất file in 3D (Nosecone, Fin can), cắt ống thân (carton/fiberglass) và sơn hoàn thiện. Tích hợp máy tính bay (mua sẵn hoặc mượn) vào khoang Avionics.
*   **Sản phẩm (Deliverables):** Mô hình tên lửa thật hoàn chỉnh (Flight-ready). Phải bay thành công, thu hồi an toàn nguyên vẹn vào ngày Launch Day. Báo cáo phân tích vật liệu.
*   **Năng lực đạt được:** Cơ khí chế tạo, in 3D, tối ưu trọng lượng (Weight optimization), kỹ năng lắp đặt ngòi nổ.

### Track C: Avionics Developer (Kỹ sư Điện tử & Điều khiển)
*   **Nhiệm vụ:** Hoàn thiện và mở rộng máy tính bay Arduino từ tuần 8. Thiết kế board mạch in (PCB) thay vì breadboard. Lắp ráp ngàm TVC 2 trục và cấu hình thuật toán giữ thăng bằng.
*   **Sản phẩm (Deliverables):** Mạch PCB hoạt động tốt, Video chứng minh TVC Servo phản ứng chính xác khi lắc lư (trên giàn test mặt đất), Data log thẻ SD sạch sẽ.
*   **Năng lực đạt được:** Nhúng C/C++, Thiết kế mạch điện, Xử lý tín hiệu cảm biến số, Điều khiển tự động (Control theory).

---

## 6. Ngày Phóng Tên Lửa & Quy Trình (Launch Day Checklist)

Ngày phóng thực tế là sự kiện ngoài trời. Học viên, giáo viên và RSO (Range Safety Officer - Chỉ huy an toàn bãi phóng) phải tuân thủ nghiêm ngặt danh sách kiểm tra sau:

1. **Kiểm tra trước khi tới bãi phóng (Pre-Launch Prep)**
   * Pin Lipo đã sạc đầy. Thẻ SD đã dọn trống và format FAT32.
   * Mang theo băng keo cách điện, siêu keo (CA glue), dây thít nhựa.
   * Động cơ, ngòi nổ, bông chống cháy (recovery wadding).

2. **Tại khu vực lắp ráp (Preparation Area)**
   * Gấp dù, chèn bông chống cháy bảo vệ dù.
   * Lắp động cơ vào Motor Mount, vặn chặt nắp giữ (Engine retainer).
   * RSO kiểm tra Center of Gravity (CG) thủ công bằng cách đặt tên lửa thăng bằng trên ngón tay. So sánh với bản vẽ.

3. **Lên Bệ Phóng (At the Pad)**
   * Bệ phóng không có điện nối (Safety Switch đang TẮT - Khóa an toàn giữ trên tay RSO).
   * Lắp tên lửa vào thanh dẫn hướng (Launch lug / Rail button).
   * Gắn kẹp ngòi nổ (Igniter clips) vào chân e-match. KHÔNG để 2 kẹp chạm nhau (đoản mạch).
   * Lùi về khu vực an toàn (Bán kính tuỳ thuộc size động cơ, Estes C/D cần lùi tối thiểu 5 mét).

4. **Đếm ngược & Kích Hoạt (Countdown & Ignition)**
   * RSO cắm Khóa an toàn vào bệ phóng. Đèn Continuity (kiểm tra mạch) sáng.
   * Hô to: "Tầm nhìn trống trải (Range is clear)! Bầu trời trống trải (Sky is clear)!"
   * Đếm ngược: "5, 4, 3, 2, 1, PHÓNG (LAUNCH)!"
   * RSO nhấn nút kích hỏa.

---

## 7. ⚠️ Cảnh Báo An Toàn Khu Phóng (Range Safety Warnings)

*   **Misfire (Kích nổ hỏng):** Nếu nhấn nút nhưng tên lửa không bay, KHÔNG ĐƯỢC TIẾN LẠI GẦN. Đợi ít nhất 60 giây (1 phút). Ngòi nổ có thể cháy ngầm và phóng trễ. Sau 60s, rút chìa khoá an toàn rồi mới tiếp cận.
    *In case of misfire, wait at least 60 seconds before approaching the pad. Always remove the safety key before approaching.*
*   **Tầm nhìn máy bay (Airspace clear):** Luôn nhìn lên trời. Nếu có máy bay, trực thăng hay drone lạ bay vào khu vực, RSO phải HỦY (ABORT) lệnh đếm ngược ngay lập tức.
    *Always look up. If any aircraft enters the airspace, the RSO must call "ABORT" immediately.*

---

## 8. Câu Hỏi Thảo Luận / Discussion Questions

1. Trong Track A (Mô phỏng), phương pháp Monte Carlo có ý nghĩa gì đối với việc xác định bán kính an toàn của khu vực hạ cánh (Recovery Zone)?
   *In Track A, what is the significance of the Monte Carlo method in determining the safe radius of the recovery zone?*
2. Đối với Track B (Phần cứng), tại sao việc phủ sơn bóng láng hoặc dùng ống sợi thuỷ tinh lại giúp tăng độ cao Apogee so với ống carton sần sùi?
   *For Track B, why does using glossy paint or fiberglass tubes increase the apogee compared to rough cardboard tubes?*
3. Trong thủ tục an toàn bệ phóng, tại sao chìa khoá an toàn của hệ thống kích nổ phải luôn nằm trong túi của RSO hoặc người thao tác lắp tên lửa?
   *In range safety procedures, why must the launch controller safety key always remain in the pocket of the RSO or the person arming the rocket?*
4. Đánh giá sự cố (Debrief): Tên lửa cất cánh hoàn hảo, đạt đỉnh rất cao, nhưng khi rơi xuống, khoang chứa dù mở ra nhưng dù bị cháy đen và không phồng lên. Lỗi ở khâu thiết kế/chuẩn bị nào?
   *Debrief: The rocket launched perfectly, but upon descent, the parachute bay opened, revealing a scorched, melted parachute that failed to inflate. What prep mistake caused this?*
5. Vai trò của lực lượng hàng không dân dụng (ví dụ: FAA ở Mỹ, hoặc Cục Hàng không Việt Nam) đối với hoạt động bay tên lửa nghiệp dư cỡ lớn (High-Power Rocketry) là gì?
   *What is the role of civil aviation authorities (like FAA or CAA Vietnam) in large-scale amateur rocketry (High-Power Rocketry) operations?*

---

## 9. Bài Về Nhà / Homework (Capstone Deliverables)

Tuần cuối không có bài tập về nhà nhỏ lẻ. Bạn phải nộp gói Hồ Sơ Dự Án Cuối Khoá (Capstone Portfolio) bao gồm:

1. **Báo Cáo Kỹ Thuật (Technical Report):** Document PDF dài 5-10 trang mô tả chi tiết:
   *   Mục tiêu thiết kế (Thiết kế để bay cao hay bay thẳng?)
   *   Quá trình mô phỏng (Có chèn đồ thị OpenRocket/RocketPy).
   *   Sơ đồ mạch điện (nếu có).
2. **Slide Thuyết Trình (Presentation):** 10-15 slides. Trình bày ngắn gọn trong 10 phút trước lớp và hội đồng.
3. **Mã Nguồn / File Thiết Kế:** Nén file `.rkt` (OpenRocket), file `.py` hoặc mã `.ino` (Arduino) vào thư mục chung.

---

## 10. Tiêu Chí Đánh Giá Tổng Kết / Final Assessment Rubric

| Tiêu chí / Criteria (25% mỗi mục) | Xuất sắc (9-10đ) / Excellent | Đạt (7-8đ) / Proficient | Cần cố gắng (<7đ) / Needs Improvement |
| --- | --- | --- | --- |
| **Báo cáo kỹ thuật (Technical Report)** | Lập luận logic chặt chẽ, kết hợp hoàn hảo giữa công thức vật lý và kết quả chạy thử. Trình bày song ngữ chuyên nghiệp. | Báo cáo đầy đủ các phần, có số liệu nhưng phân tích nguyên nhân/kết quả chưa sâu. | Báo cáo sơ sài, copy/paste nhiều, thiếu định dạng bảng biểu và đồ thị. |
| **Sản phẩm Cốt lõi (Core Deliverable)** | (Hardware) Bay thành công rực rỡ / (Sim) Script chạy hoàn hảo vẽ bản đồ đẹp / (Avionics) Mạch làm việc trơn tru, log sạch. | Sản phẩm hoạt động được 80% yêu cầu. Ví dụ: Tên lửa bay nhưng gãy cánh khi hạ cánh. | Tên lửa nổ trên bệ phóng do lỗi cơ khí / Code mô phỏng bị crash liên tục. |
| **Kỹ năng thuyết trình (Presentation)** | Tự tin, phản biện xuất sắc các câu hỏi hóc búa của hội đồng. Phân chia công việc nhóm rõ ràng. | Trình bày trôi chảy nhưng lúng túng khi giải thích các thông số khó (PID, Monte Carlo). | Đọc slide chữ nhỏ, không có sự chuẩn bị hoặc quá giờ quy định (10 phút). |
| **An toàn & Kỷ luật (Safety & Discipline)** | Tuân thủ tuyệt đối Range Safety. Hỗ trợ RSO và các nhóm khác tại bãi phóng. | Tuân thủ an toàn nhưng cần giáo viên nhắc nhở 1-2 lần về thứ tự các bước. | Vi phạm nghiêm trọng nguyên tắc an toàn (ví dụ: gắn ngòi nổ khi chìa khoá đang cắm). Sẽ bị loại thẳng! |

---
*CHÚC MỪNG BẠN ĐÃ HOÀN THÀNH KHOÁ HỌC! HẸN GẶP LẠI TẠI BÃI PHÓNG!*
*CONGRATULATIONS ON COMPLETING THE COURSE! SEE YOU AT THE LAUNCH PAD!*
*Tài liệu nội bộ khoá học Rocket Engine & Model Rocketry. Vui lòng không phân phối khi chưa có sự cho phép.*
*Internal course material for Rocket Engine & Model Rocketry. Please do not distribute without permission.*

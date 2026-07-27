# Tuần 8: Điều Khiển Vectơ Lực Đẩy & Avionics / Week 8: Thrust Vector Control & Avionics

## 1. Mục Tiêu / Objectives

Trong tuần này, sinh viên sẽ tìm hiểu về hệ thống Điện tử hàng không (Avionics) và Điều khiển Vectơ Lực Đẩy (Thrust Vector Control - TVC). Chúng ta sẽ tự chế tạo một máy tính bay (Flight Computer) đơn giản dùng vi điều khiển Arduino để đọc cảm biến IMU, đo độ cao bằng khí áp kế, và điều khiển góc nghiêng của động cơ.

In this week, students will learn about Avionics and Thrust Vector Control (TVC). We will build a simple Flight Computer using an Arduino microcontroller to read IMU sensors, measure altitude with a barometer, and control the tilt angle of the motor.

### Mục tiêu cụ thể / Specific objectives:
1. **Khái niệm TVC / TVC Concept**: Hiểu cách lực đẩy có thể được đổi hướng để tạo mô-men xoắn (torque) điều khiển tên lửa.
2. **Cảm biến / Sensors**: Làm việc với gia tốc kế/con quay hồi chuyển MPU6050 và khí áp kế BMP280.
3. **Bộ điều khiển PID / PID Controller**: Hiểu thuật toán PID và áp dụng để giữ thăng bằng.
4. **Lập trình nhúng & Telemetry / Embedded C++ & Telemetry**: Viết mã Arduino C++ cho Flight Computer và viết mã Python (Telemetry Ground Station) để hiển thị dữ liệu trực tiếp.

---

## 2. Phần Mềm & Công Cụ / Software & Tools

| Công cụ / Tool | Phiên bản / Version | Chức năng / Function | Link tải / Download Link |
| --- | --- | --- | --- |
| **Arduino IDE** | 2.x | Viết và nạp mã C++ / Write & flash C++ | [arduino.cc](https://www.arduino.cc/) |
| **Python** | 3.9+ | Trạm mặt đất (Ground Station) | [python.org](https://www.python.org/) |
| **PySerial** | 3.5+ | Đọc dữ liệu cổng Serial / Read Serial | `pip install pyserial matplotlib` |
| **MPU6050 / BMP280** | N/A | Cảm biến vật lý / Physical sensors | N/A |
| **Servo Motors** | SG90 / MG90 | Khớp chuyển động TVC / TVC Gimbal Actuators | N/A |

---

## 3. Lý Thuyết / Theory

### 3.1 Điều Khiển Vectơ Lực Đẩy (Thrust Vector Control - TVC)

TVC là cơ cấu cho phép nghiêng ống xả động cơ (gimbal) để thay đổi hướng của véctơ lực đẩy.
Khi động cơ nghiêng một góc $\theta$ so với trục dọc của tên lửa, lực đẩy $F_T$ sẽ bị phân tích thành hai thành phần:
When the motor is tilted at an angle $\theta$ relative to the rocket's longitudinal axis, the thrust $F_T$ is resolved into two components:

1.  **Lực đẩy dọc (Axial Thrust):**
    $$ F_{axial} = F_T \cdot \cos(\theta) $$
    Đây là lực nâng tên lửa bay lên.
2.  **Lực đẩy ngang (Side Force / Normal Force):**
    $$ F_{side} = F_T \cdot \sin(\theta) $$
    Lực này tác dụng tại giá treo động cơ (cách trọng tâm CG một khoảng $L_{gimbal}$), tạo ra Mô-men xoắn (Torque - $\tau$).

**Mô-men xoắn định hướng (Control Torque):**
$$ \tau = F_{side} \cdot L_{gimbal} = F_T \cdot \sin(\theta) \cdot L_{gimbal} $$
Theo định luật II Newton cho chuyển động quay:
$$ \tau = I \cdot \alpha $$
(Với $I$ là mô-men quán tính, $\alpha$ là gia tốc góc).
Bằng cách điều chỉnh liên tục góc $\theta$, chúng ta có thể kiểm soát được gia tốc góc $\alpha$, từ đó giữ cho tên lửa bay thẳng (Pitch/Yaw = 0).

### 3.2 Khí Áp Kế (Barometer) & Đo Độ Cao

Cảm biến BMP280 đo áp suất tĩnh của không khí. Càng lên cao, áp suất không khí càng giảm. Công thức tính độ cao so với điểm gốc (launch pad) dựa trên công thức khí quyển chuẩn:
$$ h = 44330 \cdot \left[ 1 - \left( \frac{P}{P_0} \right)^{\frac{1}{5.255}} \right] $$
Trong đó:
*   $P$ là áp suất hiện tại đọc được (Current pressure).
*   $P_0$ là áp suất tại mặt đất (Ground pressure baseline).
*   $h$ là độ cao tính bằng mét.

### 3.3 Bộ Điều Khiển PID (Proportional-Integral-Derivative)

Để tính toán góc nghiêng động cơ $\theta$ phù hợp, ta dùng thuật toán PID. Thuật toán này lấy Sai số (Error $e(t)$) làm đầu vào.
$$ e(t) = \text{SetPoint} - \text{MeasuredValue} $$
Ở đây, SetPoint = $0^\circ$ (bay thẳng đứng), MeasuredValue là góc nghiêng hiện tại đọc từ cảm biến IMU (MPU6050).

**Công thức PID:**
$$ u(t) = K_p \cdot e(t) + K_i \int_{0}^{t} e(\tau) d\tau + K_d \frac{de(t)}{dt} $$
Trong đó $u(t)$ là tín hiệu đầu ra (góc lệnh servo $\theta$):
*   **$K_p$ (Proportional):** Phản ứng ngay lập tức với sai số hiện tại.
*   **$K_i$ (Integral):** Tích luỹ sai số quá khứ để khắc phục lỗi không cân bằng tĩnh.
*   **$K_d$ (Derivative):** Dự đoán xu hướng tương lai, giúp "hãm" tốc độ ngả nghiêng, giảm dao động (damping).

---

## 4. Code / Source Code

Trong tuần này chúng ta có 2 phần code: Code C++ nạp vào Arduino và Code Python chạy trên máy tính để thu nhận dữ liệu (Telemetry).
*This week we have 2 codes: C++ code for Arduino and Python code for Ground Station Telemetry.*

### 4.1 Arduino Flight Computer Code (C++)

Đây là mã nguồn chính cho máy tính bay của bạn. Nó đọc cảm biến và điều khiển Servo TVC. Cài đặt các thư viện `Adafruit BMP280` và `MPU6050` qua Library Manager của Arduino.
*This is the main flight computer code. Install `Adafruit BMP280` and `MPU6050` via Arduino Library Manager.*

```cpp
#include <Wire.h>
#include <SPI.h>
#include <SD.h>
#include <Servo.h>
#include <Adafruit_Sensor.h>
#include <Adafruit_BMP280.h>

// Lưu ý: Cần thư viện MPU6050 (của Jeff Rowberg hoặc ElectronicCats)
#include <MPU6050.h> 

// ═══ ROCKET FLIGHT STATES / TRẠNG THÁI BAY ═══
enum FlightState { PAD, BOOST, COAST, APOGEE, DESCENT, LANDED };

// ═══ CONSTANTS / HẰNG SỐ ═══
const float LAUNCH_ACCEL_THRESHOLD = 2.5;  // g — detect liftoff (Phát hiện cất cánh)
const float MAIN_CHUTE_ALTITUDE = 100.0;   // m — deploy main chute (Bung dù chính)

FlightState state = PAD;
Adafruit_BMP280 bmp;
MPU6050 mpu;
Servo tvcServoX, tvcServoY;
File logFile;

float altitude = 0, prev_altitude = 0;
float baseline_pressure;

// PID Variables
float integral_X = 0, prev_error_X = 0;
float integral_Y = 0, prev_error_Y = 0;

void setup() {
  Serial.begin(115200);
  Wire.begin();
  
  // Khởi tạo cảm biến / Initialize sensors
  if (!bmp.begin(0x76)) {
    Serial.println("Could not find BMP280 sensor!");
    while (1);
  }
  mpu.initialize();
  
  // Khởi tạo SD Card / Init SD Card
  if (!SD.begin(10)) {
    Serial.println("SD Card initialization failed!");
  } else {
    logFile = SD.open("flight.csv", FILE_WRITE);
    if (logFile) {
      logFile.println("time,alt,accel,pitch,yaw,state");
      logFile.close();
    }
  }
  
  // Gắn Servos và căn giữa / Attach Servos & Center
  tvcServoX.attach(9); 
  tvcServoY.attach(10);
  tvcServoX.write(90); 
  tvcServoY.write(90);
  
  // Đo áp suất gốc / Measure baseline pressure
  baseline_pressure = bmp.readPressure();
  Serial.println("Flight computer ready / Máy tính bay sẵn sàng");
}

float getAltitude() {
  float P = bmp.readPressure();
  return 44330.0 * (1.0 - pow(P / baseline_pressure, 1.0/5.255));
}

void loop() {
  unsigned long currentMillis = millis();
  float t = currentMillis / 1000.0;
  
  int16_t ax, ay, az;
  mpu.getAcceleration(&ax, &ay, &az);
  float accel_z = az / 16384.0;  // Chuyển đổi sang G-force (1G = 16384 LSB)
  
  altitude = getAltitude();
  
  // Tính góc thô bằng Accelerometer (Trong thực tế cần kết hợp Gyro bằng Kalman Filter)
  // Rough angle calc (In reality, use Kalman filter with Gyro)
  float pitch_angle = atan2(ax, az) * 180 / PI;
  float yaw_angle   = atan2(ay, az) * 180 / PI;
  
  // Xử lý Trạng thái bay / State Machine
  switch (state) {
    case PAD:
      if (accel_z > LAUNCH_ACCEL_THRESHOLD) {
        state = BOOST;
        Serial.println("LIFTOFF!");
      }
      break;
    case BOOST:
      // Kích hoạt PID điều khiển TVC / Activate TVC PID
      runTVC(pitch_angle, yaw_angle);
      // Phát hiện tắt máy (Gia tốc rơi tự do) / Detect Burnout
      if (accel_z < 0.1) state = COAST;  
      break;
    case COAST:
      // Khóa TVC ở vị trí trung tâm / Lock TVC centered
      tvcServoX.write(90); tvcServoY.write(90);
      // Phát hiện đỉnh quỹ đạo / Detect Apogee
      if (altitude < prev_altitude - 1.5) {
        state = APOGEE;
        fireEjectionCharge(1);  // Bắn dù hãm (Drogue)
        Serial.println("APOGEE detected!");
      }
      break;
    case APOGEE:
      if (altitude < MAIN_CHUTE_ALTITUDE) {
        state = DESCENT;
        fireEjectionCharge(2);  // Bắn dù chính (Main chute)
      }
      break;
    case DESCENT:
      // Chạm đất khi độ cao không đổi / Landed when altitude is stable
      if (abs(altitude) < 3 && abs(altitude - prev_altitude) < 0.1)
        state = LANDED;
      break;
  }
  
  // Ghi log vào thẻ SD / Log to SD Card
  if (currentMillis % 50 == 0) { // 20Hz logging
    logFile = SD.open("flight.csv", FILE_WRITE);
    if (logFile) {
      logFile.print(t); logFile.print(',');
      logFile.print(altitude); logFile.print(',');
      logFile.print(accel_z); logFile.print(',');
      logFile.print(pitch_angle); logFile.print(',');
      logFile.print(yaw_angle); logFile.print(',');
      logFile.println(state);
      logFile.close();
    }
    // Gửi Telemetry qua Serial cho Trạm mặt đất
    // Send telemetry via Serial for Ground Station
    Serial.print("TELEMETRY:");
    Serial.print(t); Serial.print(",");
    Serial.print(altitude); Serial.print(",");
    Serial.print(pitch_angle); Serial.print(",");
    Serial.println(state);
  }
  
  prev_altitude = altitude;
  delay(10);  // Loop rate limit
}

void runTVC(float pitch, float yaw) {
  float Kp=1.5, Ki=0.0, Kd=0.2;  // Cần tinh chỉnh thực tế (Tuning required)
  float dt = 0.01; // 10ms loop time approximation
  
  // X-Axis (Pitch)
  float error_X = 0 - pitch;  // Mục tiêu là 0 độ (thẳng đứng)
  integral_X += error_X * dt;
  float derivative_X = (error_X - prev_error_X) / dt;
  float servoX_out = 90 + Kp*error_X + Ki*integral_X + Kd*derivative_X;
  tvcServoX.write(constrain(servoX_out, 75, 105)); // Giới hạn nghiêng +-15 độ
  prev_error_X = error_X;
  
  // Y-Axis (Yaw)
  float error_Y = 0 - yaw; 
  integral_Y += error_Y * dt;
  float derivative_Y = (error_Y - prev_error_Y) / dt;
  float servoY_out = 90 + Kp*error_Y + Ki*integral_Y + Kd*derivative_Y;
  tvcServoY.write(constrain(servoY_out, 75, 105)); 
  prev_error_Y = error_Y;
}

void fireEjectionCharge(int channel) {
  int pin = (channel == 1) ? 6 : 7;
  pinMode(pin, OUTPUT);
  digitalWrite(pin, HIGH);
  delay(500); // Kích nổ 500ms
  digitalWrite(pin, LOW);
}
```

### 4.2 Python Ground Station (Trạm Mặt Đất)

Chạy script Python này để nhận dữ liệu từ Arduino qua cáp USB hoặc sóng Radio (Telemetry) và vẽ biểu đồ trực tiếp (Live plotting). Cài đặt thư viện: `pip install pyserial matplotlib`
*Run this Python script to receive data from Arduino and plot it live.*

```python
import serial
import time
import matplotlib.pyplot as plt
import matplotlib.animation as animation

# CẤU HÌNH PORT TƯƠNG ỨNG VỚI ARDUINO (Ví dụ: 'COM3' cho Windows, '/dev/ttyUSB0' cho Linux)
# CONFIGURE PORT TO MATCH ARDUINO (e.g. 'COM3' or '/dev/cu.usbmodem14101')
SERIAL_PORT = '/dev/cu.usbmodem14101'  # Đổi giá trị này / Change this value
BAUD_RATE = 115200

# Khởi tạo dữ liệu / Initialize data arrays
times = []
altitudes = []
pitches = []

print(f"Bắt đầu kết nối cổng / Connecting to {SERIAL_PORT}...")
try:
    ser = serial.Serial(SERIAL_PORT, BAUD_RATE, timeout=1)
    time.sleep(2) # Đợi Arduino reset
except Exception as e:
    print(f"LỖI KẾT NỐI / CONNECTION ERROR: {e}")
    exit()

fig = plt.figure(figsize=(10, 6))
ax1 = fig.add_subplot(2, 1, 1)
ax2 = fig.add_subplot(2, 1, 2)

def update(frame):
    global times, altitudes, pitches
    while ser.in_waiting:
        try:
            line = ser.readline().decode('utf-8').strip()
            if line.startswith("TELEMETRY:"):
                # Format: TELEMETRY:t,alt,pitch,state
                data_str = line.replace("TELEMETRY:", "").split(',')
                t = float(data_str[0])
                alt = float(data_str[1])
                pitch = float(data_str[2])
                state = int(data_str[3])
                
                times.append(t)
                altitudes.append(alt)
                pitches.append(pitch)
                
                # Giữ 100 điểm dữ liệu mới nhất / Keep last 100 points
                times = times[-100:]
                altitudes = altitudes[-100:]
                pitches = pitches[-100:]
        except Exception as e:
            pass # Bỏ qua dữ liệu nhiễu / Ignore noise

    ax1.clear()
    ax1.plot(times, altitudes, 'b-', linewidth=2)
    ax1.set_ylabel('Độ cao / Altitude (m)')
    ax1.set_title('Live Telemetry: Altitude')
    
    ax2.clear()
    ax2.plot(times, pitches, 'r-', linewidth=2)
    ax2.set_ylabel('Pitch Angle (deg)')
    ax2.set_xlabel('Thời gian / Time (s)')
    ax2.axhline(0, color='k', linestyle='--')
    ax2.set_ylim(-30, 30)

print("Đang nhận dữ liệu / Receiving data... (Đóng cửa sổ đồ thị để thoát)")
ani = animation.FuncAnimation(fig, update, interval=100) # Cập nhật mỗi 100ms
plt.tight_layout()
plt.show()
ser.close()
```

---

## 5. Hướng Dẫn Từng Bước / Step-by-Step Instructions

1. **Đấu nối phần cứng / Hardware Wiring**:
   *   Nối BMP280 vào Arduino (SDA -> A4, SCL -> A5, VCC -> 3.3V, GND -> GND).
   *   Nối MPU6050 song song vào chung bus I2C (SDA -> A4, SCL -> A5).
   *   Cắm 2 Servo (X, Y) vào chân D9 và D10 của Arduino.
   *   Nối còi chip (Buzzer) nếu muốn (tuỳ chọn).

2. **Nạp mã C++ / Flash C++ Code**:
   *   Mở Arduino IDE, copy mã 4.1 vào.
   *   Cài thư viện `Adafruit BMP280 Library` và `MPU6050`.
   *   Chọn đúng Board (Arduino Uno/Nano/Mega) và Port.
   *   Bấm **Upload**. Bật Serial Monitor ở 115200 baud để kiểm tra dòng chữ "LIFTOFF" nếu bạn lắc mạnh bo mạch lên trên.

3. **Lắp cơ cấu TVC / Assemble TVC Gimbal**:
   *   Sử dụng máy in 3D để in ngàm giữ động cơ có 2 khớp xoay (2-axis gimbal).
   *   Lắp 2 servo vào ngàm, liên kết tay đòn với thân ống động cơ.
   *   Bật điện Arduino, hai servo sẽ tự khoá cứng ở góc $90^\circ$ (Trung tâm).

4. **Chạy Trạm mặt đất / Run Ground Station**:
   *   Để Arduino cắm cáp USB vào máy tính.
   *   Mở file Python bằng VS Code, sửa biến `SERIAL_PORT` thành đúng cổng (vd `COM3`).
   *   Chạy code Python. Nghiêng bo mạch Arduino bằng tay và quan sát đồ thị góc Pitch nhảy nhót trực tiếp trên màn hình.

5. **Tuning PID / Chỉnh thông số PID**:
   *   Gắn khối TVC lên một bệ thử cân bằng tĩnh (như bập bênh).
   *   Thay đổi Kp, Ki, Kd trong mã Arduino và Upload lại đến khi hệ thống chống lại lực tay của bạn một cách mượt mà nhất.

---

## 6. ⚠️ Cảnh Báo An Toàn / Safety Warnings

*   **Chập cháy thiết bị nổ (Pyrotechnic hazards):** Mạch điện tử phóng dù (Ejection charge) dùng tín hiệu 5V để kích nổ ngòi điện (e-match). TUYỆT ĐỐI KHÔNG gắn ngòi nổ vào mạch khi đang code hoặc test trên bàn. Phải có công tắc an toàn (Safe switch) cách ly ngòi nổ.
    *Never connect igniters/e-matches while coding or testing on the bench. An accidental discharge will happen. Use a physical safety switch.*
*   **TVC Servo kẹt (Jammed TVC):** Nếu gimbal kẹt ở góc lớn (ví dụ $+15^\circ$), tên lửa sẽ quay cuồng lộn vòng cực kỳ nguy hiểm. Đảm bảo in 3D khớp gimbal trơn tru, không cọ xát. Servo phải đủ mô-men kéo (dùng servo kim loại MG90, không dùng nhựa SG90 cho động cơ lớn).

---

## 7. Câu Hỏi Thảo Luận / Discussion Questions

1. Tại sao tính góc nghiêng chỉ bằng Accelerometer `atan2(ax, az)` lại không chính xác khi tên lửa đang tăng tốc mạnh? Giải pháp là gì?
   *Why is calculating the angle using only the Accelerometer inaccurate during strong acceleration? What is the solution?*
2. Vai trò của khâu Đạo hàm (Kd) trong bộ điều khiển PID đối với hệ thống TVC tên lửa là gì?
   *What is the role of the Derivative (Kd) term in the PID controller for a rocket TVC system?*
3. Nếu đường kính tên lửa quá nhỏ, khoảng cách $L_{gimbal}$ bị hạn chế, bạn sẽ bù đắp mô-men xoắn bằng cách nào?
   *If the rocket diameter is very small and $L_{gimbal}$ is restricted, how can you compensate for the lack of torque?*
4. Tại sao chúng ta không triển khai dù chính (Main chute) ngay tại đỉnh quỹ đạo (Apogee) mà lại dùng dù hãm (Drogue) trước?
   *Why don't we deploy the main parachute exactly at apogee, but use a drogue chute first instead?*
5. Máy trạng thái bay (Flight State Machine) xử lý sự kiện nổ động cơ (CATO - Catastrophe) như thế nào trong đoạn code trên? (Gợi ý: Nó có xử lý không?)
   *How does the Flight State Machine handle a motor explosion (CATO) in the code above? (Hint: Does it?)*

---

## 8. Bài Về Nhà / Homework

1. **Lập Trình Bổ Sung State Machine / Enhance State Machine:**
   *   Đoạn code C++ trên thiếu cơ chế bảo vệ Abort. Hãy thêm một trạng thái `ABORT` vào enum.
   *   Nếu tên lửa nghiêng quá $45^\circ$ trong trạng thái `BOOST`, lập tức chuyển sang `ABORT` và ép bung dù chính ngay lập tức để huỷ chuyến bay an toàn.
   *   Nộp lại đoạn mã hàm `loop()` đã chỉnh sửa.

2. **Test Ground Station / Ground Station Testing:**
   *   Chạy mã Python và kết nối với Arduino của bạn. Lắc bo mạch MPU6050 để tạo đồ thị giả lập.
   *   Chụp lại ảnh màn hình đồ thị Live Telemetry nộp cho giáo viên.

---

## 9. Tiêu Chí Đánh Giá / Assessment Rubric

| Tiêu chí / Criteria | Xuất sắc (9-10đ) / Excellent | Đạt (7-8đ) / Proficient | Cần cố gắng (<7đ) / Needs Improvement |
| --- | --- | --- | --- |
| **Mạch điện (Avionics Hardware)** | Hàn mạch gọn gàng, test thành công việc nhận cảm biến trên Serial Monitor. | Cắm mạch breadboard, chạy được nhưng dây lỏng lẻo, hay rớt mạng I2C. | Không nhận diện được BMP280 hoặc MPU6050. |
| **Thuật toán PID (TVC PID)** | Hiểu rõ Kp, Ki, Kd, tự điều chỉnh được Servo phản ứng mượt mà khi xoay bo mạch. | Phụ thuộc hoàn toàn vào thông số gốc, servo có phản hồi nhưng bị dao động mạnh. | Servo không phản hồi theo góc nghiêng hoặc quay sai hướng. |
| **Telemetry (Python)** | Chạy thành công Python script, đồ thị đẹp, biết chỉnh lại PORT đúng. | Chạy được script nhưng thỉnh thoảng bị lỗi đọc serial rác. | Không kết nối được Python với Arduino. |
| **Báo cáo và An toàn (Report & Safety)** | Code xử lý Abort hoạt động tốt, thiết kế cơ khí gọn gàng. Giải thích các câu hỏi sắc sảo. | Code Abort chạy được nhưng logic chưa tối ưu. Trả lời được 3/5 câu hỏi. | Không làm bài tập Abort state. |

---
*Tài liệu nội bộ khoá học Rocket Engine & Model Rocketry. Vui lòng không phân phối khi chưa có sự cho phép.*
*Internal course material for Rocket Engine & Model Rocketry. Please do not distribute without permission.*

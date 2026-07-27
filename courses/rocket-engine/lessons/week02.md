# Tuần 2: Nhiên Liệu & Hóa Học Đẩy / Week 2: Propellants & Combustion Chemistry

Chào mừng các bạn đến với Tuần 2 của khóa học Chế tạo Động cơ Tên lửa Tự làm (DIY Rocket Engine). Trong tuần này, chúng ta sẽ đi sâu vào "trái tim" của tên lửa: nhiên liệu và hóa học đốt cháy.
Welcome to Week 2 of the DIY Rocket Engine course. This week, we will dive deep into the "heart" of the rocket: propellants and combustion chemistry.

---

## Mục Tiêu / Learning Objectives

**Tiếng Việt:**
1. Phân biệt được các loại nhiên liệu tên lửa: Rắn, Lỏng và Lai, cùng với ưu nhược điểm của từng loại.
2. Hiểu cấu tạo và phản ứng hóa học của nhiên liệu rắn APCP (Ammonium Perchlorate Composite Propellant).
3. Nắm bắt cách phân loại, đặt tên và thông số kỹ thuật của động cơ tên lửa mô hình Estes (Estes model rocket motors).
4. Áp dụng phương trình tốc độ cháy (Vieille's law) và các công thức vật lý để tính toán lực đẩy (Thrust), xung lực tổng (Total Impulse), và xung lực riêng (Specific Impulse - Isp).
5. Phân tích đường cong lực đẩy (Thrust curve) dựa trên dữ liệu thực tế.
6. Củng cố quy tắc an toàn tuyệt đối khi làm việc với động cơ tên lửa.

**English:**
1. Distinguish between different types of rocket propellants: Solid, Liquid, and Hybrid, along with their pros and cons.
2. Understand the composition and chemical reactions of APCP (Ammonium Perchlorate Composite Propellant).
3. Master the classification, naming conventions, and technical specifications of Estes model rocket motors.
4. Apply burn rate equations (Vieille's law) and physical formulas to calculate Thrust, Total Impulse, and Specific Impulse (Isp).
5. Analyze thrust curves based on real-world data.
6. Reinforce absolute safety protocols when working with rocket motors.

---

## Vật Liệu & Dụng Cụ / Materials & Tools

Bảng dưới đây liệt kê các dụng cụ và vật liệu cần thiết cho bài thực hành tuần này.
The table below lists the necessary tools and materials for this week's practical session.

| STT (No.) | Tên Vật Liệu / Item (VI / EN) | Số Lượng / Qty | Đơn Giá (VND) / Price | Ghi Chú / Notes |
| :---: | :--- | :---: | :--- | :--- |
| 1 | Động cơ Estes C6-5 / Estes C6-5 Motor | 3 | ~150,000 | Động cơ tiêu chuẩn cho thí nghiệm (Standard motor for lab). |
| 2 | Động cơ Estes B4-4 / Estes B4-4 Motor | 3 | ~120,000 | Dùng để so sánh / Used for comparison. |
| 3 | Động cơ Estes A8-3 / Estes A8-3 Motor | 3 | ~100,000 | Dùng để so sánh / Used for comparison. |
| 4 | Cân tiểu ly điện tử / Digital Scale (0.01g) | 1 | ~250,000 | Đo khối lượng động cơ / Measure motor mass. |
| 5 | Thước kẹp điện tử / Digital Caliper | 1 | ~300,000 | Đo kích thước động cơ / Measure motor dimensions. |
| 6 | Kính bảo hộ / Safety Goggles | 1/student | ~50,000 | **BẮT BUỘC / MANDATORY** |
| 7 | Máy tính xách tay (cài sẵn Python) / Laptop | 1/group | - | Để phân tích dữ liệu / For data analysis. |

---

## Lý Thuyết / Theory

Trong ngành hàng không vũ trụ, "Propellant" là thuật ngữ chỉ cả nhiên liệu (Fuel) và chất oxy hóa (Oxidizer). Tên lửa cần mang theo cả hai vì ngoài vũ trụ không có oxy để duy trì sự cháy.
In aerospace, "Propellant" refers to both fuel and oxidizer. Rockets must carry both because there is no oxygen in space to sustain combustion.

### 1. Phân Loại Nhiên Liệu / Types of Propellants

#### 1.1 Nhiên Liệu Rắn / Solid Propellants
Nhiên liệu rắn được đúc thành một khối trụ rắn chắc (gọi là grain). Chất đốt và chất oxy hóa được trộn lẫn với nhau.
Solid propellants are cast into a solid cylindrical block (called a grain). Fuel and oxidizer are mixed together.

**Các loại phổ biến (Common types):**
- **APCP (Ammonium Perchlorate Composite Propellant):** Đây là loại nhiên liệu tiêu chuẩn cho tàu con thoi (Space Shuttle Solid Rocket Boosters) và các tên lửa nghiệp dư công suất lớn (High Power Rocketry).
- **Thuốc súng đen (Black Powder):** Sử dụng trong các động cơ Estes cỡ nhỏ. Dễ sản xuất nhưng hiệu suất thấp. Thành phần: 75% KNO3, 15% Carbon, 10% Sulfur.
- **HTPB (Hydroxyl-terminated polybutadiene):** Một loại polymer tổng hợp thường dùng làm chất kết dính (binder) và nhiên liệu trong APCP hoặc tên lửa lai.

**Ưu điểm (Pros):** Đơn giản, độ tin cậy cao, có thể lưu trữ lâu dài. (Simple, highly reliable, storable for a long time).
**Nhược điểm (Cons):** Khi đã châm ngòi, không thể tắt hay điều chỉnh lực đẩy. (Once ignited, cannot be throttled or shut down).

#### 1.2 Nhiên Liệu Lỏng / Liquid Propellants
Hai chất (fuel và oxidizer) được chứa trong hai bồn chứa riêng biệt và được bơm vào buồng đốt.
The two components (fuel and oxidizer) are stored in separate tanks and pumped into the combustion chamber.

**Các hệ phổ biến (Common combinations):**
- **LOX/LH2 (Liquid Oxygen / Liquid Hydrogen):** Hiệu suất cao nhất (Isp ~ 450s). Dùng cho động cơ RS-25 của Space Shuttle. Rất lạnh (Cryogenic) và khó lưu trữ.
- **LOX/RP-1 (Liquid Oxygen / Rocket Propellant-1):** RP-1 là một dạng dầu hỏa tinh chế. Isp ~ 358s. Dùng cho Falcon 9 của SpaceX, Saturn V.
- **N2O4/UDMH (Nitrogen Tetroxide / Unsymmetrical Dimethylhydrazine):** Có thể lưu trữ ở nhiệt độ phòng (Storable), Hypergolic (tự bốc cháy khi tiếp xúc). Độc hại, thường dùng trong vệ tinh và tên lửa đạn đạo.

**Ưu điểm (Pros):** Có thể điều chỉnh lực đẩy, tắt và khởi động lại, hiệu suất rất cao. (Throttlable, restartable, very high performance).
**Nhược điểm (Cons):** Cực kỳ phức tạp, hệ thống bơm tuabin đắt đỏ, dễ rò rỉ. (Extremely complex, expensive turbopumps, prone to leaks).

#### 1.3 Nhiên Liệu Lai / Hybrid Propellants
Kết hợp một pha rắn (thường là fuel) và một pha lỏng hoặc khí (thường là oxidizer).
Combines a solid phase (usually fuel) and a liquid or gaseous phase (usually oxidizer).

**Ví dụ (Example):**
- **N2O (Nitrous Oxide) lỏng + HTPB rắn:** HTPB đóng vai trò là ống nhiên liệu, N2O được phun qua lõi. Isp ~ 240s. Được dùng trong tàu SpaceShipTwo của Virgin Galactic.

**Ưu điểm (Pros):** Rất an toàn, có thể tắt và khởi động lại, không có nguy cơ nổ (không trộn sẵn). Thích hợp nhất cho dự án sinh viên (Safest, throttlable/restartable, no explosion risk. Best for student projects).

### 2. Hóa Học Đốt Cháy APCP / Combustion Chemistry of APCP

APCP là một hỗn hợp composite tuyệt vời. Chúng ta hãy xem thành phần cơ bản của nó:
APCP is an excellent composite mixture. Let's look at its basic composition:

- **Chất oxy hóa (Oxidizer):** Ammonium Perchlorate (NH4ClO4) - chiếm khoảng 68% đến 72%.
- **Nhiên liệu kim loại (Metal Fuel):** Bột nhôm (Aluminum powder) - chiếm khoảng 15% đến 20%. Giúp tăng nhiệt độ phản ứng và lực đẩy.
- **Chất kết dính & Nhiên liệu (Binder/Fuel):** HTPB (Hydroxyl-terminated polybutadiene) - chiếm khoảng 10% đến 15%. Cùng với chất đóng rắn (curative) giúp hỗn hợp đông đặc thành khối cao su cứng.
- **Phụ gia (Additives):** Chất xúc tác tốc độ cháy (ví dụ: Iron oxide - Fe2O3), chất làm dẻo (Plasticizers).

**Phương trình phản ứng tổng quát (General Combustion Reaction):**
Khi nhôm cháy với Ammonium Perchlorate, một phản ứng tỏa nhiệt cực mạnh xảy ra:
When aluminum burns with Ammonium Perchlorate, a highly exothermic reaction occurs:

$$ 3 NH_4ClO_4 + 3 Al \rightarrow Al_2O_3 + 3 AlCl_3 + 6 H_2O + 1.5 N_2 + Nhiệt (Energy) $$
*(Lưu ý: Thực tế phản ứng phức tạp hơn do có sự tham gia của HTPB)*

**Đặc điểm của buồng đốt APCP (Combustion Chamber Characteristics):**
- **Nhiệt độ (Temperature):** Khoảng 3000°C (3273 K). Tại nhiệt độ này, thép sẽ tan chảy, do đó cần vật liệu cách nhiệt (phenolic liner) hoặc thiết kế làm mát bốc cháy (ablative cooling).
- **Áp suất (Pressure):** Từ 7 MPa đến 14 MPa (1000 - 2000 psi). Đòi hỏi vỏ động cơ phải bằng nhôm chịu lực hoặc sợi carbon.

### 3. Phân Loại & Đọc Thông Số Động Cơ Estes / Estes Model Rocket Motors

Trong môn học này, chúng ta sẽ **KHÔNG TỰ TRỘN NHIÊN LIỆU** vì lý do an toàn tuyệt đối. Thay vào đó, chúng ta phân tích các động cơ thương mại được chứng nhận như Estes.
In this course, we will **NOT MIX OUR OWN PROPELLANT** for strict safety reasons. Instead, we analyze certified commercial motors like Estes.

#### Cấu Trúc Mã Tên (Naming Convention)
Một động cơ Estes có tên dạng: **C6-5**
An Estes motor has a name like: **C6-5**

- **Chữ cái đầu (C):** Tổng xung lực (Total Impulse Class). Mỗi chữ cái tiếp theo đại diện cho năng lượng gấp đôi chữ cái trước đó.
  - A = 1.26 - 2.50 Ns (Newton-seconds)
  - B = 2.51 - 5.00 Ns
  - C = 5.01 - 10.00 Ns
  - D = 10.01 - 20.00 Ns
- **Số đầu tiên (6):** Lực đẩy trung bình (Average Thrust) tính bằng Newton (N). Nghĩa là động cơ này tạo ra lực đẩy trung bình 6N trong suốt thời gian cháy.
- **Số thứ hai (5):** Thời gian trễ (Delay Time) tính bằng giây. Đây là khoảng thời gian từ khi nhiên liệu chính cháy hết (Burnout) đến khi kích hoạt thuốc nổ đẩy dù (Ejection Charge). Số "5" nghĩa là tên lửa sẽ bay tự do theo đà trong 5 giây trước khi bung dù.

#### Bảng Phân Loại NAR (NAR Classification Table)

| Class | Total Impulse (N·s) | Maximum Total Impulse | Common Usage |
| :---: | :--- | :--- | :--- |
| Micro | 0 - 0.3125 | 1/8 A | Micro model rocketry |
| 1/4 A | 0.3126 - 0.625 | 1/4 A | Very small, lightweight |
| 1/2 A | 0.626 - 1.25 | 1/2 A | Small models |
| A | 1.26 - 2.50 | 2.50 | Standard beginner |
| B | 2.51 - 5.00 | 5.00 | Standard mid-level |
| C | 5.01 - 10.00 | 10.00 | Large consumer models |
| D | 10.01 - 20.00 | 20.00 | High end consumer |
| E | 20.01 - 40.00 | 40.00 | Mid-Power rocketry |
| F | 40.01 - 80.00 | 80.00 | Mid-Power rocketry |
| G | 80.01 - 160.00 | 160.00 | Mid-Power rocketry |
| H, I | 160.01 - 640.00 | 640.00 | High-Power L1 |
| J, K, L| 640.01 - 5120 | 5120 | High-Power L2 |
| M, N, O| > 5120 | 40,960 | High-Power L3 (Insane) |

#### Đường Cong Lực Đẩy (Thrust Curve)
Đường cong lực đẩy là đồ thị biểu diễn Lực Đẩy (Thrust) theo Thời Gian (Time).
Thrust curve is a graph showing Thrust vs Time.

```ascii
Thrust (N)
  ^
14|   /\\
  |  /  \\
10| /    \\___________
  |/                 \\
 6|                   \\
  |                    \\
 2|                     \\
  |                      \\
  +-------------------------------------> Time (s)
    0.1  0.5         1.5   1.7
```
- **Peak Thrust:** Điểm cao nhất của đồ thị. Động cơ Estes thường có vệt cháy khởi đầu rất mạnh để nhấc tên lửa rời bệ phóng, sau đó giảm xuống mức ổn định.
- **Burnout Time:** Điểm đường cong rơi về 0.

### 4. Phương Trình Tốc Độ Cháy & Xung Lực Riêng (Burn Rate & Isp)

#### 4.1 Phương trình Vieille (Vieille's Law for Burn Rate)
Tốc độ lùi của bề mặt nhiên liệu (Burn rate) phụ thuộc vào áp suất buồng đốt:
The regression rate of the propellant surface depends on chamber pressure:

$$ r = a \cdot P^n $$

- **r:** Tốc độ cháy (Burn rate - m/s hoặc mm/s)
- **a:** Hệ số thực nghiệm phụ thuộc vào nhiệt độ môi trường.
- **P:** Áp suất buồng đốt (Chamber pressure - Pa)
- **n:** Số mũ áp suất (Pressure exponent). Đối với APCP, n thường nằm trong khoảng 0.3 đến 0.6.
  *Cảnh báo (Warning): Nếu n > 1, sự gia tăng áp suất nhỏ sẽ làm tốc độ cháy tăng theo hàm mũ, dẫn đến nổ CATO (Catastrophe at take off).*

#### 4.2 Xung Lực Riêng (Specific Impulse - Isp)
Isp là "hiệu suất nhiên liệu" của tên lửa, giống như số km/lít của ô tô. Nó chỉ ra số giây mà 1kg nhiên liệu có thể tạo ra 1kg lực đẩy (9.81N).
Isp is the "fuel efficiency" of a rocket, like miles per gallon for a car. It indicates how many seconds 1kg of propellant can produce 1kg of thrust.

$$ I_{sp} = \frac{I_{total}}{m_{prop} \cdot g_0} $$
Trong đó:
- **I_total:** Tổng xung lực (Ns)
- **m_prop:** Khối lượng nhiên liệu (kg)
- **g_0:** Gia tốc trọng trường (9.81 m/s²)

Hoặc có thể tính thông qua Vận tốc phụt khí hiệu dụng (Effective exhaust velocity - c):
$$ I_{sp} = \frac{c}{g_0} $$

Một cách chia nhỏ c là thông qua Vận tốc đặc trưng (Characteristic velocity - c*) và Hệ số lực đẩy (Thrust Coefficient - C_F):
$$ c = C_F \cdot c^* $$
$$ I_{sp} = \frac{C_F \cdot c^*}{g_0} $$
- **c*:** Phụ thuộc hoàn toàn vào hóa học nhiên liệu (Nhiệt độ cháy, trọng lượng phân tử khí xả).
- **C_F:** Phụ thuộc vào hình dáng thiết kế của vòi phun De Laval (De Laval nozzle expansion ratio).

---

## Tính Toán Thực Hành / Practice Calculations

**Bài Toán Ví Dụ (Worked Example):**
Một động cơ rắn có thông số sau:
- Tổng khối lượng trước khi cháy: 24.0g
- Tổng khối lượng sau khi cháy hết (vỏ động cơ trống): 11.5g
- Lực đẩy trung bình đo được là 6 N trong khoảng thời gian cháy 1.6 giây.

**Yêu cầu:** Tính Tổng xung lực (Total Impulse) và Xung lực riêng (Isp).

**Giải (Solution):**

1. Khối lượng nhiên liệu (m_prop):
   $$ m_{prop} = m_{initial} - m_{final} = 24.0 - 11.5 = 12.5g = 0.0125 kg $$

2. Tổng xung lực (Total Impulse - I_total):
   $$ I_{total} = F_{avg} \times t_{burn} = 6 \text{ N} \times 1.6 \text{ s} = 9.6 \text{ Ns} $$
   *(Động cơ này rơi vào class C (5.01 - 10.00 Ns). Dựa vào Thrust = 6N, thời gian trễ không biết, ta có thể đoán đây là họ động cơ C6).*

3. Xung lực riêng (Isp):
   $$ I_{sp} = \frac{I_{total}}{m_{prop} \cdot g_0} = \frac{9.6}{0.0125 \cdot 9.81} \approx \frac{9.6}{0.1226} \approx 78.3 \text{ giây (seconds)} $$
   *(Thuốc súng đen trong động cơ Estes thường có Isp vào khoảng 80s. Tên lửa hiện đại dùng nhiên liệu lỏng có Isp > 300s).*

---

## Thí Nghiệm / Lab Activities

**Mục Đích (Purpose):**
Sử dụng dữ liệu tải trọng (load cell data) được cung cấp, phân tích đường cong lực đẩy của 3 động cơ Estes khác nhau: A8-3, B4-4, và C6-5.
Using provided load cell data, analyze the thrust curves of 3 different Estes motors.

**Các bước tiến hành (Step-by-step procedure):**

1. **Chuẩn bị dữ liệu:** Tải file `thrust_data.zip` chứa 3 file CSV: `A8.csv`, `B4.csv`, `C6.csv`. Mỗi file gồm 2 cột: Time (s) và Thrust (N).
2. **Kiểm tra ngoại quan:** Trước khi chạy code, dùng thước kẹp và cân điện tử đo các thông số của động cơ thật. Ghi chép vào sổ tay: Khối lượng tổng, đường kính, chiều dài.
3. **Phân tích với Python:** Chạy đoạn mã Python (cung cấp bên dưới) để đọc file CSV.
4. **Vẽ đồ thị:** Python script sẽ vẽ đường cong lực đẩy (Time vs Thrust graph).
5. **Tính toán tích phân:** Python script dùng hàm `np.trapz` để tính diện tích dưới đường cong (Tích phân lực theo thời gian) - chính là Tổng xung lực (Total Impulse).
6. **So sánh kết quả:** So sánh tổng xung lực và lực đẩy trung bình tính được bằng phần mềm so với tên danh định trên vỏ động cơ (ví dụ C6-5 thì I_total ~10Ns, Avg Thrust ~6N).

---

## Code / Formulas

Đoạn mã Python dưới đây sử dụng thư viện `matplotlib` và `numpy` để phân tích file CSV chứa dữ liệu đường cong lực đẩy.
The following Python code uses `matplotlib` and `numpy` to analyze CSV files containing thrust curve data.

```python
import numpy as np
import matplotlib.pyplot as plt

def plot_thrust_curve(time_data, thrust_data, motor_name):
    """
    Hàm phân tích và vẽ đường cong lực đẩy của động cơ tên lửa.
    Analyzes and plots the thrust curve of a rocket motor.
    """
    # 1. Tính tổng xung lực (Total Impulse) bằng phương pháp hình thang (Trapezoidal integration)
    total_impulse = np.trapz(thrust_data, time_data)
    
    # 2. Tính lực đẩy trung bình (Average Thrust)
    # Lấy tổng thời gian là time_data cuối cùng (giả sử bắt đầu từ t=0)
    total_time = time_data[-1]
    avg_thrust = total_impulse / total_time
    
    # 3. Tạo khung hình (Figure) gồm 2 biểu đồ
    fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(12, 5))
    
    # --- Đồ thị bên trái: Đường cong lực đẩy (Thrust Curve) ---
    ax1.fill_between(time_data, thrust_data, alpha=0.3, color='red')
    ax1.plot(time_data, thrust_data, 'r-', linewidth=2)
    ax1.set_xlabel('Thời gian / Time (s)')
    ax1.set_ylabel('Lực đẩy / Thrust (N)')
    ax1.set_title(f'Đường cong lực đẩy: {motor_name}')
    
    # Vẽ đường trung bình
    ax1.axhline(avg_thrust, color='blue', linestyle='--', label=f'Trung bình (Avg): {avg_thrust:.1f}N')
    ax1.legend()
    
    # --- Đồ thị bên phải: Thông số tóm tắt (Summary Statistics) ---
    metrics = ['Total Impulse (Ns)', 'Peak Thrust (N)', 'Avg Thrust (N)']
    values = [total_impulse, max(thrust_data), avg_thrust]
    colors = ['red', 'orange', 'blue']
    
    ax2.bar(metrics, values, color=colors)
    ax2.set_title('Thông số động cơ / Motor Statistics')
    
    # Thêm số liệu lên đỉnh các cột
    for i, v in enumerate(values):
        ax2.text(i, v + 0.5, f"{v:.2f}", ha='center', va='bottom', fontweight='bold')
    
    plt.tight_layout()
    plt.savefig(f'{motor_name}_thrust_curve.png', dpi=150)
    plt.show()
    
    return total_impulse, avg_thrust

# Ví dụ cách sử dụng (Example usage)
if __name__ == "__main__":
    # Dữ liệu giả lập cho C6 (Simulated data for C6 motor)
    t = np.linspace(0, 1.8, 100)
    # Hàm giả lập hình dáng đường cong lực đẩy của Estes
    f = 14 * np.exp(-10 * t) + 6 * np.sin(np.pi * t / 1.8) 
    # Loại bỏ giá trị âm (Remove negative values)
    f = np.clip(f, 0, None)
    f[-1] = 0 # Đảm bảo về 0 ở cuối
    
    print("Đang phân tích động cơ C6... / Analyzing C6 motor...")
    impulse, avg_th = plot_thrust_curve(t, f, "Estes_C6")
    print(f"Tổng xung lực (Total Impulse): {impulse:.2f} Ns")
    print(f"Lực đẩy TB (Avg Thrust): {avg_th:.2f} N")

```

---

## ⚠️ An Toàn / Safety Notes

**CHÚ Ý ĐẶC BIỆT / CRITICAL ATTENTION:**

1. **KHÔNG BAO GIỜ TỰ TRỘN NHIÊN LIỆU (NEVER MAKE PROPELLANT FROM SCRATCH).** Việc tự trộn hóa chất rất dễ gây nổ tĩnh điện, ma sát hoặc phản ứng không kiểm soát dẫn đến thương tích vĩnh viễn (mất ngón tay, mù mắt). Trong khóa học này, chúng ta CHỈ SỬ DỤNG động cơ nguyên bản được sản xuất thương mại và chứng nhận (certified Estes motors).
2. **Tuân thủ Mã An Toàn (Model Rocketry Safety Code).** Của Hiệp hội Tên lửa Quốc gia (NAR):
   - Động cơ phải được kích nổ bằng điện từ khoảng cách an toàn tối thiểu 5 mét.
   - Không được thay đổi kết cấu vỏ động cơ (không tháo, cạy, khoan).
   - Bảo quản động cơ ở nơi khô ráo, tránh xa nguồn nhiệt và tia lửa.
3. **Khi thực hiện đo lường:** Không bao giờ nhìn thẳng vào họng xả của động cơ (nozzle). Luôn mang kính bảo hộ trong suốt khu vực thực hành.

---

## Câu Hỏi Thảo Luận / Discussion Questions

1. **Tiếng Việt:** Tại sao APCP (nhiên liệu rắn) lại được ưa chuộng trên các tên lửa đẩy tăng cường (boosters) của tàu vũ trụ trong khi nhiên liệu lỏng lại được dùng cho tầng chính (main stage)?
   **English:** Why is APCP (solid propellant) preferred for space shuttle boosters, while liquid propellant is used for the main stage?

2. **Tiếng Việt:** Giải thích hiện tượng CATO (Catastrophe at take off) dưới góc độ của Phương trình tốc độ cháy (Vieille's Law). Vai trò của số mũ áp suất 'n' là gì?
   **English:** Explain CATO from the perspective of Vieille's Law. What is the role of the pressure exponent 'n'?

3. **Tiếng Việt:** Dựa vào bảng phân loại NAR, một động cơ E có thể mang lại tổng xung lực tối đa gấp bao nhiêu lần một động cơ A?
   **English:** Based on the NAR classification table, how many times greater is the maximum total impulse of an E motor compared to an A motor?

4. **Tiếng Việt:** Một động cơ Estes có mã hiệu là "D12-3". Hãy giải mã các thông số kỹ thuật ẩn chứa trong cái tên này. Tên lửa sử dụng động cơ này phù hợp cho giai đoạn phóng nào?
   **English:** An Estes motor is designated "D12-3". Decode the technical specifications hidden in this name. What launch phase is a rocket using this motor suited for?

5. **Tiếng Việt:** Isp (Specific Impulse) của nhiên liệu lỏng cao hơn nhiên liệu rắn rất nhiều. Tại sao trong các nhiệm vụ tên lửa nghiệp dư và quân sự, người ta vẫn ưu tiên nhiên liệu rắn?
   **English:** The Isp of liquid propellants is much higher than that of solid propellants. Why is solid propellant still preferred in amateur and military rocket missions?

---

## Bài Về Nhà / Homework

**Nhiệm Vụ (Task): Phân Tích Động Cơ Tùy Chọn (Custom Motor Analysis)**

1. Lên website của Estes Rockets hoặc ThrustCurve.org.
2. Tải file dữ liệu `.csv` hoặc `.eng` của hai động cơ sau: **F15** và **E12**.
3. Sửa đổi đoạn mã Python đã học trên lớp để load 2 file này.
4. Vẽ đồ thị so sánh hai đường cong lực đẩy lên cùng một biểu đồ (trục x là thời gian, trục y là lực đẩy, vẽ 2 màu khác nhau).
5. Viết một báo cáo ngắn (khoảng 300 từ) giải thích:
   - Động cơ nào cháy lâu hơn?
   - Động cơ nào có Peak Thrust cao hơn?
   - Tính toán lượng nhiên liệu tối thiểu cần thiết cho mỗi động cơ nếu giả sử Isp của thuốc súng trong 2 loại này là 80s.
6. Nộp bài báo cáo qua hệ thống dưới dạng file PDF, kèm mã nguồn Python (.py).

---

## Đánh Giá / Assessment Rubric

Sử dụng bảng Rubric này để sinh viên tự đánh giá hoặc giáo viên chấm điểm cho bài tập về nhà.
Use this Rubric for student self-assessment or teacher grading of the homework.

| Tiêu Chí / Criteria | Xuất Sắc / Excellent (9-10) | Khá / Good (7-8) | Đạt / Pass (5-6) | Cần Cố Gắng / Needs Work (<5) |
| :--- | :--- | :--- | :--- | :--- |
| **1. Code Python & Đồ thị (Code & Graph)** | Code chạy không lỗi. Đồ thị có nhãn trục rõ ràng, chú thích (legend) đầy đủ, màu sắc dễ nhìn, format đẹp. | Code chạy được. Đồ thị đúng nhưng thiếu vài nhãn hoặc chú thích. | Code chạy được nhưng biểu đồ vẽ sai tỷ lệ hoặc thiếu hụt thông tin quan trọng. | Code có lỗi cú pháp, không vẽ được đồ thị. |
| **2. Tính Toán (Calculations)** | Tính toán Isp và khối lượng nhiên liệu chính xác. Có ghi rõ các bước biến đổi công thức và đơn vị chuẩn (SI). | Tính đúng đáp án nhưng không ghi chú rõ công thức hoặc thiếu đơn vị đo ở kết quả cuối. | Áp dụng đúng công thức nhưng sai số trong lúc bấm máy, đơn vị hỗn loạn. | Không làm bài tính toán hoặc sai hoàn toàn về mặt vật lý. |
| **3. Phân tích & Báo cáo (Analysis & Report)** | Báo cáo mạch lạc, phân tích sâu về hình dạng đường cong lực đẩy. Đưa ra được kết luận động cơ nào phù hợp cho loại tên lửa nào (nặng/nhẹ). | Trả lời đầy đủ các câu hỏi nhưng thiếu chiều sâu, chỉ nêu sự khác biệt một cách chung chung. | Có báo cáo nhưng văn phong lủng củng, không rõ ràng và không trả lời đủ 3 ý hỏi. | Copy/Paste nội dung, không hiểu rõ bản chất vật lý của đường cong lực đẩy. |
| **4. An Toàn (Safety Context)** | Trong báo cáo thể hiện rõ tư duy an toàn (nhắc đến việc không tự thay đổi kết cấu động cơ E và F). | - | - | Thể hiện tư tưởng muốn tự chế tạo các động cơ lớn này tại nhà mà không có sự giám sát. (Điểm 0 phần này). |

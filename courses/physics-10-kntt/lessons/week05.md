# Tuần 5: Các Lực Cơ Học và Phương Pháp Động Lực Học (Week 5: Mechanical Forces and Dynamics Methodology)

## 1. Mục tiêu bài học (Learning Objectives)

### 1.1 Về kiến thức (Knowledge)
- Hiểu và phân tích được các lực cơ học cơ bản: Trọng lực (Gravitational force), Lực căng (Tension), Lực ma sát (Friction), Lực cản của lưu chất và Lực nâng (Drag and Lift forces).
- Nắm vững phương pháp 4 bước để giải các bài toán động lực học.
- (English) Understand and analyze basic mechanical forces: Gravitational force, Tension, Friction, Drag and Lift forces.
- (English) Master the 4-step method for solving dynamics problems.
- Nêu được định nghĩa, đặc điểm, công thức tính và điểm đặt của các loại lực trên.
- (English) State the definition, characteristics, formula, and point of application for the aforementioned forces.

### 1.2 Về kỹ năng (Skills)
- Vẽ được giản đồ vector lực (Free Body Diagram - FBD) chính xác cho các vật thể trong nhiều tình huống khác nhau (mặt ngang, mặt nghiêng, dây treo).
- Thực hành đo lường hệ số ma sát trượt bằng thực nghiệm mặt phẳng nghiêng.
- Viết code Python mô phỏng chuyển động của vật rơi có lực cản.
- Phân tích đồ thị sự phụ thuộc của vận tốc vào thời gian để tìm vận tốc cuối.
- (English) Draw accurate Free Body Diagrams (FBD) for objects in various situations (horizontal plane, inclined plane, suspended by string).
- (English) Practically measure the coefficient of kinetic friction using an inclined plane experiment.
- (English) Write Python code to simulate the motion of a falling object with air resistance.
- (English) Analyze velocity-time graphs to determine terminal velocity.

### 1.3 Thái độ (Attitude)
- Đảm bảo an toàn trong phòng thí nghiệm. Tuân thủ tuyệt đối nội quy phòng thực hành.
- Có ý thức ứng dụng Vật lí vào việc giải thích các hiện tượng thực tế (như thiết kế dù, xe khí động học, sự an toàn giao thông khi trời mưa).
- (English) Ensure safety in the laboratory. Strictly adhere to lab rules.
- (English) Be aware of applying Physics to explain real-world phenomena (like parachute design, aerodynamic cars, traffic safety in the rain).

---

## 2. Liên kết Sách giáo khoa (Related Textbook Lessons)
Chương trình "Vật Lí 10 - Kết Nối Tri Thức Với Cuộc Sống":
* Bài 17: Trọng lực và Lực căng (Gravitational force and Tension)
* Bài 18: Lực ma sát (Friction)
* Bài 19: Lực cản và Lực nâng (Drag and Lift)
* Bài 20: Một số bài toán Động lực học (Dynamics Problems)

---

## 3. Thiết bị & Dụng cụ thí nghiệm (Lab Equipment & Tools)

| Dụng cụ (Equipment) | Mô tả (Description) | Số lượng (Qty) | Giá dự kiến (Est. Price VND) | Nơi mua (Availability) |
| :--- | :--- | :--- | :--- | :--- |
| Mặt phẳng nghiêng (Inclined plane) | Mặt phẳng có thể điều chỉnh góc (Adjustable angle board) bằng gỗ hoặc nhựa mica. | 1 bộ/nhóm | 250,000 | Cửa hàng thiết bị GD (Edu stores) |
| Lực kế lò xo (Spring scale) | Lực kế ống, dải đo 5N, 10N, độ chia nhỏ nhất 0.1N. | 2 cái/nhóm | 50,000 | Shopee, Tiki, Nhà sách |
| Khối gỗ (Wooden block) | Khối gỗ có móc để móc lực kế, có các mặt tiếp xúc khác nhau. | 1 cái/nhóm | 20,000 | Cửa hàng thiết bị GD |
| Thước đo góc (Protractor) | Thước bán nguyệt đo góc nghiêng chính xác đến 1 độ. | 1 cái/nhóm | 15,000 | Nhà sách (Bookstores) |
| Quả nặng (Weights) | Bộ quả nặng có rãnh 50g bằng đồng thau. | 1 bộ/nhóm | 100,000 | Cửa hàng thiết bị GD |
| Đồng hồ bấm giây (Stopwatch) | Đo thời gian điện tử, chính xác 0.01s. | 1 cái/nhóm | 80,000 | Cửa hàng thể thao / Điện thoại |
| Dây chỉ (String) | Dây chỉ dai, không dãn, nhẹ. | 1 cuộn | 5,000 | Tạp hóa (Grocery stores) |

---

## 4. Cơ sở Lý thuyết (Theoretical Background)

### 4.1 Trọng lực (Gravitational Force)
Trọng lực là lực hấp dẫn do Trái Đất (hoặc hành tinh) tác dụng lên vật. Nó luôn hướng thẳng đứng xuống dưới, hướng về tâm Trái Đất.
(Gravitational force is the attractive force exerted by the Earth on an object. It always points vertically downwards towards the Earth's center).

Công thức (Formula):
$$ \vec{P} = m \vec{g} $$

Trong đó (Where):
- $\vec{P}$: Trọng lực (Gravitational force) [N]
- $m$: Khối lượng vật (Mass of the object) [kg]
- $\vec{g}$: Gia tốc rơi tự do (Free-fall acceleration), ở bề mặt Trái Đất thường lấy $g \approx 9.8 \text{ m/s}^2$ hoặc $10 \text{ m/s}^2$.

Đặc điểm của vector Trọng lực:
- Điểm đặt (Point of application): Tại trọng tâm (Center of gravity) của vật.
- Phương (Line of action): Thẳng đứng (Vertical).
- Chiều (Direction): Từ trên xuống dưới (Downward).

### 4.2 Lực căng dây (Tension Force)
Lực căng dây xuất hiện khi một sợi dây bị kéo căng. Nó luôn có xu hướng co sợi dây lại để chống lại lực kéo.
(Tension appears when a string is stretched. It always acts along the string and points away from the object being pulled.)

Đặc điểm của vector Lực căng $\vec{T}$:
- Điểm đặt: Tại điểm nối giữa dây và vật.
- Phương: Trùng với phương của sợi dây.
- Chiều: Hướng từ vật về phía sợi dây (hướng ra xa vật).
- Độ lớn: Phụ thuộc vào tải trọng hệ thống, không có công thức cố định, tính toán dựa vào định luật Newton. (Đối với dây lý tưởng: không khối lượng, không dãn, lực căng tại mọi điểm trên dây là như nhau).

### 4.3 Lực Ma Sát (Friction)
Lực ma sát xuất hiện tại mặt tiếp xúc giữa hai vật, cản trở chuyển động tương đối (hoặc xu hướng chuyển động) của chúng.
(Friction appears at the contact surface between two objects, resisting their relative motion or tendency of motion.)

**Ma sát nghỉ (Static Friction):**
Xuất hiện khi vật có xu hướng trượt nhưng chưa trượt. Lực ma sát nghỉ tự động thay đổi độ lớn bằng với thành phần ngoại lực song song với mặt tiếp xúc để giữ vật đứng yên.
(Appears when the object tends to slide but hasn't slid yet. It self-adjusts to balance the applied parallel force).
$$ F_{msn} \le \mu_s N $$
- Lực ma sát nghỉ cực đại $F_{msn(max)} = \mu_s N$.

**Ma sát trượt (Kinetic Friction):**
Xuất hiện khi vật đang trượt trên bề mặt vật khác.
$$ F_{mst} = \mu_k N $$

Trong đó:
- $N$: Áp lực vuông góc (Normal force)
- $\mu_s$: Hệ số ma sát nghỉ (Coefficient of static friction)
- $\mu_k$: Hệ số ma sát trượt (Coefficient of kinetic friction)
- Thông thường (Usually), $\mu_k < \mu_s$.

#### Giản đồ ASCII mặt phẳng nghiêng (ASCII Diagram for Inclined Plane)
Ví dụ vật đang trượt xuống dốc.

```text
       y
       ^
       |    N (Phản lực vuông góc)
       |   ^
       |  /
       | /
       |/
       +-----------> x (Hướng trượt)
      /| \
     / |  \  F_ms (Lực ma sát trượt hướng ngược lại)
    /  |   v
   /   v 
  /    P (Trọng lực - Luôn hướng thẳng đứng)
 / 
/ \ alpha
----------- (Mặt phẳng ngang)
```
*Ghi chú: $P$ được phân tích thành $P_x = mg \sin\alpha$ và $P_y = mg \cos\alpha$.*

### 4.4 Lực cản và Lực nâng (Drag and Lift Forces)
Khi vật chuyển động trong môi trường lưu chất (khí, lỏng), vật bị chất lưu tác dụng lực.

**Lực cản (Drag Force):** Luôn ngược chiều chuyển động tương đối của vật so với chất lưu.
Ở tốc độ thấp, lực cản tỉ lệ bậc nhất với vận tốc (Low speed, linear drag): 
$$ \vec{F}_c = -k \vec{v} $$
Ở tốc độ cao, lực cản tỉ lệ với bình phương vận tốc (High speed, quadratic drag):
$$ F_c = \frac{1}{2} C_d \rho A v^2 $$
(Trong đó $C_d$ là hệ số cản, $\rho$ là khối lượng riêng lưu chất, $A$ là diện tích cản diện).

**Vận tốc cuối (Terminal Velocity):**
Khi thả rơi một vật từ trên cao, ban đầu vận tốc $v$ nhỏ nên lực cản $F_c$ nhỏ, vật tăng tốc xuống dưới (gia tốc $a > 0$). Khi $v$ tăng, $F_c$ cũng tăng. Đến một lúc, lực cản $F_c$ lớn bằng trọng lượng $P$.
Lúc này tổng lực bằng không: $\sum F = P - F_c = 0 \implies a = 0$.
Vật tiếp tục rơi đều với một vận tốc không đổi, gọi là vận tốc cuối $v_t$.
(When falling, gravity balances drag, reaching a constant maximum velocity called terminal velocity.)
$$ mg = \frac{1}{2} C_d \rho A v_t^2 \implies v_t = \sqrt{\frac{2mg}{C_d \rho A}} $$

**Lực nâng (Lift Force):**
Có phương vuông góc với phương chuyển động của vật, sinh ra do sự chênh lệch áp suất khi luồng lưu chất chảy qua các mặt có hình dạng khí động học khác nhau (ví dụ: cánh máy bay).

---

## 5. Phương pháp 4 bước giải toán Động lực học (General 4-step method for solving dynamics problems)

Để giải quyết một bài toán động lực học một cách có hệ thống, chúng ta tuân theo 4 bước chuẩn sau (To solve a dynamics problem systematically, we follow these 4 standard steps):

**Bước 1 (Step 1): Chọn hệ quy chiếu (Choose a Reference Frame)**
- Chọn một hệ tọa độ $Oxy$ phù hợp. 
- *Mẹo:* Luôn chọn một trục (thường là $Ox$) cùng hướng chuyển động của vật (hướng của gia tốc $\vec{a}$) để vế phải của phương trình II Newton trở thành $ma$ dương, và trục $Oy$ vuông góc với trục $Ox$ thì gia tốc $a_y = 0$.
- (English: Choose a suitable $Oxy$ coordinate system. Tip: Align one axis with the direction of acceleration $\vec{a}$ to simplify RHS of Newton's equation to $ma$, and perpendicular axis will have zero acceleration).

**Bước 2 (Step 2): Phân tích lực và vẽ giản đồ (Force analysis and FBD)**
- Liệt kê TẤT CẢ các lực tác dụng lên vật đang khảo sát (Trọng lực, phản lực, sức căng, ma sát, lực kéo...).
- Biểu diễn các lực này bằng các vector gốc tại tâm hình học của vật (Giản đồ FBD).
- (English: Identify all forces acting on the object. Represent these forces as vectors originating from the object's center).

**Bước 3 (Step 3): Viết phương trình Định luật II Newton (Write Newton's Second Law Vector Equation)**
- Dạng tổng quát (Vector form): $\sum \vec{F} = m\vec{a}$
- Ví dụ: $\vec{P} + \vec{N} + \vec{F}_{ms} + \vec{F}_{keo} = m\vec{a}$
- (English: State the vector equation $\sum \vec{F} = m\vec{a}$)

**Bước 4 (Step 4): Chiếu phương trình và giải (Project equations onto coordinate axes and solve)**
- Chiếu phương trình vector lên các trục $Ox$ và $Oy$ đã chọn ở Bước 1.
  - Các vector cùng chiều trục tọa độ lấy dấu (+), ngược chiều lấy dấu (-), vuông góc lấy giá trị 0.
- Lập hệ phương trình đại số. Giải hệ để tìm các đại lượng yêu cầu chưa biết.
- (English: Project the vector equation onto $Ox$ and $Oy$ axes. Solve the algebraic system of equations).

### Ví dụ số (Numerical Example)
Một vật khối lượng $m = 2$ kg trượt xuống mặt phẳng nghiêng góc $\alpha = 30^\circ$. Hệ số ma sát trượt giữa vật và mặt phẳng là $\mu_k = 0.2$. Tính gia tốc của vật. (Lấy $g = 9.8$ m/s$^2$).
(An object of mass 2 kg slides down an inclined plane at an angle of 30 degrees. Kinetic friction coefficient is 0.2. Calculate its acceleration.)

**Giải (Solution):**
1. Chọn hệ tọa độ $Oxy$: $Ox$ dọc theo mặt phẳng nghiêng, hướng xuống dưới (cùng chiều trượt). $Oy$ vuông góc mặt phẳng nghiêng, hướng lên trên mặt phẳng.
2. Vẽ giản đồ lực: Có 3 lực tác dụng lên vật: Trọng lực $\vec{P}$ (hướng thẳng xuống), Phản lực $\vec{N}$ (hướng dọc theo Oy), lực ma sát trượt $\vec{F}_{ms}$ (hướng ngược trục Ox).
3. Phương trình định luật II: $\vec{P} + \vec{N} + \vec{F}_{ms} = m\vec{a}$
4. Chiếu phương trình:
   - Chiếu lên trục Oy: Trọng lực có thành phần $-P \cos\alpha$. Ma sát có thành phần 0. Ta được:
     $N - P \cos\alpha = 0 \implies N = mg \cos\alpha$
   - Chiếu lên trục Ox: Trọng lực có thành phần $+P \sin\alpha$. Ma sát có thành phần $-F_{ms}$. Ta được:
     $P \sin\alpha - F_{ms} = ma \implies mg \sin\alpha - \mu_k N = ma$
   Thế $N$ từ phương trình Oy vào phương trình Ox:
   $\implies ma = mg \sin\alpha - \mu_k (mg \cos\alpha)$
   Chia cả 2 vế cho $m$:
   $\implies a = g(\sin\alpha - \mu_k \cos\alpha)$
   Thay số: 
   $a = 9.8 \times (\sin 30^\circ - 0.2 \times \cos 30^\circ)$
   $a = 9.8 \times (0.5 - 0.1732) = 9.8 \times 0.3268 \approx 3.20$ m/s$^2$.

---

## 6. Thực hành: Đo hệ số ma sát trượt (Hands-on Experiment: Measuring coefficient of kinetic friction)

### 6.1 An toàn phòng thí nghiệm (Laboratory Safety Rules ⚠️)
- **CẨN THẬN** khi sử dụng các quả nặng bằng kim loại, tránh làm rơi vào tay chân gây thương tích. (BE CAREFUL with heavy metal weights, avoid dropping them on your feet.)
- **KHÔNG** đùa giỡn, chạy nhảy trong phòng thực hành vật lí. (DO NOT horseplay in the lab.)
- **BẢO QUẢN** lực kế cẩn thận, không kéo lò xo vượt quá giới hạn đo ghi trên lực kế sẽ làm hỏng tính đàn hồi. (HANDLE spring scales carefully, do not stretch beyond the measuring limit.)
- Dọn dẹp gọn gàng, đưa góc nghiêng về 0 trước khi rời đi.

### 6.2 Các bước thực hiện (Step-by-step Procedure)
**Phương pháp động lực học - Mặt phẳng nghiêng tới hạn:**
1. Đặt tấm ván tạo thành mặt phẳng nằm ngang ($\alpha = 0$). Đặt khối gỗ lên trên tấm ván. (Place the wooden block on the flat board.)
2. Từ từ nâng một đầu của tấm ván lên để tăng dần góc nghiêng $\alpha$. Gõ nhẹ vào bàn để vượt qua ma sát nghỉ cực đại. (Slowly increase the angle $\alpha$. Tap gently.)
3. Quan sát khối gỗ. Tìm góc nghiêng $\alpha_0$ mà tại đó khối gỗ bắt đầu trượt đều xuống dưới (trượt với vận tốc không đổi, không có gia tốc). (Find the angle $\alpha_0$ where the block starts sliding with constant velocity.)
4. Đo góc nghiêng $\alpha_0$ bằng thước đo góc. (Measure the angle $\alpha_0$ using a protractor.)
5. Chứng minh công thức lý thuyết: Khi vật trượt đều, gia tốc $a = 0$. Theo phương trình đã giải ở Ví dụ Số:
   $0 = g(\sin\alpha_0 - \mu_k \cos\alpha_0) \implies \sin\alpha_0 = \mu_k \cos\alpha_0 \implies \mu_k = \frac{\sin\alpha_0}{\cos\alpha_0} = \tan\alpha_0$.
6. Lặp lại thí nghiệm 5 lần với các mặt tiếp xúc khác nhau của khối gỗ. Ghi bảng số liệu và lấy giá trị trung bình. (Repeat 5 times, record data and calculate average).

---

## 7. Lập trình Python: Mô phỏng vật rơi có lực cản (Python Simulation)

Chúng ta sẽ mô phỏng chuyển động của một vận động viên nhảy dù. Lực cản không khí rất lớn và tỉ lệ với bình phương vận tốc. Ta sẽ dùng phương pháp Euler giải phương trình vi phân bằng Python.
Phương trình vi phân (Differential equation):
$$ m \frac{dv}{dt} = mg - k v^2 $$

### Đoạn mã Python hoàn chỉnh (Complete Runnable Python Code)

```python
import numpy as np
import matplotlib.pyplot as plt

def simulate_falling_object_drag():
    """
    Simulates a falling object with air resistance (drag proportional to v^2)
    using the Euler numerical method.
    Mô phỏng vật rơi có lực cản không khí (tỉ lệ với v^2) dùng phương pháp Euler.
    """
    # Parameters definition (Thông số cơ bản)
    m = 80.0      # mass of the skydiver + gear (kg) - Khối lượng người nhảy dù và thiết bị
    g = 9.81      # gravity acceleration (m/s^2) - Gia tốc rơi tự do
    k = 0.30      # drag coefficient factor (kg/m) - Hệ số lực cản không khí
    
    dt = 0.01     # time step (s) - Bước nhảy thời gian cho mô phỏng
    t_max = 30.0  # total time (s) - Tổng thời gian mô phỏng
    
    # Calculate analytical terminal velocity (Tính vận tốc cuối theo lý thuyết)
    # v_terminal = sqrt(mg/k)
    v_terminal = np.sqrt((m * g) / k)
    print("==================================================")
    print(f"Lý thuyết: Vận tốc rơi giới hạn (Terminal velocity) = {v_terminal:.2f} m/s")
    print(f"Vận tốc này tương đương khoảng {v_terminal * 3.6:.2f} km/h")
    print("==================================================")
    
    # Initialization of arrays (Khởi tạo mảng dữ liệu)
    t = np.arange(0, t_max, dt)
    v = np.zeros(len(t))
    y = np.zeros(len(t))
    a_arr = np.zeros(len(t))
    
    # Initial conditions (Điều kiện ban đầu tại t=0)
    v[0] = 0.0    # Thả rơi tự do từ trạng thái nghỉ
    y[0] = 2000.0 # Bắt đầu nhảy từ độ cao 2000m
    a_arr[0] = g  # Ban đầu lực cản bằng 0 nên a = g
    
    # Euler Method Loop (Vòng lặp phương pháp số Euler)
    for i in range(1, len(t)):
        # Calculate acceleration at previous step: a = g - (k/m)*v^2
        # (Lưu ý: Ta chọn trục tọa độ thẳng đứng, chiều dương hướng XUỐNG DƯỚI)
        a = g - (k / m) * (v[i-1]**2)
        a_arr[i] = a
        
        # Update velocity: v_new = v_old + a * dt
        v[i] = v[i-1] + a * dt
        
        # Update position (altitude decreases over time as velocity is downward)
        # y_new = y_old - v_new * dt
        y[i] = y[i-1] - v[i] * dt
        
        # Stop simulation if object hits the ground (y <= 0)
        if y[i] <= 0:
            y[i] = 0
            # Truncate arrays to the exact point of impact
            t = t[:i+1]
            v = v[:i+1]
            y = y[:i+1]
            a_arr = a_arr[:i+1]
            print(f"Đối tượng chạm đất tại giây thứ {t[-1]:.2f}")
            break

    # ----------------------------------------------------
    # Plotting the results using Matplotlib
    # Vẽ đồ thị kết quả
    # ----------------------------------------------------
    plt.style.use('seaborn-v0_8-whitegrid')
    fig, axs = plt.subplots(3, 1, figsize=(10, 12))
    
    # 1. Velocity vs Time (Vận tốc - Thời gian)
    axs[0].plot(t, v, 'b-', linewidth=2, label='Vận tốc mô phỏng (Simulated v)')
    axs[0].axhline(v_terminal, color='r', linestyle='--', linewidth=2, 
                   label=f'Vận tốc cuối ({v_terminal:.1f} m/s)')
    axs[0].set_title('Động học Vận Tốc - Thời Gian (Velocity vs Time)', fontsize=14)
    axs[0].set_ylabel('Vận tốc (m/s)', fontsize=12)
    axs[0].legend(loc='lower right')
    
    # 2. Acceleration vs Time (Gia tốc - Thời gian)
    axs[1].plot(t, a_arr, 'm-', linewidth=2, label='Gia tốc mô phỏng')
    axs[1].axhline(0, color='k', linestyle=':', linewidth=1)
    axs[1].set_title('Sự suy giảm Gia Tốc (Acceleration vs Time)', fontsize=14)
    axs[1].set_ylabel('Gia tốc (m/s²)', fontsize=12)
    axs[1].legend(loc='upper right')

    # 3. Position vs Time (Vị trí - Thời gian)
    axs[2].plot(t, y, 'g-', linewidth=2, label='Độ cao')
    axs[2].set_title('Độ cao - Thời gian (Altitude vs Time)', fontsize=14)
    axs[2].set_xlabel('Thời gian t (s)', fontsize=12)
    axs[2].set_ylabel('Độ cao (m)', fontsize=12)
    axs[2].legend(loc='upper right')
    
    plt.tight_layout()
    plt.savefig('falling_drag_simulation.png', dpi=300)
    print("Đã lưu đồ thị vào file 'falling_drag_simulation.png'")
    plt.show()

if __name__ == "__main__":
    simulate_falling_object_drag()
```

*Ghi chú cho giáo viên (Teacher Note):* Yêu cầu học sinh copy đoạn mã trên vào file `simulate.py` và chạy trên VSCode hoặc Replit bằng lệnh `python simulate.py`. Yêu cầu học sinh phân tích sự tương quan giữa đồ thị vận tốc và đồ thị gia tốc. Khi vận tốc đạt hằng số thì gia tốc về 0.

---

## 8. Câu hỏi thảo luận (Discussion Questions)

1. **Tại sao lực ma sát nghỉ lại có vai trò vô cùng quan trọng đối với con người trong đời sống hàng ngày? (Why is static friction incredibly important to humans in daily life?)**
   *Hướng dẫn (Hint):* Nếu không có ma sát nghỉ, chúng ta sẽ không thể bước đi được vì chân sẽ trượt dài về phía sau trên mặt đất. Các phương tiện giao thông bánh lốp di chuyển được là nhờ ma sát nghỉ giữa lốp và mặt đường. Nó cũng giúp giữ các vật đứng yên trên mặt nghiêng, giúp ta cầm nắm đồ vật không bị rơi.

2. **Sự khác biệt lớn nhất về mặt vật lí giữa lực ma sát động học (trượt) giữa hai vật rắn và lực cản của không khí/chất lỏng là gì? (What is the main physical difference between kinetic friction and air drag?)**
   *Hướng dẫn (Hint):* Ma sát trượt giữa hai vật rắn gần như *không phụ thuộc* vào vận tốc (chỉ phụ thuộc $\mu_k$ và áp lực $N$), trong khi đó lực cản của lưu chất tăng rất nhanh khi vận tốc tăng (tỉ lệ thuận với $v$ ở vận tốc nhỏ hoặc tỉ lệ với bình phương $v^2$ ở vận tốc lớn).

3. **Trong thiết kế xe đua F1 hiện đại, lực nâng (Lift force) được các kỹ sư tận dụng theo chiều hướng như thế nào? (How is lift force utilized by engineers in modern F1 racing car design?)**
   *Hướng dẫn (Hint):* Ở xe đua F1, họ sử dụng hiệu ứng khí động học để tạo ra "lực nâng âm" (Downforce). Cánh gió trước và sau được thiết kế biên dạng ngược so với cánh máy bay. Không khí chảy qua ép chặt thân xe xuống mặt đường, làm tăng cực kỳ mạnh áp lực vuông góc $N$, từ đó tăng lực ma sát bám cực đại $F_{msn} = \mu N$ giúp xe có thể ôm cua ở tốc độ cực cao (vd: 250km/h) mà không bị trượt văng ra ngoài quỹ đạo.

4. **Vận tốc cuối (Terminal velocity) của một hạt mưa nhỏ có lớn hơn hay nhỏ hơn so với một hòn đá cùng kích thước hình học rơi từ cùng một đám mây? Vì sao? (Is the terminal velocity of a raindrop higher or lower than a stone of the same size falling from the same cloud? Why?)**
   *Hướng dẫn (Hint):* Nhỏ hơn. Vì hạt mưa (nước) có khối lượng riêng nhỏ hơn đá rất nhiều. Với cùng một thể tích (cùng diện tích hứng gió), hạt mưa có khối lượng $m$ nhỏ hơn đáng kể, nên trọng lực $P = mg$ nhỏ hơn. Vật chỉ cần rơi đến một vận tốc tương đối nhỏ là lực cản không khí đã đủ cân bằng với trọng lượng. Ngược lại hòn đá cần phải rơi rất nhanh mới tạo đủ lực cản.

5. **Theo Định luật III Newton, trọng lượng của một cuốn sách (nặng 10N) đặt trên mặt bàn ngang và phản lực (10N) của bàn đẩy lên sách có phải là một "cặp lực trực đối - lực và phản lực" (Action-Reaction pair) không? (Are the weight of a book and the normal force from the table an action-reaction pair?)**
   *Hướng dẫn (Hint):* Tuyệt đối KHÔNG. Phản lực của bàn (tác dụng lên sách) và Trọng lực (tác dụng lên sách) là hai lực cân bằng (vì tác dụng vào CÙNG một vật là cuốn sách và làm vật đứng yên). Cặp lực trực đối theo ĐL III Newton của lực hút Trái Đất tác dụng lên sách chính là lực hút của sách tác dụng ngược lại lên Trái Đất. Còn phản lực trực đối của lực bàn đẩy sách lên chính là lực sách đè lên bàn.

---

## 9. Bài tập về nhà (Homework & Practice Problems)

**Bài 1 (Problem 1): Bài toán Hệ lực trên mặt phẳng ngang**
Một thùng hàng khối lượng 25 kg được kéo trượt trên sàn kho bằng một sợi dây cáp. Lực kéo tác dụng qua dây cáp là $F = 120$ N, hợp với phương ngang một góc $\theta = 20^\circ$ hướng lên. Biết hệ số ma sát trượt giữa thùng và sàn là $\mu_k = 0.25$. Lấy $g = 9.8$ m/s$^2$.
Tính gia tốc chuyển động của thùng hàng.
(A 25 kg crate is pulled on a floor by a cable with a force of 120 N at an angle of 20 degrees upward from horizontal. $\mu_k = 0.25$. Calculate acceleration).
*Các bước giải chi tiết (Detailed Solution Steps):*
- Phân tích lực kéo $\vec{F}$ thành 2 thành phần vuông góc: $F_x = F\cos 20^\circ$ và $F_y = F\sin 20^\circ$.
- Viết phương trình chiếu theo trục Oy thẳng đứng: Các lực hướng lên là $N$ và $F_y$. Lực hướng xuống là $P = mg$. Do thùng không bay lên trời, $a_y = 0$.
  $\implies N + F_y - P = 0 \implies N = mg - F\sin 20^\circ$.
- Tính áp lực số: $N = 25 \times 9.8 - 120 \times \sin 20^\circ = 245 - 41.04 = 203.96$ N.
- Lực ma sát: $F_{ms} = \mu_k N = 0.25 \times 203.96 = 50.99$ N.
- Viết phương trình chiếu trục Ox: $F_x - F_{ms} = m a_x$.
  $\implies 120 \times \cos 20^\circ - 50.99 = 25 \times a_x$.
  $\implies 112.76 - 50.99 = 25 \times a_x \implies 61.77 = 25 a_x \implies a_x \approx 2.47$ m/s$^2$.

**Bài 2 (Problem 2): Thang máy và Hiện tượng tăng/giảm trọng lượng**
Một thang máy có khối lượng tổng cộng (cả hành khách) là 1200 kg. Thang máy được kéo lên bởi một dây cáp bằng thép. Lấy $g = 10$ m/s$^2$. Tính lực căng của dây cáp trong ba trường hợp sau:
a) Thang máy đang đi lên thẳng đều. (Moving up at constant speed).
b) Thang máy đang đi lên nhanh dần đều với gia tốc 1.5 m/s$^2$. (Accelerating upwards at 1.5 m/s$^2$).
c) Thang máy đang đi lên chậm dần đều với gia tốc lớn 1.5 m/s$^2$. (Decelerating upwards at 1.5 m/s$^2$).
*Các bước giải (Solution Steps):*
- Các lực tác dụng lên buồng thang máy: Trọng lực $\vec{P}$ hướng xuống, Lực căng $\vec{T}$ hướng lên.
- Theo Định luật II Newton (chọn chiều dương hướng lên): $T - mg = m a \implies T = m(g + a)$.
- Câu a: Thẳng đều $\implies a = 0 \implies T = mg = 1200 \times 10 = 12000$ N.
- Câu b: Nhanh dần đều hướng lên $\implies a = +1.5 \implies T = 1200(10 + 1.5) = 13800$ N. (Cáp căng mạnh hơn).
- Câu c: Chậm dần đều hướng lên (vận tốc lên, gia tốc xuống) $\implies a = -1.5 \implies T = 1200(10 - 1.5) = 10200$ N. (Cáp chùng đi).

**Bài 3 (Problem 3): Phân tích đồ thị Mô phỏng Python**
Dựa vào đồ thị thu được từ đoạn mã Python ở phần 7, giải thích bằng lời ý nghĩa vật lí tại sao đường cong vận tốc $v(t)$ không tăng mãi mà có xu hướng bẻ ngang và tiệm cận về một đường nằm ngang màu đỏ?
*Hướng dẫn trả lời:*
Khi vật mới rơi, $v \approx 0$, $F_c \approx 0$, gia tốc $a \approx g$ rất lớn, $v$ tăng nhanh (độ dốc đồ thị lớn). 
Khi $v$ tăng dần, lực cản $F_c = kv^2$ tăng theo quy luật parabol. Lực tổng hợp hướng xuống $F = P - F_c$ giảm dần $\implies$ gia tốc $a$ giảm dần. Đồ thị $v(t)$ giảm độ dốc.
Đến một giới hạn khi $F_c = P$, tổng lực bằng không, gia tốc bằng 0. Vật không thể tăng tốc thêm, vận tốc giữ nguyên giá trị cực đại. Lúc này đồ thị biểu diễn $v(t)$ là một đường nằm ngang (tiệm cận).

---

## 10. Bảng đánh giá Rubric (Assessment Rubric Table)

Sử dụng thang điểm 100 (100-point scale) để đánh giá năng lực học sinh trong tuần 5.

| Tiêu chí (Criteria) | Mức độ 1: Cần cố gắng (Needs Improvement) 0-49đ | Mức độ 2: Khá, Đạt (Good) 50-79đ | Mức độ 3: Xuất sắc, Vượt mức (Excellent) 80-100đ | Điểm tối đa (Max Pts) |
| :--- | :--- | :--- | :--- | :--- |
| **Lý thuyết (Theory)** | Trả lời sai các khái niệm cơ bản về lực cơ học, không nêu đúng công thức. (Fails basic force concepts). | Hiểu khái niệm nhưng đôi lúc nhầm lẫn giữa ma sát tĩnh và ma sát động. (Understands concepts but confuses static/kinetic friction). | Phân tích chính xác mọi lực, hiểu sâu về bản chất vật lý của hiện tượng vận tốc cuối. (Accurately analyzes all forces, deep understanding of terminal velocity). | 30 |
| **Vẽ Giản đồ FBD (FBD Drawing)** | Không vẽ được hoặc vẽ sai hoàn toàn hướng các lực (ví dụ vẽ trọng lực chéo). (Cannot draw or wrong direction). | Vẽ đúng hướng nhưng thiếu lực phản lực, lực ma sát hoặc tỷ lệ vector sai trầm trọng. (Correct directions but missing forces or wrong scale). | Vẽ đúng, đủ số lượng lực, tỷ lệ độ dài vector hợp lý, có hệ trục tọa độ Oxy rõ ràng. (Correct, complete, well-labeled with axes). | 20 |
| **Giải Bài tập (Problems)** | Không thiết lập được phương trình định luật II Newton. (Cannot write Newton's laws equations). | Áp dụng đúng công thức tổng quát nhưng kỹ năng hình học/lượng giác kém dẫn đến tính sai số liệu. (Correct formula but calculation/trig errors). | Trình bày sạch đẹp chuẩn 4 bước. Chiếu trục chính xác, kết quả đúng 100%, có kết luận biện luận rõ ràng. (Correct 4 steps, accurate results, good discussion). | 30 |
| **Thực hành & Lập trình (Lab & Code)** | Không hoàn thành thí nghiệm mặt phẳng nghiêng, không chạy được file code Python. (Cannot finish lab or run code). | Hoàn thành thí nghiệm nhưng sai số lớn. Chạy được code nhưng không tự thay đổi thông số được. (Done but large errors, roughly understands code). | Thực hành nhóm xuất sắc, an toàn. Giải thích được ý nghĩa từng dòng code Python, vẽ và đọc đồ thị tốt. (Safe, excellent lab. Can explain every line of Python code). | 20 |
| **TỔNG CỘNG (TOTAL)** | | | | **100** |

---
**Tài liệu tham khảo thêm (Further Reading for Students):**
- University Physics with Modern Physics (Young & Freedman) - Chapter 5: Applying Newton's Laws.
- Video: "Terminal Velocity of Skydiver" trên YouTube để có góc nhìn trực quan.
- Documentation của Matplotlib Python để tìm hiểu thêm về cách vẽ đồ thị kỹ thuật.

*Chúc các em có một tuần học hiệu quả và khám phá được nhiều điều thú vị từ Thế giới Vật Lí!*
*End of Week 5 Materials.*
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

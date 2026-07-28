# Tuần 7: Hiện Tượng Phóng Xạ, Tia Phóng Xạ & Công Nghiệp Hạt Nhân / Week 7: Radioactive Decay, Radiation & Nuclear Industry

## 1. Giới thiệu & Mục tiêu bài học (Introduction & Learning Objectives)

### 1.1. Mục tiêu bằng Tiếng Việt
Trong tuần thứ 7 của khóa học Vật lí 12 STEM, học sinh sẽ khám phá các khái niệm cốt lõi về vật lí hạt nhân, tập trung vào hiện tượng phóng xạ và ứng dụng của nó trong công nghiệp và đời sống. Các mục tiêu cụ thể bao gồm:
- **Hiểu biết lí thuyết (Theoretical Understanding):** Nắm vững định luật phóng xạ, định nghĩa về chu kì bán rã ($T$), hằng số phóng xạ ($\lambda$), và độ phóng xạ ($A$).
- **Phân loại tia phóng xạ (Radiation Types):** Phân biệt được tính chất, khả năng đâm xuyên, và bản chất của các tia $\alpha$, $\beta^+$, $\beta^-$, và $\gamma$.
- **Ứng dụng thực tiễn (Practical Applications):** Hiểu rõ cơ chế định tuổi bằng đồng vị carbon-14 và cấu tạo cơ bản của lò phản ứng hạt nhân.
- **Thực hành lập trình (Programming Skills):** Sử dụng ngôn ngữ Python để mô phỏng và phân tích đường cong phân rã phóng xạ, trực quan hóa dữ liệu bằng thư viện `matplotlib`.
- **An toàn bức xạ (Radiation Safety):** Nắm vững nguyên tắc ALARA (Time, Distance, Shielding) trong an toàn bức xạ.

### 1.2. Learning Objectives in English
In week 7 of the Physics 12 STEM course, students will explore core concepts of nuclear physics, focusing on radioactive decay and its applications in industry and daily life. Specific objectives include:
- **Theoretical Understanding:** Master the radioactive decay law, the definition of half-life ($T$), decay constant ($\lambda$), and activity ($A$).
- **Radiation Types:** Differentiate the properties, penetration power, and nature of $\alpha$, $\beta^+$, $\beta^-$, and $\gamma$ rays.
- **Practical Applications:** Understand the mechanism of radiocarbon dating and the basic structure of a nuclear reactor.
- **Programming Skills:** Use Python to simulate and analyze radioactive decay curves, visualizing data with the `matplotlib` library.
- **Radiation Safety:** Master the ALARA (Time, Distance, Shielding) principle in radiation safety.

---

## 2. Bảng Thiết bị Thực hành & Mô phỏng (Lab Equipment & Simulation Table)

Để thực hiện các bài thực hành trong tuần này, chúng ta sẽ cần các thiết bị và phần mềm sau đây:
To conduct the practical exercises this week, we will need the following equipment and software:

| Tên thiết bị (Equipment Name) | Mô tả & Thông số (Description & Specs) | Đơn giá ước tính (Estimated Price in VND) | Ghi chú (Notes) |
| :--- | :--- | :--- | :--- |
| Máy tính cá nhân / Laptop | Cài đặt Python 3.9+, Jupyter Notebook, hoặc VS Code. | Có sẵn (Available) | Dùng để lập trình mô phỏng / For coding |
| Bộ đếm Geiger-Muller (Geiger Counter) | Máy đo bức xạ cầm tay cơ bản (GQ GMC-320 Plus hoặc tương đương) | 2,500,000 VND | Đo phông bức xạ tự nhiên / Background radiation |
| Nguồn phóng xạ mẫu (Radioactive Check Source) | Nguồn yếu dùng trong giáo dục (Cs-137 hoặc Sr-90 nồng độ cực thấp) | 1,200,000 VND | Chỉ dùng dưới sự giám sát của GV / Teacher supervision only |
| Vật liệu chắn bức xạ (Shielding Materials) | Tấm chì (Lead), Tấm nhôm (Aluminum), Tấm nhựa/mica, Giấy | 500,000 VND | Để kiểm tra khả năng đâm xuyên / To test penetration |
| Kính bảo hộ & Găng tay (Safety Goggles & Gloves) | Trang bị bảo hộ cơ bản | 100,000 VND | Đảm bảo an toàn / Safety first |

*Tổng chi phí ước tính (Estimated total cost): ~4,300,000 VND (chưa bao gồm máy tính).*

---

## 3. Lý thuyết chuyên sâu (Deep Theory Explanations)

### 3.1. Định luật phân rã phóng xạ (The Radioactive Decay Law)

**Tiếng Việt:**
Phóng xạ là quá trình phân rã tự phát của một hạt nhân không bền vững. Quá trình này hoàn toàn mang tính thống kê và ngẫu nhiên đối với từng hạt nhân riêng lẻ, nhưng đối với một tập hợp lớn các hạt nhân, nó tuân theo định luật hàm số mũ.
Số hạt nhân chưa bị phân rã tại thời điểm $t$ được cho bởi công thức:
$$N(t) = N_0 \cdot e^{-\lambda t} = N_0 \cdot 2^{-t/T}$$
Trong đó:
- $N_0$ là số lượng hạt nhân ban đầu tại $t = 0$.
- $\lambda$ là hằng số phân rã (decay constant).
- $T$ là chu kì bán rã (half-life), khoảng thời gian để một nửa số hạt nhân bị phân rã. Mối liên hệ: $T = \frac{\ln(2)}{\lambda}$.

Độ phóng xạ $A(t)$ (Activity) là số phân rã trong một giây (đơn vị: Becquerel - Bq):
$$A(t) = -\frac{dN}{dt} = \lambda N(t) = A_0 \cdot 2^{-t/T}$$

**English:**
Radioactive decay is the spontaneous disintegration of an unstable nucleus. This process is entirely statistical and random for any individual nucleus, but for a large ensemble of nuclei, it follows an exponential law.
The number of undecayed nuclei at time $t$ is given by:
$$N(t) = N_0 \cdot e^{-\lambda t} = N_0 \cdot 2^{-t/T}$$
Where:
- $N_0$ is the initial number of nuclei at $t = 0$.
- $\lambda$ is the decay constant.
- $T$ is the half-life, the time required for half of the nuclei to decay. Relationship: $T = \frac{\ln(2)}{\lambda}$.

Activity $A(t)$ is the number of decays per second (unit: Becquerel - Bq):
$$A(t) = -\frac{dN}{dt} = \lambda N(t) = A_0 \cdot 2^{-t/T}$$

### 3.2. Sơ đồ quá trình phân rã (ASCII/Markdown Diagram of Radioactive Decay)

Dưới đây là mô phỏng dạng biểu đồ ASCII cho đường cong phân rã phóng xạ của $N(t)$ theo các chu kì bán rã $T$.
Below is an ASCII diagram simulation for the radioactive decay curve of $N(t)$ over half-lives $T$.

```text
N(t) |
     |
N_0  +  *
     |    \
     |     \
N_0/2+      *
     |       \
     |        \
N_0/4+         *
     |          \
     |           \
N_0/8+            * - - - - - * - - - - - *
     |
     +------|------|------|------|------|--> t (time)
            0      1T     2T     3T     4T

* Chu kì 1 (1T): Còn lại 50% (1/2)
* Chu kì 2 (2T): Còn lại 25% (1/4)
* Chu kì 3 (3T): Còn lại 12.5% (1/8)
* Chu kì 4 (4T): Còn lại 6.25% (1/16)
```

### 3.3. Phân loại tia phóng xạ (Types of Radiation)

Có ba loại bức xạ phổ biến phát ra từ sự phân rã hạt nhân:
There are three common types of radiation emitted from nuclear decay:

1. **Tia Alpha ($\alpha$):** 
   - Bản chất (Nature): Là hạt nhân Helium ($^4_2\text{He}$). Mang điện tích dương (+2e).
   - Khả năng đâm xuyên (Penetration): Rất yếu. Bị chặn lại bởi một tờ giấy mỏng hoặc vài cm không khí.
   - Nguy hiểm (Danger): Rất nguy hiểm nếu hít hoặc nuốt phải (internal hazard).

2. **Tia Beta ($\beta$):**
   - Bản chất (Nature): Gồm Beta trừ ($\beta^-$) là hạt electron ($^0_{-1}\text{e}$) và Beta cộng ($\beta^+$) là hạt positron ($^0_{+1}\text{e}$).
   - Khả năng đâm xuyên (Penetration): Trung bình. Bị chặn lại bởi một tấm nhôm dày vài mm.
   
3. **Tia Gamma ($\gamma$):**
   - Bản chất (Nature): Là sóng điện từ có bước sóng cực ngắn, năng lượng photon cực cao (không mang điện, khối lượng nghỉ bằng 0).
   - Khả năng đâm xuyên (Penetration): Rất mạnh. Cần lớp chì (lead) hoặc bê tông dày (thick concrete) để suy giảm cường độ.

### 3.4. Định tuổi bằng Carbon-14 (Radiocarbon Dating)

**Tiếng Việt:**
Phương pháp định tuổi C-14 do Willard Libby phát minh, dựa trên sự phân rã của đồng vị $^{14}\text{C}$ có chu kì bán rã khoảng 5730 năm. Khi sinh vật còn sống, tỉ lệ $^{14}\text{C}/^{12}\text{C}$ trong cơ thể bằng với trong khí quyển. Khi sinh vật chết đi, nó ngừng hấp thụ Carbon, và $^{14}\text{C}$ bắt đầu phân rã. Bằng cách đo lượng $^{14}\text{C}$ còn lại, ta có thể tính được thời gian kể từ khi sinh vật chết:
$$ t = \frac{T}{\ln(2)} \cdot \ln\left(\frac{A_0}{A}\right) $$

**English:**
The C-14 dating method, invented by Willard Libby, is based on the decay of the $^{14}\text{C}$ isotope, which has a half-life of about 5730 years. While an organism is alive, the $^{14}\text{C}/^{12}\text{C}$ ratio in its body equals that in the atmosphere. Upon death, it stops absorbing Carbon, and $^{14}\text{C}$ begins to decay. By measuring the remaining $^{14}\text{C}$, we can calculate the time since death:
$$ t = \frac{T}{\ln(2)} \cdot \ln\left(\frac{A_0}{A}\right) $$

### 3.5. Công nghiệp hạt nhân & Lò phản ứng (Nuclear Industry & Reactors)

Lò phản ứng hạt nhân hoạt động dựa trên phản ứng phân hạch dây chuyền (chain fission reaction) có kiểm soát của Uranium-235 hoặc Plutonium-239.
Cấu tạo cơ bản của lò phản ứng (Basic structure of a nuclear reactor):
- **Nhiên liệu (Fuel):** Các thanh Uranium ($^{235}\text{U}$) làm giàu.
- **Chất làm chậm (Moderator):** Than chì, nước nhẹ hoặc nước nặng (Graphite, Light/Heavy water) - làm chậm neutron để tăng xác suất phân hạch.
- **Thanh điều khiển (Control rods):** Làm bằng Bo (Boron) hoặc Cadmium, dùng để hấp thụ neutron, kiểm soát tốc độ phản ứng (hệ số nhân neutron $k = 1$).
- **Chất làm mát (Coolant):** Nước hoặc kim loại lỏng, mang nhiệt năng ra khỏi vùng lõi để chạy tuabin sinh điện.

---

## 4. Nguyên tắc An toàn Bức xạ ALARA (Radiation Safety Principles - ALARA)

ALARA là viết tắt của "As Low As Reasonably Achievable" (Thấp nhất ở mức có thể đạt được một cách hợp lý). Nguyên tắc này dựa trên 3 yếu tố cốt lõi:
The ALARA principle stands for "As Low As Reasonably Achievable". It is based on 3 core factors:

1. **Thời gian (Time):**
   - Càng tiếp xúc ít thời gian với nguồn phóng xạ, liều lượng hấp thụ càng thấp. 
   - *Hành động:* Lên kế hoạch thực hành chi tiết, thao tác nhanh gọn.
   - *Action:* Plan practical work detailedly, operate swiftly.

2. **Khoảng cách (Distance):**
   - Cường độ bức xạ giảm theo bình phương khoảng cách ($I \propto 1/r^2$). Nhân đôi khoảng cách làm giảm cường độ bức xạ xuống 4 lần.
   - *Hành động:* Sử dụng kẹp (tongs) gắp dài khi xử lý nguồn.
   - *Action:* Use long tongs when handling sources.

3. **Che chắn (Shielding):**
   - Sử dụng vật liệu phù hợp để hấp thụ bức xạ trước khi nó chạm đến cơ thể.
   - *Hành động:* Dùng áo chì, găng tay, tấm kính chì.
   - *Action:* Use lead aprons, gloves, lead-glass barriers.

---

## 5. Thực hành: Phân tích Dữ liệu Phân rã Phóng xạ (Hands-on Experiment: Analyzing Radioactive Decay Data)

Trong phần này, học sinh sẽ học cách ước tính chu kì bán rã thông qua một tập dữ liệu đếm hạt mô phỏng.
In this section, students will learn how to estimate the half-life through a simulated particle counting dataset.

### Bước 1 (Step 1): Thu thập dữ liệu (Data Collection)
Giả sử chúng ta sử dụng ống Geiger-Muller để đo số xung (counts) phát ra từ một mẫu đồng vị phóng xạ (ví dụ: Đồng vị nhân tạo tuổi thọ ngắn như Ba-137m) trong mỗi khoảng thời gian 1 phút (1 minute intervals).

| Thời gian $t$ (phút) | Số đếm $A(t)$ (counts/min) | $\ln(A(t))$ |
| :---: | :---: | :---: |
| 0.0 | 3200 | 8.07 |
| 2.0 | 2150 | 7.67 |
| 4.0 | 1440 | 7.27 |
| 6.0 | 970 | 6.87 |
| 8.0 | 650 | 6.47 |
| 10.0 | 440 | 6.08 |

### Bước 2 (Step 2): Vẽ đồ thị & Hồi quy tuyến tính (Plotting & Linear Regression)
1. Theo công thức: $A(t) = A_0 e^{-\lambda t}$. Lấy logarit tự nhiên hai vế: 
   $$\ln(A(t)) = \ln(A_0) - \lambda t$$
2. Đồ thị của $\ln(A(t))$ theo $t$ sẽ là một đường thẳng (straight line) với hệ số góc (slope) là $-\lambda$ và tung độ gốc (y-intercept) là $\ln(A_0)$.
3. Tính toán độ dốc (slope):
   $$\text{Slope} = \frac{6.08 - 8.07}{10.0 - 0.0} = \frac{-1.99}{10} = -0.199 \text{ (phút}^{-1}\text{)}$$
   Vậy, $\lambda = 0.199 \text{ (phút}^{-1})$.
4. Tính chu kì bán rã (Calculate half-life):
   $$T = \frac{\ln(2)}{\lambda} = \frac{0.693}{0.199} \approx 3.48 \text{ phút}$$
   (Giá trị lý thuyết của Ba-137m là 2.552 phút, sai số đến từ đếm thống kê và bức xạ phông).

---

## 6. Lập trình Mô phỏng với Python (Complete Python Simulation Code)

Học sinh copy và chạy đoạn mã Python dưới đây trên Jupyter Notebook hoặc Google Colab để mô phỏng đường cong phân rã và tính toán hằng số phân rã một cách trực quan.
Students copy and run the Python code below on Jupyter Notebook or Google Colab to visualize the decay curve and compute the decay constant interactively.

```python
"""
Radioactive Decay Simulation / Mô phỏng Phân rã Phóng xạ
Physics 12 STEM Course - Week 7

This script simulates the radioactive decay of an isotope over time.
It plots both the exact theoretical decay curve and randomized (Monte Carlo) decay events.
"""

import numpy as np
import matplotlib.pyplot as plt

def simulate_decay(N0, half_life, t_max, dt):
    """
    Simulates the radioactive decay using probabilities.
    Mô phỏng phân rã phóng xạ bằng xác suất.
    
    Args:
        N0 (int): Initial number of nuclei (Số hạt nhân ban đầu)
        half_life (float): Half life in years/days/seconds (Chu kì bán rã)
        t_max (float): Maximum simulation time (Thời gian mô phỏng tối đa)
        dt (float): Time step (Bước thời gian)
        
    Returns:
        tuple: time array (mảng thời gian), N array (mảng số hạt còn lại)
    """
    # Calculate decay constant / Tính hằng số phân rã lambda
    decay_constant = np.log(2) / half_life
    
    # Probability of decay in one time step / Xác suất phân rã trong thời gian dt
    # P = 1 - e^(-lambda * dt)
    prob_decay = 1 - np.exp(-decay_constant * dt)
    
    time_points = np.arange(0, t_max + dt, dt)
    N_current = N0
    N_history = [N_current]
    
    # Monte Carlo simulation loop
    for t in time_points[1:]:
        # Generate random numbers for each remaining nucleus
        # If random number < probability, the nucleus decays.
        # Tạo số ngẫu nhiên. Nếu số ngẫu nhiên < xác suất phân rã -> Hạt đó bị phân rã.
        decays_this_step = np.random.binomial(N_current, prob_decay)
        N_current = N_current - decays_this_step
        N_history.append(N_current)
        
    return time_points, np.array(N_history)

# ==========================================
# Parameters Setup / Cài đặt thông số
# ==========================================
INITIAL_NUCLEI = 10000        # Số hạt ban đầu (N_0)
HALF_LIFE = 5.0              # Chu kì bán rã T (đơn vị giả định)
T_MAX = 25.0                 # Thời gian mô phỏng tổng cộng (5 chu kì bán rã)
DT = 0.5                     # Bước thời gian

# Chạy mô phỏng / Run simulation
t_sim, N_sim = simulate_decay(INITIAL_NUCLEI, HALF_LIFE, T_MAX, DT)

# Tính toán giá trị lý thuyết / Calculate theoretical values
decay_constant = np.log(2) / HALF_LIFE
N_theoretical = INITIAL_NUCLEI * np.exp(-decay_constant * t_sim)

# ==========================================
# Visualization / Trực quan hóa dữ liệu
# ==========================================
plt.figure(figsize=(10, 6))

# Plot simulated data (Scatter points)
plt.scatter(t_sim, N_sim, color='red', alpha=0.6, label='Simulated Data (Monte Carlo)', marker='x')

# Plot theoretical curve (Smooth line)
plt.plot(t_sim, N_theoretical, color='blue', linewidth=2, label=r'Theoretical $N(t) = N_0 e^{-\lambda t}$')

# Draw vertical lines for half-lives / Vẽ đường gióng chu kì bán rã
for i in range(1, 6):
    hl_time = i * HALF_LIFE
    hl_N = INITIAL_NUCLEI * (0.5)**i
    plt.axvline(x=hl_time, color='green', linestyle='--', alpha=0.4)
    plt.plot(hl_time, hl_N, 'go') # Mark intersection points
    plt.annotate(f'{i}T', xy=(hl_time, hl_N), xytext=(5, 5), textcoords='offset points', color='green')

# Formatting the plot
plt.title('Mô phỏng Phân rã Phóng xạ (Radioactive Decay Simulation)', fontsize=14, fontweight='bold')
plt.xlabel('Thời gian $t$ (Time)', fontsize=12)
plt.ylabel('Số hạt nhân chưa phân rã $N(t)$ (Remaining Nuclei)', fontsize=12)
plt.legend(loc='upper right', fontsize=11)
plt.grid(True, alpha=0.3)

# Add informative text box
info_text = f"$N_0$: {INITIAL_NUCLEI}\n$T$: {HALF_LIFE}\n$\lambda$: {decay_constant:.4f}"
plt.text(0.85, 0.5, info_text, transform=plt.gca().transAxes, fontsize=12,
         bbox=dict(facecolor='white', alpha=0.8, edgecolor='gray'))

# Show plot
plt.tight_layout()
plt.show()

# ==========================================
# In ra thông tin chuỗi phân rã (Decay Chain Output)
# ==========================================
print("=== THỐNG KÊ PHÂN RÃ (DECAY STATISTICS) ===")
print(f"Hằng số phóng xạ (Decay constant) lambda = {decay_constant:.4f}")
print(f"Số hạt nhân ban đầu (Initial nuclei) = {INITIAL_NUCLEI}")
for i in range(1, 6):
    hl_time = i * HALF_LIFE
    expected = INITIAL_NUCLEI * (0.5)**i
    idx = int(hl_time / DT)
    if idx < len(N_sim):
        actual = N_sim[idx]
        print(f"Sau {i} chu kì bán rã ({hl_time}): Lý thuyết = {expected:.1f} | Mô phỏng thực tế = {actual}")
```

---

## 7. Câu hỏi Thảo luận (Discussion Questions)

**Câu 1 (Q1):** Tại sao hiện tượng phóng xạ không phụ thuộc vào các điều kiện vật lí và hóa học của môi trường xung quanh (nhiệt độ, áp suất, trạng thái liên kết hóa học)?
- *Why is radioactive decay independent of the physical and chemical conditions of the environment (temperature, pressure, chemical bonds)?*
- **Trả lời (Answer):** Hiện tượng phóng xạ xảy ra ở cấp độ hạt nhân (tức là sâu bên trong nguyên tử, liên quan đến tương tác hạt nhân mạnh và tương tác yếu). Các yếu tố vật lý và hóa học (nhiệt độ, áp suất) chỉ tác động đến lớp vỏ electron bên ngoài. Năng lượng liên kết hóa học (~ vài eV) vô cùng nhỏ bé so với năng lượng liên kết hạt nhân (~ hàng triệu eV - MeV). Do đó, chúng không thể tác động hay làm thay đổi sự mất ổn định của hạt nhân.

**Câu 2 (Q2):** Dựa trên nguyên lý ALARA, nếu bạn phải làm việc với một nguồn tia Gamma mạnh, làm thế nào để bạn bảo vệ chính mình?
- *Based on the ALARA principle, if you have to work with a strong Gamma source, how do you protect yourself?*
- **Trả lời (Answer):** Áp dụng ALARA:
  1. *Thời gian:* Lên kế hoạch thực hiện thao tác cẩn thận bên ngoài, chỉ tiếp xúc nguồn trong thời gian ngắn nhất có thể.
  2. *Khoảng cách:* Dùng các robot từ xa (remote manipulators) hoặc kẹp siêu dài. Không bao giờ chạm trực tiếp bằng tay. (Tăng khoảng cách gấp đôi, bức xạ giảm 4 lần).
  3. *Che chắn:* Mặc áo bảo hộ có lót chì, đứng sau một bức tường chì hoặc kính pha chì dày, hoặc bức tường bê tông. Tia Gamma có khả năng đâm xuyên rất mạnh nên cần vật liệu khối lượng riêng cao (như Chì - Pb).

**Câu 3 (Q3):** Hãy giải thích ngắn gọn nguyên lý của hệ thống làm mát bằng "Nước nhẹ" trong lò phản ứng hạt nhân PWR (Pressurized Water Reactor).
- *Briefly explain the principle of the "Light Water" cooling system in a PWR (Pressurized Water Reactor).*
- **Trả lời (Answer):** Trong lò phản ứng PWR, nước nhẹ (nước sinh hoạt bình thường $H_2O$) đóng hai vai trò: làm chất làm chậm (moderator) neutron và làm chất làm mát (coolant). Nước được giữ ở áp suất rất cao (khoảng 150 atm) để không bị sôi dù nhiệt độ lên tới hơn 300 độ C. Nước siêu nóng này đi qua bộ trao đổi nhiệt, truyền nhiệt cho vòng tuần hoàn nước thứ hai (ở áp suất thấp hơn), làm vòng thứ hai bốc hơi quay tuabin sinh điện. Vòng nước nhiễm phóng xạ bên trong lõi không bao giờ trộn lẫn với vòng nước bên ngoài, đảm bảo an toàn.

**Câu 4 (Q4):** Phương pháp định tuổi bằng C-14 có giới hạn thời gian đo tối đa là bao nhiêu? Tại sao lại không thể dùng C-14 để định tuổi khủng long?
- *What is the maximum time limit for C-14 dating? Why can't C-14 be used to date dinosaurs?*
- **Trả lời (Answer):** Giới hạn tối đa của phương pháp C-14 là khoảng 50,000 đến 60,000 năm. Lí do là sau khoảng 10 chu kì bán rã ($10 \times 5730 \approx 57,000$ năm), lượng C-14 còn lại chỉ bằng $1/2^{10} \approx 1/1024$ lượng ban đầu, quá nhỏ để có thể đo lường một cách chính xác trên thiết bị máy dò hiện đại. Khủng long tuyệt chủng cách đây khoảng 65 triệu năm, lượng C-14 ban đầu đã phân rã hoàn toàn không còn một dấu vết. Để đo tuổi khủng long, người muốn dùng phương pháp Uranium-Lead hoặc Potassium-Argon có chu kì bán rã hàng tỉ năm.

**Câu 5 (Q5):** Phân hạch (Fission) và Nhiệt hạch (Fusion) khác nhau cơ bản ở điểm nào?
- *What is the fundamental difference between Nuclear Fission and Nuclear Fusion?*
- **Trả lời (Answer):**
  - **Phân hạch (Fission):** Là quá trình một hạt nhân nặng (ví dụ U-235) vỡ ra thành hai hạt nhân trung bình nhẹ hơn khi hấp thụ một neutron chậm, giải phóng năng lượng và thêm 2-3 neutron. Dễ kiểm soát, là cơ sở của các nhà máy điện hạt nhân hiện tại.
  - **Nhiệt hạch (Fusion):** Là quá trình kết hợp hai hạt nhân siêu nhẹ (như Deuterium và Tritium) để tạo thành một hạt nhân nặng hơn (Helium), giải phóng năng lượng khổng lồ. Cần nhiệt độ và áp suất cực cao (như lõi Mặt Trời). Sạch hơn, không tạo ra chất thải phóng xạ sống lâu, nhưng rất khó kiểm soát để thương mại hóa thành nhà máy điện hiện nay.

---

## 8. Bài tập về nhà & Luyện tập (Homework & Practice Problems)

**Bài 1 (Problem 1):** 
Chất phóng xạ Polonium-210 ($^{210}\text{Po}$) là một nguồn phát tia Alpha mạnh, có chu kì bán rã $T = 138$ ngày. Ban đầu có một mẫu chứa 10 mg $^{210}\text{Po}$.
a) Tính hằng số phóng xạ $\lambda$ của $^{210}\text{Po}$ (theo đơn vị ngày$^{-1}$ và giây$^{-1}$).
b) Tính khối lượng Polonium còn lại sau 276 ngày.
c) Tính số lượng hạt nhân Polonium phân rã trong khoảng thời gian từ ngày 138 đến ngày 276.

*(Polonium-210 is a strong Alpha emitter with a half-life of 138 days. Initially, a sample contains 10 mg of Po-210. (a) Calculate the decay constant. (b) Find the remaining mass after 276 days. (c) Find the number of nuclei decayed between day 138 and day 276.)*

**Hướng dẫn giải (Step-by-step Solution):**
**a)**
- Theo đơn vị ngày$^{-1}$: $\lambda = \frac{\ln(2)}{T} = \frac{0.693}{138} \approx 5.02 \times 10^{-3} \text{ ngày}^{-1}$
- Theo đơn vị giây$^{-1}$: $138 \text{ ngày} = 138 \times 24 \times 3600 = 11,923,200 \text{ s}$. 
  $\lambda = \frac{0.693}{11,923,200} \approx 5.81 \times 10^{-8} \text{ s}^{-1}$.

**b)** 
Thời gian $t = 276 \text{ ngày} = 2 \times 138 \text{ ngày} = 2T$.
Sau 2 chu kì bán rã, khối lượng còn lại là:
$$m(2T) = \frac{m_0}{2^2} = \frac{10}{4} = 2.5 \text{ mg}.$$

**c)**
Khối lượng còn lại ở ngày 138 ($1T$) là: $m(1T) = 5 \text{ mg}$.
Khối lượng còn lại ở ngày 276 ($2T$) là: $m(2T) = 2.5 \text{ mg}$.
Khối lượng đã phân rã trong khoảng thời gian này: $\Delta m = 5 - 2.5 = 2.5 \text{ mg} = 2.5 \times 10^{-3} \text{ g}$.
Số mol Po phân rã: $n = \frac{2.5 \times 10^{-3}}{210} \text{ mol}$.
Số hạt nhân phân rã $\Delta N = n \times N_A = \left( \frac{2.5 \times 10^{-3}}{210} \right) \times (6.022 \times 10^{23}) \approx 7.17 \times 10^{18} \text{ hạt}$.

---

**Bài 2 (Problem 2):** 
Một mảnh gỗ cổ được tìm thấy trong một hang động khảo cổ. Người ta đo được độ phóng xạ của đồng vị $^{14}\text{C}$ trong mảnh gỗ này là 3.0 phân rã/phút/gam Carbon. Biết rằng độ phóng xạ của $^{14}\text{C}$ trong một mẫu gỗ mới chặt (còn sống) là 15.0 phân rã/phút/gam Carbon. Chu kì bán rã của $^{14}\text{C}$ là 5730 năm. Hãy xác định tuổi của mảnh gỗ cổ này.

*(An ancient piece of wood is found. Its C-14 activity is 3.0 decays/min/gram. A fresh wood sample has an activity of 15.0 decays/min/gram. Half-life of C-14 is 5730 years. Determine the age of the ancient wood.)*

**Hướng dẫn giải (Step-by-step Solution):**
Ta có định luật phóng xạ cho độ phóng xạ:
$$A(t) = A_0 \cdot 2^{-t/T}$$
Với:
- $A_0 = 15.0 \text{ (phân rã/phút/g)}$
- $A(t) = 3.0 \text{ (phân rã/phút/g)}$
- $T = 5730 \text{ năm}$

Lập tỉ số:
$$ \frac{A(t)}{A_0} = \frac{3.0}{15.0} = 0.2 = \frac{1}{5} $$
Mặt khác:
$$ 2^{-t/T} = 0.2 \Rightarrow 2^{t/T} = 5 $$
Lấy logarit hai vế (cơ số 2, hoặc ln):
$$ \ln\left(2^{t/T}\right) = \ln(5) \Rightarrow \frac{t}{T} \ln(2) = \ln(5) $$
$$ t = T \cdot \frac{\ln(5)}{\ln(2)} = 5730 \times \frac{1.6094}{0.6931} \approx 5730 \times 2.322 \approx 13,305 \text{ năm} $$
Vậy, mảnh gỗ có tuổi thọ khoảng 13,305 năm.

---

**Bài 3 (Problem 3):** 
Lò phản ứng phân hạch U-235 của một nhà máy điện hạt nhân có công suất phát điện là 1000 MW, với hiệu suất chuyển hóa năng lượng nhiệt thành điện năng là 33%. Mỗi phân hạch của U-235 tỏa ra năng lượng trung bình khoảng 200 MeV.
a) Tính công suất nhiệt (Thermal Power) thực tế do vùng lõi lò phản ứng sinh ra.
b) Tính số phân hạch xảy ra trong 1 giây. (Biết $1 \text{ eV} = 1.6 \times 10^{-19} \text{ J}$, $1 \text{ MeV} = 10^6 \text{ eV}$).

*(A U-235 fission reactor has an electrical power output of 1000 MW, with a thermal-to-electrical efficiency of 33%. Each fission yields 200 MeV. (a) Calculate the total thermal power of the reactor. (b) Calculate the number of fissions per second.)*

**Hướng dẫn giải (Step-by-step Solution):**
**a)**
Công suất phát điện $P_{\text{điện}} = 1000 \text{ MW} = 10^9 \text{ W (Joules/s)}$.
Hiệu suất $H = 33\% = 0.33$.
Công suất nhiệt do lõi lò sinh ra:
$$ P_{\text{nhiệt}} = \frac{P_{\text{điện}}}{H} = \frac{10^9}{0.33} \approx 3.03 \times 10^9 \text{ W} = 3030 \text{ MW} $$

**b)**
Năng lượng của một hạt nhân phân hạch tỏa ra tính bằng Joule:
$$ E_0 = 200 \text{ MeV} = 200 \times 10^6 \times 1.6 \times 10^{-19} \text{ J} = 3.2 \times 10^{-11} \text{ J} $$
Để sinh ra công suất nhiệt $P_{\text{nhiệt}}$ trong 1 giây, hệ thống cần sản xuất ra số Joule là $3.03 \times 10^9 \text{ J}$.
Số phản ứng phân hạch xảy ra trong 1 giây là:
$$ N_{\text{fission}} = \frac{P_{\text{nhiệt}}}{E_0} = \frac{3.03 \times 10^9}{3.2 \times 10^{-11}} \approx 9.47 \times 10^{19} \text{ (phân hạch / giây)} $$
Con số này cho thấy cần tới gần $10^{20}$ phản ứng mỗi giây để duy trì lò phản ứng hạt nhân ở quy mô thương mại.

---

## 9. Bảng Tiêu chí Đánh giá / Assessment Rubric (100-point scale)

Bảng tiêu chí dưới đây dùng để chấm điểm kết quả học tập và bài báo cáo thực hành của học sinh trong Tuần 7.
The rubric below is used to grade students' learning outcomes and lab reports in Week 7.

| Tiêu chí (Criteria) | Mức độ xuất sắc (Excellent: 90-100%) | Mức độ đạt (Proficient: 70-89%) | Mức độ cơ bản (Basic: 50-69%) | Cần cố gắng (Needs Improvement: <50%) | Điểm tối đa (Max Points) |
| :--- | :--- | :--- | :--- | :--- | :---: |
| **1. Lý thuyết (Theory Knowledge)** | Trình bày chính xác định luật $N(t)$, phân biệt rõ ràng 3 tia $\alpha, \beta, \gamma$. | Có hiểu biết tốt về định luật, sai sót nhỏ ở phần mô tả các tia. | Nêu được định luật nhưng chưa hiểu sâu, nhầm lẫn tính đâm xuyên của bức xạ. | Không thuộc định luật, không phân biệt được các loại tia bức xạ. | **20** |
| **2. Bài tập toán học (Problem Solving)** | Giải quyết hoàn hảo cả 3 bài tập khó, trình bày step-by-step logic, ghi rõ đơn vị. | Giải đúng đáp số nhưng bỏ sót vài bước lập luận hoặc lỗi làm tròn số nhỏ. | Giải đúng 1-2 bài, bối rối ở bài tập định tuổi C-14 hoặc lò phản ứng. | Trình bày lộn xộn, tính sai hoàn toàn, không đổi đúng đơn vị (MeV sang J). | **30** |
| **3. Lập trình (Python Coding)** | Chạy thành công mã nguồn, thay đổi thông số hợp lý, bình luận code chi tiết và hiểu rõ vòng lặp Monte Carlo. | Chạy thành công, có xuất biểu đồ, nhưng giải thích về cơ chế Monte Carlo chưa thật sự sâu. | Chạy được nhưng không điều chỉnh được thông số mô phỏng theo yêu cầu. | Code lỗi (Syntax Error), không cài đặt môi trường thành công, không có biểu đồ. | **20** |
| **4. Thực hành đo lường (Data Analysis)** | Thu thập dữ liệu tốt, vẽ đồ thị $\ln(A)$ theo $t$ chính xác, hồi quy tuyến tính chuẩn, tính đúng chu kì. | Vẽ đồ thị tương đối chính xác, tính toán độ dốc có sai số nhỏ. | Vẽ được đồ thị nhưng gặp khó khăn khi chuyển sang dạng hàm logarit. | Không thu thập dữ liệu, vẽ sai trục tọa độ, không tìm được hằng số $\lambda$. | **20** |
| **5. An toàn & Thái độ (Safety & Attitude)** | Áp dụng triệt để nguyên tắc ALARA trong thí nghiệm, thảo luận tích cực, nhóm làm việc hiệu quả. | Hiểu ALARA nhưng đôi lúc quên nguyên tắc về khoảng cách, tham gia nhóm tương đối. | Không chú ý lắm về an toàn, làm việc nhóm rời rạc. | Vi phạm nghiêm trọng nguyên tắc an toàn, không có tính kỉ luật. | **10** |

*Ghi chú (Note):* Điểm bài tập về nhà và thực hành sẽ được cộng dồn và chiếm 15% tổng điểm của toàn khóa học (Homework and practical grades will be aggregated and account for 15% of the total course grade).

---
*(End of Lesson Document - End of Week 7)*

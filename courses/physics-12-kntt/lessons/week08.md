# Tuần 8: Ứng Dụng Vật Lý Trong Chẩn Đoán Y Học / Week 8: Physics Applications in Medical Diagnostics

---

## 1. Mục Tiêu Bài Học / Learning Objectives

**Mục tiêu Tiếng Việt:**
- Hiểu các nguyên lý vật lý cơ bản đằng sau các phương pháp chẩn đoán hình ảnh y học hiện đại như tia X, CT Scan, Siêu âm, MRI, PET và SPECT.
- Nắm vững các công thức toán học mô tả sự suy giảm tia X, trở kháng âm trong siêu âm, và tần số Larmor trong MRI.
- Vận dụng các kiến thức này để giải quyết các bài toán định lượng và lập trình mô phỏng sự tương tác của bức xạ và sóng âm với mô sinh học.
- Đánh giá các rủi ro an toàn khi sử dụng bức xạ ion hóa và từ trường mạnh trong môi trường bệnh viện.

**English Objectives:**
- Understand the fundamental physical principles behind modern medical imaging modalities such as X-rays, CT Scans, Ultrasound, MRI, PET, and SPECT.
- Master the mathematical formulas describing X-ray attenuation, acoustic impedance in ultrasound, and Larmor frequency in MRI.
- Apply this knowledge to solve quantitative problems and program simulations of radiation and sound wave interactions with biological tissues.
- Evaluate the safety risks associated with the use of ionizing radiation and strong magnetic fields in a hospital environment.

---

## 2. Thiết Bị & Dụng Cụ / Lab Equipment

Để thực hiện các bài thực hành mô phỏng và thí nghiệm cơ bản trong bài học này, chúng ta cần chuẩn bị các thiết bị sau:
To perform the simulation labs and basic experiments in this lesson, we need to prepare the following equipment:

| STT / No. | Tên Thiết Bị / Equipment Name | Mô Tả / Description | Số Lượng / Qty | Đơn Giá (VND) / Unit Price | Tổng (VND) / Total |
| :---: | :--- | :--- | :---: | :---: | :---: |
| 1 | Máy tính cá nhân / PC or Laptop | Dùng để chạy mã Python mô phỏng / For running Python simulation code | 1 | 15,000,000 | 15,000,000 |
| 2 | Cảm biến ánh sáng / Light Sensor | Dùng cho thí nghiệm mô phỏng sự suy giảm bức xạ / Used for radiation attenuation simulation experiment | 1 | 350,000 | 350,000 |
| 3 | Nguồn sáng LED / LED Light Source | Đóng vai trò làm nguồn tia X mô phỏng / Acts as a simulated X-ray source | 1 | 150,000 | 150,000 |
| 4 | Tấm vật liệu hấp thụ (nhựa, thủy tinh) / Absorber plates (plastic, glass) | Đóng vai trò làm mô mềm và xương / Acts as soft tissue and bone | 10 | 25,000 | 250,000 |
| 5 | Thước kẹp / Caliper | Đo độ dày vật liệu / To measure material thickness | 1 | 200,000 | 200,000 |
| 6 | Arduino UNO R3 | Thu thập dữ liệu từ cảm biến / Data acquisition from sensors | 1 | 300,000 | 300,000 |
| **Tổng cộng / Total** | | | | | **16,250,000** |

---

## 3. Cảnh Báo An Toàn / Safety Warnings

> [!WARNING]
> **CẢNH BÁO AN TOÀN BỨC XẠ & TỪ TRƯỜNG / RADIATION & MAGNETIC FIELD SAFETY WARNINGS**
>
> **Tiếng Việt:**
> 1. **Bức xạ ion hóa (Tia X, CT, PET, SPECT):** Trong thực tế lâm sàng, các thiết bị này sử dụng bức xạ ion hóa cường độ cao có thể gây tổn thương DNA và tăng nguy cơ ung thư. Phải luôn tuân thủ nguyên tắc ALARA (As Low As Reasonably Achievable) - thời gian tiếp xúc ngắn nhất, khoảng cách xa nhất, và sử dụng vật liệu che chắn (chì) phù hợp. Trong phòng thí nghiệm trường học này, chúng ta CHỈ sử dụng ánh sáng khả kiến cường độ thấp để mô phỏng, KHÔNG sử dụng nguồn phóng xạ thật.
> 2. **Điện áp cao (High Voltage):** Ống tia X hoạt động ở điện áp rất cao (hàng chục đến hàng trăm kV). Không bao giờ tự ý tháo dỡ hoặc can thiệp vào các thiết bị y tế thực tế.
> 3. **Từ trường mạnh (MRI):** Máy MRI sử dụng siêu nam châm với từ trường cực mạnh (1.5 Tesla đến 7 Tesla hoặc hơn). Tuyệt đối không mang bất kỳ vật kim loại có từ tính (ferromagnetic) nào vào phòng MRI. Cảnh báo đối với những người có máy tạo nhịp tim (pacemakers) hoặc các mô cấy kim loại.
>
> **English:**
> 1. **Ionizing Radiation (X-rays, CT, PET, SPECT):** In clinical practice, these devices use high-intensity ionizing radiation that can cause DNA damage and increase cancer risk. Always follow the ALARA principle (As Low As Reasonably Achievable) - shortest exposure time, maximum distance, and appropriate shielding (lead). In this school laboratory, we ONLY use low-intensity visible light for simulations, NO actual radioactive sources are used.
> 2. **High Voltage:** X-ray tubes operate at very high voltages (tens to hundreds of kV). Never dismantle or tamper with actual medical devices.
> 3. **Strong Magnetic Fields (MRI):** MRI machines use superconducting magnets with extremely strong fields (1.5 Tesla to 7 Tesla or more). Strictly no ferromagnetic metal objects are allowed in the MRI room. Warnings apply for individuals with pacemakers or metallic implants.

---

## 4. Cơ Sở Lý Thuyết / Theoretical Background

### 4.1 Tia X và Sự suy giảm / X-rays and Attenuation

Tia X là sóng điện từ có bước sóng rất ngắn (từ $0.01$ nm đến $10$ nm) và năng lượng cao. Trong chẩn đoán y học, tia X được sử dụng để chụp hình cấu trúc bên trong cơ thể nhờ khả năng đâm xuyên qua các mô mềm và bị hấp thụ mạnh bởi các mô đặc như xương.

Sự suy giảm (attenuation) của chùm tia X khi đi qua vật chất được mô tả bởi định luật Beer-Lambert:
$$ I = I_0 \cdot e^{-\mu x} $$
Trong đó:
- $I$ là cường độ tia X sau khi đi qua vật liệu (Transmitted intensity).
- $I_0$ là cường độ tia X ban đầu (Incident intensity).
- $\mu$ là hệ số suy giảm tuyến tính (Linear attenuation coefficient), phụ thuộc vào năng lượng tia X và mật độ cũng như số hiệu nguyên tử của vật liệu.
- $x$ là độ dày của lớp vật liệu (Thickness of the material).

Mô xương chứa nhiều canxi (số hiệu nguyên tử $Z = 20$) nên có $\mu$ lớn hơn rất nhiều so với mô mềm (chủ yếu chứa carbon, hydro, oxy), dẫn đến việc xương hiện lên màu trắng trên phim X-quang, còn mô mềm có màu xám đen.

### 4.2 Chụp CT & Đơn vị Hounsfield / CT Scan & Hounsfield Unit

Chụp cắt lớp vi tính (Computed Tomography - CT) sử dụng tia X quay quanh cơ thể để tạo ra các hình ảnh cắt ngang (cross-sectional images). Bằng cách giải các hệ phương trình tuyến tính khổng lồ, máy tính sẽ tái tạo lại bản đồ hệ số suy giảm $\mu$ của các mô trong không gian 3 chiều.

Để chuẩn hóa hình ảnh CT, người ta sử dụng thang đo Hounsfield (Hounsfield Unit - HU):
$$ HU = 1000 \times \frac{\mu_{tissue} - \mu_{water}}{\mu_{water} - \mu_{air}} $$
Vì hệ số suy giảm của không khí xấp xỉ 0 ($\mu_{air} \approx 0$), công thức thường được viết gọn là:
$$ HU = 1000 \times \frac{\mu_{tissue} - \mu_{water}}{\mu_{water}} $$
Theo thang đo này:
- Nước (Water) có giá trị $HU = 0$.
- Không khí (Air) có giá trị $HU = -1000$.
- Xương đặc (Compact bone) có giá trị $HU$ từ $+1000$ đến $+3000$.
- Mô mỡ (Fat) có giá trị $HU$ từ $-100$ đến $-50$.

### 4.3 Siêu Âm & Trở Kháng Âm / Ultrasound & Acoustic Impedance

Siêu âm y tế sử dụng sóng âm có tần số cao (thường từ $1$ MHz đến $18$ MHz) để tạo hình ảnh. Hình ảnh được tạo ra dựa trên hiện tượng phản xạ (echo) của sóng âm tại ranh giới giữa các môi trường có trở kháng âm (Acoustic impedance) khác nhau.

Trở kháng âm $Z$ của một môi trường được định nghĩa là:
$$ Z = \rho \cdot v $$
Trong đó:
- $\rho$ là mật độ của môi trường (Density, $kg/m^3$).
- $v$ là vận tốc truyền âm trong môi trường (Speed of sound, $m/s$).

Khi sóng siêu âm truyền từ môi trường 1 (trở kháng $Z_1$) sang môi trường 2 (trở kháng $Z_2$), hệ số phản xạ (Reflection coefficient) $R$ được tính bằng tỷ số giữa cường độ sóng phản xạ $I_r$ và cường độ sóng tới $I_i$:
$$ R = \frac{I_r}{I_i} = \left( \frac{Z_2 - Z_1}{Z_2 + Z_1} \right)^2 $$
Nếu sự chênh lệch trở kháng giữa hai môi trường càng lớn, sóng bị phản xạ càng nhiều (ví dụ giữa mô mềm và xương, hoặc mô mềm và không khí). Đó là lý do tại sao người ta phải sử dụng gel siêu âm trên da bệnh nhân để loại bỏ lớp không khí, giảm thiểu sự phản xạ không mong muốn ngay trên bề mặt da.

Thời gian trễ của sóng phản xạ (Echo delay time) $\Delta t$ giúp xác định độ sâu $d$ của mô trường bên trong:
$$ d = \frac{v \cdot \Delta t}{2} $$
Hệ số 2 xuất hiện do sóng âm phải đi từ đầu dò đến mô đích rồi quay ngược trở lại đầu dò.

### 4.4 MRI & Tần số Larmor / MRI & Larmor Frequency

Hình ảnh cộng hưởng từ (Magnetic Resonance Imaging - MRI) dựa trên tính chất từ tính của hạt nhân nguyên tử, chủ yếu là hạt nhân Hydro (proton) có rất nhiều trong nước và mỡ của cơ thể.

Khi đặt cơ thể vào một từ trường tĩnh bên ngoài rất mạnh $B_0$, các moment từ của proton sẽ xếp hàng theo từ trường này và tiến động (precess) xung quanh trục của từ trường với một tần số góc gọi là tần số Larmor (Larmor Frequency), $\omega_0$:
$$ \omega_0 = \gamma \cdot B_0 $$
Hay viết theo tần số $f_0$:
$$ f_0 = \frac{\gamma}{2\pi} \cdot B_0 $$
Trong đó:
- $f_0$ là tần số Larmor (Hz hoặc MHz).
- $\gamma$ là tỷ số từ hồi (Gyromagnetic ratio). Đối với proton ($^1H$), $\frac{\gamma}{2\pi} \approx 42.58 \text{ MHz/T}$.
- $B_0$ là độ lớn của từ trường bên ngoài (Tesla, T).

Để tạo tín hiệu cộng hưởng, máy MRI sẽ phát một xung sóng vô tuyến (RF pulse) có tần số đúng bằng tần số Larmor để kích thích các proton. Khi ngừng phát xung RF, các proton sẽ từ từ quay trở lại trạng thái cân bằng ban đầu (relaxation) và phát ra các tín hiệu vô tuyến đặc trưng, từ đó máy tính tái tạo lại hình ảnh mô tả các tính chất T1, T2 của mô.

### 4.5 PET & SPECT / PET & SPECT

PET (Positron Emission Tomography) và SPECT (Single Photon Emission Computed Tomography) là kỹ thuật hình ảnh y học hạt nhân (nuclear medicine).
- **PET:** Sử dụng các đồng vị phóng xạ phát ra hạt positron ($\beta^+$). Khi positron vừa sinh ra, nó sẽ lập tức kết hợp với một electron trong cơ thể, xảy ra hiện tượng hủy cặp (annihilation). Khối lượng của hai hạt biến hoàn toàn thành năng lượng dưới dạng hai photon tia gamma, mỗi hạt có năng lượng chính xác là $511$ keV, bay ra theo hai hướng ngược nhau (góc xấp xỉ 180 độ). Các cảm biến xếp thành vòng tròn xung quanh bệnh nhân sẽ thu nhận đồng thời (coincidence detection) hai photon này để xác định vị trí của chất phóng xạ.
- **SPECT:** Sử dụng đồng vị phóng xạ phát ra trực tiếp một photon tia gamma (thường là Technetium-99m). Camera gamma sẽ xoay quanh bệnh nhân để thu nhận tín hiệu từ nhiều góc độ.

Hai kỹ thuật này cung cấp thông tin về **chức năng chuyển hóa** (metabolic function) của các cơ quan, rất hữu ích trong chẩn đoán ung thư (ví dụ: tế bào ung thư tiêu thụ glucose nhiều hơn tế bào bình thường nên sẽ tích tụ nhiều chất đánh dấu FDG trong PET).

---

## 5. Sơ Đồ Cấu Tạo Ống Tia X / X-ray Tube Schematic Diagram

Dưới đây là mô phỏng ASCII sơ đồ nguyên lý hoạt động của một ống phát tia X y tế chuẩn:
Below is an ASCII schematic illustrating the working principle of a standard medical X-ray tube:

```text
               +-------------------------------------------------+
               |             Glass/Metal Envelope (Vacuum)       |
               |                                                 |
         Filament Supply (Low Voltage)                           |
         +---+ |                                                 |
         |   | |                                                 |
 Cathode (-) | |    [Heated Tungsten Filament] => Emits Electrons|
 (Focusing   | |            (Thermionic Emission)                |
  Cup)       | |                   |                             |
         +---+ |                   | High Voltage Acceleration   |
               |                   V (~50 to 150 kV)             |
               |                   |                             |
               |                   V                             |
               |      +-------------------------+                |
               |      |                         |                | Anode Motor
               |      |      Rotating Anode     |================| (Rotates Anode
               |      | (Tungsten/Rhenium Target)                | to dissipate heat)
               |      +-------+                 |                |
               |               \                |                |
               |   X-rays produced\             |                |
               |   via Bremsstrahlung           |                |
               |   & Characteristic processes   |                |
               +-------------------\------------+----------------+
                                    \
                                     \ Useful X-ray beam
                                      \
                                    [Window / Filter]
                                        |
                                        V
                                 (Patient / Subject)
```

**Giải thích / Explanation:**
- **Cathode (Cực âm):** Gồm một sợi đốt bằng Tungsten. Khi có dòng điện chạy qua, sợi đốt nóng lên và phát xạ nhiệt điện tử (Thermionic emission). Cốc tiêu cự (Focusing cup) giúp hội tụ chùm electron.
- **High Voltage (Điện áp cao):** Chênh lệch điện áp cực lớn giữa Cathode và Anode gia tốc các electron đạt tốc độ rất cao.
- **Anode (Cực dương):** Electron đập vào bia Anode (thường là Tungsten). Động năng của electron bị hãm lại đột ngột, chuyển hóa thành tia X (bức xạ hãm - Bremsstrahlung) và một lượng lớn nhiệt.
- **Rotating Anode:** Vì 99% năng lượng chuyển hóa thành nhiệt và chỉ 1% thành tia X, Anode phải quay liên tục để phân tán nhiệt, tránh làm chảy bia kim loại.

---

## 6. Thực Hành: Mô Phỏng Sự Suy Giảm Tia X / Hands-on Experiment: Simulating X-ray Attenuation

### 6.1 Giới thiệu / Introduction
Vì lý do an toàn, chúng ta không thể sử dụng tia X thật trong lớp học. Thay vào đó, chúng ta sẽ sử dụng một nguồn sáng khả kiến (LED) và các tấm vật liệu bán trong suốt (ví dụ: các lớp nhựa mỏng) để mô phỏng định luật suy giảm Beer-Lambert.

### 6.2 Chuẩn bị / Preparation
1. Một nguồn sáng LED ổn định (đóng vai trò nguồn tia X $I_0$).
2. Một cảm biến ánh sáng (Light sensor) nối với Arduino hoặc một ứng dụng đo cường độ sáng trên smartphone (Lux meter).
3. Khoảng 10-15 tấm nhựa trong suốt cùng độ dày (đóng vai trò các lớp mô sinh học có hệ số suy giảm $\mu$). Thước kẹp để đo độ dày $x$ của mỗi tấm.

### 6.3 Quy trình thực hành / Procedure
**Bước 1 / Step 1:** Bật nguồn sáng LED trong phòng tối để giảm nhiễu ánh sáng môi trường.
**Bước 2 / Step 2:** Đặt cảm biến ánh sáng ở khoảng cách cố định (ví dụ 20 cm) đối diện nguồn sáng. Đọc và ghi lại cường độ sáng ban đầu $I_0$.
**Bước 3 / Step 3:** Đặt 1 tấm nhựa vào giữa nguồn sáng và cảm biến. Ghi lại số lớp vật liệu ($n=1$) và cường độ sáng đo được $I_1$.
**Bước 4 / Step 4:** Lần lượt tăng số tấm nhựa ($n=2, 3, 4, ...$), mỗi lần ghi lại giá trị cường độ tương ứng $I_n$. Đo độ dày của một tấm nhựa là $x_0$, độ dày tổng cộng sẽ là $x = n \cdot x_0$.
**Bước 5 / Step 5:** Nhập dữ liệu vào Excel hoặc Python. Tính giá trị $\ln(I_n)$.
**Bước 6 / Step 6:** Vẽ đồ thị sự phụ thuộc của $\ln(I_n)$ theo độ dày $x$. Dựa theo định luật Beer-Lambert: $\ln(I) = \ln(I_0) - \mu x$. Đồ thị sẽ là một đường thẳng có hệ số góc bằng $-\mu$. Từ đó tính được hệ số suy giảm $\mu$ của vật liệu mô phỏng.

---

## 7. Mã Nguồn Mô Phỏng (Python) / Python Simulation Code

Trong phần này, chúng ta sử dụng Python để mô phỏng và vẽ đồ thị các quá trình vật lý trong chẩn đoán y học.
In this section, we use Python to simulate and plot the physical processes in medical diagnostics.

### 7.1 Mô Phỏng Sự Suy Giảm Tia X / X-ray Attenuation Simulation

Đoạn mã sau vẽ đồ thị biểu diễn cường độ tia X truyền qua mô mềm và xương theo độ dày.
The following code plots the intensity of X-rays transmitted through soft tissue and bone as a function of thickness.

```python
import numpy as np
import matplotlib.pyplot as plt

# ==========================================
# Mô phỏng sự suy giảm tia X (X-ray Attenuation)
# ==========================================

# Cường độ tia X ban đầu (đơn vị tương đối)
I0 = 100.0

# Độ dày vật liệu từ 0 đến 10 cm (0.1 m)
x = np.linspace(0, 10, 500) # Đơn vị: cm

# Hệ số suy giảm tuyến tính giả định (1/cm) ở mức năng lượng khoảng 50 keV
mu_soft_tissue = 0.22  # Mô mềm (chủ yếu là nước)
mu_bone = 0.85         # Xương đặc

# Tính cường độ tia X truyền qua theo định luật Beer-Lambert
I_soft_tissue = I0 * np.exp(-mu_soft_tissue * x)
I_bone = I0 * np.exp(-mu_bone * x)

# Vẽ đồ thị
plt.figure(figsize=(10, 6))
plt.plot(x, I_soft_tissue, label=f'Mô mềm / Soft Tissue (μ = {mu_soft_tissue} cm⁻¹)', color='blue', linewidth=2)
plt.plot(x, I_bone, label=f'Xương / Bone (μ = {mu_bone} cm⁻¹)', color='red', linewidth=2)

plt.title('Sự Suy Giảm Tia X Trong Mô Sinh Học / X-ray Attenuation in Biological Tissues', fontsize=14)
plt.xlabel('Độ dày vật liệu / Material Thickness x (cm)', fontsize=12)
plt.ylabel('Cường độ truyền qua / Transmitted Intensity I(x) (%)', fontsize=12)
plt.grid(True, linestyle='--', alpha=0.7)
plt.legend(fontsize=12)
plt.yscale('log') # Trục Y theo thang logarit để dễ thấy đường thẳng

# Lưu đồ thị ra file (Tùy chọn)
# plt.savefig('xray_attenuation.png', dpi=300)
plt.show()

print("Mô phỏng thành công! Chú ý rằng trên thang logarit, định luật suy giảm theo hàm mũ trở thành đường thẳng.")
```

### 7.2 Tính Toán Thời Gian Trễ Siêu Âm / Ultrasound Echo Delay Calculation

Đoạn mã này mô phỏng máy siêu âm tính toán độ sâu của các ranh giới mô dựa trên thời gian trễ của sóng phản xạ.
This code simulates an ultrasound machine calculating the depth of tissue boundaries based on the echo delay time.

```python
# ==========================================
# Mô phỏng Tính Độ Sâu Bằng Siêu Âm (Ultrasound Depth Calculation)
# ==========================================

# Vận tốc truyền âm trung bình trong mô mềm (m/s)
# Average speed of sound in soft tissue
speed_of_sound_tissue = 1540.0 

# Thời gian trễ đo được bởi đầu dò siêu âm (đơn vị: microsecond - us)
# Mảng chứa thời gian dội lại từ các lớp ranh giới khác nhau
echo_times_us = [20, 55, 120, 200] 

print("KẾT QUẢ MÔ PHỎNG SIÊU ÂM / ULTRASOUND SIMULATION RESULTS")
print("-" * 60)
print(f"{'Tín hiệu dội số':<15} | {'Thời gian (us)':<15} | {'Độ sâu tính toán (cm)':<25}")
print("-" * 60)

for i, t_us in enumerate(echo_times_us):
    # Đổi microsecond ra giây
    t_sec = t_us * 1e-6
    
    # Tính độ sâu: d = (v * t) / 2
    depth_m = (speed_of_sound_tissue * t_sec) / 2.0
    
    # Đổi mét sang centimet
    depth_cm = depth_m * 100.0
    
    print(f"{i+1:<15} | {t_us:<15.1f} | {depth_cm:<25.3f}")

print("-" * 60)
print("Giải thích: Đầu dò phát sóng siêu âm. Sóng đi xuống mô, gặp ranh giới và phản xạ lại.")
print("Quãng đường sóng đi bằng 2 lần độ sâu (đi và về).")
```

---

## 8. Câu Hỏi Thảo Luận / Discussion Questions

**Câu 1 (Q1):** Tại sao trong kỹ thuật chụp X-quang phổi (Chest X-ray), vùng chứa không khí trong phổi lại có màu đen sẫm trên phim, trong khi xương sườn lại có màu trắng sáng?
*Why does the air-filled region of the lungs appear dark black on a chest X-ray film, while the ribs appear bright white?*

> **Trả lời (Answer):**
> Hình ảnh trên phim X-quang truyền thống là âm bản. Phần tia X xuyên qua cơ thể đập vào phim sẽ làm đen phim. Không khí trong phổi có mật độ rất thấp, hệ số suy giảm $\mu \approx 0$, nên tia X hầu như xuyên qua hoàn toàn, đánh vào phim với cường độ mạnh làm vùng đó bị đen sẫm. Ngược lại, xương sườn chứa canxi mật độ cao, hệ số suy giảm $\mu$ lớn, hấp thụ gần hết lượng tia X tới. Do đó, lượng tia X xuyên qua xương rất ít, không đủ làm đen phim, kết quả là vùng phim tương ứng với xương giữ được màu trắng sáng.

**Câu 2 (Q2):** Phân tích ý nghĩa của đơn vị Hounsfield (HU) trong kỹ thuật chụp CT Scan. Nếu một khối u đo được giá trị HU là -80, khối u đó khả năng cao chứa chất gì?
*Analyze the significance of the Hounsfield Unit (HU) in CT Scans. If a tumor measures an HU value of -80, what substance does it likely contain?*

> **Trả lời (Answer):**
> Thang đo HU dùng để chuẩn hóa mật độ mô học (radiodensity) trên ảnh CT. Giá trị HU của nước được gán chuẩn là 0, không khí là -1000. Dựa vào giá trị HU, bác sĩ có thể phân biệt chính xác bản chất của mô mà mắt thường khó phân biệt qua thang xám.
> Nếu một khối u có giá trị $HU = -80$, nó nằm trong khoảng của mô mỡ (Fat: -100 đến -50 HU). Do đó, khối u đó khả năng cao là một khối u mỡ lành tính (lipoma). Nếu nó chứa dịch mủ hoặc nước, HU sẽ xấp xỉ 0 đến 20; nếu nó bị canxi hóa, HU sẽ dương rất cao (> 100).

**Câu 3 (Q3):** Hãy giải thích tại sao bác sĩ siêu âm luôn phải bôi một lớp gel lên vùng da của bệnh nhân trước khi di chuyển đầu dò (transducer)?
*Explain why an ultrasound technician always applies a layer of gel to the patient's skin before moving the transducer?*

> **Trả lời (Answer):**
> Lý do xuất phát từ công thức hệ số phản xạ sóng âm: $R = \left( \frac{Z_2 - Z_1}{Z_2 + Z_1} \right)^2$.
> Trở kháng âm ($Z$) của không khí rất nhỏ so với trở kháng âm của da và mô mềm. Nếu không có lớp gel, giữa đầu dò và da sẽ có một lớp không khí mỏng. Sự chênh lệch trở kháng cực lớn giữa đầu dò/không khí và không khí/da sẽ làm cho gần như 99.9% sóng siêu âm bị phản xạ ngược lại ngay tại bề mặt da, không thể thâm nhập vào cơ thể. Lớp gel siêu âm đóng vai trò là một môi trường khớp nối trở kháng (impedance matching), có trở kháng xấp xỉ da người, giúp đẩy hết không khí ra ngoài và cho phép sóng âm truyền tối đa vào bên trong cơ thể.

**Câu 4 (Q4):** MRI và CT Scan đều là các phương pháp tạo ảnh cắt lớp 3D mạnh mẽ. Từ góc độ an toàn và nguyên lý vật lý, bạn sẽ ưu tiên chọn phương pháp nào để chẩn đoán tổn thương dây chằng ở đầu gối? Tại sao?
*MRI and CT Scans are both powerful 3D tomographic imaging methods. From a safety and physical principle perspective, which method would you prefer for diagnosing a knee ligament injury? Why?*

> **Trả lời (Answer):**
> Nên ưu tiên chọn MRI cho việc chẩn đoán tổn thương dây chằng ở đầu gối.
> 1. **Về nguyên lý vật lý:** CT Scan sử dụng tia X, rất hiệu quả để xem mô cứng (xương), nhưng độ tương phản mô mềm (soft tissue contrast) không cao. Dây chằng là mô mềm. Trong khi đó, MRI dựa trên sự cộng hưởng của các hạt nhân Hydro, rất dồi dào trong mô mềm và nước. Do đó, MRI mang lại độ phân giải và tương phản tuyệt vời để quan sát rõ gân, cơ, sụn, và dây chằng.
> 2. **Về an toàn:** CT Scan sử dụng bức xạ ion hóa (tia X) có khả năng gây đột biến tế bào. Ngược lại, MRI sử dụng từ trường và sóng vô tuyến (RF), hoàn toàn không chứa bức xạ ion hóa, an toàn hơn rất nhiều cho người bệnh, có thể chụp nhiều lần mà không lo nguy cơ tích lũy liều chiếu xạ.

**Câu 5 (Q5):** Kỹ thuật PET (Positron Emission Tomography) được gọi là kỹ thuật chụp ảnh "chức năng". Tại sao tín hiệu phát ra từ máy PET lại là hai tia gamma bay ngược chiều nhau 180 độ?
*PET is known as a "functional" imaging technique. Why does the signal emitted from a PET scan consist of two gamma rays traveling in exactly opposite directions (180 degrees)?*

> **Trả lời (Answer):**
> Bệnh nhân được tiêm một chất đồng vị phóng xạ phát positron (hạt phản vật chất của electron, $\beta^+$). Khi một positron được phát ra bên trong mô, nó di chuyển một đoạn rất ngắn và va chạm với một electron của cơ thể. Quá trình này gọi là sự hủy cặp (annihilation). Theo định luật bảo toàn động lượng, vì hệ electron-positron trước khi va chạm gần như đứng yên (động lượng tổng cộng $\approx 0$), nên hai photon tia gamma sinh ra sau đó phải bay về hai hướng hoàn toàn ngược nhau (180 độ) để tổng động lượng của chúng triệt tiêu. Cảm biến của PET ghi nhận sự xuất hiện đồng thời của cặp photon này, qua đó máy tính có thể vẽ được đường thẳng nối giữa hai cảm biến và xác định chính xác vị trí xảy ra sự hủy cặp bên trong cơ thể.

---

## 9. Bài Tập & Thực Hành Về Nhà / Homework & Practice Problems

### Bài 1: Tính Toán Sự Suy Giảm Tia X
Một chùm tia X hẹp đi qua một lớp mô dày $x = 4.0$ cm. Biết cường độ của chùm tia truyền qua chỉ còn lại $25\%$ so với cường độ ban đầu $I_0$.
a) Tính hệ số suy giảm tuyến tính $\mu$ của lớp mô này. (Đơn vị: $cm^{-1}$)
b) Để cường độ truyền qua giảm xuống chỉ còn $5\%$ so với ban đầu, lớp mô này cần có độ dày là bao nhiêu?

**Giải (Solution):**
**a)** Theo định luật Beer-Lambert: $I = I_0 \cdot e^{-\mu x}$
Ta có: $I = 0.25 I_0$ và $x = 4.0$ cm
$$ 0.25 I_0 = I_0 \cdot e^{-4.0 \mu} \implies 0.25 = e^{-4.0 \mu} $$
Lấy logarithm tự nhiên (ln) hai vế:
$$ \ln(0.25) = -4.0 \mu \implies \mu = \frac{-\ln(0.25)}{4.0} $$
Vì $\ln(0.25) = \ln(1/4) = -1.386$
$$ \mu = \frac{1.386}{4.0} = 0.3465 \text{ cm}^{-1} $$
*Đáp án a: $\mu = 0.3465 \text{ cm}^{-1}$*

**b)** Đặt $x'$ là độ dày cần tìm, ta cần $I' = 0.05 I_0$:
$$ 0.05 I_0 = I_0 \cdot e^{-\mu x'} \implies 0.05 = e^{-0.3465 x'} $$
$$ \ln(0.05) = -0.3465 x' \implies -2.9957 = -0.3465 x' $$
$$ x' = \frac{2.9957}{0.3465} \approx 8.64 \text{ cm} $$
*Đáp án b: Lớp mô cần dày khoảng 8.64 cm.*

### Bài 2: Hệ Số Phản Xạ Trong Siêu Âm
Một sóng siêu âm lan truyền từ cơ bắp (Muscle) sang xương (Bone). Biết mật độ ($\rho$) và vận tốc truyền âm ($v$) của các môi trường như sau:
- Cơ bắp: $\rho_1 = 1040 \text{ kg/m}^3$, $v_1 = 1580 \text{ m/s}$
- Xương: $\rho_2 = 1900 \text{ kg/m}^3$, $v_2 = 4080 \text{ m/s}$
a) Tính trở kháng âm $Z_1$ của cơ bắp và $Z_2$ của xương. (Đơn vị: $Rayl = \text{kg/(m}^2\cdot\text{s)}$)
b) Tính hệ số phản xạ (Reflection coefficient) $R$ khi sóng siêu âm đi từ cơ bắp sang xương. Bao nhiêu phần trăm năng lượng bị phản xạ lại?

**Giải (Solution):**
**a) Tính trở kháng âm:**
Trở kháng âm của cơ bắp:
$$ Z_1 = \rho_1 \cdot v_1 = 1040 \times 1580 = 1,643,200 \text{ Rayl} $$
Trở kháng âm của xương:
$$ Z_2 = \rho_2 \cdot v_2 = 1900 \times 4080 = 7,752,000 \text{ Rayl} $$
*Đáp án a: $Z_1 = 1.6432 \times 10^6 \text{ Rayl}$ ; $Z_2 = 7.752 \times 10^6 \text{ Rayl}$*

**b) Tính hệ số phản xạ $R$:**
$$ R = \left( \frac{Z_2 - Z_1}{Z_2 + Z_1} \right)^2 $$
$$ R = \left( \frac{7,752,000 - 1,643,200}{7,752,000 + 1,643,200} \right)^2 = \left( \frac{6,108,800}{9,395,200} \right)^2 \approx (0.6502)^2 \approx 0.4227 $$
Điều này có nghĩa là $42.27\%$ cường độ sóng siêu âm sẽ bị phản xạ mạnh tại ranh giới giữa cơ và xương. Đó là lý do tại sao sóng siêu âm khó thâm nhập xuyên qua các lớp xương dày (như hộp sọ), tạo ra "bóng cản âm" (acoustic shadowing) ngay phía sau xương.

### Bài 3: Tần Số Larmor Trong Máy MRI
Máy chụp cộng hưởng từ (MRI) phổ biến trong các bệnh viện hiện nay sử dụng từ trường tĩnh $B_0 = 1.5$ Tesla.
Biết tỷ số từ hồi (Gyromagnetic ratio) đối với hạt nhân nguyên tử Hydro ($^1H$) là $\frac{\gamma}{2\pi} = 42.58 \text{ MHz/Tesla}$.
a) Tính tần số Larmor của hạt nhân Hydro trong máy MRI $1.5$ T.
b) Nếu bệnh viện nâng cấp lên máy MRI siêu cao tần $3.0$ T, tần số sóng vô tuyến (RF) cần phát ra để tạo hiện tượng cộng hưởng là bao nhiêu?

**Giải (Solution):**
**a)** Tần số Larmor $f_0$ được tính theo công thức:
$$ f_0 = \frac{\gamma}{2\pi} \cdot B_0 $$
$$ f_0 = 42.58 \text{ MHz/T} \times 1.5 \text{ T} = 63.87 \text{ MHz} $$
*Đáp án a: Máy cần phát xung RF có tần số 63.87 MHz (nằm trong dải sóng vô tuyến FM).*

**b)** Tương tự với $B_0 = 3.0$ T:
$$ f_0' = \frac{\gamma}{2\pi} \cdot B_0' = 42.58 \times 3.0 = 127.74 \text{ MHz} $$
Việc tăng cường độ từ trường $B_0$ gấp đôi sẽ làm tần số Larmor tăng gấp đôi. Từ trường cao hơn giúp tín hiệu cộng hưởng thu được mạnh hơn, cho ra chất lượng hình ảnh sắc nét hơn (SNR lớn hơn) với thời gian chụp nhanh hơn.

### Bài 4: Tính Độ Sâu Siêu Âm
Trong lúc siêu âm ổ bụng một thai phụ, đầu dò siêu âm phát ra một xung tín hiệu và nhận được sóng phản xạ từ tim thai nhi sau một khoảng thời gian $\Delta t = 130 \mu s$ (micro giây).
Biết vận tốc truyền sóng siêu âm trung bình trong môi trường dịch ối và mô mềm xung quanh thai nhi là $v \approx 1540$ m/s.
Hãy tính khoảng cách từ bề mặt đầu dò (trên da bụng mẹ) đến tim thai nhi (tính bằng cm).

**Giải (Solution):**
Thời gian trễ $\Delta t = 130 \mu s = 130 \times 10^{-6}$ s.
Tổng quãng đường sóng âm đi và về là $2d$. Do đó khoảng cách $d$ là:
$$ d = \frac{v \cdot \Delta t}{2} $$
$$ d = \frac{1540 \times 130 \times 10^{-6}}{2} $$
$$ d = \frac{0.2002}{2} = 0.1001 \text{ m} $$
Quy đổi sang cm:
$$ d = 0.1001 \text{ m} = 10.01 \text{ cm} $$
*Đáp án: Khoảng cách từ đầu dò đến tim thai nhi là khoảng 10.01 cm.*

---

## 10. Tiêu Chí Đánh Giá (Rubric) / Assessment Rubric

Giáo viên sử dụng bảng sau để chấm điểm báo cáo thực hành và bài tập về nhà của học sinh.
Teachers use the following table to grade students' lab reports and homework assignments. Thang điểm 100 / 100-point scale.

| Tiêu Chí / Criteria | Xuất Sắc / Excellent (90-100) | Khá Tốt / Proficient (75-89) | Đạt / Basic (60-74) | Cần Cố Gắng / Needs Improvement (<60) |
| :--- | :--- | :--- | :--- | :--- |
| **Kiến Thức Lý Thuyết (30%)**<br>*Theoretical Knowledge* | Giải thích chính xác, trọn vẹn, sử dụng đúng thuật ngữ vật lý y khoa (Hounsfield, Larmor). Hiểu sâu về bản chất bức xạ. | Giải thích đúng nhưng đôi chỗ còn thiếu chi tiết hoặc chưa sâu sắc. | Có hiểu biết cơ bản, mắc một vài lỗi khái niệm nhỏ. | Không giải thích đúng bản chất vật lý của các phương pháp tạo ảnh. |
| **Thực Hành Mô Phỏng & Lập Trình (30%)**<br>*Simulation & Programming* | Mã Python chạy hoàn hảo, đồ thị đẹp, có chú thích rõ ràng. Phân tích kết quả logic. | Mã chạy được, đồ thị đầy đủ nhưng thiếu chú thích hoặc định dạng chưa đẹp. | Code có lỗi nhỏ nhưng chỉnh sửa được, có nỗ lực vẽ đồ thị. | Không hoàn thành mã mô phỏng hoặc code sai hoàn toàn logic thuật toán. |
| **Bài Tập Tính Toán (20%)**<br>*Calculation Problems* | Giải đúng 100% các bài tập. Các bước làm logic, rõ ràng, chú ý đến đơn vị đo lường. | Có lỗi nhỏ về tính toán hoặc sai sót trong đổi đơn vị, nhưng phương pháp đúng. | Đúng một nửa số lượng bài tập, cần trợ giúp nhiều. | Làm sai phương pháp, kết quả sai hoàn toàn. |
| **Nhận Thức Về An Toàn (10%)**<br>*Safety Awareness* | Trình bày xuất sắc tầm quan trọng của ALARA và an toàn phòng từ trường MRI. | Hiểu và nêu được các biện pháp an toàn cốt lõi. | Có đề cập đến an toàn nhưng chung chung. | Bỏ qua hoàn toàn yếu tố an toàn bức xạ và từ trường. |
| **Báo Cáo & Trình Bày (10%)**<br>*Report Formatting* | Bố cục logic, song ngữ Anh-Việt chuẩn xác, sử dụng LaTeX markdown đẹp. | Trình bày sạch sẽ, lỗi chính tả/ngữ pháp rất ít. | Bố cục lộn xộn, đọc hiểu khó khăn, sai lỗi chính tả nhiều. | Cẩu thả, copy-paste không chỉnh sửa. |

---

*End of Week 8 Lesson File. Chúc các em học sinh có những trải nghiệm khám phá thú vị với Vật Lý Y Khoa!*

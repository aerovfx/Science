# Tuần 6: Cấu Trúc Hạt Nhân, Năng Lượng Liên Kết & Phản Ứng Hạt Nhân / Week 6: Nuclear Structure, Binding Energy & Nuclear Reactions

## Mục tiêu bài học (Learning Objectives)

**Tiếng Việt:**
1. **Kiến thức:** Hiểu rõ cấu tạo của hạt nhân nguyên tử (proton, neutron, nucleon), đồng vị. Trình bày được khái niệm lực hạt nhân, độ hụt khối, năng lượng liên kết và năng lượng liên kết riêng. Phân biệt được phản ứng phân hạch và phản ứng nhiệt hạch.
2. **Kỹ năng:** Tính toán được độ hụt khối và năng lượng liên kết của một hạt nhân. Vận dụng định luật bảo toàn số khối và bảo toàn điện tích để viết phương trình phản ứng hạt nhân. Lập trình mô phỏng sự phụ thuộc của năng lượng liên kết riêng vào số khối và mô phỏng phản ứng dây chuyền.
3. **Thái độ:** Nhận thức được tầm quan trọng của năng lượng hạt nhân trong đời sống và những rủi ro đi kèm. Tuân thủ nghiêm ngặt các nguyên tắc an toàn bức xạ (ALARA).

**English:**
1. **Knowledge:** Understand the structure of atomic nuclei (protons, neutrons, nucleons), isotopes. Explain the concepts of nuclear force, mass defect, binding energy, and binding energy per nucleon. Distinguish between nuclear fission and nuclear fusion reactions.
2. **Skills:** Calculate the mass defect and binding energy of a nucleus. Apply the laws of conservation of mass number and electric charge to write nuclear reaction equations. Program simulations of binding energy per nucleon versus mass number and Monte Carlo simulations of chain reactions.
3. **Attitude:** Recognize the importance of nuclear energy in daily life and its associated risks. Strictly adhere to radiation safety principles (ALARA).

---

## Bảng Thiết Bị & Dụng Cụ (Lab Equipment & Materials Table)

Để thực hiện các mô phỏng và thực hành lập trình trong bài học này, học sinh cần chuẩn bị các thiết bị sau.
*To perform the simulations and programming practices in this lesson, students need to prepare the following equipment.*

| Tên thiết bị (Equipment Name) | Mô tả & Cấu hình (Description & Specs) | Số lượng (Qty) | Đơn giá ước tính (Est. Price VND) | Mức độ khả dụng (Availability) |
| :--- | :--- | :---: | :--- | :--- |
| Máy tính cá nhân (Laptop/Desktop PC) | CPU Core i3/Ryzen 3 trở lên, RAM 8GB, ổ cứng SSD 256GB. Chạy Windows 10/11, macOS, hoặc Linux. | 1 | 8,000,000 - 15,000,000 | Có sẵn (Sẵn sàng tại nhà hoặc phòng máy trường học) / Readily available |
| Môi trường lập trình (IDE/Code Editor) | Cài đặt VS Code, Jupyter Notebook hoặc sử dụng Google Colab trực tuyến. | 1 | Miễn phí (Free) | Tải xuống từ internet / Download from internet |
| Python 3 & Libraries | Cài đặt Python 3.9+ cùng các thư viện: `numpy`, `matplotlib`, `scipy`. | 1 | Miễn phí (Free) | Tải xuống từ internet / Download from internet |
| Bảng tuần hoàn các nguyên tố hóa học | Bản in giấy chất lượng cao hoặc phiên bản số tương tác (Interactive Periodic Table) | 1 | 20,000 - 50,000 | Nhà sách, cửa hàng văn phòng phẩm / Bookstores, stationery shops |
| Máy tính bỏ túi (Scientific Calculator) | Casio fx-580VN X, fx-880BTG hoặc tương đương để tính toán lý thuyết | 1 | 500,000 - 750,000 | Nhà sách, cửa hàng điện máy / Bookstores, electronics stores |

---

## Cảnh Báo An Toàn (Safety Warnings)

**Tiếng Việt:**
**CẢNH BÁO: AN TOÀN BỨC XẠ (RADIATION SAFETY)**
Trong thực tế, việc làm việc với các chất phóng xạ yêu cầu các biện pháp an toàn vô cùng nghiêm ngặt.
- **Nguyên tắc ALARA (As Low As Reasonably Achievable):** Cố gắng giảm thiểu liều lượng bức xạ tiếp xúc xuống mức thấp nhất có thể.
- **Thời gian (Time):** Giảm thiểu thời gian tiếp xúc với nguồn phóng xạ.
- **Khoảng cách (Distance):** Tăng tối đa khoảng cách từ nguồn phóng xạ đến cơ thể (liều lượng tỉ lệ nghịch với bình phương khoảng cách).
- **Che chắn (Shielding):** Sử dụng các vật liệu che chắn phù hợp (chì, bê tông, nước) giữa cơ thể và nguồn bức xạ.
*Lưu ý:* Trong phạm vi bài học này, chúng ta chỉ thực hiện **mô phỏng trên máy tính (Computer Simulation)**. Không có rủi ro phơi nhiễm bức xạ thực tế. Tuy nhiên, việc hiểu rõ các nguyên tắc an toàn là bắt buộc đối với mọi học sinh học về vật lí hạt nhân.

**English:**
**WARNING: RADIATION SAFETY**
In reality, working with radioactive materials requires extremely strict safety measures.
- **ALARA Principle (As Low As Reasonably Achievable):** Attempt to minimize radiation dose exposure as much as possible.
- **Time:** Minimize the time of exposure to the radioactive source.
- **Distance:** Maximize the distance from the radiation source to the body (dose is inversely proportional to the square of the distance).
- **Shielding:** Use appropriate shielding materials (lead, concrete, water) between the body and the radiation source.
*Note:* Within the scope of this lesson, we only perform **computer simulations**. There is no actual risk of radiation exposure. However, understanding safety principles is mandatory for all students studying nuclear physics.

---

## Lý Thuyết Cơ Bản (Core Theory)

### 1. Cấu Trúc Hạt Nhân (Nuclear Structure)

**Tiếng Việt:**
Hạt nhân nguyên tử được cấu tạo từ các nucleon, bao gồm proton và neutron.
- Ký hiệu hạt nhân: ${}_{Z}^{A}\text{X}$
  - $X$: Ký hiệu hóa học của nguyên tố.
  - $Z$: Nguyên tử số (Số proton).
  - $A$: Số khối (Tổng số nucleon = số proton + số neutron).
  - Số neutron $N = A - Z$.

**English:**
The atomic nucleus is composed of nucleons, which include protons and neutrons.
- Nuclear symbol: ${}_{Z}^{A}\text{X}$
  - $X$: Chemical symbol of the element.
  - $Z$: Atomic number (Number of protons).
  - $A$: Mass number (Total number of nucleons = number of protons + number of neutrons).
  - Number of neutrons $N = A - Z$.

### 2. Độ Hụt Khối (Mass Defect)

**Tiếng Việt:**
Khối lượng của một hạt nhân luôn nhỏ hơn tổng khối lượng của các nucleon tạo thành nó khi ở trạng thái tự do. Độ chênh lệch này gọi là độ hụt khối ($\Delta m$).
Công thức tính độ hụt khối:
$$\Delta m = [Z \cdot m_p + (A - Z) \cdot m_n] - m_X$$
Trong đó:
- $m_p \approx 1.00728 \text{ u}$ (khối lượng proton)
- $m_n \approx 1.00866 \text{ u}$ (khối lượng neutron)
- $m_X$ là khối lượng thực tế của hạt nhân.
- $1 \text{ u} \approx 931.5 \text{ MeV/c}^2$

**English:**
The mass of a nucleus is always less than the total mass of its constituent nucleons when they are in a free state. This difference is called the mass defect ($\Delta m$).
Formula for mass defect:
$$\Delta m = [Z \cdot m_p + (A - Z) \cdot m_n] - m_X$$
Where:
- $m_p \approx 1.00728 \text{ u}$ (mass of a proton)
- $m_n \approx 1.00866 \text{ u}$ (mass of a neutron)
- $m_X$ is the actual mass of the nucleus.
- $1 \text{ u} \approx 931.5 \text{ MeV/c}^2$

### 3. Năng Lượng Liên Kết & Hệ Thức Einstein (Binding Energy & Einstein's Equation)

**Tiếng Việt:**
Theo hệ thức lượng của Einstein, khối lượng và năng lượng tương đương nhau: $E = mc^2$.
Năng lượng liên kết ($E_{lk}$) là năng lượng tỏa ra khi các nucleon liên kết tạo thành hạt nhân, hoặc năng lượng cần cung cấp để phá vỡ hạt nhân thành các nucleon riêng rẽ.
$$E_{lk} = \Delta m \cdot c^2 = ([Z \cdot m_p + (A - Z) \cdot m_n] - m_X) \cdot c^2$$

Năng lượng liên kết riêng ($\varepsilon$) là năng lượng liên kết tính trên một nucleon. Hạt nhân có năng lượng liên kết riêng càng lớn thì càng bền vững (các hạt nhân trung bình có số khối $50 < A < 90$ thường bền vững nhất, ví dụ Sắt ${}^{56}_{26}\text{Fe}$).
$$\varepsilon = \frac{E_{lk}}{A}$$

**English:**
According to Einstein's mass-energy equivalence relation: $E = mc^2$.
Binding energy ($E_{lk}$) is the energy released when nucleons combine to form a nucleus, or the energy required to break a nucleus apart into its constituent nucleons.
$$E_{lk} = \Delta m \cdot c^2 = ([Z \cdot m_p + (A - Z) \cdot m_n] - m_X) \cdot c^2$$

Binding energy per nucleon ($\varepsilon$) is the binding energy divided by the total number of nucleons. The greater the binding energy per nucleon, the more stable the nucleus (medium nuclei with mass number $50 < A < 90$ are typically the most stable, for example, Iron ${}^{56}_{26}\text{Fe}$).
$$\varepsilon = \frac{E_{lk}}{A}$$

### 4. Phản Ứng Hạt Nhân (Nuclear Reactions)

**Tiếng Việt:**
Phản ứng hạt nhân là quá trình biến đổi hạt nhân nguyên tử. Có hai loại chính thường được nghiên cứu sinh năng lượng:
1. **Phân hạch (Fission):** Một hạt nhân nặng (ví dụ U-235, Pu-239) vỡ thành hai hạt nhân trung bình, đồng thời giải phóng neutron và năng lượng khổng lồ.
   ${}^{235}_{92}\text{U} + {}^{1}_{0}\text{n} \rightarrow {}^{144}_{56}\text{Ba} + {}^{89}_{36}\text{Kr} + 3{}^{1}_{0}\text{n} + 200\text{ MeV}$
2. **Nhiệt hạch (Fusion):** Hai hạt nhân nhẹ (ví dụ Deuterium, Tritium) kết hợp lại thành một hạt nhân nặng hơn ở nhiệt độ rất cao (hàng chục triệu độ), giải phóng năng lượng.
   ${}^{2}_{1}\text{D} + {}^{3}_{1}\text{T} \rightarrow {}^{4}_{2}\text{He} + {}^{1}_{0}\text{n} + 17.6\text{ MeV}$

**English:**
A nuclear reaction is a process in which the nucleus of an atom is altered. There are two main energy-producing types commonly studied:
1. **Nuclear Fission:** A heavy nucleus (e.g., U-235, Pu-239) splits into two medium nuclei, simultaneously releasing neutrons and immense energy.
   ${}^{235}_{92}\text{U} + {}^{1}_{0}\text{n} \rightarrow {}^{144}_{56}\text{Ba} + {}^{89}_{36}\text{Kr} + 3{}^{1}_{0}\text{n} + 200\text{ MeV}$
2. **Nuclear Fusion:** Two light nuclei (e.g., Deuterium, Tritium) combine to form a heavier nucleus at extremely high temperatures (tens of millions of degrees), releasing energy.
   ${}^{2}_{1}\text{D} + {}^{3}_{1}\text{T} \rightarrow {}^{4}_{2}\text{He} + {}^{1}_{0}\text{n} + 17.6\text{ MeV}$

---

## Sơ Đồ Khái Niệm (Concept Diagrams)

### Biểu đồ phân rã dây chuyền (Fission Chain Reaction)

```text
       (n) ---> [ U-235 ] ---> (Fission Fragment 1) + (Fission Fragment 2) + Energy
                    |
                    +---> (n) ---> [ U-235 ] ---> Fragments + Energy + (n) + (n) + (n)
                    |
                    +---> (n) ---> [ U-235 ] ---> Fragments + Energy + (n) + (n) + (n)
                    |
                    +---> (n) ---> (lost or absorbed by non-fissile material)
```

*Trong phản ứng dây chuyền, mỗi lần phân hạch U-235 sinh ra trung bình 2.5 neutron. Nếu hệ số nhân neutron $k \ge 1$, phản ứng sẽ tự duy trì hoặc bùng nổ.*
*In a chain reaction, each U-235 fission produces an average of 2.5 neutrons. If the neutron multiplication factor $k \ge 1$, the reaction becomes self-sustaining or explosive.*

---

## Thực Hành Python (Python Hands-on Experiments)

### Hoạt động 1: Đường cong Năng Lượng Liên Kết Riêng (Binding Energy per Nucleon Curve)

**Mô tả:** Lập trình Python để vẽ đồ thị sự phụ thuộc của năng lượng liên kết riêng vào số khối A. Đồ thị này giải thích tại sao sự phân hạch và nhiệt hạch lại tỏa ra năng lượng.
**Description:** Write a Python program to plot the binding energy per nucleon versus mass number A. This graph explains why both nuclear fission and fusion release energy.

**Mã nguồn Python (Python Source Code): `binding_energy_curve.py`**

```python
import numpy as np
import matplotlib.pyplot as plt

# Khối lượng của proton và neutron (đơn vị u)
# Mass of proton and neutron in atomic mass units (u)
m_p = 1.00727647
m_n = 1.00866492
c2 = 931.5 # 1 u = 931.5 MeV/c^2

# Dữ liệu hạt nhân (Nuclear data) - Dictionary: Tên hạt nhân: (Z, A, Khối lượng hạt nhân nguyên tử m_X)
# Dữ liệu khối lượng tham khảo (Approximate mass values for demonstration)
nuclei = {
    '2H': (1, 2, 2.014102),
    '3H': (1, 3, 3.016049),
    '4He': (2, 4, 4.002602),
    '7Li': (3, 7, 7.016004),
    '12C': (6, 12, 12.000000),
    '16O': (8, 16, 15.994915),
    '56Fe': (26, 56, 55.934937),
    '84Kr': (36, 84, 83.911507),
    '133Cs': (55, 133, 132.905452),
    '197Au': (79, 197, 196.966569),
    '235U': (92, 235, 235.043930),
    '238U': (92, 238, 238.050788)
}

A_list = []
BE_per_nucleon_list = []
labels = []

for name, (Z, A, m_atom) in nuclei.items():
    N = A - Z
    # Khối lượng electron m_e ~ 0.0005486 u
    m_e = 0.0005486
    # Tính khối lượng hạt nhân (Nuclear mass)
    m_nucleus = m_atom - Z * m_e 
    
    # Độ hụt khối (Mass defect)
    delta_m = (Z * m_p + N * m_n) - m_nucleus
    
    # Năng lượng liên kết (Binding energy in MeV)
    BE = delta_m * c2
    
    # Năng lượng liên kết riêng (Binding energy per nucleon)
    BE_per_nucleon = BE / A
    
    A_list.append(A)
    BE_per_nucleon_list.append(BE_per_nucleon)
    labels.append(name)
    
    print(f"Hạt nhân (Nucleus) {name:4s}: A={A:3d}, E_lk = {BE:7.2f} MeV, E_lk/A = {BE_per_nucleon:5.2f} MeV/nucleon")

# Vẽ đồ thị (Plotting)
plt.figure(figsize=(10, 6))
plt.plot(A_list, BE_per_nucleon_list, marker='o', linestyle='-', color='b', markersize=6)

# Thêm chú thích cho từng điểm (Annotate points)
for i, txt in enumerate(labels):
    plt.annotate(txt, (A_list[i], BE_per_nucleon_list[i]), textcoords="offset points", xytext=(0,10), ha='center', fontsize=9)

plt.title('Đường Cong Năng Lượng Liên Kết Riêng / Binding Energy per Nucleon Curve', fontsize=14)
plt.xlabel('Số Khối (Mass Number) A', fontsize=12)
plt.ylabel('Năng Lượng Liên Kết Riêng (E_lk/A) [MeV]', fontsize=12)
plt.grid(True, linestyle='--', alpha=0.7)
plt.axvline(x=56, color='r', linestyle='--', label='Bền vững nhất (Most stable) ~ Fe-56')
plt.legend()
plt.tight_layout()
plt.show()
```

### Hoạt động 2: Mô phỏng Monte Carlo phản ứng phân hạch dây chuyền (Monte Carlo Simulation of Chain Reaction)

**Mô tả:** Viết script Python để mô phỏng một phản ứng dây chuyền cơ bản. Giả sử ban đầu có 1 hạt nhân U-235 phân hạch, mỗi lần phân hạch sinh ra $k$ neutron. Tùy thuộc vào giá trị của $k$, hệ thống sẽ tắt dần, duy trì ổn định, hoặc bùng nổ.
**Description:** Write a Python script to simulate a basic chain reaction. Suppose initially 1 U-235 nucleus fissions, producing $k$ neutrons per fission. Depending on the value of $k$, the system will die out, maintain steadily, or explode.

**Mã nguồn Python (Python Source Code): `chain_reaction_sim.py`**

```python
import matplotlib.pyplot as plt
import numpy as np

def simulate_chain_reaction(initial_neutrons, k_factor, generations):
    """
    Mô phỏng sự tăng trưởng số lượng neutron qua các thế hệ.
    Simulates the growth of neutron population over generations.
    
    initial_neutrons: Số lượng neutron khởi đầu (Initial neutrons).
    k_factor: Hệ số nhân neutron (Neutron multiplication factor).
    generations: Số thế hệ phân hạch (Number of fission generations).
    """
    neutron_count = [initial_neutrons]
    current_neutrons = initial_neutrons
    
    for gen in range(1, generations + 1):
        # Tính số neutron thế hệ tiếp theo (Calculate next generation neutrons)
        # Sử dụng phân phối Poisson để mô phỏng tính ngẫu nhiên của số n sinh ra
        # Using Poisson distribution to simulate randomness
        next_gen_neutrons = np.random.poisson(current_neutrons * k_factor)
        neutron_count.append(next_gen_neutrons)
        current_neutrons = next_gen_neutrons
        
        # Ngăn chặn tràn bộ nhớ nếu số lượng quá lớn
        if current_neutrons > 1e9:
            print(f"Cảnh báo: Bùng nổ hạt nhân tại thế hệ {gen}!")
            break
            
    return neutron_count

# Cấu hình thông số mô phỏng (Simulation parameters)
generations = 20
initial_n = 10

# Các kịch bản khác nhau (Different scenarios)
# k < 1: Phản ứng tắt dần (Subcritical)
subcritical = simulate_chain_reaction(initial_n, 0.8, generations)
# k = 1: Phản ứng duy trì ổn định, lò phản ứng hạt nhân (Critical)
critical = simulate_chain_reaction(initial_n, 1.0, generations)
# k > 1: Phản ứng bùng nổ, bom hạt nhân (Supercritical)
supercritical = simulate_chain_reaction(initial_n, 1.3, generations)

# Vẽ đồ thị kết quả (Plotting results)
plt.figure(figsize=(10, 6))
plt.plot(subcritical, marker='o', label='Subcritical (k=0.8) - Tắt dần', color='green')
plt.plot(critical, marker='s', label='Critical (k=1.0) - Ổn định', color='blue')
plt.plot(supercritical, marker='^', label='Supercritical (k=1.3) - Bùng nổ', color='red')

plt.title('Mô Phỏng Phản Ứng Dây Chuyền / Chain Reaction Simulation', fontsize=14)
plt.xlabel('Thế hệ phân hạch (Generation)', fontsize=12)
plt.ylabel('Số lượng Neutron (Neutron count)', fontsize=12)
plt.yscale('log') # Sử dụng thang logarit vì sự bùng nổ theo hàm mũ (Log scale for exponential growth)
plt.grid(True, which="both", ls="--", alpha=0.5)
plt.legend()
plt.tight_layout()
plt.show()
```

---

## Câu Hỏi Thảo Luận (Discussion Questions)

**Câu 1 (Q1):** Tại sao hạt nhân sắt (Fe-56) lại được coi là hạt nhân bền vững nhất trong tự nhiên? (Why is the iron nucleus (Fe-56) considered the most stable nucleus in nature?)
> **Gợi ý trả lời (Hint):** Vì Fe-56 có năng lượng liên kết riêng lớn nhất (khoảng 8.8 MeV/nucleon). Điều này có nghĩa là trung bình cần nhiều năng lượng nhất để bứt một nucleon ra khỏi hạt nhân Fe-56. Cả các nguyên tố nhẹ (phản ứng nhiệt hạch) và các nguyên tố nặng (phản ứng phân hạch) đều có xu hướng biến đổi để tạo thành các hạt nhân có số khối gần với Fe.

**Câu 2 (Q2):** Phân biệt khối lượng hạt nhân nguyên tử và khối lượng nguyên tử. Trong công thức độ hụt khối, tại sao đôi khi người ta sử dụng khối lượng nguyên tử? (Distinguish between nuclear mass and atomic mass. In the mass defect formula, why is atomic mass sometimes used?)
> **Gợi ý trả lời (Hint):** Khối lượng nguyên tử bao gồm cả khối lượng hạt nhân và khối lượng của đám mây electron xung quanh. Trong vật lí hạt nhân, khối lượng electron rất nhỏ ($m_e \approx 0.00055 \text{ u}$) nên đôi khi được bỏ qua, hoặc được cộng vào cả hai vế của phương trình phản ứng để triệt tiêu nhau, giúp sử dụng khối lượng nguyên tử (dễ tra cứu hơn) thay vì khối lượng hạt nhân để tính độ hụt khối.

**Câu 3 (Q3):** Giải thích khái niệm "Hệ số nhân neutron" (k) trong lò phản ứng hạt nhân. Ý nghĩa vật lý của các trường hợp k < 1, k = 1, và k > 1 là gì? (Explain the concept of "Neutron multiplication factor" (k) in a nuclear reactor. What are the physical meanings of k < 1, k = 1, and k > 1?)
> **Gợi ý trả lời (Hint):** Hệ số nhân neutron $k$ là tỉ số giữa số neutron sinh ra ở thế hệ sau so với số neutron ở thế hệ ngay trước đó. 
> - $k < 1$ (Trạng thái dưới tới hạn): Phản ứng không tự duy trì, số phân hạch giảm dần rồi tắt hẳn.
> - $k = 1$ (Trạng thái tới hạn): Phản ứng tự duy trì ổn định. Đây là trạng thái hoạt động bình thường của lò phản ứng hạt nhân.
> - $k > 1$ (Trạng thái trên tới hạn): Số phân hạch tăng theo cấp số nhân, dẫn đến bùng nổ tỏa ra năng lượng khổng lồ, ứng dụng trong vũ khí hạt nhân.

**Câu 4 (Q4):** Phản ứng nhiệt hạch tỏa ra nhiều năng lượng hơn phản ứng phân hạch tính trên cùng một đơn vị khối lượng nhiên liệu. Tại sao đến nay con người vẫn chưa thể xây dựng được các lò phản ứng nhiệt hạch thương mại? (Nuclear fusion releases more energy than nuclear fission per unit mass of fuel. Why have humans not yet been able to build commercial fusion reactors?)
> **Gợi ý trả lời (Hint):** Khó khăn chính là phản ứng nhiệt hạch cần điều kiện nhiệt độ cực kỳ cao (hàng chục đến hàng trăm triệu độ C) để thắng lực đẩy Coulomb giữa các hạt nhân mang điện dương. Ở nhiệt độ này, vật chất tồn tại ở trạng thái plasma. Việc duy trì và giam giữ khối plasma khổng lồ này một cách ổn định trong thời gian đủ dài để phản ứng xảy ra liên tục (sử dụng từ trường cực mạnh như trong tokamak) đòi hỏi công nghệ cực kỳ phức tạp và tiêu tốn năng lượng khổng lồ.

**Câu 5 (Q5):** Nguyên tắc ALARA (As Low As Reasonably Achievable) có ý nghĩa như thế nào đối với nhân viên y tế làm việc trong phòng chụp X-quang hoặc xạ trị? (What is the significance of the ALARA principle for medical staff working in X-ray or radiotherapy rooms?)
> **Gợi ý trả lời (Hint):** Nguyên tắc ALARA yêu cầu mọi biện pháp bảo vệ phải được thực hiện để giảm thiểu liều chiếu xạ xuống mức thấp nhất có thể. Nhân viên y tế áp dụng bằng cách: đứng sau tấm chắn chì (Shielding), sử dụng áo khoác chì bảo vệ, đứng cách xa nguồn phát tia (Distance), và thực hiện thao tác nhanh gọn (Time).

---

## Bài Tập Về Nhà (Homework & Practice Problems)

**Bài 1 (Problem 1):** Tính năng lượng liên kết và năng lượng liên kết riêng của hạt nhân Heli ${}^{4}_{2}\text{He}$. 
Cho biết khối lượng của proton $m_p = 1.00728 \text{ u}$; khối lượng neutron $m_n = 1.00866 \text{ u}$; khối lượng hạt nhân ${}^{4}_{2}\text{He}$ là $m_{\text{He}} = 4.00150 \text{ u}$. $1\text{ u} = 931.5 \text{ MeV/c}^2$.
*(Calculate the binding energy and binding energy per nucleon of a Helium-4 nucleus. Given $m_p = 1.00728 \text{ u}$, $m_n = 1.00866 \text{ u}$, nuclear mass $m_{\text{He}} = 4.00150 \text{ u}$. $1\text{ u} = 931.5 \text{ MeV/c}^2$.)*

**Lời giải chi tiết (Detailed Solution):**
1. **Xác định các thông số:**
   - Hạt nhân ${}^{4}_{2}\text{He}$ có $Z = 2$ proton, $A = 4$, số neutron $N = A - Z = 4 - 2 = 2$.
2. **Tính độ hụt khối ($\Delta m$):**
   - $\Delta m = (Z \cdot m_p + N \cdot m_n) - m_{\text{He}}$
   - $\Delta m = (2 \cdot 1.00728 + 2 \cdot 1.00866) - 4.00150$
   - $\Delta m = (2.01456 + 2.01732) - 4.00150$
   - $\Delta m = 4.03188 - 4.00150 = 0.03038 \text{ u}$
3. **Tính năng lượng liên kết ($E_{lk}$):**
   - $E_{lk} = \Delta m \cdot c^2 = 0.03038 \cdot 931.5 \approx 28.30 \text{ MeV}$
4. **Tính năng lượng liên kết riêng ($\varepsilon$):**
   - $\varepsilon = \frac{E_{lk}}{A} = \frac{28.30}{4} \approx 7.075 \text{ MeV/nucleon}$

**Đáp số (Answer):** $E_{lk} \approx 28.30 \text{ MeV}$, $\varepsilon \approx 7.075 \text{ MeV/nucleon}$.

**Bài 2 (Problem 2):** Hoàn thành phương trình phản ứng hạt nhân sau và cho biết đây là loại phản ứng gì:
${}^{235}_{92}\text{U} + {}^{1}_{0}\text{n} \rightarrow {}^{94}_{38}\text{Sr} + {}^{A}_{Z}\text{X} + 2{}^{1}_{0}\text{n}$
*(Complete the following nuclear reaction equation and identify the type of reaction.)*

**Lời giải chi tiết (Detailed Solution):**
Áp dụng định luật bảo toàn số khối (A) và điện tích (Z):
- **Bảo toàn số khối (A):**
  Tổng $A$ vế trái = Tổng $A$ vế phải
  $235 + 1 = 94 + A + 2 \cdot 1$
  $236 = 96 + A \Rightarrow A = 236 - 96 = 140$
- **Bảo toàn điện tích (Z):**
  Tổng $Z$ vế trái = Tổng $Z$ vế phải
  $92 + 0 = 38 + Z + 2 \cdot 0$
  $92 = 38 + Z \Rightarrow Z = 92 - 38 = 54$
- **Kết luận:** Hạt nhân X có $Z=54$, $A=140$. Tra bảng tuần hoàn, nguyên tố có $Z=54$ là Xenon (Xe). Vậy hạt nhân cần tìm là ${}^{140}_{54}\text{Xe}$.
- **Loại phản ứng:** Đây là phản ứng phân hạch (Fission), do một hạt nhân nặng (U-235) hấp thụ một nơtron chậm vỡ ra thành các hạt nhân trung bình.

**Đáp số (Answer):** Hạt nhân X là ${}^{140}_{54}\text{Xe}$. Loại: Phản ứng phân hạch.

**Bài 3 (Problem 3):** Tính năng lượng tỏa ra trong phản ứng nhiệt hạch sau:
${}^{2}_{1}\text{D} + {}^{3}_{1}\text{T} \rightarrow {}^{4}_{2}\text{He} + {}^{1}_{0}\text{n}$
Cho biết: $m_D = 2.0136 \text{ u}$; $m_T = 3.0160 \text{ u}$; $m_{\text{He}} = 4.0015 \text{ u}$; $m_n = 1.0087 \text{ u}$. $1\text{ u} = 931.5 \text{ MeV/c}^2$.
*(Calculate the energy released in the following fusion reaction. Given the masses above.)*

**Lời giải chi tiết (Detailed Solution):**
1. **Tính tổng khối lượng trước phản ứng ($m_{truoc}$):**
   - $m_{truoc} = m_D + m_T = 2.0136 + 3.0160 = 5.0296 \text{ u}$
2. **Tính tổng khối lượng sau phản ứng ($m_{sau}$):**
   - $m_{sau} = m_{\text{He}} + m_n = 4.0015 + 1.0087 = 5.0102 \text{ u}$
3. **Tính độ hụt khối của phản ứng ($\Delta m$):**
   - Độ hụt khối phản ứng $\Delta m = m_{truoc} - m_{sau} = 5.0296 - 5.0102 = 0.0194 \text{ u}$
   - Vì $m_{truoc} > m_{sau}$, phản ứng tỏa năng lượng.
4. **Tính năng lượng tỏa ra ($Q$):**
   - $Q = \Delta m \cdot c^2 = 0.0194 \cdot 931.5 \approx 18.07 \text{ MeV}$

**Đáp số (Answer):** Năng lượng tỏa ra là $18.07 \text{ MeV}$.

---

## Tiêu chí đánh giá (Assessment Rubric)

Thang điểm 100 được phân bổ như sau cho các hoạt động thực hành lập trình và làm bài tập về nhà.
*The 100-point scale is distributed as follows for programming practices and homework.*

| Tiêu chí (Criteria) | Mô tả mức độ xuất sắc (Excellent Level Description) | Điểm tối đa (Max Pts) |
| :--- | :--- | :---: |
| **Kiến thức Lý thuyết (Theory Knowledge)** | Giải chính xác, trình bày rõ ràng các bước áp dụng định luật bảo toàn $A, Z$ và công thức Einstein để tính độ hụt khối, năng lượng tỏa ra. | 30 |
| **Thực hành lập trình (Python Programming)** | Mã nguồn (Code) viết sạch, dễ đọc. Chạy không lỗi. Các đồ thị được vẽ rõ ràng, có tiêu đề, chú thích và màu sắc phân biệt trực quan. | 40 |
| **Phân tích kết quả (Result Analysis)** | Trả lời đầy đủ, sâu sắc 5 câu hỏi thảo luận, thể hiện hiểu biết sâu rộng về năng lượng hạt nhân và nguyên tắc an toàn. | 20 |
| **Thái độ & Chuyên cần (Attitude & Attendance)** | Tham gia tích cực, thảo luận sôi nổi trên lớp. Nộp bài đúng hạn (On-time submission). | 10 |
| **Tổng điểm (Total Score)** | | **100** |

---
*Tài liệu nội bộ môn Vật Lí 12 - Kết Nối Tri Thức. Bản quyền thuộc về khóa học STEM.*
*Internal document for Physics 12 - KNTT. Copyright belongs to the STEM course.*

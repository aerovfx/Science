# Tuần 3: Động Học Phân Tử Chất Khí & Khí Lí Tưởng (Week 3: Kinetic Theory of Gases & Ideal Gas)

## 1. Mục Tiêu Bài Học (Learning Objectives)

### Tiếng Việt
- **Hiểu rõ** các giả thuyết cơ bản của thuyết động học phân tử chất khí.
- **Phân biệt** được khí thực và khí lí tưởng.
- **Nắm vững** định luật Boyle về quá trình đẳng nhiệt và định luật Charles về quá trình đẳng áp.
- **Vận dụng** được phương trình trạng thái của khí lí tưởng để giải các bài toán liên quan.
- **Thực hành** lắp ráp và tiến hành thí nghiệm kiểm chứng định luật Boyle, sử dụng cảm biến áp suất và phần mềm thu thập dữ liệu hoặc áp kế thủ công.
- **Lập trình** mô phỏng các quá trình biến đổi trạng thái của khí lí tưởng sử dụng Python.

### English
- **Understand** the basic postulates of the kinetic molecular theory of gases.
- **Distinguish** between real gases and ideal gases.
- **Master** Boyle's Law for isothermal processes and Charles's Law for isobaric processes.
- **Apply** the ideal gas equation of state to solve related physical problems.
- **Practice** assembling and conducting experiments to verify Boyle's Law, using pressure sensors and data collection software or manual manometers.
- **Program** simulations of ideal gas state transitions using Python.

---

## 2. Bài Học Liên Quan Trong Sách Giáo Khoa (Related Textbook Lessons)

Khóa học này được thiết kế dựa trên chương trình Vật lí 12 - Bộ sách Kết nối tri thức với cuộc sống. Học sinh cần đọc trước các bài sau trong sách giáo khoa:
- **Bài 8:** Mô hình động học phân tử chất khí (Kinetic molecular model of gases)
- **Bài 9:** Định luật Boyle (Boyle's Law)
- **Bài 10:** Định luật Charles (Charles's Law)
- **Bài 11:** Phương trình trạng thái của khí lí tưởng (Equation of state for ideal gases)

---

## 3. Thiết Bị & Dụng Cụ Thực Hành (Lab Equipment & Tools)

Dưới đây là danh sách các thiết bị cần thiết cho thí nghiệm kiểm chứng định luật Boyle trong tuần này. Các thiết bị này có thể dễ dàng tìm mua tại các cửa hàng vật tư thiết bị giáo dục ở Việt Nam hoặc qua các trang thương mại điện tử.

| STT (No.) | Tên Thiết Bị (Equipment Name) | Chức năng (Function) | Đơn giá dự kiến (Est. Price VND) | Độ phổ biến (Availability) |
|:---:|:---|:---|:---:|:---:|
| 1 | Xy lanh tiêm 50ml (50ml Syringe) | Thay đổi và đo thể tích khí (Change and measure gas volume) | 10,000 - 15,000 | Rất cao (Very High - Hiệu thuốc) |
| 2 | Áp kế màng hoặc Cảm biến áp suất khí (Pressure Sensor / Manometer) | Đo áp suất của khí trong xy lanh (Measure gas pressure in syringe) | 150,000 - 500,000 | Cao (High - Cửa hàng dụng cụ thí nghiệm) |
| 3 | Ống nhựa nối (Plastic connecting tube) | Nối xy lanh với áp kế (Connect syringe to manometer) | 5,000 - 10,000 | Rất cao (Very High) |
| 4 | Giá đỡ thí nghiệm (Retort Stand) | Giữ cố định hệ thống (Hold the system securely) | 100,000 - 200,000 | Cao (High) |
| 5 | Dầu bôi trơn / Vaseline (Lubricant / Petroleum Jelly) | Làm kín khe hở ở pit-tông (Seal the piston gap) | 20,000 - 30,000 | Rất cao (Very High - Tiệm thuốc, siêu thị) |
| 6 | Thước kẹp (Vernier Caliper) (Tùy chọn) | Đo đường kính xy lanh nếu cần tự tính thể tích (Measure syringe diameter if needed) | 50,000 - 150,000 | Cao (High) |
| 7 | Nhiệt kế điện tử (Digital Thermometer) | Đảm bảo nhiệt độ phòng không đổi (Ensure constant room temp) | 80,000 - 150,000 | Rất cao (Very High) |

*Ghi chú: Trong trường hợp trường học không có cảm biến áp suất kỹ thuật số, giáo viên có thể sử dụng áp kế chữ U truyền thống. Tuy nhiên, áp kế màng hoặc cảm biến kết nối máy tính (như Arduino) sẽ cho kết quả trực quan và chính xác hơn.*

---

## 4. Lý Thuyết Chuyên Sâu (Deep Theory & Formulas)

### 4.1 Mô Hình Động Học Phân Tử Chất Khí (Kinetic Theory of Gases)

**Giả thuyết cơ bản (Basic Postulates):**
1. Chất khí bao gồm một số lượng rất lớn các hạt (nguyên tử hoặc phân tử) gọi chung là các phân tử khí. Kích thước của các phân tử khí rất nhỏ so với khoảng cách trung bình giữa chúng, do đó, thể tích của bản thân các phân tử khí được coi là không đáng kể (chất điểm - point particles).
2. Các phân tử khí chuyển động nhiệt hỗn loạn, không ngừng. Vận tốc trung bình của chuyển động này phụ thuộc vào nhiệt độ tuyệt đối của khối khí. Nhiệt độ càng cao, chuyển động nhiệt càng nhanh.
3. Các phân tử khí chỉ tương tác với nhau khi va chạm vào nhau và va chạm vào thành bình. Giữa các lần va chạm, chúng chuyển động thẳng đều.
4. Mọi va chạm giữa các phân tử với nhau và với thành bình đều là **va chạm đàn hồi hoàn toàn** (elastic collisions). Điều này có nghĩa là động năng được bảo toàn trong suốt quá trình va chạm. Lực tương tác tĩnh điện hoặc lực hấp dẫn giữa các phân tử bị bỏ qua (no inter-molecular force except during collision).

**Khí lí tưởng (Ideal Gas):**
Chất khí tuân theo đúng các giả thuyết trên được gọi là khí lí tưởng. Trên thực tế, không có khí lí tưởng tuyệt đối. Tuy nhiên, ở điều kiện nhiệt độ phòng và áp suất thấp (ví dụ: áp suất khí quyển), các khí thực như O2, N2, H2... có hành vi gần giống như khí lí tưởng, nên ta có thể áp dụng các định luật của khí lí tưởng cho chúng.

### 4.2 Định luật Boyle (Quá trình đẳng nhiệt - Isothermal Process)

**Định nghĩa:** Quá trình biến đổi trạng thái của một khối lượng khí xác định trong đó nhiệt độ được giữ không đổi ($T = \text{const}$) gọi là quá trình đẳng nhiệt.

**Phát biểu định luật:** Ở nhiệt độ không đổi, áp suất của một khối lượng khí xác định tỉ lệ nghịch với thể tích của nó.

**Công thức (Formula):**
$$ p \sim \frac{1}{V} \implies p \cdot V = \text{const} $$

Nếu khối khí biến đổi từ trạng thái 1 $(p_1, V_1)$ sang trạng thái 2 $(p_2, V_2)$ ở nhiệt độ không đổi:
$$ p_1 V_1 = p_2 V_2 $$

**Đồ thị (Đường đẳng nhiệt - Isotherm):**
Trong hệ tọa độ $(p, V)$, đường đẳng nhiệt là một phần của đường Hypebol.
Trong hệ tọa độ $(p, T)$ hoặc $(V, T)$, đường đẳng nhiệt là một đường thẳng vuông góc với trục nhiệt độ $T$.

**Ví dụ tính toán 1 (Worked Example 1):**
Một xy lanh chứa $100 \text{ cm}^3$ không khí ở áp suất $10^5 \text{ Pa}$. Nén từ từ pit-tông (để nhiệt độ không đổi) cho đến khi thể tích khí còn $25 \text{ cm}^3$. Tính áp suất của khí trong xy lanh lúc này.

*Lời giải (Solution):*
Trạng thái 1: $V_1 = 100 \text{ cm}^3$, $p_1 = 10^5 \text{ Pa}$
Trạng thái 2: $V_2 = 25 \text{ cm}^3$, $p_2 = ?$
Vì quá trình diễn ra từ từ, ta có thể coi đây là quá trình đẳng nhiệt ($T_1 = T_2$).
Áp dụng định luật Boyle: $p_1 V_1 = p_2 V_2$
$\implies p_2 = \frac{p_1 V_1}{V_2} = \frac{10^5 \cdot 100}{25} = 4 \cdot 10^5 \text{ Pa}$
Kết luận: Áp suất của khí sau khi nén là $4 \cdot 10^5 \text{ Pa}$.

### 4.3 Định luật Charles (Quá trình đẳng áp - Isobaric Process)

**Định nghĩa:** Quá trình biến đổi trạng thái của một khối lượng khí xác định trong đó áp suất được giữ không đổi ($p = \text{const}$) gọi là quá trình đẳng áp.

**Phát biểu định luật:** Ở áp suất không đổi, thể tích của một khối lượng khí xác định tỉ lệ thuận với nhiệt độ tuyệt đối của nó.

**Công thức (Formula):**
$$ \frac{V}{T} = \text{const} $$

Nếu khối khí biến đổi từ trạng thái 1 $(V_1, T_1)$ sang trạng thái 2 $(V_2, T_2)$ ở áp suất không đổi:
$$ \frac{V_1}{T_1} = \frac{V_2}{T_2} $$

*Lưu ý: Nhiệt độ $T$ trong công thức trên phải là nhiệt độ tuyệt đối (Kelvin). Phép biến đổi: $T(\text{K}) = t(^\circ\text{C}) + 273.15$. Trong các bài toán phổ thông, ta thường lấy $T = t + 273$.*

**Đồ thị (Đường đẳng áp - Isobar):**
Trong hệ tọa độ $(V, T)$, đường đẳng áp là một đường thẳng có phần kéo dài đi qua gốc tọa độ.
Trong hệ tọa độ $(p, T)$ hoặc $(p, V)$, đường đẳng áp là một đường thẳng vuông góc với trục áp suất $p$.

**Ví dụ tính toán 2 (Worked Example 2):**
Một quả bóng bay chứa $2 \text{ L}$ khí He ở nhiệt độ $27^\circ\text{C}$. Nếu mang quả bóng này ra ngoài trời lạnh ở nhiệt độ $7^\circ\text{C}$ (giả sử áp suất khí quyển không đổi và màng bóng đàn hồi hoàn hảo), thể tích của quả bóng sẽ là bao nhiêu?

*Lời giải (Solution):*
Trạng thái 1: $V_1 = 2 \text{ L}$, $T_1 = 27 + 273 = 300 \text{ K}$
Trạng thái 2: $V_2 = ?$, $T_2 = 7 + 273 = 280 \text{ K}$
Vì áp suất không đổi, áp dụng định luật Charles: $\frac{V_1}{T_1} = \frac{V_2}{T_2}$
$\implies V_2 = V_1 \cdot \frac{T_2}{T_1} = 2 \cdot \frac{280}{300} \approx 1.87 \text{ L}$
Kết luận: Thể tích quả bóng sẽ giảm xuống còn khoảng $1.87 \text{ L}$.

### 4.4 Phương Trình Trạng Thái Của Khí Lí Tưởng (Ideal Gas Equation of State)

Bằng cách kết hợp các định luật thực nghiệm (Boyle, Charles, Gay-Lussac), ta có thể rút ra phương trình tổng quát liên hệ giữa cả ba thông số trạng thái ($p, V, T$) của một khối khí lý tưởng:

**Phương trình trạng thái (Equation of State):**
Đối với một lượng khí xác định đưa từ trạng thái 1 sang trạng thái 2:
$$ \frac{p_1 V_1}{T_1} = \frac{p_2 V_2}{T_2} $$

**Phương trình Clapeyron - Mendeleev (Ideal Gas Law for any amount of gas):**
$$ p V = n R T $$
Trong đó:
- $p$: Áp suất (Pa hoặc N/m²)
- $V$: Thể tích (m³)
- $n$: Số mol khí ($n = \frac{m}{M}$, với $m$ là khối lượng tính bằng gram, $M$ là khối lượng mol tính bằng g/mol)
- $T$: Nhiệt độ tuyệt đối (K)
- $R$: Hằng số khí lí tưởng. $R \approx 8.314 \text{ J/(mol}\cdot\text{K)}$ (nếu $p$ đo bằng Pa, $V$ đo bằng m³).
  *(Nếu $p$ đo bằng atm, $V$ đo bằng L, thì $R \approx 0.082 \text{ L}\cdot\text{atm/(mol}\cdot\text{K)}$).*

**Ví dụ tính toán 3 (Worked Example 3):**
Tính thể tích của $14 \text{ g}$ khí Nitơ ($N_2$) ở điều kiện tiêu chuẩn (nhiệt độ $0^\circ\text{C}$, áp suất $1 \text{ atm}$). Cho $M_{N_2} = 28 \text{ g/mol}$, $1 \text{ atm} = 1.013 \times 10^5 \text{ Pa}$.

*Lời giải (Solution):*
Số mol khí $N_2$: $n = \frac{m}{M} = \frac{14}{28} = 0.5 \text{ mol}$
Điều kiện tiêu chuẩn: $T = 0 + 273 = 273 \text{ K}$, $p = 1.013 \times 10^5 \text{ Pa}$
Áp dụng phương trình trạng thái: $p V = n R T$
$\implies V = \frac{n R T}{p} = \frac{0.5 \cdot 8.314 \cdot 273}{1.013 \times 10^5} \approx 0.0112 \text{ m}^3 = 11.2 \text{ L}$
Kết luận: Thể tích là $11.2 \text{ L}$ (phù hợp với kiến thức Hóa học: $0.5 \text{ mol} \times 22.4 \text{ L/mol} = 11.2 \text{ L}$).

---

## 5. Sơ Đồ Biểu Diễn Quá Trình (ASCII / Markdown Diagrams)

Biểu diễn các quá trình đẳng nhiệt, đẳng áp, đẳng tích trong các hệ tọa độ.

### Biểu diễn quá trình Đẳng Nhiệt (Isothermal) - Định luật Boyle
```text
  p (Áp suất)
  ^
  |  \
  |   \       T = const
  |    \      (Hypebol)
  |     \
  |      \
  |       ' - . _
  |               ~ - . _
  |                       ~ - . _ 
  +-------------------------------------> V (Thể tích)
```
Đường cong diễn tả quá trình đẳng nhiệt trong hệ tọa độ $p-V$ là đường Hypebol. Nhiệt độ càng cao thì đường Hypebol càng nằm xa gốc tọa độ.

### Biểu diễn quá trình Đẳng Áp (Isobaric) - Định luật Charles
```text
  V (Thể tích)
  ^
  |        /
  |       /   p = const
  |      /    (Đường thẳng đi qua gốc tọa độ)
  |     /
  |    /
  |   /
  |  /  
  | /
  +-------------------------------------> T (Nhiệt độ K)
```
Đường đẳng áp trong hệ tọa độ $V-T$ là một đường thẳng mà nếu kéo dài sẽ đi qua gốc tọa độ. Áp suất càng nhỏ thì đường thẳng càng dốc.

### Biểu diễn chu trình kín (State Cycle Example)
Giả sử có một chu trình: (1) -> (2) Đẳng nhiệt; (2) -> (3) Đẳng tích; (3) -> (1) Đẳng áp.
```text
  p ^
    |
 p1 +---+ (1) . . . . . . . . . 
    |   |                       .
    |   |                       .
    |   |                       .
 p2 +   | . . . . (3)-----------(2)
    |   |          |            |
    |   |          |            |
    +---+----------+------------+-----> V
        0          V3           V1, V2
```
*Ghi chú: (1) đến (2) là đẳng nhiệt dãn nở, (2) đến (3) là đẳng tích giảm áp, (3) đến (1) là đẳng áp tăng thể tích.*

---

## 6. Thực Hành Thực Tế (Hands-on Experiments)

### Bài Thực Hành: Kiểm chứng Định luật Boyle (Boyle's Law Verification)

**Mục đích:**
Chứng minh bằng thực nghiệm mối quan hệ tỉ lệ nghịch giữa áp suất và thể tích của một lượng khí xác định ở nhiệt độ không đổi.

**Dụng cụ (như đã liệt kê ở phần 3):**
Xy lanh 50ml, cảm biến áp suất, ống nối, máy tính có cài phần mềm thu thập dữ liệu (hoặc đồng hồ áp kế thủ công).

**Tiến hành từng bước (Step-by-step):**
1. **Chuẩn bị hệ thống:** Bôi một ít dầu bôi trơn quanh mép cao su của pit-tông để đảm bảo kín khí tuyệt đối khi dịch chuyển.
2. **Thiết lập thể tích ban đầu:** Kéo pit-tông của xy lanh ra đến mức $50 \text{ ml}$. Khối lượng khí trong xy lanh lúc này là lượng khí không khí lấy ở áp suất khí quyển và nhiệt độ phòng.
3. **Kết nối cảm biến:** Dùng ống nhựa nhỏ nối chặt đầu vòi của xy lanh với cổng đo của cảm biến áp suất / áp kế. Đảm bảo các khớp nối hoàn toàn kín.
4. **Đọc giá trị ban đầu:** Ghi nhận áp suất ban đầu $p_0$ khi $V_0 = 50 \text{ ml}$. Áp suất này thường bằng áp suất khí quyển (khoảng $100 \text{ kPa}$).
5. **Nén khí:** Từ từ đẩy pit-tông vào (lưu ý phải làm RẤT TỪ TỪ để tránh làm khối khí nóng lên do công cơ học chuyển thành nội năng, đảm bảo điều kiện đẳng nhiệt).
6. **Thu thập dữ liệu:** Cứ mỗi khi thể tích giảm $5 \text{ ml}$ ($45, 40, 35, 30, 25 \text{ ml}$), giữ pit-tông cố định trong khoảng 5 giây rồi đọc và ghi lại giá trị áp suất $p_i$ tương ứng vào bảng số liệu.
7. **Dãn khí:** Kéo pit-tông ngược lại từ từ, ghi lại các giá trị áp suất ở các mốc thể tích cũ để so sánh sai số.
8. **Xử lý số liệu:** Lập bảng tính $p \times V$. Nếu kết quả của các tích số này xấp xỉ bằng nhau (sai số trong khoảng 5%), ta có thể kết luận định luật Boyle được nghiệm đúng. Vẽ đồ thị $p$ theo $\frac{1}{V}$ để thấy nó là một đường thẳng đi qua gốc tọa độ.

---

## 7. Cảnh Báo An Toàn (⚠️ Safety Warnings)

- **Cẩn thận với Áp Suất Cao:** Khi nén khí trong xy lanh xuống thể tích quá nhỏ, áp suất sẽ tăng rất cao. Lực đẩy ngược của pit-tông sẽ rất mạnh. Phải giữ thật chặt pit-tông hoặc sử dụng giá đỡ đinh ốc. KHÔNG để tuột tay đột ngột, pit-tông có thể bật ra gây nguy hiểm cho mắt.
- **Ống Nối Bật Ra:** Áp suất cao có thể làm ống nối cao su bật ra khỏi vòi xy lanh hoặc áp kế với lực mạnh. Hãy đeo kính bảo hộ khi thực hành.
- **Không Dùng Ống Thủy Tinh Khuyết Tật:** Nếu sử dụng xy lanh thủy tinh (thay vì nhựa), tuyệt đối kiểm tra các vết nứt trước khi thực hành. Áp suất lớn có thể làm vỡ xy lanh thủy tinh.
- **Tuyệt đối không đùa nghịch:** Không chĩa đầu xy lanh (ngay cả khi không có kim tiêm) vào người khác khi đang nén khí.

---

## 8. Lập Trình Mô Phỏng Bằng Python (Python Simulation Code)

Sử dụng ngôn ngữ lập trình Python để mô phỏng và vẽ đồ thị trực quan cho các quá trình biến đổi trạng thái của khí lí tưởng. Mã nguồn sử dụng `numpy` để tính toán mảng và `matplotlib` để vẽ đồ thị.

### Cài đặt thư viện:
Học sinh cần mở terminal và chạy lệnh sau (nếu chưa cài):
```bash
pip install numpy matplotlib scipy
```

### Mã nguồn (Source Code): `ideal_gas_simulation.py`

```python
"""
Mô phỏng các quá trình của khí lí tưởng (Đẳng nhiệt, Đẳng áp, Đẳng tích)
Physics 12 - Week 3 Simulation
"""

import numpy as np
import matplotlib.pyplot as plt

# -----------------------------------------------------------------------------
# Cấu hình hằng số (Constants)
# -----------------------------------------------------------------------------
R = 8.314  # J/(mol.K) - Hằng số khí lí tưởng
n = 1.0    # mol - Số mol khí (giả sử 1 mol để dễ tính toán)

def plot_isothermal():
    """
    Vẽ đồ thị quá trình đẳng nhiệt (Định luật Boyle)
    """
    # Khởi tạo mảng thể tích V từ 1L đến 10L (chuyển sang m^3)
    V_liters = np.linspace(1, 10, 100)
    V_m3 = V_liters * 1e-3
    
    # Xét 3 mức nhiệt độ khác nhau: 300K, 500K, 700K
    T_list = [300, 500, 700]
    
    plt.figure(figsize=(8, 6))
    
    for T in T_list:
        # Tính áp suất p = nRT / V
        # Áp suất tính ra đơn vị Pa, ta chia 1000 để chuyển thành kPa
        p_Pa = (n * R * T) / V_m3
        p_kPa = p_Pa / 1000.0
        
        plt.plot(V_liters, p_kPa, label=f'T = {T} K')
        
    plt.title('Quá Trình Đẳng Nhiệt (Định Luật Boyle) - Đồ thị p-V')
    plt.xlabel('Thể tích V (Lít)')
    plt.ylabel('Áp suất p (kPa)')
    plt.grid(True, linestyle='--', alpha=0.7)
    plt.legend()
    # Lưu hình ảnh nếu cần: plt.savefig('isothermal.png')
    plt.show()

def plot_isobaric():
    """
    Vẽ đồ thị quá trình đẳng áp (Định luật Charles)
    """
    # Khởi tạo mảng nhiệt độ tuyệt đối T từ 100K đến 800K
    T_K = np.linspace(100, 800, 100)
    
    # Xét 3 mức áp suất khác nhau: 100kPa, 200kPa, 300kPa
    p_kPa_list = [100, 200, 300]
    
    plt.figure(figsize=(8, 6))
    
    for p_kPa in p_kPa_list:
        p_Pa = p_kPa * 1000.0
        # Tính thể tích V = nRT / p
        V_m3 = (n * R * T_K) / p_Pa
        V_liters = V_m3 * 1000.0  # Chuyển về Lít để vẽ cho đẹp
        
        plt.plot(T_K, V_liters, label=f'p = {p_kPa} kPa')
        
    plt.title('Quá Trình Đẳng Áp (Định Luật Charles) - Đồ thị V-T')
    plt.xlabel('Nhiệt độ T (K)')
    plt.ylabel('Thể tích V (Lít)')
    plt.axvline(x=0, color='k', linewidth=0.5)
    plt.axhline(y=0, color='k', linewidth=0.5)
    plt.grid(True, linestyle='--', alpha=0.7)
    plt.legend()
    plt.show()

def plot_state_cycle():
    """
    Vẽ một chu trình biến đổi trạng thái trong hệ p-V
    (1) -> (2): Đẳng nhiệt dãn nở
    (2) -> (3): Đẳng tích giảm áp
    (3) -> (1): Đẳng áp nén lại
    """
    # Trạng thái (1)
    p1 = 300.0  # kPa
    V1 = 2.0    # Lít
    # T1 tính từ p1*V1 / (nR)
    # nR = 8.314. Ta tính hình thức: p1*V1 prop T1
    
    # Trạng thái (2) - Đẳng nhiệt từ (1) nên p1V1 = p2V2
    V2 = 6.0    # Lít (Dãn nở)
    p2 = (p1 * V1) / V2  # kPa = 100 kPa
    
    # Trạng thái (3) - Đẳng tích từ (2) nên V3 = V2, đẳng áp về (1) nên p3 = p1
    # Điều này không tạo thành chu trình như mô tả bên trên.
    # Sửa lại: (3)->(1) Đẳng áp nén lại, nên p3 = p1 = 300 kPa.
    # Mà (2)->(3) là đẳng tích, nên V3 = V2 = 6.0 Lít.
    # Vậy Trạng thái 3 có (p3=300, V3=6.0). Nhưng (3) lại có p3=300 và V3=6, khác (1) có p1=300, V1=2
    # Nghĩa là (3)->(1) đúng là đẳng áp!
    p3 = p1
    V3 = V2
    
    plt.figure(figsize=(8, 6))
    
    # Quá trình (1) -> (2): Đẳng nhiệt
    V_12 = np.linspace(V1, V2, 50)
    p_12 = (p1 * V1) / V_12
    plt.plot(V_12, p_12, 'b-', linewidth=2, label='(1)->(2): Đẳng nhiệt')
    
    # Quá trình (2) -> (3): Đẳng tích
    V_23 = [V2, V3]
    p_23 = [p2, p3]
    plt.plot(V_23, p_23, 'r-', linewidth=2, label='(2)->(3): Đẳng tích')
    
    # Quá trình (3) -> (1): Đẳng áp
    V_31 = [V3, V1]
    p_31 = [p3, p1]
    plt.plot(V_31, p_31, 'g-', linewidth=2, label='(3)->(1): Đẳng áp')
    
    # Điểm đánh dấu
    plt.plot([V1, V2, V3], [p1, p2, p3], 'ko')
    plt.text(V1, p1+10, '  (1)', fontsize=12)
    plt.text(V2, p2-15, '  (2)', fontsize=12)
    plt.text(V3, p3+10, '  (3)', fontsize=12)
    
    plt.title('Chu Trình Biến Đổi Trạng Thái Khí Lí Tưởng')
    plt.xlabel('Thể tích V (Lít)')
    plt.ylabel('Áp suất p (kPa)')
    plt.grid(True, linestyle='--', alpha=0.7)
    plt.legend()
    plt.show()

if __name__ == "__main__":
    print("Mô phỏng Động học phân tử và Khí lí tưởng...")
    print("Đang hiển thị biểu đồ quá trình đẳng nhiệt...")
    plot_isothermal()
    print("Đang hiển thị biểu đồ quá trình đẳng áp...")
    plot_isobaric()
    print("Đang hiển thị biểu đồ chu trình...")
    plot_state_cycle()
    print("Hoàn thành!")
```

Học sinh hãy chạy thử mã nguồn, sửa đổi các thông số `T_list`, `p_kPa_list`, `V1, V2` để quan sát sự thay đổi trên đồ thị.

---

## 9. Câu Hỏi Thảo Luận (Discussion Questions)

**Câu 1: Tại sao khi bóp méo một quả bóng bàn bằng nhựa bị móp (nhưng chưa rách), ta ngâm nó vào nước nóng thì quả bóng lại phồng trở lại hình dạng ban đầu? Giải thích bằng phương trình trạng thái khí lí tưởng.**
*Gợi ý / Trả lời (Hint / Answer):* Khi ngâm vào nước nóng, nhiệt độ $T$ của lượng khí bên trong quả bóng tăng lên. Do màng bóng ban đầu móp, khí bên trong có thể dãn nở làm thể tích $V$ tăng lên ở áp suất xấp xỉ áp suất khí quyển ($p \approx \text{const}$). Theo định luật Charles ($V/T = \text{const}$), nhiệt độ $T$ tăng thì thể tích $V$ cũng tăng, đẩy vỏ quả bóng phồng trở lại.

**Câu 2: Nếu trong thí nghiệm kiểm chứng định luật Boyle, ta đẩy pit-tông vào quá nhanh, kết quả thu được sẽ sai lệch như thế nào so với lý thuyết? Vì sao?**
*Gợi ý / Trả lời (Hint / Answer):* Nếu đẩy quá nhanh, công cơ học thực hiện lên hệ sẽ biến thành nội năng làm nhiệt độ khí tăng lên đột ngột, quá trình không còn là đẳng nhiệt ($T$ tăng). Khi đó, áp suất đo được sẽ cao hơn giá trị tính toán theo định luật Boyle (do $p$ tỉ lệ thuận với cả $T$ và $1/V$).

**Câu 3: Các bình xịt mỹ phẩm, bình gas mini thường ghi dòng cảnh báo "Không để gần nguồn nhiệt hoặc dưới ánh nắng trực tiếp". Dựa vào thuyết động học phân tử, hãy giải thích tại sao.**
*Gợi ý / Trả lời (Hint / Answer):* Bình chứa là một hệ kín có thể tích không đổi ($V = \text{const}$, đẳng tích). Khi tiếp xúc với nhiệt độ cao ($T$ tăng), động năng chuyển động nhiệt của các phân tử khí trong bình tăng lên, chúng va chạm vào thành bình mạnh hơn và nhiều hơn. Theo định luật Charles cho quá trình đẳng tích (Gay-Lussac: $p/T = \text{const}$), áp suất $p$ sẽ tăng rất nhanh, có thể vượt qua giới hạn chịu lực của vỏ bình, gây nổ nguy hiểm.

**Câu 4: Bạn có một lượng khí Oxy và một lượng khí Hydro cùng thể tích, cùng áp suất, cùng nhiệt độ. Khối lượng của hai lượng khí này có bằng nhau không? Tại sao?**
*Gợi ý / Trả lời (Hint / Answer):* Áp dụng phương trình trạng thái $pV = nRT$. Vì $p, V, T$ giống nhau, suy ra số mol $n$ của hai lượng khí là bằng nhau (Định luật Avogadro). Tuy nhiên, khối lượng mol của Oxy ($M = 32 \text{ g/mol}$) lớn hơn của Hydro ($M = 2 \text{ g/mol}$). Do $m = n \times M$, khối lượng khí Oxy sẽ lớn hơn khối lượng khí Hydro 16 lần.

**Câu 5: Tại sao ở độ cao lớn (ví dụ trên núi cao), các túi snack (bánh bim bim) thường bị phồng căng lên so với khi ở dưới đồng bằng?**
*Gợi ý / Trả lời (Hint / Answer):* Lượng khí bên trong túi snack được đóng gói kín ở điều kiện áp suất khí quyển tại mặt đất ($p_1$). Khi lên núi cao, áp suất không khí bên ngoài giảm ($p_2 < p_1$). Để cân bằng áp suất bên trong và bên ngoài màng nilon đàn hồi, khối khí bên trong dãn nở ra làm thể tích $V$ tăng lên, tuân theo định luật Boyle (nếu coi nhiệt độ xấp xỉ không đổi).

---

## 10. Bài Tập Về Nhà & Hướng Dẫn Giải (Homework & Practice Problems)

**Bài 1 (Mức độ Nhận biết - Thông hiểu):**
Một bình chứa $20 \text{ lít}$ khí Oxi ở nhiệt độ $20^\circ\text{C}$ và áp suất $2 \times 10^5 \text{ Pa}$. Tính áp suất của lượng khí trên nếu thể tích giảm còn $10 \text{ lít}$ và nhiệt độ tăng lên đến $40^\circ\text{C}$.

*Lời giải chi tiết:*
- Trạng thái 1:
  $V_1 = 20 \text{ lít}$
  $T_1 = 20 + 273 = 293 \text{ K}$
  $p_1 = 2 \times 10^5 \text{ Pa}$
- Trạng thái 2:
  $V_2 = 10 \text{ lít}$
  $T_2 = 40 + 273 = 313 \text{ K}$
  $p_2 = ?$
- Áp dụng phương trình trạng thái khí lí tưởng:
  $\frac{p_1 V_1}{T_1} = \frac{p_2 V_2}{T_2}$
  $\implies p_2 = \frac{p_1 V_1 T_2}{V_2 T_1} = \frac{2 \times 10^5 \cdot 20 \cdot 313}{10 \cdot 293}$
  $\implies p_2 \approx 4.27 \times 10^5 \text{ Pa}$
- Đáp số: Khoảng $4.27 \times 10^5 \text{ Pa}$.

**Bài 2 (Mức độ Vận dụng):**
Một bơm xe đạp hình trụ, pit-tông có diện tích $S = 8 \text{ cm}^2$. Ban đầu pit-tông cách đáy bơm $h_1 = 30 \text{ cm}$. Hỏi phải đẩy pit-tông xuống bao nhiêu xentimet để không khí trong bơm mở được van bám vào săm xe đạp? Biết áp suất không khí bên ngoài là $p_0 = 10^5 \text{ Pa}$, áp suất trong săm xe là $p_2 = 4 \times 10^5 \text{ Pa}$. Coi nhiệt độ của không khí trong bơm không đổi trong quá trình nén.

*Lời giải chi tiết:*
- Thể tích ban đầu của không khí trong bơm: $V_1 = S \cdot h_1 = 8 \cdot 30 = 240 \text{ cm}^3$.
- Áp suất ban đầu của khối không khí trong bơm bằng áp suất khí quyển: $p_1 = 10^5 \text{ Pa}$.
- Để van bơm mở được, áp suất khối khí trong bơm ít nhất phải bằng áp suất trong săm xe: $p_2 = 4 \times 10^5 \text{ Pa}$.
- Quá trình nén được coi là đẳng nhiệt, áp dụng định luật Boyle: $p_1 V_1 = p_2 V_2$
- Thể tích khối khí lúc sau: $V_2 = \frac{p_1 V_1}{p_2} = \frac{10^5 \cdot 240}{4 \times 10^5} = 60 \text{ cm}^3$.
- Chiều cao cột không khí lúc sau: $h_2 = \frac{V_2}{S} = \frac{60}{8} = 7.5 \text{ cm}$.
- Quãng đường pit-tông phải dịch chuyển: $\Delta h = h_1 - h_2 = 30 - 7.5 = 22.5 \text{ cm}$.
- Đáp số: $22.5 \text{ cm}$.

**Bài 3 (Mức độ Vận dụng Cao):**
Vẽ và phân tích chu trình biến đổi trạng thái của 1 mol khí lí tưởng được mô tả như sau:
- (1) -> (2): Giãn nở đẳng áp ở áp suất $p_1 = 2 \text{ atm}$ từ thể tích $V_1 = 10 \text{ L}$ đến $V_2 = 20 \text{ L}$.
- (2) -> (3): Làm lạnh đẳng tích đến áp suất $p_3 = 1 \text{ atm}$.
- (3) -> (4): Nén đẳng áp về thể tích $V_4 = 10 \text{ L}$.
- (4) -> (1): Đun nóng đẳng tích trở về trạng thái ban đầu.
Tính nhiệt độ tại các điểm (1), (2), (3), (4). Cho $R = 0.082 \text{ atm}\cdot\text{L/(mol}\cdot\text{K)}$.

*Lời giải chi tiết:*
- Trạng thái 1: $p_1 = 2 \text{ atm}, V_1 = 10 \text{ L}$.
  Áp dụng: $T_1 = \frac{p_1 V_1}{nR} = \frac{2 \cdot 10}{1 \cdot 0.082} \approx 243.9 \text{ K}$.
- Trạng thái 2: $p_2 = p_1 = 2 \text{ atm}$ (đẳng áp), $V_2 = 20 \text{ L}$.
  $T_2 = \frac{p_2 V_2}{nR} = \frac{2 \cdot 20}{1 \cdot 0.082} \approx 487.8 \text{ K}$.
  (Hoặc $V \sim T \implies T_2 = 2 \cdot T_1$).
- Trạng thái 3: $V_3 = V_2 = 20 \text{ L}$ (đẳng tích), $p_3 = 1 \text{ atm}$.
  $T_3 = \frac{p_3 V_3}{nR} = \frac{1 \cdot 20}{1 \cdot 0.082} \approx 243.9 \text{ K}$.
- Trạng thái 4: $p_4 = p_3 = 1 \text{ atm}$ (đẳng áp), $V_4 = V_1 = 10 \text{ L}$.
  $T_4 = \frac{p_4 V_4}{nR} = \frac{1 \cdot 10}{1 \cdot 0.082} \approx 121.95 \text{ K}$.

---

## 11. Bảng Đánh Giá - Rubric Chấm Điểm (Assessment Rubric - 100 Points)

| Tiêu Chí Đánh Giá (Criteria) | Xuất Sắc (Excellent) - 90-100đ | Tốt (Good) - 70-89đ | Khá (Fair) - 50-69đ | Cần Cố Gắng (Needs Improvement) - <50đ | Trọng số |
|:---|:---|:---|:---|:---|:---:|
| **1. Trắc nghiệm Lý thuyết (Theory Test)** | Trả lời đúng >90% câu hỏi về định luật Boyle, Charles và phương trình trạng thái. | Trả lời đúng 70-89% câu hỏi. Nắm vững công thức cơ bản. | Trả lời đúng 50-69% câu hỏi. Còn nhầm lẫn đơn vị (K và °C). | Trả lời đúng <50%. Sai lệch kiến thức nền tảng vật lý. | **30%** |
| **2. Báo cáo Thực hành (Lab Report)** | Số liệu ghi chép trung thực, tính toán sai số rõ ràng. Vẽ đồ thị p-V, p-(1/V) chính xác, đẹp mắt. Giải thích kết quả sâu sắc. | Số liệu khá đầy đủ. Đồ thị vẽ đúng nhưng thiếu tiêu đề trục. Giải thích mức độ đạt yêu cầu. | Số liệu còn một số chỗ bất hợp lý (chưa cân bằng nhiệt). Đồ thị có vẽ nhưng đường tuyến tính không chuẩn. | Không hoàn thành thí nghiệm hoặc sao chép số liệu. Báo cáo sơ sài. | **30%** |
| **3. Lập trình Python (Python Coding)** | Code chạy trơn tru không lỗi. Đồ thị sinh động, chú thích rõ ràng. Có sáng tạo thêm tính năng mới (ví dụ animation). | Code chạy được, ra kết quả đồ thị cơ bản giống mẫu bài giảng. | Code còn lỗi nhỏ hoặc chỉ copy/paste chưa hiểu kỹ cấu trúc hàm plot. | Code không chạy được (SyntaxError) hoặc không nộp file bài tập Python. | **20%** |
| **4. Giải Bài Tập (Problem Solving)** | Giải đúng toàn bộ bài tập. Trình bày các bước lập luận lô-gích, rõ ràng. Kèm theo vẽ hình phụ họa. | Giải đúng hầu hết bài tập. Cách trình bày dễ hiểu. Có thể sai sót nhỏ ở khâu bấm máy tính. | Giải được các bài áp dụng công thức đơn giản. Bí ở các bài vận dụng cao và chu trình trạng thái. | Không làm bài tập hoặc sai hoàn toàn về mặt phương pháp lý thuyết. | **20%** |

---
**Tài liệu tham khảo bổ sung (Additional References):**
1. Sách giáo khoa Vật lí 12 - Kết nối tri thức với cuộc sống.
2. PhET Interactive Simulations (University of Colorado Boulder) - Gas Properties.
3. Tài liệu lập trình Matplotlib dành cho khoa học dữ liệu.

---
*Biên soạn bởi: Antigravity AI - Dành cho khóa học Vật Lí 12.*

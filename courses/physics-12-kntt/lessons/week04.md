# Tuần 04: Áp suất khí, Từ trường và Lực từ | Week 04: Gas Pressure, Magnetic Fields and Magnetic Force

## 1. Mục tiêu bài học (Learning Objectives)

### Tiếng Việt
*   **Hiểu sâu sắc (Deep Understanding):** Hiểu và giải thích được áp suất khí dựa trên mô hình động học phân tử, mối quan hệ giữa động năng tịnh tiến trung bình của phân tử và nhiệt độ. Hiểu khái niệm từ trường, đường sức từ, và cảm ứng từ.
*   **Kỹ năng giải bài tập (Problem Solving):** Giải thạo các bài tập về khí lí tưởng và áp dụng thành thạo phương trình trạng thái khí lí tưởng, định luật về lực từ tác dụng lên dây dẫn mang dòng điện.
*   **Kỹ năng thực hành (Practical Skills):** Thực hiện thí nghiệm khảo sát lực từ tác dụng lên dây dẫn mang dòng điện, mô phỏng phân bố vận tốc Maxwell-Boltzmann bằng Python.
*   **Nhận thức an toàn (Safety Awareness):** Tuân thủ các quy tắc an toàn khi làm việc với từ trường mạnh và nguồn điện.

### English
*   **Deep Understanding:** Understand and explain gas pressure based on the molecular kinetic model, and the relationship between average translational kinetic energy of molecules and temperature. Grasp the concepts of magnetic field, magnetic field lines, and magnetic induction.
*   **Problem Solving:** Proficiently solve ideal gas problems using the ideal gas law, and confidently apply the law of magnetic force acting on a current-carrying conductor.
*   **Practical Skills:** Conduct experiments to investigate the magnetic force on a current-carrying conductor, and simulate the Maxwell-Boltzmann velocity distribution using Python.
*   **Safety Awareness:** Adhere to safety rules when working with strong magnetic fields and electrical sources.

## 2. Bài học SGK liên quan (Related Textbook Lessons)
*   Bài 12: Áp suất khí theo mô hình động học phân tử (Gas pressure according to the molecular kinetic model)
*   Bài 13: Bài tập về khí lí tưởng (Exercises on ideal gas)
*   Bài 14: Từ trường (Magnetic field)
*   Bài 15: Lực từ tác dụng lên dây dẫn mang dòng điện. Cảm ứng từ (Magnetic force on a current-carrying conductor. Magnetic induction)

## 3. Dụng cụ thực hành (Lab Equipment & Tools)

| Tên thiết bị (VI) | Equipment Name (EN) | Số lượng (Qty) | Giá dự kiến (VND Est.) | Tính khả dụng (Local Availability) | Ghi chú (Notes) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Cân điện tử siêu nhỏ | Precision Digital Balance | 1 | 500,000 | Cao (Shopee/Tiki/Lazada) | Độ chia nhỏ nhất 0.01g / 0.01g precision |
| Bộ nam châm chữ U | U-shaped Magnet Set | 1 | 250,000 | Cao (Cửa hàng giáo cụ) | Từ trường mạnh / Strong magnetic field |
| Dây đồng trần thẳng | Straight Bare Copper Wire | 5 | 50,000 | Cao (Cửa hàng điện) | Dài 10cm - 20cm / Length 10-20cm |
| Nguồn điện một chiều (DC) | DC Power Supply (Variable) | 1 | 1,500,000 | Trung bình (Cửa hàng điện tử) | 0-30V, 0-5A, có đồng hồ hiển thị |
| Ampe kế (hoặc Multimeter) | Ammeter / Multimeter | 1 | 300,000 | Cao | Đo dòng điện một chiều / DC current |
| Giá đỡ thí nghiệm | Retort Stand and Clamps | 1 | 350,000 | Cao (Cửa hàng giáo cụ) | Dùng để kẹp dây dẫn / To hold the wire |
| Dây nối điện có kẹp cá sấu | Alligator Clip Leads | 6 | 40,000 | Cao | Dẫn dòng điện / Conducting current |

> ⚠️ **Cảnh báo an toàn (Safety Warnings):**
> 1. **Từ trường mạnh (High Magnetic Field):** Nam châm chữ U có thể tạo ra từ trường rất mạnh. Để xa các thiết bị điện tử nhạy cảm, thẻ từ, máy tạo nhịp tim.
> 2. **Dòng điện lớn (High Current):** Thí nghiệm lực từ thường sử dụng dòng điện lớn (1A - 3A). Dây dẫn có thể bị nóng lên đáng kể. Không chạm tay trần vào dây dẫn khi đang có dòng điện chạy qua thời gian dài để tránh bỏng.
> 3. **Ngắn mạch (Short Circuit):** Luôn kiểm tra kỹ mạch điện trước khi bật nguồn để tránh hiện tượng đoản mạch gây hỏng hóc thiết bị và nguy cơ cháy nổ.

## 4. Lý thuyết chuyên sâu & Công thức (Deep Theory & Formulas)

### 4.1 Áp suất khí theo mô hình động học phân tử (Microscopic Gas Pressure)
Dựa trên mô hình động học phân tử, áp suất mà chất khí tác dụng lên thành bình là hệ quả của vô số các va chạm đàn hồi của các phân tử khí lên bề mặt đó.

Giả sử một bình lập phương cạnh $L$ chứa $N$ phân tử khí, mỗi phân tử có khối lượng $m$. Vận tốc bình phương trung bình của các phân tử là $\bar{v}^2$. Mật độ phân tử là $n_0 = N/V$, và khối lượng riêng của khí là $\rho = N m / V = n_0 m$.

Phương trình cơ bản của thuyết động học phân tử đối với áp suất khí:
$$ p = \frac{1}{3} \rho \bar{v}^2 = \frac{1}{3} n_0 m \bar{v}^2 $$

Trong đó động năng tịnh tiến trung bình của một phân tử là:
$$ \bar{E}_d = \frac{1}{2} m \bar{v}^2 $$

Do đó, ta có thể viết lại biểu thức áp suất dưới dạng:
$$ p = \frac{2}{3} n_0 \bar{E}_d $$

**Ý nghĩa:** Áp suất của chất khí tỉ lệ thuận với mật độ phân tử và tỉ lệ thuận với động năng tịnh tiến trung bình của các phân tử cấu tạo nên chất khí.

### 4.2 Động năng trung bình và Nhiệt độ (Average Kinetic Energy and Temperature)
Thuyết động học phân tử chỉ ra rằng nhiệt độ tuyệt đối (Kelvin) là thước đo động năng tịnh tiến trung bình của phân tử.
Mối liên hệ được cho bởi hệ thức:
$$ \bar{E}_d = \frac{3}{2} k T $$
Trong đó:
*   $k \approx 1.38 \times 10^{-23} \text{ J/K}$ là hằng số Boltzmann.
*   $T$ là nhiệt độ tuyệt đối (K).

Từ đây, ta suy ra vận tốc căn quân phương (Root-mean-square speed - $v_{rms}$):
$$ v_{rms} = \sqrt{\bar{v}^2} = \sqrt{\frac{3 k T}{m}} $$
Vì hằng số khí lí tưởng $R = k N_A$ (với $N_A$ là số Avogadro) và khối lượng mol $M = m N_A$, ta cũng có:
$$ v_{rms} = \sqrt{\frac{3 R T}{M}} $$

**Ví dụ số (Numerical Example):**
Tính $v_{rms}$ của phân tử khí Oxygen ($O_2$) ở nhiệt độ $27^\circ C$ ($300 \text{ K}$). Biết $M_{O_2} = 32 \text{ g/mol} = 32 \times 10^{-3} \text{ kg/mol}$, $R = 8.31 \text{ J/(mol.K)}$.
**Giải:**
$$ v_{rms} = \sqrt{\frac{3 \times 8.31 \times 300}{32 \times 10^{-3}}} \approx \sqrt{233718.75} \approx 483.4 \text{ m/s} $$

### 4.3 Từ trường và Vectơ Cảm ứng từ (Magnetic Field & Magnetic Induction Vector)
Từ trường là dạng vật chất tồn tại xung quanh nam châm, dòng điện hoặc hạt mang điện chuyển động. Tính chất cơ bản của từ trường là tác dụng lực từ lên một điện tích chuyển động, một dòng điện hoặc một nam châm khác đặt trong nó.

Đại lượng đặc trưng cho từ trường về phương diện tác dụng lực là **vectơ cảm ứng từ $\vec{B}$**.
Đơn vị của cảm ứng từ trong hệ SI là Tesla (T).
1 Tesla là một từ trường rất mạnh. Từ trường Trái Đất chỉ vào khoảng $30 \mu T$ đến $60 \mu T$.

**Đường sức từ (Magnetic Field Lines):**
Là những đường cong vẽ trong không gian có từ trường sao cho tiếp tuyến tại mỗi điểm trùng với hướng của từ trường tại điểm đó.
Tính chất:
1. Chiều đi ra từ cực Bắc (N) và đi vào cực Nam (S) của nam châm.
2. Nơi từ trường mạnh thì đường sức từ dày, nơi từ trường yếu thì đường sức từ thưa.
3. Các đường sức từ không cắt nhau.

```text
Sơ đồ đường sức từ của nam châm thẳng (ASCII Art Diagram):

      N                                       S
    +---+                                   +---+
 --(  *  )---------------------------------(  *  )--->
    +---+                                   +---+
     \ \                                     / /
      \ \-------( Magnetic Field Lines)-----/ /
       \                                     /
        -------------------------------------
```

### 4.4 Lực từ tác dụng lên đoạn dây dẫn mang dòng điện (Magnetic Force on Current-Carrying Conductor)
Khi một đoạn dây dẫn thẳng chiều dài $l$, mang dòng điện cường độ $I$ được đặt trong từ trường đều có cảm ứng từ $\vec{B}$, nó sẽ chịu tác dụng của một lực từ $\vec{F}$ (Lực Ampère).

**Đặc điểm của vectơ lực từ $\vec{F}$:**
*   **Điểm đặt:** Tại trung điểm của đoạn dây dẫn.
*   **Phương:** Vuông góc với mặt phẳng chứa đoạn dây dẫn và vectơ $\vec{B}$.
*   **Chiều:** Tuân theo **Quy tắc bàn tay trái (Left-hand rule):** Đặt bàn tay trái sao cho các đường sức từ hướng vào lòng bàn tay, chiều từ cổ tay đến ngón tay giữa hướng theo chiều dòng điện, thì ngón tay cái choãi ra $90^\circ$ chỉ chiều của lực từ.
*   **Độ lớn:**
$$ F = B \cdot I \cdot L \cdot \sin(\theta) $$
Trong đó:
*   $\theta$ là góc hợp bởi hướng của dòng điện (chiều vectơ chiều dài $\vec{l}$) và vectơ cảm ứng từ $\vec{B}$.
*   Nếu dây dẫn vuông góc với từ trường ($\theta = 90^\circ$), thì $F_{max} = B I L$.
*   Nếu dây dẫn song song với từ trường ($\theta = 0^\circ$ hoặc $180^\circ$), thì $F = 0$.

## 5. Thực hành Thí nghiệm (Hands-on Experiments)

### Thí nghiệm: Đo lực từ và xác định Cảm ứng từ B (Measuring Magnetic Force)
**Mục đích:** Khảo sát sự phụ thuộc của lực từ $F$ vào cường độ dòng điện $I$, từ đó xác định độ lớn cảm ứng từ $B$ của nam châm chữ U.

**Tiến hành (Step-by-step):**
1.  **Thiết lập cân:** Đặt cân điện tử trên mặt phẳng ngang, ổn định. Đặt nam châm chữ U lên đĩa cân. Bấm nút "TARE" để đưa số chỉ của cân về 0. (Cân đang đo trọng lượng biểu kiến).
2.  **Bố trí dây dẫn:** Dùng giá đỡ kẹp một đoạn dây đồng thẳng, cứng (chiều dài $L$ đã biết, ví dụ $L = 5\text{ cm} = 0.05\text{ m}$) sao cho đoạn dây nằm hoàn toàn và vuông góc giữa hai nhánh của nam châm chữ U (tức là $\theta = 90^\circ$). Dây dẫn **không được chạm** vào nam châm.
3.  **Kết nối mạch:** Nối hai đầu đoạn dây đồng vào nguồn điện DC nối tiếp với ampe kế.
4.  **Tiến hành đo:**
    *   Bật nguồn điện. Điều chỉnh chiết áp để dòng điện $I$ đạt giá trị $0.5\text{ A}$.
    *   Quan sát số chỉ của cân điện tử. Giả sử cân hiển thị khối lượng $\Delta m$ (đơn vị: gam). Lực tương tác (Lực từ hướng xuống do phản lực theo định luật III Newton) có độ lớn $F = \Delta m \cdot g$ (với $g \approx 9.8 \text{ m/s}^2$, lưu ý đổi $\Delta m$ ra kg).
    *   Ghi lại giá trị $I$ và $\Delta m$ vào bảng số liệu.
5.  **Lặp lại:** Tăng dần dòng điện $I$ (ví dụ: $1.0\text{ A}$, $1.5\text{ A}$, $2.0\text{ A}$, $2.5\text{ A}$) và ghi lại các giá trị $\Delta m$ tương ứng.
6.  **Phân tích (Analysis):**
    *   Tính $F$ cho mỗi lần đo.
    *   Vẽ đồ thị $F$ theo $I$. Nếu lí thuyết đúng, đồ thị sẽ là một đường thẳng đi qua gốc tọa độ.
    *   Độ dốc (hệ số góc) của đồ thị là $a = \frac{F}{I}$.
    *   Theo lí thuyết $F = B I L \sin(90^\circ) = B I L \Rightarrow \frac{F}{I} = B L$.
    *   Từ đó suy ra cảm ứng từ $B = \frac{a}{L}$.

## 6. Lập trình Mô phỏng Python (Python Simulations)

Dưới đây là mã nguồn Python hoàn chỉnh chạy mô phỏng phân bố vận tốc Maxwell-Boltzmann cho các nhiệt độ khác nhau và tính toán lực từ vector. Yêu cầu cài đặt các thư viện: `numpy`, `matplotlib`, `scipy`.

```python
"""
Mô phỏng Vật lí 12 - Tuần 04: Áp suất khí & Lực từ
Python Physics Simulation - Week 04: Gas Pressure & Magnetic Force
"""

import numpy as np
import matplotlib.pyplot as plt
from scipy import constants

def plot_maxwell_boltzmann():
    """
    Simulates and plots the Maxwell-Boltzmann velocity distribution
    for Nitrogen gas (N2) at various temperatures.
    """
    # Hằng số (Constants)
    k_B = constants.k      # Hằng số Boltzmann: 1.38e-23 J/K
    N_A = constants.N_A    # Số Avogadro: 6.022e23 mol^-1
    
    # Khối lượng mol của N2 (Molar mass of N2) = 28 g/mol = 0.028 kg/mol
    M = 0.028
    # Khối lượng của một phân tử (Mass of a single molecule)
    m = M / N_A
    
    # Mảng vận tốc từ 0 đến 1500 m/s (Velocity array)
    v = np.linspace(0, 1500, 1000)
    
    # Danh sách nhiệt độ (List of temperatures in Kelvin)
    temperatures = [300, 600, 900]
    colors = ['blue', 'green', 'red']
    
    plt.figure(figsize=(10, 6))
    
    for T, color in zip(temperatures, colors):
        # Tính hàm mật độ xác suất (Probability density function)
        # f(v) = 4*pi * (m / (2*pi*k*T))^(3/2) * v^2 * exp(-m*v^2 / (2*k*T))
        term1 = (m / (2 * np.pi * k_B * T))**(1.5)
        term2 = np.exp(-m * v**2 / (2 * k_B * T))
        f_v = 4 * np.pi * term1 * v**2 * term2
        
        # Vận tốc có xác suất lớn nhất (Most probable speed)
        vp = np.sqrt(2 * k_B * T / m)
        # Vận tốc căn quân phương (Root-mean-square speed)
        vrms = np.sqrt(3 * k_B * T / m)
        
        plt.plot(v, f_v, color=color, linewidth=2, 
                 label=f'T = {T} K (V_rms = {vrms:.0f} m/s)')
        
        # Đánh dấu đỉnh (v_p)
        plt.axvline(vp, color=color, linestyle='--', alpha=0.5)

    plt.title('Maxwell-Boltzmann Velocity Distribution for $N_2$ Gas', fontsize=14)
    plt.xlabel('Speed, $v$ (m/s)', fontsize=12)
    plt.ylabel('Probability Density, $f(v)$', fontsize=12)
    plt.grid(True, linestyle=':', alpha=0.7)
    plt.legend(fontsize=10)
    plt.tight_layout()
    plt.savefig('maxwell_boltzmann.png')
    print("Maxwell-Boltzmann distribution plot saved as 'maxwell_boltzmann.png'.")

def calculate_magnetic_force_vector():
    """
    Calculates the magnetic force vector using the cross product: F = I * (L x B)
    """
    print("\n--- Magnetic Force Vector Calculator ---")
    # Ví dụ: Dây dẫn dọc theo trục y, từ trường theo hướng trục z
    # Current I in Amperes
    I = 2.5 
    
    # Vector chiều dài L (m), hướng theo trục +y
    L_vector = np.array([0, 0.15, 0])  # Length is 0.15 m
    
    # Vector cảm ứng từ B (Tesla), hướng theo hướng nghiêng trong mặt phẳng x-z
    # Ví dụ Bx = 0.5 T, By = 0.0 T, Bz = 0.8 T
    B_vector = np.array([0.5, 0.0, 0.8])
    
    # Tính lực từ bằng tích có hướng (Cross product: L x B)
    # Vector L (m), I * L_vector is the current vector.
    F_vector = I * np.cross(L_vector, B_vector)
    
    # Tính độ lớn lực
    F_magnitude = np.linalg.norm(F_vector)
    
    print(f"Current (I): {I} A")
    print(f"Length vector (L): {L_vector} m")
    print(f"Magnetic Field vector (B): {B_vector} T")
    print(f"Magnetic Force vector (F): {F_vector} N")
    print(f"Magnitude of Magnetic Force (|F|): {F_magnitude:.4f} N")

if __name__ == "__main__":
    plot_maxwell_boltzmann()
    calculate_magnetic_force_vector()
```

## 7. Câu hỏi thảo luận (Discussion Questions)

1.  **Câu hỏi 1 (Q1):** Dựa vào công thức $p = \frac{2}{3} n_0 \bar{E}_d$, hãy giải thích tại sao khi nén một lượng khí lí tưởng trong một xylanh (giảm thể tích V) ở nhiệt độ không đổi, áp suất của khí lại tăng lên?
    *   *Hướng dẫn (Hint):* Nhiệt độ không đổi nghĩa là $\bar{E}_d$ không đổi. Nén khí làm thể tích $V$ giảm, trong khi số phân tử $N$ không đổi, dẫn đến mật độ phân tử $n_0 = N/V$ tăng. Mật độ $n_0$ tăng làm cho áp suất $p$ tăng theo công thức. Ở cấp độ vi mô, có nhiều phân tử va chạm vào thành bình hơn trong cùng một đơn vị thời gian.
2.  **Câu hỏi 2 (Q2):** Phân tử khí Hydro ($H_2$) và khí Oxygen ($O_2$) ở cùng một nhiệt độ trong phòng. Hỏi phân tử khí nào chuyển động nhanh hơn? Tính tỉ số vận tốc căn quân phương của chúng.
    *   *Hướng dẫn (Hint):* Cùng nhiệt độ $T$, chúng có cùng động năng trung bình $\bar{E}_d = \frac{3}{2}kT$. Vì $M_{H2} = 2 \text{ g/mol}$ và $M_{O2} = 32 \text{ g/mol}$, Hydro nhẹ hơn nên phải chuyển động nhanh hơn. Tỉ số $\frac{v_{rms}(H_2)}{v_{rms}(O_2)} = \sqrt{\frac{M_{O2}}{M_{H2}}} = \sqrt{\frac{32}{2}} = 4$. Phân tử $H_2$ bay nhanh gấp 4 lần.
3.  **Câu hỏi 3 (Q3):** Làm thế nào để xác định chiều của đường sức từ bên trong và bên ngoài một nam châm chữ U?
    *   *Hướng dẫn (Hint):* Sử dụng la bàn (kim nam châm thử). Bên ngoài, đường sức đi ra từ cực Bắc và đi vào cực Nam. Trục của kim nam châm sẽ nằm dọc theo đường tiếp tuyến của đường sức từ tại điểm đó.
4.  **Câu hỏi 4 (Q4):** Trong thí nghiệm đo lực từ, nếu ta đổi chiều dòng điện chạy qua đoạn dây dẫn, hiện tượng gì sẽ xảy ra đối với số chỉ của cân điện tử?
    *   *Hướng dẫn (Hint):* Đổi chiều dòng điện sẽ làm đổi chiều lực từ (theo quy tắc bàn tay trái). Nếu ban đầu lực từ đẩy dây xuống (tác dụng phản lực đẩy nam châm lên, làm số chỉ cân giảm), thì khi đổi chiều dòng điện, lực từ sẽ kéo dây lên (tác dụng phản lực đẩy nam châm xuống, làm số chỉ cân tăng lên).
5.  **Câu hỏi 5 (Q5):** Lực từ tác dụng lên một đoạn dây dẫn thẳng mang dòng điện có thể bằng không trong trường hợp nào, mặc dù dây dẫn vẫn nằm trong từ trường?
    *   *Hướng dẫn (Hint):* Lực $F = BIL\sin\theta = 0$ khi $\sin\theta = 0$, tức là góc $\theta = 0^\circ$ hoặc $\theta = 180^\circ$. Điều này xảy ra khi dây dẫn đặt song song với các đường sức từ.

## 8. Bài tập về nhà (Homework & Practice Problems)

**Bài 1 (Cơ bản):** Một bình kín chứa khí Heli ($He$, $M = 4 \text{ g/mol}$) ở nhiệt độ $300 \text{ K}$ và áp suất $1.01 \times 10^5 \text{ Pa}$. Mật độ phân tử (số phân tử trong $1 \text{ m}^3$) là bao nhiêu?
**Giải chi tiết:**
*   Ta có phương trình: $p = n_0 k T \Rightarrow n_0 = \frac{p}{k T}$
*   Thay số: $n_0 = \frac{1.01 \times 10^5}{1.38 \times 10^{-23} \times 300} \approx 2.44 \times 10^{25} \text{ (phân tử/m}^3\text{)}$

**Bài 2 (Trung bình):** Vận tốc căn quân phương của một loại phân tử khí ở $27^\circ C$ là $500 \text{ m/s}$. Tính vận tốc căn quân phương của chính loại khí đó ở $127^\circ C$.
**Giải chi tiết:**
*   Nhiệt độ $T_1 = 27 + 273 = 300 \text{ K}$. Vận tốc $v_1 = 500 \text{ m/s}$.
*   Nhiệt độ $T_2 = 127 + 273 = 400 \text{ K}$. Vận tốc $v_2 = ?$
*   Vì $v_{rms} \propto \sqrt{T}$, ta có: $\frac{v_2}{v_1} = \sqrt{\frac{T_2}{T_1}}$
*   $v_2 = 500 \times \sqrt{\frac{400}{300}} = 500 \times \frac{2}{\sqrt{3}} \approx 577.35 \text{ m/s}$.

**Bài 3 (Vận dụng):** Một đoạn dây dẫn thẳng dài $20 \text{ cm}$ mang dòng điện $5 \text{ A}$ đặt trong từ trường đều có cảm ứng từ $B = 0.4 \text{ T}$. Biết lực từ tác dụng lên đoạn dây dẫn là $0.2 \text{ N}$. Tính góc hợp bởi dây dẫn và đường sức từ.
**Giải chi tiết:**
*   Ta có: $F = B I L \sin\theta$
*   Thay số: $0.2 = 0.4 \times 5 \times 0.2 \times \sin\theta$
*   $0.2 = 0.4 \times \sin\theta \Rightarrow \sin\theta = \frac{0.2}{0.4} = 0.5$
*   Suy ra $\theta = 30^\circ$ (hoặc $\theta = 150^\circ$).

**Bài 4 (Nâng cao):** Một thanh đồng thau chiều dài $L = 50 \text{ cm}$, khối lượng $m = 50 \text{ g}$ được treo bằng hai sợi dây mảnh không dãn, có cùng chiều dài trong một từ trường đều $B = 0.2 \text{ T}$ có phương thẳng đứng hướng từ trên xuống. Cho dòng điện $I$ chạy qua thanh thì thấy thanh bị đẩy sang một bên, làm cho hai dây treo lệch một góc $\alpha = 15^\circ$ so với phương thẳng đứng khi cân bằng. Lấy $g = 9.8 \text{ m/s}^2$. Tính cường độ dòng điện $I$.
**Giải chi tiết:**
*   Lực tác dụng lên thanh đồng thau gồm: Trọng lực $\vec{P}$ (hướng xuống), Lực từ $\vec{F}$ (phương ngang do $\vec{B}$ hướng dọc và thanh nằm ngang), Lực căng dây $2\vec{T}$.
*   Mặt phẳng chứa $\vec{B}$ (thẳng đứng) vuông góc với thanh nằm ngang nên góc giữa thanh và $\vec{B}$ là $90^\circ \Rightarrow F = BIL$.
*   Khi cân bằng, hợp lực của $\vec{P}$ và $\vec{F}$ cân bằng với tổng lực căng dây. Góc lệch $\alpha$ được tính bởi:
    $\tan\alpha = \frac{F}{P} = \frac{B I L}{m g}$
*   Suy ra: $I = \frac{m g \tan\alpha}{B L}$
*   Đổi đơn vị: $m = 0.05 \text{ kg}$, $L = 0.5 \text{ m}$.
*   Thay số: $I = \frac{0.05 \times 9.8 \times \tan(15^\circ)}{0.2 \times 0.5} \approx \frac{0.49 \times 0.2679}{0.1} \approx 1.31 \text{ A}$.

## 9. Bảng Rubric Đánh giá (Assessment Rubric)

| Tiêu chí (Criteria) | Xuất sắc (90-100đ) | Khá, Giỏi (75-89đ) | Đạt (50-74đ) | Chưa đạt (<50đ) |
| :--- | :--- | :--- | :--- | :--- |
| **Lý thuyết**<br>(Theory Comprehension - 30%) | Hiểu hoàn hảo mô hình động học, giải thích sâu sắc bản chất áp suất và nhiệt độ. Nhận diện thành thạo lực từ và vectơ B. | Nắm vững lý thuyết cơ bản, đôi khi nhầm lẫn nhỏ trong giải thích sâu. | Nhớ được các công thức nhưng chưa hiểu rõ bản chất vi mô. | Không thuộc công thức, nhầm lẫn các khái niệm cơ bản. |
| **Bài tập**<br>(Problem Solving - 30%) | Giải chính xác, trình bày logic, rõ ràng tất cả bài tập nâng cao và có phân tích kết quả. | Giải đúng hầu hết các bài, trình bày tương đối rõ ràng. Có thể sai sót nhỏ ở bài nâng cao. | Làm đúng bài cơ bản, gặp khó ở phần tính lực từ có góc nghiêng. | Trình bày cẩu thả, tính toán sai nhiều, thiếu đơn vị. |
| **Thực hành**<br>(Lab Skills - 25%) | Thao tác thí nghiệm chuẩn xác, an toàn tuyệt đối. Xử lý số liệu, vẽ đồ thị và tính sai số tốt. | Thực hiện đúng quy trình, vẽ đồ thị chấp nhận được, có chú ý an toàn. | Làm được thí nghiệm nhưng cần sự hỗ trợ nhiều. Xử lý số liệu còn lúng túng. | Không thực hiện được hoặc vi phạm nghiêm trọng quy tắc an toàn. |
| **Mô phỏng Python**<br>(Python Coding - 15%) | Viết code gọn gàng, có comment giải thích rõ ràng. Có thể thay đổi các tham số để tự mở rộng mô phỏng. | Code chạy đúng, vẽ đồ thị cơ bản giống mẫu. | Chỉ sao chép code mà không hiểu cách sửa đổi tham số. | Không chạy được code, gặp lỗi cú pháp cơ bản. |

---
*Tài liệu được biên soạn cho khóa học Vật lí 12 theo chương trình Kết Nối Tri Thức với Cuộc Sống.*
*Author: Antigravity AI Teaching Assistant.*

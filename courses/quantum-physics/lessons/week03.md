# Tuần 3: Phương Trình Schrödinger / Week 3: The Schrödinger Equation

## Mục Tiêu / Learning Objectives
- **Vietnamese:**
  1. Nắm bắt Phương trình Schrödinger Phụ thuộc Thời gian (TDSE) và Độc lập Thời gian (TISE).
  2. Hiểu và áp dụng phương pháp tách biến (Separation of variables).
  3. Khảo sát nghiệm của hạt tự do (Free particle) và tốc độ nhóm / tốc độ pha.
  4. Phân tích hiện tượng xuyên hầm lượng tử (Quantum tunneling) và các ứng dụng.
  5. Phát biểu được đầy đủ các tiên đề của Cơ học Lượng tử.

- **English:**
  1. Grasp the Time-Dependent (TDSE) and Time-Independent Schrödinger Equations (TISE).
  2. Understand and apply the separation of variables method.
  3. Investigate free particle solutions, phase velocity, and group velocity.
  4. Analyze quantum tunneling and its real-world applications.
  5. State the fundamental postulates of Quantum Mechanics.

## Bối Cảnh Lịch Sử / Historical Context
Vào năm 1926, lấy cảm hứng từ ý tưởng của de Broglie về sóng vật chất, nhà vật lý người Áo Erwin Schrödinger đã xây dựng một phương trình vi phân chi phối sự tiến hóa theo thời gian của hàm sóng.
Khác với cơ học cổ điển nơi ta dùng định luật Newton để theo dõi quỹ đạo, trong thế giới lượng tử, ta dùng phương trình Schrödinger để theo dõi sự lan truyền của xác suất. Phương trình này là một Tiên đề, không được chứng minh từ các nguyên lý khác, nhưng độ chính xác của nó đã được kiểm chứng qua vô số thực nghiệm, từ nguyên tử hydro đến công nghệ bán dẫn hiện đại.

## Lý Thuyết / Theory

### 1. Phương Trình Schrödinger Phụ Thuộc Thời Gian (TDSE) / Time-Dependent Schrödinger Equation
Phương trình chi phối mọi trạng thái lượng tử không tương đối tính:
$$ i\hbar\frac{\partial\Psi}{\partial t} = \hat{H}\Psi = \left[-\frac{\hbar^2}{2m}\frac{\partial^2}{\partial x^2} + V(x)\right]\Psi $$
- $\Psi(x,t)$: Hàm sóng
- $\hat{H}$: Toán tử Hamiltonian

Sự bảo toàn xác suất (Conservation of probability):
$$ \frac{\partial}{\partial t}|\Psi|^2 + \frac{\partial j}{\partial x} = 0 $$
Với $j$ là dòng xác suất / probability current:
$$ j = \frac{\hbar}{2mi}\left(\Psi^*\frac{\partial\Psi}{\partial x} - \Psi\frac{\partial\Psi^*}{\partial x}\right) $$

### 2. Phương Trình Độc Lập Thời Gian (TISE) / Time-Independent Schrödinger Equation
Nếu thế năng $V(x)$ không phụ thuộc thời gian, ta dùng phương pháp tách biến:
Giả sử: $\Psi(x,t) = \psi(x)\cdot \phi(t)$
Thay vào TDSE, ta thu được:
$$ \phi(t) = e^{-iEt/\hbar} $$
Và TISE:
$$ -\frac{\hbar^2}{2m}\frac{d^2\psi}{dx^2} + V(x)\psi = E\psi $$
Đây là phương trình trị riêng (Eigenvalue equation), với $E$ là mức năng lượng.
Nghiệm tổng quát là sự xếp chồng (superposition):
$$ \Psi(x,t) = \sum_n c_n \psi_n(x) e^{-iE_nt/\hbar} $$

### 3. Hạt Tự Do (Free Particle) / Free Particle
Khi $V(x) = 0$, TISE trở thành:
$$ -\frac{\hbar^2}{2m}\frac{d^2\psi}{dx^2} = E\psi $$
Nghiệm: $\psi(x) = Ae^{ikx} + Be^{-ikx}$ với $k = \sqrt{2mE}/\hbar$.
Sóng phẳng / Plane wave: $\Psi(x,t) = Ae^{i(kx-\omega t)}$
- Tốc độ pha (Phase velocity): $v_{ph} = \frac{\omega}{k} = \frac{\hbar k}{2m} = \frac{p}{2m}$
- Tốc độ nhóm (Group velocity): $v_g = \frac{d\omega}{dk} = \frac{\hbar k}{m} = \frac{p}{m} = v_{classical}$

### 4. Xuyên Hầm Lượng Tử / Quantum Tunneling
Khi hạt đụng phải một hàng rào thế năng có độ cao $V_0 > E$, cơ học cổ điển nói hạt sẽ bị phản xạ. Cơ học lượng tử cho phép hạt "xuyên" qua.
- Sóng tắt dần (Evanescent wave) bên trong hàng rào: $\psi \propto e^{-\kappa x}$ với $\kappa = \frac{\sqrt{2m(V_0-E)}}{\hbar}$
- Hệ số truyền qua (Transmission coefficient, với hàng rào dày):
  $$ T \approx e^{-2\kappa L} $$
*Ứng dụng:* Phân rã alpha, kính hiển vi quét xuyên hầm (STM), phản ứng nhiệt hạch trong lõi mặt trời, bộ nhớ Flash (USB).

### 5. Các Tiên Đề của Cơ Học Lượng Tử / Postulates of Quantum Mechanics
1. Mọi trạng thái vật lý được mô tả hoàn toàn bằng hàm sóng $\Psi$.
2. Mỗi đại lượng vật lý (observable) tương ứng với một toán tử tuyến tính Hermitian.
3. Phép đo chỉ có thể cho kết quả là một trị riêng của toán tử đó.
4. Giá trị kỳ vọng được tính bằng $\langle A \rangle = \langle \Psi | \hat{A} | \Psi \rangle$.
5. Hàm sóng tiến hóa theo thời gian tuân theo TDSE.

## Ví Dụ Tính Toán / Worked Examples

**Ví dụ 1 / Example 1:**
Một electron với năng lượng 2 eV đập vào một hàng rào thế năng cao 5 eV và dày 0.1 nm. Ước tính xác suất electron xuyên qua hàng rào.
An electron with 2 eV energy strikes a potential barrier of 5 eV and 0.1 nm thickness. Estimate the tunneling probability.

**Giải / Solution:**
1. Tính $\kappa$:
   $$ \kappa = \frac{\sqrt{2m_e(V_0-E)}}{\hbar} $$
   $$ V_0 - E = 3 \text{ eV} = 3 \times 1.6 \times 10^{-19} \text{ J} = 4.8 \times 10^{-19} \text{ J} $$
   $$ \kappa = \frac{\sqrt{2 \times 9.11 \times 10^{-31} \times 4.8 \times 10^{-19}}}{1.055 \times 10^{-34}} \approx 8.87 \times 10^9 \text{ m}^{-1} $$
2. Tính hệ số xuyên hầm $T$:
   $$ 2\kappa L = 2 \times (8.87 \times 10^9) \times (0.1 \times 10^{-9}) = 1.774 $$
   $$ T \approx e^{-1.774} \approx 0.17 \text{ (hay 17%)} $$
Vậy có khoảng 17% cơ hội hạt sẽ xuyên qua!

## Code Python / Python Simulation

```python
import numpy as np
import matplotlib.pyplot as plt
from numpy.fft import fft, ifft, fftfreq

def simulate_tunneling(L=20, N=1024, dt=0.005, T=5.0,
                       x0=-5, k0=8, sigma=1.0,
                       V0=50, barrier_start=0, barrier_width=0.5):
    """
    Mô phỏng xuyên hầm lượng tử / Quantum tunneling simulation
    Sử dụng phương pháp split-step Fourier / Split-step Fourier method
    (Natural units: ℏ=1, m=1)
    """
    x = np.linspace(-L/2, L/2, N)
    dx = x[1] - x[0]
    dk = 2*np.pi / (N*dx)
    k = fftfreq(N, d=dx/(2*np.pi))
    
    # Potential barrier / Hàng rào thế
    V = np.zeros(N)
    mask = (x >= barrier_start) & (x <= barrier_start + barrier_width)
    V[mask] = V0
    
    # Initial Gaussian wave packet / Gói sóng Gaussian ban đầu
    psi = np.exp(-(x-x0)**2/(2*sigma**2)) * np.exp(1j*k0*x)
    psi /= np.sqrt(np.sum(np.abs(psi)**2)*dx)  # Normalize
    
    # Half-step operators / Toán tử bước nửa
    exp_V = np.exp(-1j * V * dt/2)   # Half position step
    exp_K = np.exp(-1j * k**2/2 * dt) # Full momentum step
    
    snapshots = []
    n_steps = int(T/dt)
    for step in range(n_steps):
        psi = exp_V * psi
        psi = ifft(exp_K * fft(psi))
        psi = exp_V * psi
        if step % (n_steps//8) == 0:
            snapshots.append((step*dt, x, np.abs(psi)**2, V/V0*5))
    
    # Calculate transmission / Tính hệ số truyền qua
    prob_right = np.sum(np.abs(psi[x > barrier_start + barrier_width])**2) * dx
    prob_left  = np.sum(np.abs(psi[x < barrier_start])**2) * dx
    T_coeff = prob_right / (prob_right + prob_left)
    print(f'Tunneling coefficient T = {T_coeff:.4f}')
    
    # Analytical approximation
    kappa = np.sqrt(2*(np.maximum(0, V0 - k0**2/2)))  # (natural units)
    T_analytical = np.exp(-2*kappa*barrier_width)
    print(f'Analytical T ≈ exp(-2κL) = {T_analytical:.4f}')
    
    # Plot
    fig, axes = plt.subplots(2, 4, figsize=(14, 6))
    colors = plt.cm.plasma(np.linspace(0, 1, len(snapshots)))
    for i, (t, x_s, prob, V_s) in enumerate(snapshots):
        ax = axes.flat[i]
        ax.fill_between(x_s, V_s, alpha=0.3, color='gray', label='Barrier')
        ax.plot(x_s, prob, color=colors[i], lw=2)
        ax.set_title(f't={t:.1f}'); ax.set_ylim(0, None); ax.grid(alpha=0.3)
    plt.suptitle('Xuyên Hầm Lượng Tử / Quantum Tunneling', fontsize=13)
    plt.tight_layout(); plt.savefig('week03_tunneling.png', dpi=150)
    return T_coeff
```

## ⚠️ Hiểu Lầm Thường Gặp / Common Misconceptions
1. **Hạt bay xuyên qua hàng rào bằng cách khoét lỗ:** Tunneling không phá hỏng hàng rào. Nó xảy ra do bản chất sóng của vật chất "rò rỉ" qua vùng cấm cổ điển.
   **Particles physically drill holes:** Tunneling doesn't damage the barrier. It is purely the wave nature of matter leaking through a classically forbidden region.
2. **Năng lượng không được bảo toàn:** Thực tế, khi xuyên hầm hạt vẫn giữ nguyên tổng năng lượng $E$, nó chỉ nằm ở vùng mà $V > E$.
   **Energy is not conserved:** The particle's total energy $E$ remains constant; it just exists in a region where kinetic energy would classically be negative.

## Câu Hỏi Thảo Luận / Discussion
1. Phương pháp tách biến (Separation of variables) thất bại khi nào? / When does the separation of variables method fail?
2. Tại sao phương trình Schrödinger độc lập thời gian lại là một bài toán trị riêng? / Why is the Time-Independent Schrödinger Equation an eigenvalue problem?
3. Trình bày cơ chế vật lý giúp mặt trời phát sáng nhờ hiệu ứng xuyên hầm. / Explain the physical mechanism by which quantum tunneling allows the sun to shine.
4. Điều gì sẽ xảy ra nếu hằng số Planck bằng không? / What would happen to tunneling if Planck's constant were zero?
5. Nếu xuyên hầm luôn có thể xảy ra, tại sao con người không thể đi xuyên tường? / If tunneling is always possible, why can't humans walk through walls?

## Bài Tập / Homework Problems
1. Chứng minh rằng dòng xác suất $j$ của sóng phẳng $\Psi(x) = Ae^{ikx}$ là hằng số và độc lập với vị trí.
   Prove that the probability current $j$ for a plane wave $\Psi(x) = Ae^{ikx}$ is constant and position-independent.
2. Thiết lập TISE cho hệ một hạt chịu lực cản đàn hồi lý tưởng (Harmonic oscillator).
   Set up the TISE for a particle under an ideal elastic restoring force (Harmonic oscillator).
3. Một proton đập vào hàng rào 5 MeV. Nếu thay proton bằng hạt alpha (gấp 4 lần khối lượng), tỷ lệ xuyên hầm thay đổi thế nào?
   A proton hits a 5 MeV barrier. If replaced by an alpha particle (4x mass), how does the tunneling probability change?

## Đánh Giá / Assessment Rubric
| Tiêu Chí / Criteria | Xuất Sắc / Excellent (9-10) | Khá / Good (7-8) | Cơ Bản / Basic (5-6) |
|---------------------|-----------------------------|------------------|----------------------|
| Hiểu phương trình | Vận dụng linh hoạt TDSE và TISE, hiểu rõ ranh giới áp dụng. | Nắm được định dạng phương trình. | Hay nhầm lẫn TDSE và TISE. |
| Xuyên hầm | Giải bài tập xuyên hầm tốt, hiểu được hàm mũ giảm dần. | Tính T được nhưng hay nhầm hằng số. | Không biết áp dụng công thức suy giảm. |
| Python / Code | Có khả năng sửa dt, dx, dx ổn định để tránh lỗi phân kỳ. | Chạy được và hiểu code FFT. | Chưa hiểu FFT và không chạy được. |

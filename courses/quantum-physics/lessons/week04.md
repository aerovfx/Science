# Tuần 4: Giếng Thế & Dao Động Tử Điều Hòa Lượng Tử / Week 4: Potential Wells & Quantum Harmonic Oscillator

## Mục Tiêu / Learning Objectives
- **Vietnamese:**
  1. Giải phương trình Schrödinger cho Giếng thế vuông sâu vô hạn (Hạt trong hộp).
  2. Hiểu nguyên lý xuất hiện Năng lượng điểm không (Zero-point energy).
  3. Phân tích các trạng thái liên kết trong Giếng thế hữu hạn.
  4. Nắm bắt khái niệm và toán tử của Dao Động Tử Điều Hòa Lượng Tử (QHO).
  5. Tính toán các mức năng lượng và vận dụng các đa thức Hermite.

- **English:**
  1. Solve the Schrödinger equation for the Infinite Square Well (Particle in a Box).
  2. Understand the origin of Zero-point energy.
  3. Analyze bound states in a Finite Square Well.
  4. Grasp the concepts and operators of the Quantum Harmonic Oscillator (QHO).
  5. Calculate energy levels and apply Hermite polynomials.

## Bối Cảnh Lịch Sử / Historical Context
Sau khi có được phương trình Schrödinger, các nhà vật lý bắt đầu thử nghiệm nó với các hệ vật lý đơn giản nhất. "Hạt trong hộp" là mô hình lý tưởng để chứng minh sự lượng tử hóa sinh ra một cách tự nhiên từ các điều kiện biên.
Hệ dao động tử điều hòa lượng tử có vai trò cực kỳ quan trọng vì nó xấp xỉ gần như mọi thế năng ở điểm cân bằng bền. Paul Dirac sau đó đã sử dụng phương pháp đại số (toán tử sinh-hủy) để giải bài toán này, tạo tiền đề cho Lý thuyết Trường Lượng tử (QFT).

## Lý Thuyết / Theory

### 1. Giếng Thế Vuông Vô Hạn (Particle in a Box)
Giả sử $V(x) = 0$ cho $0 < x < L$, và $V = \infty$ ở bên ngoài.
Điều kiện biên (Boundary conditions): $\psi(0) = \psi(L) = 0$.
Giải TISE: $-\frac{\hbar^2}{2m}\frac{d^2\psi}{dx^2} = E\psi$
Nghiệm hàm sóng (Wave functions):
$$ \psi_n(x) = \sqrt{\frac{2}{L}}\sin\left(\frac{n\pi x}{L}\right), \quad n=1,2,3,... $$
Mức năng lượng (Energy levels):
$$ E_n = \frac{n^2\pi^2\hbar^2}{2mL^2} = \frac{n^2h^2}{8mL^2} $$
**Năng lượng điểm không:** $E_1 \neq 0$. Hạt không bao giờ có thể đứng yên hoàn toàn do Nguyên lý Bất định Heisenberg.

### 2. Giếng Thế Hữu Hạn (Finite Square Well)
Khi $V_0$ hữu hạn, sóng không biến mất đột ngột tại biên mà có "đuôi rò rỉ" (penetration) vào vùng cấm cổ điển.
- Bên trong giếng: Sóng dạng $\sin(kx)$ hoặc $\cos(kx)$ với $k=\sqrt{2mE}/\hbar$.
- Bên ngoài giếng: Sóng dạng $e^{-\kappa x}$ với $\kappa=\sqrt{2m(V_0-E)}/\hbar$.
Năng lượng bị lượng tử hóa và có số lượng trạng thái bị chặn (bound states) hữu hạn. Luôn có ít nhất một trạng thái bị chặn dù giếng cạn đến đâu.

### 3. Dao Động Tử Điều Hòa Lượng Tử (QHO)
Thế năng parabol: $V(x) = \frac{1}{2}m\omega^2 x^2$
Mức năng lượng:
$$ E_n = \left(n+\frac{1}{2}\right)\hbar\omega, \quad n=0,1,2,... $$
Năng lượng nền (Zero-point energy): $E_0 = \frac{1}{2}\hbar\omega$
Hàm sóng: $\psi_n(x) = A_n H_n(\xi)e^{-\xi^2/2}$ với $\xi = x/x_0$ và chiều dài đặc trưng $x_0=\sqrt{\hbar/m\omega}$.
$H_n$ là đa thức Hermite:
- $H_0 = 1$
- $H_1 = 2\xi$
- $H_2 = 4\xi^2-2$

### 4. Phương Pháp Toán Tử (Ladder Operators)
Toán tử hạ (Annihilation/lowering): $\hat{a} = \frac{1}{\sqrt{2}}(\hat{\xi} + i\hat{p}/\hbar)$
Toán tử nâng (Creation/raising): $\hat{a}^\dagger = \frac{1}{\sqrt{2}}(\hat{\xi} - i\hat{p}/\hbar)$
Tính chất:
- $\hat{a}|n\rangle = \sqrt{n}|n-1\rangle$
- $\hat{a}^\dagger|n\rangle = \sqrt{n+1}|n+1\rangle$
Hamiltonian: $\hat{H} = \hbar\omega(\hat{a}^\dagger\hat{a} + \frac{1}{2})$

## Ví Dụ Tính Toán / Worked Examples

**Ví dụ 1 / Example 1:**
Tính 3 mức năng lượng đầu tiên của một electron bị nhốt trong một hộp lượng tử 1D dài $1$ nm.
Calculate the first 3 energy levels of an electron trapped in a 1D quantum box of length 1 nm.

**Giải / Solution:**
Công thức $E_n = \frac{n^2 h^2}{8mL^2}$.
1. Tính hằng số chung $E_1$:
   $$ h = 6.626 \times 10^{-34} \text{ Js}, m = 9.109 \times 10^{-31} \text{ kg}, L = 10^{-9} \text{ m} $$
   $$ E_1 = \frac{(6.626 \times 10^{-34})^2}{8 \times 9.109 \times 10^{-31} \times (10^{-9})^2} \approx 6.02 \times 10^{-20} \text{ J} $$
2. Chuyển sang eV:
   $$ E_1 \approx \frac{6.02 \times 10^{-20}}{1.6 \times 10^{-19}} \approx 0.376 \text{ eV} $$
3. Các mức tiếp theo:
   $$ E_2 = 2^2 \times E_1 = 4 \times 0.376 = 1.504 \text{ eV} $$
   $$ E_3 = 3^2 \times E_1 = 9 \times 0.376 = 3.384 \text{ eV} $$

## Code Python / Python Simulation

```python
import numpy as np
from scipy.special import hermite, factorial
import matplotlib.pyplot as plt

def qho_wavefunction(n, x, x0=1.0):
    """
    Hàm sóng dao động tử điều hòa lượng tử / QHO wave function
    n: quantum number, x: position, x0: characteristic length
    ψ_n(x) = (1/√(2ⁿn!)) × (1/πx₀²)^(1/4) × H_n(x/x0) × exp(-x²/2x₀²)
    """
    xi = x / x0
    Hn = hermite(n)(xi)
    norm = 1 / np.sqrt(2**n * factorial(n)) * (1/(np.pi * x0**2))**0.25
    return norm * Hn * np.exp(-xi**2/2)

x = np.linspace(-5, 5, 1000)
fig, axes = plt.subplots(2, 4, figsize=(14, 7))

for n in range(8):
    ax = axes.flat[n]
    psi = qho_wavefunction(n, x)
    En = n + 0.5  # Natural units ℏω=1
    
    # Wave function + probability
    ax.plot(x, psi + En, 'b-', lw=1.5, label=f'ψ_{n}', alpha=0.8)
    ax.fill_between(x, En, psi + En, where=(psi>0), alpha=0.2, color='blue')
    ax.fill_between(x, En, psi + En, where=(psi<0), alpha=0.2, color='red')
    
    # Classical turning points / Điểm quay cổ điển
    x_class = np.sqrt(2*En)  # x² = 2E in natural units
    ax.axvline(x_class, color='g', ls='--', alpha=0.5, lw=1)
    ax.axvline(-x_class, color='g', ls='--', alpha=0.5, lw=1)
    ax.axhline(En, color='k', ls=':', lw=1, alpha=0.5)  # Energy level
    
    ax.set_title(f'n={n}, E={En:.1f}ℏω', fontsize=10)
    ax.set_ylim(-0.5, 9)
    ax.set_xlim(-5, 5)
    ax.grid(alpha=0.2)

# Parabolic potential on all
for ax in axes.flat:
    V = 0.5 * x**2
    ax.plot(x, V, 'k-', lw=1.5, alpha=0.4)

plt.suptitle('Dao Động Tử Điều Hòa Lượng Tử / QHO Wave Functions', fontsize=13)
plt.tight_layout(); plt.savefig('week04_qho.png', dpi=150)
```

## ⚠️ Hiểu Lầm Thường Gặp / Common Misconceptions
1. **Năng lượng trạng thái cơ bản bằng 0:** Khác với cổ điển, tại trạng thái nền (ground state), hệ lượng tử vẫn có năng lượng $E_0 > 0$. Điều này giải thích tại sao Helium không đóng băng ở 0 tuyệt đối dưới áp suất thường.
   **Ground state energy is zero:** Unlike classical physics, the lowest energy state is strictly positive, satisfying the uncertainty principle.
2. **Khoảng cách năng lượng:** Trong giếng thế vuông, khoảng cách $\Delta E$ tăng theo $n$. Trong QHO, khoảng cách là hằng số $\hbar\omega$. Nhiều người nhầm lẫn hai hệ này.
   **Energy gap behavior:** In a square well, $\Delta E$ grows with $n$. In QHO, $\Delta E$ is completely uniform ($\hbar\omega$).

## Câu Hỏi Thảo Luận / Discussion
1. Sự khác biệt lớn nhất giữa hạt trong hộp và dao động tử điều hòa là gì? / What is the biggest difference between particle in a box and QHO?
2. Ứng dụng thực tiễn của giếng thế trong công nghệ hiện đại là gì? (Gợi ý: Lượng tử chấm / Quantum dots). / Real-world applications of quantum wells?
3. Tại sao toán tử sinh và toán tử hủy (ladder operators) lại mang tính đột phá trong toán lý? / Why are ladder operators considered a breakthrough?
4. Đa thức Hermite có những đặc điểm gì giúp cho các hàm sóng này tạo thành hệ trực giao? / What features of Hermite polynomials ensure orthogonality?
5. Tại sao vật lý phân tử lại sử dụng QHO nhiều đến vậy? / Why does molecular physics use QHO so heavily?

## Bài Tập / Homework Problems
1. Tính $\langle x \rangle$ và $\langle x^2 \rangle$ cho hạt trong giếng thế vuông ở trạng thái nền.
   Calculate $\langle x \rangle$ and $\langle x^2 \rangle$ for a particle in a square well in its ground state.
2. Sử dụng toán tử $\hat{a}$ và $\hat{a}^\dagger$, chứng minh rằng $\langle n | \hat{x} | n \rangle = 0$.
   Using ladder operators, prove that $\langle n | \hat{x} | n \rangle = 0$.
3. Xác định mức năng lượng photon phát ra khi QHO chuyển từ trạng thái $n=3$ xuống $n=2$.
   Determine the emitted photon energy when a QHO transitions from $n=3$ to $n=2$.

## Đánh Giá / Assessment Rubric
| Tiêu Chí / Criteria | Xuất Sắc / Excellent (9-10) | Khá / Good (7-8) | Cơ Bản / Basic (5-6) |
|---------------------|-----------------------------|------------------|----------------------|
| Kiến thức / Knowledge | Áp dụng đúng đa thức Hermite và phân tích sâu. | Nắm được công thức QHO, làm đúng đa số. | Nhớ sai công thức hoặc nhầm lẫn giếng/QHO. |
| Toán học / Math | Thành thạo đại số toán tử sinh/hủy. | Còn chậm nhưng giải đúng. | Chưa hiểu cách dùng toán tử sinh/hủy. |
| Code | Có thể mở rộng code cho giếng thế hữu hạn. | Chạy thành công. | Không hoàn thành mô phỏng. |

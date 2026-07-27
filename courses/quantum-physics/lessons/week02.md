# Tuần 2: Hàm Sóng & Nguyên Lý Bất Định / Week 2: Wave Function & The Uncertainty Principle

## Mục Tiêu / Learning Objectives
- **Vietnamese:**
  1. Nắm vững ý nghĩa vật lý của hàm sóng và diễn giải Born (Born rule).
  2. Áp dụng được các toán tử lượng tử cơ bản (vị trí, động lượng, năng lượng).
  3. Tính toán các giá trị kỳ vọng và độ lệch chuẩn.
  4. Hiểu sâu sắc và áp dụng Nguyên lý Bất định Heisenberg.
  5. Phân tích gói sóng Gaussian và sự phân tán của nó theo thời gian.

- **English:**
  1. Master the physical meaning of the wave function and the Born interpretation.
  2. Apply basic quantum operators (position, momentum, energy).
  3. Calculate expectation values and standard deviations.
  4. Deeply understand and apply the Heisenberg Uncertainty Principle.
  5. Analyze the Gaussian wave packet and its spreading over time.

## Bối Cảnh Lịch Sử / Historical Context
Sau giả thuyết de Broglie, vật lý cần một phương trình mô tả các "sóng vật chất" này. Năm 1926, Erwin Schrödinger đã đưa ra phương trình mang tên ông, trong đó hàm sóng $\Psi$ đóng vai trò trung tâm. Tuy nhiên, bản chất của $\Psi$ ban đầu là một bí ẩn.
Max Born sau đó đề xuất rằng bình phương độ lớn của hàm sóng, $|\Psi|^2$, thể hiện mật độ xác suất tìm thấy hạt tại một vị trí, đây là nền tảng của Cơ học Lượng tử hiện đại (Diễn giải Copenhagen).
Hơn nữa, Werner Heisenberg đã phát biểu Nguyên lý Bất định vào năm 1927, làm rung chuyển nền tảng của vật lý quyết định luận.

## Lý Thuyết / Theory

### 1. Hàm Sóng và Xác Suất / Wave Function and Probability
Hàm sóng $\Psi(x,t)$ chứa đựng toàn bộ thông tin về trạng thái lượng tử của hệ.
Quy tắc Born (Born rule) định nghĩa mật độ xác suất:
$$ \rho(x,t) = |\Psi(x,t)|^2 = \Psi^*(x,t)\Psi(x,t) $$
Xác suất tìm thấy hạt trong khoảng $[a, b]$:
$$ P_{ab} = \int_{a}^{b} |\Psi(x,t)|^2 \, dx $$

Điều kiện chuẩn hóa / Normalization condition:
$$ \int_{-\infty}^{\infty} |\Psi(x,t)|^2 \, dx = 1 $$

### 2. Toán Tử Lượng Tử / Quantum Operators
Trong cơ học lượng tử, các đại lượng quan sát được (observables) tương ứng với các toán tử (operators).
- Vị trí / Position: $\hat{x} = x$
- Động lượng / Momentum: $\hat{p} = -i\hbar\frac{\partial}{\partial x}$
- Động năng / Kinetic energy: $\hat{T} = \frac{\hat{p}^2}{2m} = -\frac{\hbar^2}{2m}\frac{\partial^2}{\partial x^2}$
- Toán tử Hamilton (Tổng năng lượng) / Hamiltonian: $\hat{H} = \hat{T} + \hat{V} = -\frac{\hbar^2}{2m}\frac{\partial^2}{\partial x^2} + V(x)$

### 3. Giá Trị Kỳ Vọng / Expectation Values
Giá trị kỳ vọng của một đại lượng $A$ là trung bình của nhiều lần đo trên các hệ giống hệt nhau.
- Kỳ vọng vị trí / Expected position:
  $$ \langle x \rangle = \int_{-\infty}^{\infty} \Psi^* x \Psi \, dx $$
- Kỳ vọng động lượng / Expected momentum:
  $$ \langle p \rangle = \int_{-\infty}^{\infty} \Psi^* \left(-i\hbar\frac{\partial}{\partial x}\right) \Psi \, dx $$

### 4. Độ Lệch Chuẩn và Bất Định / Standard Deviation and Uncertainty
Độ lệch chuẩn đo lường sự phân tán của kết quả quanh giá trị kỳ vọng:
$$ \sigma_x = \sqrt{\langle x^2 \rangle - \langle x \rangle^2} $$
$$ \sigma_p = \sqrt{\langle p^2 \rangle - \langle p \rangle^2} $$

### 5. Nguyên Lý Bất Định Heisenberg / Heisenberg Uncertainty Principle
Không thể đồng thời biết chính xác cả vị trí và động lượng của một hạt.
$$ \sigma_x \cdot \sigma_p \geq \frac{\hbar}{2} $$
Tương tự cho năng lượng và thời gian / Energy-time uncertainty:
$$ \sigma_E \cdot \sigma_t \geq \frac{\hbar}{2} $$
*Hệ quả:* Năng lượng chân không khác không (zero-point energy).

### 6. Gói Sóng Gaussian / Gaussian Wave Packet
Một hạt tự do thường được mô tả bởi một gói sóng Gaussian:
$$ \Psi(x,0) = \left(\frac{1}{2\pi\sigma^2}\right)^{1/4} e^{-x^2/4\sigma^2} e^{ik_0x} $$
Trong không gian động lượng (qua biến đổi Fourier):
$$ \phi(k) = (2\pi\sigma^2)^{1/4}e^{-\sigma^2(k-k_0)^2} $$
Gói sóng này là trạng thái đạt giới hạn tối thiểu của nguyên lý bất định: $\Delta x \cdot \Delta p = \hbar/2$.

### 7. Ký Hiệu Dirac / Dirac Notation
Giới thiệu Ket và Bra:
- Ket: $|\psi\rangle$ mô tả trạng thái.
- Bra: $\langle\psi|$ là liên hợp phức.
- Tích vô hướng / Inner product: $\langle\phi|\psi\rangle = \int \phi^* \psi \, dx$

## Ví Dụ Tính Toán / Worked Examples

**Ví dụ 1 / Example 1:**
Tính động lượng bất định tối thiểu $\sigma_p$ của một electron bị giam trong một vùng kích thước $\sigma_x = 10^{-10}$ m (kích thước nguyên tử). Tính động năng tương ứng của nó.
Calculate the minimum momentum uncertainty $\sigma_p$ of an electron confined to a region of $\sigma_x = 10^{-10}$ m. Calculate its corresponding kinetic energy.

**Giải / Solution:**
1. Áp dụng Nguyên lý Bất định / Apply Uncertainty Principle:
   $$ \sigma_p \geq \frac{\hbar}{2\sigma_x} = \frac{1.055 \times 10^{-34}}{2 \times 10^{-10}} = 5.275 \times 10^{-25} \text{ kg·m/s} $$
2. Động năng / Kinetic energy:
   Vì $p \approx \sigma_p$, ta có:
   $$ K \approx \frac{p^2}{2m} = \frac{(5.275 \times 10^{-25})^2}{2 \times 9.109 \times 10^{-31}} \approx 1.53 \times 10^{-19} \text{ J} $$
3. Chuyển sang eV / Convert to eV:
   $$ K \approx \frac{1.53 \times 10^{-19}}{1.602 \times 10^{-19}} \approx 0.95 \text{ eV} $$

## Code Python / Python Simulation

```python
import numpy as np
import matplotlib.pyplot as plt
from matplotlib.animation import FuncAnimation

def gaussian_packet(x, t, x0=0, k0=5, sigma=0.5, hbar=1, m=1):
    """
    Gói sóng Gaussian / Gaussian wave packet evolution
    (Natural units: ℏ=1, m=1)
    """
    # Width evolves in time / Độ rộng thay đổi theo thời gian
    sigma_t = sigma * np.sqrt(1 + (hbar*t/(2*m*sigma**2))**2)
    phase = hbar*k0**2*t/(2*m) - k0*x0
    exponent = -(x - x0 - hbar*k0*t/m)**2 / (4*sigma_t**2)
    normalization = (2*np.pi*sigma_t**2)**(-1/4)
    psi = normalization * np.exp(exponent) * np.exp(1j*(k0*x + phase))
    return psi

x = np.linspace(-10, 10, 1000)
times = [0, 0.5, 1.0, 2.0, 4.0]
fig, axes = plt.subplots(2, 1, figsize=(10, 8))
colors = plt.cm.viridis(np.linspace(0, 1, len(times)))

for t, col in zip(times, colors):
    psi = gaussian_packet(x, t)
    prob = np.abs(psi)**2
    axes[0].plot(x, prob, color=col, lw=2, label=f't={t}')
    axes[1].plot(x, np.real(psi), color=col, lw=1.5, alpha=0.8)

# Uncertainty check / Kiểm tra nguyên lý bất định
psi0 = gaussian_packet(x, 0, sigma=0.5)
prob0 = np.abs(psi0)**2
dx = x[1]-x[0]
x_mean = np.sum(x * prob0) * dx
x2_mean = np.sum(x**2 * prob0) * dx
sigma_x = np.sqrt(x2_mean - x_mean**2)
print(f'σ_x = {sigma_x:.4f}')
print(f'σ_p ≥ ℏ/(2σ_x) = {1/(2*sigma_x):.4f}')
print(f'σ_x·σ_p ≥ ℏ/2 = 0.5 ✓' if sigma_x > 0.4 else 'Check!')

axes[0].set(xlabel='x', ylabel='|Ψ|² (xác suất)', title='Gói sóng Gaussian / Gaussian Wave Packet')
axes[1].set(xlabel='x', ylabel='Re(Ψ)', title='Phần thực / Real Part')
for ax in axes: ax.legend(fontsize=8); ax.grid(alpha=0.3)
plt.tight_layout(); plt.savefig('week02_wavepacket.png', dpi=150)
```

## ⚠️ Hiểu Lầm Thường Gặp / Common Misconceptions
1. **Sự bất định do thiếu thiết bị tinh vi:** Bất định Heisenberg không phải do lỗi đo lường hay thiếu công nghệ; nó là bản chất cốt lõi của vũ trụ.
   **Uncertainty is due to poor equipment:** Heisenberg's uncertainty is not an experimental error or technological limit; it is a fundamental property of nature.
2. **Hạt bay lượn ngẫu nhiên:** Hàm sóng không mô tả hạt di chuyển ngoằn ngoèo, mà nó mô tả sự trải rộng của chính hạt đó trong không gian xác suất.
   **Particles zigzag randomly:** The wave function doesn't describe a particle taking a wavy path, but rather the distribution of probability itself.

## Câu Hỏi Thảo Luận / Discussion
1. Tại sao hàm sóng lại là một số phức? Điều này có vi phạm thực tế vật lý không? / Why is the wave function complex? Does this violate physical reality?
2. Nếu hàm sóng sụp đổ khi đo đạc, điều gì xảy ra với thông tin trước khi đo? / If the wave function collapses upon measurement, what happens to the prior information?
3. Nguyên lý Heisenberg ảnh hưởng thế nào đến sự tồn tại bền vững của nguyên tử? / How does Heisenberg's principle ensure the stability of atoms?
4. Động lượng kỳ vọng của một gói sóng có thay đổi theo thời gian nếu không có lực tác dụng? / Does the expected momentum of a wave packet change over time without external forces?
5. Việc chuẩn hóa hàm sóng có ý nghĩa quan trọng như thế nào? / Why is normalizing the wave function so important?

## Bài Tập / Homework Problems
1. Chứng minh rằng hàm số $\Psi(x) = A e^{-kx}$ (với $x > 0$) có thể được chuẩn hóa và tìm hằng số $A$.
   Prove that $\Psi(x) = A e^{-kx}$ (for $x > 0$) can be normalized and find the constant $A$.
2. Tính $\langle x \rangle$ và $\langle x^2 \rangle$ cho hàm số đã được chuẩn hóa ở câu 1.
   Calculate $\langle x \rangle$ and $\langle x^2 \rangle$ for the normalized function in problem 1.
3. Cho hàm sóng của hạt có dạng xung chữ nhật. Tính $\Delta x$ và ước tính tối thiểu của $\Delta p$.
   Given a wave function as a rectangular pulse, calculate $\Delta x$ and estimate the minimum $\Delta p$.

## Đánh Giá / Assessment Rubric
| Tiêu Chí / Criteria | Xuất Sắc / Excellent (9-10) | Khá / Good (7-8) | Cơ Bản / Basic (5-6) |
|---------------------|-----------------------------|------------------|----------------------|
| Khái niệm / Concepts| Thấu hiểu Born Rule và các toán tử, áp dụng linh hoạt. | Hiểu quy tắc Born, tính toán cơ bản. | Chưa hiểu rõ sự khác biệt giữa kỳ vọng và xác suất. |
| Toán học / Math | Giải tích phân chính xác, làm chủ được số phức. | Có lỗi nhỏ trong tích phân. | Gặp khó khăn với đạo hàm, tích phân. |
| Python / Code | Tự code mô phỏng, thay đổi thông số gói sóng thành thạo. | Hiểu và chạy được code. | Chỉ copy/paste mà không hiểu. |

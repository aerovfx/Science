# Tuần 5: Nguyên Tử Hydrogen & Số Lượng Tử / Week 5: The Hydrogen Atom & Quantum Numbers

## Mục Tiêu / Learning Objectives
- **Vietnamese:**
  1. Giải phương trình Schrödinger 3D cho hệ lực trung tâm (Coulomb potential).
  2. Hiểu cấu trúc của hàm sóng Hydrogen: Phần góc (Hàm cầu hài) và Phần hướng kính (Đa thức Laguerre).
  3. Phân loại 4 Số lượng tử ($n, l, m, m_s$) và ý nghĩa vật lý của chúng.
  4. Nắm bắt khái niệm Spin, ma trận Pauli và Thí nghiệm Stern-Gerlach.
  5. Xây dựng cấu hình electron của các nguyên tử cơ bản qua Nguyên lý Pauli và Quy tắc Hund.

- **English:**
  1. Solve the 3D Schrödinger equation for a central force system.
  2. Understand the Hydrogen wave function structure: Angular (Spherical harmonics) and Radial parts (Laguerre polynomials).
  3. Categorize the 4 Quantum numbers ($n, l, m, m_s$) and their physical significance.
  4. Grasp the concept of Spin, Pauli matrices, and the Stern-Gerlach experiment.
  5. Build atomic electron configurations using the Pauli exclusion principle and Hund's rules.

## Bối Cảnh Lịch Sử / Historical Context
Nguyên tử Hydro là hệ đơn giản nhất, là phép thử vĩ đại của cơ học lượng tử. Mô hình Bohr (1913) tuy dự đoán đúng mức năng lượng nhưng thất bại trong việc giải thích cấu trúc tinh tế (fine structure) và liên kết hóa học.
Schrödinger áp dụng phương trình của mình vào hệ tọa độ cầu 3D, với thế Coulomb, và tìm ra chính xác các mức năng lượng một cách tự nhiên. Hình dạng các Orbital (s, p, d, f) từ toán học lượng tử giải thích trực tiếp bảng tuần hoàn các nguyên tố hóa học của Mendeleev, nối liền Vật lý và Hóa học.

## Lý Thuyết / Theory

### 1. Phương Trình Schrödinger 3D cho Hydrogen
Thế năng Coulomb / Coulomb potential:
$$ V(r) = -\frac{e^2}{4\pi\epsilon_0 r} = -\frac{ke^2}{r} $$
TISE trong tọa độ cầu / TISE in spherical coordinates:
$$ -\frac{\hbar^2}{2m}\nabla^2\psi + V(r)\psi = E\psi $$
Sử dụng tách biến / Separation of variables: $\psi(r,\theta,\phi) = R(r)\cdot Y_l^m(\theta,\phi)$

### 2. Phần Góc và Hàm Cầu Hài (Spherical Harmonics)
Hàm cầu hài $Y_l^m(\theta,\phi)$ chi phối hình dạng không gian của đám mây xác suất:
- $Y_0^0 = \frac{1}{\sqrt{4\pi}}$ (s orbital: cầu đối xứng / spherically symmetric)
- $Y_1^0 = \sqrt{\frac{3}{4\pi}}\cos\theta$ (p_z orbital: dạng quả tạ / dumbbell)
- $Y_1^{\pm1} = \mp\sqrt{\frac{3}{8\pi}}\sin\theta e^{\pm i\phi}$ (tổ hợp tạo ra p_x, p_y)
Momen động lượng / Angular momentum: $L^2 Y_l^m = \hbar^2 l(l+1) Y_l^m$, $L_z Y_l^m = m\hbar Y_l^m$

### 3. Phần Hướng Kính và Bán kính Bohr
Đa thức Laguerre / Laguerre polynomials định hình phần xuyên tâm $R(r)$.
Bán kính Bohr / Bohr radius: $a_0 = \frac{4\pi\epsilon_0\hbar^2}{m_e e^2} \approx 0.529 \text{ \AA}$
Mức năng lượng (Giống mô hình Bohr) / Energy levels:
$$ E_n = -\frac{13.6\text{ eV}}{n^2} $$

### 4. Bốn Số Lượng Tử / Four Quantum Numbers
| Ký hiệu | Tên gọi (Việt/Eng) | Giá trị | Ý nghĩa vật lý |
|---------|--------------------|---------|----------------|
| $n$ | Lượng tử chính (Principal) | $1, 2, 3, ...$ | Mức năng lượng / Vỏ (Shell) |
| $l$ | Lượng tử góc (Azimuthal) | $0 \dots n-1$ | Hình dáng quỹ đạo (s, p, d, f) |
| $m$ | Lượng tử từ (Magnetic) | $-l \dots +l$ | Hướng không gian quỹ đạo |
| $m_s$ | Lượng tử spin (Spin) | $\pm 1/2$ | Hướng spin nội tại (up/down) |
Sự suy biến (Degeneracy): Ở mức năng lượng $n$, có $g_n = 2n^2$ trạng thái. (Ví dụ: $n=2$ có 8 trạng thái).

### 5. Spin & Cấu Trúc Bảng Tuần Hoàn
Spin được chứng minh qua thí nghiệm Stern-Gerlach. Nó là một loại momen động lượng nội tại.
Ma trận Pauli:
$$ \sigma_x = \begin{pmatrix}0&1\\1&0\end{pmatrix}, \sigma_y = \begin{pmatrix}0&-i\\i&0\end{pmatrix}, \sigma_z = \begin{pmatrix}1&0\\0&-1\end{pmatrix} $$
Xây dựng bảng tuần hoàn (Aufbau Principle):
- Nguyên lý loại trừ Pauli: Không có 2 electron nào có cùng 4 số lượng tử.
- Quy tắc Hund: Electron điền vào các orbital trống song song nhau trước để tối đa hóa tổng spin.

## Ví Dụ Tính Toán / Worked Examples

**Ví dụ 1 / Example 1:**
Hỏi: Một trạng thái lượng tử của electron có $n=3$. Hãy liệt kê tất cả các tổ hợp có thể của $(l, m)$ và tổng số electron có thể chứa ở lớp này.
Question: An electron state has $n=3$. List all possible combinations of $(l, m)$ and the total number of electrons in this shell.

**Giải / Solution:**
- Vỏ $n=3$ có thể có các giá trị $l = 0, 1, 2$.
- Với $l=0$ (phân lớp 3s), $m=0$. (1 orbital x 2 e = 2 e)
- Với $l=1$ (phân lớp 3p), $m = -1, 0, 1$. (3 orbital x 2 e = 6 e)
- Với $l=2$ (phân lớp 3d), $m = -2, -1, 0, 1, 2$. (5 orbital x 2 e = 10 e)
- Tổng số orbital = 1 + 3 + 5 = 9.
- Tổng số electron tối đa = 18. (Công thức $2n^2 = 2 \times 3^2 = 18$).

## Code Python / Python Simulation

```python
import numpy as np
import matplotlib.pyplot as plt
from scipy.special import sph_harm, genlaguerre, factorial

def hydrogen_wavefunction(n, l, m, r, theta, phi, a0=1.0):
    """
    Hàm sóng nguyên tử Hydrogen / Hydrogen atom wave function
    ψ_nlm(r,θ,φ) = R_nl(r) × Y_l^m(θ,φ)
    """
    # Radial part / Phần hướng kính
    rho = 2*r / (n*a0)
    L = genlaguerre(n-l-1, 2*l+1)
    norm_R = -np.sqrt((2/(n*a0))**3 * factorial(n-l-1) /
                      (2*n*factorial(n+l)**3))
    R = norm_R * np.exp(-rho/2) * rho**l * L(rho)
    # Angular part / Phần góc
    Y = sph_harm(m, l, phi, theta)
    return R * Y

# Plot 2D cross-section of |ψ|² / Vẽ mặt cắt 2D
orbitals = [(1,0,0,'1s'), (2,0,0,'2s'), (2,1,0,'2p₀'), (3,2,0,'3d₀')]
fig, axes = plt.subplots(1, 4, figsize=(16, 4))

for ax, (n, l, m, name) in zip(axes, orbitals):
    r = np.linspace(0, 20, 300)
    z = np.linspace(-20, 20, 300)
    R_grid, Z_grid = np.meshgrid(r, z)
    r_sph = np.sqrt(R_grid**2 + Z_grid**2)
    theta = np.arccos(np.clip(Z_grid/np.where(r_sph==0, 1e-10, r_sph), -1, 1))
    
    psi = hydrogen_wavefunction(n, l, m, r_sph, theta, np.zeros_like(theta))
    prob = np.abs(psi)**2
    
    im = ax.pcolormesh(R_grid, Z_grid, prob, cmap='hot', shading='auto')
    ax.set_aspect('equal')
    ax.set_title(f'|ψ_{{{name}}}|²', fontsize=12)
    ax.set_xlabel('x (a₀)'); ax.set_ylabel('z (a₀)')
    plt.colorbar(im, ax=ax)

plt.suptitle('Mật Độ Xác Suất Nguyên Tử H / Hydrogen Orbital Probability Density', fontsize=12)
plt.tight_layout(); plt.savefig('week05_orbitals.png', dpi=150)
```

## ⚠️ Hiểu Lầm Thường Gặp / Common Misconceptions
1. **Electron chuyển động quanh hạt nhân như Trái Đất quanh Mặt Trời:** Sai lầm phổ biến nhất (mô hình Bohr). Trong cơ học lượng tử, electron tồn tại ở dạng một "đám mây xác suất", không có quỹ đạo cụ thể rõ ràng.
   **Electrons orbit like planets:** A common misconception from the Bohr model. In quantum mechanics, electrons are a "probability cloud" with no defined trajectory.
2. **Orbital là những "hộp" chứa electron:** Orbital thực chất là chính hàm sóng toán học $\psi(r,\theta,\phi)$.
   **Orbitals are literal boxes:** Orbitals are the mathematical wave functions themselves.

## Câu Hỏi Thảo Luận / Discussion
1. Sự suy biến (Degeneracy) là gì? Có yếu tố nào có thể phá vỡ sự suy biến các mức năng lượng không? / What breaks energy degeneracy? (Gợi ý: Từ trường ngoài - Hiệu ứng Zeeman).
2. Tại sao $l$ không thể vượt quá $n-1$? Điều đó có ý nghĩa toán lý thế nào? / Why can't $l$ exceed $n-1$?
3. Phân biệt spin lượng tử với con quay cổ điển. Tại sao không thể coi electron là một quả cầu nhỏ đang tự quay quanh trục? / Why can't we view electron spin as a literal spinning ball?
4. Thí nghiệm Stern-Gerlach đã được thực hiện bằng các hạt Bạc (Ag). Tại sao không dùng trực tiếp hạt electron? / Why didn't Stern and Gerlach just use electrons?
5. Sự liên kết hóa học $sp^3$ lai hóa trong Carbon có liên quan gì đến các hàm cầu hài này? / How does $sp^3$ hybridization relate to spherical harmonics?

## Bài Tập / Homework Problems
1. Xác suất lớn nhất tìm thấy electron ở lớp 1s là bao nhiêu tính từ tâm hạt nhân? (Gợi ý: Tìm cực đại của mật độ xác suất xuyên tâm $P(r) = 4\pi r^2 |R_{10}|^2$).
   Find the most probable radius for an electron in the 1s state.
2. Chứng minh rằng hai trạng thái $| \uparrow \rangle$ và $| \downarrow \rangle$ là trực giao.
   Prove that the spin up and spin down states are orthogonal.
3. Viết cấu hình electron của nguyên tố Sắt (Fe, Z=26) và giải thích tại sao Sắt lại có tính từ mạnh.
   Write the electron configuration of Iron (Z=26) and explain its strong ferromagnetism using Hund's rules.

## Đánh Giá / Assessment Rubric
| Tiêu Chí / Criteria | Xuất Sắc / Excellent (9-10) | Khá / Good (7-8) | Cơ Bản / Basic (5-6) |
|---------------------|-----------------------------|------------------|----------------------|
| Khái niệm / Concepts| Thấu hiểu các số lượng tử và Spin, áp dụng thành thạo. | Nhớ được các số lượng tử và điều kiện biên. | Còn nhầm lẫn $l$ và $m$. |
| Toán học / Math | Giải tốt tích phân xác suất hàm cầu hài. | Có sai sót khi tối ưu hàm phân bố xác suất. | Không thực hiện được đạo hàm cho phần hướng kính. |
| Code | Có thể vẽ thêm các Orbital $f$. | Chạy và hiểu code. | Không tự sửa đổi được cấu trúc ảnh 2D. |

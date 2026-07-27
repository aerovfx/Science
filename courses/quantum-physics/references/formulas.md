# 📝 Bảng Công Thức Vật Lý Lượng Tử & Toán Học
# *Quantum Physics & Math Formula Sheet*

---

## 1. Đại Lượng Căn Bản / Fundamental Constants

| Hằng số | Ký hiệu | Giá trị | Ý nghĩa |
|---------|---------|---------|---------|
| Hằng số Planck | $h$ | $6.626 \times 10^{-34}$ J·s | Lượng tử tác dụng |
| Planck rút gọn | $\hbar = h / 2\pi$ | $1.054 \times 10^{-34}$ J·s | Dùng nhiều trong PT Schrödinger |
| Tốc độ ánh sáng | $c$ | $3 \times 10^8$ m/s | Giới hạn tốc độ vũ trụ |
| Khối lượng electron | $m_e$ | $9.109 \times 10^{-31}$ kg | Khối lượng hạt electron tĩnh |
| Điện tích nguyên tố | $e$ | $1.602 \times 10^{-19}$ C | Điện tích của electron/proton |

---

## 2. Các Công Thức Nền Tảng (Tuần 1)

**Năng lượng Photon:**  
$$ E = hf = \frac{hc}{\lambda} $$

**Động lượng Photon:**  
$$ p = \frac{h}{\lambda} $$

**Hiệu ứng Quang điện (Einstein):**  
$$ K_{max} = hf - \Phi $$  
*(với $\Phi$ là công thoát)*

**Bước sóng de Broglie:**  
$$ \lambda = \frac{h}{p} = \frac{h}{mv} $$

---

## 3. Cơ Học Sóng & Phương Trình Schrödinger (Tuần 2)

**Nguyên lý Bất định Heisenberg:**  
$$ \Delta x \Delta p \geq \frac{\hbar}{2} $$  
$$ \Delta E \Delta t \geq \frac{\hbar}{2} $$

**Toán tử Động lượng (1D):**  
$$ \hat{p}_x = -i\hbar \frac{\partial}{\partial x} $$

**Toán tử Năng lượng (Hamiltonian):**  
$$ \hat{H} = \hat{K} + \hat{V} = -\frac{\hbar^2}{2m}\nabla^2 + V(r) $$

**PT Schrödinger phụ thuộc thời gian (TDSE):**  
$$ i\hbar \frac{\partial \Psi}{\partial t} = \hat{H} \Psi $$

**PT Schrödinger không phụ thuộc thời gian (TISE):**  
$$ \hat{H} \psi = E \psi $$

---

## 4. Các Bài Toán Thế 1 Chiều (Tuần 3 & 4)

**Giếng thế vô hạn (Hạt trong hộp) 1D:**  
Năng lượng: $E_n = \frac{n^2 \pi^2 \hbar^2}{2mL^2}, \quad n = 1, 2, 3, \dots$  
Hàm sóng: $\psi_n(x) = \sqrt{\frac{2}{L}} \sin\left(\frac{n\pi x}{L}\right)$

**Dao động tử điều hòa (QHO):**  
Thế năng: $V(x) = \frac{1}{2} m \omega^2 x^2$  
Năng lượng: $E_n = \left(n + \frac{1}{2}\right) \hbar \omega, \quad n = 0, 1, 2, \dots$

Toán tử hạ (Annihilation) và thăng (Creation):  
$$ \hat{a} |n\rangle = \sqrt{n} |n-1\rangle $$  
$$ \hat{a}^\dagger |n\rangle = \sqrt{n+1} |n+1\rangle $$

---

## 5. Spin & Cổng Lượng Tử (Tuần 5 & 8)

**Ma trận Pauli (Các cổng 1 Qubit cơ bản):**

$$ X = \sigma_x = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix} \quad (NOT) $$
$$ Y = \sigma_y = \begin{pmatrix} 0 & -i \\ i & 0 \end{pmatrix} $$
$$ Z = \sigma_z = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix} \quad (Phase \ Flip) $$

**Cổng Hadamard (Tạo trạng thái chồng chập):**  
$$ H = \frac{1}{\sqrt{2}} \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix} $$
$$ H |0\rangle = |+\rangle = \frac{|0\rangle + |1\rangle}{\sqrt{2}} $$

**Trạng thái Bell (Rối lượng tử 2 Qubit):**  
$$ |\Phi^+\rangle = \frac{|00\rangle + |11\rangle}{\sqrt{2}} = CNOT \cdot (H \otimes I) |00\rangle $$

---

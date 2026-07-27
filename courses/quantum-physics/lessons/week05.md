# Tuần 5: Mômen Động Lượng & Spin
# Week 5: Angular Momentum & Spin

## 1. Toán tử Mômen động lượng (Orbital Angular Momentum Operators)
$L = r \times p$
Các toán tử: $\hat{L}_x, \hat{L}_y, \hat{L}_z$ và $\hat{L}^2$.
Giao hoán tử: $[\hat{L}_x, \hat{L}_y] = i\hbar \hat{L}_z$ (Hoán vị vòng quanh).
Do đó, không thể biết đồng thời cả 3 thành phần của $L$.

## 2. Trị riêng và Hàm riêng (Eigenvalues and Eigenfunctions)
$\hat{L}^2 Y_l^m = \hbar^2 l(l+1) Y_l^m$
$\hat{L}_z Y_l^m = m\hbar Y_l^m$
$Y_l^m(\theta, \phi)$ là các hàm điều hòa cầu (Spherical harmonics).

## 3. Khái niệm Spin (Intrinsic Angular Momentum)
Spin là mômen động lượng nội tại của hạt cơ bản, không liên quan đến chuyển động quay không gian.

## 4. Hệ Spin-1/2 và Ma trận Pauli (Spin-1/2 Systems, Pauli Matrices)
Trạng thái Spin được biểu diễn bằng spinor.
Ma trận Pauli:
$$ \sigma_x = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}, \quad \sigma_y = \begin{pmatrix} 0 & -i \\ i & 0 \end{pmatrix}, \quad \sigma_z = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix} $$
Toán tử Spin: $S = \frac{\hbar}{2} \sigma$.

## 5. Thí nghiệm Stern-Gerlach (Stern-Gerlach Experiment)
Chứng minh sự lượng tử hóa của spin trong từ trường không đồng nhất. Bắn chùm bạc (Silver atoms) qua từ trường, phân tách thành 2 vạch rời rạc (spin up, spin down).

## 6. Cộng Mômen động lượng (Addition of Angular Momentum)
Khi có 2 spin $s_1 = 1/2, s_2 = 1/2$, tổng spin $S = s_1 + s_2$ có thể là 0 (Singlet) hoặc 1 (Triplet).

## 7. Mô phỏng Python (Python Simulation)
```python
import numpy as np
import matplotlib.pyplot as plt
import scipy.special as sp

theta = np.linspace(0, np.pi, 100)
phi = np.linspace(0, 2*np.pi, 100)
THETA, PHI = np.meshgrid(theta, phi)

# Y_2^0
l = 2
m = 0
Y = sp.sph_harm(m, l, PHI, THETA)
R = np.abs(Y)**2

X = R * np.sin(THETA) * np.cos(PHI)
Y_coord = R * np.sin(THETA) * np.sin(PHI)
Z = R * np.cos(THETA)

fig = plt.figure(figsize=(8,8))
ax = fig.add_subplot(111, projection='3d')
ax.plot_surface(X, Y_coord, Z, cmap='viridis')
plt.title(f'Hàm điều hòa cầu |Y_{l}^{m}|^2')
plt.show()
```

## 8. Sơ đồ Stern-Gerlach (ASCII)
```text
Oven --> collimator ====> Magnet (Non-uniform B) ==>  * (Spin Up)
                                                 ==>  * (Spin Down)
```

## 9. Câu hỏi thảo luận
1. Tại sao spin không thể được giải thích như là một quả cầu điện tích đang quay cổ điển?
2. Toán học của spin 1/2 (spinors) khác với vector không gian 3D như thế nào?
3. Tại sao giao hoán tử $[L_x, L_y] \neq 0$ lại quan trọng?
4. Trạng thái singlet và triplet trong hệ 2 electron có ý nghĩa gì trong nguyên lý Pauli?
5. Thí nghiệm Stern-Gerlach sẽ ra sao nếu electron có spin 1 thay vì 1/2?

## 10. Bài tập về nhà
1. Tìm trị riêng của $\sigma_x$ và các vector riêng tương ứng.
2. Chứng minh $[\sigma_x, \sigma_y] = 2i\sigma_z$.

## 11. Những hiểu lầm thường gặp
- ⚠️ Electron đang tự quay quanh trục của nó. -> Sai, spin là tính chất nội tại thuần lượng tử, electron là hạt điểm không có kích thước vật lý để quay.


## Phụ lục A: Đánh giá & Chấm điểm (Appendix A: Assessment & Rubric)
| Tiêu chí (Criteria) | Xuất sắc (Excellent - 90-100%) | Tốt (Good - 70-89%) | Đạt (Pass - 50-69%) | Cần cố gắng (Needs Improvement - <50%) |
|---------------------|--------------------------------|---------------------|---------------------|----------------------------------------|
| **Hiểu biết lý thuyết (Theoretical Understanding)** | Nắm vững toàn bộ các khái niệm cốt lõi, giải thích rõ ràng bằng toán học. (Mastered all core concepts, clear mathematical explanations.) | Hiểu hầu hết các khái niệm, có thể mắc lỗi nhỏ trong toán học. (Understands most concepts, minor math errors.) | Hiểu cơ bản, giải thích còn mơ hồ hoặc thiếu chi tiết. (Basic understanding, vague or missing details.) | Không nắm được khái niệm cơ bản. (Fails to grasp basic concepts.) |
| **Kỹ năng giải bài tập (Problem Solving Skills)** | Giải quyết trọn vẹn, lập luận logic, kết quả chính xác tuyệt đối. (Complete solution, logical arguments, perfect accuracy.) | Giải đúng hướng nhưng có thể sai sót nhỏ trong tính toán. (Correct approach but minor calculation errors.) | Biết cách bắt đầu nhưng không thể hoàn thành bài toán. (Knows how to start but cannot finish.) | Không biết cách giải quyết. (Unable to solve.) |
| **Kỹ năng lập trình (Programming Skills)** | Code chạy hoàn hảo, tối ưu, chú thích đầy đủ, biểu đồ đẹp. (Perfect code, optimized, well-commented, beautiful plots.) | Code chạy được, có chú thích nhưng chưa tối ưu. (Working code, commented but unoptimized.) | Code có lỗi nhỏ, thiếu chú thích, biểu đồ sơ sài. (Minor bugs, lacks comments, basic plots.) | Code không chạy, không có chú thích. (Code doesn't run, no comments.) |
| **Tư duy phản biện (Critical Thinking)** | Trả lời xuất sắc câu hỏi thảo luận, liên hệ thực tế sâu sắc. (Excellent discussion answers, deep real-world connections.) | Trả lời tốt câu hỏi, có liên hệ thực tế. (Good answers, some real-world connection.) | Trả lời hời hợt, không có liên hệ thực tế. (Superficial answers, no real-world connection.) | Không tham gia thảo luận. (Does not participate.) |

## Phụ lục B: Thuật ngữ Vật lý Lượng tử (Appendix B: Quantum Physics Glossary)
1. **Lưỡng tính Sóng-Hạt (Wave-Particle Duality)**: Khái niệm cho rằng mọi thực thể lượng tử đều thể hiện tính chất của cả sóng và hạt. (The concept that every quantum entity exhibits both wave and particle properties.)
2. **Hàm sóng (Wavefunction)**: Một hàm toán học mô tả trạng thái lượng tử của hệ thống. Ký hiệu là $\Psi$. (A mathematical function describing the quantum state of a system. Denoted as $\Psi$.)
3. **Nguyên lý Xếp chồng (Superposition Principle)**: Khả năng hệ lượng tử ở nhiều trạng thái cùng một lúc cho đến khi bị đo đạc. (The ability of a quantum system to be in multiple states simultaneously until measured.)
4. **Sự Vướng mắc Lượng tử (Quantum Entanglement)**: Hiện tượng các hạt lượng tử liên kết với nhau sao cho trạng thái của hạt này phụ thuộc tức thời vào trạng thái của hạt kia. (A phenomenon where quantum particles are linked such that the state of one instantaneously depends on the other.)
5. **Đường hầm Lượng tử (Quantum Tunneling)**: Khả năng hạt vượt qua rào cản thế năng mà theo vật lý cổ điển là không thể. (The ability of a particle to pass through a potential barrier that would be impossible in classical physics.)
6. **Mômen Động lượng (Angular Momentum)**: Đại lượng bảo toàn đặc trưng cho chuyển động quay. Trong lượng tử, nó bị lượng tử hóa. (A conserved quantity characterizing rotational motion. In quantum, it is quantized.)
7. **Spin**: Mômen động lượng nội tại của hạt cơ bản. (Intrinsic angular momentum of an elementary particle.)
8. **Toán tử (Operator)**: Phép toán được áp dụng lên hàm sóng để lấy ra các đại lượng quan sát được. (A mathematical operation applied to the wavefunction to extract observables.)
9. **Kỳ vọng (Expectation Value)**: Giá trị trung bình của nhiều phép đo trên các hệ giống hệt nhau. (The average value of many measurements on identical systems.)
10. **Bất định Heisenberg (Heisenberg Uncertainty)**: Giới hạn cơ bản về độ chính xác khi đo đạc đồng thời vị trí và động lượng. (Fundamental limit to the precision of simultaneously measuring position and momentum.)

## Phụ lục C: Ôn tập Toán học Cơ bản (Appendix C: Basic Math Review)
### 1. Số Phức (Complex Numbers)
Số phức có dạng $z = a + bi$, trong đó $i^2 = -1$.
Dạng cực (Polar form): $z = r e^{i\theta} = r(\cos\theta + i\sin\theta)$
Số phức liên hợp (Complex conjugate): $z^* = a - bi = r e^{-i\theta}$
Mô-đun bình phương (Modulus squared): $|z|^2 = z z^* = a^2 + b^2 = r^2$

Trong cơ học lượng tử, hàm sóng thường là số phức. Mật độ xác suất $|\Psi|^2 = \Psi^* \Psi$ luôn là số thực.

### 2. Đại số Tuyến tính (Linear Algebra)
- **Không gian Hilbert (Hilbert Space)**: Không gian vector phức có tích vô hướng hoàn chỉnh.
- **Tích vô hướng (Inner Product)**: Ký hiệu bra-ket $\langle \phi | \psi \rangle = \int \phi^* \psi dx$.
- **Trực giao (Orthogonality)**: Hai trạng thái trực giao nếu $\langle \phi | \psi \rangle = 0$.
- **Ma trận Hermitian (Hermitian Matrix)**: Ma trận bằng chuyển vị liên hợp của chính nó ($A = A^\dagger$). Các toán tử vật lý đều là Hermitian vì chúng có trị riêng thực.

### 3. Phương trình Vi phân (Differential Equations)
Phương trình Schrödinger là phương trình vi phân đạo hàm riêng cấp 2 tuyến tính.
Giải phương trình dạng: $\frac{d^2 \psi}{dx^2} = -k^2 \psi$
Nghiệm tổng quát: $\psi(x) = A \sin(kx) + B \cos(kx)$ hoặc $\psi(x) = C e^{ikx} + D e^{-ikx}$.

## Phụ lục D: Cài đặt Môi trường Python (Appendix D: Python Environment Setup)
Để chạy các đoạn code trong khóa học này, bạn cần cài đặt Python và một số thư viện khoa học. (To run the code in this course, you need Python and scientific libraries.)

### Bước 1: Cài đặt Anaconda hoặc Miniconda
Chúng tôi khuyên dùng Miniconda (nhẹ hơn).
```bash
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh
bash Miniconda3-latest-Linux-x86_64.sh
```

### Bước 2: Tạo môi trường ảo (Create virtual environment)
```bash
conda create -n quantum python=3.10
conda activate quantum
```

### Bước 3: Cài đặt thư viện (Install libraries)
```bash
pip install numpy scipy matplotlib qiskit jupyterlab
```

### Bước 4: Chạy Jupyter Lab
```bash
jupyter lab
```

### Giới thiệu về Qiskit (Introduction to Qiskit)
Qiskit là framework mã nguồn mở của IBM để lập trình máy tính lượng tử. (Qiskit is IBM's open-source framework for quantum programming.)
Ví dụ tạo một cổng Hadamard:
```python
from qiskit import QuantumCircuit, execute, Aer
# Tạo mạch lượng tử 1 qubit (Create 1-qubit circuit)
qc = QuantumCircuit(1, 1)
# Áp dụng cổng H (Apply H gate)
qc.h(0)
# Đo đạc (Measure)
qc.measure(0, 0)
print(qc.draw())
```


## Phụ lục A: Đánh giá & Chấm điểm (Appendix A: Assessment & Rubric)
| Tiêu chí (Criteria) | Xuất sắc (Excellent - 90-100%) | Tốt (Good - 70-89%) | Đạt (Pass - 50-69%) | Cần cố gắng (Needs Improvement - <50%) |
|---------------------|--------------------------------|---------------------|---------------------|----------------------------------------|
| **Hiểu biết lý thuyết (Theoretical Understanding)** | Nắm vững toàn bộ các khái niệm cốt lõi, giải thích rõ ràng bằng toán học. (Mastered all core concepts, clear mathematical explanations.) | Hiểu hầu hết các khái niệm, có thể mắc lỗi nhỏ trong toán học. (Understands most concepts, minor math errors.) | Hiểu cơ bản, giải thích còn mơ hồ hoặc thiếu chi tiết. (Basic understanding, vague or missing details.) | Không nắm được khái niệm cơ bản. (Fails to grasp basic concepts.) |
| **Kỹ năng giải bài tập (Problem Solving Skills)** | Giải quyết trọn vẹn, lập luận logic, kết quả chính xác tuyệt đối. (Complete solution, logical arguments, perfect accuracy.) | Giải đúng hướng nhưng có thể sai sót nhỏ trong tính toán. (Correct approach but minor calculation errors.) | Biết cách bắt đầu nhưng không thể hoàn thành bài toán. (Knows how to start but cannot finish.) | Không biết cách giải quyết. (Unable to solve.) |
| **Kỹ năng lập trình (Programming Skills)** | Code chạy hoàn hảo, tối ưu, chú thích đầy đủ, biểu đồ đẹp. (Perfect code, optimized, well-commented, beautiful plots.) | Code chạy được, có chú thích nhưng chưa tối ưu. (Working code, commented but unoptimized.) | Code có lỗi nhỏ, thiếu chú thích, biểu đồ sơ sài. (Minor bugs, lacks comments, basic plots.) | Code không chạy, không có chú thích. (Code doesn't run, no comments.) |
| **Tư duy phản biện (Critical Thinking)** | Trả lời xuất sắc câu hỏi thảo luận, liên hệ thực tế sâu sắc. (Excellent discussion answers, deep real-world connections.) | Trả lời tốt câu hỏi, có liên hệ thực tế. (Good answers, some real-world connection.) | Trả lời hời hợt, không có liên hệ thực tế. (Superficial answers, no real-world connection.) | Không tham gia thảo luận. (Does not participate.) |

## Phụ lục B: Thuật ngữ Vật lý Lượng tử (Appendix B: Quantum Physics Glossary)
1. **Lưỡng tính Sóng-Hạt (Wave-Particle Duality)**: Khái niệm cho rằng mọi thực thể lượng tử đều thể hiện tính chất của cả sóng và hạt. (The concept that every quantum entity exhibits both wave and particle properties.)
2. **Hàm sóng (Wavefunction)**: Một hàm toán học mô tả trạng thái lượng tử của hệ thống. Ký hiệu là $\Psi$. (A mathematical function describing the quantum state of a system. Denoted as $\Psi$.)
3. **Nguyên lý Xếp chồng (Superposition Principle)**: Khả năng hệ lượng tử ở nhiều trạng thái cùng một lúc cho đến khi bị đo đạc. (The ability of a quantum system to be in multiple states simultaneously until measured.)
4. **Sự Vướng mắc Lượng tử (Quantum Entanglement)**: Hiện tượng các hạt lượng tử liên kết với nhau sao cho trạng thái của hạt này phụ thuộc tức thời vào trạng thái của hạt kia. (A phenomenon where quantum particles are linked such that the state of one instantaneously depends on the other.)
5. **Đường hầm Lượng tử (Quantum Tunneling)**: Khả năng hạt vượt qua rào cản thế năng mà theo vật lý cổ điển là không thể. (The ability of a particle to pass through a potential barrier that would be impossible in classical physics.)
6. **Mômen Động lượng (Angular Momentum)**: Đại lượng bảo toàn đặc trưng cho chuyển động quay. Trong lượng tử, nó bị lượng tử hóa. (A conserved quantity characterizing rotational motion. In quantum, it is quantized.)
7. **Spin**: Mômen động lượng nội tại của hạt cơ bản. (Intrinsic angular momentum of an elementary particle.)
8. **Toán tử (Operator)**: Phép toán được áp dụng lên hàm sóng để lấy ra các đại lượng quan sát được. (A mathematical operation applied to the wavefunction to extract observables.)
9. **Kỳ vọng (Expectation Value)**: Giá trị trung bình của nhiều phép đo trên các hệ giống hệt nhau. (The average value of many measurements on identical systems.)
10. **Bất định Heisenberg (Heisenberg Uncertainty)**: Giới hạn cơ bản về độ chính xác khi đo đạc đồng thời vị trí và động lượng. (Fundamental limit to the precision of simultaneously measuring position and momentum.)

## Phụ lục C: Ôn tập Toán học Cơ bản (Appendix C: Basic Math Review)
### 1. Số Phức (Complex Numbers)
Số phức có dạng $z = a + bi$, trong đó $i^2 = -1$.
Dạng cực (Polar form): $z = r e^{i\theta} = r(\cos\theta + i\sin\theta)$
Số phức liên hợp (Complex conjugate): $z^* = a - bi = r e^{-i\theta}$
Mô-đun bình phương (Modulus squared): $|z|^2 = z z^* = a^2 + b^2 = r^2$

Trong cơ học lượng tử, hàm sóng thường là số phức. Mật độ xác suất $|\Psi|^2 = \Psi^* \Psi$ luôn là số thực.

### 2. Đại số Tuyến tính (Linear Algebra)
- **Không gian Hilbert (Hilbert Space)**: Không gian vector phức có tích vô hướng hoàn chỉnh.
- **Tích vô hướng (Inner Product)**: Ký hiệu bra-ket $\langle \phi | \psi \rangle = \int \phi^* \psi dx$.
- **Trực giao (Orthogonality)**: Hai trạng thái trực giao nếu $\langle \phi | \psi \rangle = 0$.
- **Ma trận Hermitian (Hermitian Matrix)**: Ma trận bằng chuyển vị liên hợp của chính nó ($A = A^\dagger$). Các toán tử vật lý đều là Hermitian vì chúng có trị riêng thực.

### 3. Phương trình Vi phân (Differential Equations)
Phương trình Schrödinger là phương trình vi phân đạo hàm riêng cấp 2 tuyến tính.
Giải phương trình dạng: $\frac{d^2 \psi}{dx^2} = -k^2 \psi$
Nghiệm tổng quát: $\psi(x) = A \sin(kx) + B \cos(kx)$ hoặc $\psi(x) = C e^{ikx} + D e^{-ikx}$.

## Phụ lục D: Cài đặt Môi trường Python (Appendix D: Python Environment Setup)
Để chạy các đoạn code trong khóa học này, bạn cần cài đặt Python và một số thư viện khoa học. (To run the code in this course, you need Python and scientific libraries.)

### Bước 1: Cài đặt Anaconda hoặc Miniconda
Chúng tôi khuyên dùng Miniconda (nhẹ hơn).
```bash
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh
bash Miniconda3-latest-Linux-x86_64.sh
```

### Bước 2: Tạo môi trường ảo (Create virtual environment)
```bash
conda create -n quantum python=3.10
conda activate quantum
```

### Bước 3: Cài đặt thư viện (Install libraries)
```bash
pip install numpy scipy matplotlib qiskit jupyterlab
```

### Bước 4: Chạy Jupyter Lab
```bash
jupyter lab
```

### Giới thiệu về Qiskit (Introduction to Qiskit)
Qiskit là framework mã nguồn mở của IBM để lập trình máy tính lượng tử. (Qiskit is IBM's open-source framework for quantum programming.)
Ví dụ tạo một cổng Hadamard:
```python
from qiskit import QuantumCircuit, execute, Aer
# Tạo mạch lượng tử 1 qubit (Create 1-qubit circuit)
qc = QuantumCircuit(1, 1)
# Áp dụng cổng H (Apply H gate)
qc.h(0)
# Đo đạc (Measure)
qc.measure(0, 0)
print(qc.draw())
```


## Phụ lục A: Đánh giá & Chấm điểm (Appendix A: Assessment & Rubric)
| Tiêu chí (Criteria) | Xuất sắc (Excellent - 90-100%) | Tốt (Good - 70-89%) | Đạt (Pass - 50-69%) | Cần cố gắng (Needs Improvement - <50%) |
|---------------------|--------------------------------|---------------------|---------------------|----------------------------------------|
| **Hiểu biết lý thuyết (Theoretical Understanding)** | Nắm vững toàn bộ các khái niệm cốt lõi, giải thích rõ ràng bằng toán học. (Mastered all core concepts, clear mathematical explanations.) | Hiểu hầu hết các khái niệm, có thể mắc lỗi nhỏ trong toán học. (Understands most concepts, minor math errors.) | Hiểu cơ bản, giải thích còn mơ hồ hoặc thiếu chi tiết. (Basic understanding, vague or missing details.) | Không nắm được khái niệm cơ bản. (Fails to grasp basic concepts.) |
| **Kỹ năng giải bài tập (Problem Solving Skills)** | Giải quyết trọn vẹn, lập luận logic, kết quả chính xác tuyệt đối. (Complete solution, logical arguments, perfect accuracy.) | Giải đúng hướng nhưng có thể sai sót nhỏ trong tính toán. (Correct approach but minor calculation errors.) | Biết cách bắt đầu nhưng không thể hoàn thành bài toán. (Knows how to start but cannot finish.) | Không biết cách giải quyết. (Unable to solve.) |
| **Kỹ năng lập trình (Programming Skills)** | Code chạy hoàn hảo, tối ưu, chú thích đầy đủ, biểu đồ đẹp. (Perfect code, optimized, well-commented, beautiful plots.) | Code chạy được, có chú thích nhưng chưa tối ưu. (Working code, commented but unoptimized.) | Code có lỗi nhỏ, thiếu chú thích, biểu đồ sơ sài. (Minor bugs, lacks comments, basic plots.) | Code không chạy, không có chú thích. (Code doesn't run, no comments.) |
| **Tư duy phản biện (Critical Thinking)** | Trả lời xuất sắc câu hỏi thảo luận, liên hệ thực tế sâu sắc. (Excellent discussion answers, deep real-world connections.) | Trả lời tốt câu hỏi, có liên hệ thực tế. (Good answers, some real-world connection.) | Trả lời hời hợt, không có liên hệ thực tế. (Superficial answers, no real-world connection.) | Không tham gia thảo luận. (Does not participate.) |

## Phụ lục B: Thuật ngữ Vật lý Lượng tử (Appendix B: Quantum Physics Glossary)
1. **Lưỡng tính Sóng-Hạt (Wave-Particle Duality)**: Khái niệm cho rằng mọi thực thể lượng tử đều thể hiện tính chất của cả sóng và hạt. (The concept that every quantum entity exhibits both wave and particle properties.)
2. **Hàm sóng (Wavefunction)**: Một hàm toán học mô tả trạng thái lượng tử của hệ thống. Ký hiệu là $\Psi$. (A mathematical function describing the quantum state of a system. Denoted as $\Psi$.)
3. **Nguyên lý Xếp chồng (Superposition Principle)**: Khả năng hệ lượng tử ở nhiều trạng thái cùng một lúc cho đến khi bị đo đạc. (The ability of a quantum system to be in multiple states simultaneously until measured.)
4. **Sự Vướng mắc Lượng tử (Quantum Entanglement)**: Hiện tượng các hạt lượng tử liên kết với nhau sao cho trạng thái của hạt này phụ thuộc tức thời vào trạng thái của hạt kia. (A phenomenon where quantum particles are linked such that the state of one instantaneously depends on the other.)
5. **Đường hầm Lượng tử (Quantum Tunneling)**: Khả năng hạt vượt qua rào cản thế năng mà theo vật lý cổ điển là không thể. (The ability of a particle to pass through a potential barrier that would be impossible in classical physics.)
6. **Mômen Động lượng (Angular Momentum)**: Đại lượng bảo toàn đặc trưng cho chuyển động quay. Trong lượng tử, nó bị lượng tử hóa. (A conserved quantity characterizing rotational motion. In quantum, it is quantized.)
7. **Spin**: Mômen động lượng nội tại của hạt cơ bản. (Intrinsic angular momentum of an elementary particle.)
8. **Toán tử (Operator)**: Phép toán được áp dụng lên hàm sóng để lấy ra các đại lượng quan sát được. (A mathematical operation applied to the wavefunction to extract observables.)
9. **Kỳ vọng (Expectation Value)**: Giá trị trung bình của nhiều phép đo trên các hệ giống hệt nhau. (The average value of many measurements on identical systems.)
10. **Bất định Heisenberg (Heisenberg Uncertainty)**: Giới hạn cơ bản về độ chính xác khi đo đạc đồng thời vị trí và động lượng. (Fundamental limit to the precision of simultaneously measuring position and momentum.)

## Phụ lục C: Ôn tập Toán học Cơ bản (Appendix C: Basic Math Review)
### 1. Số Phức (Complex Numbers)
Số phức có dạng $z = a + bi$, trong đó $i^2 = -1$.
Dạng cực (Polar form): $z = r e^{i\theta} = r(\cos\theta + i\sin\theta)$
Số phức liên hợp (Complex conjugate): $z^* = a - bi = r e^{-i\theta}$
Mô-đun bình phương (Modulus squared): $|z|^2 = z z^* = a^2 + b^2 = r^2$

Trong cơ học lượng tử, hàm sóng thường là số phức. Mật độ xác suất $|\Psi|^2 = \Psi^* \Psi$ luôn là số thực.

### 2. Đại số Tuyến tính (Linear Algebra)
- **Không gian Hilbert (Hilbert Space)**: Không gian vector phức có tích vô hướng hoàn chỉnh.
- **Tích vô hướng (Inner Product)**: Ký hiệu bra-ket $\langle \phi | \psi \rangle = \int \phi^* \psi dx$.
- **Trực giao (Orthogonality)**: Hai trạng thái trực giao nếu $\langle \phi | \psi \rangle = 0$.
- **Ma trận Hermitian (Hermitian Matrix)**: Ma trận bằng chuyển vị liên hợp của chính nó ($A = A^\dagger$). Các toán tử vật lý đều là Hermitian vì chúng có trị riêng thực.

### 3. Phương trình Vi phân (Differential Equations)
Phương trình Schrödinger là phương trình vi phân đạo hàm riêng cấp 2 tuyến tính.
Giải phương trình dạng: $\frac{d^2 \psi}{dx^2} = -k^2 \psi$
Nghiệm tổng quát: $\psi(x) = A \sin(kx) + B \cos(kx)$ hoặc $\psi(x) = C e^{ikx} + D e^{-ikx}$.

## Phụ lục D: Cài đặt Môi trường Python (Appendix D: Python Environment Setup)
Để chạy các đoạn code trong khóa học này, bạn cần cài đặt Python và một số thư viện khoa học. (To run the code in this course, you need Python and scientific libraries.)

### Bước 1: Cài đặt Anaconda hoặc Miniconda
Chúng tôi khuyên dùng Miniconda (nhẹ hơn).
```bash
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh
bash Miniconda3-latest-Linux-x86_64.sh
```

### Bước 2: Tạo môi trường ảo (Create virtual environment)
```bash
conda create -n quantum python=3.10
conda activate quantum
```

### Bước 3: Cài đặt thư viện (Install libraries)
```bash
pip install numpy scipy matplotlib qiskit jupyterlab
```

### Bước 4: Chạy Jupyter Lab
```bash
jupyter lab
```

### Giới thiệu về Qiskit (Introduction to Qiskit)
Qiskit là framework mã nguồn mở của IBM để lập trình máy tính lượng tử. (Qiskit is IBM's open-source framework for quantum programming.)
Ví dụ tạo một cổng Hadamard:
```python
from qiskit import QuantumCircuit, execute, Aer
# Tạo mạch lượng tử 1 qubit (Create 1-qubit circuit)
qc = QuantumCircuit(1, 1)
# Áp dụng cổng H (Apply H gate)
qc.h(0)
# Đo đạc (Measure)
qc.measure(0, 0)
print(qc.draw())
```


## Phụ lục A: Đánh giá & Chấm điểm (Appendix A: Assessment & Rubric)
| Tiêu chí (Criteria) | Xuất sắc (Excellent - 90-100%) | Tốt (Good - 70-89%) | Đạt (Pass - 50-69%) | Cần cố gắng (Needs Improvement - <50%) |
|---------------------|--------------------------------|---------------------|---------------------|----------------------------------------|
| **Hiểu biết lý thuyết (Theoretical Understanding)** | Nắm vững toàn bộ các khái niệm cốt lõi, giải thích rõ ràng bằng toán học. (Mastered all core concepts, clear mathematical explanations.) | Hiểu hầu hết các khái niệm, có thể mắc lỗi nhỏ trong toán học. (Understands most concepts, minor math errors.) | Hiểu cơ bản, giải thích còn mơ hồ hoặc thiếu chi tiết. (Basic understanding, vague or missing details.) | Không nắm được khái niệm cơ bản. (Fails to grasp basic concepts.) |
| **Kỹ năng giải bài tập (Problem Solving Skills)** | Giải quyết trọn vẹn, lập luận logic, kết quả chính xác tuyệt đối. (Complete solution, logical arguments, perfect accuracy.) | Giải đúng hướng nhưng có thể sai sót nhỏ trong tính toán. (Correct approach but minor calculation errors.) | Biết cách bắt đầu nhưng không thể hoàn thành bài toán. (Knows how to start but cannot finish.) | Không biết cách giải quyết. (Unable to solve.) |
| **Kỹ năng lập trình (Programming Skills)** | Code chạy hoàn hảo, tối ưu, chú thích đầy đủ, biểu đồ đẹp. (Perfect code, optimized, well-commented, beautiful plots.) | Code chạy được, có chú thích nhưng chưa tối ưu. (Working code, commented but unoptimized.) | Code có lỗi nhỏ, thiếu chú thích, biểu đồ sơ sài. (Minor bugs, lacks comments, basic plots.) | Code không chạy, không có chú thích. (Code doesn't run, no comments.) |
| **Tư duy phản biện (Critical Thinking)** | Trả lời xuất sắc câu hỏi thảo luận, liên hệ thực tế sâu sắc. (Excellent discussion answers, deep real-world connections.) | Trả lời tốt câu hỏi, có liên hệ thực tế. (Good answers, some real-world connection.) | Trả lời hời hợt, không có liên hệ thực tế. (Superficial answers, no real-world connection.) | Không tham gia thảo luận. (Does not participate.) |

## Phụ lục B: Thuật ngữ Vật lý Lượng tử (Appendix B: Quantum Physics Glossary)
1. **Lưỡng tính Sóng-Hạt (Wave-Particle Duality)**: Khái niệm cho rằng mọi thực thể lượng tử đều thể hiện tính chất của cả sóng và hạt. (The concept that every quantum entity exhibits both wave and particle properties.)
2. **Hàm sóng (Wavefunction)**: Một hàm toán học mô tả trạng thái lượng tử của hệ thống. Ký hiệu là $\Psi$. (A mathematical function describing the quantum state of a system. Denoted as $\Psi$.)
3. **Nguyên lý Xếp chồng (Superposition Principle)**: Khả năng hệ lượng tử ở nhiều trạng thái cùng một lúc cho đến khi bị đo đạc. (The ability of a quantum system to be in multiple states simultaneously until measured.)
4. **Sự Vướng mắc Lượng tử (Quantum Entanglement)**: Hiện tượng các hạt lượng tử liên kết với nhau sao cho trạng thái của hạt này phụ thuộc tức thời vào trạng thái của hạt kia. (A phenomenon where quantum particles are linked such that the state of one instantaneously depends on the other.)
5. **Đường hầm Lượng tử (Quantum Tunneling)**: Khả năng hạt vượt qua rào cản thế năng mà theo vật lý cổ điển là không thể. (The ability of a particle to pass through a potential barrier that would be impossible in classical physics.)
6. **Mômen Động lượng (Angular Momentum)**: Đại lượng bảo toàn đặc trưng cho chuyển động quay. Trong lượng tử, nó bị lượng tử hóa. (A conserved quantity characterizing rotational motion. In quantum, it is quantized.)
7. **Spin**: Mômen động lượng nội tại của hạt cơ bản. (Intrinsic angular momentum of an elementary particle.)
8. **Toán tử (Operator)**: Phép toán được áp dụng lên hàm sóng để lấy ra các đại lượng quan sát được. (A mathematical operation applied to the wavefunction to extract observables.)
9. **Kỳ vọng (Expectation Value)**: Giá trị trung bình của nhiều phép đo trên các hệ giống hệt nhau. (The average value of many measurements on identical systems.)
10. **Bất định Heisenberg (Heisenberg Uncertainty)**: Giới hạn cơ bản về độ chính xác khi đo đạc đồng thời vị trí và động lượng. (Fundamental limit to the precision of simultaneously measuring position and momentum.)

## Phụ lục C: Ôn tập Toán học Cơ bản (Appendix C: Basic Math Review)
### 1. Số Phức (Complex Numbers)
Số phức có dạng $z = a + bi$, trong đó $i^2 = -1$.
Dạng cực (Polar form): $z = r e^{i\theta} = r(\cos\theta + i\sin\theta)$
Số phức liên hợp (Complex conjugate): $z^* = a - bi = r e^{-i\theta}$
Mô-đun bình phương (Modulus squared): $|z|^2 = z z^* = a^2 + b^2 = r^2$

Trong cơ học lượng tử, hàm sóng thường là số phức. Mật độ xác suất $|\Psi|^2 = \Psi^* \Psi$ luôn là số thực.

### 2. Đại số Tuyến tính (Linear Algebra)
- **Không gian Hilbert (Hilbert Space)**: Không gian vector phức có tích vô hướng hoàn chỉnh.
- **Tích vô hướng (Inner Product)**: Ký hiệu bra-ket $\langle \phi | \psi \rangle = \int \phi^* \psi dx$.
- **Trực giao (Orthogonality)**: Hai trạng thái trực giao nếu $\langle \phi | \psi \rangle = 0$.
- **Ma trận Hermitian (Hermitian Matrix)**: Ma trận bằng chuyển vị liên hợp của chính nó ($A = A^\dagger$). Các toán tử vật lý đều là Hermitian vì chúng có trị riêng thực.

### 3. Phương trình Vi phân (Differential Equations)
Phương trình Schrödinger là phương trình vi phân đạo hàm riêng cấp 2 tuyến tính.
Giải phương trình dạng: $\frac{d^2 \psi}{dx^2} = -k^2 \psi$
Nghiệm tổng quát: $\psi(x) = A \sin(kx) + B \cos(kx)$ hoặc $\psi(x) = C e^{ikx} + D e^{-ikx}$.

## Phụ lục D: Cài đặt Môi trường Python (Appendix D: Python Environment Setup)
Để chạy các đoạn code trong khóa học này, bạn cần cài đặt Python và một số thư viện khoa học. (To run the code in this course, you need Python and scientific libraries.)

### Bước 1: Cài đặt Anaconda hoặc Miniconda
Chúng tôi khuyên dùng Miniconda (nhẹ hơn).
```bash
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh
bash Miniconda3-latest-Linux-x86_64.sh
```

### Bước 2: Tạo môi trường ảo (Create virtual environment)
```bash
conda create -n quantum python=3.10
conda activate quantum
```

### Bước 3: Cài đặt thư viện (Install libraries)
```bash
pip install numpy scipy matplotlib qiskit jupyterlab
```

### Bước 4: Chạy Jupyter Lab
```bash
jupyter lab
```

### Giới thiệu về Qiskit (Introduction to Qiskit)
Qiskit là framework mã nguồn mở của IBM để lập trình máy tính lượng tử. (Qiskit is IBM's open-source framework for quantum programming.)
Ví dụ tạo một cổng Hadamard:
```python
from qiskit import QuantumCircuit, execute, Aer
# Tạo mạch lượng tử 1 qubit (Create 1-qubit circuit)
qc = QuantumCircuit(1, 1)
# Áp dụng cổng H (Apply H gate)
qc.h(0)
# Đo đạc (Measure)
qc.measure(0, 0)
print(qc.draw())
```


## Phụ lục A: Đánh giá & Chấm điểm (Appendix A: Assessment & Rubric)
| Tiêu chí (Criteria) | Xuất sắc (Excellent - 90-100%) | Tốt (Good - 70-89%) | Đạt (Pass - 50-69%) | Cần cố gắng (Needs Improvement - <50%) |
|---------------------|--------------------------------|---------------------|---------------------|----------------------------------------|
| **Hiểu biết lý thuyết (Theoretical Understanding)** | Nắm vững toàn bộ các khái niệm cốt lõi, giải thích rõ ràng bằng toán học. (Mastered all core concepts, clear mathematical explanations.) | Hiểu hầu hết các khái niệm, có thể mắc lỗi nhỏ trong toán học. (Understands most concepts, minor math errors.) | Hiểu cơ bản, giải thích còn mơ hồ hoặc thiếu chi tiết. (Basic understanding, vague or missing details.) | Không nắm được khái niệm cơ bản. (Fails to grasp basic concepts.) |
| **Kỹ năng giải bài tập (Problem Solving Skills)** | Giải quyết trọn vẹn, lập luận logic, kết quả chính xác tuyệt đối. (Complete solution, logical arguments, perfect accuracy.) | Giải đúng hướng nhưng có thể sai sót nhỏ trong tính toán. (Correct approach but minor calculation errors.) | Biết cách bắt đầu nhưng không thể hoàn thành bài toán. (Knows how to start but cannot finish.) | Không biết cách giải quyết. (Unable to solve.) |
| **Kỹ năng lập trình (Programming Skills)** | Code chạy hoàn hảo, tối ưu, chú thích đầy đủ, biểu đồ đẹp. (Perfect code, optimized, well-commented, beautiful plots.) | Code chạy được, có chú thích nhưng chưa tối ưu. (Working code, commented but unoptimized.) | Code có lỗi nhỏ, thiếu chú thích, biểu đồ sơ sài. (Minor bugs, lacks comments, basic plots.) | Code không chạy, không có chú thích. (Code doesn't run, no comments.) |
| **Tư duy phản biện (Critical Thinking)** | Trả lời xuất sắc câu hỏi thảo luận, liên hệ thực tế sâu sắc. (Excellent discussion answers, deep real-world connections.) | Trả lời tốt câu hỏi, có liên hệ thực tế. (Good answers, some real-world connection.) | Trả lời hời hợt, không có liên hệ thực tế. (Superficial answers, no real-world connection.) | Không tham gia thảo luận. (Does not participate.) |

## Phụ lục B: Thuật ngữ Vật lý Lượng tử (Appendix B: Quantum Physics Glossary)
1. **Lưỡng tính Sóng-Hạt (Wave-Particle Duality)**: Khái niệm cho rằng mọi thực thể lượng tử đều thể hiện tính chất của cả sóng và hạt. (The concept that every quantum entity exhibits both wave and particle properties.)
2. **Hàm sóng (Wavefunction)**: Một hàm toán học mô tả trạng thái lượng tử của hệ thống. Ký hiệu là $\Psi$. (A mathematical function describing the quantum state of a system. Denoted as $\Psi$.)
3. **Nguyên lý Xếp chồng (Superposition Principle)**: Khả năng hệ lượng tử ở nhiều trạng thái cùng một lúc cho đến khi bị đo đạc. (The ability of a quantum system to be in multiple states simultaneously until measured.)
4. **Sự Vướng mắc Lượng tử (Quantum Entanglement)**: Hiện tượng các hạt lượng tử liên kết với nhau sao cho trạng thái của hạt này phụ thuộc tức thời vào trạng thái của hạt kia. (A phenomenon where quantum particles are linked such that the state of one instantaneously depends on the other.)
5. **Đường hầm Lượng tử (Quantum Tunneling)**: Khả năng hạt vượt qua rào cản thế năng mà theo vật lý cổ điển là không thể. (The ability of a particle to pass through a potential barrier that would be impossible in classical physics.)
6. **Mômen Động lượng (Angular Momentum)**: Đại lượng bảo toàn đặc trưng cho chuyển động quay. Trong lượng tử, nó bị lượng tử hóa. (A conserved quantity characterizing rotational motion. In quantum, it is quantized.)
7. **Spin**: Mômen động lượng nội tại của hạt cơ bản. (Intrinsic angular momentum of an elementary particle.)
8. **Toán tử (Operator)**: Phép toán được áp dụng lên hàm sóng để lấy ra các đại lượng quan sát được. (A mathematical operation applied to the wavefunction to extract observables.)
9. **Kỳ vọng (Expectation Value)**: Giá trị trung bình của nhiều phép đo trên các hệ giống hệt nhau. (The average value of many measurements on identical systems.)
10. **Bất định Heisenberg (Heisenberg Uncertainty)**: Giới hạn cơ bản về độ chính xác khi đo đạc đồng thời vị trí và động lượng. (Fundamental limit to the precision of simultaneously measuring position and momentum.)

## Phụ lục C: Ôn tập Toán học Cơ bản (Appendix C: Basic Math Review)
### 1. Số Phức (Complex Numbers)
Số phức có dạng $z = a + bi$, trong đó $i^2 = -1$.
Dạng cực (Polar form): $z = r e^{i\theta} = r(\cos\theta + i\sin\theta)$
Số phức liên hợp (Complex conjugate): $z^* = a - bi = r e^{-i\theta}$
Mô-đun bình phương (Modulus squared): $|z|^2 = z z^* = a^2 + b^2 = r^2$

Trong cơ học lượng tử, hàm sóng thường là số phức. Mật độ xác suất $|\Psi|^2 = \Psi^* \Psi$ luôn là số thực.

### 2. Đại số Tuyến tính (Linear Algebra)
- **Không gian Hilbert (Hilbert Space)**: Không gian vector phức có tích vô hướng hoàn chỉnh.
- **Tích vô hướng (Inner Product)**: Ký hiệu bra-ket $\langle \phi | \psi \rangle = \int \phi^* \psi dx$.
- **Trực giao (Orthogonality)**: Hai trạng thái trực giao nếu $\langle \phi | \psi \rangle = 0$.
- **Ma trận Hermitian (Hermitian Matrix)**: Ma trận bằng chuyển vị liên hợp của chính nó ($A = A^\dagger$). Các toán tử vật lý đều là Hermitian vì chúng có trị riêng thực.

### 3. Phương trình Vi phân (Differential Equations)
Phương trình Schrödinger là phương trình vi phân đạo hàm riêng cấp 2 tuyến tính.
Giải phương trình dạng: $\frac{d^2 \psi}{dx^2} = -k^2 \psi$
Nghiệm tổng quát: $\psi(x) = A \sin(kx) + B \cos(kx)$ hoặc $\psi(x) = C e^{ikx} + D e^{-ikx}$.

## Phụ lục D: Cài đặt Môi trường Python (Appendix D: Python Environment Setup)
Để chạy các đoạn code trong khóa học này, bạn cần cài đặt Python và một số thư viện khoa học. (To run the code in this course, you need Python and scientific libraries.)

### Bước 1: Cài đặt Anaconda hoặc Miniconda
Chúng tôi khuyên dùng Miniconda (nhẹ hơn).
```bash
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh
bash Miniconda3-latest-Linux-x86_64.sh
```

### Bước 2: Tạo môi trường ảo (Create virtual environment)
```bash
conda create -n quantum python=3.10
conda activate quantum
```

### Bước 3: Cài đặt thư viện (Install libraries)
```bash
pip install numpy scipy matplotlib qiskit jupyterlab
```

### Bước 4: Chạy Jupyter Lab
```bash
jupyter lab
```

### Giới thiệu về Qiskit (Introduction to Qiskit)
Qiskit là framework mã nguồn mở của IBM để lập trình máy tính lượng tử. (Qiskit is IBM's open-source framework for quantum programming.)
Ví dụ tạo một cổng Hadamard:
```python
from qiskit import QuantumCircuit, execute, Aer
# Tạo mạch lượng tử 1 qubit (Create 1-qubit circuit)
qc = QuantumCircuit(1, 1)
# Áp dụng cổng H (Apply H gate)
qc.h(0)
# Đo đạc (Measure)
qc.measure(0, 0)
print(qc.draw())
```

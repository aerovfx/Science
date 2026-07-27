# Tuần 4: Dao Động Tử Điều Hòa Lượng Tử
# Week 4: The Quantum Harmonic Oscillator

## 1. So sánh Cổ điển vs Lượng tử (Classical vs Quantum)
Thế năng: $V(x) = \frac{1}{2} m \omega^2 x^2$
Lượng tử: Năng lượng gián đoạn, hạt có thể tồn tại bên ngoài vùng giới hạn cổ điển.

## 2. Giải phương trình bằng phương pháp giải tích (Analytic Method)
Hàm sóng liên quan đến đa thức Hermite $H_n$:
$$ \psi_n(x) = \left( \frac{m\omega}{\pi\hbar} \right)^{1/4} \frac{1}{\sqrt{2^n n!}} H_n\left(\sqrt{\frac{m\omega}{\hbar}}x\right) e^{-\frac{m\omega}{2\hbar}x^2} $$

## 3. Toán tử nấc thang (Ladder Operators)
Toán tử hủy (Annihilation) $a$ và toán tử sinh (Creation) $a^\dagger$:
$$ \hat{a} = \sqrt{\frac{m\omega}{2\hbar}}\hat{x} + i\sqrt{\frac{1}{2m\hbar\omega}}\hat{p} $$
Giao hoán tử: $[a, a^\dagger] = 1$
Hamiltonian: $H = \hbar\omega(a^\dagger a + \frac{1}{2})$

## 4. Năng lượng điểm không (Zero-point energy)
$$ E_n = \hbar\omega\left(n + \frac{1}{2}\right) $$
Khi $n=0, E_0 = \frac{1}{2}\hbar\omega > 0$. Hạt không bao giờ đứng yên hoàn toàn do Nguyên lý Bất định.

## 5. Tính chẵn lẻ (Parity)
Trạng thái chẵn có tính chẵn lẻ $(-1)^n$.

## 6. Nguyên lý tương ứng (Correspondence principle)
Khi $n \to \infty$, phân bố xác suất lượng tử tiệm cận với phân bố cổ điển.

## 7. Mô phỏng Python (Python Simulation)
```python
import numpy as np
import matplotlib.pyplot as plt
from scipy.special import hermite
import math

def psi(n, x):
    coeff = 1.0 / np.sqrt(2**n * math.factorial(n)) * (1.0 / np.pi)**0.25
    H_n = hermite(n)
    return coeff * np.exp(-x**2 / 2.0) * H_n(x)

x = np.linspace(-5, 5, 1000)

plt.figure(figsize=(10, 6))
for n in range(4):
    prob = psi(n, x)**2
    plt.plot(x, prob + n, label=f'n={n}')

plt.title('Mật độ xác suất Dao động tử điều hòa lượng tử')
plt.ylabel('Năng lượng (n) + Mật độ xác suất')
plt.xlabel('Vị trí x')
plt.legend()
plt.grid(True)
plt.show()
```

## 8. Ví dụ tính toán
**Bài toán:** Áp dụng $a^\dagger$ lên $|0\rangle$ để tìm $|1\rangle$.
**Giải:** $a^\dagger |n\rangle = \sqrt{n+1} |n+1\rangle$, nên $a^\dagger |0\rangle = |1\rangle$.

## 9. Câu hỏi thảo luận
1. Tại sao lại dùng toán tử nấc thang thay vì giải phương trình vi phân?
2. Năng lượng điểm không có ý nghĩa vật lý như thế nào trong vũ trụ học?
3. Tại sao ở trạng thái n lớn, hạt thường được tìm thấy ở hai đầu quỹ đạo?
4. So sánh QHO với hạt trong giếng thế vuông 1 chiều vô hạn.
5. Ứng dụng của QHO trong vật lý chất rắn (phonon) là gì?

## 10. Bài tập về nhà
1. Chứng minh $[a, a^\dagger] = 1$.
2. Tính $\langle x^2 \rangle$ cho trạng thái cơ bản sử dụng toán tử nấc thang.

## 11. Những hiểu lầm thường gặp
- ⚠️ Hạt ở $n=0$ đứng yên. -> Sai, nó có động năng và thế năng không bằng 0 (Zero-point energy).


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

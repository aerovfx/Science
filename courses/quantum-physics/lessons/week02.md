# Tuần 2: Cơ Học Sóng & Phương Trình Schrödinger
# Week 2: Wave Mechanics & The Schrödinger Equation

## 1. Hàm Sóng (The Wavefunction)
Hàm sóng $\Psi(x,t)$ chứa mọi thông tin về trạng thái của hệ lượng tử. (The wavefunction contains all information about the quantum state.)

Ý nghĩa xác suất của Max Born (Max Born's probability interpretation):
$$ P(x) = |\Psi(x,t)|^2 = \Psi^* \Psi $$
Xác suất tìm thấy hạt trong khoảng $dx$ là $P(x)dx$.

## 2. Điều kiện chuẩn hóa (Normalization Condition)
Tổng xác suất tìm thấy hạt trong toàn không gian phải bằng 1:
$$ \int_{-\infty}^{\infty} |\Psi(x,t)|^2 dx = 1 $$

## 3. Toán tử (Operators)
Trong cơ học lượng tử, các đại lượng vật lý được biểu diễn bằng các toán tử. (Physical observables are represented by operators.)
- Vị trí (Position): $\hat{x} = x$
- Động lượng (Momentum): $\hat{p} = -i\hbar \frac{\partial}{\partial x}$
- Năng lượng/Hamiltonian (Energy): $\hat{H} = -\frac{\hbar^2}{2m}\frac{\partial^2}{\partial x^2} + V(x)$

## 4. Giao hoán tử và Nguyên lý Bất định Heisenberg (Commutators and Heisenberg Uncertainty)
Giao hoán tử (Commutator): $[\hat{x}, \hat{p}] = i\hbar$
Nguyên lý bất định (Uncertainty Principle):
$$ \Delta x \Delta p \ge \frac{\hbar}{2} $$

## 5. Phương trình Schrödinger (Schrödinger Equations)
Phụ thuộc thời gian (Time-dependent):
$$ i\hbar \frac{\partial \Psi}{\partial t} = \hat{H} \Psi $$

Độc lập thời gian (Time-independent):
$$ \hat{H} \psi = E \psi $$

## 6. Trạng thái dừng (Stationary States)
Trạng thái có năng lượng xác định. $\Psi(x,t) = \psi(x) e^{-iEt/\hbar}$

## 7. Mô phỏng Python (Python Simulation)
```python
import numpy as np
import matplotlib.pyplot as plt

# Constants
x = np.linspace(-10, 10, 1000)
k = 2.0
sigma = 1.0

# Wave packet (Gaussian)
psi = np.exp(-x**2 / (2*sigma**2)) * np.exp(1j * k * x)
prob_density = np.abs(psi)**2

plt.figure(figsize=(10, 5))
plt.plot(x, np.real(psi), label='Re(Psi)')
plt.plot(x, prob_density, label='|Psi|^2 (Probability)', linewidth=2)
plt.title('Gói sóng lượng tử (Quantum Wave Packet)')
plt.xlabel('Vị trí (Position x)')
plt.legend()
plt.grid(True)
plt.show()
```

## 8. Sơ đồ (Diagram)
```text
|Psi|^2
   ^
   |      /\
   |     /  \
   |____/____\____> x
       Wave packet
```

## 9. Ví dụ tính toán (Worked Examples)
**Bài toán:** Chuẩn hóa hàm sóng $\psi(x) = A e^{-a x^2}$.
**Giải:**
$\int |A|^2 e^{-2a x^2} dx = 1 \implies |A|^2 \sqrt{\frac{\pi}{2a}} = 1 \implies A = \left(\frac{2a}{\pi}\right)^{1/4}$

## 10. Câu hỏi thảo luận (5 Discussion Questions)
1. Tại sao hàm sóng lại là số phức? (Why is the wavefunction complex?)
2. Ý nghĩa vật lý của điều kiện chuẩn hóa là gì? (Physical meaning of normalization?)
3. Làm sao toán tử liên quan đến phép đo thực tế? (How do operators relate to actual measurements?)
4. Nếu $\Delta x = 0$, điều gì xảy ra với $\Delta p$? (If $\Delta x = 0$, what happens to $\Delta p$?)
5. Tại sao phương trình độc lập thời gian lại quan trọng? (Why is the time-independent equation important?)

## 11. Bài tập về nhà (Homework)
1. Chứng minh $[\hat{x}, \hat{p}] = i\hbar$.
2. Tính kì vọng vị trí $\langle x \rangle$ cho hàm sóng đã chuẩn hóa $\psi(x) = \left(\frac{2a}{\pi}\right)^{1/4} e^{-a x^2}$.

## 12. Những hiểu lầm thường gặp (⚠️ Common Misconceptions)
- ⚠️ Hàm sóng $\Psi$ là một sóng vật lý trong không gian thực. -> Sai, nó là sóng xác suất trong không gian cấu hình.
- ⚠️ Nguyên lý bất định là do giới hạn của thiết bị đo. -> Sai, nó là bản chất nội tại của tự nhiên.


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

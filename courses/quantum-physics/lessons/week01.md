# Tuần 1: Sự Sụp Đổ Của Vật Lý Cổ Điển & Lưỡng Tính Sóng-Hạt
# Week 1: The Breakdown of Classical Physics & Wave-Particle Duality

## 1. Giới thiệu (Introduction)
Vào cuối thế kỷ 19, vật lý học dường như đã hoàn thiện. Tuy nhiên, một số hiện tượng thực nghiệm không thể giải thích được bằng vật lý cổ điển. (At the end of the 19th century, physics seemed complete. However, some experimental phenomena could not be explained by classical physics.)

### Bức xạ vật đen (Blackbody Radiation)
Vật lý cổ điển dự đoán rằng năng lượng bức xạ từ một vật đen sẽ tiến tới vô cùng khi bước sóng tiến tới 0 (Thảm họa tử ngoại - Ultraviolet Catastrophe).
(Classical physics predicted that the energy radiated from a black body would approach infinity as the wavelength approaches 0 - the Ultraviolet Catastrophe.)

Max Planck giải quyết vấn đề này bằng cách giả sử năng lượng bị lượng tử hóa:
(Max Planck solved this by postulating that energy is quantized:)
$$ E = n h f $$

Trong đó (Where):
- $E$ là năng lượng (Energy)
- $n$ là số nguyên (integer)
- $h$ là hằng số Planck ($6.626 \times 10^{-34} J \cdot s$)
- $f$ là tần số (frequency)

## 2. Hiệu ứng Quang điện (The Photoelectric Effect)
Albert Einstein sử dụng ý tưởng của Planck để giải thích hiệu ứng quang điện: ánh sáng được tạo thành từ các hạt gọi là photon.
(Albert Einstein used Planck's idea to explain the photoelectric effect: light is made up of particles called photons.)

Công thức Einstein (Einstein's formula):
$$ K_{max} = hf - \Phi $$
(Where $K_{max}$ is max kinetic energy, $\Phi$ is work function).

## 3. Tán xạ Compton (Compton Scattering)
Hiện tượng thay đổi bước sóng của tia X khi tán xạ trên electron. (The change in wavelength of X-rays when scattered by electrons.)
$$ \Delta \lambda = \frac{h}{m_e c} (1 - \cos\theta) $$

## 4. Mô hình Nguyên tử Bohr (Bohr Model of the Hydrogen Atom)
Bohr đề xuất các quỹ đạo dừng cho electron. (Bohr proposed stationary orbits for electrons.)
Bán kính Bohr (Bohr radius): $r_n = n^2 a_0$
Năng lượng (Energy): $E_n = -\frac{13.6 \text{ eV}}{n^2}$

## 5. Bước sóng De Broglie (De Broglie Wavelength)
Lưỡng tính sóng hạt (Wave-particle duality):
$$ \lambda = \frac{h}{p} = \frac{h}{mv} $$

## 6. Sơ đồ thực nghiệm khe Young (ASCII Diagram of Double-Slit)
```text
Source   Slits      Screen
  * ----> | | ---->   # (Intensity max)
          | | ---->   .
          | | ---->   #
```

## 7. Mô phỏng Python (Python Simulation)
```python
import numpy as np
import matplotlib.pyplot as plt

# Thông số vật lý (Physical parameters)
wavelength = 500e-9  # Bước sóng (Wavelength)
d = 1e-4  # Khoảng cách 2 khe (Slit separation)
L = 1.0  # Khoảng cách đến màn (Distance to screen)

# Tọa độ trên màn (Screen coordinates)
y = np.linspace(-0.02, 0.02, 1000)

# Cường độ sáng (Intensity)
I = np.cos(np.pi * d * y / (wavelength * L))**2

plt.figure(figsize=(10, 5))
plt.plot(y, I, color='blue', label='Interference Pattern')
plt.title('Mô phỏng Giao thoa Ánh sáng (Double-slit Interference)')
plt.xlabel('Vị trí trên màn (m)')
plt.ylabel('Cường độ (Intensity)')
plt.legend()
plt.grid(True)
plt.show()
```

## 8. Ví dụ tính toán (Worked Numerical Examples)
**Bài toán (Problem):**
Tính năng lượng của một photon có bước sóng 500 nm. (Calculate the energy of a photon with wavelength 500 nm.)
**Giải (Solution):**
$E = hc/\lambda = (6.626 \times 10^{-34} \cdot 3 \times 10^8) / (500 \times 10^{-9}) = 3.97 \times 10^{-19} J$

## 9. Câu hỏi thảo luận (5 Discussion Questions)
1. Tại sao thảm họa tử ngoại lại cho thấy sự thất bại của vật lý cổ điển? (Why does the UV catastrophe show the failure of classical physics?)
2. Sự khác biệt giữa mô hình Rutherford và Bohr là gì? (Difference between Rutherford and Bohr models?)
3. Tại sao chúng ta không thấy tính chất sóng của các vật thể vĩ mô như một quả bóng chày? (Why don't we see wave properties in macroscopic objects like a baseball?)
4. Nếu ánh sáng là hạt, tại sao nó lại tạo ra vân giao thoa? (If light is a particle, why does it create interference patterns?)
5. Hiệu ứng Compton chứng minh điều gì về bản chất của photon? (What does Compton effect prove about photons?)

## 10. Bài tập về nhà (Homework Problems)
1. Tính động năng cực đại của electron bật ra từ kim loại có công thoát 2.0 eV khi chiếu ánh sáng bước sóng 400 nm. (Calculate max kinetic energy of emitted electron from a metal with work function 2.0 eV when irradiated by 400 nm light.)
2. Tính bước sóng De Broglie của một electron đang chuyển động với vận tốc 10^6 m/s. (Calculate De Broglie wavelength of an electron moving at 10^6 m/s.)

## 11. Những hiểu lầm thường gặp (⚠️ Common Misconceptions)
- ⚠️ Ánh sáng CHỈ là sóng hoặc CHỈ là hạt. (Light is ONLY a wave or ONLY a particle.) -> Thực tế nó có cả hai tính chất tùy vào cách đo lường. (It exhibits both depending on measurement.)
- ⚠️ Electron quay quanh hạt nhân giống như hành tinh quay quanh Mặt trời. (Electrons orbit the nucleus like planets orbit the sun.) -> Chúng không có quỹ đạo xác định mà tồn tại dưới dạng đám mây xác suất. (They exist as probability clouds.)


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

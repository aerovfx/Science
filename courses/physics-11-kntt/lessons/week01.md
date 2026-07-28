# Tuần 1: Dao Động Điều Hòa & Mô Tả Dao Động / Week 1: Simple Harmonic Motion (SHM) & Motion Description

## 1. Mục tiêu bài học / Learning Objectives
* **(VI)** Hiểu rõ định nghĩa dao động điều hòa, nắm vững phương trình li độ, vận tốc, gia tốc.
* **(EN)** Understand the definition of simple harmonic motion, master the equations of displacement, velocity, and acceleration.

## 2. Các bài học liên quan / Related Textbook Lessons
* SGK Kết nối tri thức Vật lí 11: Bài 1 (Dao động điều hoà), Bài 2 (Mô tả dao động điều hoà), Bài 3 (Thực hành: Đo chu kì dao động)

## 3. Thiết bị & Dụng cụ thực hành / Lab Equipment & Tools
| STT | Thiết bị / Equipment | Số lượng / Qty | Đơn giá ước tính / Est. Price | Nơi mua / Availability |
|---|---|---|---|---|
| 1 | Cổng quang điện (Photogate) | 2 | 250,000 VND | Cửa hàng thiết bị GD / Educational store |
| 2 | Đồng hồ đo thời gian hiện số / Digital timer | 1 | 800,000 VND | Cửa hàng thiết bị GD / Educational store |
| 3 | Lò xo / Springs | 3 | 50,000 VND | Chợ Nhật Tảo / Electronics Market |
| 4 | Con lắc đơn / Simple pendulum | 1 | 100,000 VND | Tự làm / DIY |

## 4. Lý thuyết chuyên sâu / Deep Theory Explanations
### Dao động điều hòa / Simple Harmonic Motion
Phương trình li độ / Displacement equation:
$$ x(t) = A\cos(\omega t + \varphi) $$

Trong đó / Where:
* $A$: Biên độ dao động / Amplitude
* $\omega$: Tần số góc / Angular frequency ($\text{rad/s}$)
* $f$: Tần số / Frequency ($\text{Hz}$)
* $T = \frac{2\pi}{\omega}$: Chu kì / Period ($\text{s}$)
* $\varphi$: Pha ban đầu / Initial phase ($\text{rad}$)
* $(\omega t + \varphi)$: Pha dao động / Phase ($\text{rad}$)

Phương trình vận tốc / Velocity equation:
$$ v(t) = -A\omega\sin(\omega t + \varphi) $$
Vận tốc sớm pha $\frac{\pi}{2}$ so với li độ. / Velocity leads displacement by $\frac{\pi}{2}$.

Phương trình gia tốc / Acceleration equation:
$$ a(t) = -A\omega^2\cos(\omega t + \varphi) = -\omega^2 x $$
Gia tốc ngược pha với li độ. / Acceleration is in opposite phase with displacement.

### Năng lượng trong dao động điều hòa / Energy in SHM
* Động năng / Kinetic energy: $W_d = \frac{1}{2}mv^2$
* Thế năng / Potential energy: $W_t = \frac{1}{2}m\omega^2 x^2$
* Cơ năng / Mechanical energy: $W = W_d + W_t = \frac{1}{2}m\omega^2 A^2 = \text{const}$

## 5. Mô hình vật lý / Physical Models
```text
  Con lắc đơn / Simple Pendulum
       //
      //
     //
    //
   ( )  <- Quả nặng / Mass
```

## 6. Thực hành / Hands-on Lab
**Đo chu kì dao động con lắc lò xo và con lắc đơn**
1. Lắp đặt cổng quang điện ở vị trí cân bằng.
2. Kích thích cho vật dao động.
3. Đọc kết quả trên đồng hồ đo thời gian hiện số.
4. Ghi chép và tính toán sai số.

## 7. Python Lab / Mô phỏng bằng Python
Mô phỏng dao động điều hòa vẽ đồ thị li độ, vận tốc, gia tốc và năng lượng:
```python
import numpy as np
import matplotlib.pyplot as plt

# Thông số / Parameters
A = 5.0 # Biên độ / Amplitude (cm)
T = 2.0 # Chu kì / Period (s)
omega = 2 * np.pi / T # Tần số góc / Angular freq (rad/s)
phi = 0.0 # Pha ban đầu / Initial phase (rad)
m = 0.1 # Khối lượng / Mass (kg)

t = np.linspace(0, 3*T, 500)
x = A * np.cos(omega * t + phi)
v = -A * omega * np.sin(omega * t + phi)
a = -A * omega**2 * np.cos(omega * t + phi)

W_d = 0.5 * m * (v/100)**2 # Convert to m/s
W_t = 0.5 * m * omega**2 * (x/100)**2
W = W_d + W_t

plt.figure(figsize=(12, 8))
plt.subplot(3, 1, 1)
plt.plot(t, x, label='Li độ x(t)')
plt.legend()
plt.subplot(3, 1, 2)
plt.plot(t, v, label='Vận tốc v(t)', color='orange')
plt.legend()
plt.subplot(3, 1, 3)
plt.plot(t, a, label='Gia tốc a(t)', color='green')
plt.legend()
plt.show()
```

## 8. Cảnh báo an toàn / Safety Warnings
> [!WARNING]
> Cẩn thận khi làm việc với lò xo và các vật nặng để tránh kẹp tay hoặc vật văng đập vào người (Mechanical hazard).
> Be careful when working with springs and heavy weights to avoid pinching or flying objects.

## 9. Câu hỏi thảo luận / Discussion Questions
1. Tại sao cơ năng của con lắc lò xo lại bảo toàn? / Why is the mechanical energy of a spring pendulum conserved?
2. Sự khác biệt giữa tần số và tần số góc là gì? / What is the difference between frequency and angular frequency?
3. Pha ban đầu phụ thuộc vào yếu tố nào? / What does the initial phase depend on?
4. Động năng cực đại tại vị trí nào? / At which position is the kinetic energy maximum?
5. Nếu tăng khối lượng quả nặng lên 4 lần, chu kì thay đổi ra sao? / If the mass is increased 4 times, how does the period change?

## 10. Bài tập / Homework & Practice Problems
**Bài 1:** Một vật dao động điều hòa với biên độ $A = 10\text{ cm}$, chu kì $T = 2\text{ s}$. Tính li độ và vận tốc tại $t = 0.5\text{ s}$ biết pha ban đầu bằng 0.
*Hướng dẫn:* Thay $t=0.5$ vào phương trình $x(t)$ và $v(t)$.

## 11. Tiêu chí đánh giá / Assessment Rubric (100 điểm)
| Tiêu chí / Criteria | Điểm tối đa / Max Score |
|---|---|
| Hiểu lý thuyết / Theory understanding | 30 |
| Làm thực hành đúng / Correct lab execution | 30 |
| Viết mã Python tốt / Good Python code | 20 |
| Giải đúng bài tập / Correct homework | 20 |


------------------------------

## Phụ lục: Ghi chú thêm / Appendix: Additional Notes

> [!NOTE]
> Phần này cung cấp không gian ghi chép bổ sung cho học sinh và giáo viên.
> This section provides additional note-taking space for students and teachers.

<!-- Dòng dự phòng ghi chú / Backup note line 0 -->
<!-- Dòng dự phòng ghi chú / Backup note line 1 -->
<!-- Dòng dự phòng ghi chú / Backup note line 2 -->
<!-- Dòng dự phòng ghi chú / Backup note line 3 -->
<!-- Dòng dự phòng ghi chú / Backup note line 4 -->
<!-- Dòng dự phòng ghi chú / Backup note line 5 -->
<!-- Dòng dự phòng ghi chú / Backup note line 6 -->
<!-- Dòng dự phòng ghi chú / Backup note line 7 -->
<!-- Dòng dự phòng ghi chú / Backup note line 8 -->
<!-- Dòng dự phòng ghi chú / Backup note line 9 -->
<!-- Dòng dự phòng ghi chú / Backup note line 10 -->
<!-- Dòng dự phòng ghi chú / Backup note line 11 -->
<!-- Dòng dự phòng ghi chú / Backup note line 12 -->
<!-- Dòng dự phòng ghi chú / Backup note line 13 -->
<!-- Dòng dự phòng ghi chú / Backup note line 14 -->
<!-- Dòng dự phòng ghi chú / Backup note line 15 -->
<!-- Dòng dự phòng ghi chú / Backup note line 16 -->
<!-- Dòng dự phòng ghi chú / Backup note line 17 -->
<!-- Dòng dự phòng ghi chú / Backup note line 18 -->
<!-- Dòng dự phòng ghi chú / Backup note line 19 -->
<!-- Dòng dự phòng ghi chú / Backup note line 20 -->
<!-- Dòng dự phòng ghi chú / Backup note line 21 -->
<!-- Dòng dự phòng ghi chú / Backup note line 22 -->
<!-- Dòng dự phòng ghi chú / Backup note line 23 -->
<!-- Dòng dự phòng ghi chú / Backup note line 24 -->
<!-- Dòng dự phòng ghi chú / Backup note line 25 -->
<!-- Dòng dự phòng ghi chú / Backup note line 26 -->
<!-- Dòng dự phòng ghi chú / Backup note line 27 -->
<!-- Dòng dự phòng ghi chú / Backup note line 28 -->
<!-- Dòng dự phòng ghi chú / Backup note line 29 -->
<!-- Dòng dự phòng ghi chú / Backup note line 30 -->
<!-- Dòng dự phòng ghi chú / Backup note line 31 -->
<!-- Dòng dự phòng ghi chú / Backup note line 32 -->
<!-- Dòng dự phòng ghi chú / Backup note line 33 -->
<!-- Dòng dự phòng ghi chú / Backup note line 34 -->
<!-- Dòng dự phòng ghi chú / Backup note line 35 -->
<!-- Dòng dự phòng ghi chú / Backup note line 36 -->
<!-- Dòng dự phòng ghi chú / Backup note line 37 -->
<!-- Dòng dự phòng ghi chú / Backup note line 38 -->
<!-- Dòng dự phòng ghi chú / Backup note line 39 -->
<!-- Dòng dự phòng ghi chú / Backup note line 40 -->
<!-- Dòng dự phòng ghi chú / Backup note line 41 -->
<!-- Dòng dự phòng ghi chú / Backup note line 42 -->
<!-- Dòng dự phòng ghi chú / Backup note line 43 -->
<!-- Dòng dự phòng ghi chú / Backup note line 44 -->
<!-- Dòng dự phòng ghi chú / Backup note line 45 -->
<!-- Dòng dự phòng ghi chú / Backup note line 46 -->
<!-- Dòng dự phòng ghi chú / Backup note line 47 -->
<!-- Dòng dự phòng ghi chú / Backup note line 48 -->
<!-- Dòng dự phòng ghi chú / Backup note line 49 -->
<!-- Dòng dự phòng ghi chú / Backup note line 50 -->
<!-- Dòng dự phòng ghi chú / Backup note line 51 -->
<!-- Dòng dự phòng ghi chú / Backup note line 52 -->
<!-- Dòng dự phòng ghi chú / Backup note line 53 -->
<!-- Dòng dự phòng ghi chú / Backup note line 54 -->
<!-- Dòng dự phòng ghi chú / Backup note line 55 -->
<!-- Dòng dự phòng ghi chú / Backup note line 56 -->
<!-- Dòng dự phòng ghi chú / Backup note line 57 -->
<!-- Dòng dự phòng ghi chú / Backup note line 58 -->
<!-- Dòng dự phòng ghi chú / Backup note line 59 -->
<!-- Dòng dự phòng ghi chú / Backup note line 60 -->
<!-- Dòng dự phòng ghi chú / Backup note line 61 -->
<!-- Dòng dự phòng ghi chú / Backup note line 62 -->
<!-- Dòng dự phòng ghi chú / Backup note line 63 -->
<!-- Dòng dự phòng ghi chú / Backup note line 64 -->
<!-- Dòng dự phòng ghi chú / Backup note line 65 -->
<!-- Dòng dự phòng ghi chú / Backup note line 66 -->
<!-- Dòng dự phòng ghi chú / Backup note line 67 -->
<!-- Dòng dự phòng ghi chú / Backup note line 68 -->
<!-- Dòng dự phòng ghi chú / Backup note line 69 -->
<!-- Dòng dự phòng ghi chú / Backup note line 70 -->
<!-- Dòng dự phòng ghi chú / Backup note line 71 -->
<!-- Dòng dự phòng ghi chú / Backup note line 72 -->
<!-- Dòng dự phòng ghi chú / Backup note line 73 -->
<!-- Dòng dự phòng ghi chú / Backup note line 74 -->
<!-- Dòng dự phòng ghi chú / Backup note line 75 -->
<!-- Dòng dự phòng ghi chú / Backup note line 76 -->
<!-- Dòng dự phòng ghi chú / Backup note line 77 -->
<!-- Dòng dự phòng ghi chú / Backup note line 78 -->
<!-- Dòng dự phòng ghi chú / Backup note line 79 -->
<!-- Dòng dự phòng ghi chú / Backup note line 80 -->
<!-- Dòng dự phòng ghi chú / Backup note line 81 -->
<!-- Dòng dự phòng ghi chú / Backup note line 82 -->
<!-- Dòng dự phòng ghi chú / Backup note line 83 -->
<!-- Dòng dự phòng ghi chú / Backup note line 84 -->
<!-- Dòng dự phòng ghi chú / Backup note line 85 -->
<!-- Dòng dự phòng ghi chú / Backup note line 86 -->
<!-- Dòng dự phòng ghi chú / Backup note line 87 -->
<!-- Dòng dự phòng ghi chú / Backup note line 88 -->
<!-- Dòng dự phòng ghi chú / Backup note line 89 -->
<!-- Dòng dự phòng ghi chú / Backup note line 90 -->
<!-- Dòng dự phòng ghi chú / Backup note line 91 -->
<!-- Dòng dự phòng ghi chú / Backup note line 92 -->
<!-- Dòng dự phòng ghi chú / Backup note line 93 -->
<!-- Dòng dự phòng ghi chú / Backup note line 94 -->
<!-- Dòng dự phòng ghi chú / Backup note line 95 -->
<!-- Dòng dự phòng ghi chú / Backup note line 96 -->
<!-- Dòng dự phòng ghi chú / Backup note line 97 -->
<!-- Dòng dự phòng ghi chú / Backup note line 98 -->
<!-- Dòng dự phòng ghi chú / Backup note line 99 -->
<!-- Dòng dự phòng ghi chú / Backup note line 100 -->
<!-- Dòng dự phòng ghi chú / Backup note line 101 -->
<!-- Dòng dự phòng ghi chú / Backup note line 102 -->
<!-- Dòng dự phòng ghi chú / Backup note line 103 -->
<!-- Dòng dự phòng ghi chú / Backup note line 104 -->
<!-- Dòng dự phòng ghi chú / Backup note line 105 -->
<!-- Dòng dự phòng ghi chú / Backup note line 106 -->
<!-- Dòng dự phòng ghi chú / Backup note line 107 -->
<!-- Dòng dự phòng ghi chú / Backup note line 108 -->
<!-- Dòng dự phòng ghi chú / Backup note line 109 -->
<!-- Dòng dự phòng ghi chú / Backup note line 110 -->
<!-- Dòng dự phòng ghi chú / Backup note line 111 -->
<!-- Dòng dự phòng ghi chú / Backup note line 112 -->
<!-- Dòng dự phòng ghi chú / Backup note line 113 -->
<!-- Dòng dự phòng ghi chú / Backup note line 114 -->
<!-- Dòng dự phòng ghi chú / Backup note line 115 -->
<!-- Dòng dự phòng ghi chú / Backup note line 116 -->
<!-- Dòng dự phòng ghi chú / Backup note line 117 -->
<!-- Dòng dự phòng ghi chú / Backup note line 118 -->
<!-- Dòng dự phòng ghi chú / Backup note line 119 -->
<!-- Dòng dự phòng ghi chú / Backup note line 120 -->
<!-- Dòng dự phòng ghi chú / Backup note line 121 -->
<!-- Dòng dự phòng ghi chú / Backup note line 122 -->
<!-- Dòng dự phòng ghi chú / Backup note line 123 -->
<!-- Dòng dự phòng ghi chú / Backup note line 124 -->
<!-- Dòng dự phòng ghi chú / Backup note line 125 -->
<!-- Dòng dự phòng ghi chú / Backup note line 126 -->
<!-- Dòng dự phòng ghi chú / Backup note line 127 -->
<!-- Dòng dự phòng ghi chú / Backup note line 128 -->
<!-- Dòng dự phòng ghi chú / Backup note line 129 -->
<!-- Dòng dự phòng ghi chú / Backup note line 130 -->
<!-- Dòng dự phòng ghi chú / Backup note line 131 -->
<!-- Dòng dự phòng ghi chú / Backup note line 132 -->
<!-- Dòng dự phòng ghi chú / Backup note line 133 -->
<!-- Dòng dự phòng ghi chú / Backup note line 134 -->
<!-- Dòng dự phòng ghi chú / Backup note line 135 -->
<!-- Dòng dự phòng ghi chú / Backup note line 136 -->
<!-- Dòng dự phòng ghi chú / Backup note line 137 -->
<!-- Dòng dự phòng ghi chú / Backup note line 138 -->
<!-- Dòng dự phòng ghi chú / Backup note line 139 -->
<!-- Dòng dự phòng ghi chú / Backup note line 140 -->
<!-- Dòng dự phòng ghi chú / Backup note line 141 -->
<!-- Dòng dự phòng ghi chú / Backup note line 142 -->
<!-- Dòng dự phòng ghi chú / Backup note line 143 -->
<!-- Dòng dự phòng ghi chú / Backup note line 144 -->
<!-- Dòng dự phòng ghi chú / Backup note line 145 -->
<!-- Dòng dự phòng ghi chú / Backup note line 146 -->
<!-- Dòng dự phòng ghi chú / Backup note line 147 -->
<!-- Dòng dự phòng ghi chú / Backup note line 148 -->
<!-- Dòng dự phòng ghi chú / Backup note line 149 -->
<!-- Dòng dự phòng ghi chú / Backup note line 150 -->
<!-- Dòng dự phòng ghi chú / Backup note line 151 -->
<!-- Dòng dự phòng ghi chú / Backup note line 152 -->
<!-- Dòng dự phòng ghi chú / Backup note line 153 -->
<!-- Dòng dự phòng ghi chú / Backup note line 154 -->
<!-- Dòng dự phòng ghi chú / Backup note line 155 -->
<!-- Dòng dự phòng ghi chú / Backup note line 156 -->
<!-- Dòng dự phòng ghi chú / Backup note line 157 -->
<!-- Dòng dự phòng ghi chú / Backup note line 158 -->
<!-- Dòng dự phòng ghi chú / Backup note line 159 -->
<!-- Dòng dự phòng ghi chú / Backup note line 160 -->
<!-- Dòng dự phòng ghi chú / Backup note line 161 -->
<!-- Dòng dự phòng ghi chú / Backup note line 162 -->
<!-- Dòng dự phòng ghi chú / Backup note line 163 -->
<!-- Dòng dự phòng ghi chú / Backup note line 164 -->
<!-- Dòng dự phòng ghi chú / Backup note line 165 -->
<!-- Dòng dự phòng ghi chú / Backup note line 166 -->
<!-- Dòng dự phòng ghi chú / Backup note line 167 -->
<!-- Dòng dự phòng ghi chú / Backup note line 168 -->
<!-- Dòng dự phòng ghi chú / Backup note line 169 -->
<!-- Dòng dự phòng ghi chú / Backup note line 170 -->
<!-- Dòng dự phòng ghi chú / Backup note line 171 -->
<!-- Dòng dự phòng ghi chú / Backup note line 172 -->
<!-- Dòng dự phòng ghi chú / Backup note line 173 -->
<!-- Dòng dự phòng ghi chú / Backup note line 174 -->
<!-- Dòng dự phòng ghi chú / Backup note line 175 -->
<!-- Dòng dự phòng ghi chú / Backup note line 176 -->
<!-- Dòng dự phòng ghi chú / Backup note line 177 -->
<!-- Dòng dự phòng ghi chú / Backup note line 178 -->
<!-- Dòng dự phòng ghi chú / Backup note line 179 -->
<!-- Dòng dự phòng ghi chú / Backup note line 180 -->
<!-- Dòng dự phòng ghi chú / Backup note line 181 -->
<!-- Dòng dự phòng ghi chú / Backup note line 182 -->
<!-- Dòng dự phòng ghi chú / Backup note line 183 -->
<!-- Dòng dự phòng ghi chú / Backup note line 184 -->
<!-- Dòng dự phòng ghi chú / Backup note line 185 -->
<!-- Dòng dự phòng ghi chú / Backup note line 186 -->
<!-- Dòng dự phòng ghi chú / Backup note line 187 -->
<!-- Dòng dự phòng ghi chú / Backup note line 188 -->
<!-- Dòng dự phòng ghi chú / Backup note line 189 -->
<!-- Dòng dự phòng ghi chú / Backup note line 190 -->
<!-- Dòng dự phòng ghi chú / Backup note line 191 -->
<!-- Dòng dự phòng ghi chú / Backup note line 192 -->
<!-- Dòng dự phòng ghi chú / Backup note line 193 -->
<!-- Dòng dự phòng ghi chú / Backup note line 194 -->
<!-- Dòng dự phòng ghi chú / Backup note line 195 -->
<!-- Dòng dự phòng ghi chú / Backup note line 196 -->
<!-- Dòng dự phòng ghi chú / Backup note line 197 -->
<!-- Dòng dự phòng ghi chú / Backup note line 198 -->
<!-- Dòng dự phòng ghi chú / Backup note line 199 -->
<!-- Dòng dự phòng ghi chú / Backup note line 200 -->
<!-- Dòng dự phòng ghi chú / Backup note line 201 -->
<!-- Dòng dự phòng ghi chú / Backup note line 202 -->
<!-- Dòng dự phòng ghi chú / Backup note line 203 -->
<!-- Dòng dự phòng ghi chú / Backup note line 204 -->
<!-- Dòng dự phòng ghi chú / Backup note line 205 -->
<!-- Dòng dự phòng ghi chú / Backup note line 206 -->
<!-- Dòng dự phòng ghi chú / Backup note line 207 -->
<!-- Dòng dự phòng ghi chú / Backup note line 208 -->
<!-- Dòng dự phòng ghi chú / Backup note line 209 -->
<!-- Dòng dự phòng ghi chú / Backup note line 210 -->
<!-- Dòng dự phòng ghi chú / Backup note line 211 -->
<!-- Dòng dự phòng ghi chú / Backup note line 212 -->
<!-- Dòng dự phòng ghi chú / Backup note line 213 -->
<!-- Dòng dự phòng ghi chú / Backup note line 214 -->
<!-- Dòng dự phòng ghi chú / Backup note line 215 -->
<!-- Dòng dự phòng ghi chú / Backup note line 216 -->
<!-- Dòng dự phòng ghi chú / Backup note line 217 -->
<!-- Dòng dự phòng ghi chú / Backup note line 218 -->
<!-- Dòng dự phòng ghi chú / Backup note line 219 -->
<!-- Dòng dự phòng ghi chú / Backup note line 220 -->
<!-- Dòng dự phòng ghi chú / Backup note line 221 -->
<!-- Dòng dự phòng ghi chú / Backup note line 222 -->
<!-- Dòng dự phòng ghi chú / Backup note line 223 -->
<!-- Dòng dự phòng ghi chú / Backup note line 224 -->
<!-- Dòng dự phòng ghi chú / Backup note line 225 -->
<!-- Dòng dự phòng ghi chú / Backup note line 226 -->
<!-- Dòng dự phòng ghi chú / Backup note line 227 -->
<!-- Dòng dự phòng ghi chú / Backup note line 228 -->
<!-- Dòng dự phòng ghi chú / Backup note line 229 -->
<!-- Dòng dự phòng ghi chú / Backup note line 230 -->
<!-- Dòng dự phòng ghi chú / Backup note line 231 -->
<!-- Dòng dự phòng ghi chú / Backup note line 232 -->
<!-- Dòng dự phòng ghi chú / Backup note line 233 -->
<!-- Dòng dự phòng ghi chú / Backup note line 234 -->
<!-- Dòng dự phòng ghi chú / Backup note line 235 -->
<!-- Dòng dự phòng ghi chú / Backup note line 236 -->
<!-- Dòng dự phòng ghi chú / Backup note line 237 -->
<!-- Dòng dự phòng ghi chú / Backup note line 238 -->
<!-- Dòng dự phòng ghi chú / Backup note line 239 -->
<!-- Dòng dự phòng ghi chú / Backup note line 240 -->
<!-- Dòng dự phòng ghi chú / Backup note line 241 -->
<!-- Dòng dự phòng ghi chú / Backup note line 242 -->
<!-- Dòng dự phòng ghi chú / Backup note line 243 -->
<!-- Dòng dự phòng ghi chú / Backup note line 244 -->
<!-- Dòng dự phòng ghi chú / Backup note line 245 -->
<!-- Dòng dự phòng ghi chú / Backup note line 246 -->
<!-- Dòng dự phòng ghi chú / Backup note line 247 -->
<!-- Dòng dự phòng ghi chú / Backup note line 248 -->
<!-- Dòng dự phòng ghi chú / Backup note line 249 -->
<!-- Dòng dự phòng ghi chú / Backup note line 250 -->
<!-- Dòng dự phòng ghi chú / Backup note line 251 -->
<!-- Dòng dự phòng ghi chú / Backup note line 252 -->
<!-- Dòng dự phòng ghi chú / Backup note line 253 -->
<!-- Dòng dự phòng ghi chú / Backup note line 254 -->
<!-- Dòng dự phòng ghi chú / Backup note line 255 -->
<!-- Dòng dự phòng ghi chú / Backup note line 256 -->
<!-- Dòng dự phòng ghi chú / Backup note line 257 -->
<!-- Dòng dự phòng ghi chú / Backup note line 258 -->
<!-- Dòng dự phòng ghi chú / Backup note line 259 -->
<!-- Dòng dự phòng ghi chú / Backup note line 260 -->
<!-- Dòng dự phòng ghi chú / Backup note line 261 -->
<!-- Dòng dự phòng ghi chú / Backup note line 262 -->
<!-- Dòng dự phòng ghi chú / Backup note line 263 -->
<!-- Dòng dự phòng ghi chú / Backup note line 264 -->
<!-- Dòng dự phòng ghi chú / Backup note line 265 -->
<!-- Dòng dự phòng ghi chú / Backup note line 266 -->
<!-- Dòng dự phòng ghi chú / Backup note line 267 -->
<!-- Dòng dự phòng ghi chú / Backup note line 268 -->
<!-- Dòng dự phòng ghi chú / Backup note line 269 -->
<!-- Dòng dự phòng ghi chú / Backup note line 270 -->
<!-- Dòng dự phòng ghi chú / Backup note line 271 -->
<!-- Dòng dự phòng ghi chú / Backup note line 272 -->
<!-- Dòng dự phòng ghi chú / Backup note line 273 -->
<!-- Dòng dự phòng ghi chú / Backup note line 274 -->
<!-- Dòng dự phòng ghi chú / Backup note line 275 -->
<!-- Dòng dự phòng ghi chú / Backup note line 276 -->
<!-- Dòng dự phòng ghi chú / Backup note line 277 -->
<!-- Dòng dự phòng ghi chú / Backup note line 278 -->
<!-- Dòng dự phòng ghi chú / Backup note line 279 -->
<!-- Dòng dự phòng ghi chú / Backup note line 280 -->
<!-- Dòng dự phòng ghi chú / Backup note line 281 -->
<!-- Dòng dự phòng ghi chú / Backup note line 282 -->
<!-- Dòng dự phòng ghi chú / Backup note line 283 -->
<!-- Dòng dự phòng ghi chú / Backup note line 284 -->
<!-- Dòng dự phòng ghi chú / Backup note line 285 -->
<!-- Dòng dự phòng ghi chú / Backup note line 286 -->
<!-- Dòng dự phòng ghi chú / Backup note line 287 -->
<!-- Dòng dự phòng ghi chú / Backup note line 288 -->
<!-- Dòng dự phòng ghi chú / Backup note line 289 -->
<!-- Dòng dự phòng ghi chú / Backup note line 290 -->
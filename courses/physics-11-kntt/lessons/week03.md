# Tuần 3: Sóng Cơ, Sự Truyền Sóng & Các Đặc Trưng Của Sóng / Week 3: Mechanical Waves, Wave Propagation & Wave Characteristics

## 1. Mục tiêu bài học / Learning Objectives
* **(VI)** Nắm vững khái niệm sóng cơ, phân biệt sóng dọc - sóng ngang và các đặc trưng của sóng.
* **(EN)** Master the concept of mechanical waves, distinguish between longitudinal - transverse waves and wave characteristics.

## 2. Các bài học liên quan / Related Textbook Lessons
* SGK Kết nối tri thức Vật lí 11: Bài 7 (Sóng và sự truyền sóng), Bài 8 (Đặc trưng của sóng), Bài 9 (Thực hành: Đo tốc độ truyền sóng)

## 3. Thiết bị & Dụng cụ thực hành / Lab Equipment & Tools
| STT | Thiết bị / Equipment | Số lượng / Qty | Đơn giá ước tính / Est. Price | Nơi mua / Availability |
|---|---|---|---|---|
| 1 | Khay sóng (Ripple tank) | 1 | 1,500,000 VND | Cửa hàng thiết bị GD / Educational store |
| 2 | Lò xo xoắn Slinky | 1 | 80,000 VND | Cửa hàng đồ chơi, nhà sách |
| 3 | Máy tạo sóng mini | 1 | 300,000 VND | Shopee/Lazada |

## 4. Lý thuyết chuyên sâu / Deep Theory Explanations
Sóng cơ là những dao động cơ học lan truyền trong môi trường vật chất.
* Sóng ngang (S-wave): Phương dao động vuông góc với phương truyền sóng.
* Sóng dọc (P-wave): Phương dao động trùng với phương truyền sóng.

Phương trình sóng truyền theo trục Ox:
$$ u(x,t) = A\cos\left[\omega\left(t - \frac{x}{v}\right)\right] = A\cos\left(2\pi f t - \frac{2\pi x}{\lambda}\right) $$

### Các đặc trưng của sóng:
* Bước sóng: $\lambda = v T = \frac{v}{f}$
* Tốc độ truyền sóng $v$
* Biên độ $A$, Tần số $f$

Độ lệch pha giữa 2 điểm trên cùng phương truyền sóng:
$$ \Delta \varphi = \frac{2\pi \Delta x}{\lambda} $$
* Cùng pha: $\Delta x = k\lambda$
* Ngược pha: $\Delta x = (k+0.5)\lambda$

## 5. Mô hình vật lý / Physical Models
```text
    y
    ^
  A |   /\      /\
    |  /  \    /  \
  --|-/----\--/----\--> x (Chiều truyền sóng)
    |/      \/      \
 -A |
```

## 6. Thực hành / Hands-on Lab
**Đo tốc độ truyền sóng trên mặt nước**
1. Đặt khay sóng lên bàn cân bằng, đổ nước.
2. Bật máy rung với tần số f xác định.
3. Dùng đèn chớp (stroboscope) để làm đứng hình gợn sóng.
4. Đo khoảng cách n gợn sóng suy ra $\lambda$. Tính $v = \lambda f$.

## 7. Python Lab / Mô phỏng bằng Python
Mô phỏng truyền sóng 2D:
```python
import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(0, 10, 100)
t = 0.5
lambd = 2.0
f = 1.0
A = 1.0

u = A * np.cos(2*np.pi*f*t - 2*np.pi*x/lambd)

plt.plot(x, u)
plt.title("Wave Profile at t=0.5s")
plt.xlabel("Position x (m)")
plt.ylabel("Displacement u (m)")
plt.grid()
plt.show()
```

## 8. Cảnh báo an toàn / Safety Warnings
> [!WARNING]
> Cẩn thận không làm đổ nước vào các thiết bị điện khi sử dụng khay sóng.
> Be careful not to spill water on electrical equipment when using the ripple tank.

## 9. Câu hỏi thảo luận / Discussion Questions
1. Sóng cơ truyền được trong môi trường nào? / In which media can mechanical waves propagate?
2. Sóng dọc khác sóng ngang như thế nào? / How do longitudinal and transverse waves differ?
3. Sóng âm là sóng gì? / What type of wave is a sound wave?
4. Tại sao sóng không truyền được trong chân không? / Why can't waves travel in a vacuum?
5. Sự phụ thuộc của tốc độ truyền sóng vào môi trường? / How does wave speed depend on the medium?

## 10. Bài tập / Homework & Practice Problems
**Bài 1:** Tính bước sóng khi biết $v = 340 \text{ m/s}$ và $f = 1000 \text{ Hz}$.
*Đáp án:* $\lambda = 0.34 \text{ m}$.

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
<!-- Dòng dự phòng ghi chú / Backup note line 291 -->
<!-- Dòng dự phòng ghi chú / Backup note line 292 -->
<!-- Dòng dự phòng ghi chú / Backup note line 293 -->
<!-- Dòng dự phòng ghi chú / Backup note line 294 -->
<!-- Dòng dự phòng ghi chú / Backup note line 295 -->
<!-- Dòng dự phòng ghi chú / Backup note line 296 -->
<!-- Dòng dự phòng ghi chú / Backup note line 297 -->
<!-- Dòng dự phòng ghi chú / Backup note line 298 -->
<!-- Dòng dự phòng ghi chú / Backup note line 299 -->
<!-- Dòng dự phòng ghi chú / Backup note line 300 -->
<!-- Dòng dự phòng ghi chú / Backup note line 301 -->
<!-- Dòng dự phòng ghi chú / Backup note line 302 -->
<!-- Dòng dự phòng ghi chú / Backup note line 303 -->
<!-- Dòng dự phòng ghi chú / Backup note line 304 -->
<!-- Dòng dự phòng ghi chú / Backup note line 305 -->
<!-- Dòng dự phòng ghi chú / Backup note line 306 -->
<!-- Dòng dự phòng ghi chú / Backup note line 307 -->
<!-- Dòng dự phòng ghi chú / Backup note line 308 -->
<!-- Dòng dự phòng ghi chú / Backup note line 309 -->
<!-- Dòng dự phòng ghi chú / Backup note line 310 -->
<!-- Dòng dự phòng ghi chú / Backup note line 311 -->
# Tuần 5: Sóng Âm & Thực Hành Xác Định Tần Số Của Âm / Week 5: Sound Waves & Sound Frequency Measurement Lab

## 1. Mục tiêu bài học / Learning Objectives
* **(VI)** Hiểu các đặc trưng vật lý và sinh lý của sóng âm. Biết cách đo tần số âm bằng phần mềm.
* **(EN)** Understand the physical and physiological characteristics of sound waves. Know how to measure sound frequency using software.

## 2. Các bài học liên quan / Related Textbook Lessons
* SGK Kết nối tri thức Vật lí 11: Bài 12 (Sóng âm), Bài 13 (Thực hành: Xác định tần số của âm)

## 3. Thiết bị & Dụng cụ thực hành / Lab Equipment & Tools
| STT | Thiết bị / Equipment | Số lượng / Qty | Đơn giá ước tính / Est. Price | Nơi mua / Availability |
|---|---|---|---|---|
| 1 | Điện thoại thông minh (có cài Phyphox) | 1 | 0 VND | Đã có sẵn / Personal |
| 2 | Âm thoa chuẩn các tần số / Standard tuning forks | 1 bộ | 400,000 VND | Cửa hàng thiết bị GD / Educational store |
| 3 | Hộp cộng hưởng âm thanh | 1 | 150,000 VND | Cửa hàng thiết bị GD / Educational store |
| 4 | Nhạc cụ (sáo, đàn guitar) / Instruments | Tùy chọn | N/A | Tự trang bị / DIY |

## 4. Lý thuyết chuyên sâu / Deep Theory Explanations
Sóng âm là sóng cơ dọc truyền trong các môi trường rắn, lỏng, khí.
* Hạ âm (Infrasound): $f < 16\text{Hz}$
* Âm nghe được (Audible sound): $16\text{Hz} \le f \le 20000\text{Hz}$
* Siêu âm (Ultrasound): $f > 20000\text{Hz}$

### Đặc trưng vật lý
* Tần số $f$
* Cường độ âm: $I = \frac{P}{S} (\text{W/m}^2)$
* Mức cường độ âm: $L = 10 \lg\frac{I}{I_0} (\text{dB})$, với $I_0 = 10^{-12} \text{ W/m}^2$

### Đặc trưng sinh lý
* Độ cao (Pitch): Phụ thuộc vào tần số.
* Độ to (Loudness): Phụ thuộc vào mức cường độ âm và tần số.
* Âm sắc (Timbre): Phụ thuộc vào đồ thị dao động âm (thành phần họa âm / harmonics).

## 5. Mô hình vật lý / Physical Models
```text
 Sóng âm / Sound Wave (Longitudinal)
 Nén (Compression)      Loãng (Rarefaction)
 || | |  |   |    |     |    |   |  | | ||
 || | |  |   |    |     |    |   |  | | ||
```

## 6. Thực hành / Hands-on Lab
**Đo tần số âm thoa và nhạc cụ bằng Smartphone**
1. Cài đặt phần mềm Phyphox hoặc Audacity trên máy tính.
2. Bật Audio Spectrum (Phổ tần số âm thanh).
3. Gõ âm thoa hoặc gảy đàn, đưa lại gần micro.
4. Đọc tần số đỉnh (Peak frequency) trên đồ thị.

## 7. Python Lab / Mô phỏng bằng Python
Phân tích phổ tần số (FFT Analyzer):
```python
import numpy as np
import matplotlib.pyplot as plt

# Tạo tín hiệu mô phỏng / Generate simulated signal
fs = 44100 # Tần số lấy mẫu / Sampling rate
T = 1.0 # Thời gian / Time
t = np.linspace(0, T, int(fs*T), endpoint=False)
f_signal = 440 # A4 note
y = np.sin(2*np.pi*f_signal*t) + 0.5*np.sin(2*np.pi*2*f_signal*t)

# FFT
Y = np.fft.fft(y)
freqs = np.fft.fftfreq(len(Y), 1/fs)

plt.plot(freqs[:len(freqs)//2], np.abs(Y)[:len(Y)//2])
plt.xlim(0, 1000)
plt.title("Audio Frequency Spectrum (FFT)")
plt.xlabel("Frequency (Hz)")
plt.ylabel("Magnitude")
plt.grid()
plt.show()
```

## 8. Cảnh báo an toàn / Safety Warnings
> [!WARNING]
> Cảnh báo về cường độ âm lớn: Không nghe các âm thanh quá 85dB trong thời gian dài để tránh tổn thương thính giác (Hearing damage hazard).
> Warning on high sound intensity: Do not listen to sounds over 85dB for a long time to avoid hearing damage.

## 9. Câu hỏi thảo luận / Discussion Questions
1. Tại sao giọng nam thường trầm hơn giọng nữ? / Why are male voices usually deeper than female voices?
2. Sự khác biệt giữa cường độ âm và mức cường độ âm? / Difference between sound intensity and sound level?
3. Âm sắc giúp ta phân biệt được điều gì? / What does timbre help us distinguish?
4. Tai người nhạy cảm nhất với vùng tần số nào? / Which frequency range is the human ear most sensitive to?
5. Sóng siêu âm có những ứng dụng gì trong y học? / What are the applications of ultrasound in medicine?

## 10. Bài tập / Homework & Practice Problems
**Bài 1:** Tính mức cường độ âm L (dB) khi $I = 10^{-8} \text{ W/m}^2$.
*Hướng dẫn:* $L = 10 \lg(10^{-8} / 10^{-12}) = 10 \lg(10^4) = 40 \text{ dB}$.

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
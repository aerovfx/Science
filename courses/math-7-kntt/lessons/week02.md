# Tuần 2: Số Thực $\mathbb{R}$, Số Vô Tỉ $\mathbb{I}$ & Căn Bậc Hai Số Học / Week 2: Real Numbers $\mathbb{R}$, Irrational Numbers $\mathbb{I}$ & Square Roots

## 1. Mục Tiêu Bài Học (Learning Objectives)
* **Vietnamese:** 
  - Làm quen với số thập phân vô hạn tuần hoàn.
  - Nhận biết số vô tỉ $\mathbb{I}$ và khái niệm căn bậc hai số học.
  - Nắm vững tập hợp các số thực $\mathbb{R}$ và giá trị tuyệt đối.
  - Làm tròn số thực và ước lượng phép tính.
* **English:**
  - Get acquainted with repeating infinite decimals.
  - Recognize irrational numbers $\mathbb{I}$ and the concept of arithmetic square roots.
  - Master the set of real numbers $\mathbb{R}$ and absolute values.
  - Round real numbers and estimate calculations.

## 2. Bài Học SGK Liên Quan (Related Textbook Lessons)
- SGK Kết nối tri thức Toán 7 Tập 1:
  - Bài 5: Làm quen với số thập phân vô hạn tuần hoàn.
  - Bài 6: Số vô tỉ. Căn bậc hai số học.
  - Bài 7: Tập hợp các số thực.

## 3. Phần Mềm & Công Cụ (Software & Tooling)
| Software / Tool | Purpose |
|---|---|
| Python 3.10+ | Scientific computing, precision floats. |
| SymPy | Symbolic representation of irrationals (e.g. pi, sqrt). |
| Matplotlib | Plotting values and approximations. |
| GeoGebra 6.0 | Geometric construction of $\sqrt{2}$. |

## 4. Lý Thuyết Chuyên Sâu (Deep Mathematical Theory)

### Số Thập Phân Vô Hạn Tuần Hoàn
Các phân số tối giản với mẫu số có ước nguyên tố khác 2 và 5 sẽ biểu diễn được dưới dạng số thập phân vô hạn tuần hoàn.
Ví dụ: $\frac{1}{3} = 0.333\dots = 0.(3)$

### Số Vô Tỉ $\mathbb{I}$
Số vô tỉ là các số thập phân vô hạn không tuần hoàn.
Ví dụ: $\pi \approx 3.14159\dots$, $\sqrt{2} \approx 1.4142\dots$

### Căn Bậc Hai Số Học
Căn bậc hai số học của một số không âm $a$ là số $x \ge 0$ sao cho $x^2 = a$.
Ký hiệu: $\sqrt{a} = x$. Chú ý điều kiện $a \ge 0$.

### Tập Hợp Các Số Thực $\mathbb{R}$
Tập hợp số thực bao gồm cả số hữu tỉ và số vô tỉ:
$$ \mathbb{R} = \mathbb{Q} \cup \mathbb{I} $$

Giá trị tuyệt đối của số thực $x$:
$$ |x| = \begin{cases} x & \text{nếu } x \ge 0 \\ -x & \text{nếu } x < 0 \end{cases} $$










<!-- Extra spacing for layout considerations and printing margins -->










## 5. Sơ Đồ & Hình Ảnh (ASCII/Markdown Diagrams)
```text
Cấu Trúc Các Tập Hợp Số (Number Sets Structure)

         Real Numbers R
        /              \
  Rationals Q      Irrationals I
     /               (e.g., pi, sqrt(2))
Integers Z
   /
Naturals N
```

## 6. Hoạt Động Thực Hành (Hands-on Activities)
**Hands-on Lab:** Geometric construction of $\sqrt{2}$ using right triangle & compass.
- Vẽ đoạn thẳng AB = 1 cm.
- Từ B dựng đoạn vuông góc BC = 1 cm.
- Nối AC. Theo định lý Pytago, $AC = \sqrt{1^2 + 1^2} = \sqrt{2}$.
- Dùng compa quay cung tròn tâm A bán kính AC cắt trục số tại vị trí $\sqrt{2}$.

## 7. Lập Trình Mô Phỏng (Python Lab)
**Python Lab:** High-precision square root computation (Newton-Raphson) & repeating decimal to fraction.

```python
def newton_sqrt(n, iterations=10):
    x = n / 2.0  # Initial guess
    for i in range(iterations):
        x = 0.5 * (x + n / x)
        print(f"Iteration {i+1}: {x:.10f}")
    return x

import fractions

def decimal_to_frac():
    # 0.(3) = 1/3
    print("0.333... is approximately", fractions.Fraction(333333333, 1000000000).limit_denominator(10))

if __name__ == '__main__':
    print("Approximating sqrt(2):")
    newton_sqrt(2)
    decimal_to_frac()
```

## 8. Những Lỗi Thường Gặp (Common Mistakes & Misconceptions)
⚠️ **Lỗi sai:** Viết $\sqrt{-4} = -2$.
- Đúng: Căn bậc hai số học chỉ xác định cho số không âm. $\sqrt{-4}$ không xác định trong $\mathbb{R}$.
⚠️ **Lỗi sai:** Định nghĩa số thực chỉ là các số nguyên dương.

## 9. Câu Hỏi Thảo Luận (Discussion Questions)
1. $\pi$ có phải là số hữu tỉ không? Vì sao?
2. Sự khác nhau giữa số thập phân vô hạn tuần hoàn và vô hạn không tuần hoàn là gì?
3. Tại sao $|-x| = |x|$?
4. Nếu bình phương của một số là 25, số đó là bao nhiêu? (Cẩn thận số học và đại số).
5. Làm tròn số 3.14159 đến chữ số thập phân thứ hai.










<!-- Extra spacing for layout considerations and printing margins -->










## 10. Bài Tập (Homework & Practice Problems)
**Bài 1:** Tính: $\sqrt{64} - | -8 |$
**Giải chi tiết:**
- $\sqrt{64} = 8$
- $|-8| = 8$
- Kết quả: $8 - 8 = 0$

**Bài 2:** Làm tròn số $12.3456$ đến chữ số thập phân thứ ba.
**Giải chi tiết:**
- Chữ số thập phân thứ tư là 6 (lớn hơn 5).
- Nên ta cộng 1 vào chữ số hàng phần nghìn: $12.345 \implies 12.346$.

## 12. Bảng Tiêu Chí Đánh Giá (Assessment Rubric) - Thang Điểm 100 (100-Point Scale)

| Tiêu chí / Criteria | Điểm / Points | Mô tả chi tiết / Detailed Description | Mức xuất sắc (90-100%) | Mức Khá (70-89%) | Mức Đạt (50-69%) | Cần cố gắng (<50%) |
|---------------------|---------------|-----------------------------------------|------------------------|------------------|------------------|--------------------|
| **Lý thuyết (Theory)** | 20 | Hiểu rõ các định nghĩa, khái niệm toán học cốt lõi trong bài học. / Demonstrates clear understanding of definitions and core mathematical concepts. | Hoàn hảo | Rất tốt | Đạt yêu cầu | Còn nhiều thiếu sót |
| **Thực hành (Hands-on)** | 20 | Thực hiện đầy đủ các bước thực hành Lab, báo cáo kết quả rõ ràng. / Completes all Hands-on Lab steps, reports results clearly. | Hoàn thành xuất sắc | Hoàn thành tốt | Hoàn thành cơ bản | Chưa hoàn thành |
| **Lập trình (Python)** | 20 | Code chạy không lỗi, kết quả chính xác, giải thích được logic. / Code runs without errors, produces correct results, logic is well-explained. | Tối ưu, sáng tạo | Đúng yêu cầu | Chạy được | Lỗi nhiều |
| **Bài tập (Homework)** | 30 | Hoàn thành tất cả bài tập, trình bày lời giải (chứng minh) chi tiết, chính xác. / Completes all exercises with detailed, accurate step-by-step proofs/solutions. | Không sai sót | Sai 1-2 lỗi nhỏ | Sai một số câu | Bỏ trống nhiều |
| **Thảo luận (Discussion)**| 10 | Tham gia trả lời câu hỏi mở, đưa ra lập luận chặt chẽ. / Participates in answering open questions with solid arguments. | Lập luận sắc bén | Trả lời đầy đủ | Trả lời sơ sài | Không tham gia |
























































































































































































































































































































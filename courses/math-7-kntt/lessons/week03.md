# Tuần 3: Góc ở Vị Trí Đặc Biệt & Đường Thẳng Song Song / Week 3: Special Position Angles & Parallel Lines

## 1. Mục Tiêu Bài Học (Learning Objectives)
* **Vietnamese:** 
  - Nhận biết các góc ở vị trí đặc biệt (kề bù, đối đỉnh).
  - Hiểu và vẽ được tia phân giác của một góc.
  - Nhận biết hai đường thẳng song song qua các dấu hiệu (so le trong, đồng vị).
  - Hiểu Tiên đề Euclid và tính chất của hai đường thẳng song song.
  - Bước đầu làm quen với định lí và chứng minh định lí.
* **English:**
  - Identify special position angles (adjacent supplementary, vertically opposite).
  - Understand and construct the angle bisector.
  - Recognize parallel lines via criteria (alternate interior, corresponding angles).
  - Understand Euclid's Postulate and properties of parallel lines.
  - Get introduced to theorems and theorem proving.

## 2. Bài Học SGK Liên Quan (Related Textbook Lessons)
- SGK Kết nối tri thức Toán 7 Tập 1:
  - Bài 8: Góc ở vị trí đặc biệt. Tia phân giác của một góc.
  - Bài 9: Hai đường thẳng song song và dấu hiệu nhận biết.
  - Bài 10: Tiên đề Euclid. Tính chất của hai đường thẳng song song.
  - Bài 11: Định lí và chứng minh định lí.

## 3. Phần Mềm & Công Cụ (Software & Tooling)
| Software / Tool | Purpose |
|---|---|
| Python 3.10+ | Computations of angles and geometric proofs via SymPy Geometry. |
| SymPy | Analytic Geometry representations. |
| Matplotlib | Plotting 2D geometry lines. |
| GeoGebra 6.0 | Dynamic geometry constructions of bisectors & parallel lines. |

## 4. Lý Thuyết Chuyên Sâu (Deep Mathematical Theory)

### Góc Đặc Biệt
* **Góc kề bù (Adjacent Supplementary Angles):** Hai góc có một cạnh chung, hai cạnh còn lại là hai tia đối nhau. Tổng số đo là $180^\circ$.
* **Góc đối đỉnh (Vertically Opposite Angles):** Hai góc mà mỗi cạnh của góc này là tia đối của một cạnh của góc kia. Hai góc đối đỉnh thì bằng nhau: $\hat{O}_1 = \hat{O}_3$.

### Tia Phân Giác
Tia phân giác của một góc là tia nằm trong góc đó và tạo với hai cạnh của góc hai góc bằng nhau.
$$ \widehat{xOz} = \widehat{zOy} = \frac{\widehat{xOy}}{2} $$

### Hai Đường Thẳng Song Song
Nếu một đường thẳng $c$ cắt hai đường thẳng $a, b$ và trong các góc tạo thành có một cặp góc so le trong bằng nhau hoặc một cặp góc đồng vị bằng nhau thì $a \parallel b$.

### Tiên Đề Euclid
Qua một điểm nằm ngoài một đường thẳng, chỉ có một đường thẳng song song với đường thẳng đó.

### Chứng Minh Định Lí
Cấu trúc: Giả thiết (Hypothesis) $\implies$ Kết luận (Conclusion).
Chứng minh là dùng suy luận lô-gic để từ giả thiết suy ra kết luận dựa trên các tiên đề và định lí đã biết.










<!-- Extra spacing for layout considerations and printing margins -->










## 5. Sơ Đồ & Hình Ảnh (ASCII/Markdown Diagrams)
```text
Hai đường thẳng song song cắt bởi một cát tuyến:

    /
 --/------- a
  / 1|2
 / 3|4
    /
 --/------- b
  / 5|6
 / 7|8
/
```
Các góc so le trong: 3 và 6, 4 và 5.
Các góc đồng vị: 1 và 5, 2 và 6, 3 và 7, 4 và 8.

## 6. Hoạt Động Thực Hành (Hands-on Activities)
**Hands-on Lab:** GeoGebra construction of angle bisector & parallel lines verification.
- Dùng công cụ "Angle Bisector" trong GeoGebra để vẽ đường phân giác.
- Vẽ đường thẳng $a$, điểm $M$ ngoài $a$, dùng "Parallel Line" để vẽ $b$ qua $M$ song song $a$.
- Đo các góc so le trong bằng công cụ "Angle" để thấy chúng bằng nhau.

## 7. Lập Trình Mô Phỏng (Python Lab)
**Python Lab:** SymPy Geometry module checking line parallelism & angle calculations.

```python
import sympy as sp
from sympy.geometry import Point, Line, intersection

def test_parallel():
    p1, p2 = Point(0, 0), Point(5, 0)
    l1 = Line(p1, p2)
    
    p3, p4 = Point(0, 2), Point(5, 2)
    l2 = Line(p3, p4)
    
    is_para = l1.is_parallel(l2)
    print(f"Are l1 and l2 parallel? {is_para}")
    
if __name__ == '__main__':
    test_parallel()
```

## 8. Những Lỗi Thường Gặp (Common Mistakes & Misconceptions)
⚠️ **Lỗi sai:** Nghĩ rằng hai đường thẳng không cắt nhau trên giấy thì song song. (Phải kéo dài vô hạn).
⚠️ **Lỗi sai:** Nhầm lẫn giữa góc so le trong và góc trong cùng phía.

## 9. Câu Hỏi Thảo Luận (Discussion Questions)
1. Hai góc đối đỉnh có bù nhau không? Khi nào?
2. Có thể vẽ được bao nhiêu tia phân giác của một góc bẹt?
3. Nếu hai đường thẳng phân biệt cùng vuông góc với đường thẳng thứ ba thì chúng có song song không?
4. Tiên đề Euclid có thể chứng minh được không? (Hint: Không, nó là tiên đề).
5. Trong chứng minh hình học, tại sao không được dùng mắt thường nhìn hình để kết luận?










<!-- Extra spacing for layout considerations and printing margins -->










## 10. Bài Tập (Homework & Practice Problems)
**Bài 1:** Cho $\widehat{xOy} = 60^\circ$. Tia $Oz$ là phân giác của $\widehat{xOy}$. Tính $\widehat{xOz}$.
**Giải chi tiết:**
- Vì $Oz$ là tia phân giác, ta có: $\widehat{xOz} = \frac{\widehat{xOy}}{2}$
- Vậy $\widehat{xOz} = \frac{60^\circ}{2} = 30^\circ$

**Bài 2:** Cho $a \parallel b$. Đường thẳng $c$ cắt $a, b$ tạo thành cặp góc trong cùng phía là $\hat{A}_1$ và $\hat{B}_2$. Biết $\hat{A}_1 = 70^\circ$, tính $\hat{B}_2$.
**Giải chi tiết:**
- Nếu hai đường thẳng song song, hai góc trong cùng phía bù nhau.
- $\hat{A}_1 + \hat{B}_2 = 180^\circ$
- $\implies \hat{B}_2 = 180^\circ - 70^\circ = 110^\circ$.

## 12. Bảng Tiêu Chí Đánh Giá (Assessment Rubric) - Thang Điểm 100 (100-Point Scale)

| Tiêu chí / Criteria | Điểm / Points | Mô tả chi tiết / Detailed Description | Mức xuất sắc (90-100%) | Mức Khá (70-89%) | Mức Đạt (50-69%) | Cần cố gắng (<50%) |
|---------------------|---------------|-----------------------------------------|------------------------|------------------|------------------|--------------------|
| **Lý thuyết (Theory)** | 20 | Hiểu rõ các định nghĩa, khái niệm toán học cốt lõi trong bài học. / Demonstrates clear understanding of definitions and core mathematical concepts. | Hoàn hảo | Rất tốt | Đạt yêu cầu | Còn nhiều thiếu sót |
| **Thực hành (Hands-on)** | 20 | Thực hiện đầy đủ các bước thực hành Lab, báo cáo kết quả rõ ràng. / Completes all Hands-on Lab steps, reports results clearly. | Hoàn thành xuất sắc | Hoàn thành tốt | Hoàn thành cơ bản | Chưa hoàn thành |
| **Lập trình (Python)** | 20 | Code chạy không lỗi, kết quả chính xác, giải thích được logic. / Code runs without errors, produces correct results, logic is well-explained. | Tối ưu, sáng tạo | Đúng yêu cầu | Chạy được | Lỗi nhiều |
| **Bài tập (Homework)** | 30 | Hoàn thành tất cả bài tập, trình bày lời giải (chứng minh) chi tiết, chính xác. / Completes all exercises with detailed, accurate step-by-step proofs/solutions. | Không sai sót | Sai 1-2 lỗi nhỏ | Sai một số câu | Bỏ trống nhiều |
| **Thảo luận (Discussion)**| 10 | Tham gia trả lời câu hỏi mở, đưa ra lập luận chặt chẽ. / Participates in answering open questions with solid arguments. | Lập luận sắc bén | Trả lời đầy đủ | Trả lời sơ sài | Không tham gia |
























































































































































































































































































































# Tuần 4: Tam Giác Bằng Nhau & Tam Giác Cân / Week 4: Congruent Triangles & Isosceles Triangles

## 1. Mục Tiêu Bài Học (Learning Objectives)
* **Vietnamese:** 
  - Tính được tổng các góc trong một tam giác.
  - Chứng minh được hai tam giác bằng nhau theo các trường hợp c-c-c, c-g-c, g-c-g.
  - Nhận biết các trường hợp bằng nhau của tam giác vuông.
  - Hiểu tính chất của tam giác cân và đường trung trực của đoạn thẳng.
* **English:**
  - Calculate the sum of angles in a triangle.
  - Prove triangle congruence using SSS, SAS, and ASA criteria.
  - Recognize congruence criteria for right-angled triangles.
  - Understand the properties of isosceles triangles and perpendicular bisectors.

## 2. Bài Học SGK Liên Quan (Related Textbook Lessons)
- SGK Kết nối tri thức Toán 7 Tập 1:
  - Bài 12: Tổng các góc trong một tam giác.
  - Bài 13: Hai tam giác bằng nhau. Trường hợp c-c-c.
  - Bài 14: Trường hợp c-g-c và g-c-g.
  - Bài 15: Các trường hợp bằng nhau của tam giác vuông.
  - Bài 16: Tam giác cân. Đường trung trực.

## 3. Phần Mềm & Công Cụ (Software & Tooling)
| Software / Tool | Purpose |
|---|---|
| Python 3.10+ | Programmatic logic for triangle checks. |
| GeoGebra 6.0 | Interactive dragging to test congruence (SSS, SAS, ASA). |

## 4. Lý Thuyết Chuyên Sâu (Deep Mathematical Theory)

### Tổng Các Góc Trong Tam Giác
Định lý: Tổng ba góc trong một tam giác bằng $180^\circ$.
$$ \hat{A} + \hat{B} + \hat{C} = 180^\circ $$
Góc ngoài của tam giác bằng tổng hai góc trong không kề với nó.

### Các Trường Hợp Bằng Nhau Của Tam Giác
1. **Cạnh - Cạnh - Cạnh (SSS - c-c-c):** Nếu ba cạnh của tam giác này bằng ba cạnh của tam giác kia.
2. **Cạnh - Góc - Cạnh (SAS - c-g-c):** Nếu hai cạnh và góc xen giữa của tam giác này bằng hai cạnh và góc xen giữa của tam giác kia.
3. **Góc - Cạnh - Góc (ASA - g-c-g):** Nếu một cạnh và hai góc kề của tam giác này bằng một cạnh và hai góc kề của tam giác kia.

### Tam Giác Vuông
Bên cạnh các trường hợp chung, tam giác vuông có thêm:
- Cạnh huyền - Cạnh góc vuông (Hypotenuse - Leg)
- Cạnh huyền - Góc nhọn (Hypotenuse - Angle)

### Tam Giác Cân & Đường Trung Trực
Tam giác cân là tam giác có hai cạnh bằng nhau. Tính chất: Hai góc ở đáy bằng nhau.
Đường trung trực của đoạn thẳng là đường thẳng vuông góc với đoạn thẳng tại trung điểm của nó. Điểm nằm trên đường trung trực thì cách đều hai mút của đoạn thẳng.










<!-- Extra spacing for layout considerations and printing margins -->










## 5. Sơ Đồ & Hình Ảnh (ASCII/Markdown Diagrams)
```text
Tam Giác Cân ABC (AB = AC)
      A
     / \
    /   \
   /     \
  /       \
 B---------C
```

## 6. Hoạt Động Thực Hành (Hands-on Activities)
**Hands-on Lab:** GeoGebra dynamic triangle congruence explorer.
- Vẽ tam giác ABC và A'B'C' với các điều kiện ràng buộc SSS.
- Thử kéo đỉnh A, nhận thấy A' cũng di chuyển theo để bảo toàn tính bằng nhau.

## 7. Lập Trình Mô Phỏng (Python Lab)
**Python Lab:** Automatic triangle congruence checker script.

```python
def check_congruence(t1, t2, method='SSS'):
    # t1, t2 are lists of sides [a, b, c]
    if method == 'SSS':
        return sorted(t1) == sorted(t2)
    return False

if __name__ == '__main__':
    tA = [3, 4, 5]
    tB = [5, 4, 3]
    print(f"Are tA and tB congruent by SSS? {check_congruence(tA, tB)}")
```

## 8. Những Lỗi Thường Gặp (Common Mistakes & Misconceptions)
⚠️ **Lỗi sai:** Cho rằng hai tam giác có 3 góc bằng nhau (AAA) thì bằng nhau (thực tế chúng chỉ đồng dạng).
⚠️ **Lỗi sai:** Áp dụng trường hợp SSA (hai cạnh và một góc không xen giữa).

## 9. Câu Hỏi Thảo Luận (Discussion Questions)
1. Tại sao không có trường hợp bằng nhau Góc-Góc-Góc (g-g-g)?
2. Tam giác đều có phải là tam giác cân không?
3. Nếu một điểm cách đều 3 đỉnh của tam giác, điểm đó là giao điểm của các đường gì?
4. Chứng minh tổng 3 góc tam giác bằng 180 độ bằng cách dùng 2 đường thẳng song song.
5. Thế nào là góc ngoài của tam giác?










<!-- Extra spacing for layout considerations and printing margins -->










## 10. Bài Tập (Homework & Practice Problems)
**Bài 1:** Cho $\Delta ABC$ cân tại $A$. Biết $\hat{A} = 40^\circ$. Tính $\hat{B}, \hat{C}$.
**Giải chi tiết:**
- Vì $\Delta ABC$ cân tại A nên $\hat{B} = \hat{C}$.
- Lại có $\hat{A} + \hat{B} + \hat{C} = 180^\circ$.
- $40^\circ + 2\hat{B} = 180^\circ \implies 2\hat{B} = 140^\circ \implies \hat{B} = \hat{C} = 70^\circ$.

**Bài 2:** Cho đoạn thẳng $AB = 6$ cm. Điểm $M$ nằm trên đường trung trực của $AB$. Biết $MA = 5$ cm. Tính $MB$.
**Giải chi tiết:**
- Theo tính chất đường trung trực của đoạn thẳng, mọi điểm nằm trên đường trung trực đều cách đều hai mút của đoạn thẳng đó.
- Vậy $MB = MA = 5$ cm.

## 12. Bảng Tiêu Chí Đánh Giá (Assessment Rubric) - Thang Điểm 100 (100-Point Scale)

| Tiêu chí / Criteria | Điểm / Points | Mô tả chi tiết / Detailed Description | Mức xuất sắc (90-100%) | Mức Khá (70-89%) | Mức Đạt (50-69%) | Cần cố gắng (<50%) |
|---------------------|---------------|-----------------------------------------|------------------------|------------------|------------------|--------------------|
| **Lý thuyết (Theory)** | 20 | Hiểu rõ các định nghĩa, khái niệm toán học cốt lõi trong bài học. / Demonstrates clear understanding of definitions and core mathematical concepts. | Hoàn hảo | Rất tốt | Đạt yêu cầu | Còn nhiều thiếu sót |
| **Thực hành (Hands-on)** | 20 | Thực hiện đầy đủ các bước thực hành Lab, báo cáo kết quả rõ ràng. / Completes all Hands-on Lab steps, reports results clearly. | Hoàn thành xuất sắc | Hoàn thành tốt | Hoàn thành cơ bản | Chưa hoàn thành |
| **Lập trình (Python)** | 20 | Code chạy không lỗi, kết quả chính xác, giải thích được logic. / Code runs without errors, produces correct results, logic is well-explained. | Tối ưu, sáng tạo | Đúng yêu cầu | Chạy được | Lỗi nhiều |
| **Bài tập (Homework)** | 30 | Hoàn thành tất cả bài tập, trình bày lời giải (chứng minh) chi tiết, chính xác. / Completes all exercises with detailed, accurate step-by-step proofs/solutions. | Không sai sót | Sai 1-2 lỗi nhỏ | Sai một số câu | Bỏ trống nhiều |
| **Thảo luận (Discussion)**| 10 | Tham gia trả lời câu hỏi mở, đưa ra lập luận chặt chẽ. / Participates in answering open questions with solid arguments. | Lập luận sắc bén | Trả lời đầy đủ | Trả lời sơ sài | Không tham gia |
























































































































































































































































































































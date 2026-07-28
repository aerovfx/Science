# Tuần 7: Các Loại Góc, Đường Thẳng Vuông Góc & Song Song
# Week 7: Types of Angles, Perpendicular & Parallel Lines

## 1. Mục Tiêu Bài Học / Learning Objectives
- **Vietnamese**: Nhận biết góc nhọn, vuông, tù, bẹt. Hiểu thế nào là hai đường thẳng vuông góc, song song.
- **English**: Identify acute, right, obtuse, straight angles. Understand perpendicular and parallel lines.

## 2. Chủ Đề Sách Giáo Khoa / Textbook Themes
- SGK Kết nối tri thức Toán 4: Chủ đề 8 (Bài 36, 37, 38)

## 3. Công Cụ STEM & EdTech / STEM & EdTech Tools
| Công cụ / Tool | Ứng dụng / Application |
|---|---|
| Giấy thủ công / Origami Paper | Gấp hình hình học / Geometric folding |
| Êke / Set Square | Vẽ đường vuông góc / Drawing perpendiculars |
| Python 3.10+ | Giả lập góc / Angle simulator |
| GeoGebra | Mô phỏng đường thẳng / Line simulation |

## 4. Lý Thuyết & Ví Dụ / Theory & Examples
### Các Loại Góc / Types of Angles
- **Góc nhọn / Acute angle**: $< 90^\circ$
- **Góc vuông / Right angle**: $= 90^\circ$
- **Góc tù / Obtuse angle**: $> 90^\circ$ và $< 180^\circ$
- **Góc bẹt / Straight angle**: $= 180^\circ$

### Hai đường thẳng / Lines
- **Vuông góc / Perpendicular**: Cắt nhau tạo thành 4 góc vuông.
- **Song song / Parallel**: Không bao giờ cắt nhau.

## 5. Sơ Đồ & Minh Họa / Diagrams
```text
      |
      | Right Angle (90)
______|______
```

## 6. Hoạt Động STEM / STEM Activities
- **Paper folding geometry**: Fold papers to create perfect right angles and parallel lines.
- **Set square drawing workshop**: Practice drawing parallel lines accurately.

## 7. Lập Trình Python / Python Lab
```python
def classify_angle(degree):
    if degree < 90:
        return "Acute / Góc nhọn"
    elif degree == 90:
        return "Right / Góc vuông"
    elif degree < 180:
        return "Obtuse / Góc tù"
    elif degree == 180:
        return "Straight / Góc bẹt"
    else:
        return "Invalid / Không hợp lệ"

import random
for _ in range(5):
    deg = random.randint(10, 180)
    print(f"Angle {deg} is {classify_angle(deg)}")
```

## 8. Lỗi Thường Gặp / Common Misconceptions
- 💡 **Nhầm lẫn phương hướng / Direction confusion**: Thinking lines must be strictly vertical/horizontal to be parallel.

## 9. Câu Hỏi Thảo Luận / Discussion Questions
1. Góc tù lớn hơn hay nhỏ hơn góc vuông? / Is obtuse angle larger than right angle?
2. Hai đường thẳng song song có cắt nhau không? / Do parallel lines intersect?
3. Cần dụng cụ gì để vẽ đường vuông góc? / Tool for perpendicular lines?
4. Góc bẹt bằng mấy góc vuông? / Straight angle = how many right angles?
5. Cho ví dụ về đường song song thực tế? / Real life example of parallel lines?

## 10. Bài Tập / Exercises
### Bài Tập Thực Hành / Practice Exercises

**Bài / Exercise 1:** Phân loại góc / Classify angle
Cho góc có số đo 10 độ. Đây là góc gì?
Given an angle of 10 degrees. What type of angle is it?

*Giải / Solution:*
Đó là Góc nhọn / Acute angle.

**Bài / Exercise 2:** Phân loại góc / Classify angle
Cho góc có số đo 15 độ. Đây là góc gì?
Given an angle of 15 degrees. What type of angle is it?

*Giải / Solution:*
Đó là Góc nhọn / Acute angle.

**Bài / Exercise 3:** Phân loại góc / Classify angle
Cho góc có số đo 20 độ. Đây là góc gì?
Given an angle of 20 degrees. What type of angle is it?

*Giải / Solution:*
Đó là Góc nhọn / Acute angle.

**Bài / Exercise 4:** Phân loại góc / Classify angle
Cho góc có số đo 25 độ. Đây là góc gì?
Given an angle of 25 degrees. What type of angle is it?

*Giải / Solution:*
Đó là Góc nhọn / Acute angle.

**Bài / Exercise 5:** Phân loại góc / Classify angle
Cho góc có số đo 30 độ. Đây là góc gì?
Given an angle of 30 degrees. What type of angle is it?

*Giải / Solution:*
Đó là Góc nhọn / Acute angle.

**Bài / Exercise 6:** Phân loại góc / Classify angle
Cho góc có số đo 35 độ. Đây là góc gì?
Given an angle of 35 degrees. What type of angle is it?

*Giải / Solution:*
Đó là Góc nhọn / Acute angle.

**Bài / Exercise 7:** Phân loại góc / Classify angle
Cho góc có số đo 40 độ. Đây là góc gì?
Given an angle of 40 degrees. What type of angle is it?

*Giải / Solution:*
Đó là Góc nhọn / Acute angle.

**Bài / Exercise 8:** Phân loại góc / Classify angle
Cho góc có số đo 45 độ. Đây là góc gì?
Given an angle of 45 degrees. What type of angle is it?

*Giải / Solution:*
Đó là Góc nhọn / Acute angle.

**Bài / Exercise 9:** Phân loại góc / Classify angle
Cho góc có số đo 50 độ. Đây là góc gì?
Given an angle of 50 degrees. What type of angle is it?

*Giải / Solution:*
Đó là Góc nhọn / Acute angle.

**Bài / Exercise 10:** Phân loại góc / Classify angle
Cho góc có số đo 55 độ. Đây là góc gì?
Given an angle of 55 degrees. What type of angle is it?

*Giải / Solution:*
Đó là Góc nhọn / Acute angle.

**Bài / Exercise 11:** Phân loại góc / Classify angle
Cho góc có số đo 60 độ. Đây là góc gì?
Given an angle of 60 degrees. What type of angle is it?

*Giải / Solution:*
Đó là Góc nhọn / Acute angle.

**Bài / Exercise 12:** Phân loại góc / Classify angle
Cho góc có số đo 65 độ. Đây là góc gì?
Given an angle of 65 degrees. What type of angle is it?

*Giải / Solution:*
Đó là Góc nhọn / Acute angle.

**Bài / Exercise 13:** Phân loại góc / Classify angle
Cho góc có số đo 70 độ. Đây là góc gì?
Given an angle of 70 degrees. What type of angle is it?

*Giải / Solution:*
Đó là Góc nhọn / Acute angle.

**Bài / Exercise 14:** Phân loại góc / Classify angle
Cho góc có số đo 75 độ. Đây là góc gì?
Given an angle of 75 degrees. What type of angle is it?

*Giải / Solution:*
Đó là Góc nhọn / Acute angle.

**Bài / Exercise 15:** Phân loại góc / Classify angle
Cho góc có số đo 80 độ. Đây là góc gì?
Given an angle of 80 degrees. What type of angle is it?

*Giải / Solution:*
Đó là Góc nhọn / Acute angle.

**Bài / Exercise 16:** Phân loại góc / Classify angle
Cho góc có số đo 85 độ. Đây là góc gì?
Given an angle of 85 degrees. What type of angle is it?

*Giải / Solution:*
Đó là Góc nhọn / Acute angle.

**Bài / Exercise 17:** Phân loại góc / Classify angle
Cho góc có số đo 90 độ. Đây là góc gì?
Given an angle of 90 degrees. What type of angle is it?

*Giải / Solution:*
Đó là Góc vuông / Right angle.

**Bài / Exercise 18:** Phân loại góc / Classify angle
Cho góc có số đo 95 độ. Đây là góc gì?
Given an angle of 95 degrees. What type of angle is it?

*Giải / Solution:*
Đó là Góc tù / Obtuse angle.

**Bài / Exercise 19:** Phân loại góc / Classify angle
Cho góc có số đo 100 độ. Đây là góc gì?
Given an angle of 100 degrees. What type of angle is it?

*Giải / Solution:*
Đó là Góc tù / Obtuse angle.

**Bài / Exercise 20:** Phân loại góc / Classify angle
Cho góc có số đo 105 độ. Đây là góc gì?
Given an angle of 105 degrees. What type of angle is it?

*Giải / Solution:*
Đó là Góc tù / Obtuse angle.

**Bài / Exercise 21:** Phân loại góc / Classify angle
Cho góc có số đo 110 độ. Đây là góc gì?
Given an angle of 110 degrees. What type of angle is it?

*Giải / Solution:*
Đó là Góc tù / Obtuse angle.

**Bài / Exercise 22:** Phân loại góc / Classify angle
Cho góc có số đo 115 độ. Đây là góc gì?
Given an angle of 115 degrees. What type of angle is it?

*Giải / Solution:*
Đó là Góc tù / Obtuse angle.

**Bài / Exercise 23:** Phân loại góc / Classify angle
Cho góc có số đo 120 độ. Đây là góc gì?
Given an angle of 120 degrees. What type of angle is it?

*Giải / Solution:*
Đó là Góc tù / Obtuse angle.

**Bài / Exercise 24:** Phân loại góc / Classify angle
Cho góc có số đo 125 độ. Đây là góc gì?
Given an angle of 125 degrees. What type of angle is it?

*Giải / Solution:*
Đó là Góc tù / Obtuse angle.

**Bài / Exercise 25:** Phân loại góc / Classify angle
Cho góc có số đo 130 độ. Đây là góc gì?
Given an angle of 130 degrees. What type of angle is it?

*Giải / Solution:*
Đó là Góc tù / Obtuse angle.

**Bài / Exercise 26:** Phân loại góc / Classify angle
Cho góc có số đo 135 độ. Đây là góc gì?
Given an angle of 135 degrees. What type of angle is it?

*Giải / Solution:*
Đó là Góc tù / Obtuse angle.

**Bài / Exercise 27:** Phân loại góc / Classify angle
Cho góc có số đo 140 độ. Đây là góc gì?
Given an angle of 140 degrees. What type of angle is it?

*Giải / Solution:*
Đó là Góc tù / Obtuse angle.

**Bài / Exercise 28:** Phân loại góc / Classify angle
Cho góc có số đo 145 độ. Đây là góc gì?
Given an angle of 145 degrees. What type of angle is it?

*Giải / Solution:*
Đó là Góc tù / Obtuse angle.

**Bài / Exercise 29:** Phân loại góc / Classify angle
Cho góc có số đo 150 độ. Đây là góc gì?
Given an angle of 150 degrees. What type of angle is it?

*Giải / Solution:*
Đó là Góc tù / Obtuse angle.

**Bài / Exercise 30:** Phân loại góc / Classify angle
Cho góc có số đo 155 độ. Đây là góc gì?
Given an angle of 155 degrees. What type of angle is it?

*Giải / Solution:*
Đó là Góc tù / Obtuse angle.

**Bài / Exercise 31:** Phân loại góc / Classify angle
Cho góc có số đo 160 độ. Đây là góc gì?
Given an angle of 160 degrees. What type of angle is it?

*Giải / Solution:*
Đó là Góc tù / Obtuse angle.

**Bài / Exercise 32:** Phân loại góc / Classify angle
Cho góc có số đo 165 độ. Đây là góc gì?
Given an angle of 165 degrees. What type of angle is it?

*Giải / Solution:*
Đó là Góc tù / Obtuse angle.

**Bài / Exercise 33:** Phân loại góc / Classify angle
Cho góc có số đo 170 độ. Đây là góc gì?
Given an angle of 170 degrees. What type of angle is it?

*Giải / Solution:*
Đó là Góc tù / Obtuse angle.

**Bài / Exercise 34:** Phân loại góc / Classify angle
Cho góc có số đo 175 độ. Đây là góc gì?
Given an angle of 175 degrees. What type of angle is it?

*Giải / Solution:*
Đó là Góc tù / Obtuse angle.

**Bài / Exercise 35:** Phân loại góc / Classify angle
Cho góc có số đo 180 độ. Đây là góc gì?
Given an angle of 180 degrees. What type of angle is it?

*Giải / Solution:*
Đó là Góc bẹt / Straight angle.

**Bài / Exercise 36:** Phân loại góc / Classify angle
Cho góc có số đo 185 độ. Đây là góc gì?
Given an angle of 185 degrees. What type of angle is it?

*Giải / Solution:*
Đó là Góc bẹt / Straight angle.

**Bài / Exercise 37:** Phân loại góc / Classify angle
Cho góc có số đo 190 độ. Đây là góc gì?
Given an angle of 190 degrees. What type of angle is it?

*Giải / Solution:*
Đó là Góc bẹt / Straight angle.

**Bài / Exercise 38:** Phân loại góc / Classify angle
Cho góc có số đo 195 độ. Đây là góc gì?
Given an angle of 195 degrees. What type of angle is it?

*Giải / Solution:*
Đó là Góc bẹt / Straight angle.

**Bài / Exercise 39:** Phân loại góc / Classify angle
Cho góc có số đo 200 độ. Đây là góc gì?
Given an angle of 200 degrees. What type of angle is it?

*Giải / Solution:*
Đó là Góc bẹt / Straight angle.

**Bài / Exercise 40:** Phân loại góc / Classify angle
Cho góc có số đo 205 độ. Đây là góc gì?
Given an angle of 205 degrees. What type of angle is it?

*Giải / Solution:*
Đó là Góc bẹt / Straight angle.

**Bài / Exercise 41:** Phân loại góc / Classify angle
Cho góc có số đo 210 độ. Đây là góc gì?
Given an angle of 210 degrees. What type of angle is it?

*Giải / Solution:*
Đó là Góc bẹt / Straight angle.

**Bài / Exercise 42:** Phân loại góc / Classify angle
Cho góc có số đo 215 độ. Đây là góc gì?
Given an angle of 215 degrees. What type of angle is it?

*Giải / Solution:*
Đó là Góc bẹt / Straight angle.

**Bài / Exercise 43:** Phân loại góc / Classify angle
Cho góc có số đo 220 độ. Đây là góc gì?
Given an angle of 220 degrees. What type of angle is it?

*Giải / Solution:*
Đó là Góc bẹt / Straight angle.

**Bài / Exercise 44:** Phân loại góc / Classify angle
Cho góc có số đo 225 độ. Đây là góc gì?
Given an angle of 225 degrees. What type of angle is it?

*Giải / Solution:*
Đó là Góc bẹt / Straight angle.

**Bài / Exercise 45:** Phân loại góc / Classify angle
Cho góc có số đo 230 độ. Đây là góc gì?
Given an angle of 230 degrees. What type of angle is it?

*Giải / Solution:*
Đó là Góc bẹt / Straight angle.

**Bài / Exercise 46:** Phân loại góc / Classify angle
Cho góc có số đo 235 độ. Đây là góc gì?
Given an angle of 235 degrees. What type of angle is it?

*Giải / Solution:*
Đó là Góc bẹt / Straight angle.

**Bài / Exercise 47:** Phân loại góc / Classify angle
Cho góc có số đo 240 độ. Đây là góc gì?
Given an angle of 240 degrees. What type of angle is it?

*Giải / Solution:*
Đó là Góc bẹt / Straight angle.

**Bài / Exercise 48:** Phân loại góc / Classify angle
Cho góc có số đo 245 độ. Đây là góc gì?
Given an angle of 245 degrees. What type of angle is it?

*Giải / Solution:*
Đó là Góc bẹt / Straight angle.

**Bài / Exercise 49:** Phân loại góc / Classify angle
Cho góc có số đo 250 độ. Đây là góc gì?
Given an angle of 250 degrees. What type of angle is it?

*Giải / Solution:*
Đó là Góc bẹt / Straight angle.

**Bài / Exercise 50:** Phân loại góc / Classify angle
Cho góc có số đo 255 độ. Đây là góc gì?
Given an angle of 255 degrees. What type of angle is it?

*Giải / Solution:*
Đó là Góc bẹt / Straight angle.



## 11. Đánh Giá / Assessment Rubric
| Tiêu chí / Criteria | Điểm / Score |
|---|---|
| Hiểu lý thuyết / Theory | 30/100 |
| Giải toán / Math | 40/100 |
| Hoạt động nhóm / Group | 20/100 |
| Code Python / Python | 10/100 |

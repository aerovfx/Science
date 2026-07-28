import os

os.makedirs('/Users/dangvietchung/Science/courses/math-4-kntt/lessons', exist_ok=True)

def gen_exercises(topic, count, start_num):
    ex = "### Bài Tập Thực Hành / Practice Exercises\n\n"
    for i in range(count):
        if topic == 'mass':
            ex += f"**Bài / Exercise {start_num + i}:** Đổi đơn vị / Convert units\n"
            ex += f"a) {i+2} tấn = ... tạ = ... yến = ... kg\n"
            ex += f"b) {i+5}000 kg = ... tấn\n\n"
            ex += f"*Giải / Solution:*\n"
            ex += f"a) {i+2} tấn = {(i+2)*10} tạ = {(i+2)*100} yến = {(i+2)*1000} kg\n"
            ex += f"b) {i+5}000 kg = {i+5} tấn\n\n"
        elif topic == 'angle':
            ex += f"**Bài / Exercise {start_num + i}:** Phân loại góc / Classify angle\n"
            deg = 10 + i * 5
            if deg < 90: a = "Góc nhọn / Acute angle"
            elif deg == 90: a = "Góc vuông / Right angle"
            elif deg < 180: a = "Góc tù / Obtuse angle"
            else: a = "Góc bẹt / Straight angle"
            ex += f"Cho góc có số đo {deg} độ. Đây là góc gì?\n"
            ex += f"Given an angle of {deg} degrees. What type of angle is it?\n\n"
            ex += f"*Giải / Solution:*\n"
            ex += f"Đó là {a}.\n\n"
        elif topic == 'area':
            ex += f"**Bài / Exercise {start_num + i}:** Tính diện tích / Calculate area\n"
            a = i + 3
            b = i + 4
            ex += f"Hình bình hành có đáy $a = {a}$ cm, chiều cao $h = {b}$ cm. Tính diện tích.\n"
            ex += f"Parallelogram with base $a = {a}$ cm, height $h = {b}$ cm. Calculate area.\n\n"
            ex += f"*Giải / Solution:*\n"
            ex += f"Diện tích là / Area is: $S = {a} \\times {b} = {a*b}$ cm$^2$\n\n"
        elif topic == 'stat':
            ex += f"**Bài / Exercise {start_num + i}:** Thống kê / Statistics\n"
            ex += f"Trong lớp có {i+10} học sinh thích táo, {i+12} học sinh thích cam. Tính tổng.\n"
            ex += f"In the class, {i+10} students like apples, {i+12} students like oranges. Total?\n\n"
            ex += f"*Giải / Solution:*\n"
            ex += f"Tổng / Total: {i+10} + {i+12} = {2*i+22} học sinh / students.\n\n"
        elif topic == 'review':
            ex += f"**Bài / Exercise {start_num + i}:** Ôn tập tổng hợp / Comprehensive Review\n"
            ex += f"Tính giá trị biểu thức / Calculate: $ {i*10} + {i*5} \\times 2 $\n\n"
            ex += f"*Giải / Solution:*\n"
            ex += f"Kết quả / Result: $ {i*10} + {i*10} = {i*20} $\n\n"
    return ex

# Week 06
week06 = f"""# Tuần 6: Đại Lượng & Đo Đại Lượng (Khối Lượng, Diện Tích, Thời Gian, Góc)
# Week 6: Units of Measurement (Mass, Area, Time, Angle)

## 1. Mục Tiêu Bài Học / Learning Objectives
- **Vietnamese**: Học sinh nắm vững các đơn vị đo khối lượng (Yến, Tạ, Tấn, Gam), diện tích ($cm^2, dm^2, m^2$), thời gian (Giây, Thế kỷ) và biết đo góc.
- **English**: Students will master units of mass (Yến, Tạ, Tấn, Gram), area ($cm^2, dm^2, m^2$), time (Second, Century), and angle measurement.

## 2. Chủ Đề Sách Giáo Khoa / Textbook Themes
- SGK Kết nối tri thức Toán 4: Chủ đề 7 (Bài 31, 32, 33, 34, 35)

## 3. Công Cụ STEM & EdTech / STEM & EdTech Tools
| Công cụ / Tool | Ứng dụng / Application |
|---|---|
| Cân thăng bằng / Balance Scale | Đo khối lượng thực tế / Real-world mass measuring |
| Giấy kẻ ô / Grid Paper | Khám phá diện tích / Area measurement |
| Python 3.10+ | Lập trình tính toán chuyển đổi / Unit conversion programming |
| Thước đo góc / Protractor | Đo góc / Angle measuring |

## 4. Lý Thuyết & Ví Dụ / Theory & Examples
### Khối Lượng / Mass
- 1 tấn (ton) = 10 tạ (quintal) = 100 yến = 1000 kg
- 1 kg = 1000 g

### Diện Tích / Area
- $1\\text{{ m}}^2 = 100\\text{{ dm}}^2 = 10000\\text{{ cm}}^2$

### Thời Gian / Time
- 1 phút (minute) = 60 giây (seconds)
- 1 thế kỷ (century) = 100 năm (years)

### Đo Góc / Angle Measurement
Dùng thước đo góc (Protractor) để đo theo đơn vị độ ($^\\circ$).

## 5. Sơ Đồ & Bảng Chuyển Đổi / Conversion Charts
```text
[Tấn] --x10--> [Tạ] --x10--> [Yến] --x10--> [kg]
[kg] <--/10-- [Yến] <--/10-- [Tạ] <--/10-- [Tấn]
```

## 6. Hoạt Động STEM / STEM Activities
- **Balance scale mass measuring**: Use a balance scale to measure objects in the classroom.
- **Square meter grid paper**: Stick 100 $1\\text{{dm}}^2$ papers to create $1\\text{{m}}^2$.

## 7. Lập Trình Python / Python Lab
```python
def unit_converter(value, unit_from, unit_to):
    # Mass conversion logic
    mass_factors = {{'tan': 1000, 'ta': 100, 'yen': 10, 'kg': 1, 'g': 0.001}}
    if unit_from in mass_factors and unit_to in mass_factors:
        kg_val = value * mass_factors[unit_from]
        return kg_val / mass_factors[unit_to]
    return None

def is_leap_year(year):
    return year % 4 == 0 and (year % 100 != 0 or year % 400 == 0)

print("2 tons in kg:", unit_converter(2, 'tan', 'kg'))
print("Is 2024 leap?", is_leap_year(2024))
```

## 8. Lỗi Thường Gặp / Common Misconceptions
- 💡 **Nhầm lẫn đơn vị / Unit confusion**: Students often forget that 1 century is 100 years, not 10.
- 💡 **Đọc sai thước đo góc / Protractor misreading**: Reading the wrong scale (inner vs outer) on the protractor.

## 9. Câu Hỏi Thảo Luận / Discussion Questions
1. Tại sao cần nhiều đơn vị đo khối lượng khác nhau? / Why do we need different mass units?
2. 1 mét vuông lớn cỡ nào? / How big is 1 square meter?
3. Năm nhuận có bao nhiêu ngày? / How many days in a leap year?
4. Thế kỷ 21 bắt đầu từ năm nào? / When does the 21st century start?
5. Đo góc dùng dụng cụ gì? / What tool to measure angles?

## 10. Bài Tập / Exercises
{gen_exercises('mass', 50, 1)}

## 11. Đánh Giá / Assessment Rubric
| Tiêu chí / Criteria | Điểm / Score |
|---|---|
| Hiểu lý thuyết / Theory understanding | 30/100 |
| Giải toán chính xác / Accurate math | 40/100 |
| Tham gia STEM / STEM participation | 20/100 |
| Kỹ năng Python / Python skills | 10/100 |
"""

# Week 07
week07 = f"""# Tuần 7: Các Loại Góc, Đường Thẳng Vuông Góc & Song Song
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
- **Góc nhọn / Acute angle**: $< 90^\\circ$
- **Góc vuông / Right angle**: $= 90^\\circ$
- **Góc tù / Obtuse angle**: $> 90^\\circ$ và $< 180^\\circ$
- **Góc bẹt / Straight angle**: $= 180^\\circ$

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
    print(f"Angle {{deg}} is {{classify_angle(deg)}}")
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
{gen_exercises('angle', 50, 1)}

## 11. Đánh Giá / Assessment Rubric
| Tiêu chí / Criteria | Điểm / Score |
|---|---|
| Hiểu lý thuyết / Theory | 30/100 |
| Giải toán / Math | 40/100 |
| Hoạt động nhóm / Group | 20/100 |
| Code Python / Python | 10/100 |
"""

# Week 08
week08 = f"""# Tuần 8: Hình Bình Hành, Hình Thoi & Tính Diện Tích
# Week 8: Parallelogram, Rhombus & Area Calculations

## 1. Mục Tiêu Bài Học / Learning Objectives
- **Vietnamese**: Nhận biết hình bình hành, hình thoi. Tính được diện tích các hình này.
- **English**: Identify parallelogram and rhombus. Calculate their area.

## 2. Chủ Đề Sách Giáo Khoa / Textbook Themes
- SGK Kết nối tri thức Toán 4: Chủ đề 8 (Bài 39, 40, 41, 42, 43)

## 3. Công Cụ STEM & EdTech / STEM & EdTech Tools
| Công cụ / Tool | Ứng dụng / Application |
|---|---|
| Tangram | Ghép hình / Puzzle geometry |
| Giấy cắt / Cutting Paper | Biến đổi hình / Shape transformation |
| Python 3.10+ | Tính diện tích / Area calculator |

## 4. Lý Thuyết & Ví Dụ / Theory & Examples
### Hình Bình Hành / Parallelogram
- Công thức diện tích / Area: $S = a \\times h$

### Hình Thoi / Rhombus
- Bốn cạnh bằng nhau.
- Công thức diện tích / Area: $S = \\frac{{m \\times n}}{{2}}$

## 5. Sơ Đồ & Minh Họa / Diagrams
```text
   ____
  /   /  Parallelogram
 /___/
```

## 6. Hoạt Động STEM / STEM Activities
- **Tangram puzzle**: Use tangram to build parallelograms.
- **Paper cutting**: Cut a parallelogram to make a rectangle.

## 7. Lập Trình Python / Python Lab
```python
def area_parallelogram(base, height):
    return base * height

def area_rhombus(d1, d2):
    return (d1 * d2) / 2

print("Parallelogram area (a=5, h=4):", area_parallelogram(5, 4))
print("Rhombus area (m=6, n=8):", area_rhombus(6, 8))
```

## 8. Lỗi Thường Gặp / Common Misconceptions
- 💡 **Nhầm chu vi và diện tích / Confusing perimeter vs area**: Multiplying side by side instead of base by height.

## 9. Câu Hỏi Thảo Luận / Discussion Questions
1. Hình thoi có phải hình bình hành không? / Is a rhombus a parallelogram?
2. Chiều cao hình bình hành đo thế nào? / How to measure parallelogram height?
3. Hai đường chéo hình thoi có vuông góc không? / Are rhombus diagonals perpendicular?
4. Đơn vị diện tích là gì? / Area units?
5. Diện tích hình thoi 2 đường chéo 4 và 5? / Rhombus area with diagonals 4 and 5?

## 10. Bài Tập / Exercises
{gen_exercises('area', 50, 1)}

## 11. Đánh Giá / Assessment Rubric
| Tiêu chí / Criteria | Điểm / Score |
|---|---|
| Hiểu lý thuyết / Theory | 30/100 |
| Giải toán / Math | 40/100 |
| Hoạt động nhóm / Group | 20/100 |
| Code Python / Python | 10/100 |
"""

# Week 09
week09 = f"""# Tuần 9: Thống Kê & Xác Suất Đơn Giản
# Week 9: Elementary Statistics & Probability

## 1. Mục Tiêu Bài Học / Learning Objectives
- **Vietnamese**: Đọc biểu đồ tranh, biểu đồ cột. Hiểu khái niệm xác suất đơn giản.
- **English**: Read pictograms, bar charts. Understand elementary probability.

## 2. Chủ Đề Sách Giáo Khoa / Textbook Themes
- SGK Kết nối tri thức Toán 4: Chủ đề 9 (Bài 44, 45, 46, 47, 48)

## 3. Công Cụ STEM & EdTech / STEM & EdTech Tools
| Công cụ / Tool | Ứng dụng / Application |
|---|---|
| Đồng xu / Coin | Tung đồng xu / Coin toss |
| Bảng phấn / Chalkboard | Thu thập dữ liệu / Data collection |
| Python & Matplotlib | Vẽ biểu đồ / Chart plotting |

## 4. Lý Thuyết & Ví Dụ / Theory & Examples
### Thống Kê / Statistics
- **Biểu đồ tranh / Pictogram**: Dùng hình ảnh biểu diễn số liệu.
- **Biểu đồ cột / Bar chart**: Cột cao thấp biểu diễn số lượng.

### Xác Suất / Probability
- **Chắc chắn / Certain**: 100% xảy ra.
- **Có thể / Possible**: Có khả năng.
- **Không thể / Impossible**: 0% xảy ra.

## 5. Sơ Đồ & Minh Họa / Diagrams
```text
Bar Chart:
|
| *** (10)
| ***** (15)
|___
```

## 6. Hoạt Động STEM / STEM Activities
- **Classroom survey**: Survey favorite fruits.
- **Coin toss experiment**: Flip a coin 20 times and record.

## 7. Lập Trình Python / Python Lab
```python
import random
def simulate_coin_toss(n):
    heads = 0
    tails = 0
    for _ in range(n):
        if random.choice(['Head', 'Tail']) == 'Head':
            heads += 1
        else:
            tails += 1
    return heads, tails

print("100 tosses:", simulate_coin_toss(100))
```

## 8. Lỗi Thường Gặp / Common Misconceptions
- 💡 **Đọc sai thang đo / Wrong scale reading**: Assuming 1 icon = 1 item in pictograms without reading the key.

## 9. Câu Hỏi Thảo Luận / Discussion Questions
1. Tung đồng xu có thể ra mặt gì? / Coin toss outcomes?
2. Mặt trời mọc ở hướng Tây là sự kiện gì? / Sun rising in West? (Impossible)
3. 1 biểu tượng = 5 bạn, 3 biểu tượng là bao nhiêu? / 1 icon=5, 3 icons=?
4. Trục ngang biểu đồ cột ghi gì? / Horizontal axis meaning?
5. Trục dọc biểu đồ cột ghi gì? / Vertical axis meaning?

## 10. Bài Tập / Exercises
{gen_exercises('stat', 50, 1)}

## 11. Đánh Giá / Assessment Rubric
| Tiêu chí / Criteria | Điểm / Score |
|---|---|
| Thu thập dữ liệu / Data | 30/100 |
| Giải toán / Math | 40/100 |
| Trình bày / Presentation| 20/100 |
| Code Python / Python | 10/100 |
"""

# Week 10
week10 = f"""# Tuần 10: Tổng Ôn Tập Toán 4 & Capstone STEM Project
# Week 10: Primary Math Grade 4 Synthesis & Capstone STEM Project

## 1. Mục Tiêu Bài Học / Learning Objectives
- **Vietnamese**: Ôn tập toàn diện chương trình Toán 4. Thuyết trình dự án Capstone.
- **English**: Comprehensive review of Grade 4 Math. Capstone project presentation.

## 2. Chủ Đề Sách Giáo Khoa / Textbook Themes
- SGK Kết nối tri thức Toán 4: Tổng hợp chủ đề 1 đến 9.

## 3. Công Cụ STEM & EdTech / STEM & EdTech Tools
| Công cụ / Tool | Ứng dụng / Application |
|---|---|
| Scratch 3.0 | Game Toán / Math Game |
| Python GUI | Ứng dụng giải toán / Math Solver |
| GeoGebra | Mô phỏng hình học / Geo Simulation |

## 4. Lý Thuyết & Ví Dụ / Theory & Examples
### Tổng hợp công thức / Master Formula Summary
- Diện tích chữ nhật: $S = a \\times b$
- Diện tích bình hành: $S = a \\times h$
- Diện tích thoi: $S = \\frac{{m \\times n}}{{2}}$
- Đổi đơn vị: $1\\text{{ tấn}} = 1000\\text{{ kg}}$, $1\\text{{ m}}^2 = 10000\\text{{ cm}}^2$

## 5. Sơ Đồ & Minh Họa / Diagrams
```text
Math 4 -> Arithmetic -> Geometry -> Measurement -> Statistics
```

## 6. Hoạt Động STEM / STEM Activities
- **Capstone project demonstration**: Học sinh trình bày dự án STEM cá nhân/nhóm.
- **Math Competition**: Rung chuông vàng Toán học.

## 7. Lập Trình Python / Python Lab
```python
def final_quiz():
    score = 0
    ans = input("1 tan = ? kg: ")
    if ans == "1000": score += 1
    return score
# print("Score:", final_quiz())
```

## 8. Lỗi Thường Gặp / Common Misconceptions
- 💡 **Quên công thức / Formula forgetfulness**: Trộn lẫn công thức các hình học với nhau.

## 9. Câu Hỏi Thảo Luận / Discussion Questions
1. Bài học nào em thích nhất? / Favorite lesson?
2. Em thấy phần nào khó nhất? / Hardest part?
3. Ứng dụng Toán vào đời sống? / Math in real life?
4. Đồ án STEM của em làm về gì? / Your STEM project?
5. Sẵn sàng cho Toán 5 chưa? / Ready for Math 5?

## 10. Bài Tập / Exercises
{gen_exercises('review', 50, 1)}

## 11. Đánh Giá / Assessment Rubric
| Tiêu chí / Criteria | Điểm / Score |
|---|---|
| Kiến thức / Knowledge | 30/100 |
| Dự án Capstone / Capstone | 40/100 |
| Thuyết trình / Speech | 20/100 |
| Code / Programming | 10/100 |
"""

with open('/Users/dangvietchung/Science/courses/math-4-kntt/lessons/week06.md', 'w', encoding='utf-8') as f:
    f.write(week06)
with open('/Users/dangvietchung/Science/courses/math-4-kntt/lessons/week07.md', 'w', encoding='utf-8') as f:
    f.write(week07)
with open('/Users/dangvietchung/Science/courses/math-4-kntt/lessons/week08.md', 'w', encoding='utf-8') as f:
    f.write(week08)
with open('/Users/dangvietchung/Science/courses/math-4-kntt/lessons/week09.md', 'w', encoding='utf-8') as f:
    f.write(week09)
with open('/Users/dangvietchung/Science/courses/math-4-kntt/lessons/week10.md', 'w', encoding='utf-8') as f:
    f.write(week10)

print("Created all 5 lesson files successfully!")

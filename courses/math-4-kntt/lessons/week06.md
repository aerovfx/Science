# Tuần 6: Đại Lượng & Đo Đại Lượng (Khối Lượng, Diện Tích, Thời Gian, Góc)
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
- $1\text{ m}^2 = 100\text{ dm}^2 = 10000\text{ cm}^2$

### Thời Gian / Time
- 1 phút (minute) = 60 giây (seconds)
- 1 thế kỷ (century) = 100 năm (years)

### Đo Góc / Angle Measurement
Dùng thước đo góc (Protractor) để đo theo đơn vị độ ($^\circ$).

## 5. Sơ Đồ & Bảng Chuyển Đổi / Conversion Charts
```text
[Tấn] --x10--> [Tạ] --x10--> [Yến] --x10--> [kg]
[kg] <--/10-- [Yến] <--/10-- [Tạ] <--/10-- [Tấn]
```

## 6. Hoạt Động STEM / STEM Activities
- **Balance scale mass measuring**: Use a balance scale to measure objects in the classroom.
- **Square meter grid paper**: Stick 100 $1\text{dm}^2$ papers to create $1\text{m}^2$.

## 7. Lập Trình Python / Python Lab
```python
def unit_converter(value, unit_from, unit_to):
    # Mass conversion logic
    mass_factors = {'tan': 1000, 'ta': 100, 'yen': 10, 'kg': 1, 'g': 0.001}
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
### Bài Tập Thực Hành / Practice Exercises

**Bài / Exercise 1:** Đổi đơn vị / Convert units
a) 2 tấn = ... tạ = ... yến = ... kg
b) 5000 kg = ... tấn

*Giải / Solution:*
a) 2 tấn = 20 tạ = 200 yến = 2000 kg
b) 5000 kg = 5 tấn

**Bài / Exercise 2:** Đổi đơn vị / Convert units
a) 3 tấn = ... tạ = ... yến = ... kg
b) 6000 kg = ... tấn

*Giải / Solution:*
a) 3 tấn = 30 tạ = 300 yến = 3000 kg
b) 6000 kg = 6 tấn

**Bài / Exercise 3:** Đổi đơn vị / Convert units
a) 4 tấn = ... tạ = ... yến = ... kg
b) 7000 kg = ... tấn

*Giải / Solution:*
a) 4 tấn = 40 tạ = 400 yến = 4000 kg
b) 7000 kg = 7 tấn

**Bài / Exercise 4:** Đổi đơn vị / Convert units
a) 5 tấn = ... tạ = ... yến = ... kg
b) 8000 kg = ... tấn

*Giải / Solution:*
a) 5 tấn = 50 tạ = 500 yến = 5000 kg
b) 8000 kg = 8 tấn

**Bài / Exercise 5:** Đổi đơn vị / Convert units
a) 6 tấn = ... tạ = ... yến = ... kg
b) 9000 kg = ... tấn

*Giải / Solution:*
a) 6 tấn = 60 tạ = 600 yến = 6000 kg
b) 9000 kg = 9 tấn

**Bài / Exercise 6:** Đổi đơn vị / Convert units
a) 7 tấn = ... tạ = ... yến = ... kg
b) 10000 kg = ... tấn

*Giải / Solution:*
a) 7 tấn = 70 tạ = 700 yến = 7000 kg
b) 10000 kg = 10 tấn

**Bài / Exercise 7:** Đổi đơn vị / Convert units
a) 8 tấn = ... tạ = ... yến = ... kg
b) 11000 kg = ... tấn

*Giải / Solution:*
a) 8 tấn = 80 tạ = 800 yến = 8000 kg
b) 11000 kg = 11 tấn

**Bài / Exercise 8:** Đổi đơn vị / Convert units
a) 9 tấn = ... tạ = ... yến = ... kg
b) 12000 kg = ... tấn

*Giải / Solution:*
a) 9 tấn = 90 tạ = 900 yến = 9000 kg
b) 12000 kg = 12 tấn

**Bài / Exercise 9:** Đổi đơn vị / Convert units
a) 10 tấn = ... tạ = ... yến = ... kg
b) 13000 kg = ... tấn

*Giải / Solution:*
a) 10 tấn = 100 tạ = 1000 yến = 10000 kg
b) 13000 kg = 13 tấn

**Bài / Exercise 10:** Đổi đơn vị / Convert units
a) 11 tấn = ... tạ = ... yến = ... kg
b) 14000 kg = ... tấn

*Giải / Solution:*
a) 11 tấn = 110 tạ = 1100 yến = 11000 kg
b) 14000 kg = 14 tấn

**Bài / Exercise 11:** Đổi đơn vị / Convert units
a) 12 tấn = ... tạ = ... yến = ... kg
b) 15000 kg = ... tấn

*Giải / Solution:*
a) 12 tấn = 120 tạ = 1200 yến = 12000 kg
b) 15000 kg = 15 tấn

**Bài / Exercise 12:** Đổi đơn vị / Convert units
a) 13 tấn = ... tạ = ... yến = ... kg
b) 16000 kg = ... tấn

*Giải / Solution:*
a) 13 tấn = 130 tạ = 1300 yến = 13000 kg
b) 16000 kg = 16 tấn

**Bài / Exercise 13:** Đổi đơn vị / Convert units
a) 14 tấn = ... tạ = ... yến = ... kg
b) 17000 kg = ... tấn

*Giải / Solution:*
a) 14 tấn = 140 tạ = 1400 yến = 14000 kg
b) 17000 kg = 17 tấn

**Bài / Exercise 14:** Đổi đơn vị / Convert units
a) 15 tấn = ... tạ = ... yến = ... kg
b) 18000 kg = ... tấn

*Giải / Solution:*
a) 15 tấn = 150 tạ = 1500 yến = 15000 kg
b) 18000 kg = 18 tấn

**Bài / Exercise 15:** Đổi đơn vị / Convert units
a) 16 tấn = ... tạ = ... yến = ... kg
b) 19000 kg = ... tấn

*Giải / Solution:*
a) 16 tấn = 160 tạ = 1600 yến = 16000 kg
b) 19000 kg = 19 tấn

**Bài / Exercise 16:** Đổi đơn vị / Convert units
a) 17 tấn = ... tạ = ... yến = ... kg
b) 20000 kg = ... tấn

*Giải / Solution:*
a) 17 tấn = 170 tạ = 1700 yến = 17000 kg
b) 20000 kg = 20 tấn

**Bài / Exercise 17:** Đổi đơn vị / Convert units
a) 18 tấn = ... tạ = ... yến = ... kg
b) 21000 kg = ... tấn

*Giải / Solution:*
a) 18 tấn = 180 tạ = 1800 yến = 18000 kg
b) 21000 kg = 21 tấn

**Bài / Exercise 18:** Đổi đơn vị / Convert units
a) 19 tấn = ... tạ = ... yến = ... kg
b) 22000 kg = ... tấn

*Giải / Solution:*
a) 19 tấn = 190 tạ = 1900 yến = 19000 kg
b) 22000 kg = 22 tấn

**Bài / Exercise 19:** Đổi đơn vị / Convert units
a) 20 tấn = ... tạ = ... yến = ... kg
b) 23000 kg = ... tấn

*Giải / Solution:*
a) 20 tấn = 200 tạ = 2000 yến = 20000 kg
b) 23000 kg = 23 tấn

**Bài / Exercise 20:** Đổi đơn vị / Convert units
a) 21 tấn = ... tạ = ... yến = ... kg
b) 24000 kg = ... tấn

*Giải / Solution:*
a) 21 tấn = 210 tạ = 2100 yến = 21000 kg
b) 24000 kg = 24 tấn

**Bài / Exercise 21:** Đổi đơn vị / Convert units
a) 22 tấn = ... tạ = ... yến = ... kg
b) 25000 kg = ... tấn

*Giải / Solution:*
a) 22 tấn = 220 tạ = 2200 yến = 22000 kg
b) 25000 kg = 25 tấn

**Bài / Exercise 22:** Đổi đơn vị / Convert units
a) 23 tấn = ... tạ = ... yến = ... kg
b) 26000 kg = ... tấn

*Giải / Solution:*
a) 23 tấn = 230 tạ = 2300 yến = 23000 kg
b) 26000 kg = 26 tấn

**Bài / Exercise 23:** Đổi đơn vị / Convert units
a) 24 tấn = ... tạ = ... yến = ... kg
b) 27000 kg = ... tấn

*Giải / Solution:*
a) 24 tấn = 240 tạ = 2400 yến = 24000 kg
b) 27000 kg = 27 tấn

**Bài / Exercise 24:** Đổi đơn vị / Convert units
a) 25 tấn = ... tạ = ... yến = ... kg
b) 28000 kg = ... tấn

*Giải / Solution:*
a) 25 tấn = 250 tạ = 2500 yến = 25000 kg
b) 28000 kg = 28 tấn

**Bài / Exercise 25:** Đổi đơn vị / Convert units
a) 26 tấn = ... tạ = ... yến = ... kg
b) 29000 kg = ... tấn

*Giải / Solution:*
a) 26 tấn = 260 tạ = 2600 yến = 26000 kg
b) 29000 kg = 29 tấn

**Bài / Exercise 26:** Đổi đơn vị / Convert units
a) 27 tấn = ... tạ = ... yến = ... kg
b) 30000 kg = ... tấn

*Giải / Solution:*
a) 27 tấn = 270 tạ = 2700 yến = 27000 kg
b) 30000 kg = 30 tấn

**Bài / Exercise 27:** Đổi đơn vị / Convert units
a) 28 tấn = ... tạ = ... yến = ... kg
b) 31000 kg = ... tấn

*Giải / Solution:*
a) 28 tấn = 280 tạ = 2800 yến = 28000 kg
b) 31000 kg = 31 tấn

**Bài / Exercise 28:** Đổi đơn vị / Convert units
a) 29 tấn = ... tạ = ... yến = ... kg
b) 32000 kg = ... tấn

*Giải / Solution:*
a) 29 tấn = 290 tạ = 2900 yến = 29000 kg
b) 32000 kg = 32 tấn

**Bài / Exercise 29:** Đổi đơn vị / Convert units
a) 30 tấn = ... tạ = ... yến = ... kg
b) 33000 kg = ... tấn

*Giải / Solution:*
a) 30 tấn = 300 tạ = 3000 yến = 30000 kg
b) 33000 kg = 33 tấn

**Bài / Exercise 30:** Đổi đơn vị / Convert units
a) 31 tấn = ... tạ = ... yến = ... kg
b) 34000 kg = ... tấn

*Giải / Solution:*
a) 31 tấn = 310 tạ = 3100 yến = 31000 kg
b) 34000 kg = 34 tấn

**Bài / Exercise 31:** Đổi đơn vị / Convert units
a) 32 tấn = ... tạ = ... yến = ... kg
b) 35000 kg = ... tấn

*Giải / Solution:*
a) 32 tấn = 320 tạ = 3200 yến = 32000 kg
b) 35000 kg = 35 tấn

**Bài / Exercise 32:** Đổi đơn vị / Convert units
a) 33 tấn = ... tạ = ... yến = ... kg
b) 36000 kg = ... tấn

*Giải / Solution:*
a) 33 tấn = 330 tạ = 3300 yến = 33000 kg
b) 36000 kg = 36 tấn

**Bài / Exercise 33:** Đổi đơn vị / Convert units
a) 34 tấn = ... tạ = ... yến = ... kg
b) 37000 kg = ... tấn

*Giải / Solution:*
a) 34 tấn = 340 tạ = 3400 yến = 34000 kg
b) 37000 kg = 37 tấn

**Bài / Exercise 34:** Đổi đơn vị / Convert units
a) 35 tấn = ... tạ = ... yến = ... kg
b) 38000 kg = ... tấn

*Giải / Solution:*
a) 35 tấn = 350 tạ = 3500 yến = 35000 kg
b) 38000 kg = 38 tấn

**Bài / Exercise 35:** Đổi đơn vị / Convert units
a) 36 tấn = ... tạ = ... yến = ... kg
b) 39000 kg = ... tấn

*Giải / Solution:*
a) 36 tấn = 360 tạ = 3600 yến = 36000 kg
b) 39000 kg = 39 tấn

**Bài / Exercise 36:** Đổi đơn vị / Convert units
a) 37 tấn = ... tạ = ... yến = ... kg
b) 40000 kg = ... tấn

*Giải / Solution:*
a) 37 tấn = 370 tạ = 3700 yến = 37000 kg
b) 40000 kg = 40 tấn

**Bài / Exercise 37:** Đổi đơn vị / Convert units
a) 38 tấn = ... tạ = ... yến = ... kg
b) 41000 kg = ... tấn

*Giải / Solution:*
a) 38 tấn = 380 tạ = 3800 yến = 38000 kg
b) 41000 kg = 41 tấn

**Bài / Exercise 38:** Đổi đơn vị / Convert units
a) 39 tấn = ... tạ = ... yến = ... kg
b) 42000 kg = ... tấn

*Giải / Solution:*
a) 39 tấn = 390 tạ = 3900 yến = 39000 kg
b) 42000 kg = 42 tấn

**Bài / Exercise 39:** Đổi đơn vị / Convert units
a) 40 tấn = ... tạ = ... yến = ... kg
b) 43000 kg = ... tấn

*Giải / Solution:*
a) 40 tấn = 400 tạ = 4000 yến = 40000 kg
b) 43000 kg = 43 tấn

**Bài / Exercise 40:** Đổi đơn vị / Convert units
a) 41 tấn = ... tạ = ... yến = ... kg
b) 44000 kg = ... tấn

*Giải / Solution:*
a) 41 tấn = 410 tạ = 4100 yến = 41000 kg
b) 44000 kg = 44 tấn

**Bài / Exercise 41:** Đổi đơn vị / Convert units
a) 42 tấn = ... tạ = ... yến = ... kg
b) 45000 kg = ... tấn

*Giải / Solution:*
a) 42 tấn = 420 tạ = 4200 yến = 42000 kg
b) 45000 kg = 45 tấn

**Bài / Exercise 42:** Đổi đơn vị / Convert units
a) 43 tấn = ... tạ = ... yến = ... kg
b) 46000 kg = ... tấn

*Giải / Solution:*
a) 43 tấn = 430 tạ = 4300 yến = 43000 kg
b) 46000 kg = 46 tấn

**Bài / Exercise 43:** Đổi đơn vị / Convert units
a) 44 tấn = ... tạ = ... yến = ... kg
b) 47000 kg = ... tấn

*Giải / Solution:*
a) 44 tấn = 440 tạ = 4400 yến = 44000 kg
b) 47000 kg = 47 tấn

**Bài / Exercise 44:** Đổi đơn vị / Convert units
a) 45 tấn = ... tạ = ... yến = ... kg
b) 48000 kg = ... tấn

*Giải / Solution:*
a) 45 tấn = 450 tạ = 4500 yến = 45000 kg
b) 48000 kg = 48 tấn

**Bài / Exercise 45:** Đổi đơn vị / Convert units
a) 46 tấn = ... tạ = ... yến = ... kg
b) 49000 kg = ... tấn

*Giải / Solution:*
a) 46 tấn = 460 tạ = 4600 yến = 46000 kg
b) 49000 kg = 49 tấn

**Bài / Exercise 46:** Đổi đơn vị / Convert units
a) 47 tấn = ... tạ = ... yến = ... kg
b) 50000 kg = ... tấn

*Giải / Solution:*
a) 47 tấn = 470 tạ = 4700 yến = 47000 kg
b) 50000 kg = 50 tấn

**Bài / Exercise 47:** Đổi đơn vị / Convert units
a) 48 tấn = ... tạ = ... yến = ... kg
b) 51000 kg = ... tấn

*Giải / Solution:*
a) 48 tấn = 480 tạ = 4800 yến = 48000 kg
b) 51000 kg = 51 tấn

**Bài / Exercise 48:** Đổi đơn vị / Convert units
a) 49 tấn = ... tạ = ... yến = ... kg
b) 52000 kg = ... tấn

*Giải / Solution:*
a) 49 tấn = 490 tạ = 4900 yến = 49000 kg
b) 52000 kg = 52 tấn

**Bài / Exercise 49:** Đổi đơn vị / Convert units
a) 50 tấn = ... tạ = ... yến = ... kg
b) 53000 kg = ... tấn

*Giải / Solution:*
a) 50 tấn = 500 tạ = 5000 yến = 50000 kg
b) 53000 kg = 53 tấn

**Bài / Exercise 50:** Đổi đơn vị / Convert units
a) 51 tấn = ... tạ = ... yến = ... kg
b) 54000 kg = ... tấn

*Giải / Solution:*
a) 51 tấn = 510 tạ = 5100 yến = 51000 kg
b) 54000 kg = 54 tấn



## 11. Đánh Giá / Assessment Rubric
| Tiêu chí / Criteria | Điểm / Score |
|---|---|
| Hiểu lý thuyết / Theory understanding | 30/100 |
| Giải toán chính xác / Accurate math | 40/100 |
| Tham gia STEM / STEM participation | 20/100 |
| Kỹ năng Python / Python skills | 10/100 |

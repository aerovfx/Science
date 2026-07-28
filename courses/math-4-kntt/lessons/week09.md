# Tuần 9: Thống Kê & Xác Suất Đơn Giản
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
### Bài Tập Thực Hành / Practice Exercises

**Bài / Exercise 1:** Thống kê / Statistics
Trong lớp có 10 học sinh thích táo, 12 học sinh thích cam. Tính tổng.
In the class, 10 students like apples, 12 students like oranges. Total?

*Giải / Solution:*
Tổng / Total: 10 + 12 = 22 học sinh / students.

**Bài / Exercise 2:** Thống kê / Statistics
Trong lớp có 11 học sinh thích táo, 13 học sinh thích cam. Tính tổng.
In the class, 11 students like apples, 13 students like oranges. Total?

*Giải / Solution:*
Tổng / Total: 11 + 13 = 24 học sinh / students.

**Bài / Exercise 3:** Thống kê / Statistics
Trong lớp có 12 học sinh thích táo, 14 học sinh thích cam. Tính tổng.
In the class, 12 students like apples, 14 students like oranges. Total?

*Giải / Solution:*
Tổng / Total: 12 + 14 = 26 học sinh / students.

**Bài / Exercise 4:** Thống kê / Statistics
Trong lớp có 13 học sinh thích táo, 15 học sinh thích cam. Tính tổng.
In the class, 13 students like apples, 15 students like oranges. Total?

*Giải / Solution:*
Tổng / Total: 13 + 15 = 28 học sinh / students.

**Bài / Exercise 5:** Thống kê / Statistics
Trong lớp có 14 học sinh thích táo, 16 học sinh thích cam. Tính tổng.
In the class, 14 students like apples, 16 students like oranges. Total?

*Giải / Solution:*
Tổng / Total: 14 + 16 = 30 học sinh / students.

**Bài / Exercise 6:** Thống kê / Statistics
Trong lớp có 15 học sinh thích táo, 17 học sinh thích cam. Tính tổng.
In the class, 15 students like apples, 17 students like oranges. Total?

*Giải / Solution:*
Tổng / Total: 15 + 17 = 32 học sinh / students.

**Bài / Exercise 7:** Thống kê / Statistics
Trong lớp có 16 học sinh thích táo, 18 học sinh thích cam. Tính tổng.
In the class, 16 students like apples, 18 students like oranges. Total?

*Giải / Solution:*
Tổng / Total: 16 + 18 = 34 học sinh / students.

**Bài / Exercise 8:** Thống kê / Statistics
Trong lớp có 17 học sinh thích táo, 19 học sinh thích cam. Tính tổng.
In the class, 17 students like apples, 19 students like oranges. Total?

*Giải / Solution:*
Tổng / Total: 17 + 19 = 36 học sinh / students.

**Bài / Exercise 9:** Thống kê / Statistics
Trong lớp có 18 học sinh thích táo, 20 học sinh thích cam. Tính tổng.
In the class, 18 students like apples, 20 students like oranges. Total?

*Giải / Solution:*
Tổng / Total: 18 + 20 = 38 học sinh / students.

**Bài / Exercise 10:** Thống kê / Statistics
Trong lớp có 19 học sinh thích táo, 21 học sinh thích cam. Tính tổng.
In the class, 19 students like apples, 21 students like oranges. Total?

*Giải / Solution:*
Tổng / Total: 19 + 21 = 40 học sinh / students.

**Bài / Exercise 11:** Thống kê / Statistics
Trong lớp có 20 học sinh thích táo, 22 học sinh thích cam. Tính tổng.
In the class, 20 students like apples, 22 students like oranges. Total?

*Giải / Solution:*
Tổng / Total: 20 + 22 = 42 học sinh / students.

**Bài / Exercise 12:** Thống kê / Statistics
Trong lớp có 21 học sinh thích táo, 23 học sinh thích cam. Tính tổng.
In the class, 21 students like apples, 23 students like oranges. Total?

*Giải / Solution:*
Tổng / Total: 21 + 23 = 44 học sinh / students.

**Bài / Exercise 13:** Thống kê / Statistics
Trong lớp có 22 học sinh thích táo, 24 học sinh thích cam. Tính tổng.
In the class, 22 students like apples, 24 students like oranges. Total?

*Giải / Solution:*
Tổng / Total: 22 + 24 = 46 học sinh / students.

**Bài / Exercise 14:** Thống kê / Statistics
Trong lớp có 23 học sinh thích táo, 25 học sinh thích cam. Tính tổng.
In the class, 23 students like apples, 25 students like oranges. Total?

*Giải / Solution:*
Tổng / Total: 23 + 25 = 48 học sinh / students.

**Bài / Exercise 15:** Thống kê / Statistics
Trong lớp có 24 học sinh thích táo, 26 học sinh thích cam. Tính tổng.
In the class, 24 students like apples, 26 students like oranges. Total?

*Giải / Solution:*
Tổng / Total: 24 + 26 = 50 học sinh / students.

**Bài / Exercise 16:** Thống kê / Statistics
Trong lớp có 25 học sinh thích táo, 27 học sinh thích cam. Tính tổng.
In the class, 25 students like apples, 27 students like oranges. Total?

*Giải / Solution:*
Tổng / Total: 25 + 27 = 52 học sinh / students.

**Bài / Exercise 17:** Thống kê / Statistics
Trong lớp có 26 học sinh thích táo, 28 học sinh thích cam. Tính tổng.
In the class, 26 students like apples, 28 students like oranges. Total?

*Giải / Solution:*
Tổng / Total: 26 + 28 = 54 học sinh / students.

**Bài / Exercise 18:** Thống kê / Statistics
Trong lớp có 27 học sinh thích táo, 29 học sinh thích cam. Tính tổng.
In the class, 27 students like apples, 29 students like oranges. Total?

*Giải / Solution:*
Tổng / Total: 27 + 29 = 56 học sinh / students.

**Bài / Exercise 19:** Thống kê / Statistics
Trong lớp có 28 học sinh thích táo, 30 học sinh thích cam. Tính tổng.
In the class, 28 students like apples, 30 students like oranges. Total?

*Giải / Solution:*
Tổng / Total: 28 + 30 = 58 học sinh / students.

**Bài / Exercise 20:** Thống kê / Statistics
Trong lớp có 29 học sinh thích táo, 31 học sinh thích cam. Tính tổng.
In the class, 29 students like apples, 31 students like oranges. Total?

*Giải / Solution:*
Tổng / Total: 29 + 31 = 60 học sinh / students.

**Bài / Exercise 21:** Thống kê / Statistics
Trong lớp có 30 học sinh thích táo, 32 học sinh thích cam. Tính tổng.
In the class, 30 students like apples, 32 students like oranges. Total?

*Giải / Solution:*
Tổng / Total: 30 + 32 = 62 học sinh / students.

**Bài / Exercise 22:** Thống kê / Statistics
Trong lớp có 31 học sinh thích táo, 33 học sinh thích cam. Tính tổng.
In the class, 31 students like apples, 33 students like oranges. Total?

*Giải / Solution:*
Tổng / Total: 31 + 33 = 64 học sinh / students.

**Bài / Exercise 23:** Thống kê / Statistics
Trong lớp có 32 học sinh thích táo, 34 học sinh thích cam. Tính tổng.
In the class, 32 students like apples, 34 students like oranges. Total?

*Giải / Solution:*
Tổng / Total: 32 + 34 = 66 học sinh / students.

**Bài / Exercise 24:** Thống kê / Statistics
Trong lớp có 33 học sinh thích táo, 35 học sinh thích cam. Tính tổng.
In the class, 33 students like apples, 35 students like oranges. Total?

*Giải / Solution:*
Tổng / Total: 33 + 35 = 68 học sinh / students.

**Bài / Exercise 25:** Thống kê / Statistics
Trong lớp có 34 học sinh thích táo, 36 học sinh thích cam. Tính tổng.
In the class, 34 students like apples, 36 students like oranges. Total?

*Giải / Solution:*
Tổng / Total: 34 + 36 = 70 học sinh / students.

**Bài / Exercise 26:** Thống kê / Statistics
Trong lớp có 35 học sinh thích táo, 37 học sinh thích cam. Tính tổng.
In the class, 35 students like apples, 37 students like oranges. Total?

*Giải / Solution:*
Tổng / Total: 35 + 37 = 72 học sinh / students.

**Bài / Exercise 27:** Thống kê / Statistics
Trong lớp có 36 học sinh thích táo, 38 học sinh thích cam. Tính tổng.
In the class, 36 students like apples, 38 students like oranges. Total?

*Giải / Solution:*
Tổng / Total: 36 + 38 = 74 học sinh / students.

**Bài / Exercise 28:** Thống kê / Statistics
Trong lớp có 37 học sinh thích táo, 39 học sinh thích cam. Tính tổng.
In the class, 37 students like apples, 39 students like oranges. Total?

*Giải / Solution:*
Tổng / Total: 37 + 39 = 76 học sinh / students.

**Bài / Exercise 29:** Thống kê / Statistics
Trong lớp có 38 học sinh thích táo, 40 học sinh thích cam. Tính tổng.
In the class, 38 students like apples, 40 students like oranges. Total?

*Giải / Solution:*
Tổng / Total: 38 + 40 = 78 học sinh / students.

**Bài / Exercise 30:** Thống kê / Statistics
Trong lớp có 39 học sinh thích táo, 41 học sinh thích cam. Tính tổng.
In the class, 39 students like apples, 41 students like oranges. Total?

*Giải / Solution:*
Tổng / Total: 39 + 41 = 80 học sinh / students.

**Bài / Exercise 31:** Thống kê / Statistics
Trong lớp có 40 học sinh thích táo, 42 học sinh thích cam. Tính tổng.
In the class, 40 students like apples, 42 students like oranges. Total?

*Giải / Solution:*
Tổng / Total: 40 + 42 = 82 học sinh / students.

**Bài / Exercise 32:** Thống kê / Statistics
Trong lớp có 41 học sinh thích táo, 43 học sinh thích cam. Tính tổng.
In the class, 41 students like apples, 43 students like oranges. Total?

*Giải / Solution:*
Tổng / Total: 41 + 43 = 84 học sinh / students.

**Bài / Exercise 33:** Thống kê / Statistics
Trong lớp có 42 học sinh thích táo, 44 học sinh thích cam. Tính tổng.
In the class, 42 students like apples, 44 students like oranges. Total?

*Giải / Solution:*
Tổng / Total: 42 + 44 = 86 học sinh / students.

**Bài / Exercise 34:** Thống kê / Statistics
Trong lớp có 43 học sinh thích táo, 45 học sinh thích cam. Tính tổng.
In the class, 43 students like apples, 45 students like oranges. Total?

*Giải / Solution:*
Tổng / Total: 43 + 45 = 88 học sinh / students.

**Bài / Exercise 35:** Thống kê / Statistics
Trong lớp có 44 học sinh thích táo, 46 học sinh thích cam. Tính tổng.
In the class, 44 students like apples, 46 students like oranges. Total?

*Giải / Solution:*
Tổng / Total: 44 + 46 = 90 học sinh / students.

**Bài / Exercise 36:** Thống kê / Statistics
Trong lớp có 45 học sinh thích táo, 47 học sinh thích cam. Tính tổng.
In the class, 45 students like apples, 47 students like oranges. Total?

*Giải / Solution:*
Tổng / Total: 45 + 47 = 92 học sinh / students.

**Bài / Exercise 37:** Thống kê / Statistics
Trong lớp có 46 học sinh thích táo, 48 học sinh thích cam. Tính tổng.
In the class, 46 students like apples, 48 students like oranges. Total?

*Giải / Solution:*
Tổng / Total: 46 + 48 = 94 học sinh / students.

**Bài / Exercise 38:** Thống kê / Statistics
Trong lớp có 47 học sinh thích táo, 49 học sinh thích cam. Tính tổng.
In the class, 47 students like apples, 49 students like oranges. Total?

*Giải / Solution:*
Tổng / Total: 47 + 49 = 96 học sinh / students.

**Bài / Exercise 39:** Thống kê / Statistics
Trong lớp có 48 học sinh thích táo, 50 học sinh thích cam. Tính tổng.
In the class, 48 students like apples, 50 students like oranges. Total?

*Giải / Solution:*
Tổng / Total: 48 + 50 = 98 học sinh / students.

**Bài / Exercise 40:** Thống kê / Statistics
Trong lớp có 49 học sinh thích táo, 51 học sinh thích cam. Tính tổng.
In the class, 49 students like apples, 51 students like oranges. Total?

*Giải / Solution:*
Tổng / Total: 49 + 51 = 100 học sinh / students.

**Bài / Exercise 41:** Thống kê / Statistics
Trong lớp có 50 học sinh thích táo, 52 học sinh thích cam. Tính tổng.
In the class, 50 students like apples, 52 students like oranges. Total?

*Giải / Solution:*
Tổng / Total: 50 + 52 = 102 học sinh / students.

**Bài / Exercise 42:** Thống kê / Statistics
Trong lớp có 51 học sinh thích táo, 53 học sinh thích cam. Tính tổng.
In the class, 51 students like apples, 53 students like oranges. Total?

*Giải / Solution:*
Tổng / Total: 51 + 53 = 104 học sinh / students.

**Bài / Exercise 43:** Thống kê / Statistics
Trong lớp có 52 học sinh thích táo, 54 học sinh thích cam. Tính tổng.
In the class, 52 students like apples, 54 students like oranges. Total?

*Giải / Solution:*
Tổng / Total: 52 + 54 = 106 học sinh / students.

**Bài / Exercise 44:** Thống kê / Statistics
Trong lớp có 53 học sinh thích táo, 55 học sinh thích cam. Tính tổng.
In the class, 53 students like apples, 55 students like oranges. Total?

*Giải / Solution:*
Tổng / Total: 53 + 55 = 108 học sinh / students.

**Bài / Exercise 45:** Thống kê / Statistics
Trong lớp có 54 học sinh thích táo, 56 học sinh thích cam. Tính tổng.
In the class, 54 students like apples, 56 students like oranges. Total?

*Giải / Solution:*
Tổng / Total: 54 + 56 = 110 học sinh / students.

**Bài / Exercise 46:** Thống kê / Statistics
Trong lớp có 55 học sinh thích táo, 57 học sinh thích cam. Tính tổng.
In the class, 55 students like apples, 57 students like oranges. Total?

*Giải / Solution:*
Tổng / Total: 55 + 57 = 112 học sinh / students.

**Bài / Exercise 47:** Thống kê / Statistics
Trong lớp có 56 học sinh thích táo, 58 học sinh thích cam. Tính tổng.
In the class, 56 students like apples, 58 students like oranges. Total?

*Giải / Solution:*
Tổng / Total: 56 + 58 = 114 học sinh / students.

**Bài / Exercise 48:** Thống kê / Statistics
Trong lớp có 57 học sinh thích táo, 59 học sinh thích cam. Tính tổng.
In the class, 57 students like apples, 59 students like oranges. Total?

*Giải / Solution:*
Tổng / Total: 57 + 59 = 116 học sinh / students.

**Bài / Exercise 49:** Thống kê / Statistics
Trong lớp có 58 học sinh thích táo, 60 học sinh thích cam. Tính tổng.
In the class, 58 students like apples, 60 students like oranges. Total?

*Giải / Solution:*
Tổng / Total: 58 + 60 = 118 học sinh / students.

**Bài / Exercise 50:** Thống kê / Statistics
Trong lớp có 59 học sinh thích táo, 61 học sinh thích cam. Tính tổng.
In the class, 59 students like apples, 61 students like oranges. Total?

*Giải / Solution:*
Tổng / Total: 59 + 61 = 120 học sinh / students.



## 11. Đánh Giá / Assessment Rubric
| Tiêu chí / Criteria | Điểm / Score |
|---|---|
| Thu thập dữ liệu / Data | 30/100 |
| Giải toán / Math | 40/100 |
| Trình bày / Presentation| 20/100 |
| Code Python / Python | 10/100 |

# Tuần 5: Thu Thập, Biểu Diễn Dữ Liệu & Thống Kê Dân Số / Week 5: Data Collection, Presentation & Population Statistics

## 1. Mục Tiêu Bài Học (Learning Objectives)
* **Vietnamese:** 
  - Phân loại được dữ liệu định lượng và định tính.
  - Đọc, hiểu và vẽ được biểu đồ hình quạt tròn và biểu đồ đoạn thẳng.
  - Phân tích và rút ra xu hướng từ biểu đồ đoạn thẳng.
  - Áp dụng vào thực tế: Phân tích dân số và cơ cấu dân số Việt Nam.
* **English:**
  - Classify quantitative and qualitative data.
  - Read, understand, and draw pie charts and line graphs.
  - Analyze and extract trends from line graphs.
  - Real-world application: Analyze Vietnam's population and demographic structure.

## 2. Bài Học SGK Liên Quan (Related Textbook Lessons)
- SGK Kết nối tri thức Toán 7 Tập 1:
  - Bài 17: Thu thập và phân loại dữ liệu.
  - Bài 18: Biểu đồ hình quạt tròn.
  - Bài 19: Biểu đồ đoạn thẳng.
  - Hoạt động trải nghiệm: Dân số Việt Nam.

## 3. Phần Mềm & Công Cụ (Software & Tooling)
| Software / Tool | Purpose |
|---|---|
| Python 3.10+ | Data processing and automated graphing. |
| Pandas | Handling dataset frames (e.g., Population data). |
| Matplotlib | Generating professional pie charts and line graphs. |

## 4. Lý Thuyết Chuyên Sâu (Deep Mathematical Theory)

### Phân Loại Dữ Liệu
* **Dữ liệu định tính (Qualitative Data):** Thể hiện tính chất, tên gọi (ví dụ: giới tính, màu sắc, loại xe).
* **Dữ liệu định lượng (Quantitative Data):** Thể hiện bằng con số, có thể tính toán được (ví dụ: chiều cao, cân nặng, độ tuổi).

### Biểu Đồ Hình Quạt Tròn (Pie Chart)
Dùng để so sánh các phần với tổng thể.
Để vẽ biểu đồ hình quạt, ta tính góc ở tâm của mỗi hình quạt:
$$ \alpha = \frac{p\%}{100\%} \times 360^\circ $$
Trong đó $p\%$ là tỉ lệ phần trăm của thành phần đó.

### Biểu Đồ Đoạn Thẳng (Line Graph)
Dùng để biểu diễn sự thay đổi của một đại lượng theo thời gian.
Trục hoành thường biểu diễn thời gian, trục tung biểu diễn giá trị đại lượng. Điểm dốc lên biểu thị sự tăng trưởng, dốc xuống biểu thị sự sụt giảm.










<!-- Extra spacing for layout considerations and printing margins -->










## 5. Sơ Đồ & Hình Ảnh (ASCII/Markdown Diagrams)
```text
Biểu Đồ Đoạn Thẳng Trục Tọa Độ (Line Graph Axis)
 Y (Dân số - Triệu người)
 |
 |       * (2020, 97tr)
 |      /
 |     /
 |    * (2010, 87tr)
 |   /
 |  * (2000, 77tr)
 |________________________ X (Năm)
```

## 6. Hoạt Động Thực Hành (Hands-on Activities)
**Hands-on Lab:** Collecting class survey data & creating statistical graphics.
- Lập bảng khảo sát môn học yêu thích của lớp (Toán, Văn, Anh, ...).
- Tính phần trăm từng môn học.
- Vẽ biểu đồ hình quạt tròn thể hiện tỉ lệ này trên giấy A4 bằng compa và thước đo độ.

## 7. Lập Trình Mô Phỏng (Python Lab)
**Python Lab:** Pandas & Matplotlib script generating professional pie charts & line graphs for Vietnam population data.

```python
import matplotlib.pyplot as plt

def plot_population():
    years = [2000, 2010, 2020]
    population = [77.6, 86.9, 97.3]
    
    plt.figure(figsize=(8, 4))
    plt.plot(years, population, marker='o', linestyle='-', color='b')
    plt.title('Vietnam Population Growth')
    plt.xlabel('Year')
    plt.ylabel('Population (Millions)')
    plt.grid(True)
    plt.savefig('vn_pop.png')
    print("Line graph saved as vn_pop.png")

def plot_pie_chart():
    labels = ['Math', 'Science', 'English', 'Art']
    sizes = [40, 20, 30, 10]
    
    plt.figure(figsize=(5, 5))
    plt.pie(sizes, labels=labels, autopct='%1.1f%%', startangle=90)
    plt.title('Favorite Subjects')
    plt.savefig('subjects_pie.png')
    print("Pie chart saved as subjects_pie.png")

if __name__ == '__main__':
    plot_population()
    plot_pie_chart()
```

## 8. Những Lỗi Thường Gặp (Common Mistakes & Misconceptions)
⚠️ **Lỗi sai:** Dùng biểu đồ hình quạt tròn khi tổng các phần trăm không bằng 100%.
⚠️ **Lỗi sai:** Chọn sai loại biểu đồ (dùng biểu đồ đoạn thẳng cho dữ liệu không liên tục theo thời gian).

## 9. Câu Hỏi Thảo Luận (Discussion Questions)
1. Dữ liệu "số thứ tự báo danh" là định tính hay định lượng?
2. Khi nào thì biểu đồ cột phù hợp hơn biểu đồ hình quạt tròn?
3. Nếu một thành phần chiếm 25%, góc ở tâm của nó trên biểu đồ hình quạt là bao nhiêu độ?
4. Xu hướng dân số Việt Nam trong 20 năm qua là tăng hay giảm?
5. Làm sao để nhận biết một biểu đồ đoạn thẳng có xu hướng tăng nhanh hay chậm? (Hint: Độ dốc của đoạn thẳng).










<!-- Extra spacing for layout considerations and printing margins -->










## 10. Bài Tập (Homework & Practice Problems)
**Bài 1:** Khảo sát 40 học sinh lớp 7A, có 20 bạn thích Bóng đá, 10 bạn thích Cầu lông, 10 bạn thích Bơi lội. Tính tỉ lệ phần trăm và góc ở tâm tương ứng để vẽ biểu đồ quạt tròn.
**Giải chi tiết:**
- Bóng đá: $\frac{20}{40} \times 100\% = 50\%$. Góc: $50\% \times 360^\circ = 180^\circ$.
- Cầu lông: $\frac{10}{40} \times 100\% = 25\%$. Góc: $25\% \times 360^\circ = 90^\circ$.
- Bơi lội: $\frac{10}{40} \times 100\% = 25\%$. Góc: $25\% \times 360^\circ = 90^\circ$.

**Bài 2:** Phân tích biểu đồ đoạn thẳng dân số trên, dân số tăng bao nhiêu triệu người từ 2000 đến 2020?
**Giải chi tiết:**
- Năm 2000: 77.6 triệu
- Năm 2020: 97.3 triệu
- Tăng: $97.3 - 77.6 = 19.7$ triệu người.

## 12. Bảng Tiêu Chí Đánh Giá (Assessment Rubric) - Thang Điểm 100 (100-Point Scale)

| Tiêu chí / Criteria | Điểm / Points | Mô tả chi tiết / Detailed Description | Mức xuất sắc (90-100%) | Mức Khá (70-89%) | Mức Đạt (50-69%) | Cần cố gắng (<50%) |
|---------------------|---------------|-----------------------------------------|------------------------|------------------|------------------|--------------------|
| **Lý thuyết (Theory)** | 20 | Hiểu rõ các định nghĩa, khái niệm toán học cốt lõi trong bài học. / Demonstrates clear understanding of definitions and core mathematical concepts. | Hoàn hảo | Rất tốt | Đạt yêu cầu | Còn nhiều thiếu sót |
| **Thực hành (Hands-on)** | 20 | Thực hiện đầy đủ các bước thực hành Lab, báo cáo kết quả rõ ràng. / Completes all Hands-on Lab steps, reports results clearly. | Hoàn thành xuất sắc | Hoàn thành tốt | Hoàn thành cơ bản | Chưa hoàn thành |
| **Lập trình (Python)** | 20 | Code chạy không lỗi, kết quả chính xác, giải thích được logic. / Code runs without errors, produces correct results, logic is well-explained. | Tối ưu, sáng tạo | Đúng yêu cầu | Chạy được | Lỗi nhiều |
| **Bài tập (Homework)** | 30 | Hoàn thành tất cả bài tập, trình bày lời giải (chứng minh) chi tiết, chính xác. / Completes all exercises with detailed, accurate step-by-step proofs/solutions. | Không sai sót | Sai 1-2 lỗi nhỏ | Sai một số câu | Bỏ trống nhiều |
| **Thảo luận (Discussion)**| 10 | Tham gia trả lời câu hỏi mở, đưa ra lập luận chặt chẽ. / Participates in answering open questions with solid arguments. | Lập luận sắc bén | Trả lời đầy đủ | Trả lời sơ sài | Không tham gia |
























































































































































































































































































































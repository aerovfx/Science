# Tuần 1: Nhập Môn Vật Lí và Sai Số Đo Lường | Week 1: Introduction to Physics and Measurement Errors

## Giới Thiệu Chung | General Overview
Chào mừng các bạn đến với Tuần 1 của khóa học "Vật Lí 10 - Kết Nối Tri Thức Với Cuộc Sống". Trong tuần học đầu tiên này, chúng ta sẽ bắt đầu hành trình khám phá thế giới vật lí, làm quen với các phương pháp nghiên cứu khoa học, nắm vững các quy tắc an toàn trong phòng thí nghiệm, và đặc biệt là học cách xử lý số liệu thực nghiệm thông qua việc tính toán sai số đo lường.
Welcome to Week 1 of the "Physics 10 - Connecting Knowledge to Life" course. In this first week, we will embark on a journey to explore the physical world, familiarize ourselves with scientific research methods, master safety rules in the laboratory, and most importantly, learn how to handle experimental data by calculating measurement errors.

---

## Mục Tiêu Học Tập | Learning Objectives

### 1. Kiến thức (Knowledge)
- **(VI)** Nêu được đối tượng nghiên cứu của Vật lí học và phương pháp nghiên cứu vật lí (phương pháp thực nghiệm và phương pháp lí thuyết).
- **(EN)** State the research object of Physics and physical research methods (experimental and theoretical methods).
- **(VI)** Hiểu và tuân thủ các quy tắc an toàn cơ bản trong phòng thực hành.
- **(EN)** Understand and adhere to basic safety rules in the laboratory.
- **(VI)** Phân biệt được sai số ngẫu nhiên và sai số hệ thống, cách xác định sai số tuyệt đối, sai số tương đối và cách viết kết quả đo.
- **(EN)** Distinguish between random and systematic errors, determine absolute and relative errors, and report measurement results correctly.

### 2. Kĩ năng (Skills)
- **(VI)** Đọc và sử dụng thành thạo các dụng cụ đo lường cơ bản như thước kẹp (Vernier caliper) và panme (Micrometer).
- **(EN)** Proficiently read and use basic measuring instruments such as Vernier calipers and micrometers.
- **(VI)** Áp dụng phương pháp thống kê để xử lý chuỗi số liệu thực nghiệm.
- **(EN)** Apply statistical methods to process a series of experimental data.
- **(VI)** Viết code Python cơ bản để tự động hóa việc tính toán sai số.
- **(EN)** Write basic Python code to automate error calculations.

### 3. Thái độ (Attitude)
- **(VI)** Có ý thức kỷ luật, tuân thủ nghiêm ngặt nội quy phòng thí nghiệm để đảm bảo an toàn cho bản thân và người khác.
- **(EN)** Demonstrate discipline and strictly follow lab rules to ensure safety for oneself and others.
- **(VI)** Trung thực trong việc ghi chép và báo cáo số liệu thực nghiệm, không tự ý sửa đổi số liệu.
- **(EN)** Be honest in recording and reporting experimental data; do not arbitrarily modify data.

---

## Bài Học Liên Quan Từ Sách Giáo Khoa | Related Textbook Lessons
Các nội dung trong tuần này tương ứng với các bài học sau trong sách giáo khoa "Vật lí 10 - Kết nối tri thức với cuộc sống":
The contents of this week correspond to the following lessons in the textbook:
- **Bài 1:** Làm quen với Vật lí (Introduction to Physics)
- **Bài 2:** Các quy tắc an toàn trong phòng thực hành Vật lí (Safety rules in the Physics laboratory)
- **Bài 3:** Thực hành: Tính sai số trong phép đo. Ghi kết quả đo (Practice: Calculating measurement errors and recording results)

---

## Bảng Dụng Cụ Thực Hành | Lab Equipment & Tools Table

Dưới đây là danh sách các dụng cụ cần thiết cho bài thực hành của tuần này.
Below is the list of required equipment for this week's lab.

| STT | Tên Dụng Cụ (VI) | Equipment Name (EN) | Chức Năng (Function) | Đơn Giá Tham Khảo (VND) | Nơi Mua (Availability) |
|:---:|:---|:---|:---|:---:|:---|
| 1 | Thước kẹp cơ khí | Vernier Caliper | Đo kích thước ngoài, trong, độ sâu với độ chia nhỏ nhất 0.05mm hoặc 0.02mm. | 250,000 - 500,000 | Cửa hàng cơ khí, Shopee |
| 2 | Panme đo ngoài | Outside Micrometer | Đo đường kính ngoài, bề dày với độ chính xác rất cao, thường là 0.01mm. | 350,000 - 800,000 | Cửa hàng thiết bị đo lường |
| 3 | Khối trụ kim loại | Metal Cylinder | Vật mẫu để tiến hành đo lường đường kính và chiều cao. | 50,000 - 100,000 | Cửa hàng thiết bị giáo dục |
| 4 | Kính bảo hộ | Safety Goggles | Bảo vệ mắt trong quá trình thực hành, tránh vật thể lạ hoặc hóa chất văng vào mắt. | 30,000 - 80,000 | Cửa hàng bảo hộ lao động |
| 5 | Găng tay cách điện | Insulated Gloves | Sử dụng khi thao tác với các mạch điện hoặc thiết bị điện tử cơ bản. | 100,000 - 200,000 | Cửa hàng bảo hộ lao động |

---

## Lý Thuyết Trọng Tâm | Deep Theory Explanations

### 1. Đối tượng và Phương pháp nghiên cứu Vật lí | Physics Domain & Scientific Method
Vật lí học nghiên cứu các dạng vận động đơn giản và tổng quát nhất của vật chất và tương tác giữa chúng.
Physics studies the simplest and most general forms of matter motion and their interactions.

**Sơ đồ Phương pháp Khoa học (Scientific Method Diagram):**

```text
+-------------------------+
| 1. Quan sát sự vật,     |
|    hiện tượng           |
| (Observation)           |
+-----------+-------------+
            |
            v
+-------------------------+
| 2. Đặt câu hỏi nghiên   |
|    cứu (Questioning)    |
+-----------+-------------+
            |
            v
+-------------------------+
| 3. Xây dựng giả thuyết  |
| (Formulating Hypothesis)|
+-----------+-------------+
            |
            v
+-------------------------+
| 4. Thiết kế & tiến hành |
|    thí nghiệm           |
| (Experimentation)       |
+-----------+-------------+
            |
            v
+-------------------------+
| 5. Phân tích số liệu &  |
|    Rút ra kết luận      |
| (Analysis & Conclusion) |
+-------------------------+
```

### 2. Hệ đơn vị SI và Phân tích thứ nguyên | SI Units and Dimensional Analysis
Hệ đo lường quốc tế (SI) bao gồm 7 đơn vị cơ bản: Mét (m) cho chiều dài, Kilôgam (kg) cho khối lượng, Giây (s) cho thời gian, Ampe (A) cho cường độ dòng điện, Kelvin (K) cho nhiệt độ, Mol (mol) cho lượng chất, và Candela (cd) cho cường độ sáng.
Phân tích thứ nguyên giúp kiểm tra tính đúng đắn của một phương trình vật lí. Chẳng hạn, vận tốc $v$ có thứ nguyên là $[L][T]^{-1}$.

### 3. Sai số trong phép đo | Errors in Measurement
Khi đo một đại lượng vật lí $A$, ta không bao giờ biết được giá trị thực $A_{true}$. Giá trị đo được gọi là kết quả đo. Sự sai lệch giữa kết quả đo và giá trị thực gọi là sai số.

**a. Phân loại sai số (Types of Errors):**
- **Sai số hệ thống (Systematic Error):** Là sai số có tính quy luật, không đổi hoặc thay đổi theo một quy luật nhất định. Ví dụ: sai số dụng cụ (điểm 0 bị lệch).
  - *Systematic error is reproducible and consistently in the same direction. It is often due to a problem which persists throughout the entire experiment, such as a poorly calibrated instrument.*
- **Sai số ngẫu nhiên (Random Error):** Là sai số không có tính quy luật, phụ thuộc vào nhiều yếu tố ngẫu nhiên (thao tác đo, điều kiện môi trường). Sai số này có thể giảm thiểu bằng cách đo nhiều lần và lấy giá trị trung bình.
  - *Random error fluctuates in both magnitude and direction. It can be reduced by repeated measurements and statistical analysis.*

**b. Cách tính sai số (Calculating Errors):**
Giả sử ta tiến hành đo đại lượng $A$ lặp lại $n$ lần, ta thu được các giá trị $A_1, A_2, ..., A_n$.

- **Giá trị trung bình (Mean Value):**
  $$ \bar{A} = \frac{A_1 + A_2 + ... + A_n}{n} = \frac{1}{n}\sum_{i=1}^{n} A_i $$

- **Sai số tuyệt đối của mỗi lần đo (Absolute Error of each measurement):**
  $$ \Delta A_i = | \bar{A} - A_i | $$

- **Sai số ngẫu nhiên tuyệt đối trung bình (Mean Absolute Random Error):**
  $$ \overline{\Delta A} = \frac{\Delta A_1 + \Delta A_2 + ... + \Delta A_n}{n} $$

- **Sai số tuyệt đối của phép đo (Total Absolute Error):**
  $$ \Delta A = \overline{\Delta A} + \Delta A_{dc} $$
  *(Trong đó $\Delta A_{dc}$ là sai số dụng cụ, thường lấy bằng nửa hoặc một độ chia nhỏ nhất của dụng cụ)*

- **Sai số tương đối (Relative Error / Fractional Error):**
  $$ \delta A = \frac{\Delta A}{\bar{A}} \times 100\% $$

- **Cách ghi kết quả đo (Reporting the Measurement Result):**
  $$ A = \bar{A} \pm \Delta A $$
  *Lưu ý: Sai số tuyệt đối $\Delta A$ thường được làm tròn đến 1 hoặc 2 chữ số có nghĩa. Giá trị trung bình $\bar{A}$ phải được làm tròn sao cho chữ số cuối cùng cùng bậc thập phân với $\Delta A$.*

**c. Truyền sai số (Error Propagation):**
Khi đại lượng cần xác định $F$ được tính qua các đại lượng đo trực tiếp $X, Y, Z...$ theo một hàm số $F = f(X,Y,Z)$, sai số của $F$ được tính như sau:
- Phép cộng hoặc trừ ($F = X \pm Y$): Sai số tuyệt đối bằng tổng các sai số tuyệt đối.
  $$ \Delta F = \Delta X + \Delta Y $$
- Phép nhân hoặc chia ($F = X \cdot Y$ hoặc $F = \frac{X}{Y}$): Sai số tương đối bằng tổng các sai số tương đối.
  $$ \delta F = \delta X + \delta Y \implies \frac{\Delta F}{\bar{F}} = \frac{\Delta X}{\bar{X}} + \frac{\Delta Y}{\bar{Y}} $$

#### Ví dụ bằng số (Worked Numerical Example)
Một nhóm học sinh đo thời gian rơi tự do của một vật 5 lần và thu được kết quả như sau (đơn vị: giây): 0.45; 0.46; 0.44; 0.45; 0.47. Sai số dụng cụ đo là 0.01s. Hãy trình bày kết quả đo thời gian.

**Giải (Solution):**
1. Giá trị trung bình:
   $$ \bar{t} = \frac{0.45 + 0.46 + 0.44 + 0.45 + 0.47}{5} = \frac{2.27}{5} = 0.454 \, (s) $$
2. Sai số ngẫu nhiên từng lần đo:
   $$ \Delta t_1 = |0.454 - 0.45| = 0.004 $$
   $$ \Delta t_2 = |0.454 - 0.46| = 0.006 $$
   $$ \Delta t_3 = |0.454 - 0.44| = 0.014 $$
   $$ \Delta t_4 = |0.454 - 0.45| = 0.004 $$
   $$ \Delta t_5 = |0.454 - 0.47| = 0.016 $$
3. Sai số ngẫu nhiên trung bình:
   $$ \overline{\Delta t} = \frac{0.004 + 0.006 + 0.014 + 0.004 + 0.016}{5} = \frac{0.044}{5} = 0.0088 \, (s) $$
4. Sai số tuyệt đối của phép đo:
   $$ \Delta t = \overline{\Delta t} + \Delta t_{dc} = 0.0088 + 0.01 = 0.0188 \, (s) $$
   Làm tròn $\Delta t$ tới 1 chữ số có nghĩa: $\Delta t \approx 0.02 \, (s)$.
5. Làm tròn giá trị trung bình $\bar{t}$ theo $\Delta t$:
   Bậc thập phân của $\Delta t$ là phần trăm (hai chữ số sau dấu phẩy). Do đó làm tròn $\bar{t}$ đến phần trăm: $\bar{t} \approx 0.45 \, (s)$.
6. Kết quả đo:
   $$ t = 0.45 \pm 0.02 \, (s) $$

---

## ⚠️ Quy Tắc An Toàn Thực Hành | Safety Warnings
Việc đảm bảo an toàn là nguyên tắc tối thượng trong bất kỳ phòng thí nghiệm nào.
Ensuring safety is the paramount principle in any laboratory.

- **An toàn điện (Electrical Safety):**
  - Không cắm phích cắm khi tay đang ướt.
  - (Do not handle plugs with wet hands.)
  - Luôn kiểm tra dây dẫn trước khi sử dụng. Không dùng dây bị hở lõi.
  - (Always check wires before use. Do not use wires with exposed cores.)
  - Chỉ đóng điện khi giáo viên đã kiểm tra mạch.

- **An toàn cơ học (Mechanical Safety):**
  - Cẩn thận khi làm việc với các vật sắc nhọn, vật nặng. Khi thả rơi vật, đảm bảo vùng bên dưới an toàn.
  - (Be careful with sharp or heavy objects. When dropping objects, ensure the drop zone is safe.)
  - Buộc tóc gọn gàng, mặc áo blouse, tránh quần áo vướng víu vào các thiết bị quay.

- **An toàn quang học & nhiệt học (Optical & Thermal Safety):**
  - Không nhìn trực tiếp vào các nguồn sáng mạnh, đặc biệt là laser.
  - (Never look directly into strong light sources, especially lasers.)
  - Cẩn thận khi sử dụng các thiết bị đốt nóng, đợi thiết bị nguội hẳn trước khi cất dọn.

---

## Hướng Dẫn Thực Hành | Step-by-Step Hands-on Experiments

### Thực hành Đo Kích Thước Khối Trụ | Measuring Dimensions of a Cylinder

**Dụng cụ:**
- Thước kẹp (Vernier caliper) - độ chia nhỏ nhất $0.02$ mm
- Panme (Micrometer) - độ chia nhỏ nhất $0.01$ mm
- Khối trụ kim loại

**Bước 1: Kiểm tra điểm số 0 của dụng cụ (Zero-point Check)**
- Với thước kẹp: Đóng hoàn toàn hai mỏ đo. Kiểm tra xem vạch 0 của du xích có trùng hoàn toàn với vạch 0 của thước chính không.
- Với panme: Vặn núm xoay cho hai mặt đo chạm nhau (sử dụng bánh cóc để tránh ép quá chặt). Kiểm tra vạch 0 trên trống đo có chỉ đúng vạch chuẩn không. Nếu lệch, ghi nhận giá trị để bù trừ sai số hệ thống.

**Bước 2: Đo chiều cao khối trụ bằng thước kẹp (Measuring Height)**
1. Mở mỏ đo của thước kẹp sao cho rộng hơn chiều cao khối trụ.
2. Đặt khối trụ vào giữa hai mỏ đo.
3. Trượt mỏ đo di động cho tới khi kẹp chặt khối trụ (vừa phải).
4. Vặn ốc hãm để cố định vị trí.
5. Đọc kết quả đo:
   - Đọc phần nguyên trên thước chính tại vị trí ngay trước vạch 0 của du xích.
   - Tìm vạch trên du xích trùng nhất với một vạch bất kỳ trên thước chính. Nhân số thứ tự của vạch du xích đó với độ chia nhỏ nhất của thước (0.02mm) để ra phần thập phân.
6. Lặp lại việc đo ở các vị trí khác nhau của khối trụ (ít nhất 5 lần). Ghi kết quả vào bảng.

**Bước 3: Đo đường kính khối trụ bằng panme (Measuring Diameter)**
1. Vặn núm xoay để mở rộng khoảng cách hai bề mặt đo.
2. Đưa khối trụ vào giữa.
3. Vặn núm xoay để bề mặt đo tiến lại gần khối trụ. KHI GẦN CHẠM, sử dụng núm xoay tinh (bánh cóc trượt) ở đuôi panme. Nghe tiếng "tạch tạch tạch" (khoảng 3 tiếng) thì dừng lại. Đảm bảo lực kẹp chuẩn xác và không làm hỏng ren của panme.
4. Đọc kết quả:
   - Đọc vạch trên thân chính bị mép trống đo che khuất gần nhất. Phần này chia thành 1mm và 0.5mm.
   - Đọc vạch trên trống đo trùng với đường chuẩn trên thân chính. Nhân với 0.01mm.
   - Cộng hai giá trị lại.
5. Thực hiện phép đo ở nhiều tiết diện khác nhau của khối trụ. Ghi 5 lần vào bảng.

**Bước 4: Xử lý số liệu (Data Processing)**
- Tính trung bình đường kính và chiều cao.
- Tính sai số tuyệt đối của từng lần đo.
- Tính sai số tuyệt đối trung bình.
- Tính sai số toàn phần $\Delta d, \Delta h$.
- Tính thể tích khối trụ $V = \frac{\pi \cdot d^2}{4} \cdot h$.
- Truyền sai số để tìm $\Delta V$ và ghi kết quả cuối cùng $V = \bar{V} \pm \Delta V$.

---

## Code Python Xử Lý Số Liệu | Complete Python Simulation Code

Đoạn mã Python dưới đây sử dụng thư viện `numpy` và `scipy.stats` để tự động hóa việc tính toán sai số, độ lệch chuẩn và truyền sai số một cách chuyên nghiệp nhất.
The following Python script uses `numpy` and `scipy.stats` to automate error calculations, standard deviation, and error propagation professionally.

```python
"""
Statistical Error Analysis Script for Physics Lab
Tác giả: Chuyên gia Vật Lí Antigravity
Mô tả: 
Script này lấy mảng số liệu thô từ các lần đo, tính toán:
1. Giá trị trung bình (Mean)
2. Sai số ngẫu nhiên tuyệt đối trung bình (Mean Absolute Deviation)
3. Độ lệch chuẩn mẫu (Sample Standard Deviation)
4. Sai số theo khoảng tin cậy (Confidence Interval Error) sử dụng phân bố Student (t-distribution).
5. Truyền sai số (Error Propagation) cho việc tính thể tích khối trụ.
"""

import numpy as np
import scipy.stats as stats
import math

def analyze_measurement(data, instrument_error=0.01, confidence_level=0.95):
    """
    Phân tích chuỗi số liệu đo lường.
    - data: Mảng numpy hoặc list chứa số liệu
    - instrument_error: Sai số dụng cụ
    - confidence_level: Mức độ tin cậy (mặc định 95%)
    """
    arr = np.array(data)
    n = len(arr)
    
    if n == 0:
        raise ValueError("Data list is empty.")
        
    # 1. Giá trị trung bình
    mean_val = np.mean(arr)
    
    # 2. Sai số ngẫu nhiên tuyệt đối trung bình (theo sách giáo khoa cơ bản)
    abs_deviations = np.abs(arr - mean_val)
    mean_abs_dev = np.mean(abs_deviations)
    
    # Sai số toàn phần (theo SGK phổ thông)
    total_error_sgk = mean_abs_dev + instrument_error
    
    # 3. Phương pháp thống kê chuyên sâu: Độ lệch chuẩn mẫu (n-1)
    std_dev = np.std(arr, ddof=1)
    
    # Sai số chuẩn của giá trị trung bình (Standard Error of the Mean)
    std_error = std_dev / np.sqrt(n)
    
    # 4. Tính sai số ngẫu nhiên theo khoảng tin cậy (Student's t-distribution)
    t_val = stats.t.ppf((1 + confidence_level) / 2, n - 1)
    random_error_stat = t_val * std_error
    
    # Sai số toàn phần kết hợp
    # Delta A = sqrt((Random_Error)^2 + (Instrument_Error)^2) (Quy tắc cộng phương sai)
    total_error_stat = np.sqrt(random_error_stat**2 + instrument_error**2)
    
    return {
        'mean': mean_val,
        'mean_abs_error': mean_abs_dev,
        'total_error_sgk': total_error_sgk,
        'std_dev': std_dev,
        'total_error_stat': total_error_stat
    }

def print_results(name, unit, results):
    print(f"--- Kết quả đo đại lượng: {name} ---")
    print(f"Giá trị trung bình: {results['mean']:.4f} {unit}")
    print(f"Sai số ngẫu nhiên trung bình (SGK): {results['mean_abs_error']:.4f} {unit}")
    print(f"Sai số toàn phần (SGK): {results['total_error_sgk']:.4f} {unit}")
    print(f"Độ lệch chuẩn (SD): {results['std_dev']:.4f} {unit}")
    print(f"Sai số theo thống kê (95% CI): {results['total_error_stat']:.4f} {unit}")
    
    # Quy tắc làm tròn (lấy 1 chữ số có nghĩa cho sai số)
    # Tìm bậc thập phân của chữ số có nghĩa đầu tiên của sai số
    err = results['total_error_sgk']
    if err == 0:
        decimal_places = 2
    else:
        # Số bậc thập phân cần làm tròn
        decimal_places = -int(math.floor(math.log10(abs(err))))
        if decimal_places < 0:
            decimal_places = 0
            
    rounded_err = round(err, decimal_places)
    # Nếu chữ số đầu tiên của sai số là 1 hoặc 2, ta có thể giữ 2 chữ số có nghĩa
    first_digit = int(str(abs(rounded_err)).replace('.', '').lstrip('0')[0])
    if first_digit <= 2 and decimal_places >= 0:
        decimal_places += 1
        rounded_err = round(err, decimal_places)
        
    rounded_mean = round(results['mean'], decimal_places)
    print(f">> KẾT QUẢ GHI CUỐI CÙNG: {name} = {rounded_mean} ± {rounded_err} {unit}\n")

if __name__ == "__main__":
    # Dữ liệu giả lập đo đường kính khối trụ (đơn vị: mm)
    # Bằng panme (sai số dụng cụ = 0.01 mm)
    d_measurements = [12.45, 12.46, 12.44, 12.45, 12.47]
    d_res = analyze_measurement(d_measurements, instrument_error=0.01)
    print_results("Đường kính d", "mm", d_res)
    
    # Dữ liệu giả lập đo chiều cao khối trụ (đơn vị: mm)
    # Bằng thước kẹp (sai số dụng cụ = 0.02 mm)
    h_measurements = [50.10, 50.12, 50.08, 50.10, 50.14]
    h_res = analyze_measurement(h_measurements, instrument_error=0.02)
    print_results("Chiều cao h", "mm", h_res)
    
    # TRUYỀN SAI SỐ (Error Propagation) để tính thể tích V = (pi * d^2 / 4) * h
    d_mean = d_res['mean']
    h_mean = h_res['mean']
    V_mean = (math.pi * d_mean**2 / 4) * h_mean
    
    # Sai số tương đối
    delta_d = d_res['total_error_sgk'] / d_mean
    delta_h = h_res['total_error_sgk'] / h_mean
    
    # Sai số tương đối của thể tích (tính theo sai số cực đại tuyệt đối)
    delta_V = 2 * delta_d + delta_h
    
    # Sai số tuyệt đối của thể tích
    abs_err_V = delta_V * V_mean
    
    print("--- Kết quả tính Thể tích V ---")
    print(f"Giá trị trung bình V = {V_mean:.2f} mm^3")
    print(f"Sai số tuyệt đối dV = {abs_err_V:.2f} mm^3")
    print(f">> V = {round(V_mean, 1)} ± {round(abs_err_V, 1)} mm^3")
```

---

## Câu Hỏi Thảo Luận | Discussion Questions

**Câu 1 (Q1):** Thế nào là sai số hệ thống? Làm thế nào để giảm thiểu sai số hệ thống khi sử dụng thước kẹp?
- *(What is a systematic error? How can it be minimized when using a Vernier caliper?)*
- **Đáp án / Hướng dẫn:** Sai số hệ thống là những sai số do dụng cụ đo (lệch điểm 0) hoặc do phương pháp đo chưa chuẩn gây ra, luôn lệch về một phía. Để giảm thiểu khi dùng thước kẹp, ta phải kiểm tra điểm số 0 trước khi đo. Nếu vạch 0 của du xích lệch đi, ta phải ghi lại giá trị lệch và cộng/trừ vào kết quả đo cuối cùng.

**Câu 2 (Q2):** Phân biệt giữa sai số tuyệt đối và sai số tương đối. Trong thực tế, đại lượng nào phản ánh mức độ chính xác của phép đo tốt hơn?
- *(Differentiate between absolute and relative error. In practice, which one better reflects the accuracy of a measurement?)*
- **Đáp án / Hướng dẫn:** Sai số tuyệt đối cho biết giá trị chênh lệch tối đa giữa kết quả đo và giá trị thực (cùng đơn vị với đại lượng đo). Sai số tương đối là tỉ số phần trăm giữa sai số tuyệt đối và giá trị trung bình. Sai số tương đối phản ánh mức độ chính xác của phép đo tốt hơn. Ví dụ sai số 1 cm khi đo chiều dài cuốn sách là rất lớn, nhưng sai số 1 cm khi đo khoảng cách giữa 2 thành phố lại là cực kỳ chính xác.

**Câu 3 (Q3):** Vì sao ta cần thực hiện phép đo lặp lại nhiều lần?
- *(Why do we need to perform repeated measurements?)*
- **Đáp án / Hướng dẫn:** Việc đo lặp lại nhiều lần giúp giảm thiểu sai số ngẫu nhiên do các yếu tố môi trường, tâm lý, hoặc thao tác của người đo. Bằng cách lấy trung bình cộng của nhiều lần đo, kết quả sẽ tiến gần hơn tới giá trị thực.

**Câu 4 (Q4):** Một bạn học sinh báo cáo kết quả đo vận tốc là $v = 15.3456 \pm 0.2 \, \text{m/s}$. Cách ghi kết quả này có đúng không? Vì sao?
- *(A student reported a velocity measurement as $v = 15.3456 \pm 0.2 \, \text{m/s}$. Is this correct? Why?)*
- **Đáp án / Hướng dẫn:** Cách ghi này là **SAI**. Sai số $\Delta v = 0.2$ có chữ số có nghĩa ở hàng phần mười. Do đó, giá trị trung bình cũng chỉ được phép lấy đến hàng phần mười. Kết quả đúng phải được làm tròn và ghi là: $v = 15.3 \pm 0.2 \, \text{m/s}$.

**Câu 5 (Q5):** Khi tính toán sai số của đại lượng gián tiếp thông qua phép nhân hoặc chia, ta áp dụng quy tắc nào?
- *(When calculating the error of an indirect quantity involving multiplication or division, which rule do we apply?)*
- **Đáp án / Hướng dẫn:** Ta áp dụng quy tắc: Sai số tương đối của một tích hoặc thương bằng tổng các sai số tương đối của các thừa số. Ví dụ: $C = A \times B \implies \frac{\Delta C}{C} = \frac{\Delta A}{A} + \frac{\Delta B}{B}$.

---

## Bài Tập Về Nhà | Homework & Practice Problems

**Bài tập 1:** 
Một học sinh đo khối lượng của một vật 4 lần được các kết quả: $m_1 = 10.2 \, g$; $m_2 = 10.4 \, g$; $m_3 = 10.3 \, g$; $m_4 = 10.5 \, g$. Cân có sai số dụng cụ là $0.1 \, g$. 
a) Hãy tính giá trị trung bình, sai số tuyệt đối của mỗi lần đo.
b) Viết kết quả đo khối lượng của vật đó.
*(A student measures the mass of an object 4 times: 10.2g, 10.4g, 10.3g, 10.5g. The balance has an instrumental error of 0.1g. Calculate the mean, absolute errors, and write the final result.)*

**Hướng dẫn giải (Solution hints):**
1. $\bar{m} = \frac{10.2 + 10.4 + 10.3 + 10.5}{4} = 10.35 \, g$
2. Các sai số $\Delta m_i$: $0.15 \,g$, $0.05 \,g$, $0.05 \,g$, $0.15 \,g$.
3. $\overline{\Delta m} = \frac{0.15 + 0.05 + 0.05 + 0.15}{4} = 0.1 \, g$
4. Sai số toàn phần: $\Delta m = 0.1 + 0.1 = 0.2 \, g$.
5. Kết quả: $m = 10.4 \pm 0.2 \, g$ (Làm tròn $10.35 \rightarrow 10.4$ theo quy tắc làm tròn).

**Bài tập 2:** 
Để xác định gia tốc rơi tự do $g$, một học sinh đo chiều dài con lắc đơn $l$ và chu kì dao động $T$. Công thức: $g = \frac{4\pi^2 l}{T^2}$.
Cho $l = 1.000 \pm 0.005 \, m$ và $T = 2.00 \pm 0.02 \, s$. (Lấy $\pi^2 \approx 9.87$).
Tính giá trị trung bình của $g$ và sai số tương đối, sai số tuyệt đối của $g$.
*(To determine free-fall acceleration $g$, a student measures the pendulum length $l$ and period $T$ using $g = 4\pi^2 l / T^2$. Given $l = 1.000 \pm 0.005 \, m$ and $T = 2.00 \pm 0.02 \, s$. Calculate the mean of $g$ and its errors.)*

**Hướng dẫn giải (Solution hints):**
1. $\bar{g} = \frac{4 \cdot 9.87 \cdot 1.000}{(2.00)^2} = \frac{39.48}{4.00} = 9.87 \, m/s^2$
2. Sai số tương đối: 
   $\delta g = \frac{\Delta l}{\bar{l}} + 2\frac{\Delta T}{\bar{T}} = \frac{0.005}{1.000} + 2\frac{0.02}{2.00} = 0.005 + 0.02 = 0.025 = 2.5\%$
3. Sai số tuyệt đối:
   $\Delta g = \bar{g} \cdot \delta g = 9.87 \cdot 0.025 \approx 0.25 \, m/s^2$
4. Ghi kết quả: $g = 9.87 \pm 0.25 \, m/s^2$.

---

## Tiêu Chí Đánh Giá Báo Cáo Thực Hành | Assessment Rubric

Dưới đây là bảng tiêu chí đánh giá cho bài báo cáo thực hành của học sinh (Thang điểm 100).
Below is the assessment rubric for the student lab report (100-point scale).

| Tiêu Chí (Criteria) | Mô tả yêu cầu (Description) | Điểm Tối Đa (Max Score) |
|:---|:---|:---:|
| 1. Tuân thủ an toàn (Safety & Discipline) | Mặc đồ bảo hộ, làm theo đúng chỉ dẫn an toàn, giữ gìn vệ sinh khu vực làm việc. | 10 |
| 2. Thao tác đo lường (Measurement Skills) | Sử dụng đúng kỹ thuật thước kẹp và panme. Đọc số liệu chính xác. | 25 |
| 3. Ghi chép số liệu (Data Recording) | Bảng số liệu rõ ràng, trung thực, không tẩy xóa. Có đủ số lần đo yêu cầu. | 20 |
| 4. Xử lý số liệu & Tính sai số (Data Processing) | Tính đúng giá trị trung bình, sai số tuyệt đối/tương đối. Áp dụng đúng công thức truyền sai số. | 30 |
| 5. Trình bày & Kết luận (Format & Conclusion) | Báo cáo sạch đẹp, kết quả ghi đúng quy tắc làm tròn số. Rút ra nhận xét hợp lý. | 15 |
| **TỔNG CỘNG (TOTAL)** | | **100** |

---

## Tài Liệu Tham Khảo (References)
1. Sách giáo khoa "Vật lí 10" - Bộ Kết nối tri thức với cuộc sống, NXB Giáo dục Việt Nam.
2. Sách bài tập "Vật lí 10" - Bộ Kết nối tri thức với cuộc sống.
3. Tài liệu hướng dẫn sử dụng dụng cụ đo lường cơ khí (MIT OpenCourseWare Physics Lab Manual).
4. Phân tích sai số thực nghiệm - John R. Taylor (An Introduction to Error Analysis).

Chúc các em có một tuần học mở đầu thật thú vị và bổ ích!
*Have a fascinating and rewarding opening week of study!*

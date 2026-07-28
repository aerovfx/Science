---
title: "Week 8: Introduction to Probability (Tuần 8: Làm quen với xác suất)"
date: "2026-07-28"
author: "Antigravity STEM Education"
---

# Tuần 8: Biến cố ngẫu nhiên và Xác suất / Week 8: Random Events and Probability

## 1. Mục tiêu bài học (Learning Objectives)

### Vietnamese
- **Kiến thức**: 
  - Nhận biết được các loại biến cố: biến cố chắc chắn (certain event), biến cố không thể (impossible event), và biến cố ngẫu nhiên (random event).
  - Hiểu khái niệm xác suất của một biến cố ngẫu nhiên.
  - Nhận biết được các kết quả có khả năng xảy ra như nhau (equally likely outcomes) trong các thí nghiệm đơn giản như tung đồng xu, gieo xúc xắc, rút thẻ từ hộp.
  - Tính được xác suất của biến cố ngẫu nhiên trong một số mô hình xác suất đơn giản.
- **Kỹ năng**: 
  - Biểu diễn được không gian mẫu và các kết quả thuận lợi bằng sơ đồ hình cây hoặc liệt kê.
  - Lập trình Python để mô phỏng thí nghiệm ngẫu nhiên (Monte Carlo simulation) và trực quan hóa quy luật số lớn (đối chiếu xác suất thực nghiệm và xác suất lí thuyết).
  - Sử dụng GeoGebra để hỗ trợ thống kê dữ liệu nếu cần.
- **Thái độ**: 
  - Cẩn thận, tỉ mỉ trong việc ghi chép số liệu thí nghiệm.
  - Hình thành tư duy xác suất, hiểu rằng các hiện tượng trong thực tế thường mang tính ngẫu nhiên nhưng tuân theo các quy luật xác suất khi số lần lặp lại đủ lớn.

### English
- **Knowledge**: 
  - Identify types of events: certain event, impossible event, and random event.
  - Understand the concept of the probability of a random event.
  - Recognize equally likely outcomes in simple experiments such as tossing a coin, rolling a die, or drawing a card from a box.
  - Calculate the probability of random events in simple probability models.
- **Skills**: 
  - Represent the sample space and favorable outcomes using tree diagrams or systematic listing.
  - Write Python code to simulate random experiments (Monte Carlo simulation) and visualize the Law of Large Numbers (comparing empirical probability with theoretical probability).
  - Use GeoGebra for data statistics assistance if needed.
- **Attitude**: 
  - Be careful and meticulous in recording experimental data.
  - Develop probabilistic thinking, understanding that real-world phenomena often involve randomness but follow probabilistic laws when repeated sufficiently.

---

## 2. Bài học liên quan (Related Textbook Lessons)

- **Bài 29**: Làm quen với biến cố ngẫu nhiên (Introduction to Random Events).
- **Bài 30**: Làm quen với xác suất của biến cố ngẫu nhiên (Introduction to the Probability of a Random Event).
- *Sách giáo khoa (Textbook)*: Toán 7 - Tập 2 (Bộ sách: Kết Nối Tri Thức Với Cuộc Sống).

---

## 3. Công cụ & Phần mềm (Software & Tooling)

| Công cụ / Tool | Phiên bản / Version | Mục đích sử dụng / Usage |
| :--- | :--- | :--- |
| **GeoGebra** | 6.0 (Classic/Calculator) | Xây dựng biểu đồ, thống kê tần số và mô phỏng xác suất cơ bản qua công cụ Spreadsheet & Probability Calculator. |
| **Python** | 3.10+ | Lập trình tính toán xác suất, mô phỏng Monte Carlo, tạo số ngẫu nhiên. |
| **Jupyter Notebook** | Latest | Môi trường lập trình tương tác (Interactive coding environment) cho bài học. |
| **SymPy** | Latest | Tính toán đại số và phân số chính xác (Exact symbolic computation cho phân số xác suất). |
| **Matplotlib / Seaborn** | Latest | Vẽ biểu đồ đường cong hội tụ (convergence plots), biểu đồ cột thể hiện tần số. |

---

## 4. Lý thuyết Toán học chuyên sâu (Deep Mathematical Theory)

### 4.1. Biến cố (Events)

Khi chúng ta thực hiện một phép thử (experiment) như tung đồng xu, gieo xúc xắc, hoặc bốc thăm, kết quả của phép thử có thể xảy ra theo nhiều cách khác nhau. Mỗi tập hợp con của không gian mẫu (tất cả các kết quả có thể) được gọi là một **biến cố** (Event).

Dựa vào khả năng xảy ra, biến cố được chia làm 3 loại chính:
1. **Biến cố chắc chắn (Certain Event)**: Là biến cố luôn luôn xảy ra trong phép thử.
   - Ký hiệu xác suất: $P = 1$.
   - *Ví dụ*: Gieo một con xúc xắc tiêu chuẩn 6 mặt, biến cố "Số chấm xuất hiện nhỏ hơn 7" là biến cố chắc chắn.
2. **Biến cố không thể (Impossible Event)**: Là biến cố không bao giờ xảy ra trong phép thử.
   - Ký hiệu xác suất: $P = 0$.
   - *Ví dụ*: Gieo một con xúc xắc tiêu chuẩn 6 mặt, biến cố "Số chấm xuất hiện bằng 7" là biến cố không thể.
3. **Biến cố ngẫu nhiên (Random Event)**: Là biến cố có thể xảy ra hoặc không xảy ra, tùy thuộc vào kết quả của phép thử.
   - Ký hiệu xác suất: $0 < P < 1$.
   - *Ví dụ*: Biến cố "Gieo đồng xu xuất hiện mặt Sấp (Tails)".

### 4.2. Các kết quả đồng khả năng (Equally Likely Outcomes)

Một phép thử được gọi là có các kết quả đồng khả năng nếu mỗi kết quả cơ bản của phép thử có khả năng xảy ra như nhau.
*Ví dụ*: Đồng xu đồng chất và cân đối (fair coin) có 2 kết quả là Sấp (S) và Ngửa (N), hai kết quả này đồng khả năng. Con xúc xắc cân đối và đồng chất (fair die) có 6 kết quả {1, 2, 3, 4, 5, 6}, mỗi mặt có khả năng xuất hiện như nhau.

### 4.3. Định nghĩa Xác suất của một biến cố (Probability of an Event)

Xác suất của một biến cố $A$, ký hiệu là $P(A)$, là một con số từ 0 đến 1, đo lường khả năng xảy ra của biến cố đó. 
Đối với phép thử có các kết quả đồng khả năng, xác suất của biến cố $A$ được tính bằng công thức:

$$ P(A) = \frac{\text{Số kết quả thuận lợi cho biến cố } A}{\text{Tổng số kết quả có thể xảy ra của phép thử}} $$

$$ P(A) = \frac{n(A)}{n(\Omega)} $$
Trong đó:
- $n(A)$ là số phần tử của tập hợp các kết quả thuận lợi cho $A$.
- $n(\Omega)$ là số phần tử của không gian mẫu $\Omega$.

#### Ví dụ 1: Tung đồng xu (Coin Tossing)
- Phép thử: Tung một đồng xu 1 lần.
- Không gian mẫu: $\Omega = \{S, N\}$. Tổng số kết quả có thể: $n(\Omega) = 2$.
- Biến cố $A$: "Mặt Ngửa xuất hiện". Tập kết quả thuận lợi: $A = \{N\}$. Số kết quả thuận lợi: $n(A) = 1$.
- Xác suất: $P(A) = \frac{1}{2} = 0.5$.

#### Ví dụ 2: Gieo xúc xắc (Dice Rolling)
- Phép thử: Gieo một con xúc xắc 6 mặt 1 lần.
- Không gian mẫu: $\Omega = \{1, 2, 3, 4, 5, 6\}$. $n(\Omega) = 6$.
- Biến cố $B$: "Số chấm xuất hiện là số chẵn". Tập kết quả thuận lợi: $B = \{2, 4, 6\}$. $n(B) = 3$.
- Xác suất: $P(B) = \frac{3}{6} = \frac{1}{2}$.

#### Ví dụ 3: Rút thẻ/bóng (Drawing cards/balls)
- Phép thử: Một hộp có 5 quả bóng màu Đỏ, 3 quả bóng màu Xanh, 2 quả bóng màu Vàng. Rút ngẫu nhiên 1 quả bóng.
- Tổng số bóng: $5 + 3 + 2 = 10$. $n(\Omega) = 10$.
- Biến cố $C$: "Rút được quả bóng màu Đỏ". Số kết quả thuận lợi: 5.
- Xác suất: $P(C) = \frac{5}{10} = \frac{1}{2}$.

---

## 5. Sơ đồ hình cây (Tree Diagrams)

Sơ đồ hình cây là một công cụ trực quan hữu ích để liệt kê tất cả các kết quả có thể xảy ra, đặc biệt khi phép thử gồm nhiều giai đoạn (ví dụ tung đồng xu 2 lần, hoặc tung đồng xu rồi gieo xúc xắc).

### Sơ đồ: Tung 1 đồng xu 2 lần liên tiếp

```text
               Tung lần 1              Tung lần 2          Kết quả chung
                                            
                                       .---- S (Sấp)  ==> (S, S)
               .---- S (Sấp) ---------|
              /                        '---- N (Ngửa) ==> (S, N)
             /
    Bắt đầu -
             \
              \                        .---- S (Sấp)  ==> (N, S)
               '---- N (Ngửa) --------|
                                       '---- N (Ngửa) ==> (N, N)
```

**Phân tích từ sơ đồ**:
- Tổng số kết quả (không gian mẫu): 4 kết quả là (S,S), (S,N), (N,S), (N,N).
- Xác suất để có đúng 1 mặt Ngửa (Biến cố: $\{(S,N), (N,S)\}$): $P = \frac{2}{4} = \frac{1}{2}$.
- Xác suất để có ít nhất 1 mặt Sấp (Biến cố: $\{(S,S), (S,N), (N,S)\}$): $P = \frac{3}{4}$.

---

## 6. Hoạt động thực hành (Hands-on Activities)

### Hoạt động 1: Thí nghiệm vật lý (Physical Experiment)
**Mục đích:** Hiểu sự khác biệt giữa xác suất thực nghiệm (Empirical Probability) và xác suất lí thuyết (Theoretical Probability).

**Chuẩn bị:** 
- Mỗi nhóm học sinh cần 1 đồng xu và 1 con xúc xắc.
- Giấy nháp, bảng ghi kết quả.

**Thực hiện:**
1. **Tung đồng xu 50 lần**: Ghi lại số lần xuất hiện mặt Sấp và mặt Ngửa bằng cách gạch chéo (tally marks).
2. Tính tỉ số (xác suất thực nghiệm): $\frac{\text{Số lần Sấp}}{50}$ và $\frac{\text{Số lần Ngửa}}{50}$.
3. **Gieo xúc xắc 60 lần**: Ghi lại số lần xuất hiện của các mặt từ 1 đến 6.
4. Tính tỉ số (xác suất thực nghiệm) cho từng mặt: $\frac{\text{Số lần mặt } i}{60}$.
5. **Thảo luận**: So sánh các tỉ số vừa tính được với xác suất lí thuyết (0.5 cho đồng xu và $\approx 0.1667$ cho xúc xắc). Chú ý khi số lần thử tăng lên, tỉ số này sẽ có xu hướng tiến gần tới xác suất lí thuyết (Quy luật số lớn / Law of Large Numbers).

### Hoạt động 2: Sử dụng GeoGebra
1. Mở GeoGebra Classic.
2. Mở cửa sổ **Spreadsheet** (Bảng tính).
3. Sử dụng lệnh `RandomBetween(1, 6)` trong ô A1, rồi kéo xuống A100 để tạo ngẫu nhiên 100 lần gieo xúc xắc.
4. Chọn vùng dữ liệu A1:A100, bấm nút **One Variable Analysis** (Phân tích một biến).
5. GeoGebra sẽ vẽ biểu đồ cột (Bar Chart) biểu diễn tần số xuất hiện của các mặt 1, 2, 3, 4, 5, 6. Học sinh quan sát biểu đồ xem cột nào cao nhất, sự chênh lệch giữa các cột như thế nào.

---

## 7. Python Simulation: Monte Carlo Method

Việc thực hiện thí nghiệm vật lý hàng ngàn lần rất mất thời gian. Chúng ta có thể dùng lập trình Python để mô phỏng (simulate) hàng chục nghìn lần tung đồng xu hoặc gieo xúc xắc chỉ trong chớp mắt. Phương pháp sử dụng số ngẫu nhiên để mô phỏng các hiện tượng này được gọi là phương pháp Monte Carlo.

Đoạn mã sau mô phỏng 10,000 lần tung đồng xu, và vẽ đồ thị để cho thấy xác suất thực nghiệm dần tiến về xác suất lí thuyết (0.5) khi số lần thử lớn dần.

### Code Python Mô Phỏng Sự Hội Tụ Của Xác Suất (Convergence Plot)

```python
import random
import matplotlib.pyplot as plt
import numpy as np

# Thiết lập thông số mô phỏng
NUM_TRIALS = 10000

# Hàm mô phỏng tung đồng xu 1 lần (0 = Ngửa, 1 = Sấp)
def flip_coin():
    return random.choice([0, 1])

def run_simulation(trials):
    heads_count = 0
    # Mảng lưu trữ xác suất thực nghiệm sau mỗi lần tung
    probabilities = []
    
    for i in range(1, trials + 1):
        result = flip_coin()
        if result == 0:  # Nếu là Ngửa
            heads_count += 1
            
        # Tính tỉ lệ (xác suất thực nghiệm) tới thời điểm hiện tại
        current_prob = heads_count / i
        probabilities.append(current_prob)
        
    return probabilities

# Chạy mô phỏng
print(f"Bắt đầu mô phỏng tung đồng xu {NUM_TRIALS} lần...")
empirical_probs = run_simulation(NUM_TRIALS)

# Kết quả cuối cùng
final_heads_prob = empirical_probs[-1]
final_tails_prob = 1 - final_heads_prob
print(f"Kết quả sau {NUM_TRIALS} lần tung:")
print(f"- Tỉ lệ mặt Ngửa: {final_heads_prob:.4f} (Lí thuyết: 0.5000)")
print(f"- Tỉ lệ mặt Sấp:  {final_tails_prob:.4f} (Lí thuyết: 0.5000)")

# Trực quan hóa dữ liệu bằng Matplotlib
plt.figure(figsize=(10, 6))

# Vẽ đường xác suất thực nghiệm
plt.plot(range(1, NUM_TRIALS + 1), empirical_probs, label='Xác suất thực nghiệm mặt Ngửa (Empirical)', color='blue', alpha=0.8)

# Vẽ đường xác suất lí thuyết (0.5)
plt.axhline(y=0.5, color='red', linestyle='--', linewidth=2, label='Xác suất lí thuyết (Theoretical = 0.5)')

# Cài đặt đồ thị
plt.title('Minh họa Quy Luật Số Lớn: Hội tụ của Xác suất thực nghiệm', fontsize=14)
plt.xlabel('Số lần tung (Number of Trials)', fontsize=12)
plt.ylabel('Tỉ lệ xuất hiện mặt Ngửa (Probability)', fontsize=12)
plt.ylim(0.0, 1.0)
plt.xscale('log') # Dùng thang đo logarit cho trục X để nhìn rõ giai đoạn đầu dao động mạnh
plt.legend()
plt.grid(True, which="both", ls="-", alpha=0.2)

# Hiển thị đồ thị
plt.show()
```

**Giải thích mã Python:**
- `random.choice([0, 1])`: Chọn ngẫu nhiên giá trị 0 hoặc 1. 0 đại diện cho Ngửa, 1 đại diện cho Sấp.
- Vòng lặp tính toán `current_prob = heads_count / i` sau mỗi lần lặp, lưu vào danh sách.
- Biểu đồ sử dụng thang đo Logarit (`plt.xscale('log')`) cho trục X để thấy rõ ở những lần thử đầu tiên (từ 1 đến 100), đường màu xanh (thực nghiệm) dao động rất mạnh quanh vạch 0.5, nhưng khi số lần thử đạt 1,000, 10,000, đường này trở nên cực kì phẳng và bám sát đường màu đỏ 0.5.

---

## 8. Những Sai Lầm Thường Gặp (Common Mistakes & Misconceptions)

⚠️ **Sai lầm 1: "Ngụy biện con bạc" (Gambler's Fallacy)**
- *Tình huống*: Tung đồng xu liên tiếp 5 lần đều ra mặt Sấp. Học sinh nghĩ rằng: "Chắc chắn lần thứ 6 phải ra mặt Ngửa để bù lại, xác suất Ngửa ở lần 6 rất cao".
- *Sự thật*: Đồng xu không có trí nhớ! Mỗi lần tung là một phép thử hoàn toàn độc lập (Independent event). Xác suất ra mặt Ngửa ở lần thứ 6 vẫn luôn là chính xác $50\%$.

⚠️ **Sai lầm 2: Nhầm lẫn giữa "Biến cố ngẫu nhiên" và "Biến cố đồng khả năng"**
- *Tình huống*: Gieo 2 con xúc xắc, tính tổng số chấm. Các tổng có thể là $2, 3, 4, \dots, 12$. Học sinh áp dụng công thức $P(\text{Tổng} = 2) = \frac{1}{11}$ vì có 11 tổng có thể xảy ra.
- *Sự thật*: Công thức $P(A) = \frac{n(A)}{n(\Omega)}$ **chỉ áp dụng khi các kết quả cơ bản của không gian mẫu có khả năng xảy ra bằng nhau**. Tổng bằng 2 chỉ có 1 cách $(1,1)$, nhưng tổng bằng 7 có 6 cách $(1,6), (2,5), (3,4), (4,3), (5,2), (6,1)$. Do đó, các tổng không phải là các kết quả đồng khả năng. Không gian mẫu đồng khả năng đúng phải là $6 \times 6 = 36$ cặp số, khi đó $P(\text{Tổng} = 2) = \frac{1}{36}$.

⚠️ **Sai lầm 3: Xác suất lớn hơn 1 hoặc âm**
- Xác suất của một biến cố luôn thỏa mãn $0 \le P(A) \le 1$. Nếu học sinh tính ra xác suất là $1.5$ hoặc $-0.2$, thì phép tính chắc chắn bị sai (thường do đếm sai số kết quả thuận lợi hoặc không gian mẫu).

---

## 9. Câu Hỏi Thảo Luận (Discussion Questions)

**Câu 1 (Q1)**: Nếu bạn tung một đồng xu 100 lần và nhận được 100 lần mặt Sấp, liệu biến cố "Lần 101 ra mặt Ngửa" có phải là biến cố chắc chắn không? Tại sao?
- *Gợi ý/Đáp án (Hint/Answer)*: Không. Biến cố "Lần 101 ra mặt Ngửa" vẫn là biến cố ngẫu nhiên với xác suất 0.5 (giả sử đồng xu đồng chất). Mỗi lần tung độc lập với nhau.

**Câu 2 (Q2)**: Trong một lớp học có 20 nam và 15 nữ, giáo viên gọi ngẫu nhiên một bạn lên bảng. Biến cố "Gọi được học sinh nam" và "Gọi được học sinh nữ" có phải là hai biến cố đồng khả năng không?
- *Gợi ý/Đáp án*: Không. Vì số lượng nam (20) lớn hơn nữ (15), nên khả năng gọi được học sinh nam cao hơn học sinh nữ. $P(\text{Nam}) = \frac{20}{35} > P(\text{Nữ}) = \frac{15}{35}$.

**Câu 3 (Q3)**: Có một hộp kín đựng 10 viên bi đỏ. Hãy nêu một biến cố chắc chắn, một biến cố không thể và một biến cố ngẫu nhiên khi rút 1 viên bi từ hộp này (nếu có).
- *Gợi ý/Đáp án*:
  - Chắc chắn: Rút được bi màu đỏ.
  - Không thể: Rút được bi màu xanh (hoặc màu bất kỳ khác đỏ).
  - Ngẫu nhiên: Không có biến cố ngẫu nhiên nào liên quan đến màu sắc vì trong hộp chỉ có đúng 1 màu. (Trừ khi bi có đánh số).

**Câu 4 (Q4)**: Tại sao trong trò chơi xúc xắc, nhiều người thích cược vào tổng điểm là 7 thay vì tổng điểm là 2 hay 12 (khi gieo 2 viên xúc xắc)?
- *Gợi ý/Đáp án*: Vì xác suất ra tổng 7 là cao nhất. Có 6 kết quả thuận lợi cho tổng 7: (1,6), (6,1), (2,5), (5,2), (3,4), (4,3). Tổng 2 hoặc 12 chỉ có 1 kết quả thuận lợi. Xác suất tổng 7 là 6/36, trong khi tổng 2 là 1/36.

**Câu 5 (Q5)**: Lập trình Python (Monte Carlo simulation) giúp chúng ta chứng minh quy luật toán học nào trong xác suất?
- *Gợi ý/Đáp án*: Quy luật số lớn (Law of Large Numbers). Quy luật này phát biểu rằng khi số lần thực hiện phép thử càng lớn, xác suất thực nghiệm sẽ càng tiến gần đến xác suất lí thuyết.

---

## 10. Bài Tập Về Nhà (Homework & Practice Problems)

### Bài 1: Rút thẻ số
Một hộp đựng 10 tấm thẻ được đánh số từ 1 đến 10. Rút ngẫu nhiên một tấm thẻ từ hộp. Tính xác suất của các biến cố sau:
a) $A$: "Rút được thẻ ghi số chẵn".
b) $B$: "Rút được thẻ ghi số lớn hơn 7".
c) $C$: "Rút được thẻ ghi số nguyên tố".
d) $D$: "Rút được thẻ ghi số chia hết cho 11".

**Lời giải chi tiết (Step-by-step Solution)**:
- Phép thử: Rút ngẫu nhiên 1 thẻ từ 10 thẻ.
- Không gian mẫu: $\Omega = \{1, 2, 3, 4, 5, 6, 7, 8, 9, 10\}$.
- Tổng số kết quả có thể: $n(\Omega) = 10$. (Các kết quả là đồng khả năng).

a) Thẻ số chẵn: $A = \{2, 4, 6, 8, 10\} \Rightarrow n(A) = 5$. 
Xác suất: $P(A) = \frac{5}{10} = \frac{1}{2}$.

b) Thẻ số lớn hơn 7: $B = \{8, 9, 10\} \Rightarrow n(B) = 3$. 
Xác suất: $P(B) = \frac{3}{10} = 0.3$.

c) Số nguyên tố nhỏ hơn hoặc bằng 10: $C = \{2, 3, 5, 7\} \Rightarrow n(C) = 4$. (Lưu ý: số 1 không phải là số nguyên tố).
Xác suất: $P(C) = \frac{4}{10} = \frac{2}{5} = 0.4$.

d) Số chia hết cho 11 trong khoảng 1 đến 10: Tập hợp rỗng $D = \emptyset \Rightarrow n(D) = 0$. (Đây là biến cố không thể).
Xác suất: $P(D) = \frac{0}{10} = 0$.

### Bài 2: Vòng quay may mắn (Spinner)
Một vòng quay được chia thành 8 hình quạt tròn bằng nhau, đánh số từ 1 đến 8. Mũi tên đứng yên sau khi quay xong.
a) Biến cố "Mũi tên chỉ vào số lẻ" có xác suất là bao nhiêu?
b) Biến cố "Mũi tên chỉ vào số không nhỏ hơn 5" có xác suất bao nhiêu?

**Lời giải chi tiết**:
- Tổng số phần (kết quả): $n(\Omega) = 8$. Vì các phần bằng nhau nên các kết quả đồng khả năng.
a) Số lẻ: $\{1, 3, 5, 7\}$, có 4 kết quả. $P = \frac{4}{8} = \frac{1}{2}$.
b) Số không nhỏ hơn 5 (tức là $\ge 5$): $\{5, 6, 7, 8\}$, có 4 kết quả. $P = \frac{4}{8} = \frac{1}{2}$.

### Bài 3: Sáng tạo câu hỏi
Hãy tự tạo ra 1 phép thử (ví dụ: bốc bi, quay vòng quay, rút bài) và định nghĩa 3 biến cố: 1 chắc chắn, 1 ngẫu nhiên, 1 không thể. Tính xác suất của biến cố ngẫu nhiên mà em vừa đặt. (Học sinh tự làm, giáo viên chấm điểm).

---

## 11. Bảng Tiêu Chí Đánh Giá (Assessment Rubric Table)

Đánh giá quá trình học tập và làm bài tập của học sinh dựa trên thang điểm 100.

| Tiêu chí (Criteria) | Mô tả mức độ (Description) | Điểm tối đa (Max Score) |
| :--- | :--- | :--- |
| **Nhận biết biến cố (Event Identification)** | Phân biệt chính xác 3 loại biến cố: chắc chắn, không thể, ngẫu nhiên. Lấy được ví dụ minh hoạ đúng. | 20 |
| **Tính xác suất cơ bản (Basic Probability)** | Tính đúng xác suất các bài toán 1 giai đoạn (đồng xu, xúc xắc, rút thẻ). Xác định đúng $n(A)$ và $n(\Omega)$. | 30 |
| **Trình bày lập luận toán học (Mathematical Reasoning)** | Trình bày bài làm có giải thích rõ ràng, liệt kê được không gian mẫu, không chỉ ghi đáp số trơn. | 20 |
| **Kỹ năng thực hành / Lập trình (Practical / Coding Skills)** | Hoàn thành thí nghiệm vật lý, ghi chép số liệu đầy đủ (hoặc) hiểu và chạy được mã Python mô phỏng mà không có lỗi. | 15 |
| **Thái độ và Tham gia (Attitude & Participation)** | Tham gia tích cực vào thảo luận nhóm, trả lời các câu hỏi thảo luận sáng tạo, đặt câu hỏi hay. | 15 |
| **Tổng cộng (Total)** | | **100** |

---
**Tài liệu tham khảo bổ sung (Additional References):**
- Sách Bài Tập Toán 7 - Tập 2 (KNTT).
- Khan Academy: Probability for Middle School.
- Python Documentation: `random` module.
- "The Drunkard's Walk: How Randomness Rules Our Lives" - Leonard Mlodinow (Sách mở rộng dành cho giáo viên và học sinh xuất sắc).

*(End of Lesson Document)*

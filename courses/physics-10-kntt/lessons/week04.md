# Tuần 4: Chuyển Động Ném & Ba Định Luật Newton (Week 4: Projectile Motion & Newton's Three Laws)

## 1. Mục Tiêu Khóa Học (Learning Objectives)

### Tiếng Việt (Vietnamese)
Kết thúc tuần học này, học sinh sẽ có khả năng:
- **Kiến thức**: Nắm vững các khái niệm về chuyển động ném ngang và ném xiên. Hiểu rõ khái niệm lực, tổng hợp và phân tích lực. Phát biểu và giải thích chi tiết được ba định luật Newton. Khám phá sâu về hệ quy chiếu quán tính và phi quán tính. Nhận biết các lực cơ học cơ bản.
- **Kỹ năng**: Tính toán được tầm xa, độ cao cực đại và thời gian bay của vật ném. Vận dụng các định luật Newton để giải bài toán động lực học cơ bản và nâng cao (mặt phẳng nghiêng, ròng rọc). Thực hiện thí nghiệm kiểm chứng định luật II Newton với mức độ phân tích sai số (error analysis). Lập trình mô phỏng quỹ đạo bay sử dụng Python (matplotlib, numpy).
- **Thái độ**: Tuân thủ các quy định an toàn phòng thí nghiệm, làm việc nhóm hiệu quả, phát triển tư duy phản biện, và tiếp cận vật lý qua góc nhìn thực nghiệm thực tế.

### Tiếng Anh (English)
By the end of this week, students will be able to:
- **Knowledge**: Master the concepts of horizontal and oblique projectile motion. Understand the concept of force, vector addition, and resolution. State and explain Newton's three laws of motion in detail. Explore inertial and non-inertial reference frames. Identify basic mechanical forces.
- **Skills**: Calculate the range, maximum height, and flight time of a projectile. Apply Newton's laws to solve basic and advanced dynamics problems (inclined planes, pulleys). Conduct experiments to verify Newton's Second Law with error analysis. Program a trajectory simulation using Python.
- **Attitude**: Adhere to laboratory safety rules, work effectively in teams, develop critical thinking, and approach physics from a practical experimental perspective.

---

## 2. Các Bài Học Liên Quan Trong Sách Giáo Khoa (Related Textbook Lessons)
Khóa học này được thiết kế dựa trên SGK **"Vật Lí 10 - Kết Nối Tri Thức Với Cuộc Sống"**:
- **Bài 12**: Chuyển động ném (Projectile Motion) - Tổng quát hóa về chuyển động cong.
- **Bài 13**: Tổng hợp và phân tích lực. Cân bằng lực (Force Addition and Resolution. Force Equilibrium) - Biểu diễn vector học.
- **Bài 14**: Định luật 1 Newton (Newton's First Law) - Quán tính và Hệ quy chiếu.
- **Bài 15**: Định luật 2 Newton (Newton's Second Law) - Mối liên hệ $F = ma$ và vi phân cơ bản.
- **Bài 16**: Định luật 3 Newton (Newton's Third Law) - Tương tác giữa các vật và bảo toàn động lượng ngầm hiểu.

---

## 3. Danh Mục Thiết Bị và Dụng Cụ (Lab Equipment & Tools)

Dưới đây là danh sách các dụng cụ cần thiết cho phần thực hành. Các mức giá chỉ mang tính tham khảo (The prices below are for reference only).

| STT | Thiết bị / Dụng cụ (Equipment) | Chức năng (Function) | Số lượng | Giá tham khảo (VND) | Nơi bán (Local Availability) |
|-----|--------------------------------|----------------------|----------|---------------------|------------------------------|
| 1 | Băng đệm khí / Xe đẩy động lực học (Air track / Dynamics cart) | Cung cấp môi trường ma sát cực nhỏ | 1 bộ | 3,500,000 | Cửa hàng thiết bị GD, Shopee |
| 2 | Cảm biến cổng quang (Photogate sensors) | Đo thời gian, vận tốc chính xác tới mili-giây | 2 cái | 1,200,000 | Các đại lý thiết bị STEM |
| 3 | Quả nặng và giá treo (Hanging masses and hanger) | Tạo lực kéo F cho hệ thống, các mức 10g, 50g | 1 bộ | 150,000 | Cửa hàng dụng cụ thí nghiệm |
| 4 | Ròng rọc siêu nhẹ (Low-friction pulley) | Đổi hướng lực kéo, ma sát không đáng kể | 1 cái | 80,000 | Cửa hàng dụng cụ thí nghiệm |
| 5 | Bộ ném vật lý (Projectile launcher) | Tạo vận tốc đầu v0 và góc ném tùy chỉnh | 1 bộ | 850,000 | Thiết bị giáo dục chuyên dụng |
| 6 | Thước cuộn 5m (Measuring tape) | Đo tầm xa R và độ cao với sai số nhỏ | 1 cái | 50,000 | Cửa hàng điện nước, siêu thị |
| 7 | Cân điện tử tiểu ly (Digital pocket scale) | Đo khối lượng m chính xác đến 0.01g | 1 cái | 200,000 | Cửa hàng điện tử, Shopee |
| 8 | Bơm không khí (Air pump for air track) | Cấp khí cho băng đệm để nâng xe đẩy | 1 cái | 1,500,000| Cửa hàng thiết bị GD |

---

## 4. Cảnh Báo An Toàn (Safety Warnings) ⚠️

### An Toàn Phòng Thí Nghiệm (Laboratory Safety Rules)
- **Kính bảo hộ (Safety Goggles)**: Bắt buộc đeo khi thực hiện các thí nghiệm có vật phóng (ném xiên, ném ngang) để bảo vệ mắt khỏi quỹ đạo bất ngờ.
- **Khu vực an toàn (Clearance Zone)**: Không ai được đứng trên quỹ đạo bay hoặc khu vực rơi của vật ném. Cần có đệm mềm ở khu vực vật rơi.
- **Quả nặng (Heavy Masses)**: Cẩn thận khi thao tác với quả nặng trên giá treo, tránh làm rơi vào chân. Cố định chặt hệ thống.
- **Rút điện (Electrical Safety)**: Tắt nguồn băng đệm khí và hệ thống cổng quang học ngay sau khi hoàn thành thí nghiệm để tránh cháy nổ hoặc hao mòn.

---

## 5. Lý Thuyết Chuyên Sâu (Deep Theory Explanations)

### 5.1. Chuyển Động Ném (Projectile Motion) (Từ Bài 12 KNTT)

Chuyển động ném là sự kết hợp của hai chuyển động độc lập (Nguyên lý độc lập tác dụng):
1. Chuyển động thẳng đều theo phương ngang (Trục Ox). Không có lực tác dụng theo phương này (bỏ qua sức cản).
2. Chuyển động rơi tự do (hoặc biến đổi đều) theo phương thẳng đứng (Trục Oy) dưới tác dụng của trọng lực.

#### Ném ngang (Horizontal Projectile)
- Xét hệ trục toạ độ Oxy, gốc O tại vị trí ném, trục Ox nằm ngang, Oy hướng xuống dưới.
- Gia tốc: $a_x = 0$, $a_y = g$
- Vận tốc ban đầu: $\vec{v}_0$ theo phương ngang. Do đó $v_{0x} = v_0$, $v_{0y} = 0$.
- Các phương trình động học:
  - Vận tốc: $v_x = v_0$, $v_y = gt$
  - Toạ độ: $x = v_0 t$, $y = \frac{1}{2}gt^2$
- Phương trình quỹ đạo: Từ $t = \frac{x}{v_0}$, thế vào $y$:
  $$ y = \frac{g}{2v_0^2}x^2 $$
  Đồ thị là một nhánh Parabol.
- Thời gian rơi (Chạm đất tại $y=h$): $t = \sqrt{\frac{2h}{g}}$.
- Tầm xa (Tầm bay xa trên mặt đất): $L = x_{max} = v_0 t = v_0 \sqrt{\frac{2h}{g}}$.

#### Ném xiên (Oblique Projectile)
- Vận tốc ban đầu: $v_0$ hợp với phương ngang một góc $\alpha$.
- Thành phần vận tốc: $v_{0x} = v_0 \cos\alpha$ và $v_{0y} = v_0 \sin\alpha$.
- Phương trình chuyển động (chọn Oy hướng lên):
  - $x(t) = (v_0 \cos\alpha)t$
  - $y(t) = (v_0 \sin\alpha)t - \frac{1}{2}gt^2$
- Phương trình quỹ đạo (quỹ đạo Parabol đầy đủ):
  $$ y = x \tan\alpha - \frac{g}{2v_0^2 \cos^2\alpha}x^2 $$
- Tầm xa (Range): Khoảng cách ngang khi $y = 0$ (sau khi ném):
  $$ R = \frac{v_0^2 \sin(2\alpha)}{g} $$
- Độ cao cực đại (Max Height): Đạt được khi $v_y = 0 \Rightarrow t = \frac{v_0 \sin\alpha}{g}$:
  $$ H = \frac{v_0^2 \sin^2\alpha}{2g} $$
- Thời gian bay (Flight Time): Thời gian tổng cộng từ lúc ném tới khi chạm đất ($y=0$):
  $$ T = \frac{2v_0 \sin\alpha}{g} $$

#### Sơ đồ Vật lý (Physical Model ASCII Diagram)
```text
      y
      ^
      |         *  *  *  (H_max)  -> v_y = 0, v_x = v0*cos(a)
      |      *           *
      |    *               *
      |   *                 *
v0 /|  *                   *
  / | *                     *
 /_a|*                       *
+--------------------------------> x (Range R)
(0,0)
```

### 5.2. Lực và Định luật Newton (Force & Newton's Laws) (Từ Bài 13-16 KNTT)

#### Tổng hợp và phân tích lực (Vector Addition & Resolution - Bài 13)
Lực là đại lượng vectơ đặc trưng cho tác dụng của vật này lên vật khác, kết quả là truyền gia tốc cho vật hoặc làm vật biến dạng.
Hợp lực của hai lực $\vec{F}_1$ và $\vec{F}_2$ đồng quy tạo với nhau góc $\alpha$ được tính bằng quy tắc hình bình hành:
$$ \vec{F}_{hl} = \vec{F}_1 + \vec{F}_2 $$
Độ lớn hợp lực:
$$ F = \sqrt{F_1^2 + F_2^2 + 2F_1F_2\cos\alpha} $$
- Nếu $\alpha = 0^\circ$ (cùng chiều): $F = F_1 + F_2$
- Nếu $\alpha = 180^\circ$ (ngược chiều): $F = |F_1 - F_2|$
- Nếu $\alpha = 90^\circ$ (vuông góc): $F = \sqrt{F_1^2 + F_2^2}$

Phân tích lực là phép thay thế một lực thành hai hay nhiều lực thành phần có tác dụng giống hệt như lực đó.

```text
       F1
      ^
     /|
    / |
   /  |  F_resultant
  /   |
 /    |
+-----> F2
```

#### Định luật 1 Newton (Quán tính - Inertia - Bài 14)
Nội dung: "Nếu một vật không chịu tác dụng của lực nào hoặc chịu tác dụng của các lực có hợp lực bằng không, thì vật đang đứng yên sẽ tiếp tục đứng yên, đang chuyển động thẳng đều sẽ tiếp tục chuyển động thẳng đều."
$$ \sum \vec{F} = 0 \Rightarrow \vec{a} = 0 \Rightarrow \vec{v} = \text{const} $$
- **Quán tính** là tính chất bảo toàn vận tốc của vật. Mọi vật đều có quán tính. Khối lượng là số đo mức quán tính của vật.
- **Hệ quy chiếu quán tính**: Là hệ quy chiếu trong đó Định luật 1 Newton nghiệm đúng (thường gắn với Trái Đất hoặc vật chuyển động thẳng đều so với Trái Đất).

#### Định luật 2 Newton (Phương trình động lực học - Bài 15)
Nội dung: "Gia tốc của một vật cùng hướng với lực tác dụng lên vật. Độ lớn của gia tốc tỉ lệ thuận với độ lớn của lực và tỉ lệ nghịch với khối lượng của vật."
$$ \vec{a} = \frac{\sum \vec{F}}{m} \iff \sum \vec{F} = m\vec{a} $$
- Biểu thức này thiết lập mối quan hệ cơ bản nhất trong cơ học cổ điển.
- Trong hệ SI, $1 \text{ N}$ là lực truyền cho vật có khối lượng $1 \text{ kg}$ gia tốc $1 \text{ m/s}^2$. $1 \text{ N} = 1 \text{ kg} \cdot \text{m/s}^2$.
- Dạng vi phân tổng quát: $\vec{F} = \frac{d\vec{p}}{dt}$ (Lực bằng tốc độ biến thiên động lượng).

#### Định luật 3 Newton (Lực và Phản lực - Bài 16)
Nội dung: "Trong mọi trường hợp, khi vật A tác dụng lên vật B một lực, thì vật B cũng tác dụng lại vật A một lực. Hai lực này có cùng giá, cùng độ lớn, nhưng ngược chiều."
$$ \vec{F}_{AB} = -\vec{F}_{BA} $$
- **Đặc điểm của lực và phản lực**:
  1. Luôn xuất hiện và mất đi đồng thời.
  2. Là hai lực cùng bản chất (ví dụ cùng là lực hấp dẫn, hoặc cùng là lực đàn hồi).
  3. Không cân bằng nhau vì chúng đặt vào hai vật khác nhau.

### 5.3. Các Lực Cơ Học Thường Gặp (Common Mechanical Forces)
Để giải các bài toán động lực học, cần nhận biết chính xác các lực tác dụng lên vật:
1. **Trọng lực (Gravity - $\vec{P}$)**: Lực hấp dẫn của Trái Đất tác dụng lên vật. Có phương thẳng đứng, chiều hướng xuống trung tâm Trái Đất. Độ lớn: $P = mg$.
2. **Lực ma sát (Friction - $\vec{F}_{ms}$)**: Lực cản trở chuyển động, xuất hiện tại mặt tiếp xúc.
   - **Ma sát nghỉ (Static friction)**: Giữ vật đứng yên, $F_{msn} \le \mu_n N$ (với $\mu_n$ là hệ số ma sát nghỉ, $N$ là phản lực pháp tuyến).
   - **Ma sát trượt (Kinetic friction)**: Xuất hiện khi vật trượt, $F_{mst} = \mu_t N$. Luôn ngược chiều chuyển động.
3. **Phản lực pháp tuyến (Normal force - $\vec{N}$)**: Lực đẩy do bề mặt tiếp xúc tác dụng lên vật, phương vuông góc với bề mặt, chiều hướng ra ngoài bề mặt.
4. **Lực căng dây (Tension - $\vec{T}$)**: Lực truyền qua một sợi dây khi bị kéo căng. Phương dọc theo sợi dây, chiều hướng từ vật về phía giữa sợi dây. Dây lý tưởng thì lực căng như nhau tại mọi điểm.

---

## 6. Bài Tập Mẫu Chi Tiết (Detailed Worked Numerical Examples)

### Ví dụ 1 (Ném xiên nâng cao / Advanced Projectile):
Một quả đại bác được bắn từ mặt đất với vận tốc ban đầu $v_0 = 50 \text{ m/s}$ hợp với phương ngang một góc $\theta = 37^\circ$. Bỏ qua sức cản của không khí. Lấy $g = 9.8 \text{ m/s}^2$, $\sin 37^\circ \approx 0.6$, $\cos 37^\circ \approx 0.8$.
**Yêu cầu:**
a) Tính thời gian quả đạn bay trong không trung.
b) Tính tầm bay xa của đạn.
c) Tính độ cao của viên đạn tại thời điểm $t = 2 \text{ s}$.
d) Tính độ lớn vận tốc của đạn tại $t = 2 \text{ s}$.

**Giải (Solution):**
a) Thành phần vận tốc ban đầu:
- $v_{0x} = v_0 \cos 37^\circ = 50 \times 0.8 = 40 \text{ m/s}$.
- $v_{0y} = v_0 \sin 37^\circ = 50 \times 0.6 = 30 \text{ m/s}$.
Thời gian bay:
$$ T = \frac{2v_{0y}}{g} = \frac{2 \times 30}{9.8} \approx 6.12 \text{ s} $$

b) Tầm xa:
$$ R = v_{0x} \times T = 40 \times 6.12 = 244.8 \text{ m} $$

c) Toạ độ $y$ tại $t = 2 \text{ s}$:
$$ y(t) = v_{0y}t - \frac{1}{2}gt^2 = 30(2) - \frac{1}{2}(9.8)(2^2) = 60 - 19.6 = 40.4 \text{ m} $$

d) Vận tốc tại $t = 2 \text{ s}$:
- $v_x = v_{0x} = 40 \text{ m/s}$ (không đổi)
- $v_y = v_{0y} - gt = 30 - 9.8(2) = 30 - 19.6 = 10.4 \text{ m/s}$
Độ lớn vận tốc:
$$ v = \sqrt{v_x^2 + v_y^2} = \sqrt{40^2 + 10.4^2} = \sqrt{1600 + 108.16} = \sqrt{1708.16} \approx 41.33 \text{ m/s} $$

### Ví dụ 2 (Động lực học mặt phẳng nghiêng / Inclined Plane Dynamics):
Một vật khối lượng $m = 5 \text{ kg}$ trượt từ đỉnh một mặt phẳng nghiêng góc $\alpha = 30^\circ$ so với phương ngang. Chiều dài mặt nghiêng là $s = 10 \text{ m}$. Hệ số ma sát trượt giữa vật và mặt nghiêng là $\mu_t = 0.2$. Lấy $g = 10 \text{ m/s}^2$. Ban đầu vật đứng yên ở đỉnh dốc.
Tính:
a) Gia tốc của vật.
b) Thời gian vật trượt hết mặt nghiêng.
c) Vận tốc của vật ở chân dốc.

**Giải (Solution):**
a) Phân tích lực tác dụng lên vật:
- Trọng lực $\vec{P}$ phân tích thành 2 thành phần: $P_x = mg\sin\alpha$ (trượt) và $P_y = mg\cos\alpha$ (ép lên mặt phẳng).
- Phản lực $\vec{N}$ từ mặt phẳng lên vật: $N = P_y = mg\cos\alpha$.
- Lực ma sát $\vec{F}_{ms}$ hướng ngược chiều chuyển động: $F_{ms} = \mu_t N = \mu_t mg\cos\alpha$.

Áp dụng định luật II Newton (chiếu lên phương song song với mặt nghiêng, chiều dương hướng xuống):
$$ \sum F = P_x - F_{ms} = ma $$
$$ mg\sin\alpha - \mu_t mg\cos\alpha = ma $$
Rút gọn $m$:
$$ a = g(\sin\alpha - \mu_t\cos\alpha) $$
Thay số ($\sin 30^\circ = 0.5$, $\cos 30^\circ \approx 0.866$):
$$ a = 10(0.5 - 0.2 \times 0.866) = 10(0.5 - 0.1732) = 10(0.3268) = 3.268 \text{ m/s}^2 $$

b) Thời gian trượt hết dốc (áp dụng $s = v_0 t + \frac{1}{2}at^2$, $v_0=0$):
$$ s = \frac{1}{2}at^2 \Rightarrow t = \sqrt{\frac{2s}{a}} = \sqrt{\frac{2 \times 10}{3.268}} = \sqrt{\frac{20}{3.268}} \approx \sqrt{6.12} \approx 2.47 \text{ s} $$

c) Vận tốc tại chân dốc:
$$ v = at = 3.268 \times 2.47 \approx 8.07 \text{ m/s} $$
(Có thể dùng công thức độc lập: $v = \sqrt{2as} = \sqrt{2 \times 3.268 \times 10} \approx \sqrt{65.36} \approx 8.08 \text{ m/s}$)

### Ví dụ 3 (Hệ vật qua ròng rọc / Atwood Machine variation):
Cho hệ thống gồm hai vật: vật $m_1 = 3 \text{ kg}$ nằm trên mặt bàn nằm ngang nhẵn (bỏ qua ma sát), vật $m_2 = 2 \text{ kg}$ treo lơ lửng nhờ một sợi dây vắt qua ròng rọc cố định. Dây không dãn, ròng rọc không khối lượng. Lấy $g = 9.8 \text{ m/s}^2$. Tính gia tốc của hệ và lực căng dây.

**Giải (Solution):**
- Vật $m_1$ chịu tác dụng của lực căng dây $\vec{T}_1$ theo phương ngang. $\Rightarrow T_1 = m_1 a$
- Vật $m_2$ chịu tác dụng của trọng lực $\vec{P}_2$ và lực căng dây $\vec{T}_2$ hướng lên. $\Rightarrow P_2 - T_2 = m_2 a$
Vì dây không dãn, không khối lượng: $T_1 = T_2 = T$.
Cộng hai phương trình:
$$ P_2 - T + T = m_2 a + m_1 a \Rightarrow P_2 = (m_1 + m_2)a $$
$$ \Rightarrow a = \frac{m_2 g}{m_1 + m_2} = \frac{2 \times 9.8}{3 + 2} = \frac{19.6}{5} = 3.92 \text{ m/s}^2 $$
Lực căng dây $T$:
$$ T = m_1 a = 3 \times 3.92 = 11.76 \text{ N} $$

---

## 7. Thực Hành Chuyên Sâu: Kiểm Chứng Định Luật II Newton Bằng Băng Đệm Khí (Deep Lab Analysis)

### Mục đích (Purpose)
Kiểm tra mối quan hệ: $a \propto F$ (khi $m$ không đổi) và $a \propto \frac{1}{m}$ (khi $F$ không đổi). Học sinh sẽ thực hành đánh giá sai số hệ thống và sai số ngẫu nhiên.

### Bố trí thí nghiệm (Setup)
Sử dụng băng đệm khí (Air track) để loại bỏ ma sát tới mức tối đa, giúp định luật II Newton thể hiện rõ rệt nhất.
1. Đặt xe đẩy khối lượng $m_1$ (cùng lá cản quang) trên băng đệm khí phẳng ngang.
2. Bơm không khí hoạt động tạo đệm khí, xe lướt hầu như không ma sát.
3. Nối xe đẩy với quả nặng khối lượng $m_2$ qua ròng rọc siêu nhẹ bằng một sợi dây không dãn.
4. Lắp hai cổng quang học cách nhau một khoảng $\Delta s$ để đo thời gian $\Delta t$ lá cản quang đi qua từng cổng, từ đó máy tính tính được vận tốc $v_1, v_2$ và gia tốc $a = \frac{v_2^2 - v_1^2}{2\Delta s}$.

```text
  [ Xe (m1) ] -------- (Dây) --------- (Ròng rọc)
  (Băng đệm khí)                           |
                                           |
                                         [m2] (Quả nặng)
```

### Động lực học của hệ (System Dynamics)
Theo bài toán hệ vật:
- Gia tốc lý thuyết: $a_{lt} = \frac{m_2 g}{m_1 + m_2}$
- Lực kéo tác dụng lên hệ: $F = m_2 g$
- Khối lượng tổng cộng: $M = m_1 + m_2$

### Các bước tiến hành (Procedure) & Thu thập dữ liệu (Data Collection)

**Phần 1: Khảo sát $a$ phụ thuộc vào $F$ (Giữ $M = m_1 + m_2$ không đổi)**
1. Chọn tổng khối lượng $M = \text{const}$. Ta sẽ chuyển dần các gia trọng nhỏ ($10\text{g}$) từ xe $m_1$ sang quả nặng treo $m_2$. Khi đó $m_2$ tăng (lực $F$ tăng) nhưng $M$ không đổi.
2. Ở mỗi mức $m_2$, thả xe và ghi nhận gia tốc $a$ từ đồng hồ đo thời gian hiện số.
3. Đo 3 lần ở mỗi mức để lấy $a$ trung bình.
4. Vẽ đồ thị $a$ (trục tung) theo $F = m_2g$ (trục hoành).
*Kỳ vọng:* Đồ thị là một đường thẳng đi qua gốc toạ độ, hệ số góc (slope) chính bằng $\frac{1}{M}$.

**Phần 2: Khảo sát $a$ phụ thuộc vào $m$ (Giữ $F$ không đổi)**
1. Giữ nguyên $m_2$ (ví dụ $m_2 = 50\text{g}$).
2. Lần lượt chất thêm các gia trọng lên xe đẩy để tăng $m_1$ (làm tăng tổng khối lượng $M$).
3. Thả xe và ghi lại gia tốc $a$ cho mỗi trường hợp.
4. Vẽ đồ thị $a$ (trục tung) theo $\frac{1}{M}$ (trục hoành).
*Kỳ vọng:* Đồ thị là một đường thẳng đi qua gốc toạ độ, hệ số góc bằng $F$.

### Phân tích sai số (Error Analysis)
- **Sai số hệ thống (Systematic Error)**:
  - Băng đệm khí có thể chưa thực sự thăng bằng. Khắc phục: chỉnh các vít chân đế sao cho xe đứng yên không trượt khi không có $m_2$.
  - Khối lượng của dây treo và quán tính ròng rọc bị bỏ qua trong lý thuyết nhưng thực tế có tồn tại, làm cho gia tốc đo được thường nhỏ hơn một chút so với lý thuyết.
  - Ma sát dù nhỏ nhưng không phải hoàn toàn bằng không.
- **Sai số ngẫu nhiên (Random Error)**: Do độ nhạy của cổng quang học và dao động nhẹ của quả nặng khi thả. Dùng phương pháp đo nhiều lần (ví dụ $n=3$ đến $n=5$) và lấy giá trị trung bình $\bar{a}$, tính độ lệch chuẩn (standard deviation) để vẽ error bars trên đồ thị.

---

## 8. Lập Trình Python: Mô Phỏng Quỹ Đạo Ném Xiên Nâng Cao (Advanced Python Simulation)

Đoạn code sau mô phỏng quỹ đạo ném xiên và cho phép so sánh nhiều góc ném khác nhau cùng lúc.

```python
import numpy as np
import matplotlib.pyplot as plt

def plot_multiple_trajectories(v0=20.0, angles_deg=[30, 45, 60, 75]):
    """
    Mô phỏng quỹ đạo ném xiên với nhiều góc khác nhau để so sánh.
    v0: Vận tốc ban đầu (m/s)
    angles_deg: Danh sách các góc ném (độ)
    """
    g = 9.81
    
    plt.figure(figsize=(12, 6))
    colors = ['blue', 'green', 'red', 'purple', 'orange']
    
    max_x = 0
    max_y = 0
    
    for i, angle in enumerate(angles_deg):
        theta = np.radians(angle)
        
        # Calculate flight time
        T = (2 * v0 * np.sin(theta)) / g
        t = np.linspace(0, T, num=200)
        
        # Equations of motion
        x = v0 * np.cos(theta) * t
        y = v0 * np.sin(theta) * t - 0.5 * g * t**2
        
        # Max metrics
        R = (v0**2 * np.sin(2*theta)) / g
        H = (v0**2 * (np.sin(theta)**2)) / (2*g)
        
        max_x = max(max_x, R)
        max_y = max(max_y, H)
        
        color = colors[i % len(colors)]
        plt.plot(x, y, label=f'{angle}° (R={R:.1f}m, H={H:.1f}m)', color=color, linewidth=2)
        
        # Đánh dấu điểm cao nhất
        x_H = v0 * np.cos(theta) * (T/2)
        plt.plot(x_H, H, marker='^', color=color)
        
        # Đánh dấu điểm rơi
        plt.plot(R, 0, marker='o', color=color)

    plt.axhline(0, color='black', lw=1.5)
    plt.title(f"Mô Phỏng Chuyển Động Ném Xiên Cùng Vận Tốc $v_0 = {v0}$ m/s")
    plt.xlabel("Tầm xa (Distance) x (m)")
    plt.ylabel("Độ cao (Height) y (m)")
    plt.ylim(0, max_y * 1.2)
    plt.xlim(0, max_x * 1.1)
    plt.legend(loc='upper right')
    plt.grid(True, linestyle='--', alpha=0.7)
    
    # Hiển thị
    plt.show()

# Chạy thử nghiệm với các góc bổ sung
# plot_multiple_trajectories(v0=25, angles_deg=[15, 30, 45, 60, 75])
```
*Nhận xét:* Chạy đoạn code trên sẽ thấy rõ góc $45^\circ$ cho tầm xa cực đại. Đặc biệt, các góc phụ nhau (vd: $30^\circ$ và $60^\circ$, hoặc $15^\circ$ và $75^\circ$) sẽ cho cùng một tầm xa $R$ (do $\sin(2(90-\alpha)) = \sin(180 - 2\alpha) = \sin(2\alpha)$), nhưng độ cao $H$ và thời gian bay $T$ hoàn toàn khác nhau.

---

## 9. Câu Hỏi Thảo Luận Mở Rộng (Extended Discussion Questions)

1. **(VI)** Tại sao góc ném $45^\circ$ lại cho tầm xa lớn nhất trong điều kiện không có lực cản? Các môn thể thao như đẩy tạ, ném lao thực tế lại có góc ném tối ưu nhỏ hơn $45^\circ$ (khoảng $35^\circ-40^\circ$). Vì sao?
   **(EN)** Why does a $45^\circ$ angle yield maximum range in a vacuum? In sports like shot put or javelin, the optimal angle is actually less than $45^\circ$ (around $35^\circ-40^\circ$). Why?
   *Hint: Trong thể thao, điểm ném (tay người) thường cao hơn mặt đất, do đó công thức $R$ đơn giản không còn đúng hoàn toàn. Hơn nữa sức cản không khí và cấu tạo cơ sinh học của tay cũng ảnh hưởng.*

2. **(VI)** Bạn đứng trong một thang máy đang rơi tự do, tay cầm một quả táo. Nếu bạn buông tay, quả táo sẽ như thế nào so với bạn?
   **(EN)** You are in a freely falling elevator holding an apple. If you let go, what happens to the apple relative to you?
   *Hint: Cả bạn, thang máy và quả táo đều đang rơi tự do với gia tốc $g$. Do đó, đối với bạn, quả táo sẽ lơ lửng ngay tại chỗ bạn buông tay. Đây là trạng thái không trọng lượng biểu kiến.*

3. **(VI)** Làm thế nào tên lửa có thể tăng tốc trong không gian vũ trụ khi không có không khí để nó "đẩy" vào?
   **(EN)** How can a rocket accelerate in outer space where there is no air for it to "push" against?
   *Hint: Định luật 3 Newton. Tên lửa phun khí nhiên liệu cháy về phía sau. Khí bị đẩy ra sau sẽ tác dụng một lực phản lực bằng và ngược chiều lên tên lửa, đẩy tên lửa tiến về phía trước.*

4. **(VI)** Khi xe buýt phanh gấp, hành khách bị chúi về phía trước. Điều này minh họa cho định luật nào? Giải thích chi tiết theo hệ quy chiếu quán tính và phi quán tính.
   **(EN)** When a bus brakes suddenly, passengers lurch forward. Which law does this illustrate? Explain in terms of inertial and non-inertial frames.
   *Hint: Hệ QC gắn mặt đất (quán tính): ĐL 1 Newton, phần dưới dừng lại do ma sát, phần trên theo quán tính đi tiếp. Hệ QC gắn với xe (phi quán tính): Xuất hiện lực quán tính $F_{qt} = -ma$ hướng tới trước kéo hành khách ngã.*

5. **(VI)** Khi đi xe đạp vòng quanh khúc cua, tại sao người đi xe đạp phải nghiêng người vào trong? Lực nào đóng vai trò hướng tâm?
   **(EN)** When turning a corner on a bicycle, why must the cyclist lean inward? What force provides the centripetal force?
   *Hint: Phản lực từ mặt đất và lực ma sát. Lực ma sát tĩnh đóng vai trò là lực hướng tâm, còn nghiêng người giúp tạo mô-men lực cân bằng để không bị ngã.*

---

## 10. Bài Tập Về Nhà Nâng Cao (Advanced Homework & Practice Problems)

**Bài 1 (Ném đa mục tiêu):** Một cung thủ đứng trên vách đá cao 50m so với mặt đất phẳng. Anh ta bắn một mũi tên với vận tốc ban đầu 60 m/s với góc hướng lên $20^\circ$ so với phương ngang. Bỏ qua sức cản không khí. $g = 9.8 m/s^2$.
a) Tìm độ cao cực đại của mũi tên so với mặt đất.
b) Tính khoảng cách từ chân vách đá đến điểm mũi tên cắm xuống đất.
c) Tìm vận tốc mũi tên ngay trước khi chạm đất.
*Hướng dẫn: Chọn gốc toạ độ ở chân vách đá. Phương trình toạ độ: $y(t) = y_0 + v_{0y}t - \frac{1}{2}gt^2$ với $y_0 = 50$.*

**Bài 2 (Hệ 3 vật liên kết):** Ba vật $m_1 = 1\text{kg}, m_2 = 2\text{kg}, m_3 = 3\text{kg}$ được nối với nhau bằng hai sợi dây không dãn, đặt trên mặt bàn nằm ngang nhẵn. Tác dụng một lực kéo ngang $F = 18\text{N}$ vào vật $m_3$.
a) Tính gia tốc của toàn hệ.
b) Tính lực căng dây nối giữa $m_1$ và $m_2$, giữa $m_2$ và $m_3$.
*Đáp án dự kiến: $a = 3 m/s^2$; $T_{12} = 3\text{N}, T_{23} = 9\text{N}$.*

**Bài 3 (Mặt phẳng nghiêng có ròng rọc):** Một mặt phẳng nghiêng góc $30^\circ$ so với phương ngang. Vật $m_1 = 4\text{kg}$ nằm trên mặt nghiêng, được nối với vật $m_2 = 3\text{kg}$ (treo thẳng đứng) qua ròng rọc trên đỉnh dốc. Hệ số ma sát trượt giữa $m_1$ và mặt dốc là $\mu = 0.1$. Bỏ qua khối lượng dây và ròng rọc. Hệ được thả từ trạng thái nghỉ. Hỏi hệ chuyển động theo chiều nào và với gia tốc bao nhiêu? ($g = 10 m/s^2$).
*Hướng dẫn: Giả sử $m_2$ đi xuống. $P_2 = 30\text{N}$. Thành phần kéo xuống dốc của $m_1$: $P_{1x} = 40 \times \sin(30^\circ) = 20\text{N}$. Lực ma sát cực đại: $F_{ms} = 0.1 \times 40 \times \cos(30^\circ) \approx 3.46\text{N}$. Vì $30\text{N} > 20\text{N} + 3.46\text{N}$, $m_2$ sẽ đi xuống. Thiết lập hệ PT ĐL 2 Newton để giải $a$.*

**Bài 4 (Lập trình mô phỏng tương tác):** Mở rộng bài tập Python. Sử dụng thư viện `ipywidgets` để tạo các thanh trượt (slider) cho phép người dùng thay đổi $v_0, \alpha$ và độ cao ban đầu $h_0$, xem quỹ đạo cập nhật thời gian thực.
*Mở rộng: Cố gắng tích hợp lực cản không khí dạng $F_c = -k v$ vào mô phỏng bằng phương pháp Euler.*

---

## 11. Bảng Tiêu Chí Đánh Giá Nâng Cao (Advanced Assessment Rubric Table)

Tổng điểm: **100 điểm** (100-point scale).

| Tiêu chí (Criteria) | Mô tả chi tiết (Description) | Điểm tối đa (Max Points) |
|---------------------|------------------------------|--------------------------|
| **Lý thuyết & Thảo luận (Theory & Discussion)** | Nắm vững bản chất vật lý, tham gia thảo luận sâu, giải thích được các hiện tượng bằng hệ quy chiếu. | 25 |
| **Giải bài tập (Problem Solving)** | Trình bày chặt chẽ logic toán lý. Vẽ giản đồ vector lực (Free Body Diagram) chuẩn xác. Tính toán có đơn vị đầy đủ. | 30 |
| **Thực hành Lab (Lab Execution)** | Cân bằng băng đệm khí chính xác, thu thập và xử lý số liệu bằng Excel hoặc phần mềm. | 20 |
| **Báo cáo thí nghiệm (Lab Report)** | Phân tích được sai số (Error Analysis), lý giải sự khác biệt giữa lý thuyết và thực nghiệm. Biểu diễn đồ thị chuẩn. | 15 |
| **Lập trình mô phỏng (Python Simulation)** | Chạy thành công mã, tối ưu hóa hiển thị, có khả năng giải thích ý nghĩa các dòng code liên quan vật lý. | 10 |

---

## 12. Phụ Lục Thuật Ngữ (Glossary of Terms)

- **Gia tốc (Acceleration)**: Đại lượng vectơ đặc trưng cho sự thay đổi vận tốc theo thời gian.
- **Hợp lực (Resultant Force)**: Lực tổng hợp tác dụng lên một vật, có tác dụng tương đương với hệ các lực thành phần.
- **Quán tính (Inertia)**: Xu hướng bảo toàn trạng thái chuyển động của một vật.
- **Hệ quy chiếu (Reference Frame)**: Hệ thống gồm hệ trục toạ độ và đồng hồ dùng để xác định vị trí và thời gian của vật chuyển động.
- **Lực ma sát (Friction)**: Lực cản trở chuyển động tương đối giữa hai bề mặt tiếp xúc.
- **Lực hướng tâm (Centripetal Force)**: Lực giữ cho vật chuyển động theo quỹ đạo tròn.
- **Tầm xa (Range)**: Khoảng cách theo phương ngang từ điểm ném đến điểm rơi của vật.

---
*Biên soạn và nâng cấp bởi chuyên gia giáo dục STEM - Physics Curriculum Team. (2026)*

# 🏆 Dự Án Cuối Khóa Capstone STEM — Vật Lí 11 KNTT
# *Capstone STEM Project Guide — Physics 11 KNTT Course*

---

## 🎯 Tổng Quan Dự Án Capstone

Vào Tuần 10 (Buổi 20 - DEMO DAY), học viên sẽ làm việc theo nhóm 3–4 người để hoàn thành và báo cáo 1 trong 3 Dự án STEM Capstone ứng dụng tổng hợp kiến thức từ 4 Chương SGK Vật lí 11 (Dao động, Sóng, Điện trường, Dòng điện & Mạch điện).

---

## 🚀 3 Track Lựa Chọn Dự Án (3 Project Tracks)

### Track A — 🔊 Định Vị Khoảng Cách Bằng Sóng Âm & Phân Tích Tần Số (Acoustic Sonar & Audio Spectrum Analyzer)
- **Nhiệm vụ:** Thiết kế hệ thống đo khoảng cách hoặc phân tích tần số âm thanh từ nhạc cụ / giọng nói.
- **Ứng dụng kiến thức:** 
  - Bài 7–9 (Truyền sóng & Đặc trưng sóng), Bài 12–13 (Sóng âm & Xác định tần số).
- **Yêu cầu kĩ thuật:**
  - Thu âm bằng smartphone / microphone máy tính.
  - Viết Python script thực hiện FFT (Fast Fourier Transform) xác định nốt nhạc và tần số sóng hài cơ bản $f_0$.
  - Trực quan hóa phổ âm thanh thời gian thực.

---

### Track B — ⚡ Thiết Bị Đo & Chẩn Đoán Mạch Điện Thông Minh (Smart Circuit Diagnostic Tool)
- **Nhiệm vụ:** Chế tạo thiết bị tự động đo suất điện động $\mathcal{E}$, điện trở trong $r$ của pin hoặc đo dung lượng tụ điện $C$.
- **Ứng dụng kiến thức:**
  - Bài 18 (Tụ điện & Hằng số thời gian $\tau=RC$), Bài 22 (Định luật Ohm), Bài 25 (Thực hành đo EMF & $r$).
- **Yêu cầu kĩ thuật:**
  - Sử dụng mạch vi điều khiển (Arduino / ESP32 / Micro:bit) hoặc mạch đo Volt-Ampe tự động.
  - Thu thập dữ liệu $U(t)$ hoặc $U-I$, truyền qua cổng Serial về máy tính.
  - Viết Python script vẽ đường đặc tuyến $U-I$ và đường nạp/xả tụ điện, tự động xuất ra giá trị $\mathcal{E}, r, C$.

---

### Track C — 💻 Bộ Phần Mềm Mô Phỏng Vật Lí 11 Tương Tác (Interactive Physics 11 Simulation Suite)
- **Nhiệm vụ:** Lập trình bộ phần mềm mô phỏng đồ họa tương tác cho các bài toán Vật lí 11.
- **Ứng dụng kiến thức:**
  - Tổng hợp 4 Chương Vật lí 11 (Mô phỏng Dao động điều hòa/Cộng hưởng, Giao thoa sóng 2D, Đường sức điện trường 2D của đa điện tích).
- **Yêu cầu kĩ thuật:**
  - Giao diện trực quan (Tkinter / Pygame / Matplotlib Widgets).
  - Cho phép người dùng tùy chỉnh tham số ($A, f, \varphi, q_1, q_2, d$).
  - Hiện chuyển động trực quan và vẽ đồ thị thời gian thực.

---

## 📊 Rubric Đánh Giá Dự Án (Tổng 100 Điểm)

| Tiêu chí | Điểm tối đa | Mô tả chi tiết |
|----------|-------------|----------------|
| **Vận dụng Lý thuyết Vật lí** | 30 | Áp dụng chính xác lý thuyết Dao động, Sóng, Điện trường, Định luật Ohm. |
| **Kĩ năng Thí nghiệm & Sản phẩm** | 25 | Sản phẩm hoạt động ổn định, đo đạc số liệu tin cậy, mạch điện an toàn. |
| **Mô phỏng Python & Xử lý số liệu** | 20 | Code Python mô phỏng/phân tích dữ liệu chính xác, có đồ thị trực quan. |
| **Báo cáo & Thuyết trình** | 15 | Slide báo cáo chuyên nghiệp, trình bày rõ ràng, giải thích được bản chất hiện tượng. |
| **Làm việc nhóm & Đột phá STEM** | 10 | Phân công công việc hiệu quả, có sáng tạo trong giải pháp kĩ thuật. |

---

*🌊 Physics 11 KNTT Capstone Project Guide · 07/2026*

# 💻 Hướng Dẫn Cài Đặt & Sử Dụng Phần Mềm Python Mô Phỏng Vật Lí 11
# *Software Setup & Python Simulation Guide — Physics 11 KNTT Course*

---

## 🐍 1. Cài Đặt Môi Trường Python & Thư Viện

### Bước 1: Tải & Cài Đặt Python 3.10+
- Tải tại: [python.org/downloads](https://www.python.org/downloads/)
- Tích chọn vào ô **"Add Python to PATH"** khi cài đặt.

### Bước 2: Cài Đặt Các Thư Viện Mô Phỏng & Xử Lý Âm Thanh
Mở Terminal / Command Prompt và chạy lệnh:

```bash
pip install numpy matplotlib scipy pandas sounddevice
```

---

## 📊 2. Các Thư Viện Python Sử Dụng Trong Khóa Học Vật Lí 11

| Thư viện | Tác dụng trong Vật lí 11 |
|----------|--------------------------|
| **NumPy** | Tính toán mảng dữ liệu dao động, sóng cơ, ma trận điện trường, hàm điều hòa |
| **SciPy** | Giải phương trình vi phân dao động tắt dần/cưỡng bức, biến đổi Fourier **FFT** phân tích âm thanh, curve fit |
| **Matplotlib** | Vẽ đồ thị $x(t), v(t), a(t)$, hình ảnh giao thoa sóng 2D, vectơ điện trường $\vec{E}$, đồ thị nạp tụ $RC$ |
| **Sounddevice** | Thu âm tín hiệu âm thanh trực tiếp từ Microphone máy tính để phân tích phổ tần số |

---

## 📱 3. Ứng Dụng Smartphone Phyphox

- Tải ứng dụng **Phyphox** (Physical Phone Experiments) miễn phí trên iOS App Store / Google Play Store.
- Sử dụng công cụ **Audio Spectrum** (Phân tích phổ âm thanh) và **Pendulum** (Đo chu kỳ con lắc) cho các bài thực hành Bài 3, 6, 13.

---

## 🧪 4. Hướng Dẫn Chạy Bộ Code `physics_toolkit_11.py`

File mã nguồn chính lưu tại: `courses/physics-11-kntt/code/python/physics_toolkit_11.py`

Cách chạy:
```bash
cd /Users/dangvietchung/Science/courses/physics-11-kntt/code/python
python physics_toolkit_11.py
```

---

*🌊 Physics 11 KNTT Software Guide · 07/2026*

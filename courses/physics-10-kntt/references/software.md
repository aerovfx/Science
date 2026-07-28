# 💻 Hướng Dẫn Cài Đặt & Sử Dụng Phần Mềm Python Mô Phỏng Vật Lí
# *Software Setup & Python Simulation Guide — Physics 10 KNTT Course*

---

## 🐍 1. Cài Đặt Môi Trường Python

### Bước 1: Tải & Cài Đặt Python
- Tải Python 3.10 trở lên tại: [python.org/downloads](https://www.python.org/downloads/)
- Trong quá trình cài đặt trên Windows, **tích chọn vào ô "Add Python to PATH"**.

### Bước 2: Cài Đặt Các Thư Viện Mô Phỏng Vật Lí
Mở Terminal (macOS/Linux) hoặc Command Prompt / PowerShell (Windows) và chạy lệnh:

```bash
pip install numpy matplotlib scipy pandas
```

---

## 📊 2. Các Thư Viện Python Sử Dụng Trong Khóa Học

| Thư viện | Tác dụng trong Vật lí 10 |
|----------|--------------------------|
| **NumPy** | Xử lý mảng dữ liệu đo, tính giá trị trung bình $\bar{A}$, độ lệch chuẩn, sai số |
| **SciPy** | Giải phương trình vi phân chuyển động (rơi có lực cản, quỹ đạo ném), curve fitting tìm $g$ |
| **Matplotlib** | Vẽ đồ thị $d-t, v-t, a-t$, quỹ đạo ném xiên 2D, đồ thị $p-V$ chất khí |
| **Pandas** | Quản lý và xuất bảng dữ liệu thí nghiệm ra file CSV / Excel |

---

## 🧪 3. Hướng Dẫn Chạy Bộ Code `physics_toolkit.py`

File mã nguồn chính lưu tại: `courses/physics-10-kntt/code/python/physics_toolkit.py`

Để chạy mô phỏng:
```bash
cd /Users/dangvietchung/Science/courses/physics-10-kntt/code/python
python physics_toolkit.py
```

---

*🔭 Physics 10 KNTT Software Guide · 07/2026*

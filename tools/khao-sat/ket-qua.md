# 📋 Kết Quả Khảo Sát STEM

> File này được tạo tự động sau khi học viên nộp form tại `index.html`.  
> *This file is auto-generated after student submits the survey form.*

---

## Hướng dẫn tích hợp với Git / Git Integration Guide

Khi học viên nộp form và copy markdown từ trang kết quả, nội dung sẽ có định dạng:

```markdown
# 📋 Kết quả Khảo sát STEM

**Họ tên:** Nguyễn Văn A  
**Trường:** THCS Nguyễn Trãi  
**Khối lớp:** Lớp 8  
**Thời gian nộp:** 16/7/2026, 09:30:00  

## 📚 Trải nghiệm học tập
- **Buổi đã học:** 24/36
- **Phần thích nhất:** Robot & Servo, Cảm biến

## ⭐ Đánh giá
- **Tổng thể:** ★★★★☆ (4/5)
- **Độ khó:** Vừa phải
- **Giới thiệu:** Chắc chắn có

## 🎯 Kỹ năng
- **Mức cải thiện:** 80%
- **Kỹ năng nổi bật:** Lập trình, Tư duy giải quyết vấn đề

## 💬 Phản hồi
**Điều thích nhất:**  
> Tôi thích nhất phần làm robot tránh vật cản

**Cần cải thiện:**  
> Cần thêm bài tập về MicroPython

**Muốn học thêm:** AI, Computer Vision

---
*Tạo tự động từ khảo-sat/index.html*
```

---

## 📊 Tổng hợp phản hồi (template)

| STT | Họ tên | Lớp | Đánh giá | Buổi học | Ngày nộp |
|-----|--------|-----|---------|---------|---------|
| 1 | — | — | — | — | — |
| 2 | — | — | — | — | — |

*Cập nhật thủ công hoặc qua GitHub Actions workflow.*

---

## ☁️ Lưu dữ liệu tập trung (Google Sheets + Forms)

Từ nay dữ liệu không chỉ nằm trong trình duyệt: mở trang **[Kết nối dữ liệu](ket-noi.html)**,
dán URL Web App của Apps Script là mọi khảo sát / đánh giá đồng đẳng / điểm giáo viên
tự đẩy về **1 bảng tính Google Sheets (9 sheet)** và **3 Google Form** trong tài khoản
`cgsharefive@gmail.com` (thư mục [danhgia](https://drive.google.com/drive/folders/1M9C1CaUaDlde5E3BjDUEz4vtAMeBZg4X)).

Cách triển khai: [`gas/HUONG-DAN.md`](gas/HUONG-DAN.md) · Mã nguồn backend: [`gas/Code.gs`](gas/Code.gs).

## 🔗 Liên kết

- [Form khảo sát](index.html)
- [Kết nối Google Sheets & Forms](ket-noi.html)
- [Hướng dẫn triển khai backend](gas/HUONG-DAN.md)
- [GitHub Actions workflow](.github/workflows/form-to-md.yml)
- [Chương trình STEM](../stem/INDEX.md)

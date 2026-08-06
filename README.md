# 🌐 HỆ THỐNG GIÁO DỤC STEM & KHOA HỌC — SCIENCE WORKSPACE
# *Science Workspace: STEM Courses, Official Curricula, Applications & Tools*

---

## 📌 Tổng Quan Dự Án / Project Overview

Hệ thống lưu trữ và tự động hóa toàn bộ tài nguyên học liệu GDPT 2018 (Kết nối tri thức với cuộc sống), các khóa học STEM 10 tuần (Tiểu học & THCS/THPT), giáo án Kế hoạch bài dạy (Công văn 5512), 48 bài học Chuyên đề nâng cao và các ứng dụng EdTech/AI.

---

## 🗂️ Cấu Trúc Thư Mục Chuẩn Hóa / Standardized Directory Architecture

```text
/Users/dangvietchung/Science/
├── courses/                      # 🎓 11 Khóa học STEM 10 Tuần & Chuyên sâu
│   ├── math-4-kntt/              # Toán 4 KNTT (10 tuần / 48 bài)
│   ├── vietnamese-4-kntt/        # Tiếng Việt 4 KNTT (10 tuần / 18 bài)
│   ├── math-7-kntt/              # Toán 7 KNTT (10 tuần / 35 bài)
│   ├── literature-7-kntt/        # Ngữ văn 7 KNTT (10 tuần / 10 bài)
│   ├── english-7-global-success/ # Tiếng Anh 7 Global Success (10 tuần / 12 units)
│   ├── english-7-kntt -> english-7-global-success (Symlink chuẩn hóa)
│   ├── physics-10-kntt/          # Vật lí 10 KNTT (10 tuần / 35 bài)
│   ├── physics-11-kntt/          # Vật lí 11 KNTT (10 tuần / 26 bài)
│   ├── physics-12-kntt/          # Vật lí 12 KNTT (10 tuần / 25 bài + 3 CĐ)
│   ├── hydro-cfd/                # STEM Khí động học CFD trong nước
│   ├── quantum-physics/          # STEM Vật lí lượng tử
│   └── rocket-engine/            # STEM Thiết kế động cơ tên lửa
│
├── curriculum/                   # 📚 Chương Trình & Học Liệu GDPT 2018
│   ├── hoc-lieu/                 # 8 Danh mục học liệu Bộ GD&ĐT
│   │   ├── 01_CHINH_KHOA/        # Kế hoạch bài dạy CV 5512 (Vật lí 10, 11, 12)
│   │   │   ├── Vat_ly/ (grade10, grade11, grade12)
│   │   │   ├── Vat_ly_10 -> Vat_ly/grade10 (Symlink chuẩn hóa)
│   │   │   ├── Vat_ly_11 -> Vat_ly/grade11
│   │   │   └── Vat_ly_12 -> Vat_ly/grade12
│   │   ├── 02_CHUYEN_DE_VA_KHAM_PHA/ # Chuyên đề (Lớp 10, 11, 12 & Trải nghiệm)
│   │   ├── 03_STEM_MAKER/        # Tài liệu STEM Maker & Micro:bit
│   │   ├── 04_THUC_HANH_THI_NGHIEM/
│   │   ├── 05_DANH_GIA/
│   │   ├── 06_KE_HOACH_GIANG_DAY/
│   │   ├── 07_TAI_NGUYEN_VA_CONG_CU/
│   │   └── 99_KHO_NGUON_GOC/
│   └── chuyen-de/                # Kho 48 bài học Chuyên đề Vật lí nâng cao
│
├── tools/                        # 🛠️ Ứng Dụng & Công Cụ Học Tập / AI
│   ├── diy-app/                  # Web Application STEM Builder (Next.js)
│   ├── ai-workflow/              # Quy trình AI Agents & Prompt Engineering
│   ├── dataset/                  # Dữ liệu khảo sát & học liệu
│   ├── design/                   # Bản vẽ thiết kế kỹ thuật
│   └── khao-sat/                 # Biểu mẫu khảo sát GDPT
│
├── assets/                       # 🖼️ Hình ảnh & Media dùng chung
├── generate_lessons.py           # Master script sinh tự động khóa học 10 tuần
└── README.md                     # Tài liệu tổng quan dự án
```

---

## 🚀 Danh Mục Các Khóa Học 10 Tuần Đã Hoàn Thành (Completed Courses)

| Môn Học & Khóa Học | Cấu Trúc Bài Học | Đường Dẫn Thư Mục | Trạng Thái |
|-------------------|------------------|-------------------|------------|
| 📐 **Toán 4 KNTT** | 10 Tuần / 9 Chủ đề / 48 Bài | `courses/math-4-kntt/` | ✅ Hoàn thành |
| 📖 **Tiếng Việt 4 KNTT** | 10 Tuần / 18 Bài học | `courses/vietnamese-4-kntt/` | ✅ Hoàn thành |
| 📐 **Toán 7 KNTT** | 10 Tuần / 9 Chương / 35 Bài | `courses/math-7-kntt/` | ✅ Hoàn thành |
| 📖 **Ngữ văn 7 KNTT** | 10 Tuần / 10 Bài học | `courses/literature-7-kntt/` | ✅ Hoàn thành |
| 🇬🇧 **Tiếng Anh 7 Global Success** | 10 Tuần / 12 Units + 4 Reviews | `courses/english-7-global-success/` | ✅ Hoàn thành |
| 🔭 **Vật lí 10 KNTT** | 10 Tuần / 7 Chương / 35 Bài | `courses/physics-10-kntt/` | ✅ Hoàn thành |
| 🌊 **Vật lí 11 KNTT** | 10 Tuần / 4 Chương / 26 Bài | `courses/physics-11-kntt/` | `courses/physics-11-kntt/` | ✅ Hoàn thành |
| ⚛️ **Vật lí 12 KNTT** | 10 Tuần / 4 Chương / 25 Bài + 3 CĐ | `courses/physics-12-kntt/` | ✅ Hoàn thành |
| 🚀 **STEM Động Cơ Tên Lửa** | 10 Tuần / 20 Buổi | `courses/rocket-engine/` | ✅ Hoàn thành |
| 🌊 **STEM Khí Động Học CFD** | 10 Tuần / 20 Buổi | `courses/hydro-cfd/` | ✅ Hoàn thành |
| ⚛️ **STEM Vật Lý Lượng Tử** | 10 Tuần / 20 Buổi | `courses/quantum-physics/` | ✅ Hoàn thành |

---

*🌐 Science Workspace · Updated 07/2026*

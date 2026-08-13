<div align="center">

# ⚛️ Science Workspace

### Kho học liệu mở · Khóa học STEM · Khảo sát và đánh giá lớp học

[![Website](https://img.shields.io/badge/MỞ_WEBSITE-245C46?style=for-the-badge&logo=githubpages&logoColor=white)](https://aerovfx.github.io/Science/)
[![Khảo sát](https://img.shields.io/badge/KHẢO_SÁT_LỚP_HỌC-6C63FF?style=for-the-badge&logo=googleforms&logoColor=white)](https://aerovfx.github.io/Science/tools/khao-sat/portal.html)
[![Chấm điểm](https://img.shields.io/badge/QUẢN_LÝ_ĐIỂM-F59E0B?style=for-the-badge&logo=googlesheets&logoColor=white)](https://aerovfx.github.io/Science/tools/khao-sat/admin.html)

[![GitHub Pages](https://github.com/aerovfx/Science/actions/workflows/jekyll-gh-pages.yml/badge.svg)](https://github.com/aerovfx/Science/actions/workflows/jekyll-gh-pages.yml)
![Courses](https://img.shields.io/badge/khóa_học-11-245C46)
![Lessons](https://img.shields.io/badge/bài_học_theo_tuần-110-245C46)
![License](https://img.shields.io/github/license/aerovfx/Science)

**[Truy cập website](https://aerovfx.github.io/Science/)** ·
**[Xem mã nguồn](https://github.com/aerovfx/Science)** ·
**[Báo lỗi / góp ý](https://github.com/aerovfx/Science/issues)**

</div>

---

## Giới thiệu

Science Workspace là hệ thống học liệu dành cho học sinh, giáo viên và người tự học. Dự án tập hợp chương trình GDPT 2018, các khóa học STEM 10 tuần, tài liệu thực hành và công cụ khảo sát–đánh giá theo từng lớp.

Nội dung bài học được viết bằng Markdown. Website tự động tạo danh mục khóa học và hiển thị trực tiếp các file này trên GitHub Pages, vì vậy việc cập nhật học liệu không đòi hỏi sửa từng trang HTML.

## Truy cập nhanh

| Khu vực | Chức năng | Liên kết |
|---|---|---|
| 🏠 Cổng học liệu | Tìm kiếm và đọc nội dung khóa học | **[Mở website](https://aerovfx.github.io/Science/)** |
| 🧑‍🎓 Cổng lớp học | Chọn lớp, buổi học và học sinh | **[Mở STEM Portal](https://aerovfx.github.io/Science/tools/khao-sat/portal.html)** |
| 📋 Khảo sát | Thu phản hồi theo học sinh và buổi học | **[Mở khảo sát](https://aerovfx.github.io/Science/tools/khao-sat/index.html)** |
| 🤝 Đánh giá đồng đẳng | Chấm 6 tiêu chí giữa các học sinh | **[Mở đánh giá](https://aerovfx.github.io/Science/tools/khao-sat/danh-gia.html)** |
| 📊 Kết quả | Xem thống kê và kết quả đánh giá | **[Xem kết quả](https://aerovfx.github.io/Science/tools/khao-sat/ket-qua.html)** |
| 👩‍🏫 Quản lý giáo viên | Xem hồ sơ, chấm điểm, xuất CSV/JSON | **[Mở quản lý điểm](https://aerovfx.github.io/Science/tools/khao-sat/admin.html)** |

## Khóa học

| Cấp độ | Khóa học | Thời lượng | Nội dung |
|---|---|---:|---|
| Tiểu học | 📐 Toán 4 KNTT | 10 tuần | 9 chủ đề, 48 bài học |
| Tiểu học | 📖 Tiếng Việt 4 KNTT | 10 tuần | 18 bài học |
| THCS | 📐 Toán 7 KNTT | 10 tuần | 9 chương, 35 bài học |
| THCS | 📚 Ngữ văn 7 KNTT | 10 tuần | 10 bài học lớn |
| THCS | 🇬🇧 Tiếng Anh 7 Global Success | 10 tuần | 12 Units, 4 Reviews |
| THPT | 🔭 Vật lí 10 KNTT | 10 tuần | 7 chương, 35 bài học |
| THPT | 🌊 Vật lí 11 KNTT | 10 tuần | 4 chương, 26 bài học |
| THPT | ⚛️ Vật lí 12 KNTT | 10 tuần | 25 bài học, 3 chuyên đề |
| Chuyên sâu | 🌊 CFD thủy động lực học | 10 tuần | Lý thuyết và OpenFOAM |
| Chuyên sâu | ⚛️ Vật lí lượng tử | 10 tuần | Lý thuyết, mô phỏng Python |
| Chuyên sâu | 🚀 Động cơ tên lửa | 10 tuần | Thiết kế và mô phỏng |

Mỗi khóa học được trình bày theo cùng một lộ trình 5 phần:

1. **Lesson** — nội dung bài học và lịch học.
2. **Presentation** — dàn ý slide được sinh từ từng Lesson.
3. **Exercise** — bài tập, câu hỏi thảo luận và phiếu tự đánh giá.
4. **Code** — công cụ hoặc mô phỏng Python của khóa học.
5. **Project** — dự án tổng kết và tiêu chí sản phẩm.

Presentation và Exercise được tái tạo tự động từ 110 Lesson khi GitHub Pages triển khai, vì vậy luôn đồng bộ với nội dung gốc. Danh mục website được lưu tại [`courses/catalog.json`](courses/catalog.json).

## Khảo sát và chấm điểm

Quy trình sử dụng dành cho lớp học:

```text
Chọn lớp → Chọn buổi học → Chọn học sinh
    ├── Khảo sát trải nghiệm buổi học
    ├── Đánh giá đồng đẳng theo 6 tiêu chí
    └── Giáo viên xem hồ sơ, chấm điểm và xuất báo cáo
```

Sáu tiêu chí đánh giá gồm:

- 🤝 Hợp tác nhóm
- 💡 Sáng tạo
- 💻 Kỹ năng lập trình
- 🧩 Giải quyết vấn đề
- 🎤 Thuyết trình
- ⭐ Thái độ học tập

> [!IMPORTANT]
> GitHub Pages là website tĩnh. Kết quả khảo sát và điểm hiện được lưu trong `localStorage` của trình duyệt, không tự đồng bộ giữa các thiết bị. Giáo viên nên dùng chức năng **Sao lưu JSON** hoặc **Xuất CSV** thường xuyên. Muốn thu dữ liệu tập trung từ nhiều máy cần kết nối thêm backend, Google Sheets hoặc một cơ sở dữ liệu.

## Chạy trên máy cá nhân

Yêu cầu Python 3:

```bash
git clone https://github.com/aerovfx/Science.git
cd Science
python3 scripts/build_course_materials.py
python3 scripts/build_course_catalog.py
python3 -m http.server 4173
```

Sau đó mở:

- Website: <http://127.0.0.1:4173/>
- Khảo sát lớp học: <http://127.0.0.1:4173/tools/khao-sat/portal.html>
- Quản lý điểm: <http://127.0.0.1:4173/tools/khao-sat/admin.html>

Không nên mở trực tiếp file HTML bằng `file://`, vì trình duyệt có thể chặn việc đọc các file Markdown và JSON.

## Cập nhật nội dung khóa học

1. Thêm hoặc chỉnh sửa file Markdown trong `courses/<ten-khoa-hoc>/lessons/`.
2. Mỗi khóa học cần có file `INDEX.md`.
3. Chạy lại trình tạo danh mục:

   ```bash
   python3 scripts/build_course_materials.py
   python3 scripts/build_course_catalog.py
   ```

4. Kiểm tra website cục bộ và đẩy thay đổi lên nhánh `main`.

Workflow [GitHub Pages](https://github.com/aerovfx/Science/actions/workflows/jekyll-gh-pages.yml) sẽ tự sinh lại danh mục, build Jekyll và triển khai website.

## Cấu trúc dự án

```text
Science/
├── index.html                  # Trang chủ và danh mục khóa học
├── course.html                 # Trình đọc nội dung Markdown
├── assets/                     # Giao diện và hình ảnh dùng chung
├── courses/                    # 11 khóa học
│   └── <course>/
│       ├── INDEX.md            # Tổng quan khóa học
│       ├── schedule.md         # Lịch học
│       ├── lessons/            # Bài học theo tuần
│       ├── presentations/      # Dàn ý trình chiếu tự động
│       ├── exercises/          # Phiếu bài tập tự động
│       ├── code/               # Code và mô phỏng
│       ├── projects/           # Dự án cuối khóa
│       └── references/         # Tài liệu tham khảo
├── curriculum/                 # Học liệu và chương trình GDPT 2018
├── tools/
│   ├── khao-sat/               # Khảo sát, đánh giá và quản lý điểm
│   ├── ai-workflow/            # Quy trình làm việc với AI
│   └── dataset/                # Công cụ chuẩn bị dữ liệu
├── scripts/
│   ├── build_course_materials.py # Sinh Presentation và Exercise
│   └── build_course_catalog.py   # Tạo danh mục tài liệu cho website
└── .github/workflows/          # Tự động deploy GitHub Pages
```

## Đóng góp

Bạn có thể đóng góp bài học, sửa lỗi nội dung hoặc cải thiện giao diện bằng cách mở [Issue](https://github.com/aerovfx/Science/issues) hoặc Pull Request.

Khi thêm học liệu mới, hãy giữ cấu trúc Markdown rõ ràng, sử dụng đường dẫn tương đối và kiểm tra trang đọc khóa học trước khi gửi thay đổi.

## Giấy phép

Dự án được phát hành theo nội dung trong file [LICENSE](LICENSE).

---

<div align="center">

Được xây dựng để biến học liệu Markdown thành một không gian học tập dễ tiếp cận.

**[Mở Science Workspace →](https://aerovfx.github.io/Science/)**

</div>

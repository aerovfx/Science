# Hướng dẫn tổ chức học liệu theo hướng dạy học

## Nguyên tắc

- Sắp xếp theo **người dùng và hoạt động dạy học**, không theo định dạng tệp.
- Tách phần dành cho giáo viên và học sinh khi nội dung có đáp án hoặc hướng dẫn nội bộ.
- Mỗi bài có ít nhất: mục tiêu, nhiệm vụ, minh chứng, cách kiểm tra và tài nguyên.
- Tên thư mục dùng tiền tố số để giữ trật tự; tên tệp dùng `Bai_XX_Ten_chu_de` hoặc `Tuan_XX`.
- Không đưa mật khẩu, dữ liệu cá nhân hoặc đáp án cần bảo mật vào thư mục học sinh.

## Mẫu cấu trúc cho một học phần mới

```text
Ten_hoc_phan/
├── 00_TONG_QUAN.md              # đối tượng, thời lượng, chuẩn đầu ra
├── 01_GIAO_VIEN/                # kế hoạch, đáp án, chuẩn bị
├── 02_HOC_SINH/                 # bài học, phiếu học tập, bài về nhà
├── 03_THUC_HANH_DU_AN/          # vật tư, sơ đồ, mã, nhật ký kỹ thuật
├── 04_DANH_GIA/                 # quiz, rubric, ma trận đề
└── 05_TAI_NGUYEN/               # slide, ảnh, video, tham khảo
```

## Quy trình xây một bài học

1. Nêu câu hỏi lớn và chuẩn đầu ra đo được.
2. Chuẩn bị một nhiệm vụ có sản phẩm/biểu hiện quan sát được.
3. Xác định tiêu chí thành công trước hoạt động.
4. Thiết kế kiểm thử hoặc đánh giá trong quá trình học.
5. Lưu minh chứng: mã, bảng dữ liệu, ảnh mạch, bài làm hoặc phản tư.
6. Ghi lại điều chỉnh sau giờ dạy để cải tiến phiên bản tiếp theo.

## Chuẩn hóa tệp hiện có theo từng bước

Không đổi tên hàng loạt các tệp cũ. Khi cần hoàn thiện một chủ đề, tạo thư mục chuẩn mới và liên kết/tái sử dụng tệp nguồn; chỉ chuyển tệp sau khi đã kiểm tra toàn bộ liên kết. Cách này vừa bảo toàn kho hiện có vừa giúp chuyển đổi dần sang mô hình mới.

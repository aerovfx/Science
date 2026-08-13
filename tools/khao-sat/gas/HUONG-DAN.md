# 🔌 Kết nối STEM Portal với Google Sheets + Google Forms

> ## ✅ ĐÃ TRIỂN KHAI XONG — 14/08/2026
>
> Hệ thống đã chạy thật trên tài khoản **cgsharefive@gmail.com**. Không cần làm lại các bước bên dưới;
> phần hướng dẫn giữ lại để tham khảo khi cần dựng lại hoặc chuyển sang tài khoản khác.
>
> | Thành phần | Liên kết |
> |---|---|
> | 📊 **Bảng tính** (9 sheet + 3 sheet phản hồi Form) | <https://docs.google.com/spreadsheets/d/1sTD6wugdq4ap4sE48scv36v-PFd9cinr2-r9dQ2D9HM/edit> |
> | 🧪 **Form Khảo sát học viên** | <https://docs.google.com/forms/d/e/1FAIpQLSd_0zPFA3capyfM8RA0JdjCjH72Ot8a5qx94zJkYjYKZJkANA/viewform> |
> | 🔄 **Form Đánh giá đồng đẳng** | <https://docs.google.com/forms/d/e/1FAIpQLScUdCwMxiolOc7TVEcEyzwqZiK_bjmZAMCEiBoA6gUzoyDWAQ/viewform> |
> | 👩‍🏫 **Form Đánh giá của giáo viên** | <https://docs.google.com/forms/d/e/1FAIpQLSeUaa5RenhLNCxrvrlSucdo4foNYdDp2k35hP8CWsgeFq0Gag/viewform> |
> | ⚙️ **Dự án Apps Script** | <https://script.google.com/u/1/home/projects/1QyJxRmbEY-dTvSueno4ZsN_WOmYRbDW15xH1w5zdWo5L7JDWjlvcPKz9/edit> |
> | 🔗 **URL Web App (API)** | `https://script.google.com/macros/s/AKfycbxiltAwUQOsVco6FEWFg-gTyvziJy-E-010PTQ2wkM9hSIEyTiGvXZ5Hv05gdPOSYbz6w/exec` |
>
> URL Web App đã ghi sẵn trong [`js/cloud.js`](../js/cloud.js) (`DEFAULT_URL`) nên **mọi trang tự kết nối**,
> không cần dán tay. Trạng thái hiện tại: 4 lớp · 20 học sinh · 22 buổi · 6 tiêu chí;
> 4 trigger đang chạy (3 × `xuLyFormSubmit` + 1 × `capNhatTongHop` mỗi 6 giờ).
>
> **Khi sửa `Code.gs`:** dán lại vào dự án Apps Script rồi *Triển khai → Quản lý các tùy chọn triển khai
> → ✏️ → Phiên bản: Mới → Triển khai* (URL giữ nguyên).


Tài khoản chứa toàn bộ dữ liệu: **cgsharefive@gmail.com**
Thư mục Drive đích: **`danhgia`** → <https://drive.google.com/drive/folders/1M9C1CaUaDlde5E3BjDUEz4vtAMeBZg4X>
(đã khai sẵn trong `CONFIG.FOLDER_ID`, mọi Sheet/Form tạo ra đều nằm trong thư mục này)

Sau khi làm xong, hệ thống sẽ có:

| Thành phần | Số lượng | Nội dung |
|---|---|---|
| Google Spreadsheet | 1 file, **9 sheet** | Khảo sát · Đánh giá đồng đẳng · Điểm giáo viên · Học sinh · Lớp · Buổi học · Tiêu chí · Tổng hợp · Nhật ký |
| Google Forms | **3 biểu mẫu** | Khảo sát học viên · Đánh giá đồng đẳng · Phiếu đánh giá của giáo viên |
| Web App API | 1 endpoint | Nhận dữ liệu từ 5 trang HTML trên GitHub Pages |

Các trang HTML **vẫn chạy được khi chưa kết nối** (lưu localStorage như cũ) — kết nối chỉ thêm lớp đồng bộ tập trung.

---

## Bước 1 — Tạo dự án Apps Script

1. Đăng nhập Google bằng **cgsharefive@gmail.com** (kiểm tra góc phải trên: đúng tài khoản mới làm tiếp).
2. Mở <https://script.google.com> → **Dự án mới / New project**.
3. Đặt tên dự án: `STEM Portal API`.
4. Xoá hết nội dung `Code.gs` mặc định, dán **toàn bộ** nội dung file [`Code.gs`](Code.gs) trong thư mục này vào.
5. Nhấn 💾 lưu.

> Nếu tên miền GitHub Pages của bạn khác, sửa `CONFIG.ROSTER_URL` ở đầu file cho đúng đường dẫn `data/students.json`.

---

## Bước 2 — Chạy hàm khởi tạo (1 lần duy nhất)

1. Ở thanh chọn hàm phía trên, chọn **`taoToanBo`** → nhấn **Chạy / Run**.
2. Google hỏi quyền → **Xem lại quyền** → chọn tài khoản `cgsharefive@gmail.com` →
   *"Google chưa xác minh ứng dụng này"* → **Nâng cao** → **Chuyển đến STEM Portal API (không an toàn)** → **Cho phép**.
   (Đây là script do chính bạn viết trong tài khoản của bạn nên an toàn.)
3. Chờ ~30 giây. Mở **Nhật ký thực thi / Execution log** để lấy:
   - Link **Bảng tính** (Google Sheets)
   - Link **điền** và link **sửa** của 3 biểu mẫu

Hàm này tự động:
- Tạo thư mục Drive `STEM — Khảo sát & Đánh giá`
- Tạo bảng tính 9 sheet với tiêu đề cột đầy đủ, dòng tiêu đề khoá cứng
- Tạo 3 Google Form, nối kết quả về đúng bảng tính đó
- Cài trigger `onFormSubmit` cho cả 3 form + trigger cập nhật *Tổng hợp* mỗi 6 giờ

> Chạy lại `taoToanBo()` nhiều lần **không** tạo trùng — script nhớ ID trong Script Properties.

---

## Bước 3 — Nạp danh sách lớp & học sinh

Chọn một trong hai cách:

- **Cách A (khuyến nghị):** chạy hàm **`napDanhSachTuWeb`** — tải trực tiếp từ `data/students.json` trên GitHub Pages.
- **Cách B:** mở trang `ket-noi.html` trên web, bấm **“Đẩy danh sách lớp/học sinh lên Sheets”**.

Sau đó, các câu hỏi *Lớp* và *Buổi học* trong Form sẽ có sẵn lựa chọn đúng theo dữ liệu thật.
(Muốn cập nhật lựa chọn trong Form sau khi đổi danh sách: xoá 3 dòng `FORM_*` trong
**Cài đặt dự án → Thuộc tính tập lệnh**, rồi chạy lại `taoToanBo()` để tạo form mới.)

---

## Bước 4 — Triển khai Web App (lấy URL API)

1. Góc phải trên: **Triển khai / Deploy** → **Tuỳ chọn triển khai mới / New deployment**.
2. Biểu tượng ⚙️ → chọn loại **Ứng dụng web / Web app**.
3. Điền:
   - **Mô tả:** `STEM API v1`
   - **Thực thi với tư cách / Execute as:** **Tôi (cgsharefive@gmail.com)**
   - **Người có quyền truy cập / Who has access:** **Bất kỳ ai / Anyone**
4. **Triển khai** → sao chép **URL ứng dụng web**, dạng:

   ```
   https://script.google.com/macros/s/AKfycbx…/exec
   ```

> ⚠️ *Execute as = Tôi* và *Who has access = Anyone* là bắt buộc; nếu chọn “Anyone with Google account”, học sinh chưa đăng nhập sẽ không gửi được.

Mỗi lần sửa `Code.gs`, phải **Triển khai → Quản lý triển khai → ✏️ → Phiên bản: Mới → Triển khai**
thì thay đổi mới có hiệu lực (URL giữ nguyên).

---

## Bước 5 — Dán URL vào website

1. Mở `ket-noi.html` trên GitHub Pages (hoặc mở file cục bộ).
2. Dán URL `/exec` vào ô **URL Web App** → **Kiểm tra kết nối**.
3. Thấy ✅ *Kết nối thành công* → **Lưu**. URL được ghi vào `localStorage` của trình duyệt.
4. Bấm **Đẩy toàn bộ dữ liệu cũ lên Sheets** để chuyển dữ liệu đang nằm trong máy lên đám mây.

Cách chia sẻ nhanh cho máy khác (giáo viên, máy phòng lab): gửi link kèm tham số `?api=`:

```
https://<tài-khoản>.github.io/Science/tools/khao-sat/portal.html?api=https://script.google.com/macros/s/AKfycbx…/exec
```

Trang sẽ tự lưu URL đó, các lần sau không cần dán lại.

---

## Bước 6 — Kiểm tra

| Việc làm | Kết quả mong đợi |
|---|---|
| Nộp form ở `index.html` | Sheet **Khảo sát** có thêm 1 dòng |
| Chấm bạn ở `danh-gia.html` → *Hoàn thành* | Sheet **Đánh giá đồng đẳng** có N dòng (N = số bạn) |
| Chấm điểm ở `admin.html` → *Lưu điểm* | Sheet **Điểm giáo viên** cập nhật đúng dòng học sinh |
| Điền 1 trong 3 Google Form | Dòng mới xuất hiện ở đúng sheet tương ứng, cột *Nguồn* = `Google Form` |
| Mở `ket-qua.html` | Thống kê gộp cả dữ liệu máy và dữ liệu Sheets |

Huy hiệu góc phải màn hình cho biết trạng thái: ☁️ *Đã đồng bộ* · ⏳ *n bản ghi chờ gửi* · ☁️ *Chưa kết nối*.
Mất mạng thì bản ghi được xếp hàng trong máy và tự gửi lại khi có mạng (hoặc bấm vào huy hiệu).

---

## API tham khảo

**Đọc** (GET, hỗ trợ JSONP qua `&callback=`):

| URL | Trả về |
|---|---|
| `…/exec?action=ping` | Trạng thái + link Sheet/Form |
| `…/exec?action=roster` | `{classes, students, sessions, criteria}` |
| `…/exec?action=surveys&limit=200` | Khảo sát gần nhất |
| `…/exec?action=peer` | Đánh giá đồng đẳng |
| `…/exec?action=teacher` | Điểm giáo viên |
| `…/exec?action=dashboard` | Bảng tổng hợp theo học sinh |
| `…/exec?action=summary` | Số lượng bản ghi từng loại |
| `…/exec?action=rebuild` | Dựng lại sheet *Tổng hợp* |

**Ghi** (POST, `Content-Type: text/plain`, body JSON):

```json
{ "type": "survey",        "payload": { "studentId": "s001", "studentName": "…", "overall": 5 } }
{ "type": "peer_eval_set", "payload": { "sessionId": 12, "classId": "8A", "raterId": "s001",
                                        "raterName": "…", "items": [ { "targetId": "s002",
                                        "targetName": "…", "scores": { "teamwork": 5 }, "note": "…" } ] } }
{ "type": "teacher_grade", "payload": { "studentId": "s001", "teacher": "…", "scores": {}, "note": "" } }
{ "type": "roster",        "payload": { "classes": [], "students": [] } }
{ "type": "batch",         "items":   [ { "type": "survey", "payload": {} } ] }
```

Chống trùng lặp: mỗi bản ghi có **khoá** ở cột 2 —
khảo sát theo mã bản ghi, đánh giá đồng đẳng theo `người chấm|buổi|người được chấm`,
điểm giáo viên theo `gv|mã HS|giáo viên`. Gửi lại cùng khoá sẽ **ghi đè**, không sinh dòng mới.

---

## Bảo mật & quyền riêng tư

- Muốn giới hạn người gửi: điền `CONFIG.TOKEN = 'chuỗi-bí-mật'` trong `Code.gs`, triển khai lại,
  rồi thêm `token` vào mỗi payload (sửa `js/cloud.js`, hàm `rawPost`).
- Bảng tính mặc định **chỉ chủ sở hữu** xem được; chia sẻ thêm cho giáo viên qua nút *Chia sẻ* của Google Sheets.
- Không thu thập email học sinh (`setCollectEmail(false)`).
- Sheet **Nhật ký** ghi lại mọi lượt ghi (tự cắt bớt khi vượt 5.000 dòng).

## Xử lý sự cố

| Hiện tượng | Nguyên nhân & cách xử lý |
|---|---|
| Huy hiệu luôn ⏳, dữ liệu không lên Sheet | Triển khai chưa đặt *Anyone*; hoặc URL thiếu đuôi `/exec` |
| `Không gọi được Web App` khi kiểm tra kết nối | Chưa cấp quyền ở Bước 2, hoặc đang dùng URL `/dev` (chỉ chủ sở hữu dùng được) |
| Sửa code mà không thấy đổi | Chưa tạo **phiên bản mới** khi triển khai lại |
| Form gửi nhưng bảng tổng không có dòng | Trigger chưa cài → chạy lại `taoToanBo()`; xem sheet **Nhật ký** |
| Muốn xoá sạch làm lại | Chạy `xoaDuLieuNghiepVu()` (giữ danh sách lớp/học sinh) |

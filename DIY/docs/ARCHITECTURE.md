# Kiến trúc DIY MVP

## Mục tiêu

DIY biến yêu cầu tiếng Việt thành một gói dự án STEM có thể kiểm tra: đặc tả, BOM, wiring, CAD, hướng dẫn, mã lệnh và đánh giá.

## Luồng chuẩn

```text
Yêu cầu → Project Spec → BOM/Netlist → Kiểm định điện
        → CAD Feature Tree → Kiểm định cơ khí → Preview
        → Giáo viên xác nhận → Version → Export
```

## Các lớp hệ thống

1. **Workspace web**: hội thoại, tabs dự án, sơ đồ, CAD viewer và lịch sử.
2. **AI orchestrator**: chuẩn hóa yêu cầu và chọn tool phù hợp.
3. **MCP host**: xác thực schema, quyền và yêu cầu phê duyệt.
4. **CAD MCP server**: công bố tool và resource theo chuẩn MCP.
5. **CAD worker**: chạy kernel trong sandbox, giới hạn CPU/RAM/thời gian.
6. **Project store**: lưu feature tree, artifacts, validation và phiên bản.
7. **DIY CAD runtime**: service loopback chuyển scene đã kiểm định thành feature tree FreeCAD và xuất FCStd/STEP/STL qua OpenCascade.
8. **Plasticity adapter**: bridge HTTP loopback nhận scene đã kiểm định, chuyển đổi hệ trục/đơn vị và kích hoạt lệnh B-Rep trong Plasticity.

```text
Prompt → typed CAD operations → validation → DIY scene JSON
                                      ├→ Three.js preview
                                      ├→ FreeCADCmd worker → FCStd + STEP + STL
                                      └→ Plasticity bridge → editable B-Rep
```

FreeCAD chạy như một chương trình LGPL-2.1-or-later riêng biệt qua command line/API Python; DIY không sao chép hoặc nhúng GUI Qt của FreeCAD. Worker dùng `App::Document`, `Part::Feature`, `Part.export` và `Mesh.export`, dựa trên các mẫu automation trong fork `aerovfx/FreeCAD`.

## Ranh giới an toàn

- AI không gửi mã thực thi tùy ý; chỉ gửi CAD Operation JSON đã định nghĩa.
- `preview` và `commit` là hai hành động riêng.
- Commit yêu cầu `baseVersion` để chống ghi đè chỉnh sửa đồng thời.
- Export, publish và manufacture luôn cần người dùng xác nhận.
- Worker không nhận đường dẫn tùy ý và không có Internet mặc định.
- FreeCAD worker chỉ nhận allowlist primitive có kiểu dữ liệu; không `eval`, `exec` hay chạy script do model tạo.
- Runtime bind `127.0.0.1`, giới hạn 2 MB/250 primitive và timeout mỗi job 120 giây.
- Plasticity bridge chỉ bind `127.0.0.1`, giới hạn payload 2 MB/250 primitive và kiểm tra origin trước khi điều khiển kernel.

## Lộ trình gần nhất

1. Thêm boolean, fillet, shell và constraint solver vào operation schema của worker.
2. Thêm job queue và artifact resource cho tác vụ render dài.
3. Đánh giá B-Rep kernel cho STEP, fillet và boolean chính xác.
4. Bổ sung lưu dự án, lịch sử và phân quyền giáo viên.
5. Thêm kiểm tra va chạm và độ hở dựa trên bounding volume.

## Thành phần đã hoạt động

| Thành phần | Trạng thái |
|---|---|
| CAD domain engine | Sinh feature tree, scene và metrics xác định |
| Validation engine | Kích thước khung UAV, khoảng hở, điểm gá FC, motor và propeller |
| CAD API | `POST /api/cad` với Zod validation |
| Three.js viewport | Orbit, pan, zoom, preset view, exploded view |
| DIY CAD runtime | FreeCADCmd/OpenCascade headless; tạo FCStd, STEP, STL và manifest |
| MCP stdio server | Năm tools, gồm `cad.build_native_artifacts`, `cad.open_in_plasticity`, và resource `cad://projects/budget-mini-uav` |
| MCP smoke test | List tools, generate và validate qua protocol thật |

# DIY — STEM Hardware Studio

MVP không gian thiết kế dự án phần cứng STEM bằng hội thoại. Ứng dụng gom yêu cầu, linh kiện, sơ đồ nối dây, CAD, hướng dẫn và rubric trong một workspace có kiểm định.

Giao diện workspace sử dụng bố cục sáng, font mono, thanh công cụ dạng pill và chat/project split-view lấy cảm hứng từ trải nghiệm Blueprint, với nhận diện DIY STEM riêng.

## Phạm vi MVP

- Dự án mẫu: **Budget Mini UAV** gồm 30 thành phần, tổng dự toán 118,28 USD.
- Năm không gian theo trải nghiệm Blueprint: Info, Parts, Wiring, Mech và Instructions.
- Mô phỏng luồng MCP CAD: `draft → validate → preview → commit`.
- Xuất gói ZIP sáu tệp theo cấu trúc Blueprint: CONFIG, PARTS, ELECTRICAL_CONNECTIONS, MECHANICAL_CONNECTIONS, GUIDE và VISUAL.
- Giao diện đáp ứng cho desktop, tablet và mobile.

## Khởi chạy

```bash
npm install
npm run dev
npm run build
```

## Tài liệu

- [Kiến trúc MVP](docs/ARCHITECTURE.md)
- [Hợp đồng MCP CAD v1](mcp/cad-tools.schema.json)

## Giai đoạn 2

- Viewport CAD đã chuyển sang Three.js/WebGL2, hỗ trợ orbit, zoom, pan, góc nhìn và exploded view.
- `/api/cad` chạy CAD domain engine và trả feature tree, validation, metrics cùng scene specification.
- MCP server stdio thật công bố năm tool CAD (gồm `cad.build_native_artifacts` và `cad.open_in_plasticity`) cùng một project resource.
- Tab **MECH** có adapter **OPEN IN PLASTICITY**: gửi scene CAD đã kiểm định qua bridge loopback đến Plasticity để dựng solid B-Rep trong một group có undo/redo.
- Tab **MECH** có **BUILD WITH DIY CAD**: phát lại feature tree bằng FreeCAD/OpenCascade headless và tạo FCStd, STEP, STL cùng manifest.

```bash
npm run mcp:build
npm run mcp:smoke
npm run mcp:start
```

Xem [hướng dẫn kết nối MCP](mcp-server/README.md). Kernel scene dựng khung UAV, flight controller, pin, receiver, motor và propeller; DIY CAD runtime chuyển các primitive đã kiểm định thành artifact CAD native.

## DIY CAD runtime (FreeCAD/OpenCascade)

Cài FreeCAD, sau đó chạy service cục bộ trước khi bấm **MECH → BUILD WITH DIY CAD**:

```bash
FREECAD_CMD=/Applications/FreeCAD.app/Contents/Resources/bin/FreeCADCmd npm run cad:runtime
curl http://127.0.0.1:44045/health
```

Worker chỉ nhận operation JSON thuộc allowlist, không thực thi code do model tạo. Xem [hướng dẫn runtime](cad-runtime/README.md) và [kiến trúc](docs/ARCHITECTURE.md).

## Plasticity runtime

Chạy bản Plasticity trong thư mục `../plasticity`, sau đó mở DIY và chọn **MECH → OPEN IN PLASTICITY**. DIY kết nối mặc định tới `http://127.0.0.1:44044`; bridge chỉ lắng nghe loopback và mặc định chỉ chấp nhận origin localhost. Với một origin DIY khác, khai báo chính xác origin đó trong `DIY_CAD_ALLOWED_ORIGINS` khi khởi chạy Plasticity.

Plasticity chuyển hệ trục Y-up của Three.js sang hệ trục CAD, đổi millimeter sang scene units, giữ vị trí và Euler rotation, dựng box/cylinder B-Rep, đặt tên từng solid và gom theo project/draft. Các primitive phức tạp như PCB, battery và plate hiện được chuyển thành manufacturing envelope; màu và topology chi tiết vẫn ở preview DIY.

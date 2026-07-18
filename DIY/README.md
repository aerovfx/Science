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
- MCP server stdio thật công bố ba tool CAD và một project resource.

```bash
npm run mcp:build
npm run mcp:smoke
npm run mcp:start
```

Xem [hướng dẫn kết nối MCP](mcp-server/README.md). Kernel hiện dựng khung UAV, flight controller, pin, receiver, bốn motor và propeller; bước kế tiếp là thêm adapter xuất STL/glTF và lưu artifact.

# DIY CAD MCP Server

MCP server cục bộ dùng SDK 1.x ổn định và transport stdio. Các tool dựng/kiểm định chỉ trả dữ liệu có cấu trúc; tool artifact gọi DIY CAD runtime loopback khi người dùng yêu cầu build.

## Tools

- `cad.generate_feature_tree`
- `cad.validate_design`
- `cad.render_preview`
- `cad.build_native_artifacts` — xuất FCStd/STEP/STL qua FreeCAD/OpenCascade
- `cad.open_in_plasticity` — gửi scene đã kiểm định sang Plasticity bridge

## Resource

- `cad://projects/budget-mini-uav`

## Build và kiểm tra

```bash
npm install
npm run mcp:build
npm run mcp:smoke
```

Để bật native artifacts, cài FreeCAD rồi chạy `npm run cad:runtime`. Có thể đặt `FREECAD_CMD` tới executable `FreeCADCmd` nếu nó không nằm ở vị trí chuẩn.

## Cấu hình MCP client

Thay đường dẫn bằng vị trí tuyệt đối trên máy chạy server:

```json
{
  "mcpServers": {
    "diy-cad": {
      "command": "node",
      "args": [
        "/Users/dangvietchung/Science/DIY/dist-mcp/mcp-server/index.js"
      ]
    }
  }
}
```

Không thêm lệnh ghi ra stdout trong server: stdout được dành riêng cho JSON-RPC. Log chẩn đoán phải dùng stderr.

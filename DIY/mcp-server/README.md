# DIY CAD MCP Server

MCP server cục bộ dùng SDK 1.x ổn định và transport stdio. Server không ghi file, không truy cập mạng và chỉ trả dữ liệu CAD có cấu trúc.

## Tools

- `cad.generate_feature_tree`
- `cad.validate_design`
- `cad.render_preview`

## Resource

- `cad://projects/budget-mini-uav`

## Build và kiểm tra

```bash
npm install
npm run mcp:build
npm run mcp:smoke
```

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

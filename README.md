# DIY — STEM Hardware Studio

> Không gian thiết kế phần cứng STEM bằng hội thoại: gom **yêu cầu, linh kiện, sơ đồ nối dây, mô hình CAD 3D, hướng dẫn lắp ráp và rubric** vào một workspace có kiểm định. Lấy cảm hứng từ trải nghiệm Blueprint, với nhận diện DIY STEM riêng.

<p align="center">
  <img src="DIY/public/humanoid-robot-visual.png" width="49%">
  <img src="DIY/public/robodog-visual.png" width="49%">
</p>

Mã nguồn ứng dụng nằm trong thư mục **[`DIY/`](DIY/)** (Next.js + Three.js/WebGL2 + MCP CAD).

---

## 🎨 Thư viện mẫu thiết kế

Ứng dụng đi kèm **32 template dự án dân sự**, mỗi mẫu có đủ Parts · Wiring · Mech · Instructions · mô hình CAD 3D. Một số mẫu tiêu biểu:

| | | |
|---|---|---|
| <img src="DIY/public/smart-mobile-robot-visual.png" width="260"><br>**Smart Mobile Robot**<br><sub>STM32 + ESP32-CAM · dò line, tránh vật cản</sub> | <img src="DIY/public/humanoid-robot-visual.png" width="260"><br>**Humanoid Robot**<br><sub>Jetson Orin · khớp Dynamixel · RGB-D</sub> | <img src="DIY/public/robodog-visual.png" width="260"><br>**Robodog**<br><sub>4 chân · 12× BLDC trên bus CAN</sub> |
| <img src="DIY/public/mini-submarine-visual.png" width="260"><br>**Mini Submarine Drone**<br><sub>ROV · 6 thruster · thân acrylic kín nước</sub> | <img src="DIY/public/fpv-racing-drone-visual.png" width="260"><br>**FPV Racing Drone**<br><sub>5-inch 6S carbon · FC H7 · FPV analog</sub> | <img src="DIY/public/scara-arm-robot-visual.png" width="260"><br>**SCARA Arm Robot**<br><sub>cánh tay 4 trục · gripper 2 ngón</sub> |
| <img src="DIY/public/modular-wind-harvester-visual.png" width="260"><br>**Modular Wind Harvester**<br><sub>turbine gió · MPPT + siêu tụ</sub> | <img src="DIY/public/long-range-uav-visual.png" width="260"><br>**Long Range UAV**<br><sub>fixed-wing · Pixhawk · tầm xa</sub> | <img src="DIY/public/rc-boat-visual.png" width="260"><br>**RC Submersible Boat**<br><sub>thuyền RC · camera thả bằng tời</sub> |

### Xem trước mô hình CAD 3D

Các mẫu còn lại được dựng và xem trước bằng **mô hình CAD 3D tương tác** ngay trong ứng dụng (orbit · zoom · exploded view):

| | | | |
|---|---|---|---|
| <img src="DIY/public/vtol-survey-visual.png" width="200"><br><sub>**VTOL Survey Drone**</sub> | <img src="DIY/public/observation-multirotor-visual.png" width="200"><br><sub>**Observation Multirotor**</sub> | <img src="DIY/public/dragonfly-ornithopter-visual.png" width="200"><br><sub>**Dragonfly Ornithopter**</sub> | <img src="DIY/public/budget-mini-uav-visual.png" width="200"><br><sub>**Budget Mini UAV**</sub> |
| <img src="DIY/public/filming-drone-visual.png" width="200"><br><sub>**Professional Filming Drone**</sub> | <img src="DIY/public/delivery-drone-visual.png" width="200"><br><sub>**Autonomous Delivery Drone**</sub> | <img src="DIY/public/endurance-drone-visual.png" width="200"><br><sub>**Endurance Drone**</sub> | <img src="DIY/public/walle-robot-visual.png" width="200"><br><sub>**Autonomous Wall-E Robot**</sub> |
| <img src="DIY/public/garden-irrigation-visual.png" width="200"><br><sub>**Smart Garden Irrigation**</sub> | <img src="DIY/public/companion-bot-visual.png" width="200"><br><sub>**Desktop Companion Bot**</sub> | <img src="DIY/public/ar-glasses-visual.png" width="200"><br><sub>**AR Smart Glasses**</sub> | <img src="DIY/public/printer-3d-visual.png" width="200"><br><sub>**3D Printer Budget**</sub> |
| <img src="DIY/public/plasma-thruster-visual.png" width="200"><br><sub>**Pulsed Plasma Thruster** *(tham chiếu)*</sub> | | | |

---

## 📦 Danh mục template (32)

| Nhóm | Template |
|---|---|
| **UAV / bay** | Budget Mini UAV · Long Range UAV · Mother UAV Carrier · VTOL Survey Drone · Aerial Observation Multirotor · Dragonfly Ornithopter · FPV Racing Drone · Professional Filming Drone · Autonomous Delivery Drone · Endurance Drone · Autonomous Cargo Drone · Cost-Effective Drone |
| **Robot mặt đất** | Smart Mobile Robot · Humanoid Robot · Robodog · Autonomous Wall-E Robot · SCARA Arm Robot |
| **Dưới nước / mặt nước** | Autonomous Survey USV · Mini Submarine Drone · RC Submersible Boat |
| **IoT / năng lượng / thiết bị** | Modular Wind Harvester · Smart Garden Irrigation · Desktop Companion Bot · AR Smart Glasses · 3D Printer Budget · Smart Home Blueprint |
| **Máy công cụ / chế tạo** | Desktop CNC Mill · Large 3D Printer |
| **Xe / phương tiện** | Electric Motocross Bike *(xe điện off-road, HV 72V)* |
| **Tham chiếu nghiên cứu** | Pulsed Plasma Thruster *(khái niệm không gian, cảnh báo HV/cryogenic)* · Cyber Multi-tool *(công cụ nghiên cứu bảo mật, chỉ dùng hợp pháp trên thiết bị của bạn)* · Automated Biodiesel Reactor *(rig tự động hoá quá trình, cảnh báo methanol/lye)* |

---

## 🚀 Khởi chạy

```bash
cd DIY
npm install
npm run dev      # phát triển
npm run build    # build production
```

Giai đoạn 2 — MCP CAD server (stdio) công bố ba tool CAD và một project resource:

```bash
npm run mcp:build
npm run mcp:smoke
npm run mcp:start
```

Xem thêm: [Kiến trúc MVP](DIY/docs/ARCHITECTURE.md) · [Hợp đồng MCP CAD v1](DIY/mcp/cad-tools.schema.json) · [Hướng dẫn kết nối MCP](DIY/mcp-server/README.md).

---

## 🛡️ Nguyên tắc an toàn

Toàn bộ template là **bản dân sự, không vũ khí hoá**. Trong quá trình dựng thư viện, các thiết kế mang tính vũ khí/do thám đã **bị loại hoặc chỉ giữ bản dân sự đã lược bỏ**:

- ⛔ **Laser Mosquito Zapper** — không dựng (hệ laser tự động ngắm-bắn theo thị giác).
- ⛔ **VTOL Jamming Drone** và **phần lén/tàng hình của Stealth Autonomous Boat** — không clone bản gốc; chỉ có bản dân sự (VTOL Survey Drone, USV khảo sát) đã bỏ phần gây nhiễu/do thám.
- ⚠️ **Pulsed Plasma Thruster** — chỉ đưa vào dạng tham chiếu nghiên cứu, kèm cảnh báo điện áp cao / cryogenic, ghi rõ *không phải đồ tự chế tại nhà*.
- ⚠️ **Cyber Multi-tool** — công cụ nghiên cứu bảo mật (sub-GHz/NFC/RFID/IR) chỉ dành cho **mục đích hợp pháp, được phép**, thao tác trên thiết bị/thẻ/điều khiển **của chính bạn** và tuân thủ quy định RF địa phương. Không kèm bất kỳ hướng dẫn tấn công/truy cập trái phép nào.
- ⚠️ **Automated Biodiesel Reactor** — chỉ đưa vào dạng **tham chiếu tự động hoá quá trình** (phần điều khiển/cơ khí), kèm cảnh báo mạnh: methanol dễ cháy/độc và lye ăn mòn, bắt buộc PPE + thông gió + không nguồn lửa, tuân thủ quy định địa phương; **không phải hướng dẫn sản xuất nhiên liệu trọn gói**.
- ⚠️ **Electric Motocross Bike** — build EV cao áp 72V; thao tác HV bởi người có chuyên môn, dùng off-road/sân kín, mặc đồ bảo hộ.
- ⛔ **Automated Targeting Turret** — không dựng (hệ tự động ngắm-bắn theo thị giác).

---

## 📚 Học liệu khác

Repo này cũng chứa cổng học liệu Vật lí/STEM (PhysicsLab, HOC_LIEU, chuyên đề). Xem [`HOC_LIEU/`](HOC_LIEU/) và các thư mục liên quan để tra cứu và triển khai theo mục đích dạy học.

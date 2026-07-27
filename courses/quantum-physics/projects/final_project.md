# 🏆 Dự Án Cuối Khoá — Vật Lý Lượng Tử & Máy Tính Lượng Tử
# *Capstone Project — Quantum Physics & Computing*

---

## 🎯 3 Track Dự Án / 3 Project Tracks

### Track A — ⚛️ Mô Phỏng Vật Lý Lượng Tử (Physics Simulation)
**Nhiệm vụ:** Giải quyết một bài toán Vật lý lượng tử bằng phương pháp số học và trực quan hóa (Animation/3D) bằng Python.

**Gợi ý chủ đề:**
- Giải PT Schrödinger phụ thuộc thời gian 2D cho hệ có nhiễu loạn (Ví dụ: Electron đi qua từ trường hoặc thế tuần hoàn).
- Mô phỏng tán xạ của gói sóng lượng tử (Wave packet scattering) qua giếng thế/rào thế.
- Tính toán và vẽ đám mây xác suất nguyên tử Hydro (Orbital 3D) cho trạng thái kích thích cao ($n \ge 4$).

**Yêu cầu Kỹ thuật:**
- Code Python sử dụng `scipy.integrate` hoặc sai phân hữu hạn (Finite Difference).
- Tạo Animation (sử dụng `matplotlib.animation`) mô tả sự thay đổi theo thời gian.
- Báo cáo phân tích sự khác biệt so với kỳ vọng của Vật lý Cổ điển.

---

### Track B — 💻 Mạch Máy Tính Lượng Tử (Quantum Circuit Design)
**Nhiệm vụ:** Xây dựng, mô phỏng và phân tích một thuật toán lượng tử hoàn chỉnh bằng Qiskit.

**Gợi ý chủ đề:**
- Thiết kế giao thức Phân phối khóa lượng tử (QKD BB84) giữa Alice, Bob và Eve (kẻ nghe lén).
- Xây dựng thuật toán ước lượng Pha Lượng tử (Quantum Phase Estimation - QPE) cho một Unitary operator đơn giản.
- Thiết kế một mô hình Học máy Lượng tử (Quantum Machine Learning) đơn giản (Ví dụ: Quantum Support Vector Machine).

**Yêu cầu Kỹ thuật:**
- Code Python dùng `qiskit`.
- Có xử lý nhiễu (Noise modeling) bằng `qiskit_aer` để so sánh kết quả IDEAL và NOISY.
- Báo cáo giải thích từng bước của thuật toán bằng toán học (nhân ma trận, tích tensor).

---

### Track C — 🧩 Trò Chơi Lượng Tử (Quantum Game Theory)
**Nhiệm vụ:** Lập trình một trò chơi hoặc ứng dụng tương tác ứng dụng nguyên lý lượng tử.

**Gợi ý chủ đề:**
- Cờ vua lượng tử (Quantum Chess) phiên bản thu gọn (Các quân cờ ở trạng thái chồng chập).
- Trò chơi tung đồng xu lượng tử (Quantum Coin Flip) minh họa chiến lược thắng tuyệt đối của lượng tử so với cổ điển.
- Visualizer về Bất đẳng thức Bell: Một app tương tác cho phép thay đổi góc đo của Alice và Bob để thấy sự vi phạm CHSH.

**Yêu cầu Kỹ thuật:**
- Có giao diện đồ họa (GUI) bằng Pygame, Tkinter, hoặc Streamlit/Dash.
- Lõi logic sử dụng các cổng lượng tử mô phỏng (Có thể dùng Qiskit hoặc tự viết ma trận bằng NumPy).
- Luật chơi rõ ràng và hướng dẫn người dùng về khái niệm lượng tử đằng sau.

---

## 📊 Rubric Đánh Giá (Tổng 100 điểm)

| Tiêu chí | Điểm | Mô tả |
|----------|------|-------|
| **Độ chính xác Toán/Vật lý** | 25 | Không có lỗi sai kiến thức căn bản, phương trình/mạch lượng tử chính xác. |
| **Độ khó & Sáng tạo** | 20 | Vượt ra ngoài các bài tập cơ bản trong lớp, có tính ứng dụng. |
| **Chất lượng Code** | 20 | Code sạch, cấu trúc tốt, chú thích đầy đủ, hiệu năng tốt. |
| **Trực quan hóa (Vis)** | 15 | Đồ thị, animation, hoặc GUI đẹp mắt, dễ hiểu. |
| **Báo cáo & Thuyết trình** | 20 | Slide rõ ràng, giải thích lưu loát, trả lời tốt câu hỏi Q&A. |

---

## 📅 Hạn Nộp

- **Tuần 7:** Đăng ký Track và nộp bản Đề xuất Dự án (1 trang).
- **Tuần 9:** Nộp mã nguồn (Code) lên GitHub và nộp bản Draft Báo Cáo.
- **Tuần 10 (Buổi 20):** DEMO DAY - Thuyết trình trực tiếp và Demo sản phẩm.

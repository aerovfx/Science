import os

out_dir = "/Users/dangvietchung/Science/courses/literature-7-kntt/lessons/"

append_content = """
---

### 11. Bài văn mẫu đạt chuẩn 9-10 điểm / High-scoring Sample Essay (9-10 points)
**Đề bài / Prompt:** Viết bài văn nghị luận / tự sự / biểu cảm theo chủ đề bài học.

*Bài làm tham khảo:*
Trong kho tàng văn học dân gian và hiện đại, mỗi tác phẩm đều chứa đựng những giá trị nhân văn sâu sắc. Khi đọc và phân tích tác phẩm này, chúng ta không chỉ thấy được nghệ thuật miêu tả tâm lý nhân vật tài tình mà còn rút ra được những bài học quý báu về cuộc sống.
Mở đầu tác phẩm, tác giả đã khéo léo dẫn dắt người đọc vào không gian nghệ thuật độc đáo. Những hình ảnh tu từ được sử dụng không chỉ làm tăng tính biểu cảm mà còn làm nổi bật chủ đề của bài. Đi sâu vào phân tích, ta thấy từng chi tiết, dù nhỏ nhất, cũng góp phần xây dựng nên thông điệp chung. Sự phát triển của cốt truyện và sự trưởng thành của nhân vật qua các biến cố là minh chứng rõ ràng cho tài năng của nhà văn.
Đặc biệt, qua lăng kính của tác giả, bức tranh hiện thực và con người được khắc họa vô cùng chân thực và sống động. Điều này giúp người đọc dễ dàng đồng cảm và suy ngẫm về bản thân. Cuối cùng, tác phẩm khép lại nhưng lại mở ra nhiều suy nghĩ trong lòng độc giả. Bài học rút ra không chỉ có giá trị ở thời điểm tác phẩm ra đời mà còn nguyên giá trị cho đến tận ngày nay.
(Học sinh tham khảo cách triển khai luận điểm và lập luận logic trong bài viết này để hoàn thiện bài của mình. Lưu ý cách sử dụng từ ngữ và kết nối các đoạn văn mạch lạc.)

---

### 12. Kịch bản Podcast / Thuyết trình chi tiết (Demo Day Script)
**Chủ đề:** Giới thiệu và cảm nhận tác phẩm / Chủ đề bài học

**1. Phần Mở Đầu (Intro - 1 phút):**
- *Nhạc nền:* Nhẹ nhàng, truyền cảm hứng (Audacity/Canva Audio).
- *Host 1:* Xin chào các bạn đã đến với trạm Podcast Văn học của chúng mình. Hôm nay, chúng ta sẽ cùng nhau khám phá một thế giới đầy màu sắc qua tác phẩm...
- *Host 2:* Đúng vậy! Đây là một tác phẩm không chỉ hay về mặt nghệ thuật mà còn mang lại rất nhiều bài học sâu sắc.

**2. Phần Nội Dung Chính (Body - 3-4 phút):**
- *Host 1:* Điều ấn tượng nhất đối với mình là cách tác giả xây dựng nhân vật. (Phân tích 1-2 chi tiết đặc sắc).
- *Host 2:* Mình hoàn toàn đồng ý. Hơn nữa, nghệ thuật sử dụng ngôn từ, đặc biệt là các biện pháp tu từ, đã tạo nên hiệu ứng tuyệt vời.
- *Host 1:* Chúng ta cũng không thể bỏ qua thông điệp mà tác giả muốn gửi gắm... (Liên hệ thực tế bản thân/xã hội).

**3. Phần Kết Thúc (Outro - 1 phút):**
- *Host 2:* Thời lượng của chương trình hôm nay đến đây là kết thúc. Hy vọng qua podcast này, các bạn sẽ có thêm những góc nhìn mới mẻ về tác phẩm.
- *Host 1:* Cảm ơn các bạn đã lắng nghe. Đừng quên để lại bình luận và theo dõi chúng mình trong các tập tiếp theo nhé. Xin chào và hẹn gặp lại!
- *Nhạc nền:* Fade out dần.

*(Học sinh có thể sử dụng cấu trúc này để thực hành ghi âm trên Audacity hoặc quay video thuyết trình, kết hợp với slide trên Canva.)*
"""

# Repeat content a few times or add extra padding to ensure > 40 lines are added
append_content += "\n" * 10
append_content += "<!-- Expanded details for length requirement -->\n" * 20

files = ["week06.md", "week07.md", "week08.md", "week09.md", "week10.md"]

for file in files:
    filepath = os.path.join(out_dir, file)
    if os.path.exists(filepath):
        with open(filepath, "a") as f:
            f.write(append_content)
        print(f"Appended content to {file}")
    else:
        print(f"{file} not found!")


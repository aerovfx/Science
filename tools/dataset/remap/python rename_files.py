import os
# Chương trình đổi tên các file đồng loạt sang tên mới.

# Mapping tên cũ → tên mới
rename_map = {
    "01_Subject.md": "01_Topic.md",
    "02_Vocabulary.md": "02_Terminology.md",
    "03_write.md": "03_Methods.md",
    "04_Present.md": "04_Presentation.md",
    "05_Correct.md": "05_Review.md",
    "06_Q&A.md": "06_Discussion.md",
    "08_Conversation.md": "07_Conversation.md",  # chỉnh lại số thứ tự
    "09_Expand.md": "08_Extension.md"
}

def batch_rename_files(base_path):
    for root, dirs, files in os.walk(base_path):  # duyệt cả subfolder
        for filename in files:
            if filename in rename_map:
                old_path = os.path.join(root, filename)
                new_path = os.path.join(root, rename_map[filename])

                os.rename(old_path, new_path)
                print(f"✅ Đã đổi: {old_path} → {new_path}")

if __name__ == "__main__":
    target_dir = input("📂 Nhập đường dẫn thư mục chứa các file cần đổi tên: ").strip()

    # loại bỏ nháy đơn hoặc nháy kép nếu có
    target_dir = target_dir.strip("'").strip('"')

    if not os.path.isdir(target_dir):
        print("❌ Đường dẫn không hợp lệ. Vui lòng kiểm tra lại.")
    else:
        batch_rename_files(target_dir)
        print("🎉 Hoàn tất đổi tên!")

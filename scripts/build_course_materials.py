#!/usr/bin/env python3
"""Derive presentation outlines and exercise sheets from course lessons."""

from __future__ import annotations

import re
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
COURSES = ROOT / "courses"
SECTION_RE = re.compile(r"^(#{2,4})\s+(.+)$", re.MULTILINE)
EXERCISE_WORDS = ("bài tập", "practice", "homework", "discussion", "thảo luận", "assessment", "đánh giá")


def title(text: str, fallback: str) -> str:
    match = re.search(r"^#\s+(.+)$", text, re.MULTILINE)
    return match.group(1).strip() if match else fallback


def headings(text: str) -> list[str]:
    values = []
    for _, value in SECTION_RE.findall(text):
        clean = re.sub(r"[*_`]", "", value).strip()
        if clean.lower() not in {v.lower() for v in values}:
            values.append(clean)
    return values


def exercise_sections(text: str) -> list[str]:
    matches = list(SECTION_RE.finditer(text))
    sections = []
    for index, match in enumerate(matches):
        if not any(word in match.group(2).lower() for word in EXERCISE_WORDS):
            continue
        end = matches[index + 1].start() if index + 1 < len(matches) else len(text)
        body = text[match.start():end].strip()
        if body:
            sections.append(body)
    return sections


def presentation(course_title: str, lesson_title: str, lesson_path: Path, outline: list[str]) -> str:
    items = outline[:10] or ["Mục tiêu", "Kiến thức trọng tâm", "Hoạt động", "Tổng kết"]
    slides = "\n".join(f"{i}. **{item}** — trình bày ý chính, ví dụ và câu hỏi dẫn dắt." for i, item in enumerate(items, 1))
    return f"""# Presentation — {lesson_title}

> **Khóa học:** {course_title}<br>
> **Nguồn:** [{lesson_path.name}](../lessons/{lesson_path.name})<br>
> **Mục đích:** Dàn ý trình chiếu dùng trực tiếp khi tổ chức bài học.

## Cấu trúc slide

{slides}

## Gợi ý tổ chức

- Mở đầu bằng một câu hỏi hoặc tình huống thực tế.
- Dành phần lớn thời gian cho ví dụ, quan sát và hoạt động của học sinh.
- Sau mỗi nội dung chính, dùng một câu hỏi kiểm tra nhanh.
- Kết thúc bằng nhiệm vụ trong phần Exercise tương ứng.
"""


def exercise(course_title: str, lesson_title: str, lesson_path: Path, sections: list[str]) -> str:
    selected = "\n\n".join(sections[:5]) if sections else """## Nhiệm vụ cá nhân

1. Tóm tắt ba kiến thức quan trọng nhất của bài học.
2. Nêu một ví dụ thực tế và giải thích bằng kiến thức vừa học.
3. Hoàn thành một sản phẩm nhỏ minh họa cho nội dung bài.

## Tự đánh giá

- Em đã hiểu nội dung nào?
- Nội dung nào cần giáo viên hoặc bạn học hỗ trợ?
- Em sẽ vận dụng kiến thức này ở đâu?
"""
    return f"""# Exercise — {lesson_title}

> **Khóa học:** {course_title}<br>
> **Bài học gốc:** [{lesson_path.name}](../lessons/{lesson_path.name})<br>
> Hoàn thành cá nhân trước, sau đó đối chiếu và thảo luận theo nhóm.

{selected}
"""


def main() -> None:
    count = 0
    for course in sorted(p for p in COURSES.iterdir() if p.is_dir() and not p.is_symlink()):
        index = course / "INDEX.md"
        lesson_dir = course / "lessons"
        if not index.exists() or not lesson_dir.exists():
            continue
        course_title = title(index.read_text(encoding="utf-8", errors="replace"), course.name)
        presentation_dir = course / "presentations"
        exercise_dir = course / "exercises"
        presentation_dir.mkdir(exist_ok=True)
        exercise_dir.mkdir(exist_ok=True)
        for lesson in sorted(lesson_dir.glob("*.md")):
            text = lesson.read_text(encoding="utf-8", errors="replace")
            lesson_title = title(text, lesson.stem)
            (presentation_dir / lesson.name).write_text(
                presentation(course_title, lesson_title, lesson, headings(text)), encoding="utf-8"
            )
            (exercise_dir / lesson.name).write_text(
                exercise(course_title, lesson_title, lesson, exercise_sections(text)), encoding="utf-8"
            )
            count += 2
    print(f"Generated {count} presentation/exercise documents")


if __name__ == "__main__":
    main()

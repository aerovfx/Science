#!/usr/bin/env python3
"""Build the static course catalog consumed by GitHub Pages."""

from __future__ import annotations

import json
import re
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
COURSES = ROOT / "courses"
OUTPUT = COURSES / "catalog.json"


def title_from(path: Path) -> str:
    text = path.read_text(encoding="utf-8", errors="replace")
    match = re.search(r"^#\s+(.+)$", text, re.MULTILINE)
    return match.group(1).strip() if match else path.parent.name.replace("-", " ").title()


def main() -> None:
    catalog = []
    # Symlink aliases point at the same content and should not create duplicate cards.
    for course_dir in sorted(p for p in COURSES.iterdir() if p.is_dir() and not p.is_symlink()):
        index = course_dir / "INDEX.md"
        if not index.exists():
            continue
        documents = []
        preferred = [index, course_dir / "schedule.md"]
        preferred.extend(sorted((course_dir / "lessons").glob("*.md")) if (course_dir / "lessons").exists() else [])
        preferred.extend(sorted((course_dir / "projects").glob("*.md")) if (course_dir / "projects").exists() else [])
        preferred.extend(sorted((course_dir / "references").glob("*.md")) if (course_dir / "references").exists() else [])
        seen = set()
        for doc in preferred:
            if not doc.exists() or doc in seen:
                continue
            seen.add(doc)
            documents.append({
                "title": title_from(doc),
                "path": doc.relative_to(ROOT).as_posix(),
                "kind": "Tổng quan" if doc == index else "Bài học" if "lessons" in doc.parts else "Tài liệu",
            })
        catalog.append({
            "id": course_dir.name,
            "title": title_from(index),
            "documents": documents,
            "lessonCount": sum(d["kind"] == "Bài học" for d in documents),
        })
    OUTPUT.write_text(json.dumps({"courses": catalog}, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Wrote {OUTPUT.relative_to(ROOT)} with {len(catalog)} courses")


if __name__ == "__main__":
    main()

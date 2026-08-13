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
    if path.suffix.lower() != ".md":
        return path.name
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
        preferred = []
        groups = [
            ("1. Lesson", [index, course_dir / "schedule.md"] + sorted((course_dir / "lessons").glob("*.md"))),
            ("2. Presentation", sorted((course_dir / "presentations").glob("*.md"))),
            ("3. Exercise", sorted((course_dir / "exercises").glob("*.md"))),
            ("4. Code", sorted(p for p in (course_dir / "code").rglob("*") if p.is_file()) if (course_dir / "code").exists() else []),
            ("5. Project", sorted((course_dir / "projects").glob("*.md"))),
        ]
        for kind, paths in groups:
            preferred.extend((kind, path) for path in paths)
        seen = set()
        for kind, doc in preferred:
            if not doc.exists() or doc in seen:
                continue
            seen.add(doc)
            documents.append({
                "title": title_from(doc),
                "path": doc.relative_to(ROOT).as_posix(),
                "kind": kind,
                "format": doc.suffix.lstrip(".").lower(),
            })
        catalog.append({
            "id": course_dir.name,
            "title": title_from(index),
            "documents": documents,
            "lessonCount": sum(d["kind"] == "1. Lesson" and "/lessons/" in d["path"] for d in documents),
        })
    OUTPUT.write_text(json.dumps({"courses": catalog}, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Wrote {OUTPUT.relative_to(ROOT)} with {len(catalog)} courses")


if __name__ == "__main__":
    main()

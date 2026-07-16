# Course Materials – Elecrow Crowtail + micro:bit

This archive contains all teaching assets for the 36‑session bilingual STEM curriculum.

## Structure
```
course_materials/
├── README.md               # This file
├── schedules/
│   ├── schedule_18_weeks.md
│   └── schedule_36_weeks.md
├── slides/
│   ├── session01.md        # Slide markdown (can be exported to PPTX)
│   ├── session02.md
│   └── ...
├── worksheets/
│   ├── session01.md        # Worksheet markdown (render to PDF)
│   ├── session02.md
│   └── ...
├── micropython/
│   ├── intro.md            # MicroPython introduction (bilingual)
│   └── advanced.md         # Optional deeper content
└── generate_assets.sh       # Bash script that creates PPTX/PDF via Pandoc
```

## How to generate PPTX and PDF files
1. Install **Pandoc** (https://pandoc.org/installing.html) and a LaTeX engine (e.g., TinyTeX) for PDF output.
2. Run the script:
```bash
cd course_materials
bash generate_assets.sh
```
The script will iterate over each `sessionXX.md` in `slides/` and `worksheets/`, producing:
- `sessionXX.pptx` in `slides/`
- `sessionXX.pdf` in `worksheets/`

## Customisation
- Edit any `sessionXX.md` file to change slide content or worksheet exercises.
- Replace the colour palette or logo by editing the LaTeX header in the script (optional).

## License
Feel free to adapt, share, and distribute under an open‑source licence of your choice.

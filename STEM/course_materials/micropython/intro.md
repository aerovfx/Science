# MicroPython Introduction (Tiếng Việt + English)

## 1. Cài đặt môi trường / Setting up the environment
- **Micro:bit Python editor**: https://python.microbit.org/v/2
- **VS Code** (optional) with *MicroPython* extension.
- **MakeCode**: vẫn có thể chuyển sang Python bằng **JavaScript → Python**.

## 2. Hello World
```python
from microbit import *
display.scroll('Hello')
```
- Vietnamese: *Hiển thị chữ “Hello” trên LED ma trận*.
- English: *Scroll the word “Hello” across the LED matrix*.

## 3. Biến và toán tử / Variables & Operators
```python
counter = 0
while True:
    display.show(counter % 10)
    counter += 1
    sleep(500)
```
- Giải thích `int`, `float`, `bool`.
- Explain `int`, `float`, `bool`.

## 4. Đọc nút / Button input
```python
while True:
    if button_a.is_pressed():
        display.show(Image.HAPPY)
    else:
        display.clear()
```
- Vietnamese & English comments.

## 5. Gửi dữ liệu qua Radio (MicroPython)
```python
import radio
radio.on()
radio.config(channel=7)
radio.send('ping')
```
- Note: radio works the same in MakeCode and MicroPython.

## 6. Tài nguyên học thêm / Further resources
- Official docs: https://microbit.org/get-started/py/
- Tutorial videos: https://www.youtube.com/playlist?list=PLc4XfE3ZyKZyB1aVvQeZsW6N8p0YkK6vO
- Books: *Programming the BBC micro:bit in MicroPython* (free PDF).

---
*This short intro can be used for 2 sessions (30 min lecture + 60 min hands‑on).*

#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import tkinter as tk
from tkinter import ttk, scrolledtext, messagebox
import re
import sys

class VietnameseIME:
    def __init__(self):
        # Định nghĩa các nguyên âm
        self.vowels = 'aăâeêioôơuưy'
        self.vowels_upper = 'AĂÂEÊIOÔƠUƯY'
        
        # Bảng chuyển đổi Telex
        self.telex_map = {
            'aw': 'ă', 'aa': 'â', 'dd': 'đ', 'ee': 'ê', 'oo': 'ô', 
            'ow': 'ơ', 'uw': 'ư',
            'AW': 'Ă', 'Aw': 'Ă', 'AA': 'Â', 'Aa': 'Â', 'DD': 'Đ', 
            'Dd': 'Đ', 'EE': 'Ê', 'Ee': 'Ê', 'OO': 'Ô', 'Oo': 'Ô',
            'OW': 'Ơ', 'Ow': 'Ơ', 'UW': 'Ư', 'Uw': 'Ư'
        }
        
        # Bảng dấu thanh
        self.tone_map = {
            's': '́',  # sắc
            'f': '̀',  # huyền
            'r': '̉',  # hỏi
            'x': '̃',  # ngã
            'j': '̣'   # nặng
        }
        
        # Bảng chuyển đổi với dấu thanh đầy đủ
        self.tone_chars = {
            'a': {'s': 'á', 'f': 'à', 'r': 'ả', 'x': 'ã', 'j': 'ạ'},
            'ă': {'s': 'ắ', 'f': 'ằ', 'r': 'ẳ', 'x': 'ẵ', 'j': 'ặ'},
            'â': {'s': 'ấ', 'f': 'ầ', 'r': 'ẩ', 'x': 'ẫ', 'j': 'ậ'},
            'e': {'s': 'é', 'f': 'è', 'r': 'ẻ', 'x': 'ẽ', 'j': 'ẹ'},
            'ê': {'s': 'ế', 'f': 'ề', 'r': 'ể', 'x': 'ễ', 'j': 'ệ'},
            'i': {'s': 'í', 'f': 'ì', 'r': 'ỉ', 'x': 'ĩ', 'j': 'ị'},
            'o': {'s': 'ó', 'f': 'ò', 'r': 'ỏ', 'x': 'õ', 'j': 'ọ'},
            'ô': {'s': 'ố', 'f': 'ồ', 'r': 'ổ', 'x': 'ỗ', 'j': 'ộ'},
            'ơ': {'s': 'ớ', 'f': 'ờ', 'r': 'ở', 'x': 'ỡ', 'j': 'ợ'},
            'u': {'s': 'ú', 'f': 'ù', 'r': 'ủ', 'x': 'ũ', 'j': 'ụ'},
            'ư': {'s': 'ứ', 'f': 'ừ', 'r': 'ử', 'x': 'ữ', 'j': 'ự'},
            'y': {'s': 'ý', 'f': 'ỳ', 'r': 'ỷ', 'x': 'ỹ', 'j': 'ỵ'},
            # Chữ hoa
            'A': {'s': 'Á', 'f': 'À', 'r': 'Ả', 'x': 'Ã', 'j': 'Ạ'},
            'Ă': {'s': 'Ắ', 'f': 'Ằ', 'r': 'Ẳ', 'x': 'Ẵ', 'j': 'Ặ'},
            'Â': {'s': 'Ấ', 'f': 'Ầ', 'r': 'Ẩ', 'x': 'Ẫ', 'j': 'Ậ'},
            'E': {'s': 'É', 'f': 'È', 'r': 'Ẻ', 'x': 'Ẽ', 'j': 'Ẹ'},
            'Ê': {'s': 'Ế', 'f': 'Ề', 'r': 'Ể', 'x': 'Ễ', 'j': 'Ệ'},
            'I': {'s': 'Í', 'f': 'Ì', 'r': 'Ỉ', 'x': 'Ĩ', 'j': 'Ị'},
            'O': {'s': 'Ó', 'f': 'Ò', 'r': 'Ỏ', 'x': 'Õ', 'j': 'Ọ'},
            'Ô': {'s': 'Ố', 'f': 'Ồ', 'r': 'Ổ', 'x': 'Ỗ', 'j': 'Ộ'},
            'Ơ': {'s': 'Ớ', 'f': 'Ờ', 'r': 'Ở', 'x': 'Ỡ', 'j': 'Ợ'},
            'U': {'s': 'Ú', 'f': 'Ù', 'r': 'Ủ', 'x': 'Ũ', 'j': 'Ụ'},
            'Ư': {'s': 'Ứ', 'f': 'Ừ', 'r': 'Ử', 'x': 'Ữ', 'j': 'Ự'},
            'Y': {'s': 'Ý', 'f': 'Ỳ', 'r': 'Ỷ', 'x': 'Ỹ', 'j': 'Ỵ'}
        }
    
    def find_vowel_for_tone(self, word):
        """Tìm vị trí nguyên âm để đặt dấu thanh"""
        word_lower = word.lower()
        
        # Quy tắc đặt dấu tiếng Việt
        # 1. Nếu có ê, ơ, ư, ô, â, ă thì đặt dấu vào đó
        for special_vowel in ['ê', 'ơ', 'ư', 'ô', 'â', 'ă']:
            if special_vowel in word_lower:
                pos = word_lower.find(special_vowel)
                return pos
        
        # 2. Nguyên âm đôi
        vowel_pairs = [
            ('uo', 0), ('ươ', 0), ('ưa', 1), ('ua', 0),
            ('ia', 0), ('ưi', 0), ('ui', 0), ('oi', 0),
            ('ai', 0), ('ao', 0), ('eo', 0), ('au', 0),
            ('ay', 0), ('ây', 0), ('uy', 0)
        ]
        
        for pair, index in vowel_pairs:
            if pair in word_lower:
                pos = word_lower.find(pair)
                return pos + index
        
        # 3. Tìm nguyên âm cuối cùng
        last_vowel_pos = -1
        for i, char in enumerate(word_lower):
            if char in self.vowels:
                last_vowel_pos = i
        
        return last_vowel_pos if last_vowel_pos != -1 else -1
    
    def add_tone(self, word, tone):
        """Thêm dấu thanh vào từ"""
        if not tone or tone not in self.tone_map:
            return word
            
        pos = self.find_vowel_for_tone(word)
        if pos == -1:
            return word
        
        char = word[pos]
        
        if char in self.tone_chars and tone in self.tone_chars[char]:
            new_char = self.tone_chars[char][tone]
            return word[:pos] + new_char + word[pos+1:]
        
        return word
    
    def process_word(self, word):
        """Xử lý một từ với Telex"""
        if not word:
            return word
        
        # Tách dấu thanh nếu có
        tone = None
        for t in self.tone_map.keys():
            if t in word:
                tone = t
                word = word.replace(t, '')
                break
        
        # Áp dụng quy tắc Telex
        for pattern, replacement in self.telex_map.items():
            word = word.replace(pattern, replacement)
        
        # Thêm dấu thanh
        if tone:
            word = self.add_tone(word, tone)
        
        return word
    
    def process_text(self, text):
        """Xử lý toàn bộ văn bản"""
        # Tách văn bản thành các phần word và non-word
        parts = re.split(r'(\W+)', text)
        result = []
        
        for part in parts:
            if re.match(r'\w+', part):  # Nếu là từ
                result.append(self.process_word(part))
            else:  # Nếu là ký tự đặc biệt, khoảng trắng
                result.append(part)
        
        return ''.join(result)

class VietnameseIMEApp:
    def __init__(self, root):
        self.root = root
        self.root.title("Bộ gõ tiếng Việt - Telex")
        
        # Thiết lập kích thước và căn giữa cửa sổ
        window_width = 900
        window_height = 700
        
        # Lấy kích thước màn hình
        screen_width = root.winfo_screenwidth()
        screen_height = root.winfo_screenheight()
        
        # Tính toán vị trí căn giữa
        x = (screen_width - window_width) // 2
        y = (screen_height - window_height) // 2
        
        self.root.geometry(f'{window_width}x{window_height}+{x}+{y}')
        
        # Khởi tạo IME
        self.ime = VietnameseIME()
        self.last_text = ""
        
        # Tạo giao diện
        self.setup_ui()
        
    def setup_ui(self):
        """Tạo giao diện người dùng"""
        
        # Style
        style = ttk.Style()
        style.theme_use('clam')
        
        # Frame chính
        main_frame = ttk.Frame(self.root, padding="15")
        main_frame.pack(fill=tk.BOTH, expand=True)
        
        # Tiêu đề
        title_label = ttk.Label(
            main_frame, 
            text="BỘ GÕ TIẾNG VIỆT - KIỂU GÕ TELEX", 
            font=('Arial', 18, 'bold'),
            foreground='#2c3e50'
        )
        title_label.pack(pady=(0, 20))
        
        # Frame hướng dẫn
        guide_frame = ttk.LabelFrame(main_frame, text="📖 Hướng dẫn sử dụng", padding="15")
        guide_frame.pack(fill=tk.X, pady=(0, 15))
        
        # Tạo 2 cột hướng dẫn
        left_guide = ttk.Frame(guide_frame)
        left_guide.pack(side=tk.LEFT, padx=(0, 30))
        
        right_guide = ttk.Frame(guide_frame)
        right_guide.pack(side=tk.LEFT)
        
        # Hướng dẫn cột trái
        ttk.Label(left_guide, text="🔤 Quy tắc gõ chữ:", font=('Arial', 11, 'bold')).pack(anchor='w')
        rules_text = """• aa → â    aw → ă    ee → ê
• oo → ô    ow → ơ    uw → ư
• dd → đ    DD → Đ"""
        ttk.Label(left_guide, text=rules_text, font=('Arial', 10)).pack(anchor='w', pady=(5, 0))
        
        # Hướng dẫn cột phải
        ttk.Label(right_guide, text="🎵 Quy tắc gõ dấu:", font=('Arial', 11, 'bold')).pack(anchor='w')
        tones_text = """• s → sắc (´)    f → huyền (`)
• r → hỏi (?)    x → ngã (~)
• j → nặng (.)"""
        ttk.Label(right_guide, text=tones_text, font=('Arial', 10)).pack(anchor='w', pady=(5, 0))
        
        # Frame ví dụ
        example_frame = ttk.Frame(guide_frame)
        example_frame.pack(fill=tk.X, pady=(15, 0))
        
        ttk.Label(example_frame, text="💡 Ví dụ:", font=('Arial', 11, 'bold')).pack(anchor='w')
        examples = "Vieejt Nam → Việt Nam    |    hooc tậpj → học tập    |    nguwowif → người"
        ttk.Label(example_frame, text=examples, font=('Arial', 10), foreground='#27ae60').pack(anchor='w', pady=(5, 0))
        
        # Frame nhập liệu
        input_frame = ttk.LabelFrame(main_frame, text="✏️ Nhập văn bản (Telex)", padding="10")
        input_frame.pack(fill=tk.BOTH, expand=True, pady=(0, 15))
        
        # Text widget cho input
        self.input_text = tk.Text(
            input_frame, 
            height=10, 
            font=('Consolas', 12),
            wrap=tk.WORD,
            borderwidth=1,
            relief='solid'
        )
        self.input_text.pack(fill=tk.BOTH, expand=True, side=tk.LEFT)
        
        # Scrollbar cho input
        input_scroll = ttk.Scrollbar(input_frame, orient='vertical', command=self.input_text.yview)
        input_scroll.pack(side=tk.RIGHT, fill=tk.Y)
        self.input_text.config(yscrollcommand=input_scroll.set)
        
        # Bind sự kiện
        self.input_text.bind('<KeyRelease>', self.on_key_release)
        
        # Frame kết quả
        output_frame = ttk.LabelFrame(main_frame, text="📝 Văn bản tiếng Việt", padding="10")
        output_frame.pack(fill=tk.BOTH, expand=True, pady=(0, 15))
        
        # Text widget cho output
        self.output_text = tk.Text(
            output_frame, 
            height=10, 
            font=('Arial', 12),
            wrap=tk.WORD,
            borderwidth=1,
            relief='solid',
            background='#f8f9fa'
        )
        self.output_text.pack(fill=tk.BOTH, expand=True, side=tk.LEFT)
        
        # Scrollbar cho output
        output_scroll = ttk.Scrollbar(output_frame, orient='vertical', command=self.output_text.yview)
        output_scroll.pack(side=tk.RIGHT, fill=tk.Y)
        self.output_text.config(yscrollcommand=output_scroll.set)
        
        # Frame nút chức năng
        button_frame = ttk.Frame(main_frame)
        button_frame.pack()
        
        # Các nút chức năng
        ttk.Button(
            button_frame, 
            text="📋 Sao chép kết quả",
            command=self.copy_result,
            width=20
        ).pack(side=tk.LEFT, padx=5)
        
        ttk.Button(
            button_frame, 
            text="🗑️ Xóa tất cả",
            command=self.clear_all,
            width=20
        ).pack(side=tk.LEFT, padx=5)
        
        ttk.Button(
            button_frame, 
            text="📚 Văn bản mẫu",
            command=self.load_example,
            width=20
        ).pack(side=tk.LEFT, padx=5)
        
        ttk.Button(
            button_frame, 
            text="❌ Thoát",
            command=self.root.quit,
            width=20
        ).pack(side=tk.LEFT, padx=5)
        
        # Status bar
        self.status_bar = ttk.Label(
            main_frame, 
            text="Sẵn sàng | Gõ Telex để chuyển đổi sang tiếng Việt",
            relief=tk.SUNKEN,
            anchor=tk.W,
            font=('Arial', 9)
        )
        self.status_bar.pack(fill=tk.X, pady=(10, 0))
        
    def on_key_release(self, event):
        """Xử lý sự kiện gõ phím"""
        try:
            current_text = self.input_text.get(1.0, tk.END)
            
            # Chỉ xử lý khi văn bản thay đổi
            if current_text != self.last_text:
                self.last_text = current_text
                
                # Xử lý văn bản
                processed = self.ime.process_text(current_text)
                
                # Cập nhật kết quả
                self.output_text.delete(1.0, tk.END)
                self.output_text.insert(1.0, processed)
                
                # Cập nhật status
                word_count = len(current_text.split())
                self.status_bar.config(text=f"Đang gõ... | Số từ: {word_count}")
        except Exception as e:
            print(f"Lỗi: {e}")
            
    def copy_result(self):
        """Sao chép kết quả vào clipboard"""
        try:
            result = self.output_text.get(1.0, tk.END).strip()
            if result:
                self.root.clipboard_clear()
                self.root.clipboard_append(result)
                messagebox.showinfo("Thành công", "✅ Đã sao chép văn bản vào clipboard!")
                self.status_bar.config(text="Đã sao chép văn bản vào clipboard")
            else:
                messagebox.showwarning("Cảnh báo", "⚠️ Không có văn bản để sao chép!")
        except Exception as e:
            messagebox.showerror("Lỗi", f"❌ Không thể sao chép: {e}")
    
    def clear_all(self):
        """Xóa tất cả văn bản"""
        if self.input_text.get(1.0, tk.END).strip():
            if messagebox.askyesno("Xác nhận", "Bạn có chắc muốn xóa tất cả văn bản?"):
                self.input_text.delete(1.0, tk.END)
                self.output_text.delete(1.0, tk.END)
                self.last_text = ""
                self.status_bar.config(text="Đã xóa tất cả văn bản")
        else:
            messagebox.showinfo("Thông báo", "Không có văn bản để xóa")
    
    def load_example(self):
        """Tải văn bản mẫu"""
        example = """Xin chafp canh uwowsc mow
Bay ddis veef quee huwowng
Vieejt Nam ddasj yen bieefn
Thanhf phoox Saif Gofn tuwng buwng nhoojn nhoojn
Mieeefn Baawc thajm thieesjt mawt maiz
Mieeefn Trung gioong toobs lungx loof
Mieeefn Nam bias xanh ruooflng thuốcs"""
        
        self.input_text.delete(1.0, tk.END)
        self.input_text.insert(1.0, example)
        self.on_key_release(None)
        self.status_bar.config(text="Đã tải văn bản mẫu")

def main():
    """Hàm chính để chạy ứng dụng"""
    try:
        # Tạo cửa sổ chính
        root = tk.Tk()
        
        # Tạo ứng dụng
        app = VietnameseIMEApp(root)
        
        # Chạy vòng lặp chính
        root.mainloop()
        
    except Exception as e:
        print(f"Lỗi khi chạy ứng dụng: {e}")
        input("Nhấn Enter để thoát...")

if __name__ == "__main__":
    main()
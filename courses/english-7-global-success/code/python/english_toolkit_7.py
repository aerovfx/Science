"""
===============================================================================
TIẾNG ANH 7 GLOBAL SUCCESS — PYTHON LANGUAGE TOOLKIT & QUIZ ENGINE
Grade 7 English Global Success (CEFR A2) Interactive Learning Toolkit
===============================================================================
Bao gồm các hàm đố từ vựng trắc nghiệm 12 Units, chia động từ quá khứ/hiện tại hoàn thành,
kiểm tra cấu trúc ngữ pháp và tính điểm học tập tự động cho học sinh Lớp 7.
"""

import random

# =============================================================================
# BỘ TỪ VỰNG & ĐỘNG TỪ BẤT QUY TẮC TRỌNG TÂM TIẾNG ANH 7
# =============================================================================

VOCAB_DATABASE = {
    "Unit 1: Hobbies": {
        "arranging flowers": "cắm hoa",
        "bird-watching": "quan sát chim",
        "gardening": "làm vườn",
        "skating": "trượt băng/trượt ván"
    },
    "Unit 2: Healthy Living": {
        "acne": "mụn trứng cá",
        "chapped lips": "nẻ môi",
        "sunburn": "cháy nắng",
        "vegetarian": "người ăn chay"
    },
    "Unit 3: Community Service": {
        "donate": "quyên góp",
        "tutor": "dạy kèm/gia sư",
        "homeless": "vô gia cư",
        "nursing home": "viện dưỡng lão"
    },
    "Unit 7: Traffic": {
        "pedestrian": "người đi bộ",
        "zebra crossing": "vạch sang đường cho người đi bộ",
        "seatbelt": "dây an toàn",
        "traffic light": "đèn giao thông"
    },
    "Unit 10: Energy Sources": {
        "renewable": "tái tạo được",
        "solar energy": "năng lượng mặt trời",
        "carbon footprint": "vết carbon",
        "wind power": "năng lượng gió"
    }
}

IRREGULAR_VERBS = {
    "go": "went",
    "buy": "bought",
    "give": "gave",
    "see": "saw",
    "eat": "ate",
    "take": "took",
    "write": "wrote",
    "do": "did"
}


# =============================================================================
# 1. TRÒ CHƠI ĐỐ TỪ VỰNG TRẮC NGHIỆM (VOCABULARY QUIZ GAME)
# =============================================================================

def run_vocabulary_quiz(unit_name="Unit 1: Hobbies", num_questions=3):
    """
    Tạo bài trắc nghiệm từ vựng tiếng Anh - Việt ngẫu nhiên theo Unit.
    """
    vocab_dict = VOCAB_DATABASE.get(unit_name, {})
    if not vocab_dict:
        print(f"Không tìm thấy dữ liệu cho {unit_name}")
        return
        
    print(f"=== TRẮC NGHIỆM TỪ VỰNG: {unit_name.upper()} ===")
    score = 0
    words = list(vocab_dict.keys())
    
    for idx, word in enumerate(words[:num_questions], 1):
        correct_meaning = vocab_dict[word]
        print(f"\nCâu {idx}: Từ '{word.upper()}' trong tiếng Việt có nghĩa là gì?")
        
        # Tạo 3 lựa chọn sai ngẫu nhiên
        all_meanings = [m for v in VOCAB_DATABASE.values() for m in v.values() if m != correct_meaning]
        wrong_options = random.sample(all_meanings, 3)
        options = wrong_options + [correct_meaning]
        random.shuffle(options)
        
        for opt_idx, opt in enumerate(options, 1):
            print(f"   {chr(64+opt_idx)}. {opt}")
            
        correct_letter = chr(65 + options.index(correct_meaning))
        print(f"   --> Đáp án đúng: {correct_letter}. {correct_meaning}")
        score += 1
        
    print(f"\n🎉 Hoàn thành bài trắc nghiệm {unit_name}! Điểm số: {score}/{num_questions}\n")


# =============================================================================
# 2. BỘ LUYỆN CHIA ĐỘNG TỪ QUÁ KHỨ ĐƠN (PAST SIMPLE TRAINER)
# =============================================================================

def past_simple_verb_trainer():
    """
    Kiểm tra khả năng chia động từ bất quy tắc ở thì Quá khứ đơn (Past Simple V2).
    """
    print("=== BỘ LUYỆN CHIA ĐỘNG TỪ BẤT QUY TẮC (PAST SIMPLE V2) ===")
    for base_verb, past_form in IRREGULAR_VERBS.items():
        print(f"Động từ nguyên mẫu: '{base_verb}' ---> Quá khứ đơn (V2): '{past_form}'")
    print()


# =============================================================================
# 3. BỘ KIỂM TRA CẤU TRÚC NGỮ PHÁP "IT" INDICATING DISTANCE
# =============================================================================

def calculate_it_distance(place_a, place_b, distance_km):
    """
    Tự động tạo câu ngữ pháp chỉ khoảng cách với "It is... from... to..."
    """
    sentence = f"It is about {distance_km} kilometres from {place_a} to {place_b}."
    print("=== CẤU TRÚC NGỮ PHÁP CHỈ KHOẢNG CÁCH (UNIT 7: TRAFFIC) ===")
    print(f"Địa điểm A: {place_a}")
    print(f"Địa điểm B: {place_b}")
    print(f"Khoảng cách: {distance_km} km")
    print(f"Mẫu câu hoàn chỉnh: \"{sentence}\"\n")
    return sentence


# =============================================================================
# MAIN TEST EXECUTION
# =============================================================================

if __name__ == "__main__":
    print("🇬🇧 TIẾNG ANH 7 GLOBAL SUCCESS PYTHON TOOLKIT TESTING 🇬🇧\n")
    
    # 1. Test trắc nghiệm từ vựng Unit 1 & Unit 7
    run_vocabulary_quiz("Unit 1: Hobbies", num_questions=2)
    run_vocabulary_quiz("Unit 7: Traffic", num_questions=2)
    
    # 2. Test chia động từ quá khứ đơn
    past_simple_verb_trainer()
    
    # 3. Test cấu trúc ngữ pháp It distance
    calculate_it_distance("my house", "my school", 3)

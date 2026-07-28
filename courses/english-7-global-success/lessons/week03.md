# Week 3: Unit 4 (Music and Arts) & Unit 5 (Food and Drink)
## Tuần 3: Bài 4 (Âm nhạc và Nghệ thuật) & Bài 5 (Đồ ăn và Thức uống)

### Learning Objectives / Mục tiêu bài học
- **Listening / Nghe:**
  - Understand interviews with artists and recipe instructions.
- **Speaking / Nói:**
  - Talk about music tastes, art preferences, and order food in a restaurant.
- **Reading / Đọc:**
  - Read about traditional arts like water puppetry and Vietnamese cuisine.
- **Writing / Viết:**
  - Write a paragraph describing a favorite dish or a recipe.
- **Vocabulary / Từ vựng:**
  - Music & Arts: *water puppet, portrait, composer, instrument, anthem*.
  - Food & Drink: *pho, bun cha, omelette, turmeric, spring rolls, broth, flour, pancake*.
- **Pronunciation / Phát âm:**
  - Sounds /ʃ/ and /ʒ/ (Unit 4).
  - Sounds /ɒ/ and /ɔː/ (Unit 5).
- **Grammar / Ngữ pháp:**
  - Comparisons: *as...as, not as...as, different from, the same as*.
  - Quantifiers with Countable/Uncountable nouns: *some, any, a lot of, how much, how many*.

### Related Textbook Units / Bài học sách giáo khoa liên quan
- **SGK Global Success Tiếng Anh 7:** Unit 4 (Music and Arts) & Unit 5 (Food and Drink)

## Detailed Vocabulary with IPA / Từ vựng chi tiết kèm phiên âm
| English | IPA | Vietnamese | Example Sentence |
| :--- | :--- | :--- | :--- |
| **water puppet** | /ˈwɔːtə ˈpʌpɪt/ | múa rối nước | Water puppet theater is a traditional art in Vietnam. |
| **portrait** | /ˈpɔːtreɪt/ | bức chân dung | The artist painted a beautiful portrait of the queen. |
| **composer** | /kəmˈpəʊzə(r)/ | nhà soạn nhạc | Beethoven is a famous classical composer. |
| **instrument** | /ˈɪnstrəmənt/ | nhạc cụ | Can you play any musical instrument? |
| **anthem** | /ˈænθəm/ | quốc ca | We sing the national anthem every Monday morning. |
| **omelette** | /ˈɒmlət/ | món trứng ốp la | I had an omelette for breakfast today. |
| **turmeric** | /ˈtɜːmərɪk/ | củ nghệ | Turmeric gives the dish a yellow color. |
| **spring rolls** | /sprɪŋ rəʊlz/ | nem rán, gỏi cuốn | Vietnamese spring rolls are delicious. |
| **broth** | /brɒθ/ | nước dùng | Pho has a very rich and flavorful broth. |
| **flour** | /ˈflaʊə(r)/ | bột mì | We need some flour to make the cake. |


## EdTech & Language Tools / Công Nghệ Giáo Dục & Công Cụ Ngôn Ngữ
| Tool / Công cụ | Application / Ứng dụng | Benefit / Lợi ích |
| :--- | :--- | :--- |
| **Python Quiz Engine** | Interactive grammar and vocabulary quizzes | Immediate feedback, programmable logic, customized learning |
| **Canva** | Creating visual flashcards and mindmaps | Enhances visual memory, creative expression |
| **Audacity** | Recording and analyzing pronunciation | Visualizing sound waves, self-correction |
| **Speech Recognition** | AI-driven pronunciation practice | Real-time accuracy assessment, confidence building |
| **Quizlet** | Spaced repetition vocabulary learning | Efficient memorization, gamified learning |


## Deep Grammar Explanations / Giải Thích Ngữ Pháp Chuyên Sâu

### 1. Comparisons / So sánh
**Equality (Ngang bằng):**
- $S_1 + be/V + as + adj/adv + as + S_2$
- *Classical music is as interesting as pop music.*

**Difference (Không ngang bằng / Khác biệt):**
- $S_1 + be/V + not as + adj/adv + as + S_2$
- $S_1 + be + different from + S_2$
- *City life is different from country life.*

**Sameness (Giống nhau):**
- $S_1 + be + the same as + S_2$
- *My guitar is the same as yours.*

### 2. Countable vs. Uncountable Nouns & Quantifiers / Danh từ đếm được, không đếm được và Lượng từ
- **Countable (Đếm được):** Can be singular or plural (apple, eggs, cups).
- **Uncountable (Không đếm được):** Cannot be counted directly, usually liquids, powders, concepts (water, rice, music).

**Quantifiers (Lượng từ):**
- **Some:** Used in affirmative sentences and polite requests. (I need *some* sugar. Would you like *some* tea?)
- **Any:** Used in negative sentences and questions. (Do we have *any* eggs? We don't have *any* milk.)
- **A lot of / Lots of:** Used with both types for large quantities.
- **How many:** Asks about quantity for *countable* nouns. (How many apples?)
- **How much:** Asks about quantity for *uncountable* nouns. (How much milk?)

## ASCII/Markdown Diagrams / Biểu Đồ ASCII
```text
[Quantifier Usage Matrix]
| Type        | Affirmative (+) | Negative (-) | Question (?) |
|-------------|-----------------|--------------|--------------|
| Countable   | some, a lot of  | any          | any, how many|
| Uncountable | some, a lot of  | any          | any, how much|
```

## EdTech Lab: Python Recipe Ingredient & Quantifier Matcher Game
Save this as `recipe_quantifier.py` and run it!

```python
def quantifier_game():
    """
    Python CLI application for practicing quantifiers (some, any, how much, how many).
    """
    print("Welcome to the Cooking Quantifier Game!")
    print("Learn when to use 'some', 'any', 'how much', or 'how many'.\n")
    
    questions = [
        ("___ eggs do we need?", "how many"),
        ("I need ___ sugar for the cake.", "some"),
        ("We don't have ___ milk left.", "any"),
        ("___ water should I pour?", "how much"),
        ("She eats ___ of vegetables.", "a lot of"),
        ("Would you like ___ coffee?", "some") # polite request exception
    ]
    
    score = 0
    for q, ans in questions:
        print(f"Sentence: {q}")
        user_ans = input("Fill in the blank: ").strip().lower()
        if user_ans == ans:
            print("Correct!\n")
            score += 1
        else:
            print(f"Wrong. The correct answer is '{ans}'.\n")
            
    print(f"Game Over! Score: {score}/{len(questions)}")
    if score == len(questions):
        print("Excellent grasp of quantifiers!")

if __name__ == "__main__":
    quantifier_game()
```

## 💡 Common Vietnamese EFL Mistakes to Avoid / Các Lỗi Thường Gặp
1. **Countable vs Uncountable Confusion:** Treating uncountable nouns as countable (e.g., saying *advices, informations, homeworks, breads*).
2. **Forgetting verb 'to be' in comparisons:** Saying *My house different from yours* instead of *My house IS different from yours*.
3. **Misusing Some/Any:** Using 'some' in negative sentences (e.g., *I don't have some money*).

## Discussion Questions / Câu Hỏi Thảo Luận
1. **What kind of music do you like? Why?**
   - *Sample Answer:* I love pop music because the melodies are catchy and energetic. It always puts me in a good mood.
2. **Do you think traditional arts like water puppetry should be preserved?**
   - *Sample Answer:* Yes, definitely. Traditional arts represent our cultural heritage and history. They are unique to our country.
3. **What is your favorite Vietnamese dish, and what are its main ingredients?**
   - *Sample Answer:* My favorite dish is Pho. The main ingredients are rice noodles, beef or chicken, and a rich, slow-cooked bone broth with spices like cinnamon and star anise.
4. **Is making an omelette difficult? How do you make it?**
   - *Sample Answer:* No, it's very easy. You just crack eggs into a bowl, beat them with some salt and pepper, and fry them in a pan with a little oil.
5. **How is the food in your region different from other regions?**
   - *Sample Answer:* Food in my region tends to be sweeter and spicier compared to the North, where dishes usually have a lighter, more savory flavor.

## Homework & Practice Writing Tasks / Bài Tập Về Nhà
**Task:** Write a paragraph (80-100 words) describing how to make your favorite simple dish.

**Model Band 8+ Recipe Paragraph:**
My favorite simple dish to make is a classic Vietnamese fried egg with tomatoes. First, you need to prepare two eggs, one ripe tomato, some fish sauce, and cooking oil. Begin by washing and chopping the tomato into small dice. Next, heat a little oil in a frying pan and cook the tomatoes until they are soft and create a thick sauce. After that, crack the eggs directly into the pan and stir gently. Add a teaspoon of fish sauce for flavor. Cook for about three more minutes until the eggs are fully cooked. Finally, serve the dish hot with steamed rice. It is incredibly delicious and easy to prepare!


## Assessment Rubric / Bảng Đánh Giá Tiêu Chí (100-point scale / Thang điểm 100)
Based on CEFR A2 / CT GDPT 2018 English standards

| Criteria / Tiêu chí | Excellent / Xuất sắc (90-100) | Good / Khá (75-89) | Fair / Đạt (60-74) | Needs Improvement / Cần cố gắng (<60) |
| :--- | :--- | :--- | :--- | :--- |
| **Listening / Nghe (25 pts)** | Understands main ideas and details effortlessly. Accurately identifies speakers' attitudes. | Understands most main ideas and details. Occasional errors in nuanced meanings. | Catches main ideas but misses some details. Struggles with fast speech. | Difficulty understanding basic concepts. Needs multiple replays. |
| **Speaking / Nói (25 pts)** | Fluent, clear pronunciation. Excellent vocabulary and grammatical accuracy. | Good fluency, some minor pronunciation errors. Appropriate vocabulary. | Hesitant, frequent pronunciation issues. Basic vocabulary used. | Halting speech, difficult to understand. Very limited vocabulary. |
| **Reading / Đọc (25 pts)** | Comprehends complex texts, extracts specific info quickly and accurately. | Understands general meaning and most specific details. | Can find basic information but struggles with complex sentences. | Fails to grasp main ideas. Vocabulary severely limits comprehension. |
| **Writing / Viết (25 pts)** | Well-structured, cohesive, almost no grammatical errors. Rich vocabulary. | Good structure, minor grammatical errors. Clear message. | Basic sentences, frequent grammatical errors, somewhat unorganized. | Poor structure, many errors impeding meaning. Off-topic. |

### Additional Details / Chi tiết bổ sung:
- **Grammar & Vocabulary (Ngữ pháp & Từ vựng)**: Students are expected to demonstrate mastery of the unit's specific grammar structures and vocabulary.
- **Pronunciation (Phát âm)**: Emphasis is placed on specific phonemes highlighted in the unit.
- **Participation (Tham gia)**: Active engagement in classroom activities and discussions is highly encouraged.
- **Homework (Bài tập về nhà)**: Timely and accurate completion of assigned tasks.


## Assessment Rubric / Bảng Đánh Giá Tiêu Chí (100-point scale / Thang điểm 100)
Based on CEFR A2 / CT GDPT 2018 English standards

| Criteria / Tiêu chí | Excellent / Xuất sắc (90-100) | Good / Khá (75-89) | Fair / Đạt (60-74) | Needs Improvement / Cần cố gắng (<60) |
| :--- | :--- | :--- | :--- | :--- |
| **Listening / Nghe (25 pts)** | Understands main ideas and details effortlessly. Accurately identifies speakers' attitudes. | Understands most main ideas and details. Occasional errors in nuanced meanings. | Catches main ideas but misses some details. Struggles with fast speech. | Difficulty understanding basic concepts. Needs multiple replays. |
| **Speaking / Nói (25 pts)** | Fluent, clear pronunciation. Excellent vocabulary and grammatical accuracy. | Good fluency, some minor pronunciation errors. Appropriate vocabulary. | Hesitant, frequent pronunciation issues. Basic vocabulary used. | Halting speech, difficult to understand. Very limited vocabulary. |
| **Reading / Đọc (25 pts)** | Comprehends complex texts, extracts specific info quickly and accurately. | Understands general meaning and most specific details. | Can find basic information but struggles with complex sentences. | Fails to grasp main ideas. Vocabulary severely limits comprehension. |
| **Writing / Viết (25 pts)** | Well-structured, cohesive, almost no grammatical errors. Rich vocabulary. | Good structure, minor grammatical errors. Clear message. | Basic sentences, frequent grammatical errors, somewhat unorganized. | Poor structure, many errors impeding meaning. Off-topic. |

### Additional Details / Chi tiết bổ sung:
- **Grammar & Vocabulary (Ngữ pháp & Từ vựng)**: Students are expected to demonstrate mastery of the unit's specific grammar structures and vocabulary.
- **Pronunciation (Phát âm)**: Emphasis is placed on specific phonemes highlighted in the unit.
- **Participation (Tham gia)**: Active engagement in classroom activities and discussions is highly encouraged.
- **Homework (Bài tập về nhà)**: Timely and accurate completion of assigned tasks.


## Extended Speaking Scripts (Band 8+ CEFR A2/B1 Level) / Mẫu hội thoại nâng cao
**Dialogue 1: General Discussion**
*Student A:* Hi! How are you doing today? I heard you have some interesting hobbies.
*Student B:* Hello! Yes, I am doing great. Actually, I enjoy many things. Recently, I have been spending a lot of time on my main hobby. What about you?
*Student A:* I usually read books or play sports. But tell me more about yours! How often do you practice it?
*Student B:* I try to practice it every single day. It helps me relax and stay focused. Moreover, it's a fantastic way to connect with people who share similar interests.
*Student A:* That sounds amazing. I should probably pick up a new hobby as well. Do you have any recommendations?
*Student B:* Well, it depends on what you like. If you enjoy being active, maybe cycling or swimming. If you prefer quiet time, drawing or collecting stamps could be wonderful.
*Student A:* I think I might try drawing. Thanks for the advice!

**Dialogue 2: Problem Solving**
*Student A:* Hey, I noticed you looked a bit tired yesterday. Is everything alright?
*Student B:* Not really. I've been studying too much and I haven't had enough sleep. I feel quite exhausted.
*Student A:* Oh no, you really should take a break. Have you considered managing your time better or trying some relaxation techniques?
*Student B:* I know I should. I usually drink a lot of coffee to stay awake, but I know it's not healthy.
*Student A:* Exactly! You shouldn't consume too much caffeine. Why don't we go for a walk in the park this afternoon? Fresh air will do you good.
*Student B:* That's a lovely idea. Thank you for caring!

## Writing Clinic: Advanced Sentence Structures / Lớp học Viết: Cấu trúc câu nâng cao
When writing paragraphs in English, it is crucial to use a variety of sentence structures to demonstrate your proficiency. Here are some key techniques:

1. **Compound Sentences (Câu ghép):** Use coordinating conjunctions (FANBOYS: For, And, Nor, But, Or, Yet, So) to connect two independent clauses.
   - *Example:* I love eating traditional Vietnamese food, **so** I often visit local restaurants on weekends.

2. **Complex Sentences (Câu phức):** Use subordinating conjunctions (because, although, if, when, while, since) to link an independent clause with a dependent clause.
   - *Example:* **Although** learning a new language can be challenging, it is incredibly rewarding in the long run.

3. **Relative Clauses (Mệnh đề quan hệ):** Use relative pronouns (who, which, that, where, when) to provide more information about a noun without starting a new sentence.
   - *Example:* The school **which** is located in the city center has many modern facilities.

4. **Adverbial Phrases (Cụm trạng từ):** Start sentences with adverbial phrases to add context regarding time, place, or manner.
   - *Example:* **In recent years**, there has been a significant increase in the number of students volunteering in their local communities.

5. **Transitional Words (Từ nối):** Use transitional words and phrases to ensure smooth flow between sentences and paragraphs.
   - *Example:* **Furthermore**, participating in extracurricular activities helps students develop essential soft skills. **In conclusion**, schools should encourage such participation.

## Detailed Step-by-Step Lesson Plan (Expanded 7 Sections)
### Section 1: Getting Started
- **Warm-up Activity:** Teacher writes the topic on the board and asks students to brainstorm related words for 3 minutes.
- **Audio Track Playback:** Play the introductory dialogue twice. The first time, students listen with their books closed to grasp the general meaning. The second time, they open their books and follow along.
- **Comprehension Check:** Ask 5 specific questions based on the dialogue to ensure understanding.
- **Vocabulary Extraction:** Highlight key new words from the text and write them on the board.

### Section 2: A Closer Look 1 (Vocabulary & Pronunciation)
- **Vocabulary Presentation:** Use flashcards and pictures to introduce new nouns and verbs. Drill the pronunciation chorally and individually.
- **Matching Exercise:** Students complete a matching activity in their workbooks. Peer correction.
- **Pronunciation Focus:** Introduce the target phonemes using the IPA chart. Demonstrate the mouth position for each sound.
- **Minimal Pairs Practice:** Students practice distinguishing between similar sounds in pairs. 
- **Listening Discrimination:** Play an audio track and have students circle the word they hear.

### Section 3: A Closer Look 2 (Grammar)
- **Grammar Presentation:** Introduce the target grammar structure using clear examples on the board. Use colored chalk/markers to highlight verbs and tense markers.
- **Guided Practice:** Students complete fill-in-the-blank and multiple-choice exercises. 
- **Rule Discovery:** Guide students to deduce the grammar rules themselves by analyzing the examples.
- **Freer Practice:** Students create their own sentences using the new grammar structure.

### Section 4: Communication
- **Role-play Preparation:** Divide the class into pairs. Assign distinct roles to Student A and Student B based on a scenario.
- **Scaffolding:** Provide a list of useful phrases and expressions for the role-play.
- **Performance:** Pairs perform their dialogues. The teacher circulates, monitoring and noting down common errors for later feedback.
- **Group Discussion:** Merge pairs into groups of four to discuss a related, broader topic.

### Section 5: Skills 1 (Reading & Speaking)
- **Pre-reading:** Ask prediction questions based on the title and pictures of the reading text.
- **While-reading:** Skimming for main ideas (2 minutes) followed by scanning for specific details (5 minutes). Students answer comprehension questions.
- **Post-reading (Speaking):** Discuss the main themes of the text in small groups. Do students agree or disagree with the author? Why?

### Section 6: Skills 2 (Listening & Writing)
- **Pre-listening:** Introduce the context of the audio track. Pre-teach any difficult vocabulary.
- **While-listening:** Play the track once for general understanding, then a second time for students to fill in missing information in a worksheet.
- **Pre-writing:** Brainstorming ideas for the writing task. Analyze a model text provided in the textbook.
- **While-writing:** Students write their first draft independently.
- **Post-writing:** Peer review. Students swap their work with a partner and check for grammatical accuracy and coherence.

### Section 7: Looking Back & Project
- **Review Games:** Use interactive tools like Kahoot or Quizizz to review vocabulary and grammar from the unit.
- **Self-Assessment:** Students reflect on what they have learned and what they still need to practice.
- **Project Introduction:** Introduce the end-of-unit project. Clearly explain the objectives, requirements, and grading criteria.
- **Group Work:** Allocate time for students to plan and begin working on their projects in class.






































































































## End of Lesson Notes
- Always encourage students to speak English as much as possible.
- Use positive reinforcement.
## End of Lesson Notes
- Always encourage students to speak English as much as possible.
- Use positive reinforcement.
## End of Lesson Notes
- Always encourage students to speak English as much as possible.
- Use positive reinforcement.
## End of Lesson Notes
- Always encourage students to speak English as much as possible.
- Use positive reinforcement.
## End of Lesson Notes
- Always encourage students to speak English as much as possible.
- Use positive reinforcement.
## End of Lesson Notes
- Always encourage students to speak English as much as possible.
- Use positive reinforcement.
## End of Lesson Notes
- Always encourage students to speak English as much as possible.
- Use positive reinforcement.
## End of Lesson Notes
- Always encourage students to speak English as much as possible.
- Use positive reinforcement.
## End of Lesson Notes
- Always encourage students to speak English as much as possible.
- Use positive reinforcement.
## End of Lesson Notes
- Always encourage students to speak English as much as possible.
- Use positive reinforcement.
## End of Lesson Notes
- Always encourage students to speak English as much as possible.
- Use positive reinforcement.
## End of Lesson Notes
- Always encourage students to speak English as much as possible.
- Use positive reinforcement.
## End of Lesson Notes
- Always encourage students to speak English as much as possible.
- Use positive reinforcement.
## End of Lesson Notes
- Always encourage students to speak English as much as possible.
- Use positive reinforcement.
## End of Lesson Notes
- Always encourage students to speak English as much as possible.
- Use positive reinforcement.
## End of Lesson Notes
- Always encourage students to speak English as much as possible.
- Use positive reinforcement.
## End of Lesson Notes
- Always encourage students to speak English as much as possible.
- Use positive reinforcement.
## End of Lesson Notes
- Always encourage students to speak English as much as possible.
- Use positive reinforcement.
## End of Lesson Notes
- Always encourage students to speak English as much as possible.
- Use positive reinforcement.
## End of Lesson Notes
- Always encourage students to speak English as much as possible.
- Use positive reinforcement.
## End of Lesson Notes
- Always encourage students to speak English as much as possible.
- Use positive reinforcement.
## End of Lesson Notes
- Always encourage students to speak English as much as possible.
- Use positive reinforcement.
## End of Lesson Notes
- Always encourage students to speak English as much as possible.
- Use positive reinforcement.
## End of Lesson Notes
- Always encourage students to speak English as much as possible.
- Use positive reinforcement.
## End of Lesson Notes
- Always encourage students to speak English as much as possible.
- Use positive reinforcement.
## End of Lesson Notes
- Always encourage students to speak English as much as possible.
- Use positive reinforcement.
## End of Lesson Notes
- Always encourage students to speak English as much as possible.
- Use positive reinforcement.
## End of Lesson Notes
- Always encourage students to speak English as much as possible.
- Use positive reinforcement.
## End of Lesson Notes
- Always encourage students to speak English as much as possible.
- Use positive reinforcement.
## End of Lesson Notes
- Always encourage students to speak English as much as possible.
- Use positive reinforcement.
## End of Lesson Notes
- Always encourage students to speak English as much as possible.
- Use positive reinforcement.
## End of Lesson Notes
- Always encourage students to speak English as much as possible.
- Use positive reinforcement.
## End of Lesson Notes
- Always encourage students to speak English as much as possible.
- Use positive reinforcement.
## End of Lesson Notes
- Always encourage students to speak English as much as possible.
- Use positive reinforcement.
## End of Lesson Notes
- Always encourage students to speak English as much as possible.
- Use positive reinforcement.
## End of Lesson Notes
- Always encourage students to speak English as much as possible.
- Use positive reinforcement.
## End of Lesson Notes
- Always encourage students to speak English as much as possible.
- Use positive reinforcement.
## End of Lesson Notes
- Always encourage students to speak English as much as possible.
- Use positive reinforcement.
## End of Lesson Notes
- Always encourage students to speak English as much as possible.
- Use positive reinforcement.
## End of Lesson Notes
- Always encourage students to speak English as much as possible.
- Use positive reinforcement.
## End of Lesson Notes
- Always encourage students to speak English as much as possible.
- Use positive reinforcement.
## End of Lesson Notes
- Always encourage students to speak English as much as possible.
- Use positive reinforcement.
## End of Lesson Notes
- Always encourage students to speak English as much as possible.
- Use positive reinforcement.
## End of Lesson Notes
- Always encourage students to speak English as much as possible.
- Use positive reinforcement.
## End of Lesson Notes
- Always encourage students to speak English as much as possible.
- Use positive reinforcement.
## End of Lesson Notes
- Always encourage students to speak English as much as possible.
- Use positive reinforcement.
## End of Lesson Notes
- Always encourage students to speak English as much as possible.
- Use positive reinforcement.
## End of Lesson Notes
- Always encourage students to speak English as much as possible.
- Use positive reinforcement.
## End of Lesson Notes
- Always encourage students to speak English as much as possible.
- Use positive reinforcement.
## End of Lesson Notes
- Always encourage students to speak English as much as possible.
- Use positive reinforcement.

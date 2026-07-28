# Week 4: Unit 6 (A Visit to a School) & Review 2
## Tuần 4: Bài 6 (Một chuyến thăm trường học) & Ôn tập 2

### Learning Objectives / Mục tiêu bài học
- **Listening / Nghe:**
  - Listen to a school tour guide explaining facilities.
- **Speaking / Nói:**
  - Describe school facilities and talk about school traditions.
- **Reading / Đọc:**
  - Read about historic and famous schools in Vietnam (e.g., Quoc Hoc Hue).
- **Writing / Viết:**
  - Write a paragraph about a school's history and facilities.
- **Vocabulary / Từ vựng:**
  - School places & traditions: *laboratory, computer room, library, sports hall, gift for high achievement, Lower Secondary School, headmaster*.
- **Pronunciation / Phát âm:**
  - Sounds /tʃ/ and /dʒ/.
- **Grammar / Ngữ pháp:**
  - Present Continuous Tense ($S + am/is/are + V_{ing}$).
  - Contrast: Present Continuous vs. Present Simple.
  - Prepositions of time and place (*at, in, on, next to, opposite, in front of*).

### Related Textbook Units / Bài học sách giáo khoa liên quan
- **SGK Global Success Tiếng Anh 7:** Unit 6 (A Visit to a School) & Review 2 (Units 4-6)

## Detailed Vocabulary with IPA / Từ vựng chi tiết kèm phiên âm
| English | IPA | Vietnamese | Example Sentence |
| :--- | :--- | :--- | :--- |
| **laboratory** | /ləˈbɒrətri/ | phòng thí nghiệm | We do science experiments in the laboratory. |
| **computer room** | /kəmˈpjuːtə ruːm/ | phòng máy tính | The computer room has thirty new PCs. |
| **library** | /ˈlaɪbrəri/ | thư viện | Students read books quietly in the library. |
| **sports hall** | /spɔːts hɔːl/ | nhà thi đấu thể thao | We play badminton in the sports hall when it rains. |
| **achievement** | /əˈtʃiːvmənt/ | thành tích | She received a gift for her high achievement. |
| **headmaster** | /ˌhedˈmɑːstə(r)/ | hiệu trưởng | The headmaster gave a speech at the assembly. |
| **gifted** | /ˈɡɪftɪd/ | có năng khiếu | Quoc Hoc Hue is a famous school for gifted students. |
| **tradition** | /trəˈdɪʃn/ | truyền thống | The school has a long tradition of academic excellence. |


## EdTech & Language Tools / Công Nghệ Giáo Dục & Công Cụ Ngôn Ngữ
| Tool / Công cụ | Application / Ứng dụng | Benefit / Lợi ích |
| :--- | :--- | :--- |
| **Python Quiz Engine** | Interactive grammar and vocabulary quizzes | Immediate feedback, programmable logic, customized learning |
| **Canva** | Creating visual flashcards and mindmaps | Enhances visual memory, creative expression |
| **Audacity** | Recording and analyzing pronunciation | Visualizing sound waves, self-correction |
| **Speech Recognition** | AI-driven pronunciation practice | Real-time accuracy assessment, confidence building |
| **Quizlet** | Spaced repetition vocabulary learning | Efficient memorization, gamified learning |


## Deep Grammar Explanations / Giải Thích Ngữ Pháp Chuyên Sâu

### 1. Present Continuous Tense / Thì Hiện Tại Tiếp Diễn
**Usage:** To describe actions happening right now, at the moment of speaking, or temporary situations.
**Cách dùng:** Diễn tả hành động đang diễn ra tại thời điểm nói hoặc tình huống tạm thời.

**Structure / Cấu trúc:**
- **(+) Affirmative:** $S + am/is/are + V_{ing} + O$
- **(-) Negative:** $S + am/is/are + not + V_{ing} + O$
- **(?) Interrogative:** $Am/Is/Are + S + V_{ing} + O?$

**Signal Words (Dấu hiệu nhận biết):** Now, right now, at the moment, at present, Look!, Listen!

**Present Simple vs Present Continuous:**
- *Routine:* I usually walk to school. (Present Simple)
- *Right now:* Today, I am taking the bus. (Present Continuous)

### 2. Prepositions of Time and Place / Giới từ chỉ thời gian và nơi chốn
**Time:**
- **In:** months, years, seasons, parts of the day (in 2023, in summer, in the morning).
- **On:** days of the week, dates (on Monday, on May 2nd).
- **At:** specific times, festivals (at 8 o'clock, at Tet).

**Place:**
- **Next to / Beside:** bên cạnh
- **Opposite:** đối diện
- **In front of:** phía trước
- **Behind:** phía sau

## ASCII/Markdown Diagrams / Biểu Đồ ASCII
```text
[School Map Visualization for Prepositions]
+-----------------+    +-----------------+
|   Library       |    |   Laboratory    |
| (Next to Lab)   |    |                 |
+--------+--------+    +--------+--------+
         |                      |
         V                      V
+----------------------------------------+
|               Hallway                  |
+----------------------------------------+
         ^
         |
+--------+--------+
| Computer Room   |
| (Opposite Lib)  |
+-----------------+
```

## EdTech Lab: Interactive School Map & Facility Tour Guide Generator Script
Save this as `school_tour.py` and run it!

```python
import time

def school_tour():
    """
    Python script simulating a text-based virtual school tour.
    Helps students practice vocabulary for school facilities and prepositions.
    """
    print("Welcome to the Virtual School Tour!")
    facilities = {
        "library": "Here you can read books and study quietly. It's opposite the computer room.",
        "laboratory": "This is where we do science experiments. Please wear safety goggles. It's next to the library.",
        "sports hall": "Students play basketball and badminton here. It is behind the main building.",
        "computer room": "Equipped with 30 modern PCs for IT lessons. It is in front of the headmaster's office."
    }
    
    while True:
        print("\nMap: [library] [laboratory] [sports hall] [computer room]")
        choice = input("Which facility would you like to visit? (type 'exit' to quit): ").strip().lower()
        
        if choice == 'exit':
            print("Thanks for taking the tour!")
            break
        elif choice in facilities:
            print(f"Tour Guide: Welcome to the {choice.title()}!")
            time.sleep(1)
            print(f"Tour Guide: {facilities[choice]}")
        else:
            print("Sorry, that facility doesn't exist on our map. Please try again.")

if __name__ == "__main__":
    school_tour()
```

## 💡 Common Vietnamese EFL Mistakes to Avoid / Các Lỗi Thường Gặp
1. **Omitting the 'be' verb in Continuous Tense:** Saying *I playing football* instead of *I AM playing football*.
2. **Confusing /tʃ/ and /dʒ/ or /ʃ/:** Mispronouncing 'chair' as 'share', or 'jeep' as 'cheap'.
3. **Preposition Confusion:** Translating directly from Vietnamese, e.g., saying *in Monday* instead of *on Monday*.

## Discussion Questions / Câu Hỏi Thảo Luận
1. **What is your favorite room or area in your school? Why?**
   - *Sample Answer:* My favorite area is the library because it is very quiet and peaceful. I can read my favorite books and concentrate on my homework there.
2. **How is your school different from the schools you see on TV?**
   - *Sample Answer:* My school is smaller and doesn't have a large sports hall or swimming pool like the international schools on TV. However, it feels very cozy.
3. **What are you doing right now? (Practice Present Continuous)**
   - *Sample Answer:* Right now, I am studying English with my teacher and taking notes in my notebook.
4. **Where is the computer room in your school?**
   - *Sample Answer:* The computer room is on the second floor, next to the science laboratory and opposite the stairs.
5. **If you could add one new facility to your school, what would it be?**
   - *Sample Answer:* I would add a modern music room with different instruments like guitars, drum sets, and pianos so students can practice their musical talents.

## Homework & Practice Writing Tasks / Bài Tập Về Nhà
**Task:** Write a paragraph (80-100 words) describing your school and its facilities.

**Model Band 8+ Paragraph:**
I am currently a student at Le Quy Don Lower Secondary School, which is a beautiful and historic school located in the center of the city. The school has three main buildings surrounding a large, tree-lined courtyard where we play during break time. We have many modern facilities. On the first floor, there is a spacious library next to the headmaster's office. On the second floor, we have two large computer rooms and a well-equipped science laboratory. Opposite the main building is the sports hall, where we have our physical education classes. I really love my school because it provides a wonderful environment for learning.


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

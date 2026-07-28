# Week 2: Unit 3 (Community Service) & Review 1
## Tuần 2: Bài 3 (Phục vụ Cộng đồng) & Ôn tập 1

### Learning Objectives / Mục tiêu bài học
- **Listening / Nghe:**
  - Understand interviews and talks about community service.
  - Nghe hiểu các bài phỏng vấn và nói chuyện về dịch vụ cộng đồng.
- **Speaking / Nói:**
  - Discuss volunteer work and community projects.
  - Thảo luận về công việc tình nguyện và các dự án cộng đồng.
- **Reading / Đọc:**
  - Read texts about volunteering experiences.
  - Đọc các văn bản về kinh nghiệm làm tình nguyện.
- **Writing / Viết:**
  - Write an email proposing or describing a community project.
  - Viết email đề xuất hoặc mô tả một dự án cộng đồng.
- **Vocabulary / Từ vựng:**
  - Community activities: *donate books, clean up park, plant trees, help elderly, homeless children, tutor, nursing home*.
- **Pronunciation / Phát âm:**
  - Sounds /t/, /d/, and /ɪd/ for past tense *-ed* endings.
- **Grammar / Ngữ pháp:**
  - Past Simple Tense ($S + V_{2/ed}$).
  - Regular vs Irregular verbs (*buy -> bought, give -> gave*).

### Related Textbook Units / Bài học sách giáo khoa liên quan
- **SGK Global Success Tiếng Anh 7:** Unit 3 (Community Service) & Review 1 (Units 1-3)

## Detailed Vocabulary with IPA / Từ vựng chi tiết kèm phiên âm
| English | IPA | Vietnamese | Example Sentence |
| :--- | :--- | :--- | :--- |
| **donate books** | /dəʊˈneɪt bʊks/ | quyên góp sách | We decided to donate books to the local orphanage. |
| **clean up** | /kliːn ʌp/ | dọn dẹp | Volunteers clean up the beach every Sunday. |
| **plant trees** | /plɑːnt triːz/ | trồng cây | They plan to plant trees along the street. |
| **help elderly** | /help ˈeldəli/ | giúp đỡ người già | I often help elderly people cross the road. |
| **homeless children** | /ˈhəʊmləs ˈtʃɪldrən/ | trẻ em vô gia cư | The charity provides food for homeless children. |
| **tutor** | /ˈtjuːtə(r)/ | dạy kèm | She is a tutor for primary school students. |
| **nursing home** | /ˈnɜːsɪŋ həʊm/ | viện dưỡng lão | We visited a nursing home to sing for the residents. |
| **volunteer** | /ˌvɒlənˈtɪə(r)/ | tình nguyện viên | Being a volunteer gives you valuable experience. |


## EdTech & Language Tools / Công Nghệ Giáo Dục & Công Cụ Ngôn Ngữ
| Tool / Công cụ | Application / Ứng dụng | Benefit / Lợi ích |
| :--- | :--- | :--- |
| **Python Quiz Engine** | Interactive grammar and vocabulary quizzes | Immediate feedback, programmable logic, customized learning |
| **Canva** | Creating visual flashcards and mindmaps | Enhances visual memory, creative expression |
| **Audacity** | Recording and analyzing pronunciation | Visualizing sound waves, self-correction |
| **Speech Recognition** | AI-driven pronunciation practice | Real-time accuracy assessment, confidence building |
| **Quizlet** | Spaced repetition vocabulary learning | Efficient memorization, gamified learning |


## Deep Grammar Explanations / Giải Thích Ngữ Pháp Chuyên Sâu

### Past Simple Tense / Thì Quá Khứ Đơn
**Usage:** To describe actions completed in the past at a specific time.
**Cách dùng:** Diễn tả một hành động đã hoàn thành trong quá khứ tại một thời điểm xác định.

**Structure / Cấu trúc:**
- **(+) Affirmative:** $S + V_{2/ed} + O$
- **(-) Negative:** $S + did + not + V_{infinitive} + O$
- **(?) Interrogative:** $Did + S + V_{infinitive} + O?$

**Regular vs Irregular Verbs:**
- **Regular (Thêm -ed):** play -> played, visit -> visited
- **Irregular (Bất quy tắc):** go -> went, see -> saw, buy -> bought, give -> gave, donate -> donated (regular)

**Pronunciation of -ed endings:**
- **/ɪd/:** after /t/ or /d/ (e.g., wanted, needed)
- **/t/:** after voiceless sounds /p/, /k/, /f/, /s/, /ʃ/, /tʃ/ (e.g., stopped, looked)
- **/d/:** after voiced sounds and vowels (e.g., played, cleaned)

## ASCII/Markdown Diagrams / Biểu Đồ ASCII
```text
[Past Tense -ed Pronunciation Guide]
Ending Sound of Base Verb
   |
   +---> /t/ or /d/ ---> Pronounce as /ɪd/ (e.g. want -> wanted)
   |
   +---> Voiceless (/p/, /k/, /s/...) ---> Pronounce as /t/ (e.g. wash -> washed)
   |
   +---> Voiced & Vowels ---> Pronounce as /d/ (e.g. call -> called)
```

## EdTech Lab: Python Past Simple Verb Conjugator & Irregular Verb Trainer Engine
Save this as `past_tense_trainer.py` and run it!

```python
import random

def verb_trainer():
    """
    Python script to train students on irregular and regular verbs
    for the Past Simple tense. Provides immediate feedback and scores.
    """
    print("Welcome to the Past Simple Verb Trainer!")
    verbs = {
        "go": "went",
        "buy": "bought",
        "give": "gave",
        "see": "saw",
        "clean": "cleaned",
        "donate": "donated",
        "plant": "planted",
        "think": "thought",
        "bring": "brought",
        "take": "took"
    }
    
    score = 0
    verb_keys = list(verbs.keys())
    random.shuffle(verb_keys)
    
    print("Instructions: Type the past tense form of the verb provided.\n")
    
    for verb in verb_keys:
        ans = input(f"What is the past tense of '{verb}'? ").strip().lower()
        if ans == verbs[verb]:
            print("Correct!\n")
            score += 1
        else:
            print(f"Wrong. The correct past tense is '{verbs[verb]}'.\n")
            
    print(f"Training complete. You scored {score} out of {len(verbs)}.")
    if score == len(verbs):
        print("Outstanding! You know your past verbs perfectly.")
    else:
        print("Keep practicing your irregular verbs list!")

if __name__ == "__main__":
    verb_trainer()
```

## 💡 Common Vietnamese EFL Mistakes to Avoid / Các Lỗi Thường Gặp
1. **Forgetting Past Tense Forms:** Using the base form instead of $V_2$ when talking about the past (e.g., *Yesterday I go to the park* -> Correct: *Yesterday I went to the park*).
2. **Double Past in Negatives/Questions:** Conjugating the main verb when 'did' is already present (e.g., *Did you went?* -> Correct: *Did you go?*).
3. **Mispronouncing -ed:** Pronouncing every -ed as /ɪd/ (e.g., pronouncing *looked* as /lʊkɪd/ instead of /lʊkt/).

## Discussion Questions / Câu Hỏi Thảo Luận
1. **Have you ever done volunteer work? What did you do?**
   - *Sample Answer:* Yes, last summer I joined a campaign to clean up the local park. We picked up trash and planted some new trees.
2. **Why is community service important?**
   - *Sample Answer:* It helps people in need and makes our living environment better. It also teaches us to be responsible and empathetic.
3. **Who can benefit from volunteer work?**
   - *Sample Answer:* Many people benefit, such as the elderly in nursing homes, homeless children, and even the volunteers themselves because they learn new skills.
4. **Would you like to tutor younger children? Why or why not?**
   - *Sample Answer:* I would love to. I am good at math, and I want to help children who struggle with it.
5. **What did your school do for charity last year?**
   - *Sample Answer:* Last year, our school organized a book donation drive. We collected over 500 books for children in mountainous areas.

## Homework & Practice Writing Tasks / Bài Tập Về Nhà
**Task:** Write an email (80-100 words) to your friend telling them about a volunteer activity you participated in last weekend.

**Model Band 8+ Email:**
Subject: My amazing weekend volunteering!

Hi Lan,

I hope you're doing well. I want to tell you about the volunteer activity I joined last weekend. A group of friends and I went to the local nursing home. We spent the whole Saturday there. In the morning, we cleaned their rooms and washed their clothes. After lunch, we read books and talked with the elderly people. They were incredibly happy and told us many fascinating stories about their youth. It was a tiring but extremely rewarding experience. I felt so proud to bring joy to others. 

Let's join the next trip together!

Best,
Minh


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

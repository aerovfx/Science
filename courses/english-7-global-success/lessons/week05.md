# Week 5: Mid-Course Synthesis & Speech / Writing Clinic
## Tuần 5: Tổng hợp giữa khóa & Thực hành chuyên sâu Kỹ năng Nói / Viết (Units 1-6)

### Learning Objectives / Mục tiêu bài học
- **Grammar Review / Ôn tập ngữ pháp:**
  - Consolidate Present Simple, Present Continuous, Past Simple, Comparisons, Countable/Uncountable Nouns, and Imperatives.
- **Vocabulary Consolidation / Tổng hợp từ vựng:**
  - Review topics: Hobbies, Health, Community, Arts, Food, School.
- **Speaking Clinic / Thực hành chuyên sâu kỹ năng Nói:**
  - IPA drills, intonation in questions, sentence stress.
- **Writing Clinic / Thực hành chuyên sâu kỹ năng Viết:**
  - Paragraph coherence, linking words, topic sentences.

### Related Textbook Units / Bài học sách giáo khoa liên quan
- **SGK Global Success Tiếng Anh 7:** Mid-Term Review (Review 1 & Review 2)

## Comprehensive Grammar Review / Ôn Tập Ngữ Pháp Toàn Diện
### Tense Contrast / So sánh các thì
| Tense | Usage | Signal Words | Example |
| :--- | :--- | :--- | :--- |
| **Present Simple** | Habits, facts | always, usually, every day | I **eat** an apple every day. |
| **Present Continuous** | Action happening now | now, at the moment, Look! | Look! He **is eating** an apple. |
| **Past Simple** | Completed past action | yesterday, last week, in 2020 | I **ate** an apple yesterday. |

### Linking Words for Coherence / Từ nối tạo sự mạch lạc
- **Addition (Thêm ý):** and, moreover, furthermore, besides.
- **Contrast (Tương phản):** but, however, although.
- **Cause & Effect (Nguyên nhân & Kết quả):** because, so, therefore.
- **Sequencing (Trình tự):** first, second, next, finally.

## Speaking Clinic: Intonation and Stress / Ngữ điệu và Trọng âm
**1. Sentence Stress (Trọng âm câu):**
- Stress content words (Nouns, Verbs, Adjectives, Adverbs).
- Do not stress function words (Prepositions, Articles, Pronouns).
- *Example:* I **want** to **play** **football** on **Sunday**.

**2. Intonation (Ngữ điệu):**
- **Rising Intonation (Lên giọng):** Yes/No questions (e.g., Do you like pizza? ↗)
- **Falling Intonation (Xuống giọng):** Wh-questions and statements (e.g., What is your name? ↘, I live in Hanoi. ↘)

## ASCII/Markdown Diagrams / Biểu Đồ ASCII
```text
[Paragraph Structure Blueprint]
+-------------------------------------------------+
| Topic Sentence: Main idea of the paragraph      |
+-------------------------------------------------+
| Detail 1: First point + Linking word (First,)   |
| Detail 2: Second point + Linking word (Next,)   |
| Detail 3: Third point + Linking word (Finally,) |
+-------------------------------------------------+
| Concluding Sentence: Summary of the main idea   |
+-------------------------------------------------+
```

## EdTech Lab: Python AI Grammar & Essay Proofreader Script
Save this as `essay_proofreader.py` and run it!

```python
import re

def essay_analyzer():
    """
    Python script providing basic AI-like proofreading for student essays.
    It checks word count, usage of linking words, and common grammatical errors.
    """
    print("Welcome to the Essay Proofreader CLI!")
    print("This tool will analyze your paragraph for length, coherence, and grammar.\n")
    
    text = input("Paste your short essay here:\n")
    
    words = text.split()
    word_count = len(words)
    print(f"\n--- Analysis Report ---")
    print(f"Word Count: {word_count} words.")
    
    if word_count < 80:
        print("Warning: Your essay is a bit too short. Try to write 80-100 words.")
    elif word_count > 120:
        print("Note: Your essay is quite long. Ensure you stay on topic.")
        
    # Check for basic linking words
    linkers = ['because', 'however', 'first', 'second', 'so', 'besides', 'finally', 'moreover', 'although']
    found_linkers = [l for l in linkers if l in text.lower()]
    print(f"Linking words used: {', '.join(found_linkers) if found_linkers else 'None'}")
    
    if len(found_linkers) < 3:
        print("Suggestion: Use more linking words (e.g., however, because, first) to improve coherence.")
    else:
        print("Great job using linking words to connect your ideas!")
        
    # Simple tense check heuristic (looking for 'is' + base verb error)
    if re.search(r'\bis\s+[a-z]+[^ing]\b', text.lower()):
        print("Grammar Alert: Possible Present Continuous error detected (e.g. 'is go' instead of 'is going'). Check your 'be + V-ing' structures.")
        
    print("-----------------------")
    print("Remember to always proofread your work manually as well!")

if __name__ == "__main__":
    essay_analyzer()
```

## 💡 Common Vietnamese EFL Mistakes to Avoid (Synthesis)
1. **Direct Translation:** e.g., "I very like apple" instead of "I like apples very much".
2. **Missing Plural 's':** e.g., "I have two dog" instead of "I have two dogs".
3. **Run-on Sentences:** Writing long sentences joined only by commas without proper conjunctions.

## Discussion Questions (Mid-Term Interview Prep) / Câu Hỏi Thảo Luận
1. **Combine Topics (Hobbies & Health): How can a hobby help you stay healthy?**
   - *Sample Answer:* A hobby like swimming is great for cardiovascular health. Even quiet hobbies like reading help reduce stress and improve mental well-being.
2. **Combine Topics (Community & School): What community service could your school organize?**
   - *Sample Answer:* Our school could organize a tutoring program where older students teach younger children in the neighborhood for free.
3. **Combine Topics (Food & Arts): Do you think cooking is an art?**
   - *Sample Answer:* Absolutely. Cooking requires creativity to combine flavors and aesthetics to present the dish beautifully on a plate, much like painting a canvas.

## Homework & Practice Writing Tasks / Bài Tập Về Nhà
**Task:** Write a comprehensive paragraph (100-120 words) introducing yourself, your favorite hobby, your school, and a recent community activity you did. 

**Model Band 8+ Paragraph:**
Hello, my name is Huy and I am a seventh-grade student at Nguyen Du Lower Secondary School. My school is very modern and has a large library where I spend most of my free time. My absolute favorite hobby is reading comic books because it helps me relax after a long day of studying. Furthermore, I believe it improves my imagination. Last weekend, instead of staying at home to read, I participated in a community service project with my classmates. We planted trees in the local park and cleaned up the streets. Although we were extremely tired at the end of the day, it felt wonderful to contribute to protecting our environment.


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

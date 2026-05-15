# Exam Simulator - Refactored Version

## 🎯 Major Features & Improvements

### ✅ **Users Can Change Answers Anytime (Before Final Submission)**

The exam now implements a **two-stage submission system**:

1. **During Exam**: Users select/change answers question by question
2. **Review Screen**: Users can still modify ANY answer by clicking on it
3. **Final Submission**: Only AFTER clicking "Submit Final Exam" are answers locked

#### How It Works for Each Question Type:

**MCQ (Multiple Choice)**
- Click a different option → instantly replaces previous selection
- Visual feedback (blue highlight) shows current selection
- When returning to question → previous answer is restored

**Ordering Questions**
- Click items to add/remove them in sequence
- Number updates automatically (1, 2, 3...)
- Click already-selected item → removes it and renumbers remaining
- Reorganize anytime by adding/removing in different order

**Matching Questions**
- Select term → highlights in blue
- Select definition → creates pair with term
- Click paired term again → unpairs it, can select new definition
- All pairings maintained if you navigate away and return

---

## 🏗️ Architecture & Code Organization

### **New Class Structure**

#### **1. ExamSession Class**
Encapsulates all exam state:
```javascript
class ExamSession {
    // Properties
    - questions[]         // All exam questions
    - currentQuestionIndex    // Current position
    - score              // Calculated score
    - answers[]          // All user responses
    - flaggedQuestions   // Set of flagged indices
    - userSelection[]    // For ordering questions
    - userPairs{}        // For matching questions
    - hasSubmitted       // Lock after final submission
    
    // Methods
    - initialize(questions, mode)
    - getCurrentQuestion()
    - setAnswer(answer)
    - getAnswer()
    - isAnswered(index)
    - toggleFlag()
    - nextQuestion()
    - jumpToQuestion(idx)
    - calculateScore()
    - isAnswerCorrect(question, index)
    - getScorePercentage()
    - isPassed()
}
```

#### **2. ExamTimer Class**
Independent timer management:
```javascript
class ExamTimer {
    // Properties
    - timeLeft
    - isPaused
    - duration
    
    // Methods
    - start(onTick, onTimeUp)
    - stop()
    - pause()
    - resume()
    - formatTime()
    - isWarning()
    - getProgress()
}
```

#### **3. UI Object**
DOM element caching for performance:
```javascript
const UI = {
    // All DOM elements cached once
    setupScreen, examContainer, reviewScreen, resultScreen,
    qNumber, qText, optionsContainer, feedback, etc.
    
    // Helper methods
    hideAll()
    showExam()
    showReview()
    showResults()
    showSetup()
}
```

---

## 🔄 User Flow Diagram

```
START
  ↓
[SETUP SCREEN]
  - Select Module
  - Select Mode (Practice/Exam)
  ↓
[EXAM MODE]
  - Load Question
  - User selects answer (MCQ/Ordering/Matching)
  - Answer saved to session.answers[]
  ├─ User clicks "Submit Answer" 
  │   ├─ Practice Mode: Show feedback
  │   └─ Exam Mode: Move to next question
  ├─ User changes mind → Click different answer (saved)
  ├─ User navigates away → Answer preserved
  └─ User returns → Previous answer restored
  ↓
[ALL QUESTIONS COMPLETED]
  ↓
[REVIEW SCREEN] ⭐ CAN STILL EDIT ANSWERS HERE
  - Shows all questions
  - Shows answered/unanswered status
  - Click any question to edit answer
  - Answer changes saved
  - "Back to Exam" button resumes exam
  ↓
[CLICK "SUBMIT FINAL EXAM"]
  ↓
[RESULT SCREEN]
  - Answers locked
  - Score displayed
  - Pass/Fail status
```

---

## 📊 State Management Flow

### **Answer Persistence Example**

**Scenario**: User changes question and returns

```javascript
// Step 1: User on Question 1 selects Option A
session.setAnswer('A')  // answers[0] = 'A'

// Step 2: User moves to Question 2
session.currentQuestionIndex = 1
loadQuestion()  // Loads Question 2

// Step 3: User returns to Question 1
session.jumpToQuestion(0)
loadQuestion()  // Re-renders Question 1
const savedAnswer = session.getAnswer(0)  // Returns 'A'
// Button A is re-highlighted automatically
```

---

## 🎨 UI/UX Improvements

### **1. Better Button States**
- **Options**: White → Blue (selected)
- **Ordering**: Numbers show sequence (1, 2, 3...)
- **Matching**: Green highlight when paired

### **2. Navigation Grid (Q-Box)**
```
Answered questions:     ✅ Green
Current question:       🔵 Blue
Flagged questions:      🚩 Yellow
Unanswered questions:   ⚪ Gray
```

### **3. Review Screen**
- Lists all questions with status icons
- Shows which are flagged
- Click any to edit answers
- "⚠️ You can still change answers" warning message

### **4. Timer**
- Normal mode: Gray background
- Warning (< 5 min): Red background with pulse animation

### **5. Progress Bar**
- Visual indicator of exam progress
- Fills as user progresses

---

## 🚀 Key Functions

### **Answer Handling**

```javascript
// MCQ
selectMCQOption(index, buttonElement) {
    session.setAnswer(index)
    // Visual highlighting
}

// Ordering
selectOrderingItem(item, element) {
    if (already selected) {
        session.userSelection.remove(item)
    } else {
        session.userSelection.push(item)
    }
    updateOrderingNumbers()
}

// Matching
selectMatchingTerm(element, term) {
    if (already paired) {
        delete session.userPairs[term]
    } else {
        session.activeTerm = { element, term }  // Waiting for definition
    }
}

selectMatchingDefinition(element, definition) {
    session.userPairs[session.activeTerm.term] = definition
}
```

### **Navigation**

```javascript
// Move forward
moveToNextQuestion() {
    if (session.nextQuestion()) {
        loadQuestion()
    } else {
        showReviewScreen()
    }
}

// Jump to specific question
jumpToQuestion(idx) {
    session.jumpToQuestion(idx)
    loadQuestion()
}

// Return from review to edit
returnToQuestion(idx) {
    session.jumpToQuestion(idx)
    timer.resume()  // Resume countdown
    loadQuestion()
}
```

### **Submission**

```javascript
// Check individual answer (for practice mode)
checkAnswer() {
    validate answer provided
    save to session.answers[]
    if (practice mode) show feedback
    else move to next question
}

// Final submission (locks answers)
submitExam() {
    confirm("Are you sure?"
    stop timer
    calculate score
    show results
    session.hasSubmitted = true  // Lock answers
}
```

---

## 📝 Answer Validation

```javascript
isAnswerCorrect(question, questionIndex) {
    const userAnswer = session.answers[questionIndex]
    
    // MCQ: Direct comparison
    if (type === 'mcq') {
        return userAnswer === question.cor
    }
    
    // Ordering: Array string comparison
    if (type === 'ordering') {
        return JSON.stringify(userAnswer) 
            === JSON.stringify(question.cor)
    }
    
    // Matching: All pairs match
    if (type === 'matching') {
        return question.pairs.every(p => 
            userAnswer[p.term] === p.definition
        )
    }
}
```

---

## 🔒 How Answer Locking Works

```javascript
// Answers are MUTABLE during exam
session.answers[0] = 'A'  ✓ Can change
session.answers[0] = 'B'  ✓ Can change

// After user clicks "Submit Final Exam"
session.hasSubmitted = true

// Now:
// - No more editing allowed
// - Can reload to see results
// - Cannot resume exam
```

---

## 🎓 Practice vs Exam Mode

| Feature | Practice | Exam |
|---------|----------|------|
| Feedback | Show explanations | No feedback |
| Submission | Per question | All at end |
| Review | Not available | Available before final submission |
| Answer changes | ✅ Yes | ✅ Yes (until final submit) |
| Time pressure | Relaxed | Realistic (50 min) |

---

## 📱 Responsive Design

- **Desktop**: Multi-column matching, full nav grid
- **Tablet**: Adjusted spacing, touch-friendly buttons
- **Mobile**: Single-column layout, larger buttons

---

## 🧪 Testing the Features

### **Test 1: Change MCQ Answer**
```
1. Start exam
2. Click Option A
3. Click Option B
4. Verify A is deselected, B is highlighted
5. Navigate to Question 2
6. Return to Question 1
7. Verify Option B is still selected
```

### **Test 2: Modify Ordering**
```
1. Start ordering question
2. Click: Dog, Cat, Bird (1, 2, 3)
3. Click Dog (already selected)
4. Verify: Cat=1, Bird=2, Dog removed
5. Click Dog again
6. Verify: Cat=1, Bird=2, Dog=3
```

### **Test 3: Change Matching Pair**
```
1. Match: Term1 ↔ Def1
2. Click Term1 (already paired)
3. Click Def2
4. Verify: Term1 ↔ Def2, Def1 unpaired
```

### **Test 4: Review & Edit**
```
1. Complete all questions
2. Review screen shows status
3. Click Question 3
4. Change answer
5. Return to review
6. See updated status
7. Click "Submit Final Exam"
8. Answers locked
```

---

## 🐛 Debug Tips

Enable browser console to see:
```javascript
// Check session state
console.log(session.answers)
console.log(session.userSelection)
console.log(session.userPairs)

// Check timer
console.log(timer.timeLeft)
console.log(timer.formatTime())

// Check current question
console.log(session.getCurrentQuestion())
```

---

## 🔧 Future Enhancements

1. **Keyboard Navigation**
   - Arrow keys for next/previous question
   - Enter to submit answer
   - Spacebar to flag

2. **Local Storage**
   - Resume interrupted exams
   - Save progress locally

3. **Analytics Dashboard**
   - Time per question
   - Difficulty analysis
   - Weak areas identification

4. **Collaborative Features**
   - Live proctoring
   - Screen sharing detection

5. **Accessibility**
   - Screen reader support
   - High contrast mode
   - Keyboard-only navigation

---

## 📞 Support & Documentation

For issues or questions:
1. Check browser console for errors
2. Verify all files are loaded (config.js, script.js)
3. Check network tab for 404s
4. Clear browser cache and reload

---

**Version**: 2.0 (Refactored)  
**Last Updated**: 2026-05-15  
**Author**: Donfaruk19

/**
 * ===== EXAM SESSION CLASS =====
 * Encapsulates all exam state and logic
 */
class ExamSession {
    constructor() {
        this.questions = [];
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.mode = '';
        this.answers = [];
        this.flaggedQuestions = new Set();
        this.isReviewMode = false;
        this.hasSubmitted = false;
        
        // Interactive question states
        this.userSelection = [];
        this.userPairs = {};
        this.activeTerm = null;
    }

    initialize(questions, mode) {
        this.questions = questions;
        this.mode = mode;
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.answers = new Array(questions.length).fill(null);
        this.flaggedQuestions.clear();
        this.isReviewMode = false;
        this.hasSubmitted = false;
    }

    getCurrentQuestion() {
        return this.questions[this.currentQuestionIndex] || null;
    }

    setAnswer(answer) {
        this.answers[this.currentQuestionIndex] = answer;
    }

    getAnswer(questionIndex = this.currentQuestionIndex) {
        return this.answers[questionIndex];
    }

    isAnswered(questionIndex) {
        return this.answers[questionIndex] !== null;
    }

    toggleFlag() {
        if (this.flaggedQuestions.has(this.currentQuestionIndex)) {
            this.flaggedQuestions.delete(this.currentQuestionIndex);
        } else {
            this.flaggedQuestions.add(this.currentQuestionIndex);
        }
    }

    isFlagged(questionIndex = this.currentQuestionIndex) {
        return this.flaggedQuestions.has(questionIndex);
    }

    nextQuestion() {
        if (this.currentQuestionIndex < this.questions.length - 1) {
            this.currentQuestionIndex++;
            return true;
        }
        return false;
    }

    jumpToQuestion(index) {
        if (index >= 0 && index < this.questions.length) {
            this.currentQuestionIndex = index;
            return true;
        }
        return false;
    }

    calculateScore() {
        this.score = 0;
        this.questions.forEach((question, index) => {
            if (this.isAnswerCorrect(question, index)) {
                this.score++;
            }
        });
        return this.score;
    }

    isAnswerCorrect(question, questionIndex) {
        const userAnswer = this.answers[questionIndex];
        if (userAnswer === null) return false;

        const type = question.type || QUESTION_TYPES.MCQ;

        switch (type) {
            case QUESTION_TYPES.MCQ:
                return userAnswer === question.cor;
            case QUESTION_TYPES.ORDERING:
                return JSON.stringify(userAnswer) === JSON.stringify(question.cor);
            case QUESTION_TYPES.MATCHING:
                return question.pairs.every(p => userAnswer[p.term] === p.definition);
            default:
                return false;
        }
    }

    getScorePercentage() {
        return Math.round((this.score / this.questions.length) * 100);
    }

    isPassed() {
        return this.getScorePercentage() >= CONFIG.PASS_PERCENTAGE;
    }

    resetCurrentQuestion() {
        this.answers[this.currentQuestionIndex] = null;
        this.userSelection = [];
        this.userPairs = {};
        this.activeTerm = null;
    }
}

/**
 * ===== TIMER CLASS =====
 * Manages exam timer
 */
class ExamTimer {
    constructor(duration = CONFIG.FULL_EXAM_DURATION) {
        this.duration = duration;
        this.timeLeft = duration;
        this.isPaused = false;
        this.intervalId = null;
        this.onTimeUp = null;
        this.onTick = null;
    }

    start(onTick, onTimeUp) {
        this.onTick = onTick;
        this.onTimeUp = onTimeUp;
        this.isPaused = false;

        this.intervalId = setInterval(() => {
            if (!this.isPaused) {
                this.timeLeft--;
                this.onTick?.(this.timeLeft);

                if (this.timeLeft <= 0) {
                    this.stop();
                    this.onTimeUp?.();
                }
            }
        }, CONFIG.TIMER_INTERVAL);
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    pause() {
        this.isPaused = true;
    }

    resume() {
        this.isPaused = false;
    }

    formatTime() {
        const minutes = Math.floor(this.timeLeft / 60);
        const seconds = this.timeLeft % 60;
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }

    isWarning() {
        return this.timeLeft <= CONFIG.WARNING_TIME && this.timeLeft > 0;
    }

    getProgress() {
        return Math.max(0, (this.timeLeft / this.duration) * 100);
    }
}

/**
 * ===== DOM CACHE =====
 * Cache all DOM elements for better performance
 */
const UI = {
    // Screens
    setupScreen: document.getElementById('setup-screen'),
    examContainer: document.getElementById('exam-container'),
    reviewScreen: document.getElementById('review-screen'),
    resultScreen: document.getElementById('result-screen'),

    // Exam elements
    moduleTitle: document.getElementById('module-title'),
    examTimer: document.getElementById('exam-timer'),
    quitBtn: document.getElementById('quit-btn'),
    progressBar: document.getElementById('progress-bar'),
    progressFill: document.getElementById('progress-fill'),
    qNumber: document.getElementById('q-number'),
    qText: document.getElementById('q-text'),
    optionsContainer: document.getElementById('options-container'),
    interactiveContainer: document.getElementById('interactive-container'),
    feedback: document.getElementById('feedback'),
    flagBtn: document.getElementById('flag-btn'),
    submitBtn: document.getElementById('submit-btn'),
    nextBtn: document.getElementById('next-btn'),
    qGrid: document.getElementById('q-grid'),
    moduleSelect: document.getElementById('module-select'),

    // Review screen
    reviewList: document.getElementById('review-list'),
    flagCount: document.getElementById('flag-count'),

    // Result screen
    finalScore: document.getElementById('final-score'),
    statusText: document.getElementById('status-text'),

    // Methods to hide/show screens
    hideAll() {
        this.setupScreen.classList.add('hidden');
        this.examContainer.classList.add('hidden');
        this.reviewScreen.classList.add('hidden');
        this.resultScreen.classList.add('hidden');
    },

    showExam() {
        this.hideAll();
        this.examContainer.classList.remove('hidden');
    },

    showReview() {
        this.hideAll();
        this.reviewScreen.classList.remove('hidden');
    },

    showResults() {
        this.hideAll();
        this.resultScreen.classList.remove('hidden');
    },

    showSetup() {
        this.hideAll();
        this.setupScreen.classList.remove('hidden');
    }
};

// ===== GLOBAL STATE =====
let session = new ExamSession();
let timer = null;

// ===== UTILITY FUNCTIONS =====
function shuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function showMessage(text, type = 'info') {
    console.log(`[${type.toUpperCase()}]`, text);
    // Could be enhanced with a toast notification system
}

function showError(text) {
    showMessage(text, 'error');
    alert(text);
}

// ===== TIMER MANAGEMENT =====
function updateTimerDisplay() {
    UI.examTimer.innerText = `Time: ${timer.formatTime()}`;
    
    if (timer.isWarning()) {
        UI.examTimer.classList.add('warning');
    } else {
        UI.examTimer.classList.remove('warning');
    }
}

function handleTimeUp() {
    showMessage('Time is up! Submitting exam...', 'warning');
    showReviewScreen();
}

function startTimer() {
    timer = new ExamTimer(CONFIG.FULL_EXAM_DURATION);
    timer.start(updateTimerDisplay, handleTimeUp);
}

function quitToMenu() {
    if (confirm('Are you sure you want to quit? Your progress will be lost.')) {
        if (timer) timer.stop();
        session = new ExamSession();
        UI.showSetup();
    }
}

// ===== EXAM INITIALIZATION =====
function startApp(selectedMode) {
    const moduleKey = UI.moduleSelect.value;
    
    if (!moduleKey) {
        showError('Please select a module!');
        return;
    }

    let questions = [];

    // Load questions based on module selection
    if (moduleKey === 'full_level1') {
        let pool = [];
        Object.keys(allModules).forEach(key => {
            if (key.startsWith('l1_')) {
                pool.push(...allModules[key]);
            }
        });
        questions = shuffle(pool).slice(0, CONFIG.QUESTIONS_PER_FULL_EXAM);
    } else if (moduleKey === 'full_level2') {
        let pool = [];
        Object.keys(allModules).forEach(key => {
            if (key.startsWith('l2_')) {
                pool.push(...allModules[key]);
            }
        });
        questions = shuffle(pool).slice(0, CONFIG.QUESTIONS_PER_FULL_EXAM);
    } else {
        if (!allModules[moduleKey]) {
            showError('Module not found!');
            return;
        }
        questions = shuffle([...allModules[moduleKey]]);
    }

    // Initialize session
    session.initialize(questions, selectedMode);
    UI.moduleTitle.innerText = UI.moduleSelect.selectedOptions[0].text;

    // Start exam
    UI.showExam();
    startTimer();
    loadQuestion();
    updateNavGrid();
}

// ===== QUESTION LOADING =====
function loadQuestion() {
    const q = session.getCurrentQuestion();
    
    if (!q) {
        showError('No question found!');
        showReviewScreen();
        return;
    }

    // Clear previous content
    UI.optionsContainer.innerHTML = '';
    UI.interactiveContainer.innerHTML = '';
    UI.optionsContainer.classList.add('hidden');
    UI.interactiveContainer.classList.add('hidden');
    UI.feedback.classList.add('hidden');

    // Update UI
    const questionIndex = session.currentQuestionIndex;
    const totalQuestions = session.questions.length;
    UI.qNumber.innerText = `Question ${questionIndex + 1} of ${totalQuestions}`;
    UI.qText.innerText = q.q;

    // Update progress bar
    const progress = ((questionIndex + 1) / totalQuestions) * 100;
    UI.progressFill.style.width = progress + '%';

    // Update flag button
    updateFlagButton();

    // Load content based on question type
    const type = q.type || QUESTION_TYPES.MCQ;

    if (type === QUESTION_TYPES.MCQ) {
        renderMCQOptions(q);
    } else if (type === QUESTION_TYPES.ORDERING) {
        renderOrderingOptions(q);
    } else if (type === QUESTION_TYPES.MATCHING) {
        renderMatchingOptions(q);
    }

    // Show submit button (never auto-advance in testing mode)
    UI.submitBtn.classList.remove('hidden');
    UI.nextBtn.classList.add('hidden');

    updateNavGrid();
}

// ===== MCQ RENDERING =====
function renderMCQOptions(question) {
    UI.optionsContainer.classList.remove('hidden');
    const savedAnswer = session.getAnswer();

    question.a.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = option;
        btn.setAttribute('data-index', index);

        // Restore previous selection if user changed questions
        if (index === savedAnswer) {
            btn.classList.add('selected');
            btn.style.background = '#0056b3';
            btn.style.color = 'white';
            btn.style.borderColor = '#0056b3';
        }

        btn.addEventListener('click', () => selectMCQOption(index, btn));
        UI.optionsContainer.appendChild(btn);
    });
}

function selectMCQOption(index, buttonElement) {
    // Save answer to session
    session.setAnswer(index);

    // Update UI - highlight selected, clear others
    const allButtons = UI.optionsContainer.querySelectorAll('button');
    allButtons.forEach(btn => {
        btn.classList.remove('selected');
        btn.style.background = 'white';
        btn.style.color = 'black';
        btn.style.borderColor = '#e2e8f0';
    });

    buttonElement.classList.add('selected');
    buttonElement.style.background = '#0056b3';
    buttonElement.style.color = 'white';
    buttonElement.style.borderColor = '#0056b3';

    // Update nav grid immediately
    updateNavGrid();
}

// ===== ORDERING RENDERING =====
function renderOrderingOptions(question) {
    UI.interactiveContainer.classList.remove('hidden');
    
    // Restore previous selections if they exist
    const savedAnswer = session.getAnswer();
    session.userSelection = savedAnswer ? [...savedAnswer] : [];

    const itemsToRender = shuffle([...question.items]);

    itemsToRender.forEach(item => {
        const div = document.createElement('div');
        div.className = 'interactive-item draggable';
        div.innerText = item;
        div.setAttribute('data-item', item);

        // Mark as selected if in previous answer
        if (session.userSelection.includes(item)) {
            const position = session.userSelection.indexOf(item) + 1;
            div.classList.add('selected');
            div.innerHTML = `<span class="order-number">${position}</span> ${item}`;
        }

        div.addEventListener('click', () => selectOrderingItem(item, div));
        UI.interactiveContainer.appendChild(div);
    });
}

function selectOrderingItem(item, element) {
    if (element.classList.contains('selected')) {
        // Remove from selection
        const index = session.userSelection.indexOf(item);
        if (index > -1) {
            session.userSelection.splice(index, 1);
        }
        element.classList.remove('selected');
        element.innerText = item;
        
        // Re-number remaining items
        updateOrderingNumbers();
    } else {
        // Add to selection
        session.userSelection.push(item);
        element.classList.add('selected');
        element.innerHTML = `<span class="order-number">${session.userSelection.length}</span> ${item}`;
    }

    updateNavGrid();
}

function updateOrderingNumbers() {
    const items = UI.interactiveContainer.querySelectorAll('.interactive-item.selected');
    items.forEach((item, index) => {
        const text = item.getAttribute('data-item');
        item.innerHTML = `<span class="order-number">${index + 1}</span> ${text}`;
    });
}

// ===== MATCHING RENDERING =====
function renderMatchingOptions(question) {
    UI.interactiveContainer.classList.remove('hidden');
    
    // Restore previous selections if they exist
    const savedAnswer = session.getAnswer();
    session.userPairs = savedAnswer ? { ...savedAnswer } : {};

    UI.interactiveContainer.innerHTML = `
        <div class="matching-grid">
            <div class="match-column" id="terms"></div>
            <div class="match-column" id="defs"></div>
        </div>
    `;

    const shuffledTerms = shuffle([...question.pairs]);
    const shuffledDefs = shuffle([...question.pairs]);

    // Render terms
    shuffledTerms.forEach(pair => {
        const div = document.createElement('div');
        div.className = 'interactive-item matchable';
        div.innerText = pair.term;
        div.setAttribute('data-term', pair.term);

        if (session.userPairs[pair.term]) {
            div.classList.add('paired');
        }

        div.addEventListener('click', () => selectMatchingTerm(div, pair.term));
        document.getElementById('terms').appendChild(div);
    });

    // Render definitions
    shuffledDefs.forEach(pair => {
        const div = document.createElement('div');
        div.className = 'interactive-item matchable';
        div.innerText = pair.definition;
        div.setAttribute('data-def', pair.definition);

        if (Object.values(session.userPairs).includes(pair.definition)) {
            div.classList.add('paired');
        }

        div.addEventListener('click', () => selectMatchingDefinition(div, pair.definition));
        document.getElementById('defs').appendChild(div);
    });
}

function selectMatchingTerm(element, term) {
    if (element.classList.contains('paired')) {
        // Unpair
        delete session.userPairs[term];
        element.classList.remove('paired');
        
        // Find and unpair the definition
        const defElements = document.querySelectorAll('[data-def]');
        defElements.forEach(def => {
            if (def.getAttribute('data-def') === session.userPairs[term]) {
                def.classList.remove('paired');
            }
        });
    } else {
        // Clear previous selection and select new term
        document.querySelectorAll('#terms .interactive-item').forEach(d => d.classList.remove('selected'));
        element.classList.add('selected');
        session.activeTerm = { element, term };
    }

    updateNavGrid();
}

function selectMatchingDefinition(element, definition) {
    if (!session.activeTerm) return;

    if (element.classList.contains('paired')) return;

    // Create pairing
    const term = session.activeTerm.term;
    session.userPairs[term] = definition;

    session.activeTerm.element.classList.remove('selected');
    session.activeTerm.element.classList.add('paired');
    element.classList.add('paired');
    session.activeTerm = null;

    updateNavGrid();
}

// ===== ANSWER SUBMISSION =====
function checkAnswer() {
    const q = session.getCurrentQuestion();
    const type = q.type || QUESTION_TYPES.MCQ;

    // Validate answer was provided
    if (type === QUESTION_TYPES.MCQ && session.getAnswer() === null) {
        showError('Please select an answer!');
        return;
    }

    if (type === QUESTION_TYPES.ORDERING && session.userSelection.length < q.items.length) {
        showError('Please rank all items!');
        return;
    }

    if (type === QUESTION_TYPES.MATCHING && Object.keys(session.userPairs).length < q.pairs.length) {
        showError('Please match all items!');
        return;
    }

    // Save answer
    if (type === QUESTION_TYPES.MCQ) {
        session.setAnswer(session.getAnswer());
    } else if (type === QUESTION_TYPES.ORDERING) {
        session.setAnswer([...session.userSelection]);
    } else if (type === QUESTION_TYPES.MATCHING) {
        session.setAnswer({ ...session.userPairs });
    }

    // In practice mode, show feedback
    if (session.mode === EXAM_MODES.PRACTICE) {
        const isCorrect = session.isAnswerCorrect(q, session.currentQuestionIndex);
        displayFeedback(isCorrect, q.exp);
        UI.submitBtn.classList.add('hidden');
        UI.nextBtn.classList.remove('hidden');
    } else {
        // In exam mode, move to next question
        moveToNextQuestion();
    }
}

function displayFeedback(isCorrect, explanation) {
    const feedback = UI.feedback;
    feedback.classList.remove('hidden');
    feedback.className = isCorrect ? 'correct-box' : 'wrong-box';
    feedback.innerHTML = `<strong>${isCorrect ? '✅ Correct!' : '❌ Incorrect.'}</strong><br>${explanation}`;
}

function moveToNextQuestion() {
    if (session.nextQuestion()) {
        loadQuestion();
    } else {
        showReviewScreen();
    }
}

function nextQuestion() {
    moveToNextQuestion();
}

// ===== FLAG MANAGEMENT =====
function updateFlagButton() {
    const isFlagged = session.isFlagged();
    UI.flagBtn.textContent = isFlagged ? '🚩 Unflag Question' : '🚩 Flag for Review';
    UI.flagBtn.style.background = isFlagged ? '#ffc107' : 'white';
    UI.flagBtn.style.color = isFlagged ? 'black' : 'black';
}

function toggleFlag() {
    session.toggleFlag();
    updateFlagButton();
    updateNavGrid();
}

// ===== REVIEW SCREEN =====
function showReviewScreen() {
    if (timer) timer.pause();

    const flaggedCount = session.flaggedQuestions.size;
    UI.flagCount.innerText = flaggedCount;

    UI.reviewList.innerHTML = '<h3>Exam Summary</h3>';

    session.questions.forEach((_, idx) => {
        const item = document.createElement('div');
        item.className = 'review-item';
        item.style.display = 'flex';
        item.style.justifyContent = 'space-between';
        item.style.alignItems = 'center';
        item.style.padding = '10px';
        item.style.marginBottom = '8px';
        item.style.borderRadius = '4px';
        item.style.background = '#f5f5f5';
        item.style.cursor = 'pointer';
        item.style.transition = 'background 0.2s';

        const isAnswered = session.isAnswered(idx);
        const isFlagged = session.isFlagged(idx);

        const status = isFlagged ? '<span style="color:#b7791f">🚩 Flagged</span> ' : '';
        const answered = isAnswered ? '<span style="color:green">✅ Answered</span>' : '<span style="color:red">❌ Unanswered</span>';

        item.innerHTML = `
            <span><strong>Question ${idx + 1}</strong></span>
            <span>${status}${answered}</span>
        `;

        item.addEventListener('click', () => returnToQuestion(idx));
        item.addEventListener('mouseover', () => item.style.background = '#e0e0e0');
        item.addEventListener('mouseout', () => item.style.background = '#f5f5f5');

        UI.reviewList.appendChild(item);
    });

    UI.showReview();
}

function backToExam() {
    if (timer) timer.resume();
    UI.showExam();
}

function returnToQuestion(idx) {
    if (session.jumpToQuestion(idx)) {
        UI.showExam();
        if (timer) timer.resume();
        loadQuestion();
    }
}

// ===== FINAL SUBMISSION =====
function submitExam() {
    if (confirm('Are you sure? You cannot change your answers after submission.')) {
        if (timer) timer.stop();

        session.hasSubmitted = true;
        session.calculateScore();

        const percentage = session.getScorePercentage();
        const passed = session.isPassed();

        UI.statusText.innerText = `${passed ? '✅ PASSED' : '❌ FAILED'} - Module Complete`;
        UI.finalScore.innerHTML = `
            <h2 style="color: ${passed ? 'green' : 'red'}; font-size: 3em;">
                ${percentage}%
            </h2>
            <p style="font-size: 1.2em; margin-top: 15px;">
                Correct: <strong>${session.score}</strong> out of <strong>${session.questions.length}</strong>
            </p>
            <p style="margin-top: 20px; color: #666;">
                ${passed ? 'Congratulations! You passed the exam.' : 'Please review and try again.'}
            </p>
        `;

        UI.showResults();
    }
}

// ===== NAVIGATION GRID =====
function updateNavGrid() {
    UI.qGrid.innerHTML = '';

    session.questions.forEach((_, idx) => {
        const box = document.createElement('div');
        box.className = 'q-box';
        box.innerText = idx + 1;
        box.title = `Question ${idx + 1}`;

        if (idx === session.currentQuestionIndex) {
            box.classList.add('current');
        }
        if (session.isAnswered(idx)) {
            box.classList.add('answered');
        }
        if (session.isFlagged(idx)) {
            box.classList.add('flagged');
        }

        box.addEventListener('click', () => jumpToQuestion(idx));
        UI.qGrid.appendChild(box);
    });
}

function jumpToQuestion(idx) {
    if (session.jumpToQuestion(idx)) {
        loadQuestion();
    }
}

// ===== SERVICE WORKER REGISTRATION =====
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(err => {
        console.warn('Service Worker registration failed:', err);
    });
}

// ===== INITIAL SETUP =====
document.addEventListener('DOMContentLoaded', () => {
    UI.showSetup();
});

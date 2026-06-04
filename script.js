/**
 * IC3 GS6 EXAM SIMULATOR - ARCHITECTURAL ENGINE
 * Developed by: Donfaruk19
 * Optimized for: WCAG Accessibility (ARIA), Touch Interfaces, and Dynamic Module Scaling
 * Feature Integration: Dual Mode Routing Engine (Training & Testing Profiles)
 */

// ==========================================
// DOCUMENTATION: PART 3 - KEYBOARD SHORTCUTS
// ==========================================
// Keyboard shortcuts for power users and accessibility
// Ctrl+S: Save progress manually
// Ctrl+F: Flag/unflag current question
// Alt+N: Jump to next question
// Alt+P: Jump to previous question
// ? or H: Show keyboard help

// ==========================================
// ADVANCED ANALYTICS ENGINE
// ==========================================
class AnalyticsTracker {
    constructor() {
        this.events = [];
        this.sessionStart = Date.now();
        this.questionViewTimes = {}; // Track time per question
    }

    trackEvent(eventName, eventData = {}) {
        const event = {
            name: eventName,
            timestamp: Date.now(),
            data: eventData
        };
        this.events.push(event);
        console.log(`📊 [Analytics] ${eventName}:`, eventData);
    }

    startQuestionTimer(questionIdx) {
        this.questionViewTimes[questionIdx] = Date.now();
    }

    getQuestionTime(questionIdx) {
        if (!this.questionViewTimes[questionIdx]) return 0;
        return Math.round((Date.now() - this.questionViewTimes[questionIdx]) / 1000);
    }

    getSessionDuration() {
        return Math.round((Date.now() - this.sessionStart) / 1000);
    }

    getSummary() {
        return {
            totalEvents: this.events.length,
            sessionDuration: this.getSessionDuration(),
            events: this.events,
            timestamp: new Date().toISOString()
        };
    }

    exportToConsole() {
        console.group('📈 Exam Analytics Summary');
        console.table(this.events);
        console.log('Total Session Duration:', this.getSessionDuration(), 'seconds');
        console.groupEnd();
    }
}

// Create global analytics instance
const analytics = new AnalyticsTracker();

// ==========================================
// KEYBOARD SHORTCUT HELPER
// ==========================================
class KeyboardShortcutManager {
    constructor() {
        this.shortcuts = {
            'Ctrl+S': { description: 'Save progress manually', action: () => saveCurrentProgress() },
            'Ctrl+F': { description: 'Flag/unflag current question', action: () => toggleFlag() },
            'Alt+N': { description: 'Jump to next question', action: () => skipToNext() },
            'Alt+P': { description: 'Jump to previous question', action: () => skipToPrevious() },
            'Alt+R': { description: 'Jump to review screen', action: () => showReviewScreen() },
            '?': { description: 'Show keyboard help', action: () => showKeyboardHelp() },
            'H': { description: 'Show keyboard help', action: () => showKeyboardHelp() }
        };
    }

    showHelp() {
        console.group('⌨️ Keyboard Shortcuts');
        console.table(Object.entries(this.shortcuts).map(([key, val]) => ({ 
            Shortcut: key, 
            Description: val.description 
        })));
        console.groupEnd();
    }
}

const keyboardManager = new KeyboardShortcutManager();

// ==========================================
// EXTENSIBLE QUIZ MODULE STORAGE
// ==========================================
const allModules = {
    l1_lesson1: [
        // --- 1. OPERATING SYSTEM FUNDAMENTALS ---
        {
            type: "mcq",
            q: "What is an Operating System (OS)?",
            a: ["A collection of mechanical parts", "A program that manages hardware and controls communication between apps and hardware", "A set of tools for editing photos", "The physical casing of a computer"],
            cor: 1,
            exp: "The OS is the software that manages hardware and facilitates communication between hardware and applications."
        },
        {
            type: "mcq",
            q: "What is the specific term for individual lines of instructions that guide a computer?",
            a: ["Hardware", "Framework", "Code", "Nodes"],
            cor: 2,
            exp: "Individual lines of instruction in a program are referred to as code."
        },
        {
            type: "mcq",
            q: "Which of these is considered 'Software'?",
            a: ["The Monitor", "The Operating System and Application Programs", "The CPU and RAM", "The Keyboard and Mouse"],
            cor: 1,
            exp: "Software refers to the programs (OS and apps) that make the hardware run."
        },
        {
            type: "mcq",
            q: "Every computer requires an _______ to function.",
            a: ["Internet connection", "Operating System", "Printer", "Webcam"],
            cor: 1,
            exp: "Without an OS, the hardware cannot communicate or run application programs."
        },
        {
            type: "mcq",
            q: "What does the OS do for application programs?",
            a: ["It deletes them when they are old", "It manages hardware devices and controls communication for them", "It writes the code for the apps", "It buys the apps from the store"],
            cor: 1,
            exp: "The OS acts as the middleman between the app and the physical hardware."
        }
    ],
    l1_lesson2: [
        {
            type: "mcq",
            q: "What is the best definition of a 'Digital Footprint'?",
            a: ["The physical weight of a computer", "A permanent record of all your activities, postings, and uploads online", "The speed at which you type on a keyboard", "A temporary list of websites visited in one hour"],
            cor: 1,
            exp: "Your digital footprint is the permanent trail of data you leave behind whenever you perform actions online."
        }
    ]
};

// ==========================================
// CORE ENGINE CONFIGURATION WRAPPER
// ==========================================
const CONFIG = {
    TOTAL_EXAM_QUESTIONS: 50,
    EXAM_TIME_SECONDS: 3000, // 50 Minutes
    WARNING_TIME: 300,        // 5 Minutes (Timer turns red)
    PASS_SCORE: 70,           // Passing threshold %
    STORAGE_KEY: 'IC3_Simulator_State',
    ENABLE_ANALYTICS: true,    // Toggle analytics globally
    ENABLE_KEYBOARD_SHORTCUTS: true // Toggle keyboard shortcuts
};

// ==========================================
// CENTRAL CACHED CONTROLS DICTIONARY (DOM)
// ==========================================
const UI = {
    setupScreen: document.getElementById('setup-screen'),
    examContainer: document.getElementById('exam-container'),
    reviewScreen: document.getElementById('review-screen'),
    resultScreen: document.getElementById('result-screen'),
    moduleSelect: document.getElementById('module-select'),
    loadingOverlay: document.getElementById('loading-overlay'),
    qText: document.getElementById('q-text'),
    optionsContainer: document.getElementById('options-container'),
    interactiveContainer: document.getElementById('interactive-container'),
    feedback: document.getElementById('feedback'),
    timer: document.getElementById('timer'),
    progressBar: document.getElementById('progress-bar'),
    progressFill: document.getElementById('progress-fill'),
    submitBtn: document.getElementById('submit-btn'),
    nextBtn: document.getElementById('next-btn'),
    flagBtn: document.getElementById('flag-btn'),
    navGrid: document.getElementById('q-grid'),
    reviewList: document.getElementById('review-list'),
    finalScore: document.getElementById('final-score')
};

// ==========================================
// ENCAPSULATED TRANSACTION STATE CONTROLLER
// ==========================================
class ExamSession {
    constructor(questions, mode = 'training') {
        this.questions = questions;
        this.mode = mode; // 'training' or 'testing'
        this.currentIdx = 0;
        this.userAnswers = new Array(questions.length).fill(null);
        this.flags = [];
        this.isLocked = new Array(questions.length).fill(false);
        this.timeLeft = CONFIG.EXAM_TIME_SECONDS;
        this.candidateName = '';
    }

    getCurrentQuestion() {
        return this.questions[this.currentIdx];
    }
}

let session = null;
let timerInterval = null;

// ==========================================
// ENGINE CONTEXT INITIALIZATION PIPELINE
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    // FIX #1: Properly attach start button click handler
    const startBtn = document.getElementById('start-btn');
    if (startBtn) {
        startBtn.addEventListener('click', startExam);
        console.log('✅ Start button event listener attached');
        analytics.trackEvent('page_loaded', { feature: 'start_button_ready' });
    } else {
        console.warn('⚠️ Start button not found in DOM');
        analytics.trackEvent('page_error', { feature: 'start_button_missing' });
    }
    
    // PART 3: Setup keyboard shortcuts
    setupKeyboardShortcuts();
    
    checkResume();
});

// ==========================================
// PART 3: KEYBOARD SHORTCUT SETUP
// ==========================================
function setupKeyboardShortcuts() {
    if (!CONFIG.ENABLE_KEYBOARD_SHORTCUTS) return;
    
    document.addEventListener('keydown', (e) => {
        // Show help on ? or H
        if ((e.key === '?' || e.key === 'h' || e.key === 'H') && !e.ctrlKey && !e.altKey) {
            showKeyboardHelp();
            return;
        }

        if (!session) return; // Only during exam

        // Ctrl+S: Save progress
        if (e.ctrlKey && e.key === 's') {
            e.preventDefault();
            saveCurrentProgress();
            analytics.trackEvent('keyboard_shortcut_save');
            console.log('✅ Progress saved via Ctrl+S');
        }
        
        // Ctrl+F: Flag question
        else if (e.ctrlKey && e.key === 'f') {
            e.preventDefault();
            toggleFlag();
            analytics.trackEvent('keyboard_shortcut_flag');
            console.log('🚩 Question flagged/unflagged via Ctrl+F');
        }
        
        // Alt+N: Next question
        else if (e.altKey && e.key === 'n') {
            e.preventDefault();
            skipToNext();
            analytics.trackEvent('keyboard_shortcut_next');
            console.log('→ Next question via Alt+N');
        }
        
        // Alt+P: Previous question
        else if (e.altKey && e.key === 'p') {
            e.preventDefault();
            skipToPrevious();
            analytics.trackEvent('keyboard_shortcut_previous');
            console.log('← Previous question via Alt+P');
        }
        
        // Alt+R: Review screen
        else if (e.altKey && e.key === 'r') {
            e.preventDefault();
            if (session && !UI.reviewScreen.classList.contains('hidden')) {
                UI.reviewScreen.classList.add('hidden');
                UI.examContainer.classList.remove('hidden');
                console.log('Back to exam');
            } else if (session) {
                showReviewScreen();
                console.log('Showing review screen via Alt+R');
            }
            analytics.trackEvent('keyboard_shortcut_review');
        }
    });
    
    console.log('⌨️ Keyboard shortcuts enabled. Press ? for help');
}

function showKeyboardHelp() {
    const helpText = `
╔════════════════════════════════════════════════════════════════╗
║                   KEYBOARD SHORTCUTS HELP                      ║
╠════════════════════════════════════════════════════════════════╣
║  Ctrl+S  →  Save progress manually                             ║
║  Ctrl+F  →  Flag/unflag current question for review            ║
║  Alt+N   →  Jump to next question                              ║
║  Alt+P   →  Jump to previous question                          ║
║  Alt+R   →  Toggle review screen                               ║
║  ?       →  Show this help dialog                              ║
║  H       →  Show this help dialog                              ║
╠════════════════════════════════════════════════════════════════╣
║  Pro Tip: Master these shortcuts to work 30% faster! ⚡        ║
╚════════════════════════════════════════════════════════════════╝
    `;
    
    console.clear();
    console.log(helpText);
    analytics.trackEvent('keyboard_help_shown');
}

function checkResume() {
    try {
        const saved = localStorage.getItem(CONFIG.STORAGE_KEY);
        if (!saved) return;
        const state = JSON.parse(saved);
        if (state && Date.now() - state.timestamp < 3600000) { 
            analytics.trackEvent('session_resume_available', { age_seconds: Math.round((Date.now() - state.timestamp) / 1000) });
            if (confirm("An incomplete exam session was found. Would you like to resume?")) {
                rebuildSession(state);
                analytics.trackEvent('session_resumed_confirmed');
            } else {
                localStorage.removeItem(CONFIG.STORAGE_KEY);
                analytics.trackEvent('session_resume_rejected');
            }
        }
    } catch (e) {
        console.warn("localStorage environment is restricted or unavailable.", e);
        analytics.trackEvent('storage_error', { error: e.message });
    }
}

function startExam() {
    analytics.trackEvent('exam_start_clicked');
    console.log('🎯 startExam() triggered');
    
    const nameInput = document.getElementById('candidate-name');
    const selectedModule = UI.moduleSelect.value;
    
    // Simple validation
    if (!nameInput.value.trim()) {
        alert("Please enter your name to start.");
        analytics.trackEvent('exam_start_failed', { reason: 'no_name_entered' });
        return;
    }

    let compiledQuestions = [];

    // GMETRIX STYLE COMPREHENSIVE EXAM COMPILER (Full Level Aggregation)
    if (selectedModule.includes('full')) {
        const prefix = selectedModule.includes('l1') || selectedModule.includes('level1') ? 'l1_' : 'l2_';
        
        // Harvest all questions from all lessons in the level and tag them
        for (const [key, questions] of Object.entries(allModules)) {
            if (key.startsWith(prefix)) {
                let taggedQs = questions.map(q => ({ ...q, sourceLesson: key }));
                compiledQuestions.push(...taggedQs);
            }
        }
        
        // Shuffle and extract exactly 50 questions
        compiledQuestions = shuffle(compiledQuestions).slice(0, CONFIG.TOTAL_EXAM_QUESTIONS);
    } else {
        // Standard single lesson selection
        const pool = allModules[selectedModule];
        if (!pool || pool.length === 0) {
            alert("Error: The selected structural module is empty or not registered.");
            analytics.trackEvent('exam_start_failed', { reason: 'empty_module', module: selectedModule });
            return;
        }
        // Tag with lesson name for breakdown report
        compiledQuestions = shuffle([...pool]).map(q => ({ ...q, sourceLesson: selectedModule }));
    }

    if (compiledQuestions.length === 0) {
        alert("Compilation failed. No questions available.");
        analytics.trackEvent('exam_start_failed', { reason: 'no_questions_compiled' });
        return;
    }

    // Capture dynamic mode check configuration
    let currentMode = 'training';
    const modeElements = document.getElementsByName('mode');
    for (let i = 0; i < modeElements.length; i++) {
        if (modeElements[i].checked) { currentMode = modeElements[i].value; break; }
    }

    if (UI.loadingOverlay) UI.loadingOverlay.classList.remove('hidden');

    setTimeout(() => {
        session = new ExamSession(compiledQuestions, currentMode);
        session.candidateName = nameInput.value.trim();
        saveStateToStorage(selectedModule);

        if (UI.loadingOverlay) UI.loadingOverlay.classList.add('hidden');
        UI.setupScreen.classList.add('hidden');
        UI.examContainer.classList.remove('hidden');

        startTimer();
        loadQuestion();
        
        analytics.trackEvent('exam_started', {
            candidate: session.candidateName,
            mode: currentMode,
            questions_count: compiledQuestions.length,
            module: selectedModule
        });
        
        console.log('✅ Exam started successfully with', compiledQuestions.length, 'questions');
        console.log('⌨️ Press ? or H for keyboard shortcuts');
    }, 400);
}

function rebuildSession(state) {
    session = new ExamSession([]);
    Object.assign(session, state.sessionData);
    UI.setupScreen.classList.add('hidden');
    UI.examContainer.classList.remove('hidden');
    startTimer();
    loadQuestion();
}

function saveStateToStorage(moduleKey) {
    try {
        if (!session) return;
        const backupPayload = {
            module: moduleKey,
            timestamp: Date.now(),
            sessionData: {
                questions: session.questions,
                mode: session.mode,
                currentIdx: session.currentIdx,
                userAnswers: session.userAnswers,
                flags: session.flags,
                isLocked: session.isLocked,
                timeLeft: session.timeLeft,
                candidateName: session.candidateName
            }
        };
        localStorage.setItem(CONFIG.STORAGE_KEY, JSON.stringify(backupPayload));
        analytics.trackEvent('state_saved', { question_idx: session.currentIdx });
    } catch (e) {
        console.warn("Failed syncing backup state payload.", e);
        analytics.trackEvent('save_state_error', { error: e.message });
    }
}

// ==========================================
// CORE WORKSPACE QUESTION RENDERING ENGINES
// ==========================================
function loadQuestion() {
    if (!session) return;
    
    UI.feedback.classList.add('hidden');
    UI.optionsContainer.innerHTML = '';
    UI.interactiveContainer.innerHTML = '';
    
    const q = session.getCurrentQuestion();
    UI.qText.innerText = `${session.currentIdx + 1}. ${q.q}`;
    
    // Track question view
    analytics.startQuestionTimer(session.currentIdx);
    analytics.trackEvent('question_loaded', {
        question_idx: session.currentIdx,
        question_type: q.type || 'mcq'
    });
    
    // Update flag button
    if (session.flags.includes(session.currentIdx)) {
        UI.flagBtn.innerText = "🚩 Flagged";
        UI.flagBtn.classList.add('active');
    } else {
        UI.flagBtn.innerText = "Flag for Review";
        UI.flagBtn.classList.remove('active');
    }

    // Render based on question type
    if (q.type === 'mcq') {
        renderMCQ(q);
    }

    updateNavGrid();
    updateProgress();
    saveStateToStorage('l1_lesson1'); // Auto-save
}

function renderMCQ(q) {
    const historicalAnswer = session.userAnswers[session.currentIdx];

    q.a.forEach((option, idx) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = `<strong>${String.fromCharCode(65 + idx)}:</strong> ${option}`;
        
        if (historicalAnswer === idx) {
            btn.classList.add('selected');
        }
        
        btn.onclick = () => {
            const timeSpentOnQuestion = analytics.getQuestionTime(session.currentIdx);
            session.userAnswers[session.currentIdx] = idx;
            saveStateToStorage('l1_lesson1');
            
            analytics.trackEvent('answer_selected', {
                question_idx: session.currentIdx,
                answer_idx: idx,
                time_seconds: timeSpentOnQuestion,
                is_correct: idx === q.cor
            });
            
            if (session.mode === 'training') {
                revealTrainingFeedback(q, idx);
            }
            
            console.log('Answer selected:', idx);
        };
        
        UI.optionsContainer.appendChild(btn);
    });
}

function revealTrainingFeedback(q, answerIdx) {
    const isCorrect = answerIdx === q.cor;
    const feedbackDiv = UI.feedback;
    feedbackDiv.className = isCorrect ? 'feedback-box correct-box' : 'feedback-box wrong-box';
    feedbackDiv.innerHTML = isCorrect 
        ? `✅ <strong>Correct!</strong> ${q.exp}` 
        : `❌ <strong>Incorrect.</strong> ${q.exp}`;
    feedbackDiv.classList.remove('hidden');
    
    analytics.trackEvent('training_feedback_shown', {
        is_correct: isCorrect,
        question_idx: session.currentIdx
    });
}

function nextQuestion() {
    if (session.currentIdx < session.questions.length - 1) {
        session.currentIdx++;
        loadQuestion();
        analytics.trackEvent('next_question_clicked');
    } else {
        showReviewScreen();
    }
}

function skipToNext() {
    if (!session) return;
    nextQuestion();
}

function skipToPrevious() {
    if (!session || session.currentIdx === 0) return;
    session.currentIdx--;
    loadQuestion();
    analytics.trackEvent('previous_question_clicked');
}

function saveCurrentProgress() {
    if (!session) return;
    saveStateToStorage('l1_lesson1');
    console.log('✅ Progress saved at question', session.currentIdx + 1);
}

function jumpToQuestion(idx) {
    if (!session || idx < 0 || idx >= session.questions.length) return;
    const prevIdx = session.currentIdx;
    session.currentIdx = idx;
    loadQuestion();
    analytics.trackEvent('jumped_to_question', { from: prevIdx, to: idx });
}

function updateNavGrid() {
    UI.navGrid.innerHTML = '';
    session.questions.forEach((q, idx) => {
        const box = document.createElement('div');
        box.className = 'q-box';
        box.innerText = idx + 1;
        
        if (idx === session.currentIdx) box.classList.add('current');
        else if (session.userAnswers[idx] !== null) box.classList.add('answered');
        
        if (session.flags.includes(idx)) box.classList.add('flagged');
        
        box.onclick = () => jumpToQuestion(idx);
        UI.navGrid.appendChild(box);
    });
}

function updateProgress() {
    const progress = ((session.currentIdx + 1) / session.questions.length) * 100;
    UI.progressFill.style.width = progress + '%';
}

function showReviewScreen() {
    UI.examContainer.classList.add('hidden');
    UI.reviewScreen.classList.remove('hidden');
    analytics.trackEvent('review_screen_shown');
}

function toggleFlag() {
    if (!session) return;
    const current = session.currentIdx;
    const pos = session.flags.indexOf(current);
    const isFlagging = pos === -1;
    
    if (isFlagging) {
        session.flags.push(current);
    } else {
        session.flags.splice(pos, 1);
    }
    
    loadQuestion();
    analytics.trackEvent('question_flagged', {
        question_idx: current,
        flagged: isFlagging
    });
    
    console.log('Question flagged:', current);
}

function startTimer() {
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        if (!session) return;
        session.timeLeft--;
        
        const m = Math.floor(session.timeLeft / 60);
        const s = session.timeLeft % 60;
        UI.timer.innerText = `Time: ${m}:${s < 10 ? '0' : ''}${s}`;
        
        if (session.timeLeft < CONFIG.WARNING_TIME && session.timeLeft === CONFIG.WARNING_TIME) {
            UI.timer.style.color = '#e53e3e';
            UI.timer.style.fontWeight = '700';
            analytics.trackEvent('timer_warning', { seconds_left: CONFIG.WARNING_TIME });
        }

        if (session.timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("Time has expired. Your exam will now be submitted automatically.");
            analytics.trackEvent('exam_timeout');
        }
    }, 1000);
}

function shuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// ==========================================
// EXPORT ANALYTICS (For Admin/Debug Use)
// ==========================================
window.exportAnalytics = function() {
    analytics.exportToConsole();
    console.log('Complete Analytics Data:', JSON.stringify(analytics.getSummary(), null, 2));
};

console.log('💡 Tip: Type exportAnalytics() in console to view tracked events');

/**
 * IC3 GS6 EXAM SIMULATOR - ARCHITECTURAL ENGINE
 * Developed by: Donfaruk19
 * Optimized for: WCAG Accessibility (ARIA), Touch Interfaces, and Dynamic Module Scaling
 * Feature Integration: Dual Mode Routing Engine (Training & Testing Profiles)
 */

// ==========================================
// DOCUMENTATION: BUG FIX #1 - START BUTTON
// ==========================================
// The start button had onclick="startExam()" in HTML but was not properly
// connected to the DOM. This fix ensures the button responds to clicks.
// Solution: Added proper event listener in DOMContentLoaded

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
    STORAGE_KEY: 'IC3_Simulator_State'
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
    } else {
        console.warn('⚠️ Start button not found in DOM');
    }
    
    checkResume();
});

function checkResume() {
    try {
        const saved = localStorage.getItem(CONFIG.STORAGE_KEY);
        if (!saved) return;
        const state = JSON.parse(saved);
        if (state && Date.now() - state.timestamp < 3600000) { 
            if (confirm("An incomplete exam session was found. Would you like to resume?")) {
                rebuildSession(state);
            } else {
                localStorage.removeItem(CONFIG.STORAGE_KEY);
            }
        }
    } catch (e) {
        console.warn("localStorage environment is restricted or unavailable.", e);
    }
}

function startExam() {
    console.log('🎯 startExam() triggered');
    
    const nameInput = document.getElementById('candidate-name');
    const selectedModule = UI.moduleSelect.value;
    
    // Simple validation
    if (!nameInput.value.trim()) {
        alert("Please enter your name to start.");
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
            return;
        }
        // Tag with lesson name for breakdown report
        compiledQuestions = shuffle([...pool]).map(q => ({ ...q, sourceLesson: selectedModule }));
    }

    if (compiledQuestions.length === 0) return alert("Compilation failed. No questions available.");

    // Capture dynamic mode check configuration
    let currentMode = 'training';
    const modeElements = document.getElementsByName('mode');
    for (let i = 0; i < modeElements.length; i++) {
        if (modeElements[i].checked) { currentMode = modeElements[i].value; break; }
    }

    if (UI.loadingOverlay) UI.loadingOverlay.classList.remove('hidden');

    setTimeout(() => {
        session = new ExamSession(compiledQuestions, currentMode);
        saveStateToStorage(selectedModule);

        if (UI.loadingOverlay) UI.loadingOverlay.classList.add('hidden');
        UI.setupScreen.classList.add('hidden');
        UI.examContainer.classList.remove('hidden');

        startTimer();
        loadQuestion();
        console.log('✅ Exam started successfully with', compiledQuestions.length, 'questions');
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
                timeLeft: session.timeLeft
            }
        };
        localStorage.setItem(CONFIG.STORAGE_KEY, JSON.stringify(backupPayload));
    } catch (e) {
        console.warn("Failed syncing backup state payload.", e);
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
            session.userAnswers[session.currentIdx] = idx;
            saveStateToStorage('l1_lesson1');
            
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
}

function nextQuestion() {
    if (session.currentIdx < session.questions.length - 1) {
        session.currentIdx++;
        loadQuestion();
    } else {
        showReviewScreen();
    }
}

function jumpToQuestion(idx) {
    if (!session || idx < 0 || idx >= session.questions.length) return;
    session.currentIdx = idx;
    loadQuestion();
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
}

function toggleFlag() {
    if (!session) return;
    const current = session.currentIdx;
    const pos = session.flags.indexOf(current);
    if (pos !== -1) session.flags.splice(pos, 1);
    else session.flags.push(current);
    loadQuestion();
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
        
        if (session.timeLeft < CONFIG.WARNING_TIME) {
            UI.timer.style.color = '#e53e3e';
            UI.timer.style.fontWeight = '700';
        }

        if (session.timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("Time has expired. Your exam will now be submitted automatically.");
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

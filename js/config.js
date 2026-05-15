// ===== CONFIGURATION =====
const CONFIG = {
    PASS_PERCENTAGE: 70,
    FULL_EXAM_DURATION: 3600, // 60 minutes in seconds
    WARNING_TIME: 300, // 5 minutes warning
    QUESTIONS_PER_FULL_EXAM: 75,
    TIMER_INTERVAL: 1000,
    DEBOUNCE_DELAY: 300
};

// ===== EXAM MODES =====
const EXAM_MODES = {
    PRACTICE: 'practice',
    EXAM: 'exam'
};

// ===== QUESTION TYPES =====
const QUESTION_TYPES = {
    MCQ: 'mcq',
    ORDERING: 'ordering',
    MATCHING: 'matching'
};

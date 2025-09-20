// Programming Quiz Application

class QuizApp {
    constructor() {
        this.currentTopic = null;
        this.currentDifficulty = null;
        this.currentQuestionIndex = 0;
        this.questions = [];
        this.score = 0;
        this.answers = [];
        this.timeRemaining = 30;
        this.timer = null;
        this.startTime = null;
        this.totalTime = 0;

        this.initializeData();
        this.initializeEventListeners();
        this.initializeTheme();
    }

    initializeData() {
        this.quizData = {
            python: {
                easy: [
                    {
                        question: "Which of the following is used to define a variable in Python?",
                        options: ["var", "let", "No keyword needed", "define"],
                        correct: 2
                    },
                    {
                        question: "What is the output of: print(type(5.0))?",
                        options: ["<class 'int'>", "<class 'float'>", "<class 'double'>", "<class 'number'>"],
                        correct: 1
                    },
                    {
                        question: "Which symbol is used for comments in Python?",
                        options: ["//", "/**/", "#", "<!---->"],
                        correct: 2
                    },
                    {
                        question: "What does the len() function do?",
                        options: ["Calculates length", "Creates a list", "Deletes elements", "Sorts data"],
                        correct: 0
                    },
                    {
                        question: "Which of these is a correct way to create a list in Python?",
                        options: ["list = {1, 2, 3}", "list = [1, 2, 3]", "list = (1, 2, 3)", "list = <1, 2, 3>"],
                        correct: 1
                    }
                ],
                medium: [
                    {
                        question: "What is the output of: [1, 2, 3][1:2]?",
                        options: ["[1]", "[2]", "[1, 2]", "[2, 3]"],
                        correct: 1
                    },
                    {
                        question: "Which method adds an element to the end of a list?",
                        options: ["add()", "append()", "insert()", "push()"],
                        correct: 1
                    },
                    {
                        question: "What does the 'in' operator do in Python?",
                        options: ["Assigns values", "Checks membership", "Performs addition", "Creates loops"],
                        correct: 1
                    },
                    {
                        question: "How do you create a function in Python?",
                        options: ["function myFunc():", "def myFunc():", "create myFunc():", "func myFunc():"],
                        correct: 1
                    },
                    {
                        question: "What is the correct syntax for a dictionary in Python?",
                        options: ["{key: value}", "[key: value]", "(key: value)", "<key: value>"],
                        correct: 0
                    }
                ],
                hard: [
                    {
                        question: "What is a decorator in Python?",
                        options: ["A design pattern", "A function that modifies another function", "A data type", "A loop structure"],
                        correct: 1
                    },
                    {
                        question: "Which of these creates a generator in Python?",
                        options: ["return", "yield", "generate", "create"],
                        correct: 1
                    },
                    {
                        question: "What is the purpose of __init__ method?",
                        options: ["Delete objects", "Initialize objects", "Import modules", "Handle errors"],
                        correct: 1
                    },
                    {
                        question: "Which exception is raised when dividing by zero?",
                        options: ["ValueError", "TypeError", "ZeroDivisionError", "ArithmeticError"],
                        correct: 2
                    },
                    {
                        question: "What does the 'with' statement do in Python?",
                        options: ["Creates loops", "Handles exceptions", "Manages context", "Defines classes"],
                        correct: 2
                    }
                ]
            },
            java: {
                easy: [
                    {
                        question: "Which keyword is used to define a class in Java?",
                        options: ["Class", "class", "define", "object"],
                        correct: 1
                    },
                    {
                        question: "What is the correct syntax to print in Java?",
                        options: ["print()", "System.out.print()", "console.log()", "echo"],
                        correct: 1
                    },
                    {
                        question: "Which of these is a primitive data type in Java?",
                        options: ["String", "int", "Array", "Object"],
                        correct: 1
                    },
                    {
                        question: "What is the default value of a boolean variable?",
                        options: ["true", "false", "0", "null"],
                        correct: 1
                    },
                    {
                        question: "Which operator is used for assignment in Java?",
                        options: ["==", "=", "===", ":="],
                        correct: 1
                    }
                ],
                medium: [
                    {
                        question: "What is method overloading in Java?",
                        options: ["Same method name, different parameters", "Different method names", "Inheritance", "Encapsulation"],
                        correct: 0
                    },
                    {
                        question: "Which access modifier makes a member accessible only within the same package?",
                        options: ["private", "public", "protected", "default"],
                        correct: 3
                    },
                    {
                        question: "What does the 'static' keyword mean in Java?",
                        options: ["Cannot be changed", "Belongs to class, not instance", "Private access", "Final value"],
                        correct: 1
                    },
                    {
                        question: "Which loop executes at least once?",
                        options: ["for", "while", "do-while", "foreach"],
                        correct: 2
                    },
                    {
                        question: "How do you create an array in Java?",
                        options: ["int[] arr = new int[5]", "int arr = [5]", "array int arr[5]", "int arr(5)"],
                        correct: 0
                    }
                ],
                hard: [
                    {
                        question: "What is polymorphism in Java?",
                        options: ["Multiple inheritance", "Same interface, different implementations", "Data hiding", "Code reusability"],
                        correct: 1
                    },
                    {
                        question: "Which collection class is thread-safe?",
                        options: ["ArrayList", "HashMap", "Vector", "LinkedList"],
                        correct: 2
                    },
                    {
                        question: "What is the difference between == and equals()?",
                        options: ["No difference", "== compares references, equals() compares content", "== compares content, equals() compares references", "Both compare content"],
                        correct: 1
                    },
                    {
                        question: "Which keyword is used to handle exceptions?",
                        options: ["catch", "handle", "exception", "error"],
                        correct: 0
                    },
                    {
                        question: "What is an interface in Java?",
                        options: ["A class with methods", "A contract with method signatures", "A data type", "An abstract class"],
                        correct: 1
                    }
                ]
            },
            cpp: {
                easy: [
                    {
                        question: "Which header file is needed for cout?",
                        options: ["<stdio.h>", "<iostream>", "<conio.h>", "<string.h>"],
                        correct: 1
                    },
                    {
                        question: "What is the correct syntax to include a header file?",
                        options: ["#include <file>", "include <file>", "#import <file>", "using <file>"],
                        correct: 0
                    },
                    {
                        question: "Which operator is used for input in C++?",
                        options: ["<<", ">>", "<>", "><"],
                        correct: 1
                    },
                    {
                        question: "What is the size of int in most systems?",
                        options: ["2 bytes", "4 bytes", "8 bytes", "1 byte"],
                        correct: 1
                    },
                    {
                        question: "Which function is the entry point of a C++ program?",
                        options: ["start()", "main()", "begin()", "init()"],
                        correct: 1
                    }
                ],
                medium: [
                    {
                        question: "What is a pointer in C++?",
                        options: ["A data type", "A variable that stores memory address", "A function", "A loop structure"],
                        correct: 1
                    },
                    {
                        question: "Which operator is used to access class members through a pointer?",
                        options: [".", "->", "::", "*"],
                        correct: 1
                    },
                    {
                        question: "What is function overloading?",
                        options: ["Same function name, different parameters", "Different function names", "Recursive functions", "Virtual functions"],
                        correct: 0
                    },
                    {
                        question: "Which keyword is used to define a constant?",
                        options: ["final", "const", "static", "readonly"],
                        correct: 1
                    },
                    {
                        question: "What is the scope resolution operator?",
                        options: ["::", "->", ".", "::"],
                        correct: 0
                    }
                ],
                hard: [
                    {
                        question: "What is virtual function in C++?",
                        options: ["A function that doesn't exist", "A function that enables dynamic polymorphism", "A static function", "A private function"],
                        correct: 1
                    },
                    {
                        question: "Which container is part of STL?",
                        options: ["array", "vector", "list", "All of the above"],
                        correct: 3
                    },
                    {
                        question: "What is RAII in C++?",
                        options: ["Resource Acquisition Is Initialization", "Random Access Immediate Iteration", "Runtime Application Interface", "Recursive Algorithm Implementation"],
                        correct: 0
                    },
                    {
                        question: "What is the purpose of destructor?",
                        options: ["Create objects", "Clean up resources", "Initialize variables", "Handle exceptions"],
                        correct: 1
                    },
                    {
                        question: "Which keyword is used for template specialization?",
                        options: ["template", "typename", "class", "template<>"],
                        correct: 3
                    }
                ]
            },
            javascript: {
                easy: [
                    {
                        question: "How do you create a variable in JavaScript?",
                        options: ["var x", "variable x", "create x", "dim x"],
                        correct: 0
                    },
                    {
                        question: "Which method is used to write in the console?",
                        options: ["console.write()", "console.log()", "print()", "log()"],
                        correct: 1
                    },
                    {
                        question: "What is the correct way to create an array?",
                        options: ["var arr = []", "var arr = {}", "var arr = ()", "var arr = <>"],
                        correct: 0
                    },
                    {
                        question: "Which operator is used for equality comparison?",
                        options: ["=", "==", "===", "Both == and ==="],
                        correct: 3
                    },
                    {
                        question: "How do you create a function in JavaScript?",
                        options: ["function myFunc()", "def myFunc()", "create myFunc()", "func myFunc()"],
                        correct: 0
                    }
                ],
                medium: [
                    {
                        question: "What is the difference between let and var?",
                        options: ["No difference", "let has block scope, var has function scope", "var has block scope, let has function scope", "let is faster"],
                        correct: 1
                    },
                    {
                        question: "Which method adds elements to the end of an array?",
                        options: ["add()", "append()", "push()", "insert()"],
                        correct: 2
                    },
                    {
                        question: "What is an object in JavaScript?",
                        options: ["A function", "A collection of key-value pairs", "A data type", "A loop structure"],
                        correct: 1
                    },
                    {
                        question: "How do you handle events in JavaScript?",
                        options: ["event listeners", "event handlers", "callbacks", "All of the above"],
                        correct: 3
                    },
                    {
                        question: "What does JSON stand for?",
                        options: ["JavaScript Object Notation", "Java Standard Object Notation", "JavaScript Oriented Network", "Java Serialized Object Network"],
                        correct: 0
                    }
                ],
                hard: [
                    {
                        question: "What is a closure in JavaScript?",
                        options: ["A loop structure", "A function with access to outer scope", "A data type", "An error handling mechanism"],
                        correct: 1
                    },
                    {
                        question: "What is the purpose of async/await?",
                        options: ["Handle synchronous code", "Handle asynchronous code", "Create loops", "Define variables"],
                        correct: 1
                    },
                    {
                        question: "What is prototype in JavaScript?",
                        options: ["A design pattern", "A mechanism for inheritance", "A data type", "A function type"],
                        correct: 1
                    },
                    {
                        question: "Which of these creates a Promise?",
                        options: ["new Promise()", "Promise.create()", "create Promise()", "Promise.new()"],
                        correct: 0
                    },
                    {
                        question: "What is event bubbling?",
                        options: ["Event creation", "Event propagation from child to parent", "Event deletion", "Event modification"],
                        correct: 1
                    }
                ]
            },
            c: {
                easy: [
                    {
                        question: "Which function is used to print in C?",
                        options: ["print()", "printf()", "cout", "echo"],
                        correct: 1
                    },
                    {
                        question: "What is the correct syntax for main function?",
                        options: ["int main()", "void main()", "main()", "Both A and B"],
                        correct: 3
                    },
                    {
                        question: "Which header file is needed for printf()?",
                        options: ["<stdio.h>", "<stdlib.h>", "<string.h>", "<conio.h>"],
                        correct: 0
                    },
                    {
                        question: "What is the size of char in C?",
                        options: ["1 byte", "2 bytes", "4 bytes", "8 bytes"],
                        correct: 0
                    },
                    {
                        question: "Which symbol is used to end statements in C?",
                        options: [".", ",", ";", ":"],
                        correct: 2
                    }
                ],
                medium: [
                    {
                        question: "What is a pointer in C?",
                        options: ["A data type", "A variable that holds memory address", "A function", "An array"],
                        correct: 1
                    },
                    {
                        question: "Which function is used to allocate memory dynamically?",
                        options: ["alloc()", "malloc()", "memory()", "new()"],
                        correct: 1
                    },
                    {
                        question: "What is the return type of main function typically?",
                        options: ["void", "int", "char", "float"],
                        correct: 1
                    },
                    {
                        question: "Which operator is used to access structure members?",
                        options: ["->", ".", "::", "::"],
                        correct: 1
                    },
                    {
                        question: "What is the purpose of #include directive?",
                        options: ["Define functions", "Include header files", "Create variables", "Handle errors"],
                        correct: 1
                    }
                ],
                hard: [
                    {
                        question: "What is the difference between malloc() and calloc()?",
                        options: ["No difference", "malloc initializes to zero, calloc doesn't", "calloc initializes to zero, malloc doesn't", "calloc is faster"],
                        correct: 2
                    },
                    {
                        question: "What is a function pointer in C?",
                        options: ["A pointer to memory", "A pointer that points to a function", "A function that returns pointer", "An array of functions"],
                        correct: 1
                    },
                    {
                        question: "Which storage class has the longest lifetime?",
                        options: ["auto", "register", "static", "extern"],
                        correct: 2
                    },
                    {
                        question: "What is the purpose of volatile keyword?",
                        options: ["Prevent optimization", "Increase speed", "Allocate memory", "Define constants"],
                        correct: 0
                    },
                    {
                        question: "What does preprocessor directive #define do?",
                        options: ["Defines functions", "Creates macros", "Includes files", "Handles errors"],
                        correct: 1
                    }
                ]
            }
        };
    }

    initializeEventListeners() {
        // Topic selection
        document.querySelectorAll('.topic-card').forEach(card => {
            card.addEventListener('click', () => {
                this.selectTopic(card.dataset.topic);
            });
        });

        // Difficulty selection
        document.querySelectorAll('.difficulty-card').forEach(card => {
            card.addEventListener('click', () => {
                this.selectDifficulty(card.dataset.difficulty);
            });
        });

        // Navigation buttons
        document.getElementById('backToDifficulty')?.addEventListener('click', () => {
            this.showScreen('homeScreen');
        });

        document.getElementById('backToQuiz')?.addEventListener('click', () => {
            this.showScreen('difficultyScreen');
        });

        document.getElementById('nextBtn')?.addEventListener('click', () => {
            this.nextQuestion();
        });

        // Results buttons
        document.getElementById('tryAgainBtn')?.addEventListener('click', () => {
            this.restartQuiz();
        });

        document.getElementById('newTopicBtn')?.addEventListener('click', () => {
            this.showScreen('homeScreen');
        });

        // Theme toggle
        document.getElementById('themeToggle')?.addEventListener('click', () => {
            this.toggleTheme();
        });

        // Review screen navigation buttons
        document.getElementById('backToResultsBtn')?.addEventListener('click', () => {
            this.showScreen('resultsScreen');
        });
        document.getElementById('reviewTryAgainBtn')?.addEventListener('click', () => {
            this.restartQuiz();
        });
        document.getElementById('reviewNewTopicBtn')?.addEventListener('click', () => {
            this.showScreen('homeScreen');
        });
    }

    initializeTheme() {
        const savedTheme = localStorage.getItem('quiz-theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
        this.updateThemeIcon(savedTheme);
    }

    toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('quiz-theme', newTheme);
        this.updateThemeIcon(newTheme);
    }

    updateThemeIcon(theme) {
        const icon = document.querySelector('.theme-icon');
        if (icon) {
            icon.textContent = theme === 'light' ? '🌙' : '☀️';
        }
    }

    selectTopic(topic) {
        this.currentTopic = topic;
        const topicNames = {
            python: 'Python Programming',
            java: 'Java Programming',
            cpp: 'C++ Programming',
            javascript: 'JavaScript Programming',
            c: 'C Programming'
        };

        document.getElementById('selectedTopic').textContent = topicNames[topic];
        this.showScreen('difficultyScreen');
    }

    selectDifficulty(difficulty) {
        this.currentDifficulty = difficulty;
        this.startQuiz();
    }

    startQuiz() {
        this.questions = this.quizData[this.currentTopic][this.currentDifficulty];
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.answers = [];
        this.startTime = Date.now();

        this.showScreen('quizScreen');
        this.loadQuestion();
        this.startTimer();
    }

    loadQuestion() {
        const question = this.questions[this.currentQuestionIndex];

        document.getElementById('questionText').textContent = question.question;
        document.getElementById('currentQuestion').textContent = this.currentQuestionIndex + 1;
        document.getElementById('totalQuestions').textContent = this.questions.length;

        const optionsSection = document.getElementById('optionsSection');
        optionsSection.innerHTML = '';

        question.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.className = 'option-btn';
            button.textContent = option;
            button.addEventListener('click', () => this.selectAnswer(index));
            optionsSection.appendChild(button);
        });

        this.updateProgress();
        this.resetTimer();
    }

    selectAnswer(selectedIndex) {
        document.querySelectorAll('.option-btn').forEach((btn, index) => {
            btn.classList.remove('selected');
            if (index === selectedIndex) {
                btn.classList.add('selected');
            }
        });

        this.answers[this.currentQuestionIndex] = selectedIndex;
        document.getElementById('nextBtn').disabled = false;
    }

    nextQuestion() {
        const selectedAnswer = this.answers[this.currentQuestionIndex];
        const correctAnswer = this.questions[this.currentQuestionIndex].correct;

        if (selectedAnswer === correctAnswer) {
            this.score++;
        }

        this.showAnswerFeedback();

        setTimeout(() => {
            this.currentQuestionIndex++;

            if (this.currentQuestionIndex < this.questions.length) {
                this.loadQuestion();
            } else {
                this.endQuiz();
            }
        }, 1500);
    }

    showAnswerFeedback() {
        const selectedAnswer = this.answers[this.currentQuestionIndex];
        const correctAnswer = this.questions[this.currentQuestionIndex].correct;

        document.querySelectorAll('.option-btn').forEach((btn, index) => {
            if (index === correctAnswer) {
                btn.classList.add('correct');
            } else if (index === selectedAnswer && selectedAnswer !== correctAnswer) {
                btn.classList.add('incorrect');
            }
        });

        clearInterval(this.timer);
    }

    updateProgress() {
        const progress = ((this.currentQuestionIndex + 1) / this.questions.length) * 100;
        document.getElementById('progressFill').style.width = progress + '%';
    }

    startTimer() {
        this.timeRemaining = 30;
        this.updateTimerDisplay();

        this.timer = setInterval(() => {
            this.timeRemaining--;
            this.updateTimerDisplay();

            if (this.timeRemaining <= 0) {
                this.timeUp();
            }
        }, 1000);
    }

    resetTimer() {
        clearInterval(this.timer);
        document.getElementById('nextBtn').disabled = true;
        this.startTimer();
    }

    updateTimerDisplay() {
        const timerText = document.getElementById('timerText');
        const timerProgress = document.getElementById('timerProgress');

        if (timerText) {
            timerText.textContent = this.timeRemaining;
            timerText.style.color = this.timeRemaining <= 10 ? 'var(--color-error)' : 'var(--color-text)';
        }

        if (timerProgress) {
            const circumference = 2 * Math.PI * 25;
            const progress = (this.timeRemaining / 30) * circumference;
            timerProgress.style.strokeDasharray = circumference;
            timerProgress.style.strokeDashoffset = circumference - progress;
            timerProgress.style.stroke = this.timeRemaining <= 10 ? 'var(--color-error)' : 'var(--color-primary)';
        }
    }

    timeUp() {
        clearInterval(this.timer);

        // Auto-select a random answer if no answer was selected
        if (this.answers[this.currentQuestionIndex] === undefined) {
            this.answers[this.currentQuestionIndex] = Math.floor(Math.random() * 4);
        }

        this.nextQuestion();
    }

    endQuiz() {
        this.totalTime = Math.floor((Date.now() - this.startTime) / 1000);
        this.showResults();

        confetti({
            particleCount: 200,
            spread: 70,
            origin: { y: 0.6 }
        });
    }

    showResults() {
        const percentage = Math.round((this.score / this.questions.length) * 100);
        const incorrect = this.questions.length - this.score;

        document.getElementById('scorePercentage').textContent = percentage + '%';
        document.getElementById('correctAnswers').textContent = this.score;
        document.getElementById('incorrectAnswers').textContent = incorrect;
        document.getElementById('totalTime').textContent = this.formatTime(this.totalTime);

        // Update result title based on score
        const resultTitle = document.getElementById('resultTitle');
        const resultSubtitle = document.getElementById('resultSubtitle');

        if (percentage >= 80) {
            resultTitle.textContent = 'Excellent! 🎉';
            resultSubtitle.textContent = `Outstanding! You scored ${this.score} out of ${this.questions.length} questions correctly`;
        } else if (percentage >= 60) {
            resultTitle.textContent = 'Good Job! 👏';
            resultSubtitle.textContent = `Well done! You scored ${this.score} out of ${this.questions.length} questions correctly`;
        } else {
            resultTitle.textContent = 'Keep Learning! 📚';
            resultSubtitle.textContent = `You scored ${this.score} out of ${this.questions.length} questions correctly. Keep practicing!`;
        }

        // Inject Review button if not already present
        const actionsDiv = document.getElementById('resultsScreen').querySelector('.results-actions');
        if (!actionsDiv.querySelector('#reviewBtn')) {
            actionsDiv.innerHTML += `<button class="btn-primary" id="reviewBtn">Review Answers</button>`;
            document.getElementById('reviewBtn').addEventListener('click', () => {
                this.showReview();
            });
        }

        this.showScreen('resultsScreen');
    }

    showReview() {
        // Prepare review summary: questions, user's choice, correct one
        const reviewContainer = document.getElementById('reviewSummary');
        reviewContainer.innerHTML = '';

        this.questions.forEach((q, idx) => {
            // Create main block
            const questionDiv = document.createElement('div');
            questionDiv.className = 'review-question';

            // Question text
            const qt = document.createElement('div');
            qt.className = 'question-text';
            qt.textContent = `Q${idx + 1}: ${q.question}`;
            questionDiv.appendChild(qt);

            // Options showing which was picked and which is correct
            const optsDiv = document.createElement('div');
            optsDiv.className = 'review-options';

            q.options.forEach((opt, i) => {
                const optDiv = document.createElement('div');
                optDiv.className = 'review-option';

                // Highlight correct and user's choice
                if (i === q.correct && i === this.answers[idx]) {
                    optDiv.classList.add('user-correct');
                    optDiv.textContent = `✓ ${opt} (Your Answer & Correct)`;
                } else if (i === this.answers[idx] && i !== q.correct) {
                    optDiv.classList.add('user-wrong');
                    optDiv.textContent = `✗ ${opt} (Your Answer)`;
                } else if (i === q.correct) {
                    optDiv.classList.add('correct');
                    optDiv.textContent = `✓ ${opt} (Correct Answer)`;
                } else {
                    optDiv.textContent = opt;
                }

                optsDiv.appendChild(optDiv);
            });

            questionDiv.appendChild(optsDiv);
            reviewContainer.appendChild(questionDiv);
        });

        // Show review screen
        this.showScreen('reviewScreen');
    }

    formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    }

    restartQuiz() {
        this.startQuiz();
    }

    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        document.getElementById(screenId).classList.add('active');
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new QuizApp();
});
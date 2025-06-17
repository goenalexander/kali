document.addEventListener('DOMContentLoaded', () => {
    // =================================================
    // 1. MENGAMBIL ELEMEN DARI HTML
    // =================================================
    const startScreen = document.getElementById('start-screen');
    const quizScreen = document.getElementById('quiz-screen');
    const resultScreen = document.getElementById('result-screen');
    
    const selectionButtonsContainer = document.getElementById('selection-buttons');
    
    const progressBar = document.getElementById('progress-bar');
    const questionText = document.getElementById('question-text');
    const answerInput = document.getElementById('answer-input');
    const submitButton = document.getElementById('submit-button');
    const feedbackText = document.getElementById('feedback-text');
    
    const questionNumberDisplay = document.getElementById('question-number');
    const timerDisplay = document.getElementById('timer-display');

    const resultTitle = document.getElementById('result-title');
    const scoreText = document.getElementById('score-text');
    const timeTakenText = document.getElementById('time-taken-text');
    const motivationText = document.getElementById('motivation-text');
    const detailedResultsContainer = document.getElementById('detailed-results');
    
    const retryButton = document.getElementById('retry-button');
    const practiceAgainButton = document.getElementById('practice-again-button');
    // const menuButton = document.getElementById('menu-button'); // Dihapus dari sini

    // =================================================
    // 2. INISIALISASI AUDIO
    // =================================================
    const correctSound = new Audio('sounds/correct.mp3');
    const incorrectSound = new Audio('sounds/incorrect.mp3');
    
    const menuMusic = new Audio('sounds/background_menu.mp3');    // Musik untuk layar awal
    const quizMusic = new Audio('sounds/background_quiz.mp3');    // Musik untuk kuis
    const summaryMusic = new Audio('sounds/background_summary.mp3'); // Musik untuk layar hasil
    
    menuMusic.loop = true;
    quizMusic.loop = true;
    summaryMusic.loop = true;

    menuMusic.volume = 0.3;
    quizMusic.volume = 0.2; 
    summaryMusic.volume = 0.4; 

    // =================================================
    // 3. VARIABEL STATUS GAME
    // =================================================
    let currentFactor = 0;
    let questions = [];
    let currentQuestionIndex = 0;
    let score = 0;
    let startTime; 
    let timerInterval; 
    let timeElapsed = 0; 

    // =================================================
    // 4. FUNGSI UNTUK MENGELOLA MUSIK
    // =================================================
    function stopAllMusic() {
        menuMusic.pause();
        menuMusic.currentTime = 0;
        quizMusic.pause();
        quizMusic.currentTime = 0;
        summaryMusic.pause();
        summaryMusic.currentTime = 0;
    }

    function playMenuMusic() {
        stopAllMusic();
        menuMusic.play().catch(e => console.error("Gagal memulai musik menu:", e));
    }

    function playQuizMusic() {
        stopAllMusic();
        quizMusic.play().catch(e => console.error("Gagal memulai musik kuis:", e));
    }

    function playSummaryMusic() {
        stopAllMusic();
        summaryMusic.play().catch(e => console.error("Gagal memulai musik summary:", e));
    }

    // =================================================
    // 5. FUNGSI-FUNGSI UTAMA GAME
    // =================================================

    /**
     * Membuat tombol pilihan perkalian 1-10 di halaman awal.
     */
    function createSelectionButtons() {
        selectionButtonsContainer.innerHTML = ''; 
        for (let i = 1; i <= 10; i++) {
            const button = document.createElement('button');
            button.textContent = i;
            button.dataset.factor = i;
            button.addEventListener('click', () => {
                startQuiz(i);
            });
            selectionButtonsContainer.appendChild(button);
        }
    }

    /**
     * Memulai sesi kuis baru.
     * @param {number} factor - Angka perkalian yang dipilih.
     */
    function startQuiz(factor) {
        playQuizMusic();

        currentFactor = factor;
        score = 0;
        currentQuestionIndex = 0;
        timeElapsed = 0; 
        generateQuestions();
        
        startScreen.classList.remove('active');
        resultScreen.classList.remove('active');
        quizScreen.classList.add('active');
        
        startTime = new Date(); 
        startTimerDisplay();

        displayQuestion();
    }

    /**
     * Membuat 10 soal perkalian secara acak berdasarkan faktor yang dipilih.
     */
    function generateQuestions() {
        questions = [];
        let multipliers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        multipliers.sort(() => Math.random() - 0.5); 
        
        for (const num of multipliers) {
            questions.push({
                question: `${currentFactor} x ${num}`,
                answer: currentFactor * num,
                userAnswer: null, 
                isCorrect: false 
            });
        }
    }

    /**
     * Menampilkan soal saat ini ke layar.
     */
    function displayQuestion() {
        if (currentQuestionIndex < questions.length) {
            const currentQuestion = questions[currentQuestionIndex];
            questionText.textContent = `${currentQuestion.question} = ?`;
            answerInput.value = '';
            feedbackText.textContent = '';
            feedbackText.className = 'feedback'; 
            answerInput.disabled = false; 
            submitButton.disabled = false; 
            answerInput.focus();
            updateProgressBar();
            updateQuestionNumber(); 
        } else {
            showResults();
        }
    }

    /**
     * Memeriksa jawaban yang dimasukkan oleh pengguna.
     */
    function checkAnswer() {
        if (answerInput.value.trim() === '') {
            feedbackText.textContent = "Yuk, isi jawabannya dulu! 😊";
            feedbackText.className = 'feedback incorrect'; 
            incorrectSound.play(); 
            answerInput.focus();
            return; 
        }

        const userAnswer = parseInt(answerInput.value);
        const currentQuestion = questions[currentQuestionIndex];

        answerInput.disabled = true;
        submitButton.disabled = true;

        currentQuestion.userAnswer = isNaN(userAnswer) ? "Tidak diisi" : userAnswer;
        
        if (!isNaN(userAnswer) && userAnswer === currentQuestion.answer) {
            score++;
            currentQuestion.isCorrect = true;
            feedbackText.textContent = "Hebat! Benar! 👍";
            feedbackText.className = 'feedback correct';
            correctSound.play();
        } else {
            currentQuestion.isCorrect = false;
            feedbackText.textContent = `Kurang tepat, jawabannya ${currentQuestion.answer}`;
            feedbackText.className = 'feedback incorrect';
            incorrectSound.play();
        }

        setTimeout(() => {
            currentQuestionIndex++;
            displayQuestion();
        }, 1500);
    }
    
    /**
     * Memperbarui tampilan progress bar di atas soal.
     */
    function updateProgressBar() {
        const progress = ((currentQuestionIndex) / questions.length) * 100;
        progressBar.style.width = `${progress}%`;
    }

    /**
     * Memperbarui tampilan nomor soal.
     */
    function updateQuestionNumber() {
        questionNumberDisplay.textContent = `Soal ${currentQuestionIndex + 1}/${questions.length}`;
    }

    /**
     * Mengatur timer real-time dan menampilkannya.
     */
    function startTimerDisplay() {
        clearInterval(timerInterval); 
        timerInterval = setInterval(() => {
            const now = new Date();
            timeElapsed = Math.round((now - startTime) / 1000);
            const minutes = Math.floor(timeElapsed / 60);
            const seconds = timeElapsed % 60;
            timerDisplay.textContent = 
                `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        }, 1000); 
    }

    /**
     * Menampilkan layar hasil akhir setelah semua soal terjawab.
     */
    function showResults() {
        clearInterval(timerInterval); 
        playSummaryMusic(); 

        const timeTakenInSeconds = timeElapsed;
        
        scoreText.textContent = `${score} / ${questions.length}`;
        timeTakenText.textContent = `${timeTakenInSeconds} detik`;

        if (score === 10) {
            resultTitle.textContent = "Luar Biasa!";
            motivationText.textContent = "Kamu adalah Juara Perkalian sejati! 🏆🎉";
        } else if (score >= 7) {
            resultTitle.textContent = "Hebat!";
            motivationText.textContent = "Sedikit lagi jadi sempurna! Terus berlatih ya! ✨";
        } else {
            resultTitle.textContent = "Semangat!";
            motivationText.textContent = "Jangan menyerah, terus berlatih dan kamu pasti bisa! 💪🌈";
        }
        
        detailedResultsContainer.innerHTML = ''; 
        questions.forEach((q, index) => {
            const item = document.createElement('div');
            item.classList.add('result-item');

            if (q.isCorrect) {
                item.classList.add('correct-result');
                item.innerHTML = `<span>Soal ${index + 1}: ${q.question} = ${q.answer}</span>`;
            } else {
                item.classList.add('incorrect-result');
                item.innerHTML = `<span>Soal ${index + 1}: ${q.question} = ${q.answer}</span> <span class="incorrect-answer-detail">(Jawabanmu: ${q.userAnswer})</span>`;
            }
            detailedResultsContainer.appendChild(item);
        });

        quizScreen.classList.remove('active');
        resultScreen.classList.add('active');
    }

    // =================================================
    // 6. EVENT LISTENERS (PENANGANAN AKSI PENGGUNA)
    // =================================================
    submitButton.addEventListener('click', checkAnswer);
    answerInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            checkAnswer();
        }
    });

    retryButton.addEventListener('click', () => {
        // Coba Lagi: Memulai ulang kuis dengan faktor yang sama
        startQuiz(currentFactor); 
    });

    practiceAgainButton.addEventListener('click', () => {
        // Ayo Berlatih Lagi: Mengarahkan ke halaman awal
        clearInterval(timerInterval); 
        resultScreen.classList.remove('active');
        startScreen.classList.add('active');
        createSelectionButtons(); 
        playMenuMusic(); 
    });
    
    // Event listener untuk tombol 'menuButton' dihapus karena elemennya tidak ada lagi di HTML
    // Jika Anda ingin fungsionalitas 'Kembali ke Menu' dari layar kuis atau layar lain di masa mendatang,
    // Anda bisa menambahkannya kembali di elemen yang relevan.

    // =================================================
    // 7. MEMULAI APLIKASI
    // =================================================
    createSelectionButtons();
    playMenuMusic(); // Mulai musik menu saat aplikasi dibuka pertama kali
});
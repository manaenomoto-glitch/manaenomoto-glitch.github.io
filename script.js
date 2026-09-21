const questions = [
    {
        question: "What is the capital city of Japan?",
        answers: ["Osaka", "Tokyo", "Kyoto", "Nagoya"],
        correct: "Tokyo"
    },
    {
        question: "What is the highest mountain in Japan?",
        answers: ["Mount Fuji", "Mount Aso", "Mount Takao", "Mount Haku"],
        correct: "Mount Fuji"
    },
    {
        question: "Which food is famous in Japan?",
        answers: ["Sushi", "Pizza", "Tacos", "Hamburger"],
        correct: "Sushi"
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const questionNumberElement = document.getElementById("question-number");
const answerButtons = document.querySelectorAll(".answer-btn");
const resultMessage = document.getElementById("result-message");
const nextButton = document.getElementById("next-btn");


function showQuestion() {

    const question = questions[currentQuestion];

    questionElement.textContent = question.question;

    questionNumberElement.textContent = currentQuestion + 1;

    answerButtons.forEach((button, index) => {
        button.textContent = question.answers[index];
        button.disabled = false;
    });

    resultMessage.textContent = "";

    nextButton.style.display = "none";
}


answerButtons.forEach(button => {

    button.addEventListener("click", () => {

        const selectedAnswer = button.textContent;
        const correctAnswer = questions[currentQuestion].correct;

        if (selectedAnswer === correctAnswer) {

            resultMessage.textContent = "Correct! 🎉";
            score++;

        } else {

            resultMessage.textContent = "Incorrect 😭";
        }

        answerButtons.forEach(button => {
            button.disabled = true;
        });

        nextButton.style.display = "block";
    });

});


nextButton.addEventListener("click", () => {

    currentQuestion++;

    if (currentQuestion < questions.length) {

        showQuestion();

    } else {

        questionElement.textContent = "Quiz Complete! 🎉";

        questionNumberElement.textContent = "";

        document.querySelector(".answers").style.display = "none";

        resultMessage.textContent =
            `Your score: ${score} / ${questions.length}`;

        nextButton.style.display = "none";
    }

});


showQuestion();
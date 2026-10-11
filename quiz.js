const quizQuestions = [
    {
        question: "Which food is traditionally made with vinegared rice?",
        options: ["Ramen", "Sushi", "Tempura", "Yakitori",],
        answer: "Sushi",
        explanation: "Sushi is made with vinegared rice, often combined with row fish or vegetables",
    },
    {
        question: "What is the name of Japan's famous bullet train?",
        options: ["Romancecar", "Yamanote train", "Narita Express", "Shinkansen",],
        answer: "Shinkansen",
        explanation: "Shinkansen is the Japanese high-speed rail network. Shinkansen is the same meaning as bullet train.",
    },
    {
        question: "What do people commonly do at a Japanese shrine during New Year?",
        options: ["Make their first shrine visit of the year", "eat Soba noodle", "Plant new cherry blossome tree", "Go karaoke",],
        answer: "Make their first shrine visit of the year",
        explanation: "Hatsumode... (略)",
    },
    {
        question: "Which animal is especially famous for living freely in Nara Park?",
        options: ["Deer", "Foxes", "Monkeys", "Crane",],
        answer: "Deer",
        explanation: "Nara Park is famous for its deer...",
    },
    {
         question: "In Japan, it is customary to remove your shoes before entering homes.",
        options: ["True", "False", "Sometimes", "Take off the mud and entering",],
        answer: "True",
        explanation: "Taking off your outdoor shoes...",
    }
];
let questionnumber = 0;

const question = document.getElementById("question");
const optionButtons = document.querySelectorAll(".options");
//Find all elements that have the class "options".
const nextBtn = document.getElementById('next');

question.textContent = quizQuestions[0].question;

function showQuestion() {
    question.textContent = quizQuestions[questionnumber].question

}

optionButtons.forEach(function(buttonValue,index){
   buttonValue.textContent = quizQuestions[0].options[index]
});

optionButtons.forEach(function(buttonValue) {
    buttonValue.addEventListener("click", function(){
        if (buttonValue.textContent === quizQuestions[questionnumber].answer) {
            questionnumber = questionnumber + 1;
            showQuestion();
    } else { 
    }

    })
})

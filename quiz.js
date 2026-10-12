const quizQuestions = [
    {
        question: "What is Japan's national sport??",
        options: ["a", "b", "c", "d",],
        answer: "a",
        explanation: "Sushi is made with vinegared rice, often combined with row fish or vegetables",
    },
    {
        question: "Do ninjas actually exist today?",
        options: ["e", "f", "g", "h",],
        answer: "h",
        explanation: "Shinkansen is the Japanese high-speed rail network. Shinkansen is the same meaning as bullet train.",
    },
    {
        question: "Tokyo hasn't always been Japan's capital. So, where was it located in the past?",
        options: ["i", "j", "k", "l",],
        answer: "j",
        explanation: "Hatsumode... (略)",
    },
    {
        question: "What are the roles and powers of the Emperor of Japan?",
        options: ["m", "n", "o", "p",],
        answer: "p",
        explanation: "Nara Park is famous for its deer...",
    },
    {
         question: "How big was sushi about 200 years ago?",
        options: ["q", "r", "s", "Tt",],
        answer: "T",
        explanation: "Taking off your outdoor shoes...",
    },

    {
        question: "Which of these meats is not eaten raw in Japan?",
        options: ["u", "v", "w", "x",],
        answer: "x",
        explanation: "Shinkansen is the Japanese high-speed rail network. Shinkansen is the same meaning as bullet train.",
    },
    {
        question: "What do people commonly do at a Japanese shrine during New Year?",
        options: ["Make their first shrine visit of the year", "eat Soba noodle", "Plant new cherry blossome tree", "Go karaoke",],
        answer: "Make their first shrine visit of the year",
        explanation: "sssss",
    },
    {
        question: "Which animal is especially famous for living freely in Nara Park?",
        options: ["Deer", "Foxes", "Monkeys", "Crane",],
        answer: "Deer",
        explanation: "Nara Park is famous for its deer...",
    },
    {
        question: "How many prefectures (states) does Japan have?",
        options: ["5", "6", "7", "8",],
        answer: "8",
        explanation: "Nara Park is famous for its deer...",
    },
    {
         question: "What is the design of the Japanese national flag based on?",
        options: ["1", "2", "3", "4",],
        answer: "4",
        explanation: "Taking off your outdoor shoes...",
    }
]; 

const questionElement = document.querySelector("#question");
const optionsBTNs = document.querySelectorAll(".options");

let currentQuestions = 0; //count numbers

function showquestion(){
    questionElement.textContent = quizQuestions[currentQuestions].question;
    
}
//make function of question that move to next question 

function showoptions(){
    optionsBTNs.forEach(function(button, index){
        button.textContent = quizQuestions[currentQuestions].options[index];
    }
    
)};
//make function of answer that move to next question 

const explanationElement = document.querySelector("#explanation");
const nextBTN = document.querySelector("#next");


showquestion()
showoptions()

 optionsBTNs.forEach(function(button, index){
    button.addEventListener("click", function(){ 
    if (button.textContent === quizQuestions[currentQuestions].answer){
        currentQuestions = currentQuestions + 1;
         showquestion();
         showoptions();
    } else {
    
    optionsBTNs.forEach(function(button) {
        button.style.display = "none";
    });

    explanationElement.textContent = quizQuestions[currentQuestions].explanation;
    explanationElement.style.display = "block"; 

    nextBTN.style.display = "block";
      }
    });
});

nextBTN.addEventListener("click", function() {
    currentQuestions = currentQuestions + 1;

    optionsBTNs.forEach(function(btn) {
        btn.style.display = "block";
    });

    explanationElement.style.display = "none";
    nextBTN.style.display = "none";

    showquestion();
    showoptions();
});
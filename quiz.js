const quizQuestions = [
    {
        question: "What is Japan's national sport??",
        options: ["Sumou", "Karate", "baceball", "judo",],
        answer: "Sumou",
        explanation: "１",
    },
    {
        question: "Do ninjas actually exist as a job today?",
        options: ["Yes", "No", "It still exists in some regions", "I don't know",],
        answer: "No",
        explanation: "２",
    },
    {
        question: "Tokyo hasn't always been Japan's capital. So, where was it located in the past?",
        options: ["Kyoto", "Osaka", "Edo(The old name for Tokyo)", "Toyota",],
        answer: "Kyoto",
        explanation: "３",
    },
    {
        question: "What are the roles and powers of the Emperor of Japan?",
        options: ["Enact a law", "At the top level of politics, making decisions such as the national budget.", "Overseas travel and parties.", "Imperial Court rituals, official acts, and acts of state",],
        answer: "Imperial Court rituals, official acts, and acts of state",
        explanation: "４",
    },
    {
         question: "How big was sushi about 200 years ago?",
        options: ["2 times bigger than now", "same size as now", "more smaller than now", "Sushi didn't exist yet.",],
        answer: "2 times bigger than now",
        explanation: "５",
    },

    {
        question: "Which of these meats is not eaten raw in Japan?",
        options: ["horse", "chicken", "pufferfish", "pork",],
        answer: "pork",
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
        options: ["10", "36", "47", "82",],
        answer: "47",
        explanation: "ww",
    },
    {
         question: "What is the design of the Japanese national flag based on?",
        options: ["The rising sun", "The blood and purity of warriors who fought for their country", "Pickled plum and white rice", "Shooting target",],
        answer: "The rising sun",
        explanation: "Taking off your outdoor shoes...",
    }
]; 


const questionElement = document.querySelector("#question");
const optionsBTNs = document.querySelectorAll(".options");

let currentQuestions = 0; //count numbers　of questions
let currrentScore = 0; //count numbers　of how many questions does user correct

function showquestion(){
     if (currentQuestions >= quizQuestions.length) {
         showresults();
         return;}
    questionElement.textContent = quizQuestions[currentQuestions].question;
    
}
//make function of question that move to next question 

function showoptions(){
    optionsBTNs.forEach(function(button, index){
        if (currentQuestions >= quizQuestions.length) {
         showresults();
         return;}
        button.textContent = quizQuestions[currentQuestions].options[index];
    }
    
)};
//make function of answer that move to next question 

const explanationElement = document.querySelector("#explanation");
const nextBTN = document.querySelector("#next");

//get element from explanation[index]
//if nextBTN pushd move to next question

showquestion()
showoptions()

 optionsBTNs.forEach(function(button, index){
    button.addEventListener("click", function(){ 
    if (button.textContent === quizQuestions[currentQuestions].answer){
        currentQuestions = currentQuestions + 1;
        currrentScore = currrentScore +1;
       
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
//if user push button same value as answer in quizQuestions.answer add 1 to questionnumber and correct score number
//but if not, hide buttons and show explanations and next button to move to next answer

nextBTN.addEventListener("click", function() {
    if (currentQuestions >= quizQuestions.length) {
         showresults();
         return;}
    currentQuestions = currentQuestions + 1;

    optionsBTNs.forEach(function(btn) {
        btn.style.display = "block";
    });

    explanationElement.style.display = "none";
    nextBTN.style.display = "none";

    showquestion();
    showoptions();
});

//if user use this button, hide explanations and next button and back to quiz 

function showresults(){
    optionsBTNs.forEach(function(btn){
        btn.style.display = "none";
    });

   explanationElement.style.display = "none"; 
   nextBTN.style.display = "none";      
   questionElement.style.display = "none"      

    
    document.querySelector(".result-screen").style.display = "block";
    document.querySelector("#score-box").style.display = "block";
    document.querySelector("#score-comment").style.display = "block";
};


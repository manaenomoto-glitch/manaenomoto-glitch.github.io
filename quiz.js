const quizQuestions = [
    {
        question: "What is Japan's national sport??",
        options: ["Sumou", "Karate", "Baseball", "Judo",],
        answer: "Sumou",
        explanation: "Sumo is recognized as Japan's national sport with a history dating back over 1,500 years, deeply connected to Shinto rituals.",
    },
    {
        question: "Do ninjas actually exist as a job today?",
        options: ["Yes", "No", "It still exists in some regions", "I don't know",],
        answer: "No",
        explanation: "While there are people who perform as ninjas for tourism or practice the martial arts, ninjas no longer exist as actual stealth agents or covert military jobs.",
    },
    {
        question: "Tokyo hasn't always been Japan's capital. So, where was it located in the past?",
        options: ["Kyoto", "Osaka", "Edo(The old name for Tokyo)", "Toyota",],
        answer: "Kyoto",
        explanation: "Kyoto was the official capital of Japan for over 1,000 years (from 794 to 1869) before the Emperor moved to Tokyo (formerly Edo).",
    },
    {
        question: "What are the roles and powers of the Emperor of Japan?",
        options: ["Enact a law", "At the top level of politics, making decisions such as the national budget.", "Overseas travel and parties.", "Imperial Court rituals, official acts, and acts of state",],
        answer: "Imperial Court rituals, official acts, and acts of state",
        explanation: "Under the Constitution of Japan, the Emperor is the symbol of the State and has no political or governmental power, performing only state acts and traditional rituals.",
    },
    {
         question: "How big was sushi about 200 years ago?",
        options: ["2 times bigger than now", "same size as now", "more smaller than now", "Sushi didn't exist yet.",],
        answer: "2 times bigger than now",
        explanation: "During the Edo period, Nigiri-sushi was sold at food stalls as a quick snack and was about the size of an onigiri (rice ball) or a tennis ball—roughly twice the size of modern sushi.",
    },

    {
        question: "Which of these meats is not eaten raw in Japan?",
        options: ["horse", "chicken", "pufferfish", "pork",],
        answer: "pork",
        explanation: "Eating raw pork is strictly banned by Japanese law due to the high risk of parasitic infections and hepatitis. Horse (basashi), chicken (torisashi), and pufferfish (fugu) are regularly served raw under strict safety guidelines.",
    },
    {
        question: "What do people commonly do at a Japanese shrine during New Year?",
        options: ["Make their first shrine visit of the year", "eat Soba noodle", "Plant new cherry blossome tree", "Go karaoke",],
        answer: "Make their first shrine visit of the year",
        explanation: "This traditional event is called 'Hatsumode.' Millions of people visit shrines and temples during the first few days of January to pray for health and good fortune.",
    },
    {
        question: "Which animal is especially famous for living freely in Nara Park?",
        options: ["Deer", "Foxes", "Monkeys", "Crane",],
        answer: "Deer",
        explanation: "Nara Park is home to over 1,000 free-roaming, wild sika deer. They are considered sacred messengers of the gods in the local Shinto tradition and love eating 'shika-senbei' (deer crackers).",
    },
    {
        question: "How many prefectures (states) does Japan have?",
        options: ["10", "36", "47", "82",],
        answer: "47",
        explanation: "Japan is divided into 47 prefectures, which consist of 1 'to' (Tokyo), 1 'do' (Hokkaido), 2 'fu' (Osaka and Kyoto), and 43 'ken' (prefectures).",
    },
    {
         question: "What is the design of the Japanese national flag based on?",
        options: ["The rising sun", "The blood and purity of warriors who fought for their country", "Pickled plum and white rice", "Shooting target",],
        answer: "The rising sun",
        explanation: "The flag is officially called 'Nisshoki' (sun-mark flag) but is commonly known as 'Hinomaru' (circle of the sun), representing the rising sun as Japan lies to the east of the Asian continent.",
    }
]; 

const correctaudio = document.getElementById("correct-sounds");
const wrongaudio = document.getElementById("sounds-wrong");


const questionElement = document.querySelector("#question");
const optionsBTNs = document.querySelectorAll(".options");

let currentQuestions = 0; //count numbers　of questions
let currentScore = 0; //count numbers　of how many questions does user correct



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



//add sound!

const explanationElement = document.querySelector("#explanation");
const nextBTN = document.querySelector("#next");

//get element from explanation[index]
//if nextBTN pushd move to next question

showquestion()
showoptions()

 optionsBTNs.forEach(function(button, index){
    button.addEventListener("click", function(){ 
    if (button.textContent === quizQuestions[currentQuestions].answer){
        correctaudio.currentTime = 0;
        correctaudio.play().catch(error => console.log(error));

        currentQuestions = currentQuestions + 1;
        currentScore = currentScore +1;
       
         showquestion();
         showoptions();
    } else {
     wrongaudio.currentTime = 0;
     wrongaudio.play().catch(error => console.log(error));

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
   document.querySelector("#users-score").textContent = currentScore + " / " + quizQuestions.length;
    
    document.querySelector(".result-screen").style.display = "block";
    document.querySelector("#score-box").style.display = "block";
    document.querySelector("#score-comment").style.display = "block";
};


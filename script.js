var startTheGame = document.querySelector(".button");
var questionText = document.querySelector(".question");
var chooseTheAnswer = document.querySelector(".choice")


var currentQuestion = 0;
var score = 0; 

var questions = [
    {
        question: "What is HTML?",
        answer: [
            {option: "Hypertext Markup Lanaguage", answer: true},
            {option: "Cascading Style Sheets", answer: false}
        ]
    },
    {
        question: "What should we start our HTML with?",
        answer: [
            {option: "<!DOCTYPE html>", answer: true},
            {option: "<html>", answer: false}
        ]
    },
    {
        question: "Which tag are represent the header in biggest font-size?",
        answer: [
            {option: "h1", answer: true},
            {option: "h6", answer: false}
        ]
    },
    {
        question: "Which is the correct way to declare a variable?",
        answer: [
            {option: "console.log(var);", answer: true},
            {option: "console.log(var)", answer: false}
        ]
    }
]

startTheGame.addEventListener("click", function(){
    startTheGame.setAttribute("style", "display:none");
    var theQuestion = document.querySelector(".choose");
    theQuestion.setAttribute("style", "display: unset");
    // startTheQuiz();
});

function startTheQuiz(){
    questionText.innerHTML = questions[currentQuestion].question;
    
    for (i = 0; i < questionText.length; i++) {
        var thisQuestion = questionText[i];
    console.log(thisQuestion);
    }
}


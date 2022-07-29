var startTheGame = document.querySelector(".button");
var questionText = document.querySelector(".question");
var chooseTheAnswer = document.querySelector(".choice")
var showQuestion = document.querySelector('.choose hidden');
var optionOne = document.getElementById('choice1');
var optionTwo = document.getElementById('choice2');
var optionThree = document.getElementById('choice3');
var optionFour = document.getElementById('choice4');


var score = 0; 

var questions = [
    {
        question: "What is HTML?",
        choice : ['Hypertext Markup Language', 'Cascading Style Sheet', 'a tag', 'a webpage'],
        answer: 'Hypertext Markup Language',
    },
    {
        question: "What should we start our HTML with?",
        choice: ["<!DOCTYPE html>", "<html>", "<DOCTYPE>", "<header>"],
        answer: "<!DOCTYPE html>",
    },
    {
        question: "Which tag are represent the header in biggest font-size?",
        choice: ["h1", "h2", "h5", "h6"],
        answer: "h1",
    },
    {
        question: "Which is the correct way to declare a variable?",
        choice: ['console.log(var);', 'console.log(var)', 'var()', 'console.log'],
        answer: 'console.log(var);'
    }
]


startTheGame.addEventListener("click", function(){
    startTheGame.setAttribute("style", "display:none");
    var theQuestion = document.querySelector(".choose");
    theQuestion.setAttribute("style", "display: unset");
    startTheQuiz();
});

function startTheQuiz(){
    questionText.innerHTML = questions[0].question;
    optionOne.innerHTML = questions[0].choice[0];
    optionTwo.innerHTML = questions[0].choice[1];
    optionThree.innerHTML = questions[0].choice[2];
    optionFour.innerHTML = questions[0].choice[3];

    optionOne.addEventListener('click', function(){
        nextQuestion();
    })
}

function nextQuestion(){
    questionText.innerHTML = questions[1].question;
    optionOne.innerHTML = questions[1].choice[0];
    optionTwo.innerHTML = questions[1].choice[1];
    optionThree.innerHTML = questions[1].choice[2];
    optionFour.innerHTML = questions[1].choice[3];

}
    
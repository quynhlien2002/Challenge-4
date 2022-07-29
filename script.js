var startTheGame = document.querySelector(".button");
var questionText = document.querySelector(".question");
var chooseTheAnswer = document.querySelector(".choice")
var showQuestion = document.querySelector('.choose hidden');
var optionOne = document.getElementById('choice1');
var optionTwo = document.getElementById('choice2');
var optionThree = document.getElementById('choice3');
var optionFour = document.getElementById('choice4');
var win = 0;
var lose = 0;
var theScore = document.querySelector(".score");
var theQuestion = document.querySelector(".choose");
var winScore = 4;
var totalScore = document.getElementById('what-score');

var score = 0; 

var questions = [
    {
        question: "What is HTML?",
        choice : ['Hypertext Markup Language', 'Cascading Style Sheet', 'a tag', 'a webpage'],
        answer: 'Hypertext Markup Language',
    },
    {
        question: "What should we start our HTML with?",
        choice: ["!DOCTYPE html", "html", "DOCTYPE", "header"],
        answer: "!DOCTYPE html",
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
    });
    optionTwo.addEventListener('click', function(){
        nextQuestion();
    });
    optionThree.addEventListener('click', function(){
        nextQuestion();
    });
    optionFour.addEventListener('click', function(){
        nextQuestion();
    });

    if (optionOne){
        score = score++;
    }
    
}

function nextQuestion(){
    questionText.innerHTML = questions[1].question;
    optionOne.innerHTML = questions[1].choice[1];
    optionTwo.innerHTML = questions[1].choice[0];
    optionThree.innerHTML = questions[1].choice[3];
    optionFour.innerHTML = questions[1].choice[2];

    optionOne.addEventListener('click', function(){
        thirdQuestion();
    });
    optionTwo.addEventListener('click', function(){
        thirdQuestion();
    });
    optionThree.addEventListener('click', function(){
        thirdQuestion();
    });
    optionFour.addEventListener('click', function(){
        thirdQuestion();
    });
    
    if (optionTwo){
        score = score++;
    }
}

function thirdQuestion(){
    questionText.innerHTML = questions[2].question;
    optionOne.innerHTML = questions[2].choice[3];
    optionTwo.innerHTML = questions[2].choice[2];
    optionThree.innerHTML = questions[2].choice[1];
    optionFour.innerHTML = questions[2].choice[0];

    optionOne.addEventListener('click', function(){
        fourthQuestion();
    });
    optionTwo.addEventListener('click', function(){
        fourthQuestion();
    });
    optionThree.addEventListener('click', function(){
        fourthQuestion();
    });
    optionFour.addEventListener('click', function(){
        fourthQuestion();
    });

    if (optionFour){
        score = score++;
    }
}

function fourthQuestion(){
    questionText.innerHTML = questions[3].question;
    optionOne.innerHTML = questions[3].choice[1];
    optionTwo.innerHTML = questions[3].choice[2];
    optionThree.innerHTML = questions[3].choice[0];
    optionFour.innerHTML = questions[3].choice[3];

    optionOne.addEventListener('click', function(){
        result();
    });
    optionTwo.addEventListener('click', function(){
        result();
    });
    optionThree.addEventListener('click', function(){
        result();
    });
    optionFour.addEventListener('click', function(){
        result();
    });

    if (optionThree){
        score = score++;
    }
}

function result(){
    theQuestion.setAttribute("style", "display:none");
    theScore.setAttribute("style", "display: unset");
    if (score === winScore){
        totalScore.setText("Score: " + score);
        return "You win";
    } else{
        return "Sorry you lose!"
    }
    
}
    
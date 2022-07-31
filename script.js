var startTheGame = document.querySelector(".button");
var questionText = document.querySelector(".question");
var chooseTheAnswer = document.querySelector(".choice")
var showQuestion = document.querySelector('.choose hidden');
var optionOne = document.getElementById('choice1');
var optionTwo = document.getElementById('choice2');
var optionThree = document.getElementById('choice3');
var optionFour = document.getElementById('choice4');
var win = document.getElementById("youwin");
var lose = document.getElementById("youlose");
var theScore = document.querySelector(".score");
var theQuestion = document.querySelector(".choose");
var winScore = 4;
var totalScore = document.getElementById('what-score');
var timerCount;
var timer;
var countingTime = document.getElementById("timer");
var resultButton = document.getElementById('savebutton');
var nameInput = document.getElementById('name');
var score = 0; 
var dataPush = [];


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

var scoreboard = [{
    name:" ",
    score: 0,
}]


startTheGame.addEventListener("click", function(){
    startTheGame.setAttribute("style", "display:none");
    theQuestion.setAttribute("style", "display: unset");
    timerCount = 20;
    startTimer();
    startTheQuiz();
});

function startTimer(){
    timer = setInterval(function(){
        timerCount--;
        countingTime.textContent = "Timer: " + timerCount;
        if (timerCount >= 0) {
            if(score === winScore){
                clearInterval(timer);
                result();
            }
        }
        if (timerCount === 0){
            clearInterval(timer);
            result();
        }
    }, 1000);
}

function startTheQuiz(){
    questionText.innerHTML = questions[0].question;
    optionOne.innerHTML = questions[0].choice[0];
    optionTwo.innerHTML = questions[0].choice[1];
    optionThree.innerHTML = questions[0].choice[2];
    optionFour.innerHTML = questions[0].choice[3];

    optionOne.addEventListener('click', function(){
        score++;
        nextQuestion();
    });
    optionTwo.addEventListener('click', function(){
        timerCount--;
        nextQuestion();
    });
    optionThree.addEventListener('click', function(){
        timerCount--;
        nextQuestion();
    });
    optionFour.addEventListener('click', function(){
        timerCount--;
        nextQuestion();
    });
}

function nextQuestion(){
    questionText.innerHTML = questions[1].question;
    optionOne.innerHTML = questions[1].choice[1];
    optionTwo.innerHTML = questions[1].choice[0];
    optionThree.innerHTML = questions[1].choice[3];
    optionFour.innerHTML = questions[1].choice[2];

    optionOne.addEventListener('click', function(){
        timerCount--;
        thirdQuestion();
    });
    optionTwo.addEventListener('click', function(){
        score++;
        thirdQuestion();
    });
    optionThree.addEventListener('click', function(){
        timerCount--;
        thirdQuestion();
    });
    optionFour.addEventListener('click', function(){
        timerCount--;
        thirdQuestion();
    });
}

function thirdQuestion(){
    questionText.innerHTML = questions[2].question;
    optionOne.innerHTML = questions[2].choice[3];
    optionTwo.innerHTML = questions[2].choice[2];
    optionThree.innerHTML = questions[2].choice[1];
    optionFour.innerHTML = questions[2].choice[0];

    optionOne.addEventListener('click', function(){
        timerCount--;
        fourthQuestion();
    });
    optionTwo.addEventListener('click', function(){
        timerCount--;
        fourthQuestion();
    });
    optionThree.addEventListener('click', function(){
        timerCount--;
        fourthQuestion();
    });
    optionFour.addEventListener('click', function(){
        score++;
        fourthQuestion();
    });
}

function fourthQuestion(){
    questionText.innerHTML = questions[3].question;
    optionOne.innerHTML = questions[3].choice[1];
    optionTwo.innerHTML = questions[3].choice[2];
    optionThree.innerHTML = questions[3].choice[0];
    optionFour.innerHTML = questions[3].choice[3];

    optionOne.addEventListener('click', function(){
        timerCount--;
        result();
    });
    optionTwo.addEventListener('click', function(){
        timerCount--;
        result();
    });
    optionThree.addEventListener('click', function(){
        score++;
        result();
    });
    optionFour.addEventListener('click', function(){
        timerCount--;
        result();
    });
}

function result(){
    theQuestion.setAttribute("style", "display:none");
    theScore.setAttribute("style", "display: unset");
    resultButton.setAttribute("style", "display:unset");
    nameInput.setAttribute("style", "display:unset");
    if (score === winScore){
        totalScore.innerHTML = "Score: " + score;
        // localStorage.setItem("score", score);
        return win.innerText = "You Win!!!";
    } else{
        totalScore.innerHTML = "Score: " + score;
        // localStorage.setItem("score", score);
        return lose.innerText = "Sorry you lose :(("
    }
}

function saveResult(){
    resultButton.addEventListener('click',function(){
        var storeData = {
            name: nameInput, 
            scoreGame: score,
        };
        dataPush.push(storeData);
        localStorage.setItem("storeData", JSON.stringtify(dataPush));
} )
}

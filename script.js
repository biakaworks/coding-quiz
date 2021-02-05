var welcomeMessage = document.querySelector("#welcomeMessge");

var startQuiz = document.querySelector("#startQuiz");
var timer = document.querySelector(".timer");
var headerMain = document.querySelector("#headerMain");
var timeLeft = 100;

startQuiz.addEventListener("click", function setTimer() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = "Timer Left for Quiz" + secondsLeft;
        clearWelcome();

    if(secondsLeft === 0) {
        clearTimeout(timerInterval);
        sendGameover();    
    }
    else {
        renderJSQuiz
    }
    }, 1000)
})

function welcome() {
    welcomeMessage.textContent = "Test your Javascript Skill! Click Beging Quiz!";}
    renderWelcome()

function headerTitle() {
    headerTitle.textContent =" Code Quiz";}
    headerTitle()

var questions = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    choices: ["js", "javascript", "scripting", "script"],
    answer: "script",
  },
  {
    question: "Where is the correct place to insert a JavaScript?",
    choices: [
      "Both the <head> section and the <body> section are correct",
      "The <head> section",
      "The <body> section",
      "The <butt> section",
    ],
    answer: "Both the <head> section and the <body> section are correct",
  },
  {
    question:
      "What is the correct syntax for referring to an external script called 'xxx.js'?",
    choices: [
      "<script src='xxx.js'>  ",
      "<script name='xxx.js'>",
      "<script href='xxx.js'>",
      "None of the Above",
    ],
    answer: "<script src='xxx.js'>  ",
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    choices: ["js", "javascript", "scripting", "script"],
    answer: "script",
  },
  {
    question: "Which event occurs when the user clicks on an HTML element?",
    choices: ["onclick ", "onmouseover", "onchange", "onmouseclick"],
    answer: "onclick",
  },
];

var quizScore = 0;
var indexQuestion = 0;
var currentQuestion = questions[indexQuestion];

function renderJSQuiz() {
    var displayQuestion = document.querySelector("#questions-display")
    var questionButton = document.querySelector()
    var questionTitle = document.querySelector("#question-head")

    displayQuestion.innerHTML = " ";
    questionButton.innerHTML =" ";

    for (var i=0; questions.length; i++) {
        var jsQuestions = questions[indexQuestion].q;
        var answerContent = question[indexQuestion].a;
        // var currentQuestion = questions[indexQuestion]; "Whats going on with this?"

        questionTitle.textContent = jsQuestions;
    }

    answerContent.forEach(function (addChoices) {
        var options = document.addEvent("button");
        options.textContent = addChoices;
        displayQuestion.appendChild(createButton);
        createButton.appendChild(options);
        options.addEventListener("click", function(){

            var correctAnswer = questions[indexQuestion].correctAnswer;
            var el = event.target;
            if (el.matches("button")) {

            var div = document.createElement("div");
            div.setAttribute("id", "div");

            if (el.textContent === correctAnswer) {
                quizScore = quizScore + 1;
                nextQuestion();
            } else {
                score = score - 1;
                nextQuestion();
            }
            }
        })
    })

}
var display = document.querySelector("#questions=div");
function nextQuestion(){
    currentQuestion++
    if ((questions.length - 1)==(currentQuestion)){
        quizComplete();
        display.textContent = "Nice Job! Your Quiz Score is " + score + "of" + questions.length;
        display.appendChild(div);
        scoreInput();
    }
    else {
        currentQuestion = currentQuestion +1;
    }
}
function quizFinished() {
    timer = " ";
    questions.remove();
}

function scoreInput() {
    var call = document.createElement("h1");
    var createInputForm = document.createElement("form");
    call.textContent = "Save your High Score!"
    createInputForm.setAttribute("type", "text");
}

// function headerTitle() {
//     headerTitle.textContent =" Code Quiz";
//   //clear the area blank canvas
//   //dynamically append the data to the page
//   console.log(game.question[index]);
//   //dynamically append btns
//   var btn1 = document.createElement("button");
//   console.log(game.choices[index][0]);
//   console.log(game.choices[index][1]);
//   console.log(game.choices[index][2]);
//   console.log(game.answer[index]);

//   //when user onclick a btn
//   //check the user's data against the current answer
//   //if correct
//   //go to the next card ()index++;
//   //check to see if there are more cards if there are more card renderCard()
//   //then call render card
// }

function clearIntro() {
    welcomeMessage.textContent = " ";
    startButton.remove();
}

// $("#start-quiz").click(function () {
//   renderCard();
//   //ask a series of questions
//   //timer begins
//   //wrong answ bring time
//   //any ans move to the next card
//   //if at end go to end game
//   //ask to add score
//   //ask for username and push score into ls
// });

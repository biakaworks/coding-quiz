// var timerLeft = 100;
// var time;
// var questionNumber = 0;
var quizScore = 0;
var indexContent = 0;
var currentQuestion = questions[indexQuestion];

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

function renderJSQuiz() {
    var displayQuestion = document.querySelector("#questions-display")
    var questionButton = document.querySelector()
    var questionTitle = document.querySelector("#question-head")

    display.innerHTML = " ";
    questionButton.innerHTML =" ";

    for (var i=0; questions.length; i++) {
        var jsQuestions = questions[indexContent]

    }

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

function quizTimer() {
  time = setInterval(function () {
    timerLeft--;
  });
}

$("#start-quiz").click(function () {
  renderCard();
  //ask a series of questions
  //timer begins
  //wrong answ bring time
  //any ans move to the next card
  //if at end go to end game
  //ask to add score
  //ask for username and push score into ls
});

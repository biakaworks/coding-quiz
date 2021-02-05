
//1. do the cards play the game
//2. add timer (stop count, wrongans, start)
var timerLeft = 100;
var time;
var questionNumber = 0;
//3. ls (score = time is left) & username
//score all the ques, ans, choices
var quizScore = 0;
var indexQuestion=0;
var currentQuestion = questions[indexQuestion];

var questions =[{
    question: "Inside which HTML element do we put the JavaScript?",
    choices: ["js", "javascript", "scripting", "script"],
    answer: "script"
},
{
    question: "Where is the correct place to insert a JavaScript?",
    choices: ["Both the <head> section and the <body> section are correct", "The <head> section", "The <body> section", "The <butt> section"],
    answer: "Both the <head> section and the <body> section are correct"
},
{
    question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
    choices: ["<script src='xxx.js'>  ", "<script name='xxx.js'>", "<script href='xxx.js'>", "None of the Above"],
    answer: "<script src='xxx.js'>  "
},
{
    question: "Inside which HTML element do we put the JavaScript?",
    choices: ["js", "javascript", "scripting", "script"],
    answer: "script"
},
];

function renderCard(){
    //clear the area blank canvas
    //dynamically append the data to the page
    console.log(game.question[index])
//dynamically append btns
var btn1=document.createElement("button");
console.log(game.choices[index][0])
console.log(game.choices[index][1])
console.log(game.choices[index][2])
console.log(game.answer[index])

//when user onclick a btn
//check the user's data against the current answer
//if correct
//go to the next card ()index++;
//check to see if there are more cards if there are more card renderCard()
//then call render card

}

function quizTimer() {
    time = setInterval(function(){
        timerLeft--;
        
    })
}

$( "#start-quiz").click(function() {
    renderCard();
        //ask a series of questions
        //timer begins
        //wrong answ bring time
        //any ans move to the next card
        //if at end go to end game
        //ask to add score
        //ask for username and push score into ls

});
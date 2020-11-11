
//1. do the cards play the game
//2. add timer (stop count, wrongans, start)
//3. ls (score = time is left) & username
//score all the ques, ans, choices
var index=0;
var game={
    question:["The Sky is..", "Question2","question3"],
    choices:[
        ["green", "blue","purple"],
        ["1","2","3"],
        ['a','b','c']
    ],
    answer:["blue","2","c"]
}
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
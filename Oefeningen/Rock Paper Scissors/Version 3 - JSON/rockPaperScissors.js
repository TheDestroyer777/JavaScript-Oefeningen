//main code
const prompt = require("prompt-sync")();
let move = "";

do{
    move = prompt("Rock, Paper or Scissors: ");
}
while(move != "Rock" && move != "Paper" && move != "Scissors")

let computerMove = pickComputerMove();

console.log(`You: ${move} - Computer: ${computerMove}`);
console.log(decideWinner(move, computerMove));

//functions
function pickComputerMove(){
    let rand = Math.random();

    if(rand <= 1/3){
        return "Rock";
    } else if(rand <= 2/3){
        return "Paper";
    } else{
        return "Scissors";
    }

}

function decideWinner(move, computerMove){
    
    if(move == computerMove){
        return "Draw";
    } else if(move == "Rock" && computerMove == "Paper"){
        return "You lose";
    } else if(move == "Paper" && computerMove == "Scissors"){
        return "You lose";
    } else if(move == "Scissors" && computerMove == "Rock"){
        return "You lose";
    } else{
        return "You win";
    }

}


//localstorage

let resultaat = decideWinner(move, computerMove);

if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
}

let score = {
    win: 0,
    draw: 0,
    loss: 0
};

let SavedScore = localStorage.getItem("score")
if (SavedScore) {
    score = JSON.parse(SavedScore);
}

if(resultaat == "Draw"){
    score.draw += 1;
} else if(resultaat == "You lose"){
    score.loss += 1;
} else if(resultaat == "You win"){
    score.win += 1;
}

console.log(`Wins: ${score.win} - Losses: ${score.loss} - Draws: ${score.draw}`);

let scoreString = JSON.stringify(score);
localStorage.setItem("score", scoreString);
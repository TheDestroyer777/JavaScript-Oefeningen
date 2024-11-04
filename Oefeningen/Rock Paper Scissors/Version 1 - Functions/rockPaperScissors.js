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
// voorbeeld: https://supersimple.dev/projects/dom/
let score = {
    win: 0,
    draw: 0,
    loss: 0
};

let SavedScore = localStorage.getItem("score")
if (SavedScore) {
    score = JSON.parse(SavedScore);
}

let computerMove = "";

let Score = document.querySelector("#Score");
Score.innerHTML = `Wins: ${score.win}, Losses: ${score.loss}, Ties: ${score.draw}`;

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

function play(yourMove) {
    let computerMove = pickComputerMove();
    movesChosen(yourMove, computerMove);
    let resultaat = decideWinner(yourMove, computerMove);
    updateResult(resultaat);
    updateScore(resultaat);
    keepScore();
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

function updateScore(resultaat) {
    if(resultaat == "Draw"){
        score.draw += 1;
    } else if(resultaat == "You lose"){
        score.loss += 1;
    } else if(resultaat == "You win"){
        score.win += 1;
    }

    let Score = document.querySelector("#Score");
    Score.innerHTML = `Wins: ${score.win}, Losses: ${score.loss}, Ties: ${score.draw}`;
}

function updateResult(resultaat) {
    let result = document.querySelector("#Result");
    result.innerHTML = resultaat;
}

function movesChosen(yourMove, computerMove){
    let moves = document.querySelector("#Moves");
    moves.innerHTML = `Your move: ${yourMove} - Computer move: ${computerMove}`;
}

function reset(){
    score.win = 0;
    score.loss = 0;
    score.draw = 0;

    let Score = document.querySelector("#Score");
    Score.innerHTML = `Wins: ${score.win}, Losses: ${score.loss}, Ties: ${score.draw}`;
}

function keepScore(){
    let scoreString = JSON.stringify(score);
    localStorage.setItem("score", scoreString);
}
const prompt = require("prompt-sync")();

let temperatuur = Number(prompt("Hoe warm is het? "));

if(temperatuur > 20){
    console.log("Het is warm");
} else{
    console.log("Het is koud");
}
const prompt = require("prompt-sync")();
let number = Number(prompt("Geef een getal in"));

for(let i = 1; i <= number; i++){
    console.log(i);
}
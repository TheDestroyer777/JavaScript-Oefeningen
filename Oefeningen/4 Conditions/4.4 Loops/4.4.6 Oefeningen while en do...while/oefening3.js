const prompt = require("prompt-sync")();

let getal = Number(prompt("Geef een getal in. "));

while(getal >= 0){
    console.log(getal);
    getal--;
}
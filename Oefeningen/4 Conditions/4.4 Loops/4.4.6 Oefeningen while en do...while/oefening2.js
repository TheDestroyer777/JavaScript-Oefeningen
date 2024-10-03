const prompt = require("prompt-sync")();
let getal = 0;

do{
    getal = Number(prompt("Geef een getal tussen 1 en 10 in. "));
} while(getal <= 0 || getal > 10);

console.log(getal);
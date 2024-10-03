const prompt = require("prompt-sync")();

let getal = Number(prompt("Geef een getal in. "));
let som = 0;

while(getal >= 0){
    som += getal
    getal = Number(prompt("Geef een getal in. "));
}

console.log(som);
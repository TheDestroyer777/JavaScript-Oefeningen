const prompt = require("prompt-sync")();

let tekst = String(prompt("Geef een tekst in. "));

if(tekst.length > 10){
    console.log("Dit is een lange tekst.");
} else{
    console.log("Dit is een kort tekst.");
}
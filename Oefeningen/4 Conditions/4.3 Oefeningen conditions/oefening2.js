const prompt = require("prompt-sync")();

let getal = Number(prompt("Geef een getal. "));

if(getal > 0){
    console.log("Positief");
} else if(getal < 0){
    console.log("Negatief");
} else{
    console.log("Nul");
}
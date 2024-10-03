const prompt = require("prompt-sync")();

let tekst = String(prompt("Geef een tekst in. "));

if(tekst.substring(tekst.length - 1) == "."){
    console.log(tekst.toUpperCase());
} else{
    console.log(tekst.toUpperCase() + ".");
}
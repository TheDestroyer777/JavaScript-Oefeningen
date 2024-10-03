const prompt = require("prompt-sync")();

let tekst = prompt("Geef een tekst in: ");
let omgekeerde = '';

for(let i = tekst.length;  i >= 0; i--){
    omgekeerde += tekst[i];
}

console.log(omgekeerde);
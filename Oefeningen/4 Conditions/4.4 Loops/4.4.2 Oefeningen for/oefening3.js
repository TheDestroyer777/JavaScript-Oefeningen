const prompt = require("prompt-sync")();

let start = Number(prompt("Geef een startwaarde in. "));
let eind = Number(prompt("Geef een eindwaarde in. "));

for(let i = start; i <= eind; i++){
    if(i % 2 == 0){
        console.log(i);
    }
}
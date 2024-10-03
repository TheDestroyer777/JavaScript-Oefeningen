const prompt = require("prompt-sync")();

let cijfer = Number(prompt("Geef een cijfer tussen 1 en 3 in. "));

switch (cijfer){
    case 1:
        console.log("Eén");
        break;
    case 2:
        console.log("Twee");
        break;
    case 3:
        console.log("Drie");
        break;
    default:
        console.log("Ongeldig cijfer.");
}
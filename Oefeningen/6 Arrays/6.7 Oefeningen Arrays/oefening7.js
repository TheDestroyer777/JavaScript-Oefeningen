const prompt = require("prompt-sync")();

let numbers = [1, 2, 5, 10, 15, 18, 20, 30];
let getal = prompt("Geef een getal in: ");
let resultaat = splitsArray(numbers, getal);
let deel1 = resultaat.slice(0, 1);
let deel2 = resultaat.slice(1);
console.log(deel1);
console.log(deel2);

function splitsArray(arr, getal) {
    let eersteDeel = arr.slice(1, getal);
    let tweedeDeel = arr.slice(getal, arr.length);

    return [eersteDeel, tweedeDeel];
}
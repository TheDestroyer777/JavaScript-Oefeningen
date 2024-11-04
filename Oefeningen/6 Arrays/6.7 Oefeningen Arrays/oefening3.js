const prompt = require("prompt-sync")();

let numbers = [1, 2, 5, 10, 15, 18, 20, 30];
let getal = prompt("Geef een getal in: ");
let nieuweNumbers = filterGroterDan(numbers, getal);
console.log(nieuweNumbers);

function filterGroterDan(arr, getal){
    let nieuweArr = [];

        arr.forEach(element => {
            if(element > getal){
                nieuweArr.push(element);
            }
        });
        return nieuweArr;
}
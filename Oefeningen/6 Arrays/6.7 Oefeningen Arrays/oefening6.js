let numbers = [1, 2, 3];
let nieuweNumbers = printAlleMogelijlheden(numbers);
console.log(nieuweNumbers);

function printAlleMogelijlheden(arr) {
 
    arr.forEach(element => {
        for(let i = 1; i <= 3; i++){
            console.log("" + element + i);
        }
    })
}
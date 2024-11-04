let numbers = [1, 2, 5, 10, 15, 18, 20, 30];
const [first, second, ...others] = numbers;
let resultaat = telDeElementen(others);
console.log(resultaat);

function telDeElementen(arr){
    let resultaat = 0;
    arr.forEach(element => {
        resultaat += element;
    });
    return resultaat;
}
let numbers = [1, 2, 5, 10, 15, 18, 20, 30];
let double = numbers.map(verdubbel);
console.log(double);

function verdubbel(arr){
    return arr * 2;
}
let numbers = [1, 2, 5, 10, 15, 18, 20, 30];
let omgewisseld = wisselOm(numbers);
console.log(omgewisseld);

function wisselOm(arr) {
    let [first, second] = arr;
    return  second + " " + first;
}
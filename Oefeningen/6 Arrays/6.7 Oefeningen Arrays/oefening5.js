let numbers = [1, 2, 5, 10, 15, 18, 20, 30]
let nieuweNumbers = eersteEnLaatste(numbers);
console.log(nieuweNumbers);

function eersteEnLaatste(arr) {
    let nieuweArray = [];

    arr.forEach(element => {
        if(arr.indexOf(element) == 0 || arr.indexOf(element) == arr.length - 1){
            nieuweArray.push(element);
        }
    });
    return nieuweArray;
}
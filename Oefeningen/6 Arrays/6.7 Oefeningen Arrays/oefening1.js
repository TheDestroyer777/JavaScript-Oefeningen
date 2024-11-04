let numbers = [1, 2, 3, 2, 1, 4, 8, 3, 5];
let uniqueNumbers = dubbeleVerwijder(numbers);
console.log(uniqueNumbers);


function dubbeleVerwijder(arr) {
    let uniqueArr = [];

    arr.forEach(element => {
        if(uniqueArr.indexOf(element) == -1) {
            uniqueArr.push(element);
        }
    });
    return uniqueArr;
}
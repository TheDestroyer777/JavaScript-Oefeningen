let woorden = ["omkeren", "van", "een", "array"]; 
let reversed = keerOm(woorden);
console.log(reversed);

function keerOm(arr){
    let reversedArr = [];

    arr.forEach(element => {
        reversedArr.unshift(element);
    });
    return reversedArr;
}
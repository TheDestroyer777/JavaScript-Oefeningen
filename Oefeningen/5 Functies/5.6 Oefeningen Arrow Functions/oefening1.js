const isVeelvoud = (a, b) => {
    if(a % b === 0){
        return true;
    } else {
        return false;
    }
};

console.log(isVeelvoud(10, 2));
console.log(isVeelvoud(2, 10));
console.log(isVeelvoud(10, 20));
console.log(isVeelvoud(5, 25));
console.log(isVeelvoud(50, 1));
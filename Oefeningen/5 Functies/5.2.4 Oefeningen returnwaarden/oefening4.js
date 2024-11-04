const prompt = require("prompt-sync")();

function isPrime(n){
    if(n <= 1){
        return false;
    }
    for(let i = 2; i < n; i++){     
        if(n % i === 0){
            return false;
        }
    }

    return true;
}

function grootstePriem(limiet){
    for(let i = limiet - 1; i > 1; i--){
        if(isPrime(i)){
            return i;
        }
    }
    return null; // als er gen priemgetal gevonden wordt onder de limiet
}

let limiet = Number(prompt("Voer een limiet in"));
console.log(limiet);
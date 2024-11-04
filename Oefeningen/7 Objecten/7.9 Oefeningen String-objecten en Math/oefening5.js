function genereerWillekeurigGetal(min, max) {
    let resultaat = Math.random();
    do{
        resultaat = Math.random();
        resultaat = resultaat * 100000;
        resultaat = Math.floor(resultaat);
    } while(resultaat < min || resultaat > max)
    
    return resultaat;
}

let resultaat = genereerWillekeurigGetal(0, 10);
console.log(resultaat);
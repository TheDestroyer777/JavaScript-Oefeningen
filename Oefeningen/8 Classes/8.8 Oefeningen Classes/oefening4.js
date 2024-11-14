class Calculate{
    static sum(getal1, getal2){
        return getal1 + getal2;
    }
    static difference(getal1, getal2){
        if(getal1 >= getal2){
            return getal1 - getal2;
        } else{
            return getal2 - getal1;
        }
    }
}

let som = Calculate.sum(10, 15);
console.log(som);
let verschil = Calculate.difference(10, 15);
console.log(verschil);
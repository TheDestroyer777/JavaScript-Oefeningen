const prompt = require("prompt-sync")();

function berekenSom(start, eind){
    if(start > eind){
        let som = eind;
        for(eind = eind; eind <= start; eind++){
        som += eind;
        }
        return som;
    }
    else{
    let som = start;
    for(start = start; start <= eind; start++){
    som += start;
    }
    return som;
    }   
    
}

let start = Number(prompt("geef een startwaarde in: "));
let eind = Number(prompt("geef een eindwaarde in: "));

let resultaat = berekenSom(start, eind);
console.log(resultaat);
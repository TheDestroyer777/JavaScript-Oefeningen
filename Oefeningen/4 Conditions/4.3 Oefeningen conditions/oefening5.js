const prompt = require("prompt-sync")();

let inkomen = Number(prompt("Wat is je inkomen? "));
let belasting;
let netto;

if(inkomen < 10000){
    belasting = inkomen * 0;
} else if(inkomen > 10000 && inkomen < 20000){
    belasting = inkomen * 0.1;
} else if(inkomen > 20000 && inkomen < 50000){
    belasting = inkomen * 0.2;
} else if(inkomen > 50000){
    belasting = inkomen * 0.3;
}

netto = inkomen + belasting;

console.log(netto);
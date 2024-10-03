const prompt = require("prompt-sync")();

let aantal = Number(prompt("Hoeveel lijnen wil je hebben? "));
let driehoek = "";

/* a)

for(i = 0; i < aantal; i++){
    driehoek += "#";
    console.log(driehoek);
}*/


/* b)

let spaties = "";

for (i = aantal; i > 0; i--){
    spaties += " ";
}

for(i = 0; i < aantal; i++){
    spaties = spaties.substring(0, spaties.length - 1)
    driehoek += "#";
    console.log(spaties + driehoek);
}*/


/* c)

let spaties = "";

for (i = aantal; i > 0; i--){
    spaties += " ";
}

for(i = 0; i < aantal; i++){
    spaties = spaties.substring(0, spaties.length - 1)
    driehoek += "#";
    console.log(spaties + driehoek + spaties);
    driehoek += "#";
}*/


/* b)

let regel = "";

for(let i = 1; i <= aantal; i++){
    regel = "";
    for(let j = 1; j <= aantal - i; j++){
        regel += " ";
    }
    for(let k = 1; k <= i; k++){
        regel += "#";
    }
    console.log(regel);
}*/


/* c)

let regel = "";

for(let i = 1; i <= aantal; i++){
    regel = "";
    for(let j = 1; j <= aantal - i; j++){
        regel += " ";
    }
    for(let k = 1; k <= i; k++){
        regel += "#";
    }
    console.log(regel + driehoek);
    driehoek += "#";
}*/



let regel = "";
let teller = 0;

for(let i = 1; i <= aantal; i++){
    regel = "";
    for(let j = 1; j <= aantal - i; j++){
        regel += " ";
    }
    for(let k = 1; k <= i; k++){
        for(let l = 1; l < 5; l++){
            while(teller < 5){
                
            }
        }
    }
    console.log(regel);
    regel += "#";
}
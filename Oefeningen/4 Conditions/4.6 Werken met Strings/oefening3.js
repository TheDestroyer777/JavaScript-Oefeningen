const prompt = require("prompt-sync")();

let tekst = String(prompt("Geef een tekst in. "));


//uitbreiding:

if(tekst.includes("Is")){
    newtekst = tekst.replace("Is", "Was");
    if(tekst.includes("is")){
        newtekst = newtekst.replace("is", "was");
    }
} else if(tekst.includes("Was")){
    newtekst = tekst.replace("Was", "Is");
    if(tekst.includes("was")){
        newtekst = newtekst.replace("was", "is");
    }
}

console.log(newtekst);

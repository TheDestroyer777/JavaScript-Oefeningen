const prompt = require("prompt-sync")();

let tekst = String(prompt("Geef een tekst in. "));
let scheldwoord = String(prompt("Geef een scheldwoord in. "));

/*if(tekst.includes(scheldwoord)){
    console.log("Dit is ongepast en niet professioneel. Schaam je!");
} else{
    console.log("Dit is gepast.");
}*/

//uitbreiding:

let lengte = scheldwoord.length;
let ster = "";
for(i = 0; i < lengte; i++){
    ster += "*";
}

while(tekst.includes(scheldwoord)){
    tekst = tekst.replace(scheldwoord, ster);
}

console.log(tekst);
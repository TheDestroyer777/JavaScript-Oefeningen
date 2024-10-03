const prompt = require("prompt-sync")();

let jaar = Number(prompt("Geef een jaartal in. "));
let maand = Number(prompt("Geef een maand in. "));

if((jaar % 4 && !jaar % 100) || (jaar % 4 || jaar % 400)){
    if(maand == 2){
        console.log("Februari in een schrikeljaar.");
    }
} else if(maand == 2){
    console.log("Februari in een normaal jaar.");
}
else{
    console.log("Geen februari.");
}
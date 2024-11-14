//console.log(document.body);

//document.title = "Changed Title";
//document.body.innerHTML = "<button> Good job! </button>";

/*
let eersteParargraaf = document.querySelector('p'); // 'p' = "p"
eersteParargraaf.innerHTML = "Dit is de nieuwe eerste paragraaf";

let tweedeParagraaf = document.querySelector("#tweede-paragraaf");
tweedeParagraaf.innerHTML = "Dit is de nieuwe tweede paragraaf";
*/

/*
let alleParagrafen = document.querySelectorAll("p");
alleParagrafen.forEach(function(p){
    p.style.background = "lightgray";
})
*/

//let jsButton = document.getElementById("js-button"); // = document.querySelector("#js-button");

/*
const nieuweParagraaf = document.createElement("p"); //paragraaf aanmaken in JS
nieuweParagraaf.innerHTML = "Deze paragraaf is gemaakt in JS"; //paragraaf invullen in JS

//document.body.appendChild(nieuweParagraaf); //paragraaf op het einde van de body in je html plaatsen

let section = document.querySelector("section"); // er is maar 1 section dus is er geen id nodig
section.appendChild(nieuweParagraaf); // paragraaf in de section plaatsen
*/

/*
let verwijder = document.querySelector("#js-verwijder");
//verwijder.remove();
console.log(verwijder.parentNode.parentNode);
*/

/*
let vervang = document.querySelector("#js-vervang");
let nieuweParagraaf = document.createElement("p");
nieuweParagraaf.innerHTML = "Vervangen!";

vervang.replaceWith(nieuweParagraaf);
*/

let aanpassen = document.querySelector("#js-style");
aanpassen.style.margin = "10px";
aanpassen.style.color = "blue"; // "#000000" mag ook
aanpassen.style.fontSize = "30pt";

let link = document.querySelector("a");
link.setAttribute("href", "https://en.Wikipedia.org"); // eerste waarde = naam van het atribuut, tweede waarde = nieuwe waarde
link.setAttribute("target", "_blank");

if (link.getAttribute("target") == "_blank"){
    console.log("test");
}
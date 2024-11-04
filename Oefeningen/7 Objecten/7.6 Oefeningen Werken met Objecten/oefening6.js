let boek = {
    titel: "A Game of Thrones",
    auteur: "George R.R. Martin",
    jaar: 1996,
    genre: "Fantasy"
}

let {titel, auteur, ...overig} = boek;
let details = overig;

function toonBoekInfo(titel, auteur, details) {
    console.log(`${titel} is geschreven door ${auteur}`);
    console.log(details);
    /*
    console.log(`Details: ${details}`);      werkt niet
    console.log("Details:" + details);       werkt niet
    console.log("Details:", details);        werkt wel
    */
}

toonBoekInfo(titel, auteur, details);
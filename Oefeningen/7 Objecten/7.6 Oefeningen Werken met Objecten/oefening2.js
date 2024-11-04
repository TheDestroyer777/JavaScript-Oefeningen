let persoon = {
    naam: "Frank",
    leeftijd: 30,
    adres: {
        straat: "Kerkstraat",
        stad: "Dilsen-Stokkem",
        postcode: 3650
    }
}

function toonPersoonDetails() {
    console.log(persoon.naam);
    console.log(persoon.leeftijd);
    console.log(persoon.adres.stad);
}

toonPersoonDetails();
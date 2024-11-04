let persoon = {
    naam: "Frank",
    leeftijd: 30,
    adres: {
        straat: "Kerkstraat",
        stad: "Dilsen-Stokkem",
        postcode: 3650
    },
    introduceer: function() {
        console.log(`Mijn naam is ${this.naam} en ik woon in ${this.adres.stad}`);
    }
}

persoon.introduceer();
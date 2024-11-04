let student = {
    naam: "Yahto",
    leeftijd: 17,
    studie: "ICW",
    beschrijf: function() {
        console.log(`Mijn naam is ${this.naam}, ik ben ${this.leeftijd} jaar en ik doe ${this.studie}`);
    }
}

function verwelkomStudent(naam, studie) {
    console.log(`Hallo, ${naam} je gaat veel afzien in ${studie}`);
}

let {naam, studie} = student

verwelkomStudent(naam, studie);
function maakGroet() {
    let naam = "";

    return{
        wijzigNaam: function(n) {
            naam = n;
        },
        groet: function() {
            return `Hallo ${naam} .`;
        }
    }
}

let groet = maakGroet();
console.log(groet.wijzigNaam("Bob"));
console.log(groet.maakGroet());
console.log(groet.wijzigNaam("Pieter"));
console.log(groet.maakGroet());
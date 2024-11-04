let tekst = "In een klein dorp, omringd door groene heuvels, stond een oude boom. Deze boom was niet zomaar een boom; hij was het hart van het dorp. Elke lente kwamen de inwoners samen voor het jaarlijkse bloesemfestival, waar de takken vol met roze bloemen de lucht vulden met een zoete geur. Kinderen speelden onder de schaduwrijke bladeren, terwijl ouderen verhalen vertelden over vervlogen tijden. De boom was een symbool van verbinding, groei en de cycli van het leven, een herinnering dat, ongeacht de uitdagingen, de schoonheid van de natuur ons altijd samenbrengt.";
console.log(splitsInZinnen(tekst));

function splitsInZinnen(tekst) {
    let zinnen = tekst.split(". ");
    return zinnen;
}
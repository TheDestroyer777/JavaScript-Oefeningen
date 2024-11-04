let tekst = "In een drukke stad, waar het leven nooit stil lijkt te staan, bevond zich een verborgen café. Het had een gevel van verweerd baksteen en een uitnodigende deur, waar een zacht belletje rinkelde bij binnenkomst. Binnen was het warm en gezellig, met boekenplanken vol verhalen en een aroma van versgezette koffie. Mensen kwamen hier niet alleen voor de drank, maar ook voor de rust. Ze konden er hun gedachten verzetten, een goed boek lezen of met een vriend bijpraten. Het café was een toevluchtsoord, een plek waar de hectiek van de buitenwereld even leek te vervagen, en waar verbinding en inspiratie samenkwamen.";
console.log(verwijderWoord(tekst, "een"));


/*
function verwijderWoord(tekst, woord){
    let positie = tekst.indexOf(woord);
    let woorden = tekst.slice(positie, woord.length);
    woorden = woorden.split(" ");
    let result = woorden.join(" ");
    return result;
}
*/

function verwijderWoord(tekst, woord){
    let woorden = tekst.split(" " + woord + " ");
    let result = woorden.join(" ");
    for(let i = 0; i < tekst.length; i++){
        result = result.replace("   ", " ");
    }
    return result;
}
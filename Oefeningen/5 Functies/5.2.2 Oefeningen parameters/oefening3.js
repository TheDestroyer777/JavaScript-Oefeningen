function berekenKorting(prijs, kortingsgroep, aantal){
    if(kortingsgroep == "a"){
        let kortingPercentage = 10;
        let totaal = (prijs * aantal) - (((prijs * aantal) * kortingPercentage) / 100);
        console.log(`De totaalprijs na ${kortingPercentage} % korting is ${totaal} euro`);
    }
    else if(kortingsgroep == "b"){
        let kortingPercentage = 20;
        let totaal = (prijs * aantal) - (((prijs * aantal) * kortingPercentage) / 100);
        console.log(`De totaalprijs na ${kortingPercentage} % korting is ${totaal} euro`);
    }
    else{
        console.log("Je bent dom!");
    }
}

berekenKorting(1000, "a", 10);
berekenKorting(500, "c", 10);
berekenKorting(2000, "b", 5);
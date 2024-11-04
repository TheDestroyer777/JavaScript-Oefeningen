function maakTeller() {
    let count = 0;


    return function() {
        count++;
        console.log(count);
    };
}

let teller1 = maakTeller();
teller1(); //1
teller1(); //2

/*function maakTeller(n) {
    let count = n;


    return function() {
        count++;
        console.log(count);
    };
}

let teller1 = maakTeller(100);
teller1();
teller1();

let teller2 = maakTeller(200);
teller2();
teller2();*/
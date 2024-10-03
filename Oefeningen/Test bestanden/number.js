let number = 13;
let decimalNumber = 3.14;
let avagadronNumber = 6.0221e23;
let teGrootGetal = 1e1000; //Infinity

if (teGrootGetal === Infinity) {
    console.log("Infinity");
}

console.log( 1 / teGrootGetal ); // 0
console.log( 0 / 0 ); // NaN (Not a Number)

console.log(`Het nummer is ${number}`);
const prompt = require("prompt-sync")();

// Niet van buiten kennen!
// Maakt een localStorage aan indien dit nog niet gebeurd is.
if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
}
   
// bankaccount aanmaken
let bankAccount = {
    balance: 0
};
   
// controleren of er al een bankaccount in localstorage zit
let savedBankAccount = localStorage.getItem("bankAccount");
if (savedBankAccount) {
    bankAccount = JSON.parse(savedBankAccount); //JSON.parse = string --> object
}

// Gebruikersinput vragen
console.log(`Your current balance is €${bankAccount.balance}`);
const interaction = prompt("Do you want to withdraw (w) or deposit (d)? ");
if (interaction == "w") {
    let amount = Number(prompt("What amount would you like to withdraw? "));
    if (amount >= bankAccount.balance){
        console.log("Insufficient balance")
    } else {
        bankAccount.balance -= amount;
    }
} else if (interaction == "d") {
    let amount = Number(prompt("What amount would you like to deposit? "));
    bankAccount.balance += amount;
} else {
    console.log("Enter 'w' to withdraw or 'd' to deposit.");
}

console.log();
console.log(`Your new balance is €${bankAccount.balance}`);
console.log();

let bankaccountString = JSON.stringify(bankAccount);
localStorage.setItem("bankAccount", bankaccountString);
class BankAccount{
    constructor(balance){
        this.balance = balance;
    }
    deposit(amount){
        this.balance += amount;
    }
    withdraw(amount){
        if(this.balance >= amount){
            this.balance -= amount;
        } else{
            console.log(`Maak meer geld`);
        }
    }
    checkBalance(){
        console.log(this.balance);
    }
}

let bankAccount = new BankAccount(1000);

bankAccount.checkBalance();
bankAccount.deposit(2000);
bankAccount.checkBalance();
bankAccount.withdraw(1500);
bankAccount.checkBalance();
bankAccount.withdraw(2000);
bankAccount.checkBalance();
function maakRekening() {
    let saldo = 0;

    return{
        stort: function(n) {
            saldo += n;
            return saldo;
        },
        opnemen: function(n) {
            saldo -= n;
            return saldo;
        },
        bekijkSaldo: function() {
            return saldo;
        }
    }
}

let rekening = maakRekening();
console.log(rekening.stort(100));
console.log(rekening.opnemen(25));
console.log(rekening.bekijkSaldo());

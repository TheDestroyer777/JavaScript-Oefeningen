/*function maakTeller() {
    let count = 0;


    return {
        verhoog: function() {
            count++;
            return count;
        },
        reset: function() {
            count = 0;
            return count;
        }
    }
}

let teller = maakTeller();
console.log(teller.verhoog()); // 1
console.log(teller.verhoog()); // 2
console.log(teller.reset()); // 0
*/

function maakTeller() {
    let count = 0;


    return {
        verhoog: function() {
            count += n;
            return count;
        },
        reset: function() {
            count = 0;
            return count;
        }
    }
}

let teller = maakTeller();
console.log(teller.verhoog()); // 1
console.log(teller.verhoog()); // 2
console.log(teller.reset()); // 0
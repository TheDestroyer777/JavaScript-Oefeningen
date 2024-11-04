let fruit = ["banaan", "appel", "peer"];
let groenten = ["wortel", "tomaat"];
maakBoodschappenlijst(fruit, groenten);

function maakBoodschappenlijst(fruit, groenten) {
    let boodschappen = fruit.concat(groenten);
    boodschappen.sort();
    console.log(boodschappen);
    
    for(let i = 0; i < boodschappen.length; i++){
        console.log(i + " " + boodschappen[i]);
    }
    
}
    
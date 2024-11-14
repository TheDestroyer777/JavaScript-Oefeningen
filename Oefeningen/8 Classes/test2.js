class car{
    constructor(name, year){
        this._name = name;
        this._year = year;
    }
    // setter met als key "name"
    set name(name){
        this._name = name;
    }
    // getter met als key "name"
    get name(){
        return this._name;
    }
} //zonder "_" is dit een stackoverflow

const car1 = new car("Twingo", 2005);

car1.name = "Twingo met spoiler";
console.log(car1.name);
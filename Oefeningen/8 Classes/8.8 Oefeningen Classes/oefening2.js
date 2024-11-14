class Car{
    constructor(brand, mileage){
        this._brand = brand;
        this._mileage = mileage;
    }
    get mileage(){
        if(this._mileage >= mileage){
            console.log("Dat kan niet");
        } else{
            return mileage;
        }
    }
    set mileage(mileage){
        this._mileage = mileage;
    }
    showInfo(){
        console.log(`This car is a ${this._brand} and it's mileage is: ${this._mileage}`)
    }
}

let car1 = new Car("merk", 20);
car1.mileage = 40;
car1.showInfo();
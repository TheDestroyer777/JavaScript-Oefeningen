class Person{
    #nrn;

    constructor(name, nrn){
        this._name = name;
        this.#nrn = nrn;
    }
    set nrn(nrn){
        this.#nrn = nrn;
    }
    get nrn(){
        return this.#nrn;
    }
    showNrn(){
        console.log(this.#nrn);
    }
}

const persoon = new Person("Jack", 15114512011411);
persoon.showNrn();
class User{
    constructor(name, email){
        this._name = name;
        this._email = email;
    }
    login(){
        console.log(`User ${this._name} is logged in.`);
    }
}

class admin extends User{
    constructor(priviliges) {
        this._priviliges = priviliges;
    }
    changePrivilige(){
        console.log()
    }
}
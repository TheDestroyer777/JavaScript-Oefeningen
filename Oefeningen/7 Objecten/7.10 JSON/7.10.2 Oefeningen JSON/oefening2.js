if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
}

let gebruikersVoorkeuren = {
    kleurenschema: "donker",
    lettergrootte: "16px",
    meldingen: true
};

let savedGebruikersVoorkeuren = localStorage.getItem("gebruikersvoorkeuren");
if (gebruikersVoorkeuren) {
    gebruikersVoorkeuren = JSON.parse(savedGebruikersVoorkeuren);
}

console.log(gebruikersVoorkeuren);

let gebruikersVoorkeurenString = JSON.stringify(gebruikersVoorkeuren);
localStorage.setItem("gebruikersvoorkeuren", gebruikersVoorkeurenString);
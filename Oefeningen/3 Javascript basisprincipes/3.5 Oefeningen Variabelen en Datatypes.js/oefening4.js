let auto = {
    merk: "merk",
    model: "model",
    jaar: 2000
}

console.log(auto.merk, auto.model, auto.jaar);

auto = {
    merk: auto.merk,
    model: auto.model,
    jaar: auto.jaar,
    kleur: "rood"
}

console.log(auto.merk, auto.model, auto.jaar, auto.kleur);
let auto = {
    merk: "merk",
    model: "model",
    bouwjaar: 2000,
};

function upgradeAuto (nieuweBouwjaar) {
    let auto2 = {...auto, nieuweBouwjaar};
    return auto2;
}

console.log(upgradeAuto(2010));
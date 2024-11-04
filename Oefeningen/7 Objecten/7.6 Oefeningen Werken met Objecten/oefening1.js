let auto = {
    merk: "merk",
    model: "model",
    bouwjaar: 2000,
    kilometerstand: 100,
    updateKilometerstand: function(object, getal) {
        this.kilometerstand += getal;
    },
    toonAutoInfo: function() {
        console.log(auto.merk);
        console.log(auto.model);
        console.log(auto.bouwjaar);
        console.log(auto.kilometerstand);
    }
};

auto.updateKilometerstand(auto, 50);
auto.toonAutoInfo();
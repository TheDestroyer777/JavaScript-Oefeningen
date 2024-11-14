class Temperature{
    static convertToFahrenheit(celcius){
        return celcius * 1.8 + 32;
    }
}

let fahrenheit = Temperature.convertToFahrenheit(25);
console.log(fahrenheit);
let tekstJSON = '{"temperatuur": 22.5, "luchtvochtigheid": 45, "tijdstip": "2024-09-05T14:30:00Z"}';
let tekstString = JSON.parse(tekstJSON);

console.log(`De temperatuur is ${tekstString.temperatuur}°C, de luchtvochtigheid is ${tekstString.luchtvochtigheid}%, en de meting is gedaan om ${tekstString.tijdstip}`);
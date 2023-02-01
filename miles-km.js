function milesToKilometer(miles){
    const kilometer = miles * 1.609 ;
    return kilometer;
}

function kilogramToGram(kilogram) {
    const gram = kilogram * 1000 ;
    return gram;
}

const distanceToMile = 20;
const distanceTokilometer = milesToKilometer(distanceToMile);
console.log('My distance :', distanceTokilometer, ' km');

console.log('Convert kilogram to gram');
const myWeightInKg = 70;
const myWeightInGram= kilogramToGram(myWeightInKg);
console.log('My weight in gram', myWeightInGram , ' g');
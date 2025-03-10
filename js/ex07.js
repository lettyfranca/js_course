function greet(name) {
    if (!name) {
        console.log('Hi there!');
    } else {
        console.log(`Hello ${name}!`);
    }
}
greet();

function convertToFahrenheit(celsius) {
    let degFahrenheit = '';
    degFahrenheit = (celsius * 9 / 5) + 32;
    return degFahrenheit;
}

function convertToCelsius(Fahrenheit) {
    let degCelsius = '';
    degCelsius = (Fahrenheit - 32) * 5 / 9;
    return degCelsius;
}

function convertTemperature(degrees, unit) {
    let newDegrees = '';
    if (unit == 'C') {
        newDegrees = convertToFahrenheit(degrees);
        console.log(newDegrees + 'F');
    } else if (unit == 'F') {
        newDegrees = convertToCelsius(degrees);
        console.log(newDegrees + 'C');
    } else {
        console.log("A unit should be 'C' or 'F'");
    }
}

convertTemperature(25, 'C');
convertTemperature(86, 'F');

function convertLength(length, from, to) {
    if (from == 'miles' && to == 'miles') {
        console.log(length + 'miles');
    } else if (from == 'miles' && to == 'km') {
        length = length * 1.6;
        console.log(length + 'km');
    } else if (from == 'miles' && to == 'ft') {
        length = length * 5280;
        console.log(length + 'ft');
    } else if (from == 'km' && to == 'km') {
        console.log(length + 'km');
    } else if (from == 'km' && to == 'miles') {
        length = length / 1.6;
        console.log(length + 'miles');
    } else if (from == 'km' && to == 'ft') {
        length = length * 3281;
        console.log(length + 'ft');
    
    } else if (from == 'ft' && to == 'ft') {
        console.log(length + 'ft');
    } else if (from == 'ft' && to == 'miles') {
        length = length / 5280;
        console.log(length + 'miles');
    } else if (from == 'ft' && to == 'km') {
        length = length / 3281;
        console.log(length + 'km');
    } else {
        console.log(`Invalid unit: ${from} or ${to}`);
    }
}

convertLength(5, 'miles', 'km');
convertLength(5, 'miles', 'ft');
convertLength(5, 'km', 'ft');
convertLength(5, 'ft', 'lbs');
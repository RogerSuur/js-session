// citiesOnly([
//     {
//       city: 'Los Angeles',
//       temperature: '  101 °F   ',
//     },
//     {
//       city: 'San Francisco',
//       temperature: ' 84 ° F   ',
//     },
//   ]) 
// Create a function named citiesOnly which takes an array of objects and which return an array of strings 
//from the key city.

//upperCasingStates(['alabama', 'new jersey'])

function citiesOnly(objArray) {

    return objArray.map(obj => obj.city)
};

//     Create a function named upperCasingStates which takes an array of strings and which Upper Case each words of a string.
// The function returns then an array of strings.
// Example:
upperCasingStates(['alabama', 'new jersey']) // -> ['Alabama', 'New Jersey']

function upperCasingStates(arrayOfStrings) {


    return arrayOfStrings.map(function (inputvalue) {
        const cities = inputvalue.split(' ');
        var answer
        answer = cities.map(function (element) {
            //console.log("element:", element)
            var citiesCapital = element.charAt(0).toUpperCase() + element.slice(1)
            return citiesCapital //asendab elementi
        });
        answer = answer.join(' ');
        //console.log(answer)
    })
};

// Create a function named fahrenheitToCelsius which takes an array of fahrenheit temperatures which converts them to Celsius. 
//Round down the result.
// The function then returns the result as an array of strings like below:

// Example:
fahrenheitToCelsius(['68°F', '59°F', '25°F']) // -> ['20°C', '15°C', '-4°C']

function fahrenheitToCelsius(arrayOfObjects) {
    var answer
    answer = arrayOfObjects.map(function (element) {
       const regex = /(\d+)/g;
        const fahren = element.match(regex)
        
        var celsius = Math.round((fahren-32)/1.8)+'°C'
        
        return celsius
    })
    console.log("answer", answer)

};
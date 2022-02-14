citiesOnly([
    {
      city: 'Los Angeles',
      temperature: '  101 °F   ',
    },
    {
      city: 'San Francisco',
      temperature: ' 84 ° F   ',
    },
  ]) 

//upperCasingStates(['alabama', 'new jersey'])

function citiesOnly(objArray) {
    
    let mapOfCities = new Map();
    
    mapOfCities = objArray.map(obj => obj.city)
    console.log(mapOfCities)
    return mapOfCities
    
};

//     Create a function named upperCasingStates which takes an array of strings and which Upper Case each words of a string.
// The function returns then an array of strings.
// Example:
//upperCasingStates(['alabama', 'new jersey']) // -> ['Alabama', 'New Jersey']

function upperCasingStates(arrayOfStrings) {

    var arrayOfUppercaseStrings = [];
    //console.log(Object.values(objArray))
    
    //console.log(arrayOfUppercaseStrings)
    return arrayOfUppercaseStrings
};

// Create a function named fahrenheitToCelsius which takes an array of fahrenheit temperatures which converts them to Celsius. 
//Round down the result.
// The function then returns the result as an array of strings like below:

// Example:
// fahrenheitToCelsius(['68°F', '59°F', '25°F']) // -> ['20°C', '15°C', '-4°C']

function fahrenheitToCelsius(arrayOfObjects) {

};
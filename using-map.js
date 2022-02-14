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
    
    let mapOfCities = new Map();
    
    mapOfCities = objArray.map(obj => obj.city)
    console.log(mapOfCities)
    return mapOfCities
    
};

//     Create a function named upperCasingStates which takes an array of strings and which Upper Case each words of a string.
// The function returns then an array of strings.
// Example:
upperCasingStates(['alabama', 'new jersey']) // -> ['Alabama', 'New Jersey']

function upperCasingStates(arrayOfStrings) {

    let mapOfCities = new Map();

    const regex = /(\b\w)/g
    //const found = arrayOfStrings.match(regex)
    
   // mapOfCities = arrayOfStrings.map(obj => obj.charAt(0).toUpperCase() + obj.slice(1))
   
    //mapOfCities = arrayOfStrings.map(obj => obj.match(regex) + obj.slice(1))
   mapOfCities = arrayOfStrings.map(function newfunction (inputvalue){


    
   })
    console.log(mapOfCities)
    // return arrayOfUppercaseStrings
};

// Create a function named fahrenheitToCelsius which takes an array of fahrenheit temperatures which converts them to Celsius. 
//Round down the result.
// The function then returns the result as an array of strings like below:

// Example:
// fahrenheitToCelsius(['68°F', '59°F', '25°F']) // -> ['20°C', '15°C', '-4°C']

function fahrenheitToCelsius(arrayOfObjects) {

};
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

  //upperCasingStates(['alabama', 'new jersey'])

function citiesOnly(objArray){
    var arrayOfCities = [];
    //console.log(Object.values(objArray))
    for (let i = 0; i < objArray.length; i++) {
        //console.log(objArray[i].city);
        arrayOfCities.push(objArray[i].city)
    }
    //console.log(arrayOfCities)
    return arrayOfCities
    //console.log(objArray[1].city)
};

//     Create a function named upperCasingStates which takes an array of strings and which Upper Case each words of a string.
// The function returns then an array of strings.
// Example:
//upperCasingStates(['alabama', 'new jersey']) // -> ['Alabama', 'New Jersey']

function upperCasingStates(arrayOfStrings){

var arrayOfUppercaseStrings = [];
    //console.log(Object.values(objArray))
    for (let i = 0; i < arrayOfStrings.length; i++) {
        //console.log(arrayOfStrings[i]);
        //console.log("arrayofstrings:", arrayOfStrings[i].charAt(0).toUpperCase(), "slice:", arrayOfStrings[i].slice(1));
        arrayOfUppercaseStrings.push( arrayOfStrings[i].charAt(0).toUpperCase() + arrayOfStrings[i].slice(1))
    }
    //console.log(arrayOfUppercaseStrings)
    return arrayOfUppercaseStrings
};
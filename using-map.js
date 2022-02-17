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
        return answer
    })
};

// Create a function named fahrenheitToCelsius which takes an array of fahrenheit temperatures which converts them to Celsius. 
//Round down the result.
// The function then returns the result as an array of strings like below:

// Example:
//fahrenheitToCelsius(['68°F', '59°F', '25°F']) // -> ['20°C', '15°C', '-4°C']
//fahrenheitToCelsius(['86°F', '100°F', '41°F', '55°F', '10°F', '70°F', '-2°F'])

function fahrenheitToCelsius(arrayOfObjects) {
    var answer

        answer = arrayOfObjects.map(function (element) {
           
            const regex = /(-?\d+)/g;
            const fahren = element.match(regex)
            
            var celsius = Math.floor((fahren - 32) * (5/9)) + '°C'
            // console.log("celsius unrounded:", ((fahren - 32) * (5/9)))
            // console.log("celsius:", celsius)

            return celsius
           
        })
        //console.log("answer:", answer)
        return answer
};

trimTemp([
    { city: 'Los Angeles', temperature: '  101 °F   ' },
    { city: 'San Francisco', temperature: ' 84 ° F   ' },
  ]) /* -> [
    { city: 'Los Angeles', temperature: '101°F' },
    { city: 'San Francisco', temperature: '84°F' },
  ] */

// Create a function named trimTemp which takes an array of objects and which removes the spaces from the string in the key temperature.
// The function then returns an array of objects with the modification.
function trimTemp(inputvalue) {
    var answer

    answer = inputvalue.map(function (element){
            //kuidas returnida terve array?
            //console.log("element:", element)
            element.temperature = element.temperature.replace(/ /g,'')
           // const strModded = element.temperature.replace(/ /g,'');
            return element
    })
    //console.log(answer)
    return answer

};

// Create a tempForecasts function which will take an array of objects, and which will return an array of strings formatted as below:
tempForecasts([
  {
    city: 'Pasadena',
    temperature: ' 101 °F',
    state: 'california',
    region: 'West',
  },
]) // -> ['38°Celsius in Pasadena, California']

function tempForecasts(inputvalue) {
    var answer
    var stringAnswer = ''
    answer = inputvalue.map(function (element){
        // getting temp right
        element.temperature = element.temperature.replace(/ /g,'')
        const regex = /(-?\d+)/g;
        const fahren = element.temperature.match(regex)    
         var celsius = Math.floor((fahren - 32) * (5/9)) + '°C'
         element.temperature = celsius
         //stringAnswer += celsius 
        //console.log(celsius)

        //getting city/state right
        const cities = element.state.split(' ');
        var citiesNew
        citiesNew = cities.map(function (element) {
            //console.log("element:", element)
            var citiesCapital = element.charAt(0).toUpperCase() + element.slice(1)
            return citiesCapital //asendab elementi
        });
        citiesNew = citiesNew.join(' ');
        element.state = citiesNew 
        //stringAnswer += 'elsius in ' + element.region + ', ' +  citiesNew
        //return citiesNew
        //console.log(citiesNew)
       
        return `${celsius}elsius in ${element.city}, ${citiesNew}`
        //return as an array temperature, city, state 
    }) 
    
    return answer
};
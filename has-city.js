// Create a function hasCity that takes a string called country and an array of strings, 
// which are cities of that country, which returns a new function.
// The new function takes a string, called city, as a parameter and which determines whether the array
//  contains that string or not.

// If it does, it should return the string <city> is a city from <country>, 
// otherwise <city> is not a city from <country>.

function hasCity(country,cityArr){
    return function result(city) {
        for (let i = 0; i < cityArr.length; i++) {
            if (cityArr[i] === city) {
                return city + ' is a city from ' + country
            }
        }
        return city + ' is not a city from ' + country
    }
}
   
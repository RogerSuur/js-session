// Create the following functions:

// isValid, this function must return false if it's an Invalid Date
// isAfter, this function will receive two valid dates and return true 
// if the first date is bigger then the second date
// isBefore, this function will receive two valid dates and return true 
// if the first date is lesser then the second date
// isFuture, will return true if the date given as parameter is valid
//  and higher than the present date
// isPast, will return true if the date given as parameter is valid 
// and less than the present date

console.log(isValid(new Date('December 17, 1995 03:24:00')))
console.log(isValid(new Date(1488370835081)))
console.log(isValid(new Date('1995-12-17T03:24:00')))
console.log(isValid(new Date('1995-12-17T03:24:00')))

function isValid(input){
    return (!isNaN(new Date(input))) && (new Date(input) !== 0) 
};

function isAfter(){

};

function isBefore(){

};

function isFuture(){

};

function isPast(){

};
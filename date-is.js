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

//console.log(isValid(new Date('December 17, 1995 03:24:00')))
//console.log(isValid(new Date(1488370835081)))
//console.log(isValid(new Date('1995-12-17T03:24:00')))
//console.log(isValid(new Date('1995-12-17T03:24:00')))
//console.log(isFuture(new Date(2077, 11, 31)))
//console.log(!invalid(isFuture))
console.log(!isFuture(new Date('1992-01-01')))
console.log(!isFuture(new Date(Date.now() - 1)))
console.log(isFuture(new Date(2077, 11, 31)))
console.log(isFuture(new Date(Date.now() + 1)))

function isValid(input){
    if (!isNaN(input) && ( input)) {
        return true
    }
};

function isAfter(date1, date2){
    if ( date1>date2) {
        return true
    }

};

function isBefore(date1, date2){
    if ( date1<date2) {
        return true
    }
};

function isFuture(inputDate){
    let today = new Date()
    
    if (isValid(inputDate)){
        if (inputDate>today){
            return true
        } else {
        return      false
        }
    }
};

function isPast(){

};
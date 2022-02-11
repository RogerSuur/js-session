// Instructions
// Create the following functions:

// isFriday returns true if the date is a friday
// isWeekend returns true if the date is a day of the weekend
// isLeapYear returns true if the year is a leap year
// isLastDayOfMonth returns true if the date is the last day of the month

// isFriday
//console.log(isFriday(new Date('2014-08-29')));
//console.log(isFriday(new Date('2020-07-17')));
//console.log(!isFriday(new Date('1992-08-26')));
//console.log(!isFriday(new Date('2000-08-26')));

// isWeekend
//console.log(isWeekend(new Date('2014-09-06')));
//console.log(isWeekend(new Date('2020-05-30')));
//console.log(!isWeekend(new Date('1929-02-13')));
//console.log(!isWeekend(new Date('1990-01-30')));

// isLeapYear
//console.log(isLeapYear(new Date('1804-02-01')));
//console.log(isLeapYear(new Date('2008-02-01')));
//console.log(isLeapYear(new Date('2216-02-01')));
//console.log(!isLeapYear(new Date('1993-02-01')));
//console.log(!isLeapYear(new Date('1999-02-01')));

// isLastDayOfMonth
console.log(isLastDayOfMonth(new Date('2020-02-29')));
console.log(isLastDayOfMonth(new Date('2020-12-31')));
console.log(isLastDayOfMonth(new Date('2019-02-28')));
console.log(isLastDayOfMonth(new Date('1998-02-28')));
console.log(isLastDayOfMonth(new Date('1980-02-29')));
console.log(!isLastDayOfMonth(new Date('2020-12-30')));
console.log(!isLastDayOfMonth(new Date('2020-02-28')));
console.log(!isLastDayOfMonth(new Date('2019-02-29')));
//
function isFriday(date){
    //console.log("DATE:",date)
    let day = date.getDay();
    //console.log("DAY:",day)
    if (day === 5){
        return true
    } else {
        return false
    }
};

function isWeekend(date){
    let day = date.getDay();
    if (day === 6 || day === 7){
        return true
    } else {
        return false
    }
};

function isLeapYear(date){
let year = date.getFullYear();
console.log("yEAR:",year)
    if (year%4 === 0 && year%100 !== 0){
        return true
    } else {
        return false
    }
//     A year is leap year if following conditions are satisfied:

// Year is multiple of 400.
// Year is multiple of 4 and not multiple of 100.
};

function isLastDayOfMonth(date){
    console.log("date:", date)
    var today = new Date();
    //console.log("today:", today)
    var lastDayOfMonth = new Date(today.getFullYear(), today.getMonth()+1, 0);
    console.log("lastday:",lastDayOfMonth)
    if (date === lastDayOfMonth){
        console.log("siia")
        return false
    }
    return false
};
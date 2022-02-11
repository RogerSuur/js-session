// Make a countLeapYears functions that takes a date and returns the number of leap years since year 1

//console.log(countLeapYears(new Date('0001-12-01'))) // === 0)
//console.log(countLeapYears(new Date('1664-08-09'))) // === 403)
//console.log(countLeapYears(new Date('2020-01-01'))) // === 489)
//console.log(countLeapYears(new Date('2048-12-08'))) // === 496)


function countLeapYears(inputDate) {

    var myYear = inputDate.getFullYear()
    console.log("myYear:", myYear);
    var answer = 0
    for (let i = 1; i <= myYear; i++) {
        if (myYear % 4 == 0) {
            answer ++
        } 
    }
    return answer
    

}

// function isLeapYear(year) {
//     if (year % 4 == 0) {
//         console.log("leap year")
//     } else {
//         console.log("Not a leap year")
//     }
// }
// var myYear = 2020;
// isLeapYear(myYear)
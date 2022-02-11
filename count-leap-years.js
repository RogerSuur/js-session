// Make a countLeapYears functions that takes a date and returns the number of leap years since year 1

//console.log(countLeapYears(new Date('0012-12-01'))) // === 0)
//console.log(countLeapYears(new Date('1664-08-09'))) // === 403)
//console.log(countLeapYears(new Date('2020-01-01'))) // === 489)
//console.log(countLeapYears(new Date('2048-12-08'))) // === 496)

function countLeapYears(inputDate) {
    var myYear = inputDate.getFullYear()
    console.log("myYear:", myYear);
    var answer = 0
    for (let i = 5; i <= myYear; i++) {
        if (isLeapYear(i)) {
            console.log("added answer++", i ,answer)
            answer ++
        } 
    }
    return answer
}

function isLeapYear(year) {
    if (year % 400 === 0) return true;
    if (year % 100 === 0) return false;
    return year % 4 === 0;
  }
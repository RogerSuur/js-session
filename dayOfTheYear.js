//Make a dayOfTheYear functions that takes a date and returns the number of days since the first day of that year

//console.log(dayOfTheYear(new Date('0001-01-01'))); //=== 1)
console.log(dayOfTheYear(new Date('1664-08-09'))); //=== 222)
console.log(dayOfTheYear(new Date('1600-12-31'))); //=== 366)
console.log(dayOfTheYear(new Date('2020-06-22'))); //=== 174)
console.log(dayOfTheYear(new Date('2048-12-08'))); //=== 343)
console.log(dayOfTheYear(new Date('2048-11-08'))); //=== 313)

function dayOfTheYear(inputDate){
    
    // const dayOfTheMonth = inputDate.getDate();
    // const monthOfTheYear = (inputDate.getMonth() + 1);
    // const dayOfTheWeek = inputDate.getDay()
    let daysFrom = ''
    console.log("inputDate:", inputDate)
    const inputYear = inputDate.getUTCFullYear()
    console.log("inputYear:", inputYear)
    const startingYear = new Date(inputYear)
    console.log("startingYear", startingYear)
    startingYear.setFullYear(inputYear)
    console.log("startingYear:", startingYear)

   // let wantedDate = new Date(inputDate)
//
   daysFrom = (inputDate - startingYear) / (1000 * 60 * 60 * 24)
    return daysFrom+2
};
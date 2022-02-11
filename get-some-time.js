// Create a function firstDayWeek that receives a week of the year (from 1 to 53) 
// and a year (as a string),
//  and returns the first day of that week, in the format: 'dd-mm-yyyy'. 
//  By beginning of the week we mean the monday of that week.

// If the first week is requested and it starts on the previous year of the presented one,
//  it should return the first day of the year.


//console.log(firstDayWeek(1, '1000')) //, '01-01-1000'))
//console.log(firstDayWeek(2, '1000'))
//console.log(firstDayWeek(52, '1000')) //, '22-12-1000'))
//console.log(firstDayWeek(2, '0001')) //, '08-01-0001'))
//console.log(firstDayWeek(43, '1983')) //, '17-10-1983'))
//console.log(firstDayWeek(23, '0091')) //, '04-06-0091'))

function firstDayWeek(week,year){

        if (week === 1) {
            return `01-01-${year}`;
        }
    
        const shit = new Date(year);
        if (year < 1000) {
            shit.setDate(week * 7);
        } else {
            shit.setDate((week - 1) * 7);
        }
    
        const currentDay = shit.getDay();
        if (currentDay === 0) {
            shit.setDate(shit.getDate() - 6);
        } else {
           shit.setDate(shit.getDate() - currentDay + 1);
        }
    
        return shit.toISOString().slice(0, 10).split("-").reverse().join("-");
    }



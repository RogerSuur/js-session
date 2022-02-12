// Instructions
// You were missioned to make the world more productive. Your solution ? no more sundays, 
// you are ask to remove them from the existing calendar.

// So now, a week is 6 days from monday to saturday.

// To prove your point, create a bloodySunday function that return what week day the given date is.

// note that the 01/01/0001 is still a monday.


function bloodySunday(date) {

    let newWeekFormat = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
    ];

    let daysFrom = ''
    const startDate = new Date('0001-01-01')

    let wantedDate = new Date(date)

    daysFrom = (startDate - wantedDate) / (1000 * 60 * 60 * 24)
    //console.log("daysFrom:", daysFrom)


    var modulus = Math.abs(daysFrom % 6)

    //console.log("modulus:", modulus)
    return newWeekFormat[modulus]
}


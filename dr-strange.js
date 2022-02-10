// You have been given the mission to create a new sense of time! 
// Normally a week has 7 days right ? Well, that is about to change!

// Instead of a normal week having only 7 days, it will have 14 days. 
// Let me explain, this new week will have 14 days, from Monday to Sunday then secondMonday 
// to secondSunday.Your purpose is to create a new function addWeek,
//     that takes as parameter a Date and that will return what week day the given date is,
//         according to your new week format.Week number should be count from 0001 - 01 - 01.

// new week format:

// Monday
// Tuesday
// Wednesday
// Thursday
// Friday
// Saturday
// Sunday
// secondMonday
// secondTuesday
// secondWednesday
// secondThursday
// secondFriday
// secondSaturday
// secondSunday
// Now imagine you have a doctor appointment and you have to wait some hours,
//     but you do not want to wait, so you decided that you need to create a function timeTravel 
//  that allows you to change the time according to your needs.
//   This function will give you the power to go backwards or forwards in time.

//     So, you will have a function that takes an object with the following
// { date, hour, minute, second }. This object will be responsible for changing the hour,
//     minute and second of the given date.

//console.log(addWeek(new Date('0001-01-01'))) //=== 'Monday')
//console.log(addWeek(new Date('0001-01-02'))) //=== 'Tuesday')
//console.log(addWeek(new Date('0001-01-03'))) //=== 'Wednesday')
//console.log(addWeek(new Date('0001-01-04'))) //=== 'Thursday')
//console.log(addWeek(new Date('0001-01-05'))) //=== 'Friday')
//console.log(addWeek(new Date('0001-01-06'))) //=== 'Saturday')
//console.log(addWeek(new Date('0001-01-07'))) //=== 'Sunday')
//console.log(addWeek(new Date('0001-01-08'))) //=== 'secondMonday')
//console.log(addWeek(new Date('0001-01-09'))) //=== 'secondTuesday')
//console.log(addWeek(new Date('0001-01-10'))) //=== 'secondWednesday')
//console.log(addWeek(new Date('0001-01-11'))) //=== 'secondThursday')
//console.log(addWeek(new Date('0001-01-12'))) //=== 'secondFriday')
//console.log(addWeek(new Date('0001-01-13'))) //=== 'secondSaturday')
//console.log(addWeek(new Date('0001-01-14'))) //=== 'secondSunday')
//
//console.log(addWeek(new Date('2025-08-11'))) //=== 'secondMonday')
//console.log(addWeek(new Date('2001-05-11'))) //=== 'secondFriday')
//console.log(addWeek(new Date('2001-11-07'))) //=== 'secondWednesday')
//console.log(addWeek(new Date('0001-12-01'))) //=== 'secondSaturday')
//console.log(addWeek(new Date('1664-08-09'))) //=== 'Saturday')
//console.log(addWeek(new Date('1995-11-07'))) //=== 'Tuesday')
//console.log(addWeek(new Date('2020-01-01'))) //=== 'Wednesday')
//console.log(addWeek(new Date('2048-12-07'))) //=== 'Monday')



function addWeek(date){

    let newWeekFormat =[
        'Monday',
        'Tuesday',
       'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
        'secondMonday',
        'secondTuesday',
        'secondWednesday',
        'secondThursday',
        'secondFriday',
        'secondSaturday',
        'secondSunday',
    ];

    let weekDay = ''
    const startDate = new Date('0001-01-01')
    
   let wantedDate = new Date(date)

   weekDay = (startDate-wantedDate)/(1000*60*60*24)


    var modulus = Math.abs(weekDay%14)

    //console.log("modulus:", modulus)
    return newWeekFormat[modulus]
}
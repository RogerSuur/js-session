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

console.log (timeTravel({
      date: new Date('2020-05-29 23:25:22'),
      hour: 21,
      minute: 22,
      second: 22,
    }))

// t(({ eq }) =>
//   eq(
//     timeTravel({
//       date: new Date('2000-05-09 01:28:02'),
//       hour: 21,
//       minute: 22,
//       second: 22,
//     }).getTime(),
//     new Date('2000-05-09 21:22:22').getTime(),
//   ),
// )

// t(({ eq }) =>
//   eq(
//     timeTravel({
//       date: new Date('2018-06-04 13:01:00'),
//       hour: 10,
//       minute: 16,
//       second: 11,
//     }).getTime(),
//     new Date('2018-06-04 10:16:11').getTime(),
//   ),
// )

// t(({ eq }) =>
//   eq(
//     timeTravel({
//       date: new Date('1995-11-07 00:21:12'),
//       hour: 23,
//       minute: 12,
//       second: 18,
//     }).getTime(),
//     new Date('1995-11-07 23:12:18').getTime(),
//   ),
// )

// t(({ eq }) =>
//   eq(
//     timeTravel({
//       date: new Date('1000-09-19 06:00:00'),
//       hour: 22,
//       minute: 10,
//       second: 21,
//     }).getTime(),
//     new Date('1000-09-19 22:10:21').getTime(),
//   ),
// )

// t(({ eq }) =>
//   eq(
//     timeTravel({
//       date: new Date('1975-05-10 10:07:56'),
//       hour: 17,
//       minute: 15,
//       second: 14,
//     }).getTime(),
//     new Date('1975-05-10 17:15:14').getTime(),
//   ),
// )


function addWeek(date) {

    let newWeekFormat = [
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

    let daysFrom = ''
    const startDate = new Date('0001-01-01')

    let wantedDate = new Date(date)

    daysFrom = (startDate - wantedDate) / (1000 * 60 * 60 * 24)
    //console.log("daysFrom:", daysFrom)


    var modulus = Math.abs(daysFrom % 14)

    //console.log("modulus:", modulus)
    return newWeekFormat[modulus]
}

function timeTravel ({date, hour, minute, second}) {
    //console.log("obj.date:",obj.date)
    //console.log("obj.hour:", obj.hour)
    //var timeTraveledDate = new Date(obj.date);

    date.setHours(hour)
    date.setMinutes(minute)
    date.setSeconds(second)
    //console.log("obj.date:", date)
    return date
};
// Instructions
// Create a function called matchCron it takes a valid cron schedule string and a
// valid date.
// It returns true if the date match the pattern

// You only have to implement numbers and *.
// other complex patterns are not required.

// Only valid pattern will be tested.

// Example
// matchCron('9 * * * *', new Date('2020-05-30 18:09:00')) // -> true
// matchCron('9 * * * *', new Date('2020-05-30 19:09:00')) // -> true
// matchCron('9 * * * *', new Date('2020-05-30 19:21:00')) // -> false
// //         | | | | |
// //         | | | | +- Day of the Week   (range: 1-7, 1 standing for Monday)
// //         | | | +--- Month of the Year (range: 1-12)
// //         | | +----- Day of the Month  (range: 1-31)
// //         | +------- Hour              (range: 0-23)
// //         +--------- Minute            (range: 0-59)

console.log(matchCron('* * * * 1', new Date('2020-06-01 00:00:00')))
console.log(matchCron('* * * 2 *', new Date('2021-02-01 00:00:00')))

function matchCron(cronSchedule, inputDate) {
    console.log(cronSchedule)
    var cronScheduleNoSpace = cronSchedule.split(" ").join("")
    console.log(cronScheduleNoSpace)

    const minute = inputDate.getMinutes();
    const hour = inputDate.getHours();
    const dayOfTheMonth = inputDate.getDate();
    const monthOfTheYear = (inputDate.getMonth() + 1);
    const dayOfTheWeek = inputDate.getDay()

    const dateArray = [minute, hour, dayOfTheMonth, monthOfTheYear, dayOfTheWeek]

    console.log("minute:", minute)
    console.log("hour:", hour)
    console.log("dayOfTheMonth:", dayOfTheMonth)
    console.log("monthOfTheYear:", monthOfTheYear)
    console.log("dayOfTheWeek:", dayOfTheWeek)

    console.log("dateArray:", dateArray)

    var count = 0

    var answer = Boolean

    for (const value of cronScheduleNoSpace) {
        console.log(count, value)
        if (value !== '*') {
            console.log("datearray[count]:",dateArray[count])
            if (dateArray[count] == value) {
                answer = true
            } else { answer = false}
        }
        count++
    }

    return answer

};
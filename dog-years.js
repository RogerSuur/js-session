// Someone once said that a dog makes 7 years for each human year.

// Create a dogYears function that if given a planet name and an age in seconds, calculates how old a dog would be on the given planet.

// earth : orbital period 1.0 Earth years, 365.25 Earth days, or 31,557,600 seconds
// mercury : orbital period 0.2408467 Earth years
// venus : orbital period 0.61519726 Earth years
// mars : orbital period 1.8808158 Earth years
// jupiter : orbital period 11.862615 Earth years
// saturn : orbital period 29.447498 Earth years
// uranus : orbital period 84.016846 Earth years
// neptune : orbital period 164.79132 Earth years
// So if you were told someone that their dog were 1,000,000,000 seconds old, you should be able to say that the dog is 221.82 Earth-years old.

// You will have to format the number so that the result is rounded like the example above.

// Something is wrong ? Submit an issue or even better propose a change !
const years = {
    'earth': 1.0,
    'mercury': 0.2408467,
    'venus': 0.61519726,
    'mars': 1.8808158,
    'jupiter': 11.862615,
    'saturn': 29.447498,
    'uranus': 84.016846,
    'neptune': 164.79132,
}

console.log(dogYears('earth', 1000000000))

function dogYears(planet, seconds) {
    var constant = years[planet]
    // console.log(constant)
    const dogYear = (seconds / 31557600) * 7 / constant
    return parseFloat(dogYear.toFixed(2))
}
// Make a function called letterSpaceNumber that receives a string and returns an array with every instance of a letter, 
// followed by a space, followed by a number only if that number has only one digit and is not followed by any letter.


console.log(letterSpaceNumber('I like 7up.')); // []))
console.log(letterSpaceNumber("It's 20 past 3")); // ['t 3']))
console.log(letterSpaceNumber('example 1, example 2')); // ['e 1', 'e 2']))
console.log(letterSpaceNumber(''));// []))
console.log(letterSpaceNumber('Definitely 9.'));// ['y 9']))

function letterSpaceNumber(inputString) {

    const str = inputString;
    const re = /\w\s\d\W/g;
    const found = str.match(re);
    console.log(found)

    for (let i = 0; i < str.length; i++) {
        const element = array[i];
    }
};
// Write 5 functions:

// words that takes a string and split it into an array of strings on spaces
// sentence that takes an array of strings and join them with spaces
// yell that take a string and return it in upper case
// whisper that take a string and return it in lower case and surround it with *
// Create a capitalize function that takes a string and transforms it to upper 
//case only for the first letter, and in lowercase for the rest of the string

function words(a) {
    let myText = a.split(" ")
    return myText
};

function sentence(a) {
    let myText = a.join(' ')
    return myText
};

function yell(a) {
    let myText = a.toUpperCase()
    return myText
};

function whisper(a) {
    let myText = a.toLowerCase()
    let myText = '*' + myText + '*'
    return myText
};

function capitalize(a) {
    let myText = a.replace(/^\w/, (c) => c.toUpperCase());
    return myText
};

console.log()
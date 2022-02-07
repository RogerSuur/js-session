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
    myText = '*' + myText + '*'
    return myText
};

function capitalize(a) {
    //let myText = a.replace(/^\w/, (c) => c.toUpperCase());
   // let myText = a
   // let myText2 = myText[0].toUpperCase()
   // myText2[1,myText2.length] =  myText[1,myText2.length].toLowerCase()
   // let myText3 = myText.join('')
    return a[0].toUpperCase() + a.slice(1).toLowerCase()
};

console.log(capitalize('str'));
console.log(capitalize('STR'));
console.log(capitalize('zapZap'));
console.log(capitalize('zap ZAP'));
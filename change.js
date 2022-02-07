// Create 2 functions:

// get: a function that takes a key and return the corresponding value from the sourceObject

// set: a function that takes a key and a value update the value for the corresponding
// property of the sourceObject and return the set value

// const sourceObject = {
//     num: 42,
//     bool: true,
//     str: 'some text',
//     log: console.log,
// };

var sourceObjectCopy = {};
sourceObjectCopy = sourceObject;
set('num', 55);
console.log(sourceObjectCopy);
console.log(get('num'));

function get (a) {
    return sourceObjectCopy[a]
};


function set (a, b) {
   
    
    console.log(b)
    return sourceObjectCopy[a] = b
};


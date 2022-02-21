// Instructions
// I do not want onions. I want oranges!!!

// Create 3 functions that works like the .filter, .map and .reduce array method but for the keys of your grocery cart.

// filterKeys filters the name of the items you have.
// mapKeys changes the name of the items you have.
// reduceKeys reducing you grocery cart.

function filterKeys(input, func) {
    const values = Object.values(input)
    //console.log("values", values)
    const keys = Object.keys(input)
    //console.log("keys", keys)
    let answer = {}

    keys.forEach(function (el, index) {

        if (func(el)) {
            answer[keys[index]] = values[index]
        }
    });
    return answer
};

function mapKeys(input, func) {

    const values = Object.values(input)
    const keys = Object.keys(input)

    let answer = {}
    keys.forEach(function (el, i) {
        answer[func([keys[i]])] = answer [keys[i]]
        delete answer [keys[i]]
        answer[func([keys[i]])] = values[i]
    });
    return answer
};

function reduceKeys(input, func, initial = '') {

    console.log(input)
    console.log(func)
    const values = Object.values(input)
    const keys = Object.keys(input)
 
    
    keys.forEach(function (key, index) {
        
        if (initial===''&&index ===0) {initial=key}
        else {
        initial = func(initial, key)
        }
    });
     console.log("initial", initial)
     return initial
};
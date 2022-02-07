// Create 3 functions:

// a first function that takes an array or a string and return the first element.

// a last function that takes an array or a string and return the last element.

// a kiss function that returns an array of 2 elements the last and the first element, in that order


function first (a) {
    return a[0]
};

function last (a) {
    var argumentLength = a.length
    return a[argumentLength-1] 
};

function kiss(a) {
    var argumentLength = a.length
    var returnedVariable = [a[argumentLength-1],a[0]]
    return returnedVariable
};

const result = kiss([1,2,3,4,5,6]);
console.log(result);
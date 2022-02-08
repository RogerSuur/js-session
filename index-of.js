// Create 3 functions:

// indexOf which returns the index of the first occurence of a value and
//  takes as arguments an array to be searched, the value to be matched, and optionally the index from where to start searching from.
// lastIndexOf which works just like the previous function 
// but returns the index of the last occurence of a value
// includes which returns true if the value was found in the array

//console.log(indexOf([1, 2, 3, 4, 5, 4, 3, 2, 1], 2));
console.log(indexOf([0, 0, t, t], t));


function indexOf(array, value, startIndex = 0) {
    var found = ''
    //for (let i = 0; i < array.length; i++) {
    //    console.log(i, array[i])
    //    if (array[i] === value) {
    //        found = value
    //    }
    //}
    //console.log(startIndex)
    let i = startIndex;
    while ( i < array.length){
        i++;
        if (array[i] === value) {
            //console.log(i, startIndex, array[i])
            found = i
            { break }
        }
    }
    return found
};

function lastIndexOf() {

};

function includes() {

};



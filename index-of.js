// Create 3 functions:

// indexOf which returns the index of the first occurence of a value and
//  takes as arguments an array to be searched, the value to be matched, and optionally the index from where to start searching from.
// lastIndexOf which works just like the previous function 
// but returns the index of the last occurence of a value
// includes which returns true if the value was found in the array

//console.log(lastIndexOf([1, 2, 3, 4, 5, 4, 3, 2, 1], 2));
//console.log(lastIndexOf([0, 0, 6, 6], 6, 3));
//console.log(indexOf([5, 0, 0, 5], 5, 0));


function indexOf(array, value, startIndex = 0) {
    var found = -1

    let i = startIndex;
    while (i < array.length) {
        if (array[i] === value) {
            //console.log(i, startIndex, array[i])
            found = i
            { break }
        }
        i++;
    }
    return found
};

function lastIndexOf(array, value, startIndex = 0) {
    var found = -1

    if (startIndex === 0) {
        let i = array.length - 1;
        while (i >= 0) {
            if (array[i] === value) {
                found = i
                { break }
            }
            i--;
        }
        return found
    }
    if (startIndex !== 0) {
        let i = startIndex;
        while (i >= 0) {
            if (array[i] === value) {
                found = i
                { break }
            }
            i--;
        }
        return found
    }

};

function includes(array, value, startIndex = 0) {
    var found = -1

    let i = startIndex;
    while (i < array.length) {
        if (array[i] === value) {
            found = i
            { break }
        }
        i++;
    }
    if (found === 1) return true;
    if (found === -1) return false;
};



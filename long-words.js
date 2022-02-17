// Create three functions that take as argument an array each:

// longWords that returns true if every element of the array is a string of at least 5 characters.

function longWords(inputArray) {
     let answer = inputArray.every(function(element) {
        if(element.length>=5){
            return element
        }
     })
     return answer
};

// oneLongWord that returns true if at least one element of the array is a string of at least 10 characters.

function oneLongWord(inputArray) {
    let answer = inputArray.some(function(element) {
        if(element.length>=10){
            return element
        }
     })
     return answer
};

// noLongWords that returns true if there are no elements in the array that are a string with at least 7 characters.
function noLongWords(inputArray) {
    let answer = inputArray.every(function(element) {
        if(element.length !==7 ){
            return element
        }
     })
     return answer

};
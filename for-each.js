// Instructions
// Create a forEach function that takes an array as first argument, 
// a function as second, and that works like the method .forEach

function forEach(inputArray, inputFunction){
    //const array1 = ['a', 'b', 'c'];
    let answer = []
    
     for (let i = 0; i < inputArray.length; i++) {
       answer.push(inputFunction(inputArray[i], i, inputArray))
     }
     return answer
};
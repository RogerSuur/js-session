// Instructions
// Create a forEach function that takes an array as first argument, 
// a function as second, and that works like the method .forEach

function forEach(inputArray, inputFunction){

    //console.log(inputFunction.toString())
    
    let answer = []
    
     for (let i = 0; i < inputArray.length; i++) {
       answer.push(inputFunction(inputArray[i], i, inputArray))
     }
     return answer
};
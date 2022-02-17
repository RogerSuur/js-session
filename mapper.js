// Instructions
// Create a map function that takes an array as first argument, a function as second, and that works like the method .map

// Create a flatMap function that takes an array as first argument, a function as second, and that works like the method .flatMap
//flatMap([1, 2, 3], (n) => [n, n]),
    //[1, 1, 2, 2, 3, 3]

function map(inputArray, inputFunction){
    //const array1 = ['a', 'b', 'c'];
    let answer = []
    
     for (let i = 0; i < inputArray.length; i++) {
       answer.push(inputFunction(inputArray[i], i, inputArray))
     }
     return answer
};

function flatMap(inputArray, inputFunction){
    //const array1 = ['a', 'b', 'c'];
    //let answer = []
    //let notAnswer= []

    const answer = map(inputArray, inputFunction)
    return [].concat.apply([], answer)
    
    // console.log("inputArray:", inputArray)
    // console.log("inputFunction:", inputFunction)
    //  for (let i = 0; i < inputArray.length; i++) {
    //         if (Array.isArray(inputArray))
    //         {notAnswer = inputArray.flat}
    //         answer.push(inputFunction(notAnswer[i], i, notAnswer))
    //  }
     
    //  return answer
};
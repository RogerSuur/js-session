// Create three functions:

// // fold that receives an array, a function and an accumulator, 
// in this order, and applies the function in the elements of the array starting on the left.

function fold(arr, func, acc){
    let answer = acc
    //console.log(func.toString())
     for (let i = 0; i < arr.length; i++) {
      //   console.log("I", i, "arr[i]", arr[i], answer)
       answer = (func(answer, arr[i]))
     }
     return answer
};

// // foldRight that receives an array, a function and an accumulator, 
// in this order, and applies the function in the elements of the array starting on the right.

function foldRight(arr, func, acc){
    let answer = acc
   // console.log(func.toString())
     for (let i = arr.length-1; i >= 0; i--) {
     //    console.log("I", i, "arr[i]", arr[i], answer)
       answer = (func(answer, arr[i]))
     }
     return answer
};
// // reduce that works just like the method [].reduce when you don't specify an accumulator.
//  The arguments should be an array and a function. 
//  The starting value of your accumulator must be the first value of the array. 
//  If your array is less than 1 argument you should throw an error.
// // reduceRight like reduce, from the last value to the first
function reduce(arr,func){
    if (arr.length<1){
        return
    } else {
        let answer = arr[0]
   // console.log(func.toString())
     for (let i = 1; i < arr.length; i++) {
     //    console.log("I", i, "arr[i]", arr[i], answer)
       answer = (func(answer, arr[i]))
     }
     return answer
    }
};

// reduceRight like reduce, from the last value to the first

// Example:

// const adder = (a, b) => a + b
// fold([1, 2, 3], adder, 2) // returns 8 (2 + 1 + 2 + 3)
// foldRight([1, 2, 3], adder, 2) // returns 8 (2 + 3 + 2 + 1)
// reduce([1, 2, 3], adder) // returns 6 (1 + 2 + 3)
// The use of [].reduce and [].reduceRight is forbidden for this exercise.

function reduceRight(arr, func){
    if (arr.length<1){
        return
    } else {
        let answer = arr[arr.length-1]
    console.log(func.toString())
     for (let i = arr.length-2; i >= 0; i--) {
         console.log("I", i, "arr[i]", arr[i], answer)
       answer = (func(answer, arr[i]))
     }
     return answer
    }
}
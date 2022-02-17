//adder([1, 2, 3, 4])//, 10))
//adder([9, 24, 7, 11, 3], 10) // 64
//sumOrMul([29, 23, 3, 2, 25])// 135)
//sumOrMul([18, 17, 7, 13, 25], 12)//, 278
// sumOrMul([8, 16, 7, 0, 32])// 0))
// sumOrMul([8, 16, 7, 0, 31])//, 31)
const fArr1 = [
    (x) => x + 2,
    (x) => x ** 2,
    (x) => x - 7,
    (x) => `result: [${x}]`,
  ]
  const fArr2 = [
    (x) => x + 20,
    (x) => x * 3,
    (x) => {
      return {
        result: x,
        isOdd: x % 2 === 0,
      }
    },
  ]
funcExec(fArr1, 10)//, `result: [137]`)
//funcExec(fArr2, 4) //{ result: 72, isOdd: true })


// Create three functions :
// adder that receives an array and adds its elements.

function adder(inputvalue, number) {
    //console.log("number:", number)
    //console.log("inputvalue:", inputvalue)
    var sumWithInitial = 0
    var answer

    sumWithInitial = inputvalue.reduce(function (previousValue, currentValue) {
        return previousValue + currentValue
    }, 0)
    answer = sumWithInitial
    if (number != null) {
        answer += number
    }
    //console.log(answer)
    return answer

};

// sumOrMul that receives an array and adds or multiplies its elements 
//depending on whether the element is an odd or an even number, where:
// even = multiply
// odd = add
// funcExec that receives an array of functions and executes them.

function sumOrMul(inputvalue, number = 0) {
    //console.log("number:", number)
    //console.log("inputvalue:", inputvalue)
    var sumWithInitial = 0
    if (number != null) {
        sumWithInitial += number
    }
    var answer
   // console.log("sumwithinitial", sumWithInitial)

    sumWithInitial = inputvalue.reduce(function (previousValue, currentValue) {
        if (currentValue % 2 !== 0) {
            return previousValue + currentValue
        } else {
            return previousValue * currentValue
        }
    }, number)
    answer = sumWithInitial

   // console.log("answer:", answer)
    return answer

};

// funcExec that receives an array of functions and executes them.

function funcExec(inputfunc, x) {
    var answer

    return answer = inputfunc.reduce(function (previousValue, current) {
        return current(previousValue)
    }, x)
    answer = sumWithInitial
    console.log(answer)
};
// All functions may or may not receive an extra argument that should be the initial value for the functions execution.

// Example:

// sumOrMul([1, 2, 3, 5, 8], 5)
//   // -> ((((5 + 1) * 2) + 3) + 5) * 8
//   // -> 160
// Special instruction
// The goal of this exercise is to learn to use reduce, as such all your solution MUST use reduce

// Notions
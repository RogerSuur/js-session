// Instructions
// Go buy groceries!!!

// You have a grocery cart with some items you need. The items will have a key being the name and a value that is the amount in grams.

// Create 3 functions that works like the .filter, .map and .reduce array method but for the values of your grocery cart.

// filterValues filters the values of your grocery cart.
// mapValues changes the values of your grocery cart.
// For the above function the callback function should accepts only the element in the arguments, this being the current element being processed.

// reduceValues that will reduce your grocery cart. The callback function should accepts only the accumulated value and the current value.

function filterValues(input, func) {
    const values = Object.values(input)
    const keys = Object.keys(input)
    let answer = {}

    values.forEach(function (el, index) {
        
        if (func(el)) {
            answer[keys[index]]= values[index]
        }
    });
    return answer
};


function mapValues(input, func) {
    // console.log("input", input)
    // console.log("func", func)

    const values = Object.values(input)
    const keys = Object.keys(input)

    let answer = {}
    values.forEach(function (el, index) {
        
        //if (func(el)) {
            answer[keys[index]]= func(values[index])
        //}
    });
    return answer

};

function reduceValues(input, func, initial = 0) {

   console.log(input)
   console.log(func)
   const values = Object.values(input)
   const keys = Object.keys(input)

   let answer = initial
   values.forEach(function (el, index) {
       
       //if (func(el)) {
           answer = func(answer, el)
       //}
   });
    console.log("answer", answer)
    return answer
};
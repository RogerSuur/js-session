// Create a function for each rounding math functions:

// round (like Math.round)
// ceil (like Math.ceil)
// floor (like Math.floor)
// trunc (like Math.trunc)
// Some restrictions apply:

// You may not use strings conversion to do it
// No bitwise operator

//console.log(round(-3.2442352314))
//console.log("trunc:", trunc(42.84)) //42
//console.log("trunc", trunc(-0.123)) // -0
//console.log("floor:", floor(42.84)) //42
//console.log("floor:", floor(5.05)) //5
//console.log("floor:", floor(-5.05)) //-6
//console.log("floor:", floor(5)) // 5
//console.log("floor:", floor(-1.05)) //-2
//console.log("ceil", ceil(.95)); // 1
//console.log("ceil", ceil(4)); // 4
//console.log("ceil", ceil(7.004)); // 8
//console.log("ceil", ceil(-0.95)); // -0
//console.log("ceil", ceil(-4)); // -4
//console.log("ceil", ceil(-7.004)); // -7

function round(num) {
    var remainder = num % 1
    console.log(remainder)
    if(num > 0 ){
        if (remainder > 0.5) {
            return (trunc(num) + 1)
        } else {
            return trunc(num)
        }
    } else {
        if (remainder < -0.5) {
            return (trunc(num) - 1)
        } else {
            return trunc(num)
        } 
    }
};

function ceil(num) {
    if (num % 1 !== 0) {
        return trunc(num) + 1
    } else {
        num - num % 1 - 1
    }
};

function floor(num) {
    if (num === 0) { return 0 
    } else {
    return (num > 0) ? trunc(num) : trunc(num) - 1
    }
};

function trunc(num) {
    return num - num % 1
};


// Create a repeat function that takes a string and a number as parameters
//  and return the repeated string by the given number 
//  Like the method developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
//  Of course you may not use the method directly

//console.log(repeat('ha',3));
//console.log(repeat('a', 3));

function repeat(a,b) {
    var result = '';
    for (let index = 1; index <= b; index++) {      
        result= result + a;
    }
};

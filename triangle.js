// Create a triangle function that takes a string and a 
//number as parameters and return a triangle constructed
//by the string passed as argument and with the depth of the 
//number passed as argument.

// Output example
// * character and depth of 5:
// *
// **
// ***
// ****
// *****
// No new line in last line
//console.log(triangle('#', 4));
//(triangle('a', 5));
//(triangle('+', 10));

function triangle(string, depth) {
    var counter = ''
    var answer = ''
    for (let i = 0; i <= depth; i++) {
        counter += string
        
        if (i !== depth-1) {
            answer += counter
            answer += '\n'
        }
        //answer += counter
    }
    return answer
};
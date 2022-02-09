// Create a pyramid function that takes a string and a number
//  as parameters and return a pyramid constructed by the
//  string passed as argument and with the depth of the number
//   passed as argument.

// Just like triangle

// Output example
// * character and depth of 5 :
//     *
//    ***
//   *****
//  *******
// *********

console.log(pyramid('a', 5));
//console.log(pyramid('+', 10));
//console.log(pyramid('#', 40));

function pyramid(string, depth) {
    var counter = ''
    var answer = ''
    var space = ' ' 
    for (let i = 1; i <= depth; i++) {
        counter += space.repeat(depth-1)
        counter += string.repeat(i)
        counter += space
        answer += counter
        counter = ''
        if (i !== depth) {
            
            answer += '\n'
        }
        //answer += counter
    }
    return answer
};
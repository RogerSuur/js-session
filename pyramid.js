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
    let n = depth;
    let answer = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n - i; j++) {
            answer += " ";
        }
        for (let k = 0; k < 2 * i - 1; k++) {
            answer += string;
        }
        answer += "\n"
    }
return answer
};
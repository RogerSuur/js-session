// Create a reverse function that works on both arrays and strings.

// Like [].reverse() but working also for strings (without using the actual method)

console.log(reverse([1, 2, 3]));

function reverse(input) {
    if (typeof input === "string") {
        var answer = ""
    } else {
        var answer = []
    }

    for (let i = 1; i <= input.length; i++) {
        if (typeof input === "string") {
            answer += input[input.length-i]
        } else {
            answer.push(input[input.length-i])
        }
    }
    return answer
}
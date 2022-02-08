// Create a reverse function that works on both arrays and strings.

// Like [].reverse() but working also for strings (without using the actual method)

console.log(reverse([1, 2, 3]));

function reverse(input) {

    if (typeof input === "string") {
        var answer = ""
    } else {
        var answer = []
    }

    for (let i = input.length; i >= 0; i--) {
        if (typeof input === "string") {
            console.log(i)
            answer += input[i]
        } else {
            answer.push(input[i])
        }
    }
    return answer
}
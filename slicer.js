// Create the slice function that works like Array.slice and String.slice

// It takes an additional first argument which is the string or the array

//console.log(slice('abcdef', 2)); //cdef
//console.log(slice('abcdef', -2)); //ef
//console.log(slice('abcdef', 0, 2)); //ab
//console.log(slice('abcdef', 0, -2)); // === 'abcd'
//console.log(slice('abcdef', 2, 4)); //=== 'cd'))
//console.log(slice('abcdef', -3, -1)); //=== 'de')

function slice(input, start = 0, end = 0) {
    if (typeof input === "string") {
       var answer = ""
    } else {
       var answer = []
    }

    var startAt = start
    if (end === 0){
        var endAt = input.length
    } else {
        var endAt = end
    }
    if (start < 0) {
        startAt = (input.length + start)
        endAt = input.length
    }
    if (end < 0) {
        endAt = (input.length + end)
    }

    for (let i = startAt; i < (endAt) ; i++) {
        if (typeof input === "string") {
            //console.log(i)
            answer += input[i]
        } else {
            answer.push(input[i])
        }
    }
    return answer
    //console.log(answer)
};


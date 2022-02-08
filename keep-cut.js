// Create the cutFirst function that takes a string and remove the 2 first characters.

// Create the cutLast function that takes a string and remove the 2 last characters.

// Create the cutFirstLast function that takes a string as parameter and remove the 2 first characters and 2 last characters.

// Create a keepFirst function that takes a string as parameter and return the string only keeping the 2 first characters.

// Create a keepLast function that takes a string as parameter and return the string only keeping the 2 last characters.

// Create a keepFirstLast function that takes a string as parameter and only keep 2 first characters and 2 last characters.
function cutFirst(input){
    return input.slice(2)
}

function cutLast(input){
    return  input.slice(0, -2)
}

function cutFirstLast(input){
    return  input.slice(2, input.length-2)
}

function keepFirst(input){
    return  input.slice(0, 2)
}

function keepLast(input){
    return  input.slice(input.length-2)
}

function keepFirstLast(input){
    var answer = ''
    answer = input.slice(0,2)
    answer = answer + input.slice(4) 
    return answer
}

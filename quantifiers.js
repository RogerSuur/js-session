// Create three functions that receive an array and a function each:

// every that returns true if every element of the array respects the condition of the received function and false otherwise.
// some that returns true if at least one element of the array respects the condition of the received function and false otherwise.
// none that returns true if none of the elements of the array respects the condition of the received function and false otherwise.
// The use of [].every and [].some is forbidden for this exercise.

function every(arr,func){
    for(let i = 0;i<arr.length;i++){
        if(!func(arr[i],i,arr)){
            return false
        }
    }
    return true
}

function some(arr, func){
    for(let i = 0;i<arr.length;i++){
        if(func(arr[i],i,arr)){
            return true
        }
    }
    return false

};

function none(arr, func){
    for(let i = 0;i<arr.length;i++){
        if(func(arr[i],i,arr)){
            return false
        }
    }
    return true

};
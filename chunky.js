// Create the chunk function which has as parameters an array 
//that will be split and an integer which is the size that the array should be split.

// The function will return an array of elements divided into groups of the length of the given size.
//  If the array cannot be split evenly, the final part will be the remaining elements.

console.log(chunk(['a', 'b', 'c', 'd'], 2)) //[['a', 'b'], ['c', 'd']]))
console.log(chunk(['a', 'b', 'c', 'd'], 3)) // [['a', 'b', 'c'], ['d']]


function chunk(array, chunksize) {
    var answer = [[]]
    var chunkNr = 0

    for (let i = 0; i < array.length; i++) {
        console.log(i, chunkNr)
        if (chunksize %i === 0 && i !==1){   
            chunkNr ++
            answer.push([])
        }
        answer[chunkNr].push(array[i])
    }
    return answer
};
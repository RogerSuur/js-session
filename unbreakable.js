// Implement 2 functions:

// split that works like the string method .split but take the string as it's first argument.

// join that works like the string method .join but take the array as it's first argument.

//console.log(("first test:", split('a b c', ' '))); // ['a', 'b', 'c'])))
//console.log(("secont test:", split('ggg - ddd - b', ' - '))); // ['ggg', 'ddd', 'b'])))
//console.log("third test:", split('ee,ff,g,', ',')); // ['ee', 'ff', 'g', '']))


console.log(join(['ee', 'ff', 'g', ''], ','))// === 'ee,ff,g,')
console.log(join(['ggg', 'ddd', 'b'], ' - ')) //=== 'ggg - ddd - b')
console.log(join(['a', 'b', 'c'], ' ')) //=== 'a b c')

function split(inputArg, splitter) {
    var answer = [];
    //console.log(inputArg)
    //console.log(splitter)
    var longerSplitter = splitter.length
    var current = ''
    //console.log(inputArg.slice(longerSplitter,inputArg.length))


    for (let i = 0; i < inputArg.length; i++) {
        //if(inputArg[i] !== splitter && splitter.length === 1){ //use slice
        
        if (inputArg.slice(i,i + longerSplitter) === splitter){
            answer.push(current)
            current = ''
            i += longerSplitter-1
        } else {
            current += (inputArg[i])
        }
        if (i===(inputArg.length-1)){
            //console.log(current)
            //console.log(inputArg[i])
            //answer.push(inputArg[i])
            answer.push(current)
        }
    }
    return answer
};

function join(inputArg, splitter) {
    var answer = ''
    inputArg.forEach((element, idx) => {
        //console.log(element)
        answer += element
        //console.log(idx)
        if (idx!==inputArg.length-1){
        answer += splitter
        }
    });
    return answer
};
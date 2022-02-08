// Implement 2 functions:

// split that works like the string method .split but take the string as it's first argument.

// join that works like the string method .join but take the array as it's first argument.

console.log(("first test:", split('a b c', ' '))); // ['a', 'b', 'c'])))
//console.log(("secont test:", split('ggg - ddd - b', ' - '))); // ['ggg', 'ddd', 'b'])))
//console.log("third test:", split('ee,ff,g,', ',')); // ['ee', 'ff', 'g', '']))

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
        if (i===(inputArg.length-1) && inputArg[i] !== splitter){
            console.log(current)
            console.log(inputArg[i])
            answer.push(inputArg[i])
        }
    }
    return answer
};

function join(inputArg) {

};
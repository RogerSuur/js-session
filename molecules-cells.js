// Write two functions:

// RNA that given a DNA strand it must return is complement RNA
// DNA that given a RNA strand it must return is complement DNA (invert RNA)
// Since both strands are a sequence of nucleotides. It will be given the four nucleotides and its complements

// DNA | RNA
//  G  -  C
//  C  -  G
//  T  -  A
//  A  -  U

console.log(RNA('')); //, ''))
console.log(RNA('TAGC')); //, 'AUCG'))
console.log(RNA(DNA('AUCG'))); //, 'AUCG'))
console.log(DNA('')); // ''))
console.log(DNA('AUCG')); //, 'TAGC'))
console.log(DNA(RNA('TAGC'))); // 'TAGC'))

function RNA(inputString){
    var answer = ''
    // make 2 objects with keys, loop over and get the right return
    const rnaObject = {
        G : 'C',
        C : 'G',
        T : 'A',
        A : 'U',
    }
    //console.log(rnaObject[C])
    for (let i = 0; i < inputString.length; i++) {
        
        //console.log("INPUT:",inputString[i], "RNA:",rnaObject[inputString[i]])
          //  if (inputString[i]===rnaObject[inputString[i]]){
                answer += rnaObject[inputString[i]]

            //}
    }
    return answer

};

function DNA(inputString){
    var answer = ''

    const rnaObject = {
        C : 'G',
        G : 'C',
        A : 'T',
        U : 'A',
    }
    //console.log(rnaObject[C])
    for (let i = 0; i < inputString.length; i++) {
        
        //console.log("INPUT:",inputString[i], "RNA:",rnaObject[inputString[i]])
          //  if (inputString[i]===rnaObject[inputString[i]]){
                answer += rnaObject[inputString[i]]

            //}
    }
    return answer
};
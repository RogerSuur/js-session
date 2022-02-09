// Make a function ionOut that receives a string and returns an array with every word containing 'ion' following a t, without the 'ion'.
//console.log(ionOut('attention, direction')); //, ['attent', 'direct']))
//console.log(ionOut('promotion, provision')); //, ['promot']))
//console.log(ionOut('transfusion')); //, []))


function ionOut(inputString) {
    var str = inputString
    var fullWord = /(\w+)(?:tion)/g;
    var cuttedPart = /(?:tion)/g
    var found = str.match(fullWord);
    //console.log(found)
   var result = []
    if (found === null) {
        return result
    }
    for (let i = 0; i < found.length; i++) {
        //console.log(found[i])
        result.push(found[i].replace(cuttedPart, 't'))
    }
    return result
};
// Make a function ionOut that receives a string and returns an array with every word containing 'ion' following a t, without the 'ion'.
console.log(ionOut('attention, direction')); //, ['attent', 'direct']))
console.log(ionOut('promotion, provision')); //, ['promot']))
console.log(ionOut('transfusion')); //, []))


function ionOut(inputString) {
    var str = inputString
    var re = /(tion)/g;
    var found = str.replace(re, '');
    return found
};
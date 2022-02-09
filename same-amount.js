// Create a sameAmount function that takes three parameter, a data string and 2 regexes.

// The objective is to confirm that the second and the third parameter matched the same amount of times in the first parameter.


//console.log(sameAmount('hello how are you', /l/, /e/))
//console.log(sameAmount('hello how are you', /h/, /e/))
//console.log(sameAmount('hello how are you', /he/, /ho/))

//console.log(sameAmount(data, /i/, /p/))
//console.log(!sameAmount(data, /h/, /w/))
//console.log(sameAmount(data, /qqqq /, /qqqqqqq/))
//console.log(!sameAmount(data, /q /, /qqqqqqq/))
//console.log(sameAmount(data, /fs[^q]/, /q /))
//console.log(sameAmount(data, /^[qs]/, /^[gq]/))
//console.log(sameAmount(data, /j/, /w/))
//console.log(!sameAmount(data, /j/, / /))
//console.log(sameAmount(data, /fs./, /jn./))

function sameAmount(inputString, secondParam, thirdParam) {
    var re2 = secondParam;
    var re3 = thirdParam;
    //console.log(re2)

    const str = inputString;
    
    var found2 = str.match(re2);
    var found3 = str.match(re3);

    //console.log(found2)
    //console.log(found3)

    if (str.match(re2).length=== str.match(re3).length){
        return true
    } else if (str.match(re2)=== null || str.match(re3) === null) {
        return false
    }
};
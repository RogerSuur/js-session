// Create a sameAmount function that takes three parameter, a data string and 2 regexes.

// The objective is to confirm that the second and the third parameter matched the same amount of times in the first parameter.


//console.log(sameAmount('hello how are you', /l/, /e/))
//console.log(sameAmount('hello how are you', /h/, /e/))
//console.log(sameAmount('hello how are you', /he/, /ho/))
//console.log(sameAmount(data, /i/, /p/))
//console.log(sameAmount(`qqqqqqq q qqqqqqqfsqqqqq q qq  qw w wq wqw  wqw
//ijnjjnfapsdbjnkfsdiqw klfsdjn fs fsdnjnkfsdjnk sfdjn fsp fd`, /h/, /w/))
console.log(sameAmount(data, /qqqq /, /qqqqqqq/))
//console.log(sameAmount(`qqqqqqq q qqqqqqqfsqqqqq q qq  qw w wq wqw  wqw
//ijnjjnfapsdbjnkfsdiqw klfsdjn fs fsdnjnkfsdjnk sfdjn fsp fd`, /q /, /qqqqqqq/))
//console.log(sameAmount(data, /fs[^q]/, /q /))
//console.log(sameAmount(data, /^[qs]/, /^[gq]/))
//console.log(sameAmount(data, /j/, /w/))
//console.log(!sameAmount(data, /j/, / /))
//console.log(sameAmount(data, /fs./, /jn./))


function sameAmount(inputString, secondParam, thirdParam) {
    const re2 = new RegExp(secondParam, 'g');
    const re3 = new RegExp(thirdParam, 'g');
   

    const str = inputString;
    
    const found2 = str.match(re2);
    const found3 = str.match(re3);

    if ((found2 != null && found3 != null) && ((found2).length === (found3).length)){
        return true
    } else {
        return false
    } 
};
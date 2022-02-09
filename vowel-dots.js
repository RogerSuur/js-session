// Create a function called vowelDots that receives a string and adds a . after every vowel 
// ('y' is not considered a vowel here) using a regex called vowels.

//t(({ eq }) => vowels.test('a') && !vowels.test('c'))
//console.log(vowelDots('something')); //, 'so.me.thi.ng'))
//console.log(vowelDots(''));//, ''))
//console.log(vowelDots('rhythm'));//, 'rhythm'))
//console.log(vowelDots('Algorithm'));//, 'A.lgo.ri.thm'))

function vowelDots(inputString){
   var str = inputString;
   var vowels = /[AEIOUaeiou]/g;
   // var found = str.match(re);
   // console.log(found)
   const answer = (str.replace(vowels, '$&.'))

   //if (str.match(/[aeiou]/gi)) {
   //    return str.match(/[aeiou]/gi) + '.'
   //} 
   return answer
};


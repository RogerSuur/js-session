// Create a filter function that takes an array as first argument, a function as second, and that works like the method [].filter
// peab kontrollima kas annab true v false
// Create a reject function that takes an array as first argument, a function as second, and that works like the reject function from lodash.
//muuda tingimus vastupidiseks
// Create a partition function that takes an array as first argument, a function as second, and that works like the partition function from lodash.

function filter(arg, func){
    let answer = []
    
     for (let i = 0; i < arg.length; i++) {
       if(func(arg[i], i , arg)){
        answer.push(arg[i])
       }
    }
     return answer
};
function reject(arg, func){
    let answer = []
    
     for (let i = 0; i < arg.length; i++) {
       if(!func(arg[i], i , arg)){
        answer.push(arg[i])
       }
    }
     return answer
};

function partition(arg, func){
    let answer = []
    let answer2 = []
    
     for (let i = 0; i < arg.length; i++) {
       if(func(arg[i], i , arg)){
        answer.push(arg[i])
       }
    }
    for (let i = 0; i < arg.length; i++) {
        if(!func(arg[i], i , arg)){
         answer2.push(arg[i])
        }
     }
     return [answer , answer2]

}
// Create the get function. It takes 2 arguments:

// src an object
// path a string
// And returns the value at the given string path.

// Example:
// const src = { nested: { key: 'peekaboo' } }
// const path = 'nested.key'
// get(src, path) // -> 'peekaboo'

//Tests
// work with simple key / values
console.log(get({ key: 'value' }, 'key')); // === 'value')
// work with nested objects
//console.log(get({ nested: { key: 'value' }})); //'nested.key') === 'value')
// return undefined without error if the value do not exist
//console.log(get({ key: 'value' }, 'nx')); //=== undefined)
//console.log(get({ nested: { key: 'value' } })); //, 'nested.nx') === undefined)
//console.log(get({ nested: { key: 'value' } })); // 'nx.nx') === undefined)
// work with nested arrays too
//console.log(get({ a: [{ b: t }] }, 'a.0.b'));// === t)
//console.log(get({ a: [{ b: t }] }, 'a.0.b.toString')); //=== t.toString

function get(src, path){    
   let pathArr = path.split('.')
   
   pathArr.forEach(e => {
       if (src === 'undefined'){
           return src
       }
       src[e]
    });

   return src
};
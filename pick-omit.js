// Create a pick function that takes an object and a string or array of strings.
// This function returns a new object that contains only the key/value pairs, 
// whose key matches with the string or a string in the array, from the object passed as an argument.

function pick(obj,input){
    //console.log("input", input)
    //console.log("obj", obj)
    
    var inputArray = []
    inputArray = input
    if (typeof input === 'string') {
        inputArray = [input]
    }
    
   // console.log("inputArray", inputArray)
    //console.log("inputString", inputString)
    var retobj = {};
  for(var key in obj){
      //console.log("obj key", key)
    // if (obj.hasOwnProperty(key)) {
        if(inputArray.includes(key)){
    retobj[key] = obj[key];
    //}
  }
  }
  return retobj;
};

// Create a omit function that takes an object and a string or array of strings. 
// This function returns a new object that contains only the key/value pairs, 
// whose key doesn't match with the string or a single string in the array, from the object passed as an argument.

function omit(obj, input){
    var inputArray = []
    inputArray = input
    if (typeof input === 'string') {
        inputArray = [input]
    }
   console.log("inputArray", inputArray)
    console.log("obj", obj)
    var retobj = {};

    for(var key in obj){
        var arrayD = (element) => element === key

        if (inputArray.findIndex(arrayD) === -1){
            console.log("findIndex:", arrayD)
           // console.log("element", element, "key", key)
            
            if (obj.hasOwnProperty(key)) {   
                retobj[key] = obj[key];
                }
        }
    }

    return retobj;

}

//   for(var key in obj){
//       inputArray.forEach(el => {
//           //console.log("key", key, "el", el)
//           if (key !== el){
//               console.log("key", key,"not matching:", "el", el)
//               var doesntMatch = true
//             retobj[key] = obj[key]
//           }
//       });
//         if(!inputArray.includes(key)){
//     retobj[key] = obj[key];
  
//   }

// Instructions
// Create a function called invert that takes an object and returns it with its keys and values inverted.

function invert (obj){
    var retobj = {};
  for(var key in obj){
    if (obj.hasOwnProperty(key)) {   
    retobj[obj[key]] = key;
    }
  }
  return retobj;
}
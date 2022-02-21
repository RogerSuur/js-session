function checkNested(obj /*, level1, level2, ... levelN*/) {
    var args = Array.prototype.slice.call(arguments, 1);
    console.log(args)
    for (var i = 0; i < args.length; i++) {
      if (!obj || !obj.hasOwnProperty(args[i])) {
        return false;
      }
      obj = obj[args[i]];
      console.log("i",i, "obj", obj)
    }
    console.log("full obj", obj)
    return true;
}
  
  var test = { a: { b: [1, 2], c: { d: 2 } } };
  
 console.log( checkNested(test, 'b: [ 1, 2 ]', 'c: { d: 2 }')); // true
 //console.log( checkNested(test, 'a', 'c')) // false
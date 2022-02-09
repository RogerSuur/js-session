// Add new function properties to the object is to check a value type

// is.num value is a number
// is.nan value is NaN
// is.str value is a string
// is.bool value is a boolean
// is.undef value is undefined
// is.def value is defined
// is.arr value is an array
// is.obj value is a simple object or null objects
// is.fun value is a function
// is.truthy value is truthy
// is.falsy value is falsy

is.num = (n) => typeof n === 'number';
is.nan = (n) => typeof n === NaN;
is.str = (n) => typeof n === 'string';
is.bool = (n) => typeof n === boolean;
is.undef = (n) => typeof n === undefined;
is.def = (n) => typeof n === 'string';
is.arr = (n) => typeof n === Array;
is.obj = (n) => typeof n === null;
is.fun = (n) => typeof n === function(){};
is.truthy = (n) => typeof n === true;
is.falsy = (n) => typeof n=== false;
// Create 3 functions:

// multiply that act like the * operator without using it
// divide that do an integer division without using /
// modulo that act like the % operator without using it

console.log('positiivne', divide(78, 34));
console.log('yks negatiivne', divide(-78, 34));
console.log('teine negatiivne', divide(78, -34));
console.log('mõlemad negatiivsed', divide(-78, -34));

function multiply(num1, num2) {
    if (num1 === 0) {
        return 0;
    }
    var counter = Math.abs(num1);
    var result = 0;
    while (counter > 0) {
        result = result + Math.abs(num2);
        counter--;
    }
    if (num1 < 0 && num2 < 0) {
        return result
    }
    if (num1 < 0) {
        return -result
    }
    if (num2 < 0) {
        return -result
    }
    return result;
};

function divide(num1, num2) {
    var counter = Math.abs(num2);
    var result = 0;
    var posNum1 = Math.abs(num1)
    while (posNum1 > counter) {
        result++;
        posNum1 = posNum1 -counter;
    }
    if (num1 < 0 && num2 < 0) {
        return result
    }
    if (num1 < 0) {
        return -result
    }
    if (num2 < 0) {
        return -result
    }
    return result;

};

function modulo() {

};

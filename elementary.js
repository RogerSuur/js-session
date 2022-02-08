// Create 3 functions:

// multiply that act like the * operator without using it
// divide that do an integer division without using /
// modulo that act like the % operator without using it

console.log('positiivne', multiply(3,2));
console.log('yks negatiivne', multiply(-3,2));
console.log('teine negatiivne', multiply(3,-2));
console.log('mõlemad negatiivsed', multiply(-3,-2));

function multiply(num1,num2) {
    if (num1 === 0) {
        return 0;
      }
        var counter = Math.abs(num1);
        var result = 0;
      while (counter > 0) {
        result = result + Math.abs(num2);
        counter --;
      }
      if (num1 <0 && num2<0){
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

function divide(){

};

function modulo(){

};

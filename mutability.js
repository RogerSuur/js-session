// Create three copies of the person object called clone1, clone2 and samePerson.

// Increase by one the property age of person and set his country to 'FR'.

// A way must be found to have clone1 and clone2 keep the original values while 
//samePerson changes with person.


const person = {
    name: 'Rick',
    age: 77,
    country: 'US',
};

let clone1 = person;
let clone2 = person;

person.age = person.age+1;
person.country = 'FR';

let samePerson = person;
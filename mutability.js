// Create three copies of the person object called clone1, clone2 and samePerson.

// Increase by one the property age of person and set his country to 'FR'.

// A way must be found to have clone1 and clone2 keep the original values while 
//samePerson changes with person.

const clone1 = {
    name: 'Rick',
    age: 77,
    country: 'US',
};

const clone2 = {
    name: 'Rick',
    age: 77,
    country: 'US',
};

var samePerson = {
    name: '',
    age: null,
    cointru: '',
};

person.age = person.age+1;
person.country = 'FR';

samePerson = person;
console.log(samePerson)
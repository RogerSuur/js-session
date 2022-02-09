// Create 4 regular expression in variables:

// normal matches with the expression 'hi'.

// begin matches with the expression 'hi', only when it is in the beginning.

// end matches with the expression 'hi', only when it is in the end.

// beginEnd matches with the expression 'hi', only when it is exactly hi.


const normal = /hi/;

var begin = 'hi'.match(regex);

var end ='hi'.match(regex);

var beginEnd ='hi'.match(regex);
// Create 4 regular expression in constiables:

// normal matches with the expression 'hi'.

// begin matches with the expression 'hi', only when it is in the beginning.

// end matches with the expression 'hi', only when it is in the end.

// beginEnd matches with the expression 'hi', only when it is exactly hi.


const normal = /hi/;

const begin = /^hi/;

const end = /hi$/;

const beginEnd = /^hi$/;
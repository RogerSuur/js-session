// <!-- Instructions
// You've been attributed the task to find the main architect of the Tower of Pisa before he achieves his plans, avoiding us nowadays all those lame pictures of people pretending to stop it from falling.

// You arrive at the architects' chamber to find him, but all you have in front of you is a bunch of unknown people. Step by step, with the little information you have, gather information and figure out by elimination who he is.

// Launch the provided HTML file in the browser to begin your investigation.
// On top of the webpage, each of the four buttons fires a function:

// Write the body of the getArchitects function, which returns an array containing 2 arrays of HTML elements:
// the first array contains the architects, all corresponding to a <a> tag
// the second array contains all the non-architects people

// Write the body of the getClassical function, which returns an array containing 2 arrays of HTML elements:
// the first array contains the architects belonging to the classical class
// the second array contains the non-classical architects

// Write the body of the getActive function, which returns an array containing 2 arrays of HTML elements:
// the first array contains the classical architects who are active in their class
// the second array contains the non-active classical architects

// Write the body of the getBonannoPisano function, which returns an array containing:
// the HTML element of the architect you're looking for, whose id is BonannoPisano
// an array which contains all the remaining HTML elements of active classical architects -->

export function getArchitects() {
    var fullArchitects = document.getElementsByTagName('a')
    var nonArchitects = document.getElementsByTagName('span')

    return [Array.from(fullArchitects), Array.from(nonArchitects)]

};

export function getClassical() {
    var fullClassicalArchitects = document.getElementsByClassName('classical');
    var nonOtherArchitects = document.querySelectorAll('a:not(.classical)');
    //var fullOtherArchitects = document.getElementsByClassName('modern', 'baroque', 'baroque active', 'modern active')
    //fullOtherArchitects = document.querySelectorAll('baroque')

    return [Array.from(fullClassicalArchitects), Array.from(nonOtherArchitects)]
};

export function getActive() {

    var activeClassicalArchitects = document.getElementsByClassName('classical active');
    var nonActiveClassicalArchitects = document.querySelectorAll('a.classical:not(.active)');
    
    return [Array.from(activeClassicalArchitects), Array.from(nonActiveClassicalArchitects)]

};

export function getBonannoPisano() {

    var architectBonannoPisano = document.getElementById('BonannoPisano');
    var nonBonannoPisano = document.querySelectorAll('classical active');
    
    return [(architectBonannoPisano), Array.from(nonBonannoPisano)]


};
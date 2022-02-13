// Like an inspired Beethoven who's going to write his Moonlight Sonata, you're about to compose a colourful symphony of letters with your keyboard.

// Write the function compose:

// Make it fire every time a key is pressed
// Create a new div with the class note when a letter of the lowercase alphabet is pressed, 
//which has a unique background color
// generated using the key of the event, and displays the corresponding letter pressed
// If the pressed key is the Backspace one, delete the last note
// If the pressed key is the Escape one, clear all the notes

export function compose() {
    document.addEventListener("keydown", mozart)
};

function mozart(info) {
    //console.log(info)
    var lowercaseString = 'qwertyuiopasdfghjklzxcvbnm'
    const colors = [
        'indianred',
        'lightcoral',
        'salmon',
        'darksalmon',
        'lightsalmon',
        'crimson',
        'red',
        'firebrick',
        'darkred',
        'pink',
        'lightpink',
        'hotpink',
        'deeppink',
        'mediumvioletred',
        'palevioletred',
        'orange',
        'coral',
        'tomato',
        'orangered',
        'darkorange',
        'yellow',
        'gold',
        'lightyellow',
        'lemonchiffon',
        'lightgoldenrodyellow',
        'papayawhip',
    ]

    var notes = document.getElementsByClassName('note')

    if (lowercaseString.includes(info.key)) {
        var newDiv = document.createElement('div')
        newDiv.textContent = info.key
        newDiv.setAttribute('class', 'note')
        newDiv.setAttribute('style', ('background: ' + colors[lowercaseString.indexOf(info.key)] + ';'))
        document.body.append(newDiv)
    } else if ((info.key) === 'Backspace') {
        if (notes.length > 0) {
            notes[notes.length - 1].remove()
        }
    } else if ((info.key) === 'Escape') {
        while (notes.length > 0) {
            notes[notes.length - 1].remove()
        }
    }


};
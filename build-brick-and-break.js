export function build(brickNumber) {
    // create a new div element

    // and give it some content
    //const newContent = document.createTextNode("Hi there and greetings!");
    // add the text node to the newly created div
    //brick.appendChild(newContent);
    //document.body.append(brick)


    // each brick in the middle column has to be set with the 
    // custom data attribute foundation receiving the value true

    var counter = 1

    var intervalID = setInterval(function () {
        var brick = document.createElement('div')
        document.body.append(brick)
        brick.setAttribute('id', 'brick-' + counter)
        if(counter%3===2){
            brick.setAttribute('data-foundation', true)
        }
        brick.setAttribute('data-repaired', false)
        counter++
        if (counter-1 === brickNumber) {
            clearInterval(intervalID)
        }

    }, 100);

};

export function repair(...given) {
    // write the body of that function, which receives any number of ids, 
    // and for each id, retrieves the HTML element and set a custom attribute repaired set to in progress 
    // if it is a brick situated in the middle column, and true if not
   //console.log("ids", ids)
   //array.from(ids) = given
    var ids = Array.from(given)
    console.log(ids)

    for (let i = 0; i < ids.length; i++) {
        let brick = document.getElementById(ids[i])
        console.log(brick)
        if((i+1)%3===2){
            /*custom attribute repaired set to in progress*/
            brick.dataset.repaired =('data-repaired', 'in progress')
        } else {
            brick.dataset.repaired = true
            //data-aaa-bbb-ccc
            //e.dataset.aaaBbbCcc
        }
    }


};

export function destroy() {

    var e = document.querySelectorAll('div')

    console.log(e)
    e[e.length - 1].remove()

    //     var el = document.getElementById('div');
    // el.remove(); // Removes the div with the 'div-02' id

    //var e = document.body.lastChild;

    // if(e.includes('div')){
    //     e.remove
    // }
    //  var el = document.querySelectorAll('brick')
    // el.remove()
};
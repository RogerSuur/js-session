import { styles } from "./pimp-my-style.data.js";

export function pimp() {
    let elem = document.querySelector("button")

    // div.classList.add("anotherclass");
    // const div = document.createElement('div');
    // div.className = 'foo';

    // // our starting state: <div class="foo"></div>
    // console.log(div.outerHTML);
    //var pimpOrUnPimp = Boolean;
    var i = elem.classList.length
    //elem.classList.add('pimp')
    if (elem.classList.contains('unpimp')) {
        console.log("eemaldab", i, elem)
     elem.classList.remove(styles[i-3])
     //elem.classList.remove(styles[i-3])
  } else {
    console.log("lisab", elem, i)
    elem.classList.add(styles[i-1]);
  }

    if (i===15){
        elem.classList.add('unpimp')
       // elem.classList.toggle("unpimp", true);
    }
    if (i === 3&& elem.classList.contains('unpimp')){
        elem.classList.remove('unpimp')
    }
    //if (pimpOrUnPimp ){
    // if(document.classList.querySelector('pimp')){
    // console.log(elem, i)
    // elem.classList.add(styles[i-1]);
    // }
    
//   if (document.getElementsByTagName('pimp')) {
//         console.log("siin")
//      elem.classList.remove(styles[i-1])
//   }
       // console.log(elem, i)
        //elem.classList.remove(styles[i-1])
    //}
    // elem.classList.add("two");
    // elem.classList.add("three");
};

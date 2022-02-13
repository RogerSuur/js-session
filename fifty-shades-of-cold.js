import { colors } from "./fifty-shades-of-cold.data.js";

export function generateClasses() {
    const newStyleTag = document.createElement('style')

    //Write the generateClasses function which creates a <style> tag in the <head> tag and
    //     generates, for each color of colors, a class setting the background attribute 
    //and taking the color as value, like following:
    // .blue {
    //   background: blue;
    // }

    for (let i = 0; i < colors.length; i++) {
       // console.log(i, colors[i])
        newStyleTag.textContent += ('.' + colors[i] + '{\nbackground: ' + colors[i] + ';' + '\n}\n')
    };

    document.head.append(newStyleTag);
    //copied 
    // const newStyle = document.createElement('style')

    // colors.forEach(e => {
    //     newStyle.textContent += '.' + e + '{\nbackground: ' + e + '\n}\n' 
    // });

    // document.head.append(newStyleTag);
};

export function generateColdShades() {

    //     Write the generateColdShades function which creates a <div> for each color of the colors array whose 
    //     name contains aqua, blue, turquoise, green, cyan, navy or purple.
    // Each <div> must have the corresponding generated class and display the name of the color, like following:
    // <div class="blue">blue</div>
     const coldShades = ['aqua', 'blue', 'turquoise', 'green', 'cyan', 'navy', 'purple']

     for (let i = 0; i < colors.length; i++) {
         for (let j = 0; j < coldShades.length; j++) {
             if(colors[i].includes(coldShades[j])){
               const newStyle = document.createElement('div')
               newStyle.setAttribute('class', colors[i])
               newStyle.textContent = colors[i]
                 //console.log("matchib", i, colors[i], j, coldShades[j],)
                 document.body.append(newStyle)
             }
             
         }
     }
   // document.createElement('div')

    //copied
    // const coldShades = ['aqua', 'blue', 'turquoise', 'green', 'cyan', 'navy', 'purple'];

    // colors.forEach(c => {
    //     for (let i = 0; i < coldShades.length; i++) {
    //         if (c.incldes(coldShades[i])){
    //             const newDiv = document.createElement('div');
    //             newDiv.setAttribute('class', c)
    //             newDiv.textContent = c
    //             document.body.append(newDiv);
    //             break;
    //         }
    //     }
    // });

};

export const choseShade = (shade) => {

//     The function choseShade is triggered when clicking on a div.
// Write the body of this function, which receives the shade of the clicked element as argument, 
// and replaces all the other elements class by the chosen shade.

    var arr = Array.from(document.getElementsByTagName('div'))

    arr.forEach(e => {
        e.classList.replace(e.classList, shade)
    })

// let elem = document.querySelectorAll('div')
//     for(let i = 0;i<colors.length;i++){
//         let style = elem[i].className
//         let flag = elem[i].classList.contains(d)
//         if(!flag){
//             elem[i].classList.remove(style)
//             elem[i].classList.add(d)
//         } 
//     }
    
};
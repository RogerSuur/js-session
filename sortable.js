const loadData = heroes => {
    const hero = [] 
    //console.log(heroes) // write your code using the data in a function
    // note that you can not access heroes before this function is called.
    //console.log("jou")
     for (let i = 0; i < heroes; i++) {
         hero.push(heroes[i]);
         //console.log(hero)
         //console.log("jou")
     const row = table.insertRow()
    const cell = row.insertCell()
         
     }
     //console.log(hero)

    const table = document.querySelector('table_id')
     console.log(table)
    
//  cell.innerText = hero[i]
}
export const { hero } 
//export var taun = console.log("jou")



// Request the file fetch, it will download it in your browser cache
fetch('https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json')
    .then((response) => response.json()) // parse the response from JSON
    .then(loadData) // .then will call the function with the JSON value
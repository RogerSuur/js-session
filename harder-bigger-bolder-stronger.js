export function generateLetters(){
    for (let i = 1; i <= 120; i++) {
        var element = document.createElement('div')
        for (var j = 0; j < 1; j++){
            var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          text += possible.charAt(Math.floor(Math.random() * possible.length));
        //document.getElementById('div').innerHTML = text;
            element.append(text)
            element.style.fontSize= i+10+'px';
            
            // font-weight has to be 300 for the first third of the letters, 400 for the second third, and 600 for the last third
            if(i<40){
                console.log(i, "font: 300")
                element.style.fontWeight = '300';
            } else if (40<=i && i<80) {
                console.log(i, "font: 400")
                element.style.fontWeight = '400';
            } else if ( i>=80) {
                console.log(i, "font: 600")
                element.style.fontWeight = '600';
            }
        }
        document.body.append(element)
    }
};

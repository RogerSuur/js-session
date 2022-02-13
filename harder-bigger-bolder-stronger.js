export function generateLetters(){
    for (let i = 1; i <= 120; i++) {
        var element = document.createElement('div')
        for (var j = 0; j < 1; j++){
            var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          text += possible.charAt(Math.floor(Math.random() * possible.length));
        //document.getElementById('div').innerHTML = text;
            element.append(text)
            //document.getElementById('div').style.fontSize = (i+1)+"px";
            element.style.fontSize= i+10+'px';
            
            // font-weight has to be 300 for the first third of the letters, 400 for the second third, and 600 for the last third
            if(i<=40){
                element.style.fontWeight = '300';
            } else if (80>=i>40) {
                element.style.fontWeight = '400';
            } else if ( i>80) {
                element.style.fontWeight = '600';
            }
        }
        document.body.append(element)
    }
};

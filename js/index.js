window.onload = init();

const color = ["Röd","Blå","Grön","Gul"];
var selecedcolor;

var score = {"score":0};

function init(){
    console.log("Hello world");
    if(localStorage.score != undefined){
        //score = json.parse(localStorage.score);
    }
    
}
randomColor.call();

function randomColor(){
    selecedcolor = color[Math.round((color.length -1) * Math.random())];
    const colorName = document.querySelector(".color-name");
    colorName.innerHTML = selecedcolor;
}

function btn(e){
    rightColor(e);
}

function rightColor(e){
    console.log(e);
    if(selecedcolor == e){
        console.log("Rätt");
        score += 1;
        console.log(score)
        window.location.reload;
        
    }
}




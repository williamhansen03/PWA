window.onload = init();

const color = ["Red","Blue","Green","Yellow"];
var selecedcolor;

var score = {"score":0};
var score2 = 0;

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

    const scoreDisplay = document.querySelector(".score");

    if(selecedcolor == e){
        console.log("Correct");
        score2 += 1;
        scoreDisplay.innerHTML = "Score: " + score2;
        randomColor();
        console.log(score2)
        
        
    }
}




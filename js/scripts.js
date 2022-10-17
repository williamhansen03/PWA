window.onload = init();

const color = ["Red","Blue","Green","Yellow", "Purple", "Orange", "Black", "White", "Aqua", "Lime", "Brown", "Pink", "Gray"];
const colorCode = ["#C82525", "#07A40B", "#0657E6", "#F3CC19"];
var selecedcolor;

var score = {"score":0};
var score2 = 0;

var timeLeft = 14;

var elem = document.getElementById('some_div');
    
var timerId = setInterval(countdown, 1000);

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
        timeLeft = 15;
        scoreDisplay.innerHTML = "Score: " + score2;
        randomColor();
        console.log(score2)
    }
    else{
        document.location.href = "gameover.html";
    }
}



function countdown() {
    if (timeLeft == -1) {
    clearTimeout(timerId);

    } 
    else {
    elem.innerHTML = ' Time: ' + timeLeft +  ' seconds ';
    timeLeft--;
    
    }
}


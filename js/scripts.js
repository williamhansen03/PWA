window.onload = init();

const color = ["Red","Green","Blue","Yellow", "Purple", "Orange", "Black", "White", "Aqua", "Lime", "Brown", "Pink", "Gray"];
const colorCode = ["#C82525", "#07A40B", "#0657E6", "#F3CC19", "#7D3C98", "#F39C12", "#000000", "#FFFFFF", "#00FFFF", "#BFFF00", "#784212", "#FFC0CB", "#555555"];

const randomBtn = [".color-one", ".color-two", ".color-tree", ".color-four"];

var score = {"score":0};
var score2 = 0;

var timeLeft = 14;

var elem = document.getElementById('some_div');
    
var timerId = setInterval(countdown, 1000);

var seleced;

var nyColor = colorCode;
var nameColor = color;

var randomNumber = 0;

var b = "";

function init(){
    console.log("Hello world");
    
}
randomColor.call();

randomBtnColor.call();

function randomColor(){
    let selecedcolor = color[Math.round((color.length -1) * Math.random())];
    const colorName = document.querySelector(".color-name");
    colorName.innerHTML = selecedcolor;
    seleced = colorCode[color.indexOf(selecedcolor)];
    console.log(seleced);
}

function randomBtnColor(){

    randomNumber = Math.round(3 * Math.random());
    nyColor.splice(nyColor.indexOf(seleced), 1);
    console.log(randomNumber);
    btnColor(".color-one");
    btnColor(".color-two");
    btnColor(".color-tree");
    btnColor(".color-four");


    if(randomNumber === 0){
        let btn = document.querySelector(".color-one");
        btn.style.background = seleced;
        console.log(typeof(seleced));
        console.log(btn.style.backgroundColor);
    }
    else if (randomNumber === 1){
        let btn = document.querySelector(".color-two");
        btn.style.background = seleced;
        console.log(randomNumber);
        console.log(typeof(seleced));
        console.log(btn.style.backgroundColor);
    }
    else if (randomNumber === 2){
        let btn = document.querySelector(".color-tree");
        btn.style.background = seleced;
        console.log(typeof(seleced));
        console.log(btn.style.backgroundColor);
    }
    else if (randomNumber === 3){
        let btn = document.querySelector(".color-four");
        btn.style.background = seleced;
        console.log(typeof(seleced));
        console.log(btn.style.backgroundColor);
    }

    
}

function btnColor(e){
    selecedcolor = nyColor[Math.round((nameColor.length - 1) * Math.random())];
    btn = document.querySelector(e);
    btn.style.background = selecedcolor;
    nyColor.splice(nyColor.indexOf(selecedcolor), 1);
    nameColor.splice(nameColor.indexOf(selecedcolor), 1);
}

function rightColor(e){

    const scoreDisplay = document.querySelector(".score");
    let btn = document.querySelector(e);
    var a = btn.style.backgroundColor.split("(")[1].split(")")[0];
    a = a.split(",");
    b = a.map(function(x){             
        x = parseInt(x).toString(16).toUpperCase();      
        return (x.length==1) ? "0"+x : x;  
    });
    b = "#" + b.join("");

    if(b === seleced){
        console.log("Correct");
        score2 += 1;
        timeLeft = 15;
        scoreDisplay.innerHTML = "Score: " + score2;
        nyColor = colorCode;
        randomColor();
        randomBtnColor();
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


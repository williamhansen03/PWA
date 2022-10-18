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

var nyColor = colorCode.slice();
var nameColor = color.slice();

var randomNumber = 0;

var b = "";

function init(){
    console.log("Hello world");
    
}

randomBtnColor.call();

function randomColor(){
    let selecedcolor = color[Math.round((color.length -1) * Math.random())];
    const colorName = document.querySelector(".color-name");
    colorName.innerHTML = selecedcolor;
    seleced = colorCode[color.indexOf(selecedcolor)];
}

function randomBtnColor(){

    randomColor();

    randomNumber = Math.round(3 * Math.random());
    nyColor.splice(nyColor.indexOf(seleced), 1);

    btnColor(".color-one");
    btnColor(".color-two");
    btnColor(".color-tree");
    btnColor(".color-four");


    randomRightBtn(randomBtn[randomNumber]);
    
    
}

function btnColor(e){
    selecedcolor = nyColor[Math.round((nameColor.length - 1) * Math.random())];
    btn = document.querySelector(e);
    btn.style.background = selecedcolor;
    nyColor.splice(nyColor.indexOf(selecedcolor), 1);
    nameColor.splice(nameColor.indexOf(selecedcolor), 1);
}

function randomRightBtn(e){

    let btn = document.querySelector(e);

    btn.style.backgroundColor = seleced;

}

function rightColor(e){

    const scoreDisplay = document.querySelector(".score");

    let btn = document.querySelector(e);
    var b = rgbToHexConverter(btn.style.backgroundColor);
    

    if(b === seleced){
        rightAnimation();

        score2 += 1;
        timeLeft = 15;

        scoreDisplay.innerHTML = "Score: " + score2;

        nyColor = colorCode.slice();
        nameColor = color.slice();

        randomBtnColor();
    }
    else{
        document.location.href = "gameover.html";
    }

      
}

function rightAnimation(){
    let bodyBackgroundColor = document.body.style.backgroundColor;
    document.body.style.backgroundColor = "#46C731";
    delay(400).then(() => document.body.style.backgroundColor = bodyBackgroundColor);

}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}
  

function rgbToHexConverter(e){
    var a = e.split("(")[1].split(")")[0];
    a = a.split(",");
    b = a.map(function(x){             
        x = parseInt(x).toString(16).toUpperCase();      
        return (x.length==1) ? "0"+x : x;  
    });
    b = "#" + b.join("");
    return b;
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


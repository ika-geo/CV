let gameStartIMG2 = document.querySelector(".clickOnASquareIMG")

let $mainWindow2 = document.querySelector(".clickOnASquare")

let $close2 = document.querySelector(".clickOnASquare .close")

let $box = document.querySelector(".clickOnASquare .box");
let $button = document.querySelector(".clickOnASquare .start");
let $input1 = document.querySelector(".clickOnASquare input");
let $time = document.querySelector(".clickOnASquare .time");
let $text = document.querySelector(".clickOnASquare .text");
let $block = document.querySelector(".clickOnASquare .block")


//start game by click image



gameStartIMG2.addEventListener("click", function (){
    if (window.innerWidth>600){
        $mainWindow2.style.display="flex"
        gameEnd=false
    }
    else {
        alert("device width must be more than 600px to play games")
    }
})


//close game window

let gameEnd;

$close2.addEventListener("click", function (){
    $mainWindow2.style.display="none";
    endGame();
    gameEnd = true;
})



window.addEventListener("resize", function (){
    if (window.innerWidth<600 && $mainWindow2.style.display==="flex"){
        $mainWindow2.style.display="none"
        endGame()
        alert("device width must be more than 600px to play games")
    }
})


/////////////////////


$button.addEventListener("click", () => startGame());


let score1 = 0;

function startGame() {
    score1=0;
    htmlChange()
    timeF();
    $box.addEventListener("click", renderBox);
    $box.addEventListener("click", scoreF);
    setTimeout("endGame()", $input1.value * 1000);
}

function endGame() {
    $box.style.display = "none";
    $time.style.display = "inline"
    $button.style.display = "inline"
    $block.style.marginBottom=20+"px"
    $block.style.backgroundColor="#bfbfbf"
    $text.innerHTML = `Score is ${score1}`;
}

function scoreF() {
    score1++;
}

function htmlChange() {
    $text.innerHTML = $input1.value;
    $time.style.display = "none"
    $button.style.display = "none"
    $box.style.display = "block"
    $block.style.marginBottom=42+"px"
    $block.style.backgroundColor="white"
}

$text.innerHTML = $input1.value;

function timeF() {
    let interval = setInterval(() => {
        $text.innerHTML = ($text.innerHTML - 0.1).toFixed(1);
        if ($text.innerHTML <= 0||gameEnd===true) {
            clearInterval(interval);
            endGame();
        }
    }, 100)
}


function renderBox() {
    let a = random2(0, 256)
    let b = random2(0, 256)
    let c = random2(0, 256)
    $box.style.backgroundColor = `rgb(${a}, ${b}, ${c})`;
    $box.style.width = random2(30, 200) + "px";
    $box.style.height = $box.style.width;
    $box.style.marginLeft = random2(0, 300 - parseInt($box.style.width)) + "px";
    $box.style.marginTop = random2(0, 300 - parseInt($box.style.height)) + "px";
}

function random2(min, max) {
    return Math.random() * (max - min) + min;
}
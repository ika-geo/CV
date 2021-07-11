let gameStartIMG = document.querySelector(".catchTheBallIMG")


let $mainWindow = document.querySelector(".catchTheBall")

let $gameBlock = document.querySelector(".catchTheBall .gameBlock")
let $relative = document.querySelector(".catchTheBall .relative");
let $child = document.querySelector(".catchTheBall .child");

let $start = document.querySelector(".catchTheBall .start");
let $score = document.querySelector(".catchTheBall .score span")
let $timer = document.querySelector(".catchTheBall .timer span")

let $close = document.querySelector(".catchTheBall .close")


let $level = document.querySelector(".catchTheBall .level")
let $levelbtn = document.querySelector(".catchTheBall .levelChange")
let $easy = document.querySelector(".catchTheBall .easy")
let $medium = document.querySelector(".catchTheBall .medium")
let $hard = document.querySelector(".catchTheBall .hard")


//start game by click image

gameStartIMG.addEventListener("click", function (){
    if (window.innerWidth>600){
        $mainWindow.style.display="flex"
    }
    else {
        alert("device width must be more than 600px to play games")
    }

})


//close game window

$close.addEventListener("click", function (){
    $level.style.display="block";
    $gameBlock.style.display="none";
    $mainWindow.style.display="none"
    stopGameF()
    stopGame=true
    gameTime=10
    score=0;
    $score.innerHTML=score;
})

window.addEventListener("resize", function (){
    if (window.innerWidth<600 && $mainWindow.style.display==="flex"){
        $level.style.display="block";
        $gameBlock.style.display="none";
        $mainWindow.style.display="none"
        stopGameF()
        stopGame=true
        gameTime=10
        score=0;
        $score.innerHTML=score;
        alert("device width must be more than 600px to play games")
    }
})



$relative.style.width = 500 + "px";
$relative.style.height = 500 + "px";


function defaultChildPosition(){
    $child.style.marginLeft = 77 + "px";
    $child.style.marginTop = 0 + "px";
    $child.style.width = 50 + "px";
    $child.style.height = 50 + "px";
}







let timer;

let up = 7;
let left = 5;

let speed;  //ball moving speed
let gameTime = 10   //game timer

let stopGame = true;   //for stop move()

let color = ["green", "blue", "red", "black"]           //ball color
let score=0;
let direction = "";



//level chose

$easy.addEventListener("click", function (){
    $level.style.display="none";
    $gameBlock.style.display="unset";
    $start.style.transform="scale(1)"
    speed=30;
    defaultChildPosition()
    gameTime=10
    $timer.innerHTML=gameTime
    score=0;
    $score.innerHTML=score;
})


$medium.addEventListener("click", function (){
    $level.style.display="none";
    $gameBlock.style.display="unset";
    $start.style.transform="scale(1)"
    speed=20;
    defaultChildPosition()
    gameTime=10
    $timer.innerHTML=gameTime
    score=0;
    $score.innerHTML=score;
})


$hard.addEventListener("click", function (){
    $level.style.display="none";
    $gameBlock.style.display="unset";
    $start.style.transform="scale(1)"
    speed=10;
    defaultChildPosition()
    gameTime=10
    $timer.innerHTML=gameTime
    score=0;
    $score.innerHTML=score;
})


// levelChange

$levelbtn.addEventListener("click", function (){
    $level.style.display="block";
    $gameBlock.style.display="none";
    stopGame = true;
})






// start game on click start

$start.addEventListener("click", function (){
    stopGame=false
    gameTime=10
    score=0;
    $score.innerHTML=score;
    move()
    let time = setInterval(function () {
        gameTime--
        $timer.innerHTML=gameTime;
        if (gameTime<=0||stopGame===true){
            clearInterval(time)
            stopGame=true;
            $start.style.transform="scale(0)"
        }


    }, 1000)
});


// stopgame


function stopGameF(){
    clearInterval(timer)
    $start.style.transform="scale(1)"
}




// start ball move

function move() {
    $start.style.transform="scale(0)"

    rightDown()

    function rightDown() {
        $child.style.backgroundColor=color[random(0, 3)]
        direction = "rightDownD"
        timer = setInterval(function () {

            if (stopGame===true){
                stopGameF()
            }

            $child.style.marginTop = parseInt($child.style.marginTop) + up + "px";
            $child.style.marginLeft = parseInt($child.style.marginLeft) + left + "px";

            if (parseInt($relative.style.width) - parseInt($child.style.marginLeft) <= parseInt($child.style.width)) {
                clearInterval(timer)
                leftDown()
            } else if (parseInt($relative.style.height) - parseInt($child.style.marginTop) <= parseInt($child.style.height)) {
                clearInterval(timer)
                rightUp();
            }

        }, speed);
    }

    function leftDown() {
        $child.style.backgroundColor=color[random(0, 3)]
        direction = "leftDownD";
        timer = setInterval(function () {

            if (stopGameF===true){
                stopGame()
            }


            $child.style.marginTop = parseInt($child.style.marginTop) + up + "px";
            $child.style.marginLeft = parseInt($child.style.marginLeft) - left + "px";

            if (parseInt($child.style.marginLeft) <= 0) {
                clearInterval(timer)
                rightDown()
            } else if (parseInt($relative.style.height) - parseInt($child.style.marginTop) <= parseInt($child.style.height)) {
                clearInterval(timer)
                leftUp();
            }

        }, speed);
    }

    function leftUp() {
        $child.style.backgroundColor=color[random(0, 3)]
        direction = "leftUpD"
        timer = setInterval(function () {

            if (stopGameF===true){
                stopGame()
            }

            $child.style.marginTop = parseInt($child.style.marginTop) - up + "px";
            $child.style.marginLeft = parseInt($child.style.marginLeft) - left + "px";

            if (parseInt($child.style.marginLeft) <= 0) {
                clearInterval(timer)
                rightUp()
            } else if (parseInt($child.style.marginTop) <= 0) {
                clearInterval(timer)
                leftDown();
            }

        }, speed);

    }

    function rightUp() {
        $child.style.backgroundColor=color[random(0, 3)]
        direction = "rightUpD"
        timer = setInterval(function () {

            if (stopGameF===true){
                stopGame()
            }

            $child.style.marginTop = parseInt($child.style.marginTop) - up + "px";
            $child.style.marginLeft = parseInt($child.style.marginLeft) + left + "px";

            if (parseInt($relative.style.width) - parseInt($child.style.marginLeft) <= parseInt($child.style.width)) {
                clearInterval(timer)
                leftUp()
            } else if (parseInt($child.style.marginTop) <= 0) {
                clearInterval(timer)
                rightDown();
            }
        }, speed);
    }
}


// score counter

$child.addEventListener("click", function (){
    if (gameTime){
        if ($child.style.backgroundColor==="black"||$child.style.backgroundColor==="red"){
            score--
            $score.innerHTML=score
        }
        else if ($child.style.backgroundColor==="green"||$child.style.backgroundColor==="blue"){
            score++
            $score.innerHTML=score
        }
    }


})


 // random Number for color choose

function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
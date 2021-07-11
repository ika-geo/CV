let gameStartIMG1 = document.querySelector(".guessTheNumberIMG")


// main page
let $mainWindow1 = document.querySelector(".guessNumber")

// game page
let $gamePage = document.querySelector(".guessNumber .gamePage")
let $highNumber = document.querySelector(".guessNumber .highNumber h1")
let $lowNumber = document.querySelector(".guessNumber .lowNumber h1")
let $input = document.querySelector(".guessNumber input[type=text]")
let $submit = document.querySelector(".guessNumber input[type=submit]")
let $results = document.querySelector(".guessNumber .results span")
let $close1 = document.querySelector(".guessNumber .close")
let $helpNumber=document.querySelector(".helpNumber")
let $changeLevel=document.querySelector(".changeLevel")

let randomNumber
let resultsArr=[];
let level

// level page
let $levelPage = document.querySelector(".guessNumber .levelPage")
let $easy1 = document.querySelector(".guessNumber .easy")
let $medium1 = document.querySelector(".guessNumber .medium")
let $hard1 = document.querySelector(".guessNumber .hard")



//start game by click image

gameStartIMG1.addEventListener("click", function (){
    if (window.innerWidth>600){
        $mainWindow1.style.display="flex"
    }
    else {
        alert("device width must be more than 600px to play games")
    }

})

//close game window

$close1.addEventListener("click", function (){
    defaultPage();
    $mainWindow1.style.display="none"
})


window.addEventListener("resize", function (){
    if (window.innerWidth<600 && $mainWindow1.style.display==="flex"){
        defaultPage();
        $mainWindow1.style.display="none"
        alert("device width must be more than 600px to play games")
    }
})




function chooseLevel(){
    $easy1.addEventListener("click", function (){
        level=0
        randomNumberF()
        $levelPage.style.display="none"
        $gamePage.style.display="block"
    })

    $medium1.addEventListener("click", function (){
        level=1
        randomNumberF()
        $levelPage.style.display="none"
        $gamePage.style.display="block"
    })

    $hard1.addEventListener("click", function (){
        level=2
        randomNumberF()
        $levelPage.style.display="none"
        $gamePage.style.display="block"
    })
}


/////////////

chooseLevel()
startGame()

function defaultPage(){
    $results.innerHTML=""
    randomNumber=""
    resultsArr=[];
    $highNumber.innerHTML=`<br>`;
    $lowNumber.innerHTML=`<br>`;
    $results.innerHTML=""
    $input.value=""
    $gamePage.style.display="none"
    $levelPage.style.display="flex"
    $helpNumber.innerHTML=50;
}


$changeLevel.addEventListener("click", function (){
    defaultPage();
})



function startGame(){
    $submit.addEventListener("click", function (){

        if (isNaN($input.value)){
            alert("Not a number")
        }
        else if ($input.value<1||$input.value>99){
            alert("from 1 to 99")
        }
        else {
            if (+$input.value==randomNumber){
                alert("you win, number is "+$input.value)
                resultsArr.push($input.value)
                $results.innerHTML=resultsArr.join(", ");
                defaultPage();
            }

            else {
                resultsArr.push($input.value);
                $results.innerHTML=resultsArr.join(", ");
                checkHighLow(randomNumber);
                // check Help Number

                if (isNaN(parseFloat($highNumber.innerHTML))){
                    $helpNumber.innerHTML=((parseFloat(($lowNumber.innerHTML))+99)/2).toFixed(level)

                }
                else if (isNaN(parseFloat($lowNumber.innerHTML))){
                    $helpNumber.innerHTML=(parseFloat($highNumber.innerHTML)/2).toFixed(level)

                }
                else {
                    $helpNumber.innerHTML=((parseFloat($highNumber.innerHTML)+parseFloat($lowNumber.innerHTML))/2).toFixed(level);

                }


            }
        }
    })
}


// lazy game

$helpNumber.addEventListener("click", function (){
    $input.value=$helpNumber.innerHTML;
    $submit.click();
})



function checkHighLow(){

    if (+$input.value>randomNumber){
        if (isNaN(parseFloat($highNumber.innerHTML))||+$input.value<$highNumber.innerHTML){
            $highNumber.innerHTML=$input.value;
        }
    }

    else if (+$input.value<randomNumber){
        if (isNaN(parseFloat($lowNumber.innerHTML))||+$input.value>$lowNumber.innerHTML){
            $lowNumber.innerHTML=$input.value;
        }
    }
}

function randomNumberF(){
    randomNumber=(Math.random()*(99 -1)+1).toFixed(level);
}
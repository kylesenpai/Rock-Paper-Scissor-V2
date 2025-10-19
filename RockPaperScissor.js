const rockBtn = document.getElementById("rock-choice-container");
const paperBtn = document.getElementById("paper-choice-container");
const scissorBtn = document.getElementById("scissor-choice-container");
const yourChoice = document.getElementById("your-choice");
const compChoice = document.getElementById("comp-choice");
const winner = document.getElementById("winner");
const playerSide = document.getElementById("player-side");
const compSide = document.getElementById("computer-side");
let rockPlayer = document.getElementById("rock-player");
let rockComputer = document.getElementById("rock-computer");
const mainContainer = document.getElementById("main-container");
const quitBtn = document.getElementById("quit-btn");
const loaderContainer = document.getElementById("loader-container");
const myScore = document.getElementById("my-score");
const computerScore = document.getElementById("computer-score");
const popquitBtn = document.getElementById("popquit-btn");
const popupContainer = document.getElementById("popup-container");
const submit = document.getElementById("submit");
const whowon = document.getElementById("whowon");
const popup = document.getElementById("popup");
const overpopup = document.getElementById("overpopup");
const yes = document.getElementById("yes");
const no = document.getElementById("no");
let yourScore = 0;
let compScore = 0;

setTimeout(() => {
    quitBtn.style.opacity = '1';
    mainContainer.style.opacity = '1';
    loaderContainer.style.display = "none";
    loaderContainer.style.opacity = '0';
    popquitBtn.style.opacity = "1";
    popupContainer.style.opacity = "1";
}, 100);

function resetGame(){
    yourScore = 0;
    compScore = 0;
    myScore.textContent = yourScore;
    computerScore.textContent = compScore;
    winner.style.backgroundColor = "rgba(255, 255, 255, 1)";
    winner.textContent = "";
    yourChoice.textContent = "You choose:";
    compChoice.textContent = "Computer choose:";
    rockPlayer.src = "ROCK PAPER SCISSOR/COLORED ROCK.png";
    rockComputer.src = "ROCK PAPER SCISSOR/COLORED ROCK.png";
}

submit.onclick = function(){
    popupContainer.style.opacity = "0";

    setTimeout(() => {
        popupContainer.style.display = "none";
    },500);
}

quitBtn.onclick = function(){
    quitBtn.style.opacity = '0';
    mainContainer.style.opacity = '0';
    loaderContainer.style.display = "flex";

    setTimeout(() => {
        loaderContainer.style.opacity = '1';
    }, 400);

    setTimeout(() => {
        window.location.href = "index.html";
    }, 2500);
}

popquitBtn.onclick = function(){
    quitBtn.style.opacity = '0';
    mainContainer.style.opacity = '0';
    popquitBtn.style.opacity = '0';
    popupContainer.style.opacity = "0";
    loaderContainer.style.display = "flex";

    setTimeout(() => {
        loaderContainer.style.opacity = '1';
        popupContainer.style.display = "none";
    }, 400);

    setTimeout(() => {
        window.location.href = "index.html";
    }, 2500);
}

rockBtn.onclick = function(){
    rockPlayer.src = "ROCK PAPER SCISSOR/COLORED ROCK.png";
    rockComputer.src = "ROCK PAPER SCISSOR/COLORED ROCK.png";

    setTimeout(() => {
        yourChoice.textContent = `You choose: ROCK`;
        rockPlayer.src = "ROCK PAPER SCISSOR/COLORED ROCK.png";
    }, 2000);
    let randNum = Math.floor(Math.random() * 6) + 1;

    switch(randNum){
            case 1:
                setTimeout(() => {
                    compChoice.textContent = `Computer choose: ROCK`;
                    rockComputer.src = "ROCK PAPER SCISSOR/COLORED ROCK.png";
                }, 2000);
                break;
            case 2:
                setTimeout(() => {
                    compChoice.textContent = `Computer choose: PAPER`;
                    rockComputer.src = "ROCK PAPER SCISSOR/COLORED PAPER.png";
                }, 2000);
                break;
            case 3:
                setTimeout(() => {
                    compChoice.textContent = `Computer choose: SCISSOR`;
                    rockComputer.src = "ROCK PAPER SCISSOR/COLORED SCISSOR.png";
                }, 2000);
                break;
            case 4:
                setTimeout(() => {
                    compChoice.textContent = `Computer choose: ROCK`;
                    rockComputer.src = "ROCK PAPER SCISSOR/COLORED ROCK.png";
                }, 2000);
                break;
            case 5:
                setTimeout(() => {
                    compChoice.textContent = `Computer choose: PAPER`;
                    rockComputer.src = "ROCK PAPER SCISSOR/COLORED PAPER.png";
                }, 2000);
                break;
            case 6:
                setTimeout(() => {
                    compChoice.textContent = `Computer choose: SCISSOR`;
                    rockComputer.src = "ROCK PAPER SCISSOR/COLORED SCISSOR.png";
                }, 2000);
                break;
        }

    if(randNum == 1){
        setTimeout(() => {
            winner.textContent = `THE GAME IS DRAW`;
            winner.style.backgroundColor = "rgb(128, 128, 128)";
            winner.style.color = "white";
        }, 2000);
    }
    else if(randNum == 2){
        setTimeout(() => {
            winner.textContent = `THE PLAYER LOST`;
            winner.style.backgroundColor = "rgba(167, 0, 0, 1)";
            winner.style.color = "white";
            computerScore.textContent = compScore+=1;
            checkWinner();
        }, 2000);
        
    }
    else if(randNum == 3){
        setTimeout(() => {
            winner.textContent = `THE PLAYER WON`;
            winner.style.backgroundColor = "rgb(0, 128, 0)";
            winner.style.color = "white";
            myScore.textContent = yourScore+=1;
            checkWinner();
        }, 2000);
    }
    else if(randNum == 4){
        setTimeout(() => {
            winner.textContent = `THE GAME IS DRAW`;
            winner.style.backgroundColor = "rgb(128, 128, 128)";
            winner.style.color = "white";
        }, 2000);
    }
    else if(randNum == 5){
        setTimeout(() => {
            winner.textContent = `THE PLAYER LOST`;
            winner.style.backgroundColor = "rgba(167, 0, 0, 1)";
            winner.style.color = "white";
            computerScore.textContent = compScore+=1;
            checkWinner();
        }, 2000);
        
    }
    else if(randNum == 6){
        setTimeout(() => {
            winner.textContent = `THE PLAYER WON`;
            winner.style.backgroundColor = "rgb(0, 128, 0)";
            winner.style.color = "white";
            myScore.textContent = yourScore+=1;
            checkWinner();
        }, 2000);
    }

    playerSide.classList.remove("player-side");
    playerSide.offsetWidth; 
    playerSide.classList.add("player-side");

    compSide.classList.remove("computer-side");
    compSide.offsetWidth; 
    compSide.classList.add("computer-side");
}

paperBtn.onclick = function(){
    rockPlayer.src = "ROCK PAPER SCISSOR/COLORED ROCK.png";
    rockComputer.src = "ROCK PAPER SCISSOR/COLORED ROCK.png";

    setTimeout(() => {
        yourChoice.textContent = `You choose: PAPER`;
        rockPlayer.src = "ROCK PAPER SCISSOR/COLORED PAPER.png";
    }, 2000);
    let randNum = Math.floor(Math.random() * 6) + 1;

    switch(randNum){
            case 1:
                setTimeout(() => {
                    compChoice.textContent = `Computer choose: ROCK`;
                    rockComputer.src = "ROCK PAPER SCISSOR/COLORED ROCK.png";
                }, 2000);
                break;
            case 2:
                setTimeout(() => {
                    compChoice.textContent = `Computer choose: PAPER`;
                    rockComputer.src = "ROCK PAPER SCISSOR/COLORED PAPER.png";
                }, 2000);
                break;
            case 3:
                setTimeout(() => {
                    compChoice.textContent = `Computer choose: SCISSOR`;
                    rockComputer.src = "ROCK PAPER SCISSOR/COLORED SCISSOR.png";
                }, 2000);
                break;
            case 4:
                setTimeout(() => {
                    compChoice.textContent = `Computer choose: ROCK`;
                    rockComputer.src = "ROCK PAPER SCISSOR/COLORED ROCK.png";
                }, 2000);
                break;
            case 5:
                setTimeout(() => {
                    compChoice.textContent = `Computer choose: PAPER`;
                    rockComputer.src = "ROCK PAPER SCISSOR/COLORED PAPER.png";
                }, 2000);
                break;
            case 6:
                setTimeout(() => {
                    compChoice.textContent = `Computer choose: SCISSOR`;
                    rockComputer.src = "ROCK PAPER SCISSOR/COLORED SCISSOR.png";
                }, 2000);
                break;
        }

    if(randNum == 1){
        setTimeout(() => {
            winner.textContent = `THE PLAYER WON`;
            winner.style.backgroundColor = "rgb(0, 128, 0)";
            winner.style.color = "white";
            myScore.textContent = yourScore+=1;
            checkWinner();
        }, 2000);
    }
    else if(randNum == 2){
        setTimeout(() => {
            winner.textContent = `THE GAME IS DRAW`;
            winner.style.backgroundColor = "rgb(128, 128, 128)";
            winner.style.color = "white";
        }, 2000);
        
    }
    else if(randNum == 3){
        setTimeout(() => {
            winner.textContent = `THE PLAYER LOST`;
            winner.style.backgroundColor = "rgba(167, 0, 0, 1)";
            winner.style.color = "white";
            computerScore.textContent = compScore+=1;
            checkWinner();
        }, 2000);
    }
    else if(randNum == 4){
        setTimeout(() => {
            winner.textContent = `THE PLAYER WON`;
            winner.style.backgroundColor = "rgb(0, 128, 0)";
            winner.style.color = "white";
            myScore.textContent = yourScore+=1;
            checkWinner();
        }, 2000);
    }
    else if(randNum == 5){
        setTimeout(() => {
            winner.textContent = `THE GAME IS DRAW`;
            winner.style.backgroundColor = "rgb(128, 128, 128)";
            winner.style.color = "white";
        }, 2000);
        
    }
    else if(randNum == 6){
        setTimeout(() => {
            winner.textContent = `THE PLAYER LOST`;
            winner.style.backgroundColor = "rgba(167, 0, 0, 1)";
            winner.style.color = "white";
            computerScore.textContent = compScore+=1;
            checkWinner();
        }, 2000);
    }

    playerSide.classList.remove("player-side");
    playerSide.offsetWidth; 
    playerSide.classList.add("player-side");

    compSide.classList.remove("computer-side");
    compSide.offsetWidth; 
    compSide.classList.add("computer-side");
}

scissorBtn.onclick = function(){
    rockPlayer.src = "ROCK PAPER SCISSOR/COLORED ROCK.png";
    rockComputer.src = "ROCK PAPER SCISSOR/COLORED ROCK.png";

    setTimeout(() => {
        yourChoice.textContent = `You choose: SCISSOR`;
        rockPlayer.src = "ROCK PAPER SCISSOR/COLORED SCISSOR.png";
    }, 2000);
    let randNum = Math.floor(Math.random() * 6) + 1;

    switch(randNum){
            case 1:
                setTimeout(() => {
                    compChoice.textContent = `Computer choose: ROCK`;
                    rockComputer.src = "ROCK PAPER SCISSOR/COLORED ROCK.png";
                }, 2000);
                break;
            case 2:
                setTimeout(() => {
                    compChoice.textContent = `Computer choose: PAPER`;
                    rockComputer.src = "ROCK PAPER SCISSOR/COLORED PAPER.png";
                }, 2000);
                break;
            case 3:
                setTimeout(() => {
                    compChoice.textContent = `Computer choose: SCISSOR`;
                    rockComputer.src = "ROCK PAPER SCISSOR/COLORED SCISSOR.png";
                }, 2000);
                break;
            case 4:
                setTimeout(() => {
                    compChoice.textContent = `Computer choose: ROCK`;
                    rockComputer.src = "ROCK PAPER SCISSOR/COLORED ROCK.png";
                }, 2000);
                break;
            case 5:
                setTimeout(() => {
                    compChoice.textContent = `Computer choose: PAPER`;
                    rockComputer.src = "ROCK PAPER SCISSOR/COLORED PAPER.png";
                }, 2000);
                break;
            case 6:
                setTimeout(() => {
                    compChoice.textContent = `Computer choose: SCISSOR`;
                    rockComputer.src = "ROCK PAPER SCISSOR/COLORED SCISSOR.png";
                }, 2000);
                break;
        }

    if(randNum == 1){
        setTimeout(() => {
            winner.textContent = `THE PLAYER LOST`;
            winner.style.backgroundColor = "rgba(167, 0, 0, 1)";
            winner.style.color = "white";
            computerScore.textContent = compScore+=1;
            checkWinner();
        }, 2000);
    }
    else if(randNum == 2){
        setTimeout(() => {
            winner.textContent = `THE PLAYER WON`;
            winner.style.backgroundColor = "rgb(0, 128, 0)";
            winner.style.color = "white";
            myScore.textContent = yourScore+=1;
            checkWinner();
        }, 2000);
    }
    else if(randNum == 3){
        setTimeout(() => {
            winner.textContent = `THE GAME IS DRAW`;
            winner.style.backgroundColor = "rgb(128, 128, 128)";
            winner.style.color = "white";
        }, 2000);
    }
    else if(randNum == 4){
        setTimeout(() => {
            winner.textContent = `THE PLAYER LOST`;
            winner.style.backgroundColor = "rgba(167, 0, 0, 1)";
            winner.style.color = "white";
            computerScore.textContent = compScore+=1;
            checkWinner();
        }, 2000);
    }
    else if(randNum == 5){
        setTimeout(() => {
            winner.textContent = `THE PLAYER WON`;
            winner.style.backgroundColor = "rgb(0, 128, 0)";
            winner.style.color = "white";
            myScore.textContent = yourScore+=1;
            checkWinner();
        }, 2000);
    }
    else if(randNum == 6){
        setTimeout(() => {
            winner.textContent = `THE GAME IS DRAW`;
            winner.style.backgroundColor = "rgb(128, 128, 128)";
            winner.style.color = "white";
        }, 2000);
    }

    playerSide.classList.remove("player-side");
    playerSide.offsetWidth; 
    playerSide.classList.add("player-side");

    compSide.classList.remove("computer-side");
    compSide.offsetWidth; 
    compSide.classList.add("computer-side");
}

function checkWinner(){
    if(yourScore == 3){
        popupContainer.style.display = "flex";
        whowon.textContent = "THE PLAYER WON!";
        overpopup.style.display = "flex";
        popup.style.display = "none";

        setTimeout(() => {
            popupContainer.style.opacity = "1";
            overpopup.style.opacity = "1";
        },500);

        yes.onclick = function(){
            resetGame();
            popupContainer.style.opacity = "0";

            setTimeout(() => {
                popupContainer.style.display = "none";
            }, 700);
        }
        no.onclick = function(){
            popupContainer.style.opacity = "0";
            mainContainer.style.opacity = "0";
            quitBtn.style.opacity = "0";
            loaderContainer.style.display = "flex";

            setTimeout(() => {
                loaderContainer.style.opacity = "1";
                popupContainer.style.display = "none";
            }, 700);
            
            setTimeout(() => {
                window.location.href = "index.html";
            }, 1500);
        }
    }
    else if(compScore == 3){
        popupContainer.style.display = "flex";
        whowon.textContent = "THE COMPUTER WON";
        overpopup.style.display = "flex";
        popup.style.display = "none";

        setTimeout(() => {
            popupContainer.style.opacity = "1";
            overpopup.style.opacity = "1";
        },500);

        yes.onclick = function(){
            resetGame();
            popupContainer.style.opacity = "0";

            setTimeout(() => {
                popupContainer.style.display = "none";
            }, 700);
        }
        no.onclick = function(){
            popupContainer.style.opacity = "0";
            mainContainer.style.opacity = "0";
            quitBtn.style.opacity = "0";
            loaderContainer.style.display = "flex";

            setTimeout(() => {
                loaderContainer.style.opacity = "1";
                popupContainer.style.display = "none";
            }, 700);
            
            setTimeout(() => {
                window.location.href = "index.html";
            }, 1500);
        }
    }
}
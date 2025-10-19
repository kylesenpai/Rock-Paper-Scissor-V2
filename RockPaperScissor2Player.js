const rock1 = document.getElementById("rock-choice-container1");
const paper1 = document.getElementById("paper-choice-container1");
const scissor1 = document.getElementById("scissor-choice-container1");
const rock2 = document.getElementById("rock-choice-container2");
const paper2 = document.getElementById("paper-choice-container2");
const scissor2 = document.getElementById("scissor-choice-container2");
let rockPlayer1 = document.getElementById("rock-player1");
let rockPlayer2 = document.getElementById("rock-player2");
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const p1name = document.getElementById("p1name");
const p2name = document.getElementById("p2name");
const player1name = document.getElementById("player1name");
const player2name = document.getElementById("player2name");
const winner = document.getElementById("winner");
const turn1 = document.getElementById("turn1");
const turn2 = document.getElementById("turn2");
const mainContainer = document.getElementById("main-container");
const quitBtn = document.getElementById("quit-btn");
const popquitBtn = document.getElementById("popquit-btn");
const loaderContainer = document.getElementById("loader-container");
const player1Score = document.getElementById("player1score");
const player2Score = document.getElementById("player2score");
const submit = document.getElementById("submit");
const popupContainer = document.getElementById("popup-container");
const rules = document.getElementById("rules");
const ruleHeader = document.getElementById("rule-header");
const popup = document.getElementById("popup");
const overpopup = document.getElementById("overpopup");
const yes = document.getElementById("yes");
const no = document.getElementById("no");
const whowon = document.getElementById("whowon");
let p1score = 0;
let p2score = 0;
let player1Pick = null;
let player2Pick = null;

setTimeout(() => {
    quitBtn.style.opacity = '1';
    mainContainer.style.opacity = '1';
    loaderContainer.style.display = "none";
    loaderContainer.style.opacity = '0';
    popquitBtn.style.opacity = "1";
    popupContainer.style.opacity = "1";
}, 100);

function resetGame(){
    p1score = 0;
    p2score = 0;
    player1Score.textContent = 0;
    player2Score.textContent = 0;
    turn1.textContent = "Choose your pick";
    turn2.textContent = "Choose your pick";
    turn1.style.backgroundColor = "rgba(255, 255, 255, 1)";
    turn2.style.backgroundColor = "rgba(255, 255, 255, 1)";
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

submit.onclick = function(){
    player1name.textContent = p1name.value;
    player2name.textContent = p2name.value;

    popupContainer.style.opacity = "0";
    popquitBtn.style.opacity = "0";

    setTimeout(() => {popupContainer.style.display = "none";}, 700);
}

rock1.onclick = () => {turn1.textContent = "Pick locked in!"; player1Pick = "rock"; turn1.style.backgroundColor = "rgba(255, 255, 255, 1)"; checkBattle()}
paper1.onclick = () => {turn1.textContent = "Pick locked in!"; player1Pick = "paper"; turn1.style.backgroundColor = "rgba(255, 255, 255, 1)"; checkBattle()};
scissor1.onclick = () => {turn1.textContent = "Pick locked in!"; player1Pick = "scissor"; turn1.style.backgroundColor = "rgba(255, 255, 255, 1)"; checkBattle()}

rock2.onclick = () => {turn2.textContent = "Pick locked in!"; player2Pick = "rock"; turn2.style.backgroundColor = "rgba(255, 255, 255, 1)"; checkBattle()}
paper2.onclick = () => {turn2.textContent = "Pick locked in!"; player2Pick = "paper"; turn2.style.backgroundColor = "rgba(255, 255, 255, 1)"; checkBattle()}
scissor2.onclick = () => {turn2.textContent = "Pick locked in!"; player2Pick = "scissor"; turn2.style.backgroundColor = "rgba(255, 255, 255, 1)"; checkBattle()}

function checkBattle(){
    if(player1Pick && player2Pick){
        if(player1Pick === "rock" && player2Pick === "scissor"){
            rockPlayer1.src = "ROCK PAPER SCISSOR/COLORED ROCK.png";
            rockPlayer2.src = "ROCK PAPER SCISSOR/COLORED ROCK.png";

            player1.classList.remove("player1");
            player1.offsetWidth; 
            player1.classList.add("player1");

            player2.classList.remove("player2");
            player2.offsetWidth; 
            player2.classList.add("player2");

            setTimeout(() => {
                rockPlayer1.src = "ROCK PAPER SCISSOR/COLORED ROCK.png";
                rockPlayer2.src = "ROCK PAPER SCISSOR/COLORED SCISSOR.png";

                turn1.textContent = "You won!";
                turn2.textContent = "You lost:(";
                turn1.style.backgroundColor = "rgb(0, 128, 0)";
                turn2.style.backgroundColor = "rgba(167, 0, 0, 1)";

                player1Score.textContent = p1score += 1;
                checkWinner();
            }, 2000);
        }

        else if(player1Pick === "rock" && player2Pick === "paper"){
            rockPlayer1.src = "ROCK PAPER SCISSOR/COLORED ROCK.png";
            rockPlayer2.src = "ROCK PAPER SCISSOR/COLORED ROCK.png";

            player1.classList.remove("player1");
            player1.offsetWidth; 
            player1.classList.add("player1");

            player2.classList.remove("player2");
            player2.offsetWidth; 
            player2.classList.add("player2");

            setTimeout(() => {
                rockPlayer1.src = "ROCK PAPER SCISSOR/COLORED ROCK.png";
                rockPlayer2.src = "ROCK PAPER SCISSOR/COLORED PAPER.png";

                turn2.textContent = "You won!";
                turn1.textContent = "You lost:(";
                turn2.style.backgroundColor = "rgb(0, 128, 0)";
                turn1.style.backgroundColor = "rgba(167, 0, 0, 1)";

                player2Score.textContent = p2score += 1;
                checkWinner();
            }, 2000);
        }

        else if(player1Pick === "rock" && player2Pick === "rock"){
            rockPlayer1.src = "ROCK PAPER SCISSOR/COLORED ROCK.png";
            rockPlayer2.src = "ROCK PAPER SCISSOR/COLORED ROCK.png";

            player1.classList.remove("player1");
            player1.offsetWidth; 
            player1.classList.add("player1");

            player2.classList.remove("player2");
            player2.offsetWidth; 
            player2.classList.add("player2");

            setTimeout(() => {
                rockPlayer1.src = "ROCK PAPER SCISSOR/COLORED ROCK.png";
                rockPlayer2.src = "ROCK PAPER SCISSOR/COLORED ROCK.png";

                turn2.textContent = "Game Draw";
                turn1.textContent = "Game Draw";
                turn2.style.backgroundColor = "rgb(128, 128, 128)";
                turn1.style.backgroundColor = "rgb(128, 128, 128)";
            }, 2000);
        }

        else if(player1Pick === "paper" && player2Pick === "rock"){
            rockPlayer1.src = "ROCK PAPER SCISSOR/COLORED ROCK.png";
            rockPlayer2.src = "ROCK PAPER SCISSOR/COLORED ROCK.png";

            player1.classList.remove("player1");
            player1.offsetWidth; 
            player1.classList.add("player1");

            player2.classList.remove("player2");
            player2.offsetWidth; 
            player2.classList.add("player2");

            setTimeout(() => {
                rockPlayer1.src = "ROCK PAPER SCISSOR/COLORED PAPER.png";
                rockPlayer2.src = "ROCK PAPER SCISSOR/COLORED ROCK.png";

                turn1.textContent = "You won!";
                turn2.textContent = "You lost:(";
                turn1.style.backgroundColor = "rgb(0, 128, 0)";
                turn2.style.backgroundColor = "rgba(167, 0, 0, 1)";

                player1Score.textContent = p1score += 1;
                checkWinner();
            }, 2000);
        }

        else if(player1Pick === "paper" && player2Pick === "scissor"){
            rockPlayer1.src = "ROCK PAPER SCISSOR/COLORED ROCK.png";
            rockPlayer2.src = "ROCK PAPER SCISSOR/COLORED ROCK.png";

            player1.classList.remove("player1");
            player1.offsetWidth; 
            player1.classList.add("player1");

            player2.classList.remove("player2");
            player2.offsetWidth; 
            player2.classList.add("player2");

            setTimeout(() => {
                rockPlayer1.src = "ROCK PAPER SCISSOR/COLORED PAPER.png";
                rockPlayer2.src = "ROCK PAPER SCISSOR/COLORED SCISSOR.png";

                turn2.textContent = "You won!";
                turn1.textContent = "You lost:(";
                turn2.style.backgroundColor = "rgb(0, 128, 0)";
                turn1.style.backgroundColor = "rgba(167, 0, 0, 1)";

                player2Score.textContent = p2score += 1;
                checkWinner();
            }, 2000);
        }

        else if(player1Pick === "paper" && player2Pick === "paper"){
            rockPlayer1.src = "ROCK PAPER SCISSOR/COLORED ROCK.png";
            rockPlayer2.src = "ROCK PAPER SCISSOR/COLORED ROCK.png";

            player1.classList.remove("player1");
            player1.offsetWidth; 
            player1.classList.add("player1");

            player2.classList.remove("player2");
            player2.offsetWidth; 
            player2.classList.add("player2");

            setTimeout(() => {
                rockPlayer1.src = "ROCK PAPER SCISSOR/COLORED PAPER.png";
                rockPlayer2.src = "ROCK PAPER SCISSOR/COLORED PAPER.png";

                turn2.textContent = "Game Draw";
                turn1.textContent = "Game Draw";
                turn2.style.backgroundColor = "rgb(128, 128, 128)";
                turn1.style.backgroundColor = "rgb(128, 128, 128)";
            }, 2000);
        }

        else if(player1Pick === "scissor" && player2Pick === "paper"){
            rockPlayer1.src = "ROCK PAPER SCISSOR/COLORED ROCK.png";
            rockPlayer2.src = "ROCK PAPER SCISSOR/COLORED ROCK.png";

            player1.classList.remove("player1");
            player1.offsetWidth; 
            player1.classList.add("player1");

            player2.classList.remove("player2");
            player2.offsetWidth; 
            player2.classList.add("player2");

            setTimeout(() => {
                rockPlayer1.src = "ROCK PAPER SCISSOR/COLORED SCISSOR.png";
                rockPlayer2.src = "ROCK PAPER SCISSOR/COLORED PAPER.png";

                turn1.textContent = "You won!";
                turn2.textContent = "You lost:(";
                turn1.style.backgroundColor = "rgb(0, 128, 0)";
                turn2.style.backgroundColor = "rgba(167, 0, 0, 1)";

                player1Score.textContent = p1score += 1;
                checkWinner();
            }, 2000);
        }

        else if(player1Pick === "scissor" && player2Pick === "rock"){
            rockPlayer1.src = "ROCK PAPER SCISSOR/COLORED ROCK.png";
            rockPlayer2.src = "ROCK PAPER SCISSOR/COLORED ROCK.png";

            player1.classList.remove("player1");
            player1.offsetWidth; 
            player1.classList.add("player1");

            player2.classList.remove("player2");
            player2.offsetWidth; 
            player2.classList.add("player2");

            setTimeout(() => {
                rockPlayer1.src = "ROCK PAPER SCISSOR/COLORED SCISSOR.png";
                rockPlayer2.src = "ROCK PAPER SCISSOR/COLORED ROCK.png";

                turn2.textContent = "You won!";
                turn1.textContent = "You lost:(";
                turn2.style.backgroundColor = "rgb(0, 128, 0)";
                turn1.style.backgroundColor = "rgba(167, 0, 0, 1)";

                player2Score.textContent = p2score += 1;
                checkWinner();
            }, 2000);
        }

        else if(player1Pick === "scissor" && player2Pick === "scissor"){
            rockPlayer1.src = "ROCK PAPER SCISSOR/COLORED ROCK.png";
            rockPlayer2.src = "ROCK PAPER SCISSOR/COLORED ROCK.png";

            player1.classList.remove("player1");
            player1.offsetWidth; 
            player1.classList.add("player1");

            player2.classList.remove("player2");
            player2.offsetWidth; 
            player2.classList.add("player2");

            setTimeout(() => {
                rockPlayer1.src = "ROCK PAPER SCISSOR/COLORED SCISSOR.png";
                rockPlayer2.src = "ROCK PAPER SCISSOR/COLORED SCISSOR.png";

                turn2.textContent = "Game Draw";
                turn1.textContent = "Game Draw";
                turn2.style.backgroundColor = "rgb(128, 128, 128)";
                turn1.style.backgroundColor = "rgb(128, 128, 128)";
            }, 2000);
        }

        player1Pick = null;
        player2Pick = null;
    }
}

function checkWinner(){
    if(p1score == 3){
        whowon.textContent = `${p1name.value} WON!`;
        popupContainer.style.display = "flex";
        overpopup.style.display = "flex";
        popup.style.display = "none";

        setTimeout(() => {
            popupContainer.style.opacity = "1";
            overpopup.style.opacity = "1";
        }, 10);

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
    else if(p2score == 3){
        whowon.textContent = `${p2name.value} WON!`;
        popupContainer.style.display = "flex";
        overpopup.style.display = "flex";
        popup.style.display = "none";

        setTimeout(() => {
            popupContainer.style.opacity = "1";
            overpopup.style.opacity = "1";
        }, 10);

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
            }, 2000);
        }
    }
}
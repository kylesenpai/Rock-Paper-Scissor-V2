const onePlayer = document.getElementById("one-player");
const twoPlayer = document.getElementById("two-player");
const loaderContainer = document.getElementById("loader-container");
const mainContainer = document.getElementById("main-container");
const startContainer = document.getElementById("start-container");
const nameContainer = document.getElementById("name-container");

setTimeout(() => {
  startContainer.style.opacity = '1';
  nameContainer.style.opacity = '1';
}, 1000);

onePlayer.onclick = function() {
  startContainer.style.opacity = '0';
  nameContainer.style.opacity = '0';
  loaderContainer.style.display = "flex";

  setTimeout(() => {
    loaderContainer.style.opacity = '1';
  }, 300);

  setTimeout(() => {
    window.location.href = "RockPaperScissor.html";
  }, 2500);
};

twoPlayer.onclick = function(){
  startContainer.style.opacity = '0';
  nameContainer.style.opacity = '0';
  loaderContainer.style.display = "flex";

  setTimeout(() => {
    loaderContainer.style.opacity = '1';
  }, 300);

  setTimeout(() => {
    window.location.href = "RockPaperScissor2Player.html";
  }, 2500);
}
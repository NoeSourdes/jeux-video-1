const perso = document.getElementById("perso");
const obstacle = document.getElementById("obstacle");

function start() {
  if (obstacle.classList != "obstacleAnimation") {
    obstacle.classList.add("obstacleAnimation");
  }
}
function saut() {
  if (perso.classList != "persoAnimation") {
    perso.classList.add("persoAnimation");
  }
  setTimeout(function () {
    perso.classList.remove("persoAnimation");
  }, 500);
}

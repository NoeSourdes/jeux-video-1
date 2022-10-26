const perso = document.getElementById("perso");
const obstacle = document.getElementById("obstacle");
const compteur = document.getElementById("compteur");
const perdu = document.getElementById("perdu");
const phrase = document.getElementById('phrase')
const yes = document.getElementById('yes')
const no = document.getElementById('no')
const pageRestart = document.getElementById('restart')

let point = 0;

function start() {
  if (obstacle.classList != "obstacleAnimation") {
    obstacle.classList.add("obstacleAnimation");
  }
}
function saut() {
  perso.classList.add("persoAnimation");
  setTimeout(function () {
    perso.classList.remove("persoAnimation");
    if (point == 10) {
      point = 0;
      let randomColor = Math.floor(Math.random() * 0xffffff).toString(16);
      document.body.style.backgroundColor = "#" + randomColor;
    }
    point += 1;
    compteur.innerHTML = point + "/10";
  }, 500);
}
document.addEventListener("keydown", (e) => {
  saut();
});

let verification = setInterval(function () {
  let persoTop = parseInt(
    window.getComputedStyle(perso).getPropertyValue("top")
  );
  let obstacleLeft = parseInt(
    window.getComputedStyle(obstacle).getPropertyValue("Left")
  );
  if (obstacleLeft < 20 && obstacleLeft > 0 && persoTop >= 185) {
    obstacle.classList = "none";
    document.body.style.background = "rgb(247, 118, 118)";
    pageRestart.style.visibility = "visible"
    pageRestart.style.backdropFilter = "blur(7px)"
    perdu.innerHTML = "PERDU !";
  }
}, 10);

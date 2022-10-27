const perso = document.getElementById("perso");
const obstacle = document.getElementById("obstacle");
const obstacle2 = document.getElementById("obstacle2");
const compteur = document.getElementById("compteur");
const perdu = document.getElementById("perdu");
const phrase = document.getElementById("phrase");
const no = document.getElementById("no");
const pageRestart = document.getElementById("restart");
const buttonStart = document.getElementById("start");
const buttonSauter = document.getElementById("sauter");
const gamePlay = document.getElementById("gameplay");

let compteurCouleur = 0;
let point = 0;
var debutCompteur;

function start() {
  if (obstacle.classList != "obstacleAnimation") {
    obstacle.classList.add("obstacleAnimation");
    obstacle2.classList.add("obstacle2Animation");
    buttonStart.style.display = "none";
    debutCompteur = setInterval(functionCompteur, 100);
  }
}
function functionCompteur() {
  point += 1;
  compteurCouleur += 1;
  compteur.innerHTML = point;
  if (compteurCouleur == 100) {
    compteurCouleur = 0;
    let randomColor = Math.floor(Math.random() * 0xffffff).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    buttonSauter.style.color = "#" + randomColor;
  }
  if (point == 350) {
    obstacle2.style.visibility = "visible";
  }
}
function saut() {
  perso.classList.add("persoAnimation");
  setTimeout(function () {
    perso.classList.remove("persoAnimation");
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
  let obstacle2Left = parseInt(
    window.getComputedStyle(obstacle2).getPropertyValue("Left")
  );
  let gamePlayWidht = parseInt(
    getComputedStyle(gamePlay).getPropertyValue("width")
  );
  if (gamePlayWidht == "500") {
    if (point >= 350) {
      if (obstacle2Left < 120 && obstacle2Left > 100 && persoTop >= 185) {
        obstacle.classList = "none";
        obstacle2.classList = "none";
        document.body.style.background = "rgb(247, 118, 118)";
        pageRestart.style.visibility = "visible";
        pageRestart.style.backdropFilter = "blur(7px)";
        perdu.innerHTML = "PERDU !";
        clearInterval(debutCompteur)
        phrase.innerHTML = "Ton score : "+point
      }
    }
    if (obstacleLeft < 120 && obstacleLeft > 100 && persoTop >= 185) {
      obstacle.classList = "none";
      obstacle2.classList = "none";
      document.body.style.background = "rgb(247, 118, 118)";
      pageRestart.style.visibility = "visible";
      pageRestart.style.backdropFilter = "blur(7px)";
      perdu.innerHTML = "PERDU !";
      clearInterval(debutCompteur)
      phrase.innerHTML = "Ton score : "+point
    }
  } else {
    if (point >= 350) {
      if (obstacle2Left < 100 && obstacle2Left > 80 && persoTop >= 100) {
        obstacle.classList = "none";
        obstacle2.classList = "none";
        document.body.style.background = "rgb(247, 118, 118)";
        pageRestart.style.visibility = "visible";
        pageRestart.style.backdropFilter = "blur(7px)";
        perdu.innerHTML = "PERDU !";
        clearInterval(debutCompteur)
        phrase.innerHTML = "Ton score : "+point
      }
    }
    if (obstacleLeft < 100 && obstacleLeft > 80 && persoTop >= 100) {
      obstacle.classList = "none";
      obstacle2.classList = "none";
      document.body.style.background = "rgb(247, 118, 118)";
      pageRestart.style.visibility = "visible";
      pageRestart.style.backdropFilter = "blur(7px)";
      perdu.innerHTML = "PERDU !";
      clearInterval(debutCompteur);
      phrase.innerHTML = "Ton score : " + point;
    }
  }
}, 10);
function restart() {
  obstacle.classList.add("obstacleAnimation");
  obstacle2.classList.add("obstacle2Animation");
  document.body.style.background = "#3782b9";
  buttonSauter.style.color = "#3782b9";
  pageRestart.style.visibility = "hidden";
  pageRestart.style.backdropFilter = "blur(0px)";
  point = 0;
  compteurCouleur = 0;
  debutCompteur = setInterval(functionCompteur, 100);
  obstacle2.style.visibility = "hidden";
}

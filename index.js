const perso = document.getElementById("perso");
const obstacle = document.getElementById("obstacle");

function start() {
  if (obstacle.classList != "obstacleAnimation") {
    obstacle.classList.add("obstacleAnimation");
  }
  const persoTop = parseInt(
    window.getComputedStyle(perso).getPropertyValue("top")
  );
  const obstacleLeft = parseInt(
    window.getComputedStyle(obstacle).getPropertyValue("left")
  );
  if (obstacleLeft < 20 && obstacleLeft > 0 && persoTop >= 130) {
    obstacle.style.obstacleAnimation = "none";
    alert("vous avez perdu !!");
  }
}

const drag = document.getElementById("dragon");
const warrior = document.getElementById("warrior");

let isDragTurn = true;

export function doBattle() {
  const width = window.innerWidth;
  if (isDragTurn) {
    isDragTurn = false;
    const dragList = drag.className;
    drag.classList = warrior.classList;
    setTimeout(() => {
      drag.className = dragList;
    }, width / 2);
  } else {
    isDragTurn = true;
    const warriorList = warrior.className;
    warrior.classList = drag.classList;
    setTimeout(() => {
      warrior.className = warriorList;
    }, width / 1.5);
  }
}

export function startBattle() {
  setInterval(() => {
    doBattle();
  }, 3500);
}

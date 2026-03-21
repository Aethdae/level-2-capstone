const drag = document.getElementById("dragon");
const warrior = document.getElementById("warrior");

let isDragTurn = true;

export function doBattle() {
  if (isDragTurn) {
    isDragTurn = false;
    const dragList = drag.className;
    drag.classList = warrior.classList;
    setTimeout(() => {
      drag.className = dragList;
    }, 200);
  } else {
    isDragTurn = true;
    const warriorList = warrior.className;
    warrior.classList = drag.classList;
    setTimeout(() => {
      warrior.className = warriorList;
    }, 200);
  }
}

export function startBattle() {
  setInterval(() => {
    doBattle();
  }, 3500);
}

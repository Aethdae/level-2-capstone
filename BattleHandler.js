const drag = document.getElementById("dragon");
const warrior = document.getElementById("warrior");
const battleArea = document.getElementById("battleArea");
const damageNumClasses = [
  "p-1",
  "bg-gray-200/80",
  "rounded-md",
  "border-2",
  "border-black",
];

let isDragTurn = true;

export function doBattle() {
  const width = window.innerWidth;
  if (isDragTurn) {
    isDragTurn = false;
    const dragList = drag.className;
    drag.classList = warrior.classList;
    displayDamage(warrior);
    setTimeout(() => {
      drag.className = dragList;
    }, width / 2);
  } else {
    isDragTurn = true;
    const warriorList = warrior.className;
    warrior.classList = drag.classList;
    displayDamage(drag);
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

function displayDamage(damageReciever) {
  const damageNum = document.createElement("p");
  damageNum.innerText = getDamageNum();
  damageNum.classList = damageReciever.classList;
  damageNum.classList.add(...damageNumClasses);
  if (isDragTurn) {
    setTimeout(() => {
      damageNum.classList.remove("top-[2%]");
      damageNum.classList.add("top-[-8%]");
      setTimeout(() => {
        battleArea.removeChild(damageNum);
      }, 1000);
    }, 1);
  } else {
    setTimeout(() => {
      damageNum.classList.remove("top-[50%]");
      damageNum.classList.add("top-[40%]");
      setTimeout(() => {
        battleArea.removeChild(damageNum);
      }, 1000);
    }, 1);
  }
  damageNum.style.zIndex = 2;
  battleArea.appendChild(damageNum);
}
function getDamageNum() {
  return Math.floor(Math.random() * 90);
}

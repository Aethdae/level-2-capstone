const drag = document.getElementById("dragon");
const warrior = document.getElementById("warrior");
const battleArea = document.getElementById("battleArea");
const damageNumClasses = [
  "p-2",
  "bg-gray-200/80",
  "rounded-2xl",
  "border-2",
  "border-black/20",
  "font-bold",
  "text-lg",
];

let isDragTurn = Math.random <= 0.5;

export function doBattle() {
  const width = window.innerWidth;
  if (isDragTurn) {
    isDragTurn = false;
    const dragList = drag.className;
    drag.classList = warrior.classList;
    if (document.visibilityState === "visible") {
      displayDamage(warrior);
    }
    setTimeout(() => {
      drag.className = dragList;
    }, width / 2);
  } else {
    isDragTurn = true;
    const warriorList = warrior.className;
    warrior.classList = drag.classList;
    if (document.visibilityState === "visible") {
      displayDamage(drag);
    }
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
  damageNum.textContent = getDamageNum();
  damageNum.classList = damageReciever.classList;
  damageNum.classList.add(...damageNumClasses);
  if (damageReciever === drag) {
    setTimeout(() => {
      drag.classList.add("translate-x-[16px]");
      setTimeout(() => {
        drag.classList.remove("translate-x-[16px]");
      }, 200);

      damageNum.classList.remove("top-[2%]");
      damageNum.classList.add("top-[-8%]");
      setTimeout(() => {
        battleArea.removeChild(damageNum);
      }, 1000);
    }, 1);
  } else {
    setTimeout(() => {
      warrior.classList.add("translate-x-[-16px]");
      setTimeout(() => {
        warrior.classList.remove("translate-x-[-16px]");
      }, 200);
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

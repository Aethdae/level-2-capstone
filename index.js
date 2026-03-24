import { UserResponse, AIBeginning } from "./Responses.js";
import { getKey } from "./keys.js";
import { createEvent } from "./ChatHandler.js";
import { startBattle } from "./BattleHandler.js";

const container = document.getElementById("container");
const chatContainer = document.getElementById("chatContainer");
const form = document.getElementById("responseForm");
const textArea = document.getElementById("textArea");
const chatHeader = document.getElementById("chatHeader");
const altButton = document.getElementById("altButton");

let isChatDisplayed = false;
main();

async function main() {
  createEvent(altButton);
  createEvent(chatHeader);
  startBattle();

  //! Remove before post
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    fakeRender(
      "Sample text ofeiaj foieaj foieaj foieaj f ofeiaj foieaj foieaj foieaj f ",
      Math.random() < 0.5 ? true : false,
    );
  });
  //const apiKey = await getKey();
  //showChatInitial();

  let prevReponseID = "";
  const begin = new AIBeginning(apiKey);
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const userResponse = new UserResponse(
      prevReponseID,
      event.target.textArea.value,
      apiKey,
    );
    textArea.value = "";
    userResponse.render();
    const aiResponse = await userResponse.sendResponse();
    aiResponse.render();
  });
  await begin.getInitial();
  begin.render();
  prevReponseID = begin.previous;
}

//! Remove before post
function fakeRender(text, isRight) {
  const userClasses = ["self-end", "bg-green-300"];
  const aiClasses = ["self-start", "bg-blue-300"];
  const container = document.getElementById("outputContainer");
  const bubble = document.createElement("div");
  const text2 = document.createElement("p");

  bubble.className =
    "max-w-[70%] max-w-[70%] p-2 rounded-3xl border-2 shadow-xl";
  if (isRight) {
    bubble.classList.add(...userClasses);
  } else {
    bubble.classList.add(...aiClasses);
  }

  text2.textContent = text;
  container.appendChild(bubble);
  bubble.appendChild(text2);
  container.scrollTop = container.scrollHeight;
}

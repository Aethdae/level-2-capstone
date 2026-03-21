import { UserResponse, AIResponse, AIBeginning } from "./Responses.js";
import { getKey } from "./keys.js";
import { ChatHandler } from "./ChatHandler.js";
import { startBattle, doBattle } from "./BattleHandler.js";

const container = document.getElementById("container");
const chatContainer = document.getElementById("chatContainer");
const form = document.getElementById("responseForm");
const textArea = document.getElementById("textArea");
const chatHeader = document.getElementById("chatHeader");

let isChatDisplayed = false;
main();

async function main() {
  chatHeader.addEventListener("click", () => {
    isChatDisplayed = !isChatDisplayed;
    ChatHandler(isChatDisplayed);
  });
  startBattle();

  //! Remove before post
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    fakeRender(
      "Sample text ofeiaj foieaj foieaj foieaj f ofeiaj foieaj foieaj foieaj f ",
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
  console.log(prevReponseID);
}

function showChatInitial() {
  chatContainer.classList.add("bottom-[14rem]");
  chatContainer.classList.remove("bottom-[-24rem]");
  isChatDisplayed = true;
}

//! Remove before post
function fakeRender(text) {
  const container = document.getElementById("outputContainer");
  const bubble = document.createElement("div");
  const text2 = document.createElement("p");

  bubble.className =
    "max-w-[70%] odd:self-end even:self-start max-w-[70%] p-2 rounded-3xl border-2 shadow-xl even:bg-blue-300 odd:bg-green-300";

  text2.textContent = text;
  container.appendChild(bubble);
  bubble.appendChild(text2);
  container.scrollTop = container.scrollHeight;
}

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

main();

async function main() {
  createEvent(altButton);
  createEvent(chatHeader);
  startBattle();

  const apiKey = await getKey();
  showChatInitial();

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

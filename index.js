import { UserResponse, AIResponse, AIBeginning } from "./Responses.js";
//todo replace with external call
import { getKey } from "./keys.js";

const container = document.getElementById("container");
const form = document.getElementById("responseForm");
const textArea = document.getElementById("textArea");

async function main() {
  const apiKey = await getKey();
  let prevReponseID = "";
  //const begin = new AIBeginning();
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const userResponse = new UserResponse(
      prevReponseID,
      event.target.textArea.value,
    );
    textArea.value = "";
    userResponse.render();
    const aiResponse = await userResponse.sendResponse();
    aiResponse.render();
  });
  //await begin.getInitial();
  //begin.render();
  //prevReponseID = begin.previous;
  console.log(prevReponseID);
}

main();

import { UserResponse, AIResponse } from "./Responses.js";
//todo replace with external call
import { API_KEY } from "./keys.js";

const container = document.getElementById("container");
const uR = new AIResponse();

async function main() {
  await uR.sendResponse();
  uR.render();
  console.log(uR);
}

main();

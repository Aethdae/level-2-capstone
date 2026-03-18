import { UserResponse, AIResponse, AIBeginning } from "./Responses.js";
import { getKey } from "./keys.js";

const container = document.getElementById("container");
const form = document.getElementById("responseForm");
const textArea = document.getElementById("textArea");

async function main() {
  //const apiKey = await getKey();
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

main();

fakeRender(
  "texts aefoij aefoij aefoij aefoij aefoij aeofij aeofij aefoija feoiaj efoaijfe aoifej aofiej aofeija ofieja ofeiaj foieaj foieaj foieaj foeaijf eaoifj eaoifj eaoifj aoeifj asodifj aiosdfjhgv aieur5hg laedjrfvn alerufvh adkrfjvna elriuvha dlriuvha elirv",
);
fakeRender(
  "texts aefoij aefoij aefoij aefoij aefoij aeofij aeofij aefoija feoiaj efoaijfe aoifej aofiej aofeija ofieja ofeiaj foieaj foieaj foieaj foeaijf eaoifj eaoifj eaoifj aoeifj asodifj aiosdfjhgv aieur5hg laedjrfvn alerufvh adkrfjvna elriuvha dlriuvha elirv",
);
fakeRender(
  "texts aefoij aefoij aefoij aefoij aefoij aeofij aeofij aefoija feoiaj efoaijfe aoifej aofiej aofeija ofieja ofeiaj foieaj foieaj foieaj foeaijf eaoifj eaoifj eaoifj aoeifj asodifj aiosdfjhgv aieur5hg laedjrfvn alerufvh adkrfjvna elriuvha dlriuvha elirv",
);
fakeRender(
  "texts aefoij aefoij aefoij aefoij aefoij aeofij aeofij aefoija feoiaj efoaijfe aoifej aofiej aofeija ofieja ofeiaj foieaj foieaj foieaj foeaijf eaoifj eaoifj eaoifj aoeifj asodifj aiosdfjhgv aieur5hg laedjrfvn alerufvh adkrfjvna elriuvha dlriuvha elirv",
);

function fakeRender(text) {
  const container = document.getElementById("container");
  const bubble = document.createElement("div");
  const text2 = document.createElement("p");

  bubble.className =
    "max-w-[70%] odd:self-end even:self-start max-w-[70%] p-2 rounded-3xl border-2 shadow-xl even:bg-blue-300 odd:bg-green-300";

  text2.textContent = text;
  container.appendChild(bubble);
  bubble.appendChild(text2);
}

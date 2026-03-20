import { UserResponse, AIResponse, AIBeginning } from "./Responses.js";
import { getKey } from "./keys.js";

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
    if (isChatDisplayed) {
      if (chatContainer.clientWidth < 400) {
        chatContainer.classList.add("bottom-[14rem]");
        chatContainer.classList.remove("bottom-[-12rem]");
      }
    } else {
      if (chatContainer.clientWidth < 400) {
        chatContainer.classList.remove("bottom-[14rem]");
        chatContainer.classList.add("bottom-[-12rem]");
      }
    }
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
fakeRender(
  "texts aefoij aefoij aefoij aefoij aefoij aeofij aeofij aefoija feoiaj efoaijfe aoifej aofiej aofeija ofieja ofeiaj foieaj foieaj foieaj foeaijf eaoifj eaoifj eaoifj aoeifj asodifj aiosdfjhgv aieur5hg laedjrfvn alerufvh adkrfjvna elriuvha dlriuvha elirv",
);

function fakeRender(text) {
  const container = document.getElementById("outputContainer");
  const bubble = document.createElement("div");
  const text2 = document.createElement("p");

  bubble.className =
    "max-w-[70%] odd:self-end even:self-start max-w-[70%] p-2 rounded-3xl border-2 shadow-xl even:bg-blue-300 odd:bg-green-300";

  text2.textContent = text;
  container.appendChild(bubble);
  bubble.appendChild(text2);
}

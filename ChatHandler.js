const chatContainer = document.getElementById("chatContainer");
const aiAssistantHeader = document.getElementById("aiAssistantHeader");
const activeClasses = ["bottom-[1rem]"];
const inactiveClasses = [
  "bottom-[-24rem]",
  "md:bottom-[-24rem]",
  "lg:bottom-[-34rem]",
];
const headerInactive = ["after:content-['_▲']"];
const headerActive = ["after:content-['_▼']"];

let isChatDisplayed = false;

//todo add other sizes to classes
export function chatHandler() {
  isChatDisplayed = !isChatDisplayed;
  if (isChatDisplayed) {
    aiAssistantHeader.classList.remove(...headerInactive);
    aiAssistantHeader.classList.add(...headerActive);
    chatContainer.classList.add(...activeClasses);
    chatContainer.classList.remove(...inactiveClasses);
  } else {
    aiAssistantHeader.classList.add(...headerInactive);
    aiAssistantHeader.classList.remove(...headerActive);
    chatContainer.classList.remove(...activeClasses);
    chatContainer.classList.add(...inactiveClasses);
  }
}

export function createEvent(element) {
  element.addEventListener("click", chatHandler);
}

import { API_KEY } from "/keys.js";

export class UserResponse {
  constructor(previous, response) {
    this.previous = previous;
    this.response = response;
  }
}

export class AIResponse {
  constructor(previous, response) {
    this.previous = previous;
    this.response = response;
  }
  async sendResponse() {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-goog-api-key": API_KEY,
      },
      body: JSON.stringify({
        model: "gemini-2.5-flash-lite",
        input:
          "You are a chatbot designed to help people create monsters for tabletop RPG games. Keep your responses system agnostic to reduce the user needing to convert mechanics. Start this first response with 'What can I help create today: a boss, a minion, or something else?'",
      }),
    };
    try {
      const res = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/interactions",
        options,
      );
      const data = await res.json();
      this.previous = data.id;
      this.response = data.outputs[1].text;
      console.log(this);
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    const container = document.getElementById("container");
    const bubble = document.createElement("div");
    const text = document.createElement("p");

    text.textContent = this.response;
    container.appendChild(bubble);
    bubble.appendChild(text);
  }
}

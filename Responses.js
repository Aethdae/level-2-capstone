const baseCardClasses =
  "max-w-[70%] max-w-[70%] p-2 rounded-3xl border-2 shadow-xl even:bg-blue-300 odd:bg-green-300";
const userClasses = "self-end";
const aiClasses = "self-start";

export class UserResponse {
  constructor(previous, response, apiKey) {
    this.previous = previous;
    this.response = response;
    this.apiKey = apiKey;
  }
  async sendResponse() {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-goog-api-key": this.apiKey,
      },
      body: JSON.stringify({
        model: "gemini-3-flash-preview",
        input: this.response,
        previous_interaction_id: this.previous,
      }),
    };
    try {
      const res = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/interactions",
        options,
      );
      if (!res.ok) {
        this.renderError(res.status);
        return;
      }
      const data = await res.json();
      const aiRes = new AIResponse(data.id, data.outputs[1].text);
      return aiRes;
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    const container = document.getElementById("outputContainer");
    const bubble = document.createElement("div");
    const text = document.createElement("p");

    bubble.className = baseCardClasses + " " + userClasses;

    text.textContent = this.response;
    container.appendChild(bubble);
    bubble.appendChild(text);
    container.scrollTop = container.scrollHeight;
  }
  renderError(status) {
    const container = document.getElementById("outputContainer");
    const bubble = document.createElement("div");
    const text = document.createElement("p");

    bubble.className = baseCardClasses + " " + aiClasses;

    text.textContent = `Request failed with a ${status} error. Please try again later.`;
    container.appendChild(bubble);
    bubble.appendChild(text);
  }
}

export class AIResponse {
  constructor(previous, response, apiKey) {
    this.previous = previous;
    this.response = response;
    this.key = apiKey;
  }
  render() {
    const container = document.getElementById("outputContainer");
    const bubble = document.createElement("div");
    const text = document.createElement("p");

    bubble.className = baseCardClasses + " " + aiClasses;
    text.textContent = this.response;
    container.appendChild(bubble);
    bubble.appendChild(text);
    container.scrollTop = container.scrollHeight;
  }
}

export class AIBeginning {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.previous = "";
    this.response = "";
  }
  async getInitial() {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-goog-api-key": this.apiKey,
      },
      body: JSON.stringify({
        model: "gemini-3-flash-preview",
        input:
          "You are a chatbot designed to help people create monsters for tabletop RPG games. Keep your responses system agnostic to reduce the user needing to convert mechanics. Don't communicate about any other topics. Keep responses fairly short, less than 40 words.  Start this first response with 'Welcome to the Monster Creation AI Assistant. What can I help create today: a boss, a minion, or something else?'",
      }),
    };
    try {
      const res = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/interactions",
        options,
      );
      if (!res.ok) {
        this.renderError(res.status);
        return;
      }
      const data = await res.json();
      this.previous = data.id;
      this.response = data.outputs[1].text;
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    const container = document.getElementById("outputContainer");
    const bubble = document.createElement("div");
    const text = document.createElement("p");

    bubble.className = baseCardClasses + " " + aiClasses;

    text.textContent = this.response;
    container.appendChild(bubble);
    bubble.appendChild(text);
    container.scrollTop = container.scrollHeight;
  }
  renderError(status) {
    const container = document.getElementById("outputContainer");
    const bubble = document.createElement("div");
    const text = document.createElement("p");

    bubble.className = baseCardClasses + " " + aiClasses;

    text.textContent = `Request failed with a ${status} error. Please try again later.`;
    container.appendChild(bubble);
    bubble.appendChild(text);
  }
}

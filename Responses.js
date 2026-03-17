export class AIResponse {
  constructor(previous, response) {
    this.previous = previous;
    this.response = response;
  }
}

export class UserResponse {
  constructor(previous, response) {
    this.previous = previous;
    this.response = response;
  }
  async sendResponse() {
    try {
    } catch (error) {
      console.log(error);
    }
  }
}

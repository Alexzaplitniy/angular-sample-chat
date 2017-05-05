/**
 * @class Message
 */
export default class Message {
  /**
   * @param {string} message
   * @param {string} author
   */
  constructor(message, author) {
    this.time = Date.now();
    this.message = message;
    this.author = author;
  }
}

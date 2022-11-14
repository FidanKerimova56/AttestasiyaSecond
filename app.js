class Message {
  constructor(author_name, text_body) {
    this.author_name = author_name;
    this.sending_time = new Date();
    this.text_body = text_body;
  }
  toString() {
    return `${this.sending_time.getHours()}:${this.sending_time.getMinutes()}  ${this.author_name}: ${this.text_body}`;
  }
}

class Messenger {
  constructor() {
    this.messages = [];
  }
  show_history() {
    this.messages.forEach((item) => console.log(item));
  }
  send(author_name, text_body) {
    const message = new Message(author_name,text_body);
    this.messages.push(message.toString());
  }
}

let messenger = new Messenger()
messenger.send('Adil','ilk mesaj');
messenger.send('Meryem','ikinci mesaj');
messenger.show_history()

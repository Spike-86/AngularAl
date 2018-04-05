import { Injectable } from '@angular/core';

export enum Typemsg {INFO, ERROR, WARNING}


export interface IMessage {
  text: string;
  type: Typemsg;
}

@Injectable()
export class MessagesService {

  private messages: Array<IMessage> = [];
  private messagesEdited: Array<IMessage> = [];
  private countViewMsg = 10;

  constructor() { }

  addMessage(msg: IMessage) {
    this.messages.push(msg);
    this.getMessages();
  }

  getMessages(): Array<IMessage> {
    return this.messagesEdited = this.messages.slice(- 1 * this.countViewMsg);
  }

  setCountMsg(count: number) {
    if (count < 1 || count > 100) {
      this.countViewMsg = 10;
    } else {
      this.countViewMsg = count;
    }
  }

}

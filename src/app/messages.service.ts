import { Injectable } from '@angular/core';

export enum Typemsg {INFO, ERROR, WARNING}


export interface IMessage {
  text: string;
  type: Typemsg;
}

@Injectable()
export class MessagesService {

  private messages: Array<IMessage> = [];
  private countViewMsg = 10;

  constructor() { }

  addMessage(msg: IMessage) {

    this.messages.push(msg);

  }

  getMessages(): Array<IMessage> {

    return this.messages;
  }

}

import { Injectable } from '@angular/core';
import { Guid } from 'guid-typescript';

export enum Typemsg {INFO, ERROR, WARNING}


export interface IMessage {
  id: string;
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
    // this.getMessages();
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

  getId(): string {
    return Guid.create().toString();
  }

  deleteMsg(id) {
   const index = this.messages.map(function(x) {
     return x.id; }).indexOf(id);
   this.messages.splice(index, 1);
   console.log(this.messages);
  }
}

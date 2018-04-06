import { Component, OnInit } from '@angular/core';
import { MessagesService, Typemsg, IMessage } from '../messages.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  public messages: Array<IMessage> = [];

  constructor(public msg: MessagesService) { }


  ngOnInit() {
    this.messages = this.msg.getMessages();
  }

  setCountMsg(inCount) {
    this.msg.setCountMsg(inCount);
  }

  deleteMsg(id: string) {
    console.log(id);
    this.msg.deleteMsg(id);
  }

}

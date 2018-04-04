import { Component, OnInit } from '@angular/core';
import { MessagesService, Typemsg, IMessage } from '../messages.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  public messages: Array<IMessage> = [];

  constructor(private msg: MessagesService) { }


  ngOnInit() {
    this.update();
  }

  setCountMsg(inCount) {
    this.msg.setCountMsg(inCount);
  }

  update() {
    console.log(this.msg.getMessages());
    this.messages = this.msg.getMessages();
  }
}

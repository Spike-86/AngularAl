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
    this.messages = this.msg.getMessages();
  }
}

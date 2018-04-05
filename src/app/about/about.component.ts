import { Component, OnInit } from '@angular/core';
import { MessagesService, Typemsg } from '../messages.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private msg: MessagesService) { }

  ngOnInit() {
  }

  addMsg() {
    this.msg.addMessage({text: 'About test', type: Typemsg.INFO, id: this.msg.getId()});
  }

}

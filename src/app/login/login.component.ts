import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { AuthService } from '../auth.service';
import { MessagesService, Typemsg } from '../messages.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  passIn: string;
  nameIn: string;

  constructor(private auth: AuthService, private router: Router, private msg: MessagesService) {}

  logIn() {

    const name = this.nameIn;
    const password = this.passIn;

    this.auth.logIn(name, password).subscribe(data => {
        if (this.auth.checkLogin()) {
          this.msg.addMessage({text: 'Login true', type: Typemsg.INFO});
          this.router.navigate(['/about']);
        } else {
          this.msg.addMessage({text: 'Login false', type: Typemsg.ERROR});
        }
      });
  }

  ngOnInit() {
  }
}

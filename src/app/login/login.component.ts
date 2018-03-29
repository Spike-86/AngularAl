import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  passIn: string;
  nameIn: string;

  constructor(private auth: AuthService, private router: Router) {}

  logIn() {

    const name = this.nameIn;
    const password = this.passIn;


  const ff =  this.auth.logIn(name, password);
    ff.subscribe(data => {
        if (this.auth.checkLogin()) {
          this.router.navigate(['/about']);
        } else {
          alert('неверные данные в авторизации');
        }
      });
  }

  ngOnInit() {
  }
}

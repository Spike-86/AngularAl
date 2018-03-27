import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { FormsModule} from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { NgForm} from '@angular/forms';


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

  logIn(e: any) {

    const name = this.nameIn; // e.target[0].value;
    const password = this.passIn; // e.target[1].value;

    // console.log(name);
    // console.log(password);

    // this.auth.logIn(name, password);


  const ff =  this.auth.logIn(name, password);
    ff.subscribe(data => {
        // console.log('auth.logIn', data);

        if (this.auth.checkLogin()) {
          this.router.navigate(['/about']);
        } else {
          // console.log('неверные данные в авторизации');
        }
      }
    );
  }
  testIn(e: any) {
    // console.log(e.target);
  }


  ngOnInit() {
  }

}

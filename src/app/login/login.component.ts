import { Component, OnInit} from '@angular/core';
import { AuthService } from '../auth.service';
import {Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) {}

  logIn(name: string, pass: string) {

  const ff =  this.auth.logIn(name, pass);
    ff.subscribe(data => {
        console.log('auth.logIn', data);
        this.router.navigate(['/about']);
      }
    );

    //  this.router.navigate(['/about']);

  console.log('21312');


  }

  ngOnInit() {
  }

}

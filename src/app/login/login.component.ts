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

  constructor(private auth: AuthService, private router: Router) {}

  logIn(form: NgForm) {
    console.log(form.value);

  // const ff =  this.auth.logIn(name, pass);
  //   ff.subscribe(data => {
  //       console.log('auth.logIn', data);
  //       this.router.navigate(['/about']);
  //     }
  //   );

    //  this.router.navigate(['/about']);

  console.log('21312');


  }


  ngOnInit() {
  }

}

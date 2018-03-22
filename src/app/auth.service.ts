import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Md5 } from 'ts-md5/dist/md5';
import { GlobalConfService} from './global-conf.service';
import { IResponseLogin } from './templatesAPI/tempAPI';

@Injectable()

export class AuthService {
   md5 = new Md5();
   private FIO: string;
   private header: string;
   private logBool: boolean;

  private loginUrl = 'http://10.31.141.71:83/v1/auth/login';
  // private logoutUrl = "http://mysite2:83/v1/auth/logout";
  private urlToFile;

  constructor(private http: HttpClient, private globConf: GlobalConfService) {
    // sessionStorage.setItem('Login', 'false');
    this.logBool = false;
  }

  checkLogin(): boolean {

    // const val = sessionStorage.getItem('Login');
    //
    // if (val === 'true') {
    //   return tjis;
    // } else {
    //   return false;
    // }
    return this.logBool;
  }

  logIn(name1: string, pass1: string): Observable<boolean>  {

    const test = Md5.hashStr('test');
    const pass = Md5.hashStr('test');

    sessionStorage.setItem('Login', 'true');

    const body = '{"login":"' + test + '","pass":"' + pass + '"}';

    if (this.globConf.getDebugMe()) {
      console.log('server');

      return this.http.post<IResponseLogin>(this.loginUrl, body).map(value  => {

          const resp: IResponseLogin = value;

          const jsonHeader = resp.header;
          this.FIO = resp.fio;
          this.header = jsonHeader;

          if (jsonHeader.length === 0) {
            this.logBool = false;
          } else {
            this.logBool = true;
          }

          return this.logBool;

        },
        error => {
          // error - объект ошибки
          console.log(error);

          return this.logBool = false;
        });
    } else {

      console.log('local');
      return this.http.get<IResponseLogin>('./assets/login.json').map(value  => {

          const resp: IResponseLogin = value;

          const jsonHeader = resp.header;
          this.FIO = resp.fio;
          this.header = jsonHeader;

          if (jsonHeader.length === 0) {
            this.logBool = false;
          } else {
            this.logBool = true;
          }

          return this.logBool;

        },
        error => {
          // error - объект ошибки
          console.log(error);

          return this.logBool = false;
        });
    }
  }

  logOut(): boolean {
    // sessionStorage.setItem('Login', 'false');
    this.FIO = '';
    this.header = '';
    return this.logBool = false;
  }

  getFIO(): string {
    return this.FIO;
  }
}

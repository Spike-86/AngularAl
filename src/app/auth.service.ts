import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Md5 } from 'ts-md5/dist/md5';
import { GlobalConfService} from './global-conf.service';
import { IResponseLogin } from './templatesAPI/tempAPI';
import { MessagesService, Typemsg } from './messages.service';

@Injectable()

export class AuthService {
   md5 = new Md5();
   private FIO: string;
   private header: string;
   private logBool: boolean;
   private token: string;

  private loginUrl = 'http://10.31.141.71:83/v1/auth/login';
  private urlToFile;

  constructor(private http: HttpClient, private globConf: GlobalConfService, private msg: MessagesService) {
    this.logBool = false;
  }

  checkLogin(): boolean {
    return this.logBool;
  }

  logIn(name1: string, pass1: string): Observable<boolean>  {

    const name = Md5.hashStr(name1);
    const pass = Md5.hashStr(pass1);

    sessionStorage.setItem('Login', 'true');

    const body = '{"login":"' + name + '","pass":"' + pass + '"}';

    if (this.globConf.getDebugMe()) {
      // console.log('server');

      return this.http.post<IResponseLogin>(this.loginUrl, body).map(value  => {

          const resp: IResponseLogin = value;

          const jsonHeader = resp.header;
          this.FIO = resp.fio;
          this.header = jsonHeader;
          this.token = resp.token;

          // console.log(this.token);

          if (this.token.length === 0) {
            this.logBool = false;
            this.msg.addMessage({text: 'Login false', type: Typemsg.ERROR});
          } else {
            this.logBool = true;
            this.msg.addMessage({text: 'Login true', type: Typemsg.INFO});
          }

          return this.logBool;

        },
        error => {
          // error - объект ошибки
          // console.log(error);

          return this.logBool = false;
        });
    } else {

      // console.log('local');
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
          // console.log(error);

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

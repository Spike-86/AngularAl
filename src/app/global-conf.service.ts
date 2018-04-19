import { Injectable } from '@angular/core';

@Injectable()
export class GlobalConfService {

  private production = true;

  private urlList = {
    pathToLogin: 'http://10.31.141.71:83/v1/auth/login',
    pathToModification: 'http://10.31.141.71:83/v1/provider/modification'
  };

  getDebugMe(): boolean {
      return this.production;
  }

  getUrl(key: string): any {
      return this.urlList[key];
  }
  constructor() {
  }

}

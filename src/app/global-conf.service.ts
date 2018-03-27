import { Injectable } from '@angular/core';

@Injectable()
export class GlobalConfService {

  private debug = true;

  getDebugMe(): boolean {
    return this.debug;
  }

  constructor() { }

}

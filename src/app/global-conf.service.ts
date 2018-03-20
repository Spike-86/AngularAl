import { Injectable } from '@angular/core';

@Injectable()
export class GlobalConfService {

  private debug = false;

  getDebugMe(): boolean {
    return this.debug;
  }

  constructor() { }

}

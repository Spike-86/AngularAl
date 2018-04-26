import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { GlobalConfService } from '../global-conf.service';
import { IModification } from '../templatesAPI/tempAPI';


@Injectable()
export class ModificationListService {

  constructor(private glbCong: GlobalConfService, private http: HttpClient) { }

  getModificationList() {
    const url = this.glbCong.getUrl('pathToModification');
    return this.http.get<IModification[]>(url);
  }

  addNewModification(newmodification: IModification) {

  }

}

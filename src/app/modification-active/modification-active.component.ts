import { Component, OnInit } from '@angular/core';
import { ModificationListService } from '../modification/modification.service';
import { IModification } from '../templatesAPI/tempAPI';
import { MessagesService } from '../messages.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModificationAddDialogComponent } from '../modification-add-dialog/modification-add-dialog.component';


@Component({
  selector: 'app-modification-active',
  templateUrl: './modification-active.component.html',
  styleUrls: ['./modification-active.component.css']
})
export class ModificationActiveComponent implements OnInit {

  modificationList: Array<IModification> = [];


  constructor(private mdfList: ModificationListService, private msg: MessagesService, public dialog: MatDialog) { }


  ngOnInit() {
    this.mdfList.getModificationList().subscribe(result => {
      this.modificationList = result;
      console.log(this.modificationList);
    });
  }

  addModification() {

    const dialogRef = this.dialog.open(ModificationAddDialogComponent, {
      width: '50vw',
      height: '50vh',
      disableClose: true


      // data: { name: this.name }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('closed', result);
    });

  }

}


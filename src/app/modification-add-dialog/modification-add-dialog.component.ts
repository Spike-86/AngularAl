import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';



@Component({
  selector: 'app-modification-add-dialog',
  templateUrl: './modification-add-dialog.component.html',
  styleUrls: ['./modification-add-dialog.component.css']
})
export class ModificationAddDialogComponent implements OnInit {

  constructor (private dialogRef: MatDialogRef<ModificationAddDialogComponent>) { }

  ngOnInit() {
  }

  closeDialog() {
    this.dialogRef.close();
  }

}

import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import { FormArray, FormBuilder, FormGroup, FormControl } from '@angular/forms';



@Component({
  selector: 'app-modification-add-dialog',
  templateUrl: './modification-add-dialog.component.html',
  styleUrls: ['./modification-add-dialog.component.css']
})
export class ModificationAddDialogComponent implements OnInit {

  // nameModification: string;
  // descriptionModification: string;
  // dataToStart: string;
  form: FormGroup;

  constructor (private dialogRef: MatDialogRef<ModificationAddDialogComponent>, private fb: FormBuilder) {
    this.form = this.fb.group({
      nameModification: '',
      descriptionModification: '',
      dataToStart: ''
    });
  }

  ngOnInit() {
  }

  closeDialog() {
    this.dialogRef.close();
  }

  saveModification() {

    console.log(JSON.stringify(this.form.value));

    // console.log(this.nameModification, '-', this.dataToStart , '-', this.descriptionModification);
    // if (this.nameModification && this.dataToStart) {
    //   this.dialogRef.close('save');
    // } else {
    //   alert('не заполнены поля');
    // }

  }

}

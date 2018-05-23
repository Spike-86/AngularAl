import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import { FormArray, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';



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
  }

  ngOnInit() {
    this.form = new FormGroup({
      'nameModification': new FormControl('', [Validators.required, Validators.minLength(5)]),
      'descriptionModification': new FormControl('', [Validators.required]),
      'dataToStart': new FormControl()
    });
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

  get nameModification() { return this.form.get('nameModification'); }

}

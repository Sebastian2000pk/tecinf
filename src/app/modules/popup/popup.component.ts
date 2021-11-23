import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  dataGroup: FormGroup = new FormGroup({});
  title: string = "Crear";

  listTypes: any[] = [];


  constructor(
    public dialogRef: MatDialogRef<PopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    const { dataAdviser } = data;
    if (dataAdviser.id) {
      this.title = "Editar";
    }
    this.listTypes = data.listTypes ?? [];

    this.dataGroup = new FormGroup({
      id: new FormControl(dataAdviser.id ?? null),
      name: new FormControl(dataAdviser.name, Validators.required),
      email: new FormControl(dataAdviser.email, Validators.required),
      phone: new FormControl(dataAdviser.phone, Validators.required),
      type: new FormControl(dataAdviser.type ?? null, Validators.required),
    });
  }

  ngOnInit(): void {
  }


}

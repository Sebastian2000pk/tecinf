import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

// Modules
import { PopupComponent } from '../popup/popup.component';

// Services
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  listAdvisers: any[] = [];
  listTypes: any[] = [];

  dataAdviser: any = {};

  constructor(
    private homeServices: HomeService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getTypes();
    this.getAllAdvisers();
  }

  getAllAdvisers() {
    this.homeServices.getAllAdvisers().subscribe(
      (data: any) => this.listAdvisers = data,
      error => console.log(error)
    );
  }

  createUpdate(data: any) {
    this.homeServices.createUpdate(data).subscribe(
      data => this.getAllAdvisers(),
      error => console.log(error)
    );
  }

  save(result: any) {
    const data = {
      id: result.id.value,
      name: result.name.value,
      phone: result.phone.value,
      email: result.email.value,
      type: result.type.value
    };
    this.createUpdate(data);
  }

  newAdviser() {
    this.dataAdviser = {};
    this.openDialog();
  }

  select(data: any) {
    this.dataAdviser = data;
    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PopupComponent, {
      data: {
        dataAdviser: this.dataAdviser, 
        listTypes: this.listTypes},
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.save(result);
      }
    });
  }

  delete(id: number) {
    const result = confirm('¿Está seguro de eliminar este registro?');
    if (result) {
      this.homeServices.delete(id).subscribe(
        data => this.getAllAdvisers(),
        error => console.log(error)
      );
    }
  }

  getTypes() {
    this.homeServices.getTypes().subscribe(
      (data: any) => this.listTypes = data,
      error => console.log(error)
    );
  }

}

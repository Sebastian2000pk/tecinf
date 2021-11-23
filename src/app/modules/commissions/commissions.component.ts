import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { PopupCommissionComponent } from '../popup-commission/popup-commission.component';

// Services
import { CommissionsService } from './commissions.service';

@Component({
  selector: 'app-commissions',
  templateUrl: './commissions.component.html',
  styleUrls: ['./commissions.component.scss']
})
export class CommissionsComponent implements OnInit {

  listTypes: any[] = [];
  listCommissions: any[] = [];

  constructor(
    private commissionServices: CommissionsService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getCommission();
    this.getTypes();
  }

  getTypes() {
    this.commissionServices.getTypes().subscribe(
      (data: any) => this.listTypes = data,
      error => console.log(error)
    );
  }

  getCommission() {
    this.commissionServices.getCommission().subscribe(
      (data: any) => this.listCommissions = data,
      error => console.log(error)
    );  
  }

  openDialog(commission: any): void {
    const dialogRef = this.dialog.open(PopupCommissionComponent, {
      data: {
        type: this.listTypes,
        commission: commission
      },
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.createEditCommission(result);
      }
    });
  }

  createEditCommission(commission: any) {
    let data = {...commission};
    data.percentage_1 = data.types[0].percentage;
    data.percentage_2 = data.types[1].percentage;
    data.percentage_3 = data.types[2].percentage;
    this.commissionServices.createUpdate(data).subscribe(
      data => this.getCommission(),
      error => console.log(error)
    );
  }

}

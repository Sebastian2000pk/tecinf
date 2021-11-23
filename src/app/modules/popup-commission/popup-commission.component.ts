import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';

// Services
import { PopupCommissionService } from './popup-commission.service';

@Component({
  selector: 'app-popup-commission',
  templateUrl: './popup-commission.component.html',
  styleUrls: ['./popup-commission.component.scss']
})
export class PopupCommissionComponent implements OnInit {

  title: string = "";
  dataObject: any;

  listTypes: any[] = [];
  dataGroup: FormGroup = new FormGroup({});
  commission: any = {};

  constructor(
    public dialogRef: MatDialogRef<PopupCommissionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private popupCommissionService: PopupCommissionService,
    private fb: FormBuilder) {
    this.commission = data.commission;
    this.dataObject = data;
    this.title = data.type.name;
    this.listTypes = data.type;
    this.dataGroup = this.fb.group({
      id: new FormControl(this.commission.id ?? null),
      name: new FormControl(this.commission.name ?? null, Validators.required),
      goal_percentage: new FormControl(this.commission.goal_percentage ?? null, Validators.required),
      types: new FormArray(this.listTypes.map((type, index) => {
        return new FormGroup({
          id: new FormControl(type.id),
          name: new FormControl(type.name, Validators.required),
          percentage: new FormControl(this.getCommisionValue(index), Validators.required),
        })
      }))
    });
  }

  ngOnInit(): void {
  }

  getCommisionValue(index: number) {
    if (this.commission) {
      if (index == 0) {
        return this.commission.percentage_1;
      } else if (index == 1) {
        return this.commission.percentage_2;
      } else if (index == 2) {
        return this.commission.percentage_3;
      } else {
        return null;
      }
    }
  }


  save(commission: any) {
    console.log(commission);
  }

  get getControls() {
    return this.dataGroup.get('types') as FormArray;
  }

}

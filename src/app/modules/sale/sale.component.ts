import { Component, OnInit, Input } from '@angular/core';

// Services
import { SalesService } from '../sales/sales.service';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.scss']
})
export class SaleComponent implements OnInit {


  @Input() data: any;
  @Input() sale: any;
  @Input() idSale: any;

  constructor(private salesServices: SalesService) { }

  ngOnInit(): void {
  }

  save() {
    if(this.sale) {
      const dataSale = {...{sale: this.sale}, ...this.data, ...{idSale: this.idSale}};
      console.log(dataSale);
      this.salesServices.createUpdate(dataSale).subscribe(
        data => console.log(data),
        error => console.log(error)
      );
    }
  }

}

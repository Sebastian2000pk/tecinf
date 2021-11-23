import { Component, OnInit } from '@angular/core';

// Services
import { HomeService } from '../home/home.service';
import { SalesService } from './sales.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {

  listAdvisers: any[] = [];
  listSales: any[] = [];

  constructor(private adviserServices: HomeService,
    private salesServices: SalesService) { }

  ngOnInit(): void {
    this.getAllAdvisers();
    this.getSales();
  }


  getAllAdvisers() {
    this.adviserServices.getAllAdvisers().subscribe(
      (data: any) => this.listAdvisers = data,
      (error) => console.log(error)
    );
  }

  getSales() {
    this.salesServices.getSale().subscribe(
      (data: any) => this.listSales = data,
      error => console.log(error)
    );
  }

  findSale(id: number) {
    return this.listSales.find(sale => sale.id_adviser === id)?.sale;
  }

  findIdSale(id: number) {
    return this.listSales.find(sale => sale.id_adviser === id)?.id;
  }

}
 
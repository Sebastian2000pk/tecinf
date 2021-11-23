import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PopupComponent } from './modules/popup/popup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommissionsComponent } from './modules/commissions/commissions.component';
import { PopupCommissionComponent } from './modules/popup-commission/popup-commission.component';
import { SalesComponent } from './modules/sales/sales.component';
import { SaleComponent } from './modules/sale/sale.component';
import { ReportComponent } from './modules/report/report.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PopupComponent,
    CommissionsComponent,
    PopupCommissionComponent,
    SalesComponent,
    SaleComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

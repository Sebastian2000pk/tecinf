import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { CommissionsComponent } from './modules/commissions/commissions.component';
import { SalesComponent } from './modules/sales/sales.component';
import { ReportComponent } from './modules/report/report.component';

const routes: Routes = [
  { path: 'advisers', component: HomeComponent },
  { path: 'commissions', component: CommissionsComponent },
  { path: 'sales', component: SalesComponent },
  { path: 'report', component: ReportComponent },
  { path: '**', redirectTo: 'advisers', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

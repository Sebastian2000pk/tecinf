import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PopupCommissionService {

  constructor(private http: HttpClient) { }

  getCommission(id: number) {
    return this.http.get(environment.apiUrl + '/commissions/getcommission/' + id);
  }
}

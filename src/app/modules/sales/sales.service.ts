import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  constructor(private http: HttpClient) { }

  createUpdate(data: any) {
    return this.http.post(`${environment.apiUrl}/advisers/createUpdateSale`, data);
  }

  getSale() {
    return this.http.get(`${environment.apiUrl}/advisers/getSales`);
  }
}

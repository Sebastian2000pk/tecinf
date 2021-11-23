import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommissionsService {

  constructor(private http: HttpClient) { }

  getAllAdvisers() {
    return this.http.get(`${environment.apiUrl}/advisers/all`);
  }

  createUpdate(data: any) {
    return this.http.post(`${environment.apiUrl}/commissions/createUpdate`, data);
  }

  delete(id: number) {
    return this.http.delete(`${environment.apiUrl}/advisers/delete/${id}`);
  }

  getTypes() {
    return this.http.get(`${environment.apiUrl}/advisers/types`);
  }

  getCommission() {
    return this.http.get(environment.apiUrl + '/commissions/getcommission');
  }
}

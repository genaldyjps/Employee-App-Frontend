import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Employee } from '../models/employee';

const BASE_URL = 'http://localhost:3000/api';

@Injectable()
export class EmployeeService {

  constructor(private httpClient: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${BASE_URL}/employees`);
  }

  createEmployee(body: Employee): Observable<Employee> {
    return this.httpClient.post<Employee>(`${BASE_URL}/employees`, body);
  }

  deleteEmployee(id: string): Observable<Employee> {
    return this.httpClient.delete<Employee>(`${BASE_URL}/employees/${id}`);
  }

  getEmployee(id: string): Observable<Employee> {
    return this.httpClient.get<Employee>(`${BASE_URL}/employees/${id}`);
  }

  updateEmployee(id: string, body: Employee): Observable<Employee> {
    return this.httpClient.put<Employee>(`${BASE_URL}/employees/${id}`, body);
  }
}

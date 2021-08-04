import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Employee } from '../models/employee'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  alfa = {
    code : 0
  }

  

  employees: Employee[] = [];
  selectedEmployee= '';
  temporalEmployee : Employee = {
    name : '',
    position : '',
    code: 0,
    email : '',
    eps : '',
    arl : '',  
  };
  URL_API= 'http://localhost:4000/api/employees'

  constructor(private http : HttpClient) { }

        
  getEmployee() {
    return this.http.get<Employee[]>(this.URL_API);    
  }

  oneEmploy(beta : number){
    this.alfa.code = beta
    return this.http.post<any>(this.URL_API + '/code',this.alfa)
    
  }


}

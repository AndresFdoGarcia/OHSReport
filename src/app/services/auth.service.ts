import { Injectable } from '@angular/core';
import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  alfa = {
    email : '',
    code : 0
  }

  roleAs: any;

  private URL = environment.apiURL + 'employees'

  constructor(private http: HttpClient, private router: Router) { }

  signIN(user: any){
    this.alfa.email = user.email
    this.alfa.code = parseInt(user.code)
    
    return this.http.post<any>(this.URL + '/signin',this.alfa);
    
  }

  loggedIn() : Boolean {
    
    return !!localStorage.getItem('token');
    
  }

  getToken(){
    return localStorage.getItem('token');
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('position');
    this.router.navigate(['/signin'])
  }

  rolMaster() : Boolean {
    const rol = localStorage.getItem('position')
    if(rol != 'SST'){
      return false
    }else{
      return true
    }
  }

  getRole (){
    this.roleAs = localStorage.getItem('position');
    ({ role: this.roleAs })
    return this.roleAs;
  }

}



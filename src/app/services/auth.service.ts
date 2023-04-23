import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private route: Router,
    private http: HttpClient,
  ) { }

    apiPath = "http://localhost:5150/"

  setToken(token: string){
    localStorage.setItem('token', token)
  }
  getToken(){
    return localStorage.getItem('token')
  }

  isLogged(){
    return this.getToken() != null
  }

  logOut(){
    this.route.navigate(['login'])
  }

  checkUser(email: string, password: string){
    let user = {Email: email, Password: password}
    let b = Object.assign({}, user)
    return this.http.post(this.apiPath + 'login', user)
  }
}

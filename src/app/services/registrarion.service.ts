import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RegistrarionService {

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) { }

  addNewUser(email: string,  password: string){
    return this.http.post(this.auth.apiPath + 'AddUser/', {Email: email, Password: password})
  }
}

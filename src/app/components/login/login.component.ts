import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup

  constructor(
    private auth: AuthService,
    private router: Router,

  ){

  }

  ngOnInit(){
    this.loginForm = new FormGroup({
      'email' : new FormControl('', [Validators.required, Validators.email]),
      'password' : new FormControl('',
        [Validators.required,
        Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")])
    })
    if(this.auth.isLogged()){
      this.router.navigate(['entered'])
    }
  }

  submitLogin() {
    this.auth.checkUser(this.loginForm.value.email, this.loginForm.value.password).subscribe({
      next: (data: any) => {
        this.auth.setToken(String(data.token))
        document.cookie = "email=" + data.email
        this.router.navigate(['entered'])
      },
      error: error => alert('Ошибка авторизации')
    })
  }
}

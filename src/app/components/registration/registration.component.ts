import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { RegistrarionService } from 'src/app/services/registrarion.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm!: FormGroup

  constructor(
    private auth: AuthService,
    private router: Router,
    private registrationService: RegistrarionService
  ){}

  submitRegistratoin(){
    this.registrationService.addNewUser(this.registrationForm.value.email, this.registrationForm.value.password)
      .subscribe({
        next: (data: any) => {
          if(String(data) == "Пользователь добавлен!"){
            this.router.navigate(['/login'])
          }
          else{
            alert(data)
          }
        },
        error: (err) => alert(err.message)
      })
  }

  ngOnInit(){
    this.registrationForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('',
      [Validators.required,
      Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]),
      'confirmPassword':  new FormControl('',
      [Validators.required,
      Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]),
      'checked': new FormControl('', [Validators.required])
    })

    if(this.auth.isLogged()){
      this.router.navigate(['entered'])
    }
  }
}

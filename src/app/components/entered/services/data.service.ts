import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient,
    private authService : AuthService,
  ) {
    this.apiPath = authService.apiPath
    this.email = document.cookie.split(";")[0].split("=")[1]
   }

    apiPath!: string
    email!: string

  getCompletedTasks(){
    return this.http.get(this.apiPath + 'CompletedTasks/' + this.email)
  }

  getProgressTasks(){
    return this.http.get(this.apiPath + 'ProgressTasks/' + this.email)
  }

  deleteFromProgress(task: string){
    return this.http.delete(this.apiPath + 'ProgressTasks/' + this.email + '/' + task)
  }

  fromProgressToCompleted(task : string){
    return this.http.post(this.apiPath + 'CompletedTasks/', {Email: this.email, Task: task})
  }

  addNewTask(task: string){
    return this.http.put(this.apiPath + 'ProgressTasks/', {Email: this.email, Task: task})
  }

  removeAllConf(){
    return this.http.delete(this.apiPath + 'CompletedTasks/' + this.email)
  }
}

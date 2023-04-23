import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  task: string = ''

  constructor(
    private dataService: DataService
  ){}

  addTask(){
    this.dataService.addNewTask(this.task).subscribe({
      next: (data: any) => {},
      error: (err) => alert(err.message)
    })
  }
}


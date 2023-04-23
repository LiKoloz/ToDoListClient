import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-progress-tasks',
  templateUrl: './progress-tasks.component.html',
  styleUrls: ['./progress-tasks.component.css']
})
export class ProgressTasksComponent implements OnInit{

  constructor(
    private dataService: DataService
  ){}

  progressTasks! : string[]
  sumTasks = 0

    updateSum(){
      this.sumTasks = this.progressTasks.length
    }

  deleteTask(task: string){
    if(this.progressTasks.indexOf(task) >= 0){
      let index = this.progressTasks.indexOf(task)
      this.progressTasks.splice(index, 1)
      this.updateSum()
    }
    this.dataService.deleteFromProgress(task).subscribe({
      next: (data: any) => {
        this.progressTasks = data
        this.updateSum()
      },
      error: (err) => console.log(err.message)
    })
  }

  confirmTask(task: string){
    this.dataService.fromProgressToCompleted(task).subscribe({
      next: (data: any) => {
        this.progressTasks = data
        this.updateSum()
      },
      error: (err) => console.log(err.message)
    })
  }

  ngOnInit(): void {
    this.dataService.getProgressTasks().subscribe({
      next: (data: any) => {
        this.progressTasks = data
        this.updateSum()
      },
      error: (err) => console.log(err.message)
    })

  }
}

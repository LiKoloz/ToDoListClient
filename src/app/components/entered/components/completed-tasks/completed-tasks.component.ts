import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-completed-tasks',
  templateUrl: './completed-tasks.component.html',
  styleUrls: ['./completed-tasks.component.css']
})
export class CompletedTasksComponent implements OnInit {
  constructor(
    private dataService: DataService
  ){}

  completedTasks! : string[]
  sumTasks = 0

    updateSum(){
      this.sumTasks = this.completedTasks.length
    }

    removeAllCompleted(){
      this.dataService.removeAllConf().subscribe({
        next: (data: any) => {
          this.completedTasks = data
          this.updateSum()
        },
        error: (err) => console.log(err.message)
      })
    }


  ngOnInit(): void {
    this.dataService.getCompletedTasks().subscribe({
      next: (data: any) => {
        this.completedTasks = data
        this.updateSum()
      },
      error: (err) => console.log(err.message)
    })

  }
}

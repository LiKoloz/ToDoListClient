import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(
    private dataService: DataService
  ){}

  completedTasks! : string[]
  progressTasks! : string[]


  ngOnInit(): void {
    this.dataService.getCompletedTasks().subscribe({
      next: (data: any) => {
        this.completedTasks = data
      },
      error: (err) => console.log(err.message)
    })

    this.dataService.getProgressTasks().subscribe({
      next: (data: any) => {
        this.progressTasks = data
      },
      error: (err) => console.log(err.message)
    })

  }
}

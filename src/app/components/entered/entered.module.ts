import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { EnteredDashboardComponent } from './components/entered-dashboard/entered-dashboard.component';
import { CompletedTasksComponent } from './components/completed-tasks/completed-tasks.component';
import { ProgressTasksComponent } from './components/progress-tasks/progress-tasks.component';
import { HeaderComponent } from './components/header/header.component';
import { EnteredRoutingModule } from './entered-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { TaskComponent } from './components/task/task.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainComponent,
    EnteredDashboardComponent,
    CompletedTasksComponent,
    ProgressTasksComponent,
    HeaderComponent,
    TaskComponent
  ],
  imports: [
    CommonModule,
    EnteredRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  bootstrap: [MainComponent]
})
export class EnteredModule { }

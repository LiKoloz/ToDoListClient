import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { EnteredDashboardComponent } from './components/entered-dashboard/entered-dashboard.component';
import { ProgressTasksComponent } from './components/progress-tasks/progress-tasks.component';
import { CompletedTasksComponent } from './components/completed-tasks/completed-tasks.component';
import { TaskComponent } from './components/task/task.component';



const routes: Routes = [
  {path: '', component: EnteredDashboardComponent,
  children:[
    {path: 'home', component: MainComponent},
    {path: 'completed', component: CompletedTasksComponent},
    {path: 'progress', component: ProgressTasksComponent},
    {path: 'task', component: TaskComponent},
    {path: '', redirectTo: "home", pathMatch: 'full'},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnteredRoutingModule { }

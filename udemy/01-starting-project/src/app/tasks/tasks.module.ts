import { NgModule } from '@angular/core';
import { TasksComponent } from './tasks.component';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TasksComponent, TaskComponent, NewTaskComponent], // The set of components, directives, and pipes (declarables that belong to this module.
  imports: [SharedModule, FormsModule, CommonModule], //The set of NgModules whose exported declarables are available to templates in this module.
  exports: [TasksComponent], // modules made availiable to others
})
export class TasksModule {}

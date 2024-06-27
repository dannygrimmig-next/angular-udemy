import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { HeaderComponent } from './app/header/header.component';
import { UserComponent } from './app/user/user.component';
import { TasksComponent } from './app/tasks/tasks.component';
import { CardComponent } from './app/shared/card/card.component';
import { TaskComponent } from './app/tasks/task/task.component';
import { NewTaskComponent } from './app/tasks/new-task/new-task.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    CardComponent,
    TasksComponent,
    TaskComponent,
    NewTaskComponent,
  ], // Module components (not standalone)
  bootstrap: [AppComponent], // Root module
  imports: [BrowserModule, FormsModule], // Standalone components
})
export class AppModule {}

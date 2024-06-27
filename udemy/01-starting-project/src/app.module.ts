import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { HeaderComponent } from './app/header/header.component';
import { UserComponent } from './app/user/user.component';
import { SharedModule } from './app/shared/shared.module';
import { TasksModule } from './app/tasks/tasks.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, UserComponent], // belong to this module
  bootstrap: [AppComponent], // Root module
  imports: [BrowserModule, SharedModule, TasksModule], // components/modules usable in module
})
export class AppModule {}

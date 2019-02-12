import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from '@sumoworker/home/home.component';
import { DetailCardComponent } from '@sumoworker/detail-card/detail-card.component';
import { GoalCardComponent } from './components/goal-card/goal-card.component';
import { TaskCardComponent } from './components/task-card/task-card.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';
import { GoalDetailComponent } from './components/goal-detail/goal-detail.component';
import { SubTaskDetailComponent } from './components/sub-task-detail/sub-task-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailCardComponent,
    GoalCardComponent,
    TaskCardComponent,
    TaskDetailComponent,
    GoalDetailComponent,
    SubTaskDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

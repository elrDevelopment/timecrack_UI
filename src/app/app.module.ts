import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from '@sumoworker/home/home.component';
import { DetailCardComponent } from '@sumoworker/detail-card/detail-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { TaskComponent } from './task/task.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TaskComponent,
  
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,   
    MaterialModule, 
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
   
  ],
  providers: [
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

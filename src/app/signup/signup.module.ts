import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material.module';
import { SignupComponent } from './signup.component';
import { HttpClientModule } from '@angular/common/http';
import { SignupRoutingModule } from './signup-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
    SignupRoutingModule
  ],
  declarations: [SignupComponent],
})
export class SignupModule { }

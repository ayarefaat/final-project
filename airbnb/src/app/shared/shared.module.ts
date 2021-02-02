import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';





@NgModule({
  declarations: [],
  imports: [

CommonModule,ReactiveFormsModule,FormsModule,HttpClientModule
  ],
  exports:[CommonModule,ReactiveFormsModule,FormsModule,HttpClientModule]
})
export class SharedModule { }

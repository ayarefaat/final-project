import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../../shared/shared.module';
import { LogoutComponent } from './logout/logout.component';
import { EditComponent } from './edit/edit.component';


const routes:Routes=[
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'logout',component:LogoutComponent},
  {path:'profile',component:ProfileComponent},
  {path:'edit/:id',component:EditComponent}
]

@NgModule({
  declarations: [LoginComponent, ProfileComponent,SignupComponent, LogoutComponent, EditComponent],
  imports: [
RouterModule.forChild(routes),SharedModule,CommonModule
  ]
})
export class UserModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { AddExperienceComponent } from './add-experience/add-experience.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MyExperienceComponent } from './my-experience/my-experience.component';
import { EditExperienceComponent } from './edit-experience/edit-experience.component';
import { ConfirmComponent } from './confirm/confirm.component';


const routes:Routes=[
  {path :'',component:IndexComponent},
  {path :'addExperience',component:AddExperienceComponent},
  {path :'myExperience',component:MyExperienceComponent},
  {path :'editExperience/:id',component:EditExperienceComponent},
  {path :'confirm',component:ConfirmComponent},

]

@NgModule({
  declarations: [IndexComponent, CardComponent, AddExperienceComponent, MyExperienceComponent, EditExperienceComponent, ConfirmComponent],
  imports: [
    RouterModule.forChild(routes),SharedModule,CommonModule
  ]
})
export class ExperienceModule { }

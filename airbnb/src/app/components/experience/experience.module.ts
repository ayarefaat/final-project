import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './components/card/card.component';

const routes:Routes=[
  {path :'',component:IndexComponent},
]

@NgModule({
  declarations: [IndexComponent, CardComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class ExperienceModule { }

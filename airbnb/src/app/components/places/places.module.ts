import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { PlaceDetailsComponent } from './place-details/place-details.component';
import { ReserveComponent } from './reserve/reserve.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { CityComponent } from './city/city.component';
import { PropertyTypeComponent } from './property-type/property-type.component';

const routes:Routes=[
  {path:'',component:IndexComponent},
  {path:'confirm',component:ConfirmComponent},
  {path:'placeDetails/:id',component:PlaceDetailsComponent},
  {path:'reserve/:id',component:ReserveComponent},
  {path:'city/:location',component:CityComponent},
  {path:'propertyType/:type',component:PropertyTypeComponent},
]


@NgModule({
  declarations: [IndexComponent, PlaceDetailsComponent, ReserveComponent, ConfirmComponent, CityComponent, PropertyTypeComponent],
  imports: [
    RouterModule.forChild(routes),SharedModule,CommonModule
    ]
})
export class PlacesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { CardComponent } from './components/card/card.component';
import { ImageCardComponent } from './components/image-card/image-card.component';
import { ListingComponent } from './listing/listing.component';
import { EditListingComponent } from './edit-listing/edit-listing.component';

const routes:Routes=[
  {path :'',component:IndexComponent},
  {path :'listing',component:ListingComponent},
  {path :'editListing/:id',component:EditListingComponent},
]


@NgModule({
  declarations: [IndexComponent, CardComponent, ImageCardComponent, ListingComponent, EditListingComponent],
  imports: [
    RouterModule.forChild(routes),SharedModule,CommonModule
  ]
})
export class HostingModule { }

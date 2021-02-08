import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './components/shared/layout/layout.component';


const routes: Routes = [
  {
    path: '', 
    component:LayoutComponent,
    loadChildren: () => import('../app/components/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'user', 
    loadChildren: () => import('../app/components/user/user.module').then(m => m.UserModule)
  },
  {
    path: 'about', 
    loadChildren: () => import('../app/components/about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'hosting', 
    loadChildren: () => import('../app/components/hosting/hosting.module').then(m => m.HostingModule)
  },
  {
    path: 'places', 
    loadChildren: () => import('../app/components/places/places.module').then(m => m.PlacesModule)
  },
  {
    path: 'experience', 
    loadChildren: () => import('../app/components/experience/experience.module').then(m => m.ExperienceModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
exports: [RouterModule]
})
export class AppRoutingModule { }

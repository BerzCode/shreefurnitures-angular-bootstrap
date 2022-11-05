import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusBodyComponent } from '../aboutus/aboutus-body/aboutus-body.component';

  
const routes: Routes = [
    {path: 'about', component:AboutusBodyComponent}


];
  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
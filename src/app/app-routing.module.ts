import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './home/body/body.component';
import { AboutusBodyComponent } from './aboutus/aboutus-body/aboutus-body.component';
import { BedroomComfortComponent } from './shop-by-products/bedroom-comfort/bedroom-comfort.component';
import { LivingroomBodyComponent } from './shop-by-products/livingroom-body/livingroom-body.component';
import { CustomizeBodyComponent } from './shop-by-products/customize-body/customize-body.component';
import { ContactFormComponent } from './contactus/contact-form/contact-form.component';
import { LoginComponent } from './authentication/login/login.component';
import { SignupComponent } from './authentication/signup/signup.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path :'home', component: BodyComponent,title: 'ShreeFurnitures | Home'},
  {path :'about', component: AboutusBodyComponent,
title: 'ShreeFurnitures | About us'},
{path: 'bedroom-comfort', component: BedroomComfortComponent  ,title:'ShreeFurnitures | Bedroom Comfort'},
{path: 'livingroom', component:LivingroomBodyComponent, title: 'ShreeFurnitures | Living room'},
{path: 'customize', component: CustomizeBodyComponent, title:'ShreeFurnitures | Customize'},
{path :'contactus', component: ContactFormComponent ,title: 'ShreeFurnitures | Contact us'},
{path:'login', component:LoginComponent, title:'ShreeFurnitures | Login' },
{path:'signup', component:SignupComponent, title:'ShreeFurnitures | Sign up' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
export const routingcomponents =[BodyComponent,AboutusBodyComponent]

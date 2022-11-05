import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BedroomComfortComponent } from './bedroom-comfort/bedroom-comfort.component';
import { LivingroomBodyComponent } from './livingroom-body/livingroom-body.component';
import { CustomizeBodyComponent } from './customize-body/customize-body.component';



@NgModule({
  declarations: [
    BedroomComfortComponent,
    LivingroomBodyComponent,
    CustomizeBodyComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[BedroomComfortComponent, LivingroomBodyComponent, CustomizeBodyComponent]
})
export class ShopByProductsModule { }

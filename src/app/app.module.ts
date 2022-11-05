import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { HomeModule } from './home/home.module';
import { AboutusModule } from './aboutus/aboutus.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AboutusModule,
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    HomeModule,
    AboutusModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';

import { HomePageComponent } from './component/home-page-component/home-page-component';
import { LogInComponent } from './component/log-in-component/log-in-component';
import { OrderCardComponent } from './component/order-card-component/order-card-component';
import { OurAnimalsComponent } from './component/our-animals-component/our-animals-component';
import { PersonalAreaComponent } from './component/personal-area-component/personal-area-component';

@NgModule({
  declarations: [
    App,
    HomePageComponent,
    LogInComponent,
    OrderCardComponent,
    OurAnimalsComponent,
    PersonalAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,

  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
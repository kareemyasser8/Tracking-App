import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TrackInputComponent } from './track-input/track-input.component';
import { ShippingInfoComponent } from './shipping-info/shipping-info.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TrackInputComponent,
    ShippingInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

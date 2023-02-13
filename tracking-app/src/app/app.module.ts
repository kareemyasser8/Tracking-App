import { HttpClient } from '@angular/common/http';
import { TrackService } from './services/track.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ShippingInfoComponent } from './shipping-info/shipping-info.component';
import { TrackInputComponent } from './track-input/track-input.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DatePipe } from '@angular/common'

`(tracking number to be used: 6636234, 7234258, 9442984,1094442`

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TrackInputComponent,
    ShippingInfoComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    DatePipe,
    TrackService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


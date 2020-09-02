import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightMapComponent } from './flight-map/flight-map.component';
import { FlightInfoComponent } from './flight-info/flight-info.component';
import { BaseInfoComponent } from './base-info/base-info.component';

@NgModule({
  declarations: [
    AppComponent,
    FlightMapComponent,
    FlightInfoComponent,
    BaseInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

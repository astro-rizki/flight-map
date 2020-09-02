import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseInfoComponent } from './base-info/base-info.component';
import { FlightInfoComponent } from './flight-info/flight-info.component';
import { FlightMapComponent } from './flight-map/flight-map.component';


const routes: Routes = [
  {
    path:'base-info',
    component: BaseInfoComponent
  },
  {
    path:'flight-info',
    component: FlightInfoComponent
  },
  {
    path:'flight-map',
    component: FlightMapComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

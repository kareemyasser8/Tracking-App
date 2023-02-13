import { NotFoundComponent } from './not-found/not-found.component';
import { ShippingInfoComponent } from './shipping-info/shipping-info.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'tracking-shipments', pathMatch: 'full' },
  {path: 'tracking-shipments/shipment-number/:number', component: ShippingInfoComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

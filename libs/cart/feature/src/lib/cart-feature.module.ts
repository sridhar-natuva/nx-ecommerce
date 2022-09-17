import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { CartFeatureRoutingModule } from './cart-feature-routing.module';

@NgModule({
  imports: [CommonModule, CartFeatureRoutingModule],
  declarations: [CartComponent],
  exports: [CartComponent]
})
export class CartFeatureModule { }

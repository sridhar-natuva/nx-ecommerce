import { Component } from '@angular/core';
// import coupons from "./coupons.json";
import { ProductsStore } from './../../store/products.store';

@Component({
  selector: 'e-commerce-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  coupon = '';
  total = 590;
  isApplied = false;

  itemsInCart$ = this.productsStore.viewAddedProducts$;
  constructor(private readonly productsStore: ProductsStore) { }

  applyCoupon() {
    // const valid_coupon = coupons.find((c: any) => c.coupon == this.coupon);
    // if (valid_coupon) {
    //   this.total = this.total * ((100 - valid_coupon.offer_percent) / 100);
    //   this.isApplied = true;
    // }
  }

}

import { Component, Input } from '@angular/core';
// import coupons from "./coupons.json";

@Component({
  selector: 'e-commerce-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  @Input() products: any[] = [];

  coupon = '';
  total = 590;
  isApplied = false;

  applyCoupon() {
    // const valid_coupon = coupons.find((c: any) => c.coupon == this.coupon);
    // if (valid_coupon) {
    //   this.total = this.total * ((100 - valid_coupon.offer_percent) / 100);
    //   this.isApplied = true;
    // }
  }

}

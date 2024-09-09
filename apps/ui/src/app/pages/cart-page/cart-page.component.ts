import { ProductsStore } from '../../store/products.store';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'e-commerce-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent {
  private productsStore = inject(ProductsStore);
  cart_items$ = this.productsStore.products$;
}

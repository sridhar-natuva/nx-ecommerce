import { Component } from '@angular/core';
import { ProductsStore } from './../../store/products.store';

@Component({
  selector: 'e-commerce-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  addedProductIds$ = this.productsStore.addedProductIds$;
  constructor(private readonly productsStore: ProductsStore) { }

}

import { Component, OnInit } from '@angular/core';
import { ProductsStore } from './../../store/products.store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  addedProductIds$ = this.productsStore.addedProductIds$;
  constructor(private readonly productsStore: ProductsStore) { }

  ngOnInit(): void {
  }

}

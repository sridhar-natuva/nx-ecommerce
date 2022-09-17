import { Product } from './../../components/products/products.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'e-commerce-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent {
  products = [{
    name: 'hellofrom main app',
    price: 100,
    category: 'there ?'
  }]

}

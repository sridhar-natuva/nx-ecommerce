import { KeycloakService } from 'keycloak-angular';
import { Component, OnInit } from '@angular/core';
import { ProductsStore } from './../../store/products.store';

@Component({
  selector: 'e-commerce-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  addedProductIds$ = this.productsStore.addedProductIds$;
  user = '';
  constructor(private readonly productsStore: ProductsStore, private _keycloakService: KeycloakService) { }

  ngOnInit(): void {
    this.user = this._keycloakService.getUsername();
  }

  onLogout() {
    this._keycloakService.logout();
  }

}

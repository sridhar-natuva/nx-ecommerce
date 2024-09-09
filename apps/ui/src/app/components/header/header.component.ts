// import { KeycloakService } from 'keycloak-angular';
import { Component, inject } from '@angular/core';
import { ProductsStore } from './../../store/products.store';

@Component({
  selector: 'e-commerce-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  private service = inject(ProductsStore)
  addedProductIds$ = this.service.addedProductIds$;
  user = '';

  onLogout() {
    // this._keycloakService.logout();
  }

}

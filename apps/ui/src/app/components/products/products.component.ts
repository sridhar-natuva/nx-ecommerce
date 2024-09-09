import { ChangeDetectionStrategy, Component, inject, ViewEncapsulation } from '@angular/core';
import { ProductsStore } from '../../store/products.store';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'e-commerce-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule
  ]
})
export class ProductsComponent {

  private productsStore = inject(ProductsStore);
  products$ = this.productsStore.products$;
  addedProductIds$ = this.productsStore.addedProductIds$;

  addProduct(productId: string) {
    this.productsStore.patchState((state) => ({
      addedProductIds: [...state.addedProductIds, productId]
    }));
  }

  filterproductsBy(key: string) {
    this.products$ = this.productsStore.filterByName(key)
  }
}

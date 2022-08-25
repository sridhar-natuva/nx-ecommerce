import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProductsStore } from '../../store/products.store';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent implements OnInit {

  constructor(private readonly productsStore: ProductsStore) { }

  products$ = this.productsStore.products$;
  addedProductIds$ = this.productsStore.addedProductIds$;

  ngOnInit(): void {
  }

  addProduct(productId: string) {
    this.productsStore.patchState((state) => ({
      addedProductIds: [...state.addedProductIds, productId]
    }));
  }

}

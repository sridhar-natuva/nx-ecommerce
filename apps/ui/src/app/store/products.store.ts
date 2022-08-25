import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';
import { Product } from '../components/products/products.model';

export interface ProductsState {
    products: Product[];
    addedProductIds: string[];
}

@Injectable({ providedIn: 'root' })
export class ProductsStore extends ComponentStore<ProductsState> {

    constructor() {
        super({
            products: [
                { id: 'A100', name: 'A', category: 'cloths', price: 100 },
                { id: 'A101', name: 'B', category: 'groceries', price: 100 },
                { id: 'A102', name: 'C', category: 'groceries', price: 100 },
                { id: 'A103', name: 'D', category: 'electronics', price: 100 },
                { id: 'A104', name: 'E', category: 'cloths', price: 100 },
                { id: 'A105', name: 'F', category: 'electronics', price: 100 },
                { id: 'A106', name: 'G', category: 'cloths', price: 100 },
                { id: 'A107', name: 'H', category: 'electronics', price: 100 }
            ],
            addedProductIds: []
        });
    }

    readonly products$: Observable<Product[]> = this.select(state => state.products);

    readonly addedProductIds$: Observable<string[]> = this.select(state => state.addedProductIds);

    readonly viewAddedProducts$: Observable<Product[]> = this.select(
        state => {
            const products = state.products;
            const ids = state.addedProductIds;
            return products.filter(item => ids.indexOf(item.id) === -1);
        }
    );


}
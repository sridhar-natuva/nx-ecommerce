import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { Observable, switchMap, take } from 'rxjs';
import { Product } from '../components/products/products.model';
import { ProductsService } from '../services/products.service';
import { HttpErrorResponse } from '@angular/common/http';

export interface ProductsState {
    products: Product[];
    addedProductIds: string[];
}

const initialState: ProductsState = {
    products: [],
    addedProductIds: []
};

@Injectable({ providedIn: 'root' })
export class ProductsStore extends ComponentStore<ProductsState>{

    constructor(private productsService: ProductsService) {
        super(initialState);
        this.getAllProducts();
    }


    getAllProducts = this.effect<void>(
        // Synchronous observable emitting undefined once to kick off the effect
        trigger$ => trigger$.pipe(
            take(1),
            switchMap(() => this.productsService.fetchAllProducts().pipe(
                tapResponse(
                    (products) => this.#replaceProducts(products),
                    (error: HttpErrorResponse) => console.log(error),
                ),
            ))
        )
    );

    #replaceProducts = this.updater<readonly Product[]>((state, products): ProductsState => ({
        ...state,
        products: [...products]
    }));

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
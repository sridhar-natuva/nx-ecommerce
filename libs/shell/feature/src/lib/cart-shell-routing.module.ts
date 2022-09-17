import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'cart',
        loadChildren: () =>
            import('@e-commerce/cart/feature').then(
                (m) => m.CartFeatureModule
            ),
    },
    {
        path: '',
        redirectTo: 'cart',
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [RouterModule],
})
export class CartShellRoutingModule { }
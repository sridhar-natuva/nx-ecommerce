import { StreamDataComponent } from './components/stream-data/stream-data.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/streams', pathMatch: 'full' },
  // { path: 'products', component: ProductsComponent },
  // { path: 'cart', component: CartComponent },
  { path: 'streams', component: StreamDataComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
// import { RouteReuseStrategy } from '@angular/router';
import { CartShellRoutingModule } from './cart-shell-routing.module';


@NgModule({
    imports: [BrowserModule, CartShellRoutingModule],
    // exports: 
})
export class CartShellModule { }
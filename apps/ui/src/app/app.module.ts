import {
  CUSTOM_ELEMENTS_SCHEMA,
  APP_INITIALIZER,
  NgModule,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/shared/material.angular';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
// import { CartShellModule } from '@e-commerce/shell/feature';
import { CartFeatureModule } from '@e-commerce/cart/feature';
// import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { HomeComponent } from './components/home/home.component';

// function initializeKeycloak(keycloak: KeycloakService) {
//   return () =>
//     keycloak.init({
//       config: {
//         realm: 'angular',
//         url: 'http://localhost:8080',
//         clientId: 'webapp',
//       },
//       initOptions: {
//         onLoad: 'login-required',
//         silentCheckSsoRedirectUri: window.location.origin + '/sso.html'
//       },
//       loadUserProfileAtStartUp: true
//     });
// }

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HeaderComponent,
    FooterComponent,
    CartPageComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    // CartShellModule,
    CartFeatureModule,
    // KeycloakAngularModule,
    StoreModule.forRoot(
      {},
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      }
    ),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  // providers: [
  //   {
  //     provide: APP_INITIALIZER,
  //     useFactory: initializeKeycloak,
  //     multi: true,
  //     deps: [KeycloakService],
  //   },
  // ],
  bootstrap: [AppComponent],
})
export class AppModule { }

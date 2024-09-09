import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/shared/material.angular';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { CartFeatureModule } from '@e-commerce/cart/feature';
import { HomeComponent } from './components/home/home.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        CartPageComponent,
        HomeComponent,
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        BrowserAnimationsModule,
        MaterialModule,
        CartFeatureModule,
        StoreModule.forRoot({}, {
            metaReducers: !environment.production ? [] : [],
            runtimeChecks: {
                strictActionImmutability: true,
                strictStateImmutability: true,
                strictStateSerializability: true,
                strictActionWithinNgZone: true,
                strictActionTypeUniqueness: true,
                strictActionSerializability: true
            },
        }),
        EffectsModule.forRoot([]),
        !environment.production ? StoreDevtoolsModule.instrument({ connectInZone: true }) : []], providers: [provideHttpClient(withInterceptorsFromDi())]
})
export class AppModule { }

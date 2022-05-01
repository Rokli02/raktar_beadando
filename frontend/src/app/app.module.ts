import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import { PartsComponent } from './parts/parts.component';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { AddOrderComponent } from './orders/add-order/add-order.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { AddPartComponent } from './parts/add-part/add-part.component';
import { IncreasePartAmountComponent } from './parts/increase-part-amount/increase-part-amount.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PartsComponent,
    ProductsComponent,
    OrdersComponent,
    AddOrderComponent,
    AddProductComponent,
    AddPartComponent,
    IncreasePartAmountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

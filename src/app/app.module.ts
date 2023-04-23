import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Component/header/header.component';
import { ProductComponent } from './Component/product/product.component';
import { SideListComponent } from './Component/side-list/side-list.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductListComponent } from './Pages/product-list/product-list.component'
import { CartComponent } from './Pages/cart/cart.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    ProductComponent,
    SideListComponent,
    ProductListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

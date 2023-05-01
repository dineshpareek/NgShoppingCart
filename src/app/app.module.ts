import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Component/header/header.component';
import { ProductComponent } from './Component/product/product.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductListComponent } from './Pages/product-list/product-list.component'
import { CartComponent } from './Pages/cart/cart.component';
import { FilterPipe } from './Shared/filter.pipe';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    ProductComponent,
    
    ProductListComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

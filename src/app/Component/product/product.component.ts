import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
@Input() props:any;
constructor(private cartSrv:CartService) {
  
  
}
  AddToCart(Cartdata:any){
  this.cartSrv.AddToCart(Cartdata);
}
}

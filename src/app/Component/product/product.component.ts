import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
@Input() props:any;
public numbers:any=[];
constructor(private cartSrv:CartService) {
  
  
}

ngOnInit(){
  let rating=Math.trunc(this.props.rating.rate);
  this.numbers = Array(rating).fill(0).map((x,i)=>i);
}
  AddToCart(Cartdata:any){
  this.cartSrv.AddToCart(Cartdata);
}
}

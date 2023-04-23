import { Component } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
public totalItem:number=0;
constructor(private cartSrv:CartService) {
  
}

ngOnInit(){
  this.cartSrv.getCartProduct()
  .subscribe(resp=>{
this.totalItem=resp.length;
  })
}

}

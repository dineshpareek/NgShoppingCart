import { Component } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  public products: any = [];
  public grandTotal: number = 0;
  public Shipping: number = 6.9;
  constructor(private cartSrv: CartService) {}

  ngOnInit() {
    this.cartSrv.getCartProduct().subscribe((resp) => {
      this.products = resp;
      this.grandTotal = this.cartSrv.getTotal();
    });
  }

  removeItem(item: any) {
    this.cartSrv.removeCart(item);
    this.grandTotal = this.cartSrv.getTotal();
  }

  emptyCart() {
    this.cartSrv.removeAll();
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cartList: any = [];
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>('');
  public cartCnt = new BehaviorSubject<number>(0);

  getCartProduct() {
    return this.productList.asObservable();
  }
  getCartCount() {
    return this.cartCnt.asObservable();
  }
  setCartProduct(product: any) {
    if (product) {
      this.cartList.push(...product);
      this.productList.next(product);
      this.cartCnt.next(this.cartList.length);
    }
  }

  AddToCart(product: any) {
    if (product) {
      this.cartList.push(product);
      this.productList.next(this.cartList);
      this.cartCnt.next(this.cartList.length);
      this.getTotal();
    }
  }

  getTotal(): number {
    let grandTotal = 0;
    this.cartList.map((a: any) => {
      grandTotal += a.total;
    });
    return grandTotal;
  }

  removeCart(product: any) {
    this.cartList.map((a: any, index: any) => {
      if (product.id == a.id) {
        this.cartList.splice(index, 1);
      }
    });
    this.cartCnt.next(this.cartList.length);
  }

  removeAll() {
    this.cartList = [];
    this.productList.next(this.cartList);
    this.cartCnt.next(this.cartList.length);
  }
}

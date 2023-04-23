import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
public cartList:any=[];
public productList = new BehaviorSubject<any>([]);
  constructor() { }

  getCartProduct(){
    return this.productList.asObservable();
  }

  setCartProduct(product:any){
    if(product){
  this.cartList.push(...product);
  this.productList.next(product);
  }}

  AddToCart(product:any){
    if(product){
  this.cartList.push(product);
  this.productList.next(this.cartList);
  this.getTotal();
  console.log("AddToCart:",this.cartList);
  }
}

getTotal() : number {
  let grandTotal = 0;
    this.cartList.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal;
}

  removeCart(product:any){
    this.cartList.map((a:any,index:any)=>{
    if(product.id==a.id){
      this.cartList.splice(index,1);
    }
  })
}

removeAll(product:any){
    this.cartList=[];
  this.productList.next(this.cartList);

  }

}

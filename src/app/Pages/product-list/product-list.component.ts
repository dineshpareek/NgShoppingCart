import { Component } from '@angular/core';
import { ApiSrvService } from 'src/app/Services/api-srv.service';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  public productList: any = [];
  public filterProductList: any = [];
  public catagoryList: any = [];
  searchkey = '';
  constructor(private api: ApiSrvService, private cartsrv: CartService) {}

  ngOnInit() {
    this.api.getProduct().subscribe((res) => {
      this.productList = res;
      this.filterProductList = res;
      this.productList.forEach((a: any) => {
        Object.assign(a, { quantity: 1, total: a.price });
      });

      this.cartsrv.search.subscribe((val: any) => {
        this.searchkey = val;
      });
    });

    this.api.getCatagory().subscribe((res) => {
      this.catagoryList = res;
    });
  }

  filterCategories(catstr: string) {
    console.log(catstr);
    if (catstr == 'All') {
      this.filterProductList = this.productList;
      return;
    }
    this.filterProductList = this.productList.filter((a: any) => {
      if (catstr == '' || a.category === catstr) {
        return a;
      }
    });
  }
}

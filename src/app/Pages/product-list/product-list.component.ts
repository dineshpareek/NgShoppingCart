import { Component } from '@angular/core';
import { ApiSrvService } from 'src/app/Services/api-srv.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
public productList:any=[];
constructor(private api:ApiSrvService) {
  
}
ngOnInit(){
  this.api.getProduct()
  .subscribe(res=>{
    this.productList=res;

    this.productList.forEach((a:any) => {
      Object.assign(a,{quantity:1,total:a.price});
    });
    console.log(this.productList);
  })
}



}

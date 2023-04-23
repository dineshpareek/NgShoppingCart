import { Component } from '@angular/core';
import { ApiSrvService } from './Services/api-srv.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.Component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NgShoppingCart';

  public productList:any;
constructor(private api:ApiSrvService) {
  
}
ngOnInit(){
  this.api.getProduct()
  .subscribe(res=>{
    this.productList=res;
    console.log(this.productList);
  }

  )
}
}

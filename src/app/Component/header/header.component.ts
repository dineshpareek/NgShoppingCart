import { Component } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  public totalItem: number = 0;
  public searchKey = '';
  constructor(private cartSrv: CartService) {}

  ngOnInit() {
    this.cartSrv.getCartCount().subscribe((resp) => {
      this.totalItem = resp;
    });
  }

  Search(event: any) {
    this.searchKey = (event.target as HTMLInputElement).value;
    this.cartSrv.search.next(this.searchKey);
  }
}

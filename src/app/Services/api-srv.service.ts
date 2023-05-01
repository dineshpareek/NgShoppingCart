import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiSrvService {
  public apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = `${environment.baseUrl}`;
  }

  getProduct() {
    return this.http.get<any>('https://fakestoreapi.com/products').pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getCatagory() {
    return this.http
      .get<any>('https://fakestoreapi.com/products/categories')
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
}

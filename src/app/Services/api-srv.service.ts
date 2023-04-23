import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators'
//import { AppConstants } from '../config/Constants';

environment
@Injectable({
  providedIn: 'root'
})
export class ApiSrvService {
public apiUrl: string;

  constructor(private http: HttpClient) {
    console.log(environment.baseUrl);
    this.apiUrl = `${environment.baseUrl}`;
    
  }

  getProduct(){
    return this.http.get<any>('https://fakestoreapi.com/products')
    .pipe(
      map((res:any)=>{
        return res;
      }

      )
    )
  }

  // getCatagory(){
  //   return this.http.get<any>(`${this.apiUrl}/${this.endPoint.CATAGORY_ENDPOINT}`)
  //   .pipe(
  //     map((res:any)=>{
  //       return res;
  //     }

  //     )
  //   )
  // }
}

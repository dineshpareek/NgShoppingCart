import { Injectable } from '@angular/core';
@Injectable()
export class AppConstants {
    public readonly PRODUCT_ENDPOINT: string = '/products';
    public readonly CATAGORY_ENDPOINT: string = '/products/categories';
}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  apiUrl = "https://localhost:44314/api";
  constructor(private httpClient:HttpClient) {

  }
   getProducts():Observable<ListResponseModel<Product>>{
    return this.httpClient.get<ListResponseModel<Product>>(`${this.apiUrl}/products/getall`);
  }
  getProductsByCategory(categoryId:number):Observable<ListResponseModel<Product>>{
    return this.httpClient.get<ListResponseModel<Product>>(`${this.apiUrl}/products/getbycategory?categoryId=${categoryId}`);
  }  
}

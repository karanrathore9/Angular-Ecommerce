import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }

  createProduct(productBody: any){
    const baseUrl="http://localhost:3000/products";
    return this.httpClient.post(baseUrl, productBody);
  }

  viewProduct(productID: any,productBody: any){
    const baseUrl="http://localhost:3000/product/"+productID;
    return this.httpClient.put(baseUrl, productBody);
  }

  deleteProduct(productID: any){
    const baseUrl="http://localhost:3000/product/"+productID;
    return this.httpClient.delete(baseUrl);
  }

  searchCategoryProduct(categoryID: any){
    const baseUrl="http://localhost:3000/product/category"+categoryID;
    return this.httpClient.get(baseUrl);
  }

  searchDateProduct(dateParam: any){
    const baseUrl="http://localhost:3000/product/date"+dateParam;
    return this.httpClient.get(baseUrl);
  }
}


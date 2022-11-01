import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Category } from '../site-layout/category';
import {Product} from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }

  createProduct(productBody: any):Observable<Product>{
    const baseUrl="http://localhost:3000/product";
    return this.httpClient.post<Product>(baseUrl, productBody);
  }

  viewProduct():Observable<Product>{
    const baseUrl="http://localhost:3000/product";
    return this.httpClient.get<Product>(baseUrl);
  }

  updateProduct(productID: any,productBody: any):Observable<Product>{
    const baseUrl="http://localhost:3000/product/"+productID;
    return this.httpClient.put<Product>(baseUrl, productBody);
  }

  deleteProduct(productID: any):Observable<Product>{
    const baseUrl="http://localhost:3000/product/"+productID;
    return this.httpClient.delete<Product>(baseUrl);
  }

  searchCategoryProduct(categoryID: any):Observable<Product>{
    const baseUrl="http://localhost:3000/product?categoryId="+categoryID;
    return this.httpClient.get<Product>(baseUrl);
  }
  
  searchDateProduct(dateParam: any):Observable<Product>{
    const baseUrl="http://localhost:3000/product/date"+dateParam;
    return this.httpClient.get<Product>(baseUrl);
  }

  getCategory(){
    const categoryUrl="http://localhost:3000/categories";
    return this.httpClient.get<Category>(categoryUrl);
  }
}


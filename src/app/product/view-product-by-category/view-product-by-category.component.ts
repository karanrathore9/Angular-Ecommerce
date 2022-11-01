import { ProductService } from './../product.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/site-layout/category';
import { Product } from '../product';

@Component({
  selector: 'app-view-product-by-category',
  templateUrl: './view-product-by-category.component.html',
  styleUrls: ['./view-product-by-category.component.css']
})
export class ViewProductByCategoryComponent implements OnInit {
searchCategory:Category| any;
productList:Product|any;
  constructor(private activatedRoute:ActivatedRoute, private productService:ProductService) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(data =>{
      this.searchCategory = data['id'];

   // this.productList =this.searchCategoryProduct(this.searchCategory).subscribe(data =>{})
    })
  }

}

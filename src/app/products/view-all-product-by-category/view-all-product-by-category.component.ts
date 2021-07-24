import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/site-frame/category';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-view-all-product-by-category',
  templateUrl: './view-all-product-by-category.component.html',
  styleUrls: ['./view-all-product-by-category.component.css']
})
export class ViewAllProductByCategoryComponent implements OnInit {
  
  searchCategory:any;
productList:any;
  count:number=0;
  

  constructor(private activatedRoute:ActivatedRoute,
    private productsService:ProductsService) { }

  ngOnInit(): void {
    
    this.activatedRoute.params.subscribe(data =>{
      this.searchCategory =data.id;

      this.productsService.searchCategoryProducts(this.searchCategory).subscribe(categoryData => {
        this.productList= categoryData;
      });
    });
  }
  clickMe(){
    this.count++
  }

}

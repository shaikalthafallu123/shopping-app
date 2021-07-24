import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-view-all-products-by-date',
  templateUrl: './view-all-products-by-date.component.html',
  styleUrls: ['./view-all-products-by-date.component.css']
})
export class ViewAllProductsByDateComponent implements OnInit {
 
  productDetails:any;

  constructor(private activatedRoute:ActivatedRoute,
    private productsService:ProductsService) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(data =>{
      this.productDetails=data.category;

      this.productsService.viewProduct(this.productDetails).subscribe(categoryData => {
        this.productDetails= categoryData;
      });
    });
  }

}

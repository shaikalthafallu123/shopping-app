import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  
  productDetails:any;

  constructor(private activatedRoute:ActivatedRoute,
    private productsService:ProductsService) { }

  ngOnInit(): void {
    // this.activatedRoute.queryParams.subscribe(data =>{
    //   this.productDetails=data.category;

    //   this.productsService.viewProduct(this.productDetails).subscribe(categoryData => {
    //     this.productDetails= categoryData;
    //   });
    // });
  }
}

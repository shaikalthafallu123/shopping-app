import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  productId:any;
  productDetails:any;

  constructor( private activatedRoute:ActivatedRoute,
     private productsService: ProductsService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data =>{
      this.productId=data.id;

      this.productsService.viewProduct(this.productId).subscribe(data =>
        {
          this.productDetails=data;
        });
    });
  }
  updateProduct(form: any){
    console.log(form);
    
    // const  updateProduct= {
    //   id:form.value.id,
    //   categoryId:form.value.product_category,
    //   productName:form.value.product_name,
    //   description:form.value.product_description,
    //   rating:form.value.product_rating,
    //   reviews:form.value.product_reviews,
    //   isAvailable:1,
    //   productImg:'',
    //   color: form.value.product_color,
    //   productId:10,
    // };
    // this.productsService.updateProduct(updateProduct)

  }

}

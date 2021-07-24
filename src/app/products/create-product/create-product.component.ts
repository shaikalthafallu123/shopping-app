import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  constructor(private productsServices:ProductsService,
     private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }
  addNewProduct(form:any){

    console.log(form);

    let newProduct={
      id:11,
      categoryId:form.value.product_category,
      name:form.value.product_name,
      description:form.value.product_description,
      rating:form.value.product_rating, 
      reviews:form.value.product_reviews,
      isAvailable:1,
      productImg:'',
      color: form.value.product_color
    };
    console.log(newProduct);
    this.productsServices.createProduct(newProduct).subscribe(data =>{
      console.log(data);
    });

  }
}

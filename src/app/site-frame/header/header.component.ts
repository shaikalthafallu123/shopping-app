import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/products/products.service';
// import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private productsService: ProductsService,
    private router:Router) { }
  Category: any;
  ngOnInit(): void {
    this.productsService.getCategories().subscribe(data => {
      this.Category = data;
    });
  }
    logoutUser(){
    // it can be used for clear the data in local storage
    localStorage.clear();
    
    // it was used for navigated purpose in login component
    this.router.navigate(["/products/login"]);
  }
  
  // customOptions: OwlOptions = {
  //   loop: true,
  //   mouseDrag: true,
  //   touchDrag: true,
  //   pullDrag:true,
  //   dots: true,
  //   navSpeed: 700,
  //   navText: ['', ''],
  //   responsive:{
  //     0:{
  //         items:1
  //     },
  //     600:{
  //         items:1
  //     },
  //     800:{
  //         items: 1
  //     },
  //     1000:{
  //         items:1
  //     },
  //   1200:{
  //       items: 1
  //   }
  // },
  //   nav: true
  }
  


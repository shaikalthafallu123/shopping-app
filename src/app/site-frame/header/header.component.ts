import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/products/products.service';

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

}

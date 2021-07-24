import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products/products.service';
import { Category } from '../category';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {


  constructor(private productsService:ProductsService) { }
// @Input() 
Category:any;
  ngOnInit(): void {
    this.productsService.getCategories().subscribe(data =>
      {
this.Category=data;
      });
  }
  
}

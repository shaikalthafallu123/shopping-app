import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  

  searchCategory='';

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(data =>{
      this.searchCategory =data.category;
    });
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag:true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      800:{
          items: 1
      },
      1000:{
          items:1
      },
    1200:{
        items: 1
    }
  },
    nav: true
}
}

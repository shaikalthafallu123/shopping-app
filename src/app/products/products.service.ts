import { Injectable } from '@angular/core';
import{HttpClient, HttpClientModule} from '@angular/common/http';
import{Product} from './product';
import { Observable } from 'rxjs';
import{Category}from '../site-frame/category';
import { LoginEmploye } from './login/login.employe';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpclient:HttpClient) { }


  gteAllProducts():Observable<Product>{
    const productUrl='http://localhost:3000/products';

    return this.httpclient.get<Product>(productUrl);
  }

getCategories():Observable<Category>{
  const categoriesUrl='http://localhost:3000/categories';

  return this.httpclient.get<Category>(categoriesUrl);
}

  createProduct(productBody: any):Observable<Product>{
    const productUrl='http://localhost:3000/products';

    return this.httpclient.post<Product>(productUrl, productBody);

  }
  
  // ----- this is the login page service---------


  loginEmploye(productBody:any):Observable<LoginEmploye>{
    const employeUrl ='http://localhost:3000/employe';
  
      return this.httpclient.post<LoginEmploye>(employeUrl,productBody);
    }
    // ------------ end the login page -----------
  
  viewProduct(productId: string):Observable<Product>{
    const productUrl='http://localhost:3000/products/'+productId;

    return this.httpclient.get<Product>(productUrl);

  }
  updateProduct(productBody: any,productId: string):Observable<Product>{
    const productUrl='http://localhost:3000/products/'+productId;

    return this.httpclient.put<Product>(productUrl, productBody);
  }
  deleteProduct(productId:string):Observable<Product>{
    const productUrl='http://localhost:3000/products/'+productId;

    return this.httpclient.delete<Product>(productUrl);
  }
  searchCategoryProducts(categoryId: any):Observable<Product>{
    const productUrl='http://localhost:3000/products?categoryId='+categoryId;

    return this.httpclient.get<Product>(productUrl);
  }
  searchDateProducts(dateParam: string):Observable<Product>{
    const productUrl='http://localhost:3000/products/category/date='+dateParam;

    return this.httpclient.get<Product>(productUrl);
  }

}

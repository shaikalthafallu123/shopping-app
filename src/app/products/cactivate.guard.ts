import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CactivateGuard implements CanActivate {
  constructor(public router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,

    
  state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
   {
    if(localStorage.getItem("EMAIL")==null && localStorage.getItem("PASSWORD")==null){
      this.router.navigate(["products/view-product"]);
      return false;
    }
    return true;
  }
  
}

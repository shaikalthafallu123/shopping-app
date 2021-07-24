import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CactivateGuard } from './cactivate.guard';
import { CreateProductComponent } from './create-product/create-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { LoginComponent } from './login/login.component';

import { ProductsComponent } from './products.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewAllProductByCategoryComponent } from './view-all-product-by-category/view-all-product-by-category.component';
import { ViewAllProductsByDateComponent } from './view-all-products-by-date/view-all-products-by-date.component';
import { ViewAllProductsComponent } from './view-all-products/view-all-products.component';
import { ViewProductComponent } from './view-product/view-product.component';

const routes: Routes = [{ path: '', component: ProductsComponent },
{ path: 'create-product', component: CreateProductComponent,canActivate:[CactivateGuard] }, 
{ path: 'delete-product/:id', component: DeleteProductComponent},
{ path: 'update-product', component: UpdateProductComponent },

{ path: 'category/:id', component: ViewAllProductByCategoryComponent },

{ path: 'date', component: ViewAllProductsByDateComponent },
{ path: 'view-product', component: ViewProductComponent }, 
{ path: 'list-product', component:ViewAllProductsComponent},
{path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }

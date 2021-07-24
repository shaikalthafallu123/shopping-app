import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListOrdersComponent } from './orders/list-orders/list-orders.component';
import { CactivateGuard } from './products/cactivate.guard';


const routes: Routes =[{ path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },

{path:'orders',component:ListOrdersComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}

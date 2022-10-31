import { ListOrderComponent } from './oders/list-order/list-order.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'products', loadChildren: () => import('./product/product.module').then(m => m.ProductModule) }, { path: 'product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule) },
{path: 'oders',component:ListOrderComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

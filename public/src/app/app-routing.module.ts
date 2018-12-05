import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { NewComponent } from './products/new/new.component';
import { EditComponent } from './products/edit/edit.component';
import { ShowComponent } from './products/show/show.component';
import { ProductHomeComponent } from './products/product-home/product-home.component';


const routes: Routes = [
{ path: '', pathMatch: 'full', redirectTo: '/pets' },
{ path: 'pets',component: ProductsComponent, children:[
	{ path: 'edit/:id',component: EditComponent },
	{ path: 'new', component: NewComponent },
	{ path: ':id', component: ShowComponent },
	{ path: '',component: ProductHomeComponent }] }


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

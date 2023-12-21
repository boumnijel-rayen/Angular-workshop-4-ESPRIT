import { AppartmentsComponent } from './appartments/appartments.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { FormAppartmentComponentComponent } from './form-appartment-component/form-appartment-component.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductComponent } from './product/product.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ResidenceComponent } from './residence/residence.component';
import { TestComponent } from './test/test.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'home', component:TestComponent},
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'product',component:ProductComponent},
  {path:'product/:id',component:DetailProductComponent},
  {path:'showApparts/:id',component:AppartmentsComponent},
  {path:'residence',component:ResidenceComponent},
  {path:'form',component:ReactiveFormComponent},
  {path:'FormApppart/:id',component:FormAppartmentComponentComponent},
  {path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

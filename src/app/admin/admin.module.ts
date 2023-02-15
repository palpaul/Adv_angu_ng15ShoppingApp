import { CommonModule } from "@angular/common";
import {NgModule} from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';
import { AuthGaurd } from "../auth/auth.gaurd";
import { MaterialModule } from "../material/material.module";
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageCategoriesComponent } from './manage-categories/manage-categories.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ManageCategoriesComponent,
    ManageProductsComponent
  ],
  imports: [MaterialModule,CommonModule,FormsModule, RouterModule.forChild([
    {path:"dashboard",component: DashboardComponent,canActivate:[AuthGaurd], children:[

      {path:"categories",component:ManageCategoriesComponent},
      {path:"products",component:ManageProductsComponent},
      //this is for chilcategories if path is blank then automatically it oges to categories ok
      {path:"",redirectTo:"categories" , pathMatch:"full"},
    ]}
  ])]
})
export class AdminModule{
    constructor(){
        console.log("Admin module is created")
    }
}
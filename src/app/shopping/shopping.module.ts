import {NgModule} from "@angular/core";
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { MaterialModule } from "../material/material.module";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { SearchDataPipe } from "./searchdata.pipe";

@NgModule({
  declarations: [
    ShoppingListComponent,
    ProductsListComponent,SearchDataPipe
  ],
  exports: [ShoppingListComponent], // now you can use shpooing module in home compoent okay now shopping module is become a exportable you can use this module componet  into anytoher  component

  imports:[MaterialModule,RouterModule,CommonModule, FormsModule]

})

export class ShoppingModule{
    constructor(){
        console.log("Shopping module is created")
    }
}
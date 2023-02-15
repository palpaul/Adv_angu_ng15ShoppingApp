//1. refer NgModule member in core liberary
import { NgModule } from "@angular/core";
import { ShoppingModule } from "./shopping/shopping.module";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header.component";
import { HomeComponent } from './home/home.component'
import { NotFoundComponent } from './not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialModule } from "./material/material.module";
import { Routes } from "@angular/router";
import { RouterModule } from '@angular/router';
import { AuthModule } from "./auth/auth.module";
import { AdminModule } from "./admin/admin.module";

import {HttpClientModule} from "@angular/common/http"
import { ProductsListComponent } from "./shopping/products-list/products-list.component";
import { ReactiveFormsModule } from '@angular/forms';
import { ReversePipe } from './reverse.pipe';
import { CounterComponent } from './counter.component';

// Route Mapping

// ** reprs not found component okay
const appRoutes : Routes = [
    {path:"home", component:HomeComponent, children:[
        {path:"" , component:ProductsListComponent},
        //cid is the name  of paramter
        {path:":cid",component:ProductsListComponent}
    ]},

       
    {path:"",redirectTo:"home" ,pathMatch:"full"},

    //lazyloading concept loading auth module at run tume when use click on login,logout ,register functionality only 
    {path:"auth",loadChildren:()=>import("./auth/auth.module").then((m)=>AuthModule)},
    //admin module
    {path:"admin",loadChildren:()=>import("./admin/admin.module").then((a)=>AdminModule)},

    {path:"**", component:NotFoundComponent},
  
]



//2. Use NgModule Decorator to provide more information (metadata)about class
@NgModule({
    //module depedencies
    imports:[ShoppingModule,BrowserModule,HttpClientModule,ReactiveFormsModule, BrowserAnimationsModule,MaterialModule,RouterModule.forRoot(appRoutes,{useHash:true})],
    //register component class
    declarations:[AppComponent,HeaderComponent, HomeComponent, NotFoundComponent, ReversePipe, CounterComponent],

    //Startup Component
    bootstrap:[AppComponent]
})

//3. Define class for module
export class AppModule {
    constructor(){
        console.log("APp Module is createded");
    }
}
import {NgModule} from "@angular/core";
import { LoginComponent } from "../auth/login/login.component"
import { RegisterComponent } from "../auth/register/register.component";
import { LogoutComponent } from './logout.component';

import {Routes, RouterModule} from "@angular/router";
import { ErrorComponent } from './error.component';
import { FormsModule } from "@angular/forms";
import { AuthGaurd } from "./auth.gaurd";
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";

const authRoutes: Routes = [

{path: "login", component: LoginComponent},
{path: "register", component: RegisterComponent},
{path: "logout",component : LogoutComponent, canActivate:[AuthGaurd]},
{path: "error",component : ErrorComponent},


]

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    ErrorComponent
  ],
  imports: [ReactiveFormsModule, CommonModule,FormsModule,RouterModule.forChild(authRoutes)]
})
export class AuthModule{
    constructor(){
        console.log("AuthModule module is created")
    }
}
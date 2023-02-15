//1. Refer component memeber  from core liberary
import { Component, inject } from "@angular/core";
import { AuthService } from "./services/auth.service";

//2. component Decorator 
@Component({
//specify tag name for compoent class
//selector tag we can give any name but recommended follow naming convention its root component thats why giving root as a selector
selector:"app-root",
//output for the component view
template:` <!--My first angular content-->
<app-header></app-header>
<!-- //showing and hiding the compoent based on  user intecation managed by router outlet -->
<router-outlet></router-outlet>



<!-- <app-home></app-home>
<app-shopping-list></app-shopping-list> -->
`
})

// 3. define component class
export class AppComponent{
    constructor(){
        console.log("App Component is created");
    }
    //injecting auth service
    authSvc = inject(AuthService)

    ngOnInit(){
    let val = localStorage.getItem("loggedInData")
    if(val !=null ) this.authSvc.setLoggedIn(true)

    }
}
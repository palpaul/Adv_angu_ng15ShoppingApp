import {Component} from "@angular/core"
import { AuthService } from "./services/auth.service"

@Component({
    selector:"app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.css"]
})

export class HeaderComponent{

    isAdminLoggedIn:boolean = false

    constructor( private authSvc:AuthService){
        console.log("Header component created")
    }

    ngOnInit(){
        this.authSvc.currentLoggenIn.subscribe({
                next:(data)=>{
                    this.isAdminLoggedIn = data
                }
        })
    }
}

//template:"<h3> Header Component </h3>" ,
import { Injectable , inject} from "@angular/core";
import {  CanActivate,} from "@angular/router";
import { AuthService } from "../services/auth.service";

@Injectable({
  providedIn:'root'  
})

export class AuthGaurd implements CanActivate{

    //injecting auth service
    authSvc = inject(AuthService)


    //override the method
    canActivate(){
        let flag = false
        this
        .authSvc.currentLoggenIn.subscribe({
            next:(data)=>flag=data
        })
        return flag
    }
    
}
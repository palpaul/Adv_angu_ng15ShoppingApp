import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username:string =""
  userpwd:string = ""

  authSvc = inject(AuthService) //calling the service using inject , we can use constructor also
  router = inject(Router) //injecting router

  doLogin(){
    if(this.authSvc.validateUser(this.username,this.userpwd)){
      // if treue then navigate to dashboard
      this.router.navigate(['admin/dashboard'])
    }else{
      this.router.navigate(['auth/error'])
    }
  }
}

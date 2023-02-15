import { Component, inject } from '@angular/core';
import { AppComponent } from '../app.component';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-logout',
  template: `
    <h1>Logout Successfull</h1>
  `,
  styles: [
  ]
})
export class LogoutComponent {
authSvc =inject(AuthService)

ngOnInit(){
  localStorage.clear()
  this.authSvc.setLoggedIn(false)

}
}
AppComponent
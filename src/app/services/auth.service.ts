import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentLoggenIn = new BehaviorSubject(false)

  constructor() { }

  setLoggedIn(newval:boolean){
    this.currentLoggenIn.next(newval)
  }

  validateUser(username:string,password:string):boolean{
      if(username=== "admin" && password==="admin"){
        this.setLoggedIn(true)
        //page reload /application reload storing looged in data into local storage oaky 
        localStorage.setItem("loggedInData","true")
        return true
      }
      else{
        this.setLoggedIn(false)
        return false


      }
  }
}

import { Component , OnInit} from '@angular/core';
import {FormGroup,FormControl,FormBuilder,Validators} from "@angular/forms"



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{

  //creating a var of myForm
myForm: FormGroup
//creaintg constructor and initilizing the obj of FormGroup
  constructor(){
    this.myForm = new FormGroup({
      uname: new FormControl("",Validators.required),
      upwd: new FormControl("", [Validators.required ,Validators.minLength(6)])

    })
  }


//   registerForm: FormGroup;

//   constructor(private fb: FormBuilder) {
//     this.registerForm = this.fb.group({});
//    }

//   ngOnInit() {
//     this.registerForm = this.fb.group({
//       name: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', [Validators.required, Validators.minLength(6)]]
//     });
//   }

//   onSubmit() {
//     if (this.registerForm.valid) {
//       console.log(this.registerForm.value);
//     }

// }
}

import { Component } from '@angular/core';
import { AuthService } from '../Services/Auth_Services/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  Login:FormGroup=new FormGroup({

    'userName':new FormControl('',[Validators.required]),
    'password':new FormControl('',[Validators.required]),

  })
  submitLogin(){
    if(this.Login.invalid){
      return;
    }
    this.Auth.SinIn(this.Login.value).subscribe((data)=>{
      console.log(data)

      this._Router.navigateByUrl("");
    });
    console.log(this.Login.value)
  }
  constructor(private Auth: AuthService, private _Router:Router){}
}

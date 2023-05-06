import { Component } from '@angular/core';
import { AuthService } from 'src/app/Services//Auth_Services/auth.service';
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
      if(data.token!=null){
        console.log("sara")
      localStorage.setItem("userToken",data.token);
      this.Auth.getuserData();
      console.log(this.Login.value)
      }
      // this._Router.navigateByUrl("");
    });


  }
  constructor(private Auth: AuthService, private _Router:Router){}
}

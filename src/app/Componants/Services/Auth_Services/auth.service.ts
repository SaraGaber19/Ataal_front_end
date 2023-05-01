import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterInt } from 'src/app/Interfaces/register-int';
import { Observable} from 'rxjs';
import { LoginInt } from 'src/app/Interfaces/login-int';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  // https://localhost:7273/api/Customer

  Sinup(RegisterData:RegisterInt):Observable<any>
  {

    return this.http.post("https://localhost:7273/api/Identity/CustomerRegister",RegisterData)
  }
  SinIn(LoginData:LoginInt):Observable<any>
  {

    return this.http.post("https://localhost:7273/api/Identity/Login",LoginData)
  }

  SinupTechnicacan(RegisterData:RegisterInt):Observable<any>
  {

    return this.http.post("https://localhost:7273/api/Identity/TechnicalRegister",RegisterData)
  }
}

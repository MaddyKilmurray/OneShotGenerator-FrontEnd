import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly baseUrl:string = "http://localhost:8000/api/users"  

  constructor(private http:HttpClient) {}

  validateUsername(username:string) : Observable<any> {
    const body = { "username": username };
    return this.http.post<any>(this.baseUrl + "/validate/username", body);
  }

  validateEmail(email:string) : Observable<any> {
    const body = { "email": email };
    return this.http.post<any>(this.baseUrl + "/validate/email",body);
  }

  getCurrentUser(email:string): Observable<any> {
    return this.http.get<any>(this.baseUrl + email);
  }

  updateUserDM(isDm:boolean):Observable<any> {
    const body = { "isDm": isDm };
    return this.http.patch(this.baseUrl + "/authenticated/update",body);
  }

  updateUserPartyId(partyId:string):Observable<any> {
    const body = { "partyId": partyId };
    return this.http.patch(this.baseUrl + "/authenticated/update",body);
  }

  createUser(username:string,email:string,isDm:boolean,partyId:number):Observable<any> {
    const body = {
      "username":username,
      "email":email,
      "dm":isDm,
      "partyId":partyId
    }
    return this.http.post<any>(this.baseUrl,body);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FullCharacter } from '../models/fullCharacter';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly baseUrl:string = "http://localhost:8300/api/users"  

  constructor(private http:HttpClient) {}

  getCharacters(email:string) : Observable<FullCharacter[]> {
    return this.http.get<FullCharacter[]>(this.baseUrl + "/characters/" + email);
  }

  validateUsername(username:string) : Observable<any> {
    const body = { "username": username };
    return this.http.post<any>(this.baseUrl + "/validate/username", body);
  }

  validateEmail(email:string) : Observable<any> {
    const body = { "email": email };
    return this.http.post<any>(this.baseUrl + "/validate/email",body);
  }

  getCurrentUser(email:string): Observable<any> {
    return this.http.get<UserModel>(this.baseUrl + "/by_email/" + email);
  }

  updateUserDM(isDm:boolean):Observable<any> {
    const body = { "isDm": isDm };
    return this.http.patch(this.baseUrl + "/authenticated/update",body);
  }

  updateUserPartyId(email:string,partyId:string):Observable<any> {
    return this.http.put(this.baseUrl + "/update/partyId/" + email,partyId);
  }

  createUser(username:string,email:string,isDm:boolean,partyId:number):Observable<any> {
    const body = {
      "username":username,
      "email":email,
      "dm":isDm,
      "partyId":partyId
    }
    return this.http.post<any>(this.baseUrl + "/register",body);
  }
}

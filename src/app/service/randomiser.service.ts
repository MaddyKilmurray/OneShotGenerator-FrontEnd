import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomiserService {

  private readonly baseUrl:string = "http://localhost:8390/api/random"

  constructor(private http:HttpClient) { }

  d4(): Observable<any> {
    return this.http.get<any>(this.baseUrl + "/d4");
  }

  d6(): Observable<any> {
    return this.http.get<any>(this.baseUrl + "/d6");
  }

  d8(): Observable<any> {
    return this.http.get<any>(this.baseUrl + "/d8");
  }

  d12(): Observable<any> {
    return this.http.get<any>(this.baseUrl + "/d12");
  }

  d20(): Observable<any> {
    return this.http.get<any>(this.baseUrl + "/d20");
  }

  d100(): Observable<any> {
    return this.http.get<any>(this.baseUrl + "/d100");
  }

  dragon(): Observable<any> {
    return this.http.get<any>(this.baseUrl + "/dragon");
  }
}

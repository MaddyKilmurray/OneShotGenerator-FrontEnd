import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DndApiService {

  readonly baseUrl:string = "https://www.dnd5eapi.co/api/";

  constructor(private http:HttpClient) { }

  getRaceList() : Observable<any> {
    return this.http.get<any>(this.baseUrl + "races");
  }

  getRaceDetails(searchRace:string) : Observable<any> {
    return this.http.get<any>(this.baseUrl + "races/" + searchRace);
  }

  getClassList() : Observable<any> {
    return this.http.get<any>(this.baseUrl + "classes");
  }

  getClassDetails(searchClass:string) : Observable<any> {
    return this.http.get<any>(this.baseUrl + "classes/" + searchClass);
  }

}

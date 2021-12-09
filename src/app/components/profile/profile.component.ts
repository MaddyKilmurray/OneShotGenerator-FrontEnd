import { FullCharacter } from './../../models/fullCharacter';
import { HttpClient } from '@angular/common/http';
import { OktaAuth } from '@okta/okta-auth-js';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  isAuthenticated: boolean = false;
  userFullName: string | undefined;
  userEmail: string | undefined;
  userDm:string | undefined;
  partyId:string | undefined;

  chars:FullCharacter[]


  constructor(private oktaAuth:OktaAuth,
    private http:HttpClient) { 

      this.chars = [];
    }

    async ngOnInit() {
      const userClaims = await this.oktaAuth.getUser()
  
      const userToken = await this.oktaAuth.getIdToken();
  
      this.userFullName = userClaims.given_name + " " + userClaims.family_name;
      this.userEmail = userClaims.email;
      this.userDm = userClaims.locale;
    }

    // retrieve the users characters
    retrieveCharacters() : void {

    }

}

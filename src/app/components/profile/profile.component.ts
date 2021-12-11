import { UserModel } from 'src/app/models/user.model';
import { UserService } from './../../service/user.service';
import { FullCharacter } from './../../models/fullCharacter';
import { HttpClient } from '@angular/common/http';
import { OktaAuth } from '@okta/okta-auth-js';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  isAuthenticated: boolean = false;
  userName: string | undefined;
  userEmail: string | undefined;
  userDm:string | undefined;
  partyId:string | undefined;

  characters:FullCharacter[]
  user:UserModel;

  constructor(private oktaAuth:OktaAuth,
    private http:HttpClient, private userService:UserService) { 

      this.characters = [];
      this.user = new UserModel(0,'',0,'',false);
    }

    async ngOnInit() {
      const userClaims = await this.oktaAuth.getUser()
  
      const userToken = await this.oktaAuth.getIdToken();
  
      this.userEmail = userClaims.preferred_username;

      this.getUser(this.userEmail!);
      this.retrieveCharacters();
    }

    getUser(email:string) {
      this.userService.getCurrentUser(email).subscribe(
        result => {
          this.user = result
        }
      )
    }

    retrieveCharacters() : void {
      console.log(this.userEmail)
      this.userService.getCharacters(this.userEmail!).subscribe(
        result => {
          this.characters = result;
          console.log(this.characters);
        }
      )
    }

}

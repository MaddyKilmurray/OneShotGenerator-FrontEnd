import { CharacterService } from './../../service/character.service';
import { UserModel } from 'src/app/models/user.model';
import { UserService } from './../../service/user.service';
import { FullCharacter } from './../../models/fullCharacter';
import { HttpClient } from '@angular/common/http';
import { OktaAuth } from '@okta/okta-auth-js';
import { Component, OnInit } from '@angular/core';
import { UserModelResponse } from 'src/app/models/backendUser';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RandomiserService } from 'src/app/service/randomiser.service';
import { Fact } from 'src/app/models/factModel';

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

  fact:string = '';

  characters:FullCharacter[]
  user:UserModel;

  constructor(private oktaAuth:OktaAuth,
    private http:HttpClient, private snackbar:MatSnackBar, private userService:UserService,
    private charService:CharacterService, public randomService:RandomiserService) { 

      this.characters = [];
      this.user = new UserModel(0,'',0,'',false);
    }

    async ngOnInit() {
      const userClaims = await this.oktaAuth.getUser()
  
      const userToken = await this.oktaAuth.getIdToken();
  
      this.userEmail = userClaims.preferred_username;

      this.getUser();
      this.retrieveCharacters();
      this.dragonFact();
    }

    getUser() {
      this.userService.getCurrentUser(this.userEmail!).subscribe(
        result => {
          const userModel:UserModelResponse = result;
          this.user.id = userModel.id;
          this.user.username = userModel.username;
          this.user.partyId = userModel.partyId;
          this.user.email = userModel.email;
          this.user.isDM = userModel.dm;
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

    delete(id:number):void {
      this.charService.delete(id).subscribe(
        result => {
          this.retrieveCharacters();
        }
      )
    }

    dragonFact(): void {
      this.randomService.dragon().subscribe(
        result => {
          const factResponse:Fact = result;
          this.fact = factResponse.fact;
        }
      );
    }
  
    dragon(): void {
      this.snackbar.open(this.fact,"Close", {
        duration: 3000
      });
    }

}

import { CharacterService } from './../../service/character.service';
import { FullCharacter } from './../../models/fullCharacter';
import { UserService } from './../../service/user.service';
import { RandomiserService } from './../../service/randomiser.service';
import { Component, OnInit } from '@angular/core';
import { OktaAuthStateService } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';
import { UserModel } from 'src/app/models/user.model';
import { UserModelResponse } from 'src/app/models/backendUser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user:UserModel;

  userName: string | undefined
  email: string | undefined;
  emailValidated: boolean = true;

  characters:FullCharacter[]

  constructor(public oktaAuth: OktaAuth, public authService: OktaAuthStateService,
    public userService: UserService, public charService: CharacterService) {
      this.user = new UserModel(0,'',0,'',false);
      this.characters = [];
  }

  async ngOnInit() {
    if (this.oktaAuth.authStateManager.getAuthState()?.isAuthenticated) {

      const userClaims = await this.oktaAuth.getUser()

      const userToken = await this.oktaAuth.getIdToken();

      this.userName = userClaims.given_name + " " + userClaims.family_name;
      this.email = userClaims.preferred_username;

      this.validateEmail();
      this.getUser();
      this.getCharacters();
    }
  }

  async validateEmail() {
    this.userService.validateEmail(this.email!).subscribe(
      result => {
        this.emailValidated = result;
        if (!this.emailValidated) {
          this.userService.createUser(this.userName!, this.email!, false, 0).subscribe(
            result => {

            }
          )
        }
      }
    )

  }

  getUser() {
    console.log(this.email!);
    this.userService.getCurrentUser(this.email!).subscribe(
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

  getCharacters() : void {
    this.userService.getCharacters(this.email!).subscribe(
      result => {
        this.characters = result;
      }
    )
  }
}

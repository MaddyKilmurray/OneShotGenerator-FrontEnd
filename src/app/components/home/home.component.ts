import { CharacterService } from './../../service/character.service';
import { FullCharacter } from './../../models/fullCharacter';
import { UserService } from './../../service/user.service';
import { RandomiserService } from './../../service/randomiser.service';
import { Component, OnInit } from '@angular/core';
import { OktaAuthStateService } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user:User;

  userName: string | undefined
  email: string | undefined;
  emailValidated: boolean = true;

  characters:FullCharacter[]

  constructor(public oktaAuth: OktaAuth, public authService: OktaAuthStateService,
    public userService: UserService, public charService: CharacterService) {
      this.user = new User('',0,'',false);
      this.characters = [];
  }

  async ngOnInit() {
    if (this.oktaAuth.authStateManager.getAuthState()?.isAuthenticated) {

      const userClaims = await this.oktaAuth.getUser()

      const userToken = await this.oktaAuth.getIdToken();

      this.userName = userClaims.given_name + " " + userClaims.family_name;
      this.email = userClaims.preferred_username;

      this.validateEmail();
      this.getUser(this.email!);
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

  getUser(email:string) {
    this.userService.getCurrentUser(email).subscribe(
      result => {
        this.user = result
      }
    )
  }

  getCharacters() : void {
    this.userService.getCharacters(this.email!).subscribe(
      result => {
        this.characters = result;
        console.log(this.characters);
      }
    )
  }
}

import { UserService } from './../../service/user.service';
import { RandomiserService } from './../../service/randomiser.service';
import { Component, OnInit } from '@angular/core';
import { OktaAuthStateService } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  userName: string | undefined
  email: string | undefined;
  emailValidated: boolean;

  constructor(public oktaAuth: OktaAuth, public authService: OktaAuthStateService,
    public userService:UserService) {
      this.emailValidated = false;
  }

  async ngOnInit() {
    const userClaims = await this.oktaAuth.getUser()

    const userToken = await this.oktaAuth.getIdToken();

    this.userName = userClaims.given_name + " " + userClaims.family_name;
    this.email = userClaims.email;
    
  }

  validateEmail() : void { 
    this.userService.validateEmail(this.email!).subscribe(
      result => {
        this.emailValidated = result;
      }
    )
  }

  saveUser() {
    if (this.emailValidated) {
      this.userService.createUser(this.userName!,this.email!,false,0).subscribe(
        result => {
          console.log("User saved");
        }
      )
    }
  }
}

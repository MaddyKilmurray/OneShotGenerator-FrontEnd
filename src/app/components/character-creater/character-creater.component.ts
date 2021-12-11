import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from './../../service/user.service';
import { Component, OnInit } from '@angular/core';
import { OktaAuth } from '@okta/okta-auth-js';
import { UserModel } from 'src/app/models/user.model';
import { UserModelResponse } from 'src/app/models/backendUser';

@Component({
  selector: 'app-character-creater',
  templateUrl: './character-creater.component.html',
  styleUrls: ['./character-creater.component.css']
})
export class CharacterCreaterComponent implements OnInit {


  email: string | undefined;

  user:UserModel;

  constructor(public oktaAuth:OktaAuth, public userService:UserService,
    private snackbar:MatSnackBar) {
    this.user = new UserModel(0,'',0,'',false);
  }

  async ngOnInit() {
    if (this.oktaAuth.authStateManager.getAuthState()?.isAuthenticated) {

      const userClaims = await this.oktaAuth.getUser()

      this.email = userClaims.preferred_username;
      this.getUser();
    }
  }

  getUser() {
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

}

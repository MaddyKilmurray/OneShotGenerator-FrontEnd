import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from './../../service/user.service';
import { Component, OnInit } from '@angular/core';
import { OktaAuth } from '@okta/okta-auth-js';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-character-creater',
  templateUrl: './character-creater.component.html',
  styleUrls: ['./character-creater.component.css']
})
export class CharacterCreaterComponent implements OnInit {

  showDM:boolean;

  user:User;

  constructor(public oktaAuth:OktaAuth, public userService:UserService,
    private snackbar:MatSnackBar) {
    this.showDM = false;
    this.user = new User('',0,'',false);
  }

  async ngOnInit() {
    if (this.oktaAuth.authStateManager.getAuthState()?.isAuthenticated) {

      const userClaims = await this.oktaAuth.getUser()

      this.getUser(userClaims.preferred_username!);
    }
  }

  switchDM(): void {
    this.showDM = !this.showDM;
  }

  getUser(email:string) {
    this.userService.getCurrentUser(email).subscribe(
      result => {
        this.user = result
      }
    )
  }

  openSnackBar(message: string, action: string) {
    this.snackbar.open(message, action);
  }

}

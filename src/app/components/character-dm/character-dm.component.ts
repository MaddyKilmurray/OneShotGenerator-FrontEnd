import { MatSnackBar } from '@angular/material/snack-bar';

import { UserService } from './../../service/user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { OktaAuth } from '@okta/okta-auth-js';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-character-dm',
  templateUrl: './character-dm.component.html',
  styleUrls: ['./character-dm.component.css']
})
export class CharacterDmComponent implements OnInit {

  email: string | undefined;

  partyForm:FormGroup;
  partyId:FormControl;

  user:User;

  constructor(public oktaAuth: OktaAuth,public userService:UserService,
    private snackbar:MatSnackBar) { 
    this.partyId = new FormControl('',[Validators.required]);

    this.partyForm = new FormGroup({
      partyId:this.partyId
    })

    this.user = new User('',0,'',false);
  }

  async ngOnInit() {
    if (this.oktaAuth.authStateManager.getAuthState()?.isAuthenticated) {

      const userClaims = await this.oktaAuth.getUser()

      this.email = userClaims.preferred_username;
    }
    this.getUser(this.email!);
  }

  // writes partyID to DM user profile
  onSubmit() : void {
    this.userService.updateUserPartyId(this.email!,this.partyId.value).subscribe(
      result => {
        this.openSnackBar("Party ID " + this.partyId.value + " created","Close");
        this.getUser(this.email!);
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

  openSnackBar(message: string, action: string) {
    this.snackbar.open(message, action);
  }

}

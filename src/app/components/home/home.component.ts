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

  constructor(public oktaAuth: OktaAuth, public authService: OktaAuthStateService) {
  }

  async ngOnInit() {
    const userClaims = await this.oktaAuth.getUser()

    const userToken = await this.oktaAuth.getIdToken();

    this.userName = userClaims.given_name + " " + userClaims.family_name;
    this.email = userClaims.email;
    
  }

  saveUser() {
    
  }
}

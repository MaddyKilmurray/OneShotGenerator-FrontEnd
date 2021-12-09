import { animate, transition, trigger, state, style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { OktaAuthStateService } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';

@Component({
  selector: 'app-header',
  animations: [
    trigger('showNav', [
      // ...
      state('show', style({
        opacity:"1"
      })),
      state('hide', style({
        opacity:"0"
      })),
      transition('show => hide', [
        animate('0.5s')
      ]),
      transition('hide => show', [
        animate('0.5s')
      ]),
    ]),
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isAuthenticated = false;

  showNavigation:boolean;

  constructor(public oktaAuth: OktaAuth,public authService: OktaAuthStateService) {
    this.showNavigation = false;

    this.oktaAuth.authStateManager.subscribe(
      (isAuthenticated: boolean) => this.isAuthenticated = isAuthenticated
    );
  }

  switchNav(): void {
    if (this.showNavigation) {
      this.showNavigation = false;
    }
    else {
      this.showNavigation = true;
    }
  }

  async logout(): Promise<void> {
    await this.oktaAuth.signOut();
  }

}

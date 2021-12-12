import { RandomiserService } from './../../service/randomiser.service';
import { animate, transition, trigger, state, style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { OktaAuthStateService } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';
import { MatSnackBar } from '@angular/material/snack-bar';

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

  showNavigation:boolean;

  constructor(public oktaAuth: OktaAuth,public authService: OktaAuthStateService, 
    private snackbar:MatSnackBar, private randomService:RandomiserService) {
    this.showNavigation = false;
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

  d4():void {
    this.randomService.d4().subscribe(
      result => {
        this.snackbar.open("You rolled: " + result,"Close", {
          duration: 2000
        });
      }
    )
  }

  d6():void {
    this.randomService.d6().subscribe(
      result => {
        this.snackbar.open("You rolled a " + result,"Close", {
          duration: 2000
        });
      }
    )
  }

  d8():void {
    this.randomService.d8().subscribe(
      result => {
        this.snackbar.open("You rolled a " + result,"Close", {
          duration: 2000
        });
      }
    )
  }

  d12():void {
    this.randomService.d12().subscribe(
      result => {
        this.snackbar.open("You rolled a " + result,"Close", {
          duration: 2000
        });
      }
    )
  }

  d20():void {
    this.randomService.d20().subscribe(
      result => {
        this.snackbar.open("You rolled a " + result,"Close", {
          duration: 2000
        });
      }
    )
  }

  d100():void {
    this.randomService.d100().subscribe(
      result => {
        this.snackbar.open("You rolled a " + result,"Close", {
          duration: 2000
        });
      }
    )
  }

}

import { UserService } from './../../service/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DndApiService } from './../../service/dnd-api.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RaceListResponse } from 'src/app/models/raceList';
import { ClassListResponse } from 'src/app/models/classList';
import { OktaAuth } from '@okta/okta-auth-js';
import { UserModel } from 'src/app/models/user.model';
import { UserModelResponse } from 'src/app/models/backendUser';

@Component({
  selector: 'app-character-player',
  templateUrl: './character-player.component.html',
  styleUrls: ['./character-player.component.css']
})
export class CharacterPlayerComponent implements OnInit {

  showCustomView:boolean;
  showRandomView:boolean;

  email: string | undefined;

  user:UserModel;

  races: string[];
  classes: string[];

  characterForm: FormGroup;
  characterName: FormControl;
  partyId: FormControl;

  constructor(private router:Router, private dndService:DndApiService,
    private userService: UserService, public oktaAuth:OktaAuth) {
    this.showCustomView=false;
    this.showRandomView=false;
    this.races = [];
    this.classes = [];

    this.user = new UserModel(0,'',0,'',false);

    this.characterName = new FormControl('',[Validators.required]);
    this.partyId = new FormControl((this.user.partyId != 0 ? this.user.partyId : ''),[Validators.required, Validators.minLength(6)]);

    this.characterForm = new FormGroup ({
      characterName:this.characterName,
      partyId:this.partyId
    })
  }

  async ngOnInit() {
    if (this.oktaAuth.authStateManager.getAuthState()?.isAuthenticated) {

      const userClaims = await this.oktaAuth.getUser()

      this.email = userClaims.preferred_username;

      this.getUser();
    }
    this.generateRaceList();
    this.generateClassList();
  }

  // Replace math.random()
  randomClass(): string {
    const randomClassNumber = Math.floor(Math.random() * this.classes.length);
    return this.classes[randomClassNumber];
  }

  randomRace(): string {
    const randomRaceNumber = Math.floor(Math.random() * this.races.length);
    return this.races[randomRaceNumber];
  }

  switchRandomView(): void {
    this.showRandomView = !this.showRandomView;
  }

  sentBack():void {
    this.characterForm.reset;
    this.router.navigate(['/create']);
  }

  generateRaceList(): void {
    this.dndService.getRaceList().subscribe(result => {
      const raceListResponse: RaceListResponse = result;
      var i = 0;
      for (let race of raceListResponse.results) {
        this.races.push(raceListResponse.results[i].index);
        i++;
      }
    })
  }

  generateClassList(): void {
    this.dndService.getClassList().subscribe(result => {
      const classListResponse: ClassListResponse = result;
      var i = 0;
      for (let aClass of classListResponse.results) {
        this.classes.push(classListResponse.results[i].index);
        i++;
      }
    })
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

import { CustomValidator } from './../../validators/custom-validators';
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
import { CharacterDetail } from 'src/app/models/characterDetail.model';
import { ClassDetailInfo } from 'src/app/models/classDetail';
import { RaceDetailInfo } from 'src/app/models/raceDetail';

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

  generatedCharacter: CharacterDetail;

  constructor(private router:Router, private dndService:DndApiService,
    private userService: UserService, public oktaAuth:OktaAuth) {
    this.showCustomView=false;
    this.showRandomView=false;
    this.races = [];
    this.classes = [];

    this.user = new UserModel(0,'',0,'',false);
    this.generatedCharacter = new CharacterDetail(this.user.id,'','', 0, '', 0, '', '', '', '', '', '', 0, '', '', '', '');

    this.characterName = new FormControl('',[Validators.required]);
    this.partyId = new FormControl((this.user.partyId != 0 ? this.user.partyId : ''),[Validators.required, CustomValidator.checkPartyID]);

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

  randomClass(): string {
    const randomClassNumber = Math.floor(Math.random() * this.classes.length);
    return this.classes[randomClassNumber];
  }

  randomRace(): string {
    const randomRaceNumber = Math.floor(Math.random() * this.races.length);
    return this.races[randomRaceNumber];
  }

  randomise(): void {
    this.generatedCharacter = new CharacterDetail(this.user.id,this.characterName.value, '', 0, '', 0, '', '', '', '', '', '', 0, '', '', '', '');
    this.generateRandomClass();
    this.generateRandomRace();
    this.showCustomView = true;
  }

  generateRandomClass(): void {
    this.resetClass();
    this.dndService.getClassDetails(this.randomClass()).subscribe(result => {
      const classDetailResponse: ClassDetailInfo = result;
      this.generatedCharacter.char_class = classDetailResponse.name;
      this.generatedCharacter.hit_die = classDetailResponse.hit_die;
      var i = 0;
      for (let choice of classDetailResponse.proficiency_choices[0].from) {
        this.generatedCharacter.proficiency = this.generatedCharacter.proficiency + classDetailResponse.proficiency_choices[0].from[i].name + ", ";
        i++;
      }
      var j = 0;
      for (let proficiency of classDetailResponse.proficiencies) {
        this.generatedCharacter.weaponProficiencies = this.generatedCharacter.weaponProficiencies + classDetailResponse.proficiencies[j].name + ", ";
        j++;
      }
      var k = 0;
      if (classDetailResponse.spellcasting.spellcasting_ability.name === undefined) {
        this.generatedCharacter.spellcasting = "";
      } else {
        this.generatedCharacter.spellcasting = classDetailResponse.spellcasting.spellcasting_ability.name;
      }
    })
  }

  resetClass(): void {
    this.generatedCharacter.char_class = "";
    this.generatedCharacter.hit_die = 0;
    this.generatedCharacter.weaponProficiencies = "";
    this.generatedCharacter.proficiency = "";
    this.generatedCharacter.spellcasting = "";
  }

  generateRandomRace(): void {
    this.resetRace();
    this.dndService.getRaceDetails(this.randomRace()).subscribe(result => {
      const raceDetailResponse: RaceDetailInfo = result;
      this.generatedCharacter.race = raceDetailResponse.name;
      this.generatedCharacter.speed = raceDetailResponse.speed;
      var i = 0;
      for (let ability of raceDetailResponse.ability_bonuses) {
        this.generatedCharacter.abilityScore = this.generatedCharacter.abilityScore + raceDetailResponse.ability_bonuses[i].ability_score.name + ", ";
        i++;
      }
      this.generatedCharacter.size = raceDetailResponse.size;
      var j = 0;
      for (let language of raceDetailResponse.languages) {
        this.generatedCharacter.languages = this.generatedCharacter.languages + raceDetailResponse.languages[j].name + ", ";
        j++;
      }
      var k = 0;
      for (let traits of raceDetailResponse.traits) {
        this.generatedCharacter.traits = this.generatedCharacter.traits + raceDetailResponse.traits[k].name + ", ";
        k++;
      }
    })
  }

  resetRace(): void {
    this.generatedCharacter.race = "";
    this.generatedCharacter.speed = 0;
    this.generatedCharacter.abilityScore = "";
    this.generatedCharacter.size = "";
    this.generatedCharacter.languages = "";
    this.generatedCharacter.traits = "";
  }

  reset() {
    this.resetClass();
    this.resetRace();
    this.characterForm.reset();
    this.showCustomView = false;
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

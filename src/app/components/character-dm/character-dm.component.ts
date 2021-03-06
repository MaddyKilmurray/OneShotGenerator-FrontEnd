import { FullCharacterWithUser } from './../../models/fullCharacterWithUser';
import { CharacterService } from './../../service/character.service';
import { FullCharacter } from './../../models/fullCharacter';
import { MatSnackBar } from '@angular/material/snack-bar';

import { UserService } from './../../service/user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { OktaAuth } from '@okta/okta-auth-js';
import { UserModel } from 'src/app/models/user.model';
import { UserModelResponse } from 'src/app/models/backendUser';

@Component({
  selector: 'app-character-dm',
  templateUrl: './character-dm.component.html',
  styleUrls: ['./character-dm.component.css']
})
export class CharacterDmComponent implements OnInit {

  email: string | undefined;

  partyForm:FormGroup;
  partyId:FormControl;

  user:UserModel;
  characters:FullCharacterWithUser[]
  showDetails: boolean;

  constructor(public oktaAuth: OktaAuth,public userService:UserService,
    private snackbar:MatSnackBar, private characterService:CharacterService) { 
    this.partyId = new FormControl('',[Validators.required]);

    this.partyForm = new FormGroup({
      partyId:this.partyId
    })

    this.user = new UserModel(0,'',0,'',false);
    this.characters = [];
    this.showDetails = false;
  }

  async ngOnInit() {
    if (this.oktaAuth.authStateManager.getAuthState()?.isAuthenticated) {

      const userClaims = await this.oktaAuth.getUser()

      this.email = userClaims.preferred_username;
    }
    this.getUser();
  }

  // writes partyID to DM user profile
  onSubmit() : void {
    this.userService.updateUserPartyId(this.email!,this.partyId.value).subscribe(
      result => {
        this.snackbar.open("Party ID " + this.partyId.value + " created","Close", {
          duration: 2000
        });
        this.getUser();
      }
    )
  }

  getUser() : void {
    this.userService.getCurrentUser(this.email!).subscribe(
      result => {
        const userModel:UserModelResponse = result;
        this.user.id = userModel.id;
        this.user.username = userModel.username;
        this.user.partyId = userModel.partyId;
        this.user.email = userModel.email;
        this.user.isDM = userModel.dm;

        this.getCharsByPartyId(userModel.partyId);
      }
    )
  }

  getCharsByPartyId(partyId:number) : void {
    console.log(this.user.partyId);
    this.characterService.getCharactersByPartyIdWithUser(partyId).subscribe(
      result => {
        this.characters = result;
        this.getUsersByChars();
      }
    )
  }

  getUsersByChars() {

  }

  switchShowDetails() {
    this.showDetails = !this.showDetails;
  }

  toFull(char:FullCharacterWithUser):FullCharacter {
    var newChar:FullCharacter = new FullCharacter(char.id,char.playerId,char.characterName,char.level,char.partyId,char.experience,
      char.alignment,char.startingWeapon,char.startingArmour,char.startingGear,char.startingTrinket,char.numberOfHitDice,char.race,char.speed,
      char.abilityScore,char.abilityBonus,char.size,char.weaponProficiencies,char.proficiency,char.languages,char.traits,char.charClass,char.hitDie,
      char.hitPoints,char.classSkills,char.classProficiencies,char.savingThrows,char.spellcasting,char.strength,char.dexterity,char.constitution,
      char.intelligence,char.wisdom,char.charisma,char.armourClass,char.strengthModifier,char.dexterityModifier,char.constitutionModifier,char.intelligenceModifier,
      char.wisdomModifier,char.charismaModifier);
    return newChar;
  }

}

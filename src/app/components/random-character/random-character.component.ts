import { MatSnackBar } from '@angular/material/snack-bar';
import { FullCharacterInfo } from './../../models/fullCharacter.model';
import { CharacterService } from './../../service/character.service';
import { FullCharacter } from './../../models/fullCharacter';
import { DndApiService } from './../../service/dnd-api.service';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { CharacterDetail } from 'src/app/models/characterDetail.model';

declare var require: any;

import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
const htmlToPdfmake = require("html-to-pdfmake");
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-random-character',
  templateUrl: './random-character.component.html',
  styleUrls: ['./random-character.component.css']
})
export class RandomCharacterComponent implements OnInit {

  fullCharacter: FullCharacter;

  characterSaved: boolean = false;

  @Input() generatedCharacter!: CharacterDetail;
  @Input() partyId!: number;


  constructor(private dndService: DndApiService, private characterService: CharacterService,
    private snackbar: MatSnackBar) {

    this.fullCharacter = new FullCharacter(0, '', 0, 0, 0, '', '', '', '', '', 0, '', 0, '', 0, '', '', '', '', '', '', 0, 0, '', '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }

  ngOnInit(): void {
    this.generateCharacter()
  }

  reset(): void {
    this.fullCharacter = new FullCharacter(0, '', 0, 0, 0, '', '', '', '', '', 0, '', 0, '', 0, '', '', '', '', '', '', 0, 0, '', '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }


  generateCharacter(): void {
    this.fullCharacter = new FullCharacter(0, '', 0, 0, 0, '', '', '', '', '', 0, '', 0, '', 0, '', '', '', '', '', '', 0, 0, '', '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.characterService.generateCharacter(this.generatedCharacter).subscribe(result => {
      console.log(result)
      const fullCharacterResponse: FullCharacterInfo = result;
      this.fullCharacter.playerId = fullCharacterResponse.playerId;
      this.fullCharacter.characterName = fullCharacterResponse.characterName;
      this.fullCharacter.level = fullCharacterResponse.level;
      this.fullCharacter.partyId = fullCharacterResponse.partyId;
      this.fullCharacter.experience = fullCharacterResponse.experience;
      this.fullCharacter.alignment = fullCharacterResponse.alignment;
      this.fullCharacter.startingWeapon = fullCharacterResponse.startingWeapon;
      this.fullCharacter.startingArmour = fullCharacterResponse.startingArmour;
      this.fullCharacter.startingGear = fullCharacterResponse.startingGear;
      this.fullCharacter.startingTrinket = fullCharacterResponse.startingTrinket;
      this.fullCharacter.numberOfHitDice = fullCharacterResponse.numberOfHitDice;
      this.fullCharacter.race = fullCharacterResponse.race;
      this.fullCharacter.speed = fullCharacterResponse.speed;
      this.fullCharacter.abilityScore = fullCharacterResponse.abilityScore;
      this.fullCharacter.abilityBonus = fullCharacterResponse.abilityBonus;
      this.fullCharacter.size = fullCharacterResponse.size;
      this.fullCharacter.weaponProficiencies = fullCharacterResponse.weaponProficiencies;
      this.fullCharacter.proficiency = fullCharacterResponse.proficiency;
      this.fullCharacter.languages = fullCharacterResponse.languages;
      this.fullCharacter.traits = fullCharacterResponse.traits;
      this.fullCharacter.charClass = fullCharacterResponse.charClass;
      this.fullCharacter.hitDie = fullCharacterResponse.hitDice;
      this.fullCharacter.hitPoints = fullCharacterResponse.hitPoints;
      this.fullCharacter.classSkills = fullCharacterResponse.classSkills;
      this.fullCharacter.classProficiencies = fullCharacterResponse.classProficiencies;
      this.fullCharacter.savingThrows = fullCharacterResponse.savingThrows;
      this.fullCharacter.spellcasting = fullCharacterResponse.spellcasting;
      this.fullCharacter.strength = fullCharacterResponse.strength;
      this.fullCharacter.dexterity = fullCharacterResponse.dexterity;
      this.fullCharacter.constitution = fullCharacterResponse.constitution;
      this.fullCharacter.intelligence = fullCharacterResponse.intelligence;
      this.fullCharacter.wisdom = fullCharacterResponse.wisdom;
      this.fullCharacter.charisma = fullCharacterResponse.charisma;
      this.fullCharacter.armourClass = fullCharacterResponse.armourClass;
      this.fullCharacter.strengthModifier = fullCharacterResponse.strengthModifier;
      this.fullCharacter.dexterityModifier = fullCharacterResponse.dexterityModifier;
      this.fullCharacter.constitutionModifier = fullCharacterResponse.constitutionModifier;
      this.fullCharacter.intelligenceModifier = fullCharacterResponse.intelligenceModifier;
      this.fullCharacter.wisdomModifier = fullCharacterResponse.wisdomModifier;
      this.fullCharacter.charismaModifier = fullCharacterResponse.charismaModifier;
    })
  }

  saveCharacter(): void {
    this.fullCharacter.partyId = this.partyId;
    console.log("Full party Id: " + this.fullCharacter.partyId);
    this.characterService.saveCharacter(this.fullCharacter).subscribe(result => {
      this.snackbar.open('Character saved', 'Close', {
        duration: 2000
      });
    })
  }

  @ViewChild('pdfTable')
  pdfTable!: ElementRef;
  
  public downloadAsPDF() {
    const pdfTable = this.pdfTable.nativeElement;
    var html = htmlToPdfmake(pdfTable.innerHTML);
    const documentDefinition = { content: html };
    pdfMake.createPdf(documentDefinition).download(); 
     
  }

}

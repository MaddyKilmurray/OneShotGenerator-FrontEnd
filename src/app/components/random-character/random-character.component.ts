import { FullCharacterResponse, FullCharacterInfo } from './../../models/fullCharacter.model';
import { CharacterService } from './../../service/character.service';
import { FullCharacter } from './../../models/fullCharacter';
import { ClassListResponse } from './../../models/classList';
import { RaceListResponse } from './../../models/raceList';
import { DndApiService } from './../../service/dnd-api.service';
import { Component, Input, OnInit } from '@angular/core';
import { CharacterDetail } from 'src/app/models/characterDetail.model';
import { RaceDetailInfo } from 'src/app/models/raceDetail';
import { ClassDetailInfo } from 'src/app/models/classDetail';

@Component({
  selector: 'app-random-character',
  templateUrl: './random-character.component.html',
  styleUrls: ['./random-character.component.css']
})
export class RandomCharacterComponent implements OnInit {

  generatedCharacter: CharacterDetail;

  fullCharacter: FullCharacter;

  @Input() race!: string;
  @Input() class!: string;
  @Input() characterName!: string;
  @Input() partyId!: number;


  constructor(private dndService: DndApiService, private characterService: CharacterService) {
    
    this.generatedCharacter = new CharacterDetail(this.partyId,this.characterName,'', 0, '', 0, '', '', '', '', '', '', 0, '', '', '', '');
    this.fullCharacter = new FullCharacter(this.partyId,this.characterName, 0, 0, '', '', '', '', '', 0, '', 0, '', 0, '', '', '', '', '', '', 0, '', '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }

  ngOnInit(): void {
    this.generateCharacterDetails();
  }

  reset(): void {
    this.generatedCharacter = new CharacterDetail(this.partyId,this.characterName, '', 0, '', 0, '', '', '', '', '', '', 0, '', '', '', '');
  }

  generateCharacterDetails(): void {
    this.generatedCharacter = new CharacterDetail(this.partyId,this.characterName, '', 0, '', 0, '', '', '', '', '', '', 0, '', '', '', '');
    this.generateRandomClass();
    this.generateRandomRace();
  }

  generateCharacter(): void {
    this.fullCharacter = new FullCharacter(this.partyId,this.characterName, 0, 0, '', '', '', '', '', 0, '', 0, '', 0, '', '', '', '', '', '', 0, '', '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    var playerId = 1; // WORK OUT HOW TO PASS PLAYER ID
    this.generatedCharacter.player_id = playerId;
    this.characterService.generateCharacter(this.generatedCharacter).subscribe(result => {
      console.log(result)
      const fullCharacterResponse: FullCharacterInfo = result;
      this.fullCharacter.player_id = fullCharacterResponse.playerId;
      this.fullCharacter.characterName = fullCharacterResponse.characterName;
      this.fullCharacter.level = fullCharacterResponse.level;
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
      this.fullCharacter.char_class = fullCharacterResponse.charClass;
      this.fullCharacter.hit_die = fullCharacterResponse.hitDice;
      this.fullCharacter.class_skills = fullCharacterResponse.classSkills;
      this.fullCharacter.class_proficiencies = fullCharacterResponse.classProficiencies;
      this.fullCharacter.saving_throws = fullCharacterResponse.savingThrows;
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

  generateRandomClass(): void {
    this.resetClass();
    this.dndService.getClassDetails(this.class).subscribe(result => {
      const classDetailResponse: ClassDetailInfo = result;
      this.generatedCharacter.char_class = classDetailResponse.name;
      this.generatedCharacter.hit_die = classDetailResponse.hit_die;
      var i = 0;
      for (let choice of classDetailResponse.proficiency_choices[0].from) {
        this.generatedCharacter.weaponProficiencies = this.generatedCharacter.weaponProficiencies + classDetailResponse.proficiency_choices[0].from[i].name + ", ";
        i++;
      }
      var j = 0;
      for (let proficiency of classDetailResponse.proficiencies) {
        this.generatedCharacter.proficiency = this.generatedCharacter.proficiency + classDetailResponse.proficiencies[j].name + ", ";
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
    this.dndService.getRaceDetails(this.race).subscribe(result => {
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

}

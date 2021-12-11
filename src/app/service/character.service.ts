import { FullCharacter } from './../models/fullCharacter';
import { CharacterDetail } from './../models/characterDetail.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, enableProdMode } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  readonly gatewayUrl: string = "http://localhost:8000/api/create"
  readonly baseUrl: string = "http://localhost:8600/api/create";

  constructor(private http: HttpClient) { }

  generateCharacter(character: CharacterDetail): Observable<any> {
    const body = {
      playerId: character.player_id,
      characterName: character.characterName,
      race: character.race,
      speed: character.speed,
      abilityScore: character.abilityScore,
      abilityBonus: character.abilityBonus,
      size: character.size,
      proficiency: character.proficiency,
      weaponProficiencies: character.weaponProficiencies,
      languages: character.languages,
      traits: character.traits,
      charClass: character.char_class,
      hitDice: character.hit_die,
      classSkills: character.class_skills,
      classProficiencies: character.class_proficiencies,
      savingThrows: character.saving_throws,
      spellCasting: character.spellcasting
    }
    // const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(this.baseUrl + "/view", body);
  }

  saveCharacter(character: FullCharacter): Observable<any> {
    const body = {
      playerId: character.playerId,
      characterName: character.characterName,
      partyId: character.partyId,
      level:character.level,
      experience:character.experience,
      alignment:character.alignment,
      startingWeapon:character.startingWeapon,
      startingArmour:character.startingArmour,
      startingGear:character.startingGear,
      startingTrinket:character.startingTrinket,
      numberOfHitDice:character.numberOfHitDice,
      
      race: character.race,
      speed: character.speed,
      abilityScore: character.abilityScore,
      abilityBonus: character.abilityBonus,
      size: character.size,
      proficiency: character.proficiency,
      weaponProficiencies: character.weaponProficiencies,
      languages: character.languages,
      traits: character.traits,
      charClass: character.charClass,
      hitDice: character.hitDie,
      hitPoints: character.hitPoints,
      classSkills: character.classSkills,
      classProficiencies: character.classProficiencies,
      savingThrows: character.savingThrows,
      spellCasting: character.spellcasting,

      strength: character.strength,
      strengthModifier: character.strengthModifier,
      dexterity: character.dexterity,
      dexterityModifier: character.dexterityModifier,
      constitution: character.constitution,
      constitutionModifier: character.constitutionModifier,
      intelligence: character.intelligence,
      intelligenceModifier: character.intelligenceModifier,
      wisdom: character.wisdom,
      wisdomModifier: character.wisdomModifier,
      charisma: character.charisma,
      charismaModifier: character.charismaModifier,
      armourClass: character.armourClass
    }
    // const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(this.baseUrl + "/save", body);
  }
}

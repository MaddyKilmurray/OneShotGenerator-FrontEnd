import { CharacterDetail } from './../models/characterDetail.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  readonly gatewayUrl: string = "http://localhost:8000/api/create"
  readonly baseUrl: string = "http://localhost:8000/api/create";

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
}

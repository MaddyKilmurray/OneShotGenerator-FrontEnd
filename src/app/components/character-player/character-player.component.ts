import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DndApiService } from './../../service/dnd-api.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RaceListResponse } from 'src/app/models/raceList';
import { ClassListResponse } from 'src/app/models/classList';

@Component({
  selector: 'app-character-player',
  templateUrl: './character-player.component.html',
  styleUrls: ['./character-player.component.css']
})
export class CharacterPlayerComponent implements OnInit {

  @Input() importPartyId!: number;

  showCustomView:boolean;
  showRandomView:boolean;

  races: string[];
  classes: string[];

  characterForm: FormGroup;
  characterName: FormControl;
  partyId: FormControl;

  constructor(private router:Router, private dndService:DndApiService) {
    this.showCustomView=false;
    this.showRandomView=false;
    this.races = [];
    this.classes = [];

    this.characterName = new FormControl('',[Validators.required]);
    this.partyId = new FormControl(this.importPartyId,[Validators.required, Validators.minLength(6)]);

    this.characterForm = new FormGroup ({
      characterName:this.characterName,
      partyId:this.partyId
    })
  }

  ngOnInit(): void {
    this.generateRaceList();
    this.generateClassList();
  }

  // Replace math.random()
  randomClass(): string {
    var randomClassNumber = Math.floor(Math.random() * this.classes.length);
    return this.classes[1];
  }

  randomRace(): string {
    // var randomRaceNumber = Math.floor(Math.random() * this.races.length);
    return this.races[1];
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

}

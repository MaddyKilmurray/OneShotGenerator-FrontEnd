import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-dm',
  templateUrl: './character-dm.component.html',
  styleUrls: ['./character-dm.component.css']
})
export class CharacterDmComponent implements OnInit {

  partyForm:FormGroup;
  partyId:FormControl;

  constructor() { 
    this.partyId = new FormControl('',[Validators.required]);

    this.partyForm = new FormGroup({
      partyId:this.partyId
    })
  }

  ngOnInit(): void {
  }

  // writes partyID to DM user profile
  onSubmit() : void {
  }

}

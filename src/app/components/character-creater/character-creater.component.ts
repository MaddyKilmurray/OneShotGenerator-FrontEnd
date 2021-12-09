import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-creater',
  templateUrl: './character-creater.component.html',
  styleUrls: ['./character-creater.component.css']
})
export class CharacterCreaterComponent implements OnInit {

  showDM:boolean;

  constructor() {
    this.showDM = false;
  }

  ngOnInit(): void {
    this.showDM = false;
  }

  switchDM(): void {
    this.showDM = !this.showDM;
  }

}

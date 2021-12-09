import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCreaterComponent } from './character-creater.component';

describe('CharacterCreaterComponent', () => {
  let component: CharacterCreaterComponent;
  let fixture: ComponentFixture<CharacterCreaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterCreaterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterCreaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterPlayerComponent } from './character-player.component';

describe('CharacterPlayerComponent', () => {
  let component: CharacterPlayerComponent;
  let fixture: ComponentFixture<CharacterPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterPlayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterDmComponent } from './character-dm.component';

describe('CharacterDmComponent', () => {
  let component: CharacterDmComponent;
  let fixture: ComponentFixture<CharacterDmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterDmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterDmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

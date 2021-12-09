import { TestBed } from '@angular/core/testing';

import { RandomiserService } from './randomiser.service';

describe('RandomiserService', () => {
  let service: RandomiserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomiserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { BladesCharacterService } from './blades-character.service';

describe('CharacterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BladesCharacterService = TestBed.get(BladesCharacterService);
    expect(service).toBeTruthy();
  });
});

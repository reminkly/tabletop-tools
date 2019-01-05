import { TestBed } from '@angular/core/testing';

import { BladesJsonService } from './blades-json.service';

describe('PregenServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BladesJsonService = TestBed.get(BladesJsonService);
    expect(service).toBeTruthy();
  });
});

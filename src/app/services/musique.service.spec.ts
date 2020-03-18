import { TestBed } from '@angular/core/testing';

import { MusiqueService } from './musique.service';

describe('MusiqueService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MusiqueService = TestBed.get(MusiqueService);
    expect(service).toBeTruthy();
  });
});

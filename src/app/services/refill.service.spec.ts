import { TestBed } from '@angular/core/testing';

import { RefillService } from './refill.service';

describe('RefillService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RefillService = TestBed.get(RefillService);
    expect(service).toBeTruthy();
  });
});

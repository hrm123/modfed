import { TestBed } from '@angular/core/testing';

import { CrudsvcService } from './crudsvc.service';

describe('CrudsvcService', () => {
  let service: CrudsvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudsvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

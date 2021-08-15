import { TestBed } from '@angular/core/testing';

import { DatamediatorService } from './datamediator.service';

describe('DatamediatorService', () => {
  let service: DatamediatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatamediatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { SetCatchService } from './set-catch.service';

describe('SetCatchService', () => {
  let service: SetCatchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetCatchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

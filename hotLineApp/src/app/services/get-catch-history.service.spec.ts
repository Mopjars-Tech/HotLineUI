import { TestBed } from '@angular/core/testing';

import { GetCatchHistoryService } from './get-catch-history.service';

describe('GetCatchHistoryService', () => {
  let service: GetCatchHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetCatchHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

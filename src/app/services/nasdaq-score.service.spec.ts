import { TestBed } from '@angular/core/testing';

import { NasdaqScoreService } from './nasdaq-score.service';

describe('NasdaqScoreService', () => {
  let service: NasdaqScoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NasdaqScoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

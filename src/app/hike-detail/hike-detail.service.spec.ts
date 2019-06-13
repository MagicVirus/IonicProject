import { TestBed } from '@angular/core/testing';

import { HikeDetailService } from './hike-detail.service';

describe('HikeDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HikeDetailService = TestBed.get(HikeDetailService);
    expect(service).toBeTruthy();
  });
});

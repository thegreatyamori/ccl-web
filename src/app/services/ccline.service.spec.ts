import { TestBed } from '@angular/core/testing';

import { CclineService } from './ccline.service';

describe('CclineService', () => {
  let service: CclineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CclineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

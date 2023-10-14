import { TestBed } from '@angular/core/testing';

import { ApiBdService } from './api-bd.service';

describe('ApiBdService', () => {
  let service: ApiBdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiBdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

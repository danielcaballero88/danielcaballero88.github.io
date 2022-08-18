import { TestBed } from '@angular/core/testing';

import { SvgIconServiceService } from './svg-icon-service.service';

describe('SvgIconServiceService', () => {
  let service: SvgIconServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SvgIconServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

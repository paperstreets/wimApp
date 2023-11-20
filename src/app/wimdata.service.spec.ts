import { TestBed } from '@angular/core/testing';

import { WimDataService } from './wimdata.service';

describe('WimdataService', () => {
  let service: WimDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WimDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should initialize WimDataService', () => {
    expect(service).toBeDefined();
  });
});
